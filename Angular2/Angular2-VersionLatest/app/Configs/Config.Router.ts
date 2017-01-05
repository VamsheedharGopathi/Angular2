import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './Components/Configuartion.component';
import { ConfigurationListComponent } from './Components/ConfigurationList.component';
//import {EventsComponent} from './Components/Events.component';
//import {EventLogMessagesComponent} from './Components/EventLogMessages.component';
const configRoutes: Routes = [
  {
    path: '', component: ConfigurationListComponent,
    children: [{ path: 'name', component: ConfigurationListComponent }//,
      //{ path: ':logName', component: EventLogListComponent },
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

export const ConfigComponents = [ConfigurationComponent,ConfigurationListComponent]