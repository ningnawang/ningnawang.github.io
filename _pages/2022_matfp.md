---
layout: page
title: 
permalink: /projects/2022_matfp/
description: 
nav: false
nav_order: 2
horizontal: false
category: work
# display_categories: [work, fun]
---

<div class="research" align="center">
    <h1>Computing Medial Axis Transform with Feature Preservation via Restricted Power Diagram </h1>
    <h4>ACM Transactions on Graphics (SIGGRAPH Asia 2022)</h4>
    <div class="col-sm-8">
        <div>
            <h6><a href="https://ningnawang.github.io/">Ningna Wang, </a> University of Texas at Dallas</h6>
            <h6><a href="https://binwangthss.github.io/">Bin Wang, </a> Tsinghua University </h6>
            <h6><a href="https://engineering.tamu.edu/cse/profiles/Wang-Wenping.html">Wenping Wang, </a> Texas A&M University </h6>
            <h6><a href="https://personal.utdallas.edu/~xguo/">Xiaohu Guo, </a> University of Texas at Dallas</h6>
        </div>
    </div>
    <p><img src="/assets/img/2022_matfp/teaser.png" width=800></p>
    <div class="col-sm-12">
        <a href="https://arxiv.org/abs/2210.13676" class="btn btn-sm z-depth-0" role="button">ArXiv</a>
        <a href="assets/pdf/2022_matfp/2022_siga_matfp_sup.pdf" class="btn btn-sm z-depth-0" role="button"> Supplement (pdf)</a>
        <a href="https://youtu.be/0kP_EMtER-w" class="btn btn-sm z-depth-0" role="button"> Presentation (9min)</a>
        <a href="https://youtu.be/O1GLUCxSmac" class="btn btn-sm z-depth-0" role="button"> Results (12min)</a>
        <a href="https://github.com/ningnawang/matfp" class="btn btn-sm z-depth-0" role="button">Code</a>
    </div>
</div>

<div class="research">
<h2>Abstract</h2>
We propose a novel framework for computing the medial axis transform of 3D shapes while preserving their medial features via restricted power diagram (RPD). Medial features, including external features such as the sharp edges and corners of the input mesh surface and internal features such as the seams and junctions of medial axis, are important shape descriptors both topologically and geometrically. However, existing medial axis approximation methods fail to capture and preserve them due to the fundamentally under-sampling in the vicinity of medial features, and the difficulty to build their correct connections. In this paper we use the RPD of medial spheres and its affiliated structures to help solve these challenges. The dual structure of RPD provides the connectivity of medial spheres. The surface restricted power cell (RPC) of each medial sphere provides the tangential surface regions that these spheres have contact with. The connected components (CC) of surface RPC give us the classification of each sphere, to be on a medial sheet, a seam, or a junction. They allow us to detect insufficient sphere sampling around medial features and develop necessary conditions to preserve them. Using this RPD-based framework, we are able to construct high quality medial meshes with features preserved. Compared with existing sampling-based or voxel-based methods, our method is the first one that can preserve not only external features but also internal features of medial axes. 
</div>

<div class="research">
<h2>Pipeline</h2>
<p style="text-align: center;"><img src="/assets/img/2022_matfp/overview.png" width=750></p>
Given a closed manifold 3D mesh surface (a) with sharp edges and corners pre-detected (marked in black lines), the initial medial spheres (b) are generated including zero-radius spheres (shown as red points) placed on convex sharp features and inner Voronoi balls (shown as blue spheres) of surface samples, as described in Sec. 4.1. Inner Voronoi balls protrudes from the surface are then updated and pushed to be tangential to the surface (c), as described in Sec. 4.2. An initial medial mesh (d) is then constructed based on RRT, and internal features (shown as red lines) are selected using a seam tracing algorithm, as described in Sec. 4.3. A refined medial mesh (d) with higher quality can be obtained from feature preservation strategies and a thinning process, as described in Sec. 4.4.
</div>


<br>
<!-- <iframe align="center" width="750" height="600" src="https://youtu.be/0kP_EMtER-w"> </iframe> -->
<iframe align="center" width="750" height="600" src="https://www.youtube.com/embed/0kP_EMtER-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="research" >
<h2>Citation</h2>
<pre class="project__bibtex">
@article{wang2022matfp,
    title={Computing medial axis transform with feature preservation via restricted power diagram},
    author={Wang, Ningna and Wang, Bin and Wang, Wenping and Guo, Xiaohu},
    journal={ACM Transactions on Graphics (Proc. SIGGRAPH Asia)},
    volume={41},
    number={6},
    pages={1--18},
    year={2022},
    publisher={ACM New York, NY, USA}
}
</pre>
</div>