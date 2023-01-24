---
layout: page
title: 
permalink: /projects/matfp/
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
            <h6><a href="https://scholar.google.com/citations?user=28shvv0AAAAJ&hl=en">Wenping Wang, </a> Texas A&M University </h6>
            <h6><a href="https://personal.utdallas.edu/~xguo/">Xiaohu Guo, </a> University of Texas at Dallas</h6>
        </div>
    </div>
    <p><img src="/assets/img/matfp/teaser.png" width=800></p>
    <div class="col-sm-12">
        <a href="https://personal.utdallas.edu/~xguo/SA2022.pdf" class="btn btn-sm z-depth-0" role="button">pdf (39MB)</a>
        <a href="https://ningnawang.github.io/projects/matfp/" class="btn btn-sm z-depth-0" role="button">website</a>
        <a href="https://arxiv.org/abs/2210.13676" class="btn btn-sm z-depth-0" role="button">arXiv</a>
        <a href="https://personal.utdallas.edu/~xguo/SA2022_Supplement.pdf" class="btn btn-sm z-depth-0" role="button"> supplement</a>
        <a href="https://www.youtube.com/watch?v=O1GLUCxSmac&feature=youtu.be&ab_channel=XiaohuGuo" class="btn btn-sm z-depth-0" role="button"> video (12min)</a>
        <a href="https://github.com/ningnawang/matfp" class="btn btn-sm z-depth-0" role="button">Code</a>
    </div>
</div>

<div class="research">
<h2>Abstract</h2>
We propose a novel framework for computing the medial axis transform of 3D shapes while preserving their medial features via restricted power diagram (RPD). Medial features, including external features such as the sharp edges and corners of the input mesh surface and internal features such as the seams and junctions of medial axis, are important shape descriptors both topologically and geometrically. However, existing medial axis approximation methods fail to capture and preserve them due to the fundamentally under-sampling in the vicinity of medial features, and the difficulty to build their correct connections. In this paper we use the RPD of medial spheres and its affiliated structures to help solve these challenges. The dual structure of RPD provides the connectivity of medial spheres. The surface restricted power cell (RPC) of each medial sphere provides the tangential surface regions that these spheres have contact with. The connected components (CC) of surface RPC give us the classification of each sphere, to be on a medial sheet, a seam, or a junction. They allow us to detect insufficient sphere sampling around medial features and develop necessary conditions to preserve them. Using this RPD-based framework, we are able to construct high quality medial meshes with features preserved. Compared with existing sampling-based or voxel-based methods, our method is the first one that can preserve not only external features but also internal features of medial axes. 
</div>

<br>
<iframe align="center" width="750" height="600" src="https://www.youtube.com/embed/O1GLUCxSmac"> </iframe>
