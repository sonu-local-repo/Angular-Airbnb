import { Observable } from 'rxjs';
import { RentalModel } from '../rental/rental-model.component';

export class ModelService {

  selectedRental;

  rentals: any[] = [ {
    id: 1,
    title: "Manson House",
    city: "New York",
    street: "Timesqure",
    category: "house",
    rate: 250,
    image:"https://hgtvhome.sndimg.com/content/dam/images/door/fullset/2014/4/2/0/doory2014-1005-benedict-canyon-drive-beverly-hills-ca-living-room.jpg.rend.hgtvcom.966.644.suffix/1427751434340.jpeg",
    bedrooms: 5,
    shared: false,
    createdAt: "01/01/2019",
    discreption:"Beautiful home in the city center"

  },
  {
    id: 2,
    title: "Manson House",
    city: "New York",
    street: "Timesqure",
    category: "house",
    rate: 250,
    image:"https://static.dezeen.com/uploads/2014/08/House-K-by-K2YT-_dezeen_784_2.jpg",
    bedrooms: 5,
    shared: false,
    createdAt: "01/01/2019",
    discreption:"Beautiful home in the city center"

  },
  {
    id: 3,
    title: "Manson House",
    city: "New York",
    street: "Timesqure",
    category: "house",
    rate: 250,
    image:"https://image.shutterstock.com/image-illustration/green-interior-living-room-260nw-174021608.jpg",
    bedrooms: 5,
    shared: false,
    createdAt: "01/01/2019",
    discreption:"Beautiful home in the city center"

  },
  {
    id: 4,
    title: "Manson House",
    city: "New York",
    street: "Timesqure",
    category: "house",
    rate: 250,
    image:"https://static.dezeen.com/uploads/2014/08/House-K-by-K2YT-_dezeen_784_2.jpg",
    bedrooms: 5,
    shared: false,
    createdAt: "01/01/2019",
    discreption:"Beautiful home in the city center"

  },   {
    id: 5,
    title: "Manson House",
    city: "New York",
    street: "Timesqure",
    category: "house",
    rate: 250,
    image:"https://image.shutterstock.com/image-illustration/green-interior-living-room-260nw-174021608.jpg",
    bedrooms: 5,
    shared: false,
    createdAt: "01/01/2019",
    discreption:"Beautiful home in the city center"

  },
  {
    id: 6,
    title: "Manson House",
    city: "New York",
    street: "Timesqure",
    category: "house",
    rate: 250,
    image:"https://static.dezeen.com/uploads/2014/08/House-K-by-K2YT-_dezeen_784_2.jpg",
    bedrooms: 5,
    shared: false,
    createdAt: "01/01/2019",
    discreption:"Beautiful home in the city center"

  },
  {
    id: 7,
    title: "Manson House",
    city: "New York",
    street: "Timesqure",
    category: "house",
    rate: 250,
    image:"https://image.shutterstock.com/image-illustration/green-interior-living-room-260nw-174021608.jpg",
    bedrooms: 5,
    shared: false,
    createdAt: "01/01/2019",
    discreption:"Beautiful home in the city center"

  },
  {
    id: 8,
    title: "Manson House",
    city: "New York",
    street: "Timesqure",
    category: "house",
    rate: 250,
    image:"https://static.dezeen.com/uploads/2014/08/House-K-by-K2YT-_dezeen_784_2.jpg",
    bedrooms: 5,
    shared: false,
    createdAt: "01/01/2019",
    discreption:"Beautiful home in the city center"

  }];

  getRentals(): Observable<RentalModel[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 2000);

    });

  }
  getRentalById(id): RentalModel {
      this.rentals.forEach(rental => {
        if (rental.id == id) {
          this.selectedRental= rental;
        }
      });
      return this.selectedRental;
  }
}
