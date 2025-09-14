import { Component } from '@angular/core';
import { UserQuery } from '../state/user/user.query';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ROUTES } from '../routes';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    constructor(protected userQuery : UserQuery,protected router : Router){}
    currentRoute = ""
    buttons = [{
      name : "Shop",
      route : ROUTES.SHOP,
    },{
      name : "History",
      route : "history"
    },{
      name : "New Item",
      route : "new-item",
    }]
    ngOnInit() : void{
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event : NavigationEnd) =>{
        this.currentRoute = event.urlAfterRedirects;
      })
    }
    get isUnauthRoute(){
      const route = this.currentRoute.split('/')[1]
      return route == ROUTES.LOGIN || route == ROUTES.REGISTER;
    }
}
