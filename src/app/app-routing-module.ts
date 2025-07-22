import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login';
import { Register } from './auth/register';
import { Main } from './main/main';

const routes: Routes = [{
  path : 'login' , 
  component : Login,
},{
  path : 'register',
  component : Register,
},{
  path : '**',
  component : Main,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
