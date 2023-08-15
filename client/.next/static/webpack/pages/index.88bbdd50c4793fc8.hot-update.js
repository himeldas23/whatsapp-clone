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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ userInfo, currentChatUser, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showEmojiPicker, setShowEmojiPicker] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleEmojiModel = ()=>{\n        showEmojiPicker;\n    };\n    const handleEmojiClick = ()=>{};\n    const sendMessage = async ()=>{\n        try {\n            var _currentChatUser, _userInfo, _currentChatUser1, _userInfo1;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.ADD_MESSAGE_ROUTE, {\n                to: (_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id,\n                from: (_userInfo = userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.id,\n                message\n            });\n            socket.current.emit(\"send-msg\", {\n                to: (_currentChatUser1 = currentChatUser) === null || _currentChatUser1 === void 0 ? void 0 : _currentChatUser1.id,\n                from: (_userInfo1 = userInfo) === null || _userInfo1 === void 0 ? void 0 : _userInfo1.id,\n                message: data.message\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.ADD_MESSAGE,\n                newMessage: {\n                    ...data.message\n                },\n                fromSelf: true\n            });\n            setMessage(\"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsEmojiSmile, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\",\n                            id: \"emoji-open\",\n                            onClick: handleEmojiModel\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_7__.ImAttachment, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type a message\",\n                        className: \"bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\",\n                        onChange: (e)=>setMessage(e.target.value),\n                        value: message\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdSend, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send Message\",\n                            onClick: sendMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n        lineNumber: 48,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"Nb6MLL2YOKs8MjLPR0f5VdmWmiA=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1A7QUFDRztBQUM1QjtBQUNjO0FBQ0s7QUFDQztBQUNEO0FBQ0w7QUFDeEMsU0FBU1U7O0lBRVAsTUFBTSxDQUFDLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxNQUFNLEVBQUMsRUFBRUMsU0FBUyxHQUFHZCx1RUFBZ0JBO0lBQ3pFLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLGlCQUFpQkMsbUJBQW1CLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1jLG1CQUFtQjtRQUN2QkY7SUFDRjtJQUNBLE1BQU1HLG1CQUFtQixLQUV6QjtJQUVBLE1BQU1DLGNBQWM7UUFDbEIsSUFBSTtnQkFFR1Qsa0JBQ0VELFdBSUZDLG1CQUNFRDtZQVBQLE1BQU0sRUFBQ1csSUFBSSxFQUFDLEdBQUcsTUFBTW5CLGtEQUFVLENBQUNELCtEQUFpQkEsRUFBQztnQkFDaERzQixFQUFFLEdBQUNaLG1CQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFpQmEsRUFBRTtnQkFDdEJDLElBQUksR0FBQ2YsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVYyxFQUFFO2dCQUNqQlY7WUFDRjtZQUNBRixPQUFPYyxPQUFPLENBQUNDLElBQUksQ0FBQyxZQUFXO2dCQUM3QkosRUFBRSxHQUFDWixvQkFBQUEsNkJBQUFBLHdDQUFBQSxrQkFBaUJhLEVBQUU7Z0JBQ3RCQyxJQUFJLEdBQUNmLGFBQUFBLHNCQUFBQSxpQ0FBQUEsV0FBVWMsRUFBRTtnQkFDakJWLFNBQVFPLEtBQUtQLE9BQU87WUFDdEI7WUFDQUQsU0FBUztnQkFDUGUsTUFBSzVCLDREQUFZQSxDQUFDNkIsV0FBVztnQkFDN0JDLFlBQVc7b0JBQ1QsR0FBR1QsS0FBS1AsT0FBTztnQkFDakI7Z0JBQ0FpQixVQUFVO1lBQ1o7WUFDQWhCLFdBQVc7UUFDYixFQUFFLE9BQU1pQixLQUFJO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEscUJBQU8sOERBQUNHO1FBQUlDLFdBQVU7a0JBQ3BCOzs4QkFDRSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDL0Isd0RBQVlBOzRCQUNYK0IsV0FBVTs0QkFDVkMsT0FBTTs0QkFDTmIsSUFBRzs0QkFDSGMsU0FBU3BCOzs7Ozs7c0NBRVgsOERBQUNYLHdEQUFZQTs0QkFBQzZCLFdBQVU7NEJBQ3RCQyxPQUFNOzs7Ozs7Ozs7Ozs7OEJBR1YsOERBQUNGO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRzt3QkFBTVgsTUFBSzt3QkFDVlksYUFBWTt3QkFBaUJKLFdBQVU7d0JBQ3ZDSyxVQUFVLENBQUNDLElBQU0zQixXQUFXMkIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUMxQ0EsT0FBTzlCOzs7Ozs7Ozs7Ozs4QkFHWCw4REFBQ3FCO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDUztrQ0FDQyw0RUFBQ3JDLGtEQUFNQTs0QkFDTDRCLFdBQVU7NEJBQ1ZDLE9BQU07NEJBQ05DLFNBQVNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXckI7R0ExRVNYOztRQUVrRFYsbUVBQWdCQTs7O0tBRmxFVTtBQTRFVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4PzE0ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQUREX01FU1NBR0VfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnNFbW9qaVNtaWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7IEZhTWljcm9waG9uZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgSW1BdHRhY2htZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcbmltcG9ydCB7IE1kU2VuZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuZnVuY3Rpb24gTWVzc2FnZUJhcigpIHtcblxuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudENoYXRVc2VyLCBzb2NrZXR9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd0Vtb2ppUGlja2VyLCBzZXRTaG93RW1vamlQaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUVtb2ppTW9kZWwgPSAoKSA9PiB7XG4gICAgc2hvd0Vtb2ppUGlja2VyXG4gIH1cbiAgY29uc3QgaGFuZGxlRW1vamlDbGljayA9ICgpID0+IHtcblxuICB9XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoQUREX01FU1NBR0VfUk9VVEUse1xuICAgICAgICB0bzpjdXJyZW50Q2hhdFVzZXI/LmlkLFxuICAgICAgICBmcm9tOnVzZXJJbmZvPy5pZCwgXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJzZW5kLW1zZ1wiLHtcbiAgICAgICAgdG86Y3VycmVudENoYXRVc2VyPy5pZCxcbiAgICAgICAgZnJvbTp1c2VySW5mbz8uaWQsIFxuICAgICAgICBtZXNzYWdlOmRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOnJlZHVjZXJDYXNlcy5BRERfTUVTU0FHRSxcbiAgICAgICAgbmV3TWVzc2FnZTp7XG4gICAgICAgICAgLi4uZGF0YS5tZXNzYWdlXG4gICAgICAgIH0sXG4gICAgICAgIGZyb21TZWxmOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIHNldE1lc3NhZ2UoXCJcIilcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIGgtMjAgcHgtNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNiByZWxhdGl2ZVwiPlxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cbiAgICAgICAgPEJzRW1vamlTbWlsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgdGl0bGU9XCJFbW9qaVwiXG4gICAgICAgICAgaWQ9XCJlbW9qaS1vcGVuXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFbW9qaU1vZGVsfVxuICAgICAgICAvPlxuICAgICAgICA8SW1BdHRhY2htZW50IGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgdGl0bGU9XCJBdHRhY2ggRmlsZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2VcIiBjbGFzc05hbWU9XCJiZy1pbnB1dC1iYWNrZ3JvdW5kIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIHRleHQtd2hpdGUgaC0xMCByb3VuZGVkLWxnIHB4LTUgcHktNCB3LWZ1bGxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIDxNZFNlbmRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgICB0aXRsZT1cIlNlbmQgTWVzc2FnZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKjxGYU1pY3JvcGhvbmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgICB0aXRsZT1cIlJlY29yZFwiXG4gICAgICAgICAgLz4qL31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cblxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkFERF9NRVNTQUdFX1JPVVRFIiwiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiQnNFbW9qaVNtaWxlIiwiRmFNaWNyb3Bob25lIiwiSW1BdHRhY2htZW50IiwiTWRTZW5kIiwiTWVzc2FnZUJhciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwic29ja2V0IiwiZGlzcGF0Y2giLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNob3dFbW9qaVBpY2tlciIsInNldFNob3dFbW9qaVBpY2tlciIsImhhbmRsZUVtb2ppTW9kZWwiLCJoYW5kbGVFbW9qaUNsaWNrIiwic2VuZE1lc3NhZ2UiLCJkYXRhIiwicG9zdCIsInRvIiwiaWQiLCJmcm9tIiwiY3VycmVudCIsImVtaXQiLCJ0eXBlIiwiQUREX01FU1NBR0UiLCJuZXdNZXNzYWdlIiwiZnJvbVNlbGYiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvbkNsaWNrIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});