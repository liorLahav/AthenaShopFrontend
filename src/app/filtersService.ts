import { Injectable } from '@angular/core';
import { shoesApiService } from './shoesApiService';
import { BehaviorSubject, debounceTime, map } from 'rxjs';

interface filter{
  title : string
  type : string
  value : any
}
@Injectable({
  providedIn: 'root'
})

export class filtersService {
  constructor(private shoesService : shoesApiService){}
  private filters : {[key : string] : any} = {}
  private isFilterChangedSource = new BehaviorSubject<void>(undefined);
  isFilterChanged$ = this.isFilterChangedSource.asObservable();

  private filterChanged(){
    this.isFilterChangedSource.next();
  }

  clear(){
    this.filters = {}
    this.filterChanged();
  }
  getFilters(){
    return {...this.filters};
  }
  getFiltersValues(){
    return Object.fromEntries(Object.keys(this.filters).map(k => [k,this.filters[k].value]));
  }
  update(filter : filter){
    const {title, ...rest} = filter;
    this.filters[filter.title.toLowerCase()] = rest;
    console.log(this.filters);
    this.filterChanged();
  }
  remove(title : string){
    delete this.filters[title.toLowerCase()];
    console.log(this.filters);
    this.filterChanged();
  }
}
