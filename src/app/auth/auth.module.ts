import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { CanActivatePages } from './auth-guard-service';

const routes: Routes = [
    {path: 'login', canActivate: [CanActivatePages], component: LoginComponent},
    {path: 'register', canActivate: [CanActivatePages], component: RegisterComponent}
  ];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: []
})
export class AuthModule { }
