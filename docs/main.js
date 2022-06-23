(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+WD/":
/*!************************************************************************!*\
  !*** ./src/app/admin/show-all-diseases/show-all-diseases.component.ts ***!
  \************************************************************************/
/*! exports provided: ShowAllDiseasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllDiseasesComponent", function() { return ShowAllDiseasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");






function ShowAllDiseasesComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "cdk-accordion", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cdk-accordion-item", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowAllDiseasesComponent_tr_20_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r3.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "cdk-accordion", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "cdk-accordion-item", 10, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowAllDiseasesComponent_tr_20_Template_span_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r4.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "cdk-accordion", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "cdk-accordion-item", 10, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowAllDiseasesComponent_tr_20_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r5.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowAllDiseasesComponent_tr_20_Template_td_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const d_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.goToshowDisease(d_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowAllDiseasesComponent_tr_20_Template_i_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const d_r1 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goToEditDisease(d_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowAllDiseasesComponent_tr_20_Template_i_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const d_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.deleteDisease(d_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r1.chronic_disease, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-header-" + i_r2)("aria-expanded", _r3.expanded)("aria-controls", "accordion-body-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 33, d_r1.description, 0, 30), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", _r3.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-body-" + i_r2)("aria-labelledby", "accordion-header-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 37, d_r1.description, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r3.expanded ? " less" : " more...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-header-" + i_r2)("aria-expanded", _r4.expanded)("aria-controls", "accordion-body-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](23, 40, d_r1.syndrome, 0, 30), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", _r4.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-body-" + i_r2)("aria-labelledby", "accordion-header-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 44, d_r1.syndrome, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r4.expanded ? " less" : " more...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-header-" + i_r2)("aria-expanded", _r5.expanded)("aria-controls", "accordion-body-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](35, 47, d_r1.treatment, 0, 30), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", _r5.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-body-" + i_r2)("aria-labelledby", "accordion-header-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 51, d_r1.treatment, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r5.expanded ? " less" : " more...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](43, 54, d_r1.created_at, 0, 10));
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class ShowAllDiseasesComponent {
    constructor(api) {
        this.api = api;
        this.page = 1;
        this.count = 0;
        this.tableSize = 5;
        this.expandedIndex = 0;
    }
    ngOnInit() {
        this.fetchPosts();
    }
    fetchPosts() {
        this.api.getDisease().subscribe((data) => {
            this.disease = data.Chronic_Diseases;
            console.log(this.disease);
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
}
ShowAllDiseasesComponent.ɵfac = function ShowAllDiseasesComponent_Factory(t) { return new (t || ShowAllDiseasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ShowAllDiseasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowAllDiseasesComponent, selectors: [["app-show-all-diseases"]], decls: 28, vars: 9, consts: [[1, "all-disease"], [1, "container"], [1, "table"], [1, "table-secondary"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-20"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "pageChange"], [1, "current-page"], [1, "no-p"], [1, "example-accordion"], ["role", "button", "tabindex", "0", 1, "example-accordion-item"], ["accordionItem", "cdkAccordionItem"], [1, "example-accordion-item-header", 3, "click"], ["role", "region", 1, "example-accordion-item-body"], [1, "example-accordion-item-description", "text-primary"], ["accordionItem1", "cdkAccordionItem"], ["accordionItem2", "cdkAccordionItem"], [1, "blueData", 3, "click"], [1, "icona1"], [1, "fa", "fa-pencil", 3, "click"], [1, "icona2"], [1, "fa", "fa-trash", "text-danger", 3, "click"]], template: function ShowAllDiseasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Syndrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Created_At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ShowAllDiseasesComponent_tr_20_Template, 49, 58, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pagination-controls", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ShowAllDiseasesComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.onTableDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " current page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 2, ctx.disease, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, ctx.tableSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_4__["CdkAccordion"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_4__["CdkAccordionItem"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".all-disease[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 0px;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    \r\n    margin-top: 0px;\r\n  }\r\n  .container[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 0;\r\n  }\r\n    .pagination{\r\n     margin-top: 20px ;\r\n    justify-content: center !important;\r\n  }\r\n  h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0 40px;\r\n    font-size: 30px;\r\n    color: var(--black);\r\n  }\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    vertical-align: bottom;\r\n    background: #d6d8db;\r\n  }\r\n  table[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n  }\r\n    .ngx-pagination li:hover{\r\n    background-color: var(--black) !important;\r\n  }\r\n    .ngx-pagination .current{\r\n    background-color: var(--black) !important;\r\n  }\r\n    .ngx-pagination .disabled {\r\n    color: #585151 !important;\r\n  }\r\n  .current-page[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    margin-top: 3px;\r\n    color: var(--black);\r\n  }\r\n  .current-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: var(--black);\r\n  }\r\n  .mt-20[_ngcontent-%COMP%]{\r\n    color: white;\r\n    width: 85%;\r\n    margin-top: 20px;\r\n  }\r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n   font-size: 13px;\r\n }\r\n    .ngx-pagination li:hover{\r\n    background-color: var(--black) !important;\r\n  }\r\n    .ngx-pagination .current{\r\n    background-color: var(--black) !important;\r\n  }\r\n  .hidden[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin: 0 3px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYWxsLWRpc2Vhc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtFQUNDO0tBQ0UsaUJBQWlCO0lBQ2xCLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0VBQ0Q7R0FDRSxlQUFlO0NBQ2pCO0VBQ0M7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBRUE7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic2hvdy1hbGwtZGlzZWFzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWxsLWRpc2Vhc2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTsgKi9cclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gICA6Om5nLWRlZXAgLnBhZ2luYXRpb257XHJcbiAgICAgbWFyZ2luLXRvcDogMjBweCA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwIDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIH1cclxuICB0YWJsZSB0aHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDZkOGRiO1xyXG4gIH1cclxuICB0YWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQge1xyXG4gICAgY29sb3I6ICM1ODUxNTEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmN1cnJlbnQtcGFnZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgfVxyXG4gIC5jdXJyZW50LXBhZ2Ugc3BhbntcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tdC0yMHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuIHRoLHRke1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbiB9XHJcbiAgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGQgc3BhbntcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowAllDiseasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-all-diseases',
                templateUrl: './show-all-diseases.component.html',
                styleUrls: ['./show-all-diseases.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Backup\محاضرات\project\Graduation-project\src\main.ts */"zUnb");


/***/ }),

/***/ "4pOR":
/*!******************************************************!*\
  !*** ./src/app/admin/add-user/add-user.component.ts ***!
  \******************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddUserComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function AddUserComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Characters At least 2. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Numbers At least 8 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type 14 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ad_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ad_r15.name, " ");
} }
function AddUserComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Birth Date Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Blood Type Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.erroeMassage, " ");
} }
class AddUserComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.address = [];
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
            national_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{14}')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{4,}')]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            blood_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            social_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
        });
    }
    ngOnInit() {
        this.getdress();
    }
    getdress() {
        this.api.getProvnces().subscribe((data) => {
            this.address = data.provinces;
        });
    }
    submit(f) {
        this.api.creataccount(f.value).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
                this.message = data.msg;
                console.log(this.message);
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
    goToLogin() {
        this.route.navigate(['/login']);
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 109, vars: 17, consts: [[1, "add-user"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "col-md-6", "col-xs-12"], ["for", "first"], ["type", "text", "formControlName", "full_name", "placeholder", "Full Name", "name", "full_name", 1, "form-control"], [1, "error"], [4, "ngIf"], ["for", ""], ["type", "text", "placeholder", "Phone", "formControlName", "mobile", "name", "phone", 1, "form-control"], ["type", "text", "formControlName", "national_id", "placeholder", "National Id", "name", "national_id", 1, "form-control"], ["name", "address", "formControlName", "address", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["type", "date", "name", "date_of_birth", "formControlName", "date_of_birth", 1, "form-control"], ["name", "gender", "formControlName", "sex", 1, "form-control"], ["value", "male"], ["value", "female"], ["name", "State", "formControlName", "social_status", "placeholder", " status", "name", "social_status", 1, "form-control"], ["value", "single"], ["value", "married"], ["name", "blood_type", "formControlName", "blood_type", "placeholder", "blood", 1, "custom-select"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "error", 2, "width", "100%"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-info"], [3, "value"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddUserComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(ctx.Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddUserComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddUserComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddUserComponent_div_25_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddUserComponent_div_26_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "National Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddUserComponent_div_34_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddUserComponent_div_35_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Full Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddUserComponent_option_42_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddUserComponent_div_44_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Birth Of Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddUserComponent_div_52_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AddUserComponent_div_65_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Married");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AddUserComponent_div_78_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, AddUserComponent_div_79_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Blood Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "AB+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "AB-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "O+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "O-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AddUserComponent_div_104_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, AddUserComponent_div_106_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("full_name").touched && (ctx.Form.get("full_name").errors == null ? null : ctx.Form.get("full_name").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("full_name").touched && (ctx.Form.get("full_name").errors == null ? null : ctx.Form.get("full_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("mobile").touched && (ctx.Form.get("mobile").errors == null ? null : ctx.Form.get("mobile").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("mobile").touched && (ctx.Form.get("mobile").errors == null ? null : ctx.Form.get("mobile").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("address").touched && (ctx.Form.get("address").errors == null ? null : ctx.Form.get("address").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("date_of_birth").touched && (ctx.Form.get("date_of_birth").errors == null ? null : ctx.Form.get("date_of_birth").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("sex").touched && (ctx.Form.get("sex").errors == null ? null : ctx.Form.get("sex").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("social_status").touched && (ctx.Form.get("social_status").errors == null ? null : ctx.Form.get("social_status").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("social_status").touched && (ctx.Form.get("social_status").errors == null ? null : ctx.Form.get("social_status").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("blood_type").touched && (ctx.Form.get("blood_type").errors == null ? null : ctx.Form.get("blood_type").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.Form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  .add-user[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #0f2075;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0;\r\n    font-size: 26px;\r\n    font-weight: 700 !important;\r\n    color: #0f2075;\r\n  }\r\n  [class^='col-'][_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    margin:10px 0;\r\n    margin-left: 15px;\r\n    padding: 10px 30px;\r\n    background-color:#0f2075;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n        color: rgb(240, 84, 84);\r\n    }\r\n  .alert[_ngcontent-%COMP%]{\r\n      font-weight: normal !important;\r\n      color: #0f2075;\r\n    }\r\n  .c-bff[_ngcontent-%COMP%]{\r\n      color: #007bff !important;\r\n      cursor: pointer;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsY0FBYztFQUNoQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNFO1FBQ0ksdUJBQXVCO0lBQzNCO0VBQ0E7TUFDRSw4QkFBOEI7TUFDOUIsY0FBYztJQUNoQjtFQUNBO01BQ0UseUJBQXlCO01BQ3pCLGVBQWU7SUFDakIiLCJmaWxlIjoiYWRkLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXJyb3IgZGl2e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmFkZC11c2Vye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzBmMjA3NTtcclxuICB9XHJcbiAgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMGYyMDc1O1xyXG4gIH1cclxuICBcclxuICBbY2xhc3NePSdjb2wtJ117XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBtYXJnaW46MTBweCAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwZjIwNzU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjQwLCA4NCwgODQpO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0e1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjMGYyMDc1O1xyXG4gICAgfVxyXG4gICAgLmMtYmZme1xyXG4gICAgICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-user',
                templateUrl: './add-user.component.html',
                styleUrls: ['./add-user.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "6lzo":
/*!**************************************************************!*\
  !*** ./src/app/admin/edit-user-id/edit-user-id.component.ts ***!
  \**************************************************************/
/*! exports provided: EditUserIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserIdComponent", function() { return EditUserIdComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function EditUserIdComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.erroeMassage, " ");
} }
function EditUserIdComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUserIdComponent_div_13_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.showForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r3.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r3.national_id);
} }
function EditUserIdComponent_form_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditUserIdComponent_form_14_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.edit(ctx_r7.editForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "National_id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.editForm);
} }
class EditUserIdComponent {
    constructor(api) {
        this.api = api;
        this.filtered_users = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
        this.showForm = false;
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            national_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            national_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
    }
    get(f) {
        this.api.searchForUser(f.value, this.httpOptions).subscribe((data) => {
            if (data.status == true) {
                this.filtered_users = data.user;
                this.editForm.controls.id.patchValue(this.filtered_users[0].id);
                this.editForm.controls.national_id.patchValue(this.filtered_users[0].national_id);
                this.erroeMassage = null;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
    edit(f) {
        this.api.editUserData(f.value, this.httpOptions).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
}
EditUserIdComponent.ɵfac = function EditUserIdComponent_Factory(t) { return new (t || EditUserIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
EditUserIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditUserIdComponent, selectors: [["app-edit-user-id"]], decls: 15, vars: 4, consts: [["class", "alert alert-info", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12", "col-xs-12"], ["type", "text", "formControlName", "national_id", "placeholder", "national_id", 1, "form-control"], ["type", "submit"], ["class", "alert edit alert-info d-flex", "role", "alert", 4, "ngFor", "ngForOf"], ["class", "sec-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-info"], ["role", "alert", 1, "alert", "edit", "alert-info", "d-flex"], [1, "name"], [1, "id"], [1, "action", 3, "click"], [1, "fa", "fa-edit"], [1, "sec-form", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "id", "placeholder", "id", 1, "form-control"]], template: function EditUserIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Modify User's Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditUserIdComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditUserIdComponent_Template_form_ngSubmit_3_listener() { return ctx.get(ctx.myGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "National_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditUserIdComponent_div_13_Template, 8, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EditUserIdComponent_form_14_Template, 15, 1, "form", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filtered_users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showForm == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  .edit[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #0f2075;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0 40px;\r\n    font-size: 30px;\r\n    color:#0f2075;\r\n    font-weight: 700;\r\n  }\r\n  [class^='col-'][_ngcontent-%COMP%]{\r\n    margin-bottom: 25px;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    margin:10px 0;\r\n    margin-left: 15px;\r\n    padding: 10px 30px;\r\n    background-color:#0f2075;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n        color: rgb(240, 84, 84);\r\n    }\r\n  .alert[_ngcontent-%COMP%]{\r\n      font-weight: normal !important;\r\n      color:#0f2075;\r\n      width: 72% !important;\r\n      margin: 30px auto;\r\n    }\r\n  .c-bff[_ngcontent-%COMP%]{\r\n      color: #007bff !important;\r\n      cursor: pointer;\r\n    }\r\n  form[_ngcontent-%COMP%]{\r\n      width: 72%;\r\n      margin: auto;\r\n      color: #0f2075;\r\n  }\r\n  .edit[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 0;\r\n    width: 85%;\r\n\r\n  }\r\n  .edit[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: calc(95% / 3);\r\n    text-align: center;\r\n  }\r\n  .sec-form[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n  }\r\n  .sec-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:first-of-type{\r\n    margin-bottom: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci1pZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNFO1FBQ0ksdUJBQXVCO0lBQzNCO0VBQ0E7TUFDRSw4QkFBOEI7TUFDOUIsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQixpQkFBaUI7SUFDbkI7RUFDQTtNQUNFLHlCQUF5QjtNQUN6QixlQUFlO0lBQ2pCO0VBQ0Y7TUFDSSxVQUFVO01BQ1YsWUFBWTtNQUNaLGNBQWM7RUFDbEI7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7O0VBRVo7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6ImVkaXQtdXNlci1pZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5lcnJvciBkaXZ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuZWRpdHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwZjIwNzU7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiMwZjIwNzU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICBbY2xhc3NePSdjb2wtJ117XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBtYXJnaW46MTBweCAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwZjIwNzU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjQwLCA4NCwgODQpO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0e1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiMwZjIwNzU7XHJcbiAgICAgIHdpZHRoOiA3MiUgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYy1iZmZ7XHJcbiAgICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBmb3Jte1xyXG4gICAgICB3aWR0aDogNzIlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGNvbG9yOiAjMGYyMDc1O1xyXG4gIH1cclxuXHJcbiAgLmVkaXR7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA4NSU7XHJcblxyXG4gIH1cclxuICAuZWRpdCBkaXZ7XHJcbiAgICB3aWR0aDogY2FsYyg5NSUgLyAzKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNlYy1mb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLnNlYy1mb3JtIGlucHV0OmZpcnN0LW9mLXR5cGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditUserIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-user-id',
                templateUrl: './edit-user-id.component.html',
                styleUrls: ['./edit-user-id.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "7Jwv":
/*!********************************************************************!*\
  !*** ./src/app/admin/show-all-donors/show-all-donors.component.ts ***!
  \********************************************************************/
/*! exports provided: ShowAllDonorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllDonorsComponent", function() { return ShowAllDonorsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ShowAllDonorsComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.national_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.blood_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](15, 7, post_r2.created_at, 0, 10));
} }
function ShowAllDonorsComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", size_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r4, " ");
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class ShowAllDonorsComponent {
    constructor(api) {
        this.api = api;
        this.page = 1;
        this.count = 0;
        this.tableSize = 5;
        this.tableSizes = [5, 10, 20];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
    }
    ngOnInit() {
        this.fetchPosts();
    }
    fetchPosts() {
        this.api.getDonners().subscribe((data) => {
            this.donors = data.Donors;
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
}
ShowAllDonorsComponent.ɵfac = function ShowAllDonorsComponent_Factory(t) { return new (t || ShowAllDonorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ShowAllDonorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowAllDonorsComponent, selectors: [["app-show-all-donors"]], decls: 35, vars: 10, consts: [[1, "all-users"], [1, "container"], [1, "content", 2, "overflow-x", "auto"], [1, "table"], ["border", "1px"], [1, "p-2"], [1, "p-2", "color-transparent"], [1, "p-2", "larg"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-20"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "pageChange"], [1, "current-page"], [1, "d-flex", "flex-row-reverse", "bd-highlight", "mb-2", "hidden-sm"], [1, "p-2", "bd-highlight"], [1, "custom-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["scope", "row"], [3, "ngValue"]], template: function ShowAllDonorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Donors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "National_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Blood_type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "created_at");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ShowAllDonorsComponent_tr_23_Template, 16, 11, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "pagination-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ShowAllDonorsComponent_Template_pagination_controls_pageChange_26_listener($event) { return ctx.onTableDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " current page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ShowAllDonorsComponent_Template_select_change_33_listener($event) { return ctx.onTableSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ShowAllDonorsComponent_option_34_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 3, ctx.donors, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx.tableSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableSizes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".all-users[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 0px;\r\n  }\r\n  .container[_ngcontent-%COMP%]{\r\n    padding: 30px ;\r\n    text-align: center;\r\n  }\r\n    .pagination{\r\n     margin-top: 20px ;\r\n    justify-content: center !important;\r\n  }\r\n  h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0 40px;\r\n    font-size: 30px;\r\n    color: var(--black);\r\n  }\r\n  .current-page[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    margin-top: 3px;\r\n  }\r\n  .current-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #65e6e2;\r\n  }\r\n  .content[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    overflow-x: auto;\r\n  }\r\n  .table[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n  }\r\n  table[_ngcontent-%COMP%]\r\n  {\r\n      text-align: center;\r\n      width: 100%;\r\n      border: 0;\r\n      background-color: #f8f9fa !important;\r\n  }\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border: 0;\r\n      white-space: nowrap;\r\n      text-align: left;\r\n      border-bottom: 1px solid #d6d8db;\r\n  }\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    vertical-align: bottom;\r\n    background: #d6d8db;\r\n  }\r\n    .ngx-pagination li:hover{\r\n    background-color: var(--black) !important;\r\n  }\r\n    .ngx-pagination .current{\r\n    background-color: var(--black) !important;\r\n  }\r\n    .ngx-pagination .disabled {\r\n    color: #585151 !important;\r\n  }\r\n  @media (max-width:575px) {\r\n    .hidden-sm[_ngcontent-%COMP%]{\r\n      display: none !important;\r\n    }\r\n    .container[_ngcontent-%COMP%]{\r\n      padding: 15px;\r\n      font-size: small;\r\n    }\r\n    .content[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      display: block;\r\n    }\r\n    .table[_ngcontent-%COMP%]{\r\n      margin: auto;\r\n      width: 100%;\r\n    }\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n      font-size:11px;\r\n      padding: 3px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYWxsLWRvbm9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7RUFDVjtFQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNDO0tBQ0UsaUJBQWlCO0lBQ2xCLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTs7TUFFSSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFNBQVM7TUFDVCxvQ0FBb0M7RUFDeEM7RUFDQTs7SUFFRSxTQUFTO01BQ1AsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixnQ0FBZ0M7RUFDcEM7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFO01BQ0Usd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsY0FBYztJQUNoQjtJQUNBO01BQ0UsWUFBWTtNQUNaLFdBQVc7SUFDYjtJQUNBO01BQ0UsY0FBYztNQUNkLFlBQVk7SUFDZDtFQUNGIiwiZmlsZSI6InNob3ctYWxsLWRvbm9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbC11c2Vyc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMzBweCA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICA6Om5nLWRlZXAgLnBhZ2luYXRpb257XHJcbiAgICAgbWFyZ2luLXRvcDogMjBweCA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwIDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbnQtcGFnZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbiAgLmN1cnJlbnQtcGFnZSBzcGFue1xyXG4gICAgY29sb3I6ICM2NWU2ZTI7XHJcbiAgfVxyXG4gIC5jb250ZW50e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG4gIC50YWJsZXtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG4gIHRhYmxlXHJcbiAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGFibGUgdGggLFxyXG4gIHRhYmxlIHRke1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDhkYjtcclxuICB9XHJcbiAgdGFibGUgdGh7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZDogI2Q2ZDhkYjtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiAjNTg1MTUxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjU3NXB4KSB7XHJcbiAgICAuaGlkZGVuLXNte1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC50YWJsZXtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHRhYmxlIHRkICwgdGh7XHJcbiAgICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowAllDonorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show-all-donors',
                templateUrl: './show-all-donors.component.html',
                styleUrls: ['./show-all-donors.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "9fx2":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dialog-delete-deisease/dialog-delete-deisease.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DialogDeleteDeiseaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeleteDeiseaseComponent", function() { return DialogDeleteDeiseaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");



class DialogDeleteDeiseaseComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogDeleteDeiseaseComponent.ɵfac = function DialogDeleteDeiseaseComponent_Factory(t) { return new (t || DialogDeleteDeiseaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
DialogDeleteDeiseaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogDeleteDeiseaseComponent, selectors: [["app-dialog-delete-deisease"]], decls: 10, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "buttons"], ["mat-button", "", "mat-dialog-close", "", 1, "cancel", "form-control", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 1, "change", "form-control", "btn", 3, "mat-dialog-close"]], template: function DialogDeleteDeiseaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmation!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Are you sure you want to change your medical condition?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogDeleteDeiseaseComponent_Template_button_click_6_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".buttons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 5px 10px;\r\n    color: white;\r\n    width: auto;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus{\r\n    border: 0;\r\n    outline: 0;\r\n}\r\n.cancel[_ngcontent-%COMP%]{\r\nbackground-color: red;\r\n}\r\n.change[_ngcontent-%COMP%]{\r\nbackground-color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1kZWxldGUtZGVpc2Vhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiIsImZpbGUiOiJkaWFsb2ctZGVsZXRlLWRlaXNlYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmJ1dHRvbnMgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uY2FuY2Vse1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLmNoYW5nZXtcclxuYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogDeleteDeiseaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-delete-deisease',
                templateUrl: './dialog-delete-deisease.component.html',
                styleUrls: ['./dialog-delete-deisease.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "ybkt");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home-slider/home-slider.component */ "rLth");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");











