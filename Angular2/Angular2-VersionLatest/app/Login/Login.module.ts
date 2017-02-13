import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {HttpCallService} from '../Services/HttpCall.Service'
import {LoginRouterModule,LoginComponents} from './Login.RouterConfig'

@NgModule({
    imports: [FormsModule, CommonModule, HttpModule],
    declarations:[LoginComponents],
    providers:[HttpCallService]
})

export class LoginModule {

}