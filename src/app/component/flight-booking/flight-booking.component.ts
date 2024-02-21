import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service'; // Add this line to import the missing module
import { FlightBookingService } from '../../service/flight-booking/flight-booking.service';
import { validateArrivalDate } from './validateArrivalDate';
import { Router } from '@angular/router';

interface FlightInfoPayload {
  airline: string;
  arrivalDate: string;
  arrivalTime: string;
  flightNumber: string;
  numOfGuests: number;
  comments?: string;
}
@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.scss'],
})
export class FlightBookingComponent {
  bookingSuccess = false;
  bookingFailure = false;
  flightBookingForm: FormGroup = new FormGroup({
    airline: new FormControl('', [Validators.required]),
    arrivalDate: new FormControl('', [
      Validators.required,
      validateArrivalDate,
    ]),
    arrivalTime: new FormControl('', [Validators.required]),
    flightNumber: new FormControl('', [Validators.required]),
    numOfGuests: new FormControl('', [Validators.required]),
    comments: new FormControl(''),
  });
  submitted = false;
  constructor(
    private auth: AuthService,
    private flightBooking: FlightBookingService,
    private router: Router
  ) {}
  onSubmit(): void {
    this.submitted = true;
    console.log(this.flightBookingForm.value);
    if (this.flightBookingForm.valid) {
      const payload: FlightInfoPayload = {
        airline: this.flightBookingForm.get('airline')?.value,
        arrivalDate: this.flightBookingForm.get('arrivalDate')?.value,
        arrivalTime: this.flightBookingForm.get('arrivalTime')?.value,
        flightNumber: this.flightBookingForm.get('flightNumber')?.value,
        numOfGuests: this.flightBookingForm.get('numOfGuests')?.value,
        comments: this.flightBookingForm.get('comments')?.value,
      };
      this.flightBooking
        .bookFlight(payload, this.auth.getUsername())
        .subscribe(
         {
          next: () => {
            this.bookingSuccess = true;
            this.bookingFailure = false;
            this.flightBookingForm.reset();
            this.submitted = false;
          },
          error: () => {
            this.bookingSuccess = false;
            this.bookingFailure = true;
          },
         }
        );
    } else {
      console.log(this.flightBookingForm.get('airline')?.errors);
    }
  }
}
