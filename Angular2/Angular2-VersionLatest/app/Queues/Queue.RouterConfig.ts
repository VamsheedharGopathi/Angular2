import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';
import {QueueListComponent} from "./Components/QueueList.component";
const queueRoutes: Routes = [
  { path: 'Queues',  component: QueueListComponent }//,
 // { path: 'hero/:id', component: HeroDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(queueRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class QueueRoutingModule {}