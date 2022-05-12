import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Switcher01Component } from './switcher01/switcher01.component';
import { Switcher02Component } from './switcher02/switcher02.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'switcher01',
        component: Switcher01Component
      },
      {
        path: 'switcher02',
        component: Switcher02Component
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitcherRoutingModule { }
