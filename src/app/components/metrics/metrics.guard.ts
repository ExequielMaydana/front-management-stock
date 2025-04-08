import { CanActivateFn } from '@angular/router';

export const metricsGuard: CanActivateFn = (route, state) => {
  return true;
};
