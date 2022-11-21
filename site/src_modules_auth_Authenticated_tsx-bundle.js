"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_modules_auth_Authenticated_tsx"],{

/***/ "./src/modules/auth/Authenticated.tsx":
/*!********************************************!*\
  !*** ./src/modules/auth/Authenticated.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/layout */ "./node_modules/antd/es/layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/home */ "./src/modules/home/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ "./src/redux/store.ts");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var _LogoutButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogoutButton */ "./src/modules/auth/LogoutButton.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _appConfig_buildConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../appConfig/buildConfig */ "./appConfig/buildConfig.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../i18n/i18n */ "./i18n/i18n.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { Breadcrumb, Layout, Menu } from 'antd';

 // import OrderIndex from './modules/order/index'
// import SupportIndex from './modules/support';









var Header = antd_es_layout__WEBPACK_IMPORTED_MODULE_8__["default"].Header,
    Content = antd_es_layout__WEBPACK_IMPORTED_MODULE_8__["default"].Content,
    Footer = antd_es_layout__WEBPACK_IMPORTED_MODULE_8__["default"].Footer;

 // import OrderIndex from '@modules/order/index'
// import SupportIndex from '@modules/support/index'
// import ServiceIndex from '@modules/services'



var OrderIndex = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var fff;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].injectModuleReducers('order');

        case 2:
          fff = _context.sent;
          _context.next = 5;
          return (0,_i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.loadModuleTxFile)('order');

        case 5:
          _context.next = 7;
          return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("src_modules_order_index_tsx-node_modules_moment_locale_sync_recursive_en_7Cit")]).then(__webpack_require__.bind(__webpack_require__, /*! @modules/order/index */ "./src/modules/order/index.tsx"));

        case 7:
          return _context.abrupt("return", _context.sent);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var ServiceIndex = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var fff;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].injectModuleReducers('service');

        case 2:
          fff = _context2.sent;
          _context2.next = 5;
          return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("src_modules_services_redux_serviceList_serviceListSlice_ts"), __webpack_require__.e("src_modules_services_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! @modules/services */ "./src/modules/services/index.tsx"));

        case 5:
          return _context2.abrupt("return", _context2.sent);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
var SupportIndex = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0,_i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.loadModuleTxFile)('support');

        case 2:
          _context3.next = 4;
          return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("src_modules_support_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! @modules/support/index */ "./src/modules/support/index.tsx"));

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));

var Authenticated = function Authenticated(props) {
  var _useAuth = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4__.useAuth0)(),
      user = _useAuth.user;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(antd_es_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "layout",
      children: [t('welcomeMessage', {
        user: user === null || user === void 0 ? void 0 : user.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_LogoutButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onLogout: props.onLogout
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Header, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.NavLink, {
            to: "/",
            children: [" ", t('label_home'), " "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.NavLink, {
            to: "/order",
            children: [" ", t('label_order'), " "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.NavLink, {
            to: "/Service",
            children: [" ", t('label_services'), " "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.NavLink, {
            to: "/support",
            children: [" ", t('label_support'), " "]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Content, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
              path: "/",
              element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
              path: "/order",
              element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(OrderIndex, {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
              path: "/service",
              element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ServiceIndex, {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
              path: "/support",
              element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SupportIndex, {})
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Footer, {
        children: "".concat(_appConfig_buildConfig__WEBPACK_IMPORTED_MODULE_7__["default"].STAGE, " | ").concat(_appConfig_buildConfig__WEBPACK_IMPORTED_MODULE_7__["default"].VERSION, " | ").concat(_appConfig_buildConfig__WEBPACK_IMPORTED_MODULE_7__["default"].IS_NODE_PRODUCTION, " | ").concat(_appConfig_buildConfig__WEBPACK_IMPORTED_MODULE_7__["default"].BUILD)
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Authenticated);

/***/ }),

/***/ "./src/modules/auth/LogoutButton.tsx":
/*!*******************************************!*\
  !*** ./src/modules/auth/LogoutButton.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// import { Button } from 'antd';




var LogoutButton = function LogoutButton(props) {
  var _useAuth = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__.useAuth0)(),
      logout = _useAuth.logout;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  var onLogout = function onLogout() {
    logout({
      returnTo: window.location.origin
    });
    props.onLogout();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_es_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onLogout,
    children: t('label_logout')
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LogoutButton);

/***/ }),

/***/ "./src/modules/home/index.tsx":
/*!************************************!*\
  !*** ./src/modules/home/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_order_OrderWidget_OrderHomeWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/order/OrderWidget/OrderHomeWidget */ "./src/modules/order/OrderWidget/OrderHomeWidget.tsx");
/* harmony import */ var _srcRoot_appContext_appContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @srcRoot/appContext/appContext */ "./src/appContext/appContext.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Home = function Home(props) {
  var appContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_srcRoot_appContext_appContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "Home_Order_widger",
    children: ["Context: ", appContext.tanentName, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_modules_order_OrderWidget_OrderHomeWidget__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/modules/order/OrderWidget/OrderHomeWidget.tsx":
/*!***********************************************************!*\
  !*** ./src/modules/order/OrderWidget/OrderHomeWidget.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_descriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/descriptions */ "./node_modules/antd/es/descriptions/index.js");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/card */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_order_redux_orderHomeWidget_orderHWAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/order/redux/orderHomeWidget/orderHWAction */ "./src/modules/order/redux/orderHomeWidget/orderHWAction.ts");
/* harmony import */ var _OrderHomeWidgetHeder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderHomeWidgetHeder */ "./src/modules/order/OrderWidget/OrderHomeWidgetHeder.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

// import { Card, Descriptions, PageHeader } from 'antd';




 // import StylishDescription from './CaseStyleWidgt';




var OrderHomeWidget = function OrderHomeWidget(props) {
  var _props$orderHWData, _props$orderHWData4;

  console.log('----In Render----', (_props$orderHWData = props.orderHWData) === null || _props$orderHWData === void 0 ? void 0 : _props$orderHWData.lastStatusTime);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    console.log('----In useEffect----');
    props.fetchOrderHWData != null && props.fetchOrderHWData();
  }, []);
  var expensiveValue = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    var _props$orderHWData2, _props$orderHWData3;

    return new Date((_props$orderHWData2 = props.orderHWData) !== null && _props$orderHWData2 !== void 0 && _props$orderHWData2.lastStatusTime ? ((_props$orderHWData3 = props.orderHWData) === null || _props$orderHWData3 === void 0 ? void 0 : _props$orderHWData3.lastStatusTime) * 1000 : 0).toString();
  }, [(_props$orderHWData4 = props.orderHWData) === null || _props$orderHWData4 === void 0 ? void 0 : _props$orderHWData4.lastStatusTime]); // React.useEffect(() => {
  //     console.log('----In use effect----', props.orderHWData?.lastStatusTime)
  //     props.fetchOrderHWData && props.fetchOrderHWData()
  // }, [props.orderHWData?.lastStatusTime]) // ---> Infinite call
  // React.useEffect(() => {
  //     console.log('----In use effect----', props.orderHWData?.lastStatusTime)
  //     props.fetchOrderHWData && props.fetchOrderHWData()
  // }, [props.orderHWData]) // ---> Infinite call

  var onRefreshClick = function onRefreshClick() {
    props.fetchOrderHWData != null && props.fetchOrderHWData();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: 'sd',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      "data-testid": "sectiontitle",
      children: "Order"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_OrderHomeWidgetHeder__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onRefreshClick: onRefreshClick,
      lastStatusTime: expensiveValue
    }), props.errorMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      "data-testid": "error",
      children: props.errorMessage
    }) : '', props.orderHWData != null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      "data-testid": "order_items_list_wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd_es_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Order Items",
        "data-testid": "order_items_list_title",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_6__["default"], {
          bordered: true,
          column: 1,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
            label: "Total Order",
            "data-testid": "order_items_list_total",
            children: props.orderHWData.totalOrder
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
            label: "Pending",
            "data-testid": "order_items_list_pending",
            children: props.orderHWData.pendingOrder
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
            label: "Cancel",
            "data-testid": "order_items_list_cancel",
            children: props.orderHWData.canceledOrder
          })]
        })
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      "data-testid": "order_item_loading",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        "data-testid": "loading",
        children: "Loading.."
      })
    })]
  });
};

