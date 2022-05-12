import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Login01Component } from './login/login01/login01.component';
import { Login02Component } from './login/login02/login02.component';
import { Login03Component } from './login/login03/login03.component';
import { Register01Component } from './register/register01/register01.component';
import { Register02Component } from './register/register02/register02.component';
import { Register03Component } from './register/register03/register03.component';
import { ForgetPassword01Component } from './forgetPassword/forget-password01/forget-password01.component';
import { ForgetPassword02Component } from './forgetPassword/forget-password02/forget-password02.component';
import { ForgetPassword03Component } from './forgetPassword/forget-password03/forget-password03.component';
import { ResetPassword01Component } from './resetPassword/reset-password01/reset-password01.component';
import { ResetPassword02Component } from './resetPassword/reset-password02/reset-password02.component';
import { ResetPassword03Component } from './resetPassword/reset-password03/reset-password03.component';
import { LockScreen01Component } from './lockScreen/lock-screen01/lock-screen01.component';
import { LockScreen02Component } from './lockScreen/lock-screen02/lock-screen02.component';
import { LockScreen03Component } from './lockScreen/lock-screen03/lock-screen03.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CustomPagesRoutingModule } from './custom-pages-routing.module';



@NgModule({
  declarations: [
    Login01Component,
    Login02Component,
    Login03Component,
    Register01Component,
    Register02Component,
    Register03Component,
    ForgetPassword01Component,
    ForgetPassword02Component,
    ForgetPassword03Component,
    ResetPassword01Component,
    ResetPassword02Component,
    ResetPassword03Component,
    LockScreen01Component,
    LockScreen02Component,
    LockScreen03Component,
    UnderConstructionComponent,
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    CustomPagesRoutingModule
  ]
})
export class CustomPagesModule { }
