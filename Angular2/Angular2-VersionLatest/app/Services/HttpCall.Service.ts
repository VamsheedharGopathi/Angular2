

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService, SessionStorage } from './LocalStorage'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpCallService {

  private localUrl = 'http://localhost:64049/';//'http://servermonitorapis.azurewebsites.net/';//
  constructor(private http: Http, private localStorage: LocalStorageService, private session: SessionStorage) { }
  httpMethodtype: string = "";
  result: any;
  connectToLocal: boolean = false;
  Url: string = "";
  param: any;
  @Input() Request: boolean;
  CallHttpService(): Observable<any> {

    let people$;
    if (this.httpMethodtype.toLocaleLowerCase() == "get") {
      people$ = this.getMethod();
    }
    else if (this.httpMethodtype.toLocaleLowerCase() == "post") {
      people$ = this.postMethod();
    }
    return people$;
  }

  public RequestStatus(): boolean {
    if (this.localStorage.localStorage != {}) {
      let data = this.localStorage.localStorage;
      return data["Request"];
    }
    return false;
  }
  public OpenRequest() {
    this.localStorage.localStorage = { Request: true };
  }
  public CloseRequest() {
    this.localStorage.localStorage = { Request: false };
  }

  private extractData(res: Response) {
    let body = res.json() || {};
    return body;
  }

  private getMethod() {
    let param = this.param != undefined ? '/' + this.param : '';
    let URI = (this.connectToLocal == false ? this.localUrl : '') + this.Url + param;
    return this.http.get(URI, { headers: this.getHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private postMethod() {
    let URI = (this.connectToLocal == false ? this.localUrl : '') + this.Url;
    return this.http.post(URI, this.param, this.getOptions())
      .map(this.extractData)
      .catch(this.handleError);
  }
  private getHeaders() {
    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    if (this.session["EncryptedData"] != null) {
      headers.append('Authorization', 'Basic ' + this.session["EncryptedData"]);//btoa("{'user':'vamsheedhar','password':'12345'}")
    }
    return headers;
    //return new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  private getOptions() {
    return new RequestOptions({ headers: this.getHeaders() });
  }

  private handleError(error: Response | any) {
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