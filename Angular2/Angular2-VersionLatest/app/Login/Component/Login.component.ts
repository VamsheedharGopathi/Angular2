import {Component} from '@angular/core'
import {HttpCallService} from '../../Services/HttpCall.Service'

Component({
    moduleId:module.id,
    selector:'Login-Component',
    templateUrl:'../Templates/Login.html'
})

export class LoginComponent{

    constructor(private httpServiceCall:HttpCallService){}
    
}