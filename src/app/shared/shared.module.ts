import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout-components/header/header.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { TabToTopComponent } from './layout-components/tab-to-top/tab-to-top.component';
import { SwitcherComponent } from './layout-components/switcher/switcher.component';
import { FullLayoutComponent } from './layout-components/layout/full-layout/full-layout.component';
import { ContentLayoutComponent } from './layout-components/layout/content-layout/content-layout.component';
import { ErrorLayoutComponent } from './layout-components/layout/error-layout/error-layout.component';
import { HorizontalLayoutComponentsComponent } from './horizontal-layout-components/horizontal-layout/horizontal-layout-components.component';
import { HoriHeaderComponent } from './horizontal-layout-components/hori-header/hori-header.component';
import { HoriSidebarComponent } from './horizontal-layout-components/hori-sidebar/hori-sidebar.component';
import { HoriSwitcherComponent } from './horizontal-layout-components/hori-switcher/hori-switcher.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './layout-components/page-header/page-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullscreenDirective } from './directives/fullscreen-toggle.directive';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SwitcherLayoutComponent } from './switcher-layout/switcher-layout/switcher-layout.component';
import { LoaderComponent } from './layout-components/loader/loader.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    SidebarComponent,
    TabToTopComponent,
    SwitcherComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    ErrorLayoutComponent,
    HorizontalLayoutComponentsComponent,
    HoriHeaderComponent,
    HoriSidebarComponent,
    HoriSwitcherComponent,
    FooterComponent,
    PageHeaderComponent,
    FullscreenDirective,
    SwitcherLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,ReactiveFormsModule, 
    PerfectScrollbarModule,
    NgbModule
  ],
  exports:[
    FullLayoutComponent,ErrorLayoutComponent, ContentLayoutComponent, PageHeaderComponent, HorizontalLayoutComponentsComponent, TabToTopComponent, SwitcherLayoutComponent, LoaderComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
