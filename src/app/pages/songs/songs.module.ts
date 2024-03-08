import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongsRoutingModule } from './songs-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [SongsComponent],
    imports: [
        ComponentsModule,
        SongsRoutingModule,
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: []
})
export class SongsModule { }