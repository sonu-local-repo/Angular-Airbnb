import { ModelService } from './../model/model.service';
import { Component, OnInit } from '@angular/core';
import { RentalModel } from '../rental/rental-model.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: RentalModel[];

  constructor(private modelService: ModelService, private httpClient: HttpClient) { }

  ngOnInit() {
  this.modelService.getRentals().subscribe(
    (data: RentalModel[]) => {
      this.rentals = data;
    }
  );




   }


}
