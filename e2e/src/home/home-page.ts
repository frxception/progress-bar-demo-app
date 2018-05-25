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
    
    static getSelectedBar(): any{
        element.all(by.css('mat-select')).each(function (eachElement, index) {
            eachElement.click();                 
            browser.driver.sleep(500);
            element(by.css('mat-option')).click();
            browser.driver.sleep(500);
        });
        return element(by.css('mat-select')).getText();
    }
}

