import { Component } from '@angular/core';
import {getDisplayShoe, shoesApiService, shoeItem, Shoe, Brand, DisplayShoe } from '../shoesApiService';
import {debounceTime, of  } from 'rxjs';
import { filtersService } from '../filtersService';
import { universalFilter } from './shop-sidebar/filter-bar/filter-bar';


const DEBOUNCE_TIME = 500;
enum sortType {
  PriceDescending = "price (high to low)",
  PriceAscending = "price (low to high)",
  PopularityDescending = "popularity (high to low)",
}

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
  constructor(protected shoesService : shoesApiService,protected filtersService : filtersService){}
  shoes : shoeItem[] = [];
  chosenSort : string = "";
  filters : universalFilter[] = []
  ngOnInit() : void{
    this.shoesService.getShoesByFilter({}).subscribe(shoes => {
      this.shoes = shoes;
      this.setUpFilters();
      this.sortShoes();
      this.subscribeToShoesByFilter();
    })
  }
  clearAllFilters(){
    this.filtersService.clear();
  }
  clearFilter(event : Event){
    const title = (event.target as HTMLElement).id;
    this.filtersService.remove(title);
  }
  setUpFilters(){
    const prices = [
      ...this.shoes.reduce((acc, cur) => {
        acc.add(cur.type.price);
        return acc;
      }, new Set<number>())
    ];
    const seen = new Set<string>;
    const brands = this.shoes.reduce((acc,cur) =>{
            if(!seen.has(cur.type.id)){
              cur.type.brand.forEach(brand =>{
                if(!(brand in acc)){
                  acc[brand] = 0;
                }
                acc[brand] += 1;
              })
              seen.add(cur.type.id);
            }
            return acc;
          }, {} as {[key : string] : number})
    
    this.filters = [
        {
          title : "Size",
          type : "size",
          sizes : [...this.shoes.reduce((acc,cur) =>{
            acc.add(cur.size)
            return acc;
          },new Set<number>())].sort((a, b) => a - b)
        },
        {
          title : "Brand",
          type : "checkbox",
          options : Object.entries(brands).map(([key, value]) => ({
                    key : key,
                    title: key.replaceAll("_", " "),
                    amount: value
                  }))
        },
        {
          title : "Price",
          type: "range",
          min : Math.min(...prices),
          max : Math.max(...prices),
        }
      ]
  }
  subscribeToShoesByFilter(){
    this.filtersService.isFilterChanged$.pipe(        
        debounceTime(DEBOUNCE_TIME),
      ).subscribe(() =>{
        this.shoesService.getShoesByFilter(this.filtersService.getFiltersValues())
        .subscribe(shoes => {
          this.shoes = shoes
        });
    })
  }
  getSortType(event: Event) {
    this.chosenSort = (event.target as HTMLSelectElement).value;
    this.sortShoes();
  }
  sortShoes(){
    switch(this.chosenSort){
      case sortType.PriceAscending:
        this.shoes = [...this.shoes].sort((a : shoeItem,b : shoeItem) => a.type.price - b.type.price);
        break;
      case sortType.PriceDescending:
        this.shoes = [...this.shoes].sort((a : shoeItem,b : shoeItem) => b.type.price - a.type.price)
        break;
      default: 
        this.shoes = [...this.shoes].sort((a : shoeItem,b : shoeItem) => b.type.rates.rank - a.type.rates.rank)
    }
  }
  get typesArray(){
    return Object.entries(sortType).map((item) => ({key : item[0] , val : item[1]}));
  }
  get filtersArray(){
    const arr: {title: string, value: string}[] = [];
    for (let filter of Object.entries(this.filtersService.getFilters())){
      if(filter[1].type == 'range'){
        arr.push({title : filter[0],value : `${filter[1].value.min}-${filter[1].value.max}`})
      }
      else{
        arr.push({title : filter[0],value : filter[1].value.sort().join(',')})
      }
    }
    return arr;
  }
  get displayShoes(){
    const seen = new Set<string|number>();
    const distinctShoes: Shoe[] = [];
    for (const cur of this.shoes) {
      const id = cur.type.id;
      if (seen.has(id)) continue;
      seen.add(id);
      distinctShoes.push(cur.type);
    }
    return distinctShoes.map(shoe => getDisplayShoe(shoe))
  }
}
