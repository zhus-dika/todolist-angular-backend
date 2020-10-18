(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dinara/WebstormProjects/todolist-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegisterComponent_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field must be email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_7_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_7_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("email").errors["required"] && ctx_r0.registerForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("email").errors["email"] && ctx_r0.registerForm.get("email").touched);
} }
function RegisterComponent_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The password must contain at least 4 chars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_12_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_12_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("password").errors["required"] && ctx_r1.registerForm.get("password").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("password").errors["minlength"] && ctx_r1.registerForm.get("password").touched);
} }
function RegisterComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(fb, auth, router, route) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.registerForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            repeatPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]]
        });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    ngOnInit() {
    }
    register() {
        this.registerForm.disable();
        const user = {
            username: this.registerForm.get('email').value,
            password: this.registerForm.get('password').value
        };
        this.aSub = this.auth.register(user).subscribe(() => {
            this.router.navigate(['/login'], {
                queryParams: {
                    registered: true
                }
            });
        }, error => {
            console.warn(error);
            this.registerForm.enable();
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 20, vars: 5, consts: [[1, "login-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], ["for", "email", 1, "label"], ["id", "email", "formControlName", "email", "placeholder", "Your email"], ["class", "helper-text", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password"], ["for", "repeatPassword"], ["type", "password", "id", "repeatPassword", "formControlName", "repeatPassword"], ["type", "submit", 3, "disabled"], [1, "helper-text"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegisterComponent_div_7_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Repeat password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterComponent_span_17_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").invalid && ctx.registerForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").invalid && ctx.registerForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("repeatPassword").invalid && ctx.registerForm.get("repeatPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid || ctx.registerForm.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".helper-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  display: flex;\n  justify-content: flex-end;\n}\n.login-form[_ngcontent-%COMP%] {\n  width: 30%;\n  border: 2px solid grey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto;\n  margin-top: 20px;\n  font-size: 18px;\n  padding: 10px;\n}\n.form-row[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  display: flex;\n  justify-content: space-between;\n}\ninput[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 20px;\n}\nbutton[_ngcontent-%COMP%] {\n  height: 2rem;\n  background: cadetblue;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVscGVyLXRleHQge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubG9naW4tZm9ybSB7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mb3JtLXJvdyB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pbnB1dCB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMjBweDtcbn1cbmJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuY5":
/*!**********************************************************!*\
  !*** ./src/app/todoitem-list/todoitem-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TodoitemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoitemListComponent", function() { return TodoitemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/todoitem.service */ "Qxtv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todoitem_todoitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todoitem/todoitem.component */ "XNTK");







function TodoitemListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoitemListComponent_div_14_app_todoitem_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todoitem", 11);
} if (rf & 2) {
    const todoitem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todoitem", todoitem_r3);
} }
function TodoitemListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoitemListComponent_div_14_app_todoitem_1_Template, 1, 1, "app-todoitem", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredTodoitems);
} }
const _c0 = function () { return ["/new"]; };
class TodoitemListComponent {
    constructor(todoitemService) {
        this.todoitemService = todoitemService;
        this.selectedStatus = 'all';
    }
    ngOnInit() {
        this.todoitemService.getAll().subscribe((res) => {
            this.filteredTodoitems = res;
            this.todoitems = res;
            console.log(this.filteredTodoitems);
        }, error => {
            console.warn('error');
        });
    }
    changeFilter() {
        this.filteredTodoitems = this.todoitems.filter(ele => ele.status === this.selectedStatus || this.selectedStatus === 'all');
    }
}
TodoitemListComponent.ɵfac = function TodoitemListComponent_Factory(t) { return new (t || TodoitemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_1__["TodoitemService"])); };
TodoitemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoitemListComponent, selectors: [["app-todoitem-list"]], decls: 15, vars: 5, consts: [[1, "container-todoitemlist"], [1, "todolist-row"], [1, "filter-select", 3, "ngModel", "change", "ngModelChange"], ["value", "all"], ["value", "created"], ["value", "completed"], [1, "new-item", 3, "routerLink"], [4, "ngIf"], ["class", "todoitemlist", 4, "ngIf"], [1, "todoitemlist"], [3, "todoitem", 4, "ngFor", "ngForOf"], [3, "todoitem"]], template: function TodoitemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Todoitems ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoitemListComponent_Template_select_change_4_listener() { return ctx.changeFilter(); })("ngModelChange", function TodoitemListComponent_Template_select_ngModelChange_4_listener($event) { return ctx.selectedStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TodoitemListComponent_div_13_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TodoitemListComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredTodoitems.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredTodoitems.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _todoitem_todoitem_component__WEBPACK_IMPORTED_MODULE_5__["TodoitemComponent"]], styles: [".container-todoitemlist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.filter-select[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 20px;\n  width: 30%;\n}\n.todolist-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.new-item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: cadetblue;\n  color: white;\n  width: 5%;\n  text-align: center;\n  padding: 10px;\n  margin-bottom: 25px;\n}\n.todoitemlist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid darkgrey;\n  border-radius: 2px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb2l0ZW0tbGlzdC90b2RvaXRlbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RvZG9pdGVtLWxpc3QvdG9kb2l0ZW0tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci10b2RvaXRlbWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZpbHRlci1zZWxlY3Qge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAzMCU7XG59XG4udG9kb2xpc3Qtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm5ldy1pdGVtIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4udG9kb2l0ZW1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoitemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todoitem-list',
                templateUrl: './todoitem-list.component.html',
                styleUrls: ['./todoitem-list.component.css']
            }]
    }], function () { return [{ type: _shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_1__["TodoitemService"] }]; }, null); })();


