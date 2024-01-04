/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/frontEnd/styles.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/frontEnd/styles.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg */ \"./src/images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    /* background: linear-gradient(to bottom right, rgb(116, 171, 255), rgb(16, 220, 16)); */\r\n    height: 100vh;\r\n    /* resize: both;\r\n    overflow: scroll; */\r\n    align-content: center;\r\n    font-family: sans-serif;\r\n}\r\n/* @media screen and (max-width: 800px){\r\n    body {\r\n        background-image: url(\"../images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg\");\r\n        background-size: auto;\r\n        background-repeat: no-repeat;\r\n    }\r\n} */\r\n\r\n#loc_form_section {\r\n    background-color: rgba(63, 93, 143, 0.6);\r\n    text-align: center;\r\n    width: fit-content;\r\n    margin-top: 35px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 15px;\r\n\r\n    border-radius: 5px;\r\n}\r\n\r\n#location_input_form {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n#location_input{\r\n    padding: 5px;\r\n    border: none;\r\n}\r\n#location_input_label {\r\n    /* padding-top: 2px; */\r\n    margin-right: 5px;\r\n}\r\n#submit_location_button {\r\n    margin-left: 5px; \r\n    background-color:rgba(111, 228, 88, 0.45);\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n#submit_location_button:hover {\r\n    background-color: rgba(179, 255, 88, 0.5);\r\n}\r\n\r\n#weather_display_section {\r\n    background-color:rgba(63, 93, 143, 0.7);\r\n\r\n    width: 40%;\r\n    margin-top: 10vh; \r\n\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 10px;\r\n\r\n    border-radius: 15px;\r\n\r\n    color: white;\r\n}\r\n@media screen and (max-width: 800px){\r\n    #weather_display_section {\r\n        width: 60%;\r\n        font-size: small;\r\n    }\r\n}\r\n@media screen and (max-width: 450px){\r\n    #weather_display_section {\r\n        width: 70%;\r\n        font-size: smaller;\r\n    }\r\n}\r\n/*This centers the contents within the weather display section*/\r\n#weather_display_contents {\r\n    /* display: block;  */\r\n    width: fit-content;\r\n    height: fit-content;\r\n\r\n    margin: auto;\r\n}\r\n\r\n#weather_location {\r\n   text-align: center;\r\n}\r\n\r\n/*This centers the weather image and content details*/ \r\n#weather_display_content_details{\r\n    width: fit-content;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#weather_img {\r\n    display: block; /*Used to center img*/\r\n\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather_app/./src/frontEnd/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/frontEnd/styles.css":
/*!*********************************!*\
  !*** ./src/frontEnd/styles.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/frontEnd/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather_app/./src/frontEnd/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/events/fetchingDetails.js":
/*!***************************************!*\
  !*** ./src/events/fetchingDetails.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nconst API_KEY = \"7f9698739cfc45e193110617232610\";\r\n//\r\nasync function getWeather(userInputLocation) {\r\n    const response  = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInputLocation}`, {mode: 'cors'})\r\n    const weatherData = await response.json();\r\n    console.log(weatherData);\r\n    \r\n    //set to return a text, img, temp (f), and real feel (f)\r\n    if (!('error' in weatherData)) {\r\n        const compactWeatherVals = {\r\n            locationDetail: `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`,\r\n            // locationDetail: weatherData.location.name,\r\n            // isDay: weatherData.location.is_day,\r\n            // weatherImgCode: weatherData.current.condition.code,\r\n            weatherDesc: weatherData.current.condition.text,\r\n            weatherImg: weatherData.current.condition.icon,\r\n            weatherTempF: weatherData.current.temp_f,\r\n            weatherRFTempF: weatherData.current.feelslike_f,\r\n            weatherTempC: weatherData.current.temp_c,\r\n            weatherRFTempC: weatherData.current.feelslike_c,\r\n            weatherHumidity: weatherData.current.humidity,\r\n            weatherWind: weatherData.current.wind_mph\r\n        }\r\n        console.log(compactWeatherVals)\r\n        return compactWeatherVals;\r\n    } else {\r\n        const errorObj = {\r\n            errorMsg: weatherData.error.message\r\n        }\r\n        console.log(errorObj, \"this is error obj\")\r\n        return errorObj;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather_app/./src/events/fetchingDetails.js?");

/***/ }),

