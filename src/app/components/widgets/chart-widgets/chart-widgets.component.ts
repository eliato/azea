import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/shared/data/widgets/chart-widgets'

@Component({
  selector: 'app-chart-widgets',
  templateUrl: './chart-widgets.component.html',
  styleUrls: ['./chart-widgets.component.scss']
})
export class ChartWidgetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public AreaChartOptions = data.AreaChartOptions
  public AreaChartLabels = data.AreaChartLabels
  public AreaChartData = data.AreaChartData
  public AreaChartColors = data.AreaChartColors
  public AreaChartType = data.AreaChartType
  public AreaChartData1 = data.AreaChartData1
  public AreaChartColors1 = data.AreaChartColors1
  public AreaChartData2 = data.AreaChartData2
  public AreaChartColors2 = data.AreaChartColors2
  public AreaChartData3 = data.AreaChartData3
  public AreaChartColors3 = data.AreaChartColors3

  
  public ApexSparklines1:Partial<any> | any = data.ApexSparklines1;
  public ApexSparklines2:Partial<any> | any = data.ApexSparklines2;
  public ApexSparklines3:Partial<any> | any = data.ApexSparklines3;
  public ApexSparklines4:Partial<any> | any = data.ApexSparklines4;

  public ApexData1:Partial<any> | any = data.ApexData1;
  public ApexData2:Partial<any> | any = data.ApexData2;
  public ApexData3:Partial<any> | any = data.ApexData3;
  public ApexData4:Partial<any> | any = data.ApexData4;

  public donutData = data.DonutChartData;
  public donutData1 = data.DonutChartData1;
  public donutData2 = data.DonutChartData2;
  public donutData3 = data.DonutChartData3;
}
