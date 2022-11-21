"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_modules_order_redux_orders_main_ts-src_modules_order_redux_orders_ordersReducer_ts"],{

/***/ "./src/modules/order/redux/orders/main.ts":
/*!************************************************!*\
  !*** ./src/modules/order/redux/orders/main.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var _ordersAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordersAction */ "./src/modules/order/redux/orders/ordersAction.ts");
/* harmony import */ var _ordersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordersReducer */ "./src/modules/order/redux/orders/ordersReducer.ts");


// [ACT.SET_ORDERS] = setOrdersReducer
var initialState = {
  orders: [],
  lastStatusTime: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ordersAction__WEBPACK_IMPORTED_MODULE_0__.ACT.SET_ORDERS:
      return (0,_ordersReducer__WEBPACK_IMPORTED_MODULE_1__.setOrdersReducer)(state, action);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/modules/order/redux/orders/ordersAction.ts":
/*!********************************************************!*\
  !*** ./src/modules/order/redux/orders/ordersAction.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACT": function() { return /* binding */ ACT; },
/* harmony export */   "fetchOrders": function() { return /* binding */ fetchOrders; },
/* harmony export */   "setOrdersAction": function() { return /* binding */ setOrdersAction; }
/* harmony export */ });
var ACT = {
  SET_ORDERS: '@orders/SET_ORDERS'
};
var fetchOrders = function fetchOrders() {
  return function (dispatch, getState) {
    void fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
      dispatch(setOrdersAction([{
        productDesc: '3M Cleaner ---',
        orderId: 'sbg6sdfd',
        orderDate: '20.09.2022'
      }, {
        productDesc: 'Car Duster',
        orderId: 'gfbvcrt798',
        orderDate: '20.09.2022'
      }, {
        productDesc: 'Unity Gel',
        orderId: 'fgd454',
        orderDate: '20.09.2022'
      }, {
        productDesc: undefined,
        orderId: 'fgd454',
        orderDate: '20.09.2022'
      }, {
        productDesc: 'Side mirror',
        orderId: 'fgbfdf67',
        orderDate: '20.09.2022'
      }]));
    });
  };
};
var setOrdersAction = function setOrdersAction(orders) {
  return {
    type: ACT.SET_ORDERS,
    payload: {
      orders: orders,
      lastStatusTime: new Date().toString()
    }
  };
}; // export const setOrders = createAction<number, string>('orders/setOrders')

/***/ }),

/***/ "./src/modules/order/redux/orders/ordersReducer.ts":
/*!*********************************************************!*\
  !*** ./src/modules/order/redux/orders/ordersReducer.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setOrdersReducer": function() { return /* binding */ setOrdersReducer; }
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/modules/order/redux/orders/main.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { BaseAction } from '@modals/redux/BaseAction';
// import { BaseReducer } from '@modals/redux/baeReducer';
// import { createReducer } from '@reduxjs/toolkit'

var setOrdersReducer = function setOrdersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _main__WEBPACK_IMPORTED_MODULE_0__.initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var _action = action;
  return _objectSpread(_objectSpread({}, state), {}, {
    orders: _action.payload.orders,
    lastStatusTime: _action.payload.lastStatusTime
  });
}; // export default (state: OrdersState = initialState, action: SetOrdersAction) => {
//     return
// }

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21vZHVsZXNfb3JkZXJfcmVkdXhfb3JkZXJzX21haW5fdHMtc3JjX21vZHVsZXNfb3JkZXJfcmVkdXhfb3JkZXJzX29yZGVyc1JlZHVjZXJfdHMtYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUVPLElBQU1FLFlBQVksR0FBRztFQUMxQkMsTUFBTSxFQUFFLEVBRGtCO0VBRTFCQyxjQUFjLEVBQUVDO0FBRlUsQ0FBckI7QUFLUCwrREFBZSxZQUFvRTtFQUFBLElBQW5FQyxLQUFtRSx1RUFBOUNKLFlBQThDO0VBQUEsSUFBaENLLE1BQWdDOztFQUNqRixRQUFRQSxNQUFNLENBQUNDLElBQWY7SUFDRSxLQUFLUix5REFBTDtNQUNFLE9BQU9DLGdFQUFnQixDQUFDSyxLQUFELEVBQVFDLE1BQVIsQ0FBdkI7O0lBQ0Y7TUFDRSxPQUFPRCxLQUFQO0VBSko7QUFNRCxDQVBEOzs7Ozs7Ozs7Ozs7Ozs7O0FDUk8sSUFBTU4sR0FBRyxHQUFHO0VBQ2pCUyxVQUFVLEVBQUU7QUFESyxDQUFaO0FBWUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtFQUMvQixPQUFPLFVBQUNDLFFBQUQsRUFBMEJDLFFBQTFCLEVBQTRDO0lBQ2pELEtBQUtDLEtBQUssQ0FBQyw4Q0FBRCxDQUFMLENBQ0ZDLElBREUsQ0FDRyxVQUFBQyxHQUFHLEVBQUk7TUFDWEosUUFBUSxDQUFDSyxlQUFlLENBQUMsQ0FDdkI7UUFDRUMsV0FBVyxFQUFFLGdCQURmO1FBRUVDLE9BQU8sRUFBRSxVQUZYO1FBR0VDLFNBQVMsRUFBRTtNQUhiLENBRHVCLEVBTXZCO1FBQ0VGLFdBQVcsRUFBRSxZQURmO1FBRUVDLE9BQU8sRUFBRSxZQUZYO1FBR0VDLFNBQVMsRUFBRTtNQUhiLENBTnVCLEVBV3ZCO1FBQ0VGLFdBQVcsRUFBRSxXQURmO1FBRUVDLE9BQU8sRUFBRSxRQUZYO1FBR0VDLFNBQVMsRUFBRTtNQUhiLENBWHVCLEVBZ0J2QjtRQUNFRixXQUFXLEVBQUVaLFNBRGY7UUFFRWEsT0FBTyxFQUFFLFFBRlg7UUFHRUMsU0FBUyxFQUFFO01BSGIsQ0FoQnVCLEVBcUJ2QjtRQUNFRixXQUFXLEVBQUUsYUFEZjtRQUVFQyxPQUFPLEVBQUUsVUFGWDtRQUdFQyxTQUFTLEVBQUU7TUFIYixDQXJCdUIsQ0FBRCxDQUFoQixDQUFSO0lBMEJELENBNUJFLENBQUw7RUE2QkQsQ0E5QkQ7QUErQkQsQ0FoQ007QUFrQ0EsSUFBTUgsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDYixNQUFELEVBQTBCO0VBQ3ZELE9BQU87SUFDTEssSUFBSSxFQUFFUixHQUFHLENBQUNTLFVBREw7SUFFTFcsT0FBTyxFQUFFO01BQ1BqQixNQUFNLEVBQU5BLE1BRE87TUFFUEMsY0FBYyxFQUFFLElBQUlpQixJQUFKLEdBQVdDLFFBQVg7SUFGVDtFQUZKLENBQVA7QUFPRCxDQVJNLEVBVVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFJQTtBQU9PLElBQU1yQixnQkFBc0MsR0FBRyxTQUF6Q0EsZ0JBQXlDLEdBQXVEO0VBQUEsSUFBdERLLEtBQXNELHVFQUFqQ0osK0NBQWlDO0VBQUEsSUFBbkJLLE1BQW1CO0VBQzNHLElBQU1nQixPQUFPLEdBQUdoQixNQUFoQjtFQUNBLHVDQUNLRCxLQURMO0lBRUVILE1BQU0sRUFBRW9CLE9BQU8sQ0FBQ0gsT0FBUixDQUFnQmpCLE1BRjFCO0lBR0VDLGNBQWMsRUFBRW1CLE9BQU8sQ0FBQ0gsT0FBUixDQUFnQmhCO0VBSGxDO0FBS0QsQ0FQTSxFQVNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9tb2R1bGVzL29yZGVyL3JlZHV4L29yZGVycy9tYWluLnRzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9tb2R1bGVzL29yZGVyL3JlZHV4L29yZGVycy9vcmRlcnNBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvb3JkZXIvcmVkdXgvb3JkZXJzL29yZGVyc1JlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUNUIH0gZnJvbSAnLi9vcmRlcnNBY3Rpb24nXHJcbmltcG9ydCB7IHNldE9yZGVyc1JlZHVjZXIsIE9yZGVyc1N0YXRlIH0gZnJvbSAnLi9vcmRlcnNSZWR1Y2VyJ1xyXG5pbXBvcnQgeyBCYXNlQWN0aW9uIH0gZnJvbSAnQG1vZGFscy9yZWR1eC9CYXNlQWN0aW9uJ1xyXG5pbXBvcnQgQXBwU2F0ZSBmcm9tICdAbW9kYWxzL3JlZHV4L0Jhc2VTdGF0ZSdcclxuXHJcbi8vIFtBQ1QuU0VUX09SREVSU10gPSBzZXRPcmRlcnNSZWR1Y2VyXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG9yZGVyczogW10sXHJcbiAgbGFzdFN0YXR1c1RpbWU6IHVuZGVmaW5lZFxyXG59IGFzIE9yZGVyc1N0YXRlXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU6IE9yZGVyc1N0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEJhc2VBY3Rpb24pOiBBcHBTYXRlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVC5TRVRfT1JERVJTOlxyXG4gICAgICByZXR1cm4gc2V0T3JkZXJzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XG4iLCJpbXBvcnQgeyBPcmRlck1vZGFsIH0gZnJvbSAnQG1vZGFscy9PcmRlci9vcmRlcidcclxuaW1wb3J0IHsgQmFzZUFjdGlvbiB9IGZyb20gJ0Btb2RhbHMvcmVkdXgvQmFzZUFjdGlvbidcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBBQ1QgPSB7XHJcbiAgU0VUX09SREVSUzogJ0BvcmRlcnMvU0VUX09SREVSUydcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRPcmRlcnNBY3Rpb24gZXh0ZW5kcyBCYXNlQWN0aW9uIHtcclxuICBvcmRlcnM6IE9yZGVyTW9kYWxbXVxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG9yZGVyczogT3JkZXJNb2RhbFtdXHJcbiAgICBsYXN0U3RhdHVzVGltZTogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hPcmRlcnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PiwgZ2V0U3RhdGU6IGFueSkgPT4ge1xyXG4gICAgdm9pZCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zLzEnKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldE9yZGVyc0FjdGlvbihbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2R1Y3REZXNjOiAnM00gQ2xlYW5lciAtLS0nLFxyXG4gICAgICAgICAgICBvcmRlcklkOiAnc2JnNnNkZmQnLFxyXG4gICAgICAgICAgICBvcmRlckRhdGU6ICcyMC4wOS4yMDIyJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdERlc2M6ICdDYXIgRHVzdGVyJyxcclxuICAgICAgICAgICAgb3JkZXJJZDogJ2dmYnZjcnQ3OTgnLFxyXG4gICAgICAgICAgICBvcmRlckRhdGU6ICcyMC4wOS4yMDIyJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdERlc2M6ICdVbml0eSBHZWwnLFxyXG4gICAgICAgICAgICBvcmRlcklkOiAnZmdkNDU0JyxcclxuICAgICAgICAgICAgb3JkZXJEYXRlOiAnMjAuMDkuMjAyMidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2R1Y3REZXNjOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9yZGVySWQ6ICdmZ2Q0NTQnLFxyXG4gICAgICAgICAgICBvcmRlckRhdGU6ICcyMC4wOS4yMDIyJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdERlc2M6ICdTaWRlIG1pcnJvcicsXHJcbiAgICAgICAgICAgIG9yZGVySWQ6ICdmZ2JmZGY2NycsXHJcbiAgICAgICAgICAgIG9yZGVyRGF0ZTogJzIwLjA5LjIwMjInXHJcbiAgICAgICAgICB9XSkpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0T3JkZXJzQWN0aW9uID0gKG9yZGVyczogT3JkZXJNb2RhbFtdKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVC5TRVRfT1JERVJTLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICBvcmRlcnMsXHJcbiAgICAgIGxhc3RTdGF0dXNUaW1lOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKClcclxuICAgIH1cclxuICB9IGFzIFNldE9yZGVyc0FjdGlvblxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3Qgc2V0T3JkZXJzID0gY3JlYXRlQWN0aW9uPG51bWJlciwgc3RyaW5nPignb3JkZXJzL3NldE9yZGVycycpXHJcbiIsImltcG9ydCB7IE9yZGVyTW9kYWwgfSBmcm9tICdAbW9kYWxzL09yZGVyL29yZGVyJ1xyXG4vLyBpbXBvcnQgeyBCYXNlQWN0aW9uIH0gZnJvbSAnQG1vZGFscy9yZWR1eC9CYXNlQWN0aW9uJztcclxuLy8gaW1wb3J0IHsgQmFzZVJlZHVjZXIgfSBmcm9tICdAbW9kYWxzL3JlZHV4L2JhZVJlZHVjZXInO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IEFwcFN0YXRlIGZyb20gJ0Btb2RhbHMvcmVkdXgvQmFzZVN0YXRlJ1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb24gfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgU2V0T3JkZXJzQWN0aW9uIH0gZnJvbSAnLi9vcmRlcnNBY3Rpb24nXHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vbWFpbidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJzU3RhdGUgZXh0ZW5kcyBBcHBTdGF0ZSB7XHJcbiAgb3JkZXJzOiBPcmRlck1vZGFsW11cclxuICBsYXN0U3RhdHVzVGltZTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRPcmRlcnNSZWR1Y2VyOiBSZWR1Y2VyPE9yZGVyc1N0YXRlPiA9IChzdGF0ZTogT3JkZXJzU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgX2FjdGlvbiA9IGFjdGlvbiBhcyBTZXRPcmRlcnNBY3Rpb25cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBvcmRlcnM6IF9hY3Rpb24ucGF5bG9hZC5vcmRlcnMsXHJcbiAgICBsYXN0U3RhdHVzVGltZTogX2FjdGlvbi5wYXlsb2FkLmxhc3RTdGF0dXNUaW1lXHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAoc3RhdGU6IE9yZGVyc1N0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNldE9yZGVyc0FjdGlvbikgPT4ge1xyXG4vLyAgICAgcmV0dXJuXHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbIkFDVCIsInNldE9yZGVyc1JlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJvcmRlcnMiLCJsYXN0U3RhdHVzVGltZSIsInVuZGVmaW5lZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9PUkRFUlMiLCJmZXRjaE9yZGVycyIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJzZXRPcmRlcnNBY3Rpb24iLCJwcm9kdWN0RGVzYyIsIm9yZGVySWQiLCJvcmRlckRhdGUiLCJwYXlsb2FkIiwiRGF0ZSIsInRvU3RyaW5nIiwiX2FjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=