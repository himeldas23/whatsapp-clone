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

/***/ "./src/components/Chatlist/ChatList.jsx":
/*!**********************************************!*\
  !*** ./src/components/Chatlist/ChatList.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChatListHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatListHeader */ \"./src/components/Chatlist/ChatListHeader.jsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/Chatlist/SearchBar.jsx\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ \"./src/components/Chatlist/List.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatList() {\n    _s();\n    const [{ contactsPage }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_5__.useStateProvider)();\n    const [pageType, setPageType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (contactsPage) {\n            setPageType(\"\");\n        }\n    }, [\n        contactsPage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-panel-header-background flex flex-col max-h-screen z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatListHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatList.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatList.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatList.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatList.jsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\n_s(ChatList, \"ixgucP2MfDvHXs94erZDMT8AzNA=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_5__.useStateProvider\n    ];\n});\n_c = ChatList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatList);\nvar _c;\n$RefreshReg$(_c, \"ChatList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TGlzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUNWO0FBQ1Y7QUFDZ0M7QUFFMUQsU0FBU087O0lBQ1AsTUFBTSxDQUFDLEVBQUNDLFlBQVksRUFBQyxDQUFDLEdBQUdGLHVFQUFnQkE7SUFDekMsTUFBTSxDQUFDRyxVQUFTQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXhDRCxnREFBU0EsQ0FBQztRQUNSLElBQUdPLGNBQWE7WUFDZEUsWUFBWTtRQUNkO0lBQ0YsR0FBRTtRQUFDRjtLQUFhO0lBQ2hCLHFCQUFPLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNwQjs7OEJBQ0UsOERBQUNULHVEQUFjQTs7Ozs7OEJBQ2YsOERBQUNDLGtEQUFTQTs7Ozs7OEJBQ1YsOERBQUNDLDZDQUFJQTs7Ozs7Ozs7Ozs7O0FBR1g7R0FoQlNFOztRQUNrQkQsbUVBQWdCQTs7O0tBRGxDQztBQWtCVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TGlzdC5qc3g/ZmU5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRMaXN0SGVhZGVyIGZyb20gXCIuL0NoYXRMaXN0SGVhZGVyXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhclwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIENoYXRMaXN0KCkge1xuICBjb25zdCBbe2NvbnRhY3RzUGFnZX1dID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbcGFnZVR5cGUsc2V0UGFnZVR5cGVdID0gdXNlU3RhdGUoXCJkZWZhdWx0XCIpO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKGNvbnRhY3RzUGFnZSl7XG4gICAgICBzZXRQYWdlVHlwZShcIlwiKVxuICAgIH1cbiAgfSxbY29udGFjdHNQYWdlXSlcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmctcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgZmxleCBmbGV4LWNvbCBtYXgtaC1zY3JlZW4gei0yMFwiPlxuICAgIDw+XG4gICAgICA8Q2hhdExpc3RIZWFkZXIgLz5cbiAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgIDxMaXN0IC8+XG4gICAgPC8+XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdExpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXRMaXN0SGVhZGVyIiwiU2VhcmNoQmFyIiwiTGlzdCIsInVzZVN0YXRlUHJvdmlkZXIiLCJDaGF0TGlzdCIsImNvbnRhY3RzUGFnZSIsInBhZ2VUeXBlIiwic2V0UGFnZVR5cGUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatList.jsx\n"));

/***/ })

});