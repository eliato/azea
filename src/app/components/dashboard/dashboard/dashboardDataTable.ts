import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";

export interface invoiceSummery {
    id: string;
    customerName: string;
    customerId: string;
    date: string;
    orderValue: string;
    statusValue:  string;
    statusState: string
}

export const dashboardTableData: invoiceSummery[] = [
    {id: '002584611', customerName : 'Joan Powell', customerId: 'JoanPowell@gmail.com', date: '08/3/2021', orderValue: '$450,870', statusValue: 'Paid', statusState: 'success'},
    {id: '004641215', customerName : 'Gavin Gibson', customerId: 'GavinGibson@gmail.com', date: '08/3/2021', orderValue: '$230,540', statusValue: 'Failed', statusState: 'danger'},
    {id: '004655445', customerName : 'Julian Kerr', customerId: 'JulianKerr@gmail.com', date: '08/3/2021', orderValue: '$55,300', statusValue: 'Paid', statusState: 'success'},
    {id: '004343455', customerName : 'Cedric Kelly', customerId: 'CedricKelly@gmail.com', date: '08/3/2021', orderValue: '	$234,100', statusValue: 'Paid', statusState: 'success'},
    {id: '004651234', customerName : 'Junior Sam', customerId: 'JuniorSam@gmail.com', date: '08/3/2021', orderValue: '	$43,198', statusValue: 'Paid', statusState: 'success'},
    {id: '00434567', customerName : 'Gabriel', customerId: 'Gabriel@gmail.com', date: '08/3/2021', orderValue: '$230,540', statusValue: 'Pending', statusState: 'warning'},
    {id: '004345623', customerName : 'Zach efron', customerId: 'Zachefron@gmail.com', date: '08/3/2021', orderValue: '	$55,300', statusValue: 'Paid', statusState: 'success'},
    {id: '004345234', customerName : 'Mona matty', customerId: 'Monamatty@gmail.com', date: '08/3/2021', orderValue: '	$234,100', statusValue: 'Paid', statusState: 'success'},
    {id: '004567455', customerName : 'Samantha May', customerId: 'SamanthaMay@gmail.com', date: '08/3/2021', orderValue: '	$43,198', statusValue: 'Pending', statusState: 'warning'},
]

export interface TopProducts {
    id: number;
    ProductCategory: string;
    ProductImg: string;
    ProductName: string;
    SaleValue: string;
    SaleInfo: string;
    statusValue:  string;
    statusState: string
}

export const dashboardProductsTableData: TopProducts[] = [
    {id: 1, ProductCategory : 'Books', ProductImg: '../../assets/images/orders/7.jpg', ProductName: 'Book', SaleValue: '$1234', SaleInfo: '3 days ago' , statusValue: 'Regular', statusState: 'success'},
    {id: 2, ProductCategory : 'Sports', ProductImg: '../../assets/images/orders/5.jpg', ProductName: 'Shoes', SaleValue: '$5436', SaleInfo: '1hr ago' , statusValue: 'Top Seller', statusState: 'secondary'},
    {id: 3, ProductCategory : 'Accesories', ProductImg: '../../assets/images/orders/6.jpg', ProductName: 'Watch', SaleValue: '$540', SaleInfo: '1 week ago' , statusValue: 'Irregular', statusState: 'danger'},
    {id: 4, ProductCategory : 'Watches', ProductImg: '../../assets/images/orders/4.jpg', ProductName: 'Smart Watch', SaleValue: '$1543', SaleInfo: 'Today' , statusValue: 'Regular', statusState: 'success'},
    {id: 5, ProductCategory : 'speakers', ProductImg: '../../assets/images/orders/10.jpg', ProductName: 'Head set', SaleValue: '$6427', SaleInfo: 'Today' , statusValue: 'Top Pick', statusState: 'info'}
]

export interface RecentActivity {
    id: number;
    header: string;
    Time: string;
    headerTitle: string;
    headerStatus: string;
    Title: string;
}

