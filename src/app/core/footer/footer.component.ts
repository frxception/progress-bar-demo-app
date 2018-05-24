import {Component, OnInit, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
    currentLang: string;
    appConfig: any;
    constructor( @Inject(APP_CONFIG) appConfig: IAppConfig, 
                private translateService: TranslateService) {
                this.appConfig = appConfig;
    }

    ngOnInit() {
        this.currentLang = this.translateService.currentLang;
    }
}
