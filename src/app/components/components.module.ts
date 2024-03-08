import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';

export const components = [
    HeaderComponent
];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, TranslateModule],
    exports: [...components],
})
export class ComponentsModule {}
