import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element:any): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
 
}
