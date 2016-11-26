import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { IonicModule }        from 'ionic-angular';

import { AceEditorComponent } from 'ng2-ace-editor'; 


import { Chapter1Page }       from './chapter1/chapter1';
import { OneOnePage, OneThreePage, OneFivePage, OneFourPage } from './chapter1';

import { ChapterCodeService } from './chapter.code.service';

@NgModule({
    imports:      [ 
        FormsModule,
        HttpModule,
        IonicModule.forRoot(Chapter1Page),
    ],
    
    declarations: [
        AceEditorComponent,

        Chapter1Page,

        OneOnePage,
        OneThreePage,
        OneFourPage,
        OneFivePage
    ],
    entryComponents: [
        OneOnePage,
        OneThreePage,
        OneFourPage,
        OneFivePage
    ],
    exports:      [ 
        Chapter1Page
    ],
    providers:    [ 
        ChapterCodeService
    ]
})
export class ChaptersModule { }
