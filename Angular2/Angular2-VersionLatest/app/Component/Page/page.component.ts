import { Component,OnInit } from '@angular/core';
import { BodyComponent } from '../Body/body.component';
//import { Router } from '@angular/router';
//import { AuthenticateService } from '../../Services/Authenticate.Service'
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '/app/Templates/page_component.html'
})

export class PageComponent implements OnInit {
  name = 'ECH';
  constructor() {

  }
  ngOnInit() {
  }
}