import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';

const routes: Routes = [
  {path: '', component: RentalListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
