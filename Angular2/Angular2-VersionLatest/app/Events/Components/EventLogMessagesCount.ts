import { Component,ChangeDetectionStrategy, ChangeDetectorRef,OnChanges, OnInit } from "@angular/core";
import { HttpCallService } from '../../Services/HttpCall.Service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'event-logCount',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: '../Templates/EventCount.html'
})

export class EventLogCountComponent implements OnInit {
    count: number;
    message:'hello';
    eventLogMessages: any;
    //logMessages: any;
    error: any;
    constructor(private ref: ChangeDetectorRef, private httpService: HttpCallService, private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
        this.route
            .params
            .map(params => params)
            .do(params => this.eventLogMessages = params)
            .subscribe(id => this.getEventLogCount());
        setInterval(() => {
            this.getEventLogs();
            this.ref.detectChanges();
        }, 10000);
    }
    getEventLogCount() {
        this.getEventLogs();
    }
    getEventLogs() {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://localhost:64049/api/ECH/Event/GetLogsCount/" + this.eventLogMessages.logName;
        this.httpService.param = this.eventLogMessages.sourceName;
        this.httpService.CallHttpService().subscribe(
            res => this.count = res,
            error => this.error = <any>error);
    }
}