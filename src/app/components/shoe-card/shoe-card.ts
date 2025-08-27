import { Component, Input } from '@angular/core';
import { DisplayShoe } from '../../shoesApiService';

@Component({
  selector: 'app-shoe-card',
  standalone: false,
  templateUrl: './shoe-card.html',
  styleUrl: './shoe-card.css'
})
export class ShoeCard {
  @Input() isPriceColorRed : boolean = false;
  @Input() shoe! : DisplayShoe;
}
