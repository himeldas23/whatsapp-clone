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

/***/ "./src/components/Chatlist/ChatLIstItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/Chatlist/ChatLIstItem.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChatLIstItem(param) {\n    let { data, isContactsPage = false } = param;\n    var _data, _data1, _data2;\n    _s();\n    const [{ userInfo, currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleContactClick = ()=>{\n        // if(currentChatUser?.id === data.id){\n        if (!isContactsPage) dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.CHANGE_CURRENT_CHAT_USER,\n            user: {\n                ...data\n            }\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.SET_ALL_CONTACTS_PAGE\n        });\n    // }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex cursor-pointer items-center hover:bg-background-default-hover\",\n        onClick: handleContactClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-w-fit px-5 pt-3 pb-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"lg\",\n                    image: (_data = data) === null || _data === void 0 ? void 0 : _data.profilePicture\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex flex-col justify-center mt-3 pr-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.name\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-b border-conversation-border pb-2 pt-1 pr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary line-clamp-1 text-sm\",\n                                children: ((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.about) || \"\\xa0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ChatLIstItem.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatLIstItem, \"hWWz54+Ds4ecnMS86SYyA8JkElw=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatLIstItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatLIstItem);\nvar _c;\n$RefreshReg$(_c, \"ChatLIstItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUNvQjtBQUNQO0FBRW5ELFNBQVNJLGFBQWEsS0FBZ0M7UUFBaEMsRUFBRUMsSUFBSSxFQUFFQyxpQkFBaUIsS0FBSyxFQUFFLEdBQWhDO1FBZVdELE9BS1NBLFFBS3lCQTs7SUF4QmpFLE1BQU0sQ0FBQyxFQUFFRSxRQUFRLEVBQUVDLGVBQWUsRUFBRSxFQUFFQyxTQUFTLEdBQUdQLHVFQUFnQkE7SUFDbEUsTUFBTVEscUJBQXFCO1FBQ3pCLHVDQUF1QztRQUN2QyxJQUFHLENBQUNKLGdCQUNGRyxTQUFTO1lBQUVFLE1BQU1SLDREQUFZQSxDQUFDUyx3QkFBd0I7WUFBRUMsTUFBTTtnQkFBRSxHQUFHUixJQUFJO1lBQUM7UUFBRTtRQUMxRUksU0FBUztZQUFFRSxNQUFNUiw0REFBWUEsQ0FBQ1cscUJBQXFCO1FBQUM7SUFFdEQsSUFBSTtJQUNOO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVk7UUFDZkMsU0FBU1A7OzBCQUVULDhEQUFDSztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2Ysc0RBQU1BO29CQUFDVSxNQUFLO29CQUFLTyxLQUFLLEdBQUViLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTWMsY0FBYzs7Ozs7Ozs7Ozs7MEJBRS9DLDhEQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDtzQ0FDQyw0RUFBQ0s7Z0NBQUtKLFdBQVU7MkNBQWNYLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTWdCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzVDLDhEQUFDTjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNJO2dDQUFLSixXQUFVOzBDQUF1Q1gsRUFBQUEsU0FBQUEsa0JBQUFBLDZCQUFBQSxPQUFNaUIsS0FBSyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxGO0dBL0JTbEI7O1FBQzJDRixtRUFBZ0JBOzs7S0FEM0RFO0FBaUNULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRsaXN0L0NoYXRMSXN0SXRlbS5qc3g/Y2Y5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIENoYXRMSXN0SXRlbSh7IGRhdGEsIGlzQ29udGFjdHNQYWdlID0gZmFsc2UgfSkge1xuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudENoYXRVc2VyIH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgaGFuZGxlQ29udGFjdENsaWNrID0gKCkgPT4ge1xuICAgIC8vIGlmKGN1cnJlbnRDaGF0VXNlcj8uaWQgPT09IGRhdGEuaWQpe1xuICAgIGlmKCFpc0NvbnRhY3RzUGFnZSlcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLkNIQU5HRV9DVVJSRU5UX0NIQVRfVVNFUiwgdXNlcjogeyAuLi5kYXRhIH0gfSlcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9BTExfQ09OVEFDVFNfUEFHRSB9KTtcblxuICAgIC8vIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWJhY2tncm91bmQtZGVmYXVsdC1ob3ZlcmB9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDb250YWN0Q2xpY2t9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1maXQgcHgtNSBwdC0zIHBiLTFcIj5cbiAgICAgICAgPEF2YXRhciB0eXBlPVwibGdcIiBpbWFnZT17ZGF0YT8ucHJvZmlsZVBpY3R1cmV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG10LTMgcHItMiB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2RhdGE/Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGJvcmRlci1jb252ZXJzYXRpb24tYm9yZGVyIHBiLTIgcHQtMSBwci0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IGxpbmUtY2xhbXAtMSB0ZXh0LXNtXCI+e2RhdGE/LmFib3V0IHx8IFwiXFx1MDBBMFwifTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdExJc3RJdGVtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXRMSXN0SXRlbSIsImRhdGEiLCJpc0NvbnRhY3RzUGFnZSIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJoYW5kbGVDb250YWN0Q2xpY2siLCJ0eXBlIiwiQ0hBTkdFX0NVUlJFTlRfQ0hBVF9VU0VSIiwidXNlciIsIlNFVF9BTExfQ09OVEFDVFNfUEFHRSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbWFnZSIsInByb2ZpbGVQaWN0dXJlIiwic3BhbiIsIm5hbWUiLCJhYm91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatLIstItem.jsx\n"));

/***/ })

});