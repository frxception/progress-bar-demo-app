import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import {TestsModule} from './shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {APP_CONFIG, AppConfig} from './config/app.config';
import {PBApiService} from './pages/shared/pb-api.service';
import {Error404Component} from './core/error404/error-404.component';

describe('AppComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot(),
        AppRoutingModule
      ],
      declarations: [
        AppComponent, 
          HomeComponent,
        Error404Component
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        PBApiService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', (() => {
    expect(component).toBeTruthy();
  }));

  it('should change title meta tag in root path', async(() => {
    fixture.detectChanges();
    expect(component.title.getTitle()).toBe('Progress Bars Demo App');
  }));

  it('should check browser features', (() => {
    expect(component.checkBrowserFeatures()).toBeTruthy();
  }));
});