/***/ }),

/***/ "EVyl":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "EoNF":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/main-layout/main-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 1, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthService {
    constructor(http) {
        this.http = http;
        this.token = null;
    }
    // tslint:disable-next-line:typedef
    login(user) {
        return this.http.post('http://localhost:8077/api/auth/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((token) => {
            // @ts-ignore
            localStorage.setItem('auth-token', token.token);
            this.setToken(token);
        }));
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    isAuthenticated() {
        return !!this.token;
    }
    logout() {
        this.setToken(null);
        localStorage.removeItem('auth-token');
    }
    register(user) {
        return this.http.post('http://localhost:8077/api/auth/register', user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Qxtv":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/todoitem.service.ts ***!
  \*****************************************************/
/*! exports provided: TodoitemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoitemService", function() { return TodoitemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TodoitemService {
    constructor(http) {
        this.http = http;
    }
    // tslint:disable-next-line:typedef
    getAll() {
        return this.http.get(`http://localhost:8077/api/todoitem/all`);
    }
    getOne(id) {
        return this.http.get(`http://localhost:8077/api/todoitem/${id}`);
    }
    update(todoitem) {
        return this.http.post(`http://localhost:8077/api/todoitem/update`, todoitem);
    }
    create(content) {
        return this.http.post(`http://localhost:8077/api/todoitem/create`, content);
    }
    delete(id) {
        return this.http.delete(`http://localhost:8077/api/todoitem/${id}`);
    }
}
TodoitemService.ɵfac = function TodoitemService_Factory(t) { return new (t || TodoitemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TodoitemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoitemService, factory: TodoitemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoitemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Ssqb":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2F1dGgtbGF5b3V0L2F1dGgtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-top/header-top.component */ "tzov");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'todolist-angular';
    }
    ngOnInit() {
        const potentialToken = localStorage.getItem('auth-token');
        if (potentialToken !== null) {
            this.auth.setToken(potentialToken);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_2__["HeaderTopComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%]{\n  margin: 0 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1hcmdpbjogMCA0JTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "XNTK":
/*!************************************************!*\
  !*** ./src/app/todoitem/todoitem.component.ts ***!
  \************************************************/
/*! exports provided: TodoitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoitemComponent", function() { return TodoitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/todoitem.service */ "Qxtv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/todoitem", a1]; };
class TodoitemComponent {
    constructor(todoitemService) {
        this.todoitemService = todoitemService;
    }
    ngOnInit() {
    }
    remove() {
        this.todoitemService.delete(this.todoitem.id).subscribe((res) => {
            console.log('Item deleted');
            location.reload();
        }, error => {
            console.warn('error');
        });
    }
}
TodoitemComponent.ɵfac = function TodoitemComponent_Factory(t) { return new (t || TodoitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_1__["TodoitemService"])); };
TodoitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoitemComponent, selectors: [["app-todoitem"]], inputs: { todoitem: "todoitem" }, decls: 15, vars: 7, consts: [[1, "todoitem-container"], [1, "todoitem-div"], [1, "buttons"], [1, "view-button", 3, "routerLink"], [1, "delete-button", 3, "click"]], template: function TodoitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoitemComponent_Template_button_click_13_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todoitem.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todoitem.created);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todoitem.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todoitem.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.todoitem.id));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".todoitem-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgray;\n  padding: 1%;\n  align-items: center;\n}\n.todoitem-div[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.view-button[_ngcontent-%COMP%] {\n  padding: 3%;\n  background: darkseagreen;\n  margin-right: 10px;\n  border-radius: 2px;\n  text-decoration: none;\n  color: white;\n}\n.delete-button[_ngcontent-%COMP%] {\n  padding: 3%;\n  background: coral;\n  margin-right: 10px;\n  border-radius: 2px;\n  color: white;\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb2l0ZW0vdG9kb2l0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RvZG9pdGVtL3RvZG9pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kb2l0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XG4gIHBhZGRpbmc6IDElO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvZG9pdGVtLWRpdiB7XG4gIHdpZHRoOiAyMCU7XG59XG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4udmlldy1idXR0b24ge1xuICBwYWRkaW5nOiAzJTtcbiAgYmFja2dyb3VuZDogZGFya3NlYWdyZWVuO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgcGFkZGluZzogMyU7XG4gIGJhY2tncm91bmQ6IGNvcmFsO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todoitem',
                templateUrl: './todoitem.component.html',
                styleUrls: ['./todoitem.component.css']
            }]
    }], function () { return [{ type: _shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_1__["TodoitemService"] }]; }, { todoitem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-top/header-top.component */ "tzov");
