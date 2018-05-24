import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {InfoComponent} from './info/info.component';
import {PBApiService} from './shared/pb-api.service';
import {PagesComponent} from './pages.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PagesRoutingModule,
        ReactiveFormsModule

    ],
    declarations: [
        PagesComponent,
        InfoComponent
    ],
    providers: [
        PBApiService
    ]
})

export class PagesModule {
}
