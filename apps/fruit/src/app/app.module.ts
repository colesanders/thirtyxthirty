import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@thirty/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit/fruit-list/fruit-list.component';
import { FruitInfoComponent } from './fruit/fruit-info/fruit-info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'fruit', component: FruitComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [AppComponent, FruitComponent, FruitListComponent, FruitInfoComponent, LoginComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(routes)], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}