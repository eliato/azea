import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LeafletMapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
    HttpClientModule,
    LeafletModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class MapsModule { }
