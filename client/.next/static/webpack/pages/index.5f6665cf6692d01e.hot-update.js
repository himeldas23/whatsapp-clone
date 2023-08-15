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

/***/ "./src/components/Chat/MessageBar.jsx":
/*!********************************************!*\
  !*** ./src/components/Chat/MessageBar.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ userInfo, currentChatUser, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showEmojiPicker, setShowemojiPicker] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const sendMessage = async ()=>{\n        try {\n            var _currentChatUser, _userInfo, _currentChatUser1, _userInfo1;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.ADD_MESSAGE_ROUTE, {\n                to: (_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id,\n                from: (_userInfo = userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.id,\n                message\n            });\n            socket.current.emit(\"send-msg\", {\n                to: (_currentChatUser1 = currentChatUser) === null || _currentChatUser1 === void 0 ? void 0 : _currentChatUser1.id,\n                from: (_userInfo1 = userInfo) === null || _userInfo1 === void 0 ? void 0 : _userInfo1.id,\n                message: data.message\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.ADD_MESSAGE,\n                newMessage: {\n                    ...data.message\n                },\n                fromSelf: true\n            });\n            setMessage(\"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsEmojiSmile, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_7__.ImAttachment, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type a message\",\n                        className: \"bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\",\n                        onChange: (e)=>setMessage(e.target.value),\n                        value: message\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdSend, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send Message\",\n                            onClick: sendMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"C/SIUWUMVOlf85DhktzhUtyIrxM=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1A7QUFDRztBQUM1QjtBQUNjO0FBQ0s7QUFDQztBQUNEO0FBQ0w7QUFDeEMsU0FBU1U7O0lBRVAsTUFBTSxDQUFDLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxNQUFNLEVBQUMsRUFBRUMsU0FBUyxHQUFHZCx1RUFBZ0JBO0lBQ3pFLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLGlCQUFpQkMsbUJBQW1CLEdBQUdiLCtDQUFRQSxDQUFDO0lBR3ZELE1BQU1jLGNBQWM7UUFDbEIsSUFBSTtnQkFFR1Asa0JBQ0VELFdBSUZDLG1CQUNFRDtZQVBQLE1BQU0sRUFBQ1MsSUFBSSxFQUFDLEdBQUcsTUFBTWpCLGtEQUFVLENBQUNELCtEQUFpQkEsRUFBQztnQkFDaERvQixFQUFFLEdBQUNWLG1CQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFpQlcsRUFBRTtnQkFDdEJDLElBQUksR0FBQ2IsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVWSxFQUFFO2dCQUNqQlI7WUFDRjtZQUNBRixPQUFPWSxPQUFPLENBQUNDLElBQUksQ0FBQyxZQUFXO2dCQUM3QkosRUFBRSxHQUFDVixvQkFBQUEsNkJBQUFBLHdDQUFBQSxrQkFBaUJXLEVBQUU7Z0JBQ3RCQyxJQUFJLEdBQUNiLGFBQUFBLHNCQUFBQSxpQ0FBQUEsV0FBVVksRUFBRTtnQkFDakJSLFNBQVFLLEtBQUtMLE9BQU87WUFDdEI7WUFDQUQsU0FBUztnQkFDUGEsTUFBSzFCLDREQUFZQSxDQUFDMkIsV0FBVztnQkFDN0JDLFlBQVc7b0JBQ1QsR0FBR1QsS0FBS0wsT0FBTztnQkFDakI7Z0JBQ0FlLFVBQVU7WUFDWjtZQUNBZCxXQUFXO1FBQ2IsRUFBRSxPQUFNZSxLQUFJO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEscUJBQU8sOERBQUNHO1FBQUlDLFdBQVU7a0JBQ3BCOzs4QkFDRSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDN0Isd0RBQVlBOzRCQUNYNkIsV0FBVTs0QkFDVkMsT0FBTTs7Ozs7O3NDQUVSLDhEQUFDNUIsd0RBQVlBOzRCQUFDMkIsV0FBVTs0QkFDdEJDLE9BQU07Ozs7Ozs7Ozs7Ozs4QkFHViw4REFBQ0Y7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFNVixNQUFLO3dCQUNWVyxhQUFZO3dCQUFpQkgsV0FBVTt3QkFDdkNJLFVBQVUsQ0FBQ0MsSUFBTXhCLFdBQVd3QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQzFDQSxPQUFPM0I7Ozs7Ozs7Ozs7OzhCQUdYLDhEQUFDbUI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNRO2tDQUNDLDRFQUFDbEMsa0RBQU1BOzRCQUNMMEIsV0FBVTs0QkFDVkMsT0FBTTs0QkFDTlEsU0FBU3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdyQjtHQWxFU1Q7O1FBRWtEVixtRUFBZ0JBOzs7S0FGbEVVO0FBb0VULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXQvTWVzc2FnZUJhci5qc3g/MTRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBRERfTUVTU0FHRV9ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCc0Vtb2ppU21pbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHsgRmFNaWNyb3Bob25lIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBJbUF0dGFjaG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW1cIlxuaW1wb3J0IHsgTWRTZW5kIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5mdW5jdGlvbiBNZXNzYWdlQmFyKCkge1xuXG4gIGNvbnN0IFt7IHVzZXJJbmZvLCBjdXJyZW50Q2hhdFVzZXIsIHNvY2tldH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaG93RW1vamlQaWNrZXIsIHNldFNob3dlbW9qaVBpY2tlcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KEFERF9NRVNTQUdFX1JPVVRFLHtcbiAgICAgICAgdG86Y3VycmVudENoYXRVc2VyPy5pZCxcbiAgICAgICAgZnJvbTp1c2VySW5mbz8uaWQsIFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgfSk7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZC1tc2dcIix7XG4gICAgICAgIHRvOmN1cnJlbnRDaGF0VXNlcj8uaWQsXG4gICAgICAgIGZyb206dXNlckluZm8/LmlkLCBcbiAgICAgICAgbWVzc2FnZTpkYXRhLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTpyZWR1Y2VyQ2FzZXMuQUREX01FU1NBR0UsXG4gICAgICAgIG5ld01lc3NhZ2U6e1xuICAgICAgICAgIC4uLmRhdGEubWVzc2FnZVxuICAgICAgICB9LFxuICAgICAgICBmcm9tU2VsZjogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpXG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCBoLTIwIHB4LTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgcmVsYXRpdmVcIj5cbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG4gICAgICAgIDxCc0Vtb2ppU21pbGVcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxuICAgICAgICAgIHRpdGxlPVwiRW1vamlcIlxuICAgICAgICAvPlxuICAgICAgICA8SW1BdHRhY2htZW50IGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgdGl0bGU9XCJBdHRhY2ggRmlsZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2VcIiBjbGFzc05hbWU9XCJiZy1pbnB1dC1iYWNrZ3JvdW5kIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIHRleHQtd2hpdGUgaC0xMCByb3VuZGVkLWxnIHB4LTUgcHktNCB3LWZ1bGxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIDxNZFNlbmRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgICB0aXRsZT1cIlNlbmQgTWVzc2FnZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKjxGYU1pY3JvcGhvbmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgICB0aXRsZT1cIlJlY29yZFwiXG4gICAgICAgICAgLz4qL31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cblxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkFERF9NRVNTQUdFX1JPVVRFIiwiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiQnNFbW9qaVNtaWxlIiwiRmFNaWNyb3Bob25lIiwiSW1BdHRhY2htZW50IiwiTWRTZW5kIiwiTWVzc2FnZUJhciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwic29ja2V0IiwiZGlzcGF0Y2giLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNob3dFbW9qaVBpY2tlciIsInNldFNob3dlbW9qaVBpY2tlciIsInNlbmRNZXNzYWdlIiwiZGF0YSIsInBvc3QiLCJ0byIsImlkIiwiZnJvbSIsImN1cnJlbnQiLCJlbWl0IiwidHlwZSIsIkFERF9NRVNTQUdFIiwibmV3TWVzc2FnZSIsImZyb21TZWxmIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});