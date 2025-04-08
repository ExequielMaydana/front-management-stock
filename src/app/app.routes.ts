import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/components/dashboard/dashboard.component';
import { DASHBOARD_ROUTES } from './components/dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // children: [
    //   { path: 'auth', children: AUTH_ROUTES },
    // ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: DASHBOARD_ROUTES,
  },
];
