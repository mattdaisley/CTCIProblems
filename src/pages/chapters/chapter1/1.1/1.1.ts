import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';

import { IsUnique } from './IsUnique';


@Component({
  templateUrl: 'template.html'
})
export class OneOnePage {
  public title: string = 'Problem 1.1 - Unique Characters in String';

  test1: string = 'abcdefghijklmnop';
  answer1: string;

  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  runTest1() {

    var isUnique = new IsUnique();

    this.answer1 = isUnique.validate( this.test1 ); 

    this.chapterCodeService.getCode( 'chapter1/1.1/IsUnique.ts' )
      .then( code => this.code = code );
  }
}
