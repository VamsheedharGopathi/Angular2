import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {BodyComponent} from '../Component/Body/body.component'
import {AuthenticateService} from '../Services/Authenticate.Service';
const appRoutes: Routes = [
  { path: '', component: BodyComponent,canActivate: [AuthenticateService] },
  { path: 'home', component: BodyComponent,canActivate: [AuthenticateService] },
  { path: 'login', loadChildren: 'app/Login/Login.module#LoginModule' },
  { path: 'Queues', loadChildren: 'app/Queues/Queues.module#QueueModule',canActivate: [AuthenticateService] },
  { path: 'Events', loadChildren: 'app/Events/Events.module#EventsModule',canActivate: [AuthenticateService] },
  { path: 'Configuration', loadChildren: 'app/Configs/Config.Module#ConfigModule',canActivate: [AuthenticateService] },
  { path: '**', component: BodyComponent,canActivate: [AuthenticateService] }
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