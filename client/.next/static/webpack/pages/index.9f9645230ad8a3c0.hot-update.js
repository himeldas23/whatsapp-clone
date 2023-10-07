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

/***/ "./src/components/common/IncomingCall.jsx":
/*!************************************************!*\
  !*** ./src/components/common/IncomingCall.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction IncomingCall() {\n    _s();\n    const [{ incomingVoiceCall, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider)();\n    const acceptCall = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.SET_VOICE_CALL,\n            voiceCall: {\n                ...incomingVoiceCall,\n                type: \"in-coming\"\n            }\n        });\n        socket.current.emit(\"accept-incoming-call\", {\n            id: incomingVoiceCall.id\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.SE,\n            incomingVoiceCall: undefined\n        });\n    };\n    const rejectCall = ()=>{\n        socket.current.emit(\"reject-video-call\", {\n            from: incomingVoiceCall.id\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.END_CALL\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-4 bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: incomingVoiceCall.profilePicture,\n                    alt: \"avatar\",\n                    width: 70,\n                    height: 70,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: incomingVoiceCall.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs\",\n                        children: \"Incoming Video Call\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: rejectCall,\n                                children: \"Reject\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: acceptCall,\n                                children: \"Accept\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n_s(IncomingCall, \"zwjAppNc4wIhslSE5TH7gnshW9g=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider\n    ];\n});\n_c = IncomingCall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingCall);\nvar _c;\n$RefreshReg$(_c, \"IncomingCall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdDYWxsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNnQztBQUNQO0FBQ3BCO0FBRS9CLFNBQVNJOztJQUNQLE1BQU0sQ0FBQyxFQUFFQyxpQkFBaUIsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLFNBQVMsR0FBR04sdUVBQWdCQTtJQUVsRSxNQUFNTyxhQUFhO1FBQ2pCRCxTQUFTO1lBQ1BFLE1BQU1QLDREQUFZQSxDQUFDUSxjQUFjO1lBQ2pDQyxXQUFXO2dCQUFFLEdBQUdOLGlCQUFpQjtnQkFBRUksTUFBTTtZQUFZO1FBQ3ZEO1FBQ0FILE9BQU9NLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHdCQUF1QjtZQUFDQyxJQUFHVCxrQkFBa0JTLEVBQUU7UUFBQTtRQUNuRVAsU0FBUztZQUNQRSxNQUFLUCw0REFBWUEsQ0FBQ2EsRUFBRTtZQUNwQlYsbUJBQWtCVztRQUVwQjtJQUNGO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlgsT0FBT00sT0FBTyxDQUFDQyxJQUFJLENBQUMscUJBQW9CO1lBQUNLLE1BQU1iLGtCQUFrQlMsRUFBRTtRQUFBO1FBQ25FUCxTQUFTO1lBQUNFLE1BQU1QLDREQUFZQSxDQUFDaUIsUUFBUTtRQUFBO0lBQ3ZDO0lBRUEscUJBQU8sOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNwQiw4REFBQ0Q7MEJBQ0MsNEVBQUNqQixtREFBS0E7b0JBQ0ptQixLQUFLakIsa0JBQWtCa0IsY0FBYztvQkFBRUMsS0FBSTtvQkFBU0MsT0FBTztvQkFBSUMsUUFBUTtvQkFBSUwsV0FBVTs7Ozs7Ozs7Ozs7MEJBSXpGLDhEQUFDRDs7a0NBQ0MsOERBQUNBO2tDQUFLZixrQkFBa0JzQixJQUFJOzs7Ozs7a0NBQzVCLDhEQUFDUDt3QkFBSUMsV0FBVTtrQ0FBVTs7Ozs7O2tDQUN6Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FBT1AsV0FBVTtnQ0FDaEJRLFNBQVNaOzBDQUFZOzs7Ozs7MENBSXZCLDhEQUFDVztnQ0FBT1AsV0FBVTtnQ0FDaEJRLFNBQVNyQjswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9CO0dBNUNTSjs7UUFDMkNILG1FQUFnQkE7OztLQUQzREc7QUE4Q1QsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0luY29taW5nQ2FsbC5qc3g/YjljZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZnVuY3Rpb24gSW5jb21pbmdDYWxsKCkge1xuICBjb25zdCBbeyBpbmNvbWluZ1ZvaWNlQ2FsbCwgc29ja2V0IH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcblxuICBjb25zdCBhY2NlcHRDYWxsID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfVk9JQ0VfQ0FMTCxcbiAgICAgIHZvaWNlQ2FsbDogeyAuLi5pbmNvbWluZ1ZvaWNlQ2FsbCwgdHlwZTogXCJpbi1jb21pbmdcIiB9LFxuICAgIH0pO1xuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJhY2NlcHQtaW5jb21pbmctY2FsbFwiLHtpZDppbmNvbWluZ1ZvaWNlQ2FsbC5pZH0pXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTpyZWR1Y2VyQ2FzZXMuU0UsXG4gICAgICBpbmNvbWluZ1ZvaWNlQ2FsbDp1bmRlZmluZWQsXG5cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZWplY3RDYWxsID0gKCkgPT4ge1xuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJyZWplY3QtdmlkZW8tY2FsbFwiLHtmcm9tOiBpbmNvbWluZ1ZvaWNlQ2FsbC5pZH0pO1xuICAgIGRpc3BhdGNoKHt0eXBlOiByZWR1Y2VyQ2FzZXMuRU5EX0NBTEx9KTtcbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImgtMjQgdy04MCBmaXhlZCBib3R0b20tOCBtYi0wIHJpZ2h0LTYgei01MCByb3VuZGVkLXNtIGZsZXggZ2FwLTUgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcC00IGJnLWNvbnZlcnNhdGlvbi1wYW5lbC1iYWNrZ3JvdW5kIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctMnhsIGJvcmRlci1pY29uLWdyZWVuIGJvcmRlci0yIHB5LTE0IFwiPlxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtpbmNvbWluZ1ZvaWNlQ2FsbC5wcm9maWxlUGljdHVyZX0gYWx0PVwiYXZhdGFyXCIgd2lkdGg9ezcwfSBoZWlnaHQ9ezcwfSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXY+XG4gICAgICA8ZGl2PntpbmNvbWluZ1ZvaWNlQ2FsbC5uYW1lfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+SW5jb21pbmcgVmlkZW8gQ2FsbDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIG10LTJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHAtMSBweC0zIHRleHQtc20gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICBvbkNsaWNrPXtyZWplY3RDYWxsfT5cbiAgICAgICAgICBSZWplY3RcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgcC0xIHB4LTMgdGV4dC1zbSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIG9uQ2xpY2s9e2FjY2VwdENhbGx9PlxuICAgICAgICAgIEFjY2VwdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluY29taW5nQ2FsbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJJbWFnZSIsIkluY29taW5nQ2FsbCIsImluY29taW5nVm9pY2VDYWxsIiwic29ja2V0IiwiZGlzcGF0Y2giLCJhY2NlcHRDYWxsIiwidHlwZSIsIlNFVF9WT0lDRV9DQUxMIiwidm9pY2VDYWxsIiwiY3VycmVudCIsImVtaXQiLCJpZCIsIlNFIiwidW5kZWZpbmVkIiwicmVqZWN0Q2FsbCIsImZyb20iLCJFTkRfQ0FMTCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInByb2ZpbGVQaWN0dXJlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/IncomingCall.jsx\n"));

/***/ })

});