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

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n/* harmony import */ var _Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Chat/SearchMessages */ \"./src/components/Chat/SearchMessages.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser, messagesSearch, vidoeCall, voiceCall, incomingVoiceCall, incomingVideoCall }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            video,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 7\n                    }, this),\n                    currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: messagesSearch ? \"grid grid-cols-2\" : \"grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            messagesSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 31\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 27\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 88,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"YspDUtnrh9Md6JJtDI5mkX8F5E8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO1lBRTVEZCxTQUFTO2dCQUFFa0IsTUFBTWhDLDREQUFZQSxDQUFDNEMsWUFBWTtnQkFBRUY7WUFBUztRQUN2RDtRQUNBLEtBQUlsQyxtQkFBQUEsNkJBQUFBLHVDQUFBQSxpQkFBaUJvQixFQUFFLEVBQUU7WUFDdkJhO1FBQ0Y7SUFDRixHQUFHO1FBQUNqQztLQUFnQjtJQUdwQixxQkFBTzs7WUFFSHFDOzBCQUVGLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN6RCwwREFBUUE7Ozs7O29CQUVQa0IsZ0NBQWtCLDhEQUFDc0M7d0JBQUlDLFdBQVd0QyxpQkFBaUIscUJBQXFCOzswQ0FFdEUsOERBQUNSLG1EQUFJQTs7Ozs7NEJBRUhRLGdDQUFrQiw4REFBQ0wsNkRBQWNBOzs7Ozs7Ozs7OzZDQUdqQyw4REFBQ2IsOENBQUtBOzs7Ozs7Ozs7Ozs7O0FBSWxCO0dBdEZTYzs7UUFDUVAsa0RBQVNBO1FBQ3NHQyxtRUFBZ0JBOzs7S0FGdklNO0FBd0ZULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuL0NoYXRsaXN0L0NoYXRMaXN0XCI7XG5pbXBvcnQgRW1wdHkgZnJvbSBcIi4vRW1wdHlcIjtcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ0hFQ0tfVVNFUl9ST1VURSwgR0VUX01FU1NBR0VTX1JPVVRFLCBIT1NUIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcbmltcG9ydCBDaGF0IGZyb20gXCIuL0NoYXQvQ2hhdFwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIkAvY29udGV4dC9TdGF0ZVJlZHVjZXJzXCI7XG5pbXBvcnQgU2VhcmNoTWVzc2FnZXMgZnJvbSBcIi4vQ2hhdC9TZWFyY2hNZXNzYWdlc1wiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudENoYXRVc2VyLCBtZXNzYWdlc1NlYXJjaCwgdmlkb2VDYWxsLCB2b2ljZUNhbGwsIGluY29taW5nVm9pY2VDYWxsLCBpbmNvbWluZ1ZpZGVvQ2FsbCB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLCBzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvY2tldEV2ZW50LCBzZXRTb2NrZXRFdmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZGlyZWN0TG9naW4pIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9LCBbcmVkaXJlY3RMb2dpbl0pXG5cbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGZpcmViYXNlQXV0aCwgYXN5bmMgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikgc2V0UmVkaXJlY3RMb2dpbih0cnVlKTtcbiAgICBpZiAoIXVzZXJJbmZvICYmIGN1cnJlbnRVc2VyPy5lbWFpbCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KENIRUNLX1VTRVJfUk9VVEUsIHsgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsIH0pO1xuICAgICAgaWYgKCFkYXRhLnN0YXR1cykge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xuICAgICAgaWYgKGRhdGE/LmRhdGEpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVQaWN0dXJlOiBwcm9maWxlSW1hZ2UsIHN0YXR1cyB9ID0gZGF0YS5kYXRhO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZUltYWdlLCBzdGF0dXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VySW5mbykge1xuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhIT1NUKTtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJhZGQtdXNlclwiLCB1c2VySW5mby5pZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfU09DS0VULCBzb2NrZXQgfSk7XG4gICAgfVxuICB9LCBbdXNlckluZm9dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNvY2tldC5jdXJyZW50ICYmICFzb2NrZXRFdmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtc2ctcmVjZWl2ZVwiLCAoZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLkFERF9NRVNTQUdFLFxuICAgICAgICAgIG5ld01lc3NhZ2U6IHtcbiAgICAgICAgICAgIC4uLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0U29ja2V0RXZlbnQodHJ1ZSk7XG4gICAgfVxuICB9LCBbc29ja2V0LmN1cnJlbnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZXMgfSxcbiAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGAke0dFVF9NRVNTQUdFU19ST1VURX0vJHt1c2VySW5mby5pZH0vJHtjdXJyZW50Q2hhdFVzZXIuaWR9YFxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFUywgbWVzc2FnZXMgfSlcbiAgICB9O1xuICAgIGlmIChjdXJyZW50Q2hhdFVzZXI/LmlkKSB7XG4gICAgICBnZXRNZXNzYWdlcygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRDaGF0VXNlcl0pO1xuXG5cbiAgcmV0dXJuIDw+XG4gICAge1xuICAgICAgdmlkZW9cbiAgICB9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPENoYXRMaXN0IC8+XG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRDaGF0VXNlciA/IDxkaXYgY2xhc3NOYW1lPXttZXNzYWdlc1NlYXJjaCA/IFwiZ3JpZCBncmlkLWNvbHMtMlwiIDogXCJncmlkLWNvbHMtMlwifT5cblxuICAgICAgICAgIDxDaGF0IC8+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbWVzc2FnZXNTZWFyY2ggJiYgPFNlYXJjaE1lc3NhZ2VzIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6IDxFbXB0eSAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoYXRMaXN0IiwiRW1wdHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJHRVRfTUVTU0FHRVNfUk9VVEUiLCJIT1NUIiwidXNlUm91dGVyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXQiLCJpbyIsInJlZHVjZXIiLCJTZWFyY2hNZXNzYWdlcyIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsIm1lc3NhZ2VzU2VhcmNoIiwidmlkb2VDYWxsIiwidm9pY2VDYWxsIiwiaW5jb21pbmdWb2ljZUNhbGwiLCJpbmNvbWluZ1ZpZGVvQ2FsbCIsImRpc3BhdGNoIiwicmVkaXJlY3RMb2dpbiIsInNldFJlZGlyZWN0TG9naW4iLCJzb2NrZXRFdmVudCIsInNldFNvY2tldEV2ZW50Iiwic29ja2V0IiwicHVzaCIsImN1cnJlbnRVc2VyIiwiZW1haWwiLCJkYXRhIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInByb2ZpbGVJbWFnZSIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiY3VycmVudCIsImVtaXQiLCJTRVRfU09DS0VUIiwib24iLCJBRERfTUVTU0FHRSIsIm5ld01lc3NhZ2UiLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsInZpZGVvIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});