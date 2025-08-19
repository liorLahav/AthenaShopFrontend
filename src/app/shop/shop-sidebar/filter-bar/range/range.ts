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
  @Output() output = new EventEmitter<{min: number, max: number} | null>;
  @Output() resetCallback = new EventEmitter<() => void>;
  value = 0;
  curMax = 0;
  curMin = 0;
  get BackgroundSize() {
    const percent = (this.curMax - this.min) / (this.max - this.min) * 100;
    return percent + "%";
  }
  onMaxInput(event : Event){
    this.curMax = Math.min(+(event.target as HTMLInputElement).value,this.max);
    this.updateRange();
  }
  onMinInput(event : Event){
    this.curMin = Math.max(+(event.target as HTMLInputElement).value,this.min);
    this.updateRange();
  }
  onThumbInput(){
    this.updateRange();
  }
  updateRange(){
    if(this.min == this.curMin && this.max == this.curMax){
      this.output.emit(null);
    }
    else {
      this.output.emit({min : this.curMin , max : this.curMax});
    }
  }
  reset(){
    this.curMin = this.min;
    this.curMax = this.max;
  }

  ngOnInit() {
    this.curMax = this.max;
    this.curMin = this.min;
    this.resetCallback.emit(() => this.reset());
  }
}
