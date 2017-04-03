'use strict'

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserConfiguartionRoutingModule, UserConfiguartionComponents } from './UserConfiguration.RouteConfig'
import { HttpCallService } from '../Services/HttpCall.Service'
import { User } from '../Common.models/User.Model'
import {AddUserComponent} from "./Components/UserConfiguration.AddUser.Component";

@NgModule({
    imports: [CommonModule, FormsModule, UserConfiguartionRoutingModule, HttpModule],
    declarations: UserConfiguartionComponents,
    providers: [HttpCallService,User],
    entryComponents: [ AddUserComponent ],
})

export class UserConfiguartiomModule {

}
