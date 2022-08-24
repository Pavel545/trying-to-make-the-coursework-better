/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./scr/js/style/style.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./scr/js/style/style.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable selector-class-pattern */\n/* stylelint-disable declaration-block-no-duplicate-properties */\n@charset \"UTF-8\";\n\n.main {\n    height: 774px;\n    background: #004980;\n    display: box;\n    display: flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.complexity {\n    color: c2f5ff;\n    width: 480px;\n    height: 459px;\n    background: #c2f5ff;\n    border-radius: 12px;\n    display: box;\n    display: flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.complexity_text {\n    width: 208px;\n    left: 408px;\n    font-family: StratosSkyeng;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 40px;\n    line-height: 48px;\n    text-align: center;\n    color: #004980;\n}\n\n.complexity_button {\n    width: 246px;\n    height: 50px;\n    background: #7ac100;\n    border-radius: 12px;\n    color: #fff;\n}\n\n.complexity_choice_area {\n    display: box;\n    display: flexbox;\n    display: flex;\n    gap: 24px;\n    padding-bottom: 67px;\n}\n\n.complexity_choice_area:not(:checked) > div {\n    font-family: StratosSkyeng;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 64px;\n    line-height: 72px;\n    color: #0080c1;\n    background: #fff;\n    border-radius: 12px;\n    width: 98px;\n    height: 98px;\n    display: box;\n    display: flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    text-align: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.complexity_choice_area:not(:checked) > div:hover {\n    color: #7ac100;\n    text-shadow: 1px 1px #7ac100;\n}\n\n.complexity_choice_area:not(:checked) > div:checked {\n    background: #7ac100;\n    text-shadow: 1px 1px #7ac100;\n}\n\n.startGame {\n    width: 1024px;\n    height: 774px;\n    background: #004980;\n}\n\n.head {\n    display: box;\n    display: flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    padding: 22px;\n}\n\n.head_button {\n    width: 246px;\n    height: 50px;\n    background: #7ac100;\n    border-radius: 12px;\n    color: #fff;\n}\n\n.head_timer {\n    font-family: StratosSkyeng;\n    width: 155px;\n    height: 91px;\n    left: 22px;\n    top: 22px;\n    color: #fff;\n}\n\n.head_timer_box {\n    display: box;\n    display: flexbox;\n    display: flex;\n}\n\n.head_timer_type {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 32px;\n    color: #fff;\n    padding-left: 44px;\n}\n\n.head_timer_counter {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 64px;\n    line-height: 72px;\n    color: #fff;\n}\n\n.deck {\n    display: box;\n    display: flexbox;\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    flex-wrap: wrap;\n    padding: 24px;\n}\n\n.deck_cards_shirt {\n    width: 95px;\n    height: 133px;\n    background: #e4fbff;\n    border-radius: 4px;\n}\n\n.overlay {\n    background-color: rgb(1 0 0 / 77%);\n    right: 0;\n    left: 0;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 11;\n\n    /* Появление модального окошка с верхнего края экрана */\n}\n\n.overlay:target + .popUpScreen {\n    transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    top: 17%;\n}\n\n.popUpScreen {\n    position: absolute;\n    width: 480px;\n    height: 459px;\n    left: 272px;\n    top: 158px;\n    background: #c2f5ff;\n    border-radius: 12px;\n    box-shadow: 0 13px 21px rgb(0 1 0 / 19%), 0 21px 63px rgb(0 1 0 / 31%);\n    box-shadow: 0 13px 21px rgb(0 1 0 / 19%), 0 21px 63px rgb(0 1 0 / 31%);\n    display: box;\n    display: flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.popUpScreen_result {\n    font-family: StratosSkyeng;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 40px;\n    line-height: 48px;\n    color: #004980;\n    font-feature-settings: 'pnum' on, 'lnum' on;\n    font-feature-settings: 'pnum' on, 'lnum' on;\n}\n\n.popUpScreen_img_lost {\n    left: 0.4%;\n    right: 0%;\n    top: 0%;\n    bottom: 0.4%;\n    padding-top: 9px;\n}\n\n.popUpScreen_time {\n    padding-top: 28px;\n}\n\n.popUpScreen_time_counter {\n    padding-top: 10px;\n    font-family: StratosSkyeng;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 64px;\n    line-height: 72px;\n    padding-bottom: 40px;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./scr/js/style/style.css","webpack://./scr/js/style/style.sass"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./scr/js/style/style.css":
/*!********************************!*\
  !*** ./scr/js/style/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./scr/js/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./scr/js/application.js":
/*!*******************************!*\
  !*** ./scr/js/application.js ***!
  \*******************************/
