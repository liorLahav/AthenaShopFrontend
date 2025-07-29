import { Observable } from "rxjs";
import { ShoesApiMock } from "./shoesApiMock";
import { Injectable } from "@angular/core";

enum brand{
    "Yeezy",
    "Adidas",
    "Nike",
    "Puma"
}

export interface DisplayShoe{
    name : string,
    path : string,
    rating : number,
    price : number,
}

export interface Shoe{
    brand : brand,
    model : string,
    price : number,
    rates : rate,
    id : string,
}
export interface rate{
    amount : string,
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
    return {
        name : shoe.model[0].toUpperCase() + shoe.model.slice(1).toLowerCase(),
        path : "assets/images/items/" + shoe.model.replaceAll(" ","_") + ".png",
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