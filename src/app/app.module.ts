import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule }    from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { Chapter1Page } from '../pages/chapters';
import { OneOnePage, OneThreePage, OneFivePage, OneFourPage } from '../pages/chapters';

import { ChapterCodeService } from '../pages/chapters/chapter.code.service';

import { AceEditorDirective, AceEditorComponent } from 'ng2-ace-editor'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    AceEditorDirective,
    AceEditorComponent,

    Chapter1Page,
    OneOnePage,
    OneThreePage,
    OneFourPage,
    OneFivePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    Chapter1Page,
    OneOnePage,
    OneThreePage,
    OneFourPage,
    OneFivePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChapterCodeService
  ]
})
export class AppModule {}
