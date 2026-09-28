// Animated Voronoi diagram behind the page, visible in the empty side margins.
// Sites drift slowly, clicking the bare background adds a site there, and the
// navbar button (#voronoi-toggle) cycles move -> pause -> clear. Cells are the
// dual of the Delaunay triangulation, recomputed every frame with d3-delaunay.
(function () {
  const canvas = document.getElementById("voronoi-bg");
  const main = document.querySelector('[role="main"]'); // the text column
  if (!canvas || !main || !window.d3 || !d3.Delaunay) return;

  const ctx = canvas.getContext("2d");
  const toggle = document.getElementById("voronoi-toggle");
  const hint = document.getElementById("voronoi-hint");

  const SPACING = 170; // average distance between neighboring sites, px
  const MARGIN = 80; // sites may drift this far outside the viewport, px
  const MIN_SPEED = 6; // drift speed range, px/s
  const MAX_SPEED = 16;
  const WANDER = 1.2; // how quickly a site's heading wanders, rad/sqrt(s)
  const FADE = 120; // max width of the fade next to the text column, px
  const SITE_RADIUS = 2;
  const MAX_SITES = 600; // clicking past this drops the oldest site
  const POP_MS = 600; // grow-in animation of a clicked site
  const STATES = ["move", "pause", "clear"]; // in the navbar button's click order
  const STORAGE_KEY = "voronoi-background";

  let width = 0;
  let height = 0;
  let dpr = 1;
  let sites = [];
  let points = null; // flat [x0, y0, x1, y1, ...] shared with d3-delaunay
  let voronoi = null;
  let fade = null;
  let colors = {};
  let active = false; // false while the canvas is hidden (narrow screens, "clear")
  let state = "move";
  let moving = true;
  let frameId = 0;
  let lastTime = 0;
  let lastBorn = -Infinity;

  function makeSite(x, y, born) {
    return {
      x: x,
      y: y,
      heading: Math.random() * 2 * Math.PI,
      speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
      born: born, // 0 for the initial sites
    };
  }

  function fillToDensity() {
    const w = width + 2 * MARGIN;
    const h = height + 2 * MARGIN;
    const target = Math.round((w * h) / (SPACING * SPACING));
    while (sites.length < target) {
      sites.push(makeSite(Math.random() * w - MARGIN, Math.random() * h - MARGIN, 0));
    }
  }

  // Wander: a random walk on the heading, reflecting off the enlarged viewport.
  function step(dt) {
    const turn = WANDER * Math.sqrt(dt);
    const x0 = -MARGIN;
    const y0 = -MARGIN;
    const x1 = width + MARGIN;
    const y1 = height + MARGIN;
    for (const s of sites) {
      s.heading += (Math.random() * 2 - 1) * turn;
      s.x += Math.cos(s.heading) * s.speed * dt;
      s.y += Math.sin(s.heading) * s.speed * dt;
      if (s.x < x0 || s.x > x1) {
        s.x = s.x < x0 ? 2 * x0 - s.x : 2 * x1 - s.x;
        s.heading = Math.PI - s.heading;
      }
      if (s.y < y0 || s.y > y1) {
        s.y = s.y < y0 ? 2 * y0 - s.y : 2 * y1 - s.y;
        s.heading = -s.heading;
      }
    }
  }

  function writePoints() {
    for (let i = 0; i < sites.length; i++) {
      points[2 * i] = sites[i].x;
      points[2 * i + 1] = sites[i].y;
    }
  }

  // Needed whenever the number of sites or the bounds change; otherwise
  // voronoi.update() reuses the buffers.
  function rebuild() {
    points = new Float64Array(sites.length * 2);
    writePoints();
    voronoi = new d3.Delaunay(points).voronoi([-MARGIN, -MARGIN, width + MARGIN, height + MARGIN]);
  }

  // The diagram stays out of the text column and fades out as it approaches it.
  function measureFade() {
    const rect = main.getBoundingClientRect();
    const band = Math.max(1, Math.min(FADE, rect.left * 0.6));
    const x0 = rect.left - band;
    const x1 = rect.right + band;
    const edge = band / (x1 - x0);
    const gradient = ctx.createLinearGradient(x0, 0, x1, 0);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(edge, "#000");
    gradient.addColorStop(1 - edge, "#000");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    fade = { gradient: gradient, left: rect.left, right: rect.right, band: band };
  }

  // How visible the diagram is at x: 1 in the margins, 0 behind the text.
  function visibility(x) {
    if (x < fade.left) return Math.min((fade.left - x) / fade.band, 1);
    if (x > fade.right) return Math.min((x - fade.right) / fade.band, 1);
    return 0;
  }

  function readColors() {
    const style = getComputedStyle(document.documentElement);
    colors.site = style.getPropertyValue("--global-voronoi-site-color").trim();
    colors.edge = style.getPropertyValue("--global-voronoi-edge-color").trim();
  }

  function draw(now) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.save();
    // Only the side margins are ever visible, so nothing is painted (or needs
    // clearing) behind the text column.
    ctx.beginPath();
    ctx.rect(0, 0, fade.left, height);
    ctx.rect(fade.right, 0, width - fade.right, height);
    ctx.clip();
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    voronoi.render(ctx);
    ctx.lineWidth = 1;
    ctx.strokeStyle = colors.edge;
    ctx.stroke();

    ctx.beginPath();
    for (const s of sites) {
      // Clicked sites start at 3x the radius and ease back down.
      const t = s.born ? 1 - Math.min(Math.max((now - s.born) / POP_MS, 0), 1) : 0;
      const r = SITE_RADIUS * (1 + 2 * t * t);
      ctx.moveTo(s.x + r, s.y);
      ctx.arc(s.x, s.y, r, 0, 2 * Math.PI);
    }
    ctx.fillStyle = colors.site;
    ctx.fill();

    // Soften the edge next to the text column.
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = fade.gradient;
    ctx.fillRect(fade.left - fade.band, 0, fade.right - fade.left + 2 * fade.band, height);
    ctx.restore();
  }

  function frame(now) {
    frameId = 0;
    if (moving) {
      step(Math.min(Math.max((now - lastTime) / 1000, 0), 0.1));
      writePoints();
      voronoi.update();
    }
    lastTime = now;
    draw(now);
    if (moving || now - lastBorn < POP_MS) schedule();
  }

  function schedule() {
    if (active && !frameId) frameId = requestAnimationFrame(frame);
  }

  function resize() {
    active = getComputedStyle(canvas).display !== "none";
    if (!active) {
      cancelAnimationFrame(frameId);
      frameId = 0;
      if (hint) hint.style.opacity = "0";
      return;
    }
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    if (width && height) {
      // Stretch the existing sites over the new viewport rather than re-seeding.
      const sx = (w + 2 * MARGIN) / (width + 2 * MARGIN);
      const sy = (h + 2 * MARGIN) / (height + 2 * MARGIN);
      for (const s of sites) {
        s.x = (s.x + MARGIN) * sx - MARGIN;
        s.y = (s.y + MARGIN) * sy - MARGIN;
      }
    }
    width = w;
    height = h;
    fillToDensity();
    measureFade();
    rebuild();
    draw(performance.now());
    schedule();
  }

  function addSite(x, y) {
    if (sites.length >= MAX_SITES) sites.shift();
    lastBorn = performance.now();
    sites.push(makeSite(x, y, lastBorn));
    rebuild();
    schedule();
  }

  // Only clicks on the bare page background count, so links, buttons, text,
  // the navbar and overlays keep working as usual.
  function clickable(e) {
    return active && (e.target === document.body || e.target === document.documentElement) && visibility(e.clientX) >= 0.25;
  }

  document.addEventListener("click", function (e) {
    if (e.button === 0 && clickable(e)) addSite(e.clientX, e.clientY);
  });

  // The "click" label follows the mouse wherever a click would add a site
  // (only on devices with a mouse).
  if (hint && window.matchMedia("(hover: hover)").matches) {
    document.addEventListener("mousemove", function (e) {
      const on = clickable(e);
      hint.style.opacity = on ? "1" : "0";
      if (!on) return;
      // below-right of the pointer, or below-left near the right edge
      const w = hint.offsetWidth;
      const x = e.clientX + 14 + w < width ? e.clientX + 14 : e.clientX - 10 - w;
      hint.style.transform = `translate(${x}px, ${e.clientY + 18}px)`;
    });
    document.documentElement.addEventListener("mouseleave", function () {
      hint.style.opacity = "0";
    });
  }

  // The navbar button shows one icon per state (styled off data-state), and
  // "clear" hides the canvas altogether.
  function setState(next) {
    state = next;
    moving = state === "move";
    canvas.hidden = state === "clear";
    if (toggle) toggle.dataset.state = state;
  }

  // Motion defaults to off for visitors who ask their OS for reduced motion;
  // an explicit choice made with the navbar button is remembered.
  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  setState(STATES.includes(saved) ? saved : reduceMotion ? "pause" : "move");

  if (toggle) {
    toggle.addEventListener("click", function () {
      setState(STATES[(STATES.indexOf(state) + 1) % STATES.length]);
      try {
        localStorage.setItem(STORAGE_KEY, state);
      } catch (e) {}
      resize(); // re-checks whether the canvas is shown, then redraws and (re)starts the loop
    });
  }

  // Follow the light/dark theme switch (theme.js sets data-theme on <html>).
  new MutationObserver(function () {
    readColors();
    if (active) draw(performance.now());
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  readColors();
  window.addEventListener("resize", resize);
  resize();
})();
