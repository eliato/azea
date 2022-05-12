import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { Userlist01Component } from './userlist01/userlist01.component';
import { Userlist02Component } from './userlist02/userlist02.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    Userlist01Component,
    Userlist02Component
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class UserListModule { }
