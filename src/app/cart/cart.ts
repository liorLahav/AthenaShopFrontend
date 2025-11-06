import { Component, Inject } from '@angular/core';
import { cartQuery } from '../state/cart/cart.query';
import { SHOES_API_SERVICE_TOKEN, shoesApiService } from '../services/shoesApi/shoesApiService';
import { cartShoe } from '../state/cart/cart.store';
import { cartService } from '../state/cart/cart.service';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BuyShoeResponse, ShoeItem } from '../../graphql/generated';

export interface inventoryStatus{
  exist : ShoeItem[],
  missing : cartShoe[]
}
export interface cartShoeStatus extends cartShoe{
  inStock : boolean
}
@UntilDestroy()
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(protected cartQuery : cartQuery,private cartService : cartService,@Inject(SHOES_API_SERVICE_TOKEN) private shoesService : shoesApiService,private router : Router){}
  inventory:cartShoeStatus[] = [];
  checkoutReponse : BuyShoeResponse | null = null;
  isCartValid : boolean = false;
  cartSum : number = 0;
  ngOnInit(){
    this.cartQuery.shoes$.subscribe(shoes => {
      this.shoesService.getInventoryCheck(shoes).pipe(        
        untilDestroyed(this)
      ).subscribe(i =>{
        this.inventory = i.shoes;
        this.isCartValid = -1 == this.inventory.findIndex(i => !i.inStock)
        this.cartSum = 0;
        this.inventory.forEach(s => {
          this.cartSum += +s.inStock * s.type.price
        })
      })
    });
  }
  onRemove(shoe : cartShoe){
    this.cartService.removeShoe(shoe.type.id,shoe.size);
  }
  onCheckoutResponse(checkoutReponse : BuyShoeResponse){
    this.checkoutReponse = checkoutReponse;
  }
  onMessageClose(){
    if(!this.checkoutReponse)
      return;
    if(this.checkoutReponse.success){
       this.router.navigate(["/"]).then(()=>{
          window.location.reload();
       })
       this.cartService.clear();
    }
    this.checkoutReponse = null;
  }
}
