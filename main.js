(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _core_error404_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/error404/error-404.component */ "./src/app/core/error404/error-404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.pages, loadChildren: './pages/pages.module#PagesModule' },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.error404, component: _core_error404_error_404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"] },
    { path: '**', redirectTo: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.error404 }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-nav></app-nav>\n    <router-outlet *ngIf=\"isOnline;else isOffline\"></router-outlet>\n    <ng-template #isOffline>\n        <div>\n            <p class=\"offline-error\">{{'offlineMessage' | translate}}&nbsp;&nbsp;&nbsp;<span>:&nbsp;)</span></p>\n        </div>\n    </ng-template>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(translateService, title, meta, snackBar, router) {
        this.translateService = translateService;
        this.title = title;
        this.meta = meta;
        this.snackBar = snackBar;
        this.router = router;
        this.isOnline = navigator.onLine;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
        this.title.setTitle('Progress Bars Demo App');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                switch (event.urlAfterRedirects) {
                    case '/':
                        _this.meta.updateTag({
                            name: 'description',
                            content: 'Progress Bars Demo using Angular6 and Angular Material Design'
                        });
                        break;
                    case '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].routes.pages:
                        _this.title.setTitle('Heroes list');
                        _this.meta.updateTag({
                            name: 'description',
                            content: 'List of super-heroes'
                        });
                        break;
                }
            }
        });
        this.checkBrowserFeatures();
    };
    AppComponent.prototype.checkBrowserFeatures = function () {
        var _this = this;
        var supported = true;
        for (var feature in Modernizr) {
            if (Modernizr.hasOwnProperty(feature) &&
                typeof Modernizr[feature] === 'boolean' && Modernizr[feature] === false) {
                supported = false;
                break;
            }
        }
        if (!supported) {
            this.translateService.get(['updateBrowser']).subscribe(function (texts) {
                _this.snackBar.open(texts['updateBrowser'], 'OK');
            });
        }
        return supported;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _app_translate_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.translate.factory */ "./src/app/app.translate.factory.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _core_shared_progress_bar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/shared/progress-bar.service */ "./src/app/core/shared/progress-bar.service.ts");
/* harmony import */ var _shared_interceptors_progress_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/interceptors/progress.interceptor */ "./src/app/shared/interceptors/progress.interceptor.ts");
/* harmony import */ var _shared_interceptors_timing_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/interceptors/timing.interceptor */ "./src/app/shared/interceptors/timing.interceptor.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: _app_translate_factory__WEBPACK_IMPORTED_MODULE_11__["HttpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                }),
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_18__["RoundProgressModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
            ],
            providers: [
                { provide: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"], useValue: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_progress_interceptor__WEBPACK_IMPORTED_MODULE_14__["ProgressInterceptor"], multi: true, deps: [_core_shared_progress_bar_service__WEBPACK_IMPORTED_MODULE_13__["ProgressBarService"]] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_timing_interceptor__WEBPACK_IMPORTED_MODULE_15__["TimingInterceptor"], multi: true },
                {
                    provide: angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_18__["ROUND_PROGRESS_DEFAULTS"],
                    useValue: {
                        color: '#f00',
                        background: '#0f0'
                    }
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.translate.factory.ts":
/*!******************************************!*\
  !*** ./src/app/app.translate.factory.ts ***!
  \******************************************/
/*! exports provided: HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");

function HttpLoaderFactory(http) {
    // return new TranslateHttpLoader(http); // note: this is causing issues in build prod
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/config/app.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app.config.ts ***!
  \**************************************/
/*! exports provided: APP_CONFIG, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('app.config');
var AppConfig = {
    routes: {
        pages: 'pages',
        error404: '404'
    },
    endpoints: {
        progressBarAPI: 'https://pb-api.herokuapp.com/bars'
    },
    snackBarDuration: 3000,
    repositoryURL: 'https://github.com/frxception'
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _shared_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/logger.service */ "./src/app/core/shared/logger.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/core/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error404_error_404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error404/error-404.component */ "./src/app/core/error404/error-404.component.ts");
/* harmony import */ var _shared_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/progress-bar.service */ "./src/app/core/shared/progress-bar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_3__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            exports: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            declarations: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _error404_error_404_component__WEBPACK_IMPORTED_MODULE_9__["Error404Component"]
            ],
            providers: [
                _shared_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"],
                _shared_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__["ProgressBarService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/error404/error-404.component.html":
/*!********************************************************!*\
  !*** ./src/app/core/error404/error-404.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header__title\">{{'error404' | translate}}</h1>\n<p class=\"explanation\">{{'mayTheForce' | translate}}</p>\n<img src=\"assets/images/404.gif\">"

/***/ }),

/***/ "./src/app/core/error404/error-404.component.scss":
/*!********************************************************!*\
  !*** ./src/app/core/error404/error-404.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n.explanation {\n  margin: 1rem 0;\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: 300; }\n"

/***/ }),

