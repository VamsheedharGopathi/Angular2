import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';
import { Router } from '@angular/router';

@Component({
   // moduleId: module.id,
    selector: 'EventsLog',
    templateUrl: '/app/Events/Templates/EventsLog.html'
})

export class EventsLogComponent implements OnInit {
    eventLog = [];
    error: any;
    constructor(private httpService: HttpCallService, private router: Router) { }
    ngOnInit() {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Event";
        this.httpService.param = 'GetEventLogNames';
        this.httpService.CallHttpService().subscribe(
            res => this.parse(res),
            error => this.parseError(error));
    }

    parse(res: any) {
        this.eventLog = res;
        this.httpService.Request = false;
    }
    parseError(error: any) {
        this.error = error;
    }

    GetLogDetails(param: string) {
        this.router.navigate(['Events/' + param]);
    }

}