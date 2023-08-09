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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Avatar(param) {\n    let { type, image, setImage } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuVisibleCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center\",\n            children: [\n                type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-10 w-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this),\n                type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-14 w-14\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this),\n                type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative cursor-pointer z-0 \",\n                    onMouseEnter: ()=>setHover(true),\n                    onMouseLeave: ()=>setHover(false),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n            \".concat(hover ? \"visible\" : \"hidden\", \"\\n            \"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCamera, {\n                                    className: \"text-2xl\",\n                                    id: \"context-opener\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Change \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 28\n                                        }, this),\n                                        \"Profile \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 42\n                                        }, this),\n                                        \" Picture\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center h-60 w-60\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: image,\n                                alt: \"avatar\",\n                                className: \"rounded-full\",\n                                fill: true\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Avatar, \"OGoyDPOJzth+h21xJ2pElImJ+tY=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ1Q7QUFDVztBQUUxQyxTQUFTSSxPQUFPLEtBQXlCO1FBQXpCLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBekI7O0lBQ2QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1Msc0JBQXNCQyx3QkFBd0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDakUsTUFBTSxDQUFDVyw4QkFBOEJDLHlCQUF5QixHQUFHWiwrQ0FBUUEsQ0FBQztRQUN4RWEsR0FBRztRQUNIQyxHQUFHO0lBRUw7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJBLEVBQUVDLGNBQWM7UUFDaEJMLHlCQUF5QjtZQUFFQyxHQUFHRyxFQUFFRSxLQUFLO1lBQUVKLEdBQUdFLEVBQUVHLEtBQUs7UUFBQztRQUNsRFQsd0JBQXdCO0lBQzFCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNVO1lBQUlDLFdBQVU7O2dCQUNaakIsU0FBUyxzQkFDUiw4REFBQ2dCO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDcEIsbURBQUtBO3dCQUFDcUIsS0FBS2pCO3dCQUFPa0IsS0FBSTt3QkFBU0YsV0FBVTt3QkFBZUcsSUFBSTs7Ozs7Ozs7Ozs7Z0JBR2hFcEIsU0FBUyxzQkFDUiw4REFBQ2dCO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDcEIsbURBQUtBO3dCQUFDcUIsS0FBS2pCO3dCQUFPa0IsS0FBSTt3QkFBU0YsV0FBVTt3QkFBZUcsSUFBSTs7Ozs7Ozs7Ozs7Z0JBR2hFcEIsU0FBUyxzQkFDUiw4REFBQ2dCO29CQUFJQyxXQUFVO29CQUNiSSxjQUFjLElBQU1qQixTQUFTO29CQUM3QmtCLGNBQWMsSUFBTWxCLFNBQVM7O3NDQUU3Qiw4REFBQ1k7NEJBQUlDLFdBQVcsZ0tBQ2UsT0FBN0JkLFFBQVEsWUFBWSxVQUFTOzs4Q0FFN0IsOERBQUNMLG9EQUFRQTtvQ0FBQ21CLFdBQVU7b0NBQVdNLElBQUc7Ozs7Ozs4Q0FDbEMsOERBQUNDOzt3Q0FBSztzREFBTyw4REFBQ0M7Ozs7O3dDQUFLO3NEQUFRLDhEQUFDQTs7Ozs7d0NBQUs7Ozs7Ozs7Ozs7Ozs7c0NBRW5DLDhEQUFDVDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3BCLG1EQUFLQTtnQ0FBQ3FCLEtBQUtqQjtnQ0FBT2tCLEtBQUk7Z0NBQVNGLFdBQVU7Z0NBQWVHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zRTtHQS9DU3JCO0tBQUFBO0FBaURULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXIuanN4PzAxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEZhQ2FtZXJhIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmZ1bmN0aW9uIEF2YXRhcih7IHR5cGUsIGltYWdlLCBzZXRJbWFnZSB9KSB7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb250ZXh0TWVudVZpc2libGUsIHNldElzQ29udGV4dE1lbnVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRleHRNZW51VmlzaWJsZUNvcmRpbmF0ZXMsIHNldENvbnRleHRNZW51Q29yZGluYXRlc10gPSB1c2VTdGF0ZSh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuXG4gIH0pO1xuXG4gIGNvbnN0IHNob3dDb250ZXh0TWVudSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldENvbnRleHRNZW51Q29yZGluYXRlcyh7IHg6IGUucGFnZVgsIHk6IGUucGFnZVkgfSk7XG4gICAgc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHt0eXBlID09PSBcInNtXCIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xMCB3LTEwXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7dHlwZSA9PT0gXCJsZ1wiICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNFwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3R5cGUgPT09IFwieGxcIiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciB6LTAgXCJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHotMTAgYmctcGhvdG9waWNrZXItb3ZlcmxheS1iYWNrZ3JvdW5kIGgtNjAgdy02MCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIHRleHQtY2VudGVyIGdhcC0yXG4gICAgICAgICAgICAke2hvdmVyID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxuICAgICAgICAgICAgYH0+XG4gICAgICAgICAgICAgIDxGYUNhbWVyYSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiIGlkPVwiY29udGV4dC1vcGVuZXJcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5DaGFuZ2UgPGJyIC8+UHJvZmlsZSA8YnIgLz4gUGljdHVyZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTYwIHctNjBcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiRmFDYW1lcmEiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImhvdmVyIiwic2V0SG92ZXIiLCJpc0NvbnRleHRNZW51VmlzaWJsZSIsInNldElzQ29udGV4dE1lbnVWaXNpYmxlIiwiY29udGV4dE1lbnVWaXNpYmxlQ29yZGluYXRlcyIsInNldENvbnRleHRNZW51Q29yZGluYXRlcyIsIngiLCJ5Iiwic2hvd0NvbnRleHRNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFnZVgiLCJwYWdlWSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImZpbGwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJpZCIsInNwYW4iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});