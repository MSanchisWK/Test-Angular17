import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

export const components = [
    CardComponent,
    HeaderComponent
];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, TranslateModule],
    exports: [...components],
})
export class ComponentsModule {}
