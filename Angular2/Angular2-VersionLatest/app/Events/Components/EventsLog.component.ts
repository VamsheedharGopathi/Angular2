import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';
import { Router }  from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'EventsLog',
    templateUrl: '../Templates/EventsLog.html'
})

export class EventsLogComponent implements OnInit {
    eventLog: any;
    error: any;
    constructor(private httpService: HttpCallService,private router:Router) { }
    ngOnInit() {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Event";
        this.httpService.param = 'GetEventLogNames';
        this.httpService.CallHttpService().subscribe(
            res => this.eventLog = res,
            error => this.error = <any>error);
    }

    GetLogDetails(param:string){
        this.router.navigate(['Events/'+param]);
    }

}