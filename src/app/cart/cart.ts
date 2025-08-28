import { Component } from '@angular/core';
import { cartQuery } from '../state/cart/cart.query';
import { ShoesApiMock } from '../services/shoesApi/shoesApiMock';
import { Shoe, shoeItem } from '../services/shoesApi/shoesApiService';
import { cartShoe } from '../state/cart/cart.store';
import { getDistictShoes } from '../utils/shoes';
import { cartService } from '../state/cart/cart.service';

export interface inventoryStatus{
  exist : shoeItem[],
  missing : cartShoe[]
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(protected cartQuery : cartQuery,private cartService : cartService,private shoesService : ShoesApiMock){}
  exist : shoeItem[] = [];
  missing : cartShoe[] = [];
  ngOnInit(){
    this.inventoryCheck();
  }
  inventoryCheck(){
    this.shoesService.getInventoryCheck(this.cartQuery.getShoes).subscribe(status => {
      this.exist = status.exist;
      this.missing = status.missing;
    }) 
  }
  onRemove(shoe : cartShoe){
    this.cartService.removeShoe(shoe.type.id,shoe.size);
  }
  get cartShoes() : cartShoe[]{
    return this.cartQuery.getShoes;
  }
}
