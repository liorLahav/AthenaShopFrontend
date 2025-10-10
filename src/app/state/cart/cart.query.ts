import { Injectable } from "@angular/core";
import { cartShoe, cartState, cartStore } from "./cart.store";
import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
const DELIVERY_PRICE = 10;


@Injectable({providedIn : 'root'})
export class cartQuery extends Query<cartState>{
    readonly shoes$!: Observable<cartShoe[]>;
    constructor(protected override store : cartStore){
        super(store);
        this.shoes$ = this.select(s => s.shoes);
    }    
    get getShoes() : cartShoe[]{
        return this.store.getValue().shoes;
    }
    get cartPrice() : number{
        return this.store.getValue().shoes.map(shoe => shoe.type.price).reduce((acc,curr) => acc + curr,0);
    }
    get cartSize() : number{
        return this.store.getValue().shoes.length;
    }
    get deliveryPrice() : number{
        return DELIVERY_PRICE
    }
    get TotalPrice() : number{
        return DELIVERY_PRICE + this.cartPrice
    }
}