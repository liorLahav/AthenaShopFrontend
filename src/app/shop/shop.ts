import { Component } from '@angular/core';
import { DisplayShoe, shoesFilter, getDisplayShoe, shoesApiService } from '../shoesApiService';
import {map, tap } from 'rxjs';
import { ShoeCard } from '../components/shoe-card/shoe-card';
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
  constructor(protected shoesService : shoesApiService){}
  sortOptions = Object.values(sortTypes);
  filter : shoesFilter = {}
  shoes : DisplayShoe[] = [];

  ngOnInit() : void{
    this.fetchShoesByFilter();
  }
  fetchShoesByFilter(){
        this.shoesService.getShoesByFilter(this.filter).pipe(
      map(data => data.map(shoe => getDisplayShoe(shoe))),
    ).subscribe(displayShoes => this.shoes = displayShoes);
  }
}
