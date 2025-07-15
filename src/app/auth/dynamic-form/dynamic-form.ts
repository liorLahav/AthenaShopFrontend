import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface InputField{
  title : string,
  name : string,
  placeholder? : string,
  pattern: string,
  value? : string,
  required :boolean
}
@Component({
  selector: 'app-dynamic-form',
  standalone: false,
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css'
})
export class DynamicForm {
  @Input() inputFilleds! : InputField[];
  @Input() title! : string;
  onSubmit = (f : NgForm) =>{
    console.log(f.invalid);
  }
}
