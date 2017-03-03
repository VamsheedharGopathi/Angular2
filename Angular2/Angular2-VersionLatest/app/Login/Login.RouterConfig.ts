import { NgModule } from '@angular/core'
import { RouterModule,Routes } from '@angular/router'
import {MenuItemComponent} from './Component/MenuItem.component'
import {LoginComponent} from './Component/Login.component'
import {RegistrationComponent} from './Component/Registration.component'

const LoginRoutes: Routes = [
  { path: '',  component: MenuItemComponent,
  children:[{ path: '', component:LoginComponent  },{ path: ':Registration', component: RegistrationComponent }]}
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

export const LoginComponents=[MenuItemComponent,LoginComponent,RegistrationComponent]


