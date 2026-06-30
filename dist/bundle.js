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

/***/ "../../../../../node_modules/css-loader/dist/cjs.js!./src/style/main.css"
/*!*******************************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \*******************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    font-family:Arial, Helvetica, sans-serif;\r\n    background: linear-gradient(to right, #ab7320, #E4D1A6);\r\n}\r\n.edit-input {\r\n    font-size: 16px;          /* match your text */\r\n    font-family: inherit;     /* same font */\r\n    border: none;             /* remove border */\r\n    outline: none;            /* remove blue outline */\r\n    background: transparent;  /* remove background */\r\n    width: 100%;              /* fill space */\r\n  }\r\n  \r\n  /* Optional: keep spacing consistent */\r\n  .todo-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n.completed {\r\n    text-decoration: line-through;\r\n    color: gray;\r\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://daily-do/./src/style/main.css?../../../../../node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "../../../../../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://daily-do/../../../../../node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!***************************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://daily-do/../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style/main.css"
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!./main.css */ \"../../../../../node_modules/css-loader/dist/cjs.js!./src/style/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://daily-do/./src/style/main.css?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://daily-do/../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://daily-do/../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://daily-do/../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://daily-do/../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://daily-do/../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://daily-do/../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/components/APP.js"
/*!*******************************!*\
  !*** ./src/components/APP.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTodosPage: () => (/* binding */ renderTodosPage)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/components/TodoList.js\");\n\r\n\r\nfunction renderTodosPage(todos) {\r\n  return (0,_TodoList__WEBPACK_IMPORTED_MODULE_0__.renderTodoList)(todos);\r\n}\r\n\n\n//# sourceURL=webpack://daily-do/./src/components/APP.js?\n}");

/***/ },

/***/ "./src/components/TodoItem.js"
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTodoItem: () => (/* binding */ renderTodoItem)\n/* harmony export */ });\nfunction renderTodoItem(todo) {\r\n  return `\r\n    <li class=\"todo-item\">\r\n      <input type=\"checkbox\" class=\"toggle\" data-id=\"${todo.id}\" ${todo.completed ? \"checked\" : \"\"}>\r\n\r\n      ${todo.editing\r\n        ? `<input class=\"edit-input\" data-id=\"${todo.id}\" value=\"${todo.text}\">`\r\n        : `<span class=\"${todo.completed ? \"completed\" : \"\"}\" data-id=\"${todo.id}\">${todo.text}</span>`}\r\n\r\n      <button class=\"delete\" data-id=\"${todo.id}\">X</button>\r\n    </li>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://daily-do/./src/components/TodoItem.js?\n}");

/***/ },

