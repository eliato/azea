import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { BorderComponent } from './border/border.component';
import { ColorsComponent } from './colors/colors.component';
import { DisplayComponent } from './display/display.component';
import { FlexItemsComponent } from './flex-items/flex-items.component';
import { HeightComponent } from './height/height.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { TypographyComponent } from './typography/typography.component';
import { WidthComponent } from './width/width.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BorderComponent,
    ColorsComponent,
    DisplayComponent,
    FlexItemsComponent,
    HeightComponent,
    MarginComponent,
    PaddingComponent,
    TypographyComponent,
    WidthComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    SharedModule
  ]
})
export class UtilitiesModule { }
