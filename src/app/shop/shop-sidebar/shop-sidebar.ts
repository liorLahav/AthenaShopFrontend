import { Component, Input } from '@angular/core';
import {checkboxFilter, rangeFilter, sizeFilter, universalFilter } from './filter-bar/filter-bar';
import { Brand } from '../../shoesApiService';

@Component({
  selector: 'app-shop-sidebar',
  standalone: false,
  templateUrl: './shop-sidebar.html',
  styleUrl: './shop-sidebar.css'
})
export class ShopSidebar {
  @Input() filters : universalFilter[] = [];
}
