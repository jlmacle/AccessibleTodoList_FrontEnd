(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jl/Documents/ATL/AccessibleTodoList_FrontEnd/src/main.ts */"zUnb");


/***/ }),

/***/ "AvF/":
/*!*******************************************************************!*\
  !*** ./src/app/components/TodoListPage/TodoListPage.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListPageComponent", function() { return TodoListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/item */ "r8SE");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/category */ "HLRD");
/* harmony import */ var _services_entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/entry.service */ "qZHl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _around_sdgs_communication_around_sdgs_communication_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../around-sdgs-communication/around-sdgs-communication.component */ "s7kU");










function TodoListPageComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "category", category_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.name, " ");
} }
function TodoListPageComponent_li_28_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListPageComponent_li_28_li_10_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r5 = ctx.$implicit; const category_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteItem(item_r5.id, category_r3.id); })("keydown.enter", function TodoListPageComponent_li_28_li_10_Template_img_keydown_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r5 = ctx.$implicit; const category_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteItem(item_r5.id, category_r3.id); })("keydown.space", function TodoListPageComponent_li_28_li_10_Template_img_keydown_space_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r5 = ctx.$implicit; const category_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteItem(item_r5.id, category_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", item_r5.name, "", item_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function TodoListPageComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListPageComponent_li_28_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const category_r3 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.deleteCategory(category_r3.id); })("keydown.enter", function TodoListPageComponent_li_28_Template_img_keydown_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const category_r3 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteCategory(category_r3.id); })("keydown.space", function TodoListPageComponent_li_28_Template_img_keydown_space_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const category_r3 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deleteCategory(category_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListPageComponent_li_28_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const category_r3 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.foldUnfoldCategory(category_r3.id); })("keydown.enter", function TodoListPageComponent_li_28_Template_span_keydown_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const category_r3 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.foldUnfoldCategory(category_r3.id); })("keydown.space", function TodoListPageComponent_li_28_Template_span_keydown_space_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const category_r3 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.foldUnfoldCategory(category_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TodoListPageComponent_li_28_li_10_Template, 4, 4, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", category_r3.name, "", category_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "#", ctx_r1.map_category_nextCategory.get(category_r3).name, "", ctx_r1.map_category_nextCategory.get(category_r3).id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "plus_sign", category_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "itemsForCategory", category_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items_sorted_by_category.get(category_r3.id));
} }
class TodoListPageComponent {
    constructor(entryService, router) {
        this.entryService = entryService;
        this.router = router;
        //used to define a new category
        this.category_input_name = "";
        //used to define a new item
        this.selected_category_id = 1;
        this.item_input_name = "";
        this.all_items = [];
        this.items_sorted_by_category = new Map();
        //select states
        this.previously_selected_id = 0;
    }
    ngOnInit() {
        this.getCategories();
        this.getItems();
    }
    ngOnChanges(changes) {
        this.getItems();
        this.createCategoryMap();
    }
    addCategory() {
        //Creating a category object that will be later on translated to JSON and transmitted in an HTTP request.
        let category = new _models_category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
        //category.id is left undefined
        category.name = this.category_input_name;
        if (this.category_input_name != "") {
            this.entryService.addCategory(category).then(data => {
                console.log("addCategory() called; category object:", data.id + " , " + data.name);
                this.getCategories();
                this.category_input_name = "";
            }, error => { console.log("Issue while adding a category:", error); });
        }
    }
    getCategories() {
        this.entryService.getCategories().then(data => {
            this.categories = data;
            console.log("Getting the categories from the promise.");
            this.createCategoryMap();
            console.log("Category map created.");
        }, error => { console.log("Issue with getting the categories from the promise: ", error); });
    }
    createCategoryMap() {
        this.map_category_nextCategory = new Map();
        let categoryArray = new Array();
        let index = 0;
        this.categories.forEach(category => {
            categoryArray.push(category);
        });
        for (let i = 0; i < categoryArray.length; i++) {
            if (i < (categoryArray.length - 1)) {
                this.map_category_nextCategory.set(categoryArray[i], categoryArray[i + 1]);
            }
            else {
                this.map_category_nextCategory.set(categoryArray[i], categoryArray[0]);
            }
            index++;
        }
        ;
        console.log("this.map_category_nextCategory: ", this.map_category_nextCategory);
    }
    deleteCategory(id) {
        this.entryService.deleteCategory(id).then(data => {
            console.log("Category deleted. id:" + id);
            //Calling on getCategories() to display the updated list.
            this.getCategories();
        }, error => { console.log("Issue while deleting a category: ", error); });
    }
    foldUnfoldCategory(category_id) {
        let toggledElement = document.getElementById("itemsForCategory" + category_id);
        if (toggledElement.style.getPropertyValue('visibility') == 'hidden') {
            this.unfoldCategory(category_id);
        }
        else {
            this.foldCategory(category_id);
        }
    }
    unfoldCategory(category_id) {
        let toggledElement = document.getElementById("itemsForCategory" + category_id);
        toggledElement.style.setProperty('visibility', "visible");
        toggledElement.style.setProperty("display", "block");
        let iconForTogglingElement = document.getElementById("plus_sign" + category_id);
        iconForTogglingElement.setAttribute("aria-expanded", "true");
    }
    foldCategory(category_id) {
        let toggledElement = document.getElementById("itemsForCategory" + category_id);
        toggledElement.style.setProperty('visibility', "hidden");
        toggledElement.style.setProperty("display", "none");
        let iconForTogglingElement = document.getElementById("plus_sign" + category_id);
        iconForTogglingElement.setAttribute("aria-expanded", "false");
    }
    setAriaExpandedToTrue(elementId) {
        let element = document.getElementById(elementId);
        element.setAttribute("aria-expanded", "true");
    }
    setAriaExpandedTFalse(elementId) {
        let element = document.getElementById(elementId);
        element.setAttribute("aria-expanded", "false");
    }
    addItem(categoryId) {
        console.log("Add item for the category: " + categoryId);
        let item = new src_app_models_item__WEBPACK_IMPORTED_MODULE_1__["Item"]();
        item.id = 1; //weakness in the code/understanding.
        item.name = this.item_input_name;
        item.categoryId = categoryId;
        if (item.name != "") {
            this.entryService.addItem(item, categoryId).then(data => {
                console.log("Item Added to category id: " + categoryId);
                this.setAriaExpandedToTrue("plus_sign" + categoryId);
                this.getItems();
                this.router.navigate(['.']);
                this.item_input_name = '';
                //resetting default category to Uncategorized
                this.selected_category_id = 1;
            }, error => { console.log("Error while adding an item: ", error); });
        }
    }
    getItems() {
        let goal = "the list of items.";
        this.entryService.getItems().then((data) => {
            this.all_items = data;
            console.log("Getting the list of items:");
            console.log("Get items: Display of the list of items. Found: " + this.all_items.length);
            this.all_items.forEach(element => {
                console.log("Element in the list", "id: " + element.id, "name: " + element.name, "categoryId: " + element.categoryId);
            });
            //Sorting by category id  and storing the items in separated arrays.
            this.items_sorted_by_category = new Map();
            this.all_items.forEach(item => {
                if (this.items_sorted_by_category.has(item.categoryId)) {
                    //Getting the array of items already existing for item.categoryId
                    (this.items_sorted_by_category.get(item.categoryId)).push(item);
                }
                else {
                    //Creating a new structure, and adding 
                    let items_for_one_category = [];
                    items_for_one_category.push(item);
                    (this.items_sorted_by_category).set(item.categoryId, items_for_one_category);
                }
            });
            console.log("this.items_sorted_by_category", this.items_sorted_by_category);
        }, (error) => { console.log("Error getting " + goal) + " : " + error; });
    }
    deleteItem(item_id, category_id) {
        this.entryService.deleteItem(item_id).then(data => {
            console.log("Item deleted. id:" + item_id);
            //Calling on getItems() to display the updated list.
            this.getItems();
            this.unfoldCategory(category_id);
        }, error => { console.log("Issue while deleting a category: ", error); });
    }
    mark_selected(selected_category_id) {
        console.log("mark_selected");
        let optionElem = document.getElementById("category" + this.previously_selected_id);
        optionElem.setAttribute("aria-selected", "false");
        optionElem = document.getElementById("category" + selected_category_id);
        optionElem.setAttribute("aria-selected", "true");
        let selectElem = document.getElementById("category-to-select-field");
        selectElem.setAttribute("aria-activedescendant", '"' + selected_category_id + '"');
        this.previously_selected_id = selected_category_id;
    }
}
TodoListPageComponent.ɵfac = function TodoListPageComponent_Factory(t) { return new (t || TodoListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TodoListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListPageComponent, selectors: [["app-TodoListPage"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 50, vars: 5, consts: [["id", "display-area"], ["id", "addition-area"], ["for", "new-category-form"], [1, "h1-form", "border-02"], ["id", "new-category-form"], ["for", "new-category-input-field", 1, "text-large"], ["role", "textbox", "aria-label", "Name of the category to add, (aria label) ", "aria-required", "true", "type", "text", "id", "new-category-input-field", "name", "new-category-input-field", "form", "new-category-form", "minlength", "1", "autocomplete", "off", 1, "text-large", "border-04", "border-radius-2", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "add-category-button", "value", "Add the category", 1, "text-large", "border-radius-2", "border-03", 3, "click"], ["for", "newItemForm"], ["id", "newItemForm"], ["role", "listbox", "aria-label", "Existing categories, (aria label)", "aria-required", "true", "aria-expanded", "false", "aria-activedescendant", "0", "id", "category-to-select-field", "name", "category-to-select-field", 1, "text-large", "border-03", 3, "ngModel", "ngModelChange", "click", "change", "keydown.enter", "keydown.space"], ["role", "listitem", "aria-disabled", "true", "value", "0", "default", "", "id", "category0"], ["role", "listitem", "aria-selected", "false", 3, "value", "id", 4, "ngFor", "ngForOf"], ["for", "item-input-name", 1, "text-large"], ["role", "textbox", "aria-label", "Name of the item to add, (aria label)", "aria-required", "true", "type", "text", "id", "item-input-name", "name", "item-input-name", "autocomplete", "off", 1, "text-large", "border-03", "border-radius-2", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "add-item-button", "value", "Add the item to the category", 1, "text-large", "border-radius-2", "border-03", 3, "click"], ["id", "displayCategories"], ["class", "category no-list-style", "name", "aCategory", 3, "id", "value", 4, "ngFor", "ngForOf"], ["aria-label", "(Hidden), Some communication about permaculture, (aria label)", "href", "#sdg_com"], ["aria-label", "(Hidden), Navigation menu,  (aria label)", "href", "#navbar"], ["id", "credits"], [1, "border-03"], ["tabindex", "0"], ["role", "text", "aria-label", "Page where the garbage can icon comes from, (aria label)", "href", "https://search.creativecommons.org/photos/c864d368-a8ef-4833-9a97-3a87c651e009", 2, "color", "black"], ["alt", "Icon representing a garbage can. (alt text)", "src", "./assets/pictures/Ic_delete_48px.png", 1, "icon-garbage-can-small"], ["aria-label", "Page where the plus sign icon comes from, (aria label)", "href", "https://search.creativecommons.org/photos/176fcf70-baf4-4537-a841-0591fb094d12", 2, "color", "black"], ["alt", "Icon representing a addition sign.  (alt text)", "src", "./assets/pictures/256px-Font_Awesome_5_solid_plus-circle.svg.png", 1, "icon-plus-small"], ["href", "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/"], ["href", "https://creativecommons.org/licenses/by/4.0/?ref=ccsearch&atype=rich"], ["role", "listitem", "aria-selected", "false", 3, "value", "id"], ["name", "aCategory", 1, "category", "no-list-style", 3, "id", "value"], ["aria-label", "(Hidden), Click to reach the next category or the first \n                    \tif you reached the end of the list (aria label)", "aria-relevant", "text", 3, "href"], ["role", "button", "alt", "Trash can icon used to suppress an empty category (alt text)", "tabindex", "0", "aria-label", "Trash can icon used to suppress an item in a category  (aria-label)", "name", "anIconToDeleteACategory", "src", "./assets/pictures/Ic_delete_48px.png", 1, "icon-garbage-can", "border-02", 3, "click", "keydown.enter", "keydown.space"], [1, "foldUnfoldClickArea", 3, "click", "keydown.enter", "keydown.space"], ["role", "button", "aria-expanded", "false", "aria-label", "Plus sign icon used to display or hide the items of a category  (aria label)", "alt", "Plus sign icon used to display or hide the items of a category  (alt text)", "tabindex", "0", "src", "./assets/pictures/256px-Font_Awesome_5_solid_plus-circle.svg.png", 1, "icon-plus", "border-02", 3, "id"], ["role", "listitem", "tabindex", "0", 1, "border-02"], [1, "toggle-item", 3, "id"], ["class", "no-list-style", "name", "anItem", 3, "id", "value", 4, "ngFor", "ngForOf"], ["name", "anItem", 1, "no-list-style", 3, "id", "value"], ["role", "button", "aria-label", "Trash can icon used to suppress an item in a category  (aria-label)", "alt", "Trash can icon used to suppress an item in a category  (alt text)", "tabindex", "0", "name", "anIconToDeleteAnItem", "src", "./assets/pictures/Ic_delete_48px.png", 1, "icon-garbage-can", "border-02", 3, "click", "keydown.enter", "keydown.space"], ["role", "listitem", "tabindex", "0", 1, "itemName", "border-02"]], template: function TodoListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please use this form to add a new category.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name of the category to add: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.category_input_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListPageComponent_Template_input_click_11_listener() { return ctx.addCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The next form is for adding a new item.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListPageComponent_Template_select_ngModelChange_16_listener($event) { return ctx.selected_category_id = $event; })("click", function TodoListPageComponent_Template_select_click_16_listener() { return ctx.mark_selected(ctx.selected_category_id); })("change", function TodoListPageComponent_Template_select_change_16_listener() { return ctx.mark_selected(ctx.selected_category_id); })("keydown.enter", function TodoListPageComponent_Template_select_keydown_enter_16_listener() { return ctx.mark_selected(ctx.selected_category_id); })("keydown.space", function TodoListPageComponent_Template_select_keydown_space_16_listener() { return ctx.mark_selected(ctx.selected_category_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Please select an option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TodoListPageComponent_option_19_Template, 2, 3, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name of the item to add:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListPageComponent_Template_input_ngModelChange_23_listener($event) { return ctx.item_input_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListPageComponent_Template_input_click_25_listener() { return ctx.addItem(ctx.selected_category_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TodoListPageComponent_li_28_Template, 11, 9, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Credits:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " The trash can icon by Google Inc is licensed under a Creative Commons BY 4.0 license. No changes were made to the icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " The plus sign icon by Font Awesome is licensed under a Creative Commons BY 4.0 license. No changes were made to the icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Source of the retriever puppies picture, by Chevanon photography. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Link to the description of the Creative Commons BY 4.0 License ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-around-sdgs-communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category_input_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected_category_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item_input_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _around_sdgs_communication_around_sdgs_communication_component__WEBPACK_IMPORTED_MODULE_8__["AroundSDGsCommunicationComponent"]], styles: ["#display-area[_ngcontent-%COMP%]\n{   \n    font-size: xx-large;\n    height: -webkit-max-content;\n    height: max-content;\n    width: auto;\n}\n\n#addition-area[_ngcontent-%COMP%]\n{\n    text-align: center;\n    font-size: 2em;\n}\n\n.h1-form[_ngcontent-%COMP%]\n{\n    font-size:x-large;\n    font-weight: normal;    \n    padding-left: 1em;    \n    margin-bottom: 0;\n}\n\nlabel[_ngcontent-%COMP%]\n{    \n    text-align: left;\n    color: rgb(0,20,0,1);            \n    width: auto;    \n}\n\n.category[_ngcontent-%COMP%]\n{\n    line-height: 2em;\n}\n\nli.no-list-style[_ngcontent-%COMP%]\n{\n    list-style-type:none;\n}\n\n.icon-garbage-can[_ngcontent-%COMP%]\n{\n    width:1.5em;\n    height:1.5em;   \n    position:relative;\n    bottom:-0.3em; \n}\n\n.icon-garbage-can[_ngcontent-%COMP%]:focus\n{\n    position:relative;\n    bottom:-0.5em;\n}\n\n.icon-garbage-can-small[_ngcontent-%COMP%]\n{\n    width:1em;\n    height:1em;\n    position:relative;\n    left:-0.1em;\n    bottom:-0.1em;\n}\n\n.icon-plus[_ngcontent-%COMP%]\n{\n    width:0.8em;\n    height:0.8em;  \n    position: relative;\n    left:-0.4em;  \n}\n\n.icon-plus[_ngcontent-%COMP%]:focus\n{\n    position:relative;\n    bottom:-0.2em;\n}\n\n.icon-plus-small[_ngcontent-%COMP%]\n{\n    width:0.8em;\n    height:0.8em;\n    position:relative;    \n    bottom:-0.1em;    \n    margin-right: 0.2em;\n}\n\n.toggle-item[_ngcontent-%COMP%]\n{    \n    visibility: visible;\n    display: block;\n    position:relative;\n    left:2.3em;\n}\n\n#credits[_ngcontent-%COMP%]\n{\n    font-family: Arial, sans-serif;\n    font-size: medium!important;    \n    position: relative;\n    left:1em;\n}\n\n#credits[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\n{\n\tfont-size: x-large!important; \n}\n\n#credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] \n{\n    color:black;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;    \n}\n\n.retriever-picture-credit[_ngcontent-%COMP%]\n{\n    position: relative;\n    left:0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvZG9MaXN0UGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLDJCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTs7Q0FFQyw0QkFBNEI7QUFDN0I7O0FBR0E7O0lBRUksV0FBVztJQUNYLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJUb2RvTGlzdFBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4jZGlzcGxheS1hcmVhXG57ICAgXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4jYWRkaXRpb24tYXJlYVxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLmgxLWZvcm1cbntcbiAgICBmb250LXNpemU6eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgICAgXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxubGFiZWxcbnsgICAgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogcmdiKDAsMjAsMCwxKTsgICAgICAgICAgICBcbiAgICB3aWR0aDogYXV0bzsgICAgXG59XG5cbi5jYXRlZ29yeVxue1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5cbmxpLm5vLWxpc3Qtc3R5bGVcbntcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbn1cblxuLmljb24tZ2FyYmFnZS1jYW5cbntcbiAgICB3aWR0aDoxLjVlbTtcbiAgICBoZWlnaHQ6MS41ZW07ICAgXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYm90dG9tOi0wLjNlbTsgXG59XG5cbi5pY29uLWdhcmJhZ2UtY2FuOmZvY3VzXG57XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYm90dG9tOi0wLjVlbTtcbn1cblxuLmljb24tZ2FyYmFnZS1jYW4tc21hbGxcbntcbiAgICB3aWR0aDoxZW07XG4gICAgaGVpZ2h0OjFlbTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0Oi0wLjFlbTtcbiAgICBib3R0b206LTAuMWVtO1xufVxuXG4uaWNvbi1wbHVzXG57XG4gICAgd2lkdGg6MC44ZW07XG4gICAgaGVpZ2h0OjAuOGVtOyAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6LTAuNGVtOyAgXG59XG5cbi5pY29uLXBsdXM6Zm9jdXNcbntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3R0b206LTAuMmVtO1xufVxuXG4uaWNvbi1wbHVzLXNtYWxsXG57XG4gICAgd2lkdGg6MC44ZW07XG4gICAgaGVpZ2h0OjAuOGVtO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlOyAgICBcbiAgICBib3R0b206LTAuMWVtOyAgICBcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xufVxuXG4udG9nZ2xlLWl0ZW1cbnsgICAgXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0OjIuM2VtO1xufVxuXG4jY3JlZGl0c1xue1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IG1lZGl1bSFpbXBvcnRhbnQ7ICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OjFlbTtcbn1cblxuI2NyZWRpdHMgaDFcbntcblx0Zm9udC1zaXplOiB4LWxhcmdlIWltcG9ydGFudDsgXG59XG5cblxuI2NyZWRpdHMgYSBcbntcbiAgICBjb2xvcjpibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTsgICAgXG59XG5cblxuLnJldHJpZXZlci1waWN0dXJlLWNyZWRpdFxue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OjAuM2VtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-TodoListPage',
                templateUrl: './TodoListPage.component.html',
                styleUrls: ['./TodoListPage.component.css']
            }]
    }], function () { return [{ type: _services_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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

/***/ "HLRD":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Accessible To-do List';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* A Simple Accessible To-Do List *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#title[_ngcontent-%COMP%]{\n    font-family: Helvetica, Verdana, Arial, sans-serif;\n    \n    text-align: center;\n    font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrREFBa0QsQ0FBQyxzQ0FBc0M7SUFDekYsd0ZBQXdGO0lBQ3hGLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiN0aXRsZXtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjsvKiBDaG9pY2Ugb2YgZHlzbGV4aWEgZnJpZW5kbHkgZm9udHMgKi9cbiAgICAvKiBodHRwOi8vZHlzbGV4aWFoZWxwLnVtaWNoLmVkdS9zaXRlcy9kZWZhdWx0L2ZpbGVzL2dvb2RfZm9udHNfZm9yX2R5c2xleGlhX3N0dWR5LnBkZiAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNlbTtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_TodoListPage_TodoListPage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TodoListPage/TodoListPage.component */ "AvF/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_around_sdgs_communication_around_sdgs_communication_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/around-sdgs-communication/around-sdgs-communication.component */ "s7kU");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");







//imports used while using mat-form-field






const routes = [
    { path: '.', component: _components_TodoListPage_TodoListPage_component__WEBPACK_IMPORTED_MODULE_6__["TodoListPageComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_TodoListPage_TodoListPage_component__WEBPACK_IMPORTED_MODULE_6__["TodoListPageComponent"],
        _components_around_sdgs_communication_around_sdgs_communication_component__WEBPACK_IMPORTED_MODULE_10__["AroundSDGsCommunicationComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_TodoListPage_TodoListPage_component__WEBPACK_IMPORTED_MODULE_6__["TodoListPageComponent"],
                    _components_around_sdgs_communication_around_sdgs_communication_component__WEBPACK_IMPORTED_MODULE_10__["AroundSDGsCommunicationComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 0, consts: [["id", "navbar"], [1, "navbar"], ["href", "#addition-area"], ["href", "#credits"], ["href", "#sdg_com"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " To-Do List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Credits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Works you might like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#navbar[_ngcontent-%COMP%]\n{\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-content: center;\n    align-items: stretch;\n\n    list-style-type: none;\n    background-color:#eee;\n    height: 2em;\n    margin:0;\n}\n\nli.navbar[_ngcontent-%COMP%]\n{\n    flex-grow:1;    \n\n    text-align: center;\n    font-weight: 700;\n    font-size: larger;    \n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] \n{\n    color:black;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixvQkFBb0I7O0lBRXBCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xuICAgIGhlaWdodDogMmVtO1xuICAgIG1hcmdpbjowO1xufVxuXG5saS5uYXZiYXJcbntcbiAgICBmbGV4LWdyb3c6MTsgICAgXG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGxhcmdlcjsgICAgXG59XG5cbi5uYXZiYXIgYSBcbntcbiAgICBjb2xvcjpibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mHHL":
/*!***************************************!*\
  !*** ./src/environments/variables.ts ***!
  \***************************************/
/*! exports provided: Variables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variables", function() { return Variables; });
class Variables {
}
Variables.base_url = "http://127.0.0.1:8080"; //CORS issue for omitting http://    


/***/ }),

/***/ "qZHl":
/*!*******************************************!*\
  !*** ./src/app/services/entry.service.ts ***!
  \*******************************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/variables */ "mHHL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class EntryService {
    constructor(http) {
        this.http = http;
    }
    addCategory(category) {
        let url = _environments_variables__WEBPACK_IMPORTED_MODULE_1__["Variables"].base_url + "/category";
        console.log("HTTP POST to: " + url);
        return this.http.post(url, category).toPromise();
    }
    getCategories() {
        return this.http.get(_environments_variables__WEBPACK_IMPORTED_MODULE_1__["Variables"].base_url + "/categories").toPromise();
    }
    deleteCategory(id) {
        let url = _environments_variables__WEBPACK_IMPORTED_MODULE_1__["Variables"].base_url + "/category/" + id;
        console.log("HTTP DELETE to: " + url);
        return this.http.delete(url).toPromise();
    }
    addItem(item, categoryId) {
        let url = _environments_variables__WEBPACK_IMPORTED_MODULE_1__["Variables"].base_url + "/item/" + categoryId;
        console.log("HTTP POST to: " + url);
        console.log("Item data: Item id:" + item.id + ", item name: " + item.name + ", item category id" + categoryId);
        return this.http.post(url, item).toPromise();
    }
    getItems() {
        let url = _environments_variables__WEBPACK_IMPORTED_MODULE_1__["Variables"].base_url + "/items";
        console.log("HTTP GET to: " + url);
        return this.http.get(url).toPromise();
    }
    deleteItem(id) {
        let url = _environments_variables__WEBPACK_IMPORTED_MODULE_1__["Variables"].base_url + "/item/" + id;
        console.log("HTTP DELETE to: " + url);
        return this.http.delete(url).toPromise();
    }
}
EntryService.ɵfac = function EntryService_Factory(t) { return new (t || EntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EntryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EntryService, factory: EntryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "r8SE":
/*!********************************!*\
  !*** ./src/app/models/item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
}


/***/ }),

/***/ "s7kU":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/around-sdgs-communication/around-sdgs-communication.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AroundSDGsCommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroundSDGsCommunicationComponent", function() { return AroundSDGsCommunicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AroundSDGsCommunicationComponent {
    constructor() { }
    ngOnInit() {
    }
    toggleBackground() {
        let bodyElement = document.getElementById('body');
        let displayAreaElement = document.getElementById("display-area");
        console.log('bodyElement.style.getPropertyValue("background-image"): *' + bodyElement.style.getPropertyValue("background-image") + "*");
        if (bodyElement.style.getPropertyValue("background-image").includes("photography")) {
            displayAreaElement.style.removeProperty("background");
            bodyElement.style.removeProperty("background-image");
            bodyElement.style.removeProperty("background-size");
        }
        else {
            displayAreaElement.style.setProperty("background", "rgb(255,255,255,0.5)");
            bodyElement.style.setProperty("background-image", "url(./assets/pictures/pexels-chevanon-photography-1108099.jpg)");
            bodyElement.style.setProperty("background-size", "cover");
        }
    }
}
AroundSDGsCommunicationComponent.ɵfac = function AroundSDGsCommunicationComponent_Factory(t) { return new (t || AroundSDGsCommunicationComponent)(); };
AroundSDGsCommunicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AroundSDGsCommunicationComponent, selectors: [["app-around-sdgs-communication"]], decls: 15, vars: 0, consts: [["id", "sdg_com"], [1, "border-03"], ["target", "_blank", "href", "https://www.youtube.com/watch?v=MYMIbLoxW8U&feature=youtu.be", "rel", "noopener"], ["target", "_blank", "href", "https://www.youtube.com/watch?v=EFFFt6G6YNU", "rel", "noopener"], ["tabindex", "_blank", "href", "https://sharethemeal.org", "rel", "noopener"], ["aria-label", "(Hidden), Navigation menu, (aria label)", "href", "#navbar"], ["role", "doc-dedication", "aria-roledescription", "Work dedicated to my children.", "tabindex", "0", "id", "dedicace", 3, "click"], ["aria-label", "Link to go to the navigation menu  (aria label)", "href", "#navbar"]], template: function AroundSDGsCommunicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Works you might like to know about: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Use of permaculture in a dry place of Senegal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Use of permaculture in a dry place of Jordan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Supporting the World Food Programme, with as little as 80 cents for a meal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundSDGsCommunicationComponent_Template_div_click_12_listener() { return ctx.toggleBackground(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " For the lovelies.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 7);
    } }, styles: ["#sdg_com[_ngcontent-%COMP%]\n{\n    font-size: medium;\n    position: relative;\n    left: 1em;\n    bottom:1em;\n    top:1em;\n}\n\n#sdg_com[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\n{\n\tfont-size: x-large!important; \n}\n\n#sdg_com[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\n{\n    color:black;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n}\n\n#dedicace[_ngcontent-%COMP%]\n{    \n    font-size: medium!important;\n    text-align: right;\n    position: relative;\n    top:2em;\n    right:1em;    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyb3VuZC1zZGdzLWNvbW11bmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsT0FBTztBQUNYOztBQUVBOztDQUVDLDRCQUE0QjtBQUM3Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztBQUNiIiwiZmlsZSI6ImFyb3VuZC1zZGdzLWNvbW11bmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZGdfY29tXG57XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDFlbTtcbiAgICBib3R0b206MWVtO1xuICAgIHRvcDoxZW07XG59XG5cbiNzZGdfY29tIGgxXG57XG5cdGZvbnQtc2l6ZTogeC1sYXJnZSFpbXBvcnRhbnQ7IFxufVxuXG4jc2RnX2NvbSBhXG57XG4gICAgY29sb3I6YmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG59XG5cbiNkZWRpY2FjZVxueyAgICBcbiAgICBmb250LXNpemU6IG1lZGl1bSFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDoyZW07XG4gICAgcmlnaHQ6MWVtOyAgICBcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AroundSDGsCommunicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-around-sdgs-communication',
                templateUrl: './around-sdgs-communication.component.html',
                styleUrls: ['./around-sdgs-communication.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _components_TodoListPage_TodoListPage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TodoListPage/TodoListPage.component */ "AvF/");





const routes = [
    { path: '', component: _components_TodoListPage_TodoListPage_component__WEBPACK_IMPORTED_MODULE_2__["TodoListPageComponent"] }
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