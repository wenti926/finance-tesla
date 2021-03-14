Plotly.d3.csv('https://raw.githubusercontent.com/wenti926/finance-tesla/main/data/TSLA1.csv', function (err, rows) {

  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace = {
    x: unpack(rows, 'Date'),
    close: unpack(rows, 'Close'),
    high: unpack(rows, 'High'),
    low: unpack(rows, 'Low'),
    open: unpack(rows, 'Open'),
    Volume: unpack(rows, 'Volume'),

    // cutomise colors 
    increasing: {
      line: {
        color: '#66ff66'
      }
    },
    decreasing: {
      line: {
        color: '#ff8c66'
      }
    },

    type: 'candlestick',
    xaxis: 'x',
    yaxis: 'y'
  };
  var data = [trace];

  var layout = {
    dragmode: 'zoom',
    showlegend: false,
    title: 'Tesla Stock Price in 2019-2020',
    xaxis: {
      rangeslider: {
        visible: false
      }
    }
  };
  Plotly.newPlot('myDiv4', data, layout);
});