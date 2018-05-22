var data = [
  { x: 0, y: 30 },
  { x: 50, y: 20 },
  { x: 100, y: 40 },
  { x: 150, y: 80 },
  { x: 200, y: 95 }
]
var dataInsertionSort = [
  { x: 0, y: 0 },
]
var myScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 600]);

d3.json("data/speeds2.json", function(data) {
    console.log(data);
    data.forEach(function(item, i, arr) {
      if (data[i].sort_type==="insertionSort") {
        dataInsertionSort.push({x:data[i].size, y: data[i].time})
      }
      console.log("dataInsertionSort222");
    });
    // d3.select('#chart')
    //   .append("path")
    //   .attr('stroke-width', 2)
    //   .attr('d', line(dataInsertionSort))
});




var line = d3.line()
  .x((d)=> d.x)
  .y((d)=> 200 - d.y)
  .interpolate("basis")

console.log("dataInsertionSort");
console.log(dataInsertionSort);



var linearScale = d3.scaleLinear()
  .domain([0, 1000])
  .range([0, 700]);

var sqrtScale = d3.scaleSqrt()
  .domain([0, 1000])
  .range([0, 30]);

var myData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

d3.select('#wrapper')
  .selectAll('circle')
  .data(dataInsertionSort)
  .enter()
  .append('circle')
  .attr('r', function(d) {
    return sqrtScale(d.x);
  })
  .attr('cx', function(d) {
    return linearScale(d.x);
  });