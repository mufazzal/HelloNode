"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_modules_auth_UnAuthenticated_tsx"],{

/***/ "./src/modules/LandingPage/index.tsx":
/*!*******************************************!*\
  !*** ./src/modules/LandingPage/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_auth_LoginButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/auth/LoginButton */ "./src/modules/auth/LoginButton.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var LandingPage = function LandingPage(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_modules_auth_LoginButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onLogin: props.onLogin
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./src/modules/auth/LoginButton.tsx":
/*!******************************************!*\
  !*** ./src/modules/auth/LoginButton.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import { Button } from 'antd';





var LoginButton = function LoginButton(props) {
  var useAuth0_ = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__.useAuth0)();
  var isAuthenticated = useAuth0_.isAuthenticated,
      user = useAuth0_.user,
      getAccessTokenWithPopup = useAuth0_.getAccessTokenWithPopup,
      loginWithRedirect = useAuth0_.loginWithRedirect;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTokenGenerated = _useState2[0],
      setIsTokenGenerated = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setLoading = _useState6[1];

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user !== null && user !== void 0 && user.name) {
      setLoading(true);
      void getAccessTokenWithPopup({
        scope: 'offline_access read:homeWidget read:supportWidget',
        audience: 'https://mufreact'
      }).then(function (res) {
        setLoading(false);
        console.log('getAccessTokenWithPopup --> ', res);
        setIsTokenGenerated(true);
        props.onLogin(res);
      }).catch(function (_error) {
        setLoading(false);
        setError('Something went wrong with Token Generation');
      });
    }
  }, [user === null || user === void 0 ? void 0 : user.name]);

  var attempLogin = function attempLogin() {
    setLoading(true);
    void loginWithRedirect().then(function (res) {
      console.log('loginWithRedirect', res);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_es_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: attempLogin,
    loading: isLoading,
    children: t('label_login')
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoginButton);

/***/ }),

/***/ "./src/modules/auth/UnAuthenticated.tsx":
/*!**********************************************!*\
  !*** ./src/modules/auth/UnAuthenticated.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_LandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/LandingPage */ "./src/modules/LandingPage/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var UnAuthenticated = function UnAuthenticated(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_modules_LandingPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onLogin: props.onLogin
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UnAuthenticated);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21vZHVsZXNfYXV0aF9VbkF1dGhlbnRpY2F0ZWRfdHN4LWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQVNBLElBQU1HLFdBQTBDLEdBQUcsU0FBN0NBLFdBQTZDLENBQUNDLEtBQUQsRUFBZ0M7RUFDL0Usc0JBQWNGLDZEQUFjLEVBQTVCO0VBQUEsSUFBUUcsQ0FBUixtQkFBUUEsQ0FBUjs7RUFFQSxvQkFBTztJQUFBLHVCQUdILHVEQUFDLGlFQUFEO01BQWEsT0FBTyxFQUFFRCxLQUFLLENBQUNFO0lBQTVCO0VBSEcsRUFBUDtBQU1ILENBVEQ7O0FBV0EsK0RBQWVILFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0NBRUE7O0FBQ0E7QUFHQTs7O0FBTUEsSUFBTUYsV0FBMEMsR0FBRyxTQUE3Q0EsV0FBNkMsQ0FBQ0csS0FBRCxFQUFnQztFQUNqRixJQUFNTyxTQUFTLEdBQUdGLDREQUFRLEVBQTFCO0VBQ0EsSUFBUUcsZUFBUixHQUE4RUQsU0FBOUUsQ0FBUUMsZUFBUjtFQUFBLElBQXlCQyxJQUF6QixHQUE4RUYsU0FBOUUsQ0FBeUJFLElBQXpCO0VBQUEsSUFBK0JDLHVCQUEvQixHQUE4RUgsU0FBOUUsQ0FBK0JHLHVCQUEvQjtFQUFBLElBQXdEQyxpQkFBeEQsR0FBOEVKLFNBQTlFLENBQXdESSxpQkFBeEQ7O0VBQ0EsZ0JBQWdEUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEQ7RUFBQTtFQUFBLElBQU9RLGdCQUFQO0VBQUEsSUFBeUJDLG1CQUF6Qjs7RUFDQSxpQkFBMEJULCtDQUFRLENBQXFCVSxTQUFyQixDQUFsQztFQUFBO0VBQUEsSUFBT0MsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBQ0EsaUJBQWdDWiwrQ0FBUSxDQUFzQixLQUF0QixDQUF4QztFQUFBO0VBQUEsSUFBT2EsU0FBUDtFQUFBLElBQWtCQyxVQUFsQjs7RUFFQSxzQkFBY3BCLDZEQUFjLEVBQTVCO0VBQUEsSUFBUUcsQ0FBUixtQkFBUUEsQ0FBUjs7RUFFQUUsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSU0sSUFBSixhQUFJQSxJQUFKLGVBQUlBLElBQUksQ0FBRVUsSUFBVixFQUFnQjtNQUNkRCxVQUFVLENBQUMsSUFBRCxDQUFWO01BQ0EsS0FBS1IsdUJBQXVCLENBQUM7UUFBRVUsS0FBSyxFQUFFLG1EQUFUO1FBQThEQyxRQUFRLEVBQUU7TUFBeEUsQ0FBRCxDQUF2QixDQUNGQyxJQURFLENBQ0csVUFBQUMsR0FBRyxFQUFJO1FBQ1hMLFVBQVUsQ0FBQyxLQUFELENBQVY7UUFDQU0sT0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFBNENGLEdBQTVDO1FBQ0FWLG1CQUFtQixDQUFDLElBQUQsQ0FBbkI7UUFDQWIsS0FBSyxDQUFDRSxPQUFOLENBQWNxQixHQUFkO01BQ0QsQ0FORSxFQU1BRyxLQU5BLENBTU0sVUFBQUMsTUFBTSxFQUFJO1FBQ2pCVCxVQUFVLENBQUMsS0FBRCxDQUFWO1FBQ0FGLFFBQVEsQ0FBQyw0Q0FBRCxDQUFSO01BQ0QsQ0FURSxDQUFMO0lBVUQ7RUFDRixDQWRRLEVBY04sQ0FBQ1AsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVVLElBQVAsQ0FkTSxDQUFUOztFQWdCQSxJQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0lBQ3hCVixVQUFVLENBQUMsSUFBRCxDQUFWO0lBQ0EsS0FBS1AsaUJBQWlCLEdBQ25CVyxJQURFLENBQ0csVUFBQ0MsR0FBRCxFQUFjO01BQ2xCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsR0FBakM7SUFDRCxDQUhFLENBQUw7RUFJRCxDQU5EOztFQVFBLG9CQUFPLHVEQUFDLHNEQUFEO0lBQ0csT0FBTyxFQUFFSyxXQURaO0lBRUcsT0FBTyxFQUFFWCxTQUZaO0lBQUEsVUFHTWhCLENBQUMsQ0FBQyxhQUFEO0VBSFAsRUFBUDtBQUtELENBdENEOztBQXdDQSwrREFBZUosV0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7OztBQVFBLElBQU1nQyxlQUFrRCxHQUFHLFNBQXJEQSxlQUFxRCxDQUFDN0IsS0FBRCxFQUFvQztFQUM3RixvQkFBTyx1REFBQyw0REFBRDtJQUFhLE9BQU8sRUFBRUEsS0FBSyxDQUFDRTtFQUE1QixFQUFQO0FBQ0QsQ0FGRDs7QUFJQSwrREFBZTJCLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbW9kdWxlcy9MYW5kaW5nUGFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvYXV0aC9Mb2dpbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21vZHVsZXMvYXV0aC9VbkF1dGhlbnRpY2F0ZWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvZ2luQnV0dG9uIGZyb20gJ0Btb2R1bGVzL2F1dGgvTG9naW5CdXR0b24nXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICdAbW9kYWxzL2Jhc2VQcm9wc0ludGVyZmFjZSdcclxuXHJcbmludGVyZmFjZSBMYW5kaW5nUGFnZU93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBvbkxvZ2luOiAodG9rZW46IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZTogUmVhY3QuRkM8TGFuZGluZ1BhZ2VPd25Qcm9wcz4gPSAocHJvcHM6IExhbmRpbmdQYWdlT3duUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPExvZ2luQnV0dG9uIG9uTG9naW49e3Byb3BzLm9uTG9naW59Lz5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2VcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aDAgfSBmcm9tICdAYXV0aDAvYXV0aDAtcmVhY3QnXHJcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvZXMvYnV0dG9uJ1xyXG5cclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnQG1vZGFscy9iYXNlUHJvcHNJbnRlcmZhY2UnXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcbmludGVyZmFjZSBMb2dpbkJ1dHRvbk93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBvbkxvZ2luOiAodG9rZW46IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBMb2dpbkJ1dHRvbjogUmVhY3QuRkM8TG9naW5CdXR0b25Pd25Qcm9wcz4gPSAocHJvcHM6IExvZ2luQnV0dG9uT3duUHJvcHMpID0+IHtcclxuICBjb25zdCB1c2VBdXRoMF8gPSB1c2VBdXRoMCgpXHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIsIGdldEFjY2Vzc1Rva2VuV2l0aFBvcHVwLCBsb2dpbldpdGhSZWRpcmVjdCB9ID0gdXNlQXV0aDBfXHJcbiAgY29uc3QgW2lzVG9rZW5HZW5lcmF0ZWQsIHNldElzVG9rZW5HZW5lcmF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCB1bmRlZmluZWQ+KGZhbHNlKVxyXG5cclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcj8ubmFtZSkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIHZvaWQgZ2V0QWNjZXNzVG9rZW5XaXRoUG9wdXAoeyBzY29wZTogJ29mZmxpbmVfYWNjZXNzIHJlYWQ6aG9tZVdpZGdldCByZWFkOnN1cHBvcnRXaWRnZXQnLCBhdWRpZW5jZTogJ2h0dHBzOi8vbXVmcmVhY3QnIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0QWNjZXNzVG9rZW5XaXRoUG9wdXAgLS0+ICcsIHJlcylcclxuICAgICAgICAgIHNldElzVG9rZW5HZW5lcmF0ZWQodHJ1ZSlcclxuICAgICAgICAgIHByb3BzLm9uTG9naW4ocmVzKVxyXG4gICAgICAgIH0pLmNhdGNoKF9lcnJvciA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggVG9rZW4gR2VuZXJhdGlvbicpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbdXNlcj8ubmFtZV0pXHJcblxyXG4gIGNvbnN0IGF0dGVtcExvZ2luID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgdm9pZCBsb2dpbldpdGhSZWRpcmVjdCgpXHJcbiAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbldpdGhSZWRpcmVjdCcsIHJlcylcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2F0dGVtcExvZ2lufVxyXG4gICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgIHt0KCdsYWJlbF9sb2dpbicpfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQnV0dG9uXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gJ0Btb2R1bGVzL0xhbmRpbmdQYWdlJ1xyXG5cclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnQG1vZGFscy9iYXNlUHJvcHNJbnRlcmZhY2UnXHJcblxyXG5pbnRlcmZhY2UgVW5BdXRoZW50aWNhdGVkT3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIG9uTG9naW46ICh0b2tlbjogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IFVuQXV0aGVudGljYXRlZDogUmVhY3QuRkM8VW5BdXRoZW50aWNhdGVkT3duUHJvcHM+ID0gKHByb3BzOiBVbkF1dGhlbnRpY2F0ZWRPd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiA8TGFuZGluZ1BhZ2Ugb25Mb2dpbj17cHJvcHMub25Mb2dpbn0vPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbkF1dGhlbnRpY2F0ZWRcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTG9naW5CdXR0b24iLCJ1c2VUcmFuc2xhdGlvbiIsIkxhbmRpbmdQYWdlIiwicHJvcHMiLCJ0Iiwib25Mb2dpbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aDAiLCJCdXR0b24iLCJ1c2VBdXRoMF8iLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwiZ2V0QWNjZXNzVG9rZW5XaXRoUG9wdXAiLCJsb2dpbldpdGhSZWRpcmVjdCIsImlzVG9rZW5HZW5lcmF0ZWQiLCJzZXRJc1Rva2VuR2VuZXJhdGVkIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJuYW1lIiwic2NvcGUiLCJhdWRpZW5jZSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJfZXJyb3IiLCJhdHRlbXBMb2dpbiIsIlVuQXV0aGVudGljYXRlZCJdLCJzb3VyY2VSb290IjoiIn0=