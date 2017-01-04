import {Component,OnInit} from '@angular/core';
import {HttpCallService} from '../../Services/HttpCall.Service';

@Component({
moduleId:module.id,
selector:'EventsLog',
templateUrl:'app/Events/Templates/EventsLog.html'
})

export class EventsLogComponent implements OnInit{
    eventLog:any;
    error:any;
 constructor(private httpService:HttpCallService){}
 ngOnInit(){
     this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://localhost:64049/api/ECH/Event";
        this.httpService.param = 'GetEventLogNames';
        this.httpService.CallHttpService().subscribe(
            res => this.eventLog = res,
            error => this.error = <any>error);
        
 }

}