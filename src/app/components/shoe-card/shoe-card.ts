import { Component, Input } from '@angular/core';
import { DisplayShoe, getDisplayShoe, Shoe, shoesApiService } from '../../services/shoesApi/shoesApiService';
import { cartService } from '../../state/cart/cart.service';

@Component({
  selector: 'app-shoe-card',
  standalone: false,
  templateUrl: './shoe-card.html',
  styleUrl: './shoe-card.css'
})
export class ShoeCard {
  constructor(private shoeService : shoesApiService,private cartService : cartService){}
  @Input() location : string = "shop";
  @Input({required : true}) shoe! : Shoe;
  pressed = false;
  get displayShoe(){
    return getDisplayShoe(this.shoe);
  }
}
