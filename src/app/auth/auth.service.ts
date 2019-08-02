import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OnInit } from '@angular/core';
import * as moment from 'moment';

export class AuthService implements OnInit {
  localToken;
  jwt = new JwtHelperService();
  authSubject = new Subject();


    constructor(private http: HttpClient){
      this.localToken = localStorage.getItem('id_token') || false;

    }
    ngOnInit(){

    }

    saveJWTToken(token: string){
      localStorage.setItem('id_token', token);
      const decodedToken = this.jwt.decodeToken(this.localToken);
      this.authSubject.next(decodedToken.email);

    }

    CustomerRegistration(data): Observable<any> {
        // console.log(data.form.value);
        return this.http.post('/app/v1/user/register', data.form.value);
    }
    CustomerLogin(data): Observable<any> {
        return this.http.post('/app/v1/user/login', data.form.value).pipe( tap(token => { this.saveJWTToken(token) } ));
    }
    isValidToken(){
      if(this.localToken){
        const decodedToken = this.jwt.decodeToken(this.localToken);
        this.authSubject.next(decodedToken.email);
        return moment().isBefore(moment.unix(decodedToken.exp));
      }
      return false;
    }
    logout(){
      localStorage.removeItem('id_token');
      this.authSubject.next(null);
    }
    getUserEmail(){
      if(this.localToken){
        const decodedToken = this.jwt.decodeToken(this.localToken);
        this.authSubject.next(decodedToken.email);
        return decodedToken.email;
      }

    }
}
