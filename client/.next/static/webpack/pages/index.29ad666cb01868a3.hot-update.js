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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction IncomingCall() {\n    _s();\n    const [{ incomingVoiceCall, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider)();\n    const acceptCall = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.SET_VOICE_CALL,\n            voiceCall: {\n                ...incomingVoiceCall,\n                type: \"in-coming\"\n            }\n        });\n        socket.current.emit(\"accept-incoming-call\", {\n            id: incomingVoiceCall.id\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.SET_INCOMING_VOICE_CALL,\n            incomingVoiceCall: undefined\n        });\n    };\n    const rejectCall = ()=>{\n        socket.current.emit(\"reject-video-call\", {\n            from: incomingVoiceCall.id\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_3__.reducerCases.END_CALL\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-4 bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: incomingVoiceCall.profilePicture,\n                    alt: \"avatar\",\n                    width: 70,\n                    height: 70,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: incomingVoiceCall.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs\",\n                        children: \"Incoming Video Call\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: rejectCall,\n                                children: \"Reject\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: acceptCall,\n                                children: \"Accept\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingCall.jsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n_s(IncomingCall, \"zwjAppNc4wIhslSE5TH7gnshW9g=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider\n    ];\n});\n_c = IncomingCall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingCall);\nvar _c;\n$RefreshReg$(_c, \"IncomingCall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdDYWxsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNnQztBQUNQO0FBQ3BCO0FBRS9CLFNBQVNJOztJQUNQLE1BQU0sQ0FBQyxFQUFFQyxpQkFBaUIsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLFNBQVMsR0FBR04sdUVBQWdCQTtJQUVsRSxNQUFNTyxhQUFhO1FBQ2pCRCxTQUFTO1lBQ1BFLE1BQU1QLDREQUFZQSxDQUFDUSxjQUFjO1lBQ2pDQyxXQUFXO2dCQUFFLEdBQUdOLGlCQUFpQjtnQkFBRUksTUFBTTtZQUFZO1FBQ3ZEO1FBQ0FILE9BQU9NLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHdCQUF1QjtZQUFDQyxJQUFHVCxrQkFBa0JTLEVBQUU7UUFBQTtRQUNuRVAsU0FBUztZQUNQRSxNQUFLUCw0REFBWUEsQ0FBQ2EsdUJBQXVCO1lBQ3pDVixtQkFBa0JXO1FBRXBCO0lBQ0Y7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCWCxPQUFPTSxPQUFPLENBQUNDLElBQUksQ0FBQyxxQkFBb0I7WUFBQ0ssTUFBTWIsa0JBQWtCUyxFQUFFO1FBQUE7UUFDbkVQLFNBQVM7WUFBQ0UsTUFBTVAsNERBQVlBLENBQUNpQixRQUFRO1FBQUE7SUFDdkM7SUFFQSxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ3BCLDhEQUFDRDswQkFDQyw0RUFBQ2pCLG1EQUFLQTtvQkFDSm1CLEtBQUtqQixrQkFBa0JrQixjQUFjO29CQUFFQyxLQUFJO29CQUFTQyxPQUFPO29CQUFJQyxRQUFRO29CQUFJTCxXQUFVOzs7Ozs7Ozs7OzswQkFJekYsOERBQUNEOztrQ0FDQyw4REFBQ0E7a0NBQUtmLGtCQUFrQnNCLElBQUk7Ozs7OztrQ0FDNUIsOERBQUNQO3dCQUFJQyxXQUFVO2tDQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUFPUCxXQUFVO2dDQUNoQlEsU0FBU1o7MENBQVk7Ozs7OzswQ0FJdkIsOERBQUNXO2dDQUFPUCxXQUFVO2dDQUNoQlEsU0FBU3JCOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0I7R0E1Q1NKOztRQUMyQ0gsbUVBQWdCQTs7O0tBRDNERztBQThDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdDYWxsLmpzeD9iOWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiBJbmNvbWluZ0NhbGwoKSB7XG4gIGNvbnN0IFt7IGluY29taW5nVm9pY2VDYWxsLCBzb2NrZXQgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuXG4gIGNvbnN0IGFjY2VwdENhbGwgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9WT0lDRV9DQUxMLFxuICAgICAgdm9pY2VDYWxsOiB7IC4uLmluY29taW5nVm9pY2VDYWxsLCB0eXBlOiBcImluLWNvbWluZ1wiIH0sXG4gICAgfSk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImFjY2VwdC1pbmNvbWluZy1jYWxsXCIse2lkOmluY29taW5nVm9pY2VDYWxsLmlkfSlcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOnJlZHVjZXJDYXNlcy5TRVRfSU5DT01JTkdfVk9JQ0VfQ0FMTCxcbiAgICAgIGluY29taW5nVm9pY2VDYWxsOnVuZGVmaW5lZCxcblxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlamVjdENhbGwgPSAoKSA9PiB7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInJlamVjdC12aWRlby1jYWxsXCIse2Zyb206IGluY29taW5nVm9pY2VDYWxsLmlkfSk7XG4gICAgZGlzcGF0Y2goe3R5cGU6IHJlZHVjZXJDYXNlcy5FTkRfQ0FMTH0pO1xuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCB3LTgwIGZpeGVkIGJvdHRvbS04IG1iLTAgcmlnaHQtNiB6LTUwIHJvdW5kZWQtc20gZmxleCBnYXAtNSBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBwLTQgYmctY29udmVyc2F0aW9uLXBhbmVsLWJhY2tncm91bmQgdGV4dC13aGl0ZSBkcm9wLXNoYWRvdy0yeGwgYm9yZGVyLWljb24tZ3JlZW4gYm9yZGVyLTIgcHktMTQgXCI+XG4gICAgPGRpdj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2luY29taW5nVm9pY2VDYWxsLnByb2ZpbGVQaWN0dXJlfSBhbHQ9XCJhdmF0YXJcIiB3aWR0aD17NzB9IGhlaWdodD17NzB9IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+e2luY29taW5nVm9pY2VDYWxsLm5hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIj5JbmNvbWluZyBWaWRlbyBDYWxsPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgbXQtMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgcC0xIHB4LTMgdGV4dC1zbSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIG9uQ2xpY2s9e3JlamVjdENhbGx9PlxuICAgICAgICAgIFJlamVjdFxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBwLTEgcHgtMyB0ZXh0LXNtIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgb25DbGljaz17YWNjZXB0Q2FsbH0+XG4gICAgICAgICAgQWNjZXB0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5jb21pbmdDYWxsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkltYWdlIiwiSW5jb21pbmdDYWxsIiwiaW5jb21pbmdWb2ljZUNhbGwiLCJzb2NrZXQiLCJkaXNwYXRjaCIsImFjY2VwdENhbGwiLCJ0eXBlIiwiU0VUX1ZPSUNFX0NBTEwiLCJ2b2ljZUNhbGwiLCJjdXJyZW50IiwiZW1pdCIsImlkIiwiU0VUX0lOQ09NSU5HX1ZPSUNFX0NBTEwiLCJ1bmRlZmluZWQiLCJyZWplY3RDYWxsIiwiZnJvbSIsIkVORF9DQUxMIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwicHJvZmlsZVBpY3R1cmUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/IncomingCall.jsx\n"));

/***/ })

});