/***/ "./src/components/TodoList.js"
/*!************************************!*\
  !*** ./src/components/TodoList.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTodoList: () => (/* binding */ renderTodoList)\n/* harmony export */ });\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem */ \"./src/components/TodoItem.js\");\n\r\n\r\nfunction renderTodoList(todos) {\r\n  return `\r\n    <div class=\"todo-page\">\r\n      <h1>Todos</h1>\r\n      <input type=\"text\" id=\"todo-input\" placeholder=\"Add new task\">\r\n      <button id=\"add\">Add</button>\r\n      <ul class=\"todo-list\">\r\n        ${todos.map((todo) => (0,_TodoItem__WEBPACK_IMPORTED_MODULE_0__.renderTodoItem)(todo)).join(\"\")}\r\n      </ul>\r\n      <button onclick=\"showPage('home-page')\">Back</button>\r\n    </div>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://daily-do/./src/components/TodoList.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _components_APP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/APP */ \"./src/components/APP.js\");\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/store */ \"./src/state/store.js\");\n// Import CSS for styling\r\n\r\n\r\n// Import app components\r\n\r\n\r\n// Import state management functions\r\n\r\n(0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({\r\n  todos: [],\r\n  planning: [],\r\n  journal: []\r\n});\r\n/* ============================================================\r\n  Global function to switch between pages\r\n  Exposed on `window` so inline onclicks (back buttons) work\r\n============================================================ */\r\nwindow.showPage = function(pageId) {\r\n  const pages = [\"home-page\", \"todos-page\", \"planning-page\", \"journal-page\"];\r\n  pages.forEach(id => {\r\n    document.getElementById(id).style.display = id === pageId ? \"block\" : \"none\";\r\n  });\r\n};\r\n\r\n/* ============================================================\r\n  Render Todos Page\r\n  Handles displaying todos and their interactions\r\n============================================================ */\r\nfunction renderTodos() {\r\n  const container = document.getElementById(\"todos-page\");\r\n  const { todos } = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)();\r\n\r\n  container.innerHTML = (0,_components_APP__WEBPACK_IMPORTED_MODULE_1__.renderTodosPage)(todos);\r\n\r\n  // Auto-focus input when editing\r\n  const editingInput = container.querySelector(\".edit-input\");\r\n  if (editingInput) {\r\n    editingInput.focus();\r\n    editingInput.selectionStart = editingInput.selectionEnd = editingInput.value.length;\r\n  }\r\n}\r\n\r\n/* ============================================================\r\n  Render Planning Page\r\n  Shows the planning textarea and saves input to state\r\n============================================================ */\r\nfunction renderJournal() {\r\n  const container = document.getElementById(\"journal-page\");\r\n  const { journal } = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)();\r\n\r\n  container.innerHTML = `\r\n    <h1>Journal</h1>\r\n\r\n    <input id=\"journal-input\" placeholder=\"Write something...\">\r\n    <button id=\"add-journal\">Add</button>\r\n\r\n    <ul>\r\n      ${journal.map((entry, index) => `\r\n        <li>\r\n          ${entry}\r\n          <button class=\"delete-journal\" data-index=\"${index}\">X</button>\r\n        </li>\r\n      `).join(\"\")}\r\n    </ul>\r\n\r\n    <button onclick=\"showPage('home-page')\">Back</button>\r\n  `;\r\n}\r\n\r\n/* ============================================================\r\n  Render Journal Page\r\n  Shows the journal textarea and saves input to state\r\n============================================================ */\r\nfunction renderPlanning() {\r\n  const container = document.getElementById(\"planning-page\");\r\n  const { planning } = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)();\r\n\r\n  container.innerHTML = `\r\n    <h1>Planning</h1>\r\n\r\n    <input id=\"plan-input\" placeholder=\"Add a plan\">\r\n    <button id=\"add-plan\">Add</button>\r\n\r\n    <ul>\r\n      ${planning.map((item, index) => `\r\n        <li>\r\n          ${item}\r\n          <button class=\"delete-plan\" data-index=\"${index}\">X</button>\r\n        </li>\r\n      `).join(\"\")}\r\n    </ul>\r\n\r\n    <button onclick=\"showPage('home-page')\">Back</button>\r\n  `;\r\n  console.log((0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().planning);\r\n}\r\n\r\n/* ============================================================\r\n  Main Document Ready Function\r\n  Attaches all button events and initial page render\r\n============================================================ */\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n  // Home page buttons\r\n  document.getElementById(\"link-todos\").addEventListener(\"click\", () => {\r\n    showPage(\"todos-page\");\r\n    renderTodos();\r\n  });\r\n  document.getElementById(\"link-planning\").addEventListener(\"click\", () => {\r\n    showPage(\"planning-page\");\r\n    renderPlanning();\r\n  });\r\n  document.getElementById(\"link-journal\").addEventListener(\"click\", () => {\r\n    showPage(\"journal-page\");\r\n    renderJournal();\r\n  });\r\n\r\n  /* ============================================================\r\n    Todo Page Event Listeners (Delegated to document)\r\n    Handles adding, toggling, deleting, and editing todos\r\n  ============================================================ */\r\n  document.addEventListener(\"click\", (e) => {\r\n\r\n    // Add new todo\r\n    if (e.target.id === \"add\") {\r\n      const input = document.getElementById(\"todo-input\");\r\n      const value = input.value.trim();\r\n      if (!value) return;\r\n\r\n      const newTodo = { id: Date.now(), text: value, completed: false, editing: false };\r\n\r\n      (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({ todos: [...(0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().todos, newTodo] });\r\n      input.value = \"\";\r\n      renderTodos();\r\n    }\r\n\r\n    // Toggle todo completion\r\n    if (e.target.classList.contains(\"toggle\")) {\r\n      const id = Number(e.target.dataset.id);\r\n      const updated = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().todos.map(todo => {\r\n        if (todo.id === id) return { ...todo, completed: !todo.completed };\r\n        return todo;\r\n      });\r\n      (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({ todos: updated });\r\n      renderTodos();\r\n    }\r\n\r\n    // Delete todo\r\n    if (e.target.classList.contains(\"delete\")) {\r\n      const id = Number(e.target.dataset.id);\r\n      const updated = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().todos.filter(todo => todo.id !== id);\r\n      (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({ todos: updated });\r\n      renderTodos();\r\n    }\r\n\r\n    function renderJournal() {\r\n  const container = document.getElementById(\"journal-page\");\r\n  const { journal } = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)();\r\n\r\n  container.innerHTML = `\r\n    <h1>Journal</h1>\r\n\r\n    <input id=\"journal-input\" placeholder=\"Write something...\">\r\n    <button id=\"add-journal\">Add</button>\r\n\r\n    <ul>\r\n      ${journal.map((entry, index) => `\r\n        <li>\r\n          ${entry}\r\n          <button class=\"delete-journal\" data-index=\"${index}\">X</button>\r\n        </li>\r\n      `).join(\"\")}\r\n    </ul>\r\n\r\n    <button onclick=\"showPage('home-page')\">Back</button>\r\n  `;\r\n}\r\n\r\nif (e.target.id === \"add-plan\") {\r\n  const input = document.getElementById(\"plan-input\");\r\n  const value = input.value.trim();\r\n  if (!value) return;\r\n\r\n  (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({\r\n    planning: [...(0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().planning, value]\r\n  });\r\n\r\n  renderPlanning();\r\n}\r\nif (e.target.classList.contains(\"delete-plan\")) {\r\n  const index = e.target.dataset.index;\r\n\r\n  const updated = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().planning.filter((_, i) => i != index);\r\n\r\n  (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({ planning: updated });\r\n  renderPlanning();\r\n}\r\nif (e.target.id === \"add-journal\") {\r\n  const input = document.getElementById(\"journal-input\");\r\n  const value = input.value.trim();\r\n  if (!value) return;\r\n\r\n  (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({\r\n    journal: [...(0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().journal, value]\r\n  });\r\n\r\n  renderJournal();\r\n}\r\nif (e.target.classList.contains(\"delete-journal\")) {\r\n  const index = e.target.dataset.index;\r\n\r\n  const updated = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().journal.filter((_, i) => i != index);\r\n\r\n  (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({ journal: updated });\r\n  renderJournal();\r\n}\r\n    // Enable editing\r\n    if (e.target.tagName === \"SPAN\" && e.target.dataset.id) {\r\n      const id = Number(e.target.dataset.id);\r\n      const updated = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().todos.map(todo => {\r\n        if (todo.id === id) return { ...todo, editing: true };\r\n        return todo;\r\n      });\r\n      (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({ todos: updated });\r\n      renderTodos();\r\n    }\r\n  });\r\n\r\n  // Save edited todo on Enter key\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (e.target.classList.contains(\"edit-input\") && e.key === \"Enter\") {\r\n      const id = Number(e.target.dataset.id);\r\n      const value = e.target.value.trim();\r\n      if (!value) return;\r\n\r\n      const updated = (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.getState)().todos.map(todo => {\r\n        if (todo.id === id) return { ...todo, text: value, editing: false };\r\n        return todo;\r\n      });\r\n\r\n      (0,_state_store__WEBPACK_IMPORTED_MODULE_2__.setState)({ todos: updated });\r\n      renderTodos();\r\n    }\r\n  });\r\n\r\n  // Initial page: show home\r\n  showPage(\"home-page\");\r\n});\n\n//# sourceURL=webpack://daily-do/./src/index.js?\n}");

/***/ },

/***/ "./src/state/store.js"
/*!****************************!*\
  !*** ./src/state/store.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getState: () => (/* binding */ getState),\n/* harmony export */   setState: () => (/* binding */ setState),\n/* harmony export */   subscribe: () => (/* binding */ subscribe)\n/* harmony export */ });\n// Load saved data from browser storage\r\nconst saved = localStorage.getItem(\"state\");\r\n\r\n let state =//saved ?JSON.parse(saved):\r\n{\r\n    todos:[],\r\n    planning: [],\r\n    journal: []\r\n    \r\n};\r\nconst listeners =[];\r\n\r\nfunction getState(){\r\n    return state;\r\n}\r\nfunction setState(newState) {\r\n    state ={...state,...newState};\r\n\r\n    localStorage.setItem(\"state\",JSON.stringify(state));\r\n    listeners.forEach((listener)=>listener())\r\n}\r\nfunction subscribe(listener){\r\n    listeners.push(listener);\r\n}\n\n//# sourceURL=webpack://daily-do/./src/state/store.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;