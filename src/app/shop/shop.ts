import { Component } from '@angular/core';
import { DisplayShoe, shoesFilter, getDisplayShoe, shoesApiService, shoeItem, Shoe, Brand } from '../shoesApiService';
import {debounceTime, take, pipe, of  } from 'rxjs';
import { ShoeCard } from '../components/shoe-card/shoe-card';
import { filtersService } from '../filtersService';
import { filter, universalFilter } from './shop-sidebar/filter-bar/filter-bar';


const DEBOUNCE_TIME = 500;

const sortTypes = {
  priceAcending : "price (low to high)",
  priceDcending : "price (high to low)",
  popularityDecending : "popularity (low to high)",
}
@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
  constructor(protected shoesService : shoesApiService,protected filtersService : filtersService){}
  sortTypes = {
  priceAcending : "price (low to high)",
  priceDcending : "price (high to low)",
  popularityDecending : "popularity (low to high)",
  }
  shoes : shoeItem[] = [];
  chosenSort = "priceAcending"
  filters : universalFilter[] = []
  ngOnInit() : void{
    this.shoesService.getShoesByFilter({}).subscribe(shoes => {
      this.shoes = shoes;
      this.setUpFilters();
      this.subscribeToShoesByFilter();
    })
  }
  setUpFilters(){
    const prices = [
      ...this.shoes.reduce((acc, cur) => {
        console.log(cur);
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
          },new Set<number>())].sort()
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
    console.log(this.filters);
  }
  subscribeToShoesByFilter(){
    this.filtersService.isFilterChanged$.pipe(        
        debounceTime(DEBOUNCE_TIME),
      ).subscribe(() =>{
        this.shoesService.getShoesByFilter(this.filtersService.getFiltersValues())
        .subscribe(shoes => {this.shoes = shoes
          return of(shoes)
        }
        );
    })
    this.setUpFilters()
  }
  get typesArray(){
    return Object.entries(sortTypes).map((item) => ({key : item[0] , val : item[1]}));
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
  get distinctShoes(){
    return Object.values(this.shoes.reduce((acc,cur) =>{
      acc[cur.type.id] = cur.type
      return acc;
    },{} as {[key : string] : Shoe}))
  }
  get dispalyShoes(){
    const distinctShoes = Object.values(this.shoes.reduce((acc,cur) =>{
      acc[cur.type.id] = cur.type
      return acc;
    },{} as {[key : string] : Shoe}))
    return distinctShoes.map(shoe => getDisplayShoe(shoe))
  }
}
