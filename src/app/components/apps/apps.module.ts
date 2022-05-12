import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CookiesComponent } from './cookies/cookies.component';
import { DragulaCardComponent } from './dragula-card/dragula-card.component';
import { ImageComparsionComponent } from './image-comparsion/image-comparsion.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { LoadersComponent } from './loaders/loaders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PageSessiontimeoutComponent } from './page-sessiontimeout/page-sessiontimeout.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { RatingComponent } from './rating/rating.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CountersComponent } from './counters/counters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CdTimerModule } from 'angular-cd-timer';
import { DragulaModule } from 'ng2-dragula';
import { ImageCropperModule } from 'ngx-image-cropper';
import {NgxImageComparisonSliderModule} from 'ngx-image-comparison-slider';
import { NgxNotifierModule } from 'ngx-notifier';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgxStarsModule } from 'ngx-stars';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ColorPickerModule } from 'ngx-color-picker';
import { ClipboardModule } from 'ngx-clipboard';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};
@NgModule({
  declarations: [
    CalendarComponent,
    CookiesComponent,
    DragulaCardComponent,
    ImageComparsionComponent,
    ImageCropComponent,
    LoadersComponent,
    NotificationsComponent,
    PageSessiontimeoutComponent,
    RangeSliderComponent,
    RatingComponent,
    SweetAlertsComponent,
    TimelineComponent,
    CountersComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    CdTimerModule,
    DragulaModule.forRoot(),
    ImageCropperModule,
    NgxImageComparisonSliderModule,
    NgxNotifierModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,MatSnackBarModule,
    NgxSliderModule,
    NgxStarRatingModule,
    NgxStarsModule,
    SweetAlert2Module,
    ColorPickerModule,
    ClipboardModule,
    NgcCookieConsentModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ]
})
export class AppsModule { }
