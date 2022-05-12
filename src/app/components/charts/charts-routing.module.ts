import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChatistComponent } from './chatist/chatist.component';
import { EChartsComponent } from './e-charts/e-charts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex-charts',
        component: ApexChartsComponent
      },
      {
        path: 'chartjs-charts',
        component: ChartjsComponent
      },
      {
        path: 'Echarts',
        component: EChartsComponent
      },
      {
        path: 'chartlist',
        component: ChatistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
