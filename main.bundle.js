webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.heading = "Ultra Racing Schedule";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'racing-app',
        template: "\n<header class=\"container\">\n  <h1>{{heading}}</h1>\n</header>\n<router-outlet></router-outlet>\n",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__races_races_component__ = __webpack_require__("../../../../../src/app/races/races.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__races_race_service__ = __webpack_require__("../../../../../src/app/races/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__race_race_component__ = __webpack_require__("../../../../../src/app/race/race.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__race_detail_race_detail_component__ = __webpack_require__("../../../../../src/app/race-detail/race-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__races_races_component__["a" /* RacesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__race_race_component__["a" /* RaceComponent */],
            __WEBPACK_IMPORTED_MODULE_9__race_detail_race_detail_component__["a" /* RaceDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: 'races', pathMatch: 'full' },
                { path: 'races', component: __WEBPACK_IMPORTED_MODULE_6__races_races_component__["a" /* RacesComponent */] },
                { path: 'races/:id', component: __WEBPACK_IMPORTED_MODULE_9__race_detail_race_detail_component__["a" /* RaceDetailComponent */] }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__races_race_service__["a" /* RaceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/race-detail/race-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-detail/race-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  More about #{{ raceId }}\n</p>\n<p><a [routerLink]=\"['/races']\">Back to previous page</a></p>"

/***/ }),

/***/ "../../../../../src/app/race-detail/race-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RaceDetailComponent = (function () {
    function RaceDetailComponent(route) {
        this.route = route;
    }
    RaceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.raceId = params['id'];
        });
    };
    return RaceDetailComponent;
}());
RaceDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-race-detail',
        template: __webpack_require__("../../../../../src/app/race-detail/race-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/race-detail/race-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], RaceDetailComponent);

var _a;
//# sourceMappingURL=race-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/race/race.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    background: #44464c;\n    margin-bottom: 30px;\n    min-height: 160px;\n}\n\n.card.racing {\n    background: #24262c;\n}\n\n\n\n.date, .price {\n    color: #9397d8;\n}\n\n.description {\n    color: #66d9f7;\n}\n\n.panel-body {\n    display: table;\n    padding: 0;\n}\n\n.photo {\n    float: left;\n    margin-right: 30px;\n}\n\n.price {\n    margin: 0;\n    font-size: 18px;\n    text-align: center;\n    width: 120px;\n}\n\n.race-info {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.race-info h3 {\n    margin: 0 0;\n}\n\n.race-info h3 a {\n    color: #fff;\n}\n\n.race-info td:last-child {\n    padding: 0 20px;\n}\n\n.race-info, .race-info tbody, .race-info tr, .race-info td {\n    width: 100%;\n}\n\n.race-info tbody {\n    display: inline-block;\n}\n\n.button {\n    background: #fd79fc;\n    border-radius: 3px;\n    border: 0;\n    color: #ffffff;\n    width: 120px;\n}\n\n.button-cancel {\n    background: none;\n    border: 0;\n    color: #fd79fc;\n    text-decoration: underline;\n    width: 120px;\n}\n\n.status {\n    color: #fd79fc;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race/race.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"card\"  [class.racing]=\"race.isRacing\" >\n  <div class=\"panel-body\">\n    <div class=\"photo\">\n      <img [src]=\"race.image\" [alt]=\"race.imageDescription\">\n    </div>\n    <table class=\"race-info\">\n      <tr>\n        <td>\n          <h3><a [routerLink]=\"['/races', race.id]\">{{race.name}}</a></h3>\n          <p class=\"date\">{{castDate(race.date) | date:'MMM d, y, h:mma'}}</p>\n          <p class=\"description\">{{race.about}}</p>\n        </td>\n        <td>\n          <p class=\"price\">{{race.entryFee | currency:'USD':true}}</p>\n        </td>\n        <td>\n          <button class=\"button\" *ngIf=\"!race.isRacing\" (click)=\"enterRace()\">Enter Race</button>\n          <div *ngIf=\"race.isRacing\">\n            <p class=\"status\">Racing</p>\n            <button class=\"button-cancel\" (click)=\"cancelRace()\">Cancel Race</button>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/race/race.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__races_races_component__ = __webpack_require__("../../../../../src/app/races/races.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RaceComponent = (function () {
    function RaceComponent(racesComponent) {
        this.racesComponent = racesComponent;
    }
    RaceComponent.prototype.ngOnInit = function () {
    };
    RaceComponent.prototype.castDate = function (date) {
        return new Date(date);
    };
    RaceComponent.prototype.enterRace = function () {
        this.racesComponent.enterRace(this.race);
    };
    RaceComponent.prototype.cancelRace = function () {
        this.racesComponent.cancelRace(this.race);
    };
    return RaceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], RaceComponent.prototype, "race", void 0);
RaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'race',
        template: __webpack_require__("../../../../../src/app/race/race.component.html"),
        styles: [__webpack_require__("../../../../../src/app/race/race.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__races_races_component__["a" /* RacesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__races_races_component__["a" /* RacesComponent */]) === "function" && _a || Object])
], RaceComponent);

var _a;
//# sourceMappingURL=race.component.js.map

/***/ }),

/***/ "../../../../../src/app/races/race.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaceService = (function () {
    function RaceService(http) {
        this.http = http;
    }
    RaceService.prototype.getRaces = function () {
        return this.http.get('assets/races.json')
            .map(function (response) { return response.json().racesData; });
    };
    return RaceService;
}());
RaceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RaceService);

var _a;
//# sourceMappingURL=race.service.js.map

/***/ }),

/***/ "../../../../../src/app/races/races.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  color: #9397d8;\n  font-size: 22px;\n  margin-top: 0;\n}\n\n\n\n\n\n.price-total {\n  background:  #9179b7;\n  float: right;\n  margin: 0px 0;\n  padding: 20px 50px;\n}\n\n.price-total h3, .price-total p {\n  display: inline-block;\n  margin: 0;\n}\n\n.price-total p {\n  color: #362751;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.price-total h3 {\n  font-size: 18px;\n  margin-right: 60px;\n}\n\n\n\n\n\n.cash {\n  background: #000;\n  border: none;\n  display: inline-block;\n  height: 30px;\n  margin: 0px;\n  width: 150px;\n}\n\n/* ----- State ----- */\n\n.unavailble {\n  background: #505050;\n}\n\n.unavailble .button {\n  background: #707070;\n  color: #aeaeae;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/races/races.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\" role=\"main\">\n<h2>Money for racing: <input type=\"text\" class=\"cash\" [(ngModel)]=\"cash\"></h2>\n<h2>Cash left to enter races: <span>{{cashLeft() | currency:'USD':true}}</span> </h2>\n\n<race *ngFor=\"let race of races\" [race]=\"race\"> </race>\n\n<div class=\"price-total\">\n  <h3>Total cost:</h3>\n  <p>{{totalCost() | currency:'USD':true}}</p>\n</div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/races/races.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__race_service__ = __webpack_require__("../../../../../src/app/races/race.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RacesComponent = (function () {
    function RacesComponent(raceService) {
        this.raceService = raceService;
        this.heading = "Ultra Racing Schedule";
        this.cash = 10000;
    }
    RacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raceService.getRaces()
            .subscribe(function (data) { return _this.races = data; });
    };
    RacesComponent.prototype.totalCost = function () {
        var sum = 0;
        if (this.races) {
            for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
                var race = _a[_i];
                if (race.isRacing)
                    sum += race.entryFee;
            }
        }
        return sum;
    };
    RacesComponent.prototype.cashLeft = function () {
        return this.cash - this.totalCost();
    };
    RacesComponent.prototype.enterRace = function (race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
        }
        else {
            alert("You don't have enough cash");
        }
    };
    RacesComponent.prototype.cancelRace = function (race) {
        race.isRacing = false;
    };
    return RacesComponent;
}());
RacesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-races',
        template: __webpack_require__("../../../../../src/app/races/races.component.html"),
        styles: [__webpack_require__("../../../../../src/app/races/races.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */]) === "function" && _a || Object])
], RacesComponent);

var _a;
//# sourceMappingURL=races.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__("../../../../../src/app/index.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map