import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { RentalDetailComponent } from './rentals/rental-detail/rental-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalListComponent,
    RentalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
