import { Component, OnInit } from '@angular/core';
import { InvoiceList, invoiceList } from './invoiceList';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoicelist: invoiceList[];
  constructor() { 
    this.invoicelist = InvoiceList
  }

  ngOnInit(): void {
  }

}
