import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
      private router: Router, 
      private translate: TranslateService,
      public spinnerService: SpinnerService
      ) {
        this.translate.addLangs(['es', 'en']);
        this.translate.setDefaultLang('es');
        translate.use('es'); 
        this.router.navigate(['/songs']);
    }
}