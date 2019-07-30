import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // @ViewChild('myForm') mytemplateForm : ngForm;
  const error = null;

  constructor(private http: HttpClient, private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }
  formSubmit(data) {
   this.authService.CustomerRegistration(data).subscribe((res)=>{
     console.log(res);
     console.log('error'+error);
     if(res){
       this.router.navigate(['/login']);
     }
   }, error => {
     this.error = error.error.details;
   })
  }
}
