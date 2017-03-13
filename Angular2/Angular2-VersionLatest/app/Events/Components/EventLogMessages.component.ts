import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service'
import { ActivatedRoute, Router } from '@angular/router';
import { EventLogCountComponent } from './EventLogMessagesCount';
import 'rxjs/add/operator/do';

@Component({
    //moduleId: module.id,
    selector: 'event-messages',
    templateUrl: '/app/Events/Templates/EventMessages.html'
})

export class EventLogMessagesComponent implements OnInit {
    eventLogMessages: any;
    logMessages: any[];
    MessageCount: number;
    error: any;
    copyData: boolean = false;
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
    copyText(event: any) {
        event.MessageCopy = event.MessageCopy ? false : true;
    }
    getEventLogs() {
        this.logMessages = [];
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "ECHAutomation/api/ECH/Event/GetLogsBySourceName/" + this.eventLogMessages.logName;
        this.httpService.param = this.eventLogMessages.sourceName;
        this.httpService.CallHttpService().subscribe(
            res => this.paras(res),
            error => () => { this.httpService.CloseRequest(); });
    }
    paras(res: any) {
        this.logMessages = res;
        this.MessageCount = res.length;
        this.httpService.CloseRequest();
    }
}