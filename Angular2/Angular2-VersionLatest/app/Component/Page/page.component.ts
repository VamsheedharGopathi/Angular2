import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BodyComponent } from '../Body/body.component';
//import { Router } from '@angular/router';
import { HttpCallService } from '../../Services/HttpCall.Service'
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '/app/Templates/page_component.html'
})

export class PageComponent implements OnInit, OnDestroy {
  name = 'ECH';
  Timer: any;

  isRequesting: boolean;
  constructor(private httpCall: HttpCallService) {
    this.timerRequest();
  }
  ngOnInit() {

  }
  timerRequest() {
    //this.Timer = setTimeout(function (component) {
      //component.isRequesting = component.httpCall.Request;
      //component.name='hello'+1;
   // }, 1000,this);
  }
  ngOnDestroy() {
    //clearTimeout(this.Timer);
    this.isRequesting = false;
  }
}