/***/ "./src/app/core/error404/error-404.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/error404/error-404.component.ts ***!
  \******************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-404',
            template: __webpack_require__(/*! ./error-404.component.html */ "./src/app/core/error404/error-404.component.html"),
            styles: [__webpack_require__(/*! ./error-404.component.scss */ "./src/app/core/error404/error-404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer>\n    <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\"\n         class.xs=\"footer-xs\">\n        <div fxFlex=\"43\">\n            <span>{{ 'progressBarsDemo' | translate }} 2018 </span>\n        </div>\n       \n        <div fxFlex class=\"text--right\" class.xs=\"footer-xs\">\n            <a href=\"{{appConfig.repositoryURL}}\" target=\"_blank\">\n                <img src=\"assets/images/github-circle-white-transparent.svg\">\n            </a>\n        </div>\n    </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 0.5rem 1rem;\n  color: #ffffff;\n  background: #bf463f;\n  margin-top: 2rem;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 100%; }\n  footer img {\n    width: 5%; }\n  .footer-xs {\n  text-align: center;\n  padding-top: 1rem; }\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app.config */ "./src/app/config/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(appConfig, translateService) {
        this.translateService = translateService;
        this.appConfig = appConfig;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.currentLang = this.translateService.currentLang;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/nav/nav.component.html":
/*!*********************************************!*\
  !*** ./src/app/core/nav/nav.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav>\n        <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n            <div fxFlex=\"60\">\n                <a mat-raised-button *ngFor=\"let item of menuItems\" routerLink=\"{{item.link}}\">\n                    {{item.name | uppercase}}\n                </a>\n                <span class=\"envBuild\"> {{environment}}</span>\n            </div>\n            <div fxFlex class=\"text--right\">\n                <button class=\"language\" mat-icon-button [matMenuTriggerFor]=\"matmenu\" >{{currentLang | translate}} \n                    <mat-icon>public</mat-icon>\n                </button>\n                <mat-menu #matmenu=\"matMenu\">\n                    <button mat-menu-item (click)=\"changeLanguage('zh')\">\n                        <span>\n                            {{'ch' | translate}}\n                        </span>\n                    </button>\n                    <button mat-menu-item (click)=\"changeLanguage('en')\">\n                        <span>\n                            {{'en' | translate}}\n                        </span>\n                    </button>\n                    \n                </mat-menu>\n                \n            </div>\n        </div>\n    </nav>\n    <section class=\"progress-bar\">\n        <mat-progress-bar [color]=\"'primary'\" [mode]=\"progressBarMode\">\n        </mat-progress-bar>\n    </section>\n</header>\n"

/***/ }),

/***/ "./src/app/core/nav/nav.component.scss":
/*!*********************************************!*\
  !*** ./src/app/core/nav/nav.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host(app-nav) {\n  padding-top: 0;\n  padding-bottom: 6.5rem;\n  display: -ms-grid;\n  display: grid; }\n  :host(app-nav) header {\n    position: fixed;\n    z-index: 999;\n    width: 100%; }\n  :host(app-nav) header nav {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -ms-flex-align: center;\n          align-items: center;\n      padding: 0.5rem 1rem;\n      color: #ffffff;\n      height: 4rem;\n      background: #bf463f; }\n  :host(app-nav) header nav .mat-raised-button {\n        color: #bf463f;\n        margin-right: 0.5rem; }\n  :host(app-nav) header nav .progress-bar {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        -ms-flex-align: center;\n            align-items: center;\n        height: 0.3125rem; }\n  :host(app-nav) header nav .icon__image {\n        width: 1.25rem;\n        height: 1.25rem; }\n  :host(app-nav) header nav img {\n        vertical-align: middle; }\n  :host(app-nav) header nav #today {\n        font-size: 0.7rem; }\n  .envBuild {\n  font-size: 11px;\n  padding-right: 15px;\n  /* margin-top: 18px; */\n  position: relative;\n  top: 11px;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  color: #ffffff57;\n  word-wrap: normal; }\n  .language {\n  margin-right: 60px; }\n  @media (max-width: 807px) {\n  #today {\n    width: 50%; } }\n  @media (max-width: 680px) {\n  :host(app-nav) {\n    padding-top: 0;\n    padding-bottom: 1rem; }\n    :host(app-nav) header {\n      position: relative; }\n      :host(app-nav) header nav {\n        height: 7rem;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 1rem 2rem 0; }\n        :host(app-nav) header nav > div {\n          margin-top: 1rem; }\n        :host(app-nav) header nav #today {\n          margin-top: 1rem; } }\n  @media (max-width: 425px) {\n  :host(app-nav) {\n    padding-bottom: 0; }\n    :host(app-nav) header nav app-search-bar {\n      width: 75%; } }\n"

/***/ }),

