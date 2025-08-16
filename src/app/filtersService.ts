import { Injectable } from '@angular/core';

interface filter{
  title : string
  type : string
  value : any
}
@Injectable({
  providedIn: 'root'
})

export class filtersService {
  private filters : {[key : string] : any} = {}
  clear(){
    this.filters = {}
  }
  getFilters(){
    return {...this.filters};
  }
  update(filter : filter){
    const {title, ...rest} = filter;
    this.filters[filter.title] = rest;
  }
  remove(title : string){
    delete this.filters[title];
  }
}