var mapStateToProps = function mapStateToProps(state) {
  var _orderHomeWidget, _orderHomeWidget2;

  return {
    orderHWData: state === null || state === void 0 ? void 0 : (_orderHomeWidget = state.orderHomeWidget) === null || _orderHomeWidget === void 0 ? void 0 : _orderHomeWidget.orderHWData,
    errorMessage: state === null || state === void 0 ? void 0 : (_orderHomeWidget2 = state.orderHomeWidget) === null || _orderHomeWidget2 === void 0 ? void 0 : _orderHomeWidget2.errorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchOrderHWData: function fetchOrderHWData() {
      return dispatch((0,_modules_order_redux_orderHomeWidget_orderHWAction__WEBPACK_IMPORTED_MODULE_2__.fetchOrderHWData)());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(OrderHomeWidget));

/***/ }),

/***/ "./src/modules/order/OrderWidget/OrderHomeWidgetHeder.tsx":
/*!****************************************************************!*\
  !*** ./src/modules/order/OrderWidget/OrderHomeWidgetHeder.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd_es_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/page-header */ "./node_modules/antd/es/page-header/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
 // import { Button, Descriptions, PageHeader } from 'antd';





var OrderHomeWidgetHeder = function OrderHomeWidgetHeder(props) {
  // const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  var onRefreshClick = function onRefreshClick() {
    props.onRefreshClick();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "OrderEditorWrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd_es_page_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ghost: false,
      onBack: function onBack() {
        return window.history.back();
      },
      title: "Order",
      subTitle: props.lastStatusTime,
      extra: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd_es_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "primary",
        onClick: onRefreshClick,
        "data-testid": "refresh",
        children: "refresh"
      }, "1")]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OrderHomeWidgetHeder);

/***/ }),

/***/ "./src/modules/order/redux/orderHomeWidget/main.ts":
/*!*********************************************************!*\
  !*** ./src/modules/order/redux/orderHomeWidget/main.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var _orderHWAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderHWAction */ "./src/modules/order/redux/orderHomeWidget/orderHWAction.ts");
/* harmony import */ var _orderHWReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderHWReducer */ "./src/modules/order/redux/orderHomeWidget/orderHWReducer.ts");


var initialState = {
  orderHWData: {
    totalOrder: 0,
    pendingOrder: 0,
    canceledOrder: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _orderHWAction__WEBPACK_IMPORTED_MODULE_0__.ACT.SET_HOME_WIDGET_ORDERS:
      return (0,_orderHWReducer__WEBPACK_IMPORTED_MODULE_1__.setOrderHomeWidgetReducer)(state, action);

    case _orderHWAction__WEBPACK_IMPORTED_MODULE_0__.ACT.SET_HOME_WIDGET_ORDERS_ERROR:
      return (0,_orderHWReducer__WEBPACK_IMPORTED_MODULE_1__.setOrderHomeWidgetErrorReducer)(state, action);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/modules/order/redux/orderHomeWidget/orderHWAction.ts":
/*!******************************************************************!*\
  !*** ./src/modules/order/redux/orderHomeWidget/orderHWAction.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACT": function() { return /* binding */ ACT; },
/* harmony export */   "fetchOrderHWData": function() { return /* binding */ fetchOrderHWData; },
/* harmony export */   "setOrderHomeWidgetAction": function() { return /* binding */ setOrderHomeWidgetAction; },
/* harmony export */   "setOrderHomeWidgetErrorAction": function() { return /* binding */ setOrderHomeWidgetErrorAction; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var ACT = {
  SET_HOME_WIDGET_ORDERS: '@orders/SET_HOME_WIDGET_ORDERS',
  SET_HOME_WIDGET_ORDERS_ERROR: '@orders/SET_HOME_WIDGET_ORDERS_ERROR'
};

/*eslint-disable */
var fetchOrderHWData = function fetchOrderHWData() {
  return function (dispatch, getState) {
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('http://localhost:3010/api/homeWidget', {
      headers: {
        Authorization: 'Bearer ' + window.access_token
      }
    }).then(function (res) {
      dispatch(setOrderHomeWidgetErrorAction(undefined, undefined));
      dispatch(setOrderHomeWidgetAction(res.data.totalOrder, res.data.pendingOrder, res.data.canceledOrder, new Date().getTime() + ''));
    }).catch(function (err) {
      console.log(err);
      dispatch(setOrderHomeWidgetErrorAction(err, typeof err === 'string' ? err : 'Something went wrong'));
    }); // fetch('http://localhost:3010/api/homeWidget', {headers: {Authorization: 'Bearer ' + window.access_token}})
    // .then(res => res.json())
    // .then(res => {
    //     //res = {totalOrder: 10, pendingOrder: 3, canceledOrder: 7}
    //     dispatch(setOrderHomeWidgetAction(res.totalOrder, res.pendingOrder, res.canceledOrder, new Date().getTime()+""))
    // }).catch(err => {
    //     dispatch(setOrderHomeWidgetErrorAction(err, typeof err === 'string' ? err :  "Something went wrong"))
    // })
  };
};
var setOrderHomeWidgetErrorAction = function setOrderHomeWidgetErrorAction(err, errorMsg) {
  return {
    type: ACT.SET_HOME_WIDGET_ORDERS_ERROR,
    payload: {
      errorMsg: errorMsg,
      err: err ? err.toString() : undefined
    }
  };
};
var setOrderHomeWidgetAction = function setOrderHomeWidgetAction(totalOrder, pendingOrder, canceledOrder, statusTime) {
  // console.log("acccc->", totalOrder, pendingOrder, canceledOrder)
  return {
    type: ACT.SET_HOME_WIDGET_ORDERS,
    payload: {
      totalOrder: totalOrder,
      pendingOrder: pendingOrder,
      canceledOrder: canceledOrder,
      lastStatusTime: statusTime
    }
  };
}; // export const setOrders = createAction<number, string>('orders/setOrders')

/***/ }),

/***/ "./src/modules/order/redux/orderHomeWidget/orderHWReducer.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/order/redux/orderHomeWidget/orderHWReducer.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setOrderHomeWidgetErrorReducer": function() { return /* binding */ setOrderHomeWidgetErrorReducer; },
/* harmony export */   "setOrderHomeWidgetReducer": function() { return /* binding */ setOrderHomeWidgetReducer; }
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/modules/order/redux/orderHomeWidget/main.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { BaseAction } from '@modals/redux/BaseAction';
// import { BaseReducer } from '@modals/redux/baeReducer';
// import { createReducer } from '@reduxjs/toolkit'

var setOrderHomeWidgetErrorReducer = function setOrderHomeWidgetErrorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _main__WEBPACK_IMPORTED_MODULE_0__.initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var _action = action;
  return _objectSpread(_objectSpread({}, state), {}, {
    errorMessage: _action.payload.errorMsg
  });
};
var setOrderHomeWidgetReducer = function setOrderHomeWidgetReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _main__WEBPACK_IMPORTED_MODULE_0__.initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var _action = action; // console.log("redddd->", _action.payload.totalOrder, _action.payload.pendingOrder, _action.payload.canceledOrder)

  return _objectSpread(_objectSpread({}, state), {}, {
    orderHWData: {
      totalOrder: _action.payload.totalOrder,
      pendingOrder: _action.payload.pendingOrder,
      canceledOrder: _action.payload.canceledOrder,
      lastStatusTime: _action.payload.lastStatusTime
    }
  });
}; // export default (state: OrdersState = initialState, action: SetOrdersAction) => {
//     return
// }

/***/ }),

/***/ "./src/modules/order/redux/reducers.ts":
/*!*********************************************!*\
  !*** ./src/modules/order/redux/reducers.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_order_redux_orderHomeWidget_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/order/redux/orderHomeWidget/main */ "./src/modules/order/redux/orderHomeWidget/main.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import orderListReducer from '@modules/order/redux/orders/main'

