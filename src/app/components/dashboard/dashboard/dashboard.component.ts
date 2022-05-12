import { Component, OnInit } from '@angular/core';
import { ApexData1, ApexData2, ApexData3, ApexData4, chartOptions, dashboardProductsTableData, dashboardTableData, invoiceSummery, RecentActivity, RecentActivityTableData, RecentTransactions, RecentTransactionsTableData, TopProducts } from './dashboardDataTable';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboardTableDataList: invoiceSummery[];
  public dashboardProductsTableDataList: TopProducts[];
  public RecentActivityTableDataList: RecentActivity[];
  public RecentTransactionsTableDataList: RecentTransactions[];
  
  constructor() {
    this.dashboardTableDataList = dashboardTableData;
    this.dashboardProductsTableDataList = dashboardProductsTableData;
    this.RecentActivityTableDataList = RecentActivityTableData;
    this.RecentTransactionsTableDataList = RecentTransactionsTableData;
  }
  
  ngOnInit(): void {
  }
  
  public chartOptions = chartOptions;
  public ApexData1:Partial<any> | any = ApexData1;
  public ApexData2:Partial<any> | any = ApexData3;
  public ApexData3:Partial<any> | any = ApexData2;
  public ApexData4:Partial<any> | any = ApexData4;
}
