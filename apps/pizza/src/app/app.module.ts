import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@thirty/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaDetailComponent } from './pizza/components/pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza/components/pizza-list/pizza-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PizzaOverviewComponent } from './pizza/components/pizza-overview/pizza-overview.component';

const routes: Routes = [
  { path: 'pizza', component: PizzaComponent,
  children: [
    {
      path: ':id', // child route path
      component: PizzaOverviewComponent // child route component that the router renders
    }
  ]
},
  { path: 'login', component: LoginComponent},
  { path: '404', component: FourOhFourComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  declarations: [AppComponent, PizzaComponent, PizzaOverviewComponent, PizzaDetailComponent, PizzaListComponent, LoginComponent, FourOhFourComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(routes)], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
