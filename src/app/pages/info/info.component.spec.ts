import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {InfoComponent} from './info.component';
import {PagesModule} from '../pages.module';
import {TestsModule} from '../../shared/modules/tests.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

describe('InfoComponent', () => {
    let fixture;
    let component;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TestsModule,
                TranslateModule.forRoot()

            ],
            declarations: [
                InfoComponent
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue: '/'}
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]

        }).compileComponents();

        fixture = TestBed.createComponent(InfoComponent);
        fixture.detectChanges();
        component = fixture.debugElement.componentInstance;
    }));

    it('should create info component', (() => {
        expect(component).toBeTruthy();
    }));


});
