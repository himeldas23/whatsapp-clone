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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emoji-picker-react */ \"./node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ userInfo, currentChatUser, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [showEmojiPicker, setShowEmojiPicker] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const emojiPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const handleEmojiModel = ()=>{\n        setShowEmojiPicker(!showEmojiPicker);\n    };\n    const handleEmojiClick = (emoji)=>{\n        setMessage((prevMessage)=>prevMessage += emoji.emoji);\n    };\n    const sendMessage = async ()=>{\n        try {\n            var _currentChatUser, _userInfo, _currentChatUser1, _userInfo1;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.ADD_MESSAGE_ROUTE, {\n                to: (_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id,\n                from: (_userInfo = userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.id,\n                message\n            });\n            socket.current.emit(\"send-msg\", {\n                to: (_currentChatUser1 = currentChatUser) === null || _currentChatUser1 === void 0 ? void 0 : _currentChatUser1.id,\n                from: (_userInfo1 = userInfo) === null || _userInfo1 === void 0 ? void 0 : _userInfo1.id,\n                message: data.message\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.ADD_MESSAGE,\n                newMessage: {\n                    ...data.message\n                },\n                fromSelf: true\n            });\n            setMessage(\"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsEmojiSmile, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\",\n                            id: \"emoji-open\",\n                            onClick: handleEmojiModel\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this),\n                        showEmojiPicker && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-24 left-16 z-40\",\n                            ref: emojiPickerRef,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                onEmojiClick: handleEmojiClick,\n                                theme: \"dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_8__.ImAttachment, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type a message\",\n                        className: \"bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\",\n                        onChange: (e)=>setMessage(e.target.value),\n                        value: message\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdSend, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send Message\",\n                            onClick: sendMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n        lineNumber: 50,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"xJreLnRWb3ZHcKqeoO3pmobihaY=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNQO0FBQ0c7QUFDNUI7QUFDbUI7QUFDRztBQUNIO0FBQ0M7QUFDRDtBQUNMO0FBQ3hDLFNBQVNZOztJQUVQLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRUMsTUFBTSxFQUFDLEVBQUVDLFNBQVMsR0FBR2hCLHVFQUFnQkE7SUFDekUsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLGlCQUFpQkMsbUJBQW1CLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU1jLGlCQUFpQmYsNkNBQU1BLENBQUM7SUFFOUIsTUFBTWdCLG1CQUFtQjtRQUN2QkYsbUJBQW1CLENBQUNEO0lBQ3RCO0lBQ0EsTUFBTUksbUJBQW1CLENBQUNDO1FBQ3hCTixXQUFXLENBQUNPLGNBQWVBLGVBQWFELE1BQU1BLEtBQUs7SUFDckQ7SUFFQSxNQUFNRSxjQUFjO1FBQ2xCLElBQUk7Z0JBRUdaLGtCQUNFRCxXQUlGQyxtQkFDRUQ7WUFQUCxNQUFNLEVBQUNjLElBQUksRUFBQyxHQUFHLE1BQU14QixrREFBVSxDQUFDRCwrREFBaUJBLEVBQUM7Z0JBQ2hEMkIsRUFBRSxHQUFDZixtQkFBQUEsNkJBQUFBLHVDQUFBQSxpQkFBaUJnQixFQUFFO2dCQUN0QkMsSUFBSSxHQUFDbEIsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVaUIsRUFBRTtnQkFDakJiO1lBQ0Y7WUFDQUYsT0FBT2lCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFlBQVc7Z0JBQzdCSixFQUFFLEdBQUNmLG9CQUFBQSw2QkFBQUEsd0NBQUFBLGtCQUFpQmdCLEVBQUU7Z0JBQ3RCQyxJQUFJLEdBQUNsQixhQUFBQSxzQkFBQUEsaUNBQUFBLFdBQVVpQixFQUFFO2dCQUNqQmIsU0FBUVUsS0FBS1YsT0FBTztZQUN0QjtZQUNBRCxTQUFTO2dCQUNQa0IsTUFBS2pDLDREQUFZQSxDQUFDa0MsV0FBVztnQkFDN0JDLFlBQVc7b0JBQ1QsR0FBR1QsS0FBS1YsT0FBTztnQkFDakI7Z0JBQ0FvQixVQUFVO1lBQ1o7WUFDQW5CLFdBQVc7UUFDYixFQUFFLE9BQU1vQixLQUFJO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEscUJBQU8sOERBQUNHO1FBQUlDLFdBQVU7a0JBQ3BCOzs4QkFDRSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDbEMsd0RBQVlBOzRCQUNYa0MsV0FBVTs0QkFDVkMsT0FBTTs0QkFDTmIsSUFBRzs0QkFDSGMsU0FBU3RCOzs7Ozs7d0JBRVZILGlDQUNELDhEQUFDc0I7NEJBQUlDLFdBQVU7NEJBQ2ZHLEtBQUt4QjtzQ0FFSCw0RUFBQ2pCLDBEQUFXQTtnQ0FBQzBDLGNBQWN2QjtnQ0FBa0J3QixPQUFNOzs7Ozs7Ozs7OztzQ0FHckQsOERBQUNyQyx3REFBWUE7NEJBQUNnQyxXQUFVOzRCQUN0QkMsT0FBTTs7Ozs7Ozs7Ozs7OzhCQUdWLDhEQUFDRjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ007d0JBQU1kLE1BQUs7d0JBQ1ZlLGFBQVk7d0JBQWlCUCxXQUFVO3dCQUN2Q1EsVUFBVSxDQUFDQyxJQUFNakMsV0FBV2lDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDMUNBLE9BQU9wQzs7Ozs7Ozs7Ozs7OEJBR1gsOERBQUN3QjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1k7a0NBQ0MsNEVBQUMzQyxrREFBTUE7NEJBQ0wrQixXQUFVOzRCQUNWQyxPQUFNOzRCQUNOQyxTQUFTbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3JCO0dBbEZTZDs7UUFFa0RaLG1FQUFnQkE7OztLQUZsRVk7QUFvRlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9NZXNzYWdlQmFyLmpzeD8xNGViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFERF9NRVNTQUdFX1JPVVRFIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgRW1vamlQaWNrZXIgZnJvbSBcImVtb2ppLXBpY2tlci1yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJzRW1vamlTbWlsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBGYU1pY3JvcGhvbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEltQXR0YWNobWVudCB9IGZyb20gXCJyZWFjdC1pY29ucy9pbVwiXG5pbXBvcnQgeyBNZFNlbmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmZ1bmN0aW9uIE1lc3NhZ2VCYXIoKSB7XG5cbiAgY29uc3QgW3sgdXNlckluZm8sIGN1cnJlbnRDaGF0VXNlciwgc29ja2V0fSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3dFbW9qaVBpY2tlciwgc2V0U2hvd0Vtb2ppUGlja2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZW1vamlQaWNrZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlRW1vamlNb2RlbCA9ICgpID0+IHtcbiAgICBzZXRTaG93RW1vamlQaWNrZXIoIXNob3dFbW9qaVBpY2tlcik7XG4gIH1cbiAgY29uc3QgaGFuZGxlRW1vamlDbGljayA9IChlbW9qaSkgPT4ge1xuICAgIHNldE1lc3NhZ2UoKHByZXZNZXNzYWdlKT0+KHByZXZNZXNzYWdlKz1lbW9qaS5lbW9qaSkpXG4gIH1cblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChBRERfTUVTU0FHRV9ST1VURSx7XG4gICAgICAgIHRvOmN1cnJlbnRDaGF0VXNlcj8uaWQsXG4gICAgICAgIGZyb206dXNlckluZm8/LmlkLCBcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgIH0pO1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmQtbXNnXCIse1xuICAgICAgICB0bzpjdXJyZW50Q2hhdFVzZXI/LmlkLFxuICAgICAgICBmcm9tOnVzZXJJbmZvPy5pZCwgXG4gICAgICAgIG1lc3NhZ2U6ZGF0YS5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6cmVkdWNlckNhc2VzLkFERF9NRVNTQUdFLFxuICAgICAgICBuZXdNZXNzYWdlOntcbiAgICAgICAgICAuLi5kYXRhLm1lc3NhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbVNlbGY6IHRydWUsXG4gICAgICB9KVxuICAgICAgc2V0TWVzc2FnZShcIlwiKVxuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgaC0yMCBweC00IGZsZXggaXRlbXMtY2VudGVyIGdhcC02IHJlbGF0aXZlXCI+XG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuICAgICAgICA8QnNFbW9qaVNtaWxlXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCJcbiAgICAgICAgICB0aXRsZT1cIkVtb2ppXCJcbiAgICAgICAgICBpZD1cImVtb2ppLW9wZW5cIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUVtb2ppTW9kZWx9XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93RW1vamlQaWNrZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yNCBsZWZ0LTE2IHotNDBcIlxuICAgICAgICByZWY9e2Vtb2ppUGlja2VyUmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPEVtb2ppUGlja2VyIG9uRW1vamlDbGljaz17aGFuZGxlRW1vamlDbGlja30gdGhlbWU9XCJkYXJrXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDxJbUF0dGFjaG1lbnQgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCJcbiAgICAgICAgICB0aXRsZT1cIkF0dGFjaCBGaWxlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBoLTEwIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZVwiIGNsYXNzTmFtZT1cImJnLWlucHV0LWJhY2tncm91bmQgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBoLTEwIHJvdW5kZWQtbGcgcHgtNSBweS00IHctZnVsbFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgPE1kU2VuZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCJcbiAgICAgICAgICAgIHRpdGxlPVwiU2VuZCBNZXNzYWdlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qPEZhTWljcm9waG9uZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCJcbiAgICAgICAgICAgIHRpdGxlPVwiUmVjb3JkXCJcbiAgICAgICAgICAvPiovfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuXG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiQUREX01FU1NBR0VfUk9VVEUiLCJheGlvcyIsIkVtb2ppUGlja2VyIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkJzRW1vamlTbWlsZSIsIkZhTWljcm9waG9uZSIsIkltQXR0YWNobWVudCIsIk1kU2VuZCIsIk1lc3NhZ2VCYXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsInNvY2tldCIsImRpc3BhdGNoIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzaG93RW1vamlQaWNrZXIiLCJzZXRTaG93RW1vamlQaWNrZXIiLCJlbW9qaVBpY2tlclJlZiIsImhhbmRsZUVtb2ppTW9kZWwiLCJoYW5kbGVFbW9qaUNsaWNrIiwiZW1vamkiLCJwcmV2TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZGF0YSIsInBvc3QiLCJ0byIsImlkIiwiZnJvbSIsImN1cnJlbnQiLCJlbWl0IiwidHlwZSIsIkFERF9NRVNTQUdFIiwibmV3TWVzc2FnZSIsImZyb21TZWxmIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwib25DbGljayIsInJlZiIsIm9uRW1vamlDbGljayIsInRoZW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});