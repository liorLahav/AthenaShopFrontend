import { Component, Inject } from '@angular/core';
import { InputField, submitResult } from '../dynamic-form/dynamic-form';
import { NgForm } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { RegisterResponse, USERS_API_SERVICE_TOKEN, UsersApiService } from '../../UsersApiService';

const SERVER_PROBLEM : RegisterResponse = {
  success : false,
  message : "Server not responding please try agian later"
}
const INVALID_FORM : RegisterResponse = {
  success : false,
  message : "Inalid Form"
}

export const passwordRegexPattern = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
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
        pattern: passwordRegexPattern,
        placeholder : "Min 8 chars, incl. A–Z, a–z, 0–9",
        required : true,
        type : "password"
    }]
    onSubmit = (f : NgForm) : Observable<submitResult> => {
      if (f.valid){
        const username : string  = this.inputFields[0].value as string;
        const password : string  = this.inputFields[1].value as string;  
        return this.usersApiService.register(username,password).pipe(
          map(res => res),
          catchError(res => of(SERVER_PROBLEM))
        )
      }
      return of(INVALID_FORM);
    }
}
