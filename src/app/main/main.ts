import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  shoes = [1,2,3,4]
  lastShoeImage = "adidas_yeezy_700_mauve.png"
  lastShoeName = "YEEZY BOOST 700"
}
