import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CardImagesComponent } from './card-images/card-images.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FootersComponent } from './footers/footers.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';
import { TagsComponent } from './tags/tags.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialTabsComponent } from './tabs/material-tabs/material-tabs.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AccordionComponent,
    AlertsComponent,
    AvatarsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CardImagesComponent,
    CarouselComponent,
    DropdownComponent,
    FootersComponent,
    ListgroupComponent,
    MediaObjectComponent,
    ModalComponent,
    NavigationComponent,
    PaginationComponent,
    PanelComponent,
    PopoverComponent,
    ProgressComponent,
    TabsComponent,
    TagsComponent,
    TooltipsComponent,
    MaterialTabsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule, MatButtonModule, MatButtonToggleModule, MatProgressBarModule, MatRadioModule, MatCardModule, MatSliderModule, MatTabsModule
  ]
})
export class ElementsModule { }
