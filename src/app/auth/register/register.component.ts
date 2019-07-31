import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error = null;
  ngOnInit() {

  }

  constructor(private http: HttpClient, private authService: AuthService,private router: Router) { }

  formSubmit(data) {
   this.authService.CustomerRegistration(data).subscribe((res)=>{
     console.log(res);
     console.log('error'+ this.error);
     if(res){
       this.router.navigate(['/login']);
     }
   }, error => {
     this.error = error.error.details;
   })
  }
}
