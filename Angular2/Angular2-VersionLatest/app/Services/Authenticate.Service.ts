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
        this.httpServiceCall.OpenRequest();
        this.httpServiceCall.Url = '../../app/Files/login.json';
        this.httpServiceCall.httpMethodtype = "get";
        this.httpServiceCall.param = null;
        this.httpServiceCall.CallHttpService().subscribe(u => this.goto(u, user), err => () => { this.httpServiceCall.Request = false; })
    }
    registrator(user: User) {
        //const fs = require('fs-extra')
        // this.fs;
        //  var m = JSON.parse(fs.readFileSync('../../app/Files/login.json').toString());
        //   m[m.length]=new User();
        //  m[m.length]=user;
        //  fs.writeFile('../../app/Files/login.json', JSON.stringify(m));
    }
    isLoggedIn() {
        return this.User == null ? false : true;
    }
    logOut() {
        this.User = null;
    }
    goto(u: User[], user: User) {
        let count = 0;
        u.forEach((element: User) => {
            count = count + 1;
            if (element.Name == user.Name && element.Password == user.Password) {
                this.User = element;
                user = element;
                this.router.navigate(['/home']);
            }
            if (count == u.length && !this.isLoggedIn()) {
                alert("Login Failed")
            }
        });
        this.httpServiceCall.CloseRequest();
    }

}