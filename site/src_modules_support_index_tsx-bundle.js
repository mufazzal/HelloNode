"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_modules_support_index_tsx"],{

/***/ "./src/commonComponent/refresher/refresher.tsx":
/*!*****************************************************!*\
  !*** ./src/commonComponent/refresher/refresher.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/SearchOutlined.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd_es_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/radio */ "./node_modules/antd/es/radio/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


// import { Button, Radio, RadioChangeEvent } from 'antd';






/*eslint-disable */
var Refresher = function Refresher(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.defaultInterval),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // const [intervalId, setIntervalId] = useState<any>(-1);


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var intervalId;

    if (value) {
      onAutoRefresh();
      intervalId = setInterval(function () {
        onAutoRefresh();
      }, value * 1000);
    } else {
      props.onError != null && props.onError('Invalid interval value: ' + value);
    }

    return function () {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [value]);

  var onRefreshIntervalChange = function onRefreshIntervalChange(e) {
    console.log('radio checked', e.target.value);
    setValue(e.target.value) // if(intervalId) {
    //     clearInterval(intervalId)
    // }
    ;
    props.onRefreshIntervalChange != null && props.onRefreshIntervalChange(e.target.value);
  };

  var onManualRefresh = function onManualRefresh() {
    props.onRefresh && props.onRefresh(true);
  };

  var onAutoRefresh = function onAutoRefresh() {
    console.log('Refresher: ', props.refresherTag);
    props.onRefresh && props.onRefresh(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "refresher",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd_es_radio__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
      onChange: onRefreshIntervalChange,
      value: value,
      buttonStyle: "solid",
      children: props.intervalOptions && props.intervalOptions.map(function (intOp) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd_es_radio__WEBPACK_IMPORTED_MODULE_2__["default"].Button, {
          value: intOp,
          children: [intOp, " seconds"]
        });
      })
    }), props.showManualRefresh ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd_es_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: onManualRefresh,
      type: "primary",
      shape: "circle",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
      loading: false
    }) : '']
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Refresher);

/***/ }),

/***/ "./src/modules/support/index.tsx":
/*!***************************************!*\
  !*** ./src/modules/support/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _liveTicketWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liveTicketWidget */ "./src/modules/support/liveTicketWidget/index.tsx");
/* harmony import */ var antd_es_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/page-header */ "./node_modules/antd/es/page-header/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var SupportIndex = function SupportIndex(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "supportIndex",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_es_page_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ghost: false,
      title: t('support:pageTitle')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_liveTicketWidget__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SupportIndex);

/***/ }),

/***/ "./src/modules/support/liveTicketWidget/Header.tsx":
/*!*********************************************************!*\
  !*** ./src/modules/support/liveTicketWidget/Header.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_commonComponent_refresher_refresher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/commonComponent/refresher/refresher */ "./src/commonComponent/refresher/refresher.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var LiveTicketWidgetHeader = function LiveTicketWidgetHeader(props) {
  var onRefreshEvent = function onRefreshEvent(isManual) {
    return props.onRefreshEvent != null && props.onRefreshEvent(isManual);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "liveTicketWidget_header",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_commonComponent_refresher_refresher__WEBPACK_IMPORTED_MODULE_1__["default"], {
      intervalOptions: [1, 5, 10],
      defaultInterval: 5,
      showManualRefresh: true,
      onRefresh: onRefreshEvent,
      refresherTag: "LiveTicketWidgetHeader"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LiveTicketWidgetHeader);

/***/ }),

/***/ "./src/modules/support/liveTicketWidget/LiveTicketWidget.tsx":
/*!*******************************************************************!*\
  !*** ./src/modules/support/liveTicketWidget/LiveTicketWidget.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/descriptions */ "./node_modules/antd/es/descriptions/index.js");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/card */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/modules/support/liveTicketWidget/Header.tsx");
/* harmony import */ var _utils_useSafeFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/useSafeFetch */ "./src/utils/useSafeFetch.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


// import { Card, Descriptions } from 'antd';



 // import StylishDescription from './CaseStyleWidgt';




