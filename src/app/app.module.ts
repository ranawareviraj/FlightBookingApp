import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FlightBookingComponent } from './component/flight-booking/flight-booking.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp } from 'firebase/app';
import { HttpClientModule } from  '@angular/common/http';
initializeApp(environment.fireBase);
@NgModule({
  declarations: [AppComponent, LoginComponent, FlightBookingComponent],
  imports: [BrowserModule,HttpClientModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [], // auth service, fight booking class to be added here
  bootstrap: [AppComponent],
})
export class AppModule {}
