import { Injectable } from '@angular/core';
import {shoesFilter, Brand, Shoe, shoeItem, shoesApiServiceInterface, inventoryResponse, checkoutResponse } from './shoesApiService';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from "uuid";
import { cartShoe } from '../../state/cart/cart.store';
import { shoes,shoeItems } from './shoes';



@Injectable({
  providedIn: 'root'
})
export class ShoesApiMock implements shoesApiServiceInterface {
    checkout(shoes: shoeItem[]): Observable<checkoutResponse> {
      const inventoryStatus = this.InventoryCheck(shoes);
      const missingShoes = inventoryStatus.shoes.filter(shoe => !shoe.inStock);
      if(missingShoes.length > 0){
        return of({
          success : false,
          missingShoes : missingShoes
        })
      }
      shoes.forEach(shoe => {
        const shoeIndex = shoeItems.findIndex(shoeItem => shoeItem.type.id == shoe.type.id && shoeItem.size == shoe.size)
        shoeItems.splice(shoeIndex,1);
      })
      return of({
        success : true,
        missingShoes: []
      })
    }
    getTopNMostSoldShoes(n?: number): Observable<Shoe[]> {
      if (!n)
        n = 1;
      if (n > shoes.length)
        return of(shoes);
      return of(shoes.slice(0,n));
    }
    getTopNMostCompetiableShoes(n?: number): Observable<Shoe[]> {
      return of(shoes.slice(0,4));
    }
    getLastNAddedShoe(n?:number): Observable<Shoe[]> {
      if(!n)
        n = 1
      if (n > shoeItems.length)
        n = shoeItems.length;
      return of(shoeItems.slice().sort((a : shoeItem,b : shoeItem) => b.dateCreated.getTime() - a.dateCreated.getTime()).slice(0,n).map((s : shoeItem) => s.type))
    }
    getShoesByFilter(filter: shoesFilter): Observable<shoeItem[]> {
      filter.brand = filter.brand?.map(b => b.toString().replaceAll(" ","_") as Brand)
      let matchingShoes : shoeItem[] = []
      for (const shoe of shoeItems){
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
    getSizesByShoe(shoeId: string): Observable<number[]> {
      const sizes = new Set<number>;
      shoeItems.forEach(shoeItem => {
        if(shoeItem.type.id === shoeId){
            sizes.add(shoeItem.size)
        }
      })
      return of([...sizes]);
    }
    getInventoryCheck(
      shoes: cartShoe[]
    ): Observable<inventoryResponse> {
      return of(this.InventoryCheck(shoes));
    }
    InventoryCheck(shoes: cartShoe[]){
      const res: inventoryResponse = { shoes: [] };
      const stock = [...shoeItems];
      for (const shoe of shoes) {
        const index = stock.findIndex(shoeItem =>
          shoe.size === shoeItem.size && shoe.type.id === shoeItem.type.id
        );
        if (index !== -1) {
          res.shoes.push({ ...shoe, inStock: true });
          stock.splice(index, 1);
        } else {
          res.shoes.push({ ...shoe, inStock: false });
        }
      }
      return res;
    }
}

