import { Injectable } from "@angular/core";
import { cartStore } from "./cart.store";
import { shoeItem } from "../../services/shoesApi/shoesApiService";
import { cartQuery } from "./cart.query";


@Injectable({providedIn : 'root'})
export class cartService{
    constructor(private cartStore : cartStore,private query : cartQuery){}

    addShoe(shoe : shoeItem){
        const shoes = this.query.getShoesByIds;
        shoes[shoe.id] = shoe
        this.cartStore.update({
            shoes : shoes
        })
    }
    removeShoe(shoeId : string){
        const shoes = this.query.getShoesByIds;
        delete shoes[shoeId];
        this.cartStore.update({
            shoes : shoes
        })
    }
    clear(){
        this.cartStore.update({
            shoes : {}
        })
    }
}