import { Inject, Injectable } from "@angular/core";
import { UserStore } from "./user.store";
import {USERS_API_SERVICE_TOKEN, UsersApiService } from "../../services/usersApi/UsersApiService";
import { catchError, finalize, map, Observable, of } from "rxjs";
import { submitResult } from "../../auth/dynamic-form/dynamic-form";
import { ClientSideUser } from "../../../graphql/generated";
import { Router } from "@angular/router";
import { ROUTES } from "../../routes";

const SERVER_PROBLEM : submitResult  = {
    success : false,
    message : "Server problem.",
}
const WRONG_CREDENTIALS : submitResult = {
    success: false, 
    message: "Wrong credentials.",
}
const LOGGED_IN : submitResult = {
    success: true, 
    message: "Logged in!",
}
const INVALID_FORM : submitResult = {
    success: false, 
    message: "Form is invalid.",
}
@Injectable({providedIn : 'root'})
export class UserService{
    constructor(private userstore : UserStore,@Inject(USERS_API_SERVICE_TOKEN) private usersApiService: UsersApiService,private router : Router){}

    updateIsLoaded(isLoading : boolean) {
        this.userstore.setLoading(isLoading);
    }
    login(username : string ,password : string) : Observable<submitResult>{
        this.updateIsLoaded(true);
        return this.usersApiService.login(username,password).pipe(
                  map(data => {
                    if (data.success){
                      this.userstore.update({
                        user : data.user ?? {} as ClientSideUser,
                        isAuthed : true
                      })
                    }
                    return {
                        success : data.success,
                        message : data.message!
                    };
                  }),
                  catchError(() => of(SERVER_PROBLEM)),finalize(() => {this.updateIsLoaded(false)}))
    }
    signout(){
        this.userstore.update({
            user : {} as ClientSideUser,
            isAuthed : false
        })
        this.router.navigate([ROUTES.LOGIN]);
    }
}