/***/ "./src/events/locationSubmit.js":
/*!**************************************!*\
  !*** ./src/events/locationSubmit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   grabWeatherInfoOnSubmit: () => (/* binding */ grabWeatherInfoOnSubmit)\n/* harmony export */ });\n/* harmony import */ var _fetchingDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchingDetails */ \"./src/events/fetchingDetails.js\");\n/* harmony import */ var _updateWeatherDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateWeatherDisplay */ \"./src/events/updateWeatherDisplay.js\");\n\r\n\r\n//\r\nconst grabWeatherInfoOnSubmit = () => {\r\n    const locInputForm = document.getElementById('location_input_form');\r\n\r\n    //event listeners can take async functions too\r\n    locInputForm.addEventListener('submit', async (e) => {\r\n        e.preventDefault();\r\n        (0,_updateWeatherDisplay__WEBPACK_IMPORTED_MODULE_1__.setLoadingWeatherDisplayElem)();\r\n        const formVals = new FormData(locInputForm);\r\n        const returnedWeatherJosn = await (0,_fetchingDetails__WEBPACK_IMPORTED_MODULE_0__.getWeather)(formVals.get('location_input'));\r\n        (0,_updateWeatherDisplay__WEBPACK_IMPORTED_MODULE_1__.updateWeatherDisplayElems)(returnedWeatherJosn);\r\n        ;\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather_app/./src/events/locationSubmit.js?");

/***/ }),

