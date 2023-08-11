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

/***/ "./src/components/Chatlist/ContactsList.jsx":
/*!**************************************************!*\
  !*** ./src/components/Chatlist/ContactsList.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ContactsList() {\n    _s();\n    const [allContacts, setAllContacts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [{}, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const getContacts = async ()=>{\n            try {\n                const { data: { users } } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_CONTACTS);\n                setAllContacts(users);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        getContacts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-24 flex items-end px-3 py-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-12 text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiArrowBack, {\n                            className: \"curson-pointer text-xl\",\n                            onClick: ()=>dispatch({\n                                    type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.SET_ALL_CONTACTS_PAGE\n                                })\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"New Chat\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex py-3 i\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiSearchAlt2, {\n                            className: \"text-panel-header-icon cursor-pointer text-l\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search for a new chat\",\n                            className: \"bg-transparent text-sm focus:outline-none text-white w-full\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chatlist/ContactsList.jsx\",\n        lineNumber: 24,\n        columnNumber: 10\n    }, this);\n}\n_s(ContactsList, \"mfNeAGXJHoNXg3w3tL4vZNC7mgI=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = ContactsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactsList);\nvar _c;\n$RefreshReg$(_c, \"ContactsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9Db250YWN0c0xpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNQO0FBQ0U7QUFDM0I7QUFDeUI7QUFDUTtBQUUzRCxTQUFTUzs7SUFFUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUMsRUFBRSxFQUFDTSxTQUFTLEdBQUdaLHVFQUFnQkE7SUFDdENLLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsRUFBRyxHQUFHLE1BQU1aLGlEQUFTLENBQUNELDhEQUFnQkE7Z0JBQzdEUyxlQUFlSTtZQUNqQixFQUFFLE9BQU9FLEtBQUs7Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGO1FBQ0FKO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNwQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2QsdURBQVdBOzRCQUNaYyxXQUFVOzRCQUNWQyxTQUFTLElBQUlWLFNBQVM7b0NBQUNXLE1BQUt0Qiw0REFBWUEsQ0FBQ3VCLHFCQUFxQjtnQ0FBQTs7Ozs7O3NDQUU5RCw4REFBQ0M7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlWLDhEQUFDTDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzBCQUVqQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDtrQ0FDQyw0RUFBQ1osd0RBQVlBOzRCQUFDYSxXQUFVOzs7Ozs7Ozs7OztrQ0FFMUIsOERBQUNEO2tDQUNDLDRFQUFDTTs0QkFDQ0gsTUFBSzs0QkFDTEksYUFBWTs0QkFBd0JOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hEO0dBMUNTWjs7UUFHZVQsbUVBQWdCQTs7O0tBSC9CUztBQTRDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9Db250YWN0c0xpc3QuanN4PzNlNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR0VUX0FMTF9DT05UQUNUUyB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJpQXJyb3dCYWNrLCBCaVNlYXJjaEFsdDIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcblxuZnVuY3Rpb24gQ29udGFjdHNMaXN0KCkge1xuXG4gIGNvbnN0IFthbGxDb250YWN0cywgc2V0QWxsQ29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbe30sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldENvbnRhY3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IHVzZXJzIH0sIH0gPSBhd2FpdCBheGlvcy5nZXQoR0VUX0FMTF9DT05UQUNUUyk7XG4gICAgICAgIHNldEFsbENvbnRhY3RzKHVzZXJzKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRDb250YWN0cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMjQgZmxleCBpdGVtcy1lbmQgcHgtMyBweS00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xMiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxCaUFycm93QmFja1xuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb24tcG9pbnRlciB0ZXh0LXhsXCJcbiAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHt0eXBlOnJlZHVjZXJDYXNlcy5TRVRfQUxMX0NPTlRBQ1RTX1BBR0V9KX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+TmV3IENoYXQ8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNlYXJjaC1pbnB1dC1jb250YWluZXItYmFja2dyb3VuZCBoLWZ1bGwgZmxleC1hdXRvIG92ZXJmbG93LWF1dG8gY3VzdG9tLXNjcm9sbGJhclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTMgaVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTUgcHgtMyBweS0xIHJvdW5kZWQtbGcgZmxleC1ncm93XCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QmlTZWFyY2hBbHQyIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC1sXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIG5ldyBjaGF0XCIgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSB3LWZ1bGxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHNMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJHRVRfQUxMX0NPTlRBQ1RTIiwiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmlBcnJvd0JhY2siLCJCaVNlYXJjaEFsdDIiLCJDb250YWN0c0xpc3QiLCJhbGxDb250YWN0cyIsInNldEFsbENvbnRhY3RzIiwiZGlzcGF0Y2giLCJnZXRDb250YWN0cyIsImRhdGEiLCJ1c2VycyIsImdldCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidHlwZSIsIlNFVF9BTExfQ09OVEFDVFNfUEFHRSIsInNwYW4iLCJpbnB1dCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ContactsList.jsx\n"));

/***/ })

});