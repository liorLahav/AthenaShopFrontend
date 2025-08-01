import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login';
import { Register } from './auth/register';
import { Main } from './main/main';
import { authGuard } from './authGuard';
import { unAuthGuard } from './unAuthGuard';


const routes: Routes = [{
  path : 'login' , 
  component : Login,
  canActivate : [unAuthGuard]
},{
  path : 'register',
  component : Register,
  canActivate: [unAuthGuard]
},{
  path : "",
  component : Main,
  canActivate : [authGuard]
},{
  path : '**',
  redirectTo : "login"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
