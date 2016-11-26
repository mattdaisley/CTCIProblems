import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

// import { ThreeOnePage } from './3.1/3.1';
// import { ThreeTwoPage } from './3.2/3.2';
// import { ThreeThreePage } from './3.3/3.3';
// import { ThreeFourPage } from './3.4/3.4';
// import { ThreeFivePage } from './3.5/3.5';


@Component({
  selector: 'chapter3-page',
  templateUrl: 'chapter3.html'
})
export class Chapter3Page {

  chapterTitle: String = 'Chapter 3 - Title';
  problems: Array<{title: string, component: Component }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    this.problems = [
        // { title: 'Problem 3.1 - Title', component: ThreeOnePage },
        // { title: 'Problem 3.2 - Title', component: ThreeTwoPage },
        // { title: 'Problem 3.3 - Title', component: ThreeThreePage },
        // { title: 'Problem 3.4 - Title', component: ThreeFourPage },
        // { title: 'Problem 3.5 - Title' , component: ThreeFivePage }
    ];
    
  }

  problemSelected(event, prob) {
    this.navCtrl.push(prob.component);
  }

}
