import { Component } from '@angular/core';
import { cartQuery } from '../state/cart/cart.query';
import { ShoesApiMock } from '../services/shoesApi/shoesApiMock';
import { checkoutResponse, inventoryResponse, Shoe, shoeItem } from '../services/shoesApi/shoesApiService';
import { cartShoe } from '../state/cart/cart.store';
import { getDistictShoes } from '../utils/shoes';
import { cartService } from '../state/cart/cart.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export interface inventoryStatus{
  exist : shoeItem[],
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
  constructor(protected cartQuery : cartQuery,private cartService : cartService,private shoesService : ShoesApiMock,private router : Router){}
  inventory:cartShoeStatus[] = [];
  checkoutReponse : checkoutResponse | null = null;
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
  onCheckoutResponse(checkoutReponse : checkoutResponse){
    this.checkoutReponse = checkoutReponse;
  }
  onMessageClose(){
    if(!this.checkoutReponse)
      return;
    if(this.checkoutReponse.success){
       this.router.navigate(["/"])
       this.cartService.clear();
    }
    this.checkoutReponse = null;
  }
}
