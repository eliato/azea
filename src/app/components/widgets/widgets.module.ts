import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { ChartWidgetsComponent } from './chart-widgets/chart-widgets.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {IvyGalleryModule} from 'angular-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    ChartWidgetsComponent,
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharedModule,
    IvyGalleryModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    ChartsModule,
    NgCircleProgressModule.forRoot(),
    NgApexchartsModule,
  ]
})
export class WidgetsModule { }
