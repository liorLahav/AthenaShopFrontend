import { Component, Input } from '@angular/core';
import {  getDisplayShoe,  } from '../../services/shoesApi/shoesApiService';
import { BasicShoe } from '../../../graphql/generated';

@Component({
  selector: 'app-shoe-card',
  standalone: false,
  templateUrl: './shoe-card.html',
  styleUrl: './shoe-card.css'
})
export class ShoeCard {
  @Input() isPriceColorRed : boolean = false;
  @Input() shoe! : BasicShoe;
  get displayShoe(){
    return getDisplayShoe(this.shoe);
  }
}
