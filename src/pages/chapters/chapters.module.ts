import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { IonicModule }        from 'ionic-angular';

import { AceEditorComponent } from 'ng2-ace-editor'; 


import { Chapter1Page }       from './chapter1/chapter1';
import { OneOnePage, OneThreePage, OneFivePage, OneFourPage } from './chapter1';

import { Chapter2Page }       from './chapter2/chapter2';
// import { TwoOnePage } from './chapter2';

import { ChapterCodeService } from './chapter.code.service';

@NgModule({
    imports:      [ 
        FormsModule,
        HttpModule,
        IonicModule.forRoot(Chapter1Page),
        IonicModule.forRoot(Chapter2Page),
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
    ],
    exports:      [ 
        Chapter1Page,
        Chapter2Page
    ],
    providers:    [ 
        ChapterCodeService
    ]
})
export class ChaptersModule { }
