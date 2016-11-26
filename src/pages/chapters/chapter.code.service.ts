import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChapterCodeService {
  baseUrl: string = 'https://raw.githubusercontent.com/mattdaisley/CTCIProblems/master/src/pages/chapters/';

  constructor(private http: Http) {
    
  }

  getCode ( file: string ): Observable<any> {
    let random = Math.random();
    return this.http.get(this.baseUrl + file + '?rand=' + random)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.text();
  }

  private handleError( error: Response | any ) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}