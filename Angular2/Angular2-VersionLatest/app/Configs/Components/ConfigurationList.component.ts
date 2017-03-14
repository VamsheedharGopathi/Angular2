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
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "api/ECH/Configuration";
        this.httpService.param = 'GetConfigurationFilename';
        this.httpService.CallHttpService().subscribe(
            res => this.parseResult(res),
            error => this.parseError(error));
    }

    parseResult(res: any) {
        this.configuartionFiles = res;
        this.httpService.CloseRequest()
    }

    parseError(error: any) {
        this.error = <any>error;
        this.httpService.CloseRequest()
    }
}

