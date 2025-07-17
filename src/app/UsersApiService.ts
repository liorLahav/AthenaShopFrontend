import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";
import { InjectionToken } from "@angular/core";
import { UsersApiMock } from "./usersApiMock";

export enum userRoles {Admin,User}

export interface User {
    userName : string,
    id :number,
    userRole : userRoles,
    dateCreated : Date,
    buyingHistory : string[], // TODO create Receipt entity
}
export interface LoginResponse{
    success : boolean,
    user? : User,
}

export interface UsersApiService{
    login(username : string,password : string): Observable<LoginResponse>;
}

export const USERS_API_SERVICE_TOKEN = new InjectionToken<UsersApiService>('UsersService');

export const usersServiceFactory = () : UsersApiService =>{
    const db = environment.dbType;
    return new UsersApiMock;
}