/* harmony import */ var _todoitem_list_todoitem_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoitem-list/todoitem-list.component */ "BuY5");
/* harmony import */ var _todoitem_todoitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoitem/todoitem.component */ "XNTK");
/* harmony import */ var _todoitem_details_todoitem_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todoitem-details/todoitem-details.component */ "t6pS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _new_todoitem_new_todoitem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-todoitem/new-todoitem.component */ "umJH");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "Ssqb");
/* harmony import */ var _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/layouts/main-layout/main-layout.component */ "EoNF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/classes/token.interceptor */ "rGb8");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
            multi: true,
            useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_3__["HeaderTopComponent"],
        _todoitem_todoitem_component__WEBPACK_IMPORTED_MODULE_5__["TodoitemComponent"],
        _todoitem_list_todoitem_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoitemListComponent"],
        _todoitem_details_todoitem_details_component__WEBPACK_IMPORTED_MODULE_6__["TodoitemDetailsComponent"],
        _new_todoitem_new_todoitem_component__WEBPACK_IMPORTED_MODULE_8__["NewTodoitemComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
        _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthLayoutComponent"],
        _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_14__["MainLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_3__["HeaderTopComponent"],
                    _todoitem_todoitem_component__WEBPACK_IMPORTED_MODULE_5__["TodoitemComponent"],
                    _todoitem_list_todoitem_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoitemListComponent"],
                    _todoitem_details_todoitem_details_component__WEBPACK_IMPORTED_MODULE_6__["TodoitemDetailsComponent"],
                    _new_todoitem_new_todoitem_component__WEBPACK_IMPORTED_MODULE_8__["NewTodoitemComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                    _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthLayoutComponent"],
                    _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_14__["MainLayoutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                        multi: true,
                        useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rGb8":
/*!*****************************************************!*\
  !*** ./src/app/shared/classes/token.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");



class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: this.auth.getToken()
                }
            });
        }
        return next.handle(req);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "t6pS":
/*!****************************************************************!*\
  !*** ./src/app/todoitem-details/todoitem-details.component.ts ***!
  \****************************************************************/
/*! exports provided: TodoitemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoitemDetailsComponent", function() { return TodoitemDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/todoitem.service */ "Qxtv");







const _c0 = function () { return ["/list"]; };
class TodoitemDetailsComponent {
    constructor(route, fb, location, todoitemService) {
        this.route = route;
        this.fb = fb;
        this.location = location;
        this.todoitemService = todoitemService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = parseInt(params.get('todoitemId'), 10);
            this.todoitemService.getOne(id).subscribe((res) => {
                this.todoitem = res;
                console.log(this.todoitem);
                this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.todoitem.content, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.todoitem.status)
                });
            }, error => {
                console.warn('error');
            });
        });
    }
    changeStatus(status) {
        this.todoitem.status = status;
    }
    saveChanges() {
        const updatedTodoitem = {
            id: this.todoitem.id,
            content: this.detailsForm.get('content').value,
            status: this.detailsForm.get('status').value,
            created: this.todoitem.created
        };
        this.todoitemService.update(updatedTodoitem).subscribe((res) => {
            this.todoitem = res;
        }, error => {
            console.warn('error');
        });
    }
}
TodoitemDetailsComponent.ɵfac = function TodoitemDetailsComponent_Factory(t) { return new (t || TodoitemDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_4__["TodoitemService"])); };
TodoitemDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoitemDetailsComponent, selectors: [["app-todoitem-details"]], decls: 30, vars: 8, consts: [[1, "todoitem-details-container"], [1, "todoitem-form", 3, "formGroup", "ngSubmit"], [1, "form-item"], ["for", "id"], ["id", "id", 1, "form-row"], ["for", "created"], ["id", "created", 1, "form-row"], ["for", "status"], ["id", "status", "formControlName", "status", 1, "form-row"], ["value", "created", 1, "form-option", 3, "selected"], ["value", "completed", 1, "form-option", 3, "selected"], ["for", "content"], ["id", "content", "formControlName", "content", 1, "form-row"], [1, "back-button", 3, "routerLink"], ["type", "submit", 1, "submit-button", 3, "disabled"]], template: function TodoitemDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Todoitem details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TodoitemDetailsComponent_Template_form_ngSubmit_3_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.detailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todoitem.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todoitem.created);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", "created" === ctx.todoitem.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", "completed" === ctx.todoitem.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.detailsForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".form-item[_ngcontent-%COMP%] {\n  border-bottom: 2px solid grey;\n  display: flex;\n  padding: 10px;\n}\nlabel[_ngcontent-%COMP%] {\n  width: 30%;\n  color: darkgoldenrod;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 70%;\n}\ninput[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:active {\n  outline: none;\n  background: transparent;\n}\n.submit-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: darkseagreen;\n  border: none;\n  padding: 15px;\n  color: white;\n}\n.back-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: lightslategray;\n  border: none;\n  padding: 13px;\n  margin-right: 20px;\n  text-decoration: none;\n  color: white;\n}\n.form-option[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: none;\n}\nselect[_ngcontent-%COMP%] {\n  border: none;\n  padding: 5px;\n}\nselect[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb2l0ZW0tZGV0YWlscy90b2RvaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdG9kb2l0ZW0tZGV0YWlscy90b2RvaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5sYWJlbCB7XG4gIHdpZHRoOiAzMCU7XG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xufVxuaW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiA3MCU7XG59XG5pbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGRhcmtzZWFncmVlbjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmFjay1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JheTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvcm0tb3B0aW9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5zZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbnNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoitemDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todoitem-details',
                templateUrl: './todoitem-details.component.html',
                styleUrls: ['./todoitem-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_4__["TodoitemService"] }]; }, null); })();


/***/ }),

