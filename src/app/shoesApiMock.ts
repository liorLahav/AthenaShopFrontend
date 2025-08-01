import { Injectable } from '@angular/core';
import { Brand, Shoe, shoeItem, shoesApiService, shoesApiServiceInterface } from './shoesApiService';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShoesApiMock implements shoesApiServiceInterface {

  private shoes: Shoe[] = [
    {
      id: '1',
      brand: [Brand.Adidas,Brand.Yeezy],
      model: '350 oreo',
      price: 220,
      rates: {
        amount: 2100,
        rank: 4.5
      }
    },
    {
      id: '2',
      brand: [Brand.Adidas,Brand.Yeezy],
      model: '700 wave runner',
      price: 300,
      rates: {
        amount: 1850,
        rank: 4.7
      }
    },
    {
      id: '3',
      brand: [Brand.Nike,Brand.AirJordan],
      model: '1 low unc',
      price: 110,
      rates: {
        amount: 1560,
        rank: 4.3
      }
    },
    {
      id: '4',
      brand: [Brand.Adidas,Brand.Yeezy],
      model: 'slides bone',
      price: 90,
      rates: {
        amount: 2890,
        rank: 4.1
      }
    }
  ];
  private ShoeItems: shoeItem[] = [
  {
    id: 'item_1',
    size: 9,
    dateCreated: new Date('2024-01-15'),
    type: this.shoes[0], // Yeezy 350 Oreo
    datePurchased: new Date('2024-01-20')
  },
  {
    id: 'item_2',
    size: 10.5,
    dateCreated: new Date('2024-02-10'),
    type: this.shoes[1], // Yeezy 700 Wave Runner
    datePurchased: new Date('2024-02-15')
  },
  {
    id: 'item_3',
    size: 8.5,
    dateCreated: new Date('2024-03-05'),
    type: this.shoes[2], // Air Jordan 1 Low UNC
    datePurchased: new Date('2024-03-10')
  }
  ];
    getTopNMostSoldShoes(n?: number): Observable<Shoe[]> {
      if (!n)
        n = 1;
      if (n > this.shoes.length)
        return of(this.shoes);
      return of(this.shoes.slice(0,n));
    }
    getTopNMostCompetiableShoes(n?: number): Observable<Shoe[]> {
      return of(this.shoes.slice(0,4));
    }
    getLastNAddedShoe(n?:number): Observable<Shoe[]> {
      if(!n)
        n = 1
      if (n > this.ShoeItems.length)
        n = this.ShoeItems.length;
      return of(this.ShoeItems.slice().sort((a : shoeItem,b : shoeItem) => b.dateCreated.getTime() - a.dateCreated.getTime()).slice(0,n).map((s : shoeItem) => s.type))
    }
}
