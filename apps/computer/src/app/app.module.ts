import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@thirty/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputerComponent } from './computer/computer.component';
import { ComputerDetailComponent } from './computer/components/computer-detail/computer-detail.component';
import { ComputerListComponent } from './computer/components/computer-list/computer-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ComputerOverviewComponent } from './computer/components/computer-overview/computer-overview.component';

const routes: Routes = [
  { path: 'computer', component: ComputerComponent,
  children: [
    {
      path: ':id', // child route path
      component: ComputerOverviewComponent // child route component that the router renders
    }
  ]
},
  { path: 'login', component: LoginComponent},
  { path: '404', component: FourOhFourComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  declarations: [AppComponent, ComputerComponent, ComputerOverviewComponent, ComputerDetailComponent, ComputerListComponent, LoginComponent, FourOhFourComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(routes)], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
