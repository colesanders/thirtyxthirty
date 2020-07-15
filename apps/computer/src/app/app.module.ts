import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputerComponent } from './computer/computer.component';
import { ComputerOverviewComponent } from './computer/components/computer-overview/computer-overview.component';
import { ComputerDetailComponent } from './computer/components/computer-detail/computer-detail.component';
import { ComputerListComponent } from './computer/components/computer-list/computer-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [AppComponent, ComputerComponent, ComputerOverviewComponent, ComputerDetailComponent, ComputerListComponent, LoginComponent, FourOhFourComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
