import { Store, StoreConfig } from "@datorama/akita";
import { Shoe, shoeItem } from "../../services/shoesApi/shoesApiService";
import { Injectable } from "@angular/core";

export interface cartShoe{
    type : Shoe,
    size : number,
}


export interface cartState{
    shoes : cartShoe[]
}

export const getInitalCartState = ()=>{
    return {
        shoes : []
    }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({name : 'cart'})
export class cartStore extends Store<cartState>{
    constructor(){
        super(getInitalCartState())
    }
}