/***/ (() => {

window.complexity = ''
window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.screens[screenName]()
    },
    renderBlock: function (blockName, container, cls, content, attrs) {
        window.application.blocks[blockName](container, cls, content, attrs)
    },
    timers: [],
}

window.deckID = [
    6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 6.2, 7.2, 8.2, 9.2, 10.2,
    11.2, 12.2, 13.2, 14.2, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3, 14.3,
    6.4, 7.4, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4, 14.4,
]
window.time = '00:00'


/***/ }),

/***/ "./scr/js/block_layout.js":
/*!********************************!*\
  !*** ./scr/js/block_layout.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderScreen": () => (/* binding */ renderScreen)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./scr/js/template.js");

function renderExampleDiv({ container, cls, content }) {
    const div = {
        tag: 'div',
        cls,
        content,
    }
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(div))
}
window.application.blocks['example-div'] = renderExampleDiv
function renderExampleButtonFalse({ container, cls, content, id }) {
    const div = {
        tag: 'div',
        cls,
        content,
        attrs: {
            id,
        },
    }
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(div))
}
window.application.blocks['example-false'] = renderExampleButtonFalse
function renderExampleButton({ container, cls, content }) {
    const button = {
        tag: 'button',
        cls,
        content,
    }
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(button))
}
window.application.blocks['example-button'] = renderExampleButton

function renderExampleScreenStart() {
    const app = document.querySelector('.app')
    app.innerHTML = ''
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'main',
        content: '',
    })
    const main = app.querySelector('.main')
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'complexity',
        content: '',
    })

    const div = main.querySelector('.complexity')
    window.application.renderBlock('example-div', {
        container: div,
        cls: 'complexity_text',
        content: 'Выбери сложность',
    })
    window.application.renderBlock('example-div', {
        container: div,
        cls: 'complexity_choice_area',
        content: '',
    })

    const complexity_choice_area = div.querySelector('.complexity_choice_area')
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '1',
        id: 'easy',
    })
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '2',
        id: ['average'],
    })
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '3',
        id: ['difficult'],
    })

    window.application.renderBlock('example-button', {
        container: div,
        cls: 'complexity_button',
        content: 'Старт',
    })
}
window.application.screens['example'] = renderExampleScreenStart
function renderExampleImg({ container, cls, id, src }) {
    const img = {
        tag: 'img',
        cls: cls,
        attrs: {
            id: id,
            src: src,
        },
    }
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(img))
}
window.application.blocks['example-img'] = renderExampleImg

