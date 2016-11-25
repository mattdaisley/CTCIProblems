import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { OneOnePage } from './1.1/1.1'
import { OneFivePage } from './1.5/1.5'


@Component({
  selector: 'chapter1-page',
  templateUrl: 'chapter1.html'
})
export class Chapter1Page {

  chapterTitle: String = 'Chapter 1 - Arrays and Strings';
  problems: Array<{title: string, component: Component }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    this.problems = [
        { title: 'Problem 1.1 - Unique Characters in String', component: OneOnePage },
        { title: 'Problem 1.5 - Compress String' , component: OneFivePage }
    ];
    
  }

  problemSelected(event, prob) {
    this.navCtrl.push(prob.component);
  }

}
