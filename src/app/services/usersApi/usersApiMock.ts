import { Injectable } from '@angular/core';
import { UsersApiService } from '../usersApi/UsersApiService';
import { Observable, of } from 'rxjs';
import { passwordRegexPattern } from '../../auth/register';
import { ClientSideUser, LoginResponse, RegisterResponse, User, UserRoles } from '../../../graphql/generated';

interface ServerUser extends ClientSideUser {
  password : string
}
const USER_EXISTS : RegisterResponse = {
  success : false,
  message : "User already exist",
}
const INVALID_USERNAME : RegisterResponse = {
  success : false,
  message : "Username dont follow our rules",
}
const INVALID_PASSWORD : RegisterResponse = {
  success : false,
  message : "Password dont follow our rules",
}
const SUCCESS : RegisterResponse = {
  success : true,
  message : "User registered succesfully",
}

@Injectable({
  providedIn: 'root'
})
export class UsersApiMock implements UsersApiService {
  idCounter :number = 4;
  users: ServerUser[] = [
    {
      username: 'Alice',
      password: '111111111',
      dateCreated: new Date('2024-01-01').getTime(),
      userRole: UserRoles.Admin
    },
    {
      username: 'Bob',
      dateCreated: new Date('2024-02-15').getTime(),
      password: '111111111',
      userRole: UserRoles.Admin
    },
    {
      username: 'Charlie',
      userRole: UserRoles.User,
      dateCreated: new Date('2024-03-20').getTime(),
      password: '111111111'
    }
  ];
  login(username : string,password : string): Observable<LoginResponse> {
    let user : ServerUser | undefined = this.users.find(u =>u.username == username && u.password == password);
    if(!user)
      user = this.users[0];
    if (user){
      const clientSideUser : ClientSideUser = {
        username : user.username,
        userRole : user.userRole,
        dateCreated : user.dateCreated
      };
      return of({success :true,message : "User logged in succesfully",user : clientSideUser});
    }
    return of({
      success : false,
      message : "Error"
    });
  }
  register(username: string, password: string): Observable<RegisterResponse> {
    if (username.length < 8)
      return of(INVALID_USERNAME)
    const user = this.users.find(user => user.username == username);
    if (user)
      return of(USER_EXISTS);
    const passwordReg :RegExp = new RegExp(passwordRegexPattern)
    if(passwordReg.test(password)){
      this.users.push({
        username: username,
        password: password,
        userRole: UserRoles.User,
        dateCreated: new Date().getTime(),
      },)
      return of(SUCCESS)
    }
    return of(INVALID_PASSWORD)  
  }
}
