import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {LoginRouterModule,LoginComponents} from './Login.RouterConfig'
import {HttpCallService} from '../Services/HttpCall.Service'


@NgModule({
    imports: [FormsModule, CommonModule,LoginRouterModule, HttpModule],
    declarations:[LoginComponents],
    providers:[HttpCallService]
})

export class LoginModule {

}
