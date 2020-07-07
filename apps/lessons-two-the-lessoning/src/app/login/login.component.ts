import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Login } from '@thirty/api-interfaces';
import { LoginService } from '@thirty/core-data'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'thirty-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username : [''],
      password : [''],
    })
  }

  validateLogin(){
    let login = this.loginForm.value;
    login.id = null;

    this.loginService.validateLoginAttempt(login)
    
  }

}
