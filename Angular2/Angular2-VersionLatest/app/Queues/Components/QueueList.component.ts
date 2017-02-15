import {Component,OnInit} from "@angular/core";
import {HttpCallService} from '../../Services/HttpCall.Service';
@Component({
    moduleId:module.id,
    selector:"QueueList",
    templateUrl:"../Templates/QueueList.html",
})
export class QueueListComponent implements OnInit{
    queue:any;
    error:any;
    constructor(private httpService:HttpCallService){}
    ngOnInit()
    {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.91/ECHAutomation/api/ECH/Queue";
        this.httpService.param ='GetQueueNames' ;
        this.httpService.CallHttpService().subscribe(
            queueDetails => this.queue = queueDetails,
            error => this.error = <any>error);
    }
}