function timeline(){
  $('#timeline').empty();
  $('#timeline-detail').empty();
  $("#timeline-detail").css("display", "none");

  var w = 1100;
  var h = 150;
  var padding = 40;
  var dataset = store.articles.sort(function(a, b){if(a.date > b.date){return 1;} if (a.date < b.date){return -1;}return 0});
  var svg = appendSvg(w, h)
  var scale = buildScale(dataset, w)
  var axis = d3.axisBottom(scale).tickFormat(d3.format("d"));
  buildAxis(svg, axis)
  var circles = placeCircles(svg, dataset)
  styleCircles(circles, scale)
  createLabel(circles, svg)
  circles.on("mouseover", function(d, i){
    $('.carousel').carousel(i+1)
    })
  // circles.on("click", function(d, i){
  //   articleDetailsRender(d)
  //     $("#timeline-detail").css("display", "block");
  // })
  // circles.on("mouseover", function(d, i){
  //   articleDetailsRender(d)
  //     $("#timeline-detail").css("display", "block");
  // })

  $("svg").attr("id", "svg");
  $("#button").attr("onclick", "document.location.href = '#svg'");
}




function appendSvg(w, h){
  return d3.select("#timeline")
              .append("svg")
              .attr("width", w)
              .attr("height", h);
}

function buildScale(dataset, w){
  return d3.scaleLinear()
  .domain([
    d3.min(dataset, function(d) { return d.date; }),
    d3.max(dataset, function(d) { return d.date; })])
  .range([0 + 100, w - 100]);
}

function placeCircles(svg, dataset){
  return svg.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("class", "circle")
     .attr("id", function(d, i){return i});
}

function createLabel(circles, svg){
  circles.on("mouseover", function(d, i) {
    var xPosition = parseFloat(d3.select(this).attr("cx")) + 15;
    var yPosition = parseFloat(d3.select(this).attr("cy"));
    // hoverLabelBuilder(svg, d, i, xPosition, yPosition)
  })
}

function hoverLabelBuilder(svg, d, i, xPosition, yPosition){
  return svg.append("text")
     .attr("id", "tooltip")
     .attr("x", xPosition)
     .attr("y", yPosition + 20 + i*15)
     .attr("text-anchor", "middle")
     .attr("font-family", "sans-serif")
     .attr("font-size", "11px")
     .attr("font-weight", "bold")
     .attr("fill", "black")
     .html(`<a target="_blank" href=${d.url}>${d.headline}</a>`)
   }

function buildAxis(svg, axis){
  return svg.append("svg")
    .classed("axis", true)
    .append("g")
    .attr("transform", "translate(10,10)")
    .call(axis);
}

function styleCircles(circles, scale){
    circles.transition()
   .duration(500).attr("cy", function(d) {
      return 80;
    })
      .attr("cx", function(d) {
        return scale(d.date);
      })
      .attr("r", 7)
      .attr("fill", function(d, i){return "rgb("+(200-i*8) +", 0, 0)"})
}