var staticReducers = {
  orderHomeWidget: _modules_order_redux_orderHomeWidget_main__WEBPACK_IMPORTED_MODULE_0__["default"]
};
var dynamicReducers = {// orderList: import('@modules/order/redux/orders/main')
};
var orderIndexReducer = {
  staticReducers: staticReducers,
  getDynamicReducers: function () {
    var _getDynamicReducers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var dynamicReducers;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e(/*! import() */ "src_modules_order_redux_orders_main_ts-src_modules_order_redux_orders_ordersReducer_ts").then(__webpack_require__.bind(__webpack_require__, /*! @modules/order/redux/orders/main */ "./src/modules/order/redux/orders/main.ts"));

            case 2:
              _context.t0 = _context.sent.default;
              dynamicReducers = {
                orderList: _context.t0
              };
              return _context.abrupt("return", dynamicReducers);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getDynamicReducers() {
      return _getDynamicReducers.apply(this, arguments);
    }

    return getDynamicReducers;
  }()
};
/* harmony default export */ __webpack_exports__["default"] = (orderIndexReducer);

/***/ }),

/***/ "./src/modules/services/redux/indexReducers.ts":
/*!*****************************************************!*\
  !*** ./src/modules/services/redux/indexReducers.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var staticReducers = {};
var servicesIndexReducer = {
  staticReducers: staticReducers,
  getDynamicReducers: function () {
    var _getDynamicReducers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var dynamicReducers;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e(/*! import() */ "src_modules_services_redux_serviceList_serviceListSlice_ts").then(__webpack_require__.bind(__webpack_require__, /*! @modules/services/redux/serviceList/serviceListSlice */ "./src/modules/services/redux/serviceList/serviceListSlice.ts"));

            case 2:
              _context.t0 = _context.sent.default;
              dynamicReducers = {
                serviceList: _context.t0
              };
              return _context.abrupt("return", dynamicReducers);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getDynamicReducers() {
      return _getDynamicReducers.apply(this, arguments);
    }

    return getDynamicReducers;
  }()
};
/* harmony default export */ __webpack_exports__["default"] = (servicesIndexReducer);

/***/ }),

/***/ "./src/redux/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/redux/rootReducer.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addModulesReducres": function() { return /* binding */ addModulesReducres; },
/* harmony export */   "rootReducer": function() { return /* binding */ rootReducer; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _modules_order_redux_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/order/redux/reducers */ "./src/modules/order/redux/reducers.ts");
/* harmony import */ var _modules_services_redux_indexReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/services/redux/indexReducers */ "./src/modules/services/redux/indexReducers.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var staticReducers = _objectSpread(_objectSpread({}, _modules_order_redux_reducers__WEBPACK_IMPORTED_MODULE_0__["default"].staticReducers), _modules_services_redux_indexReducers__WEBPACK_IMPORTED_MODULE_1__["default"].staticReducers);

var addModulesReducres = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(preLoadedDyanamicReducers, module) {
    var asynchReducers;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!module) {
              _context.next = 13;
              break;
            }

            asynchReducers = {};

            if (!(module === 'order')) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _modules_order_redux_reducers__WEBPACK_IMPORTED_MODULE_0__["default"].getDynamicReducers();

          case 5:
            asynchReducers = _context.sent;
            _context.next = 12;
            break;

          case 8:
            if (!(module === 'service')) {
              _context.next = 12;
              break;
            }

            _context.next = 11;
            return _modules_services_redux_indexReducers__WEBPACK_IMPORTED_MODULE_1__["default"].getDynamicReducers();

          case 11:
            asynchReducers = _context.sent;

          case 12:
            return _context.abrupt("return", (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)(_objectSpread(_objectSpread(_objectSpread({}, staticReducers), preLoadedDyanamicReducers), asynchReducers)));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addModulesReducres(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)(staticReducers); // const createOrUpdateReducers: any = (module: string | undefined) => {
//     if(module){
//         let asynchReducers;
//         if(module === "order")
//             asynchReducers = orderIndexReducer.dynamicReducers
//         return combineReducers<AppSate>({
//             ...staticReducers.orders,
//             ...asynchReducers
//         })
//     }
//     else {
//         return combineReducers<AppSate>({
//             ...staticReducers.orders
//         })
//     }
// }
// export interface AppState = {
// }
// export default createOrUpdateReducers

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": function() { return /* binding */ useAppDispatch; }
/* harmony export */ });
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootReducer */ "./src/redux/rootReducer.ts");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import rootReducer from './rootReducer'





var middleware = [(redux_logger__WEBPACK_IMPORTED_MODULE_2___default()), redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]];
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_0__.rootReducer,
  middleware: middleware
});
store.dynamicReducers = {};

