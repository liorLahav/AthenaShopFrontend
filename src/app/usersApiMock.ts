import { Injectable } from '@angular/core';
import { LoginResponse, User, userRoles, UsersApiService } from './UsersApiService';
import { Observable, of } from 'rxjs';

interface ServerUser extends User{
  password : string
}

@Injectable({
  providedIn: 'root'
})
export class UsersApiMock implements UsersApiService {
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
    const user : ServerUser | undefined = this.users.find(u =>u.userName == username && u.password == password);
    if (user){
      const {password , ...passwordLessUser} = user;
      return of({success :true,user : passwordLessUser});
    }
    return of({
      success : false
    });
  }
}
