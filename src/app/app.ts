import { Component } from '@angular/core';
import { InputField } from './auth/dynamic-form/dynamic-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'AthenaShopFrontend';
}
