import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import {EventsRoutingModule} from './Events.RouterConfig';
import {HttpCallService} from '../Services/HttpCall.Service';
import {EventsLogComponent} from './Components/EventsLog.component';
import {EventLogListComponent} from './Components/EventLogList.component';
@NgModule({
    imports:[ CommonModule,FormsModule,EventsRoutingModule,HttpModule],
    declarations:[EventsLogComponent,EventLogListComponent],
    providers:[HttpCallService]
})

export class EventsModule{
}