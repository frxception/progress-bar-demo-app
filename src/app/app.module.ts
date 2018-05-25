import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_CONFIG, AppConfig} from './config/app.config';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/modules/shared.module';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.translate.factory';
import {HomeComponent} from './pages/home/home.component';
import {ProgressBarService} from './core/shared/progress-bar.service';
import {ProgressInterceptor} from './shared/interceptors/progress.interceptor';
import {TimingInterceptor} from './shared/interceptors/timing.interceptor';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {RoundProgressModule,
    // RoundProgressConfig,
    ROUND_PROGRESS_DEFAULTS
} from 'angular-svg-round-progressbar';


@NgModule({
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('./ngsw-worker.js', {enabled: environment.production}), // note: we use './' for prod deployment with sub url directory location
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        SharedModule.forRoot(),
        CoreModule,
        AppRoutingModule,
        RoundProgressModule

    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true, deps: [ProgressBarService]},
        {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
        {
            provide: ROUND_PROGRESS_DEFAULTS,
            useValue: {
                color: '#f00',
                background: '#0f0'
            }
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
