'use strict'
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common'
import {UserConfigurationSharedComponent} from './Components/UserConfiguartionShared.Component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports:[ CommonModule,FormsModule,ChartsModule],
    declarations:[UserConfigurationSharedComponent],
    exports:[UserConfigurationSharedComponent]
})

export class SharedModule {

 }