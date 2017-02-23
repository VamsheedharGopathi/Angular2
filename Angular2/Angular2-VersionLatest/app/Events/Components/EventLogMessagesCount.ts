import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, OnInit, OnDestroy } from "@angular/core";
import { HttpCallService } from '../../Services/HttpCall.Service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'event-logCount',
    templateUrl: '../Templates/EventCount.html'
})

export class EventLogCountComponent implements OnInit, OnDestroy {
    count: number;
    message: 'hello';
    eventLogMessages: any;
    
    intervalfun: any = null;
    //logMessages: any;
    error: any;
    constructor(private ref: ChangeDetectorRef, private httpService: HttpCallService, private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
        this.route
            .params
            .map(params => params)
            .do(params => this.eventLogMessages = params)
            .subscribe(id => this.getEventLogCount());
        this.intervalfun = setInterval(() => {
                this.getEventLogs();
                this.ref.detectChanges();
        }, 100000);
    }
    ngOnDestroy() {
        if (this.intervalfun != null) {
            clearTimeout(this.intervalfun);
        }
    }
    getEventLogCount() {
        this.getEventLogs();
    }
    getEventLogs() {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.91/ECHAutomation/api/ECH/Event/GetLogsCount/" + this.eventLogMessages.logName;
        this.httpService.param = this.eventLogMessages.sourceName;
        this.httpService.CallHttpService().subscribe(
            res => this.count = res ,
            error => this.error = <any>error);
    }
}