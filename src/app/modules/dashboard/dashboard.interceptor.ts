import { HttpInterceptorFn } from '@angular/common/http';

export const dashboardInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
