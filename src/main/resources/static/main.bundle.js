webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_inicio_inicio_component__ = __webpack_require__("../../../../../src/app/principal/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examenes_examenes_component__ = __webpack_require__("../../../../../src/app/examenes/examenes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal_component__ = __webpack_require__("../../../../../src/app/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registroalumno_registroalumno_component__ = __webpack_require__("../../../../../src/app/registroalumno/registroalumno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registroprofesor_registroprofesor_component__ = __webpack_require__("../../../../../src/app/registroprofesor/registroprofesor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full', },
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_2__principal_inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'registro-alumno', component: __WEBPACK_IMPORTED_MODULE_5__registroalumno_registroalumno_component__["a" /* RegistroalumnoComponent */] },
    { path: 'registro-profesor', component: __WEBPACK_IMPORTED_MODULE_6__registroprofesor_registroprofesor_component__["a" /* RegistroprofesorComponent */] },
    { path: 'examenes', component: __WEBPACK_IMPORTED_MODULE_3__examenes_examenes_component__["a" /* ExamenesComponent */] },
    { path: 'principal', component: __WEBPACK_IMPORTED_MODULE_4__principal_principal_component__["a" /* PrincipalComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_icons__ = __webpack_require__("../../../../clarity-icons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_clarity_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_icons_shapes_essential_shapes__ = __webpack_require__("../../../../clarity-icons/shapes/essential-shapes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_icons_shapes_essential_shapes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_clarity_icons_shapes_essential_shapes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        //   this.router.navigate(["/inicio"],{skipLocationChange:true});
        this.router.navigate(["/principal"], { skipLocationChange: true });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__principal_inicio_inicio_component__ = __webpack_require__("../../../../../src/app/principal/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examenes_examenes_component__ = __webpack_require__("../../../../../src/app/examenes/examenes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__principal_principal_component__ = __webpack_require__("../../../../../src/app/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registroalumno_registroalumno_component__ = __webpack_require__("../../../../../src/app/registroalumno/registroalumno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__registroprofesor_registroprofesor_component__ = __webpack_require__("../../../../../src/app/registroprofesor/registroprofesor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__examensitos_examensitos_component__ = __webpack_require__("../../../../../src/app/examensitos/examensitos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialoguito_dialoguito_component__ = __webpack_require__("../../../../../src/app/dialoguito/dialoguito.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__principal_inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_9__examenes_examenes_component__["a" /* ExamenesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__principal_principal_component__["a" /* PrincipalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__registroalumno_registroalumno_component__["a" /* RegistroalumnoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__registroprofesor_registroprofesor_component__["a" /* RegistroprofesorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__examensitos_examensitos_component__["a" /* ExamensitosComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dialoguito_dialoguito_component__["a" /* DialoguitoComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__dialoguito_dialoguito_component__["a" /* DialoguitoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["h" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_clarity_angular__["a" /* ClarityModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/clave.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClaveService = (function () {
    //  private direccionUrl= "http://localhost:9000/api/clave/"
    function ClaveService(http) {
        this.http = http;
        this.direccionUrl = "http://geradmin.herokuapp.com/api/clave/";
    }
    ClaveService.prototype.getClave = function (miClave) {
        return this.http.get(this.direccionUrl + miClave)
            .map(function (res) { return res.json(); });
    };
    ClaveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ClaveService);
    return ClaveService;
}());



/***/ }),

/***/ "../../../../../src/app/claveprofesor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaveprofesorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClaveprofesorService = (function () {
    //    private direccionUrl= "http://localhost:9000/api/clave-profesor/"
    function ClaveprofesorService(http) {
        this.http = http;
        this.direccionUrl = "http://geradmin.herokuapp.com/api/clave-profesor/";
    }
    ClaveprofesorService.prototype.getClaveProfesor = function (miClave) {
        return this.http.get(this.direccionUrl + miClave)
            .map(function (res) { return res.json(); });
    };
    ClaveprofesorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ClaveprofesorService);
    return ClaveprofesorService;
}());



/***/ }),

/***/ "../../../../../src/app/correo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorreoService = (function () {
    function CorreoService(http) {
        this.http = http;
        this.direccionUrl = 'http://www.geducativoedi.com.mx/correo.php';
    }
    CorreoService.prototype.getCorreo = function () {
        return this.http.get(this.direccionUrl)
            .map(function (res) { return res.statusText; });
    };
    CorreoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CorreoService);
    return CorreoService;
}());



/***/ }),

/***/ "../../../../../src/app/dialoguito/dialoguito.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .malo {\n    background: red;\n    color: black;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialoguito/dialoguito.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 mat-dialog-title>¡¡Correcto!!</h1>\n<div mat-dialog-content>\n  <!--\n  <p>Correcto</p>\n  \n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n-->\n</div>\n<div mat-dialog-actions>\n  <button  mat-raised-button color=\"accent\" [mat-dialog-close]=\"data.animal\" tabindex=\"2\"  >Aceptar</button>\n<!--  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>-->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/dialoguito/dialoguito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialoguitoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialoguitoComponent = (function () {
    function DialoguitoComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialoguitoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialoguitoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialoguito',
            template: __webpack_require__("../../../../../src/app/dialoguito/dialoguito.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialoguito/dialoguito.component.css")],
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], DialoguitoComponent);
    return DialoguitoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/estatus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Estatus; });
var Estatus = (function () {
    function Estatus(success, mensaje) {
        this.success = success;
        this.mensaje = mensaje;
    }
    return Estatus;
}());



/***/ }),