export const RecentActivityTableData: RecentActivity[] = [
    {id: 1, header : 'New Products,', Time: '6:45pm', headerStatus:'primary' , headerTitle: '52% New products', Title: 'More than 200 new products are added'},
    {id: 2, header : 'New Sale,', Time: '1day ago', headerStatus:'success' , headerTitle: '76% Profit earned.', Title: '$2,546 income earned in today sale'},
    {id: 3, header : 'New Customers,', Time: '7.45pm', headerStatus:'warning' , headerTitle: '24% New customers', Title: '1.3k new customers reached us this year'},
    {id: 4, header : 'New Reviews,', Time: '1min ago', headerStatus:'info' , headerTitle: '96% Positive reviews.', Title: 'There are 500 plus new reviews'},
    {id: 5, header : 'Customer Visits,', Time: 'today', headerStatus:'danger' , headerTitle: '33% target achieved.', Title: 'daily 20 plus new customers visits us'},
    {id: 6, header : 'Sale Consistency,', Time: '3 days ago', headerStatus:'teal' , headerTitle: '90% growth.', Title: 'More than 5 Sales happening every week'}
]

export interface RecentTransactions {
    id: number;
    ImgBg: string;
    Img: string;
    header: string;
    headerTitle: string;
    amount: string;
    amountStatus: string;
}

export const RecentTransactionsTableData: RecentTransactions[] = [
    {id: 1, ImgBg: 'primary', Img : 'AL', header: 'Alberto', headerTitle: '2 hours ago', amount:'+$543.98', amountStatus: 'success'},
    {id: 2, ImgBg: 'danger', Img : 'HE', header: 'Herrouchi', headerTitle: '6 hours ago', amount:'+$534.87', amountStatus: 'success'},
    {id: 3, ImgBg: 'warning', Img : 'AK', header: 'Alexandra Kiso', headerTitle: '2 days ago', amount:'-$132', amountStatus: 'danger'},
    {id: 4, ImgBg: 'teal', Img : 'KW', header: 'Kate william', headerTitle: '1 hours ago', amount:'+$153.45', amountStatus: 'success'},
    {id: 5, ImgBg: 'success', Img : 'JP', header: 'Jean Powell', headerTitle: '5 hours ago', amount:'-$324.78', amountStatus: 'danger'},
    {id: 6, ImgBg: 'secondary', Img : 'HC', header: 'Hakino Chen', headerTitle: '21 hours ago', amount:'-$3277.78', amountStatus: 'danger'},
]



export let ApexData1 = {
    chart: {
        type: 'area',
        height: 60,
		width: 120,
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
		name: 'Total Sales',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
      },
       xaxis: {
          axisBorder: {
              show: false
          },
      },   
      colors: ['rgba(255,255,255,0.3)'],
};
export let ApexData2 = {
    chart: {
        type: 'area',
        height: 60,
		width: 120,
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
        name: 'Total stats',
        data: [0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, ]
      }],
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
      },
       xaxis: {
          axisBorder: {
              show: false
          },
      },   
      colors: ['rgba(255,255,255,0.4)'],
};
export let ApexData3 = {
    chart: {
        type: 'area',
        height: 60,
		width: 120,
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
        name: 'Total Income',
        data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
      }],
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
      },
       xaxis: {
          axisBorder: {
              show: false
          },
      },   
      colors: ['rgba(255,255,255,0.3)'],
};
export let ApexData4 = {
    chart: {
        type: 'area',
        height: 60,
		width: 120,
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
        name: 'Total Tax',
        data: [0, 45, 54, 38, 56, 24, 55, 31, 37, 39, 62, 51, 35, 41, 48, 27, 93, 53, 52, 27, 54, 43, 19, 46]
      }],
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
      },
       xaxis: {
          axisBorder: {
              show: false
          },
      },   
      colors: ['rgba(255,255,255,0.3)'],
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  // legend: ApexLegend;
};

export let chartOptions:ChartOptions = {
  series: [
    {
      name: 'Net Profit',
      data: [44, 42, 57, 86, 58, 55, 70, 52, 29,56, 75, 61],
      color:'#664dc9'
    },
    {
      name: 'Revenue',
      data: [26, 35, 41, 78, 46, 37, 65, 49, 23, 38, 65, 27],
      color:'#44c4fa'
    }
  ],
  chart: {
    type: "bar",
    height: 380
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 3,
    colors: ["transparent"]
  },
  xaxis: {
    categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
  },
  yaxis: {
    // title: {
    //   text: "$ (thousands)"
    // }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "$ " + val + " thousands";
      }
    }
  }
};
