import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import {QueueRoutingModule} from './Queue.RouterConfig'
import {HttpCallService} from '../Services/HttpCall.Service'
import {QueueListComponent} from './Components/QueueList.component'
@NgModule({
    imports:[ CommonModule,QueueRoutingModule],
    declarations:[QueueListComponent,],
    providers:[HttpCallService]
})

export class QueueModule{
}