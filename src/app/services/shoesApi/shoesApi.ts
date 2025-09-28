import { Shoe, shoeItem } from "athena-shop-types";
import { catchError, map, Observable, of, tap } from "rxjs";
import { cartShoe } from "../../state/cart/cart.store";
import { checkoutResponse, inventoryResponse, shoesApiService, shoesFilter } from "./shoesApiService";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { getSizeByShoe } from "./queries";

interface hasuraHeader extends HttpHeaders{
    'content-type' : string,
    'x-hasura-admin-secret' : string,
}

const hasuraUrl = environment.hasuraUrl
const hasuraHeader = {
    "content-type" : 'application/json',
    "x-hasura-admin-secret" : environment["x-hasura-admin-secret"] 
}
@Injectable({
  providedIn: 'root'
})
export class shoesApi implements shoesApiService{
    constructor(private http : HttpClient){}
    getTopNMostSoldShoes(n?: number): Observable<Shoe[]> {
        throw new Error("Method not implemented.");
    }
    getTopNMostCompetiableShoes(n?: number): Observable<Shoe[]> {
        throw new Error("Method not implemented.");
    }
    getLastNAddedShoe(n?: number): Observable<Shoe[]> {
        throw new Error("Method not implemented.");
    }
    getShoesByFilter(filter: shoesFilter): Observable<shoeItem[]> {
        throw new Error("Method not implemented.");
    }
    getSizesByShoe(shoeId: string): Observable<number[]> {
        // return this.http.post(hasuraUrl,getSizeByShoe,{
        //     headers : hasuraHeader
        // }).pipe(map(() =>{
            
        // }),catchError((_err) =>{
        //     return [];
        // })).subscribe()
        return of([])
    }
    getInventoryCheck(shoes: cartShoe[]): Observable<inventoryResponse> {
        throw new Error("Method not implemented.");
    }
    checkout(shoes: cartShoe[]): Observable<checkoutResponse> {
        throw new Error("Method not implemented.");
    }
    
}