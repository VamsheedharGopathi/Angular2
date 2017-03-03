import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service'
import { ActivatedRoute, Router } from '@angular/router';
import {EventLogCountComponent} from './EventLogMessagesCount';
import 'rxjs/add/operator/do';

@Component({
    moduleId: module.id,
    selector: 'event-messages',
    templateUrl: '../Templates/EventMessages.html'
})

export class EventLogMessagesComponent implements OnInit {
    eventLogMessages: any;
    logMessages: any;
    error: any;
    constructor(private httpService: HttpCallService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route
            .params
            .map(params => params)
            .do(params => this.eventLogMessages = params)
            .subscribe(id => this.getEventLogMessages());
    }

    getEventLogMessages() {
        this.getEventLogs();
    }
    getEventLogs() {
        this.logMessages='';
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Event/GetLogsBySourceName/" + this.eventLogMessages.logName;
        this.httpService.param = this.eventLogMessages.sourceName;
        this.httpService.CallHttpService().subscribe(
            res => this.logMessages = res,
            error => this.error = <any>error);
    }
}