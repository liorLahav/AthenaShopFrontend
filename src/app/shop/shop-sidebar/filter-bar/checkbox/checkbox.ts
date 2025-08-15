import { Component, EventEmitter, Input, Output } from '@angular/core';
import { checkboxFilter } from '../filter-bar';

@Component({
  selector: 'app-checkbox',
  standalone: false,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css'
})
export class Checkbox {
  @Input() options : string[] = [];
  @Output() output  = new EventEmitter<string[]>
  checked : string[] = [];
  onInput(event:Event){
    const target = event.target as HTMLInputElement;
    if(target){
      const isChecked = target.checked;
      if(isChecked){
        this.checked.push(target.id);
      }
      else{
        this.checked = this.checked.filter(item => item != target.id);
      }
    }
  }
}
