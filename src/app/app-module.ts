import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { DynamicForm } from './auth/dynamic-form/dynamic-form';
import { Login } from './auth/login';
import { USERS_API_SERVICE_TOKEN, usersServiceFactory } from './services/usersApi/UsersApiService';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { Register } from './auth/register';
import { Main } from './main/main';
import { persistState } from '@datorama/akita';
import { shoesApiService } from './services/shoesApi/shoesApiService';
import { shopModule } from './shop/shop.module';
import { componentsModule } from './components/components.module';
import { CartModule } from './cart/cart.module';

persistState({
  key : 'akita-store',
  include : ["user","cart"],
  storage : localStorage
})
@NgModule({
  declarations: [
    App,
    Header,
    DynamicForm,
    Login,
    Register,
    Main,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AkitaNgDevtools.forRoot(),
    shopModule,
    componentsModule,
    CartModule
  ],
  providers: [
    shoesApiService,
    {provide : USERS_API_SERVICE_TOKEN,useValue : usersServiceFactory()}
  ],
  bootstrap: [App]
})
export class AppModule { }
