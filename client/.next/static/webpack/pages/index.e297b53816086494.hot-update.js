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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction IncomingCall() {\n    _s();\n    const [{ incomingVoiceCall, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider)();\n    const acceptCall = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.SET_,\n            videoCall: {\n                ...incomingVoiceCall,\n                type: \"in-coming\"\n            }\n        });\n        socket.current.emit(\"accept-incoming-call\", {\n            id: incomingVoiceCall.id\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.SET_INCOMING_VIDEO_CALL,\n            incomingVoiceCall: undefined\n        });\n    };\n    const rejectCall = ()=>{\n        socket.current.emit(\"reject-video-call\", {\n            from: incomingVoiceCall.id\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.END_CALL\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-4 bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: incomingVoiceCall.profilePicture,\n                    alt: \"avatar\",\n                    width: 70,\n                    height: 70,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: incomingVoiceCall.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs\",\n                        children: \"Incoming Video Call\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: rejectCall,\n                                children: \"Reject\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: acceptCall,\n                                children: \"Accept\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n_s(IncomingCall, \"zwjAppNc4wIhslSE5TH7gnshW9g=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider\n    ];\n});\n_c = IncomingCall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingCall);\nvar _c;\n$RefreshReg$(_c, \"IncomingCall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdDYWxsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNnQztBQUNQO0FBQ3BCO0FBRS9CLFNBQVNJOztJQUNQLE1BQU0sQ0FBQyxFQUFFQyxpQkFBaUIsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLFNBQVMsR0FBR04sdUVBQWdCQTtJQUVsRSxNQUFNTyxhQUFhO1FBQ2pCRCxTQUFTO1lBQ1BFLE1BQU1QLDREQUFZQSxDQUFDUSxJQUFJO1lBQ3ZCQyxXQUFXO2dCQUFFLEdBQUdOLGlCQUFpQjtnQkFBRUksTUFBTTtZQUFZO1FBQ3ZEO1FBQ0FILE9BQU9NLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHdCQUF1QjtZQUFDQyxJQUFHVCxrQkFBa0JTLEVBQUU7UUFBQTtRQUNuRVAsU0FBUztZQUNQRSxNQUFLUCw0REFBWUEsQ0FBQ2EsdUJBQXVCO1lBQ3pDVixtQkFBa0JXO1FBRXBCO0lBQ0Y7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCWCxPQUFPTSxPQUFPLENBQUNDLElBQUksQ0FBQyxxQkFBb0I7WUFBQ0ssTUFBTWIsa0JBQWtCUyxFQUFFO1FBQUE7UUFDbkVQLFNBQVM7WUFBQ0UsTUFBTVAsNERBQVlBLENBQUNpQixRQUFRO1FBQUE7SUFDdkM7SUFFQSxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ3BCLDhEQUFDRDswQkFDQyw0RUFBQ2pCLG1EQUFLQTtvQkFDSm1CLEtBQUtqQixrQkFBa0JrQixjQUFjO29CQUFFQyxLQUFJO29CQUFTQyxPQUFPO29CQUFJQyxRQUFRO29CQUFJTCxXQUFVOzs7Ozs7Ozs7OzswQkFJekYsOERBQUNEOztrQ0FDQyw4REFBQ0E7a0NBQUtmLGtCQUFrQnNCLElBQUk7Ozs7OztrQ0FDNUIsOERBQUNQO3dCQUFJQyxXQUFVO2tDQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUFPUCxXQUFVO2dDQUNoQlEsU0FBU1o7MENBQVk7Ozs7OzswQ0FJdkIsOERBQUNXO2dDQUFPUCxXQUFVO2dDQUNoQlEsU0FBU3JCOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0I7R0E1Q1NKOztRQUMyQ0gsbUVBQWdCQTs7O0tBRDNERztBQThDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdDYWxsLmpzeD9iOWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiBJbmNvbWluZ0NhbGwoKSB7XG4gIGNvbnN0IFt7IGluY29taW5nVm9pY2VDYWxsLCBzb2NrZXQgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuXG4gIGNvbnN0IGFjY2VwdENhbGwgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF8sXG4gICAgICB2aWRlb0NhbGw6IHsgLi4uaW5jb21pbmdWb2ljZUNhbGwsIHR5cGU6IFwiaW4tY29taW5nXCIgfSxcbiAgICB9KTtcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiYWNjZXB0LWluY29taW5nLWNhbGxcIix7aWQ6aW5jb21pbmdWb2ljZUNhbGwuaWR9KVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6cmVkdWNlckNhc2VzLlNFVF9JTkNPTUlOR19WSURFT19DQUxMLFxuICAgICAgaW5jb21pbmdWb2ljZUNhbGw6dW5kZWZpbmVkLFxuXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVqZWN0Q2FsbCA9ICgpID0+IHtcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwicmVqZWN0LXZpZGVvLWNhbGxcIix7ZnJvbTogaW5jb21pbmdWb2ljZUNhbGwuaWR9KTtcbiAgICBkaXNwYXRjaCh7dHlwZTogcmVkdWNlckNhc2VzLkVORF9DQUxMfSk7XG4gIH1cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJoLTI0IHctODAgZml4ZWQgYm90dG9tLTggbWItMCByaWdodC02IHotNTAgcm91bmRlZC1zbSBmbGV4IGdhcC01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHAtNCBiZy1jb252ZXJzYXRpb24tcGFuZWwtYmFja2dyb3VuZCB0ZXh0LXdoaXRlIGRyb3Atc2hhZG93LTJ4bCBib3JkZXItaWNvbi1ncmVlbiBib3JkZXItMiBweS0xNCBcIj5cbiAgICA8ZGl2PlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17aW5jb21pbmdWb2ljZUNhbGwucHJvZmlsZVBpY3R1cmV9IGFsdD1cImF2YXRhclwiIHdpZHRoPXs3MH0gaGVpZ2h0PXs3MH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgPGRpdj57aW5jb21pbmdWb2ljZUNhbGwubmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14c1wiPkluY29taW5nIFZpZGVvIENhbGw8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBtdC0yXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBwLTEgcHgtMyB0ZXh0LXNtIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgb25DbGljaz17cmVqZWN0Q2FsbH0+XG4gICAgICAgICAgUmVqZWN0XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHAtMSBweC0zIHRleHQtc20gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICBvbkNsaWNrPXthY2NlcHRDYWxsfT5cbiAgICAgICAgICBBY2NlcHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmNvbWluZ0NhbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiSW1hZ2UiLCJJbmNvbWluZ0NhbGwiLCJpbmNvbWluZ1ZvaWNlQ2FsbCIsInNvY2tldCIsImRpc3BhdGNoIiwiYWNjZXB0Q2FsbCIsInR5cGUiLCJTRVRfIiwidmlkZW9DYWxsIiwiY3VycmVudCIsImVtaXQiLCJpZCIsIlNFVF9JTkNPTUlOR19WSURFT19DQUxMIiwidW5kZWZpbmVkIiwicmVqZWN0Q2FsbCIsImZyb20iLCJFTkRfQ0FMTCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInByb2ZpbGVQaWN0dXJlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/IncomingCall.jsx\n"));

/***/ })

});