import { inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { DynamicForm } from './auth/dynamic-form/dynamic-form';
import { Login } from './auth/login';
import { USERS_API_SERVICE_TOKEN } from './services/usersApi/UsersApiService';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { Register } from './auth/register';
import { Main } from './main/main';
import { SHOES_API_SERVICE_TOKEN } from './services/shoesApi/shoesApiService';
import { shopModule } from './shop/shop.module';
import { componentsModule } from './components/components.module';
import { CartModule } from './cart/cart.module';
import { shoesApi } from './services/shoesApi/shoesApi';
import { environment } from '../environments/environment';
import {enviromentTypes} from '../environments/environment-types'
import { ShoesApiMock } from './services/shoesApi/shoesApiMock';
import { UsersApiMock } from './services/usersApi/usersApiMock';
import { ClientService } from './services/Client/client';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/cache';

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
    CartModule,
  ],
  providers: [
    {
      provide : USERS_API_SERVICE_TOKEN,
      useClass : UsersApiMock
    },
    {
      provide : SHOES_API_SERVICE_TOKEN,
      useClass : environment.type == enviromentTypes.dev ? ShoesApiMock : shoesApi,
    },
    ClientService,
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
 
      return {
        link: httpLink.create({ uri: environment.serverUrl }),
        cache: new InMemoryCache(),
      };
    }),
  ],
  bootstrap: [App]
})
export class AppModule { }
