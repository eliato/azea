import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'utilities',
    loadChildren: () => import('../../components/utilities/utilities.module').then(m => m.UtilitiesModule)
  },
  {
    path: 'elements',
    loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: 'apps',
    loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
  },
  {
    path: 'apps/chat',
    loadChildren: () => import('../../components/apps/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'apps/contact',
    loadChildren: () => import('../../components/apps/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'apps/file-manager',
    loadChildren: () => import('../../components/apps/file-manager/file-manager.module').then(m => m.FileManagerModule)
  },
  {
    path: 'apps/todo-list',
    loadChildren: () => import('../../components/apps/todo-list/todo-list.module').then(m => m.TodoListModule)
  },
  {
    path: 'apps/user-list',
    loadChildren: () => import('../../components/apps/user-list/user-list.module').then(m => m.UserListModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('../../components/charts/chart.module').then(m => m.ChartSModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'pages/blog',
    loadChildren: () => import('../../components/pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'pages/email',
    loadChildren: () => import('../../components/pages/email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'pages/invoice',
    loadChildren: () => import('../../components/pages/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'pages/pricing',
    loadChildren: () => import('../../components/pages/pricing/pricing.module').then(m => m.PricingModule)
  },
  {
    path: 'pages/profile',
    loadChildren: () => import('../../components/pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'eCommerce',
    loadChildren: () => import('../../components/e-commerce/e-commerce.module').then(m => m.ECommerceModule)
  },
  {
    path: 'switcher',
    loadChildren: () => import('../../components/switcher/switcher.module').then(m => m.SwitcherModule)
  }
];
