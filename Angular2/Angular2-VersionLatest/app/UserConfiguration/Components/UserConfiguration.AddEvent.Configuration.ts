'use strict'

import { Component, OnInit,Input } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';
import { Event } from '../../Common.models/Event.Model'
import { ConfigurationData } from '../../Services/LocalStorage';

@Component({
    selector: 'UserEvent-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddEventConfiguration.html'
})

export class UserEventConfigurationComponent implements OnInit {
   
    @Input() eventCollection = [Event];
    error: any;
    constructor(private httpService: HttpCallService,private configurationData:ConfigurationData ) {
        this.configurationData.AddEvent = [];
    }
     ngOnInit() {
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "api/ECH/Event";
        this.httpService.param = 'GetEventLogNames';
        this.httpService.CallHttpService().subscribe(
            res => this.ParseResult(res),
            error => this.error=error);
    }

    private ParseResult(result: [any]) {
        result.forEach(function (data: any) {
            let event = new Event();
            event.Name = data.Name;
            event.Status = false;
            this.configurationData.AddEvent.push(event);
        }, this);
        this.httpService.CloseRequest();
    }
}