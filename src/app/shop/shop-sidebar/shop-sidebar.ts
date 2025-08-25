import { Component, Input } from '@angular/core';
import {universalFilter } from './filter-bar/filter-bar';

@Component({
  selector: 'app-shop-sidebar',
  standalone: false,
  templateUrl: './shop-sidebar.html',
  styleUrl: './shop-sidebar.css'
})
export class ShopSidebar {
  @Input() filters : universalFilter[] = [];
}
