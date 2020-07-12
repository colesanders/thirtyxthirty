import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WaterFountainComponent } from './water-fountain/water-fountain.component';
import { WaterFountainInfoComponent } from './waterFountain/water-fountain-info/water-fountain-info.component';
import { WaterFountainListComponent } from './waterFountain/water-fountain-list/water-fountain-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [AppComponent, WaterFountainComponent, WaterFountainInfoComponent, WaterFountainListComponent, LoginComponent, FourOhFourComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
