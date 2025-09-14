import { Component } from '@angular/core';
import { cartQuery } from '../state/cart/cart.query';
import { ShoesApiMock } from '../services/shoesApi/shoesApiMock';
import { inventoryResponse, Shoe, shoeItem } from '../services/shoesApi/shoesApiService';
import { cartShoe } from '../state/cart/cart.store';
import { getDistictShoes } from '../utils/shoes';
import { cartService } from '../state/cart/cart.service';
import { Observable } from 'rxjs';

export interface inventoryStatus{
  exist : shoeItem[],
  missing : cartShoe[]
}
export interface cartShoeStatus extends cartShoe{
  inStock : boolean
}
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(protected cartQuery : cartQuery,private cartService : cartService,private shoesService : ShoesApiMock){}
  inventory:cartShoeStatus[] = [];
  ngOnInit(){
    this.cartQuery.shoes$.subscribe(shoes => {
      this.shoesService.getInventoryCheck(shoes).subscribe(i =>{
        this.inventory = i.shoes;
        console.log(this.inventory);
      })
    });
  }
  onRemove(shoe : cartShoe){
    this.cartService.removeShoe(shoe.type.id,shoe.size);
  }
}
