import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login';
import { Register } from './auth/register';
import { Main } from './main/main';
import { authGuard } from './authGuard';

const routes: Routes = [{
  path : 'login' , 
  component : Login,
  
},{
  path : 'register',
  component : Register,
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
