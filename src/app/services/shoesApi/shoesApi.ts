import {Observable} from "rxjs";
import { cartShoe } from "../../state/cart/cart.store";
import {inventoryResponse, shoesApiService} from "./shoesApiService";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';
import { ShoesApiMock } from "./shoesApiMock";
import {BasicShoe, BasicShoeInput, BuyShoeResponse, CartShoeInput, Order, ShoeItem, ShoesFilter} from '../../../graphql/generated'
import { ClientService } from "../Client/shoeClient/shoeClient";
import { UserQuery } from "../../state/user/user.query";
const shoeItems = "sneaker_shop_shoe_items"


@Injectable({
  providedIn: 'root'
})
export class shoesApi implements shoesApiService{
    constructor(private client :ClientService,private userQuery : UserQuery){}
    getTopNMostSoldShoes(n?: number): Observable<BasicShoe[]> {
        return this.client.getBasicShoes(this.userQuery.username,Order.Sales,n);
    }
    getTopNMostCompetiableShoes(n?: number): Observable<BasicShoe[]> {
        return this.client.getBasicShoes(this.userQuery.username,Order.Competiable,n);
    }
    getLastNAddedShoe(n?: number): Observable<BasicShoe[]> {
        return this.client.getBasicShoes(this.userQuery.username,Order.LastAdded,n);
    }
    getShoesByFilter(filter: ShoesFilter): Observable<ShoeItem[]> {
        return this.client.getShoeItems(filter)
    }
    getSizesByShoe(basicShoeId: string): Observable<number[]> {
        return this.client.getSizesByBasicShoe(basicShoeId);
    }
    getInventoryCheck(shoes: CartShoeInput[]): Observable<inventoryResponse> {
        return this.client.getShoesByCart(shoes);
    }
    checkout(shoes: cartShoe[]): Observable<BuyShoeResponse> {
        return this.client.buyShoes(this.userQuery.username,shoes);
    }
}