import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@first-app/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LessonsListComponent } from './home/lessons-list/lessons-list.component';
import { LessonsInfoComponent } from './home/lessons-info/lessons-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, LessonsListComponent, LessonsInfoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(routes)], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
