import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filtersService } from '../../../filtersService';

export interface filter{
  title : string,
}
export interface sizeFilter extends filter{
  type : "size"
  sizes : number[], 
}
export interface rangeFilter extends filter{
  type : "range"
  min : number,
  max : number, 
}
export interface checkboxFilter extends filter{
  type : "checkbox",
  options : string[],
}

interface sizeOutput{
  type : "size"
  value : number[]
}
interface checkboxOutput{
  type : "checkbox"
  value : string[]
}
interface rangeOutput{
  type : "range"
  value : { min: number; max: number; }
}

type outputType = sizeOutput | checkboxOutput | rangeOutput;


@Component({
  selector: 'app-filter-bar',
  standalone: false,
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBar {
    constructor (private filters : filtersService){}
    @Input() title! : string;
    @Input() filter! : rangeFilter | sizeFilter | checkboxFilter;
    
    onOutput(output : outputType){
      this.filters.update({title : this.title , value : output.value})
    }
}
