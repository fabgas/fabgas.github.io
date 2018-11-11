(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailprocess-detailprocess-module"],{

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/detailprocess/detailprocess.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/detailprocess/detailprocess.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailprocessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailprocessPageModule", function() { return DetailprocessPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _service_detail_process_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/detail-process-service */ "./src/app/detailprocess/service/detail-process-service.ts");
/* harmony import */ var _detailprocess_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detailprocess.page */ "./src/app/detailprocess/detailprocess.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _detailprocess_page__WEBPACK_IMPORTED_MODULE_7__["DetailprocessPage"]
    }
];
var DetailprocessPageModule = /** @class */ (function () {
    function DetailprocessPageModule() {
    }
    DetailprocessPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            providers: [_service_detail_process_service__WEBPACK_IMPORTED_MODULE_6__["DetailProcessService"]],
            declarations: [_detailprocess_page__WEBPACK_IMPORTED_MODULE_7__["DetailprocessPage"]]
        })
    ], DetailprocessPageModule);
    return DetailprocessPageModule;
}());



/***/ }),

/***/ "./src/app/detailprocess/detailprocess.page.html":
/*!*******************************************************!*\
  !*** ./src/app/detailprocess/detailprocess.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar *ngIf=\"detailProcessus\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{detailProcessus.llProcessus}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div class=\"datas\">\n        <div class=\"item\">\n          <p class=\"cellheader\">{{detailProcessus.heures}}</p>\n          <p class=\"cell\">heures</p>\n        </div>\n        <div class=\"item\">\n          <p class=\"cellheader\">{{detailProcessus.volume}}</p>\n           <p class=\"cell\">{{detailProcessus.ucObjet}}</p>\n        </div>\n        <div class=\"item\">\n          <p [ngClass]=\"{'cellheader':true,'red':detailProcessus.prod<detailProcessus.prodcible}\">{{detailProcessus.prod| number:'1.0-0'}}</p>\n          <p class=\"cell\">obj/h</p>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button  value=\"TOUS\" checked>\n          Tous\n         </ion-segment-button>\n      <ion-segment-button *ngFor =\"let shift of shifts\" [value]=\"shift.ucShift\">\n       {{shift.ucShift}}\n      </ion-segment-button>\n  </ion-segment>\n <br/>\n  <ion-list>\n      <ion-grid>\n          <ion-row class=\"headerOperateurs\" (click)='orderByName()'>\n            <ion-col size=\"6\" >\n              Opérateurs({{countOperateurs}})\n            </ion-col>\n            <ion-col  class=\"data\" (click)='orderByHeures()'>\n              H\n            </ion-col>\n            <ion-col  class=\"data\" (click)='orderByVolume()'>\n              Vol\n            </ion-col>\n            <ion-col  class=\"data\" (click)='orderByProd()'>\n              Prod\n            </ion-col>\n          </ion-row>\n          <div *ngFor=\"let ope of listeOperateurs\" class=\"divlist\">\n              <hr>\n          <ion-row  class=\"lineOperateur\">\n              <ion-col size=\"6\">\n                {{ope.llOperateur}}\n              </ion-col>\n              <ion-col class=\"data\">\n                  {{ope.heures| number:'1.1-1'}}\n              </ion-col>\n              <ion-col class=\"data\">\n                  {{ope.volume| number:'1.0-0'}}\n              </ion-col>\n              <ion-col class=\"data\">\n                  {{ope.prod| number:'1.0-0'}}\n              </ion-col>\n              \n            </ion-row>\n            \n          </div>\n      </ion-grid>\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detailprocess/detailprocess.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/detailprocess/detailprocess.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-icon {\n  font-size: 40px; }\n\n.text {\n  font-size: 20px;\n  text-align: center;\n  font-weight: bold; }\n\n.toolbar {\n  background-color: lightblue; }\n\n.datas {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  /* Then we define how is distributed the remaining space */\n  justify-content: space-evenly; }\n\n.cellheader {\n  font-size: 2em;\n  color: white;\n  text-align: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: #03A9F4; }\n\n.cellobjet {\n  font-size: 1em;\n  color: grey;\n  font-style: italic;\n  text-align: left; }\n\n.item {\n  flex-grow: 1;\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.cell {\n  font-size: 1em;\n  color: black;\n  text-align: center;\n  font-weight: bold;\n  background-color: #039BE5; }\n\n.red {\n  background-color: red;\n  text-align: center; }\n\n.lineOperateur {\n  font-size: 0.8em; }\n\n.data {\n  font-size: 1em;\n  text-align: right; }\n\n.headerOperateurs {\n  color: grey;\n  font-size: 0.8em; }\n\n.divlist {\n  padding: 0px;\n  margin: 0px; }\n\nhr {\n  display: block;\n  margin-top: 0.0em;\n  margin-bottom: 0.0em;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: grey; }\n\n.card-content-ios {\n  padding: 5px; }\n\n.card-content-md {\n  padding: 5px; }\n\n.sc-ion-card-md-h {\n  margin: 0px; }\n\n.sc-ion-card-ios-h {\n  margin: 0px; }\n"

/***/ }),