store.injectModuleReducers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(module) {
    var newReducers;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_rootReducer__WEBPACK_IMPORTED_MODULE_0__.addModulesReducres)(store.dynamicReducers, module);

          case 2:
            newReducers = _context.sent;
            store.replaceReducer(newReducers);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var useAppDispatch = function useAppDispatch() {
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
}; // export type AppThunk = ThunkAction<void, RootState, unknown, Action>

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21vZHVsZXNfYXV0aF9BdXRoZW50aWNhdGVkX3RzeC1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQTtBQUNBO0NBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsSUFBUWEsTUFBUixHQUFvQ2IsNkRBQXBDO0FBQUEsSUFBZ0JjLE9BQWhCLEdBQW9DZCw4REFBcEM7QUFBQSxJQUF5QmUsTUFBekIsR0FBb0NmLDZEQUFwQztBQUNBO0NBR0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWtCLFVBQVUsR0FBR1gsK0RBQVEsMEVBQUM7RUFBQTtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQSxPQUNSQyx5RUFBQSxDQUEyQixPQUEzQixDQURROztRQUFBO1VBQ3BCWSxHQURvQjtVQUFBO1VBQUEsT0FFcEJILDREQUFnQixDQUFDLE9BQUQsQ0FGSTs7UUFBQTtVQUFBO1VBQUEsT0FHYix1UkFIYTs7UUFBQTtVQUFBOztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBLENBQUQsR0FBM0I7QUFNQSxJQUFNSSxZQUFZLEdBQUdkLCtEQUFRLDBFQUFDO0VBQUE7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQUEsT0FDVkMseUVBQUEsQ0FBMkIsU0FBM0IsQ0FEVTs7UUFBQTtVQUN0QlksR0FEc0I7VUFBQTtVQUFBLE9BRWYsNlRBRmU7O1FBQUE7VUFBQTs7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQSxDQUFELEdBQTdCO0FBS0EsSUFBTUUsWUFBWSxHQUFHZiwrREFBUSwwRUFBQztFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQSxPQUN0QlUsNERBQWdCLENBQUMsU0FBRCxDQURNOztRQUFBO1VBQUE7VUFBQSxPQUVmLDJPQUZlOztRQUFBO1VBQUE7O1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUEs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SUFBQTtFQUFBLENBQTdCOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQU9PLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7RUFBQSxPQUFNUCx3REFBVyxFQUFqQjtBQUFBLENBQXZCLEVBQ1A7O0FBRUEsK0RBQWUxRyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvYXV0aC9BdXRoZW50aWNhdGVkLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbW9kdWxlcy9hdXRoL0xvZ291dEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvb3JkZXIvT3JkZXJXaWRnZXQvT3JkZXJIb21lV2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbW9kdWxlcy9vcmRlci9PcmRlcldpZGdldC9PcmRlckhvbWVXaWRnZXRIZWRlci50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvb3JkZXIvcmVkdXgvb3JkZXJIb21lV2lkZ2V0L21haW4udHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvb3JkZXIvcmVkdXgvb3JkZXJIb21lV2lkZ2V0L29yZGVySFdBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvb3JkZXIvcmVkdXgvb3JkZXJIb21lV2lkZ2V0L29yZGVySFdSZWR1Y2VyLnRzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9tb2R1bGVzL29yZGVyL3JlZHV4L3JlZHVjZXJzLnRzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9tb2R1bGVzL3NlcnZpY2VzL3JlZHV4L2luZGV4UmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3JlZHV4L3Jvb3RSZWR1Y2VyLnRzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9yZWR1eC9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExheW91dCBmcm9tICdhbnRkL2VzL2xheW91dCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IE9yZGVySW5kZXggZnJvbSAnLi9tb2R1bGVzL29yZGVyL2luZGV4J1xyXG4vLyBpbXBvcnQgU3VwcG9ydEluZGV4IGZyb20gJy4vbW9kdWxlcy9zdXBwb3J0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnQG1vZHVsZXMvaG9tZSdcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTGluaywgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnXHJcbmltcG9ydCB7IHVzZUF1dGgwIH0gZnJvbSAnQGF1dGgwL2F1dGgwLXJlYWN0J1xyXG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gJy4vTG9nb3V0QnV0dG9uJ1xyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICdAbW9kYWxzL2Jhc2VQcm9wc0ludGVyZmFjZSdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGJ1aWxDb25maWcgZnJvbSAnLi4vLi4vLi4vYXBwQ29uZmlnL2J1aWxkQ29uZmlnJ1xyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXRcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBsb2FkTW9kdWxlVHhGaWxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9pMThuJ1xyXG5cclxuLy8gaW1wb3J0IE9yZGVySW5kZXggZnJvbSAnQG1vZHVsZXMvb3JkZXIvaW5kZXgnXHJcbi8vIGltcG9ydCBTdXBwb3J0SW5kZXggZnJvbSAnQG1vZHVsZXMvc3VwcG9ydC9pbmRleCdcclxuLy8gaW1wb3J0IFNlcnZpY2VJbmRleCBmcm9tICdAbW9kdWxlcy9zZXJ2aWNlcydcclxuXHJcbmNvbnN0IE9yZGVySW5kZXggPSBsb2FkYWJsZShhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZmZmID0gYXdhaXQgc3RvcmUuaW5qZWN0TW9kdWxlUmVkdWNlcnMoJ29yZGVyJylcclxuICBhd2FpdCBsb2FkTW9kdWxlVHhGaWxlKCdvcmRlcicpXHJcbiAgcmV0dXJuIGF3YWl0IGltcG9ydCgnQG1vZHVsZXMvb3JkZXIvaW5kZXgnKVxyXG59KVxyXG5cclxuY29uc3QgU2VydmljZUluZGV4ID0gbG9hZGFibGUoYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGZmZiA9IGF3YWl0IHN0b3JlLmluamVjdE1vZHVsZVJlZHVjZXJzKCdzZXJ2aWNlJylcclxuICByZXR1cm4gYXdhaXQgaW1wb3J0KCdAbW9kdWxlcy9zZXJ2aWNlcycpXHJcbn0pXHJcblxyXG5jb25zdCBTdXBwb3J0SW5kZXggPSBsb2FkYWJsZShhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgbG9hZE1vZHVsZVR4RmlsZSgnc3VwcG9ydCcpXHJcbiAgcmV0dXJuIGF3YWl0IGltcG9ydCgnQG1vZHVsZXMvc3VwcG9ydC9pbmRleCcpXHJcbn0pXHJcblxyXG5pbnRlcmZhY2UgQXV0aGVudGljYXRlZE93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBvbkxvZ291dDogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBBdXRoZW50aWNhdGVkOiBSZWFjdC5GQzxBdXRoZW50aWNhdGVkT3duUHJvcHM+ID0gKHByb3BzOiBBdXRoZW50aWNhdGVkT3duUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgwKClcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPExheW91dCBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgICB7dCgnd2VsY29tZU1lc3NhZ2UnLCB7dXNlcjogdXNlcj8ubmFtZX0pfVxyXG4gICAgICAgIDxMb2dvdXRCdXR0b24gb25Mb2dvdXQ9e3Byb3BzLm9uTG9nb3V0fSAvPlxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCI+IHt0KCdsYWJlbF9ob21lJyl9IDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvb3JkZXJcIj4ge3QoJ2xhYmVsX29yZGVyJyl9IDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvU2VydmljZVwiPiB7dCgnbGFiZWxfc2VydmljZXMnKX0gPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9zdXBwb3J0XCI+IHt0KCdsYWJlbF9zdXBwb3J0Jyl9IDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvb3JkZXJcIiBlbGVtZW50PXs8T3JkZXJJbmRleCAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZXJ2aWNlXCIgZWxlbWVudD17PFNlcnZpY2VJbmRleCAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zdXBwb3J0XCIgZWxlbWVudD17PFN1cHBvcnRJbmRleCAvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgIDxGb290ZXI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGAke2J1aWxDb25maWcuU1RBR0V9IHwgJHtidWlsQ29uZmlnLlZFUlNJT059IHwgJHtidWlsQ29uZmlnLklTX05PREVfUFJPRFVDVElPTn0gfCAke2J1aWxDb25maWcuQlVJTER9YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoZW50aWNhdGVkXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoMCB9IGZyb20gJ0BhdXRoMC9hdXRoMC1yZWFjdCdcclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnQG1vZGFscy9iYXNlUHJvcHNJbnRlcmZhY2UnXHJcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvZXMvYnV0dG9uJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgTG9nb3V0QnV0dG9uT3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIG9uTG9nb3V0OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcblxyXG5jb25zdCBMb2dvdXRCdXR0b246IFJlYWN0LkZDPExvZ291dEJ1dHRvbk93blByb3BzPiA9IChwcm9wczogTG9nb3V0QnV0dG9uT3duUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxvZ291dCB9ID0gdXNlQXV0aDAoKVxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgY29uc3Qgb25Mb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2dvdXQoeyByZXR1cm5Ubzogd2luZG93LmxvY2F0aW9uLm9yaWdpbiB9KVxyXG4gICAgcHJvcHMub25Mb2dvdXQoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgICAgb25DbGljaz17b25Mb2dvdXR9PlxyXG4gICAgICB7dCgnbGFiZWxfbG9nb3V0Jyl9XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dEJ1dHRvblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgT3JkZXJIb21lV2lkZ2V0IGZyb20gJ0Btb2R1bGVzL29yZGVyL09yZGVyV2lkZ2V0L09yZGVySG9tZVdpZGdldCdcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnQHNyY1Jvb3QvYXBwQ29udGV4dC9hcHBDb250ZXh0J1xyXG5pbXBvcnQgQXBwQ29udGV4dEludCBmcm9tICdAbW9kYWxzL2FwcENvbnRleHQnXHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgYXBwQ29udGV4dDogQXBwQ29udGV4dEludCA9IHVzZUNvbnRleHQ8QXBwQ29udGV4dEludD4oQXBwQ29udGV4dClcclxuXHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIkhvbWVfT3JkZXJfd2lkZ2VyXCI+XHJcbiAgICAgIENvbnRleHQ6IHthcHBDb250ZXh0LnRhbmVudE5hbWV9XHJcbiAgICAgIDxPcmRlckhvbWVXaWRnZXQgLz5cclxuICAgIDwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnQG1vZGFscy9iYXNlUHJvcHNJbnRlcmZhY2UnXHJcbmltcG9ydCB7IFN1cHBvcnRTbmFwc2hvdCB9IGZyb20gJ0Btb2RhbHMvc3VwcG9ydC9zdXBwb3J0J1xyXG4vLyBpbXBvcnQgeyBDYXJkLCBEZXNjcmlwdGlvbnMsIFBhZ2VIZWFkZXIgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBEZXNjcmlwdGlvbnMgZnJvbSAnYW50ZC9lcy9kZXNjcmlwdGlvbnMnXHJcbmltcG9ydCBDYXJkIGZyb20gJ2FudGQvZXMvY2FyZCdcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnYW50ZC9lcy9wYWdlLWhlYWRlcidcclxuXHJcbmltcG9ydCBBcHBTYXRlIGZyb20gJ0Btb2RhbHMvcmVkdXgvQmFzZVN0YXRlJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGZldGNoT3JkZXJIV0RhdGEgfSBmcm9tICdAbW9kdWxlcy9vcmRlci9yZWR1eC9vcmRlckhvbWVXaWRnZXQvb3JkZXJIV0FjdGlvbidcclxuaW1wb3J0IHsgT3JkZXJIV0RhdGEgfSBmcm9tICdAbW9kYWxzL09yZGVyL29yZGVySFdEYXRhJ1xyXG5pbXBvcnQgT3JkZXJIb21lV2lkZ2V0SGVkZXIgZnJvbSAnLi9PcmRlckhvbWVXaWRnZXRIZWRlcidcclxuXHJcbi8vIGltcG9ydCBTdHlsaXNoRGVzY3JpcHRpb24gZnJvbSAnLi9DYXNlU3R5bGVXaWRndCc7XHJcblxyXG5pbnRlcmZhY2UgT3JkZXJIb21lV2lkZ2V0U3RhdGVQcm9wcyB7XHJcbiAgb3JkZXJIV0RhdGE/OiBPcmRlckhXRGF0YVxyXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZ1xyXG59XHJcbmludGVyZmFjZSBPcmRlckhvbWVXaWRnZXREaXNwYXRjaFByb3BzIHtcclxuICBmZXRjaE9yZGVySFdEYXRhPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgT3JkZXJIb21lV2lkZ2V0UHJvcHMgZXh0ZW5kcyBPcmRlckhvbWVXaWRnZXRTdGF0ZVByb3BzLCBPcmRlckhvbWVXaWRnZXREaXNwYXRjaFByb3BzLCBCYXNlUHJvcHMgeyB9XHJcblxyXG5jb25zdCBPcmRlckhvbWVXaWRnZXQ6IFJlYWN0LkZDPE9yZGVySG9tZVdpZGdldFByb3BzPiA9IChwcm9wczogT3JkZXJIb21lV2lkZ2V0UHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZygnLS0tLUluIFJlbmRlci0tLS0nLCBwcm9wcy5vcmRlckhXRGF0YT8ubGFzdFN0YXR1c1RpbWUpXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLUluIHVzZUVmZmVjdC0tLS0nKVxyXG4gICAgOyhwcm9wcy5mZXRjaE9yZGVySFdEYXRhICE9IG51bGwpICYmIHByb3BzLmZldGNoT3JkZXJIV0RhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBleHBlbnNpdmVWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHByb3BzLm9yZGVySFdEYXRhPy5sYXN0U3RhdHVzVGltZSA/IHByb3BzLm9yZGVySFdEYXRhPy5sYXN0U3RhdHVzVGltZSAqIDEwMDAgOiAwKS50b1N0cmluZygpXHJcbiAgfSwgW3Byb3BzLm9yZGVySFdEYXRhPy5sYXN0U3RhdHVzVGltZV0pXHJcblxyXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCctLS0tSW4gdXNlIGVmZmVjdC0tLS0nLCBwcm9wcy5vcmRlckhXRGF0YT8ubGFzdFN0YXR1c1RpbWUpXHJcbiAgLy8gICAgIHByb3BzLmZldGNoT3JkZXJIV0RhdGEgJiYgcHJvcHMuZmV0Y2hPcmRlckhXRGF0YSgpXHJcbiAgLy8gfSwgW3Byb3BzLm9yZGVySFdEYXRhPy5sYXN0U3RhdHVzVGltZV0pIC8vIC0tLT4gSW5maW5pdGUgY2FsbFxyXG5cclxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnLS0tLUluIHVzZSBlZmZlY3QtLS0tJywgcHJvcHMub3JkZXJIV0RhdGE/Lmxhc3RTdGF0dXNUaW1lKVxyXG4gIC8vICAgICBwcm9wcy5mZXRjaE9yZGVySFdEYXRhICYmIHByb3BzLmZldGNoT3JkZXJIV0RhdGEoKVxyXG4gIC8vIH0sIFtwcm9wcy5vcmRlckhXRGF0YV0pIC8vIC0tLT4gSW5maW5pdGUgY2FsbFxyXG5cclxuICBjb25zdCBvblJlZnJlc2hDbGljayA9ICgpID0+IHtcclxuICAgIChwcm9wcy5mZXRjaE9yZGVySFdEYXRhICE9IG51bGwpICYmIHByb3BzLmZldGNoT3JkZXJIV0RhdGEoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17J3NkJ30+XHJcblxyXG4gICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJzZWN0aW9udGl0bGVcIj5PcmRlcjwvZGl2PlxyXG4gICAgICAgIDxPcmRlckhvbWVXaWRnZXRIZWRlclxyXG4gICAgICAgICAgICBvblJlZnJlc2hDbGljaz17b25SZWZyZXNoQ2xpY2t9XHJcbiAgICAgICAgICAgIGxhc3RTdGF0dXNUaW1lPXtleHBlbnNpdmVWYWx1ZX0vPlxyXG4gICAgICAgIHtwcm9wcy5lcnJvck1lc3NhZ2UgPyA8ZGl2IGRhdGEtdGVzdGlkPVwiZXJyb3JcIj57cHJvcHMuZXJyb3JNZXNzYWdlfTwvZGl2PiA6ICcnfVxyXG4gICAgICAgIHsocHJvcHMub3JkZXJIV0RhdGEgIT0gbnVsbClcclxuICAgICAgICAgID8gPGRpdiBkYXRhLXRlc3RpZD1cIm9yZGVyX2l0ZW1zX2xpc3Rfd3JhcFwiPjxDYXJkIHRpdGxlPVwiT3JkZXIgSXRlbXNcIiBkYXRhLXRlc3RpZD1cIm9yZGVyX2l0ZW1zX2xpc3RfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMgYm9yZGVyZWQ9e3RydWV9IGNvbHVtbj17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiVG90YWwgT3JkZXJcIiBkYXRhLXRlc3RpZD1cIm9yZGVyX2l0ZW1zX2xpc3RfdG90YWxcIj57cHJvcHMub3JkZXJIV0RhdGEudG90YWxPcmRlcn08L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIlBlbmRpbmdcIiBkYXRhLXRlc3RpZD1cIm9yZGVyX2l0ZW1zX2xpc3RfcGVuZGluZ1wiPntwcm9wcy5vcmRlckhXRGF0YS5wZW5kaW5nT3JkZXJ9PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCJDYW5jZWxcIiBkYXRhLXRlc3RpZD1cIm9yZGVyX2l0ZW1zX2xpc3RfY2FuY2VsXCI+e3Byb3BzLm9yZGVySFdEYXRhLmNhbmNlbGVkT3JkZXJ9PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+PC9kaXY+XHJcbiAgICAgICAgICA6IDxkaXYgZGF0YS10ZXN0aWQ9XCJvcmRlcl9pdGVtX2xvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJsb2FkaW5nXCI+TG9hZGluZy4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwU2F0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBvcmRlckhXRGF0YTogKHN0YXRlIGFzIGFueSk/Lm9yZGVySG9tZVdpZGdldD8ub3JkZXJIV0RhdGEsXHJcbiAgICBlcnJvck1lc3NhZ2U6IChzdGF0ZSBhcyBhbnkpPy5vcmRlckhvbWVXaWRnZXQ/LmVycm9yTWVzc2FnZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzOiBEaXNwYXRjaDxhbnk+ID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoT3JkZXJIV0RhdGE6ICgpID0+IGRpc3BhdGNoKGZldGNoT3JkZXJIV0RhdGEoKSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcmRlckhvbWVXaWRnZXQpXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgQnV0dG9uLCBEZXNjcmlwdGlvbnMsIFBhZ2VIZWFkZXIgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9lcy9idXR0b24nXHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ2FudGQvZXMvcGFnZS1oZWFkZXInXHJcblxyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICdAbW9kYWxzL2Jhc2VQcm9wc0ludGVyZmFjZSdcclxuXHJcbmludGVyZmFjZSBPcmRlckhvbWVXaWRnZXRIZWRlck93bkZvcm1Qcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgb25SZWZyZXNoQ2xpY2s6ICgpID0+IHZvaWRcclxuICBsYXN0U3RhdHVzVGltZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBPcmRlckhvbWVXaWRnZXRIZWRlcjogUmVhY3QuRkM8T3JkZXJIb21lV2lkZ2V0SGVkZXJPd25Gb3JtUHJvcHM+ID0gKHByb3BzOiBPcmRlckhvbWVXaWRnZXRIZWRlck93bkZvcm1Qcm9wcykgPT4ge1xyXG4gIC8vIGNvbnN0IFtjb21wb25lbnRTaXplLCBzZXRDb21wb25lbnRTaXplXSA9IHVzZVN0YXRlPFNpemVUeXBlIHwgJ2RlZmF1bHQnPignZGVmYXVsdCcpO1xyXG5cclxuICBjb25zdCBvblJlZnJlc2hDbGljayA9ICgpID0+IHtcclxuICAgIHByb3BzLm9uUmVmcmVzaENsaWNrKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J09yZGVyRWRpdG9yV3JhcHBlcic+XHJcbiAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgZ2hvc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICBvbkJhY2s9eygpID0+IHdpbmRvdy5oaXN0b3J5LmJhY2soKX1cclxuICAgICAgICAgICAgdGl0bGU9XCJPcmRlclwiXHJcbiAgICAgICAgICAgIHN1YlRpdGxlPXtwcm9wcy5sYXN0U3RhdHVzVGltZX1cclxuICAgICAgICAgICAgZXh0cmE9e1tcclxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiMVwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17b25SZWZyZXNoQ2xpY2t9IGRhdGEtdGVzdGlkPVwicmVmcmVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgID48L1BhZ2VIZWFkZXI+XHJcblxyXG4gICAgPC9kaXY+KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVySG9tZVdpZGdldEhlZGVyXHJcbiIsImltcG9ydCB7IEFDVCB9IGZyb20gJy4vb3JkZXJIV0FjdGlvbidcclxuaW1wb3J0IHsgc2V0T3JkZXJIb21lV2lkZ2V0UmVkdWNlciwgc2V0T3JkZXJIb21lV2lkZ2V0RXJyb3JSZWR1Y2VyLCBPcmRlckhvbWVXaWRnZXRTdGF0ZSB9IGZyb20gJy4vb3JkZXJIV1JlZHVjZXInXHJcbmltcG9ydCB7IEJhc2VBY3Rpb24gfSBmcm9tICdAbW9kYWxzL3JlZHV4L0Jhc2VBY3Rpb24nXHJcbmltcG9ydCBBcHBTYXRlIGZyb20gJ0Btb2RhbHMvcmVkdXgvQmFzZVN0YXRlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBvcmRlckhXRGF0YToge1xyXG4gICAgdG90YWxPcmRlcjogMCxcclxuICAgIHBlbmRpbmdPcmRlcjogMCxcclxuICAgIGNhbmNlbGVkT3JkZXI6IDBcclxuICB9XHJcblxyXG59IGFzIE9yZGVySG9tZVdpZGdldFN0YXRlXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU6IE9yZGVySG9tZVdpZGdldFN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEJhc2VBY3Rpb24pOiBBcHBTYXRlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVC5TRVRfSE9NRV9XSURHRVRfT1JERVJTOlxyXG4gICAgICByZXR1cm4gc2V0T3JkZXJIb21lV2lkZ2V0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxyXG4gICAgY2FzZSBBQ1QuU0VUX0hPTUVfV0lER0VUX09SREVSU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHNldE9yZGVySG9tZVdpZGdldEVycm9yUmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XG4iLCJpbXBvcnQgeyBPcmRlck1vZGFsIH0gZnJvbSAnQG1vZGFscy9PcmRlci9vcmRlcidcclxuaW1wb3J0IHsgQmFzZUFjdGlvbiB9IGZyb20gJ0Btb2RhbHMvcmVkdXgvQmFzZUFjdGlvbidcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBBQ1QgPSB7XHJcbiAgU0VUX0hPTUVfV0lER0VUX09SREVSUzogJ0BvcmRlcnMvU0VUX0hPTUVfV0lER0VUX09SREVSUycsXHJcbiAgU0VUX0hPTUVfV0lER0VUX09SREVSU19FUlJPUjogJ0BvcmRlcnMvU0VUX0hPTUVfV0lER0VUX09SREVSU19FUlJPUidcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRPcmRlckhvbWVXaWRnZXRBY3Rpb24gZXh0ZW5kcyBCYXNlQWN0aW9uIHtcclxuICBwYXlsb2FkOiB7XHJcbiAgICB0b3RhbE9yZGVyOiBudW1iZXJcclxuICAgIHBlbmRpbmdPcmRlcjogbnVtYmVyXHJcbiAgICBjYW5jZWxlZE9yZGVyOiBudW1iZXJcclxuICAgIGxhc3RTdGF0dXNUaW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0T3JkZXJIb21lV2lkZ2V0RXJyb3JBY3Rpb24gZXh0ZW5kcyBCYXNlQWN0aW9uIHtcclxuICBwYXlsb2FkOiB7XHJcbiAgICBlcnJvck1zZzogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbiAgICBlcnI6IGFueSB8IHVuZGVmaW5lZFxyXG4gIH1cclxufVxyXG5cclxuLyplc2xpbnQtZGlzYWJsZSAqL1xyXG5leHBvcnQgY29uc3QgZmV0Y2hPcmRlckhXRGF0YSA9ICgpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+LCBnZXRTdGF0ZTogYW55KSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC9hcGkvaG9tZVdpZGdldCcsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB3aW5kb3cuYWNjZXNzX3Rva2VuIH0gfSlcclxuICAgICAgLnRoZW4oKHJlczogQXhpb3NSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldE9yZGVySG9tZVdpZGdldEVycm9yQWN0aW9uKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSlcclxuICAgICAgICBkaXNwYXRjaChzZXRPcmRlckhvbWVXaWRnZXRBY3Rpb24ocmVzLmRhdGEudG90YWxPcmRlciwgcmVzLmRhdGEucGVuZGluZ09yZGVyLCByZXMuZGF0YS5jYW5jZWxlZE9yZGVyLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICcnKSlcclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0T3JkZXJIb21lV2lkZ2V0RXJyb3JBY3Rpb24oZXJyLCB0eXBlb2YgZXJyID09PSAnc3RyaW5nJyA/IGVyciA6ICdTb21ldGhpbmcgd2VudCB3cm9uZycpKVxyXG4gICAgICB9KVxyXG5cclxuICAgIC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMTAvYXBpL2hvbWVXaWRnZXQnLCB7aGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHdpbmRvdy5hY2Nlc3NfdG9rZW59fSlcclxuICAgIC8vIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLy8gLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAvL3JlcyA9IHt0b3RhbE9yZGVyOiAxMCwgcGVuZGluZ09yZGVyOiAzLCBjYW5jZWxlZE9yZGVyOiA3fVxyXG4gICAgLy8gICAgIGRpc3BhdGNoKHNldE9yZGVySG9tZVdpZGdldEFjdGlvbihyZXMudG90YWxPcmRlciwgcmVzLnBlbmRpbmdPcmRlciwgcmVzLmNhbmNlbGVkT3JkZXIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpK1wiXCIpKVxyXG4gICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcclxuICAgIC8vICAgICBkaXNwYXRjaChzZXRPcmRlckhvbWVXaWRnZXRFcnJvckFjdGlvbihlcnIsIHR5cGVvZiBlcnIgPT09ICdzdHJpbmcnID8gZXJyIDogIFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpXHJcbiAgICAvLyB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9yZGVySG9tZVdpZGdldEVycm9yQWN0aW9uID0gKGVycjogYW55LCBlcnJvck1zZzogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVC5TRVRfSE9NRV9XSURHRVRfT1JERVJTX0VSUk9SLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICBlcnJvck1zZyxcclxuICAgICAgZXJyOiBlcnIgPyBlcnIudG9TdHJpbmcoKSA6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIH0gYXMgU2V0T3JkZXJIb21lV2lkZ2V0RXJyb3JBY3Rpb25cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9yZGVySG9tZVdpZGdldEFjdGlvbiA9ICh0b3RhbE9yZGVyOiBudW1iZXIsIHBlbmRpbmdPcmRlcjogbnVtYmVyLCBjYW5jZWxlZE9yZGVyOiBudW1iZXIsIHN0YXR1c1RpbWU6IHN0cmluZykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiYWNjY2MtPlwiLCB0b3RhbE9yZGVyLCBwZW5kaW5nT3JkZXIsIGNhbmNlbGVkT3JkZXIpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBQ1QuU0VUX0hPTUVfV0lER0VUX09SREVSUyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgdG90YWxPcmRlcixcclxuICAgICAgcGVuZGluZ09yZGVyLFxyXG4gICAgICBjYW5jZWxlZE9yZGVyLFxyXG4gICAgICBsYXN0U3RhdHVzVGltZTogc3RhdHVzVGltZVxyXG4gICAgfVxyXG4gIH0gYXMgU2V0T3JkZXJIb21lV2lkZ2V0QWN0aW9uXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzZXRPcmRlcnMgPSBjcmVhdGVBY3Rpb248bnVtYmVyLCBzdHJpbmc+KCdvcmRlcnMvc2V0T3JkZXJzJylcclxuIiwiaW1wb3J0IHsgT3JkZXJNb2RhbCB9IGZyb20gJ0Btb2RhbHMvT3JkZXIvb3JkZXInXHJcbi8vIGltcG9ydCB7IEJhc2VBY3Rpb24gfSBmcm9tICdAbW9kYWxzL3JlZHV4L0Jhc2VBY3Rpb24nO1xyXG4vLyBpbXBvcnQgeyBCYXNlUmVkdWNlciB9IGZyb20gJ0Btb2RhbHMvcmVkdXgvYmFlUmVkdWNlcic7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgQXBwU3RhdGUgZnJvbSAnQG1vZGFscy9yZWR1eC9CYXNlU3RhdGUnXHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbiB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBTZXRPcmRlckhvbWVXaWRnZXRBY3Rpb24sIFNldE9yZGVySG9tZVdpZGdldEVycm9yQWN0aW9uIH0gZnJvbSAnLi9vcmRlckhXQWN0aW9uJ1xyXG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tICcuL21haW4nXHJcbmltcG9ydCB7IE9yZGVySFdEYXRhIH0gZnJvbSAnQG1vZGFscy9PcmRlci9vcmRlckhXRGF0YSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJIb21lV2lkZ2V0U3RhdGUgZXh0ZW5kcyBBcHBTdGF0ZSB7XHJcbiAgb3JkZXJIV0RhdGE6IE9yZGVySFdEYXRhXHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9yZGVySG9tZVdpZGdldEVycm9yUmVkdWNlcjogUmVkdWNlcjxPcmRlckhvbWVXaWRnZXRTdGF0ZT4gPSAoc3RhdGU6IE9yZGVySG9tZVdpZGdldFN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICBjb25zdCBfYWN0aW9uID0gYWN0aW9uIGFzIFNldE9yZGVySG9tZVdpZGdldEVycm9yQWN0aW9uXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yTWVzc2FnZTogX2FjdGlvbi5wYXlsb2FkLmVycm9yTXNnXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0T3JkZXJIb21lV2lkZ2V0UmVkdWNlcjogUmVkdWNlcjxPcmRlckhvbWVXaWRnZXRTdGF0ZT4gPSAoc3RhdGU6IE9yZGVySG9tZVdpZGdldFN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IF9hY3Rpb24gPSBhY3Rpb24gYXMgU2V0T3JkZXJIb21lV2lkZ2V0QWN0aW9uXHJcbiAgLy8gY29uc29sZS5sb2coXCJyZWRkZGQtPlwiLCBfYWN0aW9uLnBheWxvYWQudG90YWxPcmRlciwgX2FjdGlvbi5wYXlsb2FkLnBlbmRpbmdPcmRlciwgX2FjdGlvbi5wYXlsb2FkLmNhbmNlbGVkT3JkZXIpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIG9yZGVySFdEYXRhOiB7XHJcbiAgICAgIHRvdGFsT3JkZXI6IF9hY3Rpb24ucGF5bG9hZC50b3RhbE9yZGVyLFxyXG4gICAgICBwZW5kaW5nT3JkZXI6IF9hY3Rpb24ucGF5bG9hZC5wZW5kaW5nT3JkZXIsXHJcbiAgICAgIGNhbmNlbGVkT3JkZXI6IF9hY3Rpb24ucGF5bG9hZC5jYW5jZWxlZE9yZGVyLFxyXG4gICAgICBsYXN0U3RhdHVzVGltZTogX2FjdGlvbi5wYXlsb2FkLmxhc3RTdGF0dXNUaW1lXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAoc3RhdGU6IE9yZGVyc1N0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNldE9yZGVyc0FjdGlvbikgPT4ge1xyXG4vLyAgICAgcmV0dXJuXHJcbi8vIH1cclxuIiwiaW1wb3J0IHsgQ29sbGVjdGl2ZVJlZHVjZXJzIH0gZnJvbSAnQG1vZGFscy9yZWR1eC9jb2xsZWN0aXZlUmVkdWNlcnMnXHJcbi8vIGltcG9ydCBvcmRlckxpc3RSZWR1Y2VyIGZyb20gJ0Btb2R1bGVzL29yZGVyL3JlZHV4L29yZGVycy9tYWluJ1xyXG5pbXBvcnQgb3JkZXJIb21lV2lkZ2V0UmVkdWNlciBmcm9tICdAbW9kdWxlcy9vcmRlci9yZWR1eC9vcmRlckhvbWVXaWRnZXQvbWFpbidcclxuXHJcbmNvbnN0IHN0YXRpY1JlZHVjZXJzID0ge1xyXG4gIG9yZGVySG9tZVdpZGdldDogb3JkZXJIb21lV2lkZ2V0UmVkdWNlclxyXG59XHJcblxyXG5jb25zdCBkeW5hbWljUmVkdWNlcnMgPSB7XHJcbiAgLy8gb3JkZXJMaXN0OiBpbXBvcnQoJ0Btb2R1bGVzL29yZGVyL3JlZHV4L29yZGVycy9tYWluJylcclxufVxyXG5cclxuY29uc3Qgb3JkZXJJbmRleFJlZHVjZXI6IENvbGxlY3RpdmVSZWR1Y2VycyA9IHtcclxuICBzdGF0aWNSZWR1Y2VycyxcclxuICBnZXREeW5hbWljUmVkdWNlcnM6IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGR5bmFtaWNSZWR1Y2VycyA9IHtcclxuICAgICAgb3JkZXJMaXN0OiAoYXdhaXQgaW1wb3J0KCdAbW9kdWxlcy9vcmRlci9yZWR1eC9vcmRlcnMvbWFpbicpKS5kZWZhdWx0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZHluYW1pY1JlZHVjZXJzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmRlckluZGV4UmVkdWNlclxyXG4iLCJpbXBvcnQgeyBDb2xsZWN0aXZlUmVkdWNlcnMgfSBmcm9tICdAbW9kYWxzL3JlZHV4L2NvbGxlY3RpdmVSZWR1Y2VycydcclxuXHJcbmNvbnN0IHN0YXRpY1JlZHVjZXJzID0ge1xyXG59XHJcblxyXG5jb25zdCBzZXJ2aWNlc0luZGV4UmVkdWNlcjogQ29sbGVjdGl2ZVJlZHVjZXJzID0ge1xyXG4gIHN0YXRpY1JlZHVjZXJzLFxyXG4gIGdldER5bmFtaWNSZWR1Y2VyczogYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZHluYW1pY1JlZHVjZXJzID0ge1xyXG4gICAgICBzZXJ2aWNlTGlzdDogKGF3YWl0IGltcG9ydCgnQG1vZHVsZXMvc2VydmljZXMvcmVkdXgvc2VydmljZUxpc3Qvc2VydmljZUxpc3RTbGljZScpKS5kZWZhdWx0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZHluYW1pY1JlZHVjZXJzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlc0luZGV4UmVkdWNlclxyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIFJlZHVjZXIgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IEFwcFNhdGUgZnJvbSAnQG1vZGFscy9yZWR1eC9CYXNlU3RhdGUnXHJcbmltcG9ydCBvcmRlckluZGV4UmVkdWNlciBmcm9tICdAbW9kdWxlcy9vcmRlci9yZWR1eC9yZWR1Y2VycydcclxuaW1wb3J0IHNlcnZpY2VzSW5kZXhSZWR1Y2VyIGZyb20gJ0Btb2R1bGVzL3NlcnZpY2VzL3JlZHV4L2luZGV4UmVkdWNlcnMnXHJcblxyXG5jb25zdCBzdGF0aWNSZWR1Y2VycyA9IHtcclxuICAuLi5vcmRlckluZGV4UmVkdWNlci5zdGF0aWNSZWR1Y2VycyxcclxuICAuLi5zZXJ2aWNlc0luZGV4UmVkdWNlci5zdGF0aWNSZWR1Y2Vyc1xyXG4gIC8vIC4uLm9yZGVySW5kZXhSZWR1Y2VyLmR5bmFtaWNSZWR1Y2Vyc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTW9kdWxlc1JlZHVjcmVzID0gYXN5bmMgKHByZUxvYWRlZER5YW5hbWljUmVkdWNlcnM6IGFueSwgbW9kdWxlOiBhbnkpID0+IHtcclxuICBpZiAobW9kdWxlKSB7XHJcbiAgICBsZXQgYXN5bmNoUmVkdWNlcnMgPSB7fVxyXG4gICAgaWYgKG1vZHVsZSA9PT0gJ29yZGVyJykge1xyXG4gICAgICBhc3luY2hSZWR1Y2VycyA9IGF3YWl0IG9yZGVySW5kZXhSZWR1Y2VyLmdldER5bmFtaWNSZWR1Y2VycygpXHJcbiAgICB9IGVsc2UgaWYgKG1vZHVsZSA9PT0gJ3NlcnZpY2UnKSB7XHJcbiAgICAgIGFzeW5jaFJlZHVjZXJzID0gYXdhaXQgc2VydmljZXNJbmRleFJlZHVjZXIuZ2V0RHluYW1pY1JlZHVjZXJzKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgLi4uc3RhdGljUmVkdWNlcnMsXHJcbiAgICAgIC4uLnByZUxvYWRlZER5YW5hbWljUmVkdWNlcnMsXHJcbiAgICAgIC4uLmFzeW5jaFJlZHVjZXJzXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXI6IFJlZHVjZXI8QXBwU2F0ZT4gPSBjb21iaW5lUmVkdWNlcnM8QXBwU2F0ZT4oc3RhdGljUmVkdWNlcnMpXHJcblxyXG4vLyBjb25zdCBjcmVhdGVPclVwZGF0ZVJlZHVjZXJzOiBhbnkgPSAobW9kdWxlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcclxuLy8gICAgIGlmKG1vZHVsZSl7XHJcbi8vICAgICAgICAgbGV0IGFzeW5jaFJlZHVjZXJzO1xyXG4vLyAgICAgICAgIGlmKG1vZHVsZSA9PT0gXCJvcmRlclwiKVxyXG4vLyAgICAgICAgICAgICBhc3luY2hSZWR1Y2VycyA9IG9yZGVySW5kZXhSZWR1Y2VyLmR5bmFtaWNSZWR1Y2Vyc1xyXG4vLyAgICAgICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwU2F0ZT4oe1xyXG4vLyAgICAgICAgICAgICAuLi5zdGF0aWNSZWR1Y2Vycy5vcmRlcnMsXHJcbi8vICAgICAgICAgICAgIC4uLmFzeW5jaFJlZHVjZXJzXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2Uge1xyXG4vLyAgICAgICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwU2F0ZT4oe1xyXG4vLyAgICAgICAgICAgICAuLi5zdGF0aWNSZWR1Y2Vycy5vcmRlcnNcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlID0ge1xyXG5cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3JVcGRhdGVSZWR1Y2Vyc1xyXG4iLCIvLyBpbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcclxuaW1wb3J0IHsgcm9vdFJlZHVjZXIsIGFkZE1vZHVsZXNSZWR1Y3JlcyB9IGZyb20gJy4vcm9vdFJlZHVjZXInXHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcclxuXHJcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xyXG5cclxuY29uc3QgbWlkZGxld2FyZSA9IFtsb2dnZXIsIHRodW5rXVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXHJcbiAgbWlkZGxld2FyZVxyXG59KSBhcyBhbnlcclxuXHJcbnN0b3JlLmR5bmFtaWNSZWR1Y2VycyA9IHt9XHJcbnN0b3JlLmluamVjdE1vZHVsZVJlZHVjZXJzID0gYXN5bmMgKG1vZHVsZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gIGNvbnN0IG5ld1JlZHVjZXJzID0gYXdhaXQgYWRkTW9kdWxlc1JlZHVjcmVzKHN0b3JlLmR5bmFtaWNSZWR1Y2VycywgbW9kdWxlKVxyXG5cclxuICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXdSZWR1Y2VycylcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2hcclxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2goKVxyXG4vLyBleHBvcnQgdHlwZSBBcHBUaHVuayA9IFRodW5rQWN0aW9uPHZvaWQsIFJvb3RTdGF0ZSwgdW5rbm93biwgQWN0aW9uPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwiSG9tZSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdkxpbmsiLCJsb2FkYWJsZSIsInN0b3JlIiwidXNlQXV0aDAiLCJMb2dvdXRCdXR0b24iLCJQcm92aWRlciIsImJ1aWxDb25maWciLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwidXNlVHJhbnNsYXRpb24iLCJsb2FkTW9kdWxlVHhGaWxlIiwiT3JkZXJJbmRleCIsImluamVjdE1vZHVsZVJlZHVjZXJzIiwiZmZmIiwiU2VydmljZUluZGV4IiwiU3VwcG9ydEluZGV4IiwiQXV0aGVudGljYXRlZCIsInByb3BzIiwidXNlciIsInQiLCJuYW1lIiwib25Mb2dvdXQiLCJTVEFHRSIsIlZFUlNJT04iLCJJU19OT0RFX1BST0RVQ1RJT04iLCJCVUlMRCIsIkJ1dHRvbiIsImxvZ291dCIsInJldHVyblRvIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ1c2VDb250ZXh0IiwiT3JkZXJIb21lV2lkZ2V0IiwiQXBwQ29udGV4dCIsImFwcENvbnRleHQiLCJ0YW5lbnROYW1lIiwiRGVzY3JpcHRpb25zIiwiQ2FyZCIsImNvbm5lY3QiLCJmZXRjaE9yZGVySFdEYXRhIiwiT3JkZXJIb21lV2lkZ2V0SGVkZXIiLCJjb25zb2xlIiwibG9nIiwib3JkZXJIV0RhdGEiLCJsYXN0U3RhdHVzVGltZSIsInVzZUVmZmVjdCIsImV4cGVuc2l2ZVZhbHVlIiwidXNlTWVtbyIsIkRhdGUiLCJ0b1N0cmluZyIsIm9uUmVmcmVzaENsaWNrIiwiZXJyb3JNZXNzYWdlIiwidG90YWxPcmRlciIsInBlbmRpbmdPcmRlciIsImNhbmNlbGVkT3JkZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm9yZGVySG9tZVdpZGdldCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiUGFnZUhlYWRlciIsImhpc3RvcnkiLCJiYWNrIiwiQUNUIiwic2V0T3JkZXJIb21lV2lkZ2V0UmVkdWNlciIsInNldE9yZGVySG9tZVdpZGdldEVycm9yUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfSE9NRV9XSURHRVRfT1JERVJTIiwiU0VUX0hPTUVfV0lER0VUX09SREVSU19FUlJPUiIsImF4aW9zIiwiZ2V0U3RhdGUiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImFjY2Vzc190b2tlbiIsInRoZW4iLCJyZXMiLCJzZXRPcmRlckhvbWVXaWRnZXRFcnJvckFjdGlvbiIsInVuZGVmaW5lZCIsInNldE9yZGVySG9tZVdpZGdldEFjdGlvbiIsImRhdGEiLCJnZXRUaW1lIiwiY2F0Y2giLCJlcnIiLCJlcnJvck1zZyIsInBheWxvYWQiLCJzdGF0dXNUaW1lIiwiX2FjdGlvbiIsIm9yZGVySG9tZVdpZGdldFJlZHVjZXIiLCJzdGF0aWNSZWR1Y2VycyIsImR5bmFtaWNSZWR1Y2VycyIsIm9yZGVySW5kZXhSZWR1Y2VyIiwiZ2V0RHluYW1pY1JlZHVjZXJzIiwiZGVmYXVsdCIsIm9yZGVyTGlzdCIsInNlcnZpY2VzSW5kZXhSZWR1Y2VyIiwic2VydmljZUxpc3QiLCJjb21iaW5lUmVkdWNlcnMiLCJhZGRNb2R1bGVzUmVkdWNyZXMiLCJwcmVMb2FkZWREeWFuYW1pY1JlZHVjZXJzIiwibW9kdWxlIiwiYXN5bmNoUmVkdWNlcnMiLCJyb290UmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwidXNlRGlzcGF0Y2giLCJ0aHVuayIsImxvZ2dlciIsIm1pZGRsZXdhcmUiLCJyZWR1Y2VyIiwibmV3UmVkdWNlcnMiLCJyZXBsYWNlUmVkdWNlciIsInVzZUFwcERpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==