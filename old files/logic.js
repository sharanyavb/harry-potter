// Step 0: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Import data from the test.csv file
d3.csv("test.csv", function(error, timelineData) {
  if (error) throw error;
  console.log(timelineData);
  console.log([timelineData]);


// Configure a band scale, with a range between 0 and the chartWidth and a padding of 0.1 (10%)
var xBandScale = d3.scaleBand().range([0, width]).paddingInner(0.4);

// Create a linear scale, with a range between the chartHeight and 0.
var yLinearScale = d3.scaleLinear().range([height, 0]);

timelineData.forEach(function(data) {
    data.FullChapterStart = +data.FullChapterStart;
  });
  timelineData.forEach(function(data) {
    data.FullChapterEnd = +data.FullChapterEnd;
  });

  // Set the domain of the band scale to the names of students in hours-of-tv-watched.csv
  xBandScale.domain( timelineData.map(function(data) {
    return data.name;
  }));

  // Set the domain of the linear scale to 0 and the largest number of hours watched in tvData
  yLinearScale.domain([0, d3.max(timelineData, function(data) {
    return data.FullChapterEnd;
  })]);

  // Create two new functions passing our scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xBandScale);
  var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

  // Create one SVG rectangle per piece of tvData
  // Use the linear and band scales to position each rectangle within the chart
  svg
    .selectAll(".bar")
      .data(timelineData)
      .enter()
      .append("rect")
        .attr("class", "bar")
        .attr("x", function(data) {
          return xBandScale(data.name);
        })
        .attr("y", function(data) {
          return yLinearScale(data.FullChapterEnd);
        })
        .attr("width", xBandScale.bandwidth())
        .attr("height", function(data) {
          return height - yLinearScale(data.FullChapterEnd);
        });

  // Append two SVG group elements to the SVG area, create the bottom and left axes inside of them
  svg.append("g")
    .call(leftAxis);

  svg.append("g")
    .attr("transform", "translate(0, " + height + ")")
    .call(bottomAxis);
});