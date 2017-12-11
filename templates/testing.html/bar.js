var w = 400
var h = 400

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

function bars(data, category)
{
    console.log(data)            
    max = d3.max(data)
    
    //nice breakdown of d3 scales
    x = d3.scale.linear()
        .domain([0, max])
        .range([0, w])

    y = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeBands([0, h], .2)


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
            return (d.value2 - d.value1);}
        )


    //enter
    bars.enter()
        .append("svg:rect")
        
        .attr("class", "bar")
        .attr("fill", "#0a0")
        .attr("stroke", "#050")
        .style("width", function (d) {
            return (d.value2 - d.value1);}
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
        .attr("width", 0)
        .attr("height", y.rangeBand())
        .attr("transform", function(d,i) {
            return "translate(" + [d.value1, y(i)] + ")"
        })
 
    
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

    //setup the svg
    var svg = d3.select("body")
        .attr("width", w+100)
        .attr("height", h+100)
    svg.append("svg:rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("stroke", "#000")
        .attr("fill", "none")

    svg.append("svg:g")
        .attr("id", "barchart")
        .attr("transform", "translate(50, 50)")
 
    //setup our ui
    d3.select("#gryffindor")
        .on("click", function(d) {
            select('Gryffindor')
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