import { ModelService } from './../model/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: any[];

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.rentals = this.modelService.getRentals();
  }


}
