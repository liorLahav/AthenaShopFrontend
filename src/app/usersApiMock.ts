import { Injectable } from '@angular/core';
import { LoginResponse, RegisterResponse, User, userRoles, UsersApiService } from './UsersApiService';
import { Observable, of } from 'rxjs';
import { passwordRegexPattern } from './auth/register';

interface ServerUser extends User{
  password : string
}
const USER_EXISTS : RegisterResponse ={
  success : false,
  message : "User already exist",
}
const INVALID_USERNAME : RegisterResponse ={
  success : false,
  message : "Username dont follow our rules",
}
const INVALID_PASSWORD : RegisterResponse ={
  success : false,
  message : "Password dont follow our rules",
}
const SUCCESS : RegisterResponse ={
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
      userName: 'Alice',
      password: '111111111',
      id: 1,
      userRole: userRoles.Admin,
      dateCreated: new Date('2024-01-01'),
      buyingHistory: []
      
    },
    {
      userName: 'Bob',
      id: 2,
      userRole: userRoles.User,
      dateCreated: new Date('2024-02-15'),
      buyingHistory: [],
      password: '111111111'
    },
    {
      userName: 'Charlie',
      id: 3,
      userRole: userRoles.User,
      dateCreated: new Date('2024-03-20'),
      buyingHistory: [],
      password: '111111111'
    }
  ];
  login(username : string,password : string): Observable<LoginResponse> {
    let user : ServerUser | undefined = this.users.find(u =>u.userName == username && u.password == password);
    // Temporary
    if(!user)
      user = this.users[0];
    if (user){
      const {password , ...passwordLessUser} = user;
      return of({success :true,user : passwordLessUser});
    }
    return of({
      success : false
    });
  }
  register(username: string, password: string): Observable<RegisterResponse> {
    if (username.length < 8)
      return of(INVALID_USERNAME)
    const user = this.users.find(user => user.userName == username);
    if (user)
      return of(USER_EXISTS);
    const passwordReg :RegExp = new RegExp(passwordRegexPattern)
    if(passwordReg.test(password)){
      this.users.push({
        userName: username,
        password: password,
        id: this.idCounter++,
        userRole: userRoles.User,
        dateCreated: new Date(),
        buyingHistory: []
      },)
      return of(SUCCESS)
    }
    return of(INVALID_PASSWORD)  
  }
}
