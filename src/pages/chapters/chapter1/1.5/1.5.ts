import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';


@Component({
  templateUrl: '1.5.html'
})
export class OneFivePage {
  public title: String = 'Problem 1.5 - Compress String';

  test1: String = 'aabcccccaaa';
  answer1: String;

  code: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  runTest1() {

    this.answer1 = this.compress( this.test1 ); 

    this.chapterCodeService.getCode( 'chapter1/1.5/1.5.ts' ).then( code => this.code = code );;
  }

  compress( input: String ): String {
    return input;
  }
}
