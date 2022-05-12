import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { EChartsComponent } from './e-charts/e-charts.component';
import { ChatistComponent } from './chatist/chatist.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ApexChartsComponent,
    EChartsComponent,
    ChatistComponent,
    ChartjsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule,
    NgApexchartsModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartistModule
  ]
})
export class ChartSModule { }
