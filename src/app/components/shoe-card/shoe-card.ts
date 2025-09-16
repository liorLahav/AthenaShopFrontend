import { Component, Input } from '@angular/core';
import { DisplayShoe, getDisplayShoe, shoesApiService } from '../../services/shoesApi/shoesApiService';
import { cartService } from '../../state/cart/cart.service';
import { Shoe } from 'athena-shop-types';

@Component({
  selector: 'app-shoe-card',
  standalone: false,
  templateUrl: './shoe-card.html',
  styleUrl: './shoe-card.css'
})
export class ShoeCard {
  @Input() isPriceColorRed : boolean = false;
  @Input() shoe! : Shoe;
  get displayShoe(){
    return getDisplayShoe(this.shoe);
  }
}
