'use strict'

import { Component, OnInit,Input } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';
import { Queue } from '../../Common.models/Queues.Model'

@Component({
    selector: 'queueConfiguartion-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddQueuesConfiguration.html'
})

export class UserQueueConfigurationComponent implements OnInit {
   
    @Input() queueCollection = [Queue];
    error: any;
    constructor(private httpService: HttpCallService) {
        this.queueCollection = [];
    }
    ngOnInit() {
        var v = this;
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "api/ECH/Queue";
        this.httpService.param = 'GetQueueNames';
        this.httpService.CallHttpService().subscribe(
            queueDetails => this.ParseResult(queueDetails),
            error => this.error = <any>error);
    }

    private ParseResult(result: [any]) {
        result.forEach(function (data: any) {
            let q = new Queue();
            q.Name = data.Name;
            q.Status = false;
            this.queueCollection.push(q);
        }, this);
        this.httpService.CloseRequest();
    }
}