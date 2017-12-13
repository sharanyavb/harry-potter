// SVG dimensions
var svgWidth = 2000;
var svgHeight = 1000;

// SVG area
var svg = d3
    .select("#svg-area")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform", "translate(350, 150)")

// Arthur Weasley
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2f6x2f6bx2fBsuivs-x78fbtmfz.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f471x3fdcx3d31231923293753x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 0)
    .attr("y", 0)

// Marriage between Arthur & Molly
svg
    .append("line")
    .attr("x1", 100)
    .attr("y1", 50)
    .attr("x2", 200)
    .attr("y2", 50)
    .attr("style", "stroke:rgb(255,0,0);stroke-width:2")

// Molly Weasley
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2fgx2fg0x2fIbssz_Qpuufs_x253928x2530.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f474x3fdcx3d31272220333768x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 200)
    .attr("y", 0)

// Line to connect Weasley parents to children
svg
    .append("line")
    .attr("x1", 150)
    .attr("y1", 50)
    .attr("x2", 150)
    .attr("y2", 150)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")

// Horizontal line for the Weasley children
svg
    .append("line")
    .attr("x1", -200)
    .attr("y1", 150)
    .attr("x2", 1200)
    .attr("y2", 150)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")

// Bill Weasley
svg
    .append("line")
    .attr("x1", -200)
    .attr("y1", 150)
    .attr("x2", -200)
    .attr("y2", 185)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2f6x2f63x2fEI2_Cjmm_Xfbtmfz_jo_ijt_x78feejoh_esftt_12.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f472x3fdcx3d31221313105346x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", -250)
    .attr("y", 185)

// Marriage between Bill & Fleur
svg
    .append("line")
    .attr("x1", -150)
    .attr("y1", 235)
    .attr("x2", -110)
    .attr("y2", 235)
    .attr("style", "stroke:rgb(255,0,0);stroke-width:2")

// Fleur Weasley
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2f4x2f4cx2fGmfvsEI.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f471x3fdcx3d31221339291513x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", -110)
    .attr("y", 185)

// Bill & Fleur's children
svg
    .append("line")
    .attr("x1", -130)
    .attr("y1", 235)
    .attr("x2", -130)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("line")
    .attr("x1", -200)
    .attr("y1", 320 )
    .attr("x2", 80)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")

// Victoire Weasley
svg
    .append("line")
    .attr("x1", -200)
    .attr("y1", 320)
    .attr("x2", -200)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/7/73/VictoireWeasley.png/revision/latest?cb=20170816213657")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", -250)
    .attr("y", 355)

// Dominique Weasley
svg
    .append("line")
    .attr("x1", -60)
    .attr("y1", 320)
    .attr("x2", -60)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/DominiqueWeasley.png/revision/latest?cb=20170816213827")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", -110)
    .attr("y", 355)

// Louis Weasley
svg
    .append("line")
    .attr("x1", 80)
    .attr("y1", 320)
    .attr("x2", 80)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/a/af/LouisWeasley.png/revision/latest?cb=20170816214033")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 30)
    .attr("y", 355)

// Charlie Weasley
svg
    .append("line")
    .attr("x1", 80)
    .attr("y1", 150)
    .attr("x2", 80)
    .attr("y2", 185)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/d/d0/Charlie_PM.jpg/revision/latest?cb=20170625194046")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 30)
    .attr("y", 185)

// Percy Weasley
svg
    .append("line")
    .attr("x1", 220)
    .attr("y1", 150)
    .attr("x2", 220)
    .attr("y2", 185)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/b/bc/Percy_WeasleyDH.jpg/revision/latest?cb=20160720032549")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 170)
    .attr("y", 185)

// Marriage between Percy & Audrey
svg
    .append("line")
    .attr("x1", 270)
    .attr("y1", 235)
    .attr("x2", 310)
    .attr("y2", 235)
    .attr("style", "stroke:rgb(255,0,0);stroke-width:2")

// Audrey Weasley
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/8/85/AudreyWeasley.png/revision/latest?cb=20170816214242")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 310)
    .attr("y", 185)

// Percy & Audrey's Children
svg
    .append("line")
    .attr("x1", 290)
    .attr("y1", 235)
    .attr("x2", 290)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("line")
    .attr("x1", 220)
    .attr("y1", 320)
    .attr("x2", 360)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")

// Molly Weasley II
svg
    .append("line")
    .attr("x1", 220)
    .attr("y1", 320)
    .attr("x2", 220)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/a/a7/MollyWeasleyII.png/revision/latest?cb=20170816212943")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 170)
    .attr("y", 355)

// Lucy Weasley
svg
    .append("line")
    .attr("x1", 360)
    .attr("y1", 320)
    .attr("x2", 360)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/5/50/LucyWeasley.png/revision/latest?cb=20170816213121")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 310)
    .attr("y", 355)

// Fred Weasley
svg
    .append("line")
    .attr("x1", 500)
    .attr("y1", 150)
    .attr("x2", 500)
    .attr("y2", 185)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2") 
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2f0x2f01x2fGsfe_IT_UEI_qspnp.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f471x3fdcx3d31272220346369x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 450)
    .attr("y", 185)

// George Weasley
svg
    .append("line")
    .attr("x1", 640)
    .attr("y1", 150)
    .attr("x2", 640)
    .attr("y2", 185)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2") 
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2f3x2f3bx2fHfpshf_IT_UEI_qspnp.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f471x3fdcx3d31272220346416x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 590)
    .attr("y", 185)

// Marriage between George & Angelina
svg
    .append("line")
    .attr("x1", 690)
    .attr("y1", 235)
    .attr("x2", 730)
    .attr("y2", 235)
    .attr("style", "stroke:rgb(255,0,0);stroke-width:2")

