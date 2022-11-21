(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ "./appConfig/buildConfig.ts":
/*!**********************************!*\
  !*** ./appConfig/buildConfig.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*eslint-disable */
var builConfig = {
  STAGE: "stage",
  VERSION: "1.0.0 ????",
  BUILD: "????TBD????",
  IS_NODE_PRODUCTION: false
};
/* harmony default export */ __webpack_exports__["default"] = (builConfig);

/***/ }),

/***/ "./build/_mode.js":
/*!************************!*\
  !*** ./build/_mode.js ***!
  \************************/
/***/ (function(module) {

module.exports = {
  PROD: 'prod',
  STAGE: 'stage',
  DEV: 'dev'
};

/***/ }),

/***/ "./i18n/i18n.js":
/*!**********************!*\
  !*** ./i18n/i18n.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadModuleTxFile": function() { return /* binding */ loadModuleTxFile; }
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-http-backend */ "./node_modules/i18next-http-backend/esm/index.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");
/* harmony import */ var _appConfig_buildConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appConfig/buildConfig */ "./appConfig/buildConfig.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // import commonEN from './en/common.json'
// import commonDE from './de/common.json'
// import backend from 'i18next-xhr-backend'





var _require = __webpack_require__(/*! ../build/_mode */ "./build/_mode.js"),
    PROD = _require.PROD,
    DEV = _require.DEV,
    STAGE = _require.STAGE; // import builConfig from '../appConfig/buildConfig'
// import _mode from '../build/_mode'
// const resources = {
//   en: {
//     translation: {},
//     common: commonEN
//   },
//   de: {
//     translation: {},
//     common: commonDE
//   }
// }


i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_4__.initReactI18next).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__["default"]).use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__["default"]).init({
  debug: true,
  // resources,
  fallbackLng: 'en',
  fallbackNS: 'common',
  ns: ['common'],
  // defaultNS: 'common',
  backend: {
    loadPath: (_appConfig_buildConfig__WEBPACK_IMPORTED_MODULE_3__["default"].STAGE === DEV ? '/locales/' : '/public/locales/') + '{{lng}}/{{ns}}.json' // loadPath: '/locales/{{lng}}/{{ns}}.json'
    // customHeaders: () => {
    //   if (builConfig.STAGE !== _mode.DEV) {
    //     const accessToken = window.access_token
    //     return {
    //       Authorization: `Bearer ${accessToken}`
    //     }
    //   } else {
    //     return {}
    //   }
    // }

  },
  useSuspense: true,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});
var loadModuleTxFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(module) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return i18next__WEBPACK_IMPORTED_MODULE_0__["default"].loadNamespaces(module);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadModuleTxFile(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_auth_authGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/auth/authGateway */ "./src/modules/auth/authGateway.tsx");
/* harmony import */ var antd_es_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/page-header */ "./node_modules/antd/es/page-header/index.js");
/* harmony import */ var _modules_LangChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/LangChange */ "./src/modules/LangChange/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n/i18n */ "./i18n/i18n.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var App = function App() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
      fallback: "Loading..",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd_es_page_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ghost: false,
        title: t('siteName'),
        extra: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_modules_LangChange__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_modules_auth_authGateway__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/appContext/appContext.ts":
/*!**************************************!*\
  !*** ./src/appContext/appContext.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ "./src/appContext/default.ts");


var AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

/***/ "./src/appContext/default.ts":
/*!***********************************!*\
  !*** ./src/appContext/default.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  tanentName: 'default tanent',
  apiEndPoint: 'https://def.com',
  getInfo: function getInfo() {
    return 'Hello, I am default tanent';
  }
});

/***/ }),

/***/ "./src/appContext/tanent1.ts":
/*!***********************************!*\
  !*** ./src/appContext/tanent1.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  tanentName: 'tanent1',
  apiEndPoint: 'https://tanent1.com',
  getInfo: function getInfo() {
    return 'Hello, I am tanent1';
  }
});

/***/ }),

