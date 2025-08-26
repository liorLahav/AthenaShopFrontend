import { Injectable } from "@angular/core";
import { cartStore } from "./cart.store";
import { Shoe, shoeItem } from "../../services/shoesApi/shoesApiService";
import { cartQuery } from "./cart.query";


@Injectable({providedIn : 'root'})
export class cartService{
    constructor(private cartStore : cartStore,private query : cartQuery){}

    addShoe(type : Shoe,size : number){
        const shoes = [...this.query.getShoes];
        shoes.push({
            type : type,
            size : size
        });
        this.cartStore.update({
            shoes : shoes
        })
        console.log(shoes);
    }
    removeShoe(typeId : string,size : number){
        const index = this.query.getShoes.findIndex(shoe => shoe.size == size && shoe.type.id == typeId)
        if(index != -1){
            const shoes = [...this.query.getShoes].splice(index,1);
            this.cartStore.update({
                shoes : shoes
            })
        }
    }
    clear(){
        this.cartStore.update({
            shoes : []
        })
    }
}