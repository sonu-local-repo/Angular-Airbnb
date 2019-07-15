import { ModelService } from './../../model/model.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  routerId: string;
  rental;
  constructor(private router: ActivatedRoute, private modelSerive: ModelService ) { }

  ngOnInit() {
    this.router.params.subscribe((param)=>{
        this.routerId = param['id'];
    });
    this.rental = this.modelSerive.getRentalById(this.routerId);
    console.log(this.rental);
  }

}
