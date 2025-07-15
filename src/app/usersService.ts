import { Observable } from "rxjs";

export enum userRoles {Admin,User}

export interface User {
    userName : string,
    id :number,
    userRole : userRoles,
    dateCreated : Date,
    buyingHistory : string[], // Will deal with this later
    password ? : string,
}

export interface UsersService{
    login(username : string,password : string): Observable<User | undefined>;
}