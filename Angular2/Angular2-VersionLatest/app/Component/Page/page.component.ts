import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BodyComponent } from '../Body/body.component';
//import { Router } from '@angular/router';
import { HttpCallService } from '../../Services/HttpCall.Service'
@Component({
  // moduleId: module.id,
  selector: 'my-app',
  templateUrl: '/app/Templates/page_component.html'
})

export class PageComponent implements OnInit, OnDestroy {
  name = 'ECH';

  constructor(private httpCall: HttpCallService) {

  }
  ngOnInit() {

  }

  ngOnDestroy() {

  }
}