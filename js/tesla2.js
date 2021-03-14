var trace1 = {
  x: ['Q1-2019', 'Q2-2019', 'Q3-2019', 'Q4-2019', 'Q1-2020', 'Q2-2020', 'Q3-2020', 'Q4-2020'],
  y: [4541, 6350, 6303, 7384, 5985, 6036, 8771, 10774],
  type: 'bar',
  name: 'Total Revenues',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 1,
  }
};

var trace2 = {
  x: ['Q1-2019', 'Q2-2019', 'Q3-2019', 'Q4-2019', 'Q1-2020', 'Q2-2020', 'Q3-2020', 'Q4-2020'],
  y: [1443, 566, 921, 1191, 1391, 1234, 1267, 2063, 2066],
  type: 'bar',
  name: 'Total Gross Profit',
  marker: {
    color: 'rgb(204,204,204)',
    opacity: 1
  }
};

var data = [trace1, trace2];

var layout = {
  title: 'Financial Revrnus',
  xaxis: {
    tickangle: -45
  },
  barmode: 'group'
};
Plotly.newPlot('myDiv1', data, layout);