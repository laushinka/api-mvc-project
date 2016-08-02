function timeline(){

$('#timeline').empty();

var w = 1100;
var h = 500;

var padding = 40;
//
// var date_format = d3.timeFormat("%Y");

var svg = d3.select("#timeline")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var dataset = store.articles;

var scale = d3.scaleLinear().domain([
  d3.min(dataset, function(d) { return d.date; }),
  d3.max(dataset, function(d) { return d.date; })])
                    .range([0 + padding, w - padding]);

var circles = svg.selectAll("circle")  // <-- No longer "rect"
   .data(dataset)
   .enter()
   .append("circle")
   .attr("class", "circle")
   .on("mouseover", function(d, i) {

					//Get this bar's x/y values, then augment for the tooltip
					var xPosition = parseFloat(d3.select(this).attr("cx")) + 30;
					var yPosition = parseFloat(d3.select(this).attr("cy"));

					//Create the tooltip label
					svg.append("text")
					   .attr("id", "tooltip")
					   .attr("x", xPosition)
					   .attr("y", yPosition + 20 + i*14)
					   .attr("text-anchor", "middle")
					   .attr("font-family", "sans-serif")
					   .attr("font-size", "11px")
					   .attr("font-weight", "bold")
					   .attr("fill", "black")
					   .html(`<a href=${d.url}>${d.headline}</a>`);

			   })



  //  .on("click", function(d){console.log(d)})


// var yAxis = svg.axis()
//                   .scale(scale)
//                   .orient("bottom");
// d3.select("#timeline").append("svg")
//     .attr("class", "axis")
//     .attr("width", 1440)
//     .attr("height", 30)
//   .append("g")
//     .attr("transform", "translate(0,30)")
//     .call(axis);

var axis = d3.axisBottom(scale).tickFormat(d3.format("d"));

svg.append("svg")
    .classed("axis", true)
  .append("g")
  .attr("transform", "translate(10,10)")
    .call(axis);



  circles.attr("cy", function(d) {
           return 80;
      })
      .attr("cx", function(d) {
           return scale(d.date);
      })
      .attr("r", 7)
      .attr("fill", function(d, i){return "rgb("+(200-i*8) +", 0, 0)"})



}
