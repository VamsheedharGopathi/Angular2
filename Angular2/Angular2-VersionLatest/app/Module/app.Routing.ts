import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {BodyComponent} from '../Component/Body/body.component'
const appRoutes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'home', component: BodyComponent },
  { path: 'Queues', loadChildren: 'app/Queues/Queues.module#QueueModule' },
  { path: 'Events', loadChildren: 'app/Events/Events.module#EventsModule' },
  { path: 'Configuration', loadChildren: 'app/Configs/Config.Module#ConfigModule' },
  { path: '**', component: BodyComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}