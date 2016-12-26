import {Http,Headers,Response,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpCallService {
 constructor (private http: Http) {}
 httpMethodtype:string="";
 result:any;
 Url:string="";
 param:any;
    CallHttpService(): Observable<any>{
        let people$;
          if (this.httpMethodtype.toLocaleLowerCase()=="get") {
            people$ = this.http
                          .get(`${this.Url}/${this.param}`, {headers: this.getHeaders()})
                          .map(this.extractData);
          }
          else if(this.httpMethodtype=="post"){
            people$ =  this.http
                        .post(this.Url, this.param, this.getOptions())
                        .map(this.extractData)
                        .catch(this.handleError);
          }
        return people$;
    }

    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }

    private getHeaders(){
      return new Headers({ 'Content-Type': 'application/json' });
    }

    private getOptions(){
      return new RequestOptions({ headers: this.getHeaders() });
    }

    private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}