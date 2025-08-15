import { Component, EventEmitter, Input, Output } from '@angular/core';
import { rangeFilter } from '../filter-bar';

@Component({
  selector: 'app-range',
  standalone: false,
  templateUrl: './range.html',
  styleUrl: './range.css'
})
export class Range {
  @Input() min : number = 0;
  @Input() max! : number;
  curMax = 0;
  curMin = 0;
  @Output() output = new EventEmitter<number>;
  value = 0;
  get BackgroundSize() {
    const percent = (this.value - this.curMin) / (this.curMax - this.curMin) * 100;
    return percent + "%";
  }
  onMaxInput(event : Event){
    this.curMax = Math.min(+(event.target as HTMLInputElement).value,this.max);
    this.onInput();
  }
  onMinInput(event : Event){
    this.curMin = Math.max(+(event.target as HTMLInputElement).value,this.min);
    this.onInput()
  }
  onInput(){
    this.value = (this.curMax - this.curMin) / 2;
    this.output.emit(this.value);
  }
  ngOnInit() {
    this.value = (this.max - this.min) / 2;
    this.curMax = this.max;
    this.curMin = this.min;
  }
}
