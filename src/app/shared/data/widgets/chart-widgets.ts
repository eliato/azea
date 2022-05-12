import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";

//Area Chart
export let AreaChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    responsive: true,
    tooltips: {
        mode: 'index',
        titleFontSize: 12,
        titleFontColor: '#6b6f80',
        bodyFontColor: '#6b6f80',
        backgroundColor: '#fff',
        titleFontFamily: 'Montserrat',
        bodyFontFamily: 'Montserrat',
        cornerRadius: 3,
        intersect: false,
    },
    scales: {
        xAxes: [ {
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
            },
            ticks: {
                fontSize: 2,
                fontColor: 'transparent'
            }
        } ],
        yAxes: [ {
            display:false,
            ticks: {
                display: false,
            }
        } ]
    },
    title: {
        display: false,
    },
    elements: {
        line: {
            borderWidth: 1
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
        }
    }
  
  }
  export let AreaChartLabels: Label[] =['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  export let AreaChartType: ChartType = 'line';
  export let AreaChartData: ChartDataSets[] = [
    {
        label: 'Market value',
        data: [30, 70, 30, 100, 50, 130, 100, 140],
    }
  ]
  
  export let AreaChartColors: Color[] = [
    {
        backgroundColor: 'transparent',
        borderColor: '#664dc9',
        pointBackgroundColor:'#fff',
        pointHoverBackgroundColor:'#664dc9',
        pointBorderColor :'#664dc9',
        pointHoverBorderColor :'#664dc9',
        pointBorderWidth :2,
        pointRadius :2,
        pointHoverRadius :2,
        borderWidth: 4
    },
  
  ]
  

  export let AreaChartData1: ChartDataSets[] = [
    {
        label: 'Market value',
        data: [30, 70, 30, 100, 50, 130, 100, 140],
    }
  ]
  
  export let AreaChartColors1: Color[] = [
    {
        backgroundColor: 'transparent',
        borderColor: '#664dc9',
        pointBackgroundColor:'#fff',
        pointHoverBackgroundColor:'#664dc9',
        pointBorderColor :'#664dc9',
        pointHoverBorderColor :'#664dc9',
        pointBorderWidth :2,
        pointRadius :2,
        pointHoverRadius :2,
        borderWidth: 4
    }
  
  ]
  export let AreaChartData2: ChartDataSets[] = [
    {
        label: 'Market value',
        data: [30, 70, 30, 100, 50, 130, 100, 140],
    }
  ]
  
  export let AreaChartColors2: Color[] = [
    {
        backgroundColor: 'transparent',
        borderColor: '#664dc9',
        pointBackgroundColor:'#fff',
        pointHoverBackgroundColor:'#664dc9',
        pointBorderColor :'#664dc9',
        pointHoverBorderColor :'#664dc9',
        pointBorderWidth :2,
        pointRadius :2,
        pointHoverRadius :2,
        borderWidth: 4
    }
  
  ]
  export let AreaChartData3: ChartDataSets[] = [
    {
        label: 'Market value',
        data: [30, 70, 30, 100, 50, 130, 100, 140],
    }
  ]
  
  export let AreaChartColors3: Color[] = [
    {
        backgroundColor: 'transparent',
        borderColor: '#664dc9',
        pointBackgroundColor:'#fff',
        pointHoverBackgroundColor:'#664dc9',
        pointBorderColor :'#664dc9',
        pointHoverBorderColor :'#664dc9',
        pointBorderWidth :2,
        pointRadius :2,
        pointHoverRadius :2,
        borderWidth: 4
    }
  
  ]
  
  export let ApexSparklines1 = {
    series: [{
        data: [5,3,9,6,5,9,7,3,5,2]
    }],
    colors: ['#664dc9'],
    chart: {
        type: 'bar',
        width: 150,
        height: 80,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '25%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return "";
                }
            }
        },
        marker: {
            show: true
        }
    }
}
  export let ApexSparklines2 = {
    series: [{
        data: [5,3,2,-1,-3,-2,2,3,5,2]
    }],
    colors: ['#38cb89'],
    chart: {
        type: 'bar',
        width: 150,
        height: 80,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '25%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return "";
                }
            }
        },
        marker: {
            show: true
        }
    }
}
  export let ApexSparklines3 = {
    series: [{
        data: [0,-3,-6,-4,-5,-4,-7,-3,-5,-2]
    }],
    colors: ['#ffab00'],
    chart: {
        type: 'bar',
        width: 150,
        height: 80,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '25%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return "";
                }
            }
        },
        marker: {
            show: true
        }
    }
}
  export let ApexSparklines4 = {
    series: [{
        data: [5,3,2,-1,-3,-2,2,3,5,2]
    }],
    colors: ['#ef4b4b'],
    chart: {
        type: 'bar',
        width: 150,
        height: 80,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '25%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return "";
                }
            }
        },
        marker: {
            show: true
        }
    }
}

