import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

export interface InputField{
  title : string,
  placeholder? : string,
  pattern: string,
  value? : string,
  required :boolean
}
export interface submitResult{
  success : boolean,
  message : string,
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
  @Input() submitCallback! : (f : NgForm) => Observable<submitResult>;
  success = false;
  messsage : string = "";
  onSubmit = (f : NgForm) =>{
    const res = this.submitCallback(f).subscribe(res =>{
      this.success = res.success;
      this.messsage = res.message;
    });
  }
}
