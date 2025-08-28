import { Component, Input } from '@angular/core';

@Component({
  selector: 'div[cartDetails]',
  standalone: false,
  templateUrl: './cart-details.html',
  styleUrl: './cart-details.css'
})
export class CartDetails {
  @Input({required : true}) title! : string;
}
