import { Component, OnInit,AfterViewInit } from "@angular/core";
import { HttpCallService } from '../../Services/HttpCall.Service';
@Component({
    //moduleId:module.id,
    selector: "QueueList",
    templateUrl: "/app/Queues/Templates/QueueList.html",
})
export class QueueListComponent implements OnInit,AfterViewInit {
    queue: any;
    error: any;
    constructor(private httpService: HttpCallService) { }
    ngAfterViewInit(){
        
    }
    ngOnInit() {
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "api/ECH/Queue";
        this.httpService.param = 'GetUserQueueNames';
        this.httpService.CallHttpService().subscribe(
            queueDetails => this.parse( queueDetails),
            error => this.error = <any>error);
    }
    parse(queueDetails: any) {
        this.queue = queueDetails;
         this.httpService.CloseRequest();
    }
}