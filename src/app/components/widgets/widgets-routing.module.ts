import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartWidgetsComponent } from './chart-widgets/chart-widgets.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chart-widget',
        component: ChartWidgetsComponent
      },
      {
        path: 'widget',
        component: WidgetsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
