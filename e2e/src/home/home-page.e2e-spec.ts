import {AppConfig} from '../../../src/app/config/app.config';
import {HomePage} from './home-page';

describe('Home page', function () {
  let page;

  beforeEach(() => {
    page = new HomePage();
  });

    it('should contains content in home page title', () => {
        HomePage.navigateTo();
        expect<any>(HomePage.getHeaderTitle()).toEqual('Progress Bars Demo');
    });

    it('should contains progress bar data endpoint result', () => {
        HomePage.navigateTo();
        expect<any>(HomePage.getPBarBoxes()).toBeTruthy();
    });

    it('should contains progress bar boxes grid', () => {
        HomePage.navigateTo();
        expect<any>(HomePage.getPBarBoxesCount()).toBeGreaterThanOrEqual(2);
    });

    it('should contains progress bar controls click select bar', () => {
        HomePage.navigateTo();
        expect<any>(HomePage.getSelectedBar()).toEqual('Bar 1');
    });

});
