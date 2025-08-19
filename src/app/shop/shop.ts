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
  displayShoes : DisplayShoe[] = [];
  chosenSort : string = "";
  filters : universalFilter[] = []
  ngOnInit() : void{
    this.shoesService.getShoesByFilter({}).subscribe(shoes => {
      this.shoes = shoes;
      this.setUpFilters();
      this.sortShoes();
      console.log(this.shoes);
      this.subscribeToShoesByFilter();
    })
  }
  setUpFilters(){
    const prices = [
      ...this.shoes.reduce((acc, cur) => {
        acc.add(cur.type.price);
        return acc;
      }, new Set<number>())
    ];
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
          options : [...this.shoes.reduce((acc,cur) =>{
            cur.type.brand.forEach(b => acc.add(b))
            return acc;
          },new Set<Brand>())].sort(),
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
          this.updateDisplayShoes();
        });
    })
  }
  getSortType(event: Event) {
    this.chosenSort = (event.target as HTMLSelectElement).value;
    console.log(this.chosenSort);
    this.sortShoes();
  }
  sortShoes(){
    console.log(this.chosenSort);    
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
    this.updateDisplayShoes();
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
  updateDisplayShoes(){
    console.log("ll")
    const seen = new Set<string|number>();
    const distinctShoes: Shoe[] = [];
    for (const cur of this.shoes) {
      const id = cur.type.id;
      if (seen.has(id)) continue;
      seen.add(id);
      distinctShoes.push(cur.type);
    }
    this.displayShoes =  distinctShoes.map(shoe => getDisplayShoe(shoe))
  }
}
