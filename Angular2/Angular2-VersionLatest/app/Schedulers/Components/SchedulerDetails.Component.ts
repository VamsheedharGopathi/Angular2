import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCallService } from '../../Services/HttpCall.Service';
import 'rxjs/add/operator/do';
@Component({
    selector: 'serviceDetails-Component',
    templateUrl: '/app/Schedulers/Templates/SchedulerDetails.html'
})

export class SchedulerDetailsComponent implements OnInit {
    paramList: any;
    serviceDetails:any;
    constructor(private route: ActivatedRoute, private httpCall: HttpCallService) {

    }
    ngOnInit() {
        this.route
            .params
            .map(params => params)
            .do(params => this.paramList = params)
            .subscribe(id => this.getServicesList());
    }

    getServicesList() {
        this.httpCall.OpenRequest();
        this.httpCall.httpMethodtype = 'get';
        this.httpCall.Url = 'api/ECH/Services/GetProcessByName';
        this.httpCall.param = this.paramList.serviceName;
        this.httpCall.CallHttpService().subscribe(
            res => this.parseResult(res),
            error => this.parseError(error));

    }
    parseResult(res: any) {
        this.serviceDetails=res;
        this.httpCall.CloseRequest();
    }
    parseError(eror: any) {
        this.httpCall.CloseRequest();
    }
}