import {browser, by, element} from 'protractor';
import {AppConfig} from '../../../src/app/config/app.config';

export class InfoPage {
    static navigateTo(): any {
        return browser.get(AppConfig.routes.pages);
    }

    static getContent(): any {
        return element.all(by.css('#infoPage')).count();
    }


    static getHeaderTitle(): any {
        return element(by.css('h1')).getText();
    }
}

