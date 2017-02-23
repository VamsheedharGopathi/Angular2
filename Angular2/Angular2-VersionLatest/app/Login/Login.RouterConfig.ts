import { NgModule } from '@angular/core'
import { RouterModule,Routes } from '@angular/router'
import {LoginComponent} from './Component/Login.component'

const LoginRoutes: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRouterModule {

}

export const LoginComponents=[LoginComponent]


