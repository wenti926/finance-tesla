var xSavings = [12.5,14.5,18.9,18.8,20.6,21,23.5,19.2
];

var xNetworth = [2198,4955,5338,6268,8080,8615,14531,19384];

var ySavings = ['Q1-2019','Q2-2019','Q3-2019','Q4-2019', 'Q1-2020', 'Q2-2020', 'Q3-2020', 'Q4-2020'];

var yNetworth = ['Q1-2019','Q2-2019','Q3-2019','Q4-2019', 'Q1-2020', 'Q2-2020', 'Q3-2020', 'Q4-2020'];

var trace1 = {
  x: xSavings,
  y: ySavings,
  xaxis: 'x1',
  yaxis: 'y1',
  type: 'bar',
  marker: {
    color: 'rgba(50,171,96,0.6)',
    line: {
      color: 'rgba(50,171,96,1.0)',
      width: 1
    }
  },
  name: 'Total GAAP gross margin',
  orientation: 'h'
};

var trace2 = {
  x: xNetworth,
  y: yNetworth,
  xaxis: 'x2',
  yaxis: 'y1',
  mode: 'lines+markers',
  line: {
    color: 'rgb(128,0,128)'
  },
  name: 'Cash and cash equivalents($ in milliion)'
};

var data = [trace1, trace2];

var layout = {
  title: 'Gross margin & Cash and cash equivalents',
  xaxis1: {
    range: [0, 28],
    domain: [0, 0.5],
    zeroline: false,
    showline: false,
    showticklabels: true,
    showgrid: true
  },
  xaxis2: {
    range: [2000, 20000],
    domain: [0.5, 1],
    zeroline: false,
    showline: false,
    showticklabels: true,
    showgrid: true,
    side: 'top',
    dtick: 2000
  },
  legend: {
    x: 0.029,
    y: 1.238,
    font: {
      size: 10
    }
  },
  margin: {
    l: 100,
    r: 20,
    t: 200,
    b: 70
  },
  width: 600,
  height: 600,
  paper_bgcolor: 'rgb(248,248,255)',
  plot_bgcolor: 'rgb(248,248,255)',
  annotations: [
    {
      xref: 'paper',
      yref: 'paper',
      x: -0.2,
      y: -0.109,
      text:'Based on latest available24 month operating margin reported by major OEMs.',
      showarrow: false,
      font:{
        family: 'Arial',
        size: 10,
        color: 'rgb(150,150,150)',
       
      }
    }
  ]
};

for ( var i = 0 ; i < xSavings.length ; i++ ) {
  var result = {
    xref: 'x1',
    yref: 'y1',
    x: xSavings[i]+2.3,
    y: ySavings[i],
    text: xSavings[i] + '%',
    font: {
      family: 'Arial',
      size: 12,
      color: 'rgb(50, 171, 96)'
    },
     showarrow: false,
  };
  var result2 = {
    xref: 'x2',
    yref: 'y1',
    x: xNetworth[i] - 20000,
    y: yNetworth[i],
    text: xNetworth[i] + ' M',
    font: {
      family: 'Arial',
      size: 12,
      color: 'rgb(128, 0, 128)'
    },
     showarrow: false
  };
  layout.annotations.push(result, result2);
}

Plotly.newPlot('myDiv3', data, layout);