/***/ "./src/app/core/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _shared_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/progress-bar.service */ "./src/app/core/shared/progress-bar.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NavComponent = /** @class */ (function () {
    function NavComponent(appConfig, progressBarService, translateService) {
        this.progressBarService = progressBarService;
        this.translateService = translateService;
        this.appConfig = appConfig;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentLang = this.translateService.currentLang;
        this.loadMenus();
        this.progressBarService.updateProgressBar$.subscribe(function (mode) {
            _this.progressBarMode = mode;
        });
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production ? 'Production V' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version : 'Development V' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version;
    };
    NavComponent.prototype.changeLanguage = function (language) {
        var _this = this;
        this.translateService.use(language).subscribe(function () {
            _this.loadMenus();
        });
    };
    NavComponent.prototype.loadMenus = function () {
        var _this = this;
        this.translateService.get(['home', 'info'], {}).subscribe(function (texts) {
            _this.menuItems = [
                { link: '/', name: texts['home'] },
                { link: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.pages, name: texts['info'] }
            ];
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/core/nav/nav.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _shared_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["ProgressBarService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/logger.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/shared/logger.service.ts ***!
  \***********************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.log = function (msg) {
        console.log(msg);
    };
    LoggerService.error = function (msg, obj) {
        if (obj === void 0) { obj = {}; }
        console.error(msg, obj);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/shared/progress-bar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/shared/progress-bar.service.ts ***!
  \*****************************************************/
/*! exports provided: ProgressBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarService", function() { return ProgressBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarService = /** @class */ (function () {
    function ProgressBarService() {
        this.requestsRunning = 0;
        this.updateProgressBar$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProgressBarService.prototype.list = function () {
        return this.requestsRunning;
    };
    ProgressBarService.prototype.increase = function () {
        this.requestsRunning++;
        if (this.requestsRunning === 1) {
            this.updateProgressBar$.emit('query');
        }
    };
    ProgressBarService.prototype.decrease = function () {
        if (this.requestsRunning > 0) {
            this.requestsRunning--;
            if (this.requestsRunning === 0) {
                this.updateProgressBar$.emit('none');
            }
        }
    };
    ProgressBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProgressBarService);
    return ProgressBarService;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n    <div fxFlex=\"10\" fxFlex.gt-sm=\"20\"></div>\n    <div fxFlex=\"90\" fxFlex.gt-sm=\"80\">\n        <h1 class=\"header__title\" id=\"homePage\">{{'homeHeader' | translate}}</h1>\n\n        <div class=\"clear flex-spacer\"></div>\n\n        <div class=\"content-bar\">\n            \n\n            <mat-card-header>\n                <mat-progress-spinner class=\"mat-progress-spinner\" *ngIf=\"!pbData\"\n                                      class=\"progress__spinner\"\n                                      [color]=\"'warn'\"\n                                      [mode]=\"'indeterminate'\">    \n                                    \n                </mat-progress-spinner>\n            </mat-card-header>\n\n\n            \n                <div *ngIf=\"pbData\" >\n\n\n                    <mat-grid-list cols=\"2\" gutterSize=\"15px\" >\n                        <mat-grid-tile id=\"pbarGrid\" *ngFor=\"let tile of pbBars.tiles\"\n                                       [colspan] =\"tile.cols\"\n                                       [rowspan] = \"tile.rows\"\n                                       [style.background]=\"(selectedBar == tile.idx) ? selectedBarBgcolor : tile.bgcolor\">\n\n                            <div class=\"current\" [ngStyle]=\"getOverlayStyle()\">{{ getBarPercentage(tile.dynamicValue.realCurrent, max) }}%</div>\n                            <div class=\"bar-title\" [ngStyle]=\"getBarTitleStyle()\">{{ 'bar' | translate }} {{\" \" +tile.text}}</div>\n\n                            <round-progress\n                                        [current]=\"tile.dynamicValue.current\"\n                                        [max]=\"max\"\n                                        [stroke]=\"stroke\"\n                                        [radius]=\"radius\"\n                                        [semicircle]=\"semicircle\"\n                                        [rounded]=\"rounded\"\n                                        [responsive]=\"responsive\"\n                                        [clockwise]=\"clockwise\"\n                                        [color]=\"tile.dynamicValue.color\"\n                                        [background]=\"tile.bgcolor\"\n                                        [duration]=\"duration\"\n                                        [animation]=\"animation\"\n                                        [animationDelay]=\"animationDelay\"></round-progress>\n\n\n                        </mat-grid-tile>\n\n                    </mat-grid-list>\n                    \n                    \n\n\n                    <mat-card class=\"button-opts\">\n\n                        <mat-tab-group color=\"warn\">\n                            <mat-tab label=\"{{'pbHomeTabContentController'|translate}}\">\n                                    \n                                <span class=\"select-bar\">\n                                    <mat-form-field color=\"warn\">\n                                        <mat-select placeholder=\"{{'tabSelectOpt' | translate}}\" [(ngModel)]=\"selectedBar\" >\n                                            <mat-option  *ngFor=\"let bar of pbBars.tiles \" [value]=\"bar.idx\" >\n                                                {{ 'bar' | translate }} {{\" \" +bar.text}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </span>\n\n                                \n                                <ng-container *ngIf=\"selectedBar != -1\">\n                                    <a mat-raised-button *ngFor=\"let item of pbData.buttons index as i\" [attr.data-index]=\"i\" id=\"bar_btn_{{i}}\" (click)=\"increment(item);\" >\n                                        {{buttonLabel(item)}}\n                                    </a>\n                                </ng-container>\n                            </mat-tab>\n                            \n                            <mat-tab label=\"{{'pbHomeTabContentApi'|translate}}\">\n                                <pre><code class=\"lang-json\">{{apiRaw.endPoint}}</code></pre>\n                                <mat-divider></mat-divider>\n                                <br>\n                                <a mat-raised-button  (click)=\"reload()\" >\n                                    {{ 'reload' | translate }}\n                                </a>\n                            </mat-tab>\n                            \n                            \n                        </mat-tab-group>\n                        \n                        \n                    </mat-card>\n                    \n                    \n                    \n                </div>\n                \n                \n            \n        </div>\n\n        \n        \n    </div>\n    \n    <div fxFlex=\"10\" fxFlex.gt-sm=\"20\"></div>\n    \n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-header__image, mat-card-title, mat-card-subtitle, .mat-card-image {\n  cursor: pointer; }\n\n.home-card {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  margin-left: auto;\n  margin-right: auto; }\n\n.progress__spinner {\n  margin-left: auto;\n  margin-right: auto; }\n\n@media (max-width: 680px) {\n  .home-card {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto; }\n  .mat-card {\n    margin-bottom: 2rem; } }\n\n@media screen and (max-width: 400px) {\n  .select-bar {\n    margin-right: 10px;\n    position: relative;\n    top: 14px;\n    min-height: 500px !important;\n    width: 100px; } }\n\n.cf:before,\n.cf:after {\n  content: ' ';\n  display: table; }\n\n.cf:after {\n  clear: both; }\n\n.content-bar {\n  margin-top: 20px; }\n\n.current {\n  position: absolute;\n  color: #8c8c8c;\n  font-weight: 100;\n  line-height: 1; }\n\n.bar-title {\n  color: #a5a5a5;\n  position: absolute;\n  font-size: 14px; }\n\n.button-opts {\n  margin-top: 15px;\n  text-align: center; }\n\n.select-bar {\n  margin-right: 10px;\n  position: relative;\n  top: 4px;\n  min-height: 500px !important; }\n\nround-progress {\n  margin: auto; }\n\n.mat-tab-body-content {\n  height: 180px !important;\n  min-height: 100px !important;\n  padding-top: 20px;\n  overflow: hidden; }\n\n.container {\n  width: 100%;\n  max-width: 650px;\n  margin: 40px auto 80px;\n  text-align: center;\n  padding: 40px;\n  background: #fff;\n  border: solid 1px #ccc;\n  border-radius: 4px; }\n\nbutton {\n  display: inline-block;\n  padding: 10px 20px;\n  background: #45ccce;\n  color: #fff;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n  text-align: center;\n  margin: 0 5px 5px 0; }\n\nform {\n  text-align: left;\n  max-width: 350px;\n  margin: 30px auto; }\n\nform > div {\n  margin-bottom: 15px; }\n\ninput, select {\n  float: right;\n  padding: 5px;\n  width: 150px; }\n\ninput[type='checkbox'] {\n  width: auto; }\n\ninput[type='color'] {\n  height: 30px; }\n\n.mat-grid-tile .mat-figure {\n  height: 53% !important;\n  top: 25% !important; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pb_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/pb-api.service */ "./src/app/pages/shared/pb-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_svg_round_progressbar_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-round-progressbar/dist */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar_dist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar_dist__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(pbApiService, router, _ease) {
        this.pbApiService = pbApiService;
        this.router = router;
        this._ease = _ease;
        this.barColors = [
            '#f0b778',
            '#e17d5e',
            '#b44332',
        ];
        this.pbBars = {
            tiles: []
        };
        this.selectedBar = -1;
        this.selectedBarBgcolor = '#fef2e3';
        // progress bar default settings
        this.max = 0;
        this.stroke = 25;
        this.radius = 100;
        this.semicircle = true;
        this.rounded = false;
        this.responsive = false;
        this.clockwise = true;
        this.background = '#eaeaea';
        this.duration = 800;
        this.animations = [];
        this.animation = 'easeOutElastic'; // 'easeOutCubic';
        this.animationDelay = 0;
        if (_ease) {
            for (var prop in _ease) {
                if (prop.toLowerCase().indexOf('ease') > -1) {
                    this.animations.push(prop);
                }
                ;
            }
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initLoad();
    };
    HomeComponent.prototype.initLoad = function () {
        var _this = this;
        this.pbApiService.getPBEndpoints().subscribe(function (data) {
            _this.pbData = data;
            _this.max = data.limit;
            _this.pbData.buttons = _this.customerSorter(data.buttons);
            _this.apiRaw = {
                currentBar: JSON.stringify(_this.pbData.buttons),
                endPoint: JSON.stringify(data)
            };
            var barsLen = _this.pbData.bars.length;
            for (var i = 0; i < barsLen; i++) {
                var b = {
                    idx: i,
                    text: (i + 1),
                    cols: (barsLen % 2) ? barsLen - 1 : 1,
                    rows: 1,
                    bgcolor: '#f9f8f7',
                    dynamicValue: _this.pbComposerSettings(_this.pbData.bars[i], _this.max),
                    controllDisabled: false
                };
                _this.pbBars.tiles.push(b);
            }
        });
    };
    HomeComponent.prototype.increment = function (amount) {
        if (amount === void 0) { amount = 1; }
        var realCurrent = this.pbBars.tiles[this.selectedBar].dynamicValue.realCurrent += amount;
        var current = this.pbBars.tiles[this.selectedBar].dynamicValue.current;
        if (current >= this.max && realCurrent >= this.max) {
            return;
        }
        this.pbBars.tiles[this.selectedBar].dynamicValue.current += amount;
        if (current < 0 || realCurrent < 0) {
            this.pbBars.tiles[this.selectedBar].dynamicValue.realCurrent = 0;
            this.pbBars.tiles[this.selectedBar].dynamicValue.current = 0;
            this.pbBars.tiles[this.selectedBar].dynamicValue.controllDisabled = true;
        }
        this.pbBars.tiles[this.selectedBar].dynamicValue.color = this.setBarColor(realCurrent, this.max);
    };
    HomeComponent.prototype.getOverlayStyle = function () {
        var transform = (this.semicircle ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        return {
            'top': this.semicircle ? '58%' /*'auto' */ : '50%',
            'bottom': this.semicircle ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 3.8 + 'px'
        };
    };
    HomeComponent.prototype.getBarTitleStyle = function () {
        var transform = 'translateY(-190%) ' + 'translateX(-50%)';
        return {
            'bottom': '75%',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
        };
    };
    HomeComponent.prototype.getBarPercentage = function (n1, n2) {
        return Math.floor((n1 / n2) * 100);
    };
    HomeComponent.prototype.reload = function () {
        this.reset();
        this.initLoad();
    };
    HomeComponent.prototype.buttonLabel = function (value) {
        return (value >= 0) ? '+ ' + value : '- ' + Math.abs(value);
    };
    HomeComponent.prototype.customerSorter = function (array) {
        array.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    HomeComponent.prototype.reset = function () {
        this.pbData = undefined;
        this.pbBars = {
            tiles: []
        };
        this.apiRaw = {};
        this.selectedBar = -1;
        this.selectedBarBgcolor = '#fef2e3';
    };
    HomeComponent.prototype.pbComposerSettings = function (current, max) {
        return {
            current: current,
            color: this.setBarColor(current, max),
            realCurrent: current
        };
    };
    HomeComponent.prototype.setBarColor = function (value, maxValue) {
        var pVal = Math.floor(maxValue / 2);
        var result = this.barColors[0];
        if (value === 0 || value < pVal) {
            result = this.barColors[0];
        }
        if (value > pVal && value !== maxValue) {
            result = this.barColors[1];
        }
        if (value >= maxValue) {
            result = this.barColors[2];
        }
        return result;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_shared_pb_api_service__WEBPACK_IMPORTED_MODULE_1__["PBApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_svg_round_progressbar_dist__WEBPACK_IMPORTED_MODULE_3__["RoundProgressEase"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/pb-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/shared/pb-api.service.ts ***!
  \************************************************/
/*! exports provided: PBApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBApiService", function() { return PBApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _core_shared_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/logger.service */ "./src/app/core/shared/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PBApiService = /** @class */ (function () {
    function PBApiService(http, translateService, snackBar) {
        this.http = http;
        this.translateService = translateService;
        this.snackBar = snackBar;
        this.pbEndpointsUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endpoints.progressBarAPI;
    }
    PBApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _core_shared_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"].log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    };
    PBApiService.prototype.getPBEndpoints = function () {
        return this.http.get(this.pbEndpointsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return _core_shared_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"].log("Retrieved progress bars data"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getPBEndpoints data")));
    };
    PBApiService.prototype.showSnackBar = function (name) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarConfig"]();
        config.duration = _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].snackBarDuration;
        this.snackBar.open(this.translations[name], 'OK', config);
    };
    PBApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], PBApiService);
    return PBApiService;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/progress.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/interceptors/progress.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: ProgressInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressInterceptor", function() { return ProgressInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


var ProgressInterceptor = /** @class */ (function () {
    function ProgressInterceptor(progressBarService) {
        this.progressBarService = progressBarService;
    }
    ProgressInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.progressBarService.increase();
        return next
            .handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.progressBarService.decrease();
            }
        }));
    };
    return ProgressInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/timing.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/interceptors/timing.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: TimingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingInterceptor", function() { return TimingInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_shared_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/logger.service */ "./src/app/core/shared/logger.service.ts");



var TimingInterceptor = /** @class */ (function () {
    function TimingInterceptor() {
    }
    TimingInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        return next
            .handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                var elapsed = Date.now() - started;
                _core_shared_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("Request for " + req.urlWithParams + " took " + elapsed + " ms.");
            }
        }));
    };
    return TimingInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/modules/material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDividerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDividerModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/modules/material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _pages_shared_pb_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/shared/pb-api.service */ "./src/app/pages/shared/pb-api.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                _pages_shared_pb_api_service__WEBPACK_IMPORTED_MODULE_3__["PBApiService"]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
            ],
            exports: [
                _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    version: '1.0.0'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/frx/Development/X-APP/progress-bar-demo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map