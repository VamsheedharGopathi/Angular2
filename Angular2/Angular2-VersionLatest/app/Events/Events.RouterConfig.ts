import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';
import {EventsLogComponent} from './Components/EventsLog.component';
import {EventLogListComponent} from './Components/EventLogList.component';
import {EventsComponent} from './Components/Events.component';
import {EventLogMessagesComponent} from './Components/EventLogMessages.component';
const queueRoutes: Routes = [
  { path: '',  component: EventsComponent,
  children:[{ path: '', component:EventsLogComponent  },
  { path: ':logName', component: EventLogListComponent },
  { path: ':logName/:sourceName', component: EventLogMessagesComponent }]}
];
@NgModule({
  imports: [
    RouterModule.forChild(queueRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EventsRoutingModule {}

export const EventComponents=[EventsComponent,EventsLogComponent,EventLogListComponent,EventLogMessagesComponent]