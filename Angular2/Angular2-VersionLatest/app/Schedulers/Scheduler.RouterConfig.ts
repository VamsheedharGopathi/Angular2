'use strict'

import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';
import {SchedulerComponent} from "./Components/Scheduler.Component";


const queueRoutes: Routes = [
  { path: '',  component: SchedulerComponent }//,
 // { path: 'hero/:id', component: HeroDetailComponent }
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

export const SchedulerComponents=[SchedulerComponent];