
// bebgin line chart display
var lineChart = document.getElementById("line-chart2").getContext('2d')
var lineChart2 = document.getElementById("line-chart").getContext('2d')


// line chart options
var options = {
    borderWidth: 2,
    cubicInterpolationMode: 'monotone', // make the line curvy over zigzag
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderWidth: 4,


}

// create linear gradients for line chart
var gradientOne = lineChart.createLinearGradient(0, 0, 0, lineChart.canvas.clientHeight)
gradientOne.addColorStop(0, 'rgba(51, 169, 247, 0)')
gradientOne.addColorStop(1, 'rgba(0, 0, 0, 0)')

var gradientTwo = lineChart.createLinearGradient(0, 0, 0, lineChart.canvas.clientHeight)
gradientTwo.addColorStop(0, 'rgba(195, 113, 239, 0)')
gradientTwo.addColorStop(1, 'rgba(0, 0, 0, 0)')


new Chart(
    lineChart,
    {
        type: 'line',
        data: {
            labels: ['', '2h', '6h', '8h', '10h', '12h', '16h', '18h', '20h', '22h'],
            datasets: [
                {
                    // label: 'Spending',
                    data: [200, 250, 300, 350, 290, 360, 310, 390, 400, 500],
                    ...options,
                    borderColor: '#916BFF',
                    fill: 'start',
                    backgroundColor: gradientTwo
                },
                {
                    // label: 'Emergency',
                    data: [50, 70, 40, 100, 200, 100, 170, 150, 190, 200],
                    ...options,
                    borderColor: '#bd00ff',
                    fill: 'start',
                    backgroundColor: gradientOne
                },
                {
                    // label: 'redzone',
                    data: [240, 230, 250, 220, 100, 190, 50, 100, 60, 40],
                    ...options,
                    borderColor: '#EA4335',
                    fill: 'start',
                    backgroundColor: gradientTwo
                },
                {
                    // label: 'highzone',
                    data: [500, 480, 420, 450, 400, 470, 410, 350, 340, 360],
                    ...options,
                    borderColor: '#4599E5',
                    fill: 'start',
                    backgroundColor: gradientOne
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false, // hide display data about the dataset
                },
                tooltip: { // modify graph tooltip
                    backgroundColor: 'rgba(53, 27, 92, 0.8)',
                    caretPadding: 5,
                    boxWidth: 5,
                    usePointStyle: 'triangle',
                    boxPadding: 3
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // set display to false to hide the x-axis grid
                    },
                    beginAtZero: true
                },
                y: {
                    ticks: {
                        callback: function (value, index, values) {
                            return ' ' + value // prefix '$' to the dataset values
                        },
                        stepSize: 250
                    }
                }
            }
        }
    }
)

new Chart(
    lineChart2,
    {
        type: 'line',
        data: {
            labels: ['', '2h', '6h', '8h', '10h', '12h', '16h', '18h', '20h', '22h'],
            datasets: [
                {
                    label: 'Spending',
                    data: [800, 1800, 1500, 1800, 2500, 2200, 1500, 2200, 2850, 3950],
                    ...options,
                    borderColor: '#916BFF',
                    fill: 'start',
                    backgroundColor: gradientTwo
                },
                {
                    label: 'Emergency',
                    data: [500, 550, 1150, 700, 1500, 1200, 550, 1000, 600, 700],
                    ...options,
                    borderColor: '#4599E5',
                    fill: 'start',
                    backgroundColor: gradientOne
                },
                {
                    label: 'redzone',
                    data: [1000, 850, 600, 950, 500, 750, 900, 600, 850, 950],
                    ...options,
                    borderColor: '#EA4335',
                    fill: 'start',
                    backgroundColor: gradientTwo
                },
                {
                    label: 'highzone',
                    data: [2850, 2800, 2600, 2900, 2000, 1400, 2500, 1900, 1600, 1700],
                    ...options,
                    borderColor: '#bd00ff',
                    fill: 'start',
                    backgroundColor: gradientOne
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false, // hide display data about the dataset
                },
                tooltip: { // modify graph tooltip
                    backgroundColor: 'rgba(53, 27, 92, 0.8)',
                    caretPadding: 5,
                    boxWidth: 5,
                    usePointStyle: 'triangle',
                    boxPadding: 3
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // set display to false to hide the x-axis grid
                    },
                    beginAtZero: true
                },
                y: {
                    ticks: {
                        callback: function (value, index, values) {
                            return ' ' + value // prefix '$' to the dataset values
                        },
                        stepSize: 1000
                    }
                }
            }
        }
    }
)



