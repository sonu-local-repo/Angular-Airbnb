import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    error;
    isRegistered = '';
    decodedToken;
    jwt = new JwtHelperService();
      constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

      ngOnInit() {

        this.route.params.subscribe(param => {
          if (param['registered'] === 'success') {
              this.isRegistered = 'Registration is successfully, please login';
          }
        });
      }



      public login(formData: NgForm) {
        console.log(formData.form.value);
        this.authService.CustomerLogin(formData).subscribe((res) => {
          if (res) {
            // this.authService.saveJWTToken(res);
            //  this.decodedToken = this.jwt.decodeToken(res);
            //  console.log(moment().isAfter(this.decodedToken.exp));
            //  console.log(moment,"=>",(this.decodedToken.exp));
            // // console.log(this.decodedToken);
            // localStorage.setItem('id_token', res);

            this.router.navigate(['/']);
          }
        }, error => {
          console.log('error' + this.error);
          this.error = error.error.details;
        });
       }


  }



