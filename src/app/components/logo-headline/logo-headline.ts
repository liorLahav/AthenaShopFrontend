import { Component, input, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-headline',
  standalone: false,
  templateUrl: './logo-headline.html',
  styleUrl: './logo-headline.css'
})
export class LogoHeadline {
  constructor(private router : Router){}
  @Input() headlineText = "AthenaShop";
  @Input() RedirectToHome: boolean = false;

  onClick(){
    if(this.RedirectToHome)
      this.router.navigate(["/"]);
  }
}
