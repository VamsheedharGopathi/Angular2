import { Component } from '@angular/core'
import { HttpCallService } from '../../Services/HttpCall.Service';
import { User } from '../../Common.models/User.Model'
@Component({
    selector: 'addUser-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddUser.html'
})

export class AddUserComponent {
    //tabArray: Array<{ name: string, status: Number }>;

    user: User;
    constructor(private httpcall: HttpCallService, private u: User) {
        this.user = u;
        
    }
}