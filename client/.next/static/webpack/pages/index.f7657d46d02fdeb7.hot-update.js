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

/***/ "./src/components/Chat/ChatContainer.jsx":
/*!***********************************************!*\
  !*** ./src/components/Chat/ChatContainer.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ChatContainer() {\n    _s();\n    const [{ messages, currentChatUser, userInfo }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[80vh] w-full relative flex-grow overflow-auto custom-scrollbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-chat-background bf-fixed h-full w-full opacity-5 fixed left-0 top-0 z-0\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-10 my-6 relative bottom-0 z-40 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-end w-full gap-1 overflow-auto\",\n                        children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex \".concat(message.senderId === currentChatUser.id ? \"justify-start\" : \"justify-end\"),\n                                children: message.type === \"text\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white px-2 py-[5px] tex-sm rounded-md flex gap-2 items-end max-w-[45%] \".concat(message.senderId === currentChatUser.id ? \"bg-incoming-background\" : \"bg-outgoing-background\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"break-all\",\n                                            children: message.message\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex gap-1 items-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-bubble-meta text-[11px] pt-1 min-w-fit\",\n                                                children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_2__.calculateTime)(message.crea)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 19\n                                }, this)\n                            }, message.id, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatContainer.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatContainer, \"JAsx8bjv8DbCUMbD6nN3Itay9sA=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRDb250YWluZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwRDtBQUNKO0FBQzVCO0FBRTFCLFNBQVNHOztJQUNQLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFLENBQUMsR0FBR04sdUVBQWdCQTtJQUNsRSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pKLFNBQVNLLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNKO2dDQUVDQyxXQUFXLFFBR1IsT0FIZ0JFLFFBQVFFLFFBQVEsS0FBS1AsZ0JBQWdCUSxFQUFFLEdBQ3RELGtCQUNBOzBDQUdISCxRQUFRSSxJQUFJLEtBQUssd0JBQ2hCLDhEQUFDUDtvQ0FBSUMsV0FBVywrRUFHYixPQUg0RkUsUUFBUUUsUUFBUSxLQUFLUCxnQkFBZ0JRLEVBQUUsR0FDaEksMkJBQ0E7O3NEQUdKLDhEQUFDRTs0Q0FBS1AsV0FBVTtzREFBYUUsUUFBUUEsT0FBTzs7Ozs7O3NEQUM1Qyw4REFBQ0g7NENBQUlDLFdBQVU7c0RBQ2YsNEVBQUNPO2dEQUFLUCxXQUFVOzBEQUVaUCxtRUFBYUEsQ0FBQ1MsUUFBUU0sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBaEI3Qk4sUUFBUUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Qi9CO0dBdENTVjs7UUFDMkNILG1FQUFnQkE7OztLQUQzREc7QUF3Q1QsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9DaGF0Q29udGFpbmVyLmpzeD9hNjY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlVGltZSB9IGZyb20gXCJAL3V0aWxzL0NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ2hhdENvbnRhaW5lcigpIHtcbiAgY29uc3QgW3sgbWVzc2FnZXMsIGN1cnJlbnRDaGF0VXNlciwgdXNlckluZm8gfV0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLVs4MHZoXSB3LWZ1bGwgcmVsYXRpdmUgZmxleC1ncm93IG92ZXJmbG93LWF1dG8gY3VzdG9tLXNjcm9sbGJhclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jaGF0LWJhY2tncm91bmQgYmYtZml4ZWQgaC1mdWxsIHctZnVsbCBvcGFjaXR5LTUgZml4ZWQgbGVmdC0wIHRvcC0wIHotMFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0xMCBteS02IHJlbGF0aXZlIGJvdHRvbS0wIHotNDAgbGVmdC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgdy1mdWxsIGdhcC0xIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e21lc3NhZ2UuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke21lc3NhZ2Uuc2VuZGVySWQgPT09IGN1cnJlbnRDaGF0VXNlci5pZFxuICAgICAgICAgICAgICAgICAgPyBcImp1c3RpZnktc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgOiBcImp1c3RpZnktZW5kXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lc3NhZ2UudHlwZSA9PT0gXCJ0ZXh0XCIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIHB4LTIgcHktWzVweF0gdGV4LXNtIHJvdW5kZWQtbWQgZmxleCBnYXAtMiBpdGVtcy1lbmQgbWF4LXctWzQ1JV0gJHttZXNzYWdlLnNlbmRlcklkID09PSBjdXJyZW50Q2hhdFVzZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctaW5jb21pbmctYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImJnLW91dGdvaW5nLWJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWstYWxsXCI+e21lc3NhZ2UubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1idWJibGUtbWV0YSB0ZXh0LVsxMXB4XSBwdC0xIG1pbi13LWZpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWUobWVzc2FnZS5jcmVhKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PikpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGFpbmVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJjYWxjdWxhdGVUaW1lIiwiUmVhY3QiLCJDaGF0Q29udGFpbmVyIiwibWVzc2FnZXMiLCJjdXJyZW50Q2hhdFVzZXIiLCJ1c2VySW5mbyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsInNlbmRlcklkIiwiaWQiLCJ0eXBlIiwic3BhbiIsImNyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatContainer.jsx\n"));

/***/ })

});