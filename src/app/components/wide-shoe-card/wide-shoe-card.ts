import { Component, EventEmitter, Input, Output } from '@angular/core';
import {getDisplayShoe, Shoe} from '../../services/shoesApi/shoesApiService'
import { cartShoe } from '../../state/cart/cart.store';
@Component({
  selector: 'app-wide-shoe-card',
  standalone: false,
  templateUrl: './wide-shoe-card.html',
  styleUrl: './wide-shoe-card.css'
})
export class WideShoeCard {
  @Input({required: true}) shoe!: Shoe;
  @Input({required : true}) size! : number;
  @Input() isSoldOut : boolean = false;
  @Output() remove = new EventEmitter<cartShoe>();

  onXClick(){
    this.remove.emit({
      type: this.shoe,
      size: this.size
    })
  }
  get displayShoe(){
    return getDisplayShoe(this.shoe);
  }
}