// Angelina Johnson
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/d/d7/Angeina_john.jpg/revision/latest?cb=20100522214321")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 730)
    .attr("y", 185)

// George & Angelina's children
svg
    .append("line")
    .attr("x1", 710)
    .attr("y1", 235)
    .attr("x2", 710)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("line")
    .attr("x1", 500)
    .attr("y1", 320)
    .attr("x2", 710)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")

// Fred Weasley II
svg
    .append("line")
    .attr("x1", 500)
    .attr("y1", 320)
    .attr("x2", 500)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/e/e6/FredWeasleyII.png/revision/latest?cb=20170816213329")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 450)
    .attr("y", 355)

// Roxanne Weasley
svg
    .append("line")
    .attr("x1", 640)
    .attr("y1", 320)
    .attr("x2", 640)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/6/69/RoxanneWeasley.png/revision/latest?cb=20170816213445")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 590)
    .attr("y", 355)


// Ron Weasley
svg
    .append("line")
    .attr("x1", 920)
    .attr("y1", 150)
    .attr("x2", 920)
    .attr("y2", 185)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2") 
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2fgx2fg5x2fEI2_Spo_Xfbtmfz_qspnp_13.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f471x3fdcx3d31221313106063x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 870)
    .attr("y", 185)

// Marriage between Ron & Hermione
svg
    .append("line")
    .attr("x1", 970)
    .attr("y1", 235)
    .attr("x2", 1010)
    .attr("y2", 235)
    .attr("style", "stroke:rgb(255,0,0);stroke-width:2")

// Hermione Granger
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2f5x2f5cx2fEI2_Ifsnjpof_Hsbohfs_jo_ifs_x78feejoh_esftt_12.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f473x3fdcx3d31221313105345x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 1010)
    .attr("y", 185)

// Ron & Hermione's children
svg
    .append("line")
    .attr("x1", 990)
    .attr("y1", 235)
    .attr("x2", 990)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("line")
    .attr("x1", 780)
    .attr("y1", 320)
    .attr("x2", 990)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")

// Rose Granger-Weasley
svg
    .append("line")
    .attr("x1", 780)
    .attr("y1", 320)
    .attr("x2", 780)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/6/61/Ro.png/revision/latest?cb=20160802143313")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 730)
    .attr("y", 355)

// Hugo Granger-Weasley
svg
    .append("line")
    .attr("x1", 920)
    .attr("y1", 320)
    .attr("x2", 920)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/6/63/Harry-potter-hugo.jpg/revision/latest?cb=20160712034020")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 870)
    .attr("y", 355)

// Ginny Weasley
svg
    .append("line")
    .attr("x1", 1200)
    .attr("y1", 150)
    .attr("x2", 1200)
    .attr("y2", 185)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2") 
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2f1x2f19x2fEI2_Hjooz_Xfbtmfz_qspnp_12.kqhx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f472x3fdcx3d31221313106064x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 1150)
    .attr("y", 185)

// Marriage between Ginny & Harry
svg
    .append("line")
    .attr("x1", 1250)
    .attr("y1", 235)
    .attr("x2", 1290)
    .attr("y2", 235)
    .attr("style", "stroke:rgb(255,0,0);stroke-width:2")

// Harry Potter
svg
    .append("image")
    .attr("href", "http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7ibsszqpuufs.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2fibsszqpuufsx2fjnbhftx2f0x2f0gx2fIbssz_Qpuufs_EI_qspnp_2.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f471x3fdcx3d31281221146619x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 1290)
    .attr("y", 185)

// Line from James & Lily to Harry
svg
    .append("line")
    .attr("x1", 1340)
    .attr("y1", 50)
    .attr("x2", 1340)
    .attr("y2", 185)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")

// James Potter
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/e/e5/1174922_1359538274196_full.jpg/revision/latest?cb=20170731052347")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 1190)
    .attr("y", 0)

// Marriage between James & Lily
svg
    .append("line")
    .attr("x1", 1290)
    .attr("y1", 50)
    .attr("x2", 1390)
    .attr("y2", 50)
    .attr("style", "stroke:rgb(255,0,0);stroke-width:2")

// Lily Potter
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/a/a9/Lily_DHP1.png/revision/latest?cb=20170731053435")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 1390)
    .attr("y", 0)

// Ginny & Harry's children
svg
    .append("line")
    .attr("x1", 1270)
    .attr("y1", 235)
    .attr("x2", 1270)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("line")
    .attr("x1", 1060)
    .attr("y1", 320)
    .attr("x2", 1340)
    .attr("y2", 320)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")

// James Potter II
svg
    .append("line")
    .attr("x1", 1060)
    .attr("y1", 320)
    .attr("x2", 1060)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/HPDH2-3922.jpg/revision/latest?cb=20141202001907")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 1010)
    .attr("y", 355)

// Albus Potter
svg
    .append("line")
    .attr("x1", 1200)
    .attr("y1", 320)
    .attr("x2", 1200)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/8/8a/Albus_Potter_%28HPCC%29.png/revision/latest?cb=20161122213127")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 1150)
    .attr("y", 355)

// Lily L. Potter
svg
    .append("line")
    .attr("x1", 1340)
    .attr("y1", 320)
    .attr("x2", 1340)
    .attr("y2", 355)
    .attr("style", "stroke:rgb(0,0,0);stroke-width:2")
svg
    .append("image")
    .attr("href", "https://vignette.wikia.nocookie.net/harrypotter/images/7/73/Lily_PotterDH2.png/revision/latest?cb=20120128171142")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 1290)
    .attr("y", 355)