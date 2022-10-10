import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Api-Key live_Q1ijdRGwJYQS28LPRjrZcaQaUha6wBr3A3DG9B85xbZGyFPBzNHWf0RNqMvJmEAg`
      }
    });
    return next.handle(req);
  }
}
