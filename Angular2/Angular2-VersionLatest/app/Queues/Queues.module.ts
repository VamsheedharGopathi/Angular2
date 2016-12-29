import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import {QueueRoutingModule} from './Queue.RouterConfig'
import {HttpCallService} from '../Services/HttpCall.Service'
import {QueueListComponent} from './Components/QueueList.component'
import {QueuesComponent} from './Components/Queues.component'
@NgModule({
    imports:[ CommonModule,QueueRoutingModule,HttpModule],
    declarations:[QueueListComponent,QueuesComponent],
    providers:[HttpCallService],
    bootstrap:[QueueListComponent]
})

export class QueueModule{

}