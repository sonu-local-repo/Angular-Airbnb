import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isValid;
  userName;
  constructor(private auth: AuthService) {
    // this.isValid = this.auth.isValidToken();
    this.auth.authSubject.subscribe(data =>{
      // console.log("auth subject" + data);
      this.isValid = data;
      this.userName = data;
    });
  }

  ngOnInit() {
    this.auth.authSubject.subscribe(data =>{
      console.log("auth subject" + data);
      this.isValid = data;
      this.userName = data;
    });
    // this.userName = this.auth.getUserEmail();
    // console.log(this.userName);
  }
  logout() {
    // console.log('clicked');
      this.auth.logout();
      // this.isValid = this.auth.isValidToken();
      // console.log(this.isValid);
  }

  ngOnDestroy(){
    this.auth.authSubject.unsubscribe();
  }

}
