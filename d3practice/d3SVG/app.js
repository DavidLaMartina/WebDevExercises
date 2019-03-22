var minYear = birthData[0].year;
var maxYear = birthData[birthData.length - 1].year;

var width = 600;
var height = 600;
var barWidth = 25;

d3.select('input')
  .property('min', minYear)
  .property('max', maxYear)
  .property('value', minYear);

d3.select('svg')
  .attr('width', width)
  .attr('height', height)
  .selectAll('rect')
  .data(birthData.filter(function(d){
    return d.year === minYear;
  }))
  .enter()
  .append('rect')
    .attr('width', barWidth)
    .attr('height', height)
    .attr('y', 0)
