import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InfoComponent} from './info/info.component';
import {PagesComponent} from './pages.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', component: InfoComponent}
      // , {path: ':id', component: PagesDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PagesRoutingModule {
}
