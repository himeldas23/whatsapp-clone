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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emoji-picker-react */ \"./node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ userInfo, currentChatUser, socket }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [showEmojiPicker, setShowEmojiPicker] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const emojiPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{}, []);\n    const handleEmojiModel = ()=>{\n        setShowEmojiPicker(!showEmojiPicker);\n    };\n    const handleEmojiClick = (emoji)=>{\n        setMessage((prevMessage)=>prevMessage += emoji.emoji);\n    };\n    const sendMessage = async ()=>{\n        try {\n            var _currentChatUser, _userInfo, _currentChatUser1, _userInfo1;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.ADD_MESSAGE_ROUTE, {\n                to: (_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id,\n                from: (_userInfo = userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.id,\n                message\n            });\n            socket.current.emit(\"send-msg\", {\n                to: (_currentChatUser1 = currentChatUser) === null || _currentChatUser1 === void 0 ? void 0 : _currentChatUser1.id,\n                from: (_userInfo1 = userInfo) === null || _userInfo1 === void 0 ? void 0 : _userInfo1.id,\n                message: data.message\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.ADD_MESSAGE,\n                newMessage: {\n                    ...data.message\n                },\n                fromSelf: true\n            });\n            setMessage(\"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsEmojiSmile, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\",\n                            id: \"emoji-open\",\n                            onClick: handleEmojiModel\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, this),\n                        showEmojiPicker && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-24 left-16 z-40\",\n                            ref: emojiPickerRef,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                onEmojiClick: handleEmojiClick,\n                                theme: \"dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_8__.ImAttachment, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type a message\",\n                        className: \"bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\",\n                        onChange: (e)=>setMessage(e.target.value),\n                        value: message\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdSend, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send Message\",\n                            onClick: sendMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n        lineNumber: 54,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"UUKf3iJb+fG+b0WGRq4Z2sZ18u8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ci5qc3g/MTRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBRERfTUVTU0FHRV9ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEVtb2ppUGlja2VyIGZyb20gXCJlbW9qaS1waWNrZXItcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJzRW1vamlTbWlsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBGYU1pY3JvcGhvbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEltQXR0YWNobWVudCB9IGZyb20gXCJyZWFjdC1pY29ucy9pbVwiXG5pbXBvcnQgeyBNZFNlbmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmZ1bmN0aW9uIE1lc3NhZ2VCYXIoKSB7XG5cbiAgY29uc3QgW3sgdXNlckluZm8sIGN1cnJlbnRDaGF0VXNlciwgc29ja2V0IH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaG93RW1vamlQaWNrZXIsIHNldFNob3dFbW9qaVBpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGVtb2ppUGlja2VyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFxuICB9LFtdKVxuXG4gIGNvbnN0IGhhbmRsZUVtb2ppTW9kZWwgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0Vtb2ppUGlja2VyKCFzaG93RW1vamlQaWNrZXIpO1xuICB9XG4gIGNvbnN0IGhhbmRsZUVtb2ppQ2xpY2sgPSAoZW1vamkpID0+IHtcbiAgICBzZXRNZXNzYWdlKChwcmV2TWVzc2FnZSkgPT4gKHByZXZNZXNzYWdlICs9IGVtb2ppLmVtb2ppKSlcbiAgfVxuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoQUREX01FU1NBR0VfUk9VVEUsIHtcbiAgICAgICAgdG86IGN1cnJlbnRDaGF0VXNlcj8uaWQsXG4gICAgICAgIGZyb206IHVzZXJJbmZvPy5pZCxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgIH0pO1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmQtbXNnXCIsIHtcbiAgICAgICAgdG86IGN1cnJlbnRDaGF0VXNlcj8uaWQsXG4gICAgICAgIGZyb206IHVzZXJJbmZvPy5pZCxcbiAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5BRERfTUVTU0FHRSxcbiAgICAgICAgbmV3TWVzc2FnZToge1xuICAgICAgICAgIC4uLmRhdGEubWVzc2FnZVxuICAgICAgICB9LFxuICAgICAgICBmcm9tU2VsZjogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIGgtMjAgcHgtNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNiByZWxhdGl2ZVwiPlxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cbiAgICAgICAgPEJzRW1vamlTbWlsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgdGl0bGU9XCJFbW9qaVwiXG4gICAgICAgICAgaWQ9XCJlbW9qaS1vcGVuXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFbW9qaU1vZGVsfVxuICAgICAgICAvPlxuICAgICAgICB7c2hvd0Vtb2ppUGlja2VyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yNCBsZWZ0LTE2IHotNDBcIlxuICAgICAgICAgICAgcmVmPXtlbW9qaVBpY2tlclJlZn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RW1vamlQaWNrZXIgb25FbW9qaUNsaWNrPXtoYW5kbGVFbW9qaUNsaWNrfSB0aGVtZT1cImRhcmtcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8SW1BdHRhY2htZW50IGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgdGl0bGU9XCJBdHRhY2ggRmlsZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2VcIiBjbGFzc05hbWU9XCJiZy1pbnB1dC1iYWNrZ3JvdW5kIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIHRleHQtd2hpdGUgaC0xMCByb3VuZGVkLWxnIHB4LTUgcHktNCB3LWZ1bGxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIDxNZFNlbmRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgICB0aXRsZT1cIlNlbmQgTWVzc2FnZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKjxGYU1pY3JvcGhvbmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiXG4gICAgICAgICAgICB0aXRsZT1cIlJlY29yZFwiXG4gICAgICAgICAgLz4qL31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cblxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkFERF9NRVNTQUdFX1JPVVRFIiwiYXhpb3MiLCJFbW9qaVBpY2tlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJCc0Vtb2ppU21pbGUiLCJGYU1pY3JvcGhvbmUiLCJJbUF0dGFjaG1lbnQiLCJNZFNlbmQiLCJNZXNzYWdlQmFyIiwidXNlckluZm8iLCJjdXJyZW50Q2hhdFVzZXIiLCJzb2NrZXQiLCJkaXNwYXRjaCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2hvd0Vtb2ppUGlja2VyIiwic2V0U2hvd0Vtb2ppUGlja2VyIiwiZW1vamlQaWNrZXJSZWYiLCJoYW5kbGVFbW9qaU1vZGVsIiwiaGFuZGxlRW1vamlDbGljayIsImVtb2ppIiwicHJldk1lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsImRhdGEiLCJwb3N0IiwidG8iLCJpZCIsImZyb20iLCJjdXJyZW50IiwiZW1pdCIsInR5cGUiLCJBRERfTUVTU0FHRSIsIm5ld01lc3NhZ2UiLCJmcm9tU2VsZiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm9uQ2xpY2siLCJyZWYiLCJvbkVtb2ppQ2xpY2siLCJ0aGVtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});