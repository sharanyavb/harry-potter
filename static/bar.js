var width = 1750;
var height = 600;

// Define the margins of the chart
var margin = { top: 150, right: 50, bottom: 50, left: 150 };

// Calculate the dimensions of the chart by subtracting the margin on either side from the width and height of the SVG container
var chartWidth = width - margin.left - margin.right;
var chartHeight = height - margin.top - margin.bottom;

var data = [
    {label:"Harry Potter", value1:19, value2:200},
    {label:"Ginny Weasley", value1:5, value2:198},
    {label:"Hermione Granger", value1:40, value2:155},
    {label:"Ronald Weasley", value1:17, value2:100},
    {label:"Fred Weasley", value1:77, value2:143},
    {label:"George Weasley", value1:27, value2:143}
]

var gryffindor = ["Harry Potter", "Ronald Weasley"]
var slytherin = ["Ginny Weasley", "Hermione Granger"]
var ravenclaw = ["Fred Weasley", "George Weasley"]

var lines = [0, 17, 35, 57, 94, 132, 161, 198]

var sslines = []
var coslines = []
var poalines = []
var goflines = []
var ootplines = []
var hbplines = []
var dhlines = []

function bars(data, category)
{         
    max = d3.max(data)
    
    //nice breakdown of d3 scales
    scale = d3.scale.linear()
        .domain([0, 200])
        .range([0, chartWidth]);

    y = d3.scale.ordinal()
        .domain(data.map(function(data){
            return data.label;
        }))
        .rangeBands([5, chartHeight], .2)

    //  xAxis = d3.svg.axis()
        //  .scale(scale)
        //  .tickSize(-height)
        //  .orient("bottom");

    var vis = d3.select("#barchart")

    //a good written tutorial of d3 selections coming from protovis
    var bars = vis.selectAll("rect.bar")
        .data(data)
        

    //update
    bars
        .attr("fill", function(d){
            if (category == 'Gryffindor') { 
                return "gold";
            }
            if (category == 'Slytherin') { 
                return "green";
            }
            if (category == 'Ravenclaw') { 
                return "blue";
            }
            if (category == 'Hufflepuff') { 
                return "black";
            }
            else {
                return "#0a0";
            }
        })
        .attr("stroke", function(d){
            if (category == 'Gryffindor') { 
                return "maroon";
            }
            if (category == 'Slytherin') { 
                return "silver";
            }
            if (category == 'Ravenclaw') { 
                return "bronze";
            }
            if (category == 'Hufflepuff') { 
                return "yellow";
            }
            else {
                return "#050";
            }
        })
        .style("width", function (d) {
            return scale(d.value2 - d.value1);}
        )

    

    //xAxis = d3.axisBottom()
        //.scale(scale)
        // ticksize will be function that loops through books
        //.tickSize(-height + 2*160 + axisMargin);

    //enter
    bars.enter()
        .append("svg:rect")
        
        .attr("class", "bar")
        .attr("fill", "white")
        .attr("stroke", "black")
        .style("width", function (d) {
            return scale(d.value2 - d.value1);}
        )

    //exit 
    bars.exit()
        //this just changes where the bars enter from
        //.attr("transform", function(d) {
        //    return "translate(" + (d.value1) + ",0)";
        //})
        .attr("transform", "translate(0, 0)")
        .transition()
        .duration(300)
        .ease("exp")
        .attr("width", 0)
        .remove()


    bars
        .attr("stroke-width", 4)
        .attr("transform", "translate(0, 0)")
        .transition()
        .duration(300)
        .ease("quad")
        .attr("height", 40)
        .attr("transform", function(d,i) {
            return "translate(" + [d.value1, (i*75)] + ")"
        })
        // .attr("transform", function(d,i) {
            // return "translate(" + [d.value1, ((40*i)+50)] + ")"
        // })

    // svg = d3.select("svg")
    // svg.insert("g",":first-child")
        // .attr("class", "axisHorizontal")
        // .attr("transform", "translate(150,450)")
        // .call(xAxis);
    d3.selectAll("svg")
        .append("image")
        .attr("xlink:src", "../static/images/harrytest.png") 
        // this will be the code for the character images function (d) { return d.img ; })
        .attr("width", 40)
        .attr("height", 40)
        .attr("x", 200)
        .attr("y", -100);
}

function select(category) {
    bars(data.filter(function(d){
        if (category == 'Gryffindor') {      
            return gryffindor.indexOf(d.label) !== -1;
        }
        if (category == 'Slytherin') {
            return slytherin.indexOf(d.label) !== -1;
        }
        if (category == 'Hufflepuff') {
            return hufflepuff.indexOf(d.label) !== -1;
        }
        if (category == 'Ravenclaw') {
            return ravenclaw.indexOf(d.label) !== -1;
        }
        else {
            return gryffindor.indexOf(d.label) !== -1;
        }
    }), category);   
}

function init()
{

    var xScale = d3.scale.linear()
        .domain([0, 200])
        .range([0, chartWidth]);

// The axis uses the above scale and the same domain:
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        //change to book images
        .tickValues(lines)
        .tickFormat(d3.format("s"));

    //setup the svg
    var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    

    svg.append("svg:rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "none")
        .attr("transform", "translate(100,0)");

    svg.append("svg:g")
        .attr("height", chartHeight)
        .attr("width", chartWidth)
        .attr("id", "barchart")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    //Create X axis
    svg.append("svg:g")
        .attr("class", "axis-x")
        .attr("transform", "translate(150,500)")
        //following draws the axis, just want the gridlines
        //.call(xAxis)

    //drawing grid lines
    // var bar_height = h - padding;
    svg.append("svg:g")
        .attr("class", "lines")
        .selectAll("line")
        //.data(xScale.ticks(15))//FIXME
        //use your specified lines as data
        .data(lines)
        .enter().append("line")
        .attr("x1", function(d) { return xScale(d) + 150; })
        .attr("x2", function(d) { return xScale(d) + 150; })
        .attr("y1", 25)
        //nexrt line variable on margin + number of bars
        .attr("y2", 600);

    // svg.select(".axis-x").selectAll("text").remove();
    
    // var ticks = svg.select(".axis-x").selectAll(".tick")
    //     //.data(dataset)
    //     .append("svg:image")
    //     .attr("xlink:href", "../static/images/harrytest.png") 
    //     // this will be the code for the character images function (d) { return d.img ; })
    //     .attr("width", 128)
    //     .attr("height", 128)
    //     .attr("x", 0)
    //     .attr("y", 0);

    //setup our ui
    d3.select("#gryffindor")
        .on("click", function(d) {
            select('Gryffindor')
            console.log("Gryffindor")
        })   
    d3.select("#slytherin")
        .on("click", function(d) {
            select('Slytherin')
        })   
    d3.select("#ravenclaw")
        .on("click", function(d) {
            select('Ravenclaw')
        })
    d3.select("#hufflepuff")
        .on("click", function(d) {
            select('Hufflepuff')
        }) 
    d3.select("#deatheaters")
        .on("click", function(d) {
            select('DeathEaters')
        })      

    //make the bars
    bars(data)
}

function bookchange() {
}