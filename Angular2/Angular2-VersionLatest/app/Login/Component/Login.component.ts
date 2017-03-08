import {Component,OnDestroy} from '@angular/core'
import {AuthenticateService} from '../../Services/Authenticate.Service'
import {User} from '../../Common.models/User.Model'
@Component({
    //moduleId:module.id,
    selector:'Login',
    templateUrl:'/app/Login/Templates/Login.html'
})

export class LoginComponent implements OnDestroy{
    private user:User;
    constructor(private Authenticate:AuthenticateService,private u:User){
        this.user= u;
    }
    login(user:User){
       this.Authenticate.login(user)
    }
    ngOnDestroy(){
        this.user=null;
    }

}