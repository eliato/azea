import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedUsersList = ['Firefox'];
  UsersList = [
      { name: 'Firefox', value: 'Firefox'},
      { name: 'Chrome', value: 'Chrome'},
      { name: 'Safari', value: 'Safari'},
      { name: 'Opera', value: 'Opera'},
      { name: 'Internet Explorer', value: 'Internet Explorer'}
  ];
}
