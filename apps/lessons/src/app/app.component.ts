import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'first-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lessons App';
  links = [
    { path: '/home', title: 'Home' },
  ];

  constructor(private http: HttpClient) {}
}
