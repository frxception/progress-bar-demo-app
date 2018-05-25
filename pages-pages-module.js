(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/info/info.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/info/info.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n    <div fxFlex=\"10\" fxFlex.gt-sm=\"20\"></div>\n    <div fxFlex=\"90\" fxFlex.gt-sm=\"80\" id=\"infoPage\">\n        <h1 class=\"header__title\">{{ 'info' | translate }}</h1>\n\n\n    <!--TODO: PUT THE INFO CONTENT OF THIS PROJECT HERE-->\n        \n        \n        \n    </div>\n\n    <div fxFlex=\"10\" fxFlex.gt-sm=\"20\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/info/info.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/info/info.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#left {\n  width: 50%;\n  float: left;\n  margin-left: 6%; }\n\n#right {\n  margin-left: 50%;\n  text-align: center;\n  padding-right: 17%; }\n\n.clear {\n  clear: both; }\n\n.mat-list {\n  margin-left: auto;\n  margin-right: auto;\n  display: table; }\n\n.mat-list /deep/ .mat-list-text {\n    text-align: left !important; }\n\n@media (max-width: 680px) {\n  #left {\n    width: 100%;\n    float: none;\n    margin-left: auto;\n    margin-right: auto; }\n  #right {\n    margin: 1em auto 0;\n    width: 90%;\n    float: none;\n    padding: 0; } }\n"

/***/ }),

/***/ "./src/app/pages/info/info.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/info/info.component.ts ***!
  \**********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoComponent = /** @class */ (function () {
    function InfoComponent(translateService) {
        this.translateService = translateService;
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/pages/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/pages/info/info.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/info.component */ "./src/app/pages/info/info.component.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var pagesRoutes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        children: [
            { path: '', component: _info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"] }
            // , {path: ':id', component: PagesDetailComponent}
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pagesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
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

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info.component */ "./src/app/pages/info/info.component.ts");
/* harmony import */ var _shared_pb_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/pb-api.service */ "./src/app/pages/shared/pb-api.service.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_7__["PagesComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"]
            ],
            providers: [
                _shared_pb_api_service__WEBPACK_IMPORTED_MODULE_6__["PBApiService"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map