import { Injectable } from '@angular/core';
import { HttpCallService } from './HttpCall.Service';
import { User } from '../Common.models/User.Model';
@Injectable()
export class AuthenticateService {
    error: any;
    User: User = null;
    constructor(private httpServiceCall: HttpCallService) { }
    login() {
        let user = new User();
        user.Name = '';
        user.Password = '';
        this.AuthenticateUser(user);
    }
    private AuthenticateUser(user: User) {
        this.httpServiceCall.Url = '';
        this.httpServiceCall.httpMethodtype = "post";
        this.httpServiceCall.param = user;
        this.httpServiceCall.CallHttpService().subscribe(user => this.User = user, err => this.error = err)
    }
    isLoggedIn() {
        return this.User == null ? false : true;
    }
    logOut() {
        this.User = null;
    }

}