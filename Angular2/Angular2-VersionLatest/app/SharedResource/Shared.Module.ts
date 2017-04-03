'use strict'
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common'
import {UserConfigurationSharedComponent} from './Components/UserConfiguartionShared.Component';
@NgModule({
    imports:[ CommonModule,FormsModule],
    declarations:[UserConfigurationSharedComponent],
    exports:[UserConfigurationSharedComponent]
})

export class SharedModule {

 }