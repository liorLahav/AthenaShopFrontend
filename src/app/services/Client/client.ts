import { Injectable } from '@angular/core';
import { BasicShoe, GetShoeItemsGQL,GetBasicShoesGQL, Order, ShoeItem, ShoesFilter, GetSizesByBasicShoeQuery, GetSizesByBasicShoeGQL, GetShoesByCartGQL, CartShoe, CartShoeInput, BasicShoeInput, BuyShoeResponse, BuyShoesGQL } from '../../../graphql/generated';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { cartShoeStatus } from '../../cart/cart';
import { inventoryResponse } from '../shoesApi/shoesApiService';
import { cartShoe } from '../../state/cart/cart.store';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private getShoeItemsGQL: GetShoeItemsGQL,
    private getBasicShoesGQL : GetBasicShoesGQL,
    private getSizesByBasicShoeGQL : GetSizesByBasicShoeGQL,
    private getShoesByCartGQL : GetShoesByCartGQL,
    private buyShoesGQL : BuyShoesGQL
  ) {}

  getShoeItems(filter : ShoesFilter) : Observable<ShoeItem[]> {
    return this.getShoeItemsGQL.fetch({
      filter
    }).pipe(
      map(res => {
        if(res && res.data && res.data.shoeItemsByFilter)
          return res.data.shoeItemsByFilter as ShoeItem[]
        return [];
      }),
      catchError(err => {
        console.log(err);
        return [];
      })
    );
  }
  getBasicShoes(order?: Order,n? : number) : Observable<BasicShoe[]>{
      return this.getBasicShoesGQL.fetch({
        order,
        n
      }).pipe(
        map(res =>{
          console.log(order,res);
          if(res && res.data && res.data.basicShoe)
            return res.data.basicShoe as BasicShoe[];
          return [];
        }),
        catchError(err =>{
          console.error(err);
          return [];
        })
      )
  }
  getSizesByBasicShoe(basicShoeId : string) : Observable<number[]>{
    return this.getSizesByBasicShoeGQL.fetch({
      basicShoeId
    }).pipe(map(res =>{
      if(res && res.data && res.data.sizesByBasicShoe)
        return res.data.sizesByBasicShoe as number[];
      return [];
    }),
    catchError(err => {
      console.error(err);
      return [];
    })
  )
  }
  getShoesByCart(shoes : cartShoe[]) : Observable<inventoryResponse>{
    console.log(shoes.map(shoe => {
      const { __typename, ...typeWithoutTypename } = shoe.type as any;
      return { ...shoe, type: typeWithoutTypename };
    }))
    return this.getShoesByCartGQL.fetch({
      shoes : shoes.map(shoe => {
        const { __typename, ...typeWithoutTypename } = shoe.type as any;
        return { ...shoe, type: typeWithoutTypename };
      })
    }).pipe(
      map(res => {
        if(res && res.data && res.data.shoeItemsByCart){
          const shoeItemsByCart = [...res.data.shoeItemsByCart]
          const shoesResponse : cartShoeStatus[] = []
          shoes.forEach(shoe => {
            const shoeIndex = shoeItemsByCart.findIndex(shoeCart => shoeCart.type.id == shoe.type.id && shoeCart.size == shoe.size);
            shoesResponse.push({
              inStock : shoeIndex != -1,
              ...shoe
            })
            if(shoeIndex != -1)
              shoeItemsByCart.splice(shoeIndex,1)
          })
          console.log(shoesResponse)
          return { shoes : shoesResponse}
        }
        return { shoes : shoes.map(shoe => ({ inStock : false, ...shoe })) }
      }),
      catchError(err => {
        console.error(err);
        return [{
          shoes : shoes.map(shoe => ({
            inStock : false,
            ...shoe
          }))
        }];
      })
    )
  }
  buyShoes(shoes : cartShoe[]) : Observable<BuyShoeResponse>{
    console.log(shoes);
    return this.buyShoesGQL.mutate({
      shoes : shoes.map(shoe => {
        const { __typename, ...typeWithoutTypename } = shoe.type as any;
        return { ...shoe, type: typeWithoutTypename };
      })
    }).pipe(map(res =>{
      if(res && res.data && res.data.buyShoes){
        return res.data.buyShoes
      }
      return {
        success : false,
        missingShoes : shoes
      }
    }),
  catchError(err => {
    console.error(err);
    return of({
      success: false,
      missingShoes: shoes
    });
  }))
  }
}

