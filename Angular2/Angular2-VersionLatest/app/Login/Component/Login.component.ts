import {Component} from '@angular/core'
import {AuthenticateService} from '../../Services/Authenticate.Service'
import {User} from '../../Common.models/User.Model'
@Component({
    moduleId:module.id,
    selector:'Login',
    templateUrl:'../Templates/Login.html'
})

export class LoginComponent{
    user:User=new User();
    constructor(private Authenticate:AuthenticateService){
    }
    login(user:User){
       this.Authenticate.login(user)
    }

}