'use strict'

import { Component, OnInit,Input } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';
import { Service } from '../../Common.models/Services.Model'

@Component({
    selector: 'UserEvent-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddServicesConfiguration.html'
})

export class UserServicesConfigurationComponent implements OnInit {
   
    @Input() serviceCollection = [Service];
    error: any;
    constructor(private httpService: HttpCallService) {
        this.serviceCollection = [];
    }
     ngOnInit() {
       this.httpService.OpenRequest();
        this.httpService.httpMethodtype = 'get';
        this.httpService.Url = 'api/ECH/Services';
        this.httpService.param = 'GetProcesses';
        this.httpService.CallHttpService().subscribe(
            res => this.ParseResult(res),
            error => { });
    }

    private ParseResult(result: [any]) {
        result.forEach(function (data: any) {
            let service = new Service();
            service.Name = data.Name;
            service.Status = false;
            this.serviceCollection.push(service);
        }, this);
        this.httpService.CloseRequest();
    }
}