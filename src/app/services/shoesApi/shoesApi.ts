import {Observable} from "rxjs";
import { cartShoe } from "../../state/cart/cart.store";
import { checkoutResponse, inventoryResponse, shoesApiService} from "./shoesApiService";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';
import { ShoesApiMock } from "./shoesApiMock";
import {BasicShoe, BasicShoeInput, CartShoeInput, Order, ShoeItem, ShoesFilter} from '../../../graphql/generated'
import { ClientService } from "../Client/client";
const shoeItems = "sneaker_shop_shoe_items"


const hasuraUrl = environment.hasuraUrl
const hasuraHeader = {
    "content-type" : 'application/json',
    "x-hasura-admin-secret" : environment["x-hasura-admin-secret"] 
}
@Injectable({
  providedIn: 'root'
})
export class shoesApi implements shoesApiService{
    private mock: shoesApiService;
    constructor(private client :ClientService){
        this.mock = new ShoesApiMock();
    }
    getTopNMostSoldShoes(n?: number): Observable<BasicShoe[]> {
        return this.client.getBasicShoes(Order.Sales,n);
    }
    getTopNMostCompetiableShoes(n?: number): Observable<BasicShoe[]> {
        return this.client.getBasicShoes(Order.Competiable,n);
    }
    getLastNAddedShoe(n?: number): Observable<BasicShoe[]> {
        return this.client.getBasicShoes(Order.LastAdded,n);
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
    checkout(shoes: cartShoe[]): Observable<checkoutResponse> {
        return this.mock.checkout(shoes);
    }
}