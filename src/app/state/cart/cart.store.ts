import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";
import { BasicShoe } from "../../../graphql/generated";

export interface cartShoe{
    type : BasicShoe,
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