export let ApexData1 = {
    chart: {
        type: 'area',
        height: 60,
		width: 160,
        sparkline: {
          enabled: true
        },
		dropShadow: {
			enabled: true,
			blur: 3,
			opacity: 0.2,
			show:false,
		}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 2,
			dashArray: 0,
		},
      fill: {
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Total Revenue',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      yaxis: {
        min: 0
      },
      colors: ['#38cb89'],
};

export let ApexData2 = {
    chart: {
        type: 'area',
        height: 60,
		width: 160,
        sparkline: {
          enabled: true
        },
		dropShadow: {
			enabled: true,
			blur: 3,
			opacity: 0.2,
			show:false,
		}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 2,
			dashArray: 0,
		},
		fill: {
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Unique Visitors',
        data: [0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, ]
      }],
      yaxis: {
        min: 0
      },
      colors: ['#664dc9'],
}

export let ApexData3 = {
    chart: {
        type: 'area',
        height: 60,
		width: 160,
        sparkline: {
          enabled: true
        },
		dropShadow: {
			enabled: true,
			blur: 3,
			opacity: 0.2,
			show:false,
		}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 2,
			dashArray: 0,
		},
		fill: {
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Expenses',
        data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
      }],
      yaxis: {
        min: 0
      },
      colors: ['#2bcbba'],
}

export let ApexData4 = {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
        sparkline: {
          enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0,
			show:false,
        }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
      fill: {
        gradient: {
          enabled: false
        }
      },
      series: [{
        name: 'Today Profit',
        data: [0, 45, 54, 38, 56, 24, 55, 31, 37, 39, 62, 51, 35, 41, 48, 27, 93, 53, 52, 27, 54, 43, 19, 46]
      }],
      yaxis: {
        min: 0
      },
      colors: ['#ef4b4b'],
}


export let DonutChartData:any = {
    pieseries: [42, 22, 36],
    colors: ['#664dc9','#8976d5', '#ab9de1'],
    chart: {
        type: 'donut',
        height: 300,
    },
    legend: {
        show: false,        
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false,
                position: 'bottom'
            }
        }
    }]
};
export let DonutChartData1:any = {
    pieseries: [35, 40, 25],
    colors: ['#38cb89','#5dd59f', '#85e0b7'],
    chart: {
        type: 'donut',
        height: 300,
    },
    legend: {
        show: false,
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false,
                position: 'bottom'
            }
        }
    }]
};
export let DonutChartData2:any = {
    pieseries: [38, 42, 20],
    colors: ['#ffab00','#ffbb33', '#ffcc66'],
    chart: {
        type: 'donut',
        height: 300,
    },
    legend: {
        show: false,        
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false,
                position: 'bottom'
            }
        }
    }]
};
export let DonutChartData3:any = {
    pieseries: [34, 34, 32],
    colors: ['#ef4b4b','#f37272', '#f7a1a1'],
    chart: {
        type: 'donut',
        height: 300,
    },
    legend: {
        show: false,        
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false,
                position: 'bottom'
            }
        }
    }]
};