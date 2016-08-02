function timeline(){
  $('#timeline').empty();


///////////////////// move styling to a styles/bootstrap file
  var w = 1100;
  var h = 500;
  var padding = 40;
  var svg = d3.select("#timeline")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

  var dataset = store.articles;
  var scale = d3.scaleLinear()
    .domain([
      d3.min(dataset, function(d) { return d.date; }),
      d3.max(dataset, function(d) { return d.date; })])
    .range([0 + 100, w - 100]);
  var circles = svg.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("class", "circle")
     .on("mouseover", function(d, i) {
				var xPosition = parseFloat(d3.select(this).attr("cx")) + 15;
				var yPosition = parseFloat(d3.select(this).attr("cy"));
				svg.append("text")
				   .attr("id", "tooltip")
				   .attr("x", xPosition)
				   .attr("y", yPosition + 20 + i*15)
				   .attr("text-anchor", "middle")
				   .attr("font-family", "sans-serif")
				   .attr("font-size", "11px")
				   .attr("font-weight", "bold")
				   .attr("fill", "black")
				   .html(`<a target="_blank" href=${d.url}>${d.headline}</a>`);
			   })
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
