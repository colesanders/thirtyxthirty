import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '@thirty/core-data';

@Component({
  selector: 'thirty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'Car App';
  links = [
    { path: '/car', title: 'Car' },
    { path: '/login', title: 'Login' },
    {path: '/404', title: '404 Test Link'},
  ];

  constructor(private http: HttpClient, public loginService: LoginService){}
}