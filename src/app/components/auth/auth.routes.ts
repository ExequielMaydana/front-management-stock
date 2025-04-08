import { Route } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';


export const AUTH_ROUTES: Route[] = [
//   { path: 'registro', component: SignUpComponent },
  { path: 'iniciar-sesion', component: LogInComponent },
//   { path: 'memberships', component: MembershipsComponent },
//   { path: 'authenticate', component: AuthenticateComponent },
];