/***/ "./src/events/updateWeatherDisplay.js":
/*!********************************************!*\
  !*** ./src/events/updateWeatherDisplay.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setLoadingWeatherDisplayElem: () => (/* binding */ setLoadingWeatherDisplayElem),\n/* harmony export */   updateWeatherDisplayElems: () => (/* binding */ updateWeatherDisplayElems)\n/* harmony export */ });\nconst fahrenheitEntity = '&deg;F';\r\nconst celciusEntity = '&deg;C';\r\n\r\nconst updateWeatherLocation = (weatherJsonVal) => {\r\n    const weatherLocElem = document.getElementById('weather_location');\r\n    weatherLocElem.innerText = weatherJsonVal;\r\n}\r\n\r\nconst updateWeatherImg = (weatherJsonVal) => {\r\n    const weatherImageElem = document.getElementById('weather_img');\r\n    weatherImageElem.src = 'https:'+ weatherJsonVal;\r\n    weatherImageElem.style.height = \"175px\";\r\n    weatherImageElem.style.width = \"175px\";\r\n}\r\n\r\nconst clearWeatherImg = () => {\r\n    const weatherImageElem = document.getElementById('weather_img');\r\n    weatherImageElem.src = \"\";\r\n    weatherImageElem.style.height = \"\";\r\n    weatherImageElem.style.width = \"\";\r\n}\r\n\r\nconst updateWeatherDesc = (weatherJsonVal) => {\r\n    const weatherDescElem = document.getElementById('weather_desc');\r\n    weatherDescElem.innerText = \"Condition: \" + weatherJsonVal;\r\n}\r\n\r\nconst updateWeatherTemps = (weatherJsonVal1, weatherJsonVal2, weatherJsonVal3, weatherJsonVal4) => {\r\n    const weatherTempElem = document.getElementById('weather_temp');\r\n    if (weatherJsonVal1 == \"Searching data...\") {\r\n        weatherTempElem.innerHTML = \"Temperature: Searching data...\" \r\n    } else if (weatherJsonVal1 == \"No Data\") {\r\n        weatherTempElem.innerHTML = \"Temperature: No Data Found.\"\r\n    } else {\r\n        weatherTempElem.innerHTML = \"Temperature: \" + weatherJsonVal1 + ` ${fahrenheitEntity}` + \" / \" + weatherJsonVal3 + ` ${celciusEntity}`;\r\n    }\r\n    \r\n\r\n    const weatherRFTempElem = document.getElementById('weather_rftemp');\r\n    if (weatherJsonVal3 == \"Searching data...\") {\r\n        weatherRFTempElem.innerHTML = \"Real Feel: Searching data...\"\r\n    } else if (weatherJsonVal3 == \"No Data\") {\r\n        weatherRFTempElem.innerHTML = \"Real Feel: No Data Found.\"\r\n    } else {\r\n        weatherRFTempElem.innerHTML = \"Real Feel: \" + weatherJsonVal2 + ` ${fahrenheitEntity}` + \" / \" + weatherJsonVal4 + ` ${celciusEntity}`;\r\n    } \r\n}\r\n\r\nconst updateWeatherHumidity = (weatherJsonVal) => {\r\n    const weatherHumidity = document.getElementById('weather_humidity');\r\n    if (weatherJsonVal ==  \"Searching data...\") {\r\n        weatherHumidity.innerHTML = \"Humidity: Searching data...\"\r\n    }\r\n    else if (weatherJsonVal == 'No Data') {\r\n        weatherHumidity.innerHTML = \"Humidity: No Data Found.\"\r\n    }\r\n    else {\r\n        weatherHumidity.innerHTML = \"Humidity: \" + `${weatherJsonVal} %`;\r\n    }\r\n    \r\n}\r\n\r\nconst updateWeatherWind = (weatherJsonVal) => {\r\n    const weatherWind = document.getElementById('weather_wind');\r\n    if (weatherJsonVal ==  \"Searching data...\") {\r\n        weatherWind.innerHTML = \"Winds: Searching data...\"\r\n    }\r\n    else if (weatherJsonVal == 'No Data') {\r\n        weatherWind.innerHTML = \"Winds: No Data Found.\"\r\n    } else {\r\n        weatherWind.innerHTML = \"Winds: \" + `${weatherJsonVal} mph`;\r\n    }\r\n    \r\n}\r\n\r\nconst updateWeatherFound = (weatherJson) => {\r\n    updateWeatherLocation(weatherJson.locationDetail);\r\n    // updateWeatherImg(weatherJson.weatherImgCode, weatherJson.isDay);\r\n    updateWeatherImg(weatherJson.weatherImg);\r\n    updateWeatherDesc(weatherJson.weatherDesc);\r\n    updateWeatherTemps(weatherJson.weatherTempF, weatherJson.weatherRFTempF, weatherJson.weatherTempC, weatherJson.weatherRFTempC);\r\n    updateWeatherHumidity(weatherJson.weatherHumidity);\r\n    updateWeatherWind(weatherJson.weatherWind);\r\n}\r\n\r\nconst updateWeatherNotFound = (weatherJson) => {\r\n    const errorText = 'No Data';\r\n\r\n    updateWeatherLocation(`${weatherJson.errorMsg} Please try again.`); // Given error message Wwill show no matching data.\r\n\r\n    clearWeatherImg();\r\n    //add a no images found image here\r\n\r\n    updateWeatherDesc(errorText);\r\n    updateWeatherTemps(errorText, errorText, errorText, errorText);\r\n    updateWeatherHumidity(errorText);\r\n    updateWeatherWind(errorText);\r\n}\r\n\r\nconst updateWeatherDisplayElems = (weatherJson) => {\r\n    if (!('errorMsg' in weatherJson)){  //no error\r\n        updateWeatherFound(weatherJson);\r\n        console.log(\"updating weather display with\", weatherJson)\r\n    } else {                            //error\r\n        updateWeatherNotFound(weatherJson);\r\n        console.log(\"updating with error\", weatherJson)\r\n    }\r\n}\r\n\r\nconst setLoadingWeatherDisplayElem = () => {\r\n    updateWeatherLocation(\"Searching for inputted location...\");\r\n    clearWeatherImg();\r\n    updateWeatherDesc(\"Searching data...\");\r\n    updateWeatherTemps(\"Searching data...\", \"Searching data...\", \"Searching data...\", \"Searching data...\");\r\n    updateWeatherHumidity(\"Searching data...\");\r\n    updateWeatherWind(\"Searching data...\");\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://weather_app/./src/events/updateWeatherDisplay.js?");

