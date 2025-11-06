import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizes',
  standalone: false,
  templateUrl: './sizes.html',
  styleUrl: './sizes.css'
})
export class Sizes {
  @Input({required : true}) sizes! : number[];
  @Output() cancel = new EventEmitter<void>();
  @Output() sizeChose = new EventEmitter<number>();
  onXClick(){
    this.cancel.emit();
  }
  onSizeClick(event : Event){
    const target = event.target as HTMLElement;
    this.sizeChose.emit(+target.id);
  }
  get sortedSizes(){
    return this.sizes.sort((a, b) => a - b)
  }
}