function renderExampleScreenGameShirt() {
    const app = document.querySelector('.app')
    const deck = app.querySelector('.deck')
    deck.innerHTML = ''
    const arr = easy()
    window.deckT.forEach((index) => {
        window.application.renderBlock('example-img', {
            container: deck,
            cls: 'deck_cards_shirt',
            id: arr[index],
            src: 'scr/js/img/shirt.jpg',
        })
    })
}
window.application.screens['gameShirt'] = renderExampleScreenGameShirt
function renderExampleScreenGameDisplay() {
    const app = document.querySelector('.app')
    app.innerHTML = ''
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'startGame',
        content: '',
    })
    const main = app.querySelector('.startGame')
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'head',
        content: '',
    })
    const head = main.querySelector('.head')
    window.application.renderBlock('example-div', {
        container: head,
        cls: 'head_timer',
        content: '',
    })
    const timer = main.querySelector('.head_timer')
    window.application.renderBlock('example-div', {
        container: timer,
        cls: 'head_timer_box',
        content: '',
    })
    const box = main.querySelector('.head_timer_box')

    window.application.renderBlock('example-div', {
        container: box,
        cls: 'head_timer_type',
        content: 'min',
    })
    window.application.renderBlock('example-div', {
        container: box,
        cls: 'head_timer_type',
        content: 'sek',
    })
    window.application.renderBlock('example-div', {
        container: timer,
        cls: 'head_timer_counter',
        content: '00.00',
    })
    window.application.renderBlock('example-button', {
        container: head,
        cls: 'head_button',
        content: 'Начать заново ',
    })
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'deck',
        content: '',
    })
    const deck = main.querySelector('.deck')
}
window.application.screens['gameDisplay'] = renderExampleScreenGameDisplay
function renderExampleComplexity() {
    const app = document.querySelector('.app')
    const main = app.querySelector('.startGame')
    const deck = main.querySelector('.deck')
    let arr = []
    arr = complexityS(window.complexity)
    console.log(arr)
    arr.forEach((element, index) => {
        window.application.renderBlock('example-img', {
            container: deck,
            cls: 'deck_cards_shirt',
            id: arr[index],
            src: `scr/js/img/${element}.png`,
        })
    })
    window.deckT = deck.querySelectorAll('.deck_cards_shirt')
}
window.application.screens['gameComplexity'] = renderExampleComplexity
function complexityS(arr) {
    switch (arr) {
        case 'easy':
            return easy()
        case 'average':
            return average()
        case 'difficult':
            return difficult()
        default:
            break
    }
}
function easy() {
    return createCards(3)
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
const createCards = (count) => {
    let arr = []
    let counter = 0
    for (let i = 0; i < 10; i += 9) {
        for (let j = 0; j < count; j++) {
            arr[counter] = window.deckID[j + i]
            counter++
        }
    }
    return shuffle(arr)
}
function average() {
    return createCards(6)
}
function difficult() {
    return createCards(9)
}
function renderScreen() {
    for (let i = 0; i < window.application.timers.length; i++) {
        clearInterval(window.application.timers[i])
    }
}
function renderExampleAlink({ container, cls, content }) {
    const a = {
        tag: 'a',
        cls,
        content,
    }
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(a))
}
window.application.blocks['example-link'] = renderExampleAlink

function renderExampleScreenLost() {
    const app = document.querySelector('.app')
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'overlay',
        content: '',
    })
    const overlay = app.querySelector('.overlay')
    window.application.renderBlock('example-div', {
        container: overlay,
        cls: 'popUpScreen',
        content: '',
    })
    const popUpScreen = app.querySelector('.popUpScreen')
    window.application.renderBlock('example-img', {
        container: popUpScreen,
        cls: 'popUpScreen_img_lost',
        id: 'loser',
        src: `scr/js/img/loser.png`,
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_result',
        content: 'Вы проиграли!',
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_time',
        content: 'Затраченное время:',
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_time_counter',
        content: window.time,
    })
    window.application.renderBlock('example-button', {
        container: popUpScreen,
        cls: 'head_button',
        content: 'Начать снова ',
    })
}
window.application.screens['gameLost'] = renderExampleScreenLost
function renderExampleScreenWin() {
    const app = document.querySelector('.app')
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'overlay',
        content: '',
    })
    const overlay = app.querySelector('.overlay')
    window.application.renderBlock('example-div', {
        container: overlay,
        cls: 'popUpScreen',
        content: '',
    })
    const popUpScreen = app.querySelector('.popUpScreen')
    window.application.renderBlock('example-img', {
        container: popUpScreen,
        cls: 'popUpScreen_img_lost',
        id: 'loser',
        src: `scr/js/img/win.png`,
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_result',
        content: 'Вы выиграли!',
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_time',
        content: 'Затраченное время:',
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_time_counter',
        content: window.time,
    })
    window.application.renderBlock('example-button', {
        container: popUpScreen,
        cls: 'head_button',
        content: 'Начать снова ',
    })
}
window.application.screens['gameWin'] = renderExampleScreenWin


/***/ }),

/***/ "./scr/js/game_process.js":
/*!********************************!*\
  !*** ./scr/js/game_process.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block_layout */ "./scr/js/block_layout.js");
const main = document.createElement('div')
main.className = 'app'
document.body.append(main)

const app = document.querySelector('.app')
let sec = 0
let min = 0
;
function newGame() {
    (0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderScreen)()
    sec = 0
    min = 0
    window.application.renderScreen('example')

    const complexity = app.querySelectorAll('.complexity_choice_button')

    complexity.forEach((control) => {
        control.addEventListener('click', () => {
            console.log(control.id)
            window.complexity = control.id
        })
    })

    const start = app.querySelector('.complexity_button')
    start.addEventListener('click', () => {
        if (window.complexity === '') {
            alert('Пожалуста, выберите сложность')
            return
        }
        startGame()
    })
}
newGame()

