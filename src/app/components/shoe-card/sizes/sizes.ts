import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizes',
  standalone: false,
  templateUrl: './sizes.html',
  styleUrl: './sizes.css'
})
export class Sizes {
  @Input() sizes : number[] = [1,2,3,4,5,6];
  @Output() cancel = new EventEmitter<void>();
  onXClick(){
    this.cancel.emit();
  }
  get sortedSizes(){
    return this.sizes.sort()
  }
}