/***/ "./src/app/detailprocess/detailprocess.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/detailprocess/detailprocess.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailprocessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailprocessPage", function() { return DetailprocessPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_detail_process_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/detail-process-service */ "./src/app/detailprocess/service/detail-process-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailprocessPage = /** @class */ (function () {
    function DetailprocessPage(route, processDetailService) {
        this.route = route;
        this.processDetailService = processDetailService;
    }
    DetailprocessPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.processDetailService.getDetailProcess(params.ucProcessus).subscribe(function (result) { return _this.detailProcessus = result; }); });
        this.route.params.subscribe(function (params) { return _this.processDetailService.getProcessDetail(params.ucProjet, params.ucProcessus, params.date).subscribe(function (result) {
            console.log(result);
            result = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](result, function (ope) { return ope.llOperateur; });
            _this.detailOperateurProcessus = result;
            _this.shifts = lodash__WEBPACK_IMPORTED_MODULE_2__["uniqBy"](result, function (ope) { return ope.ucShift; });
            //  let noShift = new OperatorDetailProcess("","","","",0,0);
            //  this.shifts.unshift(noShift);
            // console.log(this.shifts);
            //this.filtreShift(this.shifts[0].ucShift);
            _this.listeOperateurs = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_this.detailOperateurProcessus);
            _this.countOperateurs = _this.listeOperateurs.length;
        }); });
    };
    DetailprocessPage.prototype.segmentChanged = function (event) {
        console.log(event);
        var ucShift = event.detail.value;
        this.filtreShift(ucShift);
    };
    DetailprocessPage.prototype.filtreShift = function (ucShift) {
        this.listeOperateurs = [];
        if (ucShift === 'TOUS') {
            this.listeOperateurs = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.detailOperateurProcessus);
            this.countOperateurs = this.listeOperateurs.length;
        }
        else {
            this.listeOperateurs = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.detailOperateurProcessus, { 'ucShift': ucShift });
            this.countOperateurs = this.listeOperateurs.length;
        }
    };
    DetailprocessPage.prototype.orderByHeures = function () {
        console.log("tri par heures");
        this.listeOperateurs = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](this.listeOperateurs, function (ope) { return ope.heures; });
    };
    DetailprocessPage.prototype.orderByVolume = function () {
        this.listeOperateurs = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](this.listeOperateurs, function (ope) { return ope.volumes; });
    };
    DetailprocessPage.prototype.orderByProd = function () {
        this.listeOperateurs = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](this.listeOperateurs, function (ope) { return ope.prod; });
    };
    DetailprocessPage.prototype.orderByName = function () {
        this.listeOperateurs = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](this.listeOperateurs, function (ope) { return ope.llOperateur; });
    };
    DetailprocessPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detailprocess',
            template: __webpack_require__(/*! ./detailprocess.page.html */ "./src/app/detailprocess/detailprocess.page.html"),
            styles: [__webpack_require__(/*! ./detailprocess.page.scss */ "./src/app/detailprocess/detailprocess.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_detail_process_service__WEBPACK_IMPORTED_MODULE_3__["DetailProcessService"]])
    ], DetailprocessPage);
    return DetailprocessPage;
}());



/***/ }),

/***/ "./src/app/detailprocess/model/detail-process.ts":
/*!*******************************************************!*\
  !*** ./src/app/detailprocess/model/detail-process.ts ***!
  \*******************************************************/
/*! exports provided: DetailProces, OperatorDetailProcess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProces", function() { return DetailProces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorDetailProcess", function() { return OperatorDetailProcess; });
var DetailProces = /** @class */ (function () {
    function DetailProces(ucProcessus, llProcessus, ucObjet, ucSpecialisation, volume, heures, prodcible) {
        this.ucProcessus = ucProcessus;
        this.llProcessus = llProcessus;
        this.ucObjet = ucObjet;
        this.ucSpecialisation = ucSpecialisation;
        this.volume = volume;
        this.heures = heures;
        this.prodcible = prodcible;
        if (heures && heures > 0)
            this.prod = this.volume / this.heures;
    }
    return DetailProces;
}());

