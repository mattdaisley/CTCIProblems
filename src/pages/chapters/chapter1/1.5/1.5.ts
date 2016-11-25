import { Component } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: '1.5.html'
})
export class OneFivePage {
  public title: String = 'Problem 1.5 - Compress String';

  test1: String = 'aabcccccaaa';
  answer1: String;

  code: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  runTest1() {
    this.code = this.compress.toString();

    this.answer1 = this.compress( this.test1 ); 

    this.getHeroes();
  }

  compress( input: String ): String {
    return input;
  }

  getHeroes(): any {
    return this.http.get('../src/pages/chapters/chapter1/1.5/1.5.ts')
               .toPromise()
               .then(response => console.log(response));
  }
}
