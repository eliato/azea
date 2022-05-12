import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogStylesComponent } from './blog-styles/blog-styles.component';
import { Blog01Component } from './blog01/blog01.component';
import { Blog02Component } from './blog02/blog02.component';
import { Blog03Component } from './blog03/blog03.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BlogStylesComponent,
    Blog01Component,
    Blog02Component,
    Blog03Component
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BlogModule { }
