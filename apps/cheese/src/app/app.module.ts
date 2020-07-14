import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@thirty/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheeseComponent } from './cheese/cheese.component';
import { CheeseInfoComponent } from './cheese/cheese-mdv/cheese-info/cheese-info.component';
import { CheeseListComponent } from './cheese/cheese-mdv/cheese-list/cheese-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CheeseMDVComponent } from './cheese/cheese-mdv/cheese-mdv.component';
import { SingleDetailComponent } from './cheese/single-detail/single-detail.component';

const routes: Routes = [
  { path: 'cheese', component: CheeseComponent,
    children: [
      {
        path: ':id', // child route path
        component: CheeseMDVComponent // child route component that the router renders
      },
      {
        path: 'detail/:id',
        component: SingleDetailComponent // another child route component that the router renders
      }
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: '404', component: FourOhFourComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  declarations: [AppComponent,CheeseComponent, CheeseInfoComponent, CheeseListComponent, LoginComponent, FourOhFourComponent, CheeseMDVComponent, SingleDetailComponent],
  imports: [ BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MaterialModule,RouterModule.forRoot(routes)], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
