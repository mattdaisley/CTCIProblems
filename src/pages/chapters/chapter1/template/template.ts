import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';


@Component({
  templateUrl: 'template.html'
})
export class TemplatePage {
  public title: string = 'Problem Title - Description';

  test1: any;
  answer1: any;

  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  runTest1() {

    this.answer1 = ''; 

    this.chapterCodeService.getCode( 'chapter{NUM}/{PROBELM}/{SOLUTION}.ts' )
      .then( code => this.code = code );
  }
}
