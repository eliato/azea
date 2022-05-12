import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { Filemanager02Component } from './filemanager02/filemanager02.component';
import { Filemanager01Component } from './filemanager01/filemanager01.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    Filemanager01Component,
    Filemanager02Component
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule,
    NgbModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class FileManagerModule { }
