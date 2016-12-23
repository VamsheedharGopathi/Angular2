import {Component} from "@angular/core";
import { HttpModule,Http,Headers,Response,RequestOptions,ConnectionBackend} from '@angular/http';
import {HttpCallService} from  "../../Services/HttpCall.Service";


@Component({
    moduleId:module.id,
    selector:"divTable-Component",
    templateUrl:"/app/Templates/divTable_Component.html",
    providers:[Http,HttpCallService]
})

export class DivTableComponent{

    constructor(private httpService:HttpCallService)
    {
       
    }

    testService()
    {
       this.httpService.CallHttpService();
    }

}