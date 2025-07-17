import { Component, Inject } from '@angular/core';
import { InputField, submitResult } from '../dynamic-form/dynamic-form';
import {NgForm } from '@angular/forms';
import {Observable, of } from 'rxjs';
import { UserService } from '../../state/user/user.service';

const INVALID_FORM : submitResult = {
    success: false, 
    message: "Form is invalid.",
}

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private userService: UserService){}
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
  
  onSubmit = (f:NgForm) : Observable<submitResult> =>{
    if(f.valid){
      const username : string  = this.inputFields[0].value as string;
      const password : string  = this.inputFields[1].value as string;
      return this.userService.login(username,password);
    }
    return of(INVALID_FORM)
  }
}
