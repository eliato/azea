import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Userlist01Component } from './userlist01/userlist01.component';
import { Userlist02Component } from './userlist02/userlist02.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'userlist01',
        component: Userlist01Component
      },
      {
        path: 'userlist02',
        component: Userlist02Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
