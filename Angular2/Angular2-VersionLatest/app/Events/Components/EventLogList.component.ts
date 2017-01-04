import {Component,Input} from '@angular/core';
import {HttpCallService} from '../../Services/HttpCall.Service'
@Component({
 moduleId:module.id,
 selector:'eventLogList',
 templateUrl:'../Templates/EventsLogList.html'
})
export class EventLogListComponent{
  constructor(private httpService:HttpCallService){
      
  }
}