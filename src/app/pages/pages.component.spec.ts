import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesModule} from './pages.module';
import {TestsModule} from '../shared/modules/tests.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PagesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        PagesModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create pages component',(() => {
    const fixture = TestBed.createComponent(PagesComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
