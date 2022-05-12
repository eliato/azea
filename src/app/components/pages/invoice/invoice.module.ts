import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { Invoic01Component } from './invoic01/invoic01.component';
import { Invoice02Component } from './invoice02/invoice02.component';
import { Invoice03Component } from './invoice03/invoice03.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AddInvoiceComponent,
    EditInvoiceComponent,
    Invoic01Component,
    Invoice02Component,
    Invoice03Component,
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class InvoiceModule { }
