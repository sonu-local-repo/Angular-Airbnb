import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


export class AuthInterceptor implements HttpInterceptor{

  constructor(private auth: AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer' + this.auth.getToken()
      }
    });
    return next.handle(req);
  }

}