var OperatorDetailProcess = /** @class */ (function () {
    function OperatorDetailProcess(ucOperateur, llOperateur, ucShift, ucProcessus, volume, heures) {
        this.ucOperateur = ucOperateur;
        this.llOperateur = llOperateur;
        this.ucShift = ucShift;
        this.ucProcessus = ucProcessus;
        this.volume = volume;
        this.heures = heures;
        if (this.heures && this.heures > 0)
            this.prod = this.volume / this.heures;
    }
    return OperatorDetailProcess;
}());



/***/ }),

/***/ "./src/app/detailprocess/service/detail-process-service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/detailprocess/service/detail-process-service.ts ***!
  \*****************************************************************/
/*! exports provided: DetailProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProcessService", function() { return DetailProcessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_detail_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/detail-process */ "./src/app/detailprocess/model/detail-process.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * La structure des données renvoyées est la suivantes :
 *  - detail du processus (global) : heure réelles, volumes objet principal, productivité réelle
 *                                   capacité de prod,volumes planifiés , productivité cible
 *                                      -> Resultats de type T ou P ?
 * - Détail par opérateur et par processus : heures , volumes objets, prod objet principal
 *                                     -> saisie conso réelle.
 */
var DetailProcessService = /** @class */ (function () {
    function DetailProcessService(http) {
        this.http = http;
        this.process = [];
        var p1 = new _model_detail_process__WEBPACK_IMPORTED_MODULE_2__["DetailProces"]("INBOUND-1", "Inbound-1", "Palette", "", 1000, 57, 19);
        var p2 = new _model_detail_process__WEBPACK_IMPORTED_MODULE_2__["DetailProces"]("OUTBOUND-1", "Outbound-1", "Colis", "", 857, 26, 38);
        var p3 = new _model_detail_process__WEBPACK_IMPORTED_MODULE_2__["DetailProces"]("INBOUND-2", "Inbound-2", "Palette", "", 100, 10, 8);
        var p4 = new _model_detail_process__WEBPACK_IMPORTED_MODULE_2__["DetailProces"]("OUTBOUND-2", "Outbound-2", "Colis", "", 857, 25, 39);
        var p5 = new _model_detail_process__WEBPACK_IMPORTED_MODULE_2__["DetailProces"]("INBOUND-3", "Inbound-3", "Palette", "", 25000, 95, 200);
        var p6 = new _model_detail_process__WEBPACK_IMPORTED_MODULE_2__["DetailProces"]("OUTBOUND-3", "Outbound-3", "Colis", "", 3568, 35, 101);
        var p7 = new _model_detail_process__WEBPACK_IMPORTED_MODULE_2__["DetailProces"]("INBOUND-4", "Inbound-4", "Palette", "", 8999, 125, 90);
        var p8 = new _model_detail_process__WEBPACK_IMPORTED_MODULE_2__["DetailProces"]("OUTBOUND-4", "Outbound-4", "Colis", "", 560, 12, 45);
        this.process[0] = p1;
        this.process[1] = p2;
        this.process[2] = p3;
        this.process[3] = p4;
        this.process[4] = p5;
        this.process[5] = p6;
        this.process[6] = p7;
        this.process[7] = p8;
        this.datas = [];
    }
    DetailProcessService.prototype.getDetailProcess = function (ucProcessus) {
        var result = this.process.find(function (pro) { return pro.ucProcessus === ucProcessus; });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
    };
    DetailProcessService.prototype.getProcessDetail = function (ucProjet, ucProcessus, date) {
        var _this = this;
        if (!this.datas[ucProjet]) {
            this.datas[ucProjet] = [];
        }
        if (this.datas[ucProjet][date]) {
            var details = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.datas[ucProjet][date], function (detailOperateur) { return detailOperateur.ucProcessus === ucProcessus; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(details);
        }
        return this.http.get("/assets/datas/date_1.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) { return console.log(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) { return lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](res, function (ope) { if (ope.heures && ope.heures > 0)
            ope.prod = ope.volume / ope.heures; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) { return _this.datas[ucProjet][date] = res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](res, { 'ucProcessus': ucProcessus }); }));
    };
    DetailProcessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DetailProcessService);
    return DetailProcessService;
}());



/***/ })

}]);
//# sourceMappingURL=detailprocess-detailprocess-module.js.map