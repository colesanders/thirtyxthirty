import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/logins';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = false;
  
  constructor(private http: HttpClient) { }

  validateLoginAttempt(login: Login){
   this.getLogins()
    .pipe( 
      map((arr)=>{
        for(const user of arr){
          if(user.username === login.username && user.password === login.password){
            return true;
          }
        }
        return false;
      })
    )
    .subscribe((valid)=>{
      this.loggedIn = valid;
    });
    
  }

  getLogins(): Observable<[Login]> {
    return this.http.get<[Login]>(BASE_URL);
  }

  deleteLogin(login: Login) {
    return this.http.delete(BASE_URL + "/" + login.id);
  }

  createLogin(login: Login) {
    return this.http.post(BASE_URL, login);
  }

  updateLogin(login: Login){
    return this.http.put(BASE_URL + "/" + login.id, login);
  }
}
