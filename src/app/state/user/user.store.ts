import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";
import { ClientSideUser } from "../../../graphql/generated";

export interface UserState {
    user : ClientSideUser,
    isAuthed : boolean
}

export const getInitialUserState = () => {
    return {
        user : {} as ClientSideUser,
        isAuthed : false,
    }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({name : 'user'})
export class UserStore extends Store<UserState> {
    constructor(){
        super(getInitialUserState());
    }
}