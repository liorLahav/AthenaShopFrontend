import { Component, Inject } from '@angular/core';
import { InputField, submitResult } from './dynamic-form/dynamic-form';
import {NgForm } from '@angular/forms';
import {Observable, of, tap } from 'rxjs';
import { UserService } from '../state/user/user.service';
import { Router } from '@angular/router';
import { ROUTES } from '../routes';

const INVALID_FORM : submitResult = {
    success: false, 
    message: "Form is invalid.",
}

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class Login {
  constructor(private userService: UserService,private router :Router){}
  inputFields : InputField[]  = [{
      title : "Username",
      placeholder : "Username goes here",
      required : true,
      pattern: "^.{5,}$",
  },{
      title : "Password",
      placeholder : "Dont foregt the password",
      pattern : "^.{5,}$",
      required : true
  }]
  title = "Login"
  linkRoute = "register"
  linkText = "New here ? create new account here"
  
  onSubmit = (f:NgForm) : Observable<submitResult> =>{
    if(f.valid){
      const username : string  = this.inputFields[0].value as string;
      const password : string  = this.inputFields[1].value as string;
      return this.userService.login(username,password).pipe(
        tap({
          next: (res: submitResult) => {
            if(res.success)
            setTimeout(() => {
              this.router.navigate([ROUTES.HOME]);
            },2000);
          }
        })
      );
    }
    return of(INVALID_FORM)
  }
}
