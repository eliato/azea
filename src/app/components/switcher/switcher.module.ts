import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitcherRoutingModule } from './switcher-routing.module';
import { Switcher01Component } from './switcher01/switcher01.component';
import { Switcher02Component } from './switcher02/switcher02.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
  declarations: [
    Switcher01Component,
    Switcher02Component
  ],
  imports: [
    CommonModule,
    SwitcherRoutingModule,
    PerfectScrollbarModule
  ],
  providers:[    
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SwitcherModule { }
