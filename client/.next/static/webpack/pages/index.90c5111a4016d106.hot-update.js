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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction IncomingVideoCall() {\n    _s();\n    const [{ incomingVideoCall, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const acceptCall = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.SET_VIDEO_CALL,\n            videoCall: {\n                ...incomingVideoCall,\n                type: \"in-coming\"\n            }\n        });\n        socket.current.emit(\"accept-incoming-call\", {\n            id: incomingVideoCall.id\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.SET_INCOMING_VIDEO_CALL,\n            incomingVideoCall: undefined\n        });\n    };\n    const rejectCall = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-4 bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: incomingVideoCall.profilePicture,\n                    alt: \"avatar\",\n                    width: 70,\n                    height: 70,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: incomingVideoCall.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs\",\n                        children: \"Incoming Video Call\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: rejectCall,\n                                children: \"Reject\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 p-1 px-3 text-sm rounded-full\",\n                                onClick: acceptCall,\n                                children: \"Accept\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/IncomingVideoCall.jsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n_s(IncomingVideoCall, \"UValceec+e/CZdQlVZz8IFhJwQo=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = IncomingVideoCall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingVideoCall);\nvar _c;\n$RefreshReg$(_c, \"IncomingVideoCall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdWaWRlb0NhbGwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1A7QUFDcEI7QUFDTDtBQUUxQixTQUFTSTs7SUFFUCxNQUFNLENBQUMsRUFBRUMsaUJBQWlCLEVBQUVDLE1BQU0sRUFBRSxFQUFFQyxTQUFTLEdBQUdQLHVFQUFnQkE7SUFFbEUsTUFBTVEsYUFBYTtRQUNqQkQsU0FBUztZQUNQRSxNQUFNUiw0REFBWUEsQ0FBQ1MsY0FBYztZQUNqQ0MsV0FBVztnQkFBRSxHQUFHTixpQkFBaUI7Z0JBQUVJLE1BQU07WUFBWTtRQUN2RDtRQUNBSCxPQUFPTSxPQUFPLENBQUNDLElBQUksQ0FBQyx3QkFBdUI7WUFBQ0MsSUFBR1Qsa0JBQWtCUyxFQUFFO1FBQUE7UUFDbkVQLFNBQVM7WUFDUEUsTUFBS1IsNERBQVlBLENBQUNjLHVCQUF1QjtZQUN6Q1YsbUJBQWtCVztRQUVwQjtJQUNGO0lBRUEsTUFBTUMsYUFBYSxLQUVuQjtJQUVBLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDcEIsOERBQUNEOzBCQUNDLDRFQUFDaEIsbURBQUtBO29CQUNKa0IsS0FBS2Ysa0JBQWtCZ0IsY0FBYztvQkFBRUMsS0FBSTtvQkFBU0MsT0FBTztvQkFBSUMsUUFBUTtvQkFBSUwsV0FBVTs7Ozs7Ozs7Ozs7MEJBSXpGLDhEQUFDRDs7a0NBQ0MsOERBQUNBO2tDQUFLYixrQkFBa0JvQixJQUFJOzs7Ozs7a0NBQzVCLDhEQUFDUDt3QkFBSUMsV0FBVTtrQ0FBVTs7Ozs7O2tDQUN6Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FBT1AsV0FBVTtnQ0FDaEJRLFNBQVNWOzBDQUFZOzs7Ozs7MENBSXZCLDhEQUFDUztnQ0FBT1AsV0FBVTtnQ0FDaEJRLFNBQVNuQjswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9CO0dBNUNTSjs7UUFFMkNKLG1FQUFnQkE7OztLQUYzREk7QUE4Q1QsK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5jb21pbmdWaWRlb0NhbGwuanN4P2I3ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEluY29taW5nVmlkZW9DYWxsKCkge1xuXG4gIGNvbnN0IFt7IGluY29taW5nVmlkZW9DYWxsLCBzb2NrZXQgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuXG4gIGNvbnN0IGFjY2VwdENhbGwgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9WSURFT19DQUxMLFxuICAgICAgdmlkZW9DYWxsOiB7IC4uLmluY29taW5nVmlkZW9DYWxsLCB0eXBlOiBcImluLWNvbWluZ1wiIH0sXG4gICAgfSk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImFjY2VwdC1pbmNvbWluZy1jYWxsXCIse2lkOmluY29taW5nVmlkZW9DYWxsLmlkfSlcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOnJlZHVjZXJDYXNlcy5TRVRfSU5DT01JTkdfVklERU9fQ0FMTCxcbiAgICAgIGluY29taW5nVmlkZW9DYWxsOnVuZGVmaW5lZCxcblxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlamVjdENhbGwgPSAoKSA9PiB7XG4gICAgXG4gIH1cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJoLTI0IHctODAgZml4ZWQgYm90dG9tLTggbWItMCByaWdodC02IHotNTAgcm91bmRlZC1zbSBmbGV4IGdhcC01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHAtNCBiZy1jb252ZXJzYXRpb24tcGFuZWwtYmFja2dyb3VuZCB0ZXh0LXdoaXRlIGRyb3Atc2hhZG93LTJ4bCBib3JkZXItaWNvbi1ncmVlbiBib3JkZXItMiBweS0xNCBcIj5cbiAgICA8ZGl2PlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17aW5jb21pbmdWaWRlb0NhbGwucHJvZmlsZVBpY3R1cmV9IGFsdD1cImF2YXRhclwiIHdpZHRoPXs3MH0gaGVpZ2h0PXs3MH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgPGRpdj57aW5jb21pbmdWaWRlb0NhbGwubmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14c1wiPkluY29taW5nIFZpZGVvIENhbGw8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBtdC0yXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBwLTEgcHgtMyB0ZXh0LXNtIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgb25DbGljaz17cmVqZWN0Q2FsbH0+XG4gICAgICAgICAgUmVqZWN0XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHAtMSBweC0zIHRleHQtc20gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICBvbkNsaWNrPXthY2NlcHRDYWxsfT5cbiAgICAgICAgICBBY2NlcHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmNvbWluZ1ZpZGVvQ2FsbDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiSW1hZ2UiLCJSZWFjdCIsIkluY29taW5nVmlkZW9DYWxsIiwiaW5jb21pbmdWaWRlb0NhbGwiLCJzb2NrZXQiLCJkaXNwYXRjaCIsImFjY2VwdENhbGwiLCJ0eXBlIiwiU0VUX1ZJREVPX0NBTEwiLCJ2aWRlb0NhbGwiLCJjdXJyZW50IiwiZW1pdCIsImlkIiwiU0VUX0lOQ09NSU5HX1ZJREVPX0NBTEwiLCJ1bmRlZmluZWQiLCJyZWplY3RDYWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwicHJvZmlsZVBpY3R1cmUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/IncomingVideoCall.jsx\n"));

/***/ })

});