import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-headline',
  standalone: false,
  templateUrl: './logo-headline.html',
  styleUrl: './logo-headline.css'
})
export class LogoHeadline {
  @Input() headlineText = "AthenaShop";
}
