import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { IonicModule } from 'ionic-angular';

import { HomePage }      from './home/home';

import { ChaptersModule } from './chapters/chapters.module';

@NgModule({
    imports:      [ 
        FormsModule,
        HttpModule,
        IonicModule.forRoot(HomePage),
        ChaptersModule
    ],
    
    declarations: [
        HomePage
    ],
    entryComponents: [
        HomePage
    ],
    exports:      [ ],
    providers:    [ ]
})
export class PagesModule { }
