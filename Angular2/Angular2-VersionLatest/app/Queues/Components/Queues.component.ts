import {Component,Output,Input} from '@angular/core'
import {HttpCallService} from '../../Services/HttpCall.Service';
@Component({
    moduleId:module.id,
    selector:"Queue",
    templateUrl:"../Templates/Queues.html",
})
export class QueuesComponent{
@Input() QueueData : any;
 constructor(private httpService:HttpCallService){}
    error:any;
    CountVisible:boolean=false;
    GetQueueDetails(queue:any)
    {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.91/ECHAutomation/api/ECH/Queue/GetQueueMessages";
        this.httpService.param = queue.Name;
        this.httpService.CallHttpService().subscribe(
            queueDetails => queue.Details = queueDetails.result,
            error => this.error = <any>error);
        this.CountVisible = true;
    }
    ClearQueueMessages(queue:any)
    {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://147.243.121.91/ECHAutomation/api/ECH/Queue/ClearQueueMessages";
        this.httpService.param = queue.Name;
        this.httpService.CallHttpService().subscribe(
            queueDetails => queue.Details = queueDetails.result,
            error => this.error = <any>error);
        this.CountVisible = true;
    }
}