import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [SongsComponent],
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [TranslateModule]
})
export class SongsModule { }