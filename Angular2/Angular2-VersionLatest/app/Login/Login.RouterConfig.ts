import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {LoginComponent} from './Component/Login.component'

const LoginRoutes: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(LoginRoutes)],
    exports: [RouterModule]
})
export class LoginRouterModule {

}

export const LoginComponents=[LoginComponent]