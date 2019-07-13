import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  @Input() rental;

  constructor() { }

  ngOnInit() {
  }

}
