import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'template.html'
})
export class TemplatePage {
  public title: String = 'Problem template';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    
  }
}
