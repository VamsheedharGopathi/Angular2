'use strict'
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common'
import {UserConfigurationSharedComponent} from './Components/UserConfiguartionShared.Component';
import {ChartComponent} from './Components/ChartComponent';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports:[ CommonModule,FormsModule,ChartsModule],
    declarations:[UserConfigurationSharedComponent,ChartComponent],
    exports:[UserConfigurationSharedComponent,ChartComponent]
})

export class SharedModule {

 }