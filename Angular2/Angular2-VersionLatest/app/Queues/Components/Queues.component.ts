import {Component,Output} from '@angular/core'
import {HttpCallService} from '../../Services/HttpCall.Service';
@Component({
    moduleId:module.id,
    selector:"Queue",
    templateUrl:"../Templates/Queues.html",
})
export class QueuesComponent{

 constructor(private httpService:HttpCallService){}
    error:any;
    CountVisible:boolean=false;
    GetQueueDetails(queue:any)
    {
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://localhost:64049/api/ECH/Queue/GetQueueMessages";
        this.httpService.param = queue.Name;
        this.httpService.CallHttpService().subscribe(
            queueDetails => queue.Details = queueDetails.result,
            error => this.error = <any>error);
        this.CountVisible = true;
    }
}