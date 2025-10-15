import { Observable } from "rxjs";
import {InjectionToken } from "@angular/core";
import { v4 as uuid } from "uuid";
import { cartShoe } from "../../state/cart/cart.store";
import { cartShoeStatus } from "../../cart/cart";
import { BasicShoe, ShoeItem, ShoesFilter, Brand, BuyShoeResponse } from "../../../graphql/generated";

export interface DisplayShoe {
    id : string,
    name : string,
    path : string,
    rating : number,
    price : number,
}
export const defalutShoe : BasicShoe = {
  id: uuid(),
  brand: [Brand.Nike],
  model: "Air Max",
  price: 100,
  rates: 4.0
};

export interface inventoryResponse{
    shoes : cartShoeStatus[]
}
export interface shoesApiService {
    getTopNMostSoldShoes(n? : number): Observable<BasicShoe[]>;
    getTopNMostCompetiableShoes(n? : number): Observable<BasicShoe[]>
    getLastNAddedShoe(n? : number) : Observable<BasicShoe[]>
    getShoesByFilter(filter : ShoesFilter) : Observable<ShoeItem[]>
    getSizesByShoe(shoeId : string) : Observable<number[]>
    getInventoryCheck(shoes : cartShoe[]): Observable<inventoryResponse>
    checkout(shoes : cartShoe[]) : Observable<BuyShoeResponse>
}
export const getDisplayShoe = (shoe : BasicShoe) => {
    let shoeBrandKey = shoe.brand.join("_");
    return {
        id : shoe.id,
        name : shoe.brand.at(-1)?.replace("_"," ") + " " + shoe.model.toLowerCase(),
        path : "assets/images/items/" + shoeBrandKey.toLowerCase() + "_" + shoe.model.replaceAll(" ","_").toLowerCase() + ".png",
        rating : shoe.rates,
        price : shoe.price,
    }
}

export const SHOES_API_SERVICE_TOKEN = new InjectionToken<shoesApiService>('shoesService');

