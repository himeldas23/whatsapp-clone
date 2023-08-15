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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emoji-picker-react */ \"./node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ userInfo, currentChatUser, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [showEmojiPicker, setShowEmojiPicker] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const emojiPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleOutsideClick = (event)=>{\n            if (event.target.id !== \"emoji-open\") {\n                if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {\n                    setShowEmojiPicker(false);\n                }\n            }\n        };\n        document.addEventListener(\"click\");\n    }, []);\n    const handleEmojiModel = ()=>{\n        setShowEmojiPicker(!showEmojiPicker);\n    };\n    const handleEmojiClick = (emoji)=>{\n        setMessage((prevMessage)=>prevMessage += emoji.emoji);\n    };\n    const sendMessage = async ()=>{\n        try {\n            var _currentChatUser, _userInfo, _currentChatUser1, _userInfo1;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.ADD_MESSAGE_ROUTE, {\n                to: (_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id,\n                from: (_userInfo = userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.id,\n                message\n            });\n            socket.current.emit(\"send-msg\", {\n                to: (_currentChatUser1 = currentChatUser) === null || _currentChatUser1 === void 0 ? void 0 : _currentChatUser1.id,\n                from: (_userInfo1 = userInfo) === null || _userInfo1 === void 0 ? void 0 : _userInfo1.id,\n                message: data.message\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.ADD_MESSAGE,\n                newMessage: {\n                    ...data.message\n                },\n                fromSelf: true\n            });\n            setMessage(\"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsEmojiSmile, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\",\n                            id: \"emoji-open\",\n                            onClick: handleEmojiModel\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, this),\n                        showEmojiPicker && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-24 left-16 z-40\",\n                            ref: emojiPickerRef,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                onEmojiClick: handleEmojiClick,\n                                theme: \"dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_8__.ImAttachment, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type a message\",\n                        className: \"bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\",\n                        onChange: (e)=>setMessage(e.target.value),\n                        value: message\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdSend, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send Message\",\n                            onClick: sendMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n        lineNumber: 61,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"UUKf3iJb+fG+b0WGRq4Z2sZ18u8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNQO0FBQ0c7QUFDNUI7QUFDbUI7QUFDYztBQUNkO0FBQ0M7QUFDRDtBQUNMO0FBQ3hDLFNBQVNhOztJQUVQLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLFNBQVMsR0FBR2pCLHVFQUFnQkE7SUFDMUUsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLGlCQUFpQkMsbUJBQW1CLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU1jLGlCQUFpQmYsNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLHFCQUFxQixDQUFDQztZQUMxQixJQUFHQSxNQUFNQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxjQUFhO2dCQUNsQyxJQUFHSixlQUFlSyxPQUFPLElBQUksQ0FBQ0wsZUFBZUssT0FBTyxDQUFDQyxRQUFRLENBQUNKLE1BQU1DLE1BQU0sR0FBRTtvQkFDMUVKLG1CQUFtQjtnQkFDckI7WUFDRjtRQUNGO1FBQ0FRLFNBQVNDLGdCQUFnQixDQUFDO0lBQzVCLEdBQUUsRUFBRTtJQUVKLE1BQU1DLG1CQUFtQjtRQUN2QlYsbUJBQW1CLENBQUNEO0lBQ3RCO0lBQ0EsTUFBTVksbUJBQW1CLENBQUNDO1FBQ3hCZCxXQUFXLENBQUNlLGNBQWlCQSxlQUFlRCxNQUFNQSxLQUFLO0lBQ3pEO0lBRUEsTUFBTUUsY0FBYztRQUNsQixJQUFJO2dCQUVJcEIsa0JBQ0VELFdBSUZDLG1CQUNFRDtZQVBSLE1BQU0sRUFBRXNCLElBQUksRUFBRSxHQUFHLE1BQU1qQyxrREFBVSxDQUFDRCwrREFBaUJBLEVBQUU7Z0JBQ25Eb0MsRUFBRSxHQUFFdkIsbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCVyxFQUFFO2dCQUN2QmEsSUFBSSxHQUFFekIsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVWSxFQUFFO2dCQUNsQlI7WUFDRjtZQUNBRixPQUFPVyxPQUFPLENBQUNhLElBQUksQ0FBQyxZQUFZO2dCQUM5QkYsRUFBRSxHQUFFdkIsb0JBQUFBLDZCQUFBQSx3Q0FBQUEsa0JBQWlCVyxFQUFFO2dCQUN2QmEsSUFBSSxHQUFFekIsYUFBQUEsc0JBQUFBLGlDQUFBQSxXQUFVWSxFQUFFO2dCQUNsQlIsU0FBU2tCLEtBQUtsQixPQUFPO1lBQ3ZCO1lBQ0FELFNBQVM7Z0JBQ1B3QixNQUFNeEMsNERBQVlBLENBQUN5QyxXQUFXO2dCQUM5QkMsWUFBWTtvQkFDVixHQUFHUCxLQUFLbEIsT0FBTztnQkFDakI7Z0JBQ0EwQixVQUFVO1lBQ1o7WUFDQXpCLFdBQVc7UUFDYixFQUFFLE9BQU8wQixLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEscUJBQU8sOERBQUNHO1FBQUlDLFdBQVU7a0JBQ3BCOzs4QkFDRSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDeEMsd0RBQVlBOzRCQUNYd0MsV0FBVTs0QkFDVkMsT0FBTTs0QkFDTnhCLElBQUc7NEJBQ0h5QixTQUFTcEI7Ozs7Ozt3QkFFVlgsaUNBQ0MsOERBQUM0Qjs0QkFBSUMsV0FBVTs0QkFDYkcsS0FBSzlCO3NDQUVMLDRFQUFDbEIsMERBQVdBO2dDQUFDaUQsY0FBY3JCO2dDQUFrQnNCLE9BQU07Ozs7Ozs7Ozs7O3NDQUd2RCw4REFBQzNDLHdEQUFZQTs0QkFBQ3NDLFdBQVU7NEJBQ3RCQyxPQUFNOzs7Ozs7Ozs7Ozs7OEJBR1YsOERBQUNGO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDTTt3QkFBTWQsTUFBSzt3QkFDVmUsYUFBWTt3QkFBaUJQLFdBQVU7d0JBQ3ZDUSxVQUFVLENBQUNDLElBQU12QyxXQUFXdUMsRUFBRWpDLE1BQU0sQ0FBQ2tDLEtBQUs7d0JBQzFDQSxPQUFPekM7Ozs7Ozs7Ozs7OzhCQUdYLDhEQUFDOEI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNXO2tDQUNDLDRFQUFDaEQsa0RBQU1BOzRCQUNMcUMsV0FBVTs0QkFDVkMsT0FBTTs0QkFDTkMsU0FBU2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdyQjtHQTdGU3RCOztRQUVtRGIsbUVBQWdCQTs7O0tBRm5FYTtBQStGVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4PzE0ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQUREX01FU1NBR0VfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBFbW9qaVBpY2tlciBmcm9tIFwiZW1vamktcGlja2VyLXJlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCc0Vtb2ppU21pbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHsgRmFNaWNyb3Bob25lIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBJbUF0dGFjaG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW1cIlxuaW1wb3J0IHsgTWRTZW5kIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5mdW5jdGlvbiBNZXNzYWdlQmFyKCkge1xuXG4gIGNvbnN0IFt7IHVzZXJJbmZvLCBjdXJyZW50Q2hhdFVzZXIsIHNvY2tldCB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd0Vtb2ppUGlja2VyLCBzZXRTaG93RW1vamlQaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBlbW9qaVBpY2tlclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoZXZlbnQpID0+e1xuICAgICAgaWYoZXZlbnQudGFyZ2V0LmlkICE9PSBcImVtb2ppLW9wZW5cIil7XG4gICAgICAgIGlmKGVtb2ppUGlja2VyUmVmLmN1cnJlbnQgJiYgIWVtb2ppUGlja2VyUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSl7XG4gICAgICAgICAgc2V0U2hvd0Vtb2ppUGlja2VyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIilcbiAgfSxbXSlcblxuICBjb25zdCBoYW5kbGVFbW9qaU1vZGVsID0gKCkgPT4ge1xuICAgIHNldFNob3dFbW9qaVBpY2tlcighc2hvd0Vtb2ppUGlja2VyKTtcbiAgfVxuICBjb25zdCBoYW5kbGVFbW9qaUNsaWNrID0gKGVtb2ppKSA9PiB7XG4gICAgc2V0TWVzc2FnZSgocHJldk1lc3NhZ2UpID0+IChwcmV2TWVzc2FnZSArPSBlbW9qaS5lbW9qaSkpXG4gIH1cblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KEFERF9NRVNTQUdFX1JPVVRFLCB7XG4gICAgICAgIHRvOiBjdXJyZW50Q2hhdFVzZXI/LmlkLFxuICAgICAgICBmcm9tOiB1c2VySW5mbz8uaWQsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJzZW5kLW1zZ1wiLCB7XG4gICAgICAgIHRvOiBjdXJyZW50Q2hhdFVzZXI/LmlkLFxuICAgICAgICBmcm9tOiB1c2VySW5mbz8uaWQsXG4gICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiByZWR1Y2VyQ2FzZXMuQUREX01FU1NBR0UsXG4gICAgICAgIG5ld01lc3NhZ2U6IHtcbiAgICAgICAgICAuLi5kYXRhLm1lc3NhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbVNlbGY6IHRydWUsXG4gICAgICB9KVxuICAgICAgc2V0TWVzc2FnZShcIlwiKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCBoLTIwIHB4LTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgcmVsYXRpdmVcIj5cbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG4gICAgICAgIDxCc0Vtb2ppU21pbGVcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxuICAgICAgICAgIHRpdGxlPVwiRW1vamlcIlxuICAgICAgICAgIGlkPVwiZW1vamktb3BlblwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRW1vamlNb2RlbH1cbiAgICAgICAgLz5cbiAgICAgICAge3Nob3dFbW9qaVBpY2tlciAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMjQgbGVmdC0xNiB6LTQwXCJcbiAgICAgICAgICAgIHJlZj17ZW1vamlQaWNrZXJSZWZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVtb2ppUGlja2VyIG9uRW1vamlDbGljaz17aGFuZGxlRW1vamlDbGlja30gdGhlbWU9XCJkYXJrXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPEltQXR0YWNobWVudCBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxuICAgICAgICAgIHRpdGxlPVwiQXR0YWNoIEZpbGVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGgtMTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCIgY2xhc3NOYW1lPVwiYmctaW5wdXQtYmFja2dyb3VuZCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGgtMTAgcm91bmRlZC1sZyBweC01IHB5LTQgdy1mdWxsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICA8TWRTZW5kXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxuICAgICAgICAgICAgdGl0bGU9XCJTZW5kIE1lc3NhZ2VcIlxuICAgICAgICAgICAgb25DbGljaz17c2VuZE1lc3NhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Lyo8RmFNaWNyb3Bob25lXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxuICAgICAgICAgICAgdGl0bGU9XCJSZWNvcmRcIlxuICAgICAgICAgIC8+Ki99XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJBRERfTUVTU0FHRV9ST1VURSIsImF4aW9zIiwiRW1vamlQaWNrZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQnNFbW9qaVNtaWxlIiwiRmFNaWNyb3Bob25lIiwiSW1BdHRhY2htZW50IiwiTWRTZW5kIiwiTWVzc2FnZUJhciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwic29ja2V0IiwiZGlzcGF0Y2giLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNob3dFbW9qaVBpY2tlciIsInNldFNob3dFbW9qaVBpY2tlciIsImVtb2ppUGlja2VyUmVmIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUVtb2ppTW9kZWwiLCJoYW5kbGVFbW9qaUNsaWNrIiwiZW1vamkiLCJwcmV2TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZGF0YSIsInBvc3QiLCJ0byIsImZyb20iLCJlbWl0IiwidHlwZSIsIkFERF9NRVNTQUdFIiwibmV3TWVzc2FnZSIsImZyb21TZWxmIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwib25DbGljayIsInJlZiIsIm9uRW1vamlDbGljayIsInRoZW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});