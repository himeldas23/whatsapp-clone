"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/common/IncomingVideoCall.jsx":
/*!*****************************************************!*\
  !*** ./src/components/common/IncomingVideoCall.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction IncomingVideoCall() {\n    _s();\n    const [{ incomingVideoCall }, dispatch] = useStateProvider();\n    const acceptCall = ()=>{};\n    const rejectCall = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-4 bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: incomingVideoCall.profilePicture,\n                    alt: \"avatar\",\n                    width: 70,\n                    height: 70,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\n_s(IncomingVideoCall, \"VD3I6CirxUvNDlWLqbTS02K24GA=\", true);\n_c = IncomingVideoCall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingVideoCall);\nvar _c;\n$RefreshReg$(_c, \"IncomingVideoCall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdWaWRlb0NhbGwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNMO0FBRTFCLFNBQVNFOztJQUVQLE1BQU0sQ0FBQyxFQUFDQyxpQkFBaUIsRUFBQyxFQUFDQyxTQUFTLEdBQUdDO0lBRXZDLE1BQU1DLGFBQWEsS0FFbkI7SUFFQSxNQUFNQyxhQUFhLEtBRW5CO0lBRUEscUJBQU8sOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNwQiw4REFBQ0Q7MEJBQ0MsNEVBQUNSLG1EQUFLQTtvQkFDTlUsS0FBS1Asa0JBQWtCUSxjQUFjO29CQUFFQyxLQUFJO29CQUFTQyxPQUFPO29CQUFJQyxRQUFRO29CQUFJTCxXQUFVOzs7Ozs7Ozs7OzswQkFJdkYsOERBQUNEOzs7Ozs7Ozs7OztBQUlMO0dBdkJTTjtLQUFBQTtBQXlCVCwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9JbmNvbWluZ1ZpZGVvQ2FsbC5qc3g/YjdkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gSW5jb21pbmdWaWRlb0NhbGwoKSB7XG5cbiAgY29uc3QgW3tpbmNvbWluZ1ZpZGVvQ2FsbH0sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuXG4gIGNvbnN0IGFjY2VwdENhbGwgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIGNvbnN0IHJlamVjdENhbGwgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImgtMjQgdy04MCBmaXhlZCBib3R0b20tOCBtYi0wIHJpZ2h0LTYgei01MCByb3VuZGVkLXNtIGZsZXggZ2FwLTUgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcC00IGJnLWNvbnZlcnNhdGlvbi1wYW5lbC1iYWNrZ3JvdW5kIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctMnhsIGJvcmRlci1pY29uLWdyZWVuIGJvcmRlci0yIHB5LTE0IFwiPlxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2VcbiAgICAgIHNyYz17aW5jb21pbmdWaWRlb0NhbGwucHJvZmlsZVBpY3R1cmV9IGFsdD1cImF2YXRhclwiIHdpZHRoPXs3MH0gaGVpZ2h0PXs3MH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5jb21pbmdWaWRlb0NhbGw7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIkluY29taW5nVmlkZW9DYWxsIiwiaW5jb21pbmdWaWRlb0NhbGwiLCJkaXNwYXRjaCIsInVzZVN0YXRlUHJvdmlkZXIiLCJhY2NlcHRDYWxsIiwicmVqZWN0Q2FsbCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInByb2ZpbGVQaWN0dXJlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/IncomingVideoCall.jsx\n"));

/***/ })

});