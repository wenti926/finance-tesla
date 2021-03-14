var trace1 = {
  x: ['Q1-2019', 'Q2-2019', 'Q3-2019', 'Q4-2019', 'Q1-2020', 'Q2-2020', 'Q3-2020', 'Q4-2020'],
  y: [77138, 87048, 96155, 104819, 102672, 82272, 145036, 179757],
  type: 'bar',
  name: 'Total Production',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 1,
  }
};

var trace2 = {
  x: ['Q1-2019', 'Q2-2019', 'Q3-2019', 'Q4-2019', 'Q1-2020', 'Q2-2020', 'Q3-2020', 'Q4-2020'],
  y: [63019, 95356, 97186, 112095, 88496, 90891, 139593, 180667],
  type: 'bar',
  name: 'Total Deliveries',
  marker: {
    color: 'rgb(204,204,204)',
    opacity: 1
  }
};

var data = [trace1, trace2];

var layout = {
  title: 'Vehiche Production VS Deliveries(Units)',
  xaxis: {
    tickangle: -45
  },
  barmode: 'group'
};

Plotly.newPlot('myDiv', data, layout);