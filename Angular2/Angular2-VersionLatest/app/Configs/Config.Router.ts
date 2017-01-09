import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './Components/Configuartion.component';
import { ConfigurationListComponent } from './Components/ConfigurationList.component';
import {ConfigurationDetailsComponent} from './Components/ConfigurationDetails.component';
//import {EventLogMessagesComponent} from './Components/EventLogMessages.component';
const configRoutes: Routes = [
  {
    path: '', component: ConfigurationComponent,
    children: [{ path: '', component: ConfigurationListComponent },
     { path: ':configurationName', component: ConfigurationDetailsComponent }//,
      // { path: ':logName/:sourceName', component: EventLogMessagesComponent }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(configRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConfigRoutingModule { }

export const ConfigComponents = [ConfigurationComponent,ConfigurationListComponent,ConfigurationDetailsComponent]