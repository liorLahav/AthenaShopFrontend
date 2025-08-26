import { Injectable } from "@angular/core";
import { cartState, cartStore } from "./cart.store";
import { Query } from "@datorama/akita";


@Injectable({providedIn : 'root'})
export class cartQuery extends Query<cartState>{
    constructor(protected override store : cartStore){
        super(store);
    }
    get getShoes(){
        return this.store.getValue().shoes;
    }
}