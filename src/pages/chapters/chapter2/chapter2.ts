import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

// import { TwoOnePage } from './2.1/2.1';
// import { TwoTwoPage } from './2.2/2.2';
// import { TwoThreePage } from './2.3/2.3';
// import { TwoFourPage } from './2.4/2.4';
// import { TwoFivePage } from './2.5/2.5';


@Component({
  selector: 'chapter2-page',
  templateUrl: 'chapter2.html'
})
export class Chapter2Page {

  chapterTitle: String = 'Chapter 2 - Title';
  problems: Array<{title: string, component: Component }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    this.problems = [
        // { title: 'Problem 2.1 - Title', component: TwoOnePage },
        // { title: 'Problem 2.2 - Title', component: TwoTwoPage },
        // { title: 'Problem 2.3 - Title', component: TwoThreePage },
        // { title: 'Problem 2.4 - Title', component: TwoFourPage },
        // { title: 'Problem 2.5 - Title' , component: TwoFivePage }
    ];
    
  }

  problemSelected(event, prob) {
    this.navCtrl.push(prob.component);
  }

}
