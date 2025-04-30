// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/#publications";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/#service";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/cv/CV_NingnaWang.pdf";
          },
        },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-github-metadata",
        
          title: "a post with github metadata",
        
        description: "a quick run down on accessing github metadata.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/github-metadata/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-paper-conditionally-accepted-to-siggraph-asia-2022",
          title: 'One paper conditionally accepted to SIGGRAPH Asia 2022.',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-reviewer-for-ieee-transactions-on-visualization-and-computer-graphics",
          title: 'I am serving as a reviewer for IEEE Transactions on Visualization and Computer...',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-computing-medial-axis-transform-with-feature-preservation-via-restricted-power-diagram-at-the-siggraph-asia-2022",
          title: 'I will be presenting “Computing Medial Axis Transform with Feature Preservation via Restricted...',
          description: "",
          section: "News",},{id: "news-one-paper-conditionally-accepted-to-siggraph-2023-sparkles-smile",
          title: 'One paper conditionally accepted to SIGGRAPH 2023. :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-reviewer-for-pacific-graphics-ipc",
          title: 'I am serving as a reviewer for Pacific Graphics IPC.',
          description: "",
          section: "News",},{id: "news-our-paper-globally-consistent-normal-orientation-for-point-clouds-by-regularizing-the-winding-number-field-wins-the-siggraph-2023-technical-papers-best-paper-award-trophy",
          title: 'Our paper “Globally Consistent Normal Orientation for Point Clouds by Regularizing the Winding-number...',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-acm-multimedia-2023-29-3-acceptance-rate",
          title: 'One paper accepted to ACM Multimedia 2023 (29.3% acceptance rate).',
          description: "",
          section: "News",},{id: "news-i-m-visiting-vcc-lab-as-research-intern-in-shenzhen-university-under-the-supervision-of-prof-hui-huang",
          title: 'I’m visiting VCC lab as Research Intern in Shenzhen University under the supervision...',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-reviewer-for-international-conference-on-geometric-modeling-and-processing-gmp-2024-and-graphical-models-2024",
          title: 'I am serving as a reviewer for International Conference on Geometric Modeling and...',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-reviewer-for-siggraph-2024",
          title: 'I am serving as a reviewer for SIGGRAPH 2024.',
          description: "",
          section: "News",},{id: "news-one-paper-conditionally-accepted-to-siggraph-2024",
          title: 'One paper conditionally accepted to SIGGRAPH 2024.',
          description: "",
          section: "News",},{id: "news-our-supervised-team-of-high-school-students-received-the-1st-prize-cast-star-award-in-cast-stem-bridge-summer-camp-2024-click-here-for-details",
          title: 'Our Supervised Team of High School Students Received the 1st Prize CAST STAR...',
          description: "",
          section: "News",},{id: "news-two-papers-conditionally-accepted-to-siggraph-asia-2024-sparkles-smile",
          title: 'Two papers conditionally accepted to SIGGRAPH Asia 2024 :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-program-committee-for-international-conference-on-computational-visual-media-cvm-2025",
          title: 'I am serving as a Program Committee for International Conference on Computational Visual...',
          description: "",
          section: "News",},{id: "news-i-received-the-betty-and-gifford-johnson-travel-awards",
          title: 'I received the Betty and Gifford Johnson Travel Awards.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-cvpr-2025-another-paper-accepted-to-journal-computer-aided-geometric-design",
          title: 'One paper accepted to CVPR 2025, another paper accepted to journal Computer Aided...',
          description: "",
          section: "News",},{id: "news-one-paper-conditionally-accepted-to-siggraph-2025-sparkles-smile",
          title: 'One paper conditionally accepted to SIGGRAPH 2025 :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-our-paper-texhoi-reconstructing-textures-of-3d-unknown-objects-in-monocular-hand-object-interaction-scenes-wins-the-cvm-2025-best-paper-award",
          title: 'Our paper “TexHOI: Reconstructing Textures of 3D Unknown Objects in Monocular Hand-Object Interaction...',
          description: "",
          section: "News",},{id: "news-our-paper-accepted-to-ieee-transactions-on-visualization-and-computer-graphics-tvcg",
          title: 'Our paper accepted to IEEE Transactions on Visualization and Computer Graphics (TVCG).',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/ninnnnnglala.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%69%6E%67%6E%61%6C%61%6C%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ningnawang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ningna-wang-53aa1683", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gyRrX3gAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ninnnnnglala", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
