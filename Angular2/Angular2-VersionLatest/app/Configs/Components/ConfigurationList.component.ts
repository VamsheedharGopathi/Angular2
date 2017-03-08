import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service'
@Component({
   // moduleId: module.id,
    selector: 'configurationList',
    templateUrl: '/app/Configs/Templates/ConfigurationList.html'
})

export class ConfigurationListComponent implements OnInit {
    configuartionFiles: any;
    error: any;
    constructor(private httpService: HttpCallService) { }
    ngOnInit() {

        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Configuration";
        this.httpService.param = 'GetConfigurationFilename';
        this.httpService.CallHttpService().subscribe(
            res => this.configuartionFiles = res,
            error => this.error = <any>error);
    }
}

