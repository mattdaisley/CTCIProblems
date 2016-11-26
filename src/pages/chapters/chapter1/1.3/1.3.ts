import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';

import { IsPermutation } from './IsPermutation';


@Component({
  templateUrl: 'template.html'
})
export class OneThreePage implements AfterViewInit {
  @ViewChild('editor') editor;

  public title: string = 'Problem 1.2 - Permutation';

  solutionUrl: string = 'chapter1/1.3/IsPermutation.ts';

  test1string1: string = 'abcdefghijklmnop';
  test1string2: string = 'ponmlkjihgfedcba';
  answer1: string;

  test2string1: string = 'abbccceeefffff';
  test2string2: string = 'ooommmnnnpppoo';
  answer2: string;

  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {
    // this.chapterCodeService.getCode( 'chapter1/1.3/IsPermutation.ts' )
    //   .then( code => this.code = code );

    this.chapterCodeService.getCode( this.solutionUrl )
      .subscribe(
        code => this.code = code,
        error => this.code = `'Error getting contents of ${this.solutionUrl}'`);
  }

  ngAfterViewInit() {
    this.editor.getEditor().getSession().setUseWorker(false);
  }

  runTest1() {

    let isPermutation = new IsPermutation();

    this.answer1 = isPermutation.validate( this.test1string1, this.test1string2 ).toString(); 
  }

  runTest2() {

    let isPermutation = new IsPermutation();

    this.answer2 = isPermutation.validate( this.test2string1, this.test2string2 ).toString(); 
  }
}
