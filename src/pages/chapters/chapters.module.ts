import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { IonicModule }        from 'ionic-angular';

import { AceEditorComponent } from 'ng2-ace-editor'; 


import { Chapter1Page }       from './chapter1/chapter1';
import { OneOnePage, OneThreePage, OneFivePage, OneFourPage } from './chapter1';

import { Chapter2Page }       from './chapter2/chapter2';
// import { TwoOnePage } from './chapter2';

import { Chapter3Page }       from './chapter3/chapter3';
// import { ThreeOnePage } from './chapter3';

import { ChapterCodeService } from './chapter.code.service';

@NgModule({
    imports:      [ 
        FormsModule,
        HttpModule,
        IonicModule.forRoot(Chapter1Page),
        IonicModule.forRoot(Chapter2Page),
        IonicModule.forRoot(Chapter3Page),
    ],
    
    declarations: [
        AceEditorComponent,

        Chapter1Page,
        OneOnePage,
        OneThreePage,
        OneFourPage,
        OneFivePage,

        Chapter2Page,
        // TwoOnePage,
        // TwoTwoPage,
        // TwoThreePage,
        // TwoFourPage,
        // TwoFivePage,

        Chapter3Page,
        // ThreeOnePage,
        // ThreeTwoPage,
        // ThreeThreePage,
        // ThreeFourPage,
        // ThreeFivePage,
    ],
    entryComponents: [
        OneOnePage,
        OneThreePage,
        OneFourPage,
        OneFivePage,

        // TwoOnePage,
        // TwoTwoPage,
        // TwoThreePage,
        // TwoFourPage,
        // TwoFivePage,

        // ThreeOnePage,
        // ThreeTwoPage,
        // ThreeThreePage,
        // ThreeFourPage,
        // ThreeFivePage,
    ],
    exports:      [ 
        Chapter1Page,
        Chapter2Page,
        Chapter3Page,
    ],
    providers:    [ 
        ChapterCodeService
    ]
})
export class ChaptersModule { }
