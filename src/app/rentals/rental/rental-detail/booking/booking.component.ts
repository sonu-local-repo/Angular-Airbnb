import { Component, OnInit, Input } from '@angular/core';
import { Rentalbooking } from 'src/app/booking/shared/rentalbooking';
import * as moment from 'moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @Input() rental;
  booking: Rentalbooking[];
 

  constructor() { }

  ngOnInit() {
    let rentalBooking: Rentalbooking[];
    if (this.rental.bookings) {
      rentalBooking = this.rental.bookings;
      this.booking = this.rental.bookings;
     }
     this.getBookedOutDates();
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
      // console.log(value);

      // any object can be passed to the selected event and it will be passed back here
      datepicker.start = value.start;
      datepicker.end = value.end;

      // or manupulat your own internal property
      this.daterange.start = value.start;
      this.daterange.end = value.end;
      this.daterange.label = value.label;
  }
  private getBookedOutDates() {
    let bookedDate = [];
    this.booking.forEach(date => {
      let mStartAt = moment(date.startAt);
      const mEndAt = moment(date.endAt);
      while (mStartAt <= mEndAt){
        bookedDate.push(mStartAt.format('Y-MM-DD'));
        mStartAt.add(1,'day');
      }
    });
    console.log(this.rental.bookings);
    console.log(bookedDate);
  }

}