var LiveTicketWidget = function LiveTicketWidget(props) {
  var _useSafeFetch = (0,_utils_useSafeFetch__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/supportWidget', false, null),
      _useSafeFetch2 = _slicedToArray(_useSafeFetch, 4),
      fetchSafely = _useSafeFetch2[0],
      safeFetchLoading = _useSafeFetch2[1],
      safeFetchResponse = _useSafeFetch2[2],
      safeFetchError = _useSafeFetch2[3]; //http://localhost:3010


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      callCounter = _React$useState2[0],
      setCallCounter = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(undefined),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      supportSnapshot = _React$useState4[0],
      setSupportSnapshot = _React$useState4[1]; // React.useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/todos/2').
  //         then(res => {
  //             return ({
  //                 totalNumberOfTicket: 10,
  //                 totalOpenTicket: 3,
  //                 totalInWaitTicket: 5,
  //                 totalCloseTicket: 2,
  //                 time: new Date().toLocaleString()
  //             } as SupportSnapshot)
  //         }).then((res: SupportSnapshot) => {
  //             setSupportSnapshot(res)
  //             setTimeout(() => {
  //                 setCallCounter(callCounter + 1)
  //             }, .5 * 60 * 1000);
  //         })
  //     return () => {
  //     }
  // }, [callCounter])


  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    console.log('just for fun -');
    return function () {
      console.log('CLEAN UP just for fun -');
    };
  }); // will call in between each render and effect AND just befire last render

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    console.log('just for fun []');
    return function () {
      console.log('CLEAN UP just for fun []');
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    console.log('just for fun [callCounter]');
    return function () {
      console.log('CLEAN UP just for fun [callCounter]');
    };
  }, [callCounter]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    console.log('just for fun [3]');
    return function () {
      console.log('CLEAN UP just for fun [3]');
    };
  }, [3]);
  console.log('----i m in render-----');

  var onRefreshEvent = function onRefreshEvent(isManual) {
    console.log('-- in LiveTicketWidget onRefreshEvent ', isManual);
    fetchSafely().then(function (res) {
      setCallCounter(function (prevCounter) {
        return prevCounter + 1;
      });
      setSupportSnapshot(res);
    }).catch(function (_err) {}); // fetch('https://jsonplaceholder.typicode.com/todos/2').
    //     then(async (res) => {
    //         await new Promise((r,rj) => {setTimeout(()=>r("ok"), 2000)})
    //         return ({
    //             totalNumberOfTicket: 10,
    //             totalOpenTicket: 3,
    //             totalInWaitTicket: 5,
    //             totalCloseTicket: 2,
    //             time: new Date().toLocaleString()
    //         } as SupportSnapshot)
    //     }).then((res: SupportSnapshot) => {
    //         setCallCounter((prevCounter: number) => { return prevCounter + 1})
    //         setSupportSnapshot(res)
    //     })

    return true;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: props.className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onRefreshEvent: onRefreshEvent
    }), safeFetchLoading ? 'fetching latest..' : '-', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        width: 300,
        marginTop: 16
      },
      title: "Tickets - ".concat(callCounter),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_5__["default"], {
        bordered: true,
        column: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          label: "Total Tickets",
          children: supportSnapshot === null || supportSnapshot === void 0 ? void 0 : supportSnapshot.totalNumberOfTicket
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          label: "Open",
          children: supportSnapshot === null || supportSnapshot === void 0 ? void 0 : supportSnapshot.totalOpenTicket
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          label: "Waiting",
          children: supportSnapshot === null || supportSnapshot === void 0 ? void 0 : supportSnapshot.totalInWaitTicket
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          label: "Closed",
          children: supportSnapshot === null || supportSnapshot === void 0 ? void 0 : supportSnapshot.totalCloseTicket
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_descriptions__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          label: "Time",
          children: supportSnapshot === null || supportSnapshot === void 0 ? void 0 : supportSnapshot.time
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LiveTicketWidget);

/***/ }),

/***/ "./src/modules/support/liveTicketWidget/index.tsx":
/*!********************************************************!*\
  !*** ./src/modules/support/liveTicketWidget/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LiveTicketWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveTicketWidget */ "./src/modules/support/liveTicketWidget/LiveTicketWidget.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var LiveTicketWidgetStyled = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_LiveTicketWidget__WEBPACK_IMPORTED_MODULE_0__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  color: red;\n  width: 400px;\n\n  .ant-card {\n    color: blue;\n    background-color: ", ";\n    width: 400px;\n  }"])), function (_ref) {
  var theme = _ref.theme;
  return theme.background;
});
/* harmony default export */ __webpack_exports__["default"] = (LiveTicketWidgetStyled);

/***/ }),

