import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';

import { ReplaceSpaces } from './ReplaceSpaces';


@Component({
  templateUrl: 'template.html'
})
export class OneFourPage implements AfterViewInit {
  @ViewChild('editor') editor;

  public title: string = 'Problem 1.4 - Replace Spaces';

  solutionUrl: string = 'chapter1/1.4/ReplaceSpaces.ts';

  test1string1: string = 'Mr John Smith    ';
  answer1: string;

  test2string1: string = 'This is only a test';
  answer2: string;

  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {

    this.chapterCodeService.getCode( this.solutionUrl )
      .subscribe(
        code => this.code = code,
        error => this.code = `'Error getting contents of ${this.solutionUrl}'`);
  }

  ngAfterViewInit() {
    this.editor.getEditor().getSession().setUseWorker(false);
  }

  runTest1() {

    let replaceSpaces = new ReplaceSpaces();

    this.answer1 = replaceSpaces.replace( this.test1string1 ).toString(); 
  }

  runTest2() {

    let replaceSpaces = new ReplaceSpaces();

    this.answer2 = replaceSpaces.replace( this.test2string1 ).toString(); 
  }
}
