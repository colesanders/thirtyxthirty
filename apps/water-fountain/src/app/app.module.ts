import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@thirty/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WaterFountainComponent } from './water-fountain/water-fountain.component';
import { WaterFountainInfoComponent } from './water-fountain/water-fountain-info/water-fountain-info.component';
import { WaterFountainListComponent } from './water-fountain/water-fountain-list/water-fountain-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: 'waterFountain', component: WaterFountainComponent},
  { path: 'login', component: LoginComponent},
  { path: '404', component: FourOhFourComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  declarations: [AppComponent,WaterFountainComponent, WaterFountainInfoComponent, WaterFountainListComponent, LoginComponent, FourOhFourComponent],
  imports: [ BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MaterialModule,RouterModule.forRoot(routes)], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
