import { Component } from '@angular/core';
import { cartQuery } from '../../state/cart/cart.query';
import { cartService } from '../../state/cart/cart.service';


interface section{
  title : string,
  price? : number
}
@Component({
  selector: 'app-order-summery',
  standalone: false,
  templateUrl: './checkout-summery.html',
  styleUrl: './checkout-summery.css'
})
export class OrderSummery {
  constructor(protected cartQuery : cartQuery,private cartService : cartService){}
  sections : section[] = []
  ngOnInit(){
    this.getSections();
  }
  getSections(){
    this.sections = [
      {
        title : "Original price",
        price : this.cartQuery.cartPrice
      },
      {
        title : `${this.cartQuery.cartSize} items`,
        price : this.cartQuery.cartPrice
      },
      {
        title : "Delivery",
        price : this.cartQuery.deliveryPrice
      },
      {
        title : "Sales tax",
      }
    ]
  }
}
