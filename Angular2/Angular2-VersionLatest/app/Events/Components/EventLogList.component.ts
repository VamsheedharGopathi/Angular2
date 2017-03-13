import { Component, Input, OnInit } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service'
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/do';
@Component({
 // moduleId: module.id,
  selector: 'eventLogList',
  templateUrl: '/app/Events/Templates/EventsLogList.html'
})
export class EventLogListComponent implements OnInit {
  eventLogName: string;
  logList: any;
  NoDataMessage: boolean = false;
  error: any;

  constructor(private httpService: HttpCallService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route
      .params
      .map(params => params['logName'])
      .do(logName => this.eventLogName = logName)
      .subscribe(id => this.getEventLogs());
  }

  private getEventLogs() {
    this.httpService.OpenRequest();
    this.httpService.httpMethodtype = "Get";
    this.httpService.Url = "ECHAutomation/api/ECH/Event/GetLogsByLogName";
    this.httpService.param = this.eventLogName;
    this.httpService.CallHttpService().subscribe(
      res => this.mapData(res),
      error =>()=>{ this.httpService.CloseRequest(); } );
  }

  private mapData(result: any) {
    if (typeof(result) == "object") {
      this.logList = result;
      this.NoDataMessage = (result.length == 0)
    }
    else{
      this.NoDataMessage =true;
    }
     this.httpService.CloseRequest();
  }
}