function startGame() {
    window.time = ''
    window.application.renderScreen('gameDisplay')

    window.application.renderScreen('gameComplexity')

    setTimeout(() => {
        window.application.renderScreen('gameShirt')
        progressGame()

        window.application.timers.push(setInterval(timer, 1000))
    }, 5000)
    const head = app.querySelector('.head')
    const butter = head.querySelector('.head_button')

    butter.addEventListener('click', () => {
        newGame()
        window.time = '00:00'
        return
    })
}

function timer() {
    const head_timer_counter = app.querySelector('.head_timer_counter')
    //renderScreen();
    sec++
    if (sec > 59) {
        min++
        sec = 0
    }
    head_timer_counter.textContent = `${min} :${sec}`
}
function progressGame() {
    const main = app.querySelector('.startGame')
    const deck = main.querySelector('.deck')
    let cards = deck.querySelectorAll('.deck_cards_shirt')

    let counters = 0
    let countersWin = 0
    let previous
    console.log(cards)
    cards.forEach((control, index) => {
        control.addEventListener('click', () => {
            if (counters > 0 && previous.id[0] === window.deckT[index].id[0]) {
                // alert('ók')
                counters = -1
                previous = ''
            }
            if (
                counters > 0 &&
                previous.id[0] != window.deckT[index].id[0] &&
                previous != ''
            ) {
                const head_timer_counter = app.querySelector(
                    '.head_timer_counter'
                )
                window.time = head_timer_counter.textContent
                loser()
                ;(0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderScreen)()
                return
            }

            previous = window.deckT[index]
            cards[index].src = window.deckT[index].src
            counters++
            countersWin++
            if (countersWin === 6 && window.complexity === 'easy') {
                const head_timer_counter = app.querySelector(
                    '.head_timer_counter'
                )
                window.time = head_timer_counter.textContent
                Win()
                ;(0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderScreen)()
                return
            }
            if (countersWin === 12 && window.complexity === 'average') {
                const head_timer_counter = app.querySelector(
                    '.head_timer_counter'
                )
                window.time = head_timer_counter.textContent
                Win()
                ;(0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderScreen)()
                return
            }
            if (countersWin === 18 && window.complexity === 'difficult') {
                const head_timer_counter = app.querySelector(
                    '.head_timer_counter'
                )
                window.time = head_timer_counter.textContent
                Win()
                ;(0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderScreen)()
                return
            }
        })
    })
    console.log(window.deckT)
}
function loser() {
    window.application.renderScreen('gameLost')
    const popUpScreen = app.querySelector('.popUpScreen')
    const butter = popUpScreen.querySelector('.head_button')

    butter.addEventListener('click', () => {
        newGame()
        window.time = '00:00'
        return
    })
}
function Win() {
    window.application.renderScreen('gameWin')
    const popUpScreen = app.querySelector('.popUpScreen')
    const butter = popUpScreen.querySelector('.head_button')

    butter.addEventListener('click', () => {
        newGame()
        window.time = '00:00'
        return
    })
}


/***/ }),

/***/ "./scr/js/template.js":
/*!****************************!*\
  !*** ./scr/js/template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateEngine": () => (/* binding */ templateEngine)
/* harmony export */ });
function templateEngine(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('')
    }
    if (
        typeof block === 'string' ||
        typeof block === 'number' ||
        block === true
    ) {
        return document.createTextNode(block)
    }
    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment()

        block.forEach((element) => {
            fragment.appendChild(templateEngine(element))
        })

        return fragment
    }

    const result = document.createElement(block.tag)

    if (block.cls) {
        const classes = [].concat(block.cls)
        classes.forEach((cls) => {
            result.classList.add(cls)
        })
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs)

        keys.forEach((key) => {
            result.setAttribute(key, block.attrs[key])
        })
    }

    result.appendChild(templateEngine(block.content))

    return result
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./scr/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.js */ "./scr/js/application.js");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./scr/js/template.js");
/* harmony import */ var _block_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block_layout.js */ "./scr/js/block_layout.js");
/* harmony import */ var _game_process_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_process.js */ "./scr/js/game_process.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/style.css */ "./scr/js/style/style.css");







})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map