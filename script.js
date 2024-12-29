import * as d3 from "https://esm.sh/d3";

document.addEventListener("DOMContentLoaded", () => {
  const width = 800;
  const height = 600;

  d3.json(
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json"
  ).then((data) => {
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3
      .select("#treemap")
      .attr("width", width)
      .attr("height", height);

    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);

    const treemap = d3.treemap().size([width, height]).padding(1);

    treemap(root);

    const cell = svg
      .selectAll("g")
      .data(root.leaves())
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    cell
      .append("rect")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("fill", (d) => color(d.parent.data.name))
      .attr("stroke", "#fff");

    cell
      .append("text")
      .attr("x", 5)
      .attr("y", 15)
      .text((d) => d.data.name)
      .attr("font-size", "10px")
      .attr("fill", "#000");

    const legend = d3
      .select("#legend")
      .style("display", "flex")
      .style("flex-wrap", "wrap")
      .style("margin-top", "20px");

    const parents = root.children.map((d) => d.data.name);

    const legendItems = legend
      .selectAll("div")
      .data(parents)
      .enter()
      .append("div")
      .style("display", "flex")
      .style("align-items", "center")
      .style("margin-right", "10px");

    legendItems
      .append("div")
      .style("width", "20px")
      .style("height", "20px")
      .style("background-color", (d) => color(d))
      .style("margin-right", "5px");

    legendItems
      .append("span")
      .text((d) => d)
      .style("font-size", "14px");
  });
});
