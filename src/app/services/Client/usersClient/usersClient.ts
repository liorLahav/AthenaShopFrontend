import { Injectable } from '@angular/core';
import { LoginGQL, LoginResponse, RegisterGQL, RegisterResponse } from '../../../../graphql/generated';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const ERROR : LoginResponse | RegisterResponse = {
  success : false,
  message : "We are experiencing some problems please try again later"
}

@Injectable({
  providedIn: 'root'
})
export class UsersClient {
  constructor(
    private loginGQL : LoginGQL,
    private registerGQL : RegisterGQL
  ){}
  login(username : string, password : string) : Observable<LoginResponse>{
    return this.loginGQL.fetch({
      username,
      password
    }).pipe(
      map(data => { 
        return (data.data?.login as LoginResponse) ?? (ERROR as LoginResponse);
      }),
      catchError(err => { 
        console.error(err);
        return of(ERROR as LoginResponse);
      })
    );
  }
  register(username: string,password : string) : Observable<RegisterResponse>{
    return this.registerGQL.mutate({
      username,
      password
    }).pipe(map(data =>{
      return (data.data?.register as RegisterResponse) ?? (ERROR as RegisterResponse)
    }),
    catchError(_ => of(ERROR as RegisterResponse)))
  }
}
