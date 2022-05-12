import { Component, OnInit } from '@angular/core';
import { todolist1, Todolist1List } from './todolist1';

@Component({
  selector: 'app-todo-list01',
  templateUrl: './todo-list01.component.html',
  styleUrls: ['./todo-list01.component.scss']
})
export class TodoList01Component implements OnInit {

  Todo1list: todolist1[];
  constructor() { 
    this.Todo1list = Todolist1List
  }

  ngOnInit(): void {
  }

  removeListEl(item: number){
    Todolist1List.forEach((e,i)=>{
      if(e.id == item){
        Todolist1List.splice(i, 1);
      }
    })
  }
}
