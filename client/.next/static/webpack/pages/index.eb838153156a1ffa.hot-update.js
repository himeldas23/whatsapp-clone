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

/***/ "./src/components/Chat/SearchMessages.jsx":
/*!************************************************!*\
  !*** ./src/components/Chat/SearchMessages.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SearchMessages() {\n    _s();\n    const [{ currentChatUser, messages }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-conversation-border border-1 w-full bg-conversation-panel-background flex flex-col z-10 max-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-16 px-4 py-5 flex gap-10 items-center bg-panel-header-background text-primary-strong\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoClose, {\n                        className: \"cursor-pointer text-icon-lighter text-2xl\",\n                        onClick: ()=>dispatch({\n                                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.SET_MESSAGE_SEARCH\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Search Messages\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-auto custom-scrollbar h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center flex-col w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex px-5 items-center gap-3 h-14 w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiSearchAlt2, {\n                                            className: \"text-panel-header-icon cursor-pointer text-l\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Search Messages\",\n                                            className: \"bg-transparent text-sm focus:outline-none text-white w-full\",\n                                            value: searchTerm,\n                                            onChange: (e)=>setSearchTerm(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mt-10 text-secondary\",\n                            children: !searchTerm.length && \"Search for messages with \".concat(currentChatUser.name)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n}\n_s(SearchMessages, \"LSUCMJAECaNJKgq/bmtQxz9XbE4=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = SearchMessages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchMessages);\nvar _c;\n$RefreshReg$(_c, \"SearchMessages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L1NlYXJjaE1lc3NhZ2VzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUNQO0FBQ1g7QUFDTTtBQUNKO0FBRTFDLFNBQVNNOztJQUNQLE1BQU0sQ0FBQyxFQUFDQyxlQUFlLEVBQUNDLFFBQVEsRUFBRSxFQUFFQyxTQUFTLEdBQUdULHVFQUFnQkE7SUFDaEUsTUFBTSxDQUFDVSxZQUFXQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTVDLHFCQUFPLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1Isb0RBQU9BO3dCQUFDUSxXQUFVO3dCQUNqQkMsU0FBUyxJQUFNTCxTQUFTO2dDQUFFTSxNQUFNZCw0REFBWUEsQ0FBQ2Usa0JBQWtCOzRCQUFDOzs7Ozs7a0NBRWxFLDhEQUFDQztrQ0FBSzs7Ozs7Ozs7Ozs7OzBCQUVSLDhEQUFDTDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDtrREFDQyw0RUFBQ1Isd0RBQVlBOzRDQUFDUyxXQUFVOzs7Ozs7Ozs7OztrREFFMUIsOERBQUNEO2tEQUNDLDRFQUFDTTs0Q0FDQ0gsTUFBSzs0Q0FDTEksYUFBWTs0Q0FDWk4sV0FBVTs0Q0FDVk8sT0FBT1Y7NENBQ1BXLFVBQVUsQ0FBQ0MsSUFBSVgsY0FBY1csRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtuRCw4REFBQ0g7NEJBQUtKLFdBQVU7c0NBQ2YsQ0FBQ0gsV0FBV2MsTUFBTSxJQUFJLDRCQUFpRCxPQUFyQmpCLGdCQUFnQmtCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9FO0dBcENTbkI7O1FBQ3lDTixtRUFBZ0JBOzs7S0FEekRNO0FBc0NULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXQvU2VhcmNoTWVzc2FnZXMuanN4PzljZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCaVNlYXJjaEFsdDIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IElvQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5cbmZ1bmN0aW9uIFNlYXJjaE1lc3NhZ2VzKCkge1xuICBjb25zdCBbe2N1cnJlbnRDaGF0VXNlcixtZXNzYWdlcyB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWNvbnZlcnNhdGlvbi1ib3JkZXIgYm9yZGVyLTEgdy1mdWxsIGJnLWNvbnZlcnNhdGlvbi1wYW5lbC1iYWNrZ3JvdW5kIGZsZXggZmxleC1jb2wgei0xMCBtYXgtaC1zY3JlZW5cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTYgcHgtNCBweS01IGZsZXggZ2FwLTEwIGl0ZW1zLWNlbnRlciBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCB0ZXh0LXByaW1hcnktc3Ryb25nXCI+XG4gICAgICA8SW9DbG9zZSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWljb24tbGlnaHRlciB0ZXh0LTJ4bFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFX1NFQVJDSCB9KX1cbiAgICAgIC8+XG4gICAgICA8c3Bhbj5TZWFyY2ggTWVzc2FnZXM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIGN1c3RvbS1zY3JvbGxiYXIgaC1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHgtNSBpdGVtcy1jZW50ZXIgZ2FwLTMgaC0xNCB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIGZsZXggaXRlbXMtY2VudGVyIGdhcC01IHB4LTMgcHktMSByb3VuZGVkLWxnIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEJpU2VhcmNoQWx0MiBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQtbFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBNZXNzYWdlc1wiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIHRleHQtd2hpdGUgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMTAgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgeyFzZWFyY2hUZXJtLmxlbmd0aCAmJiBgU2VhcmNoIGZvciBtZXNzYWdlcyB3aXRoICR7Y3VycmVudENoYXRVc2VyLm5hbWV9YH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hNZXNzYWdlcztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJpU2VhcmNoQWx0MiIsIklvQ2xvc2UiLCJTZWFyY2hNZXNzYWdlcyIsImN1cnJlbnRDaGF0VXNlciIsIm1lc3NhZ2VzIiwiZGlzcGF0Y2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0eXBlIiwiU0VUX01FU1NBR0VfU0VBUkNIIiwic3BhbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImxlbmd0aCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/SearchMessages.jsx\n"));

/***/ })

});