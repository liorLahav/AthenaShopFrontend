import { Injectable } from '@angular/core';
import { shoesApiService } from '../shoesApi/shoesApiService';
import { BehaviorSubject, debounceTime, map } from 'rxjs';
export const ALL_FILTERS = 'all'
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
  private removedFiltersSource = new BehaviorSubject<string>("");
  removedFilters$ = this.removedFiltersSource.asObservable();

  private filterChanged(){
    this.isFilterChangedSource.next();
  }
  private filterRemoved(title : string){
    this.removedFiltersSource.next(title);
  }

  clear(){
    this.filters = {}
    this.filterChanged();
    this.filterRemoved(ALL_FILTERS);
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
    this.filterChanged();
  }
  remove(title : string){
    delete this.filters[title.toLowerCase()];
    this.filterChanged();
    this.filterRemoved(title);
  }
}
