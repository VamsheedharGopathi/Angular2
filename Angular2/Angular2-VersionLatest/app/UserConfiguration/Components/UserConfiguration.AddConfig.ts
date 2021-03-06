'use strict'

import { Component, OnInit, Input } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';
import { ConfigurationData } from '../../Services/LocalStorage';
import { Config } from '../../Common.models/Config.Model'

@Component({
    selector: 'UserConfig-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddConfigConfiguration.html'
})

export class UserConfigConfigurationComponent implements OnInit {

    @Input() configCollection = [Config];
    error: any;
    constructor(private httpService: HttpCallService, private configurationData: ConfigurationData) {
        //this.configCollection = [];
        configurationData.AddConfiguration = [];
    }
    ngOnInit() {
        var v = this;
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "api/ECH/Configuration";
        this.httpService.param = 'GetConfigurationFilename';
        this.httpService.CallHttpService().subscribe(
            queueDetails => this.ParseResult(queueDetails),
            error => this.error = <any>error);
    }

    private ParseResult(result: [any]) {
        result.forEach(function (data: any) {
            let con = new Config();
            con.ID = data.ID;
            con.Name = data.Name;
            con.Status = false;
            this.configurationData.AddConfiguration.push(con);
        }, this);
        this.httpService.CloseRequest();
    }
}