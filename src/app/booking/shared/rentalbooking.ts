import { RentalModel } from 'src/app/rentals/rental/rental-model.component';


export class Rentalbooking {
    id: string;
    startAt: string;
    endAt: string;
    guests: number;
    createdAt: Date;
    days: number;
    rental: RentalModel;

}