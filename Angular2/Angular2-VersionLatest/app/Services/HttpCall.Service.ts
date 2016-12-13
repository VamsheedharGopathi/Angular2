import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class HttpCallService {
 constructor (private http: Http) {}
 httpMethodtype:string;
 Url:string;
 param:any;
    CallHttpService()
    {

    } 
}