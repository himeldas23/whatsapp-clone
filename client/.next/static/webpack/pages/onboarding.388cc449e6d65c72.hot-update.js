"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Avatar(param) {\n    let { type, image, setImage } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    useSt;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center\",\n            children: [\n                type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-10 w-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this),\n                type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-14 w-14\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this),\n                type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative cursor-pointer z-0 \",\n                    onMouseEnter: ()=>setHover(true),\n                    onMouseLeave: ()=>setHover(false),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n            \".concat(hover ? \"visible\" : \"hidden\", \"\\n            \"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCamera, {\n                                    className: \"text-2xl\",\n                                    id: \"context-opener\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Change \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 28\n                                        }, this),\n                                        \"Profile \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 42\n                                        }, this),\n                                        \" Picture\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center h-60 w-60\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: image,\n                                alt: \"avatar\",\n                                className: \"rounded-full\",\n                                fill: true\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Avatar, \"bRXmKus9fOZFlca/6zXTYU+twGY=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ1Q7QUFDVztBQUUxQyxTQUFTSSxPQUFPLEtBQXlCO1FBQXpCLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBekI7O0lBQ2QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DUztJQUNBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOztnQkFDWlAsU0FBUyxzQkFDUiw4REFBQ007b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNWLG1EQUFLQTt3QkFBQ1csS0FBS1A7d0JBQU9RLEtBQUk7d0JBQVNGLFdBQVU7d0JBQWVHLElBQUk7Ozs7Ozs7Ozs7O2dCQUdoRVYsU0FBUyxzQkFDUiw4REFBQ007b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNWLG1EQUFLQTt3QkFBQ1csS0FBS1A7d0JBQU9RLEtBQUk7d0JBQVNGLFdBQVU7d0JBQWVHLElBQUk7Ozs7Ozs7Ozs7O2dCQUdoRVYsU0FBUyxzQkFDUiw4REFBQ007b0JBQUlDLFdBQVU7b0JBQ2JJLGNBQWMsSUFBTVAsU0FBUztvQkFDN0JRLGNBQWMsSUFBTVIsU0FBUzs7c0NBRTdCLDhEQUFDRTs0QkFBSUMsV0FBVyxnS0FDVyxPQUF6QkosUUFBTSxZQUFVLFVBQVM7OzhDQUV6Qiw4REFBQ0wsb0RBQVFBO29DQUFDUyxXQUFVO29DQUFXTSxJQUFHOzs7Ozs7OENBQ2xDLDhEQUFDQzs7d0NBQUs7c0RBQU8sOERBQUNDOzs7Ozt3Q0FBSztzREFBUSw4REFBQ0E7Ozs7O3dDQUFLOzs7Ozs7Ozs7Ozs7O3NDQUVuQyw4REFBQ1Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNWLG1EQUFLQTtnQ0FBQ1csS0FBS1A7Z0NBQU9RLEtBQUk7Z0NBQVNGLFdBQVU7Z0NBQWVHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zRTtHQW5DU1g7S0FBQUE7QUFxQ1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhci5qc3g/MDE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgRmFDYW1lcmEgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZnVuY3Rpb24gQXZhdGFyKHsgdHlwZSwgaW1hZ2UsIHNldEltYWdlIH0pIHtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZVN0XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAge3R5cGUgPT09IFwic21cIiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEwIHctMTBcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHt0eXBlID09PSBcImxnXCIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0XCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7dHlwZSA9PT0gXCJ4bFwiICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMCBcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgei0xMCBiZy1waG90b3BpY2tlci1vdmVybGF5LWJhY2tncm91bmQgaC02MCB3LTYwIGFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgdGV4dC1jZW50ZXIgZ2FwLTJcbiAgICAgICAgICAgICR7aG92ZXI/XCJ2aXNpYmxlXCI6XCJoaWRkZW5cIn1cbiAgICAgICAgICAgIGB9PlxuICAgICAgICAgICAgICA8RmFDYW1lcmEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIiBpZD1cImNvbnRleHQtb3BlbmVyXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+Q2hhbmdlIDxiciAvPlByb2ZpbGUgPGJyIC8+IFBpY3R1cmU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02MCB3LTYwXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkZhQ2FtZXJhIiwiQXZhdGFyIiwidHlwZSIsImltYWdlIiwic2V0SW1hZ2UiLCJob3ZlciIsInNldEhvdmVyIiwidXNlU3QiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaWQiLCJzcGFuIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});