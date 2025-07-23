import { Store, StoreConfig } from "@datorama/akita";
import { User } from "../../UsersApiService";
import { Injectable } from "@angular/core";

export interface UserState{
    user : User,
}

export const getInitialUserState = () =>{
    return {
        user : {} as User,
    }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({name : 'user'})
export class UserStore extends Store<UserState>{
    constructor(){
        super(getInitialUserState());
    }
}