import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { InjectionToken } from "@angular/core";
import { UsersApiMock } from "./usersApiMock";
import { LoginResponse, RegisterResponse } from "../../../graphql/generated";


export interface UsersApiService{
    login(username : string,password : string): Observable<LoginResponse>;
    register(username : string,password:string) : Observable<RegisterResponse>;
}

export const USERS_API_SERVICE_TOKEN = new InjectionToken<UsersApiService>('UsersService');

export const usersServiceFactory = () : UsersApiService =>{
    const db = environment.type;
    return new UsersApiMock;
}