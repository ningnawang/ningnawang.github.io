---
layout: page
title: 
permalink: /projects/2025_matstruct/
description: 
nav: false
nav_order: 3
horizontal: false
category: work
# display_categories: [work, fun]
---

<div class="research" align="center">
    <h1>MATStruct: High-Quality Medial Mesh Computation via Structure-aware Variational Optimization</h1>
    <h4>SIGGRAPH Asia 2025</h4>
    <div class="col-sm-8">
        <div>
            <h6><a href="https://ningnawang.github.io/">Ningna Wang, </a> University of Texas at Dallas</h6>
            <h6><a href="https://ruixu.me/">Rui Xu, </a> University of Hong Kong </h6>
            <h6><a href="https://bryceyin13.github.io/">Yibo Yin, </a> Wuhan University</h6>
            <h6><a href="https://zichunzhong.github.io/">Zichun Zhong, </a> Wayne State University </h6>
            <h6><a href="https://i.cs.hku.hk/~taku/">Taku Komura, </a> University of Hong Kong </h6>
            <h6><a href="https://engineering.tamu.edu/cse/profiles/Wang-Wenping.html">Wenping Wang, </a> Texas A&M University </h6>
            <h6><a href="https://personal.utdallas.edu/~xguo/">Xiaohu Guo, </a> University of Texas at Dallas</h6>
        </div>
    </div>
     <div class="col-sm-12">
        <a href="#" class="btn btn-sm z-depth-0" role="button">ArXiv (coming soon) </a>
        <a href="#" class="btn btn-sm z-depth-0" role="button">Code (coming soon) </a>
        <a href="#" class="btn btn-sm z-depth-0" role="button">Video (coming soon) </a>
    </div>
    <div class="caption">
        <p><img src="/assets/img/2025_matstruct/pipe2.png" width=800></p>
        The pipeline of our structure-aware medial axis transform framework. (a) Starting from a tetrahedral mesh with pre-detected convex sharp edges and corners (black curves), our method iteratively optimizes the medial mesh (b)(c)(d) with structure-awareness. The resulting medial structure includes  (e) medial sheets (slightly shrunk inward and rendered in randomly assigned colors) and (f) seams shown in red, and medial junctions shown as blue spheres. Our method is the first to produce clean medial structure representations (e)(f) compared to existing approaches. 
    </div>
   
</div>

<div class="research">
<h2>Abstract</h2>
We propose a novel optimization framework for computing the medial axis transform that simultaneously preserves the medial structure and ensures high medial mesh quality. The \textit{medial structure}, consisting of interconnected sheets, seams, and junctions, provides a natural volumetric decomposition of a 3D shape. Our method introduces a structure-aware, particle-based optimization pipeline guided by the restricted power diagram (RPD), which partitions the input volume into convex cells whose dual encodes the connectivity of the medial mesh. Structure-awareness is enforced through a spherical quadratic error metric (SQEM) projection that constrains the movement of medial spheres, while a Gaussian kernel energy encourages an even spatial distribution. Compared to feature-preserving methods such as MATFP [Wang et al. 2022] and MATTopo [Wang et al. 2024], our approach produces cleaner medial structures with significantly improved mesh quality. In contrast to voxel-based, point-cloud-based, and variational methods, our framework is the first to integrate structural awareness into the optimization process, yielding medial meshes with explicit structural decomposition, topological correctness, and geometric fidelity.
</div>






