import { Observable } from "rxjs";
import { ShoesApiMock } from "./shoesApiMock";
import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";


export enum Brand {
  Yeezy = 'Yeezy',
  Nike = 'Nike',
  Puma = 'Puma',
  Adidas = 'Adidas',
  OffWhite = "Off---White",
  AirJordan = "Air_Jordan"
}
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

export interface Shoe {
    brand : Brand[],
    model : string,
    price : number,
    rates : rate,
    id : string,
}
export interface rate {
    amount : number,
    rank : number,
}
export interface shoeItem {
    size : number,
    dateCreated : Date;
    type : Shoe;
    datePurchased : Date;
    id : string;
}
export interface shoesApiServiceInterface {
    getTopNMostSoldShoes(n? : number): Observable<Shoe[]>;
    getTopNMostCompetiableShoes(n? : number): Observable<Shoe[]>
    getLastNAddedShoe(n? : number) : Observable<Shoe[]>
    getShoesByFilter(filter : shoesFilter) : Observable<shoeItem[]>
    getSizesByShoe(shoeId : string) : Observable<number[]>
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

const sheosApiServiceFactory = (type : string) : shoesApiServiceInterface => {
    return new ShoesApiMock();
}

@Injectable({
  providedIn: 'root'
})
export class shoesApiService implements shoesApiServiceInterface {
    shoesApiServiceProvider : shoesApiServiceInterface = sheosApiServiceFactory("memory");
    getTopNMostSoldShoes(n?: number): Observable<Shoe[]> {
        return this.shoesApiServiceProvider.getTopNMostSoldShoes(n);
    }
    getTopNMostCompetiableShoes(n?: number): Observable<Shoe[]> {
        return this.shoesApiServiceProvider.getTopNMostCompetiableShoes(n);
    }
    getLastNAddedShoe(n? : number): Observable<Shoe[]> {
        return this.shoesApiServiceProvider.getLastNAddedShoe();
    }
    getShoesByFilter(filter : shoesFilter) : Observable<shoeItem[]>{
        return this.shoesApiServiceProvider.getShoesByFilter(filter);
    }
    getSizesByShoe(shoeId : string){
        return this.shoesApiServiceProvider.getSizesByShoe(shoeId);
    }    
} 