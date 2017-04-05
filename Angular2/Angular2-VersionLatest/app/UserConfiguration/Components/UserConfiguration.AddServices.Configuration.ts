'use strict'

import { Component, OnInit,Input } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';
import { Service } from '../../Common.models/Services.Model'
import { ConfigurationData } from '../../Services/LocalStorage';
@Component({
    selector: 'UserEvent-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddServicesConfiguration.html'
})

export class UserServicesConfigurationComponent implements OnInit {
   
    @Input() serviceCollection = [Service];
    error: any;
    constructor(private httpService: HttpCallService,private configurationData:ConfigurationData) {
        this.configurationData.AddServiceS = [];
    }
     ngOnInit() {
       this.httpService.OpenRequest();
        this.httpService.httpMethodtype = 'get';
        this.httpService.Url = 'api/ECH/Services';
        this.httpService.param = 'GetProcesses';
        this.httpService.CallHttpService().subscribe(
            res => this.ParseResult(res.result),
            error => { });
    }

    private ParseResult(result: [any]) {
        result.forEach(function (data: any) {
            let service = new Service();
            service.Name = data.Name;
            service.Status = false;
            this.configurationData.AddServiceS.push(service);
        }, this);
        this.httpService.CloseRequest();
    }
}