/***/ "../../../../../src/app/examenes/examenes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[hidden] {\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examenes/examenes.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-wizard #wizardlg [(clrWizardOpen)]=\"lgOpen\" clrWizardSize=\"lg\" [clrWizardClosable]=\"false\">\n\n    <clr-wizard-title>Registro</clr-wizard-title>\n\n    <clr-wizard-button [type]=\"'cancel'\" (click)=\"navegarInicio()\">Cancelar</clr-wizard-button>\n    <clr-wizard-button [type]=\"'previous'\">Atrás</clr-wizard-button>\n    <clr-wizard-button [type]=\"'next'\" (click)=\"obtenerClave()\"  >Siguiente</clr-wizard-button>\n    <clr-wizard-button [type]=\"'finish'\" (click)=\"navegarInicio()\">Finalizar</clr-wizard-button>\n\n  \n\n    <clr-wizard-page\n    [clrWizardPageNextDisabled]=\"nombre.pristine || !myForm.valid\"\n        clrWizardPagePreventDefault=\"true\"\n    (clrWizardPageOnCommit)=\"onCommit()\"\n    (clrWizardPageOnCancel)=\"doCancel()\"> \n        <ng-template clrPageTitle>Datos generales</ng-template>\n        <div class=\"spinner\" *ngIf=\"loadingFlag\">\n            Loading...\n        </div>\n        <clr-alert [clrAlertType]=\"'alert-info'\" [clrAlertClosable]=\"false\">\n                <div class=\"alert-item\">\n                    Es importante que tengas a la mano la clave de tu libro\n                </div>\n            </clr-alert>\n       \n\n       <form #myForm=\"ngForm\" [class.hide]=\"loadingFlag\">\n            <section class=\"form-block\">\n\n                    <div class=\"form-group\">\n                            <label>Nombre</label>\n                            <label for=\"nombreInput\" aria-haspopup=\"true\" role=\"tooltip\"\n                            [class.invalid]=\"nombre.touched && !nombre.valid\" \n                            class=\"tooltip tooltip-validation tooltip-md tooltip-bottom-left\">\n                            <input type=\"text\" placeholder=\"Nombre\" id=\"nombreInput\" required  [(ngModel)]=\"modelo.nombre\" name=\"nombre\" #nombre=\"ngModel\"   size=\"35\">\n                            <span class=\"tooltip-content\">Este campo es obligatorio!</span>\n                            </label>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Apellido Paterno</label>\n                            <input type=\"text\" placeholder=\"Apellido Paterno\" [(ngModel)]=\"modelo.paterno\" name=\"paterno\" size=\"35\">\n                        </div>\n                        <div  class=\"form-group\">   \n                                <label>Apellido Materno</label>\n                            <input type=\"text\"   placeholder=\"Apellido Materno\"  [(ngModel)]=\"modelo.materno\" name=\"materno\" size=\"35\">\n                        </div>    \n\n                        \n                            <clr-alert *ngIf=\"errorFlag\" [clrAlertType]=\"'alert-danger'\">\n                                <div class=\"alert-item\">\n                                    Clave de libro no válida!!\n                                </div>\n                            </clr-alert>\n\n                <div class=\"form-group\">\n                \n                        <label for=\"mi-clave\">Clave del libro</label>\n                        \n                        <input id=\"mi-clave\"  [(ngModel)]=\"miClave\" name=\"miClave\"  type=\"number\" placeholder=\"Clave del libro\" size=\"35\" >\n                   \n                    </div>\n                        \n\n           \n            \n          \n        </section>\n\n </form>\n    </clr-wizard-page>\n\n    <clr-wizard-page>\n        <ng-template clrPageTitle>Perfil</ng-template>\n        <form>\n               \n        <section class=\"form-block\">    \n            \n           <div class=\"form-group\">       \n              <label>Selecciona tu perfil</label>\n                <div class=\"auth-source select\">\n                <select [(ngModel)]=\"perfil\" name=\"perfil\" id=\"perfil\" (click)=\"verPerfil()\">\n                <option >Alumno</option>\n                <option>Profesor</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"form-group\"[hidden]=\"noEsProfesor\">\n        <label>Clave</label>\n            <input type=\"text\" placeholder=\"Clave de profesor\" size=\"35\" [(ngModel)]=\"miClaveProfesor\" name=\"miClaveProfesor\">\n        </div>\n\n        <div class=\"form-group\">\n            <label>Selecciona el turno</label>\n            <div class=\"auth-source select\">\n                <select id=\"turno\" name=\"turno\"  [(ngModel)]=\"turno\" name=\"miTurno\">\n                <option>Matutino</option>\n                    <option>Vespertino</option>\n            </select>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Selecciona el plantel</label>\n            <div class=\"auth-source select\">\n                <select id=\"turno\" name=\"turno\"  [(ngModel)]=\"miPlantel\" name=\"miPlantel\">\n                <option>2</option>\n                    <option>10</option>\n            </select>\n            </div>\n        </div>\n        <div class=\"form-group\" size=\"35\">\n            <label>Selecciona la materia</label>\n            <div class=\"auth-source select\">\n                <select id=\"turno\" name=\"turno\"  [(ngModel)]=\"miMateria\" name=\"miMateria\">\n                <option>Informática 1</option>\n                    <option>Informática 3</option>\n            </select>\n            </div>\n        </div>\n    \n        </section>\n        </form>\n    \n           \n    \n    </clr-wizard-page>\n\n    <clr-wizard-page>\n        <ng-template clrPageTitle>Autenticación</ng-template>\n        <form class=\"login\">\n            <section class=\"form-block\">\n    \n                    <div class=\"form-group\">\n                    \n                            <label>Correo electrónico</label>\n                            \n                            <input  [(ngModel)]=\"miCorreo\" name=\"miCorreo\" id=\"validInput2\" type=\"email\" placeholder=\"Correo electronico\" size=\"35\" >\n                       \n                        </div>\n                            \n    \n                <div class=\"form-group\">\n                    <label>Nombre</label>\n                    <input type=\"text\"  [(ngModel)]=\"miPassword\" name=\"miPassword\" placeholder=\"Introduce un password\" size=\"35\">\n                </div>\n               \n                \n              \n            </section>\n    \n     </form>\n    </clr-wizard-page>\n    <clr-wizard-page>\n        <ng-template clrPageTitle>Confirmación</ng-template>\n        \n        Al Oprimir el botón  de \"finalizar\" se efectuará el registro\n\n\n    </clr-wizard-page>\n</clr-wizard>"

/***/ }),

