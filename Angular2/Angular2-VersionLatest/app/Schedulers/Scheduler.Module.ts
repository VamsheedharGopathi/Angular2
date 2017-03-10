'use strict'

import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import {SchedulerRoutingModule,SchedulerComponents} from './Scheduler.RouterConfig'
import {HttpCallService} from '../Services/HttpCall.Service'


@NgModule({
    imports:[ CommonModule,FormsModule,SchedulerRoutingModule,HttpModule],
    declarations:SchedulerComponents,
    providers:[HttpCallService]
})

export class SchedulerModule{
}