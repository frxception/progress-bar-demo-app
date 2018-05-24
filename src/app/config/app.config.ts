import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
    routes: {
        pages: 'pages',
        error404: '404'
    },
    endpoints: {
        progressBarAPI: 'http://pb-api.herokuapp.com/bars'
    },

    snackBarDuration: 3000,
    repositoryURL: 'https://github.com/frxception'
};
