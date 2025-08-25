import { Injectable } from "@angular/core";
import { cartStore } from "./cart.store";
import { Shoe, shoeItem } from "../../services/shoesApi/shoesApiService";
import { cartQuery } from "./cart.query";


@Injectable({providedIn : 'root'})
export class cartService{
    constructor(private cartStore : cartStore,private query : cartQuery){}

    addShoe(shoeId : string,size : number){
        const shoes = {...this.query.getShoesByIds};
        if (!(shoeId in shoes)){
            shoes[shoeId] = []
        } 
        shoes[shoeId].push(size);
        this.cartStore.update({
            shoes : shoes
        })
        console.log(shoes);
    }
    removeShoe(shoeId : string,size : number){
        const shoes = {...this.query.getShoesByIds};
        if(shoeId in shoes){
            const index = shoes[shoeId].indexOf(size)
            shoes[shoeId].splice(index,1);
            if (shoes[shoeId].length){
                delete shoes[shoeId]
            }
            this.cartStore.update({
                shoes : shoes
            })
        }
    }
    clear(){
        this.cartStore.update({
            shoes : {}
        })
    }
}