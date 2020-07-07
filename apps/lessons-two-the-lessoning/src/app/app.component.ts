import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '@thirty/core-data';

@Component({
  selector: 'thirty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lessons App';
  links = [
    { path: '/home', title: 'Home' },
    { path: '/login', title: 'Login' },
  ];

  constructor(private http: HttpClient, public loginService: LoginService) {}
}
