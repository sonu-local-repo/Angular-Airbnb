import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formData: NgForm) {
    console.log(formData.form.value);
    this.authService.CustomerLogin(formData).subscribe((res) => {
      console.log(res);

      if (res) {
        localStorage.setItem('id_token', res);
        this.router.navigate(['/']);
      }
    }, error => {
      console.log('error' + this.error);
      this.error = error.error.details;
    });
   }


  }



