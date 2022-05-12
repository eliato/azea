import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { Profile01Component } from './profile01/profile01.component';
import { Profile02Component } from './profile02/profile02.component';
import { Profile03Component } from './profile03/profile03.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    Profile01Component,
    Profile02Component,
    Profile03Component
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ProfileModule { }
