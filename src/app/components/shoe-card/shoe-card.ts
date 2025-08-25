import { Component, Input } from '@angular/core';
import { DisplayShoe } from '../../services/shoesApi/shoesApiService';

@Component({
  selector: 'app-shoe-card',
  standalone: false,
  templateUrl: './shoe-card.html',
  styleUrl: './shoe-card.css'
})
export class ShoeCard {
  @Input() location : string = "shop";
  @Input() shoe! : DisplayShoe;
}
