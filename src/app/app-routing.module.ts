
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResisterComponent } from './auth/resister/resister.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { ContentLayoutComponent } from './shared/layout-components/layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './shared/layout-components/layout/full-layout/full-layout.component';
import { content } from './shared/routes/routes';
import { errorRoute } from './shared/routes/error.routes';
import { ErrorLayoutComponent } from './shared/layout-components/layout/error-layout/error-layout.component';
import { customRoute } from './shared/routes/custom.routes';
import { HorizontalLayoutComponentsComponent } from './shared/horizontal-layout-components/horizontal-layout/horizontal-layout-components.component';
import { SwitcherLayoutComponent } from './shared/switcher-layout/switcher-layout/switcher-layout.component';
import { switcher } from './shared/routes/switcher';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  { path: 'auth/register', component: ResisterComponent},
  { path: 'auth/forgot-password', component: ForgetPasswordComponent },
  { path: 'auth/verify-email-address', component: VerifyEmailComponent },
  {
    path: '',
    component: SwitcherLayoutComponent,
    canActivate: [AdminGuard],
    children: switcher
  },
  // // Vertical layout
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AdminGuard],
    children: content
  },
  // // Horizontal layout
  // {
  //   path: '',
  //   component: HorizontalLayoutComponentsComponent,
  //   canActivate: [AdminGuard],
  //   children: content
  // },
  {
    path: '',
    component: ErrorLayoutComponent,
    canActivate: [AdminGuard],
    children: errorRoute
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AdminGuard],
    children: customRoute
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],],
  exports: [RouterModule]
})
export class AppRoutingModule { }
