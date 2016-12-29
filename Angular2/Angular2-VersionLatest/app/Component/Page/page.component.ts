import { Component } from '@angular/core';
//import {BodyComponent} from '../Body/body.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '/app/Templates/page_component.html'
  //,directives:[BodyComponent]
})

export class PageComponent { 
  name = 'ECH';
}