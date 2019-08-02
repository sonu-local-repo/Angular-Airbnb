import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { RentalDetailComponent } from './rentals/rental/rental-detail/rental-detail.component';
import { RentalListItemComponent } from './rentals/rental-list/rental-list-item/rental-list-item.component';
import { RentalComponent } from './rentals/rental/rental.component';

import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalListComponent,
    RentalDetailComponent,
    RentalListItemComponent,
    RentalComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
