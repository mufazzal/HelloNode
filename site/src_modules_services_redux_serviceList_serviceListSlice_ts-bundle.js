"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_modules_services_redux_serviceList_serviceListSlice_ts"],{

/***/ "./src/modules/services/redux/serviceList/serviceListSlice.ts":
/*!********************************************************************!*\
  !*** ./src/modules/services/redux/serviceList/serviceListSlice.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchServiceList": function() { return /* binding */ fetchServiceList; },
/* harmony export */   "setServices": function() { return /* binding */ setServices; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _extraReducers;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var initialState = {
  services: [],
  lastStatusUpdateTime: '',
  loading: false,
  error: undefined
};
var fetchServiceList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('fetchServiceList', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(p1, p2) {
    var result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
              return {
                lastStatusUpdateTime: new Date().toString(),
                services: [{
                  serviceId: 'sd',
                  serviceName: 'scdcsdcd',
                  startDate: 'dddd'
                }, {
                  serviceId: 'cxc',
                  serviceName: 'cass',
                  startDate: 'rtyuj'
                }]
              };
            });

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var counterServicesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'serviceListState',
  initialState: initialState,
  reducers: {
    setServices: function setServices(state, action) {
      state.services = action.payload.services;
      state.lastStatusUpdateTime = action.payload.lastStatusUpdateTime;
    } // decrement(state) {
    //   state.value--
    // },
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload
    // },

  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchServiceList.pending.type, function (state, action) {
    state.loading = true;
  }), _defineProperty(_extraReducers, fetchServiceList.fulfilled.type, function (state, action) {
    state.loading = false;
    state.services = action.payload.services;
    state.lastStatusUpdateTime = action.payload.lastStatusUpdateTime;
    state.error = undefined;
  }), _defineProperty(_extraReducers, fetchServiceList.rejected.type, function (state, action) {
    state.loading = false;
    state.error = 'someting wrong';
  }), _extraReducers)
}); // const fetchServiceList = () => {
//   return (dispatch: Dispatch<any>, getState: any) => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => {
//         dispatch(setServices({
//           lastStatusUpdateTime: new Date().toString(),
//           services: [{
//               serviceId: "sd",
//               serviceName: "asd",
//               startDate: "dddd"
//             },{
//               serviceId: "cxc",
//               serviceName: "cass",
//               startDate: "rtyuj"
//             }]
//           }))
//     })
//   }
// }

var setServices = counterServicesSlice.actions.setServices;

/* harmony default export */ __webpack_exports__["default"] = (counterServicesSlice.reducer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21vZHVsZXNfc2VydmljZXNfcmVkdXhfc2VydmljZUxpc3Rfc2VydmljZUxpc3RTbGljZV90cy1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQTtBQWlCQSxJQUFNRSxZQUFZLEdBQUc7RUFDbkJDLFFBQVEsRUFBRSxFQURTO0VBRW5CQyxvQkFBb0IsRUFBRSxFQUZIO0VBR25CQyxPQUFPLEVBQUUsS0FIVTtFQUluQkMsS0FBSyxFQUFFQztBQUpZLENBQXJCO0FBT0EsSUFBTUMsZ0JBQWdCLEdBQUdQLGtFQUFnQixDQUN2QyxrQkFEdUM7RUFBQSxzRUFFdkMsaUJBQU9RLEVBQVAsRUFBV0MsRUFBWDtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBLE9BQ3VCQyxLQUFLLENBQUMsOENBQUQsQ0FBTCxDQUNsQkMsSUFEa0IsQ0FDYixVQUFBQyxHQUFHLEVBQUk7Y0FDWCxPQUFPO2dCQUNMVCxvQkFBb0IsRUFBRSxJQUFJVSxJQUFKLEdBQVdDLFFBQVgsRUFEakI7Z0JBRUxaLFFBQVEsRUFBRSxDQUFDO2tCQUNUYSxTQUFTLEVBQUUsSUFERjtrQkFFVEMsV0FBVyxFQUFFLFVBRko7a0JBR1RDLFNBQVMsRUFBRTtnQkFIRixDQUFELEVBSVA7a0JBQ0RGLFNBQVMsRUFBRSxLQURWO2tCQUVEQyxXQUFXLEVBQUUsTUFGWjtrQkFHREMsU0FBUyxFQUFFO2dCQUhWLENBSk87Y0FGTCxDQUFQO1lBWUQsQ0Fka0IsQ0FEdkI7O1VBQUE7WUFDUUMsTUFEUjtZQUFBLGlDQWdCU0EsTUFoQlQ7O1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FGdUM7O0VBQUE7SUFBQTtFQUFBO0FBQUEsSUFBekM7QUFzQkEsSUFBTUMsb0JBQW9CLEdBQUdwQiw2REFBVyxDQUFDO0VBQ3ZDcUIsSUFBSSxFQUFFLGtCQURpQztFQUV2Q25CLFlBQVksRUFBWkEsWUFGdUM7RUFHdkNvQixRQUFRLEVBQUU7SUFDUkMsV0FEUSx1QkFDS0MsS0FETCxFQUNZQyxNQURaLEVBQ3VEO01BQzdERCxLQUFLLENBQUNyQixRQUFOLEdBQWlCc0IsTUFBTSxDQUFDQyxPQUFQLENBQWV2QixRQUFoQztNQUNBcUIsS0FBSyxDQUFDcEIsb0JBQU4sR0FBNkJxQixNQUFNLENBQUNDLE9BQVAsQ0FBZXRCLG9CQUE1QztJQUNELENBSk8sQ0FLUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBVlEsQ0FINkI7RUFldkN1QixhQUFhLHdEQUNWbkIsZ0JBQWdCLENBQUNvQixPQUFqQixDQUF5QkMsSUFEZixFQUNzQixVQUFDTCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7SUFDbERELEtBQUssQ0FBQ25CLE9BQU4sR0FBZ0IsSUFBaEI7RUFDRCxDQUhVLG1DQUlWRyxnQkFBZ0IsQ0FBQ3NCLFNBQWpCLENBQTJCRCxJQUpqQixFQUl3QixVQUFDTCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7SUFDcERELEtBQUssQ0FBQ25CLE9BQU4sR0FBZ0IsS0FBaEI7SUFDQW1CLEtBQUssQ0FBQ3JCLFFBQU4sR0FBaUJzQixNQUFNLENBQUNDLE9BQVAsQ0FBZXZCLFFBQWhDO0lBQ0FxQixLQUFLLENBQUNwQixvQkFBTixHQUE2QnFCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFldEIsb0JBQTVDO0lBQ0FvQixLQUFLLENBQUNsQixLQUFOLEdBQWNDLFNBQWQ7RUFDRCxDQVRVLG1DQVVWQyxnQkFBZ0IsQ0FBQ3VCLFFBQWpCLENBQTBCRixJQVZoQixFQVV1QixVQUFDTCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7SUFDbkRELEtBQUssQ0FBQ25CLE9BQU4sR0FBZ0IsS0FBaEI7SUFDQW1CLEtBQUssQ0FBQ2xCLEtBQU4sR0FBYyxnQkFBZDtFQUNELENBYlU7QUFmMEIsQ0FBRCxDQUF4QyxFQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFRaUIsV0FBUixHQUF3Qkgsb0JBQW9CLENBQUNZLE9BQTdDLENBQVFULFdBQVI7QUFDQTtBQUNBLCtEQUFlSCxvQkFBb0IsQ0FBQ2EsT0FBcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbW9kdWxlcy9zZXJ2aWNlcy9yZWR1eC9zZXJ2aWNlTGlzdC9zZXJ2aWNlTGlzdFNsaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgU2VydmljZUl0ZW1Nb2RhbCB9IGZyb20gJ0Btb2RhbHMvc2VydmljZXMvc2VydmljZUl0ZW0nXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgU2VydmljZXMge1xyXG4gIHNlcnZpY2VzOiBTZXJ2aWNlSXRlbU1vZGFsW11cclxuICBsYXN0U3RhdHVzVXBkYXRlVGltZTogc3RyaW5nXHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG4gIGVycm9yOiBzdHJpbmcgfCB1bmRlZmluZWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFNldFNlcnZpY2VzUGF5bG9hZCB7XHJcbiAgc2VydmljZXM6IFNlcnZpY2VJdGVtTW9kYWxbXVxyXG4gIGxhc3RTdGF0dXNVcGRhdGVUaW1lOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHNlcnZpY2VzOiBbXSxcclxuICBsYXN0U3RhdHVzVXBkYXRlVGltZTogJycsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IHVuZGVmaW5lZFxyXG59IGFzIFNlcnZpY2VzXHJcblxyXG5jb25zdCBmZXRjaFNlcnZpY2VMaXN0ID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICAnZmV0Y2hTZXJ2aWNlTGlzdCcsXHJcbiAgYXN5bmMgKHAxLCBwMikgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xJylcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGFzdFN0YXR1c1VwZGF0ZVRpbWU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgICAgICAgIHNlcnZpY2VzOiBbe1xyXG4gICAgICAgICAgICBzZXJ2aWNlSWQ6ICdzZCcsXHJcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiAnc2NkY3NkY2QnLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6ICdkZGRkJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZXJ2aWNlSWQ6ICdjeGMnLFxyXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogJ2Nhc3MnLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6ICdydHl1aidcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgY291bnRlclNlcnZpY2VzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3NlcnZpY2VMaXN0U3RhdGUnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2VydmljZXMgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248U2V0U2VydmljZXNQYXlsb2FkPikge1xyXG4gICAgICBzdGF0ZS5zZXJ2aWNlcyA9IGFjdGlvbi5wYXlsb2FkLnNlcnZpY2VzXHJcbiAgICAgIHN0YXRlLmxhc3RTdGF0dXNVcGRhdGVUaW1lID0gYWN0aW9uLnBheWxvYWQubGFzdFN0YXR1c1VwZGF0ZVRpbWVcclxuICAgIH1cclxuICAgIC8vIGRlY3JlbWVudChzdGF0ZSkge1xyXG4gICAgLy8gICBzdGF0ZS52YWx1ZS0tXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gaW5jcmVtZW50QnlBbW91bnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAvLyAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgW2ZldGNoU2VydmljZUxpc3QucGVuZGluZy50eXBlXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWVcclxuICAgIH0sXHJcbiAgICBbZmV0Y2hTZXJ2aWNlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5zZXJ2aWNlcyA9IGFjdGlvbi5wYXlsb2FkLnNlcnZpY2VzXHJcbiAgICAgIHN0YXRlLmxhc3RTdGF0dXNVcGRhdGVUaW1lID0gYWN0aW9uLnBheWxvYWQubGFzdFN0YXR1c1VwZGF0ZVRpbWVcclxuICAgICAgc3RhdGUuZXJyb3IgPSB1bmRlZmluZWRcclxuICAgIH0sXHJcbiAgICBbZmV0Y2hTZXJ2aWNlTGlzdC5yZWplY3RlZC50eXBlXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gJ3NvbWV0aW5nIHdyb25nJ1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbi8vIGNvbnN0IGZldGNoU2VydmljZUxpc3QgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PiwgZ2V0U3RhdGU6IGFueSkgPT4ge1xyXG4vLyAgICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xJylcclxuLy8gICAgIC50aGVuKHJlcyA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2goc2V0U2VydmljZXMoe1xyXG4vLyAgICAgICAgICAgbGFzdFN0YXR1c1VwZGF0ZVRpbWU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuLy8gICAgICAgICAgIHNlcnZpY2VzOiBbe1xyXG4vLyAgICAgICAgICAgICAgIHNlcnZpY2VJZDogXCJzZFwiLFxyXG4vLyAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBcImFzZFwiLFxyXG4vLyAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogXCJkZGRkXCJcclxuLy8gICAgICAgICAgICAgfSx7XHJcbi8vICAgICAgICAgICAgICAgc2VydmljZUlkOiBcImN4Y1wiLFxyXG4vLyAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBcImNhc3NcIixcclxuLy8gICAgICAgICAgICAgICBzdGFydERhdGU6IFwicnR5dWpcIlxyXG4vLyAgICAgICAgICAgICB9XVxyXG4vLyAgICAgICAgICAgfSkpXHJcbi8vICAgICB9KVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgeyBzZXRTZXJ2aWNlcyB9ID0gY291bnRlclNlcnZpY2VzU2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgeyBzZXRTZXJ2aWNlcywgZmV0Y2hTZXJ2aWNlTGlzdCB9XHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTZXJ2aWNlc1NsaWNlLnJlZHVjZXJcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImluaXRpYWxTdGF0ZSIsInNlcnZpY2VzIiwibGFzdFN0YXR1c1VwZGF0ZVRpbWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJmZXRjaFNlcnZpY2VMaXN0IiwicDEiLCJwMiIsImZldGNoIiwidGhlbiIsInJlcyIsIkRhdGUiLCJ0b1N0cmluZyIsInNlcnZpY2VJZCIsInNlcnZpY2VOYW1lIiwic3RhcnREYXRlIiwicmVzdWx0IiwiY291bnRlclNlcnZpY2VzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRTZXJ2aWNlcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJwZW5kaW5nIiwidHlwZSIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9