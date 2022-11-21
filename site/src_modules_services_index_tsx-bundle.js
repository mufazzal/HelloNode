"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_modules_services_index_tsx"],{

/***/ "./src/modules/services/index.tsx":
/*!****************************************!*\
  !*** ./src/modules/services/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/modules/services/services.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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





var SupportIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(SupportIndex, _React$Component);

  var _super = _createSuper(SupportIndex);

  function SupportIndex(props) {
    _classCallCheck(this, SupportIndex);

    return _super.call(this, props);
  }

  _createClass(SupportIndex, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "supportIndex",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_services__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      });
    }
  }]);

  return SupportIndex;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (SupportIndex);

/***/ }),

/***/ "./src/modules/services/services.tsx":
/*!*******************************************!*\
  !*** ./src/modules/services/services.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/avatar */ "./node_modules/antd/es/avatar/index.js");
/* harmony import */ var antd_es_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/list */ "./node_modules/antd/es/list/index.js");
/* harmony import */ var _modules_services_redux_serviceList_serviceListSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/services/redux/serviceList/serviceListSlice */ "./src/modules/services/redux/serviceList/serviceListSlice.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

// import { Avatar, List } from 'antd';








var ServiceList = function ServiceList(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.serviceList;
  }),
      services = _useSelector.services,
      loading = _useSelector.loading,
      lastStatusUpdateTime = _useSelector.lastStatusUpdateTime,
      error = _useSelector.error;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // dispatch(setServices({services: [{serviceId: "sd", serviceName: "asd", startDate: new Date().toString()}]}))
    dispatch((0,_modules_services_redux_serviceList_serviceListSlice__WEBPACK_IMPORTED_MODULE_1__.fetchServiceList)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [loading ? 'Loading..' : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: lastStatusUpdateTime
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "demo-loadmore-list",
        itemLayout: "horizontal",
        dataSource: services,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_list__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_list__WEBPACK_IMPORTED_MODULE_4__["default"].Item.Meta, {
              avatar: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd_es_avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
                src: "https://dummyimage.com/300.png/09f/fff&text=".concat(item.serviceId)
              }),
              title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "#",
                children: item.serviceName
              }),
              description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
            })
          });
        }
      })]
    }), error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: error
    }) : '']
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceList);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21vZHVsZXNfc2VydmljZXNfaW5kZXhfdHN4LWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7SUFFTUU7Ozs7O0VBQ0osc0JBQWFDLEtBQWIsRUFBeUI7SUFBQTs7SUFBQSx5QkFDakJBLEtBRGlCO0VBRXhCOzs7O1dBRUQsa0JBQVU7TUFDUixvQkFBUTtRQUFLLFNBQVMsRUFBQyxjQUFmO1FBQUEsdUJBQ0osdURBQUMsaURBQUQ7TUFESSxFQUFSO0lBR0Q7Ozs7RUFUd0JIOztBQVkzQiwrREFBZUUsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQU9BLElBQU1ELFdBQTBDLEdBQUcsU0FBN0NBLFdBQTZDLENBQUNFLEtBQUQsRUFBZ0M7RUFDakYsSUFBTVEsUUFBUSxHQUFHRCx3REFBVyxFQUE1Qjs7RUFFQSxtQkFBMkRELHdEQUFXLENBQUMsVUFBQUcsS0FBSyxFQUFJO0lBQzlFLE9BQVFBLEtBQUQsQ0FBZUMsV0FBdEI7RUFDRCxDQUZxRSxDQUF0RTtFQUFBLElBQVFDLFFBQVIsZ0JBQVFBLFFBQVI7RUFBQSxJQUFrQkMsT0FBbEIsZ0JBQWtCQSxPQUFsQjtFQUFBLElBQTJCQyxvQkFBM0IsZ0JBQTJCQSxvQkFBM0I7RUFBQSxJQUFpREMsS0FBakQsZ0JBQWlEQSxLQUFqRDs7RUFJQVosZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Q7SUFDQU0sUUFBUSxDQUFDSCxzR0FBZ0IsRUFBakIsQ0FBUjtFQUNELENBSFEsRUFHTixFQUhNLENBQVQ7RUFLQSxvQkFDTTtJQUFBLFdBQ0tPLE9BQU8sR0FDSixXQURJLGdCQUVKO01BQUEsd0JBQ0k7UUFBQSxVQUFNQztNQUFOLEVBREosZUFFSSx1REFBQyxvREFBRDtRQUNJLFNBQVMsRUFBQyxvQkFEZDtRQUVJLFVBQVUsRUFBQyxZQUZmO1FBR0ksVUFBVSxFQUFFRixRQUhoQjtRQUlJLFVBQVUsRUFBRSxvQkFBQ0ksSUFBRDtVQUFBLG9CQUNSLHVEQUFDLHlEQUFEO1lBQUEsdUJBQ0ksdURBQUMsOERBQUQ7Y0FDSSxNQUFNLGVBQUUsdURBQUMsc0RBQUQ7Z0JBQVEsR0FBRyx3REFBaURBLElBQUksQ0FBQ0MsU0FBdEQ7Y0FBWCxFQURaO2NBRUksS0FBSyxlQUFFO2dCQUFHLElBQUksRUFBQyxHQUFSO2dCQUFBLFVBQWFELElBQUksQ0FBQ0U7Y0FBbEIsRUFGWDtjQUdJLFdBQVcsRUFBQztZQUhoQjtVQURKLEVBRFE7UUFBQTtNQUpoQixFQUZKO0lBQUEsRUFIUixFQXFCS0gsS0FBSyxnQkFBRztNQUFBLFVBQU1BO0lBQU4sRUFBSCxHQUF3QixFQXJCbEM7RUFBQSxFQUROO0FBMEJELENBdENEOztBQXVDQSwrREFBZWhCLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbW9kdWxlcy9zZXJ2aWNlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvc2VydmljZXMvc2VydmljZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlcnZpY2VMaXN0IGZyb20gJy4vc2VydmljZXMnXHJcblxyXG5jbGFzcyBTdXBwb3J0SW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICB9XG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInN1cHBvcnRJbmRleFwiPlxyXG4gICAgICAgIDxTZXJ2aWNlTGlzdCAvPlxyXG4gICAgICA8L2Rpdj4pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdXBwb3J0SW5kZXhcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICdAbW9kYWxzL2Jhc2VQcm9wc0ludGVyZmFjZSdcclxuLy8gaW1wb3J0IHsgQXZhdGFyLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnYW50ZC9lcy9hdmF0YXInXHJcbmltcG9ydCBMaXN0IGZyb20gJ2FudGQvZXMvbGlzdCdcclxuXHJcbmltcG9ydCB7IFNlcnZpY2VJdGVtTW9kYWwgfSBmcm9tICdAbW9kYWxzL3NlcnZpY2VzL3NlcnZpY2VJdGVtJ1xyXG5pbXBvcnQgeyBzZXRTZXJ2aWNlcywgZmV0Y2hTZXJ2aWNlTGlzdCB9IGZyb20gJ0Btb2R1bGVzL3NlcnZpY2VzL3JlZHV4L3NlcnZpY2VMaXN0L3NlcnZpY2VMaXN0U2xpY2UnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJ3NyYy9yZWR1eC9zdG9yZSdcclxuXHJcbmludGVyZmFjZSBTZXJ2aWNlTGlzdE93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICAvLyBzZXJ2aWNlcz86IFNlcnZpY2VJdGVtTW9kYWxbXVxyXG59XHJcblxyXG5jb25zdCBTZXJ2aWNlTGlzdDogUmVhY3QuRkM8U2VydmljZUxpc3RPd25Qcm9wcz4gPSAocHJvcHM6IFNlcnZpY2VMaXN0T3duUHJvcHMpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpXHJcblxyXG4gIGNvbnN0IHsgc2VydmljZXMsIGxvYWRpbmcsIGxhc3RTdGF0dXNVcGRhdGVUaW1lLCBlcnJvciB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIChzdGF0ZSBhcyBhbnkpLnNlcnZpY2VMaXN0XHJcbiAgfSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGRpc3BhdGNoKHNldFNlcnZpY2VzKHtzZXJ2aWNlczogW3tzZXJ2aWNlSWQ6IFwic2RcIiwgc2VydmljZU5hbWU6IFwiYXNkXCIsIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpfV19KSlcclxuICAgIGRpc3BhdGNoKGZldGNoU2VydmljZUxpc3QoKSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZ1xuICAgICAgICAgICAgICA/ICdMb2FkaW5nLi4nXHJcbiAgICAgICAgICAgICAgOiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2xhc3RTdGF0dXNVcGRhdGVUaW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tbG9hZG1vcmUtbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17c2VydmljZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtOiBTZXJ2aWNlSXRlbU1vZGFsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtgaHR0cHM6Ly9kdW1teWltYWdlLmNvbS8zMDAucG5nLzA5Zi9mZmYmdGV4dD0ke2l0ZW0uc2VydmljZUlkfWB9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj1cIiNcIj57aXRlbS5zZXJ2aWNlTmFtZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2Vycm9yID8gPGRpdj57ZXJyb3J9PC9kaXY+IDogJyd9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTGlzdFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTZXJ2aWNlTGlzdCIsIlN1cHBvcnRJbmRleCIsInByb3BzIiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwiQXZhdGFyIiwiTGlzdCIsImZldGNoU2VydmljZUxpc3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiZGlzcGF0Y2giLCJzdGF0ZSIsInNlcnZpY2VMaXN0Iiwic2VydmljZXMiLCJsb2FkaW5nIiwibGFzdFN0YXR1c1VwZGF0ZVRpbWUiLCJlcnJvciIsIml0ZW0iLCJzZXJ2aWNlSWQiLCJzZXJ2aWNlTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=