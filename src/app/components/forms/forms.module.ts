import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormTreeviewComponent } from './form-treeview/form-treeview.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormElementsService } from './form-elements/form-elements.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { FileuploadService } from './advanced-forms/fileupload.service';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@NgModule({
  declarations: [
    FormElementsComponent,
    AdvancedFormsComponent,
    FormWizardComponent,
    FormEditorComponent,
    FormElementSizesComponent,
    FormTreeviewComponent,
    FormValidationsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsRoutingModule,
    SharedModule,
    NgSelectModule,
    NgOptionHighlightModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    DropzoneModule,
    NgxDropzoneModule,
    NgxMaterialTimepickerModule,
    NgxDaterangepickerMd.forRoot(),
    ColorPickerModule,
    NgxIntlTelInputModule,
    AngularDualListBoxModule,
    QuillModule.forRoot(),
    CKEditorModule,
    AngularEditorModule,
    MatTreeModule, MatIconModule, MatProgressBarModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
    ArchwizardModule
  ],
  providers: [
    FormElementsService,
    FileuploadService,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    ToastrService
  ]
})
export class FormModule { }
