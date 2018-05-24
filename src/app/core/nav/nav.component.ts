import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';
import {ProgressBarService} from '../shared/progress-bar.service';
import {environment} from '../../../environments/environment'


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

    appConfig: any;
    menuItems: any[];
    progressBarMode: string;
    currentLang: string;
    environment: string;


    constructor(@Inject(APP_CONFIG) appConfig: IAppConfig,
                private progressBarService: ProgressBarService,
                private translateService: TranslateService) {
        this.appConfig = appConfig;
    }

    ngOnInit() {
        this.currentLang = this.translateService.currentLang;
        this.loadMenus();
        this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
            this.progressBarMode = mode;
        });
        this.environment = environment.production ? 'Production V'+environment.version : 'Development V'+environment.version;
    }

    changeLanguage(language: string): void {
        this.translateService.use(language).subscribe(() => {
            this.loadMenus();
        });
    }

    private loadMenus(): void {
        this.translateService.get(['home', 'info'], {}).subscribe((texts: any) => {
            this.menuItems = [
                {link: '/', name: texts['home']},
                {link: '/' + AppConfig.routes.pages, name: texts['info']}
            ];
        });
    }
}
