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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SearchMessages() {\n    _s();\n    const [{ currentChatUser, messages }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-conversation-border border-1 w-full bg-conversation-panel-background flex flex-col z-10 max-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-16 px-4 py-5 flex gap-10 items-center bg-panel-header-background text-primary-strong\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoClose, {\n                        className: \"cursor-pointer text-icon-lighter text-2xl\",\n                        onClick: ()=>dispatch({\n                                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.SET_MESSAGE_SEARCH\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Search Messages\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-auto custom-scrollbar h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center flex-col w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex px-5 items-center gap-3 h-14 w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiSearchAlt2, {\n                                                className: \"text-panel-header-icon cursor-pointer text-l\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                placeholder: \"Search Messages\",\n                                                className: \"bg-transparent text-sm focus:outline-none text-white w-full\",\n                                                value: searchTerm,\n                                                onChange: (e)=>setSearchTerm(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                                lineNumber: 26,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mt-10 text-secondary\",\n                                children: !searchTerm.length && \"Search for messages with \".concat(currentChatUser.name)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/SearchMessages.jsx\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n}\n_s(SearchMessages, \"LSUCMJAECaNJKgq/bmtQxz9XbE4=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = SearchMessages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchMessages);\nvar _c;\n$RefreshReg$(_c, \"SearchMessages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L1NlYXJjaE1lc3NhZ2VzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUNQO0FBQ1g7QUFDTTtBQUNKO0FBRTFDLFNBQVNNOztJQUNQLE1BQU0sQ0FBQyxFQUFDQyxlQUFlLEVBQUNDLFFBQVEsRUFBRSxFQUFFQyxTQUFTLEdBQUdULHVFQUFnQkE7SUFDaEUsTUFBTSxDQUFDVSxZQUFXQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTVDLHFCQUFPLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1Isb0RBQU9BO3dCQUFDUSxXQUFVO3dCQUNqQkMsU0FBUyxJQUFNTCxTQUFTO2dDQUFFTSxNQUFNZCw0REFBWUEsQ0FBQ2Usa0JBQWtCOzRCQUFDOzs7Ozs7a0NBRWxFLDhEQUFDQztrQ0FBSzs7Ozs7Ozs7Ozs7OzBCQUVSLDhEQUFDTDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7c0RBQ0MsNEVBQUNSLHdEQUFZQTtnREFBQ1MsV0FBVTs7Ozs7Ozs7Ozs7c0RBRTFCLDhEQUFDRDtzREFDQyw0RUFBQ007Z0RBQ0NILE1BQUs7Z0RBQ0xJLGFBQVk7Z0RBQ1pOLFdBQVU7Z0RBQ1ZPLE9BQU9WO2dEQUNQVyxVQUFVLENBQUNDLElBQUlYLGNBQWNXLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLbkQsOERBQUNIO2dDQUFLSixXQUFVOzBDQUNmLENBQUNILFdBQVdjLE1BQU0sSUFBSSw0QkFBaUQsT0FBckJqQixnQkFBZ0JrQixJQUFJOzs7Ozs7Ozs7Ozs7a0NBR3pFLDhEQUFDYjt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3JCO0dBcENTUDs7UUFDeUNOLG1FQUFnQkE7OztLQUR6RE07QUFzQ1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9TZWFyY2hNZXNzYWdlcy5qc3g/OWNmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJpU2VhcmNoQWx0MiB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuZnVuY3Rpb24gU2VhcmNoTWVzc2FnZXMoKSB7XG4gIGNvbnN0IFt7Y3VycmVudENoYXRVc2VyLG1lc3NhZ2VzIH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgW3NlYXJjaFRlcm0sc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJib3JkZXItY29udmVyc2F0aW9uLWJvcmRlciBib3JkZXItMSB3LWZ1bGwgYmctY29udmVyc2F0aW9uLXBhbmVsLWJhY2tncm91bmQgZmxleCBmbGV4LWNvbCB6LTEwIG1heC1oLXNjcmVlblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNiBweC00IHB5LTUgZmxleCBnYXAtMTAgaXRlbXMtY2VudGVyIGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIHRleHQtcHJpbWFyeS1zdHJvbmdcIj5cbiAgICAgIDxJb0Nsb3NlIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtaWNvbi1saWdodGVyIHRleHQtMnhsXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VfU0VBUkNIIH0pfVxuICAgICAgLz5cbiAgICAgIDxzcGFuPlNlYXJjaCBNZXNzYWdlczwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gY3VzdG9tLXNjcm9sbGJhciBoLWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweC01IGl0ZW1zLWNlbnRlciBnYXAtMyBoLTE0IHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTUgcHgtMyBweS0xIHJvdW5kZWQtbGcgZmxleC1ncm93XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QmlTZWFyY2hBbHQyIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC1sXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIE1lc3NhZ2VzXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0xMCB0ZXh0LXNlY29uZGFyeVwiPlxuICAgICAgICB7IXNlYXJjaFRlcm0ubGVuZ3RoICYmIGBTZWFyY2ggZm9yIG1lc3NhZ2VzIHdpdGggJHtjdXJyZW50Q2hhdFVzZXIubmFtZX1gfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaE1lc3NhZ2VzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiQmlTZWFyY2hBbHQyIiwiSW9DbG9zZSIsIlNlYXJjaE1lc3NhZ2VzIiwiY3VycmVudENoYXRVc2VyIiwibWVzc2FnZXMiLCJkaXNwYXRjaCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInR5cGUiLCJTRVRfTUVTU0FHRV9TRUFSQ0giLCJzcGFuIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/SearchMessages.jsx\n"));

/***/ })

});