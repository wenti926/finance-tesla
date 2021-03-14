r_auto_sales = 9034
r_auto_leasing = 280
r_energy = 752
r_services = 678

c_auto_sales = 6922
c_auto_leasing = 148
c_energy = 787
c_services = 821

revenues = r_auto_sales+r_auto_leasing+r_energy+r_services
costs = c_auto_sales+c_auto_leasing+c_energy+c_services
gross_profit = revenues - costs 

var data = {
    type: "sankey",
    orientation: "h",
    node: {
        pad: 100,
        thickness: 15,
        line: {
            color: "black",
            width: 0.5
        },
        label: ["Revenues of Automotive sales",
            "Revenues of Automotive leasing",
            "Revenues of Energy generation and storage",
            "Revenues of Services and other",
            "Costs of Automotive sales",
            "Costs of Automotive leasing",
            "Costs of Energy generation and storage",
            "Costs of Services and other",
            "Automotive revenues",
            "Automotive cost of revenues",
            "Revenues",
            "Cost of revenues",
            "Gross profit",
        ],
        color: ["rgb(150, 238, 159)",
            "rgb(255, 107, 107)",
            "rgb(107, 157, 255)",
            "rgb(255, 229, 107)",
            "rgb(150, 238, 159)",
            "rgb(255, 107, 107)",
            "rgb(107, 157, 255)",
            "rgb(255, 229, 107)",
            "rgb(0, 206, 57)",
            "rgb(0, 206, 57)",
            "rgb(201, 20, 218)",
            "rgb(201, 20, 218)",
            "rgb(226, 107, 255)"
        ],
    },

    link: {
        source: [0, 1, 2, 3, 8, 10, 10, 11, 11, 11, 9, 9],
        target: [8, 8, 10, 10, 10, 11, 12, 9, 6, 7, 4, 5],
        value: [r_auto_sales,
            r_auto_leasing,
            r_energy, r_services,
            (r_auto_sales + r_auto_leasing),
            costs,
            gross_profit,
            (c_auto_sales + c_auto_leasing),
            c_energy,
            c_services,
            c_auto_sales,
            c_auto_leasing
        ],
        color: ["rgba(150, 238, 159, 0.5)", 
        "rgba(255, 107, 107, 0.5)", 
        "rgba(107, 157, 255, 0.5)", 
        "rgba(255, 229, 107, 0.5)", 
        "rgba(0, 206, 57, 0.5)", 
        "rgba(201, 20, 218, 0.5)", 
        "rgba(226, 107, 255, 0.5)", 
        "rgba(0, 206, 57, 0.5)", 
        "rgba(107, 157, 255, 0.5)", 
        "rgba(255, 229, 107, 0.5)",
        "rgba(150, 238, 159, 0.5)", 
        "rgba(255, 107, 107, 0.5)"
       ],
    }
}

var data = [data]

var layout = {
    title: "Tesla's Q4-2020 revenue flow (in millions USD)",
    font: {
        size: 10
    }
}

Plotly.react('sankey', data, layout)