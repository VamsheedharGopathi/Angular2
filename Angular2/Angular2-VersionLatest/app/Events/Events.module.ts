import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import {EventsRoutingModule,EventComponents} from './Events.RouterConfig';
import {HttpCallService} from '../Services/HttpCall.Service';
@NgModule({
    imports:[ CommonModule,FormsModule,EventsRoutingModule,HttpModule],
    declarations:[EventComponents],
    providers:[HttpCallService]
})

export class EventsModule{
}