const _c0 = function () { return { exact: true }; };
function HomeComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function HomeComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function HomeComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function HomeComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_li_23_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function HomeComponent_ng_template_30_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Find Diagnostic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_30_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create your diagnosis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Diagnostic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Maintain your health and life by registering on our site.Search for the blood types you want through the search for a donor section of our website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_ng_template_30_button_11_Template, 3, 0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_ng_template_30_button_12_Template, 3, 0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isAuth == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isAuth == false);
} }
class HomeComponent {
    constructor(rout, api, route) {
        this.rout = rout;
        this.api = api;
        this.route = route;
        this.Tips = [
            "Breakfast is the necessary and basic meal for the body, and has enough to eat breakfast regulary, and do not forget to oeat a cup of milk within your destination",
            "Be careful to work a little sports exercises, especially in the morning to renew your activity and your life and the health ",
            "The stomach is not filled with food to another,enough to fill one-third, and for a third of the water and third of the air to help them digest",
        ];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem("login_token")
            })
        };
        this.tens = 0;
        this.hundred = 0;
        this.thousands = 0;
        this.started = false; // Function Started ? No
    }
    ngOnInit() {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
        window.addEventListener('scroll', this.onWindowScroll, true);
        window.scrollTo(0, 0);
        this.onWindowScroll();
        if ((localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('login_token')) == 'null') {
            this.isAuth = false;
        }
        else {
            this.isAuth = true;
        }
        this.rout.fragment.subscribe(f => {
            const element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: 'end', inline: "end" });
            }
        });
        this.api.getCount().subscribe((data) => {
            this.disease = data.counts.diseases;
            this.donors_all = data.counts.donors;
            this.users = data.counts.users;
            this.advices = data.counts.advices;
        });
    }
    onWindowScroll() {
        let element = document.querySelector('.nav-two');
        let section = document.querySelector(".use-number");
        let nums = document.querySelectorAll(".use-number .item h4") || [];
        if (document.body.scrollTop > 110 || window.scrollY > 110) {
            element.style.background = "var(--black)";
        }
        else {
            element.style.background = "none";
        }
        if (document.body.scrollTop >= 1700) {
            console.log(section.offsetTop);
            if (!this.started) {
                nums === null || nums === void 0 ? void 0 : nums.forEach((num) => {
                    let goal = num.textContent;
                    let x = 0;
                    let count = setInterval(() => {
                        num.textContent = x++;
                        if (num.textContent == goal) {
                            clearInterval(count);
                        }
                    }, 1000 / goal);
                });
            }
            this.started = true;
        }
    }
    logout() {
        this.api.logout(this.httpOptions).subscribe(data => {
            console.log(data);
            localStorage.setItem("login_token", null);
            if ((localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('login_token')) == 'null') {
                this.isAuth = false;
            }
            else {
                this.isAuth = true;
            }
            this.route.navigate(['/']);
        });
    }
    navslide() {
        const nav = document.querySelector(".nav_list");
        nav.classList.toggle("nav-active");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 153, vars: 18, consts: [[1, "nav-two"], [1, "logo"], ["src", "../../../assets/images/WhatsApp_Image_2022-04-06_at_6.33.27_AM-removebg-preview.png", "alt", "logo"], [1, "list"], [1, "nav_list"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/diseases", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/add-donor", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/donor-search", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/contact-us", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [4, "ngIf"], [1, "burdr", 3, "click"], [1, "line1"], [1, "line2"], [1, "line3"], [1, "header"], ["ngbSlide", ""], ["id", "donation", 1, "donation"], [1, "overlay"], [1, "container", 2, "position", "relative"], ["id", "about", 1, "about"], [1, "container"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "img"], ["src", "../../../assets/images/fgd-min.jpg"], [1, "text"], ["id", "our-team", 1, "our-team"], [1, "col-lg-3", "col-sm-6"], [1, "info"], ["src", "../../../assets/images/B612_20210403_090411_882.jpg"], [1, "social"], ["href", "https://www.facebook.com/profile.php?id=100018485894345"], ["src", "../../../assets/images/facebook (1).png"], ["src", "../../../assets/images/twitter.png"], ["href", "https://www.linkedin.com/in/emanhamdy-2030a11ab/"], ["src", "../../../assets/images/linkedin.png"], ["src", "../../../assets/images/instagram (1).png"], ["src", "../../../assets/images/sama.jpeg"], ["href", "https://www.facebook.com/profile.php?id=100021421995638"], ["href", "https://twitter.com/SamaSai66659185?t=BDt345YrY8Oqq9tg2RcHzw&s=09"], ["href", "https://www.linkedin.com/in/sama-said-88310b19a"], ["href", "https://www.instagram.com/invites/contact/?i=1a0pqz3b4orpl&utm_content=kbxmch7"], ["src", "../../../assets/images/aya.jpeg"], ["href", "https://www.facebook.com/profile.php?id=100014783973002"], ["href", ""], ["href", "https://www.linkedin.com/in/aya-abodief-358643199"], ["src", "../../../assets/images/gehad2.jpeg"], ["href", "https://www.facebook.com/profile.php?id=100009259710206"], ["href", "https://www.linkedin.com/mwlite/in/gehad-tarek-2b535916b"], ["href", "https://www.instagram.com/invites/contact/?i=13tpuvi00e8gm&utm_content=lwe1hl9"], [1, "use-number"], [1, "content"], [1, "number", "d-flex"], [1, "item"], ["routerLink", "/login", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/register", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/profile", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], [1, "picsum-img-wrapper"], ["src", "http://holamed.like-themes.com/wp-content/uploads/2018/11/SLIDE_01.jpg"], [1, "carousel-caption"], [1, "bottons"], ["class", "login btn", "routerLink", "/profile", 4, "ngIf"], ["class", "register btn", "routerLink", "/register", 4, "ngIf"], ["routerLink", "/profile", 1, "login", "btn"], ["src", "../../../assets/images/arrow-right.png", 1, "arrow"], ["routerLink", "/register", 1, "register", "btn"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Add Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Find Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HomeComponent_li_20_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HomeComponent_li_21_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomeComponent_li_22_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HomeComponent_li_23_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_24_listener() { return ctx.navslide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HomeComponent_ng_template_30_Template, 13, 2, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "app-home-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "We are a team at the Faculty of Engineering, Al-Azhar University. We thought of making this website as a graduation project in order to help the general public and not a specific group of them, as it helps them know their health condition and the extent of its progress or delay, as well as helping them to search for a blood donor and communicate with him, and also helps in emergency situations, hoping that this work will help The largest class of people possible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u064FEman Hamdy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Front-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "I am curious, and enjoy work that challenges me to learn something new.I spend my whole day, practically. I do my best to stay informed of changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Sama Said");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Back-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "I am doesn't tire and develops myself constantly and capable of carrying responsibility without trouble. I prefer teamwork and learning from others ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Aya Mohammed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Front-End Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " I keep pace with the times of change and know every new information that appears and I always try my best to reach the required with high efficiency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Gehad Tarek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Back-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "I develop myself constantly in my field to keep pace with all technologies and tools, I deveop my skills that qualify me to work with Team work more smoothly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Donors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Advices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.donors_all);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.advices);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.disease);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"], _home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_8__["HomeSliderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".nav-two[_ngcontent-%COMP%]\r\n{\r\n  \r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  align-items: center;\r\n  padding: 20px 100px ;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n  background: none;\r\n  transition: .4s all;\r\n}\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 180px;\r\n}\r\n.list[_ngcontent-%COMP%]\r\n{\r\n  width: 57%;\r\n}\r\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  list-style: none;\r\n  display: flex;\r\n  margin-bottom: 0;\r\n  justify-content: space-around;\r\n}\r\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\r\n{\r\n  color: white;\r\n  text-decoration: none;\r\n  transition: .4s;\r\n  font-size: .9rem;\r\n}\r\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover\r\n{\r\n  color:#47ccc8;\r\n}\r\n.burdr[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n\r\n}\r\n.burdr[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]\r\n{\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color:white;\r\n    margin: 5px;\r\n\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n}\r\n.header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  background-color: #0000009e;\r\n  z-index: 9;\r\n\r\n}\r\n  .carousel-caption{\r\n  top: 50%;\r\n  color:white ;\r\n  bottom: unset;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  \r\n   transform: translateY(-50%);\r\n}\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n.fadeInUp[_ngcontent-%COMP%] {\r\n  animation-name: fadeInUp;\r\n  animation-duration: 1.3s;\r\n}\r\n.carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-size: 7vw;\r\n  font-weight: 700;\r\n  margin-bottom: 55px !important;\r\n}\r\n.carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .our-team[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: #47ccc8;\r\n}\r\n.carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  margin-top: 20px !important;\r\n  max-width: 600px;\r\n  margin: auto;\r\n  \r\n}\r\n.carousel-caption[_ngcontent-%COMP%]   .bottons[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n}\r\n.carousel-caption[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%], .carousel-caption[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{\r\n  padding:20px 36px 18px;\r\n  line-height: unset;\r\n  max-width: 350px;\r\n  min-width: 200px;\r\n  font-size: 15px;\r\n  margin-bottom: 25px;\r\n  display: inline-block;\r\n  border-radius: 40px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n  font-family: \"Niramit\";\r\n}\r\n.carousel-caption[_ngcontent-%COMP%]   .bottons[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n  width: 27px;\r\n  height: 27px;\r\n  margin-left: 5px;\r\n}\r\n.carousel-caption[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{\r\n  box-shadow:  0 0px 0 50px #2D3663 inset;\r\n  color: white;\r\n  margin-right: 15px;\r\n  background-color: #2D3663;\r\n  transition: .3s all;\r\n}\r\n.carousel-caption[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{\r\n  box-shadow:  0 0px 0 50px #47ccc8 inset;\r\n  color: #2D3663;\r\n  margin-right: 15px;\r\n  background-color:#47ccc8;\r\n  transition: .3s all;\r\n}\r\n  .carousel-control-next,   .carousel-control-prev,   .carousel-indicators{\r\n  display: none !important;\r\n}\r\n  .carousel-inner, .carousel[_ngcontent-%COMP%],   .picsum-img-wrapper img,   .carousel-item,   .picsum-img-wrapper{\r\n  height: 100% !important;\r\n  width: 100%  !important;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]{\r\n   margin: 30px auto 60px;\r\n }\r\n.about[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n   height: 100%;\r\n   display: flex;\r\n   justify-content: start;\r\n }\r\n.about[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n   line-height: 1.9;\r\n   font-size: 18px;\r\n   color: var(--black);\r\n }\r\n.about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   height: 360px;\r\n   width: 100%;\r\n }\r\n.border[_ngcontent-%COMP%]{\r\n   max-width: 120px;\r\n   height: 3px;\r\n   background-color: var(--main);\r\n   margin:10px auto 30px;\r\n }\r\n\r\n.our-team[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n  max-width: 1227px;\r\n}\r\n.our-team[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 50px auto ;\r\n  font-weight: 700;\r\n  font-size: 4vw;\r\n  color: var(--black);\r\n}\r\n.our-team[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]{\r\n  border-radius: 1px;\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n  padding:0px 15px;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{\r\n  background-color: #ffffffeb;\r\n  padding: 15px 0px;\r\n  border: 1px solid #eee;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  border-radius: 50%;\r\n  width: 165px;\r\n  height: 165px;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-family: Oswald, sans-serif !important;\r\n  font-size: 1.7rem;\r\n  margin-top: 15px;\r\n  color:#2D3663 ;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  color: #47ccc8 ;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  margin-bottom: 0;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'Open Sans',sans-serif;\r\n  font-style: italic;\r\n  margin-top: 23px;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-top: 15px;\r\n  padding: 0px 5px;\r\n  color: #111111b5;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  margin-top: 15px;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 82%;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width:20px;\r\n  height: 20px;\r\n  border-radius: 0;\r\n}\r\n.donation[_ngcontent-%COMP%]{\r\n  padding: 50px;\r\n  background-color: #eeeeee38;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  background-image: url('nurse-holding-blood-test-tube.jpg');\r\n}\r\n.use-number[_ngcontent-%COMP%]{\r\n  margin-bottom: 70px;\r\n  position: relative;\r\n}\r\n.use-number[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  z-index: 11;\r\n}\r\n.use-number[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n}\r\n.use-number[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n  width: 190px;\r\n  height: 190px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: white;\r\n  border: 1px solid #eee;\r\n  color: var(--black);\r\n  margin: 20px 0;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 8px #eee;\r\n}\r\n.use-number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-weight: 500;\r\n}\r\n.use-number[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n}\r\n.use-number[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child   h4[_ngcontent-%COMP%]{\r\ncolor: var(--success);\r\n}\r\n.use-number[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2)   h4[_ngcontent-%COMP%]{\r\n  color: var(--danger);\r\n}\r\n.use-number[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3)   h4[_ngcontent-%COMP%]{\r\n  color: var(--warning);\r\n}\r\n.use-number[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(4)   h4[_ngcontent-%COMP%]{\r\n  color: var(--primary);\r\n}\r\n.use-number[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n  margin-top: 15px;\r\n  font-size: 18px;\r\n}\r\n@media (max-width:992px){\r\n\r\n  .carousel-caption[_ngcontent-%COMP%]{\r\n    margin-top: 0;\r\n    transform: translateY(-50%);\r\n  }\r\n  .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px !important;\r\n  }\r\n  .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .carousel-caption[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%], .carousel-caption[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{\r\n    padding:12px 24px 10px;\r\n  }\r\n  .list[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n  }\r\n  .logo[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    max-width: 150px;\r\n  }\r\n}\r\n@media (max-width:768px) {\r\n  .nav-two[_ngcontent-%COMP%]{\r\n    padding: 0px 35px;\r\n    height: 80px;\r\n  }\r\n  .header[_ngcontent-%COMP%]{\r\n    margin-top: 80px;\r\n    height: calc(100vh - 80px);\r\n  }\r\n  .nav_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{\r\n    width: 0% !important;\r\n    display: none;\r\n  }\r\n  .nav_list[_ngcontent-%COMP%]\r\n  {\r\n      background-color:#2D3663;\r\n      width: 50%;\r\n      position: absolute;\r\n      right:0px;\r\n      top: 80px;\r\n      height: calc(100vh - 80px);\r\n      flex-direction: column;\r\n      align-items: center;\r\n      transform: translateX(100%);\r\n      transition: transform .5s ease-in;\r\n      padding-bottom: 20px !important;\r\n      overflow-y: auto;\r\n  }\r\n\r\n  .nav-two[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{\r\n    width: auto;\r\n  }\r\n\r\n  .nav-two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\r\n  {\r\n      width: 70%;\r\n      padding: 7px;\r\n      text-align: center;\r\n      transition: .4s all;\r\n  }\r\n\r\n  .burdr[_ngcontent-%COMP%]{\r\n  display: block;\r\n  cursor: pointer;\r\n  }\r\n  .nav-active[_ngcontent-%COMP%]\r\n  {\r\n      transform: translateX(0%);\r\n  }\r\n  .nav-two[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #ddd;\r\n    background-color: var(--black) !important;\r\n  }\r\n  .nav-two[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n    background-color: #47ccc8 !important;\r\n  }\r\n\r\n  .nav-two[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a.active[_ngcontent-%COMP%], .nav-two[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n    color: white !important;\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    margin-top: unset;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    max-width: 450px;\r\n  }\r\n  .carousel-caption[_ngcontent-%COMP%]{\r\n    right: 10%;\r\n    left: 10%;\r\n  }\r\n  .carousel-caption[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%], .carousel-caption[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{\r\n    padding:12px 24px 10px;\r\n  }\r\n  \r\n  .about[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  .about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 310px;\r\n  }\r\n}\r\n@media (max-width: 575px) {\r\n  .carousel-caption[_ngcontent-%COMP%]{\r\n    right: 6%;\r\n    left: 6%;\r\n  }\r\n  .carousel-caption[_ngcontent-%COMP%]   .bottons[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n  }\r\n  .use-number[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .donation[_ngcontent-%COMP%]{\r\n    padding: 30px;\r\n  }\r\n}\r\n@media screen and (max-width:440px){\r\n  .nav_list[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.nav[_ngcontent-%COMP%]{\r\n  padding: 20px;\r\n}\r\n}\r\n@media screen and (max-width:380px){\r\n .carousel-caption[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%], .carousel-caption[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{\r\n   padding: 7px 15px 9px;\r\n   font-size: 12px;\r\n }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUJBQXVCO0FBQ3ZCOztFQUVFLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGFBQWE7QUFDZjtBQUVBOztJQUVJLGFBQWE7O0FBRWpCO0FBQ0E7O0lBRUksV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsV0FBVzs7QUFFZjtBQUdBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULDJCQUEyQjtFQUMzQixVQUFVOztBQUVaO0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCO0lBQ0U7R0FDRCwyQkFBMkI7QUFDOUI7QUFnQkE7RUFDRTtJQUNFLFVBQVU7SUFFVixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxVQUFVO0lBRVYsK0JBQStCO0VBQ2pDO0FBQ0Y7QUFFQTtFQUVFLHdCQUF3QjtFQUN4Qix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCO0FBRUE7OztFQUdFLHdCQUF3QjtBQUMxQjtBQUNBOzs7O0VBSUUsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNDLDBCQUEwQjtBQUMxQjtHQUNFLHNCQUFzQjtDQUN4QjtBQUNBO0dBQ0UsWUFBWTtHQUNaLGFBQWE7R0FDYixzQkFBc0I7Q0FDeEI7QUFDQTtHQUNFLGdCQUFnQjtHQUNoQixlQUFlO0dBQ2YsbUJBQW1CO0NBQ3JCO0FBQ0E7R0FDRSxhQUFhO0dBQ2IsV0FBVztDQUNiO0FBRUE7R0FDRSxnQkFBZ0I7R0FDaEIsV0FBVztHQUNYLDZCQUE2QjtHQUM3QixxQkFBcUI7Q0FDdkI7QUFDRCwwQkFBMEI7QUFDMUI7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMERBQTRFO0FBQzlFO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7RUFDZjtFQUNBOztNQUVJLHdCQUF3QjtNQUN4QixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxTQUFTO01BQ1QsMEJBQTBCO01BQzFCLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLGlDQUFpQztNQUNqQywrQkFBK0I7TUFDL0IsZ0JBQWdCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBOztNQUVJLFVBQVU7TUFDVixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLG1CQUFtQjtFQUN2Qjs7RUFFQTtFQUNBLGNBQWM7RUFDZCxlQUFlO0VBQ2Y7RUFDQTs7TUFFSSx5QkFBeUI7RUFDN0I7RUFDQTtJQUNFLDZCQUE2QjtJQUM3Qix5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTs7SUFFRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7RUFDQTs7SUFFRSxzQkFBc0I7RUFDeEI7RUFDQTs7S0FFRztFQUNIO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsU0FBUztJQUNULFFBQVE7RUFDVjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtFQUNBLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7QUFFQTtDQUNDOztHQUVFLHFCQUFxQjtHQUNyQixlQUFlO0NBQ2pCO0FBQ0QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qLS0tLS0tIG5hdmJhciAtLS0tLS0qL1xyXG4ubmF2LXR3b1xyXG57XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsMCwgMC4xKTsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDEwMHB4IDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAuNHMgYWxsO1xyXG59XHJcblxyXG4ubG9nbyBpbWd7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbi5saXN0XHJcbntcclxuICB3aWR0aDogNTclO1xyXG59XHJcbi5saXN0IHVse1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4ubGlzdCB1bCBhXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxuICBmb250LXNpemU6IC45cmVtO1xyXG59XHJcbi5saXN0IHVsIGxpIGEuYWN0aXZlLFxyXG4ubGlzdCB1bCBsaSBhOmhvdmVyXHJcbntcclxuICBjb2xvcjojNDdjY2M4O1xyXG59XHJcblxyXG4uYnVyZHJcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuLmJ1cmRyIGRpdlxyXG57XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5oZWFkZXJ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uaGVhZGVyIC5vdmVybGF5e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDllO1xyXG4gIHotaW5kZXg6IDk7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNhcHRpb257XHJcbiAgdG9wOiA1MCU7XHJcbiAgY29sb3I6d2hpdGUgO1xyXG4gIGJvdHRvbTogdW5zZXQ7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgLyogbWFyZ2luLXRvcDogLTE1MHB4O1xyXG4gICAqL1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVJblVwIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjNzO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiBoMXtcclxuICBmb250LXNpemU6IDd2dztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDU1cHggIWltcG9ydGFudDtcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiBoMSBzcGFuLFxyXG4uYWJvdXQgaDMgc3BhbiwgLm91ci10ZWFtIGgzIHNwYW57XHJcbiAgY29sb3I6ICM0N2NjYzg7XHJcbn1cclxuLmNhcm91c2VsLWNhcHRpb24gcHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnTG9yYScgKi9cclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiAuYm90dG9uc3tcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uICAucmVnaXN0ZXIsXHJcbi5jYXJvdXNlbC1jYXB0aW9uICAubG9naW57XHJcbiAgcGFkZGluZzoyMHB4IDM2cHggMThweDtcclxuICBsaW5lLWhlaWdodDogdW5zZXQ7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiTmlyYW1pdFwiO1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uIC5ib3R0b25zIC5hcnJvd3tcclxuICB3aWR0aDogMjdweDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiAgLmxvZ2lue1xyXG4gIGJveC1zaGFkb3c6ICAwIDBweCAwIDUwcHggIzJEMzY2MyBpbnNldDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRDM2NjM7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiAgLnJlZ2lzdGVye1xyXG4gIGJveC1zaGFkb3c6ICAwIDBweCAwIDUwcHggIzQ3Y2NjOCBpbnNldDtcclxuICBjb2xvcjogIzJEMzY2MztcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDdjY2M4O1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGw7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3Jze1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWlubmVyLC5jYXJvdXNlbCxcclxuOjpuZy1kZWVwIC5waWNzdW0taW1nLXdyYXBwZXIgaW1nLFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0sXHJcbjo6bmctZGVlcCAucGljc3VtLWltZy13cmFwcGVye1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICAhaW1wb3J0YW50O1xyXG59XHJcbiAvKi0tLS0tLSBhYm91dCB1cyAtLS0tLS0tKi9cclxuIC5hYm91dHtcclxuICAgbWFyZ2luOiAzMHB4IGF1dG8gNjBweDtcclxuIH1cclxuIC5hYm91dCAudGV4dHtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gfVxyXG4gLmFib3V0IC50ZXh0IHB7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxLjk7XHJcbiAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuIH1cclxuIC5hYm91dCBpbWd7XHJcbiAgIGhlaWdodDogMzYwcHg7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG5cclxuIC5ib3JkZXJ7XHJcbiAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgIGhlaWdodDogM3B4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcclxuICAgbWFyZ2luOjEwcHggYXV0byAzMHB4O1xyXG4gfVxyXG4vKi0tLS0tLSBvdXItdGVhbSAtLS0tLS0tKi9cclxuLm91ci10ZWFte1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLm91ci10ZWFtIC5jb250YWluZXJ7XHJcbiAgbWF4LXdpZHRoOiAxMjI3cHg7XHJcbn1cclxuLm91ci10ZWFtIGgzICwgLmFib3V0IGgze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDUwcHggYXV0byA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDR2dztcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcbi5vdXItdGVhbSAuY29sLWxnLTN7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOjBweCAxNXB4O1xyXG59XHJcblxyXG4ub3VyLXRlYW0gLmluZm97XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmViO1xyXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuLm91ci10ZWFtIC5pbmZvIGltZ3tcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDE2NXB4O1xyXG4gIGhlaWdodDogMTY1cHg7XHJcbn1cclxuLm91ci10ZWFtIC5pbmZvIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiBPc3dhbGQsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGNvbG9yOiMyRDM2NjMgO1xyXG59XHJcbi5vdXItdGVhbSAuaW5mbyBoMntcclxuICBjb2xvcjogIzQ3Y2NjOCA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ub3VyLXRlYW0gLmluZm8gcHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucycsc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luLXRvcDogMjNweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGNvbG9yOiAjMTExMTExYjU7XHJcbn1cclxuLm91ci10ZWFtIC5pbmZvIC5zb2NpYWx7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogODIlO1xyXG59XHJcbi5vdXItdGVhbSAuaW5mbyAuc29jaWFsIGEgaW1ne1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5kb25hdGlvbntcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUzODtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy9udXJzZS1ob2xkaW5nLWJsb29kLXRlc3QtdHViZS5qcGcnKTtcclxufVxyXG5cclxuLnVzZS1udW1iZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnVzZS1udW1iZXIgLmNvbnRlbnR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4udXNlLW51bWJlciAuZC1mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udXNlLW51bWJlciAuaXRlbXtcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgaGVpZ2h0OiAxOTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggI2VlZTtcclxufVxyXG5cclxuLnVzZS1udW1iZXIgcHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi51c2UtbnVtYmVyIC5pdGVtIGg0e1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udXNlLW51bWJlciAuaXRlbTpmaXJzdC1jaGlsZCBoNHtcclxuY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG59XHJcbi51c2UtbnVtYmVyIC5pdGVtOm50aC1jaGlsZCgyKSBoNHtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxufVxyXG4udXNlLW51bWJlciAuaXRlbTpudGgtY2hpbGQoMykgaDR7XHJcbiAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xyXG59XHJcbi51c2UtbnVtYmVyIC5pdGVtOm50aC1jaGlsZCg0KSBoNHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuLnVzZS1udW1iZXIgLml0ZW0gcHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTJweCl7XHJcblxyXG4gIC5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgLmNhcm91c2VsLWNhcHRpb24gaDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jYXB0aW9uICAucmVnaXN0ZXIsXHJcbiAgLmNhcm91c2VsLWNhcHRpb24gIC5sb2dpbntcclxuICAgIHBhZGRpbmc6MTJweCAyNHB4IDEwcHg7XHJcbiAgfVxyXG4gIC5saXN0e1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgLmxvZ28gLCAubG9nbyBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAubmF2LXR3b3tcclxuICAgIHBhZGRpbmc6IDBweCAzNXB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAuaGVhZGVye1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gIH1cclxuICAubmF2X2xpc3QgbGkgYTo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubmF2X2xpc3RcclxuICB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzJEMzY2MztcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDowcHg7XHJcbiAgICAgIHRvcDogODBweDtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm5hdi10d28gLmxpc3R7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIC5uYXYtdHdvIGxpXHJcbiAge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogLjRzIGFsbDtcclxuICB9XHJcblxyXG4gIC5idXJkcntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5uYXYtYWN0aXZlXHJcbiAge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIH1cclxuICAubmF2LXR3b3tcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXYtdHdvIC5saXN0IGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3Y2NjOCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdi10d28gLmxpc3QgdWwgbGk6aG92ZXIgYS5hY3RpdmUgLFxyXG4gIC5uYXYtdHdvIC5saXN0IHVsIGxpOmhvdmVyIGF7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hYm91dHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5hYm91dCAuYmFja2dyb3VuZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYWJvdXQgLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IHVuc2V0O1xyXG4gIH1cclxuICAuYWJvdXQgLmluZm8gcHtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgcmlnaHQ6IDEwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICB9XHJcbiAgLmNhcm91c2VsLWNhcHRpb24gIC5yZWdpc3RlcixcclxuICAuY2Fyb3VzZWwtY2FwdGlvbiAgLmxvZ2lue1xyXG4gICAgcGFkZGluZzoxMnB4IDI0cHggMTBweDtcclxuICB9XHJcbiAgLyogLnVzZS1udW1iZXIgLml0ZW17XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAzMHB4KTtcclxuICB9ICovXHJcbiAgLmFib3V0IC50ZXh0IHB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5hYm91dCBpbWd7XHJcbiAgICBoZWlnaHQ6IDMxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgbGVmdDogNiU7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jYXB0aW9uIC5ib3R0b25ze1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgLnVzZS1udW1iZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmRvbmF0aW9ue1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDQwcHgpe1xyXG4gIC5uYXZfbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hdntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzgwcHgpe1xyXG4gLmNhcm91c2VsLWNhcHRpb24gLmxvZ2luLFxyXG4gLmNhcm91c2VsLWNhcHRpb24gLnJlZ2lzdGVye1xyXG4gICBwYWRkaW5nOiA3cHggMTVweCA5cHg7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "CBJU":
/*!**************************************************************!*\
  !*** ./src/app/admin/show-disease/show-disease.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowDiseaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDiseaseComponent", function() { return ShowDiseaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ShowDiseaseComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.AllDisease = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(data => {
            this.id = data.get('id');
            console.log(data, this.id);
        });
        this.getAllDisease();
    }
    getAllDisease() {
        this.api.getDisease().subscribe((data) => {
            console.log(data);
            this.AllDisease = data.Chronic_Diseases;
            this.AllDisease.forEach(e => {
                if (e.id == this.id) {
                    this.disease = e;
                }
            });
        });
    }
}
ShowDiseaseComponent.ɵfac = function ShowDiseaseComponent_Factory(t) { return new (t || ShowDiseaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ShowDiseaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowDiseaseComponent, selectors: [["app-show-disease"]], decls: 24, vars: 5, consts: [[1, "all-disease"], [1, "container"], [1, "disease"], [1, "fa", "fa-duotone", "fa-bacteria"], [1, "descrebtion"], [1, "syndrome"], [1, "treatment"]], template: function ShowDiseaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Describton:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Syndrome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Treatment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.disease.chronic_disease);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.disease.chronic_disease, " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.disease.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.disease.syndrome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.disease.treatment);
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    background-color: rgba(45, 54, 99, 0.7);\r\n    padding: 30px ;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n     .pagination{\r\n     margin-top: 20px ;\r\n    justify-content: center !important;\r\n  }\r\n   h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0 40px;\r\n    font-size: 30px;\r\n    text-transform: capitalize;\r\n    text-shadow: 2px 2px 5px black;\r\n    color: white;\r\n  }\r\n   .current-page[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    margin-top: 3px;\r\n  }\r\n   .current-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #65e6e2;\r\n  }\r\n   .disease[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin: auto;\r\n  }\r\n   .disease[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   padding: 12px;\r\n   margin-bottom: 15px;\r\n   border-radius: 4px;\r\n   color: var(--black);\r\n   text-align: left;\r\n  }\r\n   .mt-20[_ngcontent-%COMP%]{\r\n    color: white;\r\n    width: 85%;\r\n    margin-top: 20px;\r\n  }\r\n   .disease[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    color: var(--main);\r\n    text-transform: capitalize;\r\n    font-size: 18px;\r\n    margin-bottom: 5px;\r\n  }\r\n   .disease[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: var(--black);\r\n    max-width: 650px;\r\n  }\r\n   .disease[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: var(--black);\r\n    margin: 0px 0 25px;\r\n    text-align: left;\r\n    text-transform: capitalize;\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n  }\r\n   .disease[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n    margin-left: 15px;\r\n  }\r\n     .ngx-pagination li:hover{\r\n    background-color: var(--black) !important;\r\n  }\r\n     .ngx-pagination .current{\r\n    background-color: var(--black) !important;\r\n  }\r\n   .hidden[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n   @media (max-width:575px) {\r\n  \r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctZGlzZWFzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7R0FDQztLQUNFLGlCQUFpQjtJQUNsQixrQ0FBa0M7RUFDcEM7R0FDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkO0dBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtHQUNBO0lBQ0UsY0FBYztFQUNoQjtHQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDtHQUNBO0dBQ0MsdUJBQXVCO0dBQ3ZCLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixnQkFBZ0I7RUFDakI7R0FDQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0dBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7R0FDQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7R0FDQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0dBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0dBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7R0FDQTtJQUNFLHlDQUF5QztFQUMzQztHQUNBO0lBQ0UsYUFBYTtFQUNmO0dBQ0E7OztFQUdBIiwiZmlsZSI6InNob3ctZGlzZWFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCA1NCwgOTksIDAuNyk7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgIDo6bmctZGVlcCAucGFnaW5hdGlvbntcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4IDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY3VycmVudC1wYWdle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuICAuY3VycmVudC1wYWdlIHNwYW57XHJcbiAgICBjb2xvcjogIzY1ZTZlMjtcclxuICB9XHJcbiAgXHJcbiAgLmRpc2Vhc2V7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuZGlzZWFzZSA+IGRpdntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIHBhZGRpbmc6IDEycHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLm10LTIwe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5kaXNlYXNlIGg0e1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5kaXNlYXNlIHB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICB9XHJcbiAgLmRpc2Vhc2UgaDJ7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgbWFyZ2luOiAwcHggMCAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmRpc2Vhc2UgPiBkaXYgPiBkaXZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuICBcclxuICBcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDiseaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-disease',
                templateUrl: './show-disease.component.html',
                styleUrls: ['./show-disease.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wowjs/dist/wow.min */ "ybkt");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");












function ProfileComponent_table_60_thead_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "thead", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Created_At");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_table_60_tr_2_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_table_60_tr_2_td_7_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const d_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.openDialog(d_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "customSwitch" + i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "customSwitch" + i_r23);
} }
function ProfileComponent_table_60_tr_2_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_table_60_tr_2_td_8_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const d_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.openDialog(d_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "customSwitch" + i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "customSwitch" + i_r23);
} }
function ProfileComponent_table_60_tr_2_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You have not been cured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_table_60_tr_2_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You have been cured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_table_60_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileComponent_table_60_tr_2_td_7_Template, 4, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_table_60_tr_2_td_8_Template, 4, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProfileComponent_table_60_tr_2_td_9_Template, 2, 0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_table_60_tr_2_td_10_Template, 2, 0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r21.nameOfUserDisease[i_r23], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r22.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r22.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r22.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r22.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r22.status == 0);
} }
function ProfileComponent_table_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_table_60_thead_1_Template, 11, 0, "thead", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_table_60_tr_2_Template, 11, 7, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.chronic_disease_user == null ? null : ctx_r0.chronic_disease_user.length) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.chronic_disease_user);
} }
function ProfileComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " you does not have any Disease. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", i_r37 === 0)("value", d_r36.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", d_r36.chronic_disease, "");
} }
function ProfileComponent_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_76_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r42.toggleActive(".diagosis-Form-update"); return ctx_r42.changeUpdateActive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "textarea", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_76_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const di_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.updateUserDiagnosis(ctx_r44.Diagosis_Form_update, di_r38.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const di_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", di_r38.diagnosis, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 3, di_r38.created_at, 0, 10), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r41.Diagosis_Form_update);
} }
function ProfileComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_76_div_1_Template, 16, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r39 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", l_r39);
} }
function ProfileComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " you does not have any Diagnosis. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.message, " ");
} }
function ProfileComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Type Only Characters At least 2. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Type Only Numbers At least 8 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone Number Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Type 14 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Id Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_option_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ad_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ad_r47.name, " ");
} }
function ProfileComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Address Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Birth Date Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Gender Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Type Only Characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Status Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Blood Type Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r19.erroeMassage, " ");
} }
class ProfileComponent {
    constructor(api, route, rout, dialog) {
        this.api = api;
        this.route = route;
        this.rout = rout;
        this.dialog = dialog;
        this.nameOfUserDisease = [];
        this.activeUpdate = false;
        this.activeAdd = false;
        this.address = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token')
            })
        };
        this.Edit_Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
            national_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{14}')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{4,}')]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            blood_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            social_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
        });
        this.Disease_Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            chronic_disease_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{1,}')]),
        });
        this.Diagosis_Form_add = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            diagnosis: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.Diagosis_Form_update = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            diagnosis: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.Photo_Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    }
    ngOnInit() {
        // AOS.init();
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_3__["WOW"]().init();
        this.getDisease();
        this.getPersonalInfo();
        this.getPersonalDisease();
        this.getPersonalDiagnosis();
        this.getdress();
        this.rout.fragment.subscribe(f => {
            const element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: 'end', inline: "end" });
            }
        });
    }
    getLoginMessage(e) {
        this.login_message = e;
    }
    openDialog(id) {
        this.api.changeUserDisease(id, this.httpOptions).subscribe(data => {
            window.location.reload();
        });
    }
    getdress() {
        this.api.getProvnces().subscribe((data) => {
            this.address = data.provinces;
        });
    }
    getPersonalInfo() {
        this.api.getPersonalInfo(this.httpOptions).subscribe((data) => {
            this.userInfo = data.user;
        });
    }
    getPersonalDisease() {
        this.api.getUserDisease(this.httpOptions).subscribe((data) => {
            this.chronic_disease_user = data.chronic_disease;
            this.chronic_disease_user.sort((a, b) => a.chronic_disease_id - b.chronic_disease_id);
            this.chronic_disease.forEach((element1) => {
                this.chronic_disease_user.forEach(element => {
                    if (element.chronic_disease_id == element1.id) {
                        this.nameOfUserDisease.push(element1.chronic_disease);
                    }
                });
            });
        });
    }
    openForm() {
        document.querySelector(".edit-form").classList.remove("hidden");
        document.querySelector(".close-form i").classList.remove("hidden");
    }
    closeForm() {
        document.querySelector(".close-form i").classList.add("hidden");
        document.querySelector(".edit-form").classList.add("hidden");
    }
    getDisease() {
        this.api.getDisease().subscribe((data) => {
            this.chronic_disease = data.Chronic_Diseases;
        });
    }
    addUserDiseas(f) {
        this.api.addUserDisease(f.value, this.httpOptions).subscribe((data) => {
            window.location.reload();
        });
    }
    getPersonalDiagnosis() {
        this.api.getUserDiagnosis(this.httpOptions).subscribe((data) => {
            this.diagosis = data.diagnosis;
        });
    }
    addUserDiagnosis(f) {
        this.api.addUserDiagnosis(f.value, this.httpOptions).subscribe((data) => {
            this.toggleActive('.diagosis-Form-add');
            window.location.reload();
        });
    }
    updateUserDiagnosis(f, id) {
        this.api.UpdateUserDiagnosis({ id: id, diagnosis: f.value.diagnosis }, this.httpOptions).subscribe((data) => {
            window.location.reload();
        });
    }
    addPhoto(event) {
        let x = URL.createObjectURL(event.target.files[0]);
        this.fileToUpload = event.target.files[0];
        const fd = new FormData();
        fd.append('photo', this.fileToUpload, this.fileToUpload.name);
        let img = document.querySelector(".user-img");
        img.setAttribute("src", x);
        this.api.addPhoto(fd, this.httpOptions).subscribe((data) => {
            this.image = data.photo;
        });
    }
    toggleActive(s) {
        document.querySelector(s).classList.toggle("active");
    }
    changeAddActive() {
        this.activeAdd = true;
        this.activeUpdate = false;
    }
    changeUpdateActive() {
        this.activeAdd = false;
        this.activeUpdate = true;
    }
    goToAllDiagnosis() {
        this.route.navigate(['all-diagnosis']);
    }
    submit(f) {
        this.api.editUserInfo(f.value, this.httpOptions).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
                this.message = data.msg;
                document.querySelector(".edit-form").classList.add("hidden");
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 206, vars: 43, consts: [[1, "all-page"], [1, "profile", "section"], [1, "section", "one"], [1, "container"], [1, "photo_header"], [1, "head"], [1, "form-img", 3, "formGroup"], ["for", "photo"], ["alt", "photo_personal_data", 1, "user-img", 3, "src"], ["type", "file", "id", "photo", "formControlName", "photo", "hidden", "", 3, "change"], [1, "pt-3"], [1, "row", "d-flex", "justify-content-between"], [1, "col-md-6"], [1, "fa", "fa-calendar"], [1, "fa", "fa-phone"], [1, "fa", "fa-id-card"], [1, "fa", "fa-tint", "red"], [1, "no_awsom"], [1, "fa", "fa-map-marker"], [1, "fa", "fa-venus-mars"], [1, "fa", "fa-envelope"], [1, "fa", "fa-heart"], [1, "for-edit"], ["routerLink", "/profile", "fragment", "edit", 3, "click"], [1, "fa", "fa-edit"], [1, "section1", "mt-5"], [1, "decor2"], [2, "overflow-x", "auto"], ["border", "1px", "class", "table-disease", 4, "ngIf"], [1, "zer", 2, "text-align", "left"], [4, "ngIf"], [2, "cursor", "pointer", "color", "#1ccde9", 3, "click"], [1, "disease-form", 3, "formGroup"], ["name", "Chronic Diseases", "formControlName", "chronic_disease_id", 1, "selection-1"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "mt-3", "mb-25", 3, "click"], [1, "section2", "mt-5", "last-diagnosis"], [2, "padding-top", "0"], [4, "ngFor", "ngForOf"], [1, "zer", 2, "text-align", "left", "margin-top", "0 !important"], [1, "diagosis-Form-add", 3, "formGroup"], ["name", "Diagnosis", "formControlName", "diagnosis", "placeholder", "Type your Diagnosis", "id", "", "cols", "20", "rows", "5", 1, "form-control", "mb-4", "mt-4"], [1, "btn-add", "btn", "btn-info", "mb-4", "mt-4", 3, "click"], [1, "mb-15"], [1, "container", "pb-12"], [1, "edit-info"], [1, "text"], [1, "zer", "mt-0"], [1, "close-form"], [1, "fa", "fa-times", "hidden", 3, "click"], ["id", "edit", 1, "row", "mt-25", "edit-form", "hidden"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "col-xs-12"], ["for", "first"], ["type", "text", "formControlName", "full_name", "placeholder", "Full Name", "name", "full_name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "error"], ["for", ""], ["type", "text", "placeholder", "Phone", "formControlName", "mobile", "name", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "national_id", "placeholder", "National Id", "name", "national_id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "address", "formControlName", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "name", "date_of_birth", "formControlName", "date_of_birth", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "gender", "formControlName", "sex", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "male"], ["value", "female"], ["name", "State", "formControlName", "social_status", "placeholder", " status", "name", "social_status", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "single"], ["value", "married"], ["name", "blood_type", "formControlName", "blood_type", "placeholder", "blood", 1, "custom-select", 3, "ngModel", "ngModelChange"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "error", 2, "width", "100%"], ["type", "submit", 3, "disabled"], ["border", "1px", 1, "table-disease"], ["class", "p-2", 4, "ngIf"], [1, "p-2"], [1, "p-2", "color-transparent"], [1, "p-2", "larg"], [1, "custom-control", "custom-control-dark", "custom-switch"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "click"], [1, "custom-control-label", 3, "for"], ["type", "checkbox", "checked", "", 1, "custom-control-input", 3, "id", "click"], [3, "selected", "value"], [1, "p-d"], [1, "buttons", "d-flex"], [2, "color", "#17a2b8", 3, "click"], [1, "create"], [1, "diagosis-Form-update", 3, "formGroup"], ["name", "Diagnosis", "placeholder", "Select your Diagnosis", "formControlName", "diagnosis", "id", "", "cols", "20", "rows", "5", 1, "form-control", "mb-4", "mt-4"], ["role", "alert", 1, "alert", "alert-info"], [3, "value"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_11_listener($event) { return ctx.addPhoto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_52_listener() { return ctx.openForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Chronic Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ProfileComponent_table_60_Template, 3, 2, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ProfileComponent_span_62_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "If you want to add Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_64_listener() { return ctx.toggleActive(".disease-form"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ProfileComponent_option_68_Template, 2, 3, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_69_listener() { return ctx.addUserDiseas(ctx.Disease_Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Add Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "The Last Diagnosis Of You");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ProfileComponent_div_76_Template, 2, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, ProfileComponent_span_78_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " If you want to add Diagnosis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_80_listener() { ctx.toggleActive(".diagosis-Form-add"); return ctx.changeAddActive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " If you want to show all Diagnosis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_83_listener() { return ctx.goToAllDiagnosis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "form", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "textarea", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_87_listener() { return ctx.addUserDiagnosis(ctx.Diagosis_Form_add); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " If you want to edit your information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_96_listener() { return ctx.openForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_99_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, ProfileComponent_div_102_Template, 2, 1, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "form", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_103_listener() { return ctx.submit(ctx.Edit_Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_110_listener($event) { return ctx.userInfo.full_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, ProfileComponent_div_112_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, ProfileComponent_div_113_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_119_listener($event) { return ctx.userInfo.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, ProfileComponent_div_121_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, ProfileComponent_div_122_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "National Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_128_listener($event) { return ctx.userInfo.national_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, ProfileComponent_div_130_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, ProfileComponent_div_131_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Full Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_select_ngModelChange_137_listener($event) { return ctx.userInfo.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, ProfileComponent_option_138_Template, 2, 2, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, ProfileComponent_div_140_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Birth Of Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_146_listener($event) { return ctx.userInfo.date_of_birth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, ProfileComponent_div_148_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_select_ngModelChange_155_listener($event) { return ctx.userInfo.sex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, ProfileComponent_div_161_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "select", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_select_ngModelChange_168_listener($event) { return ctx.userInfo.social_status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Single");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Married");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](174, ProfileComponent_div_174_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, ProfileComponent_div_175_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Blood Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "select", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_select_ngModelChange_182_listener($event) { return ctx.userInfo.blood_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "AB+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "AB-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "O+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "O-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](200, ProfileComponent_div_200_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](202, ProfileComponent_div_202_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.Photo_Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.userInfo == null ? null : ctx.userInfo.photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userInfo == null ? null : ctx.userInfo.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Age: ", ctx.userInfo == null ? null : ctx.userInfo.age, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Phone: ", ctx.userInfo == null ? null : ctx.userInfo.mobile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ID: ", ctx.userInfo == null ? null : ctx.userInfo.national_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Blood_Type: ", ctx.userInfo == null ? null : ctx.userInfo.blood_type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Address: ", ctx.userInfo == null ? null : ctx.userInfo.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx.userInfo == null ? null : ctx.userInfo.sex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Date_Of_Birth: ", ctx.userInfo == null ? null : ctx.userInfo.date_of_birth, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Social_Status: ", ctx.userInfo == null ? null : ctx.userInfo.social_status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.chronic_disease_user == null ? null : ctx.chronic_disease_user.length) !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.chronic_disease_user == null ? null : ctx.chronic_disease_user.length) == 0 || (ctx.chronic_disease_user == null ? null : ctx.chronic_disease_user.length) == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.Disease_Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chronic_disease);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.diagosis);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.diagosis == null ? null : ctx.diagosis.length) == 0 || (ctx.diagosis == null ? null : ctx.diagosis.length) == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.Diagosis_Form_add);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.Edit_Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInfo.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("full_name").touched && (ctx.Edit_Form.get("full_name").errors == null ? null : ctx.Edit_Form.get("full_name").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("full_name").touched && (ctx.Edit_Form.get("full_name").errors == null ? null : ctx.Edit_Form.get("full_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInfo.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("mobile").touched && (ctx.Edit_Form.get("mobile").errors == null ? null : ctx.Edit_Form.get("mobile").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("mobile").touched && (ctx.Edit_Form.get("mobile").errors == null ? null : ctx.Edit_Form.get("mobile").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInfo.national_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("national_id").touched && (ctx.Edit_Form.get("national_id").errors == null ? null : ctx.Edit_Form.get("national_id").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("national_id").touched && (ctx.Edit_Form.get("national_id").errors == null ? null : ctx.Edit_Form.get("national_id").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInfo.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("address").touched && (ctx.Edit_Form.get("address").errors == null ? null : ctx.Edit_Form.get("address").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInfo.date_of_birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("date_of_birth").touched && (ctx.Edit_Form.get("date_of_birth").errors == null ? null : ctx.Edit_Form.get("date_of_birth").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInfo.sex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("sex").touched && (ctx.Edit_Form.get("sex").errors == null ? null : ctx.Edit_Form.get("sex").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInfo.social_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("social_status").touched && (ctx.Edit_Form.get("social_status").errors == null ? null : ctx.Edit_Form.get("social_status").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("social_status").touched && (ctx.Edit_Form.get("social_status").errors == null ? null : ctx.Edit_Form.get("social_status").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInfo.blood_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Edit_Form.get("blood_type").touched && (ctx.Edit_Form.get("blood_type").errors == null ? null : ctx.Edit_Form.get("blood_type").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.Edit_Form.valid);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]], styles: ["body{\r\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  background-image: url('istockphoto-968845176-612x612.jpg');\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-top: 165px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]\r\n{\r\npadding-top: 15px;\r\nbackground-color: rgba(45, 54, 99, 0.7);\r\npadding-bottom: 5px;\r\n\r\n}\r\n\r\n.one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-size: 35px;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.one[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\r\n{\r\nfont-size:20px ;\r\nfont-weight: 500;\r\ncolor: white;\r\n}\r\n\r\nul[_ngcontent-%COMP%]\r\n{\r\n    list-style:none;\r\n    word-spacing: 2px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]\r\n{\r\n\r\n    padding: 16px;\r\n}\r\n\r\n.red[_ngcontent-%COMP%]\r\n{\r\n    color: rgb(243, 81, 81);\r\n}\r\n\r\n.one[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    margin-right: 3px;\r\n    color:#47ccc8;\r\n}\r\n\r\n.photo_header[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]\r\n{\r\n    width: 150px;\r\n    height: 150px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border-radius: 50%;\r\n}\r\n\r\n.parent1[_ngcontent-%COMP%]\r\n\r\n{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.parent2[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-evenly;\r\n\r\n}\r\n\r\n.row3[_ngcontent-%COMP%]\r\n{\r\n    width: 45%;\r\n\r\n}\r\n\r\n.row5[_ngcontent-%COMP%]\r\n{\r\n\r\n    width: 40%;\r\n}\r\n\r\n.parent3[_ngcontent-%COMP%]\r\n{\r\n\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.selection-1[_ngcontent-%COMP%], .disease-form[_ngcontent-%COMP%]\r\n {\r\n    width: 75%;\r\n    border: solid 1px #ccc;\r\n    border-radius: 3px;\r\n    font-size: 17px;\r\n    height: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    margin: auto;\r\n    opacity: 0;\r\n    padding-right: 5px;\r\n    transition:all .5s !important;\r\n}\r\n\r\n.selection-1[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.selection-1[_ngcontent-%COMP%]:focus{\r\n  outline: 0 !important;\r\n}\r\n\r\n.disease-form[_ngcontent-%COMP%]{\r\n  padding: 0 !important;\r\n  margin-top: 15px;\r\n}\r\n\r\n.disease-form.active[_ngcontent-%COMP%]{\r\n  height: auto;\r\n  opacity: 1;\r\n}\r\n\r\n.disease-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  display: none;\r\n\r\n}\r\n\r\n.disease-form.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n display: block;\r\n}\r\n\r\n.disease-form.active[_ngcontent-%COMP%]   .selection-1[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n  opacity: 1;\r\n }\r\n\r\n.decor2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]\r\n{\r\n    font-size: 35px;\r\n    color: white;\r\n    padding-top: 25px;\r\n    margin-bottom: 25px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n}\r\n\r\n.The-Chronic[_ngcontent-%COMP%]\r\n{\r\n    font-weight: bolder;\r\n    font-size: 20px;\r\n    color: gray;\r\n    padding: 40px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]\r\n{\r\n    width: 75%;\r\n    border: solid 1px gray;\r\n    padding: 20px;\r\n    text-align: center;\r\n\r\n}\r\n\r\nthead[_ngcontent-%COMP%]\r\n{\r\n    background-color: #2D3663;\r\n    color: white;\r\n\r\n\r\n}\r\n\r\ntd[_ngcontent-%COMP%]{\r\n    background-color:white;\r\n    padding: 9px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.larg[_ngcontent-%COMP%]\r\n{\r\n    width: 25%;\r\n}\r\n\r\n.iconparent[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]\r\n{\r\n    font-size: 25px;\r\n    width: 20%;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:hover\r\n{\r\n    color:#47ccc8;\r\n    cursor: pointer;\r\n    transition: .3s;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:last-child:hover{\r\n  color: black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n  color:#47ccc8 !important;\r\n  cursor: pointer;\r\n  transition: .3s;\r\n}\r\n\r\n\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]\r\n{\r\n    margin: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.btn-add[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.mb-25[_ngcontent-%COMP%]{\r\n  margin-bottom: 25px;\r\n  margin-top: 15px !important;\r\n}\r\n\r\n.diagosis-Form-add[_ngcontent-%COMP%], .diagosis-Form-update[_ngcontent-%COMP%]{\r\n  height: 0;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n  margin: auto;\r\n  height: 0px;\r\n  transition: all .5s;\r\n  padding: 0 !important;\r\n  border: 0;\r\n  outline: 0;\r\n}\r\n\r\n.diagosis-Form-add.active[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .diagosis-Form-update.active[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n  height: 130px;\r\n  border-width: 1px;\r\n  padding: 5px !important;\r\n}\r\n\r\n.diagosis-Form-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .diagosis-Form-update[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.diagosis-Form-add.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .diagosis-Form-update.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n  margin-left: 12.5%;\r\n}\r\n\r\n.diagosis-Form-add.active[_ngcontent-%COMP%], .diagosis-Form-update.active[_ngcontent-%COMP%]{\r\nheight: auto;\r\n}\r\n\r\n.p-d[_ngcontent-%COMP%]{\r\n  border: 1px solid #eee;\r\n  padding: 15px;\r\n  text-align: left;\r\n  background: white;\r\n  color: var(--black);\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  width: 75%;\r\n  margin: auto;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n  color: deepskyblue;\r\n  margin-top: 20px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.create[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.create[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: var(--black);\r\n}\r\n\r\n.pt-4[_ngcontent-%COMP%]{\r\n  margin:20px auto 30px;\r\n}\r\n\r\n.zer[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n  text-align: left;\r\n  margin: auto;\r\n  margin-top: 15px;\r\n  height: auto !important;\r\n  color: white;\r\n}\r\n\r\n.buttons.d-flex[_ngcontent-%COMP%]{\r\n  justify-content: space-between;\r\n  font-weight: 400;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: var(--black);\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: deepskyblue;\r\n}\r\n\r\n.last-diagnosis[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px !important;\r\n}\r\n\r\n@media (max-width:992px) {\r\n  table[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n  }\r\n}\r\n\r\n@media (max-width:768px) {\r\n\r\n  table[_ngcontent-%COMP%]{\r\n    width: 97% !important;\r\n    font-size: 11px !important;\r\n  }\r\n  table[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{\r\n    font-size: 16px !important;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    margin-left: 1.5% !important;\r\n  }\r\n .pt-3[_ngcontent-%COMP%]{\r\n   padding-top: 0 !important;\r\n }\r\n label[_ngcontent-%COMP%]{\r\n   font-weight: 500;\r\n   font-size: 13px;\r\n }\r\n .form-control[_ngcontent-%COMP%]{\r\n   font-size: 13px;\r\n }\r\n  .p-d[_ngcontent-%COMP%], .zer[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    width: 97%;\r\n  }\r\n  .profile[_ngcontent-%COMP%]{\r\n    margin-top: 80px;\r\n  }\r\n  .create[_ngcontent-%COMP%], .buttons.d-flex[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .section[_ngcontent-%COMP%]   one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding-top: 15px !important;\r\n  }\r\n  .one[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .one[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]{\r\n    padding-left: 0 !important;\r\n  }\r\n  .one[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n  }\r\n  .one[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    padding: 0 !important;\r\n  }\r\n  .decor2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 5vw;\r\n  }\r\n}\r\n\r\n.dialog-1[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 20%;\r\n  right: -100%;\r\n  padding: 20px;\r\n  max-width: 300px;\r\n  background: white;\r\n  color: var(--black);\r\n  z-index: 99999999;\r\n  text-align: left;\r\n  transition: 1s all;\r\n  font-weight: 600;\r\n  border-top:3px solid var(--main) ;\r\n  border-left:3px solid var(--main) ;\r\n}\r\n\r\n.dialog-1.active[_ngcontent-%COMP%]{\r\n  right: 0;\r\n}\r\n\r\n.mt-0[_ngcontent-%COMP%]{\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.mb-15[_ngcontent-%COMP%]{\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.pb-12[_ngcontent-%COMP%]{\r\n  padding-bottom: 12px;\r\n}\r\n\r\n.mt-25[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n}\r\n\r\n[class^='col-'][_ngcontent-%COMP%]{\r\n  margin-bottom: 15px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  margin:10px 0;\r\n  margin-left: 15px;\r\n  padding: 10px 30px;\r\n  background-color:   var(--black);\r\n  color: white;\r\n  border-radius: 30px;\r\n  border: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n      color: rgb(240, 84, 84);\r\n  }\r\n\r\n.alert[_ngcontent-%COMP%]{\r\n    font-weight: normal !important;\r\n    color: var(--black);\r\n  }\r\n\r\n.c-bff[_ngcontent-%COMP%]{\r\n    color: #007bff !important;\r\n    cursor: pointer;\r\n  }\r\n\r\n.error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n\r\n.edit-info[_ngcontent-%COMP%]{\r\n  background-color:rgba(45, 54, 99, 0.1);\r\n  background-image:url('pexels-pixabay-40568.jpg');\r\n  background-attachment: fixed;\r\n  background-size: 100% 100%;\r\n  background-position: 100% 100%;\r\n  font-weight: bold;\r\n  color: white;\r\n  text-align: left !important;\r\n}\r\n\r\n.zer.mt-0[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  text-align: left;\r\n  font-weight: normal;\r\n}\r\n\r\n.edit-form.hidden[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.edit-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.close-form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n.close-form[_ngcontent-%COMP%]   i.hidden[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.fa-heart[_ngcontent-%COMP%]{\r\n  color: var(--main);\r\n}\r\n\r\n.for-edit[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  margin: 5px 0;\r\n}\r\n\r\n.for-edit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  \r\n  color:white;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwyREFBMkQ7RUFDM0QsMERBQWlGO0VBQ2pGLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztBQUVBLGlCQUFpQjtBQUNqQix1Q0FBdUM7QUFDdkMsbUJBQW1COztBQUVuQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBQ0E7O0FBRUEsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1o7O0FBR0E7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFDQTs7O0lBR0ksYUFBYTtBQUNqQjs7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXOztJQUVYLDZCQUE2QjtBQUNqQzs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw2QkFBNkI7O0FBRWpDOztBQUNBOztJQUVJLFVBQVU7O0FBRWQ7O0FBQ0E7OztJQUdJLFVBQVU7QUFDZDs7QUFDQTs7O0lBR0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDOztBQUdBLHFDQUFxQzs7QUFFckMsZ0JBQWdCOztBQUVoQjs7O0lBR0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUNBO0VBQ0UsYUFBYTs7QUFFZjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0NBQ1g7O0FBQ0Q7O0lBRUksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFDQTs7SUFFSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZOzs7QUFHaEI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFDQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUNDOztJQUVHLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFHQSx3QkFBd0I7O0FBQ3hCOztJQUVJLFlBQVk7QUFDaEI7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFDQTs7RUFFRSxTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7O0VBRUUsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBQ0E7O0VBRUUsYUFBYTtBQUNmOztBQUNBOztFQUVFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLHFCQUFxQjtJQUNyQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0NBQ0Q7R0FDRSx5QkFBeUI7Q0FDM0I7Q0FDQTtHQUNFLGdCQUFnQjtHQUNoQixlQUFlO0NBQ2pCO0NBQ0E7R0FDRSxlQUFlO0NBQ2pCO0VBQ0M7SUFDRSxlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0M7TUFDSyx1QkFBdUI7RUFDM0I7O0FBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGVBQWU7RUFDakI7O0FBRUY7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxnREFBcUU7RUFDckUsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46Om5nLWRlZXAgYm9keXtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2lzdG9ja3Bob3RvLTk2ODg0NTE3Ni02MTJ4NjEyLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcblxyXG4ucHJvZmlsZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTY1cHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyXHJcbntcclxucGFkZGluZy10b3A6IDE1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDU0LCA5OSwgMC43KTtcclxucGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbn1cclxuLm9uZSBoMXtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG59XHJcbi5vbmUgc3BhblxyXG57XHJcbmZvbnQtc2l6ZToyMHB4IDtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxudWxcclxue1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbn1cclxubGlcclxue1xyXG5cclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuLnJlZFxyXG57XHJcbiAgICBjb2xvcjogcmdiKDI0MywgODEsIDgxKTtcclxufVxyXG5cclxuLm9uZSBpe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBjb2xvcjojNDdjY2M4O1xyXG59XHJcblxyXG5cclxuLnBob3RvX2hlYWRlclxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmltZ1xyXG57XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucGFyZW50MVxyXG5cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLnBhcmVudDJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbn1cclxuLnJvdzNcclxue1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuXHJcbn1cclxuLnJvdzVcclxue1xyXG5cclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuLnBhcmVudDNcclxue1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyogc2VjdGlvbiAxICAgKi9cclxuXHJcbi5zZWxlY3Rpb24tMSxcclxuLmRpc2Vhc2UtZm9ybVxyXG4ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHRyYW5zaXRpb246YWxsIC41cyAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3Rpb24tMXtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2VsZWN0aW9uLTE6Zm9jdXN7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNlYXNlLWZvcm17XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmRpc2Vhc2UtZm9ybS5hY3RpdmV7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmRpc2Vhc2UtZm9ybSBidXR0b257XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuLmRpc2Vhc2UtZm9ybS5hY3RpdmUgYnV0dG9ue1xyXG4gZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmRpc2Vhc2UtZm9ybS5hY3RpdmUgLnNlbGVjdGlvbi0xe1xyXG4gIGhlaWdodDogNDBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gfVxyXG4uZGVjb3IyICwgLmNvbnRhaW5lciBoMlxyXG57XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLlRoZS1DaHJvbmljXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxudGFibGVcclxue1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxudGhlYWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJEMzY2MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbnRke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmxhcmdcclxue1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmljb25wYXJlbnRcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5pY29uc1xyXG57XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcbiB0ZDpob3ZlclxyXG57XHJcbiAgICBjb2xvcjojNDdjY2M4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbnRkOmxhc3QtY2hpbGQ6aG92ZXJ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbnRhYmxlICBpOmhvdmVye1xyXG4gIGNvbG9yOiM0N2NjYzggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG5cclxuLyogdGhlIGxhc3Qgc2VjdGlvbiAgICAqL1xyXG5zZWN0aW9uIC5jb250YWluZXJcclxue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbnRhYmxlXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJ0bi1hZGRcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5tYi0yNXtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uZGlhZ29zaXMtRm9ybS1hZGQsXHJcbi5kaWFnb3Npcy1Gb3JtLXVwZGF0ZXtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuLmRpYWdvc2lzLUZvcm0tYWRkLmFjdGl2ZSB0ZXh0YXJlYSxcclxuLmRpYWdvc2lzLUZvcm0tdXBkYXRlLmFjdGl2ZSB0ZXh0YXJlYXtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaWFnb3Npcy1Gb3JtLWFkZCBidXR0b24sXHJcbi5kaWFnb3Npcy1Gb3JtLXVwZGF0ZSBidXR0b257XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZGlhZ29zaXMtRm9ybS1hZGQuYWN0aXZlIGJ1dHRvbixcclxuLmRpYWdvc2lzLUZvcm0tdXBkYXRlLmFjdGl2ZSBidXR0b257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxufVxyXG4uZGlhZ29zaXMtRm9ybS1hZGQuYWN0aXZlLFxyXG4uZGlhZ29zaXMtRm9ybS11cGRhdGUuYWN0aXZle1xyXG5oZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wLWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgY29sb3I6IGRlZXBza3libHVlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNyZWF0ZXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jcmVhdGUgc3BhbntcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4ucHQtNHtcclxuICBtYXJnaW46MjBweCBhdXRvIDMwcHg7XHJcbn1cclxuLnplcntcclxuICB3aWR0aDogNzUlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idXR0b25zLmQtZmxleHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uYnV0dG9ucyBwe1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuLmJ1dHRvbnMgcCBzcGFue1xyXG4gIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcclxufVxyXG4ubGFzdC1kaWFnbm9zaXN7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KSB7XHJcbiAgdGFibGV7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuXHJcbiAgdGFibGV7XHJcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGFibGUgLmljb25ze1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gLnB0LTN7XHJcbiAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBsYWJlbHtcclxuICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgZm9udC1zaXplOiAxM3B4O1xyXG4gfVxyXG4gLmZvcm0tY29udHJvbHtcclxuICAgZm9udC1zaXplOiAxM3B4O1xyXG4gfVxyXG4gIC5wLWQsIC56ZXIgLCB0ZXh0YXJlYXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgfVxyXG4gIC5wcm9maWxle1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICB9XHJcbiAgLmNyZWF0ZSAsIC5idXR0b25zLmQtZmxleHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLnNlY3Rpb24gb25lIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAub25lIGxpe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm9uZSAuY29sLW1kLTZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm9uZSBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAub25lIHVse1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGVjb3IyICwgLmNvbnRhaW5lciBoMiAsIC5vbmUgaDF7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICB9XHJcbn1cclxuXHJcbi5kaWFsb2ctMXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyMCU7XHJcbiAgcmlnaHQ6IC0xMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdHJhbnNpdGlvbjogMXMgYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXRvcDozcHggc29saWQgdmFyKC0tbWFpbikgO1xyXG4gIGJvcmRlci1sZWZ0OjNweCBzb2xpZCB2YXIoLS1tYWluKSA7XHJcbn1cclxuLmRpYWxvZy0xLmFjdGl2ZXtcclxuICByaWdodDogMDtcclxufVxyXG4ubXQtMHtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTE1e1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnBiLTEye1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcbi5tdC0yNXtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5bY2xhc3NePSdjb2wtJ117XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5idXR0b257XHJcbiAgbWFyZ2luOjEwcHggMDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICB2YXIoLS1ibGFjayk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiAuZWRpdC1pbmZvIHNwYW57XHJcbiAgICAgIGNvbG9yOiByZ2IoMjQwLCA4NCwgODQpO1xyXG4gIH1cclxuICAuYWxlcnR7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIH1cclxuICAuYy1iZmZ7XHJcbiAgICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuLmVycm9yIGRpdntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZWRpdC1pbmZve1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSg0NSwgNTQsIDk5LCAwLjEpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGV4ZWxzLXBpeGFiYXktNDA1NjguanBnKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi56ZXIubXQtMHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmVkaXQtZm9ybS5oaWRkZW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZWRpdC1pbmZvIC50ZXh0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNsb3NlLWZvcm0gIGl7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jbG9zZS1mb3JtIGkuaGlkZGVue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZhLWhlYXJ0e1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluKTtcclxufVxyXG4uZm9yLWVkaXR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG4uZm9yLWVkaXQgYXtcclxuICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "EzaU":
/*!********************************************************************!*\
  !*** ./src/app/admin/edit-admin-info/edit-admin-info.component.ts ***!
  \********************************************************************/
/*! exports provided: EditAdminInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAdminInfoComponent", function() { return EditAdminInfoComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function EditAdminInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function EditAdminInfoComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Type Only Characters At least 2. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditAdminInfoComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Type Valid Email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditAdminInfoComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.erroeMassage, " ");
} }
class EditAdminInfoComponent {
    constructor(api) {
        this.api = api;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
    }
    ngOnInit() {
        this.getAdminInfo();
    }
    getAdminInfo() {
        this.api.adminInfo(this.httpOptions).subscribe((data) => {
            this.admin_info = data.admin;
            this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.admin_info.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.admin_info.email),
            });
        });
    }
    submit(f) {
        this.api.editAdminInfo(f.value, this.httpOptions).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
                this.message = data.msg;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
}
EditAdminInfoComponent.ɵfac = function EditAdminInfoComponent_Factory(t) { return new (t || EditAdminInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
EditAdminInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditAdminInfoComponent, selectors: [["app-edit-admin-info"]], decls: 29, vars: 8, consts: [[1, "edit"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "col-md-12", "col-xs-12"], ["for", "first"], ["type", "text", "formControlName", "name", "placeholder", "Name", "name", "name", 1, "form-control", 3, "value"], [1, "error"], [4, "ngIf"], ["type", "email", "email", "", "formControlName", "email", "placeholder", "Email", "name", "full_name", 1, "form-control", 3, "value"], [1, "error", 2, "width", "100%"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-info"]], template: function EditAdminInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Edit Your Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditAdminInfoComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditAdminInfoComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(ctx.myGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EditAdminInfoComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, EditAdminInfoComponent_div_24_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, EditAdminInfoComponent_div_26_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        let tmp_5_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.admin_info.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.myGroup.get("name")) == null ? null : tmp_3_0.touched) && (ctx.myGroup.get("name").errors == null ? null : ctx.myGroup.get("name").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.admin_info.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.myGroup.get("email")) == null ? null : tmp_5_0.touched) && (ctx.myGroup.get("email").errors == null ? null : ctx.myGroup.get("email").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.myGroup.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  .edit[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #0f2075;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0;\r\n    font-size: 30px;\r\n    color:#0f2075;\r\n    font-weight: 500;\r\n  }\r\n  [class^='col-'][_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    margin:10px 0;\r\n    margin-left: 15px;\r\n    padding: 10px 30px;\r\n    background-color:#0f2075;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n        color: rgb(240, 84, 84);\r\n    }\r\n  .alert[_ngcontent-%COMP%]{\r\n      font-weight: normal !important;\r\n      color: var(--black);\r\n      width: 85%;\r\n      margin: 30px auto;\r\n    }\r\n  .c-bff[_ngcontent-%COMP%]{\r\n      color: #007bff !important;\r\n      cursor: pointer;\r\n    }\r\n  form[_ngcontent-%COMP%]{\r\n      width: 72%;\r\n      margin: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYWRtaW4taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNFO1FBQ0ksdUJBQXVCO0lBQzNCO0VBQ0E7TUFDRSw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixpQkFBaUI7SUFDbkI7RUFDQTtNQUNFLHlCQUF5QjtNQUN6QixlQUFlO0lBQ2pCO0VBQ0Y7TUFDSSxVQUFVO01BQ1YsWUFBWTtFQUNoQiIsImZpbGUiOiJlZGl0LWFkbWluLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXJyb3IgZGl2e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmVkaXR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMGYyMDc1O1xyXG4gIH1cclxuICBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IzBmMjA3NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIFtjbGFzc149J2NvbC0nXXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbjoxMHB4IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBmMjA3NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6IHJnYigyNDAsIDg0LCA4NCk7XHJcbiAgICB9XHJcbiAgICAuYWxlcnR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYy1iZmZ7XHJcbiAgICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBmb3Jte1xyXG4gICAgICB3aWR0aDogNzIlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditAdminInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-admin-info',
                templateUrl: './edit-admin-info.component.html',
                styleUrls: ['./edit-admin-info.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 11, vars: 0, consts: [[1, "not-found"], [1, "content"], ["src", "../../../assets/images/images (2).jpg"], ["routerLink", "/"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Erorr - Your Page Not Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The Page You Requested Could Not Be Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We Are Working on it :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".not-found[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n  width: 280px;\r\n  height: 265px;\r\n  display: block;\r\n  margin: auto;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  color: var(--black);\r\n  font-weight: 700;\r\n  line-height: 1.3;\r\n  text-align: center;\r\n  margin-bottom: .25rem;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  padding: 15px 25px 17px;\r\n  background-color: var(--black);\r\n  color: white;\r\n  border: 0;\r\n  border-radius: 30px;\r\n  margin: auto;\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osU0FBUztFQUNULG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogMjY1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbn1cclxuYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweCAxN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FLi5":
/*!******************************************************************!*\
  !*** ./src/app/admin/show-all-users/show-all-users.component.ts ***!
  \******************************************************************/
/*! exports provided: ShowAllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllUsersComponent", function() { return ShowAllUsersComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ShowAllUsersComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.national_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.date_of_birth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.social_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2.blood_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](19, 9, post_r2.created_at, 0, 10));
} }
function ShowAllUsersComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", size_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r4, " ");
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class ShowAllUsersComponent {
    constructor(api) {
        this.api = api;
        this.page = 1;
        this.count = 0;
        this.tableSize = 5;
        this.tableSizes = [5, 10, 20];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
    }
    ngOnInit() {
        this.fetchPosts();
    }
    fetchPosts() {
        this.api.getAllUsers(this.httpOptions).subscribe((data) => {
            this.users = data.users;
            console.log(data);
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
}
ShowAllUsersComponent.ɵfac = function ShowAllUsersComponent_Factory(t) { return new (t || ShowAllUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ShowAllUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowAllUsersComponent, selectors: [["app-show-all-users"]], decls: 39, vars: 10, consts: [[1, "all-users"], [1, "container"], [1, "content", 2, "overflow-x", "auto"], [1, "table"], ["border", "1px"], [1, "p-2"], [1, "p-2", "color-transparent"], [1, "p-2", "larg"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-20"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "pageChange"], [1, "current-page"], [1, "d-flex", "flex-row-reverse", "bd-highlight", "mb-2", "hidden-sm"], [1, "p-2", "bd-highlight"], [1, "custom-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["scope", "row"], [3, "ngValue"]], template: function ShowAllUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "National_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Date_of_birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "social_status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Blood_type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "created_at");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ShowAllUsersComponent_tr_27_Template, 20, 13, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "pagination-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ShowAllUsersComponent_Template_pagination_controls_pageChange_30_listener($event) { return ctx.onTableDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " current page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ShowAllUsersComponent_Template_select_change_37_listener($event) { return ctx.onTableSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ShowAllUsersComponent_option_38_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 3, ctx.users, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx.tableSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableSizes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".all-users[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 0px;\r\n  }\r\n  .container[_ngcontent-%COMP%]{\r\n    padding: 30px ;\r\n    text-align: center;\r\n  }\r\n    .pagination{\r\n     margin-top: 20px ;\r\n    justify-content: center !important;\r\n  }\r\n  h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0 40px;\r\n    font-size: 30px;\r\n    color: var(--black);\r\n  }\r\n  table[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: white;\r\n    color: var(--black);\r\n    \r\n  }\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n  }\r\n  .current-page[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    margin-top: 3px;\r\n  }\r\n  .current-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #65e6e2;\r\n  }\r\n  .content[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    overflow-x: auto;\r\n  }\r\n  .table[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n  }\r\n  .mt-20[_ngcontent-%COMP%]{\r\n    color: white;\r\n    margin-top: 20px;\r\n  }\r\n  table[_ngcontent-%COMP%]\r\n  {\r\n      text-align: center;\r\n      width: 100%;\r\n      border: 0;\r\n      background-color: #f8f9fa !important;\r\n  }\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border: 0;\r\n      white-space: nowrap;\r\n      text-align: left;\r\n      border-bottom: 1px solid #d6d8db;\r\n  }\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    vertical-align: bottom;\r\n    background: #d6d8db;\r\n  }\r\n    .ngx-pagination li:hover{\r\n    background-color: var(--black) !important;\r\n  }\r\n    .ngx-pagination .current{\r\n    background-color: var(--black) !important;\r\n  }\r\n    .ngx-pagination .disabled {\r\n    color: #585151 !important;\r\n  }\r\n  @media (max-width:575px) {\r\n    .hidden-sm[_ngcontent-%COMP%]{\r\n      display: none !important;\r\n    }\r\n    .container[_ngcontent-%COMP%]{\r\n      padding: 15px;\r\n      font-size: small;\r\n    }\r\n    .content[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      display: block;\r\n    }\r\n    .table[_ngcontent-%COMP%]{\r\n      margin: auto;\r\n      width: 100%;\r\n    }\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n      font-size:11px;\r\n      padding: 3px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYWxsLXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtFQUNWO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0M7S0FDRSxpQkFBaUI7SUFDbEIsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTs7TUFFSSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFNBQVM7TUFDVCxvQ0FBb0M7RUFDeEM7RUFDQTs7SUFFRSxTQUFTO01BQ1AsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixnQ0FBZ0M7RUFDcEM7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTtJQUNFO01BQ0Usd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsY0FBYztJQUNoQjtJQUNBO01BQ0UsWUFBWTtNQUNaLFdBQVc7SUFDYjtJQUNBO01BQ0UsY0FBYztNQUNkLFlBQVk7SUFDZDtFQUNGIiwiZmlsZSI6InNob3ctYWxsLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsLXVzZXJze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgIDo6bmctZGVlcCAucGFnaW5hdGlvbntcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4IDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgfVxyXG4gIHRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgfVxyXG4gXHJcbiAgdGFibGUgdGQgLCB0aHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5jdXJyZW50LXBhZ2V7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgfVxyXG4gIC5jdXJyZW50LXBhZ2Ugc3BhbntcclxuICAgIGNvbG9yOiAjNjVlNmUyO1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuICAudGFibGV7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxuICAubXQtMjB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICB0YWJsZVxyXG4gIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRhYmxlIHRoICxcclxuICB0YWJsZSB0ZHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ4ZGI7XHJcbiAgfVxyXG4gIHRhYmxlIHRoe1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQ6ICNkNmQ4ZGI7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogIzU4NTE1MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDo1NzVweCkge1xyXG4gICAgLmhpZGRlbi1zbXtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAudGFibGV7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB0ZCAsIHRoe1xyXG4gICAgICBmb250LXNpemU6MTFweDtcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowAllUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show-all-users',
                templateUrl: './show-all-users.component.html',
                styleUrls: ['./show-all-users.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "Fq/q":
/*!*********************************************************************!*\
  !*** ./src/app/components/donner-search/donner-search.component.ts ***!
  \*********************************************************************/
/*! exports provided: DonnerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerSearchComponent", function() { return DonnerSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");









function DonnerSearchComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ad_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ad_r5.name, " ");
} }
function DonnerSearchComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DonnerSearchComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Blood Type Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DonnerSearchComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
} }
function DonnerSearchComponent_div_49_table_2_thead_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DonnerSearchComponent_div_49_table_2_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const donor_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](donor_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](donor_r9.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](donor_r9.address);
} }
function DonnerSearchComponent_div_49_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonnerSearchComponent_div_49_table_2_thead_1_Template, 9, 0, "thead", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DonnerSearchComponent_div_49_table_2_tr_2_Template, 9, 4, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.donors == null ? null : ctx_r6.donors.length) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.donors);
} }
function DonnerSearchComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DonnerSearchComponent_div_49_table_2_Template, 3, 2, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.donors == null ? null : ctx_r4.donors.length) != 0);
} }
class DonnerSearchComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.search_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            blood_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.getdress();
        // Aos.init();
    }
    search(f) {
        this.api.donnerSearch(f.value).subscribe((data) => {
            if (data.status == true) {
                this.donors = data.Donors;
                this.message = "";
            }
            else {
                this.message = data.msg;
                this.donors = [];
            }
        });
    }
    getdress() {
        this.api.getProvnces().subscribe((data) => {
            this.address = data.provinces;
            console.log(this.address);
        });
    }
    goToAllDonors() {
        this.route.navigate(['all-donors']);
    }
}
DonnerSearchComponent.ɵfac = function DonnerSearchComponent_Factory(t) { return new (t || DonnerSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DonnerSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonnerSearchComponent, selectors: [["app-donner-search"]], decls: 51, vars: 7, consts: [[1, "search"], [1, "container", "pt-30px"], [1, "row"], [1, "col-md-12"], ["role", "alert", "role", "alert", 1, "alert", "alert-info"], [2, "cursor", "pointer", "color", "#1ccde9", 3, "click"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "col-md-12", "col-xs-12"], ["name", "address", "formControlName", "address", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "error"], [4, "ngIf"], ["name", "blood_type", "formControlName", "blood_type", "placeholder", "blood type", 1, "custom-select"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [3, "disabled"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "container mt-3", 4, "ngIf"], [3, "value"], ["role", "alert", 1, "alert", "alert-danger"], [1, "container", "mt-3"], [2, "overflow-x", "auto"], ["border", "1px", "class", "table-disease", 4, "ngIf"], ["border", "1px", 1, "table-disease"], ["class", "p-2", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "p-2"], [1, "p-2", "color-transparent"]], template: function DonnerSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Find Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " If you want to show all Donors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonnerSearchComponent_Template_a_click_9_listener() { return ctx.goToAllDonors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DonnerSearchComponent_Template_form_ngSubmit_11_listener() { return ctx.search(ctx.search_form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Full Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DonnerSearchComponent_option_18_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DonnerSearchComponent_div_20_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blood Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "AB+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "AB-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "O+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "O-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DonnerSearchComponent_div_45_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DonnerSearchComponent_div_48_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DonnerSearchComponent_div_49_Template, 3, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.search_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search_form.get("address").touched && (ctx.search_form.get("address").errors == null ? null : ctx.search_form.get("address").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search_form.get("blood_type").touched && (ctx.search_form.get("blood_type").errors == null ? null : ctx.search_form.get("blood_type").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.search_form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.donors == null ? null : ctx.donors.length) != undefined || (ctx.donors == null ? null : ctx.donors.length) != 0);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n  background-color:rgba(45, 54, 99, 0.1);\r\n  background-image:url('young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg');\r\n  background-attachment: fixed;\r\n  background-size: 100% 100%;\r\n  background-position: 100% 100%;\r\n  font-weight: bold;\r\n  color: #2D3663;\r\n  margin-top: 80px;\r\n  padding: 100px 0px 20px;\r\n  min-height: calc(100vh - 80px);\r\n}\r\nform[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n  margin: 20px auto;\r\n  color: var(--black);\r\n  text-align: left !important;\r\n}\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  padding-left:0 ;\r\n  padding-right: 0;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 30px 0;\r\n  text-shadow: 2px 2px 5px black;\r\n  color: white;\r\n  font-size: 30px;\r\n}\r\n.alert[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n  margin: auto;\r\n  font-size: 14px;\r\n  text-align: left;\r\n  background: var(--black);\r\n  color: white;\r\n  border: 0;\r\n  font-weight: normal\r\n}\r\n[class^='col-'][_ngcontent-%COMP%]{\r\n  margin-bottom: 15px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  margin:25px 15px 0;\r\n  padding: 10px 20px;\r\n  background-color: var(--black);\r\n  color: white;\r\n  border-radius: 30px;\r\n  border: none;\r\n}\r\nform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n@media (max-width:575px) {\r\n    button[_ngcontent-%COMP%]{\r\n      padding: 5px 15px 6px;\r\n    }\r\n  }\r\n\r\n.container.pt-30[_ngcontent-%COMP%]{\r\n  padding-top: 30px;\r\n  padding-bottom: 10px;\r\n}\r\n.decor2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]\r\n{\r\n    font-size: 35px;\r\n    color: white;\r\n    margin-bottom: 25px;\r\n    font-weight: 700;\r\n}\r\n.The-Chronic[_ngcontent-%COMP%]\r\n{\r\n    font-weight: bolder;\r\n    font-size: 20px;\r\n    color: gray;\r\n    padding: 40px;\r\n}\r\ntable[_ngcontent-%COMP%]\r\n{\r\n    width: 75%;\r\n    border: solid 1px gray;\r\n\r\n padding: 20px;\r\n    text-align: center;\r\n\r\n}\r\nthead[_ngcontent-%COMP%]\r\n{\r\n    background-color: #2D3663;\r\n    color: white;\r\n\r\n\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    background-color:white;\r\n    padding: 9px;\r\n}\r\ntd[_ngcontent-%COMP%]:hover\r\n{\r\n    color:#47ccc8;\r\n    cursor: pointer;\r\n    transition: .3s;\r\n}\r\ntd[_ngcontent-%COMP%]:last-child:hover{\r\n  color: black;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\ntable[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n.btn-add[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n.mb-25[_ngcontent-%COMP%]{\r\n  margin-bottom: 25px;\r\n  margin-top: 15px !important;\r\n}\r\n.pt-4[_ngcontent-%COMP%]{\r\n  margin:20px auto 30px;\r\n}\r\n.zer[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n  \r\n  text-align: left;\r\n  margin: auto;\r\n  height: auto !important;\r\n  \r\n  \r\n  \r\n  color: white !important;\r\n}\r\n.mt-3[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n}\r\n@media (max-width:991px) {\r\n  table[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n  }\r\n}\r\n@media (max-width:768px) {\r\n  table[_ngcontent-%COMP%]{\r\n    width: 97% !important;\r\n    font-size: 1.8vw !important;\r\n  }\r\n  .alert[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n  }\r\n\r\n .pt-3[_ngcontent-%COMP%]{\r\n   padding-top: 0 !important;\r\n }\r\n  .p-d[_ngcontent-%COMP%], .zer[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    width: 97%;\r\n  }\r\n\r\n  .create[_ngcontent-%COMP%], .buttons.d-flex[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .section[_ngcontent-%COMP%]   one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding-top: 15px !important;\r\n  }\r\n\r\n  .decor2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 5vw;\r\n  }\r\n}\r\n@media (max-width:575px) {\r\n  .search[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbm5lci1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyw2RkFBa0g7RUFDbEgsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osU0FBUztFQUNUO0FBQ0Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVFO0lBQ0U7TUFDRSxxQkFBcUI7SUFDdkI7RUFDRjtBQUVBOzs7S0FHRztBQUNMO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBOztJQUVJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUdBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxVQUFVO0lBQ1Ysc0JBQXNCOztDQUV6QixhQUFhO0lBQ1Ysa0JBQWtCOztBQUV0QjtBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZOzs7QUFHaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBRUM7O0lBRUcsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFHQSx3QkFBd0I7QUFDdkI7O0lBRUcsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBOztJQUVJLFdBQVc7QUFDZjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7RUFDWjs7Q0FFRDtHQUNFLHlCQUF5QjtDQUMzQjtFQUNDO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUdBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJkb25uZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5lcnJvciBkaXZ7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNlYXJjaHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDUsIDU0LCA5OSwgMC4xKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3lvdW5nLWhhbmRzb21lLXBoeXNpY2lhbi1tZWRpY2FsLXJvYmUtd2l0aC1zdGV0aG9zY29wZV8xMzAzLTE3ODE4LmpwZyk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyRDM2NjM7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBwYWRkaW5nOiAxMDBweCAwcHggMjBweDtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbn1cclxuZm9ybXtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2wtbWQtMTJ7XHJcbiAgcGFkZGluZy1sZWZ0OjAgO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5hbGVydHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXdlaWdodDogbm9ybWFsXHJcbn1cclxuW2NsYXNzXj0nY29sLSdde1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIG1hcmdpbjoyNXB4IDE1cHggMDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZm9ybSBzcGFue1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuICAgIGJ1dHRvbntcclxuICAgICAgcGFkZGluZzogNXB4IDE1cHggNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLmNvbnRhaW5lclxyXG4gIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCA1NCwgOTksIDAuNTUpO1xyXG4gIH0gKi9cclxuLmNvbnRhaW5lci5wdC0zMHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRlY29yMiAsIC5jb250YWluZXIgaDJcclxue1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcblxyXG4uVGhlLUNocm9uaWNcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxufVxyXG50YWJsZVxyXG57XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcclxuXHJcbiBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxudGhlYWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJEMzY2MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbnRke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDlweDtcclxufVxyXG5cclxuIHRkOmhvdmVyXHJcbntcclxuICAgIGNvbG9yOiM0N2NjYzg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxudGQ6bGFzdC1jaGlsZDpob3ZlcntcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4vKiB0aGUgbGFzdCBzZWN0aW9uICAgICovXHJcbiAuY29udGFpbmVyXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG50YWJsZVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5idG4tYWRkXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubWItMjV7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC00e1xyXG4gIG1hcmdpbjoyMHB4IGF1dG8gMzBweDtcclxufVxyXG4uemVye1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgLyogYm9yZGVyOiAxcHg7ICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgLyogcGFkZGluZzogMTVweDsgKi9cclxuICAvKiBjb2xvcjogdmFyKC0tYmxhY2spOyAqL1xyXG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm10LTN7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xyXG4gIHRhYmxle1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgdGFibGV7XHJcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEuOHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hbGVydCAgLCBmb3Jte1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG4gLnB0LTN7XHJcbiAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAgLnAtZCwgLnplciB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gIH1cclxuXHJcbiAgLmNyZWF0ZSAsIC5idXR0b25zLmQtZmxleHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLnNlY3Rpb24gb25lIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRlY29yMiAsIC5jb250YWluZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuICAuc2VhcmNoe1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonnerSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donner-search',
                templateUrl: './donner-search.component.html',
                styleUrls: ['./donner-search.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");








function ContactComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_div_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.goToHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to go to Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function ContactComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Characters At least 2. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Valid Email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Content Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(api) {
        this.api = api;
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
    }
    submit(f) {
        this.api.contactUs(f.value).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
                this.message = data.msg;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 46, vars: 9, consts: [[1, "full-page"], [1, "content"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["autocomplete", "off", 1, "contact-us", 3, "formGroup", "ngSubmit"], [1, "title"], ["type", "text", "formControlName", "name", "placeholder", "Enter Your Name", "name", "name", 1, "form-control"], [1, "error"], [4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Enter Your Email", "name", "name", 1, "form-control"], ["type", "text", "formControlName", "subject", "placeholder", "Enter Subject", "name", "subject", 1, "form-control"], ["type", "text", "formControlName", "content", "rows", "3", "placeholder", "Enter Content", "name", "content", 1, "form-control"], ["type", "submit", 3, "disabled"], [1, "call-us"], [1, "dep"], [1, "dep-title"], [1, "fa", "fa-phone"], [1, "caption"], [1, "fa", "fa-envelope"], ["src", "../../../assets/images/24-hour-service.png", "alt", "24hours"], ["role", "alert", 1, "alert", "alert-info"], [3, "click"], [1, "c-bff"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactComponent_div_3_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(ctx.Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContactComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactComponent_div_13_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContactComponent_div_14_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactComponent_div_17_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactComponent_div_20_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CALL US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "P", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "+2 01009647973, +2 01024722086");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "P", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "healthhistory@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "BESINESS HOURS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "P", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mon \u2013 Fri ..... 10 am \u2013 8 pm, Sat, Sun ..... Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("name").touched && (ctx.Form.get("name").errors == null ? null : ctx.Form.get("name").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("name").touched && (ctx.Form.get("name").errors == null ? null : ctx.Form.get("name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("email").touched && (ctx.Form.get("email").errors == null ? null : ctx.Form.get("email").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("email").touched && (ctx.Form.get("email").errors == null ? null : ctx.Form.get("email").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("subject").touched && (ctx.Form.get("subject").errors == null ? null : ctx.Form.get("subject").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("content").touched && (ctx.Form.get("content").errors == null ? null : ctx.Form.get("content").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.Form.valid);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".full-page[_ngcontent-%COMP%]{\r\n    margin-top:80px ;\r\n}\r\n.alert[_ngcontent-%COMP%]{\r\n    width: 71%;\r\n    margin-top: 30px auto;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n    background-image: url('gfgfg-min.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    overflow: hidden;\r\n    width: 100%;\r\n}\r\n.contact-us[_ngcontent-%COMP%] {\r\n    width: 71%;\r\n    min-height: 510px;\r\n    height: auto;\r\n    margin: 60px auto 0 0;\r\n    background-color: white;\r\n    box-shadow: 5px 5px 20px 0 rgb(0 0 0 / 40%);\r\n    position: relative;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n}\r\n.contact-us[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    margin: 7px 0 0;\r\n}\r\n.contact-us[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    margin: 20px 0px 0px;\r\n    display: block;\r\n    width: 100%;\r\n    padding: 10px;\r\n    outline-color: 0;\r\n}\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: rgb(158, 157, 157);\r\n    opacity: 1;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    border: 2px solid var(--black);\r\n    transition: 0.2s all ease-in-out;\r\n    background-color: var(--black);\r\n    color: white;\r\n    border-radius: 30px;\r\n}\r\n.call-us[_ngcontent-%COMP%] {\r\n    background-color: #292d33;\r\n    box-shadow: 5px 5px 20px 0 rgb(0 0 0 / 40%);\r\n    padding: 30px;\r\n    height: auto;\r\n    position: relative;\r\n    z-index: 4;\r\n    \r\n    overflow: hidden;\r\n}\r\n.call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%] {\r\n    padding: 30px 5px;\r\n    color: white;\r\n}\r\n.call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .dep-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    color: var(--main);\r\n    font-size: 19px;\r\n}\r\n.call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .dep-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n    width: 30px;\r\n}\r\n.call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .dep-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n@media (min-width: 300px) and (max-width: 766px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        background-size: 100% 200%;\r\n        padding: 0px 4%;\r\n    }\r\n    .contact-us[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin: 40px auto 0 0;\r\n        padding: 30px 20px 30px 20px;\r\n    }\r\n    .contact-us[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n        font-size: 1.7rem;\r\n    }\r\n    [_ngcontent-%COMP%]::placeholder {\r\n        font-size: 12px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        margin-bottom: 10px;\r\n        padding: 4px 18px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%] {\r\n        height: 390px;\r\n        width: 100%;\r\n        margin: 20px 45px 20px 0px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%] {\r\n        padding: 20px 5px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .dep-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 18px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .dep-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        font-size: 15px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        font-size: 12px;\r\n    }\r\n}\r\n@media (min-width: 767px) and (max-width: 959px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 1000px;\r\n        background-size: 110% 110%;\r\n        padding: 0px 8%;\r\n    }\r\n    .contact-us[_ngcontent-%COMP%] {\r\n        padding: 30px 50px;\r\n    }\r\n    .contact-us[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n        font-size: 2.1rem;\r\n    }\r\n    [_ngcontent-%COMP%]::placeholder {\r\n        font-size: 13px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        padding: 6px 20px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%] {\r\n        min-height: 420px;\r\n        width: 55%;\r\n        margin: -50px 45px 60px 25%;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%] {\r\n        padding: 20px 5px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .dep-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 20px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\r\n        margin-top: 11px;\r\n        font-size: 14px;\r\n    }\r\n}\r\n@media (min-width: 960px) and (max-width: 1199px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 740px;\r\n        background-size: 100% 100%;\r\n        padding: 0px 8%;\r\n    }\r\n    .contact-us[_ngcontent-%COMP%] {\r\n        padding: 30px 190px 30px 50px;\r\n    }\r\n    .contact-us[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n        font-size: 2.3rem;\r\n    }\r\n    [_ngcontent-%COMP%]::placeholder {\r\n        font-size: 14px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        padding: 8px 22px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%] {\r\n        min-height: 490px;\r\n        width: 40%;\r\n        margin: -400px 45px 60px 45%;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .dep-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 22px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\r\n        margin-top: 13px;\r\n        font-size: 14px;\r\n    }\r\n}\r\n@media (min-width: 1200px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 730px;\r\n        padding: 0px 12%;\r\n    }\r\n    .contact-us[_ngcontent-%COMP%] {\r\n        padding: 30px 150px 30px 50px;\r\n    }\r\n    .contact-us[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    [_ngcontent-%COMP%]::placeholder {\r\n        font-size: 15px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        padding: 10px 24px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%] {\r\n        min-height: 451px;\r\n        width: 36.5%;\r\n        margin: -403px 45px 60px 60%;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .dep-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 27px;\r\n    }\r\n    .call-us[_ngcontent-%COMP%]   .dep[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\r\n        margin-top: 15px;\r\n        font-size: 16px;\r\n    }\r\n}\r\n.error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\nbutton[_ngcontent-%COMP%]{\r\n      margin-top: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0NBQTJEO0lBQzNELDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBOztJQUVJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdEQUFnRDtJQUNoRCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7UUFDMUIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztRQUNYLHFCQUFxQjtRQUNyQiw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYiwwQkFBMEI7UUFDMUIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFVBQVU7UUFDViw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNBO01BQ0ksZ0JBQWdCO0VBQ3BCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXBhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOjgwcHggO1xyXG59XHJcbi5hbGVydHtcclxuICAgIHdpZHRoOiA3MSU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4IGF1dG87XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2ZnZmctbWluLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250YWN0LXVzIHtcclxuICAgIHdpZHRoOiA3MSU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogNjBweCBhdXRvIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDAgcmdiKDAgMCAwIC8gNDAlKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb250YWN0LXVzIC50aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDdweCAwIDA7XHJcbn1cclxuLmNvbnRhY3QtdXMgaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiAwO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTU4LCAxNTcsIDE1Nyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5jYWxsLXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJkMzM7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMCByZ2IoMCAwIDAgLyA0MCUpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICAvKiBmb250LWZhbWlseTogT3N3YWxkLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jYWxsLXVzIC5kZXAge1xyXG4gICAgcGFkZGluZzogMzBweCA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhbGwtdXMgLmRlcCAuZGVwLXRpdGxlIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbi5jYWxsLXVzIC5kZXAgLmRlcC10aXRsZSBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4uY2FsbC11cyAuZGVwIC5kZXAtdGl0bGUgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA0JTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXVzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDQwcHggYXV0byAwIDA7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4IDMwcHggMjBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXVzIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcbiAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuY2FsbC11cyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzOTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDIwcHggNDVweCAyMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5jYWxsLXVzIC5kZXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNXB4O1xyXG4gICAgfVxyXG4gICAgLmNhbGwtdXMgLmRlcCAuZGVwLXRpdGxlIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuY2FsbC11cyAuZGVwIC5kZXAtdGl0bGUgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNhbGwtdXMgLmRlcCAuY2FwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggOCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC11cyB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtdXMgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgIH1cclxuICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FsbC11cyB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICBtYXJnaW46IC01MHB4IDQ1cHggNjBweCAyNSU7XHJcbiAgICB9XHJcbiAgICAuY2FsbC11cyAuZGVwIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICAgIH1cclxuICAgIC5jYWxsLXVzIC5kZXAgLmRlcC10aXRsZSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbGwtdXMgLmRlcCAuY2FwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA3NDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggOCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC11cyB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxOTBweCAzMHB4IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC11cyAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgfVxyXG4gICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMjJweDtcclxuICAgIH1cclxuICAgIC5jYWxsLXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OTBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbjogLTQwMHB4IDQ1cHggNjBweCA0NSU7XHJcbiAgICB9XHJcbiAgICAuY2FsbC11cyAuZGVwIC5kZXAtdGl0bGUgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgIH1cclxuICAgIC5jYWxsLXVzIC5kZXAgLmNhcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDczMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMiU7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC11cyB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxNTBweCAzMHB4IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC11cyAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuY2FsbC11cyB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDUxcHg7XHJcbiAgICAgICAgd2lkdGg6IDM2LjUlO1xyXG4gICAgICAgIG1hcmdpbjogLTQwM3B4IDQ1cHggNjBweCA2MCU7XHJcbiAgICB9XHJcbiAgICAuY2FsbC11cyAuZGVwIC5kZXAtdGl0bGUgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjdweDtcclxuICAgIH1cclxuICAgIC5jYWxsLXVzIC5kZXAgLmNhcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcbi5lcnJvciBkaXZ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiService {
    constructor(http) {
        this.http = http;
    }
    creataccount(info) {
        return this.http.post("https://health-history.herokuapp.com/api/user/register", info);
    }
    login(id) {
        return this.http.post(`https://health-history.herokuapp.com/api/user/login`, id);
    }
    logout(opt) {
        return this.http.get(`https://health-history.herokuapp.com/api/user/logout`, opt);
    }
    getProvnces() {
        return this.http.get("https://health-history.herokuapp.com/api/user/provinces");
    }
    getDonners() {
        return this.http.get("https://health-history.herokuapp.com/api/user/donors");
    }
    addDonners(donner) {
        return this.http.post("https://health-history.herokuapp.com/api/user/add-donor", donner);
    }
    donnerSearch(search) {
        return this.http.post("https://health-history.herokuapp.com/api/user/donors-search", search);
    }
    /******** profile  user ********/
    getPersonalInfo(opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/personal-information", {}, opt);
    }
    editUserInfo(info, opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/edit-information", info, opt);
    }
    getUserDisease(opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/chronic-disease-data", {}, opt);
    }
    getUserDiagnosis(opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/diagnosis-data", {}, opt);
    }
    getDisease() {
        return this.http.get("https://health-history.herokuapp.com/api/user/chronic-disease");
    }
    addUserDisease(id, opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/add-chronic-disease", id, opt);
    }
    addUserDiagnosis(diagnosis, opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/add-diagnosis", diagnosis, opt);
    }
    UpdateUserDiagnosis(diagnosis, opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/edit-diagnosis", diagnosis, opt);
    }
    addPhoto(photo, opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/profile-picture", photo, opt);
    }
    changeUserDisease(id, opt) {
        return this.http.post("https://health-history.herokuapp.com/api/user/profile/chronic-disease-status", { id: id }, opt);
    }
    contactUs(data) {
        return this.http.post("https://health-history.herokuapp.com/api/user/contact-us", data);
    }
    /*** admin ****/
    adminInfo(opt) {
        return this.http.get(`https://health-history.herokuapp.com/api/admin/profile/admin-info`, opt);
    }
    editAdminInfo(data, opt) {
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-admin-info`, data, opt);
    }
    editAdminPhoto(data, opt) {
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-admin-photo`, data, opt);
    }
    loginِAdmin(data) {
        return this.http.post(`https://health-history.herokuapp.com/api/admin/login`, data);
    }
    //  auth-token
    logOutAdmin(opt) {
        return this.http.get(`https://health-history.herokuapp.com/api/admin/logout`, opt);
    }
    getallAdices() {
        return this.http.get(`https://health-history.herokuapp.com/api/admin/all-advices`);
    }
    addAdvice(data, opt) {
        // advice , status
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/add-advice`, data, opt);
    }
    editAdvice(data, opt) {
        //id, advice , status
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-advice`, data, opt);
    }
    deleteAdvice(id, opt) {
        //id
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/delete-advice`, { id: id }, opt);
    }
    AdviceStatus(data, opt) {
        //id
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/change-advice-status`, data, opt);
    }
    getAllUsers(opt) {
        return this.http.get(`https://health-history.herokuapp.com/api/admin/profile/all-users`, opt);
    }
    deleteUser(id, opt) {
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/delete-user`, id, opt);
    }
    deleteDonor(id, opt) {
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/delete-donor`, id, opt);
    }
    getUserChart(opt) {
        return this.http.get(`https://health-history.herokuapp.com/api/admin/profile/number-of-user-per-month`, opt);
    }
    getDonnersChart(opt) {
        return this.http.get(`https://health-history.herokuapp.com/api/admin/profile/number-of-donor-per-month`, opt);
    }
    getCount() {
        return this.http.get(`https://health-history.herokuapp.com/api/admin/counts`);
    }
    ///error
    deleteDis(id, opt) {
        return this.http.post('https://health-history.herokuapp.com/api/admin/profile/delete-chronic-disease', { id: id }, opt);
    }
    editDisease(data, opt) {
        return this.http.post('https://health-history.herokuapp.com/api/admin/profile/edit-chronic-disease', data, opt);
    }
    addDisease(data, opt) {
        return this.http.post('https://health-history.herokuapp.com/api/admin/profile/add-chronic-disease', data, opt);
    }
    getAdminPhoto(data, opt) {
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-admin-photo`, data, opt);
    }
    searchForUser(data, opt) {
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/users-search`, data, opt);
    }
    editUserData(data, opt) {
        return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-user-by-admin`, data, opt);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.goToTop();
    }
    goToTop() {
        window.scrollTo(0, 0);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 52, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6", "d-flex"], [1, "mb-0"], ["src", "assets/images/WhatsApp_Image_2022-04-06_at_6.33.27_AM-removebg-preview.png"], [1, "col-lg-3", "col-md-6"], [1, "fa", "fa-phone", "icons"], [1, "fa", "fa-map-marker", "icons"], [1, "fa", "fa-envelope", "icons"], [1, "fa", "fa-skype", "icons"], [1, "footerLink"], ["routerLink", "/", 3, "click"], ["routerLink", "/", "fragment", "about"], ["routerLink", "/", "fragment", "donation"], [1, "links"], ["href", "#"], [1, "fa", "fa-facebook", "icons", "fontIcon"], [1, "fa", "fa-twitter", "icons", "fontIcon"], [1, "fa", "fa-instagram", "icons", "fontIcon"], [1, "fa", "fa-pinterest", "icons", "fontIcon"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone: 01024722086");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Address: Naser City, Cairo, Egypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email: healthyhistory2022@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Skype:you_online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_27_listener() { return ctx.goToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Donation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos nostrum ipsam accusantium alias et quae tempore, non deserunt saepe corrupti suscipit? Illum provident sed consequuntur eius animi, voluptas soluta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Copyright \u00A9 2022 - All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%]{\r\n  max-width: 1380px;\r\n}\r\n.footer[_ngcontent-%COMP%]\r\n{\r\n    padding: 30px 0px;\r\n    background-color: var(--black);\r\n    color: var(--main);\r\n    font-size: 13px !important;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n.mb-0[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n}\r\n.footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem;\r\n}\r\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n    margin: 15px 0;\r\n}\r\n.footer[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n}\r\n.footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 34px;\r\n}\r\n.footerLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\r\n{\r\ntext-decoration: none;\r\ncolor: white;\r\ndisplay: block;\r\n}\r\n.col-lg-3[_ngcontent-%COMP%]{\r\n  margin-bottom: 20px;\r\n}\r\n.footerLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover\r\n{\r\n    color:#47ccc8 ;\r\n    transition: .2s;\r\n}\r\n.icons[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    color: #47ccc8;\r\n}\r\n.fontIcon[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n.copyright[_ngcontent-%COMP%]{\r\n  background-color:var(--black);\r\n  border-top: 1px solid #aeb3cb59;\r\n}\r\n.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding:10px;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 12px;\r\n}\r\n.d-flex[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.links[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  width: 73%;\r\n  justify-content: space-between;\r\n}\r\n@media (max-width:992px) {\r\n  .d-flex[_ngcontent-%COMP%]{\r\n    justify-content: left;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDJEQUEyRDtBQUMvRDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckIsWUFBWTtBQUNaLGNBQWM7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7OztJQUdJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogMTM4MHB4O1xyXG59XHJcbi5mb290ZXJcclxue1xyXG4gICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYi0we1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmZvb3RlciBoM3tcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uZm9vdGVyIHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufVxyXG4uZm9vdGVyIC5hYm91dHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmZvb3RlciBoMyBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5mb290ZXJMaW5rIGFcclxue1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmNvbG9yOiB3aGl0ZTtcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbC1sZy0ze1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvb3RlckxpbmsgYTpob3ZlcixcclxuLmxpbmtzIGEgaTpob3ZlclxyXG57XHJcbiAgICBjb2xvcjojNDdjY2M4IDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxufVxyXG4uaWNvbnN7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogIzQ3Y2NjODtcclxufVxyXG4uZm9udEljb257XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ibGFjayk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhZWIzY2I1OTtcclxufVxyXG4uY29weXJpZ2h0IHB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmQtZmxleHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA3MyU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTJweCkge1xyXG4gIC5kLWZsZXh7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QLIp":
/*!************************************************************!*\
  !*** ./src/app/admin/advice-edit/advice-edit.component.ts ***!
  \************************************************************/
/*! exports provided: AdviceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdviceEditComponent", function() { return AdviceEditComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AdviceEditComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function AdviceEditComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.erroeMassage, " ");
} }
class AdviceEditComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            advice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(data => {
            this.id = data.get('id');
        });
        this.getAllAdvices();
    }
    edit(f) {
        this.api.editAdvice(f.value, this.httpOptions).subscribe((data) => {
            if (data.status == true) {
                this.message = data.msg;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
    getAllAdvices() {
        this.api.getallAdices().subscribe((data) => {
            this.AllAdvices = data.advices;
            this.AllAdvices.forEach(e => {
                if (e.id == this.id) {
                    this.advice = e;
                }
            });
            this.myGroup.controls.id.patchValue(this.advice.id);
            this.myGroup.controls.advice.patchValue(this.advice.advice);
            this.myGroup.controls.status.patchValue(this.advice.status);
        });
    }
}
AdviceEditComponent.ɵfac = function AdviceEditComponent_Factory(t) { return new (t || AdviceEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
AdviceEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdviceEditComponent, selectors: [["app-advice-edit"]], decls: 33, vars: 4, consts: [[1, "edit"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "col-md-12", "col-xs-12"], ["for", "first"], ["type", "text", "formControlName", "id", "placeholder", "Id", "name", "Id", 1, "form-control"], ["type", "text", "rows", "3", "formControlName", "advice", "placeholder", "Advice", "name", "advice", 1, "form-control"], [1, "custom-control", "custom-control-dark", "custom-switch"], ["type", "checkbox", "formControlName", "status", "id", "customSwitch8", 1, "custom-control-input"], ["for", "customSwitch8", 1, "custom-control-label"], [1, "error", 2, "width", "100%"], [4, "ngIf"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-info"]], template: function AdviceEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Edit Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdviceEditComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdviceEditComponent_Template_form_ngSubmit_7_listener() { return ctx.edit(ctx.myGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Advice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AdviceEditComponent_div_30_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.myGroup.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  .edit[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #0f2075;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0;\r\n    font-size: 30px;\r\n    color:#0f2075;\r\n    font-weight: 500;\r\n  }\r\n  [class^='col-'][_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    margin:10px 0;\r\n    margin-left: 15px;\r\n    padding: 10px 30px;\r\n    background-color:#0f2075;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n        color: rgb(240, 84, 84);\r\n    }\r\n  .alert[_ngcontent-%COMP%]{\r\n      font-weight: normal !important;\r\n      color: #0f2075;\r\n      width: 85%;\r\n      margin: 30px auto;\r\n    }\r\n  .c-bff[_ngcontent-%COMP%]{\r\n      color: #007bff !important;\r\n      cursor: pointer;\r\n    }\r\n  form[_ngcontent-%COMP%]{\r\n      width: 72%;\r\n      margin: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmljZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0U7UUFDSSx1QkFBdUI7SUFDM0I7RUFDQTtNQUNFLDhCQUE4QjtNQUM5QixjQUFjO01BQ2QsVUFBVTtNQUNWLGlCQUFpQjtJQUNuQjtFQUNBO01BQ0UseUJBQXlCO01BQ3pCLGVBQWU7SUFDakI7RUFDRjtNQUNJLFVBQVU7TUFDVixZQUFZO0VBQ2hCIiwiZmlsZSI6ImFkdmljZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmVycm9yIGRpdntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5lZGl0e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzBmMjA3NTtcclxuICB9XHJcbiAgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiMwZjIwNzU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICBbY2xhc3NePSdjb2wtJ117XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBtYXJnaW46MTBweCAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwZjIwNzU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjQwLCA4NCwgODQpO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0e1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjMGYyMDc1O1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5jLWJmZntcclxuICAgICAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIGZvcm17XHJcbiAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdviceEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-advice-edit',
                templateUrl: './advice-edit.component.html',
                styleUrls: ['./advice-edit.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wowjs/dist/wow.min */ "ybkt");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(api) {
        this.api = api;
        this.title = 'GraduationProject';
        this.Tips = [];
        this.i = 0;
    }
    ngOnInit() {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_1__["WOW"]().init();
        // document.querySelector("body").style.overflowY ="hidden";
        // let x = document.querySelector(".loading") as HTMLElement;
        // x.style.display="block !important";
        // window.onload = ()=>{
        // setTimeout(()=>{
        //   x.style.display="none";
        // document.querySelector("body").style.overflowY ="auto";
        // },3000)
        // }
        this.api.getallAdices().subscribe((data) => {
            this.Tips = data.advices;
        });
        setInterval(() => {
            let d = document.querySelector(".dialog");
            this.advice = this.Tips[this.i].advice;
            d.classList.add('active');
            setTimeout(() => {
                d.classList.remove('active');
            }, 7000);
            this.i++;
            if (this.i >= this.Tips.length) {
                this.i = 0;
            }
        }, 15000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[1, "dialog"], ["src", "../assets/images/idea (1).png"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Advice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.advice, "\n");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".dialog[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  bottom: 0%;\r\n  right: -100%;\r\n  padding: 20px;\r\n  max-width: 300px;\r\n  background: white;\r\n  color: var(--black);\r\n  z-index: 999;\r\n  text-align: left;\r\n  transition: 2s all;\r\n  font-weight: 600;\r\n  border-top:3px solid var(--main) ;\r\n  border-left:3px solid var(--main) ;\r\n\r\n}\r\n.dialog.active[_ngcontent-%COMP%]{\r\n  right: 0;\r\n}\r\n.dialog[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n  padding-bottom: 5px;\r\n  border-bottom: 3px solid #eee;\r\n  width: 45%;\r\n}\r\n.dialog[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 20px;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #212121;\r\n}\r\n.pulse[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  width: 200px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n.pulse[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  display: block;\r\n  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 200px 100px\" enable-background=\"new 0 0 200px 100px\" xml:space=\"preserve\"><polyline fill=\"none\" stroke-width=\"3px\" stroke=\"white\" points=\"2.4,58.7 70.8,58.7 76.1,46.2 81.1,58.7 89.9,58.7 93.8,66.5 102.8,22.7 110.6,78.7 115.3,58.7 126.4,58.7 134.4,54.7 142.4,58.7 197.8,58.7 \"/></svg>') 0 0 no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  animation: 2s pulse linear infinite;\r\n    clip: rect(0, 0, 100px, 0);\r\n}\r\n.pulse[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 0;\r\n  top: 16px;\r\n  margin: auto;\r\n  height: 3px;\r\n}\r\n.loading[_ngcontent-%COMP%]{\r\n  background-color: var(--main);\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  z-index: 9999;\r\n  display: block;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n@keyframes pulse {\r\n  0% {\r\n    clip: rect(0, 0, 100px, 0);\r\n  }\r\n  4% {\r\n    clip: rect(0, 66.66667px, 100px, 0);\r\n  }\r\n  15% {\r\n    clip: rect(0, 133.33333px, 100px, 0);\r\n  }\r\n  20% {\r\n    clip: rect(0, 300px, 100px, 0);\r\n     opacity:1;\r\n  }\r\n\r\n  80% {\r\n    clip: rect(0, 300px, 100px, 0);\r\n     opacity:0;\r\n  }\r\n\r\n  90% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    clip: rect(0, 300px, 100px, 0);\r\n    opacity:0;\r\n }\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsa0NBQWtDOztBQUVwQztBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUdBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxvYkFBb2I7RUFDcGIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFJbEIsbUNBQW1DO0lBQ2pDLDBCQUEwQjtBQUM5QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLE1BQU07RUFDTixPQUFPO0FBQ1Q7QUFrQ0E7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLDhCQUE4QjtLQUM3QixTQUFTO0VBQ1o7O0VBRUE7SUFDRSw4QkFBOEI7S0FDN0IsU0FBUztFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFNBQVM7Q0FDWjs7QUFFRCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2d7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgcmlnaHQ6IC0xMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRyYW5zaXRpb246IDJzIGFsbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci10b3A6M3B4IHNvbGlkIHZhcigtLW1haW4pIDtcclxuICBib3JkZXItbGVmdDozcHggc29saWQgdmFyKC0tbWFpbikgO1xyXG5cclxufVxyXG4uZGlhbG9nLmFjdGl2ZXtcclxuICByaWdodDogMDtcclxufVxyXG4uZGlhbG9nICBoNntcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZWVlO1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuLmRpYWxvZyBoNiBpbWd7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxufVxyXG5cclxuLnB1bHNlIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5wdWxzZTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDIwMHB4IDEwMHB4XCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDIwMHB4IDEwMHB4XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48cG9seWxpbmUgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIzcHhcIiBzdHJva2U9XCJ3aGl0ZVwiIHBvaW50cz1cIjIuNCw1OC43IDcwLjgsNTguNyA3Ni4xLDQ2LjIgODEuMSw1OC43IDg5LjksNTguNyA5My44LDY2LjUgMTAyLjgsMjIuNyAxMTAuNiw3OC43IDExNS4zLDU4LjcgMTI2LjQsNTguNyAxMzQuNCw1NC43IDE0Mi40LDU4LjcgMTk3LjgsNTguNyBcIi8+PC9zdmc+JykgMCAwIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAycyBwdWxzZSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IDJzIHB1bHNlIGxpbmVhciBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb246IDJzIHB1bHNlIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IDJzIHB1bHNlIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMTAwcHgsIDApO1xyXG59XHJcbi5wdWxzZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBsZWZ0OiAycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAxNnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDNweDtcclxufVxyXG5cclxuLmxvYWRpbmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7XHJcbiAgICBjbGlwOiByZWN0KDAsIDAsIDEwMHB4LCAwKTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgNCUge1xyXG4gICAgY2xpcDogcmVjdCgwLCA2Ni42NjY2N3B4LCAxMDBweCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG4gIDE1JSB7XHJcbiAgICBjbGlwOiByZWN0KDAsIDEzMy4zMzMzM3B4LCAxMDBweCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBjbGlwOiByZWN0KDAsIDMwMHB4LCAxMDBweCwgMCk7XHJcbiAgICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICBjbGlwOiByZWN0KDAsIDMwMHB4LCAxMDBweCwgMCk7XHJcbiAgICAgb3BhY2l0eTowO1xyXG4gIH1cclxuXHJcbiAgOTAlIHtcclxuICAgIGNsaXA6IHJlY3QoMCwgMzAwcHgsIDEwMHB4LCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGNsaXA6IHJlY3QoMCwgMzAwcHgsIDEwMHB4LCAwKTtcclxuICAgIG9wYWNpdHk6MDtcclxuIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7XHJcbiAgICBjbGlwOiByZWN0KDAsIDAsIDEwMHB4LCAwKTtcclxuICB9XHJcbiAgNCUge1xyXG4gICAgY2xpcDogcmVjdCgwLCA2Ni42NjY2N3B4LCAxMDBweCwgMCk7XHJcbiAgfVxyXG4gIDE1JSB7XHJcbiAgICBjbGlwOiByZWN0KDAsIDEzMy4zMzMzM3B4LCAxMDBweCwgMCk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBjbGlwOiByZWN0KDAsIDMwMHB4LCAxMDBweCwgMCk7XHJcbiAgICAgb3BhY2l0eToxO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIGNsaXA6IHJlY3QoMCwgMzAwcHgsIDEwMHB4LCAwKTtcclxuICAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG5cclxuICA5MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgY2xpcDogcmVjdCgwLCAzMDBweCwgMTAwcHgsIDApO1xyXG4gICAgb3BhY2l0eTowO1xyXG4gfVxyXG4gIFxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "TMVm":
/*!************************************************************!*\
  !*** ./src/app/admin/add-advices/add-advices.component.ts ***!
  \************************************************************/
/*! exports provided: AddAdvicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdvicesComponent", function() { return AddAdvicesComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddAdvicesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function AddAdvicesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Advice Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddAdvicesComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.erroeMassage, " ");
} }
class AddAdvicesComponent {
    constructor(api) {
        this.api = api;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
        this.test = "";
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            advice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    addAdvice(f) {
        this.api.addAdvice(f.value, this.httpOptions).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
                this.message = data.msg;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
}
AddAdvicesComponent.ɵfac = function AddAdvicesComponent_Factory(t) { return new (t || AddAdvicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AddAdvicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddAdvicesComponent, selectors: [["app-add-advices"]], decls: 29, vars: 5, consts: [[1, "add"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "col-md-12", "col-xs-12"], ["for", "first"], ["type", "text", "rows", "3", "formControlName", "advice", "placeholder", " Type Advice", "name", "advice", 1, "form-control"], [1, "error"], [4, "ngIf"], [1, "custom-control", "custom-control-dark", "custom-switch"], ["type", "checkbox", "checked", "", "formControlName", "status", "id", "customSwitch8", 1, "custom-control-input"], ["for", "customSwitch8", 1, "custom-control-label"], [1, "error", 2, "width", "100%"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-info"]], template: function AddAdvicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddAdvicesComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddAdvicesComponent_Template_form_ngSubmit_7_listener() { return ctx.addAdvice(ctx.Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Advice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddAdvicesComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddAdvicesComponent_div_26_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Form.get("advice").touched && (ctx.Form.get("advice").errors == null ? null : ctx.Form.get("advice").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.Form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  .add[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #0f2075;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0;\r\n    font-size: 30px;\r\n    color:#0f2075;\r\n    font-weight: 500;\r\n  }\r\n  [class^='col-'][_ngcontent-%COMP%]{\r\n    margin-bottom: 25px;\r\n  }\r\n  .custom-control-dark[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    margin-left: 20px;\r\n  }\r\n  .custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\r\n    left: -2.25rem;\r\n    width: 2.75rem;\r\n    pointer-events: all;\r\n    border-radius: 10px;\r\n    height: 20px;\r\n  }\r\n  .custom-switch[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]::after {\r\n    background-color: #fff;\r\n    transform: translateX(25px);\r\n  }\r\n  .custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\r\n    top: 8px;\r\n    right: calc(8px);\r\n  }\r\n  .custom-control-input[_ngcontent-%COMP%]:focus{\r\n  box-shadow: none;\r\n  outline: 0;\r\n}\r\n  button[_ngcontent-%COMP%]{\r\n    margin:15px 0;\r\n    padding: 10px 30px;\r\n    background-color: #0f2075;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n        color: rgb(240, 84, 84);\r\n    }\r\n  .alert[_ngcontent-%COMP%]{\r\n      font-weight: normal !important;\r\n      color:#0f2075;\r\n      margin: 30px auto;\r\n      width: 85%;\r\n    }\r\n  .c-bff[_ngcontent-%COMP%]{\r\n      color: #007bff !important;\r\n      cursor: pointer;\r\n    }\r\n  form[_ngcontent-%COMP%]{\r\n      width: 72%;\r\n      margin: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hZHZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7RUFDRjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDRTtRQUNJLHVCQUF1QjtJQUMzQjtFQUNBO01BQ0UsOEJBQThCO01BQzlCLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsVUFBVTtJQUNaO0VBQ0E7TUFDRSx5QkFBeUI7TUFDekIsZUFBZTtJQUNqQjtFQUNGO01BQ0ksVUFBVTtNQUNWLFlBQVk7RUFDaEIiLCJmaWxlIjoiYWRkLWFkdmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXJyb3IgZGl2e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmFkZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwZjIwNzU7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjojMGYyMDc1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgW2NsYXNzXj0nY29sLSdde1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgLmN1c3RvbS1jb250cm9sLWRhcmt7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgbGVmdDogLTIuMjVyZW07XHJcbiAgICB3aWR0aDogMi43NXJlbTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjVweCk7XHJcbiAgfVxyXG4gIC5jdXN0b20tc3dpdGNoIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogY2FsYyg4cHgpO1xyXG4gIH1cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3Vze1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbjoxNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMDc1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjogcmdiKDI0MCwgODQsIDg0KTtcclxuICAgIH1cclxuICAgIC5hbGVydHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjojMGYyMDc1O1xyXG4gICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgIH1cclxuICAgIC5jLWJmZntcclxuICAgICAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIGZvcm17XHJcbiAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddAdvicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-advices',
                templateUrl: './add-advices.component.html',
                styleUrls: ['./add-advices.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type 14 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Form here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " if you dont have one. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.loginError, " Please create a diagnosis ");
} }
class LoginComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        // @Output() message_output = new EventEmitter();
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            national_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{14}')])
        });
    }
    ngOnInit() { }
    login(f) {
        this.api.login(f.value).subscribe((data) => {
            if (data.status === true) {
                localStorage.setItem("login_token", data.token);
                this.loginError = null;
                this.message = data.msg;
                let d = document.querySelector(".dialog-1");
                d.classList.toggle('active');
                setTimeout(() => {
                    this.route.navigate(['/profile']);
                }, 3000);
            }
            else {
                this.loginError = data.msg;
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 6, consts: [[1, "login"], [1, "container"], [1, "row"], [1, "col-md-12"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "national_id", "placeholder", "Enter Your Id", "name", "national_id", 1, "form-control"], [1, "error"], [4, "ngIf"], [3, "disabled"], [1, "dialog-1"], ["src", "../../../assets/images/right1.jpg", "width", "25px"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.login(ctx.Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.Form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.message, "\n");
    } }, styles: [".dialog-1[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 20%;\r\n  right: -100%;\r\n  padding: 20px;\r\n  max-width: 300px;\r\n  background: white;\r\n  color: var(--black);\r\n  z-index: 99999999;\r\n  text-align: left;\r\n  transition: 1s all;\r\n  font-weight: 600;\r\n  border-top:3px solid var(--main) ;\r\n  border-left:3px solid var(--main) ;\r\n}\r\n.dialog-1.active[_ngcontent-%COMP%]{\r\n  right: 0;\r\n}\r\n.error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n  background-color:rgba(45, 54, 99, 0.1);\r\n  background-image:url('pexels-pixabay-40568.jpg');\r\n  background-attachment: fixed;\r\n  background-size: 100% 100%;\r\n  background-position: 100% 100%;\r\n  font-weight: bold;\r\n  color: #2D3663;\r\n  margin-top: 80px;\r\n  padding: 50px 0px 20px;\r\n  min-height: calc(100vh - 80px);\r\n}\r\nform[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n  margin: 20px auto;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 30px 0;\r\n  text-shadow: 2px 2px 5px black;\r\n  color: white;\r\n}\r\n[class^='col-'][_ngcontent-%COMP%]{\r\n  margin-bottom: 15px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  margin:25px auto;\r\n  padding: 10px 20px;\r\n  background-color: var(--black);\r\n  color: white;\r\n  border-radius: 30px;\r\n  border: none;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n      color: rgb(240, 84, 84);\r\n  }\r\na[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    color: blue;\r\n  }\r\n@media (max-width:575px) {\r\n    button[_ngcontent-%COMP%]{\r\n      padding: 5px 15px 6px;\r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLFFBQVE7QUFDVjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxnREFBcUU7RUFDckUsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0U7TUFDSSx1QkFBdUI7RUFDM0I7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFFQTtJQUNFO01BQ0UscUJBQXFCO0lBQ3ZCOztFQUVGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLTF7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMjAlO1xyXG4gIHJpZ2h0OiAtMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRyYW5zaXRpb246IDFzIGFsbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci10b3A6M3B4IHNvbGlkIHZhcigtLW1haW4pIDtcclxuICBib3JkZXItbGVmdDozcHggc29saWQgdmFyKC0tbWFpbikgO1xyXG59XHJcbi5kaWFsb2ctMS5hY3RpdmV7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5lcnJvciBkaXZ7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmxvZ2lue1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSg0NSwgNTQsIDk5LCAwLjEpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGV4ZWxzLXBpeGFiYXktNDA1NjguanBnKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzJEMzY2MztcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIHBhZGRpbmc6IDUwcHggMHB4IDIwcHg7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG59XHJcbmZvcm17XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuW2NsYXNzXj0nY29sLSdde1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIG1hcmdpbjoyNXB4IGF1dG87XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuICBzcGFue1xyXG4gICAgICBjb2xvcjogcmdiKDI0MCwgODQsIDg0KTtcclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjU3NXB4KSB7XHJcbiAgICBidXR0b257XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDZweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");









function RegisterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.goToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function RegisterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Characters At least 2. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Numbers At least 8 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type 14 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ad_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ad_r17.name, " ");
} }
function RegisterComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Birth Date Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Blood Type Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.erroeMassage, " ");
} }
class RegisterComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.address = [];
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
            national_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{14}')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{4,}')]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            blood_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            social_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
        });
    }
    ngOnInit() {
        this.getdress();
    }
    getdress() {
        this.api.getProvnces().subscribe((data) => {
            this.address = data.provinces;
        });
    }
    submit(f) {
        this.api.creataccount(f.value).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
                this.message = data.msg;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
    goToLogin() {
        this.route.navigate(['/login']);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 111, vars: 17, consts: [[1, "register"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "col-md-6", "col-xs-12"], ["for", "first"], ["type", "text", "formControlName", "full_name", "placeholder", "Full Name", "name", "full_name", 1, "form-control"], [1, "error"], [4, "ngIf"], ["for", ""], ["type", "text", "placeholder", "Phone", "formControlName", "mobile", "name", "phone", 1, "form-control"], ["type", "text", "formControlName", "national_id", "placeholder", "National Id", "name", "national_id", 1, "form-control"], ["name", "address", "formControlName", "address", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["type", "date", "name", "date_of_birth", "formControlName", "date_of_birth", 1, "form-control"], ["name", "gender", "formControlName", "sex", 1, "form-control"], ["value", "male"], ["value", "female"], ["name", "State", "formControlName", "social_status", "placeholder", " status", "name", "social_status", 1, "form-control"], ["value", "single"], ["value", "married"], ["name", "blood_type", "formControlName", "blood_type", "placeholder", "blood", 1, "custom-select"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "error", 2, "width", "100%"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-info"], [3, "click"], [1, "c-bff"], [3, "value"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegisterComponent_div_7_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() { return ctx.submit(ctx.Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_div_26_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterComponent_div_27_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "National Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_div_36_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Full Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegisterComponent_option_43_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RegisterComponent_div_45_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Birth Of Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RegisterComponent_div_53_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RegisterComponent_div_66_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Married");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, RegisterComponent_div_79_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, RegisterComponent_div_80_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Blood Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "AB+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "AB-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "O+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "O-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, RegisterComponent_div_105_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, RegisterComponent_div_107_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("full_name").touched && (ctx.Form.get("full_name").errors == null ? null : ctx.Form.get("full_name").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("full_name").touched && (ctx.Form.get("full_name").errors == null ? null : ctx.Form.get("full_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("mobile").touched && (ctx.Form.get("mobile").errors == null ? null : ctx.Form.get("mobile").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("mobile").touched && (ctx.Form.get("mobile").errors == null ? null : ctx.Form.get("mobile").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("address").touched && (ctx.Form.get("address").errors == null ? null : ctx.Form.get("address").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("date_of_birth").touched && (ctx.Form.get("date_of_birth").errors == null ? null : ctx.Form.get("date_of_birth").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("sex").touched && (ctx.Form.get("sex").errors == null ? null : ctx.Form.get("sex").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("social_status").touched && (ctx.Form.get("social_status").errors == null ? null : ctx.Form.get("social_status").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("social_status").touched && (ctx.Form.get("social_status").errors == null ? null : ctx.Form.get("social_status").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("blood_type").touched && (ctx.Form.get("blood_type").errors == null ? null : ctx.Form.get("blood_type").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.Form.valid);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n.register[_ngcontent-%COMP%]{\r\n  background-color:rgba(45, 54, 99, 0.1);\r\n  background-image:url('pexels-pixabay-40568.jpg');\r\n  background-attachment: fixed;\r\n  background-size: 100% 100%;\r\n  background-position: 100% 100%;\r\n  font-weight: bold;\r\n  color: #2D3663;\r\n  margin-top: 80px;\r\n  padding: 50px 0px 20px;\r\n  min-height: calc(100vh - 80px);\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 30px 0;\r\n  text-shadow: 2px 2px 5px black;\r\n  color: white;\r\n}\r\n[class^='col-'][_ngcontent-%COMP%]{\r\n  margin-bottom: 15px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  margin:10px 0;\r\n  margin-left: 15px;\r\n  padding: 10px 30px;\r\n  background-color:   var(--black);\r\n  color: white;\r\n  border-radius: 30px;\r\n  border: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n      color: rgb(240, 84, 84);\r\n  }\r\n.alert[_ngcontent-%COMP%]{\r\n    font-weight: normal !important;\r\n    color: var(--black);\r\n  }\r\n.c-bff[_ngcontent-%COMP%]{\r\n    color: #007bff !important;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxnREFBcUU7RUFDckUsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0U7TUFDSSx1QkFBdUI7RUFDM0I7QUFDQTtJQUNFLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmVycm9yIGRpdntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucmVnaXN0ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ1LCA1NCwgOTksIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wZXhlbHMtcGl4YWJheS00MDU2OC5qcGcpO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMkQzNjYzO1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgcGFkZGluZzogNTBweCAwcHggMjBweDtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbn1cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbltjbGFzc149J2NvbC0nXXtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbmJ1dHRvbntcclxuICBtYXJnaW46MTBweCAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHZhcigtLWJsYWNrKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuICBzcGFue1xyXG4gICAgICBjb2xvcjogcmdiKDI0MCwgODQsIDg0KTtcclxuICB9XHJcbiAgLmFsZXJ0e1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICB9XHJcbiAgLmMtYmZme1xyXG4gICAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css'],
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Y8KL":
/*!**************************************************************!*\
  !*** ./src/app/admin/show-advices/show-advices.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowAdvicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAdvicesComponent", function() { return ShowAdvicesComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function ShowAdvicesComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "cdk-accordion", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "cdk-accordion-item", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowAdvicesComponent_tr_16_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r4.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowAdvicesComponent_tr_16_Template_i_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const advice_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.goToEdit(advice_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowAdvicesComponent_tr_16_Template_i_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const advice_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.deleteadvice(advice_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const advice_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](advice_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-header-" + i_r3)("aria-expanded", _r4.expanded)("aria-controls", "accordion-body-" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 13, advice_r2.advice, 0, 80), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", _r4.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-body-" + i_r3)("aria-labelledby", "accordion-header-" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 17, advice_r2.advice, 80), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _r4.expanded ? " less" : " more...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](19, 20, advice_r2.created_at, 0, 10));
} }
function ShowAdvicesComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", size_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r9, " ");
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class ShowAdvicesComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
        this.page = 1;
        this.count = 0;
        this.tableSize = 5;
        this.tableSizes = [5, 10, 20];
        this.expandedIndex = 0;
    }
    ngOnInit() {
        this.fetchPosts();
    }
    fetchPosts() {
        this.api.getallAdices().subscribe((data) => {
            this.AllAdvices = data.advices;
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
    deleteadvice(id) {
        this.api.deleteAdvice(id, this.httpOptions).subscribe((data) => {
            window.location.reload();
        });
    }
    goToEdit(id) {
        this.router.navigate(["admin", "edit", "advice", id]);
    }
    goToshow(id) {
        this.router.navigate(["admin", "advice", id]);
    }
}
ShowAdvicesComponent.ɵfac = function ShowAdvicesComponent_Factory(t) { return new (t || ShowAdvicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ShowAdvicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowAdvicesComponent, selectors: [["app-show-advices"]], decls: 28, vars: 10, consts: [[1, "tab"], [1, "content", "d-flex"], [1, "table"], [1, "table-secondary"], [4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row-reverse", "bd-highlight", "mb-2", "hidden-sm"], [1, "p-2", "bd-highlight"], [1, "custom-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-20"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "pageChange"], [1, "current-page"], [1, "example-accordion"], ["role", "button", "tabindex", "0", 1, "example-accordion-item"], ["accordionItem", "cdkAccordionItem"], [1, "example-accordion-item-header", 3, "click"], ["role", "region", 1, "example-accordion-item-body"], [1, "example-accordion-item-description", "text-primary"], [1, "blueData"], [1, "icona1"], [1, "fa", "fa-pencil", 3, "click"], [1, "icona2"], [1, "fa", "fa-trash", 3, "click"], [3, "ngValue"]], template: function ShowAdvicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All Advices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Created At");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ShowAdvicesComponent_tr_16_Template, 25, 24, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ShowAdvicesComponent_Template_select_change_20_listener($event) { return ctx.onTableSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ShowAdvicesComponent_option_21_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "pagination-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ShowAdvicesComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.onTableDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " current page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 3, ctx.AllAdvices, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx.tableSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.page);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_7__["CdkAccordion"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_7__["CdkAccordionItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: [".chart-canvas[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n   \r\n    display: none;\r\n}\r\n.chart-canvas[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{\r\n    height: 360px !important;\r\n    width: 92% !important;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n    \r\n    --first-bg-color:  #252f3b; \r\n    --second-bg-color: #1B2533;\r\n    --first-font-color: white;\r\n    --second-font-color: #21cd92; \r\n    --overall-top-margin: 30px;\r\n    --dashboard-margin: 40px;\r\n    --nav-side-bar-margin-left: 20px;     \r\n    --border-radius: 10px;\r\n    --font-size-xs: 16px;\r\n    --font-size-medium: 28px;\r\n    --font-size-large: 48px;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0 40px;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    color: var(--black);\r\n  }\r\nh3[_ngcontent-%COMP%]\r\n{\r\n    color: white;\r\n}\r\n.dashboard-cards[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    margin: 0 var(--dashboard-margin);\r\n    padding-bottom: 50px;\r\n    gap: 50px;\r\n}\r\n.content.d-flex[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    width: 96% ;\r\n    margin: auto;\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n    .dashboard-cards[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    width: 100%;   \r\n    background-color: #1d0ebbd3;;\r\n    border-radius: 10px;\r\n    box-shadow:  10px 10px 10px #7367f0;;\r\n}\r\n.chart-canvas[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n    position: relative;\r\n    min-height: 250px;\r\n}\r\n.chart-options[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 14px;\r\n}\r\n#cashstreamEC[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: var(--second-font-color);\r\n    border: none;\r\n    outline: none;\r\n    font-size: 16px;\r\n}\r\n#cashstreamEC[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n    color: #666;\r\n    background-color: transparent;\r\n  }\r\ntable[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    width: 95%;\r\n    background-color: #f8f9fa !important;\r\n}\r\n.table-name[_ngcontent-%COMP%]{\r\n    margin-top: 4rem;\r\n    color: var(--black);\r\n    font-weight: 500;\r\n    font-weight: 500;\r\n    font-size: 30px;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n.blueData[_ngcontent-%COMP%]\r\n{\r\ncolor: rgb(65, 65, 214);\r\n}\r\n.admin[_ngcontent-%COMP%]\r\n\r\n{\r\n    background-color:#1d0ebbd3;\r\n    text-align: center;\r\n    padding: 30px;\r\n    font-size: 20px;\r\n    color: white;\r\n    border-radius: 5px;\r\n    box-shadow:  10px 10px 10px #7367f0;\r\n}\r\nimg[_ngcontent-%COMP%]\r\n{\r\n    width:50px;\r\nborder-radius: 50%;\r\n}\r\n.icon[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 70px;\r\n    width: 70px;\r\n    background-color:#1d0ebbd3;\r\n    margin: auto;\r\n    border-radius: 50%;\r\n\r\n    font-size: 2.5rem;\r\n   \r\n}\r\n.spinner[_ngcontent-%COMP%]\r\n{\r\n  \r\n \r\n    width: 4%;\r\n    height: 7%;\r\n    background-color: #1d0ebbd3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transform: translateY(50px);\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 96%;\r\n    z-index: 9999999999999999;\r\n    border-top-left-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n}\r\n.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    text-align: center;\r\n    color: white;\r\n\r\n}\r\nspan[_ngcontent-%COMP%]\r\n{\r\n    padding: 7px;\r\n    border-radius: 50%;\r\n    font-size: 12px;\r\n}\r\n.icona1[_ngcontent-%COMP%]\r\n{    \r\n   color: #1d0ebbd3;\r\n   margin-right: 2px;\r\n}\r\n.icona2[_ngcontent-%COMP%]\r\n{\r\n    color:  #dc3545;\r\n}\r\n.tab[_ngcontent-%COMP%]{\r\n    overflow-x: auto;\r\n    width: 100%;\r\n}\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    white-space: nowrap;\r\n    text-align: left;\r\n}\r\np.text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    line-height: 25px;\r\n    font-weight: 100;\r\n    font-size: 15px;\r\n}\r\n@media (max-width:1024px) {\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n    }\r\n}\r\n#plots[_ngcontent-%COMP%]{\r\n    width: 100%;   \r\n    margin: auto;\r\n    background-color: #f8f9fa;\r\n    border-radius: 10px;\r\n    box-shadow:  10px 10px 10px #afabdb;;\r\n    height: 300px;\r\n    border: 1px solid #ebe9f1;\r\n}\r\n#lineChart[_ngcontent-%COMP%]\r\n{\r\nwidth: 100%;   \r\nmargin: auto; \r\nborder-radius: 10px;\r\nbox-shadow:  10px 10px 10px #afabdb;;\r\nheight: 300px;\r\nborder: 1px solid #ebe9f1;\r\n}\r\ni[_ngcontent-%COMP%]{\r\ncursor: pointer;\r\nfont-size: 16px;\r\n}\r\n.adv[_ngcontent-%COMP%]{\r\n    white-space: normal !important;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.example-accordion-item-body[_ngcontent-%COMP%]{\r\n    padding: 0 !important;\r\n}\r\n.mt-20[_ngcontent-%COMP%]{\r\n    margin-top: 20px !important;\r\n}\r\n  .ngx-pagination li:hover{\r\n    background-color: var(--black) !important;\r\n  }\r\n  .ngx-pagination .current{\r\n    background-color: var(--black) !important;\r\n  }\r\n  .ngx-pagination .disabled {\r\n    color: #585151 !important;\r\n  }\r\n@media (max-width:575px) {\r\n    .hidden-sm[_ngcontent-%COMP%]{\r\n      display: none !important;\r\n    }\r\n    .container[_ngcontent-%COMP%]{\r\n      padding: 15px;\r\n      font-size: small;\r\n    }\r\n    .content[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      display: block;\r\n    }\r\n    .table[_ngcontent-%COMP%]{\r\n      margin: auto;\r\n      width: 100%;\r\n    }\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n      font-size:11px;\r\n      padding: 3px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYWR2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQztJQUNHLFdBQVc7O0lBRVgsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6QjtBQU1HO0lBQ0Msa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFDekI7QUFFRix1Q0FBdUM7QUFFdkM7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBRUY7O0lBRUksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7QUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTs7O0lBR0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7O0lBRUksVUFBVTtBQUNkLGtCQUFrQjtBQUNsQjtBQUNBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7O0lBRWxCLGlCQUFpQjs7QUFFckI7QUFFQTs7OztJQUlJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjtBQUVBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBOztHQUVHLGdCQUFnQjtHQUNoQixpQkFBaUI7QUFDcEI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFJQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUVBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLG1DQUFtQztBQUNuQyxhQUFhO0FBQ2IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHlDQUF5QztFQUMzQztBQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFO01BQ0Usd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsY0FBYztJQUNoQjtJQUNBO01BQ0UsWUFBWTtNQUNaLFdBQVc7SUFDYjtJQUNBO01BQ0UsY0FBYztNQUNkLFlBQVk7SUFDZDtFQUNGIiwiZmlsZSI6InNob3ctYWR2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAuY2hhcnQtY2FudmFze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2hhcnQtY2FudmFzIGNhbnZhc3tcclxuICAgIGhlaWdodDogMzYwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5MiUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgIDpyb290IHtcclxuICAgIC8qIENvbG9yIFRoZW1pbmcgKi9cclxuICAgIC0tZmlyc3QtYmctY29sb3I6ICAjMjUyZjNiOyBcclxuICAgIC0tc2Vjb25kLWJnLWNvbG9yOiAjMUIyNTMzO1xyXG4gICAgLS1maXJzdC1mb250LWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tc2Vjb25kLWZvbnQtY29sb3I6ICMyMWNkOTI7IFxyXG4gICAgLS1vdmVyYWxsLXRvcC1tYXJnaW46IDMwcHg7XHJcbiAgICAtLWRhc2hib2FyZC1tYXJnaW46IDQwcHg7XHJcbiAgICAtLW5hdi1zaWRlLWJhci1tYXJnaW4tbGVmdDogMjBweDsgICAgIFxyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1mb250LXNpemUteHM6IDE2cHg7XHJcbiAgICAtLWZvbnQtc2l6ZS1tZWRpdW06IDI4cHg7XHJcbiAgICAtLWZvbnQtc2l6ZS1sYXJnZTogNDhweDtcclxuICB9XHJcblxyXG4vKiBDU1MgU3R5bGluZyBBZG1pbiBEYXNoYm9hcmQgSGVhZGVyICovXHJcblxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwIDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICB9XHJcblxyXG5oM1xyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRhc2hib2FyZC1jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgbWFyZ2luOiAwIHZhcigtLWRhc2hib2FyZC1tYXJnaW4pO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBnYXA6IDUwcHg7XHJcbn1cclxuLmNvbnRlbnQuZC1mbGV4e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDk2JSA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5kYXNoYm9hcmQtY2FyZHN7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMGViYmQzOztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAgMTBweCAxMHB4IDEwcHggIzczNjdmMDs7XHJcbn1cclxuXHJcbi5jaGFydC1jYW52YXMge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5jaGFydC1vcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOiAxNHB4O1xyXG59XHJcblxyXG4jY2FzaHN0cmVhbUVDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZC1mb250LWNvbG9yKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNjYXNoc3RyZWFtRUMgb3B0aW9uIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICB0YWJsZVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZS1uYW1le1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG50ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmJsdWVEYXRhXHJcbntcclxuY29sb3I6IHJnYig2NSwgNjUsIDIxNCk7XHJcbn1cclxuLmFkbWluXHJcblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDBlYmJkMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAgMTBweCAxMHB4IDEwcHggIzczNjdmMDtcclxufVxyXG5pbWdcclxue1xyXG4gICAgd2lkdGg6NTBweDtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5pY29uXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFkMGViYmQzO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICBcclxufVxyXG5cclxuLnNwaW5uZXJcclxue1xyXG4gIFxyXG4gXHJcbiAgICB3aWR0aDogNCU7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMGViYmQzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogOTYlO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnNwaW5uZXIgaXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbnNwYW5cclxue1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pY29uYTFcclxueyAgICBcclxuICAgY29sb3I6ICMxZDBlYmJkMztcclxuICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuLmljb25hMlxyXG57XHJcbiAgICBjb2xvcjogICNkYzM1NDU7XHJcbn1cclxuXHJcbi50YWJ7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGFibGUgdGggLFxyXG50YWJsZSB0ZHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5wLnRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwMjRweCkge1xyXG4gICAgdGFibGUgdGR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIFxyXG4jcGxvdHN7XHJcbiAgICB3aWR0aDogMTAwJTsgICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogIDEwcHggMTBweCAxMHB4ICNhZmFiZGI7O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmU5ZjE7XHJcbn1cclxuXHJcbiNsaW5lQ2hhcnRcclxue1xyXG53aWR0aDogMTAwJTsgICBcclxubWFyZ2luOiBhdXRvOyBcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxuYm94LXNoYWRvdzogIDEwcHggMTBweCAxMHB4ICNhZmFiZGI7O1xyXG5oZWlnaHQ6IDMwMHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZWJlOWYxO1xyXG59XHJcbml7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5hZHZ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZXhhbXBsZS1hY2NvcmRpb24taXRlbS1ib2R5e1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tdC0yMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQge1xyXG4gICAgY29sb3I6ICM1ODUxNTEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuICAgIC5oaWRkZW4tc217XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnRhYmxle1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgdGFibGUgdGQgLCB0aHtcclxuICAgICAgZm9udC1zaXplOjExcHg7XHJcbiAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowAdvicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show-advices',
                templateUrl: './show-advices.component.html',
                styleUrls: ['./show-advices.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home-slider/home-slider.component */ "rLth");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_add_donnar_add_donnar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add-donnar/add-donnar.component */ "j8Fk");
/* harmony import */ var _components_donner_search_donner_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/donner-search/donner-search.component */ "Fq/q");
/* harmony import */ var _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/diseases/diseases.component */ "vtiC");
/* harmony import */ var _components_all_user_diagnosis_all_user_diagnosis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/all-user-diagnosis/all-user-diagnosis.component */ "rPTv");
/* harmony import */ var _components_all_donor_all_donor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/all-donor/all-donor.component */ "iyrl");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_dialog_delete_deisease_dialog_delete_deisease_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dialog-delete-deisease/dialog-delete-deisease.component */ "9fx2");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "o8Ft");
/* harmony import */ var _admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/login-admin/login-admin.component */ "aOxl");
/* harmony import */ var _admin_page_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/page/page.component */ "iaKE");
/* harmony import */ var _admin_edit_admin_info_edit_admin_info_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/edit-admin-info/edit-admin-info.component */ "EzaU");
/* harmony import */ var _admin_add_advices_add_advices_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/add-advices/add-advices.component */ "TMVm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_show_advices_show_advices_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/show-advices/show-advices.component */ "Y8KL");
/* harmony import */ var _admin_add_new_donner_add_new_donner_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/add-new-donner/add-new-donner.component */ "boyb");
/* harmony import */ var _admin_advice_edit_advice_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/advice-edit/advice-edit.component */ "QLIp");
/* harmony import */ var _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/add-user/add-user.component */ "4pOR");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/search.pipe */ "xaSU");
/* harmony import */ var _admin_show_disease_show_disease_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/show-disease/show-disease.component */ "CBJU");
/* harmony import */ var _admin_add_disease_add_disease_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/add-disease/add-disease.component */ "upTd");
/* harmony import */ var _admin_edit_disease_edit_disease_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/edit-disease/edit-disease.component */ "afDV");
/* harmony import */ var _admin_edit_user_id_edit_user_id_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/edit-user-id/edit-user-id.component */ "6lzo");
/* harmony import */ var _admin_show_all_users_show_all_users_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/show-all-users/show-all-users.component */ "FLi5");
/* harmony import */ var _admin_show_all_diseases_show_all_diseases_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/show-all-diseases/show-all-diseases.component */ "+WD/");
/* harmony import */ var _admin_show_all_donors_show_all_donors_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/show-all-donors/show-all-donors.component */ "7Jwv");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/router */ "tyNb");





















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCarouselModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_46__["CdkAccordionModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_15__["HomeSliderComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
        _components_add_donnar_add_donnar_component__WEBPACK_IMPORTED_MODULE_17__["AddDonnarComponent"],
        _components_donner_search_donner_search_component__WEBPACK_IMPORTED_MODULE_18__["DonnerSearchComponent"],
        _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_19__["DiseasesComponent"],
        _components_all_user_diagnosis_all_user_diagnosis_component__WEBPACK_IMPORTED_MODULE_20__["AllUserDiagnosisComponent"],
        _components_all_donor_all_donor_component__WEBPACK_IMPORTED_MODULE_21__["AllDonorComponent"],
        _components_dialog_delete_deisease_dialog_delete_deisease_component__WEBPACK_IMPORTED_MODULE_25__["DialogDeleteDeiseaseComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"],
        _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
        _admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_29__["LoginAdminComponent"],
        _admin_page_page_component__WEBPACK_IMPORTED_MODULE_30__["PageComponent"],
        _admin_edit_admin_info_edit_admin_info_component__WEBPACK_IMPORTED_MODULE_31__["EditAdminInfoComponent"],
        _admin_add_advices_add_advices_component__WEBPACK_IMPORTED_MODULE_32__["AddAdvicesComponent"],
        _admin_show_advices_show_advices_component__WEBPACK_IMPORTED_MODULE_34__["ShowAdvicesComponent"],
        _admin_add_new_donner_add_new_donner_component__WEBPACK_IMPORTED_MODULE_35__["AddNewDonnerComponent"],
        _admin_advice_edit_advice_edit_component__WEBPACK_IMPORTED_MODULE_36__["AdviceEditComponent"],
        _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_37__["AddUserComponent"],
        _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_38__["SearchPipe"],
        _admin_show_disease_show_disease_component__WEBPACK_IMPORTED_MODULE_39__["ShowDiseaseComponent"],
        _admin_add_disease_add_disease_component__WEBPACK_IMPORTED_MODULE_40__["AddDiseaseComponent"],
        _admin_edit_disease_edit_disease_component__WEBPACK_IMPORTED_MODULE_41__["EditDiseaseComponent"],
        _admin_edit_user_id_edit_user_id_component__WEBPACK_IMPORTED_MODULE_42__["EditUserIdComponent"],
        _admin_show_all_users_show_all_users_component__WEBPACK_IMPORTED_MODULE_43__["ShowAllUsersComponent"],
        _admin_show_all_diseases_show_all_diseases_component__WEBPACK_IMPORTED_MODULE_44__["ShowAllDiseasesComponent"],
        _admin_show_all_donors_show_all_donors_component__WEBPACK_IMPORTED_MODULE_45__["ShowAllDonorsComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCarouselModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_46__["CdkAccordionModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                    _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_15__["HomeSliderComponent"],
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
                    _components_add_donnar_add_donnar_component__WEBPACK_IMPORTED_MODULE_17__["AddDonnarComponent"],
                    _components_donner_search_donner_search_component__WEBPACK_IMPORTED_MODULE_18__["DonnerSearchComponent"],
                    _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_19__["DiseasesComponent"],
                    _components_all_user_diagnosis_all_user_diagnosis_component__WEBPACK_IMPORTED_MODULE_20__["AllUserDiagnosisComponent"],
                    _components_all_donor_all_donor_component__WEBPACK_IMPORTED_MODULE_21__["AllDonorComponent"],
                    _components_dialog_delete_deisease_dialog_delete_deisease_component__WEBPACK_IMPORTED_MODULE_25__["DialogDeleteDeiseaseComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"],
                    _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
                    _admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_29__["LoginAdminComponent"],
                    _admin_page_page_component__WEBPACK_IMPORTED_MODULE_30__["PageComponent"],
                    _admin_edit_admin_info_edit_admin_info_component__WEBPACK_IMPORTED_MODULE_31__["EditAdminInfoComponent"],
                    _admin_add_advices_add_advices_component__WEBPACK_IMPORTED_MODULE_32__["AddAdvicesComponent"],
                    _admin_show_advices_show_advices_component__WEBPACK_IMPORTED_MODULE_34__["ShowAdvicesComponent"],
                    _admin_add_new_donner_add_new_donner_component__WEBPACK_IMPORTED_MODULE_35__["AddNewDonnerComponent"],
                    _admin_advice_edit_advice_edit_component__WEBPACK_IMPORTED_MODULE_36__["AdviceEditComponent"],
                    _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_37__["AddUserComponent"],
                    _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_38__["SearchPipe"],
                    _admin_show_disease_show_disease_component__WEBPACK_IMPORTED_MODULE_39__["ShowDiseaseComponent"],
                    _admin_add_disease_add_disease_component__WEBPACK_IMPORTED_MODULE_40__["AddDiseaseComponent"],
                    _admin_edit_disease_edit_disease_component__WEBPACK_IMPORTED_MODULE_41__["EditDiseaseComponent"],
                    _admin_edit_user_id_edit_user_id_component__WEBPACK_IMPORTED_MODULE_42__["EditUserIdComponent"],
                    _admin_show_all_users_show_all_users_component__WEBPACK_IMPORTED_MODULE_43__["ShowAllUsersComponent"],
                    _admin_show_all_diseases_show_all_diseases_component__WEBPACK_IMPORTED_MODULE_44__["ShowAllDiseasesComponent"],
                    _admin_show_all_donors_show_all_donors_component__WEBPACK_IMPORTED_MODULE_45__["ShowAllDonorsComponent"],
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCarouselModule"],
                    ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_46__["CdkAccordionModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"]
                ],
                providers: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_47__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], []);


/***/ }),

/***/ "aOxl":
/*!************************************************************!*\
  !*** ./src/app/admin/login-admin/login-admin.component.ts ***!
  \************************************************************/
/*! exports provided: LoginAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function() { return LoginAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginAdminComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type 14 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginAdminComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginAdminComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type 14 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginAdminComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginAdminComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.loginError, " ");
} }
class LoginAdminComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() { }
    login(f) {
        this.api.loginِAdmin(f.value).subscribe((data) => {
            console.log(data);
            if (data.status === true) {
                localStorage.setItem("login_token_admin", data.token);
                this.loginError = null;
                this.message = data.msg;
                let d = document.querySelector(".dialog-1");
                d.classList.toggle('active');
                setTimeout(() => {
                    this.route.navigate(['/admin/dashboard']);
                }, 3000);
            }
            else {
                this.loginError = data.msg;
            }
        });
    }
}
LoginAdminComponent.ɵfac = function LoginAdminComponent_Factory(t) { return new (t || LoginAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginAdminComponent, selectors: [["app-login-admin"]], decls: 26, vars: 8, consts: [[1, "login"], [1, "overlay"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], ["for", ""], ["type", "text", "formControlName", "username", "placeholder", "Enter Your Username", "name", "username", 1, "form-control"], [1, "error"], [4, "ngIf"], ["type", "text", "formControlName", "password", "placeholder", "Enter Your Password", "name", "password", 1, "form-control"], [3, "disabled"], [1, "dialog-1"], ["src", "../../../assets/images/right1.jpg", "width", "25px"]], template: function LoginAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginAdminComponent_Template_form_ngSubmit_7_listener() { return ctx.login(ctx.Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginAdminComponent_div_12_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginAdminComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginAdminComponent_div_18_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginAdminComponent_div_19_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginAdminComponent_div_20_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.Form.get("username")) == null ? null : tmp_1_0.touched) && (ctx.Form.get("username").errors == null ? null : ctx.Form.get("username").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.Form.get("username")) == null ? null : tmp_2_0.touched) && (ctx.Form.get("username").errors == null ? null : ctx.Form.get("username").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.Form.get("password")) == null ? null : tmp_3_0.touched) && (ctx.Form.get("password").errors == null ? null : ctx.Form.get("password").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.Form.get("password")) == null ? null : tmp_4_0.touched) && (ctx.Form.get("password").errors == null ? null : ctx.Form.get("password").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.Form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.message, "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".dialog-1[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 20%;\r\n    right: -100%;\r\n    padding: 20px;\r\n    max-width: 300px;\r\n    background: white;\r\n    color: var(--black);\r\n    z-index: 99999999;\r\n    text-align: left;\r\n    transition: 1s all;\r\n    font-weight: 600;\r\n    border-top:3px solid var(--main) ;\r\n    border-left:3px solid var(--main) ;\r\n  }\r\n  .dialog-1.active[_ngcontent-%COMP%]{\r\n    right: 0;\r\n  }\r\n  .error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  .login[_ngcontent-%COMP%]{\r\n    background-image: url('22.jpeg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    font-weight: bold;\r\n    color: #2D3663;\r\n     min-height: calc(100vh); \r\n  }\r\n  label[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n  }\r\n  .login[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    filter: brightness(.9);\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #eee;\r\n    z-index: 1;\r\n    opacity: .8;\r\n}\r\n  .login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  z-index: 3  ;\r\n}\r\n  form[_ngcontent-%COMP%]{\r\n    width: 72%;\r\n    margin: 20px auto;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 150px 0 30px;\r\n    color: var(--black);\r\n    font-weight: 500;\r\n  }\r\n  [class^='col-'][_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    margin:25px auto;\r\n    padding: 10px 20px;\r\n    background-color: var(--black);\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n  }\r\n  input[_ngcontent-%COMP%]{\r\n     height: 40px;\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n        color: rgb(240, 84, 84);\r\n    }\r\n  a[_ngcontent-%COMP%]{\r\n      cursor: pointer;\r\n      color: blue;\r\n    }\r\n  @media (max-width:575px) {\r\n      button[_ngcontent-%COMP%]{\r\n        padding: 5px 15px 6px;\r\n      }\r\n  \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdDQUF1RDtJQUN2RCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0tBQ2IsdUJBQXVCO0VBQzFCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztBQUNmO0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7RUFDQTtLQUNHLFlBQVk7RUFDZjtFQUNFO1FBQ0ksdUJBQXVCO0lBQzNCO0VBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiO0VBRUE7TUFDRTtRQUNFLHFCQUFxQjtNQUN2Qjs7SUFFRiIsImZpbGUiOiJsb2dpbi1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy0xe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXItdG9wOjNweCBzb2xpZCB2YXIoLS1tYWluKSA7XHJcbiAgICBib3JkZXItbGVmdDozcHggc29saWQgdmFyKC0tbWFpbikgO1xyXG4gIH1cclxuICAuZGlhbG9nLTEuYWN0aXZle1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvciBkaXZ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvMjIuanBlZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzJEMzY2MztcclxuICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKTsgXHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmxvZ2luIC5vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguOSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbn1cclxuLmxvZ2luIC5jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDMgIDtcclxufVxyXG4gIGZvcm17XHJcbiAgICB3aWR0aDogNzIlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNTBweCAwIDMwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgW2NsYXNzXj0nY29sLSdde1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgbWFyZ2luOjI1cHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjQwLCA4NCwgODQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjU3NXB4KSB7XHJcbiAgICAgIGJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA2cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-admin',
                templateUrl: './login-admin.component.html',
                styleUrls: ['./login-admin.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "afDV":
/*!**************************************************************!*\
  !*** ./src/app/admin/edit-disease/edit-disease.component.ts ***!
  \**************************************************************/
/*! exports provided: EditDiseaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDiseaseComponent", function() { return EditDiseaseComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function EditDiseaseComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function EditDiseaseComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.erroeMassage, " ");
} }
class EditDiseaseComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            chronic_disease: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            treatment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            syndrome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(data => {
            this.id = data.get('id');
        });
        this.getAllDisease();
    }
    edit(f) {
        this.api.editDisease(f.value, this.httpOptions).subscribe((data) => {
            if (data.status == true) {
                this.message = data.msg;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
    getAllDisease() {
        this.api.getDisease().subscribe((data) => {
            this.AllDisease = data.Chronic_Diseases;
            this.AllDisease.forEach(e => {
                if (e.id == this.id) {
                    this.disease = e;
                }
            });
            this.myGroup.controls.id.patchValue(this.id);
            this.myGroup.controls.chronic_disease.patchValue(this.disease.chronic_disease);
            this.myGroup.controls.description.patchValue(this.disease.description);
            this.myGroup.controls.treatment.patchValue(this.disease.treatment);
            this.myGroup.controls.syndrome.patchValue(this.disease.syndrome);
        });
    }
}
EditDiseaseComponent.ɵfac = function EditDiseaseComponent_Factory(t) { return new (t || EditDiseaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
EditDiseaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditDiseaseComponent, selectors: [["app-edit-disease"]], decls: 43, vars: 3, consts: [[1, "edit"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "col-md-12", "col-xs-12"], ["type", "text", "formControlName", "id", "placeholder", "Id", "name", "Id", 1, "form-control"], ["type", "text", "formControlName", "chronic_disease", "placeholder", "Chronic Disease", "name", "chronic_disease", 1, "form-control"], ["for", "first"], ["type", "text", "rows", "3", "formControlName", "description", "placeholder", "description", "name", "description", 1, "form-control"], ["type", "text", "rows", "3", "formControlName", "treatment", "placeholder", "treatment", "name", "treatment", 1, "form-control"], ["type", "text", "rows", "3", "formControlName", "syndrome", "placeholder", "syndrome", "name", "syndrome", 1, "form-control"], [1, "error", 2, "width", "100%"], [4, "ngIf"], ["type", "submit"], ["role", "alert", 1, "alert", "alert-info"]], template: function EditDiseaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Edit Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditDiseaseComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditDiseaseComponent_Template_form_ngSubmit_7_listener() { return ctx.edit(ctx.myGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "chronic_disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Syndrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, EditDiseaseComponent_div_40_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  .edit[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #0f2075;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0;\r\n    font-size: 30px;\r\n    color:#0f2075;\r\n    font-weight: 500;\r\n  }\r\n  [class^='col-'][_ngcontent-%COMP%]{\r\n    margin-bottom: 25px;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    margin:10px 0;\r\n    margin-left: 15px;\r\n    padding: 10px 30px;\r\n    background-color:#0f2075;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n        color: rgb(240, 84, 84);\r\n    }\r\n  .alert[_ngcontent-%COMP%]{\r\n      font-weight: normal !important;\r\n      color:#0f2075;\r\n      width: 85%;\r\n      margin: 30px auto;\r\n    }\r\n  .c-bff[_ngcontent-%COMP%]{\r\n      color: #007bff !important;\r\n      cursor: pointer;\r\n    }\r\n  form[_ngcontent-%COMP%]{\r\n      width: 72%;\r\n      margin: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZGlzZWFzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNFO1FBQ0ksdUJBQXVCO0lBQzNCO0VBQ0E7TUFDRSw4QkFBOEI7TUFDOUIsYUFBYTtNQUNiLFVBQVU7TUFDVixpQkFBaUI7SUFDbkI7RUFDQTtNQUNFLHlCQUF5QjtNQUN6QixlQUFlO0lBQ2pCO0VBQ0Y7TUFDSSxVQUFVO01BQ1YsWUFBWTtFQUNoQiIsImZpbGUiOiJlZGl0LWRpc2Vhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXJyb3IgZGl2e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmVkaXR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMGYyMDc1O1xyXG4gIH1cclxuICBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IzBmMjA3NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIFtjbGFzc149J2NvbC0nXXtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbjoxMHB4IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBmMjA3NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6IHJnYigyNDAsIDg0LCA4NCk7XHJcbiAgICB9XHJcbiAgICAuYWxlcnR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IzBmMjA3NTtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYy1iZmZ7XHJcbiAgICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBmb3Jte1xyXG4gICAgICB3aWR0aDogNzIlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditDiseaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-disease',
                templateUrl: './edit-disease.component.html',
                styleUrls: ['./edit-disease.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "boyb":
/*!******************************************************************!*\
  !*** ./src/app/admin/add-new-donner/add-new-donner.component.ts ***!
  \******************************************************************/
/*! exports provided: AddNewDonnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewDonnerComponent", function() { return AddNewDonnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddNewDonnerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function AddNewDonnerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Characters At least 2. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNewDonnerComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNewDonnerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Numbers At least 8 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNewDonnerComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNewDonnerComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type 14 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNewDonnerComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNewDonnerComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ad_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ad_r11.name, " ");
} }
function AddNewDonnerComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNewDonnerComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Blood Type Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNewDonnerComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.erroeMassage, " ");
} }
class AddNewDonnerComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.address = [];
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
            national_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{14}')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{4,}')]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            blood_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.getdress();
    }
    getdress() {
        this.api.getProvnces().subscribe((data) => {
            this.address = data.provinces;
        });
    }
    submit(f) {
        this.api.addDonners(f.value).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
                this.message = data.msg;
                console.log(this.message);
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
}
AddNewDonnerComponent.ɵfac = function AddNewDonnerComponent_Factory(t) { return new (t || AddNewDonnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddNewDonnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNewDonnerComponent, selectors: [["app-add-new-donner"]], decls: 74, vars: 13, consts: [[1, "add-donor"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "col-md-6", "col-xs-12"], ["for", "first"], ["type", "text", "formControlName", "name", "placeholder", "Full Name", "name", "name", 1, "form-control"], [1, "error"], [4, "ngIf"], ["for", ""], ["type", "text", "placeholder", "Phone", "formControlName", "mobile", "name", "phone", 1, "form-control"], ["type", "text", "formControlName", "national_id", "placeholder", "National Id", "name", "national_id", 1, "form-control"], ["name", "address", "formControlName", "address", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["name", "blood_type", "formControlName", "blood_type", "placeholder", "blood", 1, "custom-select"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "error", 2, "width", "100%"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-info"], [3, "value"]], template: function AddNewDonnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddNewDonnerComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNewDonnerComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(ctx.Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddNewDonnerComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddNewDonnerComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddNewDonnerComponent_div_25_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddNewDonnerComponent_div_26_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "National Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddNewDonnerComponent_div_34_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddNewDonnerComponent_div_35_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Full Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddNewDonnerComponent_option_42_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddNewDonnerComponent_div_44_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Blood Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "AB+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "AB-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "O+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "O-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AddNewDonnerComponent_div_69_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AddNewDonnerComponent_div_71_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("name").touched && (ctx.Form.get("name").errors == null ? null : ctx.Form.get("name").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("name").touched && (ctx.Form.get("name").errors == null ? null : ctx.Form.get("name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("mobile").touched && (ctx.Form.get("mobile").errors == null ? null : ctx.Form.get("mobile").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("mobile").touched && (ctx.Form.get("mobile").errors == null ? null : ctx.Form.get("mobile").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("address").touched && (ctx.Form.get("address").errors == null ? null : ctx.Form.get("address").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("blood_type").touched && (ctx.Form.get("blood_type").errors == null ? null : ctx.Form.get("blood_type").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.Form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n\r\n.add-donor[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #0f2075;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 0 0 30px;\r\n  font-weight: 700;\r\n  color: #0f2075;\r\n  font-size: 30px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  color: #0f2075;\r\n}\r\n\r\n.col-md-6[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  margin-bottom: 15px;\r\n  flex: 0 0 70%;\r\n  max-width: 70%;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin: auto;\r\n  margin-bottom: auto;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 10px 16%;\r\n  padding: 15px 30px;\r\n  background-color: #0f2075;\r\n  color: white;\r\n  border-radius: 30px;\r\n  border: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  display: block;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  color: rgb(244, 70, 70);\r\n}\r\n\r\n.alert[_ngcontent-%COMP%] {\r\n  font-weight: normal !important;\r\n  color: #0f2075;\r\n}\r\n\r\n.c-bff[_ngcontent-%COMP%] {\r\n  color: #007bff !important;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width:768px) {\r\n  .col-md-6[_ngcontent-%COMP%] {\r\n    flex: 0 0 95%;\r\n    max-width: 95%;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    margin-left: 6%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZXctZG9ubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoiYWRkLW5ldy1kb25uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciBkaXYge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYWRkLWRvbm9yIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzBmMjA3NTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjIwNzU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5cclxuZm9ybSB7XHJcbiAgY29sb3I6ICMwZjIwNzU7XHJcbn1cclxuXHJcbi5jb2wtbWQtNiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZmxleDogMCAwIDcwJTtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMTBweCAxNiU7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjIwNzU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBjb2xvcjogcmdiKDI0NCwgNzAsIDcwKTtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwZjIwNzU7XHJcbn1cclxuXHJcbi5jLWJmZiB7XHJcbiAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgLmNvbC1tZC02IHtcclxuICAgIGZsZXg6IDAgMCA5NSU7XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewDonnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-new-donner',
                templateUrl: './add-new-donner.component.html',
                styleUrls: ['./add-new-donner.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function () { return { exact: true }; };
function NavbarComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function NavbarComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function NavbarComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function NavbarComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_23_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
class NavbarComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.Tips = [
            "Breakfast is the necessary and basic meal for the body, and has enough to eat breakfast regulary, and do not forget to oeat a cup of milk within your destination",
            "Be careful to work a little sports exercises, especially in the morning to renew your activity and your life and the health ",
            "The stomach is not filled with food to another,enough to fill one-third, and for a third of the water and third of the air to help them digest",
        ];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem("login_token")
            })
        };
    }
    ngOnInit() {
        if ((localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('login_token')) == 'null') {
            this.isAuth = false;
        }
        else {
            this.isAuth = true;
        }
    }
    logout() {
        this.api.logout(this.httpOptions).subscribe(data => {
            console.log(data);
            localStorage.setItem("login_token", null);
            if ((localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('login_token')) == 'null' || (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('login_token')) == undefined) {
                this.isAuth = false;
            }
            else {
                this.isAuth = true;
            }
            this.route.navigate(['/']);
        });
    }
    deleteAllCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    navslide() {
        const nav = document.querySelector(".nav_list");
        nav.classList.toggle("nav-active");
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 28, vars: 14, consts: [[1, "nav"], [1, "logo"], ["src", "../../../assets/images/WhatsApp_Image_2022-04-06_at_6.33.27_AM-removebg-preview.png", "alt", "logo"], [1, "list"], [1, "nav_list"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/diseases", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/add-donor", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/donor-search", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/contact-us", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [4, "ngIf"], [1, "burdr", 3, "click"], [1, "line1"], [1, "line2"], [1, "line3"], ["routerLink", "/login", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/register", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/profile", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Add Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Find Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NavbarComponent_li_20_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NavbarComponent_li_21_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, NavbarComponent_li_22_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NavbarComponent_li_23_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_24_listener() { return ctx.navslide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@keyframes ticker {\r\n  0% {\r\n    transform: translate3d(0, 0, 0);\r\n    visibility: visible;\r\n  }\r\n  100% {\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n.ticker-wrap[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 99;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  height: 3rem;\r\n  background-color: white;\r\n  padding-left: 100%;\r\n  box-sizing: content-box;\r\n}\r\n.ticker-wrap[_ngcontent-%COMP%]   .ticker[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  height: 3rem;\r\n  line-height: 3rem;\r\n  white-space: nowrap;\r\n  padding-right: 100%;\r\n  box-sizing: content-box;\r\n  animation-iteration-count: infinite;\r\n  animation-timing-function: linear;\r\n  animation-name: ticker;\r\n  animation-duration: 30s;\r\n}\r\n.ticker-wrap[_ngcontent-%COMP%]   .ticker__item[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0 2rem;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  font-family: 'Lora', sans-serif;\r\n  color: #2D3663;\r\n}\r\n.ticker__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: #29aeaa;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]\r\n{\r\n  \r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  align-items: center;\r\n  padding: 0px 100px;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 80px;\r\n  z-index: 999;\r\n  background-color: var(--black);\r\n}\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 180px;\r\n}\r\n.list[_ngcontent-%COMP%]\r\n{\r\n  width: 50%;\r\n}\r\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  list-style: none;\r\n  display: flex;\r\n  margin-bottom: 0;\r\n  justify-content: space-around;\r\n}\r\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\r\n{\r\n  color: white;\r\n  text-decoration: none;\r\n  transition: .4s;\r\n  font-size: .9rem;\r\n}\r\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover\r\n{\r\n  color:#47ccc8;\r\n}\r\n.burdr[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n\r\n}\r\n.burdr[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]\r\n{\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color:white;\r\n    margin: 5px;\r\n\r\n}\r\n@media (max-width:991px){\r\n  .nav[_ngcontent-%COMP%]{\r\n    padding: 0px 35px;\r\n  }\r\n  .list[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n  }\r\n  .logo[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    max-width: 150px;\r\n  }\r\n}\r\n.nav_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n.nav_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{\r\n  position: absolute;\r\n  content: \"\";\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 1px;\r\n  width: 0;\r\n  transition: .4s;\r\n  background-color: #47ccc8;\r\n  z-index: 999999;\r\n}\r\n.nav_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before{\r\n  content: \"\";\r\n  width: 100% !important;\r\n}\r\n@media (max-width:768px) {\r\n  .nav_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{\r\n    width: 0% !important;\r\n    display: none;\r\n  }\r\n  .nav_list[_ngcontent-%COMP%]\r\n  {\r\n      background-color:#2D3663;\r\n      width: 50%;\r\n      position: absolute;\r\n      right:0px;\r\n      top: 80px;\r\n      height: calc(100vh - 80px);\r\n      flex-direction: column;\r\n      align-items: center;\r\n      transform: translateX(100%);\r\n      transition: transform .5s ease-in;\r\n      padding-bottom: 20px !important;\r\n      overflow-y: auto;\r\n  }\r\n\r\n  .list[_ngcontent-%COMP%]{\r\n    width: auto;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%]\r\n  {\r\n      width: 70%;\r\n      padding: 7px;\r\n      text-align: center;\r\n      transition: .4s all;\r\n  }\r\n\r\n  .burdr[_ngcontent-%COMP%]{\r\n  display: block;\r\n  cursor: pointer;\r\n  }\r\n  .nav-active[_ngcontent-%COMP%]\r\n  {\r\n      transform: translateX(0%);\r\n  }\r\n  .nav[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #ddd;\r\n    background-color: var(--black) !important;\r\n  }\r\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n    background-color: #47ccc8 !important;\r\n  }\r\n\r\n  .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a.active[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n    color: white !important;\r\n  }\r\n}\r\n@media screen and (max-width:440px){\r\n  .nav_list[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.nav[_ngcontent-%COMP%]{\r\n  padding: 20px;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0U7SUFFRSwrQkFBK0I7SUFDL0IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFFRSxtQ0FBbUM7RUFDckM7QUFDRjtBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBRXZCLG1DQUFtQztFQUVuQyxpQ0FBaUM7RUFFakMsc0JBQXNCO0VBRXRCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsdUJBQXVCO0FBQ3ZCOztFQUVFLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osWUFBWTtFQUNaLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGFBQWE7QUFDZjtBQUVBOztJQUVJLGFBQWE7O0FBRWpCO0FBQ0E7O0lBRUksV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsV0FBVzs7QUFFZjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFJQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0VBQ2Y7RUFDQTs7TUFFSSx3QkFBd0I7TUFDeEIsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsU0FBUztNQUNULDBCQUEwQjtNQUMxQixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixpQ0FBaUM7TUFDakMsK0JBQStCO01BQy9CLGdCQUFnQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTs7TUFFSSxVQUFVO01BQ1YsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixtQkFBbUI7RUFDdkI7O0VBRUE7RUFDQSxjQUFjO0VBQ2QsZUFBZTtFQUNmO0VBQ0E7O01BRUkseUJBQXlCO0VBQzdCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7O0lBRUUsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFFQTtFQUNFO0VBQ0EsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQSIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkAtd2Via2l0LWtleWZyYW1lcyB0aWNrZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB0aWNrZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuLnRpY2tlci13cmFwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG4udGlja2VyLXdyYXAgLnRpY2tlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwMCU7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdGlja2VyO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB0aWNrZXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDMwcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDMwcztcclxufVxyXG4udGlja2VyLXdyYXAgLnRpY2tlcl9faXRlbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMkQzNjYzO1xyXG59XHJcbi50aWNrZXJfX2l0ZW0gc3BhbntcclxuICBjb2xvcjogIzI5YWVhYTtcclxufVxyXG5cclxuLyotLS0tLS0gbmF2YmFyIC0tLS0tLSovXHJcbi5uYXZcclxue1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLDAsIDAuMSk7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogODBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4ubG9nbyBpbWd7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbi5saXN0XHJcbntcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5saXN0IHVse1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4ubGlzdCB1bCBhXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxuICBmb250LXNpemU6IC45cmVtO1xyXG59XHJcbi5saXN0IHVsIGxpIGEuYWN0aXZlLFxyXG4ubGlzdCB1bCBsaSBhOmhvdmVyXHJcbntcclxuICBjb2xvcjojNDdjY2M4O1xyXG59XHJcblxyXG4uYnVyZHJcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuLmJ1cmRyIGRpdlxyXG57XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTFweCl7XHJcbiAgLm5hdntcclxuICAgIHBhZGRpbmc6IDBweCAzNXB4O1xyXG4gIH1cclxuICAubGlzdHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG4gIC5sb2dvICwgLmxvZ28gaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdl9saXN0IGxpIGF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5uYXZfbGlzdCBsaSBhOjpiZWZvcmV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0N2NjYzg7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG59XHJcbi5uYXZfbGlzdCBsaSBhOmhvdmVyOjpiZWZvcmV7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gIC5uYXZfbGlzdCBsaSBhOjpiZWZvcmV7XHJcbiAgICB3aWR0aDogMCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXZfbGlzdFxyXG4gIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMkQzNjYzO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OjBweDtcclxuICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW47XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG5cclxuICAubGlzdHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgbGlcclxuICB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgYWxsO1xyXG4gIH1cclxuXHJcbiAgLmJ1cmRye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLm5hdi1hY3RpdmVcclxuICB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgfVxyXG4gIC5uYXZ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdCBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2NjYzggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0IHVsIGxpOmhvdmVyIGEuYWN0aXZlICxcclxuICAubGlzdCB1bCBsaTpob3ZlciBhe1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ0MHB4KXtcclxuICAubmF2X2xpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5uYXZ7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "iaKE":
/*!**********************************************!*\
  !*** ./src/app/admin/page/page.component.ts ***!
  \**********************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

// import { $ } from 'jquery';







class PageComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
        this.donnerLength = 0;
        this.userLength = 0;
        this.diseaseLength = 0;
        this.adviceLength = 0;
    }
    ngOnInit() {
        this.getAdminInfo();
        this.api.adminInfo(this.httpOptions).subscribe((data) => {
            this.admin_info = data.admin;
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".admin-img").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("#dropdown").toggle();
                jquery__WEBPACK_IMPORTED_MODULE_1__(".fa-chevron-up").toggleClass("transform");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(".about-admin").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("#dropdown").toggle();
                jquery__WEBPACK_IMPORTED_MODULE_1__(".fa-chevron-up").toggleClass("transform");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(".first").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".chf").toggleClass("rotate-chevron-right");
                jquery__WEBPACK_IMPORTED_MODULE_1__(".fir").toggle();
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(".second").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".chs").toggleClass("rotate-chevron-right");
                jquery__WEBPACK_IMPORTED_MODULE_1__(".sec").toggle();
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(".third").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".cht").toggleClass("rotate-chevron-right");
                jquery__WEBPACK_IMPORTED_MODULE_1__(".thi").toggle();
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(".five").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".chv").toggleClass("rotate-chevron-right");
                jquery__WEBPACK_IMPORTED_MODULE_1__(".fiv").toggle();
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(".sidebar-icon").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".sidebar").show();
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(".close").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".sidebar").hide();
            });
        });
        this.api.getCount().subscribe((data) => {
            this.donnerLength = data.counts.donors;
            this.userLength = data.counts.users;
            this.diseaseLength = data.counts.diseases;
            this.adviceLength = data.counts.advices;
        });
    }
    getAdminInfo() {
        this.api.adminInfo(this.httpOptions).subscribe((data) => {
            this.admin_info = data.admin;
        });
    }
    logOut() {
        this.api.logOutAdmin(this.httpOptions).subscribe((data) => {
            if (data.status == 1) {
                localStorage.setItem("login_token_admin", null);
                this.router.navigate(["admin", "login"]);
            }
        });
    }
    showAdminCard() {
        document.querySelector(".admin-card").classList.remove('hidden');
    }
    hiddenAdminCard() {
        document.querySelector(".admin-card").classList.add('hidden');
    }
    addPhoto(event) {
        let x = URL.createObjectURL(event.target.files[0]);
        this.fileToUpload = event.target.files[0];
        const fd = new FormData();
        fd.append('photo', this.fileToUpload, this.fileToUpload.name);
        let img = document.querySelector(".user-img");
        img.setAttribute("src", x);
        this.api.editAdminPhoto(fd, this.httpOptions).subscribe((data) => {
            window.location.reload();
        });
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], decls: 115, vars: 10, consts: [[1, "sidebar"], [1, "fa", "fa-stethoscope"], [1, "fa", "fa-times", "close"], ["routerLink", "/admin/dashboard"], [1, "fa", "fa-home"], [1, "first"], [1, "fa", "fa-users"], [1, "fa", "fa-chevron-right", "chf"], [1, "num"], [1, "categ", "fir"], ["routerLink", "/admin/add/user"], [1, "fa", "fa-plus"], ["routerLink", "/admin/edit/user"], [1, "fa", "fa-star-of-life"], ["routerLink", "/admin/show/users"], [1, "five"], [1, "fa", "fa-chevron-right", "chv"], [1, "categ", "fiv"], ["routerLink", "/admin/add/donor"], ["routerLink", "/admin/show/donors"], [1, "second"], [1, "fa", "fa-comment-medical"], [1, "fa", "fa-chevron-right", "chs"], [1, "categ", "sec"], ["routerLink", "/admin/add/advice"], ["routerLink", "/admin/show/advice"], [1, "fa", "fa-book-open"], [1, "third"], [1, "fa", "fa-disease"], [1, "fa", "fa-chevron-right", "cht"], [1, "categ", "thi"], ["routerLink", "/admin/add/disease"], ["routerLink", "/admin/show/diseases"], [1, ""], [1, "inner-content"], [1, "overlay"], [1, "admin", 3, "mouseenter", "mouseleave"], [1, "admin-img"], ["alt", "admin", 3, "src"], [1, "about-admin"], [1, "name"], [1, "admin-card", "hidden"], [1, "brief-info"], [1, "logout", 3, "click"], [1, "form-img"], ["for", "photo"], ["alt", "photo_personal_data", 1, "user-img", 3, "src"], ["type", "file", "id", "photo", "formControlName", "photo", "hidden", "", 3, "change"], [1, "info"], ["routerLink", "/admin/edit-info"], ["href", "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "title", "messages", "target", "_blank", 1, "message"], [1, "fa", "fa-envelope"], [1, "notifications"], [1, "sidebar-icon"], [1, "fa", "fa-bars"], [1, "routing"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Healthy History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Add New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Modify User's Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Donors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Add New Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "All Donors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Advices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Add New Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Show Advices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Chronic diseases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Add New Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " All Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function PageComponent_Template_ul_mouseenter_82_listener() { return ctx.showAdminCard(); })("mouseleave", function PageComponent_Template_ul_mouseleave_82_listener() { return ctx.hiddenAdminCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageComponent_Template_div_click_92_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "form", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PageComponent_Template_input_change_97_listener($event) { return ctx.addPhoto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "+2348139567323");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " change Your Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.donnerLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.adviceLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.admin_info == null ? null : ctx.admin_info.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.admin_info == null ? null : ctx.admin_info.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.admin_info == null ? null : ctx.admin_info.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.admin_info == null ? null : ctx.admin_info.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.admin_info == null ? null : ctx.admin_info.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.admin_info == null ? null : ctx.admin_info.email);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    background-color: #f8f9fa\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin-right: 0;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    margin-left: 20%;\r\n    position: relative;\r\n    background-image: url('22.jpeg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n.routing[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n    z-index: 2;\r\n    position: relative;\r\n    min-height: calc(100vh - 140px);\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    filter: brightness(.9);\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #eee;\r\n    z-index: 1;\r\n    opacity: .8;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n    height: 100vh;\r\n    background-color: white;\r\n    border-right: black;\r\n    margin-right: 2.5%;\r\n    padding: 30px 20px;\r\n    overflow-y: scroll;\r\n    transition: 0.2s all ease-in-out;\r\n    position: fixed;\r\n    z-index: 99;\r\n    top: 0;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .categ[_ngcontent-%COMP%] {\r\n    transition: 0.2s all ease-in-out;\r\n    display: none;\r\n    margin-top: 20px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    background-color: transparent;\r\n    \r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    -webkit-text-decoration-color: none;\r\n            text-decoration-color: none;\r\n  color: #2D3663;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #2D3663;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    font-size: 16px;\r\n    color: #2D3663;\r\n    transition: 0.3s all ease-in-out;\r\n    padding: 10px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #2D3663;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    margin-left: 5px;\r\n    background-color: #f1f0f0;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\r\n    width: 5px;\r\n    height: 5px;\r\n    padding: 13px;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    border: 1px solid #47ccc8;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #47ccc8 !important;\r\n    border-radius: 50%;\r\n    float: right;\r\n    margin-right: 5px;\r\n    margin-top: -2px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .fa-chevron-right[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-size: 14px;\r\n    margin-top: 7px;\r\n}\r\n\r\n.rotate-chevron-right[_ngcontent-%COMP%] {\r\n    transform: rotate(90deg);\r\n    transition: 0.3s all ease-in-out;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 90%;\r\n    background-color: white;\r\n    \r\n    position: relative;\r\n    z-index: 9;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    display: flex;\r\n    position: relative;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    flex-direction: row-reverse;\r\n    background-color: transparent;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .admin-img[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .admin-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    float: right;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .about-admin[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n    direction: rtl;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .about-admin[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    background-color: transparent;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .about-admin[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 3px;\r\n    font-weight: bold;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    background-color: white;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    font-size: 16px;\r\n    background-color: transparent;\r\n    transition: 0.4s all ease-in-out;\r\n    padding: 10px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    margin-left: 5px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    -webkit-text-decoration-color: none;\r\n            text-decoration-color: none;\r\n    color: #625f6e;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #565360;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active   li[_ngcontent-%COMP%] {\r\n    color: #404041;\r\n    \r\n    \r\n    border-radius: 4px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #565360;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: #625f6e;\r\n}\r\n\r\n#dropdown[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 1;\r\n    right: 2.5%;\r\n    top: 90px;\r\n    background-color: white;\r\n    border: 1px solid #e0dfe5;\r\n    width: 12%;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px 1px #e0dfe5;\r\n}\r\n\r\n#dropdrown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n#dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    -webkit-text-decoration-color: none;\r\n            text-decoration-color: none;\r\n}\r\n\r\n#dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\n#dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    margin-left: 5px;\r\n    background-color: #f1f0f0;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 20px;\r\n    margin-top: 5px;\r\n    font-size: 30px;\r\n    position: relative;\r\n    z-index: 1;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.notifications[_ngcontent-%COMP%] {\r\n    width: 5px;\r\n    height: 5px;\r\n    padding: 10px;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    border: 1px solid var(--main);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--main) !important;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    z-index: 2;\r\n    bottom: 51%;\r\n    right: 75%;\r\n}\r\n\r\n.fa-envelope[_ngcontent-%COMP%] {\r\n    color: var(--black);\r\n}\r\n\r\n.sidebar-icon[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    position: absolute;\r\n    right: 73%;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    display: none;\r\n    opacity: 1;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .sidebar-icon[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        right: 86%;\r\n    }\r\n\r\n    .inner-content[_ngcontent-%COMP%] {\r\n        width: 95%;\r\n        margin-left: 2.5%;\r\n        margin-right: 2.5%;\r\n    }\r\n}\r\n\r\n@media (min-width: 767px) and (max-width: 1023px) {\r\n    .sidebar-icon[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        right: 92%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n    .sidebar-icon[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 497px) {\r\n    .about-admin[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .sidebar-icon[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        right: 84%;\r\n    }\r\n\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        display: none;\r\n        width: 75%;\r\n    }\r\n\r\n    .sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .close[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        float: right;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    #dropdown[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n        padding: 2px;\r\n        width: 34%;\r\n        font-size: 8px;\r\n    }\r\n}\r\n\r\n@media (min-width: 498px) and (max-width: 768px) {\r\n    .sidebar-icon[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        right: 90%;\r\n    }\r\n\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        display: none;\r\n        width: 40%;\r\n    }\r\n\r\n    .close[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        float: right;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    #dropdown[_ngcontent-%COMP%] {\r\n        width: 18%;\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n@media (min-width: 769px) and (max-width: 1024px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        width: 26%;\r\n    }\r\n\r\n    .inner-content[_ngcontent-%COMP%] {\r\n        width: 69%;\r\n        margin-left: 28.5%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1025px) and (max-width: 1199px) {}\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n.admin-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 60px;\r\n    width: 300px;\r\n    height: 390px;\r\n    z-index: 999;\r\n}\r\n\r\n.admin-card.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    background-color: #f1f1f1;\r\n    padding-top: 80px;\r\n    text-align: center;\r\n    margin: auto;\r\n    position: relative;\r\n    box-shadow: 0 0 10px 1px #e0dfe5;\r\n\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    margin-bottom: 5px;\r\n    border: 2px solid white;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    display: block;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    margin-top: 4px;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #c5c5c5;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: black !important;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\r\n    margin-bottom: 35px;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 9px 50px;\r\n    background-color: #2d3663;\r\n    border: 1px solid #2d3663;\r\n    border-radius: 20px;\r\n    font-size: 16px;\r\n    color: white;\r\n    transition: 0.3s all ease-in-out;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: #47ccc8;\r\n    border-color: #47ccc8;\r\n}\r\n\r\n.alt-ch-b[_ngcontent-%COMP%] {\r\n    padding: 9px 50px;\r\n    background-color: #2d3663;\r\n    border: 1px solid #2d3663;\r\n    border-radius: 20px;\r\n    font-size: 16px;\r\n    color: white;\r\n    transition: 0.3s all ease-in-out;\r\n    display: none;\r\n}\r\n\r\n.brief-info[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    color: var(--main);\r\n}\r\n\r\n@media (min-width: 498px) and (max-width: 768px) {\r\n\r\n    .alt-ch-b[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin-top: 30px;\r\n    }\r\n}\r\n\r\n@media (min-width: 769px) and (max-width: 1024px) {\r\n\r\n    .brief-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        padding: 7px 32px;\r\n    }\r\n\r\n    .bio[_ngcontent-%COMP%]   .alt-in[_ngcontent-%COMP%] {\r\n        width: 61%;\r\n        padding: 10px 80px 10px 15px;\r\n\r\n    }\r\n}\r\n\r\n@media (min-width: 1025px) and (max-width: 1199px) {\r\n    .alt-in[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdDQUF1RDtJQUN2RCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixXQUFXO0lBQ1gsTUFBTTtBQUNWOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0VBQzdCLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDRFQUE0RTtJQUM1RSxxREFBcUQ7SUFDckQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixVQUFVO1FBQ1YsY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBLG9EQUFvRDs7QUFFcEQsNEJBQTRCOztBQUU1QjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLDRCQUE0Qjs7SUFFaEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7U0FDUyIsImZpbGUiOiJwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhXHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8yMi5qcGVnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5yb3V0aW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IC5vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguOSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbn1cclxuLnNpZGViYXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBibGFjaztcclxuICAgIG1hcmdpbi1yaWdodDogMi41JTtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5jYXRlZyB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLyogY29sb3I6ICMyZDM2NjM7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHVsIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBub25lO1xyXG4gIGNvbG9yOiAjMkQzNjYzO1xyXG59XHJcblxyXG4uc2lkZWJhciB1bCBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMkQzNjYzO1xyXG59XHJcblxyXG4uc2lkZWJhciB1bCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyRDM2NjM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc2lkZWJhciBpIHtcclxuICAgIGNvbG9yOiAjMkQzNjYzO1xyXG59XHJcblxyXG4uc2lkZWJhciB1bCBsaTpob3ZlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjBmMDtcclxufVxyXG5cclxuLnNpZGViYXIgLm51bSB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDdjY2M4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNDdjY2M4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5mYS1jaGV2cm9uLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5cclxuLnJvdGF0ZS1jaGV2cm9uLXJpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IC5hZG1pbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbm5hdiAuYWRtaW4gLmFkbWluLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5uYXYgLmFkbWluIC5hZG1pbi1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5uYXYgLmFkbWluIC5hYm91dC1hZG1pbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG5uYXYgLmFkbWluIC5hYm91dC1hZG1pbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5uYXYgLmFkbWluIC5hYm91dC1hZG1pbiAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG51bCBsaTpob3ZlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG51bCBsaSBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBub25lO1xyXG4gICAgY29sb3I6ICM2MjVmNmU7XHJcbn1cclxuXHJcbnVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM1NjUzNjA7XHJcbn1cclxuXHJcbnVsIGxpIGE6YWN0aXZlIGxpIHtcclxuICAgIGNvbG9yOiAjNDA0MDQxO1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgIzczNjdmMCwgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjcpKTsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2IoMTE1IDEwMyAyNDAgLyA3MCUpOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG51bCBsaSBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNTY1MzYwO1xyXG59XHJcblxyXG5pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM2MjVmNmU7XHJcbn1cclxuXHJcbiNkcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHJpZ2h0OiAyLjUlO1xyXG4gICAgdG9wOiA5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBkZmU1O1xyXG4gICAgd2lkdGg6IDEyJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggI2UwZGZlNTtcclxufVxyXG5cclxuI2Ryb3Bkcm93biB1bCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2Ryb3Bkb3duIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBub25lO1xyXG59XHJcblxyXG4jZHJvcGRvd24gbGkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2Ryb3Bkb3duIGxpOmhvdmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMGYwO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb25zIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4pO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJvdHRvbTogNTElO1xyXG4gICAgcmlnaHQ6IDc1JTtcclxufVxyXG5cclxuLmZhLWVudmVsb3BlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDczJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc2lkZWJhci1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcmlnaHQ6IDg2JTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5uZXItY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgLnNpZGViYXItaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHJpZ2h0OiA5MiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5zaWRlYmFyLWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0OTdweCkge1xyXG4gICAgLmFib3V0LWFkbWluIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyLWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICByaWdodDogODQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogODBweDtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ5OHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zaWRlYmFyLWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICByaWdodDogOTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Ryb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMTglO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDI2JTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5uZXItY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDY5JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjguNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fVxyXG5cclxuLmFkbWluLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDM5MHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uYWRtaW4tY2FyZC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5icmllZi1pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCAjZTBkZmU1O1xyXG5cclxufVxyXG5cclxuLmJyaWVmLWluZm8gaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmJyaWVmLWluZm8gLmluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJyaWVmLWluZm8gLmluZm8gcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLmJyaWVmLWluZm8gLmluZm8gcCB7XHJcbiAgICBjb2xvcjogI2M1YzVjNTtcclxufVxyXG5cclxuLmJyaWVmLWluZm8gLmluZm8gcDpmaXJzdC1vZi10eXBlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyaWVmLWluZm8gLmluZm8gcDpsYXN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG5cclxuLmJyaWVmLWluZm8gYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDlweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzY2MztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZDM2NjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5icmllZi1pbmZvIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdjY2M4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDdjY2M4O1xyXG59XHJcblxyXG4uYWx0LWNoLWIge1xyXG4gICAgcGFkZGluZzogOXB4IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNjYzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkMzY2MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5icmllZi1pbmZvIC5sb2dvdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OThweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgLmFsdC1jaC1iIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgICAuYnJpZWYtaW5mbyBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iaW8gLmFsdC1pbiB7XHJcbiAgICAgICAgd2lkdGg6IDYxJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDgwcHggMTBweCAxNXB4O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLmFsdC1pbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qICMyRDM2NjNcclxuIzQ3Y2NjOCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page',
                templateUrl: './page.component.html',
                styleUrls: ['./page.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "iyrl":
/*!*************************************************************!*\
  !*** ./src/app/components/all-donor/all-donor.component.ts ***!
  \*************************************************************/
/*! exports provided: AllDonorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllDonorComponent", function() { return AllDonorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function AllDonorComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.blood_type);
} }
function AllDonorComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", size_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", size_r4, " ");
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class AllDonorComponent {
    constructor(api) {
        this.api = api;
        this.page = 1;
        this.count = 0;
        this.tableSize = 5;
        this.tableSizes = [5, 10, 20];
    }
    ngOnInit() {
        this.fetchPosts();
    }
    fetchPosts() {
        this.api.getDonners().subscribe((data) => {
            this.donors_all = data.Donors;
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
}
AllDonorComponent.ɵfac = function AllDonorComponent_Factory(t) { return new (t || AllDonorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
AllDonorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllDonorComponent, selectors: [["app-all-donor"]], decls: 33, vars: 10, consts: [[1, "all-donors"], [1, "container"], [1, "content", 2, "overflow-x", "auto"], [1, "table"], ["border", "1px"], [1, "p-2"], [1, "p-2", "color-transparent"], [1, "p-2", "larg"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-20"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "pageChange"], [1, "current-page"], [1, "d-flex", "flex-row-reverse", "bd-highlight", "mb-2", "hidden-sm"], [1, "p-2", "bd-highlight"], [1, "custom-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["scope", "row"], [3, "ngValue"]], template: function AllDonorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Donors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blood_type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AllDonorComponent_tr_20_Template, 11, 5, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pagination-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllDonorComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.onTableDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " current page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllDonorComponent_Template_select_change_30_listener($event) { return ctx.onTableSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AllDonorComponent_option_31_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 3, ctx.donors_all, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, ctx.tableSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableSizes);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".all-donors[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 0px;\r\n  background-image: url('filling-medical-record_1098-18239.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  padding: 70px 0;\r\n  min-height: calc(100vh - 80px);\r\n  margin-top: 80px;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n  background-color: rgba(45, 54, 99, 0.7);\r\n  padding: 30px ;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n  .pagination{\r\n   margin-top: 20px ;\r\n  justify-content: center !important;\r\n}\r\n  ul{\r\n  padding-left: 0 !important;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 30px 0 40px;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px black;\r\n  color: white;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background-color: white;\r\n  color: var(--black);\r\n  \r\n}\r\nth[_ngcontent-%COMP%]{\r\n  background-color: var(--black);\r\n  color: white;\r\n}\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n}\r\n.current-page[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  margin-top: 3px;\r\n}\r\n.current-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: #65e6e2;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n  width: 88%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  overflow-x: auto;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n.mt-20[_ngcontent-%COMP%]{\r\n  color: white;\r\n  margin-top: 20px;\r\n}\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n  border-top: 0;\r\n}\r\n  .ngx-pagination li:hover{\r\n  background-color: var(--black) !important;\r\n}\r\n  .ngx-pagination .current{\r\n  background-color: var(--black) !important;\r\n}\r\n@media (max-width:575px) {\r\n  .hidden-sm[_ngcontent-%COMP%]{\r\n    display: none !important;\r\n  }\r\n  .container[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    font-size: small;\r\n  }\r\n  .content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: block;\r\n  }\r\n  .table[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 100%;\r\n  }\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n    font-size:11px;\r\n    padding: 3px;\r\n  }\r\n    .ngx-pagination a {\r\n    padding: .1rem .2rem !important;\r\n    font-size: 13px;\r\n  }\r\n\r\n  .current-page[_ngcontent-%COMP%],   .pagination-previous span {\r\n    font-size: 13px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1kb25vci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiw4REFBcUY7RUFDckYsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNDO0dBQ0UsaUJBQWlCO0VBQ2xCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLHlDQUF5QztBQUMzQztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJhbGwtZG9ub3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtZG9ub3Jze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmlsbGluZy1tZWRpY2FsLXJlY29yZF8xMDk4LTE4MjM5LmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDcwcHggMDtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDU0LCA5OSwgMC43KTtcclxuICBwYWRkaW5nOiAzMHB4IDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiA6Om5nLWRlZXAgLnBhZ2luYXRpb257XHJcbiAgIG1hcmdpbi10b3A6IDIwcHggO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIHVse1xyXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcbmgye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDMwcHggMCA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbnRhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG59XHJcbnRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxudGFibGUgdGQgLCB0aHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jdXJyZW50LXBhZ2V7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4uY3VycmVudC1wYWdlIHNwYW57XHJcbiAgY29sb3I6ICM2NWU2ZTI7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgd2lkdGg6IDg4JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4udGFibGV7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4ubXQtMjB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRhYmxlIHRoe1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbn1cclxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzVweCkge1xyXG4gIC5oaWRkZW4tc217XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcbiAgLmNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudGFibGV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgdGFibGUgdGQgLCB0aHtcclxuICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGEge1xyXG4gICAgcGFkZGluZzogLjFyZW0gLjJyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50LXBhZ2UsXHJcbiAgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLXByZXZpb3VzIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllDonorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-donor',
                templateUrl: './all-donor.component.html',
                styleUrls: ['./all-donor.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "j8Fk":
/*!***************************************************************!*\
  !*** ./src/app/components/add-donnar/add-donnar.component.ts ***!
  \***************************************************************/
/*! exports provided: AddDonnarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDonnarComponent", function() { return AddDonnarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");









function AddDonnarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDonnarComponent_div_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goToHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to go to Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function AddDonnarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Characters At least 2. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDonnarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDonnarComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type Only Numbers At least 8 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDonnarComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDonnarComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Type 14 Numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDonnarComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDonnarComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ad_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ad_r13.name, " ");
} }
function AddDonnarComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDonnarComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Blood Type Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDonnarComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.erroeMassage, " ");
} }
class AddDonnarComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.address = [];
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z- ]{2,}')]),
            national_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{14}')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{4,}')]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            blood_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.getdress();
    }
    getdress() {
        this.api.getProvnces().subscribe((data) => {
            this.address = data.provinces;
        });
    }
    submit(f) {
        this.api.addDonners(f.value).subscribe((data) => {
            if (data.status == true) {
                this.erroeMassage = null;
                this.message = data.msg;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
    goToHome() {
        this.route.navigate(['/']);
    }
}
AddDonnarComponent.ɵfac = function AddDonnarComponent_Factory(t) { return new (t || AddDonnarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddDonnarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddDonnarComponent, selectors: [["app-add-donnar"]], decls: 76, vars: 13, consts: [[1, "register"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "col-md-6", "col-xs-12"], ["for", "first"], ["type", "text", "formControlName", "name", "placeholder", "Full Name", "name", "name", 1, "form-control"], [1, "error"], [4, "ngIf"], ["for", ""], ["type", "text", "placeholder", "Phone", "formControlName", "mobile", "name", "phone", 1, "form-control"], ["type", "text", "formControlName", "national_id", "placeholder", "National Id", "name", "national_id", 1, "form-control"], ["name", "address", "formControlName", "address", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["name", "blood_type", "formControlName", "blood_type", "placeholder", "blood", 1, "custom-select"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "error", 2, "width", "100%"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-info"], [3, "click"], [1, "c-bff"], [3, "value"]], template: function AddDonnarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddDonnarComponent_div_7_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddDonnarComponent_Template_form_ngSubmit_8_listener() { return ctx.submit(ctx.Form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddDonnarComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddDonnarComponent_div_18_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddDonnarComponent_div_26_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddDonnarComponent_div_27_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "National Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddDonnarComponent_div_35_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddDonnarComponent_div_36_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Full Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddDonnarComponent_option_43_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddDonnarComponent_div_45_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Blood Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "AB+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "AB-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "O+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "O-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AddDonnarComponent_div_70_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AddDonnarComponent_div_72_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("name").touched && (ctx.Form.get("name").errors == null ? null : ctx.Form.get("name").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("name").touched && (ctx.Form.get("name").errors == null ? null : ctx.Form.get("name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("mobile").touched && (ctx.Form.get("mobile").errors == null ? null : ctx.Form.get("mobile").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("mobile").touched && (ctx.Form.get("mobile").errors == null ? null : ctx.Form.get("mobile").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("national_id").touched && (ctx.Form.get("national_id").errors == null ? null : ctx.Form.get("national_id").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("address").touched && (ctx.Form.get("address").errors == null ? null : ctx.Form.get("address").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.get("blood_type").touched && (ctx.Form.get("blood_type").errors == null ? null : ctx.Form.get("blood_type").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.Form.valid);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n.register[_ngcontent-%COMP%]{\r\n  background-color:rgba(45, 54, 99, 0.1);\r\n  background-image:url('blood-donor-concept-blue-background-copy-space_286227-585.webp');\r\n  background-attachment: fixed;\r\n  background-size: 100% 100%;\r\n  background-position: 100% 100%;\r\n  font-weight: bold;\r\n  color: #2D3663;\r\n  margin-top: 80px;\r\n  padding: 50px 0px 20px;\r\n  min-height: calc(100vh - 80px);\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 30px 0;\r\n  text-shadow: 2px 2px 5px black;\r\n  color: white;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n  color: var(--black);\r\n}\r\n.col-md-6[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  margin-bottom: 15px;\r\n  flex: 0 0 70%;\r\n  max-width: 70%;\r\n}\r\n.alert[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n  margin: auto;\r\n  margin-bottom: auto;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  margin:10px 16%;\r\n  padding: 15px 30px;\r\n  background-color: var(--black);\r\n  color: white;\r\n  border-radius: 30px;\r\n  border: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  display: block;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n      color: rgb(244, 70, 70);\r\n  }\r\n.alert[_ngcontent-%COMP%]{\r\n    font-weight: normal !important;\r\n    color: var(--black);\r\n  }\r\n.c-bff[_ngcontent-%COMP%]{\r\n    color: #007bff !important;\r\n    cursor: pointer;\r\n  }\r\n@media (max-width:768px) {\r\n    .register[_ngcontent-%COMP%]{\r\n      margin-top: 50px;\r\n    }\r\n    .col-md-6[_ngcontent-%COMP%]{\r\n      flex: 0 0 95%;\r\n      max-width: 95%;\r\n    }\r\n    button[_ngcontent-%COMP%]{\r\n      margin-left: 6%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kb25uYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxzRkFBMkc7RUFDM0csNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNFO01BQ0ksdUJBQXVCO0VBQzNCO0FBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjtBQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGFBQWE7TUFDYixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0VBQ0YiLCJmaWxlIjoiYWRkLWRvbm5hci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZXJyb3IgZGl2e1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yZWdpc3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDUsIDU0LCA5OSwgMC4xKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jsb29kLWRvbm9yLWNvbmNlcHQtYmx1ZS1iYWNrZ3JvdW5kLWNvcHktc3BhY2VfMjg2MjI3LTU4NS53ZWJwKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzJEMzY2MztcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIHBhZGRpbmc6IDUwcHggMHB4IDIwcHg7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG59XHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmZvcm17XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG4uY29sLW1kLTZ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZmxleDogMCAwIDcwJTtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG4uYWxlcnR7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5idXR0b257XHJcbiAgbWFyZ2luOjEwcHggMTYlO1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgc3BhbntcclxuICAgICAgY29sb3I6IHJnYigyNDQsIDcwLCA3MCk7XHJcbiAgfVxyXG4gIC5hbGVydHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgfVxyXG4gIC5jLWJmZntcclxuICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLnJlZ2lzdGVye1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC02e1xyXG4gICAgICBmbGV4OiAwIDAgOTUlO1xyXG4gICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDonnarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-donnar',
                templateUrl: './add-donnar.component.html',
                styleUrls: ['./add-donnar.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "o8Ft":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ "1UnT");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");








function DashboardComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_39_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const d_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.deleteDonor(d_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r4.national_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r4.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r4.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r4.blood_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](15, 7, d_r4.created_at, 0, 10));
} }
function DashboardComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_63_Template_i_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const u_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.deleteUser(u_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r8.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r8.national_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r8.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r8.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r8.date_of_birth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r8.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r8.blood_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r8.social_status);
} }
function DashboardComponent_tr_83_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "cdk-accordion", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "cdk-accordion-item", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_83_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r13.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "cdk-accordion", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "cdk-accordion-item", 25, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_83_Template_span_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return _r14.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "cdk-accordion", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "cdk-accordion-item", 25, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_83_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return _r15.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_83_Template_td_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const d_r11 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.goToshowDisease(d_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_83_Template_i_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const d_r11 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.goToEditDisease(d_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_83_Template_i_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const d_r11 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.deleteDisease(d_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", d_r11.chronic_disease, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-header-" + i_r12)("aria-expanded", _r13.expanded)("aria-controls", "accordion-body-" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 33, d_r11.description, 0, 30), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", _r13.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-body-" + i_r12)("aria-labelledby", "accordion-header-" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 37, d_r11.description, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r13.expanded ? " less" : " more...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-header-" + i_r12)("aria-expanded", _r14.expanded)("aria-controls", "accordion-body-" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](23, 40, d_r11.syndrome, 0, 30), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", _r14.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-body-" + i_r12)("aria-labelledby", "accordion-header-" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 44, d_r11.syndrome, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r14.expanded ? " less" : " more...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-header-" + i_r12)("aria-expanded", _r15.expanded)("aria-controls", "accordion-body-" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](35, 47, d_r11.treatment, 0, 30), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", _r15.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-body-" + i_r12)("aria-labelledby", "accordion-header-" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](38, 51, d_r11.treatment, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r15.expanded ? " less" : " more...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](43, 54, d_r11.created_at, 0, 10));
} }
function DashboardComponent_tr_99_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "cdk-accordion", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "cdk-accordion-item", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_99_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r25.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_99_Template_i_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const advice_r23 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.goToEdit(advice_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tr_99_Template_i_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const advice_r23 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.deleteadvice(advice_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const advice_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](advice_r23.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-header-" + i_r24)("aria-expanded", _r25.expanded)("aria-controls", "accordion-body-" + i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 13, advice_r23.advice, 0, 80), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", _r25.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "accordion-body-" + i_r24)("aria-labelledby", "accordion-header-" + i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 17, advice_r23.advice, 80), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _r25.expanded ? " less" : " more...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](19, 20, advice_r23.created_at, 0, 10));
} }
class DashboardComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
        this.AllDonners = [];
        this.AllDisease = [];
        this.AllUsers = [];
        this.AllAdvices = [];
        this.word = "";
        this.blogs = [
            { title: 'blog1', describtion: ' one' },
            { title: 'blog2', describtion: ' two' },
            { title: 'blog3', describtion: ' three' },
            { title: 'blog4', describtion: ' four' },
        ];
    }
    ngOnInit() {
        this.getDonners();
        this.getDisease();
        this.getAllUsers();
        this.getUserChart();
        this.getCount();
        this.getAllAdvices();
    }
    getAllAdvices() {
        this.api.getallAdices().subscribe((data) => {
            this.AllAdvices = data.advices;
            if (this.AllAdvices.length > 4) {
                this.AllAdvices.length = 4;
            }
        });
    }
    getDonners() {
        this.api.getDonners().subscribe((data) => {
            this.AllDonners = data.Donors;
            if (this.AllDonners.length > 4) {
                this.AllDonners.length = 4;
            }
        });
    }
    getAllUsers() {
        console.log(this.httpOptions);
        this.api.getAllUsers(this.httpOptions).subscribe((data) => {
            this.AllUsers = data.users;
            if (this.AllUsers.length > 4) {
                this.AllUsers.length = 4;
            }
        });
    }
    getDisease() {
        this.api.getDisease().subscribe((data) => {
            this.AllDisease = data.Chronic_Diseases;
            if (this.AllDisease.length > 4) {
                this.AllDisease.length = 4;
            }
        });
    }
    deleteUser(id) {
        this.api.deleteUser({ id: id }, this.httpOptions).subscribe(data => {
            window.location.reload();
        });
    }
    deleteDonor(id) {
        this.api.deleteDonor({ id: id }, this.httpOptions).subscribe(data => {
            window.location.reload();
        });
    }
    getUserChart() {
        this.api.getUserChart(this.httpOptions).subscribe((data) => {
            this.userCart = data.data;
            this.api.getDonnersChart(this.httpOptions).subscribe((data) => {
                this.donorChart = data.data;
                this.chart1([(this.donorChart[1].count + this.donorChart[2].count),
                    (this.donorChart[3].count + this.donorChart[4].count),
                    (this.donorChart[5].count + this.donorChart[6].count),
                    (this.donorChart[7].count + this.donorChart[8].count),
                    (this.donorChart[9].count + this.donorChart[10].count),
                    (this.donorChart[11].count + this.donorChart[12].count)], [(this.userCart[1].count + this.userCart[2].count),
                    (this.userCart[3].count + this.userCart[4].count),
                    (this.userCart[5].count + this.userCart[6].count),
                    (this.userCart[7].count + this.userCart[8].count),
                    (this.userCart[9].count + this.userCart[10].count),
                    (this.userCart[11].count + this.userCart[12].count)]);
            });
        });
    }
    getCount() {
        this.api.getCount().subscribe((data) => {
            this.chart2([data.counts.users, data.counts.donors, data.counts.diseases, data.counts.advices]);
        });
    }
    chart1(data1, data2) {
        const canvas2 = document.getElementById('lineChart');
        const ctx2 = canvas2.getContext('2d');
        new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](ctx2, {
            type: 'line',
            data: {
                labels: ["Feb", "Apr", "June", "August", "Oct", "Dec"],
                datasets: [{
                        label: "donners / monthly",
                        data: data1,
                        backgroundColor: 'rgba(105, 0, 132, .2)',
                        borderColor: 'rgba(200, 99, 132, .7)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: "users / monthly",
                        data: data2,
                        backgroundColor: 'rgba(0, 137, 132, .2)',
                        borderColor: 'rgba(0, 10, 130, .7)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    chart2(data) {
        let months = ["Users", "Donors", "Diseases", "Advices"];
        let traffic = data;
        const canvas1 = document.getElementById('plots');
        const ctx1 = canvas1.getContext('2d');
        new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](ctx1, {
            type: 'doughnut',
            data: {
                labels: months,
                datasets: [{
                        data: traffic,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.7)",
                            "rgba(255, 205, 86, 0.7)",
                            "rgba(75, 192, 192, 0.7)",
                            "rgba(54, 162, 235,0.7)",
                            "rgba(153, 102, 255, 0.7)",
                        ],
                    }]
            },
            options: {
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    }
    deleteDisease(id) {
        this.api.deleteDis(id, this.httpOptions).subscribe((data) => {
            window.location.reload();
        });
    }
    goToEditDisease(id) {
        this.router.navigate(["admin", "edit", "disease", id]);
    }
    goToshowDisease(id) {
        this.router.navigate(["admin", "show", "disease", id]);
    }
    goToEditUser() {
        this.router.navigate(["admin", "edit", "user"]);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 100, vars: 4, consts: [[1, "dashboard"], [1, "row", "d-flex", "align-items-center", "mb-6"], [1, "col-lg-4", "description", "col-md-8", "m-auto"], [1, "admin", "mt-5"], [1, "icon"], ["src", "../../././../assets/images/medal.png", "alt", ""], [1, "mt-4"], [1, "text"], [1, "col-lg-8", "flow-charts", "col-md-12"], [1, "row"], [1, "col-md-6", "col-sm-12", "mt-5"], [2, "background", "white", "border-radius", "12px"], ["id", "lineChart"], ["id", "plots"], [1, "table-name"], [1, "tab"], [1, "table"], [1, "table-secondary"], [4, "ngFor", "ngForOf"], [1, "table", "disease"], [1, "blueData"], [1, "icona2"], [1, "fa", "fa-trash", 3, "click"], [1, "no-p"], [1, "example-accordion"], ["role", "button", "tabindex", "0", 1, "example-accordion-item"], ["accordionItem", "cdkAccordionItem"], [1, "example-accordion-item-header", 3, "click"], ["role", "region", 1, "example-accordion-item-body"], [1, "example-accordion-item-description", "text-primary"], ["accordionItem1", "cdkAccordionItem"], ["accordionItem2", "cdkAccordionItem"], [1, "blueData", 3, "click"], [1, "icona1"], [1, "fa", "fa-pencil", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Congratulations John,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " This page can be accessed only by administrators. All users from secure (admin only) api end point. John Doe (Admin), Nataly Doe (Client), Rose Doe (User), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "canvas", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "canvas", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Last Donors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Blood Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Created At");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, DashboardComponent_tr_39_Template, 19, 11, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Last Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Sex");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Blood Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Social Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, DashboardComponent_tr_63_Template, 20, 8, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Last Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Syndrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Created_At");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, DashboardComponent_tr_83_Template, 49, 58, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Last Advices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Created At");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, DashboardComponent_tr_99_Template, 25, 24, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.AllDonners);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.AllUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.AllDisease);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.AllAdvices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordion"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordionItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: [".chart-canvas[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n    display: none;\r\n}\r\n.chart-canvas[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{\r\n    height: 360px !important;\r\n    width: 92% !important;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n    \r\n    --first-bg-color:  #252f3b; \r\n    --second-bg-color: #1B2533;\r\n    --first-font-color: white;\r\n    --second-font-color: #21cd92; \r\n    --overall-top-margin: 30px;\r\n    --dashboard-margin: 40px;\r\n    --nav-side-bar-margin-left: 20px;     \r\n    --border-radius: 10px;\r\n    --font-size-xs: 16px;\r\n    --font-size-medium: 28px;\r\n    --font-size-large: 48px;\r\n  }\r\n\r\n.dashboard[_ngcontent-%COMP%]{\r\n    padding:0 25px;\r\n}\r\nh3[_ngcontent-%COMP%]\r\n{\r\n    color: white;\r\n}\r\n.dashboard-cards[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    margin: 0 var(--dashboard-margin);\r\n    padding-bottom: 50px;\r\n    gap: 50px;\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n    .dashboard-cards[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    width: 100%;   \r\n    background-color: #1d0ebbd3;\r\n}\r\n.chart-canvas[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n    position: relative;\r\n    min-height: 250px;\r\n}\r\n.chart-options[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 14px;\r\n}\r\n#cashstreamEC[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: var(--second-font-color);\r\n    border: none;\r\n    outline: none;\r\n    font-size: 16px;\r\n}\r\n#cashstreamEC[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n    color: #666;\r\n    background-color: transparent;\r\n  }\r\ntable[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    background-color: #f8f9fa !important;\r\n}\r\n.table-name[_ngcontent-%COMP%]{\r\n    margin-top: 4rem;\r\n    color: #0f2075;\r\n    font-weight: 500;\r\n    font-weight: 500;\r\n    font-size: 30px;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n.blueData[_ngcontent-%COMP%]\r\n{\r\ncolor: #0f2075\r\n}\r\n.admin[_ngcontent-%COMP%]{\r\n    background-color:#1d0ebbd3;\r\n    text-align: center;\r\n    padding: 30px;\r\n    font-size: 20px;\r\n    color: white;\r\n  border-radius: 5px;\r\n}\r\nimg[_ngcontent-%COMP%]\r\n{\r\n    width:50px;\r\nborder-radius: 50%;\r\n}\r\n.icon[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 70px;\r\n    width: 70px;\r\n    background-color:#1d0ebbd3;\r\n    margin: auto;\r\n    border-radius: 50%;\r\n\r\n    font-size: 2.5rem;\r\n   \r\n}\r\nspan[_ngcontent-%COMP%]\r\n{\r\n    padding: 7px;\r\n    border-radius: 50%;\r\n    font-size: 12px;\r\n}\r\n.icona1[_ngcontent-%COMP%]\r\n{    \r\n   color: #0f2075;\r\n   margin-right: 2px;\r\n}\r\n.icona2[_ngcontent-%COMP%]\r\n{\r\n    color:  #dc3545;\r\n}\r\n.tab[_ngcontent-%COMP%]{\r\n    overflow-x: auto;\r\n    width: 100%;\r\n}\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\np.text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    line-height: 25px;\r\n    font-weight: 100;\r\n    font-size: 15px;\r\n}\r\n.no-p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    padding: 0 !important;\r\n}\r\n  .example-accordion-item-description{\r\n    padding: 0 !important;\r\n}\r\n@media (max-width:1024px) {\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n    }\r\n}\r\n#plots[_ngcontent-%COMP%]{\r\n    width: 100% !important;   \r\n    margin: auto;\r\n    border-radius: 10px;\r\n    height: 300px;\r\n    border: 1px solid #ebe9f1;\r\n   }\r\n#lineChart[_ngcontent-%COMP%]\r\n   {\r\n    width: 100% !important;   \r\n    margin: auto; \r\n    border-radius: 10px;\r\n    height: 300px;\r\n    border: 1px solid #ebe9f1;\r\n   }\r\ni[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n}\r\ntable.disease[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n@media (max-width:1025px) {\r\n    .flow-charts[_ngcontent-%COMP%]{\r\n        flex: 100%;\r\n        max-width: 100%;\r\n    }\r\n    .description[_ngcontent-%COMP%]{\r\n        flex: 90%;\r\n        max-width: 90%;\r\n    }\r\n    .dashboard[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n    }\r\n}\r\n@media (max-width:575px) {\r\n\r\n    .description[_ngcontent-%COMP%]{\r\n        flex: 100%;\r\n        max-width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCO0FBTUc7SUFDQyxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUN6QjtBQUVGLHVDQUF1QztBQUd2QztJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsU0FBUztBQUNiO0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0VBQy9CO0FBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkLGtCQUFrQjtBQUNwQjtBQUNBOztJQUVJLFVBQVU7QUFDZCxrQkFBa0I7QUFDbEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixpQkFBaUI7O0FBRXJCO0FBR0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0dBRUcsY0FBYztHQUNkLGlCQUFpQjtBQUNwQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtBQUlBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtHQUMxQjtBQUVBOztJQUVDLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7R0FDMUI7QUFDQTtJQUNDLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUE7O0lBRUk7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jaGFydC1jYW52YXN7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2hhcnQtY2FudmFzIGNhbnZhc3tcclxuICAgIGhlaWdodDogMzYwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5MiUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgIDpyb290IHtcclxuICAgIC8qIENvbG9yIFRoZW1pbmcgKi9cclxuICAgIC0tZmlyc3QtYmctY29sb3I6ICAjMjUyZjNiOyBcclxuICAgIC0tc2Vjb25kLWJnLWNvbG9yOiAjMUIyNTMzO1xyXG4gICAgLS1maXJzdC1mb250LWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tc2Vjb25kLWZvbnQtY29sb3I6ICMyMWNkOTI7IFxyXG4gICAgLS1vdmVyYWxsLXRvcC1tYXJnaW46IDMwcHg7XHJcbiAgICAtLWRhc2hib2FyZC1tYXJnaW46IDQwcHg7XHJcbiAgICAtLW5hdi1zaWRlLWJhci1tYXJnaW4tbGVmdDogMjBweDsgICAgIFxyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1mb250LXNpemUteHM6IDE2cHg7XHJcbiAgICAtLWZvbnQtc2l6ZS1tZWRpdW06IDI4cHg7XHJcbiAgICAtLWZvbnQtc2l6ZS1sYXJnZTogNDhweDtcclxuICB9XHJcblxyXG4vKiBDU1MgU3R5bGluZyBBZG1pbiBEYXNoYm9hcmQgSGVhZGVyICovXHJcblxyXG5cclxuLmRhc2hib2FyZHtcclxuICAgIHBhZGRpbmc6MCAyNXB4O1xyXG59XHJcbmgzXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGFzaGJvYXJkLWNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBtYXJnaW46IDAgdmFyKC0tZGFzaGJvYXJkLW1hcmdpbik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGdhcDogNTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5kYXNoYm9hcmQtY2FyZHN7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMGViYmQzO1xyXG59XHJcblxyXG4uY2hhcnQtY2FudmFzIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uY2hhcnQtb3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDogMTRweDtcclxufVxyXG5cclxuI2Nhc2hzdHJlYW1FQyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtZm9udC1jb2xvcik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jY2FzaHN0cmVhbUVDIG9wdGlvbiB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgdGFibGVcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZS1uYW1le1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIGNvbG9yOiAjMGYyMDc1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxudGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5ibHVlRGF0YVxyXG57XHJcbmNvbG9yOiAjMGYyMDc1XHJcbn1cclxuLmFkbWlue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWQwZWJiZDM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5pbWdcclxue1xyXG4gICAgd2lkdGg6NTBweDtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5pY29uXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFkMGViYmQzO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICBcclxufVxyXG5cclxuXHJcbnNwYW5cclxue1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pY29uYTFcclxueyAgICBcclxuICAgY29sb3I6ICMwZjIwNzU7XHJcbiAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcbi5pY29uYTJcclxue1xyXG4gICAgY29sb3I6ICAjZGMzNTQ1O1xyXG59XHJcblxyXG4udGFie1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRhYmxlIHRoICxcclxudGFibGUgdGR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5wLnRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5uby1wIHNwYW57XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5leGFtcGxlLWFjY29yZGlvbi1pdGVtLWRlc2NyaXB0aW9ue1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwMjRweCkge1xyXG4gICAgdGFibGUgdGR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIFxyXG4jcGxvdHN7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyAgIFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlOWYxO1xyXG4gICB9XHJcblxyXG4gICAjbGluZUNoYXJ0XHJcbiAgIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7ICAgXHJcbiAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlOWYxO1xyXG4gICB9XHJcbiAgIGl7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbnRhYmxlLmRpc2Vhc2UgdGR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwMjVweCkge1xyXG4gICAgLmZsb3ctY2hhcnRze1xyXG4gICAgICAgIGZsZXg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgIGZsZXg6IDkwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuXHJcbiAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgZmxleDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "rLth":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-slider/home-slider.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSliderComponent", function() { return HomeSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeSliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeSliderComponent.ɵfac = function HomeSliderComponent_Factory(t) { return new (t || HomeSliderComponent)(); };
HomeSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeSliderComponent, selectors: [["app-home-slider"]], decls: 48, vars: 0, consts: [[1, "header", 2, "color", "var(--main)"], [2, "color", "var(--black)"], ["id", "slider"], ["type", "radio", "name", "slider", "id", "s1"], ["type", "radio", "name", "slider", "id", "s2"], ["type", "radio", "name", "slider", "id", "s3", "checked", ""], ["type", "radio", "name", "slider", "id", "s4"], ["type", "radio", "name", "slider", "id", "s5"], ["for", "s1", "id", "slide1"], [1, "content"], ["src", "../../../assets/images/world-blood-donor-day-june-14th-hand-taking-blood-test-from-\n        vein-donation-hemotransfusion-department-hospital-man-holds-bouncy-ball-form-heart-hand_117638-89.jpg"], ["for", "s2", "id", "slide2"], ["src", "../../../assets/images/\u0641\u0648\u0627\u0626\u062F-\u0627\u0644\u062A\u0628\u0631\u0639-\u0628\u0627\u0644\u062F\u0645-\u0627\u0644\u0623\u0631\u0628\u0639\u0629.jpg"], ["for", "s3", "id", "slide3"], ["src", "../../../assets/images/nurse-holding-blood-test-tube.jpg"], ["routerLink", "add-donor"], ["for", "s4", "id", "slide4"], ["src", "../../../assets/images/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg"], ["for", "s5", "id", "slide5"], ["src", "../../../assets/images/surgeon-holding-covid-19-test-tube.jpg"]], template: function HomeSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blood ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Donation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Conditions for donating blood:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The donor must be in good health and not suffer from any contagious diseases. The hemoglobin level for men should be 14-17 g, and for women it should be 12-14 g. The age of the donor should be between 18-65 years. The average blood pressure is less than 120/80 mm Hg. The pulse should be between 50-100 per minute. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Importance of donating blood:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blood transfusion is one of the operations that contribute to saving lives; It is given in such cases: When complications occur for pregnant women, such as bleeding before, during or after childbirth.For patients during surgical operations such as heart operations, blood vessels, organ transplant surgery and others. For people with blood diseases.those injured in accidents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Blood donation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "It is a voluntary medical procedure in which blood or one of its compounds is transferred from a healthy person to a sick person who needs blood. This procedure is needed by millions of people every year; It is used during surgery, accidents, or some diseases that require transfusion of some blood components.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Donate now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Tips after donating blood:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "After the donation, take a rest and have a snack, and after 10-15 minutes you can leave the place of donation Avoid strenuous physical activity or heavy lifting for 5 hours after the donation. When feeling dizzy, it is recommended to lie on the back with the feet raised. Drinking a lot of fluids.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "How much blood is donated?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "The human body contains five liters of blood on average, and the amount of donated blood is estimated at 450 milliliters of blood, and this represents only 8% of the average blood volume in an adult, and it does not affect at all on the normal activity of the blood donor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 4vw;\r\n  font-weight: 700;\r\n  color: var(--black);\r\n  margin:0px 0px 50px\r\n} \r\n\r\n\r\n*[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n  } \r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tpadding: 20px;\r\n\tbackground: #eee;\r\n\t-webkit-user-select: none;\r\n\t        user-select: none;\r\n  } \r\n\r\n\r\n[type=radio][_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n  } \r\n\r\n\r\n#slider[_ngcontent-%COMP%] {\r\n\theight: 33vw;\r\n\tposition: relative;\r\n\tperspective: 1000px;\r\n\ttransform-style: preserve-3d;\r\n  } \r\n\r\n\r\n#slider[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tmargin: auto;\r\n\twidth: 40%;\r\n\theight: 100%;\r\n\tborder-radius: 4px;\r\n\tposition: absolute;\r\n\tleft: 0; right: 0;\r\n\tcursor: pointer;\r\n\ttransition: transform .5s ease-out;\r\n  } \r\n\r\n\r\n#s1[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%] {\r\n\tbox-shadow: 0 1px 4px 0 rgba(0,0,0,.37);\r\n\ttransform: translate3d(-30%,0,-200px);\r\n  } \r\n\r\n\r\n#s1[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%] {\r\n\tbox-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2);\r\n\ttransform: translate3d(-15%,0,-100px);\r\n  } \r\n\r\n\r\n#s1[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%] {\r\n\tbox-shadow: 0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19);\r\n\ttransform: translate3d(0,0,0);\r\n  } \r\n\r\n\r\n#s1[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%] {\r\n\tbox-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2);\r\n\ttransform: translate3d(15%,0,-100px);\r\n  } \r\n\r\n\r\n#s1[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%] {\r\n\tbox-shadow: 0 1px 4px 0 rgba(0,0,0,.37);\r\n\ttransform: translate3d(30%,0,-200px);\r\n  } \r\n\r\n\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tcolor: white;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 0;\r\n  } \r\n\r\n\r\n \r\n\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n\tbackground-color: var(--black);\r\n\tcolor: white;\r\n} \r\n\r\n\r\n.content[_ngcontent-%COMP%]{\r\n\t  padding: 15px;\r\n  } \r\n\r\n\r\n.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t  width: 100%;\r\n\t  height: 240px;\r\n  } \r\n\r\n\r\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\tcolor: var(--main);\r\n\tfont-size: 1.1vw;\r\n\tmargin-top: 15px;\r\n\ttext-transform: capitalize;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tfont-family: 'Lora';\r\n  } \r\n\r\n\r\n@media (max-width:1050px) {\r\n\tlabel[_ngcontent-%COMP%]{\r\n\t\twidth: 50% !important;\r\n\t}\r\n\t#slider[_ngcontent-%COMP%]{\r\n\t\theight: 550px !important;\r\n\t}\r\n} \r\n\r\n\r\n@media (max-width:800px) {\r\n\t  label[_ngcontent-%COMP%]{\r\n\t\t  width: 80% !important;\r\n\t  }\r\n\t  #slider[_ngcontent-%COMP%]{\r\n\t\t  height: 500px !important;\r\n\t  }\r\n  } \r\n\r\n\r\n@media (max-width:580px) {\r\n\tlabel[_ngcontent-%COMP%]{\r\n\t\twidth: 95% !important;\r\n\t}\r\n\t.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\t\tfont-size: 11px;\r\n\t}\r\n\t.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\t\tmargin-top: 7px;\r\n\t\tfont-size: 14px;\r\n\t\tmargin-bottom: 7px;\r\n\t}\r\n\t#slider[_ngcontent-%COMP%]{\r\n\t\theight: 500px !important;\r\n\t}\r\n} \r\n\r\n\r\n@media (max-width:390px) {\r\n\tlabel[_ngcontent-%COMP%]{\r\n\t\twidth: 100% !important;\r\n\t}\r\n\t.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\t\tfont-size: 10px;\r\n\t\tline-height: 14px\r\n\t}\r\n\t.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\t\tmargin-top: 5px;\r\n\t\tfont-size: 12px;\r\n\t\tmargin-bottom: 5px;\r\n\t}\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Q0FFQztFQUNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQjtBQUNGOzs7QUFHQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0VBQ1Q7OztBQUVBO0NBQ0QsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQix5QkFBaUI7U0FBakIsaUJBQWlCO0VBQ2hCOzs7QUFFQTtDQUNELGFBQWE7RUFDWjs7O0FBRUE7Q0FDRCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQiw0QkFBNEI7RUFDM0I7OztBQUVBO0NBQ0QsWUFBWTtDQUNaLFVBQVU7Q0FDVixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixPQUFPLEVBQUUsUUFBUTtDQUNqQixlQUFlO0NBQ2Ysa0NBQWtDO0VBQ2pDOzs7QUFFQTs7O0NBR0QsdUNBQXVDO0NBQ3ZDLHFDQUFxQztFQUNwQzs7O0FBRUE7OztDQUdELG1FQUFtRTtDQUNuRSxxQ0FBcUM7RUFDcEM7OztBQUVBOzs7Q0FHRCxzRUFBc0U7Q0FDdEUsNkJBQTZCO0VBQzVCOzs7QUFFQTs7O0NBR0QsbUVBQW1FO0NBQ25FLG9DQUFvQztFQUNuQzs7O0FBRUE7OztDQUdELHVDQUF1QztDQUN2QyxvQ0FBb0M7RUFDbkM7OztBQUNBO0NBQ0QsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixnQkFBZ0I7RUFDZjs7O0FBQ0E7Ozs7bUNBSWlDOzs7QUFDbkM7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtBQUNiOzs7QUFDRTtHQUNDLGFBQWE7RUFDZDs7O0FBQ0E7R0FDQyxXQUFXO0dBQ1gsYUFBYTtFQUNkOzs7QUFDQTtDQUNELGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtFQUNsQjs7O0FBQ0E7Q0FDRDtFQUNDLHFCQUFxQjtDQUN0QjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0Q7OztBQUNFO0dBQ0M7SUFDQyxxQkFBcUI7R0FDdEI7R0FDQTtJQUNDLHdCQUF3QjtHQUN6QjtFQUNEOzs7QUFFQTtDQUNEO0VBQ0MscUJBQXFCO0NBQ3RCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0Q7OztBQUNBO0NBQ0M7RUFDQyxzQkFBc0I7Q0FDdkI7Q0FDQTtFQUNDLGVBQWU7RUFDZjtDQUNEO0NBQ0E7RUFDQyxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjs7QUFFRCIsImZpbGUiOiJob21lLXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gLmhlYWRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0dnc7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIG1hcmdpbjowcHggMHB4IDUwcHhcclxufSBcclxuXHJcblxyXG4qIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZWVlO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuICBcclxuICBbdHlwZT1yYWRpb10ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICNzbGlkZXIge1xyXG5cdGhlaWdodDogMzN2dztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIH1cclxuICBcclxuICAjc2xpZGVyIGxhYmVsIHtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0d2lkdGg6IDQwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAwOyByaWdodDogMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLW91dDtcclxuICB9XHJcbiAgXHJcbiAgI3MxOmNoZWNrZWQgfiAjc2xpZGU0LCAjczI6Y2hlY2tlZCB+ICNzbGlkZTUsXHJcbiAgI3MzOmNoZWNrZWQgfiAjc2xpZGUxLCAjczQ6Y2hlY2tlZCB+ICNzbGlkZTIsXHJcbiAgI3M1OmNoZWNrZWQgfiAjc2xpZGUzIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4zNyk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAlLDAsLTIwMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgI3MxOmNoZWNrZWQgfiAjc2xpZGU1LCAjczI6Y2hlY2tlZCB+ICNzbGlkZTEsXHJcbiAgI3MzOmNoZWNrZWQgfiAjc2xpZGUyLCAjczQ6Y2hlY2tlZCB+ICNzbGlkZTMsXHJcbiAgI3M1OmNoZWNrZWQgfiAjc2xpZGU0IHtcclxuXHRib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMyksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjIpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwwLC0xMDBweCk7XHJcbiAgfVxyXG4gIFxyXG4gICNzMTpjaGVja2VkIH4gI3NsaWRlMSwgI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxyXG4gICNzMzpjaGVja2VkIH4gI3NsaWRlMywgI3M0OmNoZWNrZWQgfiAjc2xpZGU0LFxyXG4gICNzNTpjaGVja2VkIH4gI3NsaWRlNSB7XHJcblx0Ym94LXNoYWRvdzogMCAxM3B4IDI1cHggMCByZ2JhKDAsMCwwLC4zKSwgMCAxMXB4IDdweCAwIHJnYmEoMCwwLDAsLjE5KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICB9XHJcbiAgXHJcbiAgI3MxOmNoZWNrZWQgfiAjc2xpZGUyLCAjczI6Y2hlY2tlZCB+ICNzbGlkZTMsXHJcbiAgI3MzOmNoZWNrZWQgfiAjc2xpZGU0LCAjczQ6Y2hlY2tlZCB+ICNzbGlkZTUsXHJcbiAgI3M1OmNoZWNrZWQgfiAjc2xpZGUxIHtcclxuXHRib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMyksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjIpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUlLDAsLTEwMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgI3MxOmNoZWNrZWQgfiAjc2xpZGUzLCAjczI6Y2hlY2tlZCB+ICNzbGlkZTQsXHJcbiAgI3MzOmNoZWNrZWQgfiAjc2xpZGU1LCAjczQ6Y2hlY2tlZCB+ICNzbGlkZTEsXHJcbiAgI3M1OmNoZWNrZWQgfiAjc2xpZGUyIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4zNyk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMCUsMCwtMjAwcHgpO1xyXG4gIH1cclxuICAuY29udGVudCBwIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAvKiAjc2xpZGUxIHsgYmFja2dyb3VuZDogIzAwQkNENCB9XHJcbiAgI3NsaWRlMiB7IGJhY2tncm91bmQ6ICM0Q0FGNTAgfVxyXG4gICNzbGlkZTMgeyBiYWNrZ3JvdW5kOiAjQ0REQzM5IH1cclxuICAjc2xpZGU0IHsgYmFja2dyb3VuZDogI0ZGQzEwNyB9XHJcbiAgI3NsaWRlNSB7IGJhY2tncm91bmQ6ICNGRjU3MjIgfSAqL1xyXG5sYWJlbHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcbiAgLmNvbnRlbnR7XHJcblx0ICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAuY29udGVudCBpbWd7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHQgIGhlaWdodDogMjQwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IGgye1xyXG5cdGNvbG9yOiB2YXIoLS1tYWluKTtcclxuXHRmb250LXNpemU6IDEuMXZ3O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtZmFtaWx5OiAnTG9yYSc7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjEwNTBweCkge1xyXG5cdGxhYmVse1xyXG5cdFx0d2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQjc2xpZGVye1xyXG5cdFx0aGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjgwMHB4KSB7XHJcblx0ICBsYWJlbHtcclxuXHRcdCAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG5cdCAgfVxyXG5cdCAgI3NsaWRlcntcclxuXHRcdCAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG5cdCAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpIHtcclxuXHRsYWJlbHtcclxuXHRcdHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmNvbnRlbnQgcHtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHR9XHJcblx0LmNvbnRlbnQgaDJ7XHJcblx0XHRtYXJnaW4tdG9wOiA3cHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XHJcblx0fVxyXG5cdCNzbGlkZXJ7XHJcblx0XHRoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjM5MHB4KSB7XHJcblx0bGFiZWx7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuY29udGVudCBwe1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE0cHhcclxuXHR9XHJcblx0LmNvbnRlbnQgaDJ7XHJcblx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0fVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-slider',
                templateUrl: './home-slider.component.html',
                styleUrls: ['./home-slider.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rPTv":
/*!*******************************************************************************!*\
  !*** ./src/app/components/all-user-diagnosis/all-user-diagnosis.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AllUserDiagnosisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUserDiagnosisComponent", function() { return AllUserDiagnosisComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function AllUserDiagnosisComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", post_r2.diagnosis, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 2, post_r2.created_at, 0, 10), "");
} }
function AllUserDiagnosisComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", size_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r4, " ");
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class AllUserDiagnosisComponent {
    constructor(api) {
        this.api = api;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token')
            })
        };
        this.page = 1;
        this.count = 0;
        this.tableSize = 3;
        this.tableSizes = [3, 6, 10];
    }
    ngOnInit() {
        this.fetchPosts();
    }
    fetchPosts() {
        this.api.getUserDiagnosis(this.httpOptions).subscribe((data) => {
            this.diagnosis_all = data.diagnosis;
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
}
AllUserDiagnosisComponent.ɵfac = function AllUserDiagnosisComponent_Factory(t) { return new (t || AllUserDiagnosisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AllUserDiagnosisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AllUserDiagnosisComponent, selectors: [["app-all-user-diagnosis"]], decls: 20, vars: 10, consts: [[1, "all-donors"], [1, "container"], [1, "content"], [1, "diagnosis"], [4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row-reverse", "bd-highlight", "mb-2", "hidden-sm"], [1, "p-2", "bd-highlight"], [1, "custom-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-20"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "pageChange"], [1, "current-page"], [1, "create"], [1, "fa", "fa-calendar"], [3, "ngValue"]], template: function AllUserDiagnosisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "All Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AllUserDiagnosisComponent_div_7_Template, 8, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AllUserDiagnosisComponent_Template_select_change_11_listener($event) { return ctx.onTableSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AllUserDiagnosisComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "pagination-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AllUserDiagnosisComponent_Template_pagination_controls_pageChange_14_listener($event) { return ctx.onTableDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " current page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 3, ctx.diagnosis_all, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx.tableSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.page);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".all-donors[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 0px;\r\n  background-image: url('filling-medical-record_1098-18239.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  padding: 70px 0;\r\n  min-height: calc(100vh - 80px);\r\n  margin-top: 80px;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n  background-color: rgba(45, 54, 99, 0.7);\r\n  padding: 30px ;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n  .pagination{\r\n   margin-top: 20px ;\r\n  justify-content: center !important;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 30px 0 40px;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px black;\r\n  color: white;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background-color: white;\r\n  color: var(--black);\r\n  \r\n}\r\nth[_ngcontent-%COMP%]{\r\n  background-color: var(--black);\r\n  color: white;\r\n}\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n}\r\n.current-page[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  margin-top: 3px;\r\n}\r\n.current-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: #65e6e2;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n  width: 85%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.diagnosis[_ngcontent-%COMP%]{\r\n  width: 87%;\r\n  padding: 1%;\r\n}\r\n.diagnosis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n background-color: white;\r\n padding: 12px;\r\n margin-bottom: 15px;\r\n border-radius: 4px;\r\n color: var(--black);\r\n text-align: left;\r\n}\r\n.mt-20[_ngcontent-%COMP%]{\r\n  color: white;\r\n  width: 85%;\r\n  margin-top: 20px;\r\n}\r\n.create[_ngcontent-%COMP%]{\r\n  color: var(--black);\r\n  text-align: right;\r\n  margin-top: 20px;\r\n  margin-bottom: 0;\r\n}\r\n.create[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: var(--main);\r\n}\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n  border-top: 0;\r\n}\r\n  .ngx-pagination li:hover{\r\n  background-color: var(--black) !important;\r\n}\r\n  .ngx-pagination .current{\r\n  background-color: var(--black) !important;\r\n}\r\n@media (max-width:575px) {\r\n  .hidden-sm[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .content[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    display: block;\r\n  }\r\n  .diagnosis[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 99%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC11c2VyLWRpYWdub3Npcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiw4REFBcUY7RUFDckYsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNDO0dBQ0UsaUJBQWlCO0VBQ2xCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImFsbC11c2VyLWRpYWdub3Npcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbC1kb25vcnN7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9maWxsaW5nLW1lZGljYWwtcmVjb3JkXzEwOTgtMTgyMzkuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcGFkZGluZzogNzBweCAwO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNTQsIDk5LCAwLjcpO1xyXG4gIHBhZGRpbmc6IDMwcHggO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIDo6bmctZGVlcCAucGFnaW5hdGlvbntcclxuICAgbWFyZ2luLXRvcDogMjBweCA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5oMntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAzMHB4IDAgNDBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG50YWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cclxufVxyXG50aHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbnRhYmxlIHRkICwgdGh7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY3VycmVudC1wYWdle1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmN1cnJlbnQtcGFnZSBzcGFue1xyXG4gIGNvbG9yOiAjNjVlNmUyO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kaWFnbm9zaXN7XHJcbiAgd2lkdGg6IDg3JTtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG4uZGlhZ25vc2lzIGRpdntcclxuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gcGFkZGluZzogMTJweDtcclxuIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubXQtMjB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY3JlYXRle1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jcmVhdGUgaXtcclxuICBjb2xvcjogdmFyKC0tbWFpbik7XHJcbn1cclxuLnRhYmxlIHRoe1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbn1cclxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzVweCkge1xyXG4gIC5oaWRkZW4tc217XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmRpYWdub3Npc3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AllUserDiagnosisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-all-user-diagnosis',
                templateUrl: './all-user-diagnosis.component.html',
                styleUrls: ['./all-user-diagnosis.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "upTd":
/*!************************************************************!*\
  !*** ./src/app/admin/add-disease/add-disease.component.ts ***!
  \************************************************************/
/*! exports provided: AddDiseaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDiseaseComponent", function() { return AddDiseaseComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddDiseaseComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function AddDiseaseComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Chronic Disease Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddDiseaseComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddDiseaseComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Treatment Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddDiseaseComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Syndrome Is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddDiseaseComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.erroeMassage, " ");
} }
class AddDiseaseComponent {
    constructor(api) {
        this.api = api;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'auth-token': localStorage.getItem('login_token_admin')
            })
        };
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            chronic_disease: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            treatment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            syndrome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    ngOnInit() {
    }
    add(f) {
        this.api.addDisease(f.value, this.httpOptions).subscribe((data) => {
            if (data.status == true) {
                this.message = data.msg;
            }
            else {
                this.erroeMassage = data.msg;
            }
        });
    }
}
AddDiseaseComponent.ɵfac = function AddDiseaseComponent_Factory(t) { return new (t || AddDiseaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AddDiseaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddDiseaseComponent, selectors: [["app-add-disease"]], decls: 41, vars: 8, consts: [[1, "add-disease"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "col-md-12", "col-xs-12"], ["type", "text", "formControlName", "chronic_disease", "placeholder", "Type Chronic Disease", "name", "chronic_disease", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "rows", "3", "formControlName", "description", "placeholder", "Type Description", "name", "description", 1, "form-control"], ["type", "text", "rows", "3", "formControlName", "treatment", "placeholder", "Type Treatment", "name", "treatment", 1, "form-control"], ["for", "first"], ["type", "text", "rows", "3", "formControlName", "syndrome", "placeholder", "Type Syndrome", "name", "syndrome", 1, "form-control"], [1, "error", 2, "width", "100%"], [4, "ngIf"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-info"], [1, "error"]], template: function AddDiseaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddDiseaseComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddDiseaseComponent_Template_form_ngSubmit_7_listener() { return ctx.add(ctx.myGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "chronic_disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddDiseaseComponent_div_15_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddDiseaseComponent_div_22_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddDiseaseComponent_div_29_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Syndrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AddDiseaseComponent_div_36_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AddDiseaseComponent_div_38_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myGroup.get("chronic_disease").touched && (ctx.myGroup.get("chronic_disease").errors == null ? null : ctx.myGroup.get("chronic_disease").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myGroup.get("description").touched && (ctx.myGroup.get("description").errors == null ? null : ctx.myGroup.get("description").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myGroup.get("treatment").touched && (ctx.myGroup.get("treatment").errors == null ? null : ctx.myGroup.get("treatment").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myGroup.get("syndrome").touched && (ctx.myGroup.get("syndrome").errors == null ? null : ctx.myGroup.get("syndrome").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroeMassage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.myGroup.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  .add-disease[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #0f2075;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0;\r\n    font-size: 30px;\r\n    color:#0f2075;\r\n    font-weight: 700;\r\n  }\r\n  [class^='col-'][_ngcontent-%COMP%]{\r\n    margin-bottom: 25px;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    margin:10px 0;\r\n    margin-left: 15px;\r\n    padding: 10px 30px;\r\n    background-color:#0f2075;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n        color: rgb(240, 84, 84);\r\n    }\r\n  .alert[_ngcontent-%COMP%]{\r\n      font-weight: normal !important;\r\n      color:#0f2075;\r\n      width: 85%;\r\n      margin: 30px auto;\r\n    }\r\n  .c-bff[_ngcontent-%COMP%]{\r\n      color: #007bff !important;\r\n      cursor: pointer;\r\n    }\r\n  form[_ngcontent-%COMP%]{\r\n      width: 72%;\r\n      margin: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kaXNlYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNFO1FBQ0ksdUJBQXVCO0lBQzNCO0VBQ0E7TUFDRSw4QkFBOEI7TUFDOUIsYUFBYTtNQUNiLFVBQVU7TUFDVixpQkFBaUI7SUFDbkI7RUFDQTtNQUNFLHlCQUF5QjtNQUN6QixlQUFlO0lBQ2pCO0VBQ0Y7TUFDSSxVQUFVO01BQ1YsWUFBWTtFQUNoQiIsImZpbGUiOiJhZGQtZGlzZWFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5lcnJvciBkaXYsXHJcbi5lcnJvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5hZGQtZGlzZWFzZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwZjIwNzU7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjojMGYyMDc1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgW2NsYXNzXj0nY29sLSdde1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgbWFyZ2luOjEwcHggMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGYyMDc1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjogcmdiKDI0MCwgODQsIDg0KTtcclxuICAgIH1cclxuICAgIC5hbGVydHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjojMGYyMDc1O1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5jLWJmZntcclxuICAgICAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIGZvcm17XHJcbiAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddDiseaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-disease',
                templateUrl: './add-disease.component.html',
                styleUrls: ['./add-disease.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


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
/* harmony import */ var _admin_add_advices_add_advices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/add-advices/add-advices.component */ "TMVm");
/* harmony import */ var _admin_add_disease_add_disease_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/add-disease/add-disease.component */ "upTd");
/* harmony import */ var _admin_add_new_donner_add_new_donner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/add-new-donner/add-new-donner.component */ "boyb");
/* harmony import */ var _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/add-user/add-user.component */ "4pOR");
/* harmony import */ var _admin_advice_edit_advice_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/advice-edit/advice-edit.component */ "QLIp");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "o8Ft");
/* harmony import */ var _admin_edit_admin_info_edit_admin_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/edit-admin-info/edit-admin-info.component */ "EzaU");
/* harmony import */ var _admin_edit_disease_edit_disease_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/edit-disease/edit-disease.component */ "afDV");
/* harmony import */ var _admin_edit_user_id_edit_user_id_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/edit-user-id/edit-user-id.component */ "6lzo");
/* harmony import */ var _admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/login-admin/login-admin.component */ "aOxl");
/* harmony import */ var _admin_page_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/page/page.component */ "iaKE");
/* harmony import */ var _admin_show_advices_show_advices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/show-advices/show-advices.component */ "Y8KL");
/* harmony import */ var _admin_show_all_diseases_show_all_diseases_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/show-all-diseases/show-all-diseases.component */ "+WD/");
/* harmony import */ var _admin_show_all_donors_show_all_donors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/show-all-donors/show-all-donors.component */ "7Jwv");
/* harmony import */ var _admin_show_all_users_show_all_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/show-all-users/show-all-users.component */ "FLi5");
/* harmony import */ var _admin_show_disease_show_disease_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/show-disease/show-disease.component */ "CBJU");
/* harmony import */ var _components_add_donnar_add_donnar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-donnar/add-donnar.component */ "j8Fk");
/* harmony import */ var _components_all_donor_all_donor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/all-donor/all-donor.component */ "iyrl");
/* harmony import */ var _components_all_user_diagnosis_all_user_diagnosis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/all-user-diagnosis/all-user-diagnosis.component */ "rPTv");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/diseases/diseases.component */ "vtiC");
/* harmony import */ var _components_donner_search_donner_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/donner-search/donner-search.component */ "Fq/q");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");































const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"], data: { i: 0 } },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_28__["RegisterComponent"], data: { i: 1 } },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"], data: { i: 2 } },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"], data: { i: 3 } },
    { path: 'donor-search', component: _components_donner_search_donner_search_component__WEBPACK_IMPORTED_MODULE_23__["DonnerSearchComponent"], data: { i: 4 } },
    { path: 'add-donor', component: _components_add_donnar_add_donnar_component__WEBPACK_IMPORTED_MODULE_18__["AddDonnarComponent"], data: { i: 5 } },
    { path: 'diseases', component: _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_22__["DiseasesComponent"], data: { i: 6 } },
    { path: 'all-donors', component: _components_all_donor_all_donor_component__WEBPACK_IMPORTED_MODULE_19__["AllDonorComponent"], data: { i: 8 } },
    { path: 'all-diagnosis', component: _components_all_user_diagnosis_all_user_diagnosis_component__WEBPACK_IMPORTED_MODULE_20__["AllUserDiagnosisComponent"] },
    { path: 'contact-us', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"] },
    { path: 'admin', component: _admin_page_page_component__WEBPACK_IMPORTED_MODULE_12__["PageComponent"], children: [
            { path: 'dashboard', component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
            { path: 'edit-info', component: _admin_edit_admin_info_edit_admin_info_component__WEBPACK_IMPORTED_MODULE_8__["EditAdminInfoComponent"] },
            { path: 'add/advice', component: _admin_add_advices_add_advices_component__WEBPACK_IMPORTED_MODULE_2__["AddAdvicesComponent"] },
            { path: 'show/advice', component: _admin_show_advices_show_advices_component__WEBPACK_IMPORTED_MODULE_13__["ShowAdvicesComponent"] },
            { path: 'edit/advice/:id', component: _admin_advice_edit_advice_edit_component__WEBPACK_IMPORTED_MODULE_6__["AdviceEditComponent"] },
            { path: 'add/donor', component: _admin_add_new_donner_add_new_donner_component__WEBPACK_IMPORTED_MODULE_4__["AddNewDonnerComponent"] },
            { path: 'add/user', component: _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"] },
            { path: 'add/disease', component: _admin_add_disease_add_disease_component__WEBPACK_IMPORTED_MODULE_3__["AddDiseaseComponent"] },
            { path: 'show/disease/:id', component: _admin_show_disease_show_disease_component__WEBPACK_IMPORTED_MODULE_17__["ShowDiseaseComponent"] },
            { path: 'edit/disease/:id', component: _admin_edit_disease_edit_disease_component__WEBPACK_IMPORTED_MODULE_9__["EditDiseaseComponent"] },
            { path: 'edit/user', component: _admin_edit_user_id_edit_user_id_component__WEBPACK_IMPORTED_MODULE_10__["EditUserIdComponent"] },
            { path: 'show/users', component: _admin_show_all_users_show_all_users_component__WEBPACK_IMPORTED_MODULE_16__["ShowAllUsersComponent"] },
            { path: 'show/diseases', component: _admin_show_all_diseases_show_all_diseases_component__WEBPACK_IMPORTED_MODULE_14__["ShowAllDiseasesComponent"] },
            { path: 'show/donors', component: _admin_show_all_donors_show_all_donors_component__WEBPACK_IMPORTED_MODULE_15__["ShowAllDonorsComponent"] },
        ] },
    { path: 'admin/login', component: _admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_11__["LoginAdminComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtiC":
/*!***********************************************************!*\
  !*** ./src/app/components/diseases/diseases.component.ts ***!
  \***********************************************************/
/*! exports provided: DiseasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesComponent", function() { return DiseasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");








function DiseasesComponent_div_6_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-accordion", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-accordion-item", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiseasesComponent_div_6_span_8_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r9.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r2 = ctx_r12.index;
    const post_r1 = ctx_r12.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-header-" + i_r2)("aria-expanded", _r9.expanded)("aria-controls", "accordion-body-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 10, post_r1.description, 0, 100), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", _r9.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-body-" + i_r2)("aria-labelledby", "accordion-header-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 14, post_r1.description, 100), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r9.expanded ? " less" : " more...", " ");
} }
function DiseasesComponent_div_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.description);
} }
function DiseasesComponent_div_6_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-accordion", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-accordion-item", 13, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiseasesComponent_div_6_span_14_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r14.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r2 = ctx_r17.index;
    const post_r1 = ctx_r17.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-header-" + i_r2)("aria-expanded", _r14.expanded)("aria-controls", "accordion-body-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 10, post_r1.syndrome, 0, 200), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", _r14.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-body-" + i_r2)("aria-labelledby", "accordion-header-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 14, post_r1.syndrome, 200), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r14.expanded ? " less" : " more...", " ");
} }
function DiseasesComponent_div_6_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.syndrome);
} }
function DiseasesComponent_div_6_span_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-accordion", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-accordion-item", 13, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiseasesComponent_div_6_span_20_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r19.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r2 = ctx_r22.index;
    const post_r1 = ctx_r22.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-header-" + i_r2)("aria-expanded", _r19.expanded)("aria-controls", "accordion-body-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 10, post_r1.treatment, 0, 200), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", _r19.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "accordion-body-" + i_r2)("aria-labelledby", "accordion-header-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 14, post_r1.treatment, 200), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r19.expanded ? " less" : " more...", " ");
} }
function DiseasesComponent_div_6_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.treatment);
} }
function DiseasesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DiseasesComponent_div_6_span_8_Template, 12, 17, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DiseasesComponent_div_6_span_9_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Syndrome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DiseasesComponent_div_6_span_14_Template, 12, 17, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DiseasesComponent_div_6_span_15_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Treatment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DiseasesComponent_div_6_span_20_Template, 12, 17, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DiseasesComponent_div_6_span_21_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.chronic_disease, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (post_r1.description == null ? null : post_r1.description.length) > 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (post_r1.description == null ? null : post_r1.description.length) < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (post_r1.syndrome == null ? null : post_r1.syndrome.length) > 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (post_r1.syndrome == null ? null : post_r1.syndrome.length) < 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (post_r1.treatment == null ? null : post_r1.treatment.length) > 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (post_r1.treatment == null ? null : post_r1.treatment.length) < 200);
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class DiseasesComponent {
    constructor(api) {
        this.api = api;
        this.page = 1;
        this.count = 0;
        this.tableSize = 1;
        this.showLess = false;
    }
    ngOnInit() {
        this.fetchPosts();
    }
    fetchPosts() {
        this.api.getDisease().subscribe((data) => {
            this.disease = data.Chronic_Diseases;
            console.log(this.disease);
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
}
DiseasesComponent.ɵfac = function DiseasesComponent_Factory(t) { return new (t || DiseasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
DiseasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiseasesComponent, selectors: [["app-diseases"]], decls: 15, vars: 9, consts: [[1, "all-disease"], [1, "container"], [1, "disease"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-20"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "pageChange"], [1, "current-page"], [1, "fa", "fa-duotone", "fa-bacteria"], [1, "descrebtion"], [4, "ngIf"], [1, "syndrome"], [1, "treatment"], [1, "example-accordion"], ["role", "button", "tabindex", "0", 1, "example-accordion-item"], ["accordionItem3", "cdkAccordionItem"], [1, "example-accordion-item-header", 3, "click"], ["role", "region", 1, "example-accordion-item-body"], [1, "example-accordion-item-description", "text-primary"], ["accordionItem1", "cdkAccordionItem"], ["accordionItem2", "cdkAccordionItem"]], template: function DiseasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DiseasesComponent_div_6_Template, 22, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pagination-controls", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DiseasesComponent_Template_pagination_controls_pageChange_9_listener($event) { return ctx.onTableDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " current page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, ctx.disease, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, ctx.tableSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordion"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordionItem"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".all-disease[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 0px;\r\n  background-image: url('filling-medical-record_1098-18239.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  padding: 70px 0;\r\n  min-height: calc(100vh - 80px);\r\n  margin-top: 80px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  background-color: rgba(45, 54, 99, 0.7);\r\n  padding: 30px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n  .pagination {\r\n  margin-top: 20px;\r\n  justify-content: center !important;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 30px 0 40px;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px black;\r\n  color: white;\r\n}\r\n\r\n.current-page[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin-top: 3px;\r\n}\r\n\r\n.current-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #65e6e2;\r\n}\r\n\r\n.disease[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n\r\n.disease[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 12px;\r\n  margin-bottom: 15px;\r\n  border-radius: 4px;\r\n  color: var(--black);\r\n  text-align: left;\r\n}\r\n\r\n.mt-20[_ngcontent-%COMP%] {\r\n  color: white;\r\n  width: 85%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.disease[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: var(--main);\r\n  text-transform: capitalize;\r\n  font-size: 18px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.disease[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--black);\r\n  max-width: 650px;\r\n}\r\n\r\n.disease[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: var(--black);\r\n  margin: 25px 0;\r\n  text-align: left;\r\n  text-transform: capitalize;\r\n  text-shadow: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.disease[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  margin-left: 15px;\r\n}\r\n\r\n  .ngx-pagination li:hover {\r\n  background-color: var(--black) !important;\r\n}\r\n\r\n  .ngx-pagination .current {\r\n  background-color: var(--black) !important;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n  ul {\r\n  padding: 0 !important;\r\n}\r\n\r\n@media (max-width:575px) {\r\n  .all-disease[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    position: relative;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 10px;\r\n  }\r\n\r\n    .ngx-pagination a {\r\n    padding: .1rem .2rem !important;\r\n    font-size: 13px;\r\n  }\r\n\r\n  .current-page[_ngcontent-%COMP%], .pagination-previous[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 13px !important;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n    margin: 20px 0;\r\n  }\r\n\r\n  .d-flex.mt-20[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .disease[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .disease[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 1px;\r\n  }\r\n\r\n  .disease[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .disease[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2Vhc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDhEQUFxRjtFQUNyRixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQixlQUFlO0VBQ2pCOztFQUVBOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoiZGlzZWFzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtZGlzZWFzZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9maWxsaW5nLW1lZGljYWwtcmVjb3JkXzEwOTgtMTgyMzkuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcGFkZGluZzogNzBweCAwO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCA1NCwgOTksIDAuNyk7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBhZ2luYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDMwcHggMCA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VycmVudC1wYWdlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4uY3VycmVudC1wYWdlIHNwYW4ge1xyXG4gIGNvbG9yOiAjNjVlNmUyO1xyXG59XHJcblxyXG4uZGlzZWFzZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5kaXNlYXNlPmRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tdC0yMCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmRpc2Vhc2UgaDQge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZGlzZWFzZSBwIHtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIG1heC13aWR0aDogNjUwcHg7XHJcbn1cclxuXHJcbi5kaXNlYXNlIGgyIHtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIG1hcmdpbjogMjVweCAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kaXNlYXNlPmRpdj5kaXYge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHVsIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU3NXB4KSB7XHJcbiAgLmFsbC1kaXNlYXNlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBhIHtcclxuICAgIHBhZGRpbmc6IC4xcmVtIC4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVudC1wYWdlLFxyXG4gIC5wYWdpbmF0aW9uLXByZXZpb3VzIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcblxyXG4gIC5kLWZsZXgubXQtMjAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZGlzZWFzZSBoMiB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcblxyXG4gIC5kaXNlYXNlIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICB9XHJcblxyXG4gIC5kaXNlYXNlIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRpc2Vhc2U+ZGl2PmRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiseasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-diseases',
                templateUrl: './diseases.component.html',
                styleUrls: ['./diseases.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "xaSU":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchPipe {
    transform(blogs, word) {
        return blogs.filter((blogs) => {
            return blogs.title.toLowerCase().includes(word.toLowerCase())
                || blogs.describtion.toLowerCase().includes(word.toLowerCase());
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


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