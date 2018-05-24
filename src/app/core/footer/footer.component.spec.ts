import {async, TestBed} from '@angular/core/testing';
import {FooterComponent} from './footer.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
// import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {TestsModule} from '../../shared/modules/tests.module';

describe('FooterComponent', () => {
    let fixture;
    let component;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TestsModule,
                TranslateModule.forRoot()
            ],
            declarations: [
                FooterComponent
            ],
            providers: [
                {provide: APP_CONFIG, useValue: AppConfig}
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
        component = fixture.debugElement.componentInstance;
    }));

    it('should create footer component', (() => {
        expect(component).toBeTruthy();
    }));
});
