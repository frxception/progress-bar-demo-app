import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http); // note: this is causing issues in build prod
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
