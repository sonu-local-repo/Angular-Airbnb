import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Daterangepicker } from 'ng2-daterangepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { RentalDetailComponent } from './rentals/rental/rental-detail/rental-detail.component';
import { RentalListItemComponent } from './rentals/rental-list/rental-list-item/rental-list-item.component';
import { RentalComponent } from './rentals/rental/rental.component';

import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CanActivatePages } from './auth/auth-guard-service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BookingComponent } from './rentals/rental/rental-detail/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalListComponent,
    RentalDetailComponent,
    RentalListItemComponent,
    RentalComponent,
    BookingComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    Daterangepicker
  ],
  providers: [AuthService, CanActivatePages, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
