import { Component, OnInit } from '@angular/core';
import { userlist02, userList2 } from './userlist2';

@Component({
  selector: 'app-userlist02',
  templateUrl: './userlist02.component.html',
  styleUrls: ['./userlist02.component.scss']
})
export class Userlist02Component implements OnInit {
  public userlist02List: userlist02[];
  constructor() {
    this.userlist02List = userList2;
   }

  ngOnInit(): void {
  }

}
