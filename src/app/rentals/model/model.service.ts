import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalModel } from '../rental/rental-model.component';

export class ModelService {

  selectedRental;
  constructor(private http: HttpClient){}

  getRentals(): Observable<any> {
    return  this.http.get('/app/v1/rentals');

  }
  getRentalById(id): Observable<any> {

      return this.http.get('/app/v1/rentals/' + id);
  }


}
