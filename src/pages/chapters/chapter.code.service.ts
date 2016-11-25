import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChapterCodeService {
  baseUrl: string = 'https://raw.githubusercontent.com/mattdaisley/CTCIProblems/master/src/pages/chapters/';

  constructor(private http: Http) {
    
  }

  getCode( file: string ): Promise<string> {
    return new Promise<string>( resolve => {
      this.http.get( this.baseUrl + file )
      .map(response => response.text())
      .subscribe(data => resolve(data));
    });
  }

}