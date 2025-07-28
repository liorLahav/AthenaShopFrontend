import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { DynamicForm } from './auth/dynamic-form/dynamic-form';
import { NgFor } from '@angular/common';
import { Login } from './auth/login';
import { USERS_API_SERVICE_TOKEN, usersServiceFactory } from './UsersApiService';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { Register } from './auth/register';
import { Main } from './main/main';
import { Shoe } from './components/shoe/shoe';
import { LogoHeadline } from './components/logo-headline/logo-headline';

@NgModule({
  declarations: [
    App,
    Header,
    DynamicForm,
    Login,
    Register,
    Main,
    Shoe,
    LogoHeadline,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    AkitaNgDevtools.forRoot(),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {provide : USERS_API_SERVICE_TOKEN,useValue : usersServiceFactory()}
  ],
  bootstrap: [App]
})
export class AppModule { }
