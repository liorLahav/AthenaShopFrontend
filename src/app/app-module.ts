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
import { SHOES_API_SERVICE_TOKEN, shoesApiService } from './services/shoesApi/shoesApiService';
import { shopModule } from './shop/shop.module';
import { componentsModule } from './components/components.module';
import { CartModule } from './cart/cart.module';
import { shoesApi } from './services/shoesApi/shoesApi';
import { environment } from '../environments/environment';
import {enviromentTypes} from '../environments/environment-types'
import { ShoesApiMock } from './services/shoesApi/shoesApiMock';
import { UsersApiMock } from './services/usersApi/usersApiMock';

@NgModule({
  declarations: [
    App,
    Header,
    DynamicForm,
    Login,
    Register,
    Main
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
    {
      provide : USERS_API_SERVICE_TOKEN,
      useClass : UsersApiMock
    },
    {
      provide : SHOES_API_SERVICE_TOKEN,
      useClass : environment.type == enviromentTypes.local ? ShoesApiMock : shoesApi,
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
