import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import {EventsRoutingModule,EventComponents} from './Events.RouterConfig';
import {HttpCallService} from '../Services/HttpCall.Service';
import {MorePipe} from './Services/More.pipe'
@NgModule({
    imports:[ CommonModule,FormsModule,EventsRoutingModule,HttpModule],
    declarations:[EventComponents,MorePipe],
    providers:[HttpCallService]
})

export class EventsModule{
}