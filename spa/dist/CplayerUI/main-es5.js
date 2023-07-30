function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./stats/stats.component */
    "./src/app/stats/stats.component.ts");
    /* harmony import */


    var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./calendar/calendar.component */
    "./src/app/calendar/calendar.component.ts");
    /* harmony import */


    var _favs_favs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./favs/favs.component */
    "./src/app/favs/favs.component.ts");
    /* harmony import */


    var _recom_recom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./recom/recom.component */
    "./src/app/recom/recom.component.ts");
    /* harmony import */


    var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./edituser/edituser.component */
    "./src/app/edituser/edituser.component.ts");
    /* harmony import */


    var _stat_opener_stat_opener_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./stat-opener/stat-opener.component */
    "./src/app/stat-opener/stat-opener.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _helper_helper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./helper/helper.component */
    "./src/app/helper/helper.component.ts"); // declaring the routes here


    var routes = [// making the login as the default path of the app
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, //path to load login component
    {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, // path to load the signup component
    {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, // path to login the dashboard component
    {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      //once a user logs in he will be directed to login and will be able to access children paths
      children: [// making search as the default path of dashboard
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      }, // path of search component
      {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
      }, // path of stat component
      {
        path: 'stats',
        component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__["StatsComponent"]
      }, // path of favourites coomponent
      {
        path: 'favs',
        component: _favs_favs_component__WEBPACK_IMPORTED_MODULE_9__["FavsComponent"]
      }, {
        path: 'help',
        component: _helper_helper_component__WEBPACK_IMPORTED_MODULE_14__["HelperComponent"]
      }, // path of recommended component
      {
        path: 'recom',
        component: _recom_recom_component__WEBPACK_IMPORTED_MODULE_10__["RecomComponent"]
      }, // path of calendar component
      {
        path: 'cal',
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"]
      }, // path of edituser component
      {
        path: 'edit',
        component: _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_11__["EdituserComponent"]
      }, //path of contact(about us) component
      {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
      }, // path for the news component
      {
        path: 'news',
        component: _news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"]
      }, // path of stats opener with providin the pid of the player clicked
      {
        path: 'statOpener/:pid/view',
        component: _stat_opener_stat_opener_component__WEBPACK_IMPORTED_MODULE_12__["StatOpenerComponent"],
        outlet: 'statOpener'
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'CplayerUI';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _stats_stats_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./stats/stats.component */
    "./src/app/stats/stats.component.ts");
    /* harmony import */


    var _favs_favs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./favs/favs.component */
    "./src/app/favs/favs.component.ts");
    /* harmony import */


    var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./edituser/edituser.component */
    "./src/app/edituser/edituser.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./calendar/calendar.component */
    "./src/app/calendar/calendar.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _recom_recom_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./recom/recom.component */
    "./src/app/recom/recom.component.ts");
    /* harmony import */


    var _stat_opener_stat_opener_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./stat-opener/stat-opener.component */
    "./src/app/stat-opener/stat-opener.component.ts");
    /* harmony import */


    var _statview_statview_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./statview/statview.component */
    "./src/app/statview/statview.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _helper_helper_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./helper/helper.component */
    "./src/app/helper/helper.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_23__["SearchComponent"], _stats_stats_component__WEBPACK_IMPORTED_MODULE_24__["StatsComponent"], _favs_favs_component__WEBPACK_IMPORTED_MODULE_25__["FavsComponent"], _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_26__["EdituserComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_28__["CalendarComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_29__["SignupComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"], _recom_recom_component__WEBPACK_IMPORTED_MODULE_33__["RecomComponent"], _stat_opener_stat_opener_component__WEBPACK_IMPORTED_MODULE_34__["StatOpenerComponent"], _statview_statview_component__WEBPACK_IMPORTED_MODULE_35__["StatviewComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_36__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_37__["FooterComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_38__["NewsComponent"], _helper_helper_component__WEBPACK_IMPORTED_MODULE_39__["HelperComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_23__["SearchComponent"], _stats_stats_component__WEBPACK_IMPORTED_MODULE_24__["StatsComponent"], _favs_favs_component__WEBPACK_IMPORTED_MODULE_25__["FavsComponent"], _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_26__["EdituserComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_28__["CalendarComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_29__["SignupComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"], _recom_recom_component__WEBPACK_IMPORTED_MODULE_33__["RecomComponent"], _stat_opener_stat_opener_component__WEBPACK_IMPORTED_MODULE_34__["StatOpenerComponent"], _statview_statview_component__WEBPACK_IMPORTED_MODULE_35__["StatviewComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_36__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_37__["FooterComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_38__["NewsComponent"], _helper_helper_component__WEBPACK_IMPORTED_MODULE_39__["HelperComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          entryComponents: [_statview_statview_component__WEBPACK_IMPORTED_MODULE_35__["StatviewComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(httpClient) {
        _classCallCheck(this, AuthenticationService);

        this.httpClient = httpClient;
      }

      _createClass(AuthenticationService, [{
        key: "signup",
        value: function signup(userauth) {
          return this.httpClient.post('http://localhost:8888/api/auth/register', userauth).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "setBearerToken",
        value: function setBearerToken(token) {
          sessionStorage.setItem('token', token);
        }
      }, {
        key: "getBearerToken",
        value: function getBearerToken() {
          return sessionStorage.getItem('token');
        }
      }, {
        key: "login",
        value: function login(userinfo) {
          return this.httpClient.post('http://localhost:8888/api/auth/login', userinfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(username, token) {
          return this.httpClient["delete"]("http://localhost:8888/api/auth/pro/user?username=".concat(username), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(user, pass, token) {
          return this.httpClient.put("http://localhost:8888/api/auth/pro/user", {
            "username": "".concat(user.username),
            "oldpass": "".concat(user.password),
            "newpass": "".concat(pass)
          }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/calendar/calendar.component.ts":
  /*!************************************************!*\
    !*** ./src/app/calendar/calendar.component.ts ***!
    \************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _cricapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cricapi.service */
    "./src/app/cricapi.service.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function CalendarComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r1["team-1"], " vs ", data_r1["team-2"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date : ", data_r1.date, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Format : ", data_r1.type, " ");
      }
    }

    var CalendarComponent = /*#__PURE__*/function () {
      //dependency injection of Services
      function CalendarComponent(breakpointObserver, cric, route) {
        _classCallCheck(this, CalendarComponent);

        this.breakpointObserver = breakpointObserver;
        this.cric = cric;
        this.route = route;
        this.array = []; // paginantion

        this.config = {
          itemsPerPage: 12,
          currentPage: 1,
          totalItems: this.array.length
        };
      } //recording the change of page


      _createClass(CalendarComponent, [{
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }

          var i = 0; // load the upcoming match list on initiation from cric api

          this.cric.matchcalendar().subscribe(function (data) {
            _this.array = data.matches;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cricapi_service__WEBPACK_IMPORTED_MODULE_2__["CricapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]));
    };

    CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["app-calendar"]],
      decls: 5,
      vars: 4,
      consts: [[1, "cardContainer"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "pagination"], [3, "pageChange"], [1, "card"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_mat_card_1_Template, 8, 4, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pagination-controls", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CalendarComponent_Template_pagination_controls_pageChange_4_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.array, ctx.config));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]],
      styles: [".cardContainer[_ngcontent-%COMP%]{\n   display: flex;\n   flex-wrap: wrap;\n }\n .card[_ngcontent-%COMP%]{\n   text-align: center;\n   width: 250px;\n   margin: 15px;\n }\n .button-pos[_ngcontent-%COMP%]{\n   position: absolute;\n   bottom: 4px;\n   padding-top: 10px;\n   padding-bottom: 10px;\n   margin-left: 125px;\n }\n .pagination[_ngcontent-%COMP%]{\n   position: absolute;\n   bottom: 45px;\n   right: 10px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGFBQWE7R0FDYixlQUFlO0NBQ2pCO0NBQ0E7R0FDRSxrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLFlBQVk7Q0FDZDtDQUNBO0dBQ0Usa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxpQkFBaUI7R0FDakIsb0JBQW9CO0dBQ3BCLGtCQUFrQjtDQUNwQjtDQUNBO0dBQ0Usa0JBQWtCO0dBQ2xCLFlBQVk7R0FDWixXQUFXO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRDb250YWluZXJ7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC13cmFwOiB3cmFwO1xuIH1cbiAuY2FyZHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHdpZHRoOiAyNTBweDtcbiAgIG1hcmdpbjogMTVweDtcbiB9XG4gLmJ1dHRvbi1wb3N7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBib3R0b206IDRweDtcbiAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICBtYXJnaW4tbGVmdDogMTI1cHg7XG4gfVxuIC5wYWdpbmF0aW9ue1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgYm90dG9tOiA0NXB4O1xuICAgcmlnaHQ6IDEwcHg7XG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calendar',
          templateUrl: './calendar.component.html',
          styleUrls: ['./calendar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: _cricapi_service__WEBPACK_IMPORTED_MODULE_2__["CricapiService"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(route) {
        _classCallCheck(this, ContactComponent);

        this.route = route;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 32,
      vars: 0,
      consts: [[1, "cardContainer"], [1, "card"], ["mat-card-image", "", "height", "350px", "src", "../../assets/DSC_0049.jpg"], ["mat-card-image", "", "height", "350px", "src", "../../assets/pritesh.jpg"], ["mat-card-image", "", "height", "350px", "src", "../../assets/arbaj.JPG"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Samidha Gurav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Application Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "RedHat Cloud Microservices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sahas Bansal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IBM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Applictaion Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "RedHat Cloud Microservices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Baleegh Haider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "IBM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Application Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "IBM Cloud Microservices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"]],
      styles: [".cardContainer[_ngcontent-%COMP%]{\n   display: flex;\n   flex-wrap: wrap;\n}\n.card[_ngcontent-%COMP%]{\n   width: 240px;\n   margin: 10px 35px;\n   margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxhQUFhO0dBQ2IsZUFBZTtBQUNsQjtBQUNBO0dBQ0csWUFBWTtHQUNaLGlCQUFpQjtHQUNqQixtQkFBbUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkQ29udGFpbmVye1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jYXJke1xuICAgd2lkdGg6IDI0MHB4O1xuICAgbWFyZ2luOiAxMHB4IDM1cHg7XG4gICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cricapi.service.ts":
  /*!************************************!*\
    !*** ./src/app/cricapi.service.ts ***!
    \************************************/

  /*! exports provided: CricapiService */

  /***/
  function srcAppCricapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CricapiService", function () {
      return CricapiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CricapiService = /*#__PURE__*/function () {
      function CricapiService(http) {
        _classCallCheck(this, CricapiService);

        this.http = http;
        this.apikey = "ab27dbb7-815a-446f-90e6-08a4dfd2f6fc";
      }

      _createClass(CricapiService, [{
        key: "searchPlayer",
        value: function searchPlayer(name) {
          return this.http.get("https://api.cricapi.com/v1/players?apikey=".concat(this.apikey), {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("search", name)
          });
        }
      }, {
        key: "statsPlayer",
        value: function statsPlayer(pid) {
          return this.http.get("https://api.cricapi.com/v1/players_info?apikey=".concat(this.apikey), {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("id", pid)
          });
        }
      }, {
        key: "matchcalendar",
        value: function matchcalendar() {
          return this.http.get("https://api.cricapi.com/v1/matches?apikey=".concat(this.apikey));
        }
      }, {
        key: "newsSports",
        value: function newsSports() {
          return this.http.get('http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=144d87b6f02944989fc3e65deaae19a6');
        }
      }, {
        key: "pickPlayerStatsResults",
        value: function pickPlayerStatsResults(response) {
          return response;
        }
      }]);

      return CricapiService;
    }();

    CricapiService.ɵfac = function CricapiService_Factory(t) {
      return new (t || CricapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CricapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CricapiService,
      factory: CricapiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CricapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(breakpointObserver, route, auth, userser) {
        _classCallCheck(this, DashboardComponent);

        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.auth = auth;
        this.userser = userser;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }

          var name = sessionStorage.getItem('username');
          var token = sessionStorage.getItem('token');
          this.userser.getdetails(name, token).subscribe(function (res) {
            return _this2.user = res;
          }, function (err) {
            sessionStorage.clear();

            _this2.route.tologin();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.clear();
          this.route.tologin();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 64,
      vars: 1,
      consts: [["color", "primary"], ["mat-icon-button", ""], [3, "click"], [1, "heading"], [1, "top"], ["mat-button", "", "routerLink", "search"], ["mat-button", "", "routerLink", "favs"], ["mat-button", "", "routerLink", "recom"], ["mat-button", "", "routerLink", "stats"], ["mat-button", "", "routerLink", "news"], ["mat-button", "", "routerLink", "contact"], [1, "dropdown"], ["width", "55", "height", "55", 1, "img", 3, "src"], [1, "dropdown-content"], ["mat-button", "", "routerLink", "edit", 1, "drop"], ["mat-button", "", 1, "drop", 3, "click"], ["sidenav", ""], [1, "side"], ["mat-list-item", "", "routerLink", "search"], ["mat-list-item", "", "routerLink", "favs"], ["mat-list-item", "", "routerLink", "recom"], ["mat-list-item", "", "routerLink", "stats"], ["mat-list-item", "", "routerLink", "cal"], ["mat-list-item", "", "routerLink", "contact"], [2, "height", "88vh"], ["name", "statOpener"], ["color", "primary", 1, "foot"], [1, "foot-text"], ["href", "https://www.facebook.com/", "target", "_blank"], ["src", "../../assets/fb.png", 1, "icons"], ["href", "https://www.instagram.com/", "target", "_blank"], ["src", "../../assets/insta.png", 1, "icons"], ["href", "https://www.linkedin.com/", "target", "_blank"], ["src", "../../assets/linkedin.png", 1, "icons"], ["href", "https://www.twitter.com/", "target", "_blank"], ["src", "../../assets/twitter.png", 1, "icons"], [1, "copy"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_icon_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cricket Player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Favourites ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recommended ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Statistics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contact Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Edit Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_26_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Log Out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-sidenav-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-sidenav", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-nav-list", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Favourites ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Recommended ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Statistics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Calendar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Contact Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "router-outlet", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-toolbar", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Follow us on : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "@Copyrights 2022 CPlayer-Team StackRoute. All rights reserved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]],
      styles: [".heading[_ngcontent-%COMP%]{\n  font-size: xx-large;\n  margin-right: 24%;\n  margin-left: 1%;\n}\n.top[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 120px;\n  font-size: larger;\n}\n.side[_ngcontent-%COMP%]{\n  margin: 20px 10px;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 54px;\n  top: 0px;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute; \n  background-color: #f9f9f9;\n  min-width: 70px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  z-index: 2;\n  display: block;\n  color: rgb(255, 255, 255);\n  background-color: rgba(0, 0, 0, 0.712);\n}\n.img[_ngcontent-%COMP%]{\n  border-radius: 50%;\n  margin-top: 13px;\n}\n.foot[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 0px;\n  width: 99%;\n  z-index: 2;\n}\n.icons[_ngcontent-%COMP%]{\n  margin-left: 10px;\n  height: 30px;\n}\n.copy[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 10px;\n  font-size: 13px;\n}\n.foot-text[_ngcontent-%COMP%]{\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7QUFDVjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDRDQUE0QztBQUM5QztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIG1hcmdpbi1yaWdodDogMjQlO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG4udG9we1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMjBweDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4uc2lkZXtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1NHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxMik7XG59XG4uaW1ne1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG4uZm9vdHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDk5JTtcbiAgei1pbmRleDogMjtcbn1cbi5pY29uc3tcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb3B5e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZm9vdC10ZXh0e1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edituser/edituser.component.ts":
  /*!************************************************!*\
    !*** ./src/app/edituser/edituser.component.ts ***!
    \************************************************/

  /*! exports provided: EdituserComponent */

  /***/
  function srcAppEdituserEdituserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EdituserComponent", function () {
      return EdituserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _userAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../userAuth */
    "./src/app/userAuth.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _favourites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../favourites.service */
    "./src/app/favourites.service.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function EdituserComponent_small_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter a valid 10 digit Mobile Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdituserComponent_small_35_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password cannot be left blank ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdituserComponent_small_35_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must have minimum 8characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdituserComponent_small_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EdituserComponent_small_35_small_1_Template, 2, 0, "small", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EdituserComponent_small_35_small_2_Template, 2, 0, "small", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.oldPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.oldPassword.errors.minlength);
      }
    }

    function EdituserComponent_small_41_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password cannot be left blank ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdituserComponent_small_41_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must have minimum 8characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdituserComponent_small_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EdituserComponent_small_41_small_1_Template, 2, 0, "small", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EdituserComponent_small_41_small_2_Template, 2, 0, "small", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.newPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.newPassword.errors.minlength);
      }
    }

    var EdituserComponent = /*#__PURE__*/function () {
      function EdituserComponent(route, userser, auth, favser) {
        _classCallCheck(this, EdituserComponent);

        this.route = route;
        this.userser = userser;
        this.auth = auth;
        this.favser = favser;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userauth = new _userAuth__WEBPACK_IMPORTED_MODULE_3__["UserAuth"]();
        this.mobileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
          newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
      }

      _createClass(EdituserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }

          this.nam = sessionStorage.getItem('username');
          this.token = sessionStorage.getItem('token');
          this.userser.getdetails(this.nam, this.token).subscribe(function (res) {
            return _this3.user = res;
          }, function (err) {
            return console.log();
          });
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          var _this4 = this;

          var file = event.target.files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function (_event) {
            _this4.img = reader.result.toString();
          };
        }
      }, {
        key: "image",
        value: function image() {
          var _this5 = this;

          this.user.image = this.img;
          console.log();
          this.userser.modifyUser(this.user, this.token).subscribe(function (res) {
            return console.log();
          }, function (err) {
            if (err.statusText === "OK") {
              console.log("success");

              _this5.route.back();
            }
          });
        }
      }, {
        key: "mobiles",
        value: function mobiles() {
          var _this6 = this;

          this.user.mobile = this.mobileForm.value.mobile;
          console.log();
          console.log();
          this.userser.modifyUser(this.user, this.token).subscribe(function (res) {
            return console.log();
          }, function (err) {
            if (err.statusText === "OK") {
              console.log("success");

              _this6.route.back();
            }
          });
        }
      }, {
        key: "password",
        value: function password() {
          var _this7 = this;

          this.userauth.password = this.passwordForm.value.oldPassword;
          this.userauth.username = this.nam;
          console.log();
          console.log();
          this.auth.updateUser(this.userauth, this.passwordForm.value.newPassword, this.token).subscribe(function (res) {
            return console.log();
          }, function (err) {
            if (err.statusText === "OK") {
              sessionStorage.clear();

              _this7.route.tologin();
            }
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(val) {
          this.userser.deleteUser(sessionStorage.getItem('username'), sessionStorage.getItem('token')).subscribe();
          this.auth.deleteUser(sessionStorage.getItem('username'), sessionStorage.getItem('token')).subscribe();
          this.favser.deleteData(sessionStorage.getItem('username'), sessionStorage.getItem('token')).subscribe();
          sessionStorage.clear();
          this.route.tologin();
        }
      }, {
        key: "mobile",
        get: function get() {
          return this.mobileForm.get('mobile');
        }
      }, {
        key: "oldPassword",
        get: function get() {
          return this.passwordForm.get('oldPassword');
        }
      }, {
        key: "newPassword",
        get: function get() {
          return this.passwordForm.get('newPassword');
        }
      }]);

      return EdituserComponent;
    }();

    EdituserComponent.ɵfac = function EdituserComponent_Factory(t) {
      return new (t || EdituserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_favourites_service__WEBPACK_IMPORTED_MODULE_7__["FavouritesService"]));
    };

    EdituserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EdituserComponent,
      selectors: [["app-edituser"]],
      decls: 56,
      vars: 6,
      consts: [["label", "Mobile Update", 1, "main"], [1, "headers"], [3, "formGroup", "ngSubmit"], ["for", "mobile"], ["type", "text", "placeholder", "  Enter your mobile", "formControlName", "mobile", 1, "mobile"], ["class", "err", 4, "ngIf"], [1, "but"], ["value", "update"], ["label", "Image Update", 1, "main"], [3, "ngSubmit"], [1, "image-upload-container", "btn", "btn-bwm"], ["type", "file", 1, "image", 3, "change"], ["imageInput", ""], ["label", "Password Update", 1, "main"], ["for", "oldPassword"], ["type", "password", "placeholder", "  Enter old password", "formControlName", "oldPassword", 1, "password"], [4, "ngIf"], ["for", "newPassord"], ["type", "password", "placeholder", "  Enter new password", "formControlName", "newPassword", 1, "password"], ["label", "Delete Account", 1, "main"], [1, "delpa"], [1, "formTaker-Expansion"], ["appearance", "outline"], ["matInput", "", "placeholder", "Please enter password", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "buttn", 3, "click"], [1, "err"]],
      template: function EdituserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Your Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EdituserComponent_Template_form_ngSubmit_4_listener() {
            return ctx.mobiles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EdituserComponent_small_10_Template, 2, 0, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Change you Profile Picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EdituserComponent_Template_form_ngSubmit_17_listener() {
            return ctx.image();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EdituserComponent_Template_input_change_21_listener($event) {
            return ctx.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-tab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Change Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EdituserComponent_Template_form_ngSubmit_29_listener() {
            return ctx.password();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EdituserComponent_small_35_Template, 3, 2, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EdituserComponent_small_41_Template, 3, 2, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-tab", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Delete Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EdituserComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.val = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "We have new features coming");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdituserComponent_Template_button_click_54_listener() {
            return ctx.deleteUser(ctx.val);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mobileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile.invalid && (ctx.mobile.dirty || ctx.mobile.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oldPassword.invalid && (ctx.oldPassword.dirty || ctx.oldPassword.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPassword.invalid && (ctx.newPassword.dirty || ctx.newPassword.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.val);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
      styles: ["form[_ngcontent-%COMP%]{\n   border: 1px solid rgb(0, 0, 0);\n   background-color: rgba(0, 0, 0, 0.616);\n   border-width: 2px;\n   margin:auto;\n   margin-top: 20px;\n   width:50vw;\n} \n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n   padding: 10px;\n} \n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n   width : 35%;\n   height: 30px;\n   background-color: rgba(6, 3, 22, 0.692);\n    border-width: 1px;\n    border-color: rgba(0, 0, 0, 0.466);\n    color: lavenderblush;\n   font-size: 15px;\n   margin: 2vh auto;\n} \n\n.but[_ngcontent-%COMP%]{\n   display: flex;\n   margin-left: 10px;\n} \n\nsmall[_ngcontent-%COMP%]{\n   color: red;\n   font-style: italic;\n} \n\nlabel[_ngcontent-%COMP%]{\n   color: white;\n   font-size: 20px;\n   margin-bottom: 10px;\n   margin-left:  1.5%;\n} \n\n.signup[_ngcontent-%COMP%]{\n   color:rgb(0, 0, 0);\n   font-size: 28px;\n   text-align: center;\n   margin-top: 2.2%;\n   margin-bottom: 3%;\n} \n\n.email[_ngcontent-%COMP%]{\n   width: 27vw;\n   background-color: rgba(0, 0, 0, 0);\n   border-width: 1px;\n   border-color: rgba(0, 0, 0, 0.466);\n   color: lavenderblush;\n   height: 28px;\n   margin-left: 64px;\n} \n\n.password[_ngcontent-%COMP%]{\n   width: 27vw;\n   background-color: rgba(0, 0, 0, 0);\n   border-width: 1px;\n   border-color: rgba(0, 0, 0, 0.466);\n   color: lavenderblush;\n   height: 28px;\n   margin-left: 25px;\n} \n\n.name[_ngcontent-%COMP%]{\n   width: 27vw;\n   background-color: rgba(0, 0, 0, 0);\n   border-width: 1px;\n   border-color: rgba(0, 0, 0, 0.466);\n   color: lavenderblush;\n   height: 28px;\n   margin-left: 60px;\n} \n\n.mobile[_ngcontent-%COMP%]{\n   width: 27vw;\n   background-color: rgba(0, 0, 0, 0);\n   border-width: 1px;\n   border-color: rgba(0, 0, 0, 0.466);\n   color: lavenderblush;\n   height: 25px;\n   margin-left: 53px;\n} \n\n.err[_ngcontent-%COMP%]{\n   margin-left: 130px;\n} \n\n.image[_ngcontent-%COMP%]{\n   width: 27vw;\n   border-width: 1px;\n   color: rgb(255, 4, 4);\n   height: 25px;\n   margin-left: 60px;\n} \n\n.heading[_ngcontent-%COMP%]{\n   font-size: xx-large;\n   margin-right: 24%;\n   margin-left: 1%;\n } \n\n.top[_ngcontent-%COMP%]{\n   position: absolute;\n   right: 120px;\n   font-size: larger;\n } \n\n.side[_ngcontent-%COMP%]{\n   margin: 20px 10px;\n } \n\n.logo[_ngcontent-%COMP%]{\n   height: 30px;\n } \n\n.dropdown[_ngcontent-%COMP%] {\n   position: absolute;\n   right: 48px;\n } \n\n.dropdown-content[_ngcontent-%COMP%] {\n   display: none;\n   position: absolute; \n   background-color: #f9f9f9;\n   min-width: 80px;\n   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n } \n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n   z-index: 2;\n   display: block;\n   color: rgb(255, 255, 255);\n   background-color: rgba(0, 0, 0, 0.644);\n } \n\n.foot[_ngcontent-%COMP%]{\n   position: absolute;\n   bottom: 0px;\n   width: 99%;\n   z-index: 2;\n } \n\n.icons[_ngcontent-%COMP%]{\n   margin-left: 10px;\n   height: 30px;\n } \n\n.copy[_ngcontent-%COMP%]{\n   position: absolute;\n   right: 10px;\n   font-size: 13px;\n } \n\n.foot-text[_ngcontent-%COMP%]{\n   font-size: medium;\n } \n\n.headers[_ngcontent-%COMP%]{\n    margin-top: 7%;\n    font-family: 'Times New Roman', Times, serif;\n    font-style: italic;\n    font-weight: bolder;\n    font-size: x-large;\n    text-align: center;\n\n } \n\n.delpa[_ngcontent-%COMP%]{\n   display: flex;\n   justify-content: center;\n   margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHVzZXIvZWRpdHVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLDhCQUE4QjtHQUM5QixzQ0FBc0M7R0FDdEMsaUJBQWlCO0dBQ2pCLFdBQVc7R0FDWCxnQkFBZ0I7R0FDaEIsVUFBVTtBQUNiOztBQUVBO0dBQ0csYUFBYTtBQUNoQjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osdUNBQXVDO0lBQ3RDLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsb0JBQW9CO0dBQ3JCLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0csVUFBVTtHQUNWLGtCQUFrQjtBQUNyQjs7QUFDQTtHQUNHLFlBQVk7R0FDWixlQUFlO0dBQ2YsbUJBQW1CO0dBQ25CLGtCQUFrQjtBQUNyQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixpQkFBaUI7QUFDcEI7O0FBQ0E7R0FDRyxXQUFXO0dBQ1gsa0NBQWtDO0dBQ2xDLGlCQUFpQjtHQUNqQixrQ0FBa0M7R0FDbEMsb0JBQW9CO0dBQ3BCLFlBQVk7R0FDWixpQkFBaUI7QUFDcEI7O0FBQ0E7R0FDRyxXQUFXO0dBQ1gsa0NBQWtDO0dBQ2xDLGlCQUFpQjtHQUNqQixrQ0FBa0M7R0FDbEMsb0JBQW9CO0dBQ3BCLFlBQVk7R0FDWixpQkFBaUI7QUFDcEI7O0FBQ0E7R0FDRyxXQUFXO0dBQ1gsa0NBQWtDO0dBQ2xDLGlCQUFpQjtHQUNqQixrQ0FBa0M7R0FDbEMsb0JBQW9CO0dBQ3BCLFlBQVk7R0FDWixpQkFBaUI7QUFDcEI7O0FBQ0E7R0FDRyxXQUFXO0dBQ1gsa0NBQWtDO0dBQ2xDLGlCQUFpQjtHQUNqQixrQ0FBa0M7R0FDbEMsb0JBQW9CO0dBQ3BCLFlBQVk7R0FDWixpQkFBaUI7QUFDcEI7O0FBQ0E7R0FDRyxrQkFBa0I7QUFDckI7O0FBQ0E7R0FDRyxXQUFXO0dBQ1gsaUJBQWlCO0dBQ2pCLHFCQUFxQjtHQUNyQixZQUFZO0dBQ1osaUJBQWlCO0FBQ3BCOztBQUNBO0dBQ0csbUJBQW1CO0dBQ25CLGlCQUFpQjtHQUNqQixlQUFlO0NBQ2pCOztBQUNBO0dBQ0Usa0JBQWtCO0dBQ2xCLFlBQVk7R0FDWixpQkFBaUI7Q0FDbkI7O0FBQ0E7R0FDRSxpQkFBaUI7Q0FDbkI7O0FBQ0E7R0FDRSxZQUFZO0NBQ2Q7O0FBQ0E7R0FDRSxrQkFBa0I7R0FDbEIsV0FBVztDQUNiOztBQUVBO0dBQ0UsYUFBYTtHQUNiLGtCQUFrQjtHQUNsQix5QkFBeUI7R0FDekIsZUFBZTtHQUNmLDRDQUE0QztDQUM5Qzs7QUFFQTtHQUNFLFVBQVU7R0FDVixjQUFjO0dBQ2QseUJBQXlCO0dBQ3pCLHNDQUFzQztDQUN4Qzs7QUFDQTtHQUNFLGtCQUFrQjtHQUNsQixXQUFXO0dBQ1gsVUFBVTtHQUNWLFVBQVU7Q0FDWjs7QUFDQTtHQUNFLGlCQUFpQjtHQUNqQixZQUFZO0NBQ2Q7O0FBQ0E7R0FDRSxrQkFBa0I7R0FDbEIsV0FBVztHQUNYLGVBQWU7Q0FDakI7O0FBQ0E7R0FDRSxpQkFBaUI7Q0FDbkI7O0FBQ0E7SUFDRyxjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7Q0FFckI7O0FBQ0Q7R0FDRyxhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLGdCQUFnQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2VkaXR1c2VyL2VkaXR1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxNik7XG4gICBib3JkZXItd2lkdGg6IDJweDtcbiAgIG1hcmdpbjphdXRvO1xuICAgbWFyZ2luLXRvcDogMjBweDtcbiAgIHdpZHRoOjUwdnc7XG59IFxuXG5mb3JtIGRpdiB7XG4gICBwYWRkaW5nOiAxMHB4O1xufVxuXG5mb3JtIGRpdiBidXR0b257XG4gICB3aWR0aCA6IDM1JTtcbiAgIGhlaWdodDogMzBweDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMywgMjIsIDAuNjkyKTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xuICAgIGNvbG9yOiBsYXZlbmRlcmJsdXNoO1xuICAgZm9udC1zaXplOiAxNXB4O1xuICAgbWFyZ2luOiAydmggYXV0bztcbn1cblxuLmJ1dHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuc21hbGx7XG4gICBjb2xvcjogcmVkO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxubGFiZWx7XG4gICBjb2xvcjogd2hpdGU7XG4gICBmb250LXNpemU6IDIwcHg7XG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgbWFyZ2luLWxlZnQ6ICAxLjUlO1xufVxuXG4uc2lnbnVwe1xuICAgY29sb3I6cmdiKDAsIDAsIDApO1xuICAgZm9udC1zaXplOiAyOHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLXRvcDogMi4yJTtcbiAgIG1hcmdpbi1ib3R0b206IDMlO1xufVxuLmVtYWlse1xuICAgd2lkdGg6IDI3dnc7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xuICAgY29sb3I6IGxhdmVuZGVyYmx1c2g7XG4gICBoZWlnaHQ6IDI4cHg7XG4gICBtYXJnaW4tbGVmdDogNjRweDtcbn1cbi5wYXNzd29yZHtcbiAgIHdpZHRoOiAyN3Z3O1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDY2KTtcbiAgIGNvbG9yOiBsYXZlbmRlcmJsdXNoO1xuICAgaGVpZ2h0OiAyOHB4O1xuICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4ubmFtZXtcbiAgIHdpZHRoOiAyN3Z3O1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDY2KTtcbiAgIGNvbG9yOiBsYXZlbmRlcmJsdXNoO1xuICAgaGVpZ2h0OiAyOHB4O1xuICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4ubW9iaWxle1xuICAgd2lkdGg6IDI3dnc7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xuICAgY29sb3I6IGxhdmVuZGVyYmx1c2g7XG4gICBoZWlnaHQ6IDI1cHg7XG4gICBtYXJnaW4tbGVmdDogNTNweDtcbn1cbi5lcnJ7XG4gICBtYXJnaW4tbGVmdDogMTMwcHg7XG59XG4uaW1hZ2V7XG4gICB3aWR0aDogMjd2dztcbiAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgY29sb3I6IHJnYigyNTUsIDQsIDQpO1xuICAgaGVpZ2h0OiAyNXB4O1xuICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4uaGVhZGluZ3tcbiAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICBtYXJnaW4tcmlnaHQ6IDI0JTtcbiAgIG1hcmdpbi1sZWZ0OiAxJTtcbiB9XG4gLnRvcHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHJpZ2h0OiAxMjBweDtcbiAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuIH1cbiAuc2lkZXtcbiAgIG1hcmdpbjogMjBweCAxMHB4O1xuIH1cbiAubG9nb3tcbiAgIGhlaWdodDogMzBweDtcbiB9XG4gLmRyb3Bkb3duIHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHJpZ2h0OiA0OHB4O1xuIH1cbiBcbiAuZHJvcGRvd24tY29udGVudCB7XG4gICBkaXNwbGF5OiBub25lO1xuICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICBtaW4td2lkdGg6IDgwcHg7XG4gICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiB9XG4gXG4gLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgIHotaW5kZXg6IDI7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjQ0KTtcbiB9XG4gLmZvb3R7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBib3R0b206IDBweDtcbiAgIHdpZHRoOiA5OSU7XG4gICB6LWluZGV4OiAyO1xuIH1cbiAuaWNvbnN7XG4gICBtYXJnaW4tbGVmdDogMTBweDtcbiAgIGhlaWdodDogMzBweDtcbiB9XG4gLmNvcHl7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICByaWdodDogMTBweDtcbiAgIGZvbnQtc2l6ZTogMTNweDtcbiB9XG4gLmZvb3QtdGV4dHtcbiAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuIH1cbiAuaGVhZGVyc3tcbiAgICBtYXJnaW4tdG9wOiA3JTtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gfVxuLmRlbHBhe1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EdituserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edituser',
          templateUrl: './edituser.component.html',
          styleUrls: ['./edituser.component.css']
        }]
      }], function () {
        return [{
          type: _router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: _favourites_service__WEBPACK_IMPORTED_MODULE_7__["FavouritesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fav.ts":
  /*!************************!*\
    !*** ./src/app/fav.ts ***!
    \************************/

  /*! exports provided: Favs */

  /***/
  function srcAppFavTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Favs", function () {
      return Favs;
    });

    var Favs = function Favs() {
      _classCallCheck(this, Favs);
    };
    /***/

  },

  /***/
  "./src/app/favourites.service.ts":
  /*!***************************************!*\
    !*** ./src/app/favourites.service.ts ***!
    \***************************************/

  /*! exports provided: FavouritesService */

  /***/
  function srcAppFavouritesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouritesService", function () {
      return FavouritesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FavouritesService = /*#__PURE__*/function () {
      function FavouritesService(http) {
        _classCallCheck(this, FavouritesService);

        this.http = http;
      }

      _createClass(FavouritesService, [{
        key: "getData",
        value: function getData(usern, token) {
          return this.http.get("http://localhost:8888/api/fav?username=".concat(usern), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "addData",
        value: function addData(fav, token) {
          return this.http.post("http://localhost:8888/api/fav", fav, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "deleteData",
        value: function deleteData(usern, token) {
          return this.http["delete"]("http://localhost:8888/api/fav?username=".concat(usern), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "deleteDataUser",
        value: function deleteDataUser(usern, name, token) {
          return this.http.post("http://localhost:8888/api/fav/id", {
            "username": "".concat(usern),
            "name": "".concat(name)
          }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }]);

      return FavouritesService;
    }();

    FavouritesService.ɵfac = function FavouritesService_Factory(t) {
      return new (t || FavouritesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FavouritesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FavouritesService,
      factory: FavouritesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouritesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/favs/favs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/favs/favs.component.ts ***!
    \****************************************/

  /*! exports provided: FavsComponent */

  /***/
  function srcAppFavsFavsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavsComponent", function () {
      return FavsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _favourites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../favourites.service */
    "./src/app/favourites.service.ts");
    /* harmony import */


    var _recommended_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../recommended.service */
    "./src/app/recommended.service.ts");
    /* harmony import */


    var _cricapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cricapi.service */
    "./src/app/cricapi.service.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function FavsComponent_mat_card_1_button_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FavsComponent_mat_card_1_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavsComponent_mat_card_1_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.removeFromFav(data_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FavsComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Conutry :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Teams : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Role : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FavsComponent_mat_card_1_button_19_Template, 3, 0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FavsComponent_mat_card_1_button_20_Template, 3, 0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.dateOfBirth, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.playerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.country, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.placeOfBirth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r1.role, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r1.status);
      }
    }

    var FavsComponent = /*#__PURE__*/function () {
      function FavsComponent(favser, recomser, cricapi, route) {
        _classCallCheck(this, FavsComponent);

        this.favser = favser;
        this.recomser = recomser;
        this.cricapi = cricapi;
        this.route = route;
      }

      _createClass(FavsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.favser.getData(sessionStorage.getItem('username'), sessionStorage.getItem('token')).subscribe(function (res) {
            _this8.list = res;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "removeFromFav",
        value: function removeFromFav(data) {
          var _this9 = this;

          data.status = true;
          this.recomser.deleteData(data.id, sessionStorage.getItem('token')).subscribe(function (res) {
            return _this9.favser.deleteDataUser(sessionStorage.getItem('username'), data.id, sessionStorage.getItem('token')).subscribe(function (res) {
              return console.log();
            }, function (err) {
              return console.log(err);
            });
          }, function (err) {
            if (err.statusText === "OK") {
              _this9.favser.deleteDataUser(sessionStorage.getItem('username'), data.name, sessionStorage.getItem('token')).subscribe(function (res) {
                return _this9.route.tohelp();
              }, function (err) {
                return console.log(err);
              });
            }
          });
        }
      }]);

      return FavsComponent;
    }();

    FavsComponent.ɵfac = function FavsComponent_Factory(t) {
      return new (t || FavsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_favourites_service__WEBPACK_IMPORTED_MODULE_1__["FavouritesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recommended_service__WEBPACK_IMPORTED_MODULE_2__["RecommendedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cricapi_service__WEBPACK_IMPORTED_MODULE_3__["CricapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]));
    };

    FavsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavsComponent,
      selectors: [["app-favs"]],
      decls: 2,
      vars: 1,
      consts: [[1, "cardContainer"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["mat-card-image", "", "height", "250px", 3, "src"], ["mat-icon-button", "", "class", "button-pos", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "class", "button-pos", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "button-pos"], ["mat-icon-button", "", "color", "warn", 1, "button-pos", 3, "click"]],
      template: function FavsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavsComponent_mat_card_1_Template, 21, 8, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      styles: [".sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n   background: inherit;\n }\n \n .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n   position: -webkit-sticky;\n   position: sticky;\n   top: 0;\n   z-index: 1;\n }\n \n .cardContainer[_ngcontent-%COMP%]{\n   display: flex;\n   flex-wrap: wrap;\n }\n \n .card[_ngcontent-%COMP%]{\n   width: 210px;\n   margin: 10px 10px;\n   margin-bottom: 60px;\n }\n \n .button-pos[_ngcontent-%COMP%]{\n   position: absolute;\n   bottom: 4px;\n   padding-top: 10px;\n   padding-bottom: 10px;\n   margin-left: 37%;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2cy9mYXZzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxtQkFBbUI7Q0FDckI7O0NBRUE7R0FDRSx3QkFBZ0I7R0FBaEIsZ0JBQWdCO0dBQ2hCLE1BQU07R0FDTixVQUFVO0NBQ1o7O0NBQ0E7R0FDRSxhQUFhO0dBQ2IsZUFBZTtDQUNqQjs7Q0FDQTtHQUNFLFlBQVk7R0FDWixpQkFBaUI7R0FDakIsbUJBQW1CO0NBQ3JCOztDQUNBO0dBQ0Usa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxpQkFBaUI7R0FDakIsb0JBQW9CO0dBQ3BCLGdCQUFnQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2ZhdnMvZmF2cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gfVxuIFxuIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICBwb3NpdGlvbjogc3RpY2t5O1xuICAgdG9wOiAwO1xuICAgei1pbmRleDogMTtcbiB9XG4gLmNhcmRDb250YWluZXJ7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC13cmFwOiB3cmFwO1xuIH1cbiAuY2FyZHtcbiAgIHdpZHRoOiAyMTBweDtcbiAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiB9XG4gLmJ1dHRvbi1wb3N7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBib3R0b206IDRweDtcbiAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICBtYXJnaW4tbGVmdDogMzclO1xuIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-favs',
          templateUrl: './favs.component.html',
          styleUrls: ['./favs.component.css']
        }]
      }], function () {
        return [{
          type: _favourites_service__WEBPACK_IMPORTED_MODULE_1__["FavouritesService"]
        }, {
          type: _recommended_service__WEBPACK_IMPORTED_MODULE_2__["RecommendedService"]
        }, {
          type: _cricapi_service__WEBPACK_IMPORTED_MODULE_3__["CricapiService"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 14,
      vars: 0,
      consts: [["color", "primary", 1, "foot"], [1, "foot-text"], ["href", "https://www.facebook.com/"], ["src", "../../assets/fb.png", 1, "icons"], ["href", "https://www.instagram.com/"], ["src", "../../assets/insta.png", 1, "icons"], ["href", "https://www.linkedin.com/"], ["src", "../../assets/linkedin.png", 1, "icons"], ["href", "https://www.twitter.com/"], ["src", "../../assets/twitter.png", 1, "icons"], [1, "copy"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Follow us on : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "@Copyrights 2022 CPlayer-Team StackRoute. All rights reserved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"]],
      styles: [".foot[_ngcontent-%COMP%]{\n   position: absolute;\n   bottom: 0px;\n   width: 99%;\n   z-index: 2;\n }\n .icons[_ngcontent-%COMP%]{\n   margin-left: 10px;\n   height: 30px;\n }\n .copy[_ngcontent-%COMP%]{\n   position: absolute;\n   right: 10px;\n   font-size: 13px;\n }\n .foot-text[_ngcontent-%COMP%]{\n   font-size: medium;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxVQUFVO0dBQ1YsVUFBVTtDQUNaO0NBQ0E7R0FDRSxpQkFBaUI7R0FDakIsWUFBWTtDQUNkO0NBQ0E7R0FDRSxrQkFBa0I7R0FDbEIsV0FBVztHQUNYLGVBQWU7Q0FDakI7Q0FDQTtHQUNFLGlCQUFpQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290e1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgYm90dG9tOiAwcHg7XG4gICB3aWR0aDogOTklO1xuICAgei1pbmRleDogMjtcbiB9XG4gLmljb25ze1xuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICBoZWlnaHQ6IDMwcHg7XG4gfVxuIC5jb3B5e1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgcmlnaHQ6IDEwcHg7XG4gICBmb250LXNpemU6IDEzcHg7XG4gfVxuIC5mb290LXRleHR7XG4gICBmb250LXNpemU6IG1lZGl1bTtcbiB9XG4gXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 5,
      vars: 0,
      consts: [["color", "primary"], [1, "heading"], [1, "menu-spacer"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cricket Player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helper/helper.component.ts":
  /*!********************************************!*\
    !*** ./src/app/helper/helper.component.ts ***!
    \********************************************/

  /*! exports provided: HelperComponent */

  /***/
  function srcAppHelperHelperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperComponent", function () {
      return HelperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");

    var HelperComponent = /*#__PURE__*/function () {
      function HelperComponent(route) {
        _classCallCheck(this, HelperComponent);

        this.route = route;
      }

      _createClass(HelperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.route.back();
        }
      }]);

      return HelperComponent;
    }();

    HelperComponent.ɵfac = function HelperComponent_Factory(t) {
      return new (t || HelperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"]));
    };

    HelperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelperComponent,
      selectors: [["app-helper"]],
      decls: 2,
      vars: 0,
      template: function HelperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "helper works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci9oZWxwZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-helper',
          templateUrl: './helper.component.html',
          styleUrls: ['./helper.component.css']
        }]
      }], function () {
        return [{
          type: _router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _userAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../userAuth */
    "./src/app/userAuth.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    function LoginComponent_small_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " email is mandatory field ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_13_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password cannot be left blank ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_13_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password must have minimum 8characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_small_13_small_1_Template, 2, 0, "small", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_small_13_small_2_Template, 2, 0, "small", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.minlength);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(route, auth) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.auth = auth;
        this.userAuth = new _userAuth__WEBPACK_IMPORTED_MODULE_2__["UserAuth"]();
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('token') != null) {
            this.loginflag = true;
            this.route.todashboard();
          }
        }
      }, {
        key: "logIn",
        value: function logIn() {
          var _this10 = this;

          this.userAuth.username = this.loginForm.value.email;
          this.userAuth.password = this.loginForm.value.password;
          this.auth.login(this.userAuth).subscribe(function (data) {
            _this10.auth.setBearerToken(data["Token"]);

            sessionStorage.setItem("username", _this10.loginForm.value.email);

            _this10.route.todashboard();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "tosignup",
        value: function tosignup() {
          this.route.tosignup();
        }
      }, {
        key: "email",
        get: function get() {
          return this.loginForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 20,
      vars: 4,
      consts: [[1, "login"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "formControlName", "email"], ["class", "esmall", 4, "ngIf"], ["for", "password"], ["type", "password", "placeholder", "Enter Password", "formControlName", "password"], [4, "ngIf"], [1, "but"], ["value", "sign In", 3, "disabled"], ["value", "signIn", 3, "click"], [1, "esmall"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            return ctx.logIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_small_8_Template, 2, 0, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_small_13_Template, 3, 2, "small", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
            return ctx.tosignup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "New User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      styles: ["form[_ngcontent-%COMP%]{\n    border: 1px solid rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.616);\n    margin:auto;\n    margin-top: 30px;\n    width:40vw;\n    display: flex;\n    flex-direction: column;\n} \n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n} \n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 80%;\n    background-color: rgba(205, 210, 226, 0.925);\n    border-width: 1px;\n    border-color: rgba(57, 73, 121, 0.534);\n    color: rgb(0, 0, 0);\n    margin: 1vh auto;\n    height: 28px;\n} \n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width : 35%;\n    background-color: rgba(6, 3, 22, 0.692);\n    border-width: 1px;\n    border-color: rgba(0, 0, 0, 0.466);\n    color: rgb(255, 255, 255);\n    height: 30px;\n    font-size: 15px;\n    margin: 2vh auto;\n} \n\n.but[_ngcontent-%COMP%]{\n    display: flexbox\n} \n\nsmall[_ngcontent-%COMP%]{\n    color: red;\n    font-style: italic;\n    margin-left: 5%;\n} \n\n.esmall[_ngcontent-%COMP%]{\n    margin-left: 10%;\n} \n\nlabel[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left:  10%;;\n} \n\n.login[_ngcontent-%COMP%]{\n    color: rgb(0, 0, 0);\n    font-size: 30px;\n    text-align: center;\n    margin-top: 3%;\n    margin-bottom: 3%;\n} \n\n.heading[_ngcontent-%COMP%]{\n    font-size: xx-large;\n    margin-right: 24%;\n    margin-left: 1%;\n  } \n\n.top[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 120px;\n    font-size: larger;\n  } \n\n.side[_ngcontent-%COMP%]{\n    margin: 20px 10px;\n  } \n\n.logo[_ngcontent-%COMP%]{\n    height: 30px;\n  } \n\n.dropdown[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 48px;\n  } \n\n.dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute; \n    background-color: #f9f9f9;\n    min-width: 80px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  } \n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    z-index: 2;\n    display: block;\n    color: rgb(255, 255, 255);\n    background-color: rgba(0, 0, 0, 0.644);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDRDQUE0QztFQUM5Qzs7QUFFQTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHNDQUFzQztFQUN4QyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE2KTtcbiAgICBtYXJnaW46YXV0bztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHdpZHRoOjQwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSBcblxuZm9ybSBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5mb3JtIGRpdiBpbnB1dHtcbiAgICB3aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA1LCAyMTAsIDIyNiwgMC45MjUpO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NywgNzMsIDEyMSwgMC41MzQpO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgbWFyZ2luOiAxdmggYXV0bztcbiAgICBoZWlnaHQ6IDI4cHg7XG59XG5cbmZvcm0gZGl2IGJ1dHRvbntcbiAgICB3aWR0aCA6IDM1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDMsIDIyLCAwLjY5Mik7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDY2KTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAydmggYXV0bztcbn1cblxuLmJ1dHtcbiAgICBkaXNwbGF5OiBmbGV4Ym94XG59XG5cbnNtYWxse1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5lc21hbGx7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbmxhYmVse1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogIDEwJTs7XG59XG5cbi5sb2dpbntcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG4uaGVhZGluZ3tcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIG1hcmdpbi1yaWdodDogMjQlO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgfVxuICAudG9we1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTIwcHg7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gIH1cbiAgLnNpZGV7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gIH1cbiAgLmxvZ297XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0OHB4O1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICB9XG4gIFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjQ0KTtcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _cricapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cricapi.service */
    "./src/app/cricapi.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function NewsComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", data_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.content, " ");
      }
    }

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent(route, newsapi) {
        _classCallCheck(this, NewsComponent);

        this.route = route;
        this.newsapi = newsapi;
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }

          this.newsapi.newsSports().subscribe(function (res) {
            _this11.list = res.articles;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cricapi_service__WEBPACK_IMPORTED_MODULE_2__["CricapiService"]));
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 2,
      vars: 1,
      consts: [[1, "cardContainer"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["target", "_blank", 3, "href"], ["width", "500px", "mat-card-image", "", "height", "250px", 3, "src"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_mat_card_1_Template, 10, 5, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]],
      styles: [".cardContainer[_ngcontent-%COMP%]{\n   display: flex;\n   flex-wrap: wrap;\n}\n\n.card[_ngcontent-%COMP%]{\n   width: 550px;\n   margin: 10px 50px;\n   margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxhQUFhO0dBQ2IsZUFBZTtBQUNsQjs7QUFFQTtHQUNHLFlBQVk7R0FDWixpQkFBaUI7R0FDakIsbUJBQW1CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZENvbnRhaW5lcntcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJke1xuICAgd2lkdGg6IDU1MHB4O1xuICAgbWFyZ2luOiAxMHB4IDUwcHg7XG4gICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.css']
        }]
      }], function () {
        return [{
          type: _router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"]
        }, {
          type: _cricapi_service__WEBPACK_IMPORTED_MODULE_2__["CricapiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recom/recom.component.ts":
  /*!******************************************!*\
    !*** ./src/app/recom/recom.component.ts ***!
    \******************************************/

  /*! exports provided: RecomComponent */

  /***/
  function srcAppRecomRecomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecomComponent", function () {
      return RecomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recommended_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../recommended.service */
    "./src/app/recommended.service.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function RecomComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Conutry :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Teams : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Role : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.dateOfBirth, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.playerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.country, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.placeOfBirth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r1.role, " ");
      }
    }

    var RecomComponent = /*#__PURE__*/function () {
      function RecomComponent(recomser, route) {
        _classCallCheck(this, RecomComponent);

        this.recomser = recomser;
        this.route = route;
      }

      _createClass(RecomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }

          this.recomser.getData(sessionStorage.getItem('token')).subscribe(function (res) {
            return _this12.list = res;
          });
        }
      }]);

      return RecomComponent;
    }();

    RecomComponent.ɵfac = function RecomComponent_Factory(t) {
      return new (t || RecomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recommended_service__WEBPACK_IMPORTED_MODULE_1__["RecommendedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"]));
    };

    RecomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecomComponent,
      selectors: [["app-recom"]],
      decls: 2,
      vars: 1,
      consts: [[1, "cardContainer"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["mat-card-image", "", "height", "250px", 3, "src"]],
      template: function RecomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecomComponent_mat_card_1_Template, 18, 6, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]],
      styles: [".sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n   background: inherit;\n }\n \n .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n   position: -webkit-sticky;\n   position: sticky;\n   top: 0;\n   z-index: 1;\n }\n \n .cardContainer[_ngcontent-%COMP%]{\n   display: flex;\n   flex-wrap: wrap;\n }\n \n .card[_ngcontent-%COMP%]{\n   width: 210px;\n   margin: 10px 10px;\n   margin-bottom: 60px;\n }\n \n .button-pos[_ngcontent-%COMP%]{\n   position: absolute;\n   bottom: 4px;\n   padding-top: 10px;\n   padding-bottom: 10px;\n   margin-left: 37%;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb20vcmVjb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLG1CQUFtQjtDQUNyQjs7Q0FFQTtHQUNFLHdCQUFnQjtHQUFoQixnQkFBZ0I7R0FDaEIsTUFBTTtHQUNOLFVBQVU7Q0FDWjs7Q0FDQTtHQUNFLGFBQWE7R0FDYixlQUFlO0NBQ2pCOztDQUNBO0dBQ0UsWUFBWTtHQUNaLGlCQUFpQjtHQUNqQixtQkFBbUI7Q0FDckI7O0NBQ0E7R0FDRSxrQkFBa0I7R0FDbEIsV0FBVztHQUNYLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsZ0JBQWdCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVjb20vcmVjb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuIH1cbiBcbiAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAgcG9zaXRpb246IHN0aWNreTtcbiAgIHRvcDogMDtcbiAgIHotaW5kZXg6IDE7XG4gfVxuIC5jYXJkQ29udGFpbmVye1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbiB9XG4gLmNhcmR7XG4gICB3aWR0aDogMjEwcHg7XG4gICBtYXJnaW46IDEwcHggMTBweDtcbiAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gfVxuIC5idXR0b24tcG9ze1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgYm90dG9tOiA0cHg7XG4gICBwYWRkaW5nLXRvcDogMTBweDtcbiAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgbWFyZ2luLWxlZnQ6IDM3JTtcbiB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recom',
          templateUrl: './recom.component.html',
          styleUrls: ['./recom.component.css']
        }]
      }], function () {
        return [{
          type: _recommended_service__WEBPACK_IMPORTED_MODULE_1__["RecommendedService"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recommended.service.ts":
  /*!****************************************!*\
    !*** ./src/app/recommended.service.ts ***!
    \****************************************/

  /*! exports provided: RecommendedService */

  /***/
  function srcAppRecommendedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendedService", function () {
      return RecommendedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RecommendedService = /*#__PURE__*/function () {
      function RecommendedService(http) {
        _classCallCheck(this, RecommendedService);

        this.http = http;
      }

      _createClass(RecommendedService, [{
        key: "getData",
        value: function getData(token) {
          return this.http.get("http://localhost:8888/api/recom", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            console.log(userData);
            return userData;
          }));
        }
      }, {
        key: "addData",
        value: function addData(recom, token) {
          return this.http.post("http://localhost:8888/api/recom", recom, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "deleteData",
        value: function deleteData(pid, token) {
          return this.http["delete"]("http://localhost:8888/api/recom?id=".concat(pid), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }]);

      return RecommendedService;
    }();

    RecommendedService.ɵfac = function RecommendedService_Factory(t) {
      return new (t || RecommendedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RecommendedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecommendedService,
      factory: RecommendedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recommended.ts":
  /*!********************************!*\
    !*** ./src/app/recommended.ts ***!
    \********************************/

  /*! exports provided: Recommended */

  /***/
  function srcAppRecommendedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Recommended", function () {
      return Recommended;
    });

    var Recommended = function Recommended() {
      _classCallCheck(this, Recommended);
    };
    /***/

  },

  /***/
  "./src/app/router.service.ts":
  /*!***********************************!*\
    !*** ./src/app/router.service.ts ***!
    \***********************************/

  /*! exports provided: RouterService */

  /***/
  function srcAppRouterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouterService", function () {
      return RouterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var RouterService = /*#__PURE__*/function () {
      function RouterService(router, location) {
        _classCallCheck(this, RouterService);

        this.router = router;
        this.location = location;
      }

      _createClass(RouterService, [{
        key: "tologin",
        value: function tologin() {
          this.router.navigate(["/login"]);
        }
      }, {
        key: "tosignup",
        value: function tosignup() {
          this.router.navigate(["/signup"]);
        }
      }, {
        key: "todashboard",
        value: function todashboard() {
          this.router.navigate(["/dashboard"]);
        }
      }, {
        key: "tocontact",
        value: function tocontact() {
          this.router.navigate(["/contact"]);
        }
      }, {
        key: "tofav",
        value: function tofav() {
          this.router.navigate(["/dashboard/favs"]);
        }
      }, {
        key: "tohelp",
        value: function tohelp() {
          this.router.navigate(["/dashboard/help"]);
        }
      }, {
        key: "tostatOpener",
        value: function tostatOpener(pid) {
          this.router.navigate(['dashboard', {
            outlets: {
              statOpener: ['statOpener', pid, 'view']
            }
          }]);
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }]);

      return RouterService;
    }();

    RouterService.ɵfac = function RouterService_Factory(t) {
      return new (t || RouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
    };

    RouterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RouterService,
      factory: RouterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../fav */
    "./src/app/fav.ts");
    /* harmony import */


    var _recommended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../recommended */
    "./src/app/recommended.ts");
    /* harmony import */


    var _cricapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cricapi.service */
    "./src/app/cricapi.service.ts");
    /* harmony import */


    var _favourites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../favourites.service */
    "./src/app/favourites.service.ts");
    /* harmony import */


    var _recommended_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../recommended.service */
    "./src/app/recommended.service.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function SearchComponent_mat_card_10_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_mat_card_10_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r4.addToFav(data_r1);
          return ctx_r4.onView(data_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchComponent_mat_card_10_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_mat_card_10_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.removeFromFav(data_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchComponent_mat_card_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_mat_card_10_button_11_Template, 3, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchComponent_mat_card_10_button_12_Template, 3, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country : ", data_r1.country, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID : ", data_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r1.status);
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(cricapi, favser, recomser, route) {
        _classCallCheck(this, SearchComponent);

        this.cricapi = cricapi;
        this.favser = favser;
        this.recomser = recomser;
        this.route = route;
        this.fav = new _fav__WEBPACK_IMPORTED_MODULE_1__["Favs"]();
        this.recom = new _recommended__WEBPACK_IMPORTED_MODULE_2__["Recommended"]();
        this.list = [];
        this.val = "";
        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.list.length
        };
      }

      _createClass(SearchComponent, [{
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }
        }
      }, {
        key: "getData",
        value: function getData(val) {
          var _this13 = this;

          this.cricapi.searchPlayer(val).subscribe(function (res) {
            _this13.list = res.data;

            var _iterator = _createForOfIteratorHelper(_this13.list),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var obj = _step.value;
                obj.status = true;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onView",
        value: function onView(id) {
          this.Id = id;
          sessionStorage.setItem('fId', this.Id);
        }
      }, {
        key: "addToFav",
        value: function addToFav(data) {
          var _this14 = this;

          data.status = false;
          this.cricapi.statsPlayer(sessionStorage.getItem('fId')).subscribe(function (res) {
            _this14.fav.dateOfBirth = res['data']['dateOfBirth'];
            _this14.fav.name = res['data']['name'];
            _this14.fav.placeOfBirth = res['data']['placeOfBirth'];
            _this14.fav.playerImg = res['data']['playerImg'];
            _this14.fav.role = res['data']['role'];
            _this14.fav.status = false;
            _this14.fav.country = res['data']['country'];
            _this14.fav.username = sessionStorage.getItem('username');
            _this14.fav.pid = sessionStorage.getItem('fId');
            _this14.recom.dateOfBirth = res['data']['dateOfBirth'];
            _this14.recom.name = res['data']['name'];
            _this14.recom.placeOfBirth = res['data']['placeOfBirth'];
            _this14.recom.playerImg = res['data']['playerImg'];
            _this14.recom.role = res['data']['role'];
            _this14.recom.country = res['data']['country'];
            _this14.recom.pid = sessionStorage.getItem('fId');

            _this14.recomser.addData(_this14.recom, sessionStorage.getItem('token')).subscribe(function (res) {
              return console.log("added to recom");
            }, function (err) {
              return console.log(err);
            });

            _this14.favser.addData(_this14.fav, sessionStorage.getItem('token')).subscribe(function (res) {
              return console.log("added to fav");
            }, function (err) {
              return console.log(err);
            });
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "removeFromFav",
        value: function removeFromFav(data) {
          data.status = true;
          this.recomser.deleteData(data.pid, sessionStorage.getItem('token')).subscribe(function (res) {
            return console.log("removed from fav");
          }, function (err) {
            return console.log(err);
          });
          this.favser.deleteDataUser(sessionStorage.getItem('username'), data.name, sessionStorage.getItem('token')).subscribe(function (res) {
            return console.log("removed from recom");
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cricapi_service__WEBPACK_IMPORTED_MODULE_3__["CricapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_favourites_service__WEBPACK_IMPORTED_MODULE_4__["FavouritesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recommended_service__WEBPACK_IMPORTED_MODULE_5__["RecommendedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 14,
      vars: 5,
      consts: [[1, "formTaker-Expansion"], ["appearance", "outline"], ["matInput", "", "placeholder", "Please enter Name", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "buttn", 3, "click"], [1, "cardContainer"], ["class", "card", "style", "background: linear-gradient(\n      rgba(255, 255, 255, 0.8), \n      rgba(255, 255, 255, 0.7)\n    ),url('../../assets/doodul.png')", 4, "ngFor", "ngForOf"], [1, "pagination"], [3, "pageChange"], [1, "card", 2, "background", "linear-gradient(\n      rgba(255, 255, 255, 0.8), \n      rgba(255, 255, 255, 0.7)\n    ),url('../../assets/doodul.png')"], [2, "width", "80%", "margin-left", "10%"], [2, "margin-top", "1px", "margin-bottom", "0px"], ["mat-icon-button", "", "class", "button-pos", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "class", "button-pos", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "button-pos", 3, "click"], ["mat-icon-button", "", "color", "warn", 1, "button-pos", 3, "click"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.val = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "eg. Sachin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_7_listener() {
            return ctx.getData(ctx.val);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_mat_card_10_Template, 13, 5, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pagination-controls", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SearchComponent_Template_pagination_controls_pageChange_13_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 2, ctx.list, ctx.config));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationControlsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginatePipe"]],
      styles: [".formTaker-Expansion[_ngcontent-%COMP%]{\n   display: flex;\n   flex-direction: column;\n   width: 40%;\n   margin: 2vh auto;\n}\n.buttn[_ngcontent-%COMP%]{\n   width: 50%;\n   margin: 2vh auto;\n}\n.cardContainer[_ngcontent-%COMP%]{\n   display: flex;\n   flex-wrap: wrap;\n }\n.card[_ngcontent-%COMP%]{\n   width: 200px;\n   margin: 15px;\n }\n.pagination[_ngcontent-%COMP%]{\n   position: absolute;\n   margin-top: 30px;\n   margin-bottom: 60px;\n   right: 20px;\n }\n.button-pos[_ngcontent-%COMP%]{\n    position: relative;\n    margin: 2vh auto;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixVQUFVO0dBQ1YsZ0JBQWdCO0FBQ25CO0FBQ0E7R0FDRyxVQUFVO0dBQ1YsZ0JBQWdCO0FBQ25CO0FBQ0E7R0FDRyxhQUFhO0dBQ2IsZUFBZTtDQUNqQjtBQUNEO0dBQ0csWUFBWTtHQUNaLFlBQVk7Q0FDZDtBQUVEO0dBQ0csa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixtQkFBbUI7R0FDbkIsV0FBVztDQUNiO0FBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1UYWtlci1FeHBhbnNpb257XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIHdpZHRoOiA0MCU7XG4gICBtYXJnaW46IDJ2aCBhdXRvO1xufVxuLmJ1dHRue1xuICAgd2lkdGg6IDUwJTtcbiAgIG1hcmdpbjogMnZoIGF1dG87XG59XG4uY2FyZENvbnRhaW5lcntcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LXdyYXA6IHdyYXA7XG4gfVxuLmNhcmR7XG4gICB3aWR0aDogMjAwcHg7XG4gICBtYXJnaW46IDE1cHg7XG4gfVxuXG4ucGFnaW5hdGlvbntcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgcmlnaHQ6IDIwcHg7XG4gfVxuIC5idXR0b24tcG9ze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDJ2aCBhdXRvO1xuIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [{
          type: _cricapi_service__WEBPACK_IMPORTED_MODULE_3__["CricapiService"]
        }, {
          type: _favourites_service__WEBPACK_IMPORTED_MODULE_4__["FavouritesService"]
        }, {
          type: _recommended_service__WEBPACK_IMPORTED_MODULE_5__["RecommendedService"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _userAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../userAuth */
    "./src/app/userAuth.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    function SignupComponent_small_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is mandatory field ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_small_15_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password cannot be left blank ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_small_15_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must have minimum 8characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_small_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_small_15_small_1_Template, 2, 0, "small", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_small_15_small_2_Template, 2, 0, "small", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.minlength);
      }
    }

    function SignupComponent_small_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is mandatory field ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_small_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter a valid 10 digit Mobile Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(route, userser, auth) {
        _classCallCheck(this, SignupComponent);

        this.route = route;
        this.userser = userser;
        this.auth = auth;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userauth = new _userAuth__WEBPACK_IMPORTED_MODULE_3__["UserAuth"]();
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signIn",
        value: function signIn() {
          this.user.mobile = this.loginForm.value.mobile;
          this.user.username = this.loginForm.value.email;
          this.user.name = this.loginForm.value.name;
          this.userauth.username = this.loginForm.value.email;
          this.userauth.password = this.loginForm.value.password;
          this.auth.signup(this.userauth).subscribe(function (res) {
            return console.log();
          }, function (err) {
            return console.log(err);
          });
          this.userser.signup(this.user).subscribe(function (res) {
            return console.log();
          }, function (err) {
            return console.log(err);
          });
          this.route.tologin();
        }
      }, {
        key: "tologin",
        value: function tologin() {
          this.route.tologin();
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          var _this15 = this;

          var file = event.target.files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function (_event) {
            _this15.user.image = reader.result.toString();
          };
        }
      }, {
        key: "email",
        get: function get() {
          return this.loginForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }, {
        key: "name",
        get: function get() {
          return this.loginForm.get('name');
        }
      }, {
        key: "mobile",
        get: function get() {
          return this.loginForm.get('mobile');
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 39,
      vars: 6,
      consts: [[1, "signup"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "text", "placeholder", "  Enter email", "formControlName", "email", 1, "email"], ["class", "err", 4, "ngIf"], ["for", "password"], ["type", "password", "placeholder", "  Enter password", "formControlName", "password", 1, "password"], [4, "ngIf"], ["for", "name"], ["type", "text", "placeholder", "  Enter your name", "formControlName", "name", 1, "name"], ["for", "mobile"], ["type", "text", "placeholder", "  Enter your mobile", "formControlName", "mobile", 1, "mobile"], [1, "image-upload-container", "btn", "btn-bwm"], ["type", "file", 1, "image", 3, "change"], ["imageInput", ""], [1, "but"], ["value", "sign Up", 3, "disabled"], ["value", "log In", 3, "click"], [1, "err"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() {
            return ctx.signIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignupComponent_small_9_Template, 2, 0, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_small_15_Template, 3, 2, "small", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_small_21_Template, 2, 0, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignupComponent_small_27_Template, 2, 0, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SignupComponent_Template_input_change_31_listener($event) {
            return ctx.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_36_listener() {
            return ctx.tologin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Already Registered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile.invalid && (ctx.mobile.dirty || ctx.mobile.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
      styles: ["form[_ngcontent-%COMP%]{\n   border: 1px solid rgb(0, 0, 0);\n   background-color: rgba(0, 0, 0, 0.616);\n   border-width: 2px;\n   margin:auto;\n   margin-top: 20px;\n   width:40vw;\n} \n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n   padding: 10px;\n} \n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n   width : 35%;\n   height: 30px;\n   background-color: rgba(6, 3, 22, 0.692);\n    border-width: 1px;\n    border-color: rgba(0, 0, 0, 0.466);\n    color: lavenderblush;\n   font-size: 15px;\n   margin: 2vh auto;\n} \n\n.but[_ngcontent-%COMP%]{\n   display: flex;\n   margin-left: 10px;\n} \n\nsmall[_ngcontent-%COMP%]{\n   color: red;\n   font-style: italic;\n} \n\nlabel[_ngcontent-%COMP%]{\n   color: white;\n   font-size: 20px;\n   margin-bottom: 10px;\n   margin-left:  1.5%;\n} \n\n.signup[_ngcontent-%COMP%]{\n   color:rgb(0, 0, 0);\n   font-size: 28px;\n   text-align: center;\n   margin-top: 2.2%;\n   margin-bottom: 3%;\n} \n\n.email[_ngcontent-%COMP%]{\n   width: 27vw;\n   background-color: rgba(0, 0, 0, 0);\n   border-width: 1px;\n   border-color: rgba(0, 0, 0, 0.466);\n   color: lavenderblush;\n   height: 28px;\n   margin-left: 64px;\n} \n\n.password[_ngcontent-%COMP%]{\n   width: 27vw;\n   background-color: rgba(0, 0, 0, 0);\n   border-width: 1px;\n   border-color: rgba(0, 0, 0, 0.466);\n   color: lavenderblush;\n   height: 28px;\n   margin-left: 25px;\n} \n\n.name[_ngcontent-%COMP%]{\n   width: 27vw;\n   background-color: rgba(0, 0, 0, 0);\n   border-width: 1px;\n   border-color: rgba(0, 0, 0, 0.466);\n   color: lavenderblush;\n   height: 28px;\n   margin-left: 60px;\n} \n\n.mobile[_ngcontent-%COMP%]{\n   width: 27vw;\n   background-color: rgba(0, 0, 0, 0);\n   border-width: 1px;\n   border-color: rgba(0, 0, 0, 0.466);\n   color: lavenderblush;\n   height: 25px;\n   margin-left: 53px;\n} \n\n.err[_ngcontent-%COMP%]{\n   margin-left: 130px;\n} \n\n.image[_ngcontent-%COMP%]{\n   width: 27vw;\n   border-width: 1px;\n   color: rgb(255, 4, 4);\n   height: 25px;\n   margin-left: 60px;\n} \n\n.heading[_ngcontent-%COMP%]{\n   font-size: xx-large;\n   margin-right: 24%;\n   margin-left: 1%;\n } \n\n.top[_ngcontent-%COMP%]{\n   position: absolute;\n   right: 120px;\n   font-size: larger;\n } \n\n.side[_ngcontent-%COMP%]{\n   margin: 20px 10px;\n } \n\n.logo[_ngcontent-%COMP%]{\n   height: 30px;\n } \n\n.dropdown[_ngcontent-%COMP%] {\n   position: absolute;\n   right: 48px;\n } \n\n.dropdown-content[_ngcontent-%COMP%] {\n   display: none;\n   position: absolute; \n   background-color: #f9f9f9;\n   min-width: 80px;\n   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n } \n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n   z-index: 2;\n   display: block;\n   color: rgb(255, 255, 255);\n   background-color: rgba(0, 0, 0, 0.644);\n } \n\n.foot[_ngcontent-%COMP%]{\n   position: absolute;\n   bottom: 0px;\n   width: 99%;\n   z-index: 2;\n } \n\n.icons[_ngcontent-%COMP%]{\n   margin-left: 10px;\n   height: 30px;\n } \n\n.copy[_ngcontent-%COMP%]{\n   position: absolute;\n   right: 10px;\n   font-size: 13px;\n } \n\n.foot-text[_ngcontent-%COMP%]{\n   font-size: medium;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csOEJBQThCO0dBQzlCLHNDQUFzQztHQUN0QyxpQkFBaUI7R0FDakIsV0FBVztHQUNYLGdCQUFnQjtHQUNoQixVQUFVO0FBQ2I7O0FBRUE7R0FDRyxhQUFhO0FBQ2hCOztBQUVBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWix1Q0FBdUM7SUFDdEMsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxvQkFBb0I7R0FDckIsZUFBZTtHQUNmLGdCQUFnQjtBQUNuQjs7QUFFQTtHQUNHLGFBQWE7R0FDYixpQkFBaUI7QUFDcEI7O0FBRUE7R0FDRyxVQUFVO0dBQ1Ysa0JBQWtCO0FBQ3JCOztBQUNBO0dBQ0csWUFBWTtHQUNaLGVBQWU7R0FDZixtQkFBbUI7R0FDbkIsa0JBQWtCO0FBQ3JCOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtBQUNwQjs7QUFDQTtHQUNHLFdBQVc7R0FDWCxrQ0FBa0M7R0FDbEMsaUJBQWlCO0dBQ2pCLGtDQUFrQztHQUNsQyxvQkFBb0I7R0FDcEIsWUFBWTtHQUNaLGlCQUFpQjtBQUNwQjs7QUFDQTtHQUNHLFdBQVc7R0FDWCxrQ0FBa0M7R0FDbEMsaUJBQWlCO0dBQ2pCLGtDQUFrQztHQUNsQyxvQkFBb0I7R0FDcEIsWUFBWTtHQUNaLGlCQUFpQjtBQUNwQjs7QUFDQTtHQUNHLFdBQVc7R0FDWCxrQ0FBa0M7R0FDbEMsaUJBQWlCO0dBQ2pCLGtDQUFrQztHQUNsQyxvQkFBb0I7R0FDcEIsWUFBWTtHQUNaLGlCQUFpQjtBQUNwQjs7QUFDQTtHQUNHLFdBQVc7R0FDWCxrQ0FBa0M7R0FDbEMsaUJBQWlCO0dBQ2pCLGtDQUFrQztHQUNsQyxvQkFBb0I7R0FDcEIsWUFBWTtHQUNaLGlCQUFpQjtBQUNwQjs7QUFDQTtHQUNHLGtCQUFrQjtBQUNyQjs7QUFDQTtHQUNHLFdBQVc7R0FDWCxpQkFBaUI7R0FDakIscUJBQXFCO0dBQ3JCLFlBQVk7R0FDWixpQkFBaUI7QUFDcEI7O0FBQ0E7R0FDRyxtQkFBbUI7R0FDbkIsaUJBQWlCO0dBQ2pCLGVBQWU7Q0FDakI7O0FBQ0E7R0FDRSxrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLGlCQUFpQjtDQUNuQjs7QUFDQTtHQUNFLGlCQUFpQjtDQUNuQjs7QUFDQTtHQUNFLFlBQVk7Q0FDZDs7QUFDQTtHQUNFLGtCQUFrQjtHQUNsQixXQUFXO0NBQ2I7O0FBRUE7R0FDRSxhQUFhO0dBQ2Isa0JBQWtCO0dBQ2xCLHlCQUF5QjtHQUN6QixlQUFlO0dBQ2YsNENBQTRDO0NBQzlDOztBQUVBO0dBQ0UsVUFBVTtHQUNWLGNBQWM7R0FDZCx5QkFBeUI7R0FDekIsc0NBQXNDO0NBQ3hDOztBQUNBO0dBQ0Usa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxVQUFVO0dBQ1YsVUFBVTtDQUNaOztBQUNBO0dBQ0UsaUJBQWlCO0dBQ2pCLFlBQVk7Q0FDZDs7QUFDQTtHQUNFLGtCQUFrQjtHQUNsQixXQUFXO0dBQ1gsZUFBZTtDQUNqQjs7QUFDQTtHQUNFLGlCQUFpQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XG4gICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE2KTtcbiAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgbWFyZ2luOmF1dG87XG4gICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgd2lkdGg6NDB2dztcbn0gXG5cbmZvcm0gZGl2IHtcbiAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmZvcm0gZGl2IGJ1dHRvbntcbiAgIHdpZHRoIDogMzUlO1xuICAgaGVpZ2h0OiAzMHB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAzLCAyMiwgMC42OTIpO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ2Nik7XG4gICAgY29sb3I6IGxhdmVuZGVyYmx1c2g7XG4gICBmb250LXNpemU6IDE1cHg7XG4gICBtYXJnaW46IDJ2aCBhdXRvO1xufVxuXG4uYnV0e1xuICAgZGlzcGxheTogZmxleDtcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5zbWFsbHtcbiAgIGNvbG9yOiByZWQ7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5sYWJlbHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIGZvbnQtc2l6ZTogMjBweDtcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICBtYXJnaW4tbGVmdDogIDEuNSU7XG59XG5cbi5zaWdudXB7XG4gICBjb2xvcjpyZ2IoMCwgMCwgMCk7XG4gICBmb250LXNpemU6IDI4cHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBtYXJnaW4tdG9wOiAyLjIlO1xuICAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG4uZW1haWx7XG4gICB3aWR0aDogMjd2dztcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICBib3JkZXItd2lkdGg6IDFweDtcbiAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ2Nik7XG4gICBjb2xvcjogbGF2ZW5kZXJibHVzaDtcbiAgIGhlaWdodDogMjhweDtcbiAgIG1hcmdpbi1sZWZ0OiA2NHB4O1xufVxuLnBhc3N3b3Jke1xuICAgd2lkdGg6IDI3dnc7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xuICAgY29sb3I6IGxhdmVuZGVyYmx1c2g7XG4gICBoZWlnaHQ6IDI4cHg7XG4gICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbi5uYW1le1xuICAgd2lkdGg6IDI3dnc7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xuICAgY29sb3I6IGxhdmVuZGVyYmx1c2g7XG4gICBoZWlnaHQ6IDI4cHg7XG4gICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbi5tb2JpbGV7XG4gICB3aWR0aDogMjd2dztcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICBib3JkZXItd2lkdGg6IDFweDtcbiAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ2Nik7XG4gICBjb2xvcjogbGF2ZW5kZXJibHVzaDtcbiAgIGhlaWdodDogMjVweDtcbiAgIG1hcmdpbi1sZWZ0OiA1M3B4O1xufVxuLmVycntcbiAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbn1cbi5pbWFnZXtcbiAgIHdpZHRoOiAyN3Z3O1xuICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICBjb2xvcjogcmdiKDI1NSwgNCwgNCk7XG4gICBoZWlnaHQ6IDI1cHg7XG4gICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbi5oZWFkaW5ne1xuICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgIG1hcmdpbi1yaWdodDogMjQlO1xuICAgbWFyZ2luLWxlZnQ6IDElO1xuIH1cbiAudG9we1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgcmlnaHQ6IDEyMHB4O1xuICAgZm9udC1zaXplOiBsYXJnZXI7XG4gfVxuIC5zaWRle1xuICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gfVxuIC5sb2dve1xuICAgaGVpZ2h0OiAzMHB4O1xuIH1cbiAuZHJvcGRvd24ge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgcmlnaHQ6IDQ4cHg7XG4gfVxuIFxuIC5kcm9wZG93bi1jb250ZW50IHtcbiAgIGRpc3BsYXk6IG5vbmU7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgIG1pbi13aWR0aDogODBweDtcbiAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuIH1cbiBcbiAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgei1pbmRleDogMjtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NDQpO1xuIH1cbiAuZm9vdHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGJvdHRvbTogMHB4O1xuICAgd2lkdGg6IDk5JTtcbiAgIHotaW5kZXg6IDI7XG4gfVxuIC5pY29uc3tcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgaGVpZ2h0OiAzMHB4O1xuIH1cbiAuY29weXtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHJpZ2h0OiAxMHB4O1xuICAgZm9udC1zaXplOiAxM3B4O1xuIH1cbiAuZm9vdC10ZXh0e1xuICAgZm9udC1zaXplOiBtZWRpdW07XG4gfVxuIFxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/stat-opener/stat-opener.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/stat-opener/stat-opener.component.ts ***!
    \******************************************************/

  /*! exports provided: StatOpenerComponent */

  /***/
  function srcAppStatOpenerStatOpenerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatOpenerComponent", function () {
      return StatOpenerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _statview_statview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../statview/statview.component */
    "./src/app/statview/statview.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StatOpenerComponent = /*#__PURE__*/function () {
      function StatOpenerComponent(dialogue, route, actiRoute) {
        var _this16 = this;

        _classCallCheck(this, StatOpenerComponent);

        this.dialogue = dialogue;
        this.route = route;
        this.actiRoute = actiRoute;
        var id = +this.actiRoute.snapshot.paramMap.get('pid');
        this.dialogue.open(_statview_statview_component__WEBPACK_IMPORTED_MODULE_1__["StatviewComponent"], {
          data: {
            pid: id
          }
        }).afterClosed().subscribe(function (result) {
          _this16.route.back();
        });
      }

      _createClass(StatOpenerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }
        }
      }]);

      return StatOpenerComponent;
    }();

    StatOpenerComponent.ɵfac = function StatOpenerComponent_Factory(t) {
      return new (t || StatOpenerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    StatOpenerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatOpenerComponent,
      selectors: [["app-stat-opener"]],
      decls: 0,
      vars: 0,
      template: function StatOpenerComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXQtb3BlbmVyL3N0YXQtb3BlbmVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatOpenerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stat-opener',
          templateUrl: './stat-opener.component.html',
          styleUrls: ['./stat-opener.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/stats/stats.component.ts":
  /*!******************************************!*\
    !*** ./src/app/stats/stats.component.ts ***!
    \******************************************/

  /*! exports provided: StatsComponent */

  /***/
  function srcAppStatsStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatsComponent", function () {
      return StatsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cricapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../cricapi.service */
    "./src/app/cricapi.service.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function StatsComponent_mat_card_10_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatsComponent_mat_card_10_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r3.onView(data_r1.id);
          return ctx_r3.viewStats(data_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StatsComponent_mat_card_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StatsComponent_mat_card_10_button_11_Template, 3, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country : ", data_r1.country, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID : ", data_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1.status);
      }
    }

    var StatsComponent = /*#__PURE__*/function () {
      function StatsComponent(cricapi, route) {
        _classCallCheck(this, StatsComponent);

        this.cricapi = cricapi;
        this.route = route;
        this.list = [];
        this.val = "";
        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.list.length
        };
      }

      _createClass(StatsComponent, [{
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }
        }
      }, {
        key: "onView",
        value: function onView(id) {
          this.Id = id;
          sessionStorage.setItem('pId', this.Id);
        }
      }, {
        key: "getData",
        value: function getData(val) {
          var _this17 = this;

          this.cricapi.searchPlayer(val).subscribe(function (res) {
            _this17.list = res.data;

            var _iterator2 = _createForOfIteratorHelper(_this17.list),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var obj = _step2.value;
                obj.status = true;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "viewStats",
        value: function viewStats(data) {
          this.route.tostatOpener(data.pid);
        }
      }]);

      return StatsComponent;
    }();

    StatsComponent.ɵfac = function StatsComponent_Factory(t) {
      return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cricapi_service__WEBPACK_IMPORTED_MODULE_1__["CricapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"]));
    };

    StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatsComponent,
      selectors: [["app-stats"]],
      decls: 14,
      vars: 5,
      consts: [[1, "formTaker-Expansion"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter Name of Player", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "buttn", 3, "click"], [1, "cardContainer"], ["class", "card", "style", "background: linear-gradient(\n      rgba(255, 255, 255, 0.8), \n      rgba(255, 255, 255, 0.7)\n    ),url('../../assets/doodul.png')", 4, "ngFor", "ngForOf"], [1, "pagination"], [3, "pageChange"], [1, "card", 2, "background", "linear-gradient(\n      rgba(255, 255, 255, 0.8), \n      rgba(255, 255, 255, 0.7)\n    ),url('../../assets/doodul.png')"], [2, "width", "80%", "margin-left", "10%"], [2, "margin-top", "1px", "margin-bottom", "0px"], ["mat-icon-button", "", "class", "button-pos", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "button-pos", 3, "click"]],
      template: function StatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Get Statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StatsComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.val = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "eg. Sachin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatsComponent_Template_button_click_7_listener() {
            return ctx.getData(ctx.val);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StatsComponent_mat_card_10_Template, 12, 4, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pagination-controls", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function StatsComponent_Template_pagination_controls_pageChange_13_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 2, ctx.list, ctx.config));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]],
      styles: [".formTaker-Expansion[_ngcontent-%COMP%]{\n   display: flex;\n   flex-direction: column;\n   width: 40%;\n   margin: 2vh auto;\n}\n.buttn[_ngcontent-%COMP%]{\n   width: 50%;\n   margin: 2vh auto;\n}\n.cardContainer[_ngcontent-%COMP%]{\n   display: flex;\n   flex-wrap: wrap;\n }\n.card[_ngcontent-%COMP%]{\n   width: 210px;\n   margin: 12px;\n }\n.pagination[_ngcontent-%COMP%]{\n   position: absolute;\n   margin-top: 30px;\n   margin-bottom: 60px;\n   right: 20px;\n }\n.button-pos[_ngcontent-%COMP%]{\n    position: relative;\n    margin: 2vh auto;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsVUFBVTtHQUNWLGdCQUFnQjtBQUNuQjtBQUNBO0dBQ0csVUFBVTtHQUNWLGdCQUFnQjtBQUNuQjtBQUNBO0dBQ0csYUFBYTtHQUNiLGVBQWU7Q0FDakI7QUFDRDtHQUNHLFlBQVk7R0FDWixZQUFZO0NBQ2Q7QUFFRDtHQUNHLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEIsbUJBQW1CO0dBQ25CLFdBQVc7Q0FDYjtBQUNBO0lBQ0csa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybVRha2VyLUV4cGFuc2lvbntcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgd2lkdGg6IDQwJTtcbiAgIG1hcmdpbjogMnZoIGF1dG87XG59XG4uYnV0dG57XG4gICB3aWR0aDogNTAlO1xuICAgbWFyZ2luOiAydmggYXV0bztcbn1cbi5jYXJkQ29udGFpbmVye1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbiB9XG4uY2FyZHtcbiAgIHdpZHRoOiAyMTBweDtcbiAgIG1hcmdpbjogMTJweDtcbiB9XG5cbi5wYWdpbmF0aW9ue1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgbWFyZ2luLXRvcDogMzBweDtcbiAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICByaWdodDogMjBweDtcbiB9XG4gLmJ1dHRvbi1wb3N7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMnZoIGF1dG87XG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stats',
          templateUrl: './stats.component.html',
          styleUrls: ['./stats.component.css']
        }]
      }], function () {
        return [{
          type: _cricapi_service__WEBPACK_IMPORTED_MODULE_1__["CricapiService"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/statview/statview.component.ts":
  /*!************************************************!*\
    !*** ./src/app/statview/statview.component.ts ***!
    \************************************************/

  /*! exports provided: StatviewComponent */

  /***/
  function srcAppStatviewStatviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatviewComponent", function () {
      return StatviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _cricapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cricapi.service */
    "./src/app/cricapi.service.ts");
    /* harmony import */


    var _router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../router.service */
    "./src/app/router.service.ts");

    var StatviewComponent = /*#__PURE__*/function () {
      function StatviewComponent(diaRef, data, cric, route) {
        _classCallCheck(this, StatviewComponent);

        this.diaRef = diaRef;
        this.data = data;
        this.cric = cric;
        this.route = route;
      }

      _createClass(StatviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
            this.route.tologin();
          }

          console.log("Call the Cric Player ApI based on PID to get player stats.");
          this.cric.statsPlayer(sessionStorage.getItem('pId')).subscribe(function (res) {
            _this18.stat = res['data'];
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return StatviewComponent;
    }();

    StatviewComponent.ɵfac = function StatviewComponent_Factory(t) {
      return new (t || StatviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cricapi_service__WEBPACK_IMPORTED_MODULE_2__["CricapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]));
    };

    StatviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatviewComponent,
      selectors: [["app-statview"]],
      decls: 31,
      vars: 8,
      consts: [[1, "", 2, "text-align", "center"], ["height", "200px", 3, "src"], [1, ""], [1, "age"]],
      template: function StatviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Date of Birth :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Born :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Country :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Role :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Batting Style :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bowling Style :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.stat.playerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stat.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stat.dateOfBirth.slice(0, 10), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stat.placeOfBirth, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stat.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stat.role, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stat.battingStyle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stat.bowlingStyle, "");
        }
      },
      styles: ["table[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {  \n   border: 1px solid #ddd;\n   text-align: left;\n }\n \n table[_ngcontent-%COMP%] {\n   border-collapse: collapse;\n   width: 100%;\n }\n \n th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n   padding: 5px;\n }\n \n *[_ngcontent-%COMP%]{\n  box-sizing: border-box;\n}\n \n .menu[_ngcontent-%COMP%] {\n  width:20%;\n  float: left;\n  padding: 1px;\n}\n \n .main[_ngcontent-%COMP%] {\n  width: 80%;\n  float: left;\n  padding: 1px;\n}\n \n .bowling[_ngcontent-%COMP%]{\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHZpZXcvc3RhdHZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLHNCQUFzQjtHQUN0QixnQkFBZ0I7Q0FDbEI7O0NBRUE7R0FDRSx5QkFBeUI7R0FDekIsV0FBVztDQUNiOztDQUVBO0dBQ0UsWUFBWTtDQUNkOztDQUVEO0VBQ0Usc0JBQXNCO0FBQ3hCOztDQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0NBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7Q0FDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N0YXR2aWV3L3N0YXR2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGQsIHRoIHsgIFxuICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gfVxuIFxuIHRhYmxlIHtcbiAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICB3aWR0aDogMTAwJTtcbiB9XG4gXG4gdGgsIHRkIHtcbiAgIHBhZGRpbmc6IDVweDtcbiB9XG5cbip7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tZW51IHtcbiAgd2lkdGg6MjAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4ubWFpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxcHg7XG59XG4uYm93bGluZ3tcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statview',
          templateUrl: './statview.component.html',
          styleUrls: ['./statview.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _cricapi_service__WEBPACK_IMPORTED_MODULE_2__["CricapiService"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
      }

      _createClass(UserService, [{
        key: "signup",
        value: function signup(user) {
          return this.httpClient.post("http://localhost:8888/api/user", user);
        }
      }, {
        key: "getdetails",
        value: function getdetails(username, token) {
          return this.httpClient.get("http://localhost:8888/api/user/pro/token?username=".concat(username), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "modifyUser",
        value: function modifyUser(user, token) {
          return this.httpClient.put("http://localhost:8888/api/user/pro/token?username=".concat(user.username), user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(username, token) {
          return this.httpClient["delete"]("http://localhost:8888/api/user/pro/token?username=".concat(username), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer ".concat(token))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            return userData;
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user.ts":
  /*!*************************!*\
    !*** ./src/app/user.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/userAuth.ts":
  /*!*****************************!*\
    !*** ./src/app/userAuth.ts ***!
    \*****************************/

  /*! exports provided: UserAuth */

  /***/
  function srcAppUserAuthTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAuth", function () {
      return UserAuth;
    });

    var UserAuth = function UserAuth() {
      _classCallCheck(this, UserAuth);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\TBT\Works\Freelance\cplayer-master\CplayerUI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map