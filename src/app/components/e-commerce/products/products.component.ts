import { Component, OnInit } from '@angular/core';
import { products, ProductsList } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page = 1;
  public productsList: products[];
  constructor() {
    this.productsList = ProductsList
   }

  ngOnInit(): void {
  }

}
