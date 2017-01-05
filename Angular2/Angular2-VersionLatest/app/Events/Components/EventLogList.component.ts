import {Component,Input,OnInit} from '@angular/core';
import {HttpCallService} from '../../Services/HttpCall.Service'
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/do';
@Component({
 moduleId:module.id,
 selector:'eventLogList',
 templateUrl:'../Templates/EventsLogList.html'
})
export class EventLogListComponent implements OnInit{
    eventLogName:string;
    logList:any;
    error:any;

  constructor(private httpService:HttpCallService,private route:ActivatedRoute,private router:Router){ }

  ngOnInit(){
    this.route
        .params
        .map(params => params['logName'])
        .do(logName => this.eventLogName = logName)
        .subscribe(id => this.getEventLogs());
  }
  
  private getEventLogs() {
    this.httpService.httpMethodtype = "Get";
        this.httpService.Url = "http://localhost:64049/api/ECH/Event/GetLogsByLogName";
        this.httpService.param = this.eventLogName;
        this.httpService.CallHttpService().subscribe(
            res => this.logList = res,
            error => this.error = <any>error);
  }
}