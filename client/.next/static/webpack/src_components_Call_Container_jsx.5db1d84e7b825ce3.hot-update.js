"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Call_Container_jsx",{

/***/ "./src/components/Call/Container.jsx":
/*!*******************************************!*\
  !*** ./src/components/Call/Container.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Container(param) {\n    let { data } = param;\n    _s();\n    const [{ socket, userInfo }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [callAccepted, setCallAccepted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-conversation-border border-1 w-full bg-conversation-panel-background flex flex-col h-[100vh] overflow-hidden items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-3 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-5xl\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-lg\",\n                        children: callAccepted && data.callType !== \"video\" ? \"On going Call\" : \"Calling\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            (!callAccepted || data.callType === \"audio\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: data.profilePicture,\n                    alt: \"avatar\",\n                    height: 300,\n                    width: 300,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 17,\n                columnNumber: 54\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-16 w-16 bg-red-600 flex items-center justify-center\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\n_s(Container, \"oB911uDahvARKT+ft1RX9Wa0/LE=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxsL0NvbnRhaW5lci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUMzQjtBQUNTO0FBRXhDLFNBQVNJLFVBQVUsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUNqQixNQUFNLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsRUFBRUMsU0FBUyxHQUFHUix1RUFBZ0JBO0lBQ3pELE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pELHFCQUFPLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUtELFdBQVU7a0NBQVlQLEtBQUtTLElBQUk7Ozs7OztrQ0FDckMsOERBQUNEO3dCQUFLRCxXQUFVO2tDQUVaSCxnQkFBZ0JKLEtBQUtVLFFBQVEsS0FBSyxVQUFVLGtCQUFrQjs7Ozs7Ozs7Ozs7O1lBSWxFLEVBQUNOLGdCQUFnQkosS0FBS1UsUUFBUSxLQUFLLE9BQU0sbUJBQU0sOERBQUNKO2dCQUFJQyxXQUFVOzBCQUM5RCw0RUFBQ1gsbURBQUtBO29CQUFDZSxLQUFLWCxLQUFLWSxjQUFjO29CQUFFQyxLQUFJO29CQUFTQyxRQUFRO29CQUFLQyxPQUFPO29CQUFLUixXQUFVOzs7Ozs7Ozs7OzswQkFFakYsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFFckI7R0FqQlNSOztRQUNrQ0osbUVBQWdCQTs7O0tBRGxESTtBQW1CVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYWxsL0NvbnRhaW5lci5qc3g/MDMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENvbnRhaW5lcih7IGRhdGEgfSkge1xuICBjb25zdCBbeyBzb2NrZXQsIHVzZXJJbmZvIH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgW2NhbGxBY2NlcHRlZCwgc2V0Q2FsbEFjY2VwdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWNvbnZlcnNhdGlvbi1ib3JkZXIgYm9yZGVyLTEgdy1mdWxsIGJnLWNvbnZlcnNhdGlvbi1wYW5lbC1iYWNrZ3JvdW5kIGZsZXggZmxleC1jb2wgaC1bMTAwdmhdIG92ZXJmbG93LWhpZGRlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNXhsXCI+e2RhdGEubmFtZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBjYWxsQWNjZXB0ZWQgJiYgZGF0YS5jYWxsVHlwZSAhPT0gXCJ2aWRlb1wiID8gXCJPbiBnb2luZyBDYWxsXCIgOiBcIkNhbGxpbmdcIlxuICAgICAgICB9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgeyghY2FsbEFjY2VwdGVkIHx8IGRhdGEuY2FsbFR5cGUgPT09IFwiYXVkaW9cIikgJiYgPGRpdiBjbGFzc05hbWU9XCJteS0yNFwiPlxuICAgICAgPEltYWdlIHNyYz17ZGF0YS5wcm9maWxlUGljdHVyZX0gYWx0PVwiYXZhdGFyXCIgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiLz5cbiAgICAgIDwvZGl2Pn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IGJnLXJlZC02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj48L2Rpdj5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGVQcm92aWRlciIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsImRhdGEiLCJzb2NrZXQiLCJ1c2VySW5mbyIsImRpc3BhdGNoIiwiY2FsbEFjY2VwdGVkIiwic2V0Q2FsbEFjY2VwdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm5hbWUiLCJjYWxsVHlwZSIsInNyYyIsInByb2ZpbGVQaWN0dXJlIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Call/Container.jsx\n"));

/***/ })

});