// app/app.routes.ts
import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './modules/auth/auth.routes';

export const routes: Routes = [
  { path: 'auth', children: AUTH_ROUTES }
]