/***/ "./src/utils/useSafeFetch.ts":
/*!***********************************!*\
  !*** ./src/utils/useSafeFetch.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useSafeFetch = function useSafeFetch(url, callNow, options) {
  var isMounted = true;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      response = _useState4[0],
      setResponse = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];
  /*eslint-disable */


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounted = true;

    if (callNow) {
      fetchSafely();
    }

    return function () {
      isMounted = false;
    };
  }, []);

  var fetchSafely = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var accessToken;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              accessToken = window.access_token;
              _context2.next = 4;
              return fetch(url, _objectSpread(_objectSpread({}, options), {}, {
                headers: {
                  Authorization: "Bearer ".concat(accessToken)
                }
              })).then( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(out) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return out.json();

                        case 2:
                          return _context.abrupt("return", _context.sent);

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()).then(function (res) {
                if (!isMounted) {
                  console.log('Component has been ummounted, abandoning response of ', url);
                  return;
                } //                res = ____badProxy(url)


                setLoading(false);
                setResponse(res);
                return res;
              }).catch(function (err) {
                if (!isMounted) {
                  console.log('Component has been ummounted, abandoning response of ', url);
                  return;
                }

                console.log(err);
                setLoading(false);
                setError({
                  error: err
                });
                return err;
              });

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchSafely() {
      return _ref.apply(this, arguments);
    };
  }();

  var ____badProxy = function ____badProxy(url) {
    if (url.includes('supportWidget')) {
      return {
        totalNumberOfTicket: 10,
        totalOpenTicket: 3,
        totalInWaitTicket: 5,
        totalCloseTicket: 2,
        time: new Date().toLocaleString()
      };
    }
  };

  return [fetchSafely, loading, response, error];
};

/* harmony default export */ __webpack_exports__["default"] = (useSafeFetch);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBVjtnQkFDQUUsV0FBVyxDQUFDdkIsR0FBRCxDQUFYO2dCQUNBLE9BQU9BLEdBQVA7Y0FDRCxDQWRVLEVBY1JFLEtBZFEsQ0FjRixVQUFBZ0MsR0FBRyxFQUFJO2dCQUNkLElBQUksQ0FBQ2YsU0FBTCxFQUFnQjtrQkFDZGxELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVEQUFaLEVBQXFFOEMsR0FBckU7a0JBQ0E7Z0JBQ0Q7O2dCQUVEL0MsT0FBTyxDQUFDQyxHQUFSLENBQVlnRSxHQUFaO2dCQUNBYixVQUFVLENBQUMsS0FBRCxDQUFWO2dCQUNBSSxRQUFRLENBQUM7a0JBQ1BELEtBQUssRUFBRVU7Z0JBREEsQ0FBRCxDQUFSO2dCQUdBLE9BQU9BLEdBQVA7Y0FDRCxDQTFCVSxDQUg4Qjs7WUFBQTtjQUFBOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQXBDNUMsV0FBb0M7TUFBQTtJQUFBO0VBQUEsR0FBMUM7O0VBZ0NBLElBQU02QyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDbkIsR0FBRCxFQUFpQjtJQUNwQyxJQUFJQSxHQUFHLENBQUNvQixRQUFKLENBQWEsZUFBYixDQUFKLEVBQW1DO01BQ2pDLE9BQU87UUFDTDdCLG1CQUFtQixFQUFFLEVBRGhCO1FBRUxDLGVBQWUsRUFBRSxDQUZaO1FBR0xDLGlCQUFpQixFQUFFLENBSGQ7UUFJTEMsZ0JBQWdCLEVBQUUsQ0FKYjtRQUtMQyxJQUFJLEVBQUUsSUFBSTBCLElBQUosR0FBV0MsY0FBWDtNQUxELENBQVA7SUFPRDtFQUNGLENBVkQ7O0VBWUEsT0FBTyxDQUFDaEQsV0FBRCxFQUFjOEIsT0FBZCxFQUF1QkUsUUFBdkIsRUFBaUNFLEtBQWpDLENBQVA7QUFDRCxDQTVERDs7QUE4REEsK0RBQWVuQyxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbW1vbkNvbXBvbmVudC9yZWZyZXNoZXIvcmVmcmVzaGVyLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbW9kdWxlcy9zdXBwb3J0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbW9kdWxlcy9zdXBwb3J0L2xpdmVUaWNrZXRXaWRnZXQvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbW9kdWxlcy9zdXBwb3J0L2xpdmVUaWNrZXRXaWRnZXQvTGl2ZVRpY2tldFdpZGdldC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvc3VwcG9ydC9saXZlVGlja2V0V2lkZ2V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdXRpbHMvdXNlU2FmZUZldGNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJ0Btb2RhbHMvYmFzZVByb3BzSW50ZXJmYWNlJ1xyXG4vLyBpbXBvcnQgeyBCdXR0b24sIFJhZGlvLCBSYWRpb0NoYW5nZUV2ZW50IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9lcy9idXR0b24nXHJcbmltcG9ydCBSYWRpbywgeyBSYWRpb0NoYW5nZUV2ZW50IH0gZnJvbSAnYW50ZC9lcy9yYWRpbydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmludGVyZmFjZSBSZWZyZXNoZXJPd25Gb3JtUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIGludGVydmFsT3B0aW9uczogbnVtYmVyW11cclxuICBkZWZhdWx0SW50ZXJ2YWw/OiBudW1iZXJcclxuICBzaG93TWFudWFsUmVmcmVzaD86IGJvb2xlYW5cclxuICByZWZyZXNoZXJUYWc/OiBzdHJpbmdcclxuXHJcbiAgb25SZWZyZXNoSW50ZXJ2YWxDaGFuZ2U/OiAobmV3SW50ZXJ2YWw6IGJvb2xlYW4pID0+IGJvb2xlYW5cclxuICBvblJlZnJlc2g6IChpc01hbnVhbDogYm9vbGVhbikgPT4gYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG4gIG9uRXJyb3I/OiAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG5cclxuLyplc2xpbnQtZGlzYWJsZSAqL1xyXG5jb25zdCBSZWZyZXNoZXI6IFJlYWN0LkZDPFJlZnJlc2hlck93bkZvcm1Qcm9wcz4gPSAocHJvcHM6IFJlZnJlc2hlck93bkZvcm1Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyIHwgdW5kZWZpbmVkPihwcm9wcy5kZWZhdWx0SW50ZXJ2YWwpXHJcbiAgLy8gY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGU8YW55PigtMSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbElkOiBhbnlcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBvbkF1dG9SZWZyZXNoKClcclxuICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBvbkF1dG9SZWZyZXNoKClcclxuICAgICAgfSwgdmFsdWUgKiAxMDAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgKHByb3BzLm9uRXJyb3IgIT0gbnVsbCkgJiYgcHJvcHMub25FcnJvcignSW52YWxpZCBpbnRlcnZhbCB2YWx1ZTogJyArIHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChpbnRlcnZhbElkKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlXSlcclxuXHJcbiAgY29uc3Qgb25SZWZyZXNoSW50ZXJ2YWxDaGFuZ2UgPSAoZTogUmFkaW9DaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3JhZGlvIGNoZWNrZWQnLCBlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG5cclxuICAgIC8vIGlmKGludGVydmFsSWQpIHtcclxuICAgIC8vICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgOyhwcm9wcy5vblJlZnJlc2hJbnRlcnZhbENoYW5nZSAhPSBudWxsKSAmJiBwcm9wcy5vblJlZnJlc2hJbnRlcnZhbENoYW5nZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTWFudWFsUmVmcmVzaCA9ICgpID0+IHtcclxuICAgIHByb3BzLm9uUmVmcmVzaCAmJiBwcm9wcy5vblJlZnJlc2godHJ1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQXV0b1JlZnJlc2ggPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVmcmVzaGVyOiAnLCBwcm9wcy5yZWZyZXNoZXJUYWcpXHJcbiAgICBwcm9wcy5vblJlZnJlc2ggJiYgcHJvcHMub25SZWZyZXNoKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT0ncmVmcmVzaGVyJz5cclxuXHJcbiAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblJlZnJlc2hJbnRlcnZhbENoYW5nZX0gdmFsdWU9e3ZhbHVlfSBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcblxyXG4gICAgICAgICAgICB7cHJvcHMuaW50ZXJ2YWxPcHRpb25zICYmIHByb3BzLmludGVydmFsT3B0aW9ucy5tYXAoKGludE9wOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPFJhZGlvLkJ1dHRvbiB2YWx1ZT17aW50T3B9PntpbnRPcH0gc2Vjb25kczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuXHJcbiAgICAgICAge3Byb3BzLnNob3dNYW51YWxSZWZyZXNoXHJcbiAgICAgICAgICA/IDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTWFudWFsUmVmcmVzaH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgIGljb249ezxTZWFyY2hPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgOiAnJ31cclxuXHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVmcmVzaGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpdmVUaWNrZXRXaWRnZXQgZnJvbSAnLi9saXZlVGlja2V0V2lkZ2V0J1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICdhbnRkL2VzL3BhZ2UtaGVhZGVyJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5jb25zdCBTdXBwb3J0SW5kZXggPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic3VwcG9ydEluZGV4XCI+XHJcbiAgICAgIDxQYWdlSGVhZGVyIGdob3N0PXtmYWxzZX0gdGl0bGU9e3QoJ3N1cHBvcnQ6cGFnZVRpdGxlJyl9IC8+XHJcbiAgICAgICAgPExpdmVUaWNrZXRXaWRnZXQgLz5cclxuICAgICAgPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdXBwb3J0SW5kZXhcclxuIiwiaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnQG1vZGFscy9iYXNlUHJvcHNJbnRlcmZhY2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlZnJlc2hlciBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tbW9uQ29tcG9uZW50L3JlZnJlc2hlci9yZWZyZXNoZXInXHJcblxyXG5pbnRlcmZhY2UgT3JkZXJFZGl0b3JPd25Gb3JtUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIG9uUmVmcmVzaEV2ZW50PzogKGlzTWFudWFsOiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IExpdmVUaWNrZXRXaWRnZXRIZWFkZXI6IFJlYWN0LkZDPE9yZGVyRWRpdG9yT3duRm9ybVByb3BzPiA9IChwcm9wczogT3JkZXJFZGl0b3JPd25Gb3JtUHJvcHMpID0+IHtcbiAgY29uc3Qgb25SZWZyZXNoRXZlbnQgPSAoaXNNYW51YWw6IGJvb2xlYW4gfCB1bmRlZmluZWQpID0+IHtcbiAgICByZXR1cm4gKHByb3BzLm9uUmVmcmVzaEV2ZW50ICE9IG51bGwpICYmIHByb3BzLm9uUmVmcmVzaEV2ZW50KGlzTWFudWFsKVxuICB9XHJcblxyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J2xpdmVUaWNrZXRXaWRnZXRfaGVhZGVyJz5cclxuXHJcbiAgICAgICAgPFJlZnJlc2hlclxyXG4gICAgICAgICAgICBpbnRlcnZhbE9wdGlvbnM9e1sxLCA1LCAxMF19XHJcbiAgICAgICAgICAgIGRlZmF1bHRJbnRlcnZhbD17NX1cclxuICAgICAgICAgICAgc2hvd01hbnVhbFJlZnJlc2g9e3RydWV9XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaD17b25SZWZyZXNoRXZlbnR9XHJcbiAgICAgICAgICAgIHJlZnJlc2hlclRhZz1cIkxpdmVUaWNrZXRXaWRnZXRIZWFkZXJcIi8+XHJcblxyXG4gIDwvZGl2PilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXZlVGlja2V0V2lkZ2V0SGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnQG1vZGFscy9iYXNlUHJvcHNJbnRlcmZhY2UnXHJcbmltcG9ydCB7IFN1cHBvcnRTbmFwc2hvdCB9IGZyb20gJ0Btb2RhbHMvc3VwcG9ydC9zdXBwb3J0J1xyXG4vLyBpbXBvcnQgeyBDYXJkLCBEZXNjcmlwdGlvbnMgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBEZXNjcmlwdGlvbnMgZnJvbSAnYW50ZC9lcy9kZXNjcmlwdGlvbnMnXHJcbmltcG9ydCBDYXJkIGZyb20gJ2FudGQvZXMvY2FyZCdcclxuXHJcbmltcG9ydCBMaXZlVGlja2V0V2lkZ2V0SGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgdXNlU2FmZUZldGNoIGZyb20gJ0B1dGlscy91c2VTYWZlRmV0Y2gnXHJcbi8vIGltcG9ydCBTdHlsaXNoRGVzY3JpcHRpb24gZnJvbSAnLi9DYXNlU3R5bGVXaWRndCc7XHJcblxyXG5pbnRlcmZhY2UgTGl2ZVRpY2tldFdpZGdldE93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTGl2ZVRpY2tldFdpZGdldDogUmVhY3QuRkM8TGl2ZVRpY2tldFdpZGdldE93blByb3BzPiA9IChwcm9wczogTGl2ZVRpY2tldFdpZGdldE93blByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2ZldGNoU2FmZWx5LCBzYWZlRmV0Y2hMb2FkaW5nLCBzYWZlRmV0Y2hSZXNwb25zZSwgc2FmZUZldGNoRXJyb3JdID1cclxuICAgICAgICB1c2VTYWZlRmV0Y2goJy9hcGkvc3VwcG9ydFdpZGdldCcsIGZhbHNlLCBudWxsKSAvL2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMFxyXG5cclxuICBjb25zdCBbY2FsbENvdW50ZXIsIHNldENhbGxDb3VudGVyXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMClcclxuICBjb25zdCBbc3VwcG9ydFNuYXBzaG90LCBzZXRTdXBwb3J0U25hcHNob3RdID0gUmVhY3QudXNlU3RhdGU8U3VwcG9ydFNuYXBzaG90IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXHJcblxyXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMicpLlxyXG4gIC8vICAgICAgICAgdGhlbihyZXMgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHJldHVybiAoe1xyXG4gIC8vICAgICAgICAgICAgICAgICB0b3RhbE51bWJlck9mVGlja2V0OiAxMCxcclxuICAvLyAgICAgICAgICAgICAgICAgdG90YWxPcGVuVGlja2V0OiAzLFxyXG4gIC8vICAgICAgICAgICAgICAgICB0b3RhbEluV2FpdFRpY2tldDogNSxcclxuICAvLyAgICAgICAgICAgICAgICAgdG90YWxDbG9zZVRpY2tldDogMixcclxuICAvLyAgICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXHJcbiAgLy8gICAgICAgICAgICAgfSBhcyBTdXBwb3J0U25hcHNob3QpXHJcbiAgLy8gICAgICAgICB9KS50aGVuKChyZXM6IFN1cHBvcnRTbmFwc2hvdCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHNldFN1cHBvcnRTbmFwc2hvdChyZXMpXHJcbiAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHNldENhbGxDb3VudGVyKGNhbGxDb3VudGVyICsgMSlcclxuICAvLyAgICAgICAgICAgICB9LCAuNSAqIDYwICogMTAwMCk7XHJcbiAgLy8gICAgICAgICB9KVxyXG5cclxuICAvLyAgICAgcmV0dXJuICgpID0+IHtcclxuXHJcbiAgLy8gICAgIH1cclxuICAvLyB9LCBbY2FsbENvdW50ZXJdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyBjb25zb2xlLmxvZygnanVzdCBmb3IgZnVuIC0nKTsgcmV0dXJuICgpID0+IHsgY29uc29sZS5sb2coJ0NMRUFOIFVQIGp1c3QgZm9yIGZ1biAtJykgfSB9KSAvLyB3aWxsIGNhbGwgaW4gYmV0d2VlbiBlYWNoIHJlbmRlciBhbmQgZWZmZWN0IEFORCBqdXN0IGJlZmlyZSBsYXN0IHJlbmRlclxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7IGNvbnNvbGUubG9nKCdqdXN0IGZvciBmdW4gW10nKTsgcmV0dXJuICgpID0+IHsgY29uc29sZS5sb2coJ0NMRUFOIFVQIGp1c3QgZm9yIGZ1biBbXScpIH0gfSwgW10pXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgY29uc29sZS5sb2coJ2p1c3QgZm9yIGZ1biBbY2FsbENvdW50ZXJdJyk7IHJldHVybiAoKSA9PiB7IGNvbnNvbGUubG9nKCdDTEVBTiBVUCBqdXN0IGZvciBmdW4gW2NhbGxDb3VudGVyXScpIH0gfSwgW2NhbGxDb3VudGVyXSlcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyBjb25zb2xlLmxvZygnanVzdCBmb3IgZnVuIFszXScpOyByZXR1cm4gKCkgPT4geyBjb25zb2xlLmxvZygnQ0xFQU4gVVAganVzdCBmb3IgZnVuIFszXScpIH0gfSwgWzNdKVxyXG5cclxuICBjb25zb2xlLmxvZygnLS0tLWkgbSBpbiByZW5kZXItLS0tLScpXHJcblxyXG4gIGNvbnN0IG9uUmVmcmVzaEV2ZW50ID0gKGlzTWFudWFsOiBib29sZWFuIHwgdW5kZWZpbmVkKTogYm9vbGVhbiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnLS0gaW4gTGl2ZVRpY2tldFdpZGdldCBvblJlZnJlc2hFdmVudCAnLCBpc01hbnVhbClcclxuXHJcbiAgICBmZXRjaFNhZmVseSgpXHJcbiAgICAgIC50aGVuKChyZXM6IFN1cHBvcnRTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIHNldENhbGxDb3VudGVyKChwcmV2Q291bnRlcjogbnVtYmVyKSA9PiB7IHJldHVybiBwcmV2Q291bnRlciArIDEgfSlcclxuICAgICAgICBzZXRTdXBwb3J0U25hcHNob3QocmVzKVxyXG4gICAgICB9KS5jYXRjaCgoX2VycjogYW55KSA9PiB7XHJcblxyXG4gICAgICB9KVxyXG5cclxuICAgIC8vIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMicpLlxyXG4gICAgLy8gICAgIHRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHIscmopID0+IHtzZXRUaW1lb3V0KCgpPT5yKFwib2tcIiksIDIwMDApfSlcclxuXHJcbiAgICAvLyAgICAgICAgIHJldHVybiAoe1xyXG4gICAgLy8gICAgICAgICAgICAgdG90YWxOdW1iZXJPZlRpY2tldDogMTAsXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbE9wZW5UaWNrZXQ6IDMsXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbEluV2FpdFRpY2tldDogNSxcclxuICAgIC8vICAgICAgICAgICAgIHRvdGFsQ2xvc2VUaWNrZXQ6IDIsXHJcbiAgICAvLyAgICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcclxuICAgIC8vICAgICAgICAgfSBhcyBTdXBwb3J0U25hcHNob3QpXHJcbiAgICAvLyAgICAgfSkudGhlbigocmVzOiBTdXBwb3J0U25hcHNob3QpID0+IHtcclxuICAgIC8vICAgICAgICAgc2V0Q2FsbENvdW50ZXIoKHByZXZDb3VudGVyOiBudW1iZXIpID0+IHsgcmV0dXJuIHByZXZDb3VudGVyICsgMX0pXHJcbiAgICAvLyAgICAgICAgIHNldFN1cHBvcnRTbmFwc2hvdChyZXMpXHJcbiAgICAvLyAgICAgfSlcclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cclxuXHJcbiAgICAgICAgPExpdmVUaWNrZXRXaWRnZXRIZWFkZXIgb25SZWZyZXNoRXZlbnQ9e29uUmVmcmVzaEV2ZW50fS8+XHJcblxyXG4gICAgICAgIHtzYWZlRmV0Y2hMb2FkaW5nID8gJ2ZldGNoaW5nIGxhdGVzdC4uJyA6ICctJ31cclxuXHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IDMwMCwgbWFyZ2luVG9wOiAxNiB9fSB0aXRsZT17YFRpY2tldHMgLSAke2NhbGxDb3VudGVyfWB9PlxyXG4gICAgICAgICAgICA8RGVzY3JpcHRpb25zIGJvcmRlcmVkPXt0cnVlfSBjb2x1bW49ezF9PlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiVG90YWwgVGlja2V0c1wiPntzdXBwb3J0U25hcHNob3Q/LnRvdGFsTnVtYmVyT2ZUaWNrZXR9PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIk9wZW5cIj57c3VwcG9ydFNuYXBzaG90Py50b3RhbE9wZW5UaWNrZXR9PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIldhaXRpbmdcIj57c3VwcG9ydFNuYXBzaG90Py50b3RhbEluV2FpdFRpY2tldH08L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiQ2xvc2VkXCI+e3N1cHBvcnRTbmFwc2hvdD8udG90YWxDbG9zZVRpY2tldH08L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiVGltZVwiPntzdXBwb3J0U25hcHNob3Q/LnRpbWV9PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbnM+XHJcblxyXG4gICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpdmVUaWNrZXRXaWRnZXRcclxuIiwiaW1wb3J0IExpdmVUaWNrZXRXaWRnZXQgZnJvbSAnLi9MaXZlVGlja2V0V2lkZ2V0J1xyXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lZFN0eWxlZEZ1bmN0aW9uIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1vZGFscy91dGlscy90aGVtZSdcclxuXHJcbmNvbnN0IExpdmVUaWNrZXRXaWRnZXRTdHlsZWQ6IGFueSA9IHN0eWxlZChMaXZlVGlja2V0V2lkZ2V0KWBcclxuXHJcbiAgY29sb3I6IHJlZDtcclxuICB3aWR0aDogNDAwcHg7XHJcblxyXG4gIC5hbnQtY2FyZCB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogeyB0aGVtZTogVGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfWBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpdmVUaWNrZXRXaWRnZXRTdHlsZWRcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdXNlU2FmZUZldGNoOiBhbnkgPSAodXJsOiBzdHJpbmcsIGNhbGxOb3c6IGJvb2xlYW4sIG9wdGlvbnM6IGFueSkgPT4ge1xyXG4gIGxldCBpc01vdW50ZWQgPSB0cnVlXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxhbnk+KHVuZGVmaW5lZClcclxuXHJcbiAgLyplc2xpbnQtZGlzYWJsZSAqL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc01vdW50ZWQgPSB0cnVlXHJcbiAgICBpZiAoY2FsbE5vdykgeyBmZXRjaFNhZmVseSgpIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgY29uc3QgZmV0Y2hTYWZlbHk6ICgpID0+IFByb21pc2U8UmVzcG9uc2U+ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgYWNjZXNzVG9rZW46IHN0cmluZyA9ICh3aW5kb3cgYXMgYW55KS5hY2Nlc3NfdG9rZW5cclxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHsgLi4ub3B0aW9ucywgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCB9IH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIChvdXQ6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UoKHIscmopID0+IHtzZXRUaW1lb3V0KCgpPT5yKFwib2tcIiksIDIwMDApfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG91dC5qc29uKClcclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IGhhcyBiZWVuIHVtbW91bnRlZCwgYWJhbmRvbmluZyByZXNwb25zZSBvZiAnLCB1cmwpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgcmVzID0gX19fX2JhZFByb3h5KHVybClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldFJlc3BvbnNlKHJlcylcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgaWYgKCFpc01vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgaGFzIGJlZW4gdW1tb3VudGVkLCBhYmFuZG9uaW5nIHJlc3BvbnNlIG9mICcsIHVybClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0RXJyb3Ioe1xyXG4gICAgICAgICAgZXJyb3I6IGVyclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGVyclxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgX19fX2JhZFByb3h5ID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAodXJsLmluY2x1ZGVzKCdzdXBwb3J0V2lkZ2V0JykpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b3RhbE51bWJlck9mVGlja2V0OiAxMCxcclxuICAgICAgICB0b3RhbE9wZW5UaWNrZXQ6IDMsXHJcbiAgICAgICAgdG90YWxJbldhaXRUaWNrZXQ6IDUsXHJcbiAgICAgICAgdG90YWxDbG9zZVRpY2tldDogMixcclxuICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtmZXRjaFNhZmVseSwgbG9hZGluZywgcmVzcG9uc2UsIGVycm9yXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTYWZlRmV0Y2hcclxuIl0sIm5hbWVzIjpbIlNlYXJjaE91dGxpbmVkIiwiQnV0dG9uIiwiUmFkaW8iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVmcmVzaGVyIiwicHJvcHMiLCJkZWZhdWx0SW50ZXJ2YWwiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaW50ZXJ2YWxJZCIsIm9uQXV0b1JlZnJlc2giLCJzZXRJbnRlcnZhbCIsIm9uRXJyb3IiLCJjbGVhckludGVydmFsIiwib25SZWZyZXNoSW50ZXJ2YWxDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm9uTWFudWFsUmVmcmVzaCIsIm9uUmVmcmVzaCIsInJlZnJlc2hlclRhZyIsImludGVydmFsT3B0aW9ucyIsIm1hcCIsImludE9wIiwic2hvd01hbnVhbFJlZnJlc2giLCJMaXZlVGlja2V0V2lkZ2V0IiwiUGFnZUhlYWRlciIsInVzZVRyYW5zbGF0aW9uIiwiU3VwcG9ydEluZGV4IiwidCIsIkxpdmVUaWNrZXRXaWRnZXRIZWFkZXIiLCJvblJlZnJlc2hFdmVudCIsImlzTWFudWFsIiwiRGVzY3JpcHRpb25zIiwiQ2FyZCIsInVzZVNhZmVGZXRjaCIsImZldGNoU2FmZWx5Iiwic2FmZUZldGNoTG9hZGluZyIsInNhZmVGZXRjaFJlc3BvbnNlIiwic2FmZUZldGNoRXJyb3IiLCJjYWxsQ291bnRlciIsInNldENhbGxDb3VudGVyIiwidW5kZWZpbmVkIiwic3VwcG9ydFNuYXBzaG90Iiwic2V0U3VwcG9ydFNuYXBzaG90IiwidGhlbiIsInJlcyIsInByZXZDb3VudGVyIiwiY2F0Y2giLCJfZXJyIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJ0b3RhbE51bWJlck9mVGlja2V0IiwidG90YWxPcGVuVGlja2V0IiwidG90YWxJbldhaXRUaWNrZXQiLCJ0b3RhbENsb3NlVGlja2V0IiwidGltZSIsInN0eWxlZCIsIkxpdmVUaWNrZXRXaWRnZXRTdHlsZWQiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJ1cmwiLCJjYWxsTm93Iiwib3B0aW9ucyIsImlzTW91bnRlZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImVycm9yIiwic2V0RXJyb3IiLCJhY2Nlc3NUb2tlbiIsIndpbmRvdyIsImFjY2Vzc190b2tlbiIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJvdXQiLCJqc29uIiwiZXJyIiwiX19fX2JhZFByb3h5IiwiaW5jbHVkZXMiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9