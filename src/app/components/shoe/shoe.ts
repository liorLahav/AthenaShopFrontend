import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shoe',
  standalone: false,
  templateUrl: './shoe.html',
  styleUrl: './shoe.css'
})
export class Shoe {
  shoeImage = "adidas_yeezy_700_mauve.png"
  shoeName = "YEEZY BOOST 700"
}
