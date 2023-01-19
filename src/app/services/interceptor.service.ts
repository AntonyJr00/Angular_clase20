import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('paso por aqui la peticion http');
    return next.handle(req);
  }
}
