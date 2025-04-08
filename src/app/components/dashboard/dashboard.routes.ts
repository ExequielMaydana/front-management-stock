import { Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'resumen' },

  { path: 'resumen', component: SummaryComponent },

  //   { path: 'products', component: ListProductsComponent },
];
