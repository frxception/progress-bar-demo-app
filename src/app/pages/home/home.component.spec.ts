import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HomeComponent} from './home.component';
import {PBApiService} from '../shared/pb-api.service';
import {TestsModule} from '../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RoundProgressEase} from 'angular-svg-round-progressbar';
describe('HomeComponent', () => {
    let fixture;
    let component;
    let pbApiService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TestsModule,
                TranslateModule.forRoot()
            ],
            declarations: [
                HomeComponent
            ],
            providers: [
                {provide: APP_CONFIG, useValue: AppConfig},
                {provide: APP_BASE_HREF, useValue: '/'},
                PBApiService,
                RoundProgressEase
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        component = fixture.debugElement.componentInstance;
        pbApiService = TestBed.get(PBApiService);
    }));

    it('should create home component', (() => {
        expect(component).toBeTruthy();
    }));

    it('should init home component pbdata', fakeAsync(() => {
        const pbdata = component.pbData;
        fixture.detectChanges();
        spyOn(pbApiService, 'getPBEndpoints').and.returnValue(Promise.resolve(true));
        tick();
        fixture.detectChanges();
        expect(pbdata).toBeTruthy();
        expect(pbdata.buttons.length).toBeGreaterThanOrEqual(4);
        expect(pbdata.buttons.length).toBeGreaterThanOrEqual(2);


    }));



    // it('should like a hero', async(() => {
    //   localStorage.setItem('votes', String(AppConfig.votesLimit - 1));
    //   component.like({id: 1}).then((result) => {
    //     expect(result).toBe(true);
    //   });
    // }));

    // it('should not like a hero', async(() => {
    //   localStorage.setItem('votes', String(AppConfig.votesLimit));
    //   component.like({id: 1}).then(() => {
    //   }, (error) => {
    //     expect(error).toBe('maximum votes');
    //   });
    //   expect(PBApiService.checkIfUserCanVote()).toBe(false);
    // }));


});
