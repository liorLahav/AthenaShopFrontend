import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizes',
  standalone: false,
  templateUrl: './sizes.html',
  styleUrl: './sizes.css'
})
export class Sizes {
  @Input() sizes! : number[];
  @Output() output = new EventEmitter<number[]>;
  checked : Set<number> = new Set<number>;
  onClick(event :Event){
    const id = +(event.target as HTMLElement).id;
    if(!this.checked.has(id))
      this.checked.add(id);
    else{
      this.checked.delete(id);
    }
    this.output.emit([...this.checked]);
  }
}
