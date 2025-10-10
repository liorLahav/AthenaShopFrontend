import { Component, EventEmitter, Input, Output } from '@angular/core';
import {getDisplayShoe} from '../../services/shoesApi/shoesApiService';

import { cartShoe } from '../../state/cart/cart.store';
import { BasicShoe } from '../../../graphql/generated';
@Component({
  selector: 'app-wide-shoe-card',
  standalone: false,
  templateUrl: './wide-shoe-card.html',
  styleUrl: './wide-shoe-card.css'
})
export class WideShoeCard {
  @Input({required: true}) shoe!: BasicShoe;
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
