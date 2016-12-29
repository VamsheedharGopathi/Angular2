import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import {QueueRoutingModule} from './Queue.RouterConfig'
import {HttpCallService} from '../Services/HttpCall.Service'
import {QueueListComponent} from './Components/QueueList.component'
import {QueuesComponent} from './Components/Queues.component'
@NgModule({
    imports:[ CommonModule,QueueRoutingModule],
    declarations:[QueueListComponent,QueuesComponent],
    providers:[HttpCallService]
})

export class QueueModule{
}