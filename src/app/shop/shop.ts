import { Component } from '@angular/core';
import {shoesApiService} from '../services/shoesApi/shoesApiService';
import {shoeItem, Shoe} from 'athena-shop-types';
import {debounceTime } from 'rxjs';
import { filtersService } from '../services/filter/filtersService';
import { universalFilter } from './shop-sidebar/filter-bar/filter-bar';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { cartQuery } from '../state/cart/cart.query';



const DEBOUNCE_TIME = 500;
enum sortType {
  PriceDescending = "price (high to low)",
  PriceAscending = "price (low to high)",
  PopularityDescending = "popularity (high to low)",
}
@UntilDestroy()
@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  constructor(protected shoesService : shoesApiService,protected filtersService : filtersService,private cartQuery : cartQuery){}
  shoes : shoeItem[] = [];
  distinctShoes : Shoe[] = []
  chosenSort : string = "";
  filters : universalFilter[] = []
  isLoading : boolean = true;
  ngOnInit(){
    this.shoesService.getShoesByFilter({}).subscribe(shoes => {
      const tempShoes = shoes;
      this.setUpFilters(tempShoes);
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
  setUpFilters(shoes : shoeItem[]){
    const prices = [
      ...shoes.reduce((acc, cur) => {
        acc.add(cur.type.price);
        return acc;
      }, new Set<number>())
    ];
    const seen = new Set<string>;
    const brands = shoes.reduce((acc,cur) =>{
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
          sizes : [...shoes.reduce((acc,cur) =>{
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
    const shoesSubscription = this.filtersService.isFilterChanged$.pipe(        
        debounceTime(DEBOUNCE_TIME),
        untilDestroyed(this)
      ).subscribe(() =>{
         this.isLoading = true
         this.shoesService.getShoesByFilter(this.filtersService.getFiltersValues())
        .subscribe(shoes => {
          const cart = [...this.cartQuery.getShoes]
          this.shoes = shoes.reduce((acc,cur) =>{
            const shoeindex = cart.findIndex(s => s.type.id == cur.type.id && s.size == cur.size)
            if(shoeindex == -1){
              acc.push(cur);
            }
            else{
              cart.splice(shoeindex,1);
            }
            return acc;
          },[] as shoeItem[])
          this.updateDistinctShoes();
          this.isLoading = false
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
    return Object.entries(sortType).map((item) => item[1]);
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
  updateDistinctShoes(){
    const seen = new Set<string>();
    const distinctShoes: Shoe[] = [];
    for (const cur of this.shoes) {
      const id = cur.type.id;
      if (seen.has(id)) continue;
      seen.add(id);
      distinctShoes.push(cur.type);
    }
    this.distinctShoes = distinctShoes
  }
}
