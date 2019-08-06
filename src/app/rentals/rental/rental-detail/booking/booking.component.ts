import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @Input() rental;

  constructor() { }

  ngOnInit() {
  }
  public daterange: any = {};

  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
      locale: { format: 'MM-DD-YYYY' },
      alwaysShowCalendars: false,
      opens: 'left',
      drops:'up'
  };

  public selectedDate(value: any, datepicker?: any) {
      // this is the date the iser selected
      console.log(value);

      // any object can be passed to the selected event and it will be passed back here
      datepicker.start = value.start;
      datepicker.end = value.end;

      // or manupulat your own internal property
      this.daterange.start = value.start;
      this.daterange.end = value.end;
      this.daterange.label = value.label;
  }

}
