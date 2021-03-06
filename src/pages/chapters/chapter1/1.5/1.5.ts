import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';

import { Compressor } from './Compressor';


@Component({
  templateUrl: 'template.html'
})
export class OneFivePage implements AfterViewInit {
  @ViewChild('editor') editor;

  public title: string = 'Problem 1.5 - Compress String';

  solutionUrl: string = 'chapter1/1.5/Compressor.ts';

  test1: string = 'aabcccccaaa';
  answer1: string;

  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {
    // this.chapterCodeService.getCode( 'chapter1/1.5/Compressor.ts' )
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

    var compressor = new Compressor( );
    this.answer1 = compressor.compress( this.test1 ); 
  }
}
