import { Injectable } from '@angular/core';
import { HttpCallService } from './HttpCall.Service';
import { User } from '../Common.models/User.Model';
import { CanActivate, Router } from '@angular/router';
import {SessionStorage  } from './LocalStorage';
@Injectable()
export class AuthenticateService implements CanActivate {
    error: any;
    User: User;
    constructor(private httpServiceCall: HttpCallService, private router: Router,private session:SessionStorage) { }
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
        /**
         * 
          this.httpServiceCall.OpenRequest();
            this.httpServiceCall.connectToLocal = true;
            this.httpServiceCall.Url = '../../app/Files/login.json';
            this.httpServiceCall.httpMethodtype = "get";
            this.httpServiceCall.param = null;
            this.httpServiceCall.CallHttpService().subscribe(u => this.goto(u, user), err => () => { this.httpServiceCall.Request = false; })*/
        var dataString = JSON.stringify(user);
        this.httpServiceCall.OpenRequest();
        this.httpServiceCall.Url = 'api/ECH/User/GetUser';
        this.httpServiceCall.httpMethodtype = "post";
        this.httpServiceCall.param = dataString;
        this.httpServiceCall.CallHttpService().subscribe(u => this.goto(u), err => this.Parseerror(err));
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
    GetLoginUser(): User {
        return this.User;
    }
    logOut() {
        this.User = null;
    }
    goto(u: any) {
        this.User = u.Data as User;
        this.session["EncryptedData"]=btoa(JSON.stringify(this.User));
        this.httpServiceCall.CloseRequest();
        this.router.navigate(['/Home'])
    }
    Parseerror(e: any) {
        this.httpServiceCall.CloseRequest();
    }

}