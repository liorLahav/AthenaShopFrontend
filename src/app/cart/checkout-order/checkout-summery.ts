import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { cartQuery } from '../../state/cart/cart.query';
import { cartService } from '../../state/cart/cart.service';
import { checkoutResponse, SHOES_API_SERVICE_TOKEN, shoesApiService } from '../../services/shoesApi/shoesApiService';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

const errorCheckoutResponse : checkoutResponse = {
  success : false,
  missingShoes : []
}

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
  constructor(protected cartQuery : cartQuery,private cartService : cartService,@Inject(SHOES_API_SERVICE_TOKEN) private shoesApiService : shoesApiService,private router : Router){}
  sections : section[] = []
  @Input() disabled : boolean = false; 
  @Output() checkoutReponse = new EventEmitter<checkoutResponse>();
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
        title : `${this.cartQuery.cartSize} item`,
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

  buyShoes(){
    this.shoesApiService.checkout(this.cartQuery.getShoes).pipe(
      catchError(() => {
        return of(errorCheckoutResponse);
      })
    ).subscribe(data => {
      this.checkoutReponse.emit(data);
    })
  }
}
