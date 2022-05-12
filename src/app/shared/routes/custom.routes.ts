import { Routes } from '@angular/router';

export const customRoute: Routes = [
  {
    path: 'custom-pages',
    loadChildren: () => import('../../pages/custom-pages/custom-pages.module').then(m => m.CustomPagesModule),
  }
];
