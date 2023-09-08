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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Container(param) {\n    let { data } = param;\n    _s();\n    const [{ socket, userInfo }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [callAccepted, setCallAccepted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-conversation-border border-1 w-full bg-conversation-panel-background flex flex-col h-[100vh] overflow-hidden items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-3 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-5xl\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-lg\",\n                        children: callAccepted && data.callType !== \"video\" ? \"On going Call\" : \"Calling\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this),\n            !callAccepted || data.callType\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n_s(Container, \"oB911uDahvARKT+ft1RX9Wa0/LE=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxsL0NvbnRhaW5lci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEQ7QUFDbEI7QUFFeEMsU0FBU0csVUFBVSxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7O0lBQ2pCLE1BQU0sQ0FBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxFQUFFQyxTQUFTLEdBQUdQLHVFQUFnQkE7SUFDekQsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDakQscUJBQU8sOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNwQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBS0QsV0FBVTtrQ0FBWVAsS0FBS1MsSUFBSTs7Ozs7O2tDQUNyQyw4REFBQ0Q7d0JBQUtELFdBQVU7a0NBRVpILGdCQUFnQkosS0FBS1UsUUFBUSxLQUFLLFVBQVUsa0JBQWtCOzs7Ozs7Ozs7Ozs7WUFJbkUsQ0FBQ04sZ0JBQWdCSixLQUFLVSxRQUFROzs7Ozs7O0FBRW5DO0dBZFNYOztRQUNrQ0gsbUVBQWdCQTs7O0tBRGxERztBQWdCVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYWxsL0NvbnRhaW5lci5qc3g/MDMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoeyBkYXRhIH0pIHtcbiAgY29uc3QgW3sgc29ja2V0LCB1c2VySW5mbyB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtjYWxsQWNjZXB0ZWQsIHNldENhbGxBY2NlcHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1jb252ZXJzYXRpb24tYm9yZGVyIGJvcmRlci0xIHctZnVsbCBiZy1jb252ZXJzYXRpb24tcGFuZWwtYmFja2dyb3VuZCBmbGV4IGZsZXgtY29sIGgtWzEwMHZoXSBvdmVyZmxvdy1oaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTV4bFwiPntkYXRhLm5hbWV9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxuICAgICAgICB7XG4gICAgICAgICAgY2FsbEFjY2VwdGVkICYmIGRhdGEuY2FsbFR5cGUgIT09IFwidmlkZW9cIiA/IFwiT24gZ29pbmcgQ2FsbFwiIDogXCJDYWxsaW5nXCJcbiAgICAgICAgfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIHshY2FsbEFjY2VwdGVkIHx8IGRhdGEuY2FsbFR5cGUgfVxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsImRhdGEiLCJzb2NrZXQiLCJ1c2VySW5mbyIsImRpc3BhdGNoIiwiY2FsbEFjY2VwdGVkIiwic2V0Q2FsbEFjY2VwdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm5hbWUiLCJjYWxsVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Call/Container.jsx\n"));

/***/ })

});