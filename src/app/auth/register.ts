import { Component, Inject } from '@angular/core';
import { InputField, submitResult } from './dynamic-form/dynamic-form';
import { NgForm } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { USERS_API_SERVICE_TOKEN, UsersApiService } from '../services/usersApi/UsersApiService';
import { RegisterResponse } from '../../graphql/generated';

interface passwordResponse{
  success : boolean,
  message? : string
}

const MISSING_LOWERCASE_LETTER : passwordResponse = {
  success : false,
  message : "Password must include an lowercase letter"
}
const MISSING_UPPERCASE_LETTER : passwordResponse = {
  success : false,
  message : "Password must include an uppercase letter"
}
const MISSING_DIGIT : passwordResponse = {
  success : false,
  message : "Password must include a digit"
}
const PASSWORD_VALID : passwordResponse = {
  success : true
}
const PASSWORDS_ARE_DIFFERENT : RegisterResponse = {
  success : false,
  message : "Passwords are different"
}
const INVALID_FORM : RegisterResponse = {
  success : false,
  message : "Invalid Form"
}
const SERVER_PROBLEM : RegisterResponse = {
  success : false,
  message : "Server not responding please try agian later"
}
export const passwordRegexPattern = "^(?=.*[a-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class Register {
    constructor(@Inject(USERS_API_SERVICE_TOKEN) private usersApiService: UsersApiService){}
    
    inputFields : InputField[]  = [{
        title : "Username",
        placeholder : "Min 8 chars",
        required : true,
        pattern: "^.{8,}$",
    },{
        title : "Password",
        placeholder : "Min 8 chars, incl. A–Z, a–z, 0–9",
        required : true,
        type : "password",
        pattern: "^.{8,}$",
    },{
        title : "Repeat Password",
        required : true,
        type : "password",
        pattern: "^.{8,}$",
    }]

    title = "Register"
    linkRoute = "login"
    linkText = "Already have an account ? Login here"

    validatePassword(password : string) : passwordResponse {
        if (!/[a-z]/.test(password))
          return MISSING_LOWERCASE_LETTER;
        else if(!/[A-Z]/.test(password))
          return MISSING_UPPERCASE_LETTER;
        else if(!/\d/.test(password))
          return MISSING_DIGIT;
        return PASSWORD_VALID;
    }

    onSubmit = (f : NgForm) : Observable<submitResult> => {
      if (f.valid){
        const username : string  = this.inputFields[0].value as string;
        const password : string  = this.inputFields[1].value as string;
        if (this.inputFields[1].value != this.inputFields[2].value)
          return of(PASSWORDS_ARE_DIFFERENT)
        const passwordValidatonResponse : passwordResponse = this.validatePassword(password);
        if(passwordValidatonResponse.success)
          return this.usersApiService.register(username,password).pipe(
            catchError(_ => of(SERVER_PROBLEM))
          )
        return of(passwordValidatonResponse as RegisterResponse);
      }
      return of(INVALID_FORM);
    }
}
