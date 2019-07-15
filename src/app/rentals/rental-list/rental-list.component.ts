import { ModelService } from './../model/model.service';
import { Component, OnInit } from '@angular/core';
import { RentalModel } from '../rental/rental-model.component';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: RentalModel[];

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    // this.rentals = this.modelService.getRentals();
  //   const rentalObservable = this.modelService.getRentals();
  //   rentalObservable.subscribe(
  //     (data) => {
  //       this.rentals = data;
  //     }
  //   );


  this.modelService.getRentals().subscribe(
    (data) => {
      this.rentals = data;
    }
  );
  }

}
