import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login';
import { Register } from './auth/register';

const routes: Routes = [{
  path : 'login' , 
  component : Login,
},{
  path : 'register',
  component : Register,
},{
  path : '**',
  redirectTo: "login",
  pathMatch : "full",
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
