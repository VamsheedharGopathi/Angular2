import {NgModule} from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
  ///{ path: 'crisis-center', component: CrisisListComponent },
 // { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class QueueRoutingModule {}