import { Component, Output, Input, OnInit, AfterViewInit } from '@angular/core'
import { HttpCallService } from '../../Services/HttpCall.Service';
@Component({
    //  moduleId:module.id,
    selector: "Queue",
    templateUrl: "/app/Queues/Templates/Queues.html",
})
export class QueuesComponent implements OnInit, AfterViewInit {
    @Input() QueueData: any;
    constructor(private httpService: HttpCallService) { }
    error: any;
    CountVisible: boolean = false;
    ngOnInit() {
    }
    ngAfterViewInit() {
        
    }
    GetQueueDetails(queue: any) {
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "ECHAutomation/api/ECH/Queue/GetQueueMessages";
        this.httpService.param = queue.Name;
        this.httpService.CallHttpService().subscribe(
            queueDetails => this.parseResult(queueDetails, queue),
            error => this.parseError(error));
        this.CountVisible = true;
    }
    ClearQueueMessages(queue: any) {
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "ECHAutomation/api/ECH/Queue/ClearQueueMessages";
        this.httpService.param = queue.Name;
        this.httpService.CallHttpService().subscribe(
            queueDetails => this.parseResult(queueDetails, queue),
            error => this.parseError(error));
        this.CountVisible = true;
    }

    parseResult(queueDetails: any, queue: any) {
        queue.Details = queueDetails.result;
        this.httpService.CloseRequest();
    }

    parseError(error: any) {
        this.error = <any>error;
        this.httpService.CloseRequest();
    }



}