import { Component } from '@angular/core';
import { UserQuery } from '../../state/user/user.query';
import { UserService } from '../../state/user/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  constructor(protected userQuery : UserQuery,protected userService : UserService){}
  hover = false
  onHover(){
    this.hover = true;
  }
  onUnHover(){
    this.hover = false
  }
}
