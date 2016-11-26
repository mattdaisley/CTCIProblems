import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';

import { IsUnique } from './IsUnique';


@Component({
  templateUrl: 'template.html'
})
export class OneOnePage implements AfterViewInit {
  @ViewChild('editor') editor;

  public title: string = 'Problem 1.1 - Unique Characters in String';

  test1: string = 'abcdefmnopghijkl.-3410$~';
  answer1: string;

  test2: string = 'aaabbbecadflksdk';
  answer2: string;

  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {
    this.chapterCodeService.getCode( 'chapter1/1.1/IsUnique.ts' )
      .then( code => this.code = code );
  }

  ngAfterViewInit() {
    this.editor.getEditor().getSession().setUseWorker(false);
  }

  runTest1() {

    var isUnique = new IsUnique();

    this.answer1 = isUnique.validate( this.test1 ).toString(); 
  }

  runTest2() {

    var isUnique = new IsUnique();

    this.answer2 = isUnique.validate( this.test2 ).toString(); 
  }
}
