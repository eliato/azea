import { Routes } from '@angular/router';


export const switcher: Routes = [
  {
    path: 'switcher',
    loadChildren: () => import('../../components/switcher/switcher.module').then(m => m.SwitcherModule)
  }
];
