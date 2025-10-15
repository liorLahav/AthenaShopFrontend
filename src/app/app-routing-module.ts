import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login';
import { Register } from './auth/register';
import { Main } from './main/main';
import { authGuard } from './authGuard';
import { unAuthGuard } from './unAuthGuard';
import { ROUTES } from './routes';
import { Shop } from './shop/shop';
import { Cart } from './cart/cart';


const routes: Routes = [{
  path :  ROUTES.LOGIN, 
  component : Login,
  canActivate : [unAuthGuard]
},{
  path : ROUTES.REGISTER,
  component : Register,
  canActivate: [unAuthGuard]
},{
  path : ROUTES.HOME,
  component : Main,
  canActivate : [authGuard]
},
{
  path : ROUTES.SHOP,
  component : Shop,
  canActivate : [authGuard]
},
{
  path : ROUTES.CART,
  component : Cart,
  canActivate : [authGuard]
}
,{
  path : '**',
  redirectTo : ROUTES.LOGIN
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
