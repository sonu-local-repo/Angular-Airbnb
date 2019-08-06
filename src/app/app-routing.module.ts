import { RentalComponent } from './rentals/rental/rental.component';
import { RentalDetailComponent } from './rentals/rental/rental-detail/rental-detail.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { CanActivatePages } from './auth/auth-guard-service';

const routes: Routes = [
  {path: '', redirectTo: 'rentals', pathMatch: 'full'},
  {path: 'rentals', canActivate:[CanActivatePages], component: RentalComponent, children:[
        {path: '', canActivate:[CanActivatePages], component: RentalListComponent },
         { path: ':id', canActivate:[CanActivatePages], component: RentalDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
