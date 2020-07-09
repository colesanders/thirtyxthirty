import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '@thirty/core-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'thirty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Car App';
  links = [
    { path: '/car', title: 'Car' },
    { path: '/login', title: 'Login' },
    {path: '/404', title: '404 Test Link'},
  ];

  constructor(private http: HttpClient, public loginService: LoginService, 
    private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.loginService.autoLogin();

    if(!this.loginService.currentUser.logged_in){
      this.router.navigate(['/login']);
    }
  }
}