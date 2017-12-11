data = [
        {label:"Harry Potter", value1:19, value2:200},
        {label:"Ginny Weasley", value1:5, value2:198},
        {label:"Hermione Granger", value1:40, value2:155},
        {label:"Ronald Weasley", value1:17, value2:100},
        {label:"Fred Weasley", value1:77, value2:143},
        {label:"George Weasley", value1:27, value2:143}
];

var div = d3.select("body").append("div").attr("class", "toolTip");
// axis margin will need to be variable based on how many timelines
var axisMargin = 160,
        margin = 40,
        value1Margin = 4,
        width = parseInt(d3.select('body').style('width'), 10),
        height = parseInt(d3.select('body').style('height'), 10),
        barHeight = (height-axisMargin-margin*10)* 0.4/data.length,
        barPadding = (height-axisMargin-margin*17)*0.6/data.length,
        data, bar, svg, scale, xAxis, labelWidth = 0;

max = d3.max(data, function(d) { return d.value2; });

svg = d3.select('body')
        .append("svg")
        .attr("width", width)
        .attr("height", height);

bar = svg.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        

bar.attr("class", "bar")
        .attr("cx", 0)
        .attr("transform", function(d, i) {
            return "translate(" + 205 + "," + (i * (barHeight + barPadding) + barPadding) + ")"
        });

bar.append("text")
        .attr("class", "label")
        .attr("y", barHeight / 2)
        .attr("dy", ".35em") //vertical align middle
        .text(function(d){
            return d.label;
        }).each(function() {
    labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
});

scale = d3.scaleLinear()
        .domain([0, max])
        .range([0, width - 160*2 - labelWidth]);

xAxis = d3.axisBottom()
        .scale(scale)
        // ticksize will be function that loops through books
        .tickSize(-height + 2*160 + axisMargin);

bar.append("rect")
        .attr("transform", function(d) {
            return "translate(" + (labelWidth + d.value1) + ",0)";
        })
        .attr("id", "currentBars")
        .attr("height", barHeight)
        .attr("width", function(d){
            return scale(d.value2) - scale(d.value1);
        });

// change this with image of character?
bar.append("text")
        .attr("class", "value1")
        .attr("y", barHeight / 2)
        .attr("dx", -value1Margin + labelWidth) //margin right
        .attr("dy", ".35em") //vertical align middle
        .attr("text-anchor", "end")

// change to buttons
bar
    .on("click", function(){
        // Determine if current line is visible
        var active   = currentBars.active ? false : true,
          newOpacity = active ? 0 : 1;
        // Hide or show the elements
        d3.selectAll("#currentBars").style("opacity", newOpacity);
        // Update whether or not the elements are active
        currentBars.active = active;
})

bar
        .on("mouseout", function(d){
            div.style("display", "none");
        });

svg.insert("g",":first-child")
        .attr("class", "axisHorizontal")
        .attr("transform", "translate(" + (205 + labelWidth) + ","+ (height - axisMargin - 160)+")")
        .call(xAxis);


function updateData() {
    data = [
        {label:"Harry Potter", value1:19, value2:200},
        {label:"Ginny Weasley", value1:5, value2:198},
        {label:"Hermione Granger", value1:40, value2:155}
    ]
    // Get the data again

    // Select the section we want to apply our changes to
    var svg = d3.select("body").transition();

    // Make the changes
        svg.select(".rect")   // change the line
            .duration(750)
            .attr("d", data);
}