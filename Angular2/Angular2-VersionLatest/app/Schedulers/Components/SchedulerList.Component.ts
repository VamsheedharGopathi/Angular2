import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';

@Component({
    selector: 'schedulerList-Component',
    templateUrl: '/app/Schedulers/Templates/SchedulerList.html'
})

export class SchedulerListComponent implements OnInit, OnDestroy {
    schedulerList = [];
    error: Array<any>;
    intervalfun: any;
    constructor(private httpCall: HttpCallService, private changeDetectorRef: ChangeDetectorRef) {
        this.getProcesses();
    }
    ngOnInit() {
        this.intervalfun = setInterval(() => {
            this.getProcesses();
            this.changeDetectorRef.detectChanges();
        }, 10000);

    }
    ngOnDestroy() {
        if (this.intervalfun != null) {
            clearTimeout(this.intervalfun);
        }
    }

    statusAction(item: any) {
        if (item.PerformAction) {
            this.httpCall.OpenRequest();
            this.httpCall.httpMethodtype = 'get';
            this.httpCall.Url = 'api/ECH/Services/MakeAction/' + item.Name;
            this.httpCall.param = item.Status == 1 ? 4 : 1;
            this.httpCall.CallHttpService().subscribe(
                res => this.parseStatusResult(),
                error => { });
        }
        else{
            alert('you dont have a permission');
        }
    }

    getProcesses() {
        this.httpCall.OpenRequest();
        this.httpCall.httpMethodtype = 'get';
        this.httpCall.Url = 'api/ECH/Services';
        this.httpCall.param = 'GetProcesses';
        this.httpCall.CallHttpService().subscribe(
            res => this.parseResult(res),
            error => { });
    }

    private parseStatusResult() {
        this.getProcesses();
    }

    private parseResult(res: any) {
        this.schedulerList = res;
        this.httpCall.CloseRequest();
    }
    private parseError(error: any) {
        this.error = <any>error;
        this.httpCall.CloseRequest();
    }
}