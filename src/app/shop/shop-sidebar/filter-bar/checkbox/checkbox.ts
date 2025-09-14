import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface option{
  key : string,
  title : string,
  amount : number
}

@Component({
  selector: 'app-checkbox',
  standalone: false,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css'
})
export class Checkbox {
  @Input() options : option[] = [];
  @Output() output  = new EventEmitter<string[] | null>
  @Output() resetCallback = new EventEmitter<() => void>
  checked : {[key : string] : boolean} = {};
  onInput(event:Event){
    const target = event.target as HTMLInputElement;
    if(target){
      const isChecked = target.checked;
      if(isChecked){
        this.checked[target.id] = true;
      }
      else{
        this.checked[target.id] = false;
      }
      if (Object.values(this.checked).filter(val => val).length == 0){
        this.output.emit(null);
      }
      else{
        const checkedOptions : option[] = this.options.filter((option) => this.checked[option.key]);
        this.output.emit(checkedOptions.map(option => option.title));
      }
    }
  }
  reset(){
    this.options.forEach(option =>{this.checked[option.key] = false})
  }
  ngOnInit(){
    this.resetCallback.emit(() => this.reset());
    this.reset();
  }

}