/***/ "../../../../../src/app/examenes/examenes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamenesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clave_service__ = __webpack_require__("../../../../../src/app/clave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estatus__ = __webpack_require__("../../../../../src/app/estatus.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExamenesComponent = (function () {
    function ExamenesComponent(router, servicioClave) {
        this.router = router;
        this.servicioClave = servicioClave;
        this.loadingFlag = false;
        this.errorFlag = false;
        this.modelo = {
            nombre: '',
            paterno: '',
            materno: ''
        };
        this.lgOpen = true;
        this.perfil = 'Alumno';
        this.noEsProfesor = true;
        this.oculta = true;
        this.oculta = true;
    }
    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    ExamenesComponent.prototype.doCancel = function () {
        this.wizardLarge.close();
    };
    ExamenesComponent.prototype.onCommit = function () {
        var _this = this;
        var value = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;
        value.miClave;
        this.obtenerClave();
        setTimeout(function () {
            if (_this.estatus.success) {
                _this.wizardLarge.forceNext();
                console.log('Encontrado!!');
            }
            else {
                _this.errorFlag = true;
            }
            _this.loadingFlag = false;
        }, 1000);
    };
    ExamenesComponent.prototype.ngOnInit = function () {
        this.estatus = new __WEBPACK_IMPORTED_MODULE_4__estatus__["a" /* Estatus */](false, "");
    };
    ExamenesComponent.prototype.obtenerClave = function () {
        this.getClave();
        console.log('Hola' + this.estatus.success);
    };
    ExamenesComponent.prototype.navegarInicio = function () {
        this.router.navigate(["/inicio"], { skipLocationChange: true });
    };
    ExamenesComponent.prototype.verPerfil = function () {
        console.log('hola');
        if (this.perfil === 'Profesor') {
            console.log('Eres profesor');
            this.noEsProfesor = false;
        }
        else {
            console.log('No eres profesor');
            this.noEsProfesor = true;
        }
    };
    ExamenesComponent.prototype.getClave = function () {
        var _this = this;
        this.servicioClave.getClave(this.miClave)
            .subscribe(function (estatus) { return _this.estatus = estatus; });
    };
    ExamenesComponent.prototype.hacerAlgo = function () {
        console.log('asasasas');
        // this.=this.estatus.success;
    };
    ExamenesComponent.prototype.estaInvalidada = function () {
        this.oculta = this.estatus.success;
        return !this.estatus.success;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("wizardlg"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_clarity_angular__["b" /* Wizard */])
    ], ExamenesComponent.prototype, "wizardLarge", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myForm"),
        __metadata("design:type", Object)
    ], ExamenesComponent.prototype, "formData", void 0);
    ExamenesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examenes',
            template: __webpack_require__("../../../../../src/app/examenes/examenes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examenes/examenes.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__clave_service__["a" /* ClaveService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__clave_service__["a" /* ClaveService */]])
    ], ExamenesComponent);
    return ExamenesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examensitos/examensitos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-radio-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  \n  .example-selected-value {\n    margin: 15px 0;\n  }\n  \n  .algo{\n    display:inline-block;\n    margin: 10px;\n  }\n  .morado{\n    background:green;\n    color: white;\n  }\n  .naranja{\n    background:orchid;\n    color: white;\n    margin: 10px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examensitos/examensitos.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Exámen diagnóstico</h1>\n<h2>Informática 1, lee cuiddadosamente y contesta cada pregunta, ¡Exito!</h2>\n\n\n\n<h3>1. Es una excelente herramienta para la comunicación humana y la enseñanza:</h3>\n<mat-radio-group class=\"example-radio-group\">\n    <mat-radio-button class=\"example-radio-button\" value=\"1\">Libros</mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"2\">Revistas</mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"3\">Artículos</mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"4\">Internet</mat-radio-button>\n  </mat-radio-group>\n\n<div>\n<button mat-raised-button class=\"naranja\" (click)=\"openDialog()\">¡Checar respuesta!</button>\n</div>\n<div>\n  <h3>2. ¿Que significan las iniciales W.W.W.?</h3>\n  <mat-radio-group class=\"example-radio-group\">\n    <mat-radio-button class=\"example-radio-button\" value=\"1\">World Wide World</mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"2\">Wide Web Worl</mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"3\">World Web Wide</mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"4\">Wold Wide Web</mat-radio-button>\n  </mat-radio-group>\n</div>\n<div>\n  <button mat-raised-button class=\"naranja\" (click)=\"openDialog()\">¡Checar respuesta!</button>\n</div>\n\n<div>\n    <h3>3.¿Qué concepto es correcto para la definición Correo Electrónico? </h3>\n    <mat-radio-group class=\"example-radio-group\">\n      <mat-radio-button class=\"example-radio-button\" value=\"1\">Es un sistema de mensajería electrónica personal de alta velocidad. </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" value=\"2\">Opera sobre la base de casillas electrónicas donde se almacena la \n          información</mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" value=\"3\">No se requiera la presencia en línea del usuario-destino</mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" value=\"4\">Todos los anteriores</mat-radio-button>\n    </mat-radio-group>\n  </div>\n  <div>\n    <button mat-raised-button class=\"naranja\" (click)=\"openDialog()\">¡Checar respuesta!</button>\n  </div>\n\n  <div>\n      <h3>4.Menciona un ejemplo de mensajería instantánea usaron \n          computadoras?</h3>\n      <mat-radio-group class=\"example-radio-group\">\n        <mat-radio-button class=\"example-radio-button\" value=\"1\">Explorer</mat-radio-button>\n        <mat-radio-button class=\"example-radio-button\" value=\"2\">Ordenador</mat-radio-button>\n        <mat-radio-button class=\"example-radio-button\" value=\"3\">Whatsapp</mat-radio-button>\n        <mat-radio-button class=\"example-radio-button\" value=\"4\">Cifrado</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div>\n      <button mat-raised-button class=\"naranja\" (click)=\"openDialog()\">¡Checar respuesta!</button>\n    </div>\n\n    <div>\n        <h3>5.¿Cual no es un navegador web</h3>\n        <mat-radio-group class=\"example-radio-group\">\n          <mat-radio-button class=\"example-radio-button\" value=\"1\">Chrome</mat-radio-button>\n          <mat-radio-button class=\"example-radio-button\" value=\"2\">Google</mat-radio-button>\n          <mat-radio-button class=\"example-radio-button\" value=\"3\">Expĺorer</mat-radio-button>\n          <mat-radio-button class=\"example-radio-button\" value=\"4\">Mozilla Firefox</mat-radio-button>\n        </mat-radio-group>\n      </div>\n      <div>\n        <button mat-raised-button class=\"naranja\" (click)=\"openDialog()\">¡Checar respuesta!</button>\n      </div>\n\n      <div>\n          <h3>6.¿A qué se llama buscadores?</h3>\n          <mat-radio-group class=\"example-radio-group\">\n            <mat-radio-button class=\"example-radio-button\" value=\"1\">Programas parecidos a dos servidores</mat-radio-button>\n            <mat-radio-button class=\"example-radio-button\" value=\"2\">Son aplicaciones que crean nuevas páginas</mat-radio-button>\n            <mat-radio-button class=\"example-radio-button\" value=\"3\">Son programas o aplicaciones alojadas en una página web</mat-radio-button>\n            <mat-radio-button class=\"example-radio-button\" value=\"4\">Son páginas que nos permiten en tiempo real encontrar información</mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <div>\n          <button mat-raised-button class=\"naranja\" (click)=\"openDialog()\">¡Checar respuesta!</button>\n        </div>\n\n        <div>\n            <h3>7.¿Cuáles son las teclas de atajo usadas en este mismo orden para: Cortar, Copiar y Pegar?</h3>\n            <mat-radio-group class=\"example-radio-group\">\n              <mat-radio-button class=\"example-radio-button\" value=\"1\">Alt + N, Ctrl + Q y Ctrl + P</mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" value=\"2\">Ctrl + X, Ctrl + C y Ctrl + V</mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" value=\"3\">Alt + F4, Ctrl + Del y Ctrl + A</mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" value=\"4\">Ctrl + Alt + Del, F5 y Ctrl + D</mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <div>\n            <button mat-raised-button class=\"naranja\" (click)=\"openDialog()\">¡Checar respuesta!</button>\n          </div>\n\n          <div>\n              <h3>8.¿Cuál es el procedimiento usado para crear una carpeta en Windows? </h3>\n              <mat-radio-group class=\"example-radio-group\">\n                <mat-radio-button class=\"example-radio-button\" value=\"1\">Ir a Inicio, click en Mis Documentos, después click en Nueva Carpeta</mat-radio-button>\n                <mat-radio-button class=\"example-radio-button\" value=\"2\">Clic con el botón derecho y después clic en Carpeta</mat-radio-button>\n                <mat-radio-button class=\"example-radio-button\" value=\"3\">Click con el botón derecho, click en Nuevo y después click en Carpeta</mat-radio-button>\n                <mat-radio-button class=\"example-radio-button\" value=\"4\">Click con el botón derecho, click en Carpeta, click en Nuevo</mat-radio-button>\n              </mat-radio-group>\n            </div>\n            <div>\n              <button mat-raised-button class=\"naranja\" (click)=\"openDialog()\">¡Checar respuesta!</button>\n            </div>\n\n\n\n\n<!--\n<div class=\"algo\">\n  <h2>Columna Opciones</h2>\n  <p>Mi parrafo 1</p>\n</div>\n<div class=\"algo\">\n  <h2>Columna Respuestas</h2>\n  <p>Mi parrafo 2</p>\n</div>\n-->"

/***/ }),

/***/ "../../../../../src/app/examensitos/examensitos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamensitosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialoguito_dialoguito_component__ = __webpack_require__("../../../../../src/app/dialoguito/dialoguito.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamensitosComponent = (function () {
    function ExamensitosComponent(dialog) {
        this.dialog = dialog;
        this.simpleDrop = null;
        this.animal = "Garto";
        this.name = "Misufuz";
        this.oculta = true;
    }
    ExamensitosComponent.prototype.ngOnInit = function () {
    };
    ExamensitosComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialoguito_dialoguito_component__["a" /* DialoguitoComponent */], {
            width: '140px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    ExamensitosComponent.prototype.checarRespuesta = function () {
        this.oculta = false;
    };
    ExamensitosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examensitos',
            template: __webpack_require__("../../../../../src/app/examensitos/examensitos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examensitos/examensitos.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__dialoguito_dialoguito_component__["a" /* DialoguitoComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], ExamensitosComponent);
    return ExamensitosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/materia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Materia; });
var Materia = (function () {
    function Materia(campo, nombre) {
        this.campo = campo;
        this.nombre = nombre;
    }
    return Materia;
}());



/***/ }),

/***/ "../../../../../src/app/principal/inicio/inicio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/principal/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-wrapper\">\n    <div class=\"login\">\n        <label class=\"title\">\n            <h3 class=\"welcome\">Benvenido a</h3>\n            <img src=\"assets/logochico.jpg\">\n        </label>\n        <div class=\"login-group\">\n            <div class=\"auth-source select\">\n                <select id=\"login-auth-source-1\">\n                    <option>Profesor</option>\n                    <option>Alumno</option>\n                </select>\n            </div>\n            <input class=\"username\" [(ngModel)]=\"login\" id=\"login_username\" placeholder=\"Correo electrónico\">\n            <input type=\"password\" class=\"password\" [(ngModel)]=\"password\" id=\"login_password\" placeholder=\"Contraseña\">\n            <!-- <div class=\"checkbox\">\n                <input type=\"checkbox\" id=\"rememberme\">\n               <label for=\"rememberme\">\n                    Remember me\n                </label>\n            </div>\n              -->\n                  <button (click)=\"autenticar()\" class=\"btn btn-primary\">Ingresar</button>\n            <div [hidden]=\"estaOculta\">\n              <div class=\"error active\">\n                Usuario o contraseña inválidos, si no la recuerdas proporciona tu correo para enviartela y\n                oprimer el boton \"Recuperar Contraseña\"\n              </div>\n              <div class=\"login-group\">\n                <input type=\"text-help\" [(ngModel)]=\"email\" id=\"email\" placeholder=\"Introduce tu Correo\">\n                <button click=\"recuperarContrasena()\" class=\"btn btn-outline-warning\">Recuperar Contraseña</button>\n              </div>\n            </div>\n\n\n           <!-- <a href=\"javascript://\" class=\"signup\">Sign up for a Company ID</a>-->\n\n         <h5>¿No tienes una cuenta? Regístrate </h5>\n\n        <button (click)=\"registrarProfesor()\" class=\"btn btn-warning\"> Registro Maestro</button>\n        <button (click)=\"registrarAlumno()\" class=\"btn btn-danger\">Registro Alumno</button>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/principal/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__correo_service__ = __webpack_require__("../../../../../src/app/correo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profesor_service__ = __webpack_require__("../../../../../src/app/profesor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioComponent = (function () {
    function InicioComponent(router, service, servicioProfesor) {
        this.router = router;
        this.service = service;
        this.servicioProfesor = servicioProfesor;
        this.estaOculta = true;
        this.mensaje = 'nada';
    }
    InicioComponent.prototype.ngOnInit = function () {
        //  this.obtenerProfesor();
    };
    InicioComponent.prototype.obtenerCorreo = function () {
        var _this = this;
        return this.service.getCorreo()
            .subscribe(function (mensaje) { return _this.mensaje = mensaje; });
    };
    InicioComponent.prototype.obtenerProfesor = function () {
        var _this = this;
        return this.servicioProfesor.getProfesor()
            .subscribe(function (profesor) { return _this.profesor = profesor; });
    };
    InicioComponent.prototype.registrarProfesor = function () {
        this.router.navigate(["/registro-profesor"], { skipLocationChange: true });
        this.estaOculta = true;
        //console.log('A ver que pasa'+this.profesor.clave);
    };
    InicioComponent.prototype.registrarAlumno = function () {
        this.router.navigate(["/registro-alumno"], { skipLocationChange: true });
        this.estaOculta = true;
        //console.log('A ver que pasa'+this.profesor.clave);
    };
    InicioComponent.prototype.autenticar = function () {
        console.log('jajajaja' + this.login);
        if (this.login === 'admin' && this.password === "test2017") {
            this.router.navigate(["/principal"], { skipLocationChange: true });
            this.estaOculta = true;
            // this.obtenerCorreo();
        }
        else {
            this.router.navigate(["/inicio"], { skipLocationChange: true });
            this.estaOculta = false;
        }
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inicio',
            template: __webpack_require__("../../../../../src/app/principal/inicio/inicio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/principal/inicio/inicio.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__correo_service__["a" /* CorreoService */], __WEBPACK_IMPORTED_MODULE_3__profesor_service__["a" /* ProfesorService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__correo_service__["a" /* CorreoService */], __WEBPACK_IMPORTED_MODULE_3__profesor_service__["a" /* ProfesorService */]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"alert alert-app-level alert-info\">\n    \n    <div class=\"alert-items\">\n      <div class=\"alert-item static\">\n          <div class=\"alert-icon-wrapper\">\n              <clr-icon class=\"alert-icon\" shape=\"logout\"></clr-icon>\n          </div>\n          <div class=\"alert-text\">\n              Grupo Eductivo Editorial RADO\n          </div>\n          <div class=\"alert-actions\">\n              <button class=\"btn alert-action\"  (click)=\"salir()\" >Salir</button>\n          </div>\n      </div>\n  </div>\n\n\n\n\n\n\n  </div>\n  <header class=\"header header-6\">\n    <div class=\"branding\">\n      <div class=\"title\">GEDUCATIVO</div>\n    </div>\n    <div class=\"header-nav\">\n        <a href=\"javascript://\" class=\"active nav-link nav-text\">Exámenes</a>\n        <a href=\"javascript://\" class=\"nav-link nav-text\">Evaluaciones</a>\n    </div>\n    <div class=\"header-actions\">\n        <a href=\"...\" class=\"nav-link nav-icon\">\n            <clr-icon shape=\"envelope\"></clr-icon>\n        </a>\n    </div>\n  </header>\n \n  <div class=\"content-container\">\n      <div class=\"content-area\">\n        <!--<img src=\"assets/imagenes/logo2.png\">-->\n       \n         <app-examensitos></app-examensitos>\n      </div> <!-- Termina content-area -->\n        \n\n      <nav class=\"sidenav\">\n            <section class=\"sidenav-content\">\n                    <a href=\"javascript://\" class=\"nav-link active\">\n                        Grupos\n                    </a>\n                    <a href=\"javascript://\" class=\"nav-link\">\n                        Ejercicios\n                    </a>\n                    <section class=\"nav-group collapsible\">\n                        <input id=\"tabexample1\" type=\"checkbox\">\n                        <label for=\"tabexample1\">Tareas</label>\n                        <ul class=\"nav-list\">\n                            <li><a class=\"nav-link\">Evaluaciones</a></li>\n                            <li><a class=\"nav-link\">Estadísticas</a></li>\n                        </ul>\n                    </section>\n                    \n                </section>\n       \n      </nav>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrincipalComponent = (function () {
    function PrincipalComponent(router) {
        this.router = router;
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent.prototype.salir = function () {
        this.router.navigate(["/inicio"], { skipLocationChange: true });
        // this.estaOculta=true;
    };
    PrincipalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-principal',
            template: __webpack_require__("../../../../../src/app/principal/principal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profesor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfesorService = (function () {
    function ProfesorService(http) {
        this.http = http;
        this.direccionUrl = 'https://geradmin.herokuapp.com/api/profesor';
        //private direccionUrl= "http://localhost:9000/api/profesor"
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ProfesorService.prototype.getProfesor = function () {
        return this.http.get(this.direccionUrl)
            .map(function (res) { return res.json(); });
    };
    ProfesorService.prototype.registrarProfesor = function (profesor) {
        return this.http.post(this.direccionUrl, JSON.stringify(profesor), { headers: this.headers }).
            map(function (respuesta) { return respuesta.json(); });
    };
    ProfesorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProfesorService);
    return ProfesorService;
}());



/***/ }),

/***/ "../../../../../src/app/registroalumno/registroalumno.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registroalumno/registroalumno.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-wizard #wizardlg [(clrWizardOpen)]=\"lgOpen\" clrWizardSize=\"lg\" [clrWizardClosable]=\"false\">\n\n      <clr-wizard-title>Registro Alumno</clr-wizard-title>\n\n      <clr-wizard-button [type]=\"'cancel'\" (click)=\"navegarInicio()\">Cancelar</clr-wizard-button>\n      <clr-wizard-button [type]=\"'previous'\">Atrás</clr-wizard-button>\n      <clr-wizard-button [type]=\"'next'\" (click)=\"obtenerClave()\"  >Siguiente</clr-wizard-button>\n      <clr-wizard-button [type]=\"'finish'\" (click)=\"navegarInicio()\">Finalizar</clr-wizard-button>\n\n\n\n      <clr-wizard-page\n      [clrWizardPageNextDisabled]=\"nombre.pristine || !myForm.valid\"\n          clrWizardPagePreventDefault=\"true\"\n      (clrWizardPageOnCommit)=\"onCommit()\"\n      (clrWizardPageOnCancel)=\"doCancel()\">\n          <ng-template clrPageTitle>Datos generales</ng-template>\n          <div class=\"spinner\" *ngIf=\"loadingFlag\">\n              Loading...\n          </div>\n          <clr-alert [clrAlertType]=\"'alert-info'\" [clrAlertClosable]=\"false\">\n                  <div class=\"alert-item\">\n                      Es importante que tengas a la mano la clave de tu libro\n                  </div>\n              </clr-alert>\n\n\n         <form #myForm=\"ngForm\" [class.hide]=\"loadingFlag\">\n              <section class=\"form-block\">\n\n                      <div class=\"form-group\">\n                              <label>Nombre</label>\n                              <label for=\"nombreInput\" aria-haspopup=\"true\" role=\"tooltip\"\n                              [class.invalid]=\"nombre.touched && !nombre.valid\"\n                              class=\"tooltip tooltip-validation tooltip-md tooltip-bottom-left\">\n                              <input type=\"text\" placeholder=\"Nombre\" id=\"nombreInput\" required  [(ngModel)]=\"modelo.nombre\" name=\"nombre\" #nombre=\"ngModel\"   size=\"35\">\n                              <span class=\"tooltip-content\">Este campo es obligatorio!</span>\n                              </label>\n                          </div>\n                          <div class=\"form-group\">\n                              <label>Apellido Paterno</label>\n                              <input type=\"text\" placeholder=\"Apellido Paterno\" [(ngModel)]=\"modelo.paterno\" name=\"paterno\" size=\"35\">\n                          </div>\n                          <div  class=\"form-group\">\n                                  <label>Apellido Materno</label>\n                              <input type=\"text\"   placeholder=\"Apellido Materno\"  [(ngModel)]=\"modelo.materno\" name=\"materno\" size=\"35\">\n                          </div>\n\n\n                              <clr-alert *ngIf=\"errorFlag\" [clrAlertType]=\"'alert-danger'\">\n                                  <div class=\"alert-item\">\n                                      Clave de libro no válida!!\n                                  </div>\n                              </clr-alert>\n\n                  <div class=\"form-group\">\n\n                          <label for=\"mi-clave\">Clave del libro</label>\n\n                          <input id=\"mi-clave\"  [(ngModel)]=\"miClave\" name=\"miClave\"  type=\"number\" placeholder=\"Clave del libro\" size=\"35\" >\n\n                      </div>\n\n\n\n\n\n          </section>\n\n   </form>\n      </clr-wizard-page>\n\n      <clr-wizard-page>\n          <ng-template clrPageTitle>Datos Académicos</ng-template>\n          <form>\n\n          <section class=\"form-block\">\n\n\n          <!--<div class=\"form-group\"[hidden]=\"noEsProfesor\">\n          <label>Clave</label>\n              <input type=\"text\" placeholder=\"Clave de profesor\" size=\"35\" [(ngModel)]=\"miClaveProfesor\" name=\"miClaveProfesor\">\n          </div>-->\n\n          <div class=\"form-group\">\n              <label>Selecciona el Nombre de la materia</label>\n              <div class=\"auth-source select\">\n                  <select id=\"turno\" name=\"turno\"  [(ngModel)]=\"turno\" name=\"miTurno\">\n                  <option>Matutino</option>\n                 <option>Vespertino</option>\n                 <option>Mixto</option>\n              </select>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Selecciona el grupo</label>\n              <div class=\"auth-source select\">\n                  <select id=\"turno\" name=\"miPlantel\"  [(ngModel)]=\"miPlantel\" name=\"miPlantel\">\n                  <option>2</option>\n                      <option>10</option>\n              </select>\n              </div>\n          </div>\n          <div class=\"form-group\" size=\"35\">\n\n            <label>Selecciona a tu profesor</label>\n            <div class=\"auth-source select\">\n                <select id=\"turno\" name=\"nombreProfesor\"  [(ngModel)]=\"nombreProfesor\" name=\"nombreProfesor\">\n                <option>Profe 1</option>\n                    <option>Profe 2</option>\n            </select>\n            </div>\n\n\n\n\n\n          </div><!-- TERMINA DE FORM GROUP DE MATERIA -->\n\n          </section>\n          </form>\n\n\n\n      </clr-wizard-page>\n\n      <clr-wizard-page>\n          <ng-template clrPageTitle>Autenticación</ng-template>\n          <form class=\"login\">\n              <section class=\"form-block\">\n\n                      <div class=\"form-group\">\n\n                              <label>Correo electrónico</label>\n\n                              <input  [(ngModel)]=\"miCorreo\" name=\"miCorreo\" id=\"validInput2\" type=\"email\" placeholder=\"Correo electronico\" size=\"35\" >\n\n                          </div>\n\n\n                  <div class=\"form-group\">\n                      <label>Clave de tu profesor</label>\n                      <input type=\"text\"  [(ngModel)]=\"miPassword\" name=\"miPassword\" placeholder=\"Clave de tu profesor\" size=\"35\">\n                  </div>\n\n\n\n              </section>\n\n       </form>\n      </clr-wizard-page>\n      <clr-wizard-page>\n          <ng-template clrPageTitle>Confirmación</ng-template>\n\n          Al Oprimir el botón  de \"finalizar\" se efectuará el registro\n\n\n      </clr-wizard-page>\n  </clr-wizard>\n"

/***/ }),

/***/ "../../../../../src/app/registroalumno/registroalumno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroalumnoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clave_service__ = __webpack_require__("../../../../../src/app/clave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estatus__ = __webpack_require__("../../../../../src/app/estatus.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroalumnoComponent = (function () {
    function RegistroalumnoComponent(router, servicioClave) {
        this.router = router;
        this.servicioClave = servicioClave;
        this.loadingFlag = false;
        this.errorFlag = false;
        this.modelo = {
            nombre: '',
            paterno: '',
            materno: ''
        };
        this.lgOpen = true;
        this.perfil = 'Alumno';
        this.noEsProfesor = true;
        this.oculta = true;
        this.oculta = true;
    }
    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    RegistroalumnoComponent.prototype.doCancel = function () {
        this.wizardLarge.close();
    };
    RegistroalumnoComponent.prototype.onCommit = function () {
        var _this = this;
        var value = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;
        value.miClave;
        this.obtenerClave();
        setTimeout(function () {
            if (_this.estatus.success) {
                _this.wizardLarge.forceNext();
                console.log('Encontrado!!');
            }
            else {
                _this.errorFlag = true;
            }
            _this.loadingFlag = false;
        }, 1000);
    };
    RegistroalumnoComponent.prototype.ngOnInit = function () {
        this.estatus = new __WEBPACK_IMPORTED_MODULE_4__estatus__["a" /* Estatus */](false, "");
    };
    RegistroalumnoComponent.prototype.obtenerClave = function () {
        this.getClave();
        console.log('Hola' + this.estatus.success);
    };
    RegistroalumnoComponent.prototype.navegarInicio = function () {
        this.router.navigate(["/inicio"], { skipLocationChange: true });
    };
    RegistroalumnoComponent.prototype.verPerfil = function () {
        console.log('hola');
        if (this.perfil === 'Profesor') {
            console.log('Eres profesor');
            this.noEsProfesor = false;
        }
        else {
            console.log('No eres profesor');
            this.noEsProfesor = true;
        }
    };
    RegistroalumnoComponent.prototype.getClave = function () {
        var _this = this;
        this.servicioClave.getClave(this.miClave)
            .subscribe(function (estatus) { return _this.estatus = estatus; });
    };
    RegistroalumnoComponent.prototype.hacerAlgo = function () {
        console.log('asasasas');
        // this.=this.estatus.success;
    };
    RegistroalumnoComponent.prototype.estaInvalidada = function () {
        this.oculta = this.estatus.success;
        return !this.estatus.success;
    };
    RegistroalumnoComponent.prototype.recupararContrasena = function () {
        console.log("Contraseña recuperada");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("wizardlg"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_clarity_angular__["b" /* Wizard */])
    ], RegistroalumnoComponent.prototype, "wizardLarge", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myForm"),
        __metadata("design:type", Object)
    ], RegistroalumnoComponent.prototype, "formData", void 0);
    RegistroalumnoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registroalumno',
            template: __webpack_require__("../../../../../src/app/registroalumno/registroalumno.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registroalumno/registroalumno.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__clave_service__["a" /* ClaveService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__clave_service__["a" /* ClaveService */]])
    ], RegistroalumnoComponent);
    return RegistroalumnoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registroprofesor/registroprofesor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select{\n    overflow:auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registroprofesor/registroprofesor.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-wizard #wizardlg [(clrWizardOpen)]=\"lgOpen\" clrWizardSize=\"lg\" [clrWizardClosable]=\"false\">\n\n      <clr-wizard-title>Registro Profesor</clr-wizard-title>\n\n      <clr-wizard-button [type]=\"'cancel'\" (click)=\"navegarInicio()\">Cancelar</clr-wizard-button>\n      <clr-wizard-button [type]=\"'previous'\">Atrás</clr-wizard-button>\n      <clr-wizard-button [type]=\"'next'\" (click)=\"obtenerClaveProfesor()\"  >Siguiente</clr-wizard-button>\n      <clr-wizard-button [type]=\"'finish'\" (click)=\"registrarProfesor()\">Finalizar</clr-wizard-button>\n\n\n\n      <clr-wizard-page\n      [clrWizardPageNextDisabled]=\"nombre.pristine || !myForm.valid\"\n          clrWizardPagePreventDefault=\"true\"\n      (clrWizardPageOnCommit)=\"onCommit()\"\n      (clrWizardPageOnCancel)=\"doCancel()\">\n          <ng-template clrPageTitle>Datos generales</ng-template>\n          <div class=\"spinner\" *ngIf=\"loadingFlag\">\n              Loading...\n          </div>\n          <clr-alert [clrAlertType]=\"'alert-info'\" [clrAlertClosable]=\"false\">\n                  <div class=\"alert-item\">\n                      Es importante que tengas a la mano tu clave de profesor\n                  </div>\n              </clr-alert>\n\n\n         <form #myForm=\"ngForm\" [class.hide]=\"loadingFlag\">\n              <section class=\"form-block\">\n\n                      <div class=\"form-group\">\n                              <label>Nombre</label>\n                              <label for=\"nombreInput\" aria-haspopup=\"true\" role=\"tooltip\"\n                              [class.invalid]=\"nombre.touched && !nombre.valid\"\n                              class=\"tooltip tooltip-validation tooltip-md tooltip-bottom-left\">\n                              <input type=\"text\" placeholder=\"Nombre\" id=\"nombreInput\" required  [(ngModel)]=\"modelo.nombre\" name=\"nombre\" #nombre=\"ngModel\"   size=\"35\">\n                              <span class=\"tooltip-content\">Este campo es obligatorio!</span>\n                              </label>\n                          </div>\n                          <div class=\"form-group\">\n                              <label>Apellido Paterno</label>\n                              <input type=\"text\" placeholder=\"Apellido Paterno\" [(ngModel)]=\"modelo.paterno\" name=\"paterno\" size=\"35\">\n                          </div>\n                          <div  class=\"form-group\">\n                                  <label>Apellido Materno</label>\n                              <input type=\"text\"   placeholder=\"Apellido Materno\"  [(ngModel)]=\"modelo.materno\" name=\"materno\" size=\"35\">\n                          </div>\n\n\n                              <clr-alert *ngIf=\"errorFlag\" [clrAlertType]=\"'alert-danger'\">\n                                  <div class=\"alert-item\">\n                                      {{estatus.mensaje}}\n                                  </div>\n                              </clr-alert>\n\n                  <div class=\"form-group\">\n\n                          <label for=\"mi-clave\">Clave del profesor</label>\n\n                          <input id=\"mi-clave\"  [(ngModel)]=\"modelo.clave\" name=\"modelo.clave\"  type=\"text\" placeholder=\"Clave del profesor\" size=\"35\" >\n\n                      </div>\n\n\n\n\n\n          </section>\n\n   </form>\n      </clr-wizard-page>\n\n      <clr-wizard-page>\n          <ng-template clrPageTitle>Perfil</ng-template>\n          <form>\n\n          <section class=\"form-block\">\n\n            <div class=\"form-group\">\n              <label for=\"\">Celular</label>\n                <input type=\"text\"   placeholder=\"Número de celular\"  [(ngModel)]=\"modelo.celular\" name=\"celular\" size=\"35\">\n            </div>\n\n          <div class=\"form-group\">\n              <label>Selecciona el turno</label>\n              <div class=\"auth-source select\">\n                  <select id=\"turno\" name=\"turno\"  [(ngModel)]=\"modelo.turno\" name=\"miTurno\">\n                  <option>Matutino</option>\n                      <option>Vespertino</option>\n                      <option>Mixto</option>\n              </select>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Sistema al que perteneces</label>\n              <div class=\"auth-source select\">\n                  <select id=\"sistema\" name=\"sistema\"  [(ngModel)]=\"modelo.sistema.nombre\" name=\"sistema\">\n                  <option>BACHILLERES</option>\n                  <option>CONALEP</option>\n                  <option>CETIS</option>\n                  <option>CBETIS</option>\n                  <option>CECYT</option>\n                  <option>COBAEM</option>\n                  <option>UNAM</option>\n              </select>\n              </div>\n          </div>\n        <div class=\"form-group\">\n            <label for=\"selects_1\">Primero selecciona el campo disciplinario</label>\n            <div class=\"select\">\n                <select id=\"selects_1\" name=\"campo\" [(ngModel)]=\"campo\" (ngModelChange)=\"ajustarMaterias($event)\"  >\n                    <option>Matemáticas</option>\n                    <option>Comunicación</option>\n                    <option>Informática</option>\n                    <option>Desarrollo Humano</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"selects_1\">Selecciona una materia</label>\n              <span>\n              <div class=\"select\">\n                  <select  id=\"selects_1\" name=\"materitas\" [size]=\"materitas.length\"  [(ngModel)]=\"materiaSeleccionada\"  >\n                     <option [selected]= \"disabled\" hidden style='display: none' value=''>Selecciona la materia</option>\n                      <option *ngFor=\"let materita of materitas\" [ngValue]=\"materita\" >{{materita.nombre}}</option>\n\n                  </select>\n\n              </div>\n\n            </span>\n            </div>\n          <div class=\"form-group\">\n        <label for=\"\">Agregar materia y eliminar</label>\n         <button (click)=\"agregarMateria()\">Agregar</button>\n         <button    (click)=\"eliminarMateria()\">Eliminar materia</button>\n            </div>\n       <div class=\"form-group\">\n   <label for=\"\">Materias agregadas</label>\n           <div class=\"select\">\n               <select id=\"selects_5\" [size]=\"materiasAgregadas.length\"  name=\"materiasSeleccionadas\" [(ngModel)]=\"materiaSeleccionada\" >\n                   <option *ngFor=\"let materia of materiasAgregadas\">{{materia.nombre}}</option>\n\n               </select>\n           </div>\n         </div>\n\n\n\n         <!-- termina form-group del perfim de las materias -->\n          </section>\n          </form>\n\n\n               <!-- Empieza perfil de las materias -->\n        <!--\n          <div class=\"form-group\">\n\n            <label>Selecciona los campos disciplinarios</label>\n            <clr-datagrid [(clrDgSelected)]=\"selected\">\n                <clr-dg-action-bar>\n                    <div class=\"btn-group btn-sm\" role=\"group\" aria-label=\"Available Actions\" *ngIf=\"selected.length > 0\">\n                    Materias seleccionadas: <span class=\"label label-info\" *ngFor=\"let materia of selected\">{{materia.nombre}}</span>\n\n\n                    </div>\n                </clr-dg-action-bar>\n                <clr-dg-column>Campo Disciplinario</clr-dg-column>\n                <clr-dg-column>Nombre de la materia</clr-dg-column>\n\n\n                <clr-dg-row *clrDgItems=\"let materia of materias\" [clrDgItem]=\"materia\">\n\n                    <clr-dg-cell>{{materia.campo}}</clr-dg-cell>\n                    <clr-dg-cell>{{materia.nombre}}</clr-dg-cell>\n\n                </clr-dg-row>\n                <clr-dg-footer>\n                    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n                    de {{pagination.totalItems}} materias\n                    <clr-dg-pagination #pagination [clrDgPageSize]=\"5\"></clr-dg-pagination>\n                </clr-dg-footer>\n\n            </clr-datagrid>\n            <br><br>\n\n\n        </div>\n-->\n      </clr-wizard-page>\n\n      <clr-wizard-page\n        [clrWizardPageNextDisabled]=\"miEmail.pristine || miPas.pristine || !myFormEmail.valid || !myFormContrasena.valid\"\n          clrWizardPagePreventDefault=\"true\"\n  (clrWizardPageOnCommit)=\"onCommitEmail() && onCommitContrasena()\"\n  (clrWizardPagePrevious)=\"regresar()\"\n  (clrWizardPageOnCancel)=\"doCancelContrasena()\">\n          <ng-template clrPageTitle>Autenticación</ng-template>\n          <div class=\"spinner\" *ngIf=\"cargandoFlagContrasena\">\n              Loading...\n          </div>\n          <div class=\"spinner\" *ngIf=\"cargandoFlagEmail\">\n              Loading...\n          </div>\n          <clr-alert [clrAlertType]=\"'alert-info'\" [clrAlertClosable]=\"false\">\n                  <div class=\"alert-item\">\n                      La contraseña debe contener un mínimo de 8 caracteres y un máximo de 12, debe contener números y letras, y es\n                  sensible a las mayúsculas.\n                  </div>\n              </clr-alert>\n          <form class=\"login\"  #myFormEmail=\"ngForm\"  [class.hide] = \"cargandoFlagEmail\"   #myFormContrasena=\"ngForm\" [class.hide]=\"cargandoFlagContrasena\"   >\n              <section class=\"form-block\">\n\n                      <div class=\"form-group\">\n\n                              <label for=\"miCorreoInput\" aria-haspopup=\"true\" role=\"tooltip\"\n                              [class.invalid]=\"miEmail.touched && !miEmail.valid\"\n                              class=\"tooltip tooltip-validation tooltip-md tooltip-bottom-left\">\n                              Correo electrónico</label>\n\n                              <input  [(ngModel)]=\"miCorreo\"   name=\"miCorreo\" id=\"validInput2\" required type=\"email\" placeholder=\"Correo electronico\"  #miEmail=\"ngModel\"  size=\"35\" >\n                                   {{errorFlagEmail}}\n                          </div>\n                          <clr-alert *ngIf=\"errorFlagEmail\" [clrAlertType]=\"'alert-danger'\">\n                              <div class=\"alert-item\">\n                                {{mensajeErrorEmail}}\n                              </div>\n                          </clr-alert>\n\n\n                  <div class=\"form-group\">\n                      <label>Contraseña</label>\n\n                      <label for=\"miPasswordInput\" aria-haspopup=\"true\" role=\"tooltip\"\n                      [class.invalid]=\"miPas.touched && !miPas.valid\"\n                      class=\"tooltip tooltip-validation tooltip-md tooltip-bottom-left\">\n                      <input type=\"password\" placeholder=\"Contraseña\" id=\"miPasInput\" required  [(ngModel)]=\"miPassword\" name=\"miPassword\" #miPas=\"ngModel\"   size=\"35\">\n                      <span class=\"tooltip-content\">El password es requerido!</span>\n                      </label>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Repetir Contraseña</label>\n                    <input type=\"password\"  [(ngModel)]=\"miPassword2\" name=\"miPassword2\" placeholder=\"Introduce nuevamente el password\" size=\"35\">\n                  </div>\n                  <clr-alert *ngIf=\"errorFlagContrasena\" [clrAlertType]=\"'alert-danger'\">\n                      <div class=\"alert-item\">\n                        {{mensajeErrorContrasena}}\n                      </div>\n                  </clr-alert>\n\n\n              </section>\n\n       </form>\n      </clr-wizard-page>\n\n\n\n      <clr-wizard-page>\n          <ng-template clrPageTitle>Confirmación</ng-template>\n          <form class=\"compact\">\n\n          <label>Al oprimir  Finalizar se guardarán los siguientes datos:</label>\n          <section class=\"form-block\">\n          <div class=\"form-group\">\n            <label>Nombre:</label>\n            <span>{{modelo.nombre}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label>A. Paterno:</label>\n            <span>{{modelo.paterno}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label>A. Materno:</label>\n            <span>{{modelo.materno}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label>Clave:</label>\n            <span>{{modelo.clave}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label>Celular:</label>\n            <span>{{modelo.celular}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label>Turno:</label>\n            <span>{{modelo.turno}}</span>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Sistema:</label>\n            <span>{{modelo.sistema.nombre}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label>Materias:</label>\n            <span class=\"label label-info\" *ngFor=\"let materia of materiasAgregadas\">{{materia.nombre}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label>E-mail:</label>\n            <span>{{modelo.email}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label>Password:</label>\n            <span>{{modelo.password}}</span>\n          </div>\n        </section>\n      </form>\n\n\n\n\n      </clr-wizard-page>\n  </clr-wizard>\n"

/***/ }),

/***/ "../../../../../src/app/registroprofesor/registroprofesor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroprofesorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__claveprofesor_service__ = __webpack_require__("../../../../../src/app/claveprofesor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estatus__ = __webpack_require__("../../../../../src/app/estatus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materia__ = __webpack_require__("../../../../../src/app/materia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profesor_service__ = __webpack_require__("../../../../../src/app/profesor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistroprofesorComponent = (function () {
    function RegistroprofesorComponent(router, servicioClave, servicioProfesor) {
        this.router = router;
        this.servicioClave = servicioClave;
        this.servicioProfesor = servicioProfesor;
        this.lgOpen = true;
        this.perfil = 'Alumno';
        this.noEsProfesor = true;
        this.oculta = true;
        this.campo = '';
        this.loadingFlag = false;
        this.errorFlag = false;
        this.cargandoFlagContrasena = false;
        this.cargandoFlagEmail = false;
        this.errorFlagContrasena = false;
        this.errorFlagEmail = false;
        /*
                modelo={
                  nombre:'',
                  paterno:'',
                  materno:'',
                  sistema:''
                }
        
                */
        this.sistema = {
            nombre: ''
        };
        //  materias:Array<Materia>=[];
        this.materias = [];
        this.materitas = [];
        this.materiaSeleccionada = { campo: '', nombre: '' };
        this.modeloMateria = { campo: 'x', nombre: 'x' };
        this.modelo = {
            nombre: '',
            clave: '',
            celular: '',
            paterno: '',
            password: '',
            registrado: '',
            email: '',
            materno: '',
            materias: [],
            turno: '',
            sistema: this.sistema
        };
        //Los siguientes atributos y metodos son  necesarios para las materias
        this.toAdd = [];
        this.toDelete = [];
        this._selected = [];
        this.materiasAgregadas = [];
        this.oculta = true;
        //materias para el perfil
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Matemáticas', 'Matemáticas 1'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Matemáticas', 'Matemáticas 2'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Matemáticas', 'Matemáticas 3'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Matemáticas', 'Matemáticas 4'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Matemáticas', 'Matemáticas 5'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Matemáticas', 'Matemáticas 6'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Comunicación', 'Lenguaje y comunicación 1'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Comunicación', 'Lenguaje y comunicación 2'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Comunicación', 'Lenguaje y literatura 1'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Comunicación', 'Lenguaje y literatura 2'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Comunicación', 'Taller de análisis de los textos 1'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Comunicación', 'Taller de análisis de los textos 2'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Informática', 'Informática 1'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Informática', 'Informática 2'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Informática', 'Informática 3'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Informática', 'Informática 4'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Desarrollo Humano', 'Orientación educativa'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Desarrollo Humano', 'Orientación vocacional'));
        this.materias.push(new __WEBPACK_IMPORTED_MODULE_5__materia__["a" /* Materia */]('Desarrollo Humano', 'Actividades deportivas'));
    }
    Object.defineProperty(RegistroprofesorComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selection) {
            this._selected = selection;
            // this.modelo.materias.push(new Materia('mate','mate'));
            this.modelo.materias = selection;
            this.cleanUp();
        },
        enumerable: true,
        configurable: true
    });
    RegistroprofesorComponent.prototype.cleanUp = function () {
        this.toAdd = [];
        this.toDelete = [];
        this.toEdit = null;
    };
    RegistroprofesorComponent.prototype.onDelete = function (materia) {
        this.cleanUp();
        if (materia) {
            this.toDelete = [materia];
        }
        else {
            this.toDelete = this.selected.slice();
        }
    };
    RegistroprofesorComponent.prototype.onEdit = function (materia) {
        this.cleanUp();
        if (materia) {
            this.toEdit = materia;
        }
        else {
            this.toEdit = this.selected[0];
            console.log(this.selected[0]);
        }
    };
    RegistroprofesorComponent.prototype.onAdd = function () {
        this.cleanUp();
        this.toAdd = this.selected.slice();
        console.log(this.toAdd);
    };
    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    RegistroprofesorComponent.prototype.doCancel = function () {
        this.wizardLarge.close();
    };
    RegistroprofesorComponent.prototype.doCancelContrasena = function () {
        this.wizardLarge.close();
    };
    RegistroprofesorComponent.prototype.regresar = function () {
        this.wizardLarge.previous();
    };
    RegistroprofesorComponent.prototype.onCommitContrasena = function () {
        var _this = this;
        var value = this.formDataContrasena.value;
        var value2 = this.formDataContrasena2.value;
        this.cargandoFlagContrasena = true;
        this.errorFlagContrasena = false;
        // aqui value lo enlazamos a una variable del formulario a validar asincronimcamente
        value.miPassword;
        value2.miPassword2;
        //Hacemos el envio asincronico con la informacion anterior
        setTimeout(function () {
            if (_this.miPassword == _this.miPassword2) {
                _this.wizardLarge.forceNext();
                console.log('Contraseña aceptada!');
                _this.modelo.password = _this.miPassword;
            }
            else {
                _this.errorFlagContrasena = true;
                _this.mensajeErrorContrasena = 'Las contraseñas no coinciden';
                console.log("error de correo!!" + _this.miPassword + " el otro " + _this.miPassword2);
            }
            _this.cargandoFlagContrasena = false;
        }, 1000);
    };
    RegistroprofesorComponent.prototype.onCommitEmail = function () {
        var _this = this;
        var value = this.formDataEmail.value;
        this.cargandoFlagEmail = true;
        this.errorFlagEmail = false;
        value.miEmail;
        setTimeout(function () {
            if (_this.miCorreo.indexOf("@") !== -1) {
                _this.wizardLarge.forceNext();
                console.log("Tiene formato de email");
                _this.modelo.email = _this.miCorreo;
            }
            else {
                console.log("No tiene formato de email");
                _this.errorFlagEmail = true;
                _this.mensajeErrorEmail = "ESte correo no es válido";
            }
            _this.cargandoFlagEmail = false;
        }, 1000);
    };
    RegistroprofesorComponent.prototype.onCommit = function () {
        var _this = this;
        var value = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;
        value.miClave;
        this.obtenerClaveProfesor();
        setTimeout(function () {
            if (_this.estatus.success) {
                _this.wizardLarge.forceNext();
                //      this.modelo.clave=miClave;
                console.log('Encontrado!!');
            }
            else {
                _this.errorFlag = true;
            }
            _this.loadingFlag = false;
        }, 1000);
    };
    RegistroprofesorComponent.prototype.ngOnInit = function () {
        this.estatus = new __WEBPACK_IMPORTED_MODULE_4__estatus__["a" /* Estatus */](false, "");
    };
    //Aqui se transmite el mensaje del estatus del registro
    RegistroprofesorComponent.prototype.obtenerClaveProfesor = function () {
        this.getClaveProfesor();
        console.log('Estatus ' + this.estatus.success + 'Mensaje ' + this.estatus.mensaje);
    };
    RegistroprofesorComponent.prototype.navegarInicio = function () {
        this.router.navigate(["/inicio"], { skipLocationChange: true });
    };
    RegistroprofesorComponent.prototype.verPerfil = function () {
        console.log('hola');
        if (this.perfil === 'Profesor') {
            console.log('Eres profesor');
            this.noEsProfesor = false;
        }
        else {
            console.log('No eres profesor');
            this.noEsProfesor = true;
        }
    };
    RegistroprofesorComponent.prototype.getClaveProfesor = function () {
        var _this = this;
        this.servicioClave.getClaveProfesor(this.modelo.clave)
            .subscribe(function (estatus) { return _this.estatus = estatus; });
    };
    RegistroprofesorComponent.prototype.registrarProfesor = function () {
        var _this = this;
        this.modelo.materias = this.materiasAgregadas;
        this.servicioProfesor.registrarProfesor(this.modelo)
            .subscribe(function (estatus) { return _this.estatus = estatus; });
        this.router.navigate(["/inicio"], { skipLocationChange: true });
        console.log(this.modelo);
        // this.modelo.materias=this._selected;
    };
    RegistroprofesorComponent.prototype.hacerAlgo = function () {
        console.log('asasasas');
        // this.=this.estatus.success;
    };
    RegistroprofesorComponent.prototype.estaInvalidada = function () {
        this.oculta = this.estatus.success;
        return !this.estatus.success;
    };
    RegistroprofesorComponent.prototype.ajustarMaterias = function (campito) {
        console.log("Las materias:" + campito);
        this.materitas = [];
        var valor = 0;
        for (var i = 0; i < this.materias.length; i++) {
            if (this.materias[i].campo == campito) {
                valor++;
                this.materitas.push(this.materias[i]);
            }
        }
        console.log("valores " + valor);
    };
    RegistroprofesorComponent.prototype.agregarMateria = function () {
        console.log(this.materiaSeleccionada);
        console.log(this.materiaSeleccionada.nombre);
        this.materiasAgregadas.push(this.materiaSeleccionada);
        this.materitas.splice(this.materiasAgregadas.indexOf(this.materiaSeleccionada), 1);
        console.log("agregadas:" + this.materiasAgregadas.length);
        console.log(this.materiasAgregadas);
    };
    RegistroprofesorComponent.prototype.eliminarMateria = function () {
        console.log(this.materiaSeleccionada);
        this.materiasAgregadas.splice(this.materiasAgregadas.indexOf(this.materiaSeleccionada), 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("wizardlg"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_clarity_angular__["b" /* Wizard */])
    ], RegistroprofesorComponent.prototype, "wizardLarge", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myForm"),
        __metadata("design:type", Object)
    ], RegistroprofesorComponent.prototype, "formData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myFormContrasena"),
        __metadata("design:type", Object)
    ], RegistroprofesorComponent.prototype, "formDataContrasena", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myFormContrasena"),
        __metadata("design:type", Object)
    ], RegistroprofesorComponent.prototype, "formDataContrasena2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myFormEmail"),
        __metadata("design:type", Object)
    ], RegistroprofesorComponent.prototype, "formDataEmail", void 0);
    RegistroprofesorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registroprofesor',
            template: __webpack_require__("../../../../../src/app/registroprofesor/registroprofesor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registroprofesor/registroprofesor.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__claveprofesor_service__["a" /* ClaveprofesorService */], __WEBPACK_IMPORTED_MODULE_6__profesor_service__["a" /* ProfesorService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__claveprofesor_service__["a" /* ClaveprofesorService */],
            __WEBPACK_IMPORTED_MODULE_6__profesor_service__["a" /* ProfesorService */]])
    ], RegistroprofesorComponent);
    return RegistroprofesorComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map