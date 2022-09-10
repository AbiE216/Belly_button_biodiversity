// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout) 

    // 1. Create the trace for the bubble chart.
    var bubbleData = {
      x: [otu_ids],
      y: [sample_values],
      text: [otu_labels],
      mode: 'markers',
      markers: {
        color:[otu_ids],
        size: [sample_values], 
        opacity: [.4]},
      type: 'scatter'
     };

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: {title: "OTU ID"},      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("scatter", bubbleData, bubbleLayout); 
  });
}
