import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app-translate';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('en');
  }

  translation$ = this.translate.onLangChange.pipe(
    switchMap(({ lang }) => this.translate.getTranslation(lang))
  );
}
