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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction IncomingVideoCall() {\n    _s();\n    const [{ incomingVideoCall }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const acceptCall = ()=>{\n        const call = incomingVideoCall;\n    };\n    const rejectCall = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-4 bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: incomingVideoCall.profilePicture,\n                    alt: \"avatar\",\n                    width: 70,\n                    height: 70,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: incomingVideoCall.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs\",\n                        children: \"Incoming Video Call\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: rejectCall,\n                                children: \"Reject\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: acceptCall,\n                                children: \"Accept\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\n_s(IncomingVideoCall, \"VD3I6CirxUvNDlWLqbTS02K24GA=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = IncomingVideoCall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingVideoCall);\nvar _c;\n$RefreshReg$(_c, \"IncomingVideoCall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdWaWRlb0NhbGwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEQ7QUFDM0I7QUFDTDtBQUUxQixTQUFTRzs7SUFFUCxNQUFNLENBQUMsRUFBQ0MsaUJBQWlCLEVBQUMsRUFBQ0MsU0FBUyxHQUFHTCx1RUFBZ0JBO0lBRXZELE1BQU1NLGFBQWE7UUFDakIsTUFBTUMsT0FBT0g7SUFDZjtJQUVBLE1BQU1JLGFBQWEsS0FFbkI7SUFFQSxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ3BCLDhEQUFDRDswQkFDQyw0RUFBQ1IsbURBQUtBO29CQUNOVSxLQUFLUCxrQkFBa0JRLGNBQWM7b0JBQUVDLEtBQUk7b0JBQVNDLE9BQU87b0JBQUlDLFFBQVE7b0JBQUlMLFdBQVU7Ozs7Ozs7Ozs7OzBCQUl2Riw4REFBQ0Q7O2tDQUNDLDhEQUFDQTtrQ0FBS0wsa0JBQWtCWSxJQUFJOzs7Ozs7a0NBQzVCLDhEQUFDUDt3QkFBSUMsV0FBVTtrQ0FBVTs7Ozs7O2tDQUN6Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FBT1AsV0FBVTtnQ0FDbEJRLFNBQVNWOzBDQUFZOzs7Ozs7MENBSXJCLDhEQUFDUztnQ0FBT1AsV0FBVTtnQ0FDbEJRLFNBQVNaOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0I7R0FuQ1NIOztRQUVnQ0gsbUVBQWdCQTs7O0tBRmhERztBQXFDVCwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9JbmNvbWluZ1ZpZGVvQ2FsbC5qc3g/YjdkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBJbmNvbWluZ1ZpZGVvQ2FsbCgpIHtcblxuICBjb25zdCBbe2luY29taW5nVmlkZW9DYWxsfSxkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG5cbiAgY29uc3QgYWNjZXB0Q2FsbCA9ICgpID0+IHtcbiAgICBjb25zdCBjYWxsID0gaW5jb21pbmdWaWRlb0NhbGxcbiAgfVxuXG4gIGNvbnN0IHJlamVjdENhbGwgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImgtMjQgdy04MCBmaXhlZCBib3R0b20tOCBtYi0wIHJpZ2h0LTYgei01MCByb3VuZGVkLXNtIGZsZXggZ2FwLTUgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcC00IGJnLWNvbnZlcnNhdGlvbi1wYW5lbC1iYWNrZ3JvdW5kIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctMnhsIGJvcmRlci1pY29uLWdyZWVuIGJvcmRlci0yIHB5LTE0IFwiPlxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2VcbiAgICAgIHNyYz17aW5jb21pbmdWaWRlb0NhbGwucHJvZmlsZVBpY3R1cmV9IGFsdD1cImF2YXRhclwiIHdpZHRoPXs3MH0gaGVpZ2h0PXs3MH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgPGRpdj57aW5jb21pbmdWaWRlb0NhbGwubmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14c1wiPkluY29taW5nIFZpZGVvIENhbGw8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBtdC0yXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBwLTEgcHgtMyB0ZXh0LXNtIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgIG9uQ2xpY2s9e3JlamVjdENhbGx9PlxuICAgICAgICAgIFJlamVjdFxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBwLTEgcHgtMyB0ZXh0LXNtIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgIG9uQ2xpY2s9e2FjY2VwdENhbGx9PlxuICAgICAgICAgIEFjY2VwdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluY29taW5nVmlkZW9DYWxsO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJJbWFnZSIsIlJlYWN0IiwiSW5jb21pbmdWaWRlb0NhbGwiLCJpbmNvbWluZ1ZpZGVvQ2FsbCIsImRpc3BhdGNoIiwiYWNjZXB0Q2FsbCIsImNhbGwiLCJyZWplY3RDYWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwicHJvZmlsZVBpY3R1cmUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/IncomingVideoCall.jsx\n"));

/***/ })

});