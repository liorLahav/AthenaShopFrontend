import { Injectable } from "@angular/core";
import { UserStore } from "./user.store";
import { User } from "../../usersService";



@Injectable({providedIn : 'root'})
export class UserService{
    constructor(private userstore : UserStore){}

    updateisLoaded(isLoading : boolean){
        this.userstore.setLoading(isLoading);
    }
    updateUser(user : User){
        this.userstore.update({ user : user});
    }
}