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

/***/ "./src/components/Chatlist/ChatListHeader.jsx":
/*!****************************************************!*\
  !*** ./src/components/Chatlist/ChatListHeader.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatListHeader() {\n    var _userInfo;\n    _s();\n    const [{ userInfo }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleAllContactsPage = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.SET_ALL_CONTACTS_PAGE\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 px-4 py-3 flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cursor-pointer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"sm\",\n                    image: (_userInfo = userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.profileImage\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatListHeader.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatListHeader.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillChatLeftFill, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\",\n                        title: \"New Chat\",\n                        onClick: handleAllContactsPage\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatListHeader.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsThreeDotsVertical, {\n                                className: \"text-panel-header-icon cursor-pointer text-xl\",\n                                title: \"Menu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatListHeader.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatListHeader.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatListHeader.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatListHeader.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatListHeader, \"M61ngO0Sm85V/kW4A4RqzjYX8Q8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatListHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatListHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatListHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TGlzdEhlYWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUNvQjtBQUNXO0FBQ2xCO0FBRW5ELFNBQVNNO1FBU3dCQzs7SUFSL0IsTUFBTSxDQUFDLEVBQUNBLFFBQVEsRUFBQyxFQUFDQyxTQUFTLEdBQUdOLHVFQUFnQkE7SUFDOUMsTUFBTU8sd0JBQXdCO1FBQzVCRCxTQUFTO1lBQUNFLE1BQU1MLDREQUFZQSxDQUFDTSxxQkFBcUI7UUFBQTtJQUNwRDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNaLHNEQUFNQTtvQkFBQ1MsTUFBSztvQkFBS0ksS0FBSyxHQUFFUCxZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVRLFlBQVk7Ozs7Ozs7Ozs7OzBCQUVqRCw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDViw4REFBa0JBO3dCQUFDVSxXQUFVO3dCQUM5QkcsT0FBTTt3QkFDTkMsU0FBU1I7Ozs7OztrQ0FFVDs7MENBQ0EsOERBQUNMLCtEQUFtQkE7Z0NBQUNTLFdBQVU7Z0NBQy9CRyxPQUFNOzs7Ozs7MENBRU4sOERBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Q7R0F6QlNaOztRQUN1QkosbUVBQWdCQTs7O0tBRHZDSTtBQTJCVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TGlzdEhlYWRlci5qc3g/MjA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7QnNGaWxsQ2hhdExlZnRGaWxsLEJzVGhyZWVEb3RzVmVydGljYWx9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gQ2hhdExpc3RIZWFkZXIoKSB7XG4gIGNvbnN0IFt7dXNlckluZm99LGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgaGFuZGxlQWxsQ29udGFjdHNQYWdlID0gKCk9PntcbiAgICBkaXNwYXRjaCh7dHlwZTogcmVkdWNlckNhc2VzLlNFVF9BTExfQ09OVEFDVFNfUEFHRX0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTYgcHgtNCBweS0zIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICA8QXZhdGFyIHR5cGU9XCJzbVwiIGltYWdlPXt1c2VySW5mbz8ucHJvZmlsZUltYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgXCI+XG4gICAgICAgIDxCc0ZpbGxDaGF0TGVmdEZpbGwgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCJcbiAgICAgICAgdGl0bGU9XCJOZXcgQ2hhdFwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFsbENvbnRhY3RzUGFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPD5cbiAgICAgICAgPEJzVGhyZWVEb3RzVmVydGljYWwgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCJcbiAgICAgICAgdGl0bGU9XCJNZW51XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsInVzZVN0YXRlUHJvdmlkZXIiLCJCc0ZpbGxDaGF0TGVmdEZpbGwiLCJCc1RocmVlRG90c1ZlcnRpY2FsIiwicmVkdWNlckNhc2VzIiwiQ2hhdExpc3RIZWFkZXIiLCJ1c2VySW5mbyIsImRpc3BhdGNoIiwiaGFuZGxlQWxsQ29udGFjdHNQYWdlIiwidHlwZSIsIlNFVF9BTExfQ09OVEFDVFNfUEFHRSIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlIiwicHJvZmlsZUltYWdlIiwidGl0bGUiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatListHeader.jsx\n"));

/***/ })

});