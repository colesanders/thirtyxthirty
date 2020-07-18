import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@thirty/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LessonComponent } from './lessons/lessons.component';
import { LessonDetailComponent } from './lessons/components/lessons-detail/lessons-detail.component';
import { LessonListComponent } from './lessons/components/lessons-list/lessons-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { LessonOverviewComponent } from './lessons/components/lessons-overview/lessons-overview.component';


import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { AppEffects } from './app.effects';
import { CoreDataModule } from '@thirty/core-data';

const routes: Routes = [
  { path: 'lesson', component: LessonComponent,
  children: [
    {
      path: ':id', // child route path
      component: LessonOverviewComponent // child route component that the router renders
    }
  ]
},
  { path: 'login', component: LoginComponent},
  { path: '404', component: FourOhFourComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    LessonOverviewComponent,
    LessonDetailComponent,
    LessonListComponent,
    LoginComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule, 
    CoreDataModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }), 
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
