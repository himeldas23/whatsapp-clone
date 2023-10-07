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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction IncomingVideoCall() {\n    _s();\n    const [{ incomingVideoCall, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const acceptCall = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.SET_VIDEO_CALL,\n            videoCall: {\n                ...incomingVideoCall,\n                type: \"in-coming\"\n            }\n        });\n        socket.current.emit(\"accept-incoming-call\", {\n            id: incomingVideoCall.id\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.SET_INCOMING_VIDEO_CALL,\n            incomingVideoCall: undefined\n        });\n    };\n    const rejectCall = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-4 bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: incomingVideoCall.profilePicture,\n                    alt: \"avatar\",\n                    width: 70,\n                    height: 70,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: incomingVideoCall.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs\",\n                        children: \"Incoming Video Call\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: rejectCall,\n                                children: \"Reject\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: acceptCall,\n                                children: \"Accept\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n_s(IncomingVideoCall, \"UValceec+e/CZdQlVZz8IFhJwQo=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = IncomingVideoCall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingVideoCall);\nvar _c;\n$RefreshReg$(_c, \"IncomingVideoCall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdWaWRlb0NhbGwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1A7QUFDcEI7QUFDTDtBQUUxQixTQUFTSTs7SUFFUCxNQUFNLENBQUMsRUFBRUMsaUJBQWlCLEVBQUVDLE1BQU0sRUFBRSxFQUFFQyxTQUFTLEdBQUdQLHVFQUFnQkE7SUFFbEUsTUFBTVEsYUFBYTtRQUNqQkQsU0FBUztZQUNQRSxNQUFNUiw0REFBWUEsQ0FBQ1MsY0FBYztZQUNqQ0MsV0FBVztnQkFBRSxHQUFHTixpQkFBaUI7Z0JBQUVJLE1BQU07WUFBWTtRQUN2RDtRQUNBSCxPQUFPTSxPQUFPLENBQUNDLElBQUksQ0FBQyx3QkFBdUI7WUFBQ0MsSUFBR1Qsa0JBQWtCUyxFQUFFO1FBQUE7UUFDbkVQLFNBQVM7WUFDUEUsTUFBS1IsNERBQVlBLENBQUNjLHVCQUF1QjtZQUN6Q1YsbUJBQWtCVztRQUVwQjtJQUNGO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlYsU0FBUztZQUFDRSxNQUFNUiw0REFBWUE7UUFBQTtJQUM5QjtJQUVBLHFCQUFPLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBQ3BCLDhEQUFDRDswQkFDQyw0RUFBQ2hCLG1EQUFLQTtvQkFDSmtCLEtBQUtmLGtCQUFrQmdCLGNBQWM7b0JBQUVDLEtBQUk7b0JBQVNDLE9BQU87b0JBQUlDLFFBQVE7b0JBQUlMLFdBQVU7Ozs7Ozs7Ozs7OzBCQUl6Riw4REFBQ0Q7O2tDQUNDLDhEQUFDQTtrQ0FBS2Isa0JBQWtCb0IsSUFBSTs7Ozs7O2tDQUM1Qiw4REFBQ1A7d0JBQUlDLFdBQVU7a0NBQVU7Ozs7OztrQ0FDekIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQU9QLFdBQVU7Z0NBQ2hCUSxTQUFTVjswQ0FBWTs7Ozs7OzBDQUl2Qiw4REFBQ1M7Z0NBQU9QLFdBQVU7Z0NBQ2hCUSxTQUFTbkI7MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQjtHQTVDU0o7O1FBRTJDSixtRUFBZ0JBOzs7S0FGM0RJO0FBOENULCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0luY29taW5nVmlkZW9DYWxsLmpzeD9iN2RiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBJbmNvbWluZ1ZpZGVvQ2FsbCgpIHtcblxuICBjb25zdCBbeyBpbmNvbWluZ1ZpZGVvQ2FsbCwgc29ja2V0IH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcblxuICBjb25zdCBhY2NlcHRDYWxsID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfVklERU9fQ0FMTCxcbiAgICAgIHZpZGVvQ2FsbDogeyAuLi5pbmNvbWluZ1ZpZGVvQ2FsbCwgdHlwZTogXCJpbi1jb21pbmdcIiB9LFxuICAgIH0pO1xuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJhY2NlcHQtaW5jb21pbmctY2FsbFwiLHtpZDppbmNvbWluZ1ZpZGVvQ2FsbC5pZH0pXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTpyZWR1Y2VyQ2FzZXMuU0VUX0lOQ09NSU5HX1ZJREVPX0NBTEwsXG4gICAgICBpbmNvbWluZ1ZpZGVvQ2FsbDp1bmRlZmluZWQsXG5cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZWplY3RDYWxsID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHt0eXBlOiByZWR1Y2VyQ2FzZXN9KVxuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCB3LTgwIGZpeGVkIGJvdHRvbS04IG1iLTAgcmlnaHQtNiB6LTUwIHJvdW5kZWQtc20gZmxleCBnYXAtNSBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBwLTQgYmctY29udmVyc2F0aW9uLXBhbmVsLWJhY2tncm91bmQgdGV4dC13aGl0ZSBkcm9wLXNoYWRvdy0yeGwgYm9yZGVyLWljb24tZ3JlZW4gYm9yZGVyLTIgcHktMTQgXCI+XG4gICAgPGRpdj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2luY29taW5nVmlkZW9DYWxsLnByb2ZpbGVQaWN0dXJlfSBhbHQ9XCJhdmF0YXJcIiB3aWR0aD17NzB9IGhlaWdodD17NzB9IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+e2luY29taW5nVmlkZW9DYWxsLm5hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIj5JbmNvbWluZyBWaWRlbyBDYWxsPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgbXQtMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgcC0xIHB4LTMgdGV4dC1zbSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIG9uQ2xpY2s9e3JlamVjdENhbGx9PlxuICAgICAgICAgIFJlamVjdFxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBwLTEgcHgtMyB0ZXh0LXNtIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgb25DbGljaz17YWNjZXB0Q2FsbH0+XG4gICAgICAgICAgQWNjZXB0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5jb21pbmdWaWRlb0NhbGw7XG4iXSwibmFtZXMiOlsidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkltYWdlIiwiUmVhY3QiLCJJbmNvbWluZ1ZpZGVvQ2FsbCIsImluY29taW5nVmlkZW9DYWxsIiwic29ja2V0IiwiZGlzcGF0Y2giLCJhY2NlcHRDYWxsIiwidHlwZSIsIlNFVF9WSURFT19DQUxMIiwidmlkZW9DYWxsIiwiY3VycmVudCIsImVtaXQiLCJpZCIsIlNFVF9JTkNPTUlOR19WSURFT19DQUxMIiwidW5kZWZpbmVkIiwicmVqZWN0Q2FsbCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInByb2ZpbGVQaWN0dXJlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/IncomingVideoCall.jsx\n"));

/***/ })

});