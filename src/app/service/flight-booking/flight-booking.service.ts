import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightBookingService {
  API_URL =
    'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';
  constructor(private http : HttpClient ) {}



  bookFlight(flightInfo: any, userName: string):Observable<any>  {

    return this.http.post(this.API_URL, flightInfo, {
      headers: {
        token: environment.token,
        candidate: userName,
      },
    });
  }

}
