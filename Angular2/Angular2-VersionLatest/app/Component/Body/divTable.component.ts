import {Component} from "@angular/core";
import {HttpCallService} from  "../../Services/HttpCall.Service";
@Component({
    moduleId:module.id,
    selector:"divTable-Component",
    templateUrl:"/app/Templates/divTable_Component.html",
    providers:[HttpCallService]
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