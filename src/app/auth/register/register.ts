import { Component } from '@angular/core';
import { InputField, submitResult } from '../dynamic-form/dynamic-form';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
    inputFields : InputField[]  = [{
        title : "Username",
        placeholder : "Min 8 chars",
        required : true,
        pattern: "^.{8,}$",
    },{
        title : "Password",
        pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
        placeholder : "Min 8 chars, incl. A–Z, a–z, 0–9",
        required : true,
        type : "password"
    }]
    onSubmit = (f : NgForm) : Observable<submitResult> => {
      return of({} as submitResult)
    }
}
