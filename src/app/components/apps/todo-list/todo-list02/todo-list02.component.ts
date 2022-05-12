import { Component, OnInit } from '@angular/core';
import { todolist02, todoList2 } from './todolist2';

@Component({
  selector: 'app-todo-list02',
  templateUrl: './todo-list02.component.html',
  styleUrls: ['./todo-list02.component.scss']
})
export class TodoList02Component implements OnInit {
  public todoList2List: todolist02[]
  constructor() { 
    this.todoList2List = todoList2
  }

  ngOnInit(): void {
  }

}
