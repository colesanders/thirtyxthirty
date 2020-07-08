import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@thirty/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarInfoComponent } from './car/car-info/car-info.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: 'car', component: CarComponent},
  { path: 'login', component: LoginComponent},
  { path: '404', component: FourOhFourComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  declarations: [AppComponent, CarComponent, CarListComponent, CarInfoComponent, LoginComponent, FourOhFourComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(routes)], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}