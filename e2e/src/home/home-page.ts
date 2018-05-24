import {browser, by, element} from 'protractor';
export class HomePage {
    static navigateTo(): any {
        return browser.get('/');
    }

    static getPBarBoxes(): any {
        return element.all(by.css('#pbarGrid')).count();
    }

    static getPBarBoxesCount(): any {
        return element.all(by.className('mat-grid-tile ng-star-inserted')).count();
    }

    static getHeaderTitle(): any {
        return element(by.css('#homePage')).getText();
    }
}

