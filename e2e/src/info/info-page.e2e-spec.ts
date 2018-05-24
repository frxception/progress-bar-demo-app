import {InfoPage} from './info-page';
import {browser, by, element} from 'protractor';


describe('Info page', function () {
    let page;

    beforeEach(() => {
        page = new InfoPage();
    });

    it('should contains content in info page', () => {
        InfoPage.navigateTo();
        expect<any>(InfoPage.getContent()).toBeTruthy();
    });

    it('should contains content in info page title', () => {
        InfoPage.navigateTo();
        expect<any>(InfoPage.getHeaderTitle()).toEqual('App Information');
    });
    
});
