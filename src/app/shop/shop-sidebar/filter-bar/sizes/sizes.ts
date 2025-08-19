import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizes',
  standalone: false,
  templateUrl: './sizes.html',
  styleUrl: './sizes.css'
})
export class Sizes {
  @Input() sizes! : number[];
  @Output() output = new EventEmitter<number[] | null>;
  @Output() resetCallback = new EventEmitter<() => void>
  checked : Set<number> = new Set<number>;
  ngOnInit(){
    this.resetCallback.emit(() => this.reset());
  }
  onClick(event :Event){
    const id = +(event.target as HTMLElement).id;
    if(!this.checked.has(id))
      this.checked.add(id);
    else{
      this.checked.delete(id);
    }
    if(this.checked.size == 0){
      this.output.emit(null);
    }
    else{
      this.output.emit([...this.checked]);
    }
  }
  reset(){
    this.checked.clear();
  }
}
