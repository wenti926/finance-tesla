var data = [{
    type: "scattergeo",
    mode: "markers+text+lines",
    text: ['Nevada', 'Califonia', 'Buffalo', 'Shanghai,Berlin-Brandenburg', 'Netherlands-Tilburg'],
    lon: [-119.76556, -121.6013368, -78.878738, 121.4606, 13.8, 5.017],
    lat: [39.52466, 37.6399, 42.880230, 30.5231, 52.4, 51.606],
    marker: {
        size: 20,
        color: [
            '#bebada', '#fdb462', '#fb8072', '#d9d9d9', '#bc80bd',
            '#b3de69'
        ],
        line: {
            width: 1
        }
    },
    name: "Tesla'6 Gigafactories ",
    textposition: "bottom right"
}];

var layout = {
    mapbox: {
        style: "outdoors",
        zoom: 0.7
    },
    showlegend: false,
    height: 500,
    width: 700
};

var config = {
    mapboxAccessToken: "your access token"
};

Plotly.newPlot("myDiv5", data, layout, config);