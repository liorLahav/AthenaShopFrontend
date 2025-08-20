import { NgModule} from '@angular/core';
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
import { ShoeCard } from './components/shoe-card/shoe-card';
import { LogoHeadline } from './components/logo-headline/logo-headline';
import { persistState } from '@datorama/akita';
import { shoesApiService } from './shoesApiService';
import { TopPicks } from './components/top-picks/top-picks';

persistState({
  key : 'akita-store',
  include : ["user"],
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
    ShoeCard,
    LogoHeadline,
    TopPicks,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    AkitaNgDevtools.forRoot(),
  ],
  providers: [
    shoesApiService,
    {provide : USERS_API_SERVICE_TOKEN,useValue : usersServiceFactory()}
  ],
  bootstrap: [App]
})
export class AppModule { }
