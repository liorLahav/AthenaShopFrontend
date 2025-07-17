import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";
import { InjectionToken } from "@angular/core";
import { UsersMock } from "./users-mock";

export enum userRoles {Admin,User}

export interface User {
    userName : string,
    id :number,
    userRole : userRoles,
    dateCreated : Date,
    buyingHistory : string[], // TODO create Receipt entity
    password ? : string,
}

export interface UsersService{
    login(username : string,password : string): Observable<User | undefined>;
}

export const USERS_SERVICE_TOKEN = new InjectionToken<UsersService>('UsersService');

export const usersServiceFactory = () : UsersService =>{
    const db = environment.dbType;
    return new UsersMock;
}