// ################ [ Count Chart ] #################
var oilCanvas = document.getElementById("oilChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 10;

var oilData = {
    // labels: [
    //     "Saudi Arabia",
    //     "Russia",
    //     "Iraq",
    //     "United Arab Emirates",
    //     "Canada"
    // ],
    datasets: [
        {
            data: [150.3, 50.2, 30.2, 20.2],
            borderColor: "#262626",
            borderWidth: 4,
            backgroundColor: [
                "#4599E5",
                "#BD00FF",
                "#EA4335",
                "#916BFF"
            ]
        }
    ]
};

var pieChart = new Chart(oilCanvas, {
    type: 'pie',
    data: oilData,

});

// ################ [ rate Chart ] #################

var ctx = document.getElementById("ratechart");
var ratechart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [
            {
                label: 'Facebook',
                data: [50, 50],
                backgroundColor: [
                    "#4599E5",
                    "#5A5A5A",
                ],
                borderColor: "#262626",
                borderWidth: 3
            },
            {
                label: 'Tiktok',
                data: [40, 50],
                backgroundColor: [
                    "#BD00FF",
                    "#5A5A5A",
                ],
                borderColor: "#262626",
                borderWidth: 3
            },
            {
                label: 'Youtube',
                data: [30, 50],
                backgroundColor: [
                    "#EA4335",
                    "#5A5A5A",
                ],
                borderColor: "#262626",
                borderWidth: 3
            },
            {
                label: 'News',
                data: [20, 50],
                backgroundColor: [
                    "#916BFF",
                    "#5A5A5A",
                ],
                borderColor: "#262626",
                borderWidth: 3
            }
        ]
    },
    options: {
        //cutoutPercentage: 40,
        responsive: true,

    }
});

// ___________________________





// ? %%%%%%%%%%%%%% stacked Chart  %%%%%%%%%%%%%%


// ! @@@@@@@@@@@@@@@@@@@  Stacked Chart @@@@@@@@@@
var options = {
    series: [
        {
            name: 'Facebook',
            data: [4000, 2500, 2000, 1500, 1932, 500, 1808, 500, 1491, 862],
            // color: '#4599E5'
        },
        {
            name: 'Tiktok',
            data: [4000, 2500, 2000, 1500, 1932, 500, 1809, 500, 1492, 863],
            // color: '#BD00FF'
        },
        {
            name: 'Youtube',
            data: [4000, 2500, 2000, 1500, 1932, 500, 1808, 500, 1491, 862],
            // color: '#EA4335'
        },
        {
            name: 'News',
            data: [4666, 5950, 5000, 5556, 1932, 6020, 1809, 5420, 1492, 863],
            // color: '#916BFF'
        }
    ],
    chart: {
        type: 'bar',
        height: "100%",
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    colors: ['#4599E5', '#BD00FF', '#EA4335', '#916BFF'],
    dataLabels: {
        display: false,
        style: {
            colors: ['#000']
        }
    },
    responsive: [
        // {
        //     breakpoint: 1920, 
        //     options: {
        //         chart: {
        //             height: 430
        //         },
        //     },
        // },
        // {
        //     breakpoint: 1400.98, 
        //     options: {
        //         chart: {
        //             height: 290
        //         },
        //     },
        // }
    ],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '75%',
            dataLabels: {
                total: {
                    enabled: true,
                    offsetX: 10,
                    offsetY: 9,
                    style: {
                        fontSize: '14px',
                        fontWeight: 400,
                    }
                }
            }
        },
    },
    xaxis: {
        categories: ["cần sa ", "bóng cười", "ma tuý", "súng lục", "hoa cải", "tem giấy", "bột trắng", "AK47", "ketamine", "THC"],
        labels: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    yaxis: {
        max: 18000,
        labels: {
            show: false,
            trim: false
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        display: false,
    },
    toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

window.onresize = setChartHeight;
window.onload = setChartHeight;



window.addEventListener('beforeprint', () => {
    chart.resize(600, 600);
});
window.addEventListener('afterprint', () => {
    chart.resize();
});