/***/ "./src/commonComponent/ErrorBoundary/ErrorBoundary.tsx":
/*!*************************************************************!*\
  !*** ./src/commonComponent/ErrorBoundary/ErrorBoundary.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.log(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
            children: "ErrorBoundary: Something went wrsong."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            children: this.state.error.message
          })]
        });
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_site_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/site.scss */ "./style/site.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_styled_light_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/styled-light-theme */ "./style/styled-light-theme.ts");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var _appContext_appContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appContext/appContext */ "./src/appContext/appContext.ts");
/* harmony import */ var _appContext_tanent1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appContext/tanent1 */ "./src/appContext/tanent1.ts");
/* harmony import */ var _comp_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @comp/ErrorBoundary/ErrorBoundary */ "./src/commonComponent/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('app'));
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_comp_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
    theme: _style_styled_light_theme__WEBPACK_IMPORTED_MODULE_4__["default"],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_5__.Auth0Provider, {
      domain: "dev-muf-school.auth0.com",
      clientId: "yvkvjse4Wi4g1phDAf06Mp9vkslDlSSV",
      redirectUri: window.location.origin,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_appContext_appContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: _appContext_tanent1__WEBPACK_IMPORTED_MODULE_7__["default"],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      })
    }), ","]
  })
})); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/***/ }),

/***/ "./src/modules/LangChange/index.tsx":
/*!******************************************!*\
  !*** ./src/modules/LangChange/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var LangChange = function LangChange(props) {
  var langs = [{
    value: 'en',
    label: 'English'
  }, {
    value: 'de',
    label: 'German'
  }];

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var onChange = function onChange(value) {
    i18n.changeLanguage(value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "lang_change",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd_es_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      defaultValue: "en",
      style: {
        width: 120
      },
      onChange: onChange,
      options: langs
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LangChange);

/***/ }),

/***/ "./src/modules/auth/authGateway.tsx":
/*!******************************************!*\
  !*** ./src/modules/auth/authGateway.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _utils_axiosSetup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/axiosSetup */ "./src/utils/axiosSetup.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var UnAuthenticated = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/*! import() */ "src_modules_auth_UnAuthenticated_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./UnAuthenticated */ "./src/modules/auth/UnAuthenticated.tsx"));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var Authenticated = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("src_modules_auth_Authenticated_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Authenticated */ "./src/modules/auth/Authenticated.tsx"));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));

var AuthGateway = function AuthGateway() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLogin = _useState2[0],
      setLogin = _useState2[1];

  var onLogin = function onLogin(access_token) {
    window.access_token = access_token;
    setLogin(true);
    (0,_utils_axiosSetup__WEBPACK_IMPORTED_MODULE_2__["default"])(access_token);
  };

  var onLogout = function onLogout() {
    console.log('onLogout');
    setLogin(false);
  };

  var renderUnAuthenticated = function renderUnAuthenticated() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(UnAuthenticated, {
      onLogin: onLogin
    });
  };

  var renderAuthenticated = function renderAuthenticated() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Authenticated, {
      onLogout: onLogout
    });
  };

  if (isLogin) {
    return renderAuthenticated();
  } else {
    return renderUnAuthenticated();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AuthGateway);

/***/ }),

/***/ "./src/utils/axiosSetup.ts":
/*!*********************************!*\
  !*** ./src/utils/axiosSetup.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");


var setupAxiosForAuthUser = function setupAxiosForAuthUser(access_token) {
  console.log('axios-->', access_token);
  axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + access_token;
    return config;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setupAxiosForAuthUser);

/***/ }),

