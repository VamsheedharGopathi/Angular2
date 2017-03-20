'use strict'

import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';
import {SchedulerComponent} from "./Components/Scheduler.Component";
import {SchedulerListComponent} from "./Components/SchedulerList.Component";
import {SchedulerDetailsComponent} from "./Components/SchedulerDetails.Component";


const queueRoutes: Routes = [
  { path: '',  component: SchedulerComponent,
  children:[{ path: '', component: SchedulerListComponent }]}
];
@NgModule({
  imports: [
    RouterModule.forChild(queueRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SchedulerRoutingModule {}

export const SchedulerComponents=[SchedulerComponent,SchedulerListComponent,SchedulerDetailsComponent];