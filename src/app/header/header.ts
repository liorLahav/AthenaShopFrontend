import { Component } from '@angular/core';
import { UserQuery } from '../state/user/user.query';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    constructor(protected userQuery : UserQuery){}
    buttons = [{
      name : "Shop",
      route : "Shop",
    },{
      name : "History",
      route : "history"
    },{
      name : "New Item",
      route : "new-item",
    }]
}
