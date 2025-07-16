import { Component, Inject } from '@angular/core';
import { InputField, submitResult } from '../dynamic-form/dynamic-form';
import {NgForm } from '@angular/forms';
import { User, USERS_SERVICE_TOKEN, UsersService } from '../../usersService';
import { catchError, map, Observable, of } from 'rxjs';
import { UserService } from '../../state/user/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(@Inject(USERS_SERVICE_TOKEN) private users: UsersService,private userService: UserService){}
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
      const username : string | undefined = this.inputFields[0].value;
      const password : string | undefined = this.inputFields[1].value;
      if (username && password){
        return this.users.login(username,password).pipe(
          map(data => {
            if (data){
              this.userService.updateUser(data);
              return { success: true, message: "Logged in!" }

            }
            return { success: false, message: "Wrong credentials." }
          }),
          catchError(() => of({
            success : false,
            message : "Server problem."
          })))
      }
    }
    return of({
      success: false,
      message: "Form is invalid."
    })
  }
}
