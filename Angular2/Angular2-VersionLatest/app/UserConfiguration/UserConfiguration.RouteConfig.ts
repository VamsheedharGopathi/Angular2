'use strict'

import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';
import {UserConfigurationComponent} from "./Components/UserConfiguration.Component";
import {AddConfiguartionComponent} from "./Components/UserConfiguration.AddConfiguration";
import {AddUserComponent} from "./Components/UserConfiguration.AddUser.Component";
import {DynamicComponent} from './Components/UserDynamicConfiguration';
import { UserQueueConfigurationComponent } from "./Components/UserConfiguration.AddQueue.Configuration";
import { UserConfigConfigurationComponent } from "./Components/UserConfiguration.AddConfig";
import { UserEventConfigurationComponent } from "./Components/UserConfiguration.AddEvent.Configuration";
import { UserServicesConfigurationComponent } from "./Components/UserConfiguration.AddServices.Configuration";

const queueRoutes: Routes = [
  { path: '',  component: UserConfigurationComponent,
  children:[{ path: '', component: AddConfiguartionComponent }]}
];
@NgModule({
  imports: [
    RouterModule.forChild(queueRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserConfiguartionRoutingModule {}

export const UserConfiguartionComponents=[UserConfigurationComponent,AddConfiguartionComponent,AddUserComponent,UserQueueConfigurationComponent,UserConfigConfigurationComponent,UserEventConfigurationComponent,UserServicesConfigurationComponent,DynamicComponent];