/***/ }),

/***/ "./src/frontEnd/locationForm.js":
/*!**************************************!*\
  !*** ./src/frontEnd/locationForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputLocationForm: () => (/* binding */ inputLocationForm)\n/* harmony export */ });\nconst lineBreak = () => document.createElement('br');\r\n\r\nconst inputLocationForm = () => {\r\n    const inputForm = document.createElement('form');\r\n    inputForm.id = 'location_input_form';\r\n\r\n    const locationInput = document.createElement('input');\r\n    locationInput.id = 'location_input';\r\n    locationInput.name = 'location_input';\r\n    locationInput.placeholder = \"e.g London\";\r\n\r\n    const locationInputLabel = document.createElement('label');\r\n    locationInputLabel.id = \"location_input_label\";\r\n    locationInputLabel.setAttribute('for', 'location_Input');\r\n\r\n    const locationSVG = document.createElement('img');\r\n    locationSVG.src = \"../src/images/svgicons/location_on_FILL0_wght400_GRAD0_opsz24.svg\"\r\n    locationSVG.alt = \"location_icon\";\r\n    locationSVG.style.height = '25px';\r\n    locationSVG.style.width = '25px';\r\n\r\n    locationInputLabel.append(locationSVG);\r\n\r\n    const submitLocationInput = document.createElement('button');\r\n    submitLocationInput.id = 'submit_location_button';\r\n    submitLocationInput.type = 'submit';\r\n\r\n    const submitSVG = document.createElement('img');\r\n    submitSVG.src = \"../src/images/svgicons/search_FILL0_wght400_GRAD0_opsz24.svg\"\r\n    submitSVG.style.height = '25px';\r\n    submitSVG.style.width = '25px';\r\n\r\n    submitLocationInput.append(submitSVG);\r\n\r\n    inputForm.append(\r\n        locationInputLabel,\r\n        locationInput,\r\n        submitLocationInput\r\n    )\r\n\r\n    return inputForm;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather_app/./src/frontEnd/locationForm.js?");

/***/ }),

/***/ "./src/frontEnd/pageSection.js":
/*!*************************************!*\
  !*** ./src/frontEnd/pageSection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeatherSection: () => (/* binding */ displayWeatherSection),\n/* harmony export */   locationInputSection: () => (/* binding */ locationInputSection)\n/* harmony export */ });\n/* harmony import */ var _locationForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationForm */ \"./src/frontEnd/locationForm.js\");\n/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherDisplay */ \"./src/frontEnd/weatherDisplay.js\");\n\r\n\r\n\r\n// const headSection = () => {\r\n//     const contentDiv = document.getElementById('content');\r\n\r\n//     const headSectionContainer = document.createElement('div');\r\n//     headSectionContainer.id = 'head_section';\r\n\r\n//     const appNameElem = document.createElement('h1');\r\n//     appNameElem.id = 'app_name';\r\n//     appNameElem.innerText = 'Weather App';\r\n\r\n//     const appDescElem = document.createElement('h3');\r\n//     appDescElem.id = 'app_name_desc';\r\n//     appDescElem.innerText = 'Search up weather of a location of your interest!'\r\n\r\n//     headSectionContainer.append(appNameElem, appDescElem);\r\n//     contentDiv.append(headSectionContainer);\r\n// }\r\n\r\nconst locationInputSection = () => {\r\n\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    const locFormSectionContainer = document.createElement('div');\r\n    locFormSectionContainer.id = 'loc_form_section';\r\n    locFormSectionContainer.append((0,_locationForm__WEBPACK_IMPORTED_MODULE_0__.inputLocationForm)());\r\n\r\n    contentDiv.append(locFormSectionContainer);\r\n}\r\n\r\nconst displayWeatherSection = () => {\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    const weatherDisplaySectionContainer = document.createElement('div');\r\n    weatherDisplaySectionContainer.id = 'weather_display_section';\r\n    weatherDisplaySectionContainer.append((0,_weatherDisplay__WEBPACK_IMPORTED_MODULE_1__.weatherDisplay)());\r\n    \r\n    contentDiv.append(weatherDisplaySectionContainer);\r\n}\r\n\r\nconst footerSection = () => {\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    const footerSectionContainer = document.createElement('div');\r\n}\r\n\n\n//# sourceURL=webpack://weather_app/./src/frontEnd/pageSection.js?");

