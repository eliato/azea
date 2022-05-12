import { Component, OnInit } from '@angular/core';
import { userlist01, userlist1 } from './userlist1';

@Component({
  selector: 'app-userlist01',
  templateUrl: './userlist01.component.html',
  styleUrls: ['./userlist01.component.scss']
})
export class Userlist01Component implements OnInit {
  public userlist01List: userlist01[];
  constructor() { 
    this.userlist01List = userlist1
  }

  ngOnInit(): void {
  }

  removeUserList(id: number){
    this.userlist01List.forEach((e,i)=>{
      if(e.id == id){
        this.userlist01List.splice(i, 1);
      }
    })
  }
}
