import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCallService } from '../../Services/HttpCall.Service'
import 'rxjs/add/operator/do';
@Component({
    moduleId: module.id,
    selector: 'configuartion-Details',
    templateUrl: '../Templates/ConfigurationDetails.html'
})

export class ConfigurationDetailsComponent implements OnInit {
    configurationName: any;
    configurationDetails: any;
    error: any;
    constructor(private httpService: HttpCallService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.route
            .params
            .map(params => params['configurationName'])
            .do(configName => this.configurationName = configName)
            .subscribe(id => this.getConfigurationDetails());
    }

    getConfigurationDetails() {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Configuration/ReadConfiguration";
        this.httpService.param = this.configurationName;
        this.httpService.CallHttpService().subscribe(
            res => this.configurationDetails = res.result,
            error => this.error = <any>error);
    }

    saveConfigurationDetails() {
        var data={filename:this.configurationName,fileData:this.configurationDetails};
        this.httpService.httpMethodtype = "post";
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Configuration/SaveConfiguration";
        this.httpService.param ='='+JSON.stringify(data);
        this.httpService.CallHttpService().subscribe(
            res => this.SuccessMessage(),
            error => this.error = <any>error);
    }
    SuccessMessage()
    {
        alert('Saved Successfully')
    }
}
