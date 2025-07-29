import { Observable } from "rxjs";
import { ShoesApiMock } from "./shoesApiMock";
import { Injectable } from "@angular/core";

export enum Brand {
  Yeezy = 'Yeezy',
  Nike = 'Nike',
  Puma = 'Puma',
  Adidas = 'Adidas',
  OffWhite = "Off_White",
  AirJordan = "Air_Jordan"
}


export interface DisplayShoe{
    name : string,
    path : string,
    rating : number,
    price : number,
}
export const defalutShoe : Shoe = {
    brand : [Brand.Adidas,Brand.Yeezy],
    model : "350 natural",
    price : 100,
    rates : {
        amount : 100,
        rank : 4.5,
    },
    id : "item_4"
}

export interface Shoe{
    brand : Brand[],
    model : string,
    price : number,
    rates : rate,
    id : string,
}
export interface rate{
    amount : number,
    rank : number,
}
export interface shoeItem{
    size : number,
    dateCreated : Date;
    type : Shoe;
    datePurchased : Date;
    id : string;
}
export interface shoesApiServiceInterface{
    getTopNMostSoldShoes(n? : number): Observable<Shoe[]>;
    getTopNMostCompetiableShoes(n? : number): Observable<Shoe[]>
    getLastNAddedShoe(n? : number) : Observable<Shoe[]>
}
export const getDisplayShoe = (shoe : Shoe) =>{
    let shoeBrandKey = "";
    shoe.brand.forEach(b => shoeBrandKey += b + "_")
    shoeBrandKey = shoeBrandKey.slice(0,-1);
    console.log(shoeBrandKey);
    return {
        name : shoe.brand.at(-1)?.replace("_"," ") + " " + shoe.model.toLowerCase(),
        path : "assets/images/items/" + shoeBrandKey.toLowerCase() + "_" + shoe.model.replaceAll(" ","_") + ".png",
        rating : shoe.rates.rank,
        price : shoe.price,
    }
}

@Injectable({
  providedIn: 'root'
})
export class shoesApiService implements shoesApiServiceInterface{
    shoesApiServiceProvider : shoesApiServiceInterface = new ShoesApiMock();
    getTopNMostSoldShoes(n?: number): Observable<Shoe[]> {
        return this.shoesApiServiceProvider.getTopNMostSoldShoes(n);
    }
    getTopNMostCompetiableShoes(n?: number): Observable<Shoe[]> {
        return this.shoesApiServiceProvider.getTopNMostCompetiableShoes(n);
    }
    getLastNAddedShoe(n? : number): Observable<Shoe[]> {
        return this.shoesApiServiceProvider.getLastNAddedShoe();
    }    
} 