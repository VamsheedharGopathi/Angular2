import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import {EventsRoutingModule,EventComponents} from './Events.RouterConfig';
import {ListComponent} from '../Component/Commmon/list.Component'
import {HttpCallService} from '../Services/HttpCall.Service';
import {MorePipe} from './Services/More.pipe';
import {Criteria} from '../Common.models/Criteria.Model'

@NgModule({
    imports:[ CommonModule,FormsModule,EventsRoutingModule,HttpModule],
    declarations:[EventComponents,MorePipe,ListComponent],
    providers:[HttpCallService,Criteria]
})

export class EventsModule{
}