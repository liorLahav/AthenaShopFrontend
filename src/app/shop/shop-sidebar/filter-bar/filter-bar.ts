import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filtersService } from '../../../filtersService';
import { Brand } from '../../../shoesApiService';

export interface filter{
  title : string,
  type : string,
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
  options : Brand[],
}
export type universalFilter =  checkboxFilter | rangeFilter | sizeFilter;

interface sizeOutput{
  type : "size"
  value : number[] | null
}
interface checkboxOutput{
  type : "checkbox"
  value : string[] | null
}
interface rangeOutput{
  type : "range"
  value : { min: number; max: number; } | null
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
    @Input() filter! : rangeFilter | sizeFilter | checkboxFilter;
    onOutput(output : outputType){
      if (output.value == null){
        this.filters.remove(this.filter.title);
      }
      else{
        this.filters.update({title : this.filter.title ,type : output.type, value : output.value})
      }
    }
}
