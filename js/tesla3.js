var trace1 = {
  x: ['Q1-2019', 'Q2-2019', 'Q3-2019', 'Q4-2019', 'Q1-2020', 'Q2-2020', 'Q3-2020', 'Q4-2020'],
  y: [920, 614, 371, 1013, 895, 418, 1395, 1868],
  type: 'scatter',
  name: 'Free cash flow',
  marker: {
    color: 'rgb(255, 153, 51)',
    opacity: 1,
  }
};

var trace2 = {
  x: ['Q1-2019', 'Q2-2019', 'Q3-2019', 'Q4-2019', 'Q1-2020', 'Q2-2020', 'Q3-2020', 'Q4-2020'],
  y: [2198, 4955, 5338, 6268, 8080, 8615, 14531, 19384],
  type: 'bar',
  name: 'Cash and cash flow',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 1
  }
};



var data = [trace1, trace2];

var layout = {
  title: 'Cash Flow VS Cash and Cash Flow',
  xaxis: {
    tickangle: -45
  },
  barmode: 'group'
};
Plotly.newPlot('myDiv2', data, layout);