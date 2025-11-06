import { Observable } from "rxjs";
import { UsersApiService } from "./UsersApiService";
import { Injectable } from "@angular/core";
import { UsersClient } from "../Client/usersClient/usersClient";
import { LoginResponse, RegisterResponse } from "../../../graphql/generated";

@Injectable({
  providedIn: 'root'
})
export default class usersApi implements UsersApiService{
    constructor(private client : UsersClient){}
    login(username: string, password: string): Observable<LoginResponse> {
        return this.client.login(username, password);
    }
    register(username: string, password: string): Observable<RegisterResponse> {
        return this.client.register(username,password);
    }
    
}