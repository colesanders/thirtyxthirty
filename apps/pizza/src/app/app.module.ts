import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaOverviewComponent } from './pizza/pizza-overview/pizza-overview.component';
import { PizzaDetailComponent } from './pizza/pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [AppComponent, PizzaComponent, PizzaOverviewComponent, PizzaDetailComponent, PizzaListComponent, LoginComponent, FourOhFourComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
