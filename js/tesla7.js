var trace1 = {
  x: [2016,2017,2018,2019,2020],
  y: [25.2,22.9,23.4,21.2,25.6],
  type:'scatter',
  mode: 'lines+markers',
  name:'Automotive gross margin'
};

var trace2 = {
  x: [2016,2017,2018,2019,2020],
  y: [22.8,18.9,18.8,16.6,21.0],
  mode: 'lines+markers',
  name:'Total GAAP gross margin'
};

var trace3 = {
  x: [2016,2017,2018,2019,2020],
  y: [-9.5,-13.9,-1.8,-0.3,6.3],
  mode: 'lines+markers',
  name: 'Operating margin'
};
var trace4={
    x:[2016,2017,2018,2019,2020],
    y: [11.9,5.5,11.2,12.1,18.4],
    monde:'lines+markers',
    name:'Adjustied EBITDA margin'
};
var data = [ trace1, trace2, trace3,trace4 ];

var layout = {
    xaxis:{
      type:'year',
    },
    yaxis:{
        
        title:'percentage',
        
    },
        
    
  title:'Fiancial Summary 2016-2020',
    
};
Plotly.newPlot('myDiv6', data, layout);