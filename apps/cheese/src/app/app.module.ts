import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheeseComponent } from './cheese/cheese.component';
import { CheeseMdvComponent } from './cheese/cheese-mdv/cheese-mdv.component';
import { CheeseInfoComponent } from './cheese/2-mdv/cheese-info/cheese-info.component';
import { CheeseListComponent } from './cheese/2-mdv/cheese-list/cheese-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [AppComponent, CheeseComponent, CheeseMdvComponent, CheeseInfoComponent, CheeseListComponent, LoginComponent, FourOhFourComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