/***/ "./style/styled-light-theme.ts":
/*!*************************************!*\
  !*** ./style/styled-light-theme.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lightTheme = {
  background: "white",
  color: "black"
};
/* harmony default export */ __webpack_exports__["default"] = (lightTheme);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/site.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/site.scss ***!
  \******************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/antd/dist/antd.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/antd/dist/antd.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf */ "./assets/fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"My Open Sans Italic\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic;\n}\nbody {\n  margin: 0;\n  font-family: \"My Open Sans Italic\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}", "",{"version":3,"sources":["webpack://./style/site.scss"],"names":[],"mappings":"AAEA;EACI,kCAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AAAJ;AAGA;EACI,SAAA;EACA,8CAAA;EACA,mCAAA;EACA,kCAAA;AADJ","sourcesContent":["@import \"~antd/dist/antd.css\";\r\n\r\n@font-face {\r\n    font-family: 'My Open Sans Italic';\r\n    src: url('../assets/fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: italic;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: 'My Open Sans Italic', sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n  \r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./style/site.scss":
/*!*************************!*\
  !*** ./style/site.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_site_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./site.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/site.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_site_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_site_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_site_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_site_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4= ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";

/***/ }),

/***/ "./assets/fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf":
/*!*****************************************************************!*\
  !*** ./assets/fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7f52eb7982462de994b4.ttf";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__("./src/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJDLEtBQUssaUNBQWlDO0FBQ2hpQztBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYdkMsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBMkk7QUFDM0k7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUlxRjtBQUM3RyxPQUFPLCtEQUFlLDJIQUFPLElBQUksa0lBQWMsR0FBRyxrSUFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9hcHBDb25maWcvYnVpbGRDb25maWcudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vYnVpbGQvX21vZGUuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vaTE4bi9pMThuLmpzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9hcHBDb250ZXh0L2FwcENvbnRleHQudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcENvbnRleHQvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvYXBwQ29udGV4dC90YW5lbnQxLnRzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9jb21tb25Db21wb25lbnQvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5LnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9tb2R1bGVzL0xhbmdDaGFuZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aEdhdGV3YXkudHN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy91dGlscy9heGlvc1NldHVwLnRzIiwid2VicGFjazovL215LWFwcC8uL3N0eWxlL3N0eWxlZC1saWdodC10aGVtZS50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zdHlsZS9zaXRlLnNjc3MiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3R5bGUvc2l0ZS5zY3NzP2FmNTMiXSwic291cmNlc0NvbnRlbnQiOlsiLyplc2xpbnQtZGlzYWJsZSAqL1xyXG5cclxuY29uc3QgYnVpbENvbmZpZyA9IHtcclxuICAgIFNUQUdFOiBfX1NUQUdFX18sXHJcbiAgICBWRVJTSU9OOiBfX1ZFUlNJT05fXyxcclxuICAgIEJVSUxEOiBfX0JVSUxEX18sXHJcbiAgICBJU19OT0RFX1BST0RVQ1RJT046IF9fSVNfTk9ERV9QUk9EVUNUSU9OX19cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbENvbmZpZyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUFJPRDogJ3Byb2QnLFxyXG4gICAgU1RBR0U6ICdzdGFnZScsXHJcbiAgICBERVY6ICdkZXYnXHJcbn0iLCJpbXBvcnQgaTE4biBmcm9tICdpMThuZXh0J1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcclxuLy8gaW1wb3J0IGNvbW1vbkVOIGZyb20gJy4vZW4vY29tbW9uLmpzb24nXHJcbi8vIGltcG9ydCBjb21tb25ERSBmcm9tICcuL2RlL2NvbW1vbi5qc29uJ1xyXG4vLyBpbXBvcnQgYmFja2VuZCBmcm9tICdpMThuZXh0LXhoci1iYWNrZW5kJ1xyXG5pbXBvcnQgQmFja2VuZCBmcm9tICdpMThuZXh0LWh0dHAtYmFja2VuZCdcclxuaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3InXHJcbmltcG9ydCBidWlsQ29uZmlnIGZyb20gJy4uL2FwcENvbmZpZy9idWlsZENvbmZpZydcclxuY29uc3QgeyBQUk9ELCBERVYsIFNUQUdFIH0gPSByZXF1aXJlKCcuLi9idWlsZC9fbW9kZScpXHJcblxyXG4vLyBpbXBvcnQgYnVpbENvbmZpZyBmcm9tICcuLi9hcHBDb25maWcvYnVpbGRDb25maWcnXHJcbi8vIGltcG9ydCBfbW9kZSBmcm9tICcuLi9idWlsZC9fbW9kZSdcclxuXHJcbi8vIGNvbnN0IHJlc291cmNlcyA9IHtcclxuLy8gICBlbjoge1xyXG4vLyAgICAgdHJhbnNsYXRpb246IHt9LFxyXG4vLyAgICAgY29tbW9uOiBjb21tb25FTlxyXG4vLyAgIH0sXHJcbi8vICAgZGU6IHtcclxuLy8gICAgIHRyYW5zbGF0aW9uOiB7fSxcclxuLy8gICAgIGNvbW1vbjogY29tbW9uREVcclxuLy8gICB9XHJcbi8vIH1cclxuaTE4blxyXG4gIC8vIC51c2UoSHR0cEFwaSlcclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXHJcbiAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxyXG4gIC51c2UoQmFja2VuZClcclxuICAuaW5pdCh7XHJcbiAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgIC8vIHJlc291cmNlcyxcclxuICAgIGZhbGxiYWNrTG5nOiAnZW4nLFxyXG4gICAgZmFsbGJhY2tOUzogJ2NvbW1vbicsXHJcbiAgICBuczogWydjb21tb24nXSxcclxuICAgIC8vIGRlZmF1bHROUzogJ2NvbW1vbicsXHJcbiAgICBiYWNrZW5kOiB7XHJcbiAgICAgIGxvYWRQYXRoOiAoYnVpbENvbmZpZy5TVEFHRSA9PT0gREVWID8gJy9sb2NhbGVzLycgOiAnL3B1YmxpYy9sb2NhbGVzLycpICsgJ3t7bG5nfX0ve3tuc319Lmpzb24nXHJcbiAgICAgIC8vIGxvYWRQYXRoOiAnL2xvY2FsZXMve3tsbmd9fS97e25zfX0uanNvbidcclxuICAgICAgLy8gY3VzdG9tSGVhZGVyczogKCkgPT4ge1xyXG4gICAgICAvLyAgIGlmIChidWlsQ29uZmlnLlNUQUdFICE9PSBfbW9kZS5ERVYpIHtcclxuICAgICAgLy8gICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gd2luZG93LmFjY2Vzc190b2tlblxyXG4gICAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIHt9XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAgdXNlU3VzcGVuc2U6IHRydWUsXHJcbiAgICBsbmc6ICdlbicsXHJcbiAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLFxyXG4gICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2VcclxuICAgIH1cclxuICB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRNb2R1bGVUeEZpbGUgPSBhc3luYyAobW9kdWxlKSA9PiB7XHJcbiAgYXdhaXQgaTE4bi5sb2FkTmFtZXNwYWNlcyhtb2R1bGUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF1dGhHYXRld2F5IGZyb20gJ0Btb2R1bGVzL2F1dGgvYXV0aEdhdGV3YXknXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICdhbnRkL2VzL3BhZ2UtaGVhZGVyJ1xuaW1wb3J0IExhbmdDaGFuZ2UgZnJvbSAnQG1vZHVsZXMvTGFuZ0NoYW5nZSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCAnLi4vaTE4bi9pMThuJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICByZXR1cm4gPGRpdj5cbiAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9XCJMb2FkaW5nLi5cIj5cbiAgICAgIDxQYWdlSGVhZGVyIGdob3N0PXtmYWxzZX0gdGl0bGU9e3QoJ3NpdGVOYW1lJyl9XG4gICAgICAgIGV4dHJhPXtbXG4gICAgICAgICAgPExhbmdDaGFuZ2UgLz5cbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8QXV0aEdhdGV3YXkgLz5cbiAgICA8L1JlYWN0LlN1c3BlbnNlPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCJpbXBvcnQgQXBwQ29udGV4dEludCBmcm9tICdAbW9kYWxzL2FwcENvbnRleHQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGRlZmF1bHRUZW4gZnJvbSAnLi9kZWZhdWx0J1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8QXBwQ29udGV4dEludD4oZGVmYXVsdFRlbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHRcbiIsImltcG9ydCBBcHBDb250ZXh0IGZyb20gJ0Btb2RhbHMvYXBwQ29udGV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB0YW5lbnROYW1lOiAnZGVmYXVsdCB0YW5lbnQnLFxyXG4gIGFwaUVuZFBvaW50OiAnaHR0cHM6Ly9kZWYuY29tJyxcclxuICBnZXRJbmZvOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gJ0hlbGxvLCBJIGFtIGRlZmF1bHQgdGFuZW50J1xyXG4gIH1cclxufSBhcyBBcHBDb250ZXh0XG4iLCJpbXBvcnQgQXBwQ29udGV4dCBmcm9tICdAbW9kYWxzL2FwcENvbnRleHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdGFuZW50TmFtZTogJ3RhbmVudDEnLFxyXG4gIGFwaUVuZFBvaW50OiAnaHR0cHM6Ly90YW5lbnQxLmNvbScsXHJcbiAgZ2V0SW5mbzogKCkgPT4ge1xyXG4gICAgcmV0dXJuICdIZWxsbywgSSBhbSB0YW5lbnQxJ1xyXG4gIH1cclxufSBhcyBBcHBDb250ZXh0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgRXJyb3JCb3VuZGFyeVN0YXRlIHtcclxuICBoYXNFcnJvcjogYm9vbGVhblxyXG4gIGVycm9yOiBhbnlcclxufVxyXG5cclxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIEVycm9yQm91bmRhcnlTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSwgZXJyb3I6IG51bGwgfSBhcyBFcnJvckJvdW5kYXJ5U3RhdGVcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IgKGVycm9yOiBhbnkpIHsgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUsIGVycm9yIH0gfVxyXG4gIGNvbXBvbmVudERpZENhdGNoIChlcnJvcjogYW55LCBpbmZvOiBhbnkpIHsgY29uc29sZS5sb2coZXJyb3IsIGluZm8pIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xyXG4gICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5FcnJvckJvdW5kYXJ5OiBTb21ldGhpbmcgd2VudCB3cnNvbmcuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0ICcuLi9zdHlsZS9zaXRlLnNjc3MnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGRhcmtUaGVtZSBmcm9tICcuLi9zdHlsZS9zdHlsZWQtZGFyay10aGVtZSdcbmltcG9ydCBsaWdodFRoZW1lIGZyb20gJy4uL3N0eWxlL3N0eWxlZC1saWdodC10aGVtZSdcblxuaW1wb3J0IHsgQXV0aDBQcm92aWRlciB9IGZyb20gJ0BhdXRoMC9hdXRoMC1yZWFjdCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4vYXBwQ29udGV4dC9hcHBDb250ZXh0J1xuaW1wb3J0IHRhbmVudDFDb250ZXh0IGZyb20gJy4vYXBwQ29udGV4dC90YW5lbnQxJ1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnQGNvbXAvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5J1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpIGFzIEhUTUxFbGVtZW50XG4pXG5yb290LnJlbmRlcihcbiAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtsaWdodFRoZW1lfT5cbiAgICAgICAgPEF1dGgwUHJvdmlkZXJcbiAgICAgICAgICBkb21haW49XCJkZXYtbXVmLXNjaG9vbC5hdXRoMC5jb21cIlxuICAgICAgICAgIGNsaWVudElkPVwieXZrdmpzZTRXaTRnMXBoREFmMDZNcDl2a3NsRGxTU1ZcIlxuICAgICAgICAgIHJlZGlyZWN0VXJpPXt3aW5kb3cubG9jYXRpb24ub3JpZ2lufT5cbiAgICAgICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0YW5lbnQxQ29udGV4dH0+XG4gICAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9BdXRoMFByb3ZpZGVyPixcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0Vycm9yQm91bmRhcnk+XG4pXG5cbi8vIElmIHlvdSB3YW50IHRvIHN0YXJ0IG1lYXN1cmluZyBwZXJmb3JtYW5jZSBpbiB5b3VyIGFwcCwgcGFzcyBhIGZ1bmN0aW9uXG4vLyB0byBsb2cgcmVzdWx0cyAoZm9yIGV4YW1wbGU6IHJlcG9ydFdlYlZpdGFscyhjb25zb2xlLmxvZykpXG4vLyBvciBzZW5kIHRvIGFuIGFuYWx5dGljcyBlbmRwb2ludC4gTGVhcm4gbW9yZTogaHR0cHM6Ly9iaXQubHkvQ1JBLXZpdGFsc1xuLy8gcmVwb3J0V2ViVml0YWxzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnYW50ZC9lcy9zZWxlY3QnO1xyXG5cclxuY29uc3QgTGFuZ0NoYW5nZSA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBsYW5ncyA9IFt7XHJcbiAgICAgICAgdmFsdWU6ICdlbicsXHJcbiAgICAgICAgbGFiZWw6ICdFbmdsaXNoJyxcclxuICAgIH0sIHtcclxuICAgICAgICB2YWx1ZTogJ2RlJyxcclxuICAgICAgICBsYWJlbDogJ0dlcm1hbicsXHJcbiAgICB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibGFuZ19jaGFuZ2VcIj5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cImVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e2xhbmdzfSAvPlxyXG4gICAgPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5nQ2hhbmdlXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xyXG5pbXBvcnQgc2V0dXBBeGlvc0ZvckF1dGhVc2VyIGZyb20gJ0B1dGlscy9heGlvc1NldHVwJ1xyXG5cclxuY29uc3QgVW5BdXRoZW50aWNhdGVkID0gbG9hZGFibGUoYXN5bmMgKCkgPT4gYXdhaXQgaW1wb3J0KCcuL1VuQXV0aGVudGljYXRlZCcpKVxyXG5jb25zdCBBdXRoZW50aWNhdGVkID0gbG9hZGFibGUoYXN5bmMgKCkgPT4gYXdhaXQgaW1wb3J0KCcuL0F1dGhlbnRpY2F0ZWQnKSlcclxuXHJcbmNvbnN0IEF1dGhHYXRld2F5ID0gKCkgPT4ge1xuICBjb25zdCBbaXNMb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IG9uTG9naW4gPSAoYWNjZXNzX3Rva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICh3aW5kb3cgYXMgYW55KS5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW5cclxuICAgIHNldExvZ2luKHRydWUpXHJcbiAgICBzZXR1cEF4aW9zRm9yQXV0aFVzZXIoYWNjZXNzX3Rva2VuKVxyXG4gIH1cclxuICBjb25zdCBvbkxvZ291dCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkxvZ291dCcpXHJcbiAgICBzZXRMb2dpbihmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclVuQXV0aGVudGljYXRlZCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8VW5BdXRoZW50aWNhdGVkIG9uTG9naW49e29uTG9naW59Lz5cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlckF1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPEF1dGhlbnRpY2F0ZWQgb25Mb2dvdXQ9e29uTG9nb3V0fSAvPlxyXG4gIH1cclxuXHJcbiAgaWYgKGlzTG9naW4pIHtcclxuICAgIHJldHVybiByZW5kZXJBdXRoZW50aWNhdGVkKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJlbmRlclVuQXV0aGVudGljYXRlZCgpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoR2F0ZXdheVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBzZXR1cEF4aW9zRm9yQXV0aFVzZXIgPSAoYWNjZXNzX3Rva2VuOiBzdHJpbmcpID0+IHtcclxuICBjb25zb2xlLmxvZygnYXhpb3MtLT4nLCBhY2Nlc3NfdG9rZW4pXHJcbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWc6IGFueSkge1xyXG4gICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIGFjY2Vzc190b2tlblxyXG4gICAgcmV0dXJuIGNvbmZpZ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldHVwQXhpb3NGb3JBdXRoVXNlclxyXG4iLCJpbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAbW9kYWxzL3V0aWxzL3RoZW1lXCI7XHJcblxyXG5jb25zdCBsaWdodFRoZW1lOiBUaGVtZSA9IHtcclxuICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcclxuICAgIGNvbG9yOiBcImJsYWNrXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpZ2h0VGhlbWUiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2FudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoX3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk15IE9wZW4gU2FucyBJdGFsaWNcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeSBPcGVuIFNhbnMgSXRhbGljXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGUvc2l0ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksa0NBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksU0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQURKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIn5hbnRkL2Rpc3QvYW50ZC5jc3NcXFwiO1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ015IE9wZW4gU2FucyBJdGFsaWMnO1xcclxcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ015IE9wZW4gU2FucyBJdGFsaWMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuICBcXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaXRlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaXRlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiYnVpbENvbmZpZyIsIlNUQUdFIiwiX19TVEFHRV9fIiwiVkVSU0lPTiIsIl9fVkVSU0lPTl9fIiwiQlVJTEQiLCJfX0JVSUxEX18iLCJJU19OT0RFX1BST0RVQ1RJT04iLCJfX0lTX05PREVfUFJPRFVDVElPTl9fIiwibW9kdWxlIiwiZXhwb3J0cyIsIlBST0QiLCJERVYiLCJpMThuIiwiaW5pdFJlYWN0STE4bmV4dCIsIkJhY2tlbmQiLCJMYW5ndWFnZURldGVjdG9yIiwicmVxdWlyZSIsInVzZSIsImluaXQiLCJkZWJ1ZyIsImZhbGxiYWNrTG5nIiwiZmFsbGJhY2tOUyIsIm5zIiwiYmFja2VuZCIsImxvYWRQYXRoIiwidXNlU3VzcGVuc2UiLCJsbmciLCJrZXlTZXBhcmF0b3IiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJsb2FkTW9kdWxlVHhGaWxlIiwibG9hZE5hbWVzcGFjZXMiLCJSZWFjdCIsIkF1dGhHYXRld2F5IiwiUGFnZUhlYWRlciIsIkxhbmdDaGFuZ2UiLCJ1c2VUcmFuc2xhdGlvbiIsIkFwcCIsInQiLCJkZWZhdWx0VGVuIiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ0YW5lbnROYW1lIiwiYXBpRW5kUG9pbnQiLCJnZXRJbmZvIiwiRXJyb3JCb3VuZGFyeSIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImVycm9yIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIlRoZW1lUHJvdmlkZXIiLCJsaWdodFRoZW1lIiwiQXV0aDBQcm92aWRlciIsInRhbmVudDFDb250ZXh0Iiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJTZWxlY3QiLCJsYW5ncyIsInZhbHVlIiwibGFiZWwiLCJvbkNoYW5nZSIsImNoYW5nZUxhbmd1YWdlIiwid2lkdGgiLCJ1c2VTdGF0ZSIsImxvYWRhYmxlIiwic2V0dXBBeGlvc0ZvckF1dGhVc2VyIiwiVW5BdXRoZW50aWNhdGVkIiwiQXV0aGVudGljYXRlZCIsImlzTG9naW4iLCJzZXRMb2dpbiIsIm9uTG9naW4iLCJhY2Nlc3NfdG9rZW4iLCJvbkxvZ291dCIsInJlbmRlclVuQXV0aGVudGljYXRlZCIsInJlbmRlckF1dGhlbnRpY2F0ZWQiLCJheGlvcyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJhY2tncm91bmQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=