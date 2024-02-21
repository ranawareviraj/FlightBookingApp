import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { FlightBookingComponent } from './component/flight-booking/flight-booking.component';
import { AuthGuardService } from './service/guards/auth-guard.service';

const routes: Routes = [
  { path:'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'book-flight', component: FlightBookingComponent, canActivate: [AuthGuardService] },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
