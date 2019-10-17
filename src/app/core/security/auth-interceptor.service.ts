import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private securityService: SecurityService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.securityService.obterUsuarioLogado();
    if (currentUser && currentUser.id) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser.id}`
        }
      });
    }

    // console.log(`interceptor ${request.url}`);

    return next.handle(request);
  }
}
