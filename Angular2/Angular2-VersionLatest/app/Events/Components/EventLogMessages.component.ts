import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service'
import { ActivatedRoute, Router } from '@angular/router';
import { EventLogCountComponent } from './EventLogMessagesCount';
import { Criteria } from '../../Common.models/Criteria.Model'
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
    eventLogCriteria: Criteria;
    foundlog: boolean;
    constructor(private httpService: HttpCallService, private route: ActivatedRoute, private router: Router, private criteria: Criteria) {
        this.eventLogCriteria = criteria;
        this.eventLogCriteria.Level = new Array<Number>();
    }

    ngOnInit() {
        this.route
            .params
            .map(params => params)
            .do(params => this.eventLogMessages = params)
            .subscribe(id => this.getEventLogMessages());
    }

    getEventLogMessages() {
        //this.getEventLogs();
    }
    copyText(event: any) {
        event.MessageCopy = event.MessageCopy ? false : true;
    }
    getLevel(level: number, evt: any) {
        if (evt.target.checked)
            this.eventLogCriteria.Level.push(level);
        else
            this.eventLogCriteria.Level = this.eventLogCriteria.Level.filter(function (data) {
                return data != level;
            })
    }
    getEventLogs() {
        if (this.eventLogCriteria.DateFrom != undefined && this.eventLogCriteria.DateTo != undefined && this.eventLogCriteria.Level.length > 0) {
            var data = this.eventLogCriteria;
            this.httpService.OpenRequest();
            this.httpService.httpMethodtype = "post";
            this.httpService.Url = "api/ECH/Event/GetLogsByCriteria/" + this.eventLogMessages.logName + "/" + this.eventLogMessages.sourceName;
            this.httpService.param = '=' + JSON.stringify(data);
            this.httpService.CallHttpService().subscribe(
                res => this.parseResult(res),
                error => this.parseError(error));

        }
        else {
            alert('Please select the Criteria');
        }
    }
    parseResult(res: any) {
        this.logMessages = res;
        this.MessageCount = res.length;
        this.foundlog = false;
        this.httpService.CloseRequest();
    }
    parseError(error: any) {
        this.httpService.CloseRequest();
    }
    onColorChange(event) {
        this.foundlog = event;
    }

}