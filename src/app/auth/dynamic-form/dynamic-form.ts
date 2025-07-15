import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  standalone: false,
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css'
})
export class DynamicForm {
  title = "Login"
  inputs = [{
    title : "user name",
    placeholder : "הכנס שם משתמש"
  },{
    title : "password",
    placeholder : "הכנס סיסמא",
  },{
    title : "Yogev"
  }]

}
