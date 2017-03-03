
import {Component,OnDestroy} from '@angular/core'
import {AuthenticateService} from '../../Services/Authenticate.Service'
import {User} from '../../Common.models/User.Model'
@Component({
    moduleId:module.id,
    selector: 'Registration',
    templateUrl:'../Templates/Registration.html'
})

export class RegistrationComponent implements OnDestroy{
    private user:User;
    constructor(private Authenticate:AuthenticateService,private u:User){
        this.user= u;
    }
    ngOnDestroy() {
        this.user = null;
    }

    getRegistrator(){
        this.Authenticate.registrator(this.user);
    }

}