import { Component, OnInit } from "@angular/core";
import { HttpCallService } from '../../Services/HttpCall.Service';
@Component({
    // moduleId: module.id,
    selector: 'body-component',
    templateUrl: '/app/Templates/body_component.html'//,
    //providers:[HttpModule]
})

export class BodyComponent implements OnInit {
    label: string = "Outlook";
    data: number[] = [0,0,0];
    constructor(private httpService: HttpCallService) {

    }

    ngOnInit() {
        
    }

   
}