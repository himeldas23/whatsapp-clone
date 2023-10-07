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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n/* harmony import */ var _Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Chat/SearchMessages */ \"./src/components/Chat/SearchMessages.jsx\");\n/* harmony import */ var _Call_VideoCall__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Call/VideoCall */ \"./src/components/Call/VideoCall.jsx\");\n/* harmony import */ var _Call_VoiceCall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Call/VoiceCall */ \"./src/components/Call/VoiceCall.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser, messagesSearch, videoCall, voiceCall, incomingVoiceCall, incomingVideoCall }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_16__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            socket.current.on(\"incoming-voice-call\", (param)=>{\n                let { form, roomId, callType } = param;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_INCOMING_VOICE_CALL,\n                    incomingVoiceCall: {\n                        ...from,\n                        roomId,\n                        callType\n                    }\n                });\n            });\n            socket.current.on(\"incoming-video-call\", (param)=>{\n                let { form, roomId, callType } = param;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_INCOMING_VIDEO_CALL,\n                    incomingVideoCall: {\n                        ...from,\n                        roomId,\n                        callType\n                    }\n                });\n            });\n            socket.current.on(\"voice-call-rejected\", ()=>{\n                dispatch({\n                    type\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_16__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            videoCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VideoCall__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, this),\n            voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VoiceCall__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 120,\n                columnNumber: 20\n            }, this),\n            !videoCall && !voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: messagesSearch ? \"grid grid-cols-2\" : \"grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                                lineNumber: 134,\n                                columnNumber: 13\n                            }, this),\n                            messagesSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                                lineNumber: 136,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 29\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"0KI8ZmfbJThGOCMvzzJvLjS/y5E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXFCOzswQ0FFdEUsOERBQUNWLG1EQUFJQTs7Ozs7NEJBRUhVLGdDQUFrQiw4REFBQ1AsNkRBQWNBOzs7Ozs7Ozs7OzZDQUdqQyw4REFBQ2IsOENBQUtBOzs7Ozs7Ozs7Ozs7O0FBTXBCO0dBL0hTZ0I7O1FBQ1FULGtEQUFTQTtRQUNzR0MsbUVBQWdCQTs7O0tBRnZJUTtBQWlJVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeD8yYTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUsIEdFVF9NRVNTQUdFU19ST1VURSwgSE9TVCB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9DaGF0L0NoYXRcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCJAL2NvbnRleHQvU3RhdGVSZWR1Y2Vyc1wiO1xuaW1wb3J0IFNlYXJjaE1lc3NhZ2VzIGZyb20gXCIuL0NoYXQvU2VhcmNoTWVzc2FnZXNcIjtcbmltcG9ydCBWaWRlb0NhbGwgZnJvbSBcIi4vQ2FsbC9WaWRlb0NhbGxcIjtcbmltcG9ydCBWb2ljZUNhbGwgZnJvbSBcIi4vQ2FsbC9Wb2ljZUNhbGxcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3sgdXNlckluZm8sIGN1cnJlbnRDaGF0VXNlciwgbWVzc2FnZXNTZWFyY2gsIHZpZGVvQ2FsbCwgdm9pY2VDYWxsLCBpbmNvbWluZ1ZvaWNlQ2FsbCwgaW5jb21pbmdWaWRlb0NhbGwgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbcmVkaXJlY3RMb2dpbiwgc2V0UmVkaXJlY3RMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzb2NrZXRFdmVudCwgc2V0U29ja2V0RXZlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWRpcmVjdExvZ2luKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgfSwgW3JlZGlyZWN0TG9naW5dKVxuXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChmaXJlYmFzZUF1dGgsIGFzeW5jIChjdXJyZW50VXNlcikgPT4ge1xuICAgIGlmICghY3VycmVudFVzZXIpIHNldFJlZGlyZWN0TG9naW4odHJ1ZSk7XG4gICAgaWYgKCF1c2VySW5mbyAmJiBjdXJyZW50VXNlcj8uZW1haWwpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFLCB7IGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCB9KTtcbiAgICAgIGlmICghZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcbiAgICAgIGlmIChkYXRhPy5kYXRhKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlUGljdHVyZTogcHJvZmlsZUltYWdlLCBzdGF0dXMgfSA9IGRhdGEuZGF0YTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9JTkZPLFxuICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVJbWFnZSwgc3RhdHVzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckluZm8pIHtcbiAgICAgIHNvY2tldC5jdXJyZW50ID0gaW8oSE9TVCk7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiYWRkLXVzZXJcIiwgdXNlckluZm8uaWQpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1NPQ0tFVCwgc29ja2V0IH0pO1xuICAgIH1cbiAgfSwgW3VzZXJJbmZvXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzb2NrZXQuY3VycmVudCAmJiAhc29ja2V0RXZlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnLXJlY2VpdmVcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5BRERfTUVTU0FHRSxcbiAgICAgICAgICBuZXdNZXNzYWdlOiB7XG4gICAgICAgICAgICAuLi5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJpbmNvbWluZy12b2ljZS1jYWxsXCIsICh7IGZvcm0sIHJvb21JZCwgY2FsbFR5cGUgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9JTkNPTUlOR19WT0lDRV9DQUxMLFxuICAgICAgICAgIGluY29taW5nVm9pY2VDYWxsOiB7IC4uLmZyb20sIHJvb21JZCwgY2FsbFR5cGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJpbmNvbWluZy12aWRlby1jYWxsXCIsICh7IGZvcm0sIHJvb21JZCwgY2FsbFR5cGUgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9JTkNPTUlOR19WSURFT19DQUxMLFxuICAgICAgICAgIGluY29taW5nVmlkZW9DYWxsOiB7IC4uLmZyb20sIHJvb21JZCwgY2FsbFR5cGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJ2b2ljZS1jYWxsLXJlamVjdGVkXCIsICgpPT57XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG5cblxuICAgICAgc2V0U29ja2V0RXZlbnQodHJ1ZSk7XG4gICAgfVxuICB9LCBbc29ja2V0LmN1cnJlbnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZXMgfSxcbiAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGAke0dFVF9NRVNTQUdFU19ST1VURX0vJHt1c2VySW5mby5pZH0vJHtjdXJyZW50Q2hhdFVzZXIuaWR9YFxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFUywgbWVzc2FnZXMgfSlcbiAgICB9O1xuICAgIGlmIChjdXJyZW50Q2hhdFVzZXI/LmlkKSB7XG4gICAgICBnZXRNZXNzYWdlcygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRDaGF0VXNlcl0pO1xuXG5cbiAgcmV0dXJuICg8PlxuICAgIHtcbiAgICAgIHZpZGVvQ2FsbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8VmlkZW9DYWxsIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuXG4gICAge1xuICAgICAgdm9pY2VDYWxsICYmIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPFZvaWNlQ2FsbCAvPlxuICAgICAgPC9kaXY+XG4gICAgfVxuXG4gICAge1xuICAgICAgIXZpZGVvQ2FsbCAmJiAhdm9pY2VDYWxsICYmXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8Q2hhdExpc3QgLz5cbiAgICAgICAge1xuICAgICAgICAgIGN1cnJlbnRDaGF0VXNlciA/IDxkaXYgY2xhc3NOYW1lPXttZXNzYWdlc1NlYXJjaCA/IFwiZ3JpZCBncmlkLWNvbHMtMlwiIDogXCJncmlkLWNvbHMtMlwifT5cblxuICAgICAgICAgICAgPENoYXQgLz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXNTZWFyY2ggJiYgPFNlYXJjaE1lc3NhZ2VzIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IDxFbXB0eSAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaGF0TGlzdCIsIkVtcHR5Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZmlyZWJhc2VBdXRoIiwiYXhpb3MiLCJDSEVDS19VU0VSX1JPVVRFIiwiR0VUX01FU1NBR0VTX1JPVVRFIiwiSE9TVCIsInVzZVJvdXRlciIsInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJDaGF0IiwiaW8iLCJyZWR1Y2VyIiwiU2VhcmNoTWVzc2FnZXMiLCJWaWRlb0NhbGwiLCJWb2ljZUNhbGwiLCJNYWluIiwicm91dGVyIiwidXNlckluZm8iLCJjdXJyZW50Q2hhdFVzZXIiLCJtZXNzYWdlc1NlYXJjaCIsInZpZGVvQ2FsbCIsInZvaWNlQ2FsbCIsImluY29taW5nVm9pY2VDYWxsIiwiaW5jb21pbmdWaWRlb0NhbGwiLCJkaXNwYXRjaCIsInJlZGlyZWN0TG9naW4iLCJzZXRSZWRpcmVjdExvZ2luIiwic29ja2V0RXZlbnQiLCJzZXRTb2NrZXRFdmVudCIsInNvY2tldCIsInB1c2giLCJjdXJyZW50VXNlciIsImVtYWlsIiwiZGF0YSIsInBvc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJuYW1lIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSW1hZ2UiLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsImN1cnJlbnQiLCJlbWl0IiwiU0VUX1NPQ0tFVCIsIm9uIiwiQUREX01FU1NBR0UiLCJuZXdNZXNzYWdlIiwibWVzc2FnZSIsImZvcm0iLCJyb29tSWQiLCJjYWxsVHlwZSIsIlNFVF9JTkNPTUlOR19WT0lDRV9DQUxMIiwiZnJvbSIsIlNFVF9JTkNPTUlOR19WSURFT19DQUxMIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});