/***/ "tzov":
/*!****************************************************!*\
  !*** ./src/app/header-top/header-top.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function() { return HeaderTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/list"]; };
const _c1 = function () { return ["/login"]; };
const _c2 = function () { return ["/register"]; };
class HeaderTopComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) { return new (t || HeaderTopComponent)(); };
HeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderTopComponent, selectors: [["app-header-top"]], decls: 13, vars: 6, consts: [[1, "header-container"], [3, "routerLink"], [1, "header-login"]], template: function HeaderTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My todolist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: darkgoldenrod;\n  margin-right: 5%;\n}\nh5[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\nh2[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.header-container[_ngcontent-%COMP%]{\n  background: cadetblue;\n  width: 100%;\n  margin-left: -10px;\n  margin-top: -10px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.header-login[_ngcontent-%COMP%] {\n  display: flex;\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLXRvcC9oZWFkZXItdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci10b3AvaGVhZGVyLXRvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5oNSB7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLmhlYWRlci1jb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTUlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-top',
                templateUrl: './header-top.component.html',
                styleUrls: ['./header-top.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "umJH":
/*!********************************************************!*\
  !*** ./src/app/new-todoitem/new-todoitem.component.ts ***!
  \********************************************************/
/*! exports provided: NewTodoitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTodoitemComponent", function() { return NewTodoitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/todoitem.service */ "Qxtv");







const _c0 = function () { return [""]; };
class NewTodoitemComponent {
    constructor(route, fb, location, todoitemService) {
        this.route = route;
        this.fb = fb;
        this.location = location;
        this.todoitemService = todoitemService;
        // tslint:disable-next-line:new-parens
        this.created = (new Date).toISOString();
    }
    ngOnInit() {
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('created')
        });
    }
    // tslint:disable-next-line:typedef
    saveChanges() {
        this.todoitemService.create(this.detailsForm.get('content').value).subscribe((res) => {
            console.log(res);
        }, error => {
            console.warn('error');
        });
        this.location.back();
    }
}
NewTodoitemComponent.ɵfac = function NewTodoitemComponent_Factory(t) { return new (t || NewTodoitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_4__["TodoitemService"])); };
NewTodoitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewTodoitemComponent, selectors: [["app-new-todoitem"]], decls: 22, vars: 5, consts: [[1, "todoitem-details-container"], [1, "todoitem-form", 3, "formGroup", "ngSubmit"], [1, "form-item"], ["for", "created"], ["id", "created", 1, "form-row"], ["for", "status"], ["id", "status", 1, "form-row"], ["for", "content"], ["id", "content", "formControlName", "content", 1, "form-row"], [1, "back-button", 3, "routerLink"], ["type", "submit", 1, "submit-button", 3, "disabled"]], template: function NewTodoitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create todoitem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewTodoitemComponent_Template_form_ngSubmit_3_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.detailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.created);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.detailsForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".form-item[_ngcontent-%COMP%] {\n  border-bottom: 2px solid grey;\n  display: flex;\n  padding: 10px;\n}\nlabel[_ngcontent-%COMP%] {\n  width: 30%;\n  color: darkgoldenrod;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 70%;\n}\ninput[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:active {\n  outline: none;\n  background: transparent;\n}\n.submit-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: darkseagreen;\n  border: none;\n  padding: 15px;\n  color: white;\n}\n.back-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: lightslategray;\n  border: none;\n  padding: 13px;\n  margin-right: 20px;\n  text-decoration: none;\n  color: white;\n}\n.form-option[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: none;\n}\nselect[_ngcontent-%COMP%] {\n  border: none;\n  padding: 5px;\n}\nselect[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRvZG9pdGVtL25ldy10b2RvaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25ldy10b2RvaXRlbS9uZXctdG9kb2l0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbn1cbmxhYmVsIHtcbiAgd2lkdGg6IDMwJTtcbiAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XG59XG5pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDcwJTtcbn1cbmlucHV0OmZvY3VzLCBpbnB1dDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogZGFya3NlYWdyZWVuO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0c2xhdGVncmF5O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9ybS1vcHRpb24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnNlbGVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xufVxuc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTodoitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-todoitem',
                templateUrl: './new-todoitem.component.html',
                styleUrls: ['./new-todoitem.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _shared_services_todoitem_service__WEBPACK_IMPORTED_MODULE_4__["TodoitemService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _todoitem_list_todoitem_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoitem-list/todoitem-list.component */ "BuY5");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "Ssqb");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/classes/auth.guard */ "EVyl");
/* harmony import */ var _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/layouts/main-layout/main-layout.component */ "EoNF");
/* harmony import */ var _new_todoitem_new_todoitem_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-todoitem/new-todoitem.component */ "umJH");
/* harmony import */ var _todoitem_details_todoitem_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todoitem-details/todoitem-details.component */ "t6pS");













const routes = [
    {
        path: '',
        component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            { path: '', component: _todoitem_list_todoitem_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoitemListComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] }
        ]
    },
    {
        path: '',
        component: _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__["MainLayoutComponent"],
        canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            { path: 'list', component: _todoitem_list_todoitem_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoitemListComponent"] },
            { path: 'new', component: _new_todoitem_new_todoitem_component__WEBPACK_IMPORTED_MODULE_9__["NewTodoitemComponent"] },
            { path: 'todoitem/:todoitemId', component: _todoitem_details_todoitem_details_component__WEBPACK_IMPORTED_MODULE_10__["TodoitemDetailsComponent"] },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                ],
                exports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(route, router, fb, auth) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.loginForm = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params['registered']) {
            }
            else if (params['accessDenied']) {
                //You have to authorize
            }
        });
    }
    // tslint:disable-next-line:typedef
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    // tslint:disable-next-line:typedef
    login() {
        this.loginForm.disable();
        this.aSub = this.auth.login(this.loginForm.value).subscribe(() => {
            this.router.navigate(['list']);
        }, error => {
            console.warn('error');
            this.loginForm.enable();
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 4, consts: [[1, "login-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], ["for", "login", 1, "label"], ["id", "login", "formControlName", "username"], ["class", "helper-text", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password"], ["type", "submit", 3, "disabled"], [1, "helper-text"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_span_12_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("username").invalid && ctx.loginForm.get("username").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").invalid && ctx.loginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.loginForm.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".helper-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  display: flex;\n  justify-content: flex-end;\n}\n.login-form[_ngcontent-%COMP%] {\n  width: 30%;\n  border: 2px solid grey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto;\n  margin-top: 20px;\n  font-size: 18px;\n  padding: 10px;\n}\nlabel[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.form-row[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.form-row-inner[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n}\ninput[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 20px;\n}\nbutton[_ngcontent-%COMP%] {\n  height: 2rem;\n  background: cadetblue;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVscGVyLXRleHQge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubG9naW4tZm9ybSB7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbmxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmZvcm0tcm93IHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtLXJvdy1pbm5lciB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuaW5wdXQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDIwcHg7XG59XG5idXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map