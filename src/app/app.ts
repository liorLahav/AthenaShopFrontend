import { Component } from '@angular/core';
import { InputField } from './auth/dynamic-form/dynamic-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'AthenaShopFrontend';
    inputs : InputField[] = [{
    title : "User name",
    name: "username",
    placeholder : "Username goes here",
    required : true,
    pattern: "^.{8,}$",
  },{
    title : "Password",
    name:"password",
    placeholder : "Dont foregt the password",
    pattern : "^.{8,}$",
    required : true
  }]
}
