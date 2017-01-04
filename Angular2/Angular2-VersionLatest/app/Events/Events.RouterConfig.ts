import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';
import {EventsLogComponent} from './Components/EventsLog.component'
const queueRoutes: Routes = [
  { path: '',  component: EventsLogComponent }//,
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
export class EventsRoutingModule {}