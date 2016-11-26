import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterCodeService } from '../../chapter.code.service';


@Component({
  templateUrl: 'template.html'
})
export class TemplatePage implements AfterViewInit {
  @ViewChild('editor') editor;

  public title: string = 'Problem Title - Description';

  test1: any;
  answer1: any;

  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chapterCodeService: ChapterCodeService) {
    this.chapterCodeService.getCode( 'chapter{NUM}/{PROBELM}/{SOLUTION}.ts' )
      .then( code => this.code = code );
  }

  ngAfterViewInit() {
    this.editor.getEditor().getSession().setUseWorker(false);
  }

  runTest1() {

    this.answer1 = ''; 
  }
}
