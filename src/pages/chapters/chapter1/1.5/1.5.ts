import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';

import { Compressor } from './compressor';


@Component({
  templateUrl: '1.5.html'
})
export class OneFivePage {
  public title: string = 'Problem 1.5 - Compress String';

  test1: string = 'aabcccccaaa';
  answer1: string;

  code: string;
  options: { useWorker: false };

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  runTest1() {

    var compressor = new Compressor( );
    this.answer1 = compressor.compress( this.test1 ); 

    this.chapterCodeService.getCode( 'chapter1/1.5/compressor.ts' )
      .then( code => this.code = code );
  }
}
