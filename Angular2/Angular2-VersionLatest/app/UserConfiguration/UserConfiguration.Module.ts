'use strict'

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserConfiguartionRoutingModule, UserConfiguartionComponents } from './UserConfiguration.RouteConfig'
import { HttpCallService } from '../Services/HttpCall.Service'
import { User } from '../Common.models/User.Model'
import {AddUserComponent} from "./Components/UserConfiguration.AddUser.Component";
import { UserQueueConfigurationComponent } from "./Components/UserConfiguration.AddQueue.Configuration";
import { UserConfigConfigurationComponent } from "./Components/UserConfiguration.AddConfig";
import { UserEventConfigurationComponent } from "./Components/UserConfiguration.AddEvent.Configuration";
import { UserServicesConfigurationComponent } from "./Components/UserConfiguration.AddServices.Configuration";
import {SharedModule} from '../SharedResource/Shared.Module'
@NgModule({
    imports: [CommonModule, FormsModule, UserConfiguartionRoutingModule, HttpModule,SharedModule],
    declarations: UserConfiguartionComponents,
    providers: [HttpCallService,User],
    entryComponents: [ AddUserComponent,UserQueueConfigurationComponent,UserConfigConfigurationComponent,UserEventConfigurationComponent,UserServicesConfigurationComponent ],
})

export class UserConfiguartiomModule {

}
