---
layout: page
title: 
permalink: /projects/2024_mattopo/
description: 
nav: false
nav_order: 3
horizontal: false
category: work
# display_categories: [work, fun]
---

<div class="research" align="center">
    <h1>MATTopo: Topology-preserving Medial Axis Transform with Restricted Power Diagram</h1>
    <h4>accepted to ACM Transactions on Graphics (SIGGRAPH Asia 2024)</h4>
    <div class="col-sm-8">
        <div>
            <h6><a href="https://ningnawang.github.io/">Ningna Wang, </a> University of Texas at Dallas</h6>
            <h6><a href="https://vcc.tech/~huihuang/home">Hui Huang, </a> Shenzhen University </h6>
            <h6>Shibo Song, Independent Researcher </h6>
            <h6><a href="https://binwangthss.github.io/">Bin Wang, </a> Tsinghua University </h6>
            <h6><a href="https://engineering.tamu.edu/cse/profiles/Wang-Wenping.html">Wenping Wang, </a> Texas A&M University </h6>
            <h6><a href="https://personal.utdallas.edu/~xguo/">Xiaohu Guo, </a> University of Texas at Dallas</h6>
        </div>
    </div>
     <div class="col-sm-12">
        <a href="https://arxiv.org/abs/2403.18761" class="btn btn-sm z-depth-0" role="button">ArXiv</a>
        <a href="/assets/pdf/2024_mattopo/2024_siga_mattopo_sup.pdf" class="btn btn-sm z-depth-0" role="button"> Supplement (pdf)</a>
        <!-- <a href="#" class="btn btn-sm z-depth-0" role="button"> Presentation (9min)</a> -->
        <!-- <a href="#" class="btn btn-sm z-depth-0" role="button"> Results (12min)</a> -->
        <a href="#" class="btn btn-sm z-depth-0" role="button">Code (coming soon)</a>
        <a href="#" class="btn btn-sm z-depth-0" role="button">Video (coming soon)</a>
    </div>
    <p><img src="/assets/img/2024_mattopo/teaser_vcc5.png" width=770></p>
    <div class="caption">
        A gallery of our topology-preserving 3D medial axis results. The input shapes are shown in transparency, while the computed medial axis are shown in blue (left) and brown (right) colors. The left side displays the medial axis computed on CAD models, and the right side shows those on organic models.
    </div>
   
</div>

<div class="research">
<h2>Abstract</h2>
We present a novel topology-preserving 3D medial axis computation framework based on volumetric restricted power diagram (RPD), while preserving the medial features and geometric convergence simultaneously, for both 3D CAD and organic shapes. The volumetric RPD discretizes the input 3D volume into sub-regions given a set of medial spheres. With this intermediate structure, we convert the homotopy equivalency between the generated medial mesh and the input 3D shape into a localized contractibility checking for each restricted element (power cell, power face, power edge), by checking their connected components and Euler characteristics. We further propose a fractional Euler characteristic algorithm for efficient GPU-based computation of Euler characteristic for each restricted element on the fly while computing the volumetric RPD. Compared with existing voxel-based or point-cloud-based methods, our approach is the first to adaptively and directly revise the medial mesh without globally modifying the dependent structure, such as voxel size or sampling density, while preserving its topology and medial features. In comparison with the feature preservation method MATFP, our method provides geometrically comparable results with fewer spheres and more robustly captures the topology of the input 3D shape.
</div>

<!-- <div class="research" style="text-align: center;">
    <p><img src="/assets/img/2024_mattopo/backgound.gif" width=770></p>
</div> -->

<div class="research" style="text-align: center;">
<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html width="770" path="/assets/img/2024_mattopo/backgound.gif" title="background" class="rounded z-depth-1" %}
    </div>
</div>
</div>

<div class="research">
<h2>Pipeline</h2>
<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
    <!-- <p><img src="/assets/img/2024_mattopo/pipeline_new2.png" width=770></p> -->
        {% include figure.html width="770" path="/assets/img/2024_mattopo/pipeline_new2.png" title="pipeline" class="rounded z-depth-1" caption="Given a tetrahedral mesh with surface features (sharp edges and corners) pre-detected as input, our method starts with an initial medial mesh of a small number of spheres (i.e., 2 spheres) using the <i>sphere-shrinking</i> algorithm [Ma et al. 2012], shown in (a). Then the homotopy equivalence of the generated medial mesh w.r.t. the input shape is preserved by examining the topological equivalence of individual RPCs (Section 4.1) shown in (b). We preserve the <i>medial features</i> using the same method as MATFP [Wang et al. 2022] (Section 4.2), shown in (c). Finally we preserve the geometric convergence based on a user-defined error threshold (Section 4.3), shown in (d). We repeat this process until both topological preservation and geometric convergence are satisfied, and output the final result of generated medial mesh, shown in (e)." %}
    </div>
</div>
</div>

<div class="research">
<h2>Topological Comparison</h2>
<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html width="500" path="/assets/img/2024_mattopo/comp_topo.png" title="comp_topo" class="rounded z-depth-1" caption="Qualitative comparison of topology preservation between our method and MATFP [Wang et al. 2022], PC [Amenta et al. 2001], SAT [Miklos et al. 2010], and VC [Yan et al. 2018]. The ground truth Euler characteristic X is shown in (a), and #𝑠 represents the number of medial spheres generated." %}
    </div>
</div>
</div>



<div class="research">
<h2>More Results</h2>
<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html width="770" path="/assets/img/2024_mattopo/comp_others.png" title="comp_others" class="rounded z-depth-1" caption="Visualization of models shown in Table 2, with their model ID and Euler characteristic X. From left to right are the input tetrahedral meshes, the generated medial meshes, the surfaces reconstructed from our medial meshes, and the extracted medial features. For the medial features, the black curves are the external features and the red curves are the internal features." %}
    </div>
</div>
</div>


<div class="research" >
<h2>Citation</h2>
<pre class="project__bibtex">
@article{wang2024mattopo,
    title = {MATTopo: Topology-preserving Medial Axis Transform with Restricted Power Diagram},
    author={Wang, Ningna and Huang, Hui and Song, Shibo and Wang, Bin and Wang, Wenping and Guo, Xiaohu},
    year = {2024},
    journal = {to appear in ACM Transactions on Graphics (Proc. SIGGRAPH Asia)}
}
</pre>
</div>



<!-- 
<br>
<iframe align="center" width="750" height="600" src="#" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->



