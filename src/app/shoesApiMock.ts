import { Injectable } from '@angular/core';
import {shoesFilter, Brand, Shoe, shoeItem, shoesApiService, shoesApiServiceInterface } from './shoesApiService';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from "uuid";



@Injectable({
  providedIn: 'root'
})
export class ShoesApiMock implements shoesApiServiceInterface {
  shoes: Shoe[] = [
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Beluga",
      price: 220,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Bred",
      price: 220,
      rates: { rank: 4.5, amount: 4 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Natural",
      price: 220,
      rates: { rank: 3.0, amount: 10 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Oat",
      price: 220,
      rates: { rank: 4.2, amount: 8 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Oreo",
      price: 220,
      rates: { rank: 4.7, amount: 12 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Zebra",
      price: 220,
      rates: { rank: 3.9, amount: 9 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "450 Cloud White",
      price: 200,
      rates: { rank: 2.0, amount: 24 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "450 Dark Slate",
      price: 200,
      rates: { rank: 3.2, amount: 2 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Geode",
      price: 220,
      rates: { rank: 4.1, amount: 4 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Inertia",
      price: 220,
      rates: { rank: 4.2, amount: 3 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Mauve",
      price: 220,
      rates: { rank: 4.6, amount: 6 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Static",
      price: 220,
      rates: { rank: 4.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 V2 Cream",
      price: 220,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 V2 Static",
      price: 220,
      rates: { rank: 4.3, amount: 9 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Wave Runner",
      price: 220,
      rates: { rank: 4.8, amount: 6 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Bone",
      price: 70,
      rates: { rank: 4.5, amount: 3 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Core",
      price: 70,
      rates: { rank: 4.5, amount: 5 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Pure",
      price: 70,
      rates: { rank: 4.5, amount: 3 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike],
      model: "Dunk Low Panda",
      price: 115,
      rates: { rank: 4.7, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Dior",
      price: 1000,
      rates: { rank: 4.6, amount: 50 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Starfish",
      price: 130,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Unc",
      price: 130,
      rates: { rank: 4.3, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Wolf Grey",
      price: 130,
      rates: { rank: 4.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Mid Chicago Black Toe",
      price: 115,
      rates: { rank: 4.9, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Fragment Low",
      price: 150,
      rates: { rank: 5.0, amount: 4 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Mocha High",
      price: 200,
      rates: { rank: 5.0, amount: 21 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Mocha Low",
      price: 170,
      rates: { rank: 4.8, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Unc To Chicago",
      price: 200,
      rates: { rank: 4.8, amount: 2 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "4 University Blue",
      price: 190,
      rates: { rank: 4.0, amount: 7 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Dunk Low Lot 1",
      price: 150,
      rates: { rank: 5.0, amount: 11 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Dunk Low Lot 45",
      price: 150,
      rates: { rank: 5.0, amount: 10 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 1 Chicago",
      price: 200,
      rates: { rank: 4.5, amount: 9 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 1 Unc",
      price: 200,
      rates: { rank: 4.2, amount: 8 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 4 Sail",
      price: 190,
      rates: { rank: 4.0, amount: 7 }
    },
    {
      id: uuid(),
      brand: [Brand.Puma],
      model: "Rs Dreamer Purple",
      price: 125,
      rates: { rank: 3.4, amount: 6 }
    },
    {
      id: uuid(),
      brand: [Brand.Puma],
      model: "Rs-x Core",
      price: 110,
      rates: { rank: 3.2, amount: 5 }
    }
  ];
  shoeItems: shoeItem[] = [
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[0],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[1],  id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[2],  id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[3],  id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[4],  id: uuid() },
    { size: 10,  dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[5],  id: uuid() },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[6],  id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[7],  id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[8],  id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[9],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[10], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[11], id: uuid() },
    { size: 5.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[12], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[13], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[14], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[15], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[16], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[17], id: uuid() },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[18], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[19], id: uuid() },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[20], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[21], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[22], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[23], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[24], id: uuid() },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[25], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[26], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[27], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[28], id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[29], id: uuid() },
    { size: 2,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[30], id: uuid() },
    { size: 1,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[31], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[32], id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[33], id: uuid() },
    { size: 5.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[34], id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[35], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[0],  id: uuid() },
    { size: 2,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[1],  id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[2],  id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[3],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[4],  id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[5],  id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[6],  id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[7],  id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[8],  id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[9],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[10], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[11], id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[12], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[13], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[14], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[15], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[16], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[17], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[18], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[19], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[20], id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[21], id: uuid() },
    { size: 1,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[22], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[23], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[24], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[25], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[26], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[27], id: uuid() },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[28], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[29], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[30], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[31], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[32], id: uuid() },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[33], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[34], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[35], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[1],  id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[2],  id: uuid() },
    { size: 6,   dateCreated: new Date("2024-01-01"), datePurchased: new Date("2024-01-01"), type: this.shoes[3],  id: uuid() }, // שמרתי על 2024
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[4],  id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[5],  id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[6],  id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[7],  id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[8],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[9],  id: uuid() },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[10], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[11], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[12], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[13], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[14], id: uuid() },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[15], id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[16], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[17], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[18], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[19], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[20], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[21], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[22], id: uuid() },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[23], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[24], id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[25], id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[26], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[27], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: this.shoes[28], id: uuid() },
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
      if (n > this.shoeItems.length)
        n = this.shoeItems.length;
      return of(this.shoeItems.slice().sort((a : shoeItem,b : shoeItem) => b.dateCreated.getTime() - a.dateCreated.getTime()).slice(0,n).map((s : shoeItem) => s.type))
    }
    getShoesByFilter(filter: shoesFilter): Observable<shoeItem[]> {
      let matchingShoes : shoeItem[] = []
      for (const shoe of this.shoeItems){
        if (filter?.n == matchingShoes.length)
          break;
        if (filter.brand && !(shoe.type.brand.filter(b => filter.brand?.includes(b)).length >= 1))
          continue;
        if (filter.size && !(filter.size.includes(shoe.size)))
          continue;
        if (filter.price){
          if (shoe.type.price > filter.price.max || shoe.type.price < filter.price.min)
            continue;
        }
        matchingShoes.push(shoe);
      }
      return of(matchingShoes);
    }

}
