import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivatePages implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      // console.log('is valid=>'+this.auth.isValidToken)
      console.log(state.url);
      if (this.auth.isValidToken()) {
        console.log(state.url);
        if (state.url.includes('login')|| state.url.includes('register')) {
          console.log('can activate2');
          this.route.navigate(['/rentals']);
          return false;
        } else {
          return true;
        }
      } else if (state.url.includes('login')|| state.url.includes('register')) {

        if (!this.auth.isValidToken()){
          return true;
        } else {
          return false;
        }

      }

      else {
        // tslint:disable-next-line: no-unused-expression
        this.route.navigate(['/login']);
        return false;
      }
  // return true;
  }
}
