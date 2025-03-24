import { Route } from "@angular/router";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LogInComponent } from "./components/log-in/log-in.component";

export const AUTH_ROUTES: Route[] = [
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LogInComponent }
];