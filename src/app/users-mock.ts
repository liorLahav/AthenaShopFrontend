import { Injectable } from '@angular/core';
import { User, userRoles, UsersService } from './usersService';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersMock implements UsersService {
    users: User[] = [
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
  login(username : string,password : string): Observable<User | undefined> {
    return of(this.users.find(u =>u.userName == username && u.password == password));
  }
}
