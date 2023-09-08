"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Call_Container_jsx",{

/***/ "./src/components/Call/Container.jsx":
/*!*******************************************!*\
  !*** ./src/components/Call/Container.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Container(param) {\n    let { data } = param;\n    _s();\n    const [{ socket, userInfo }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [callAccepted, setCallAccepted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-conversation-border border-1 w-full bg-conversation-panel-background flex flex-col h-[100vh] overflow-hidden items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-3 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-5xl\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-lg\",\n                        children: callAccepted && data.callType !== \"video\" ? \"On going Call\" : \"Calling\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this),\n            (!callAccepted || data.callType === \"audio\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 16,\n                columnNumber: 54\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n_s(Container, \"oB911uDahvARKT+ft1RX9Wa0/LE=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxsL0NvbnRhaW5lci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEQ7QUFDbEI7QUFFeEMsU0FBU0csVUFBVSxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7O0lBQ2pCLE1BQU0sQ0FBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxFQUFFQyxTQUFTLEdBQUdQLHVFQUFnQkE7SUFDekQsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDakQscUJBQU8sOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNwQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBS0QsV0FBVTtrQ0FBWVAsS0FBS1MsSUFBSTs7Ozs7O2tDQUNyQyw4REFBQ0Q7d0JBQUtELFdBQVU7a0NBRVpILGdCQUFnQkosS0FBS1UsUUFBUSxLQUFLLFVBQVUsa0JBQWtCOzs7Ozs7Ozs7Ozs7WUFJbEUsRUFBQ04sZ0JBQWdCSixLQUFLVSxRQUFRLEtBQUssT0FBTSxtQkFBTSw4REFBQ0o7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUVwRTtHQWRTUjs7UUFDa0NILG1FQUFnQkE7OztLQURsREc7QUFnQlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FsbC9Db250YWluZXIuanN4PzAzM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ29udGFpbmVyKHsgZGF0YSB9KSB7XG4gIGNvbnN0IFt7IHNvY2tldCwgdXNlckluZm8gfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbY2FsbEFjY2VwdGVkLCBzZXRDYWxsQWNjZXB0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJib3JkZXItY29udmVyc2F0aW9uLWJvcmRlciBib3JkZXItMSB3LWZ1bGwgYmctY29udmVyc2F0aW9uLXBhbmVsLWJhY2tncm91bmQgZmxleCBmbGV4LWNvbCBoLVsxMDB2aF0gb3ZlcmZsb3ctaGlkZGVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC01eGxcIj57ZGF0YS5uYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cbiAgICAgICAge1xuICAgICAgICAgIGNhbGxBY2NlcHRlZCAmJiBkYXRhLmNhbGxUeXBlICE9PSBcInZpZGVvXCIgPyBcIk9uIGdvaW5nIENhbGxcIiA6IFwiQ2FsbGluZ1wiXG4gICAgICAgIH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICB7KCFjYWxsQWNjZXB0ZWQgfHwgZGF0YS5jYWxsVHlwZSA9PT0gXCJhdWRpb1wiKSAmJiA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2Pn1cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGVQcm92aWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJkYXRhIiwic29ja2V0IiwidXNlckluZm8iLCJkaXNwYXRjaCIsImNhbGxBY2NlcHRlZCIsInNldENhbGxBY2NlcHRlZCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJuYW1lIiwiY2FsbFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Call/Container.jsx\n"));

/***/ })

});