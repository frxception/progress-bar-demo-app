import {async, TestBed} from '@angular/core/testing';
import {PBApiService} from './pb-api.service';
import {APP_BASE_HREF} from '@angular/common';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {TestsModule} from '../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {HttpErrorResponse} from '@angular/common/http';

describe('PBApiService', () => {
  let pbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        PBApiService
      ]
    });

    pbApiService = TestBed.get(PBApiService);
  });

  it('should contains pb data', async(() => {
    pbApiService.getPBEndpoints().subscribe((data: any) => {
        const res = (data) ? true : false;
        expect(res).toBeTruthy();
    });
  }));

 
});