/***/ }),

/***/ "./src/frontEnd/weatherDisplay.js":
/*!****************************************!*\
  !*** ./src/frontEnd/weatherDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherDisplay: () => (/* binding */ weatherDisplay)\n/* harmony export */ });\nconst weatherDisplay = () => {\r\n    const section = document.createElement('div');\r\n    section.id = \"weather_display_contents\";\r\n\r\n    const weatherLocation = document.createElement('h2');\r\n    weatherLocation.id = \"weather_location\";\r\n    weatherLocation.innerText = \"Please enter a location of your interest!\"\r\n\r\n    const weatherImage = document.createElement('img');\r\n    weatherImage.id = \"weather_img\";\r\n\r\n    const weatherDetails = document.createElement('div');\r\n    weatherDetails.id = \"weather_display_content_details\";\r\n\r\n    const weatherDesc = document.createElement('h2');\r\n    weatherDesc.id = 'weather_desc'\r\n    const weatherTemp = document.createElement('h2');\r\n    weatherTemp.id = 'weather_temp';\r\n    const weatherRealFeelTempt = document.createElement('h2');\r\n    weatherRealFeelTempt.id = 'weather_rftemp';\r\n\r\n    const weatherHumidity = document.createElement('h2');\r\n    weatherHumidity.id = 'weather_humidity';\r\n    const weatherWind = document.createElement('h2');\r\n    weatherWind.id = 'weather_wind';\r\n\r\n    weatherDetails.append(        \r\n        weatherDesc,\r\n        weatherTemp,\r\n        weatherRealFeelTempt,\r\n        weatherHumidity,\r\n        weatherWind\r\n    );\r\n\r\n    section.append(\r\n        weatherLocation,\r\n        weatherImage,\r\n        weatherDetails\r\n    );\r\n    \r\n    return section;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather_app/./src/frontEnd/weatherDisplay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontEnd_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontEnd/styles.css */ \"./src/frontEnd/styles.css\");\n/* harmony import */ var _frontEnd_pageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontEnd/pageSection */ \"./src/frontEnd/pageSection.js\");\n/* harmony import */ var _events_locationSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/locationSubmit */ \"./src/events/locationSubmit.js\");\n\r\n\r\n\r\n\r\nconsole.log('hello, world');\r\n\r\nconst initPage = () => {\r\n    // headSection();\r\n    (0,_frontEnd_pageSection__WEBPACK_IMPORTED_MODULE_1__.locationInputSection)();\r\n    (0,_frontEnd_pageSection__WEBPACK_IMPORTED_MODULE_1__.displayWeatherSection)();\r\n\r\n    (0,_events_locationSubmit__WEBPACK_IMPORTED_MODULE_2__.grabWeatherInfoOnSubmit)();\r\n}\r\n\r\ninitPage();\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45d8e7b319a1c2340f9d.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;