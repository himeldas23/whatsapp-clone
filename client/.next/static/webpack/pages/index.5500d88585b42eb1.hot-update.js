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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n/* harmony import */ var _Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Chat/SearchMessages */ \"./src/components/Chat/SearchMessages.jsx\");\n/* harmony import */ var _Call_VideoCall__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Call/VideoCall */ \"./src/components/Call/VideoCall.jsx\");\n/* harmony import */ var _Call_VoiceCall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Call/VoiceCall */ \"./src/components/Call/VoiceCall.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser, messagesSearch, videCall, voiceCall, incomingVoiceCall, incomingVideoCall }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_16__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_16__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            vidoeCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VideoCall__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 88,\n                columnNumber: 20\n            }, this),\n            voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VoiceCall__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 94,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 7\n                    }, this),\n                    currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: messagesSearch ? \"grid grid-cols-2\" : \"grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            messagesSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 31\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 27\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 98,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"Ez0JjcgwXnuuFde0/Eiv33n5BIg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEIsZ0JBQWdCb0IsRUFBRTtZQUU1RGQsU0FBUztnQkFBRWtCLE1BQU1sQyw0REFBWUEsQ0FBQzhDLFlBQVk7Z0JBQUVGO1lBQVM7UUFDdkQ7UUFDQSxLQUFJbEMsbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCb0IsRUFBRSxFQUFFO1lBQ3ZCYTtRQUNGO0lBQ0YsR0FBRztRQUFDakM7S0FBZ0I7SUFHcEIscUJBQU87O1lBRUhxQywyQkFBYSw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQzFCLDRFQUFDNUMsd0RBQVNBOzs7Ozs7Ozs7O1lBS1pRLDJCQUFhLDhEQUFDbUM7Z0JBQUlDLFdBQVU7MEJBQzFCLDRFQUFDM0Msd0RBQVNBOzs7Ozs7Ozs7OzBCQUdkLDhEQUFDMEM7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDM0QsMERBQVFBOzs7OztvQkFFUG9CLGdDQUFrQiw4REFBQ3NDO3dCQUFJQyxXQUFXdEMsaUJBQWlCLHFCQUFxQjs7MENBRXRFLDhEQUFDVixtREFBSUE7Ozs7OzRCQUVIVSxnQ0FBa0IsOERBQUNQLDZEQUFjQTs7Ozs7Ozs7Ozs2Q0FHakMsOERBQUNiLDhDQUFLQTs7Ozs7Ozs7Ozs7OztBQUlsQjtHQTlGU2dCOztRQUNRVCxrREFBU0E7UUFDcUdDLG1FQUFnQkE7OztLQUZ0SVE7QUFnR1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qc3g/MmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdExpc3QgZnJvbSBcIi4vQ2hhdGxpc3QvQ2hhdExpc3RcIjtcbmltcG9ydCBFbXB0eSBmcm9tIFwiLi9FbXB0eVwiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGZpcmViYXNlQXV0aCB9IGZyb20gXCJAL3V0aWxzL0ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBDSEVDS19VU0VSX1JPVVRFLCBHRVRfTUVTU0FHRVNfUk9VVEUsIEhPU1QgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiQC9jb250ZXh0L1N0YXRlUmVkdWNlcnNcIjtcbmltcG9ydCBTZWFyY2hNZXNzYWdlcyBmcm9tIFwiLi9DaGF0L1NlYXJjaE1lc3NhZ2VzXCI7XG5pbXBvcnQgVmlkZW9DYWxsIGZyb20gXCIuL0NhbGwvVmlkZW9DYWxsXCI7XG5pbXBvcnQgVm9pY2VDYWxsIGZyb20gXCIuL0NhbGwvVm9pY2VDYWxsXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt7IHVzZXJJbmZvLCBjdXJyZW50Q2hhdFVzZXIsIG1lc3NhZ2VzU2VhcmNoLCB2aWRlQ2FsbCwgdm9pY2VDYWxsLCBpbmNvbWluZ1ZvaWNlQ2FsbCwgaW5jb21pbmdWaWRlb0NhbGwgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbcmVkaXJlY3RMb2dpbiwgc2V0UmVkaXJlY3RMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzb2NrZXRFdmVudCwgc2V0U29ja2V0RXZlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWRpcmVjdExvZ2luKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgfSwgW3JlZGlyZWN0TG9naW5dKVxuXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChmaXJlYmFzZUF1dGgsIGFzeW5jIChjdXJyZW50VXNlcikgPT4ge1xuICAgIGlmICghY3VycmVudFVzZXIpIHNldFJlZGlyZWN0TG9naW4odHJ1ZSk7XG4gICAgaWYgKCF1c2VySW5mbyAmJiBjdXJyZW50VXNlcj8uZW1haWwpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFLCB7IGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCB9KTtcbiAgICAgIGlmICghZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcbiAgICAgIGlmIChkYXRhPy5kYXRhKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlUGljdHVyZTogcHJvZmlsZUltYWdlLCBzdGF0dXMgfSA9IGRhdGEuZGF0YTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9JTkZPLFxuICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVJbWFnZSwgc3RhdHVzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckluZm8pIHtcbiAgICAgIHNvY2tldC5jdXJyZW50ID0gaW8oSE9TVCk7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiYWRkLXVzZXJcIiwgdXNlckluZm8uaWQpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1NPQ0tFVCwgc29ja2V0IH0pO1xuICAgIH1cbiAgfSwgW3VzZXJJbmZvXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzb2NrZXQuY3VycmVudCAmJiAhc29ja2V0RXZlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnLXJlY2VpdmVcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5BRERfTUVTU0FHRSxcbiAgICAgICAgICBuZXdNZXNzYWdlOiB7XG4gICAgICAgICAgICAuLi5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNldFNvY2tldEV2ZW50KHRydWUpO1xuICAgIH1cbiAgfSwgW3NvY2tldC5jdXJyZW50XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IG1lc3NhZ2VzIH0sXG4gICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgJHtHRVRfTUVTU0FHRVNfUk9VVEV9LyR7dXNlckluZm8uaWR9LyR7Y3VycmVudENoYXRVc2VyLmlkfWBcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfTUVTU0FHRVMsIG1lc3NhZ2VzIH0pXG4gICAgfTtcbiAgICBpZiAoY3VycmVudENoYXRVc2VyPy5pZCkge1xuICAgICAgZ2V0TWVzc2FnZXMoKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50Q2hhdFVzZXJdKTtcblxuXG4gIHJldHVybiA8PlxuICAgIHtcbiAgICAgIHZpZG9lQ2FsbCAmJiA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIG1heC1oLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxWaWRlb0NhbGwgLz5cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIHtcbiAgICAgIHZvaWNlQ2FsbCAmJiA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIG1heC1oLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxWb2ljZUNhbGwgLz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8Q2hhdExpc3QgLz5cbiAgICAgIHtcbiAgICAgICAgY3VycmVudENoYXRVc2VyID8gPGRpdiBjbGFzc05hbWU9e21lc3NhZ2VzU2VhcmNoID8gXCJncmlkIGdyaWQtY29scy0yXCIgOiBcImdyaWQtY29scy0yXCJ9PlxuXG4gICAgICAgICAgPENoYXQgLz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlc1NlYXJjaCAmJiA8U2VhcmNoTWVzc2FnZXMgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogPEVtcHR5IC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhdExpc3QiLCJFbXB0eSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImZpcmViYXNlQXV0aCIsImF4aW9zIiwiQ0hFQ0tfVVNFUl9ST1VURSIsIkdFVF9NRVNTQUdFU19ST1VURSIsIkhPU1QiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiQ2hhdCIsImlvIiwicmVkdWNlciIsIlNlYXJjaE1lc3NhZ2VzIiwiVmlkZW9DYWxsIiwiVm9pY2VDYWxsIiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwibWVzc2FnZXNTZWFyY2giLCJ2aWRlQ2FsbCIsInZvaWNlQ2FsbCIsImluY29taW5nVm9pY2VDYWxsIiwiaW5jb21pbmdWaWRlb0NhbGwiLCJkaXNwYXRjaCIsInJlZGlyZWN0TG9naW4iLCJzZXRSZWRpcmVjdExvZ2luIiwic29ja2V0RXZlbnQiLCJzZXRTb2NrZXRFdmVudCIsInNvY2tldCIsInB1c2giLCJjdXJyZW50VXNlciIsImVtYWlsIiwiZGF0YSIsInBvc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJuYW1lIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSW1hZ2UiLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsImN1cnJlbnQiLCJlbWl0IiwiU0VUX1NPQ0tFVCIsIm9uIiwiQUREX01FU1NBR0UiLCJuZXdNZXNzYWdlIiwibWVzc2FnZSIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJnZXQiLCJTRVRfTUVTU0FHRVMiLCJ2aWRvZUNhbGwiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});