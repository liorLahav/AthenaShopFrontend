import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ALL_FILTERS, filtersService } from '../../../filtersService';
import { Brand } from '../../../shoesApiService';
import { option } from './checkbox/checkbox';

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
  options : option[],
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
    reset : () => void = () =>{};
    value = ""
    visable = true;
    ngOnInit(){
      this.onFilterRemove();
    }
    onResetCallback(reset : () => void){
      this.reset = reset;
    }
    onOutput(output : outputType){
      if (output.value == null){
        this.filters.remove(this.filter.title);
      }
      else{
        this.filters.update({title : this.filter.title ,type : output.type, value : output.value})
      }
    }
    changeVisablity(){
      this.visable = !this.visable;
    }
    onFilterRemove(){
      this.filters.removedFilters$.subscribe(title =>{
        if(title == this.filter.title.toLocaleLowerCase() || ALL_FILTERS == title){
          this.reset();
        }
      })
    }
}
