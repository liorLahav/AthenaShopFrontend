import {CanActivate, Router } from '@angular/router';
import { UserQuery } from './state/user/user.query';
import { Injectable } from '@angular/core';
import { ROUTES } from './routes';

@Injectable({
    providedIn : 'root'
})
export class authGuard implements CanActivate{
    constructor(private userQuery : UserQuery,private router : Router){}
    canActivate(): boolean {
        const isAuthed = this.userQuery.isAuthed;
        if (!isAuthed){
            this.router.navigate([ROUTES.LOGIN])
        }
        return this.userQuery.isAuthed;
    }
}