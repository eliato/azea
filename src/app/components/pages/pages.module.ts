import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsComponent } from './terms/terms.component';
import { SearchComponent } from './search/search.component';
import { EmptyPagesComponent } from './empty-pages/empty-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EditProfileComponent,
    GalleryComponent,
    FaqsComponent,
    TermsComponent,
    SearchComponent,
    EmptyPagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    GalleryModule.forRoot(),
  ]
})
export class PagesModule { }
