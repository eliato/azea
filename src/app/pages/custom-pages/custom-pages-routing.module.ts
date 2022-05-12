import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ForgetPassword01Component } from './forgetPassword/forget-password01/forget-password01.component';
import { ForgetPassword02Component } from './forgetPassword/forget-password02/forget-password02.component';
import { ForgetPassword03Component } from './forgetPassword/forget-password03/forget-password03.component';
import { LockScreen01Component } from './lockScreen/lock-screen01/lock-screen01.component';
import { LockScreen02Component } from './lockScreen/lock-screen02/lock-screen02.component';
import { LockScreen03Component } from './lockScreen/lock-screen03/lock-screen03.component';
import { Login01Component } from './login/login01/login01.component';
import { Login02Component } from './login/login02/login02.component';
import { Login03Component } from './login/login03/login03.component';
import { Register01Component } from './register/register01/register01.component';
import { Register02Component } from './register/register02/register02.component';
import { Register03Component } from './register/register03/register03.component';
import { ResetPassword01Component } from './resetPassword/reset-password01/reset-password01.component';
import { ResetPassword02Component } from './resetPassword/reset-password02/reset-password02.component';
import { ResetPassword03Component } from './resetPassword/reset-password03/reset-password03.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'under-construction',
        component: UnderConstructionComponent
      },
      {
        path: 'coming-soon',
        component: ComingSoonComponent
      },
      {
        path: 'register/register01',
        component: Register01Component
      },
      {
        path: 'register/register02',
        component: Register02Component
      },
      {
        path: 'register/register03',
        component: Register03Component
      },
      {
        path: 'login/login01',
        component: Login01Component
      },
      {
        path: 'login/login02',
        component: Login02Component
      },
      {
        path: 'login/login03',
        component: Login03Component
      },
      {
        path: 'forget-password/forget-password01',
        component: ForgetPassword01Component
      },
      {
        path: 'forget-password/forget-password02',
        component: ForgetPassword02Component
      },
      {
        path: 'forget-password/forget-password03',
        component: ForgetPassword03Component
      },
      {
        path: 'reset-password/reset-password01',
        component: ResetPassword01Component
      },
      {
        path: 'reset-password/reset-password02',
        component: ResetPassword02Component
      },
      {
        path: 'reset-password/reset-password03',
        component: ResetPassword03Component
      },
      {
        path: 'lock-screen/lock-screen01',
        component: LockScreen01Component
      },
      {
        path: 'lock-screen/lock-screen02',
        component: LockScreen02Component
      },
      {
        path: 'lock-screen/lock-screen03',
        component: LockScreen03Component
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { }
