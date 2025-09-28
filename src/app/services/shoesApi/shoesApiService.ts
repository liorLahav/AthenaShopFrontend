import { Observable } from "rxjs";
import { ShoesApiMock } from "./shoesApiMock";
import { Injectable, InjectionToken } from "@angular/core";
import { v4 as uuid } from "uuid";
import { cartShoe } from "../../state/cart/cart.store";
import { cartShoeStatus } from "../../cart/cart";
import { Brand, Shoe, shoeItem } from "athena-shop-types";



export interface shoesFilter{
    n? : number
    brand? : Brand[],
    size? : number[],
    price? : {
        min : number,

        max : number,
    }
}

export interface DisplayShoe {
    id : string,
    name : string,
    path : string,
    rating : number,
    price : number,
}
export const defalutShoe : Shoe = {
  id: uuid(),
  brand: [Brand.Adidas, Brand.Yeezy],
  model: "350 Beluga",
  price: 220,
  rates: {
    rank: 5.0,
    amount: 0
  }
};

export interface inventoryResponse{
    shoes : cartShoeStatus[]
}
export interface checkoutResponse{
    success : boolean,
    missingShoes : cartShoe[]
}
export interface shoesApiService {
    getTopNMostSoldShoes(n? : number): Observable<Shoe[]>;
    getTopNMostCompetiableShoes(n? : number): Observable<Shoe[]>
    getLastNAddedShoe(n? : number) : Observable<Shoe[]>
    getShoesByFilter(filter : shoesFilter) : Observable<shoeItem[]>
    getSizesByShoe(shoeId : string) : Observable<number[]>
    getInventoryCheck(shoes : cartShoe[]): Observable<inventoryResponse>
    checkout(shoes : cartShoe[]) : Observable<checkoutResponse>
}
export const getDisplayShoe = (shoe : Shoe) => {
    let shoeBrandKey = shoe.brand.join("_");
    return {
        id : shoe.id,
        name : shoe.brand.at(-1)?.replace("_"," ") + " " + shoe.model.toLowerCase(),
        path : "assets/images/items/" + shoeBrandKey.toLowerCase() + "_" + shoe.model.replaceAll(" ","_").toLowerCase() + ".png",
        rating : shoe.rates.rank,
        price : shoe.price,
    }
}

export const SHOES_API_SERVICE_TOKEN = new InjectionToken<shoesApiService>('shoesService');

