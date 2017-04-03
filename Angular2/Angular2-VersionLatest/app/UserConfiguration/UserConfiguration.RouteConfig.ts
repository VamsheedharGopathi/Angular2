'use strict'

import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';
import {UserConfigurationComponent} from "./Components/UserConfiguration.Component";
import {AddConfiguartionComponent} from "./Components/UserConfiguration.AddConfiguration";
import {AddUserComponent} from "./Components/UserConfiguration.AddUser.Component";
import {DynamicComponent} from './Components/UserDynamicConfiguration';

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

export const UserConfiguartionComponents=[UserConfigurationComponent,AddConfiguartionComponent,AddUserComponent,DynamicComponent];