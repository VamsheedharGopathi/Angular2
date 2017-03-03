import {Component,Output,Input,OnInit} from '@angular/core'
import {HttpCallService} from '../../Services/HttpCall.Service';
@Component({
    moduleId:module.id,
    selector:"Queue",
    templateUrl:"../Templates/Queues.html",
})
export class QueuesComponent implements OnInit{
@Input() QueueData : any;
 constructor(private httpService:HttpCallService){}
    error:any;
    CountVisible:boolean=false;
    ngOnInit(){

    }
    GetQueueDetails(queue:any)
    {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Queue/GetQueueMessages";
        this.httpService.param = queue.Name;
        this.httpService.CallHttpService().subscribe(
            queueDetails => queue.Details = queueDetails.result,
            error => this.error = <any>error);
        this.CountVisible = true;
    }
    ClearQueueMessages(queue:any)
    {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.90/ECHAutomation/api/ECH/Queue/ClearQueueMessages";
        this.httpService.param = queue.Name;
        this.httpService.CallHttpService().subscribe(
            queueDetails => queue.Details = queueDetails.result,
            error => this.error = <any>error);
        this.CountVisible = true;
    }
}