import { Injectable } from '@angular/core';
import { HttpCallService } from './HttpCall.Service';
import { User } from '../Common.models/User.Model';
import { CanActivate, Router } from '@angular/router';
@Injectable()
export class AuthenticateService implements CanActivate {
    error: any;
    User: User;
    constructor(private httpServiceCall: HttpCallService, private router: Router) { }
    canActivate() {
        if (this.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    login(user: User) {
        this.AuthenticateUser(user);
    }
    private AuthenticateUser(user: User) {
        this.httpServiceCall.Url = '../../app/Files/login.json';
        this.httpServiceCall.httpMethodtype = "get";
        //this.httpServiceCall.param = ;
        this.httpServiceCall.CallHttpService().subscribe(u => this.goto(u, user), err => this.error = err)
    }
    isLoggedIn() {
        return this.User == null ? false : true;
    }
    logOut() {
        this.User = null;
    }
    goto(u: any, user: User) {
        let count = 0;
        u.forEach((element: any) => {
            count = count + 1;
            while (element.Name == user.Name && element.Password == user.Password) {
                this.User = element;
                user = element;
                this.router.navigate(['/home']);
                break;
            }
            if (count == u.length && !this.isLoggedIn()) {
                alert("Login Failed")
            }
        });

    }

}