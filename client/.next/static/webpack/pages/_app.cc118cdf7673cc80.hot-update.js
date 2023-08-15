"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/StateReducers.js":
/*!**************************************!*\
  !*** ./src/context/StateReducers.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialState: function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/context/constants.js\");\n\nconst initialState = {\n    userInfo: undefined,\n    newUser: false,\n    contactsPage: false,\n    currentChatUser: undefined\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_INFO:\n            return {\n                ...state,\n                userInfo: action.userInfo\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_USER:\n            return {\n                ...state,\n                newUser: action.newUser\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_ALL_CONTACTS_PAGE:\n            return {\n                ...state,\n                contactsPage: !state.contactsPage\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.CHANGE_CURRENT_CHAT_USER:\n            return {\n                ...state,\n                currentChatUser: action.user\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TdGF0ZVJlZHVjZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRXBDLE1BQU1DLGVBQWU7SUFDeEJDLFVBQVVDO0lBQ1ZDLFNBQVM7SUFDVEMsY0FBYztJQUNkQyxpQkFBaUJIO0FBRXJCLEVBQUU7QUFFRixNQUFNSSxVQUFVLENBQUNDLE9BQU9DO0lBQ3BCLE9BQVFBLE9BQU9DLElBQUk7UUFDZixLQUFLVixvREFBWUEsQ0FBQ1csYUFBYTtZQUMzQixPQUFPO2dCQUNILEdBQUdILEtBQUs7Z0JBQ1JOLFVBQVVPLE9BQU9QLFFBQVE7WUFDN0I7UUFDSixLQUFLRixvREFBWUEsQ0FBQ1ksYUFBYTtZQUMzQixPQUFPO2dCQUNILEdBQUdKLEtBQUs7Z0JBQ1JKLFNBQVNLLE9BQU9MLE9BQU87WUFDM0I7UUFHSixLQUFLSixvREFBWUEsQ0FBQ2EscUJBQXFCO1lBQ25DLE9BQU87Z0JBQ0gsR0FBR0wsS0FBSztnQkFDUkgsY0FBYyxDQUFDRyxNQUFNSCxZQUFZO1lBQ3JDO1FBQ0osS0FBS0wsb0RBQVlBLENBQUNjLHdCQUF3QjtZQUN0QyxPQUFPO2dCQUNILEdBQUdOLEtBQUs7Z0JBQ1JGLGlCQUFpQkcsT0FBT00sSUFBSTtZQUNoQztRQUNKO1lBQ0ksT0FBT1A7SUFDZjtBQUNKO0FBQ0EsK0RBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvU3RhdGVSZWR1Y2Vycy5qcz8wMDQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXJJbmZvOiB1bmRlZmluZWQsXG4gICAgbmV3VXNlcjogZmFsc2UsXG4gICAgY29udGFjdHNQYWdlOiBmYWxzZSxcbiAgICBjdXJyZW50Q2hhdFVzZXI6IHVuZGVmaW5lZCxcbiAgICBcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfSU5GTzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXNlckluZm86IGFjdGlvbi51c2VySW5mbyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9VU0VSX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG5ld1VzZXI6IGFjdGlvbi5uZXdVc2VyLFxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9BTExfQ09OVEFDVFNfUEFHRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY29udGFjdHNQYWdlOiAhc3RhdGUuY29udGFjdHNQYWdlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuQ0hBTkdFX0NVUlJFTlRfQ0hBVF9VU0VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2hhdFVzZXI6IGFjdGlvbi51c2VyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJuYW1lcyI6WyJyZWR1Y2VyQ2FzZXMiLCJpbml0aWFsU3RhdGUiLCJ1c2VySW5mbyIsInVuZGVmaW5lZCIsIm5ld1VzZXIiLCJjb250YWN0c1BhZ2UiLCJjdXJyZW50Q2hhdFVzZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsIlNFVF9VU0VSX1VTRVIiLCJTRVRfQUxMX0NPTlRBQ1RTX1BBR0UiLCJDSEFOR0VfQ1VSUkVOVF9DSEFUX1VTRVIiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/StateReducers.js\n"));

/***/ })

});