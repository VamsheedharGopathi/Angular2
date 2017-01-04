import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';
import {EventsLogComponent} from './Components/EventsLog.component';
import {EventLogListComponent} from './Components/EventLogList.component';
const queueRoutes: Routes = [
  { path: '',  component: EventsLogComponent ,
  children:[{ path: ':id', component: EventLogListComponent }]}
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