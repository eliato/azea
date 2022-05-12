import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CookiesComponent } from './cookies/cookies.component';
import { CountersComponent } from './counters/counters.component';
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

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'cookies',
        component: CookiesComponent
      },
      {
        path: 'counters',
        component: CountersComponent
      },{
        path: 'dragula-cards',
        component: DragulaCardComponent
      },
      {
        path: 'image-comparsion',
        component: ImageComparsionComponent
      },
      {
        path: 'image-crop',
        component: ImageCropComponent
      },
      {
        path: 'loaders',
        component : LoadersComponent
      },
      {
        path: 'rating',
        component : RatingComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'page-sessiontimeout',
        component: PageSessiontimeoutComponent
      },
      {
        path: 'range-slider',
        component: RangeSliderComponent
      },
      {
        path: 'sweet-alerts',
        component: SweetAlertsComponent
      },
      {
        path: 'time-line',
        component: TimelineComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
