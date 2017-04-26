import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, OnInit, OnDestroy, Input,Output,EventEmitter } from "@angular/core";
import { HttpCallService } from '../../Services/HttpCall.Service';
import { ActivatedRoute, Router } from '@angular/router';
import { Criteria } from '../../Common.models/Criteria.Model'
@Component({
    // moduleId: module.id,
    selector: 'event-logCount',
    templateUrl: '/app/Events/Templates/EventCount.html'
})

export class EventLogCountComponent implements OnInit, OnDestroy {
    @Input() count: number = 0;
    @Input() levelCriteria: Criteria;
    @Input() foundCount: boolean = false;
    @Output() ColorChange=new EventEmitter();
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
           // this.getEventLogs();
            this.ref.detectChanges();
        }, 10000);
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
        if (this.levelCriteria.Level.length > 0 && this.levelCriteria.DateFrom != undefined && this.levelCriteria.DateTo != undefined) {

            //this.httpService.OpenRequest();
            // this.httpService.httpMethodtype = "Get";
            //this.httpService.Url = "api/ECH/Event/GetLogsCount/" + this.eventLogMessages.logName;
            // this.httpService.param = this.eventLogMessages.sourceName;
            this.httpService.httpMethodtype = "post";
            this.httpService.Url = "api/ECH/Event/GetLogsByCriteria/" + this.eventLogMessages.logName + "/" + this.eventLogMessages.sourceName;
            this.httpService.param = '=' + JSON.stringify(this.levelCriteria);
            this.httpService.CallHttpService().subscribe(
                res => this.parseresult(res),
                error => this.httpService.CloseRequest());
        }
    }

    parseresult(res: any) {
        if (this.count != res.length) {
            this.foundCount = true;
            this.ColorChange.emit(true);
        }
        this.count = res.length;
        //this.httpService.CloseRequest();
    }
}