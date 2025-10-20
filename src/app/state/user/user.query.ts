import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserState, UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
    constructor(protected override store: UserStore) {
        super(store);
    }
  get getUser(){
    return this.getValue().user;
  }
  get username(){
    return this.getValue().user.username;
  }
  get isAuthed(){
    return this.getValue().isAuthed;
  }
}
