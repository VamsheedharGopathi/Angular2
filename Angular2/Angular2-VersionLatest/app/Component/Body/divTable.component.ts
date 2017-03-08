import {Component} from "@angular/core";
import {HttpCallService} from  "../../Services/HttpCall.Service";
import { Router }  from '@angular/router';
@Component({
   // moduleId:module.id,
    selector:"divTable-Component",
    templateUrl:"/app/Templates/divTable_Component.html"
})

export class DivTableComponent{
QueueData:any;
CountVisible:boolean=false;
//QueueDetails:any;
error:any;
    constructor(private httpService:HttpCallService,private router:Router){}

  /*  GetQueueNames()
    {
        this.httpService.httpMethodtype="Get";
        this.httpService.Url="http://localhost:64049/api/ECH/Queue";
        this.httpService.param="GetQueueNames";
        this.httpService.CallHttpService().subscribe(
                       queue => this.QueueData=queue,
                       error =>  this.error = <any>error);
    }

     GetQueueDetails(queue:any)
    {
        this.httpService.httpMethodtype="Get";
        this.httpService.Url="http://localhost:64049/api/ECH/Queue/GetQueueMessages";
        this.httpService.param=queue.Name;
        this.httpService.CallHttpService().subscribe(
                       queueDetails => queue.Details = queueDetails.result,
                       error =>  this.error = <any>error);
       this.CountVisible=true;
    }

    ClearQueueMessages(queue:any)
    {
        this.httpService.httpMethodtype="Get";
        this.httpService.Url="http://localhost:64049/api/ECH/Queue/ClearQueueMessages";
        this.httpService.param=queue.Name;
        this.httpService.CallHttpService().subscribe(
                       queueDetails => queue.Details = queueDetails.result,
                       error =>  this.error = <any>error);
    }*/
    CallLink(param:string)
    {
        this.router.navigate(['/'+param]);
    }
    

}