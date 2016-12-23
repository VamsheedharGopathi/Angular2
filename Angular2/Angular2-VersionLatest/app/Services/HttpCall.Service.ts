import { HttpModule,Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpCallService {
 constructor (private http: Http) {}
 httpMethodtype:string;
 Url:string;
 param:any;
    CallHttpService(): Observable<any>{
       let people$;
       let options = new RequestOptions({ headers: headers });
      if (this.httpMethodtype.toLocaleLowerCase()=="get") {
        people$ = this.http
                      .get(`${this.Url}/${this.param}`, {headers: this.getHeaders()})
                      .map(mapPersons);
       return people$;
      }
      else{
         people$ =  
                      .get(`${this.Url}/${this.param}`, {headers: this.getHeaders()})
                      .map(mapPersons);
       return people$;
      }

   
    }
}