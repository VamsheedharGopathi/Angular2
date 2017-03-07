import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, OnInit, OnDestroy,Input } from "@angular/core";
import { HttpCallService } from '../../Services/HttpCall.Service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'event-logCount',
    templateUrl: '../Templates/EventCount.html'
})

export class EventLogCountComponent implements OnInit, OnDestroy {
    @Input() count: number=0;
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
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Event/GetLogsCount/" + this.eventLogMessages.logName;
        this.httpService.param = this.eventLogMessages.sourceName;
        this.httpService.CallHttpService().subscribe(
            res =>(res)=>{this.count = res;this.httpService.Request=false;} ,
            error =>()=>{this.httpService.Request=false;});
    }
}