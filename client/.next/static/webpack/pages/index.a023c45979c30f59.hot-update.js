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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n/* harmony import */ var _Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Chat/SearchMessages */ \"./src/components/Chat/SearchMessages.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser, messagesSearch, vidoeCall, voiceCall }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 7\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: messagesSearch ? \"grid grid-cols-2\" : \"grid-cols-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        messagesSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 31\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 27\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 85,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"o1lWOzQWKTJ9r1u1Jlh9Q7f0Zcc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTlCLDREQUFZQSxDQUFDMEMsWUFBWTtnQkFBRUY7WUFBUztRQUN2RDtRQUNBLEtBQUloQyxtQkFBQUEsNkJBQUFBLHVDQUFBQSxpQkFBaUJrQixFQUFFLEVBQUU7WUFDdkJhO1FBQ0Y7SUFDRixHQUFHO1FBQUMvQjtLQUFnQjtJQUdwQixxQkFBTztrQkFDTCw0RUFBQ21DO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDdEQsMERBQVFBOzs7OztnQkFFUGtCLGdDQUFrQiw4REFBQ21DO29CQUFJQyxXQUFXbkMsaUJBQWlCLHFCQUFxQjs7c0NBRXRFLDhEQUFDUixtREFBSUE7Ozs7O3dCQUVIUSxnQ0FBa0IsOERBQUNMLDZEQUFjQTs7Ozs7Ozs7Ozt5Q0FHakMsOERBQUNiLDhDQUFLQTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBbkZTYzs7UUFDUVAsa0RBQVNBO1FBQ2dFQyxtRUFBZ0JBOzs7S0FGakdNO0FBcUZULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuL0NoYXRsaXN0L0NoYXRMaXN0XCI7XG5pbXBvcnQgRW1wdHkgZnJvbSBcIi4vRW1wdHlcIjtcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ0hFQ0tfVVNFUl9ST1VURSwgR0VUX01FU1NBR0VTX1JPVVRFLCBIT1NUIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcbmltcG9ydCBDaGF0IGZyb20gXCIuL0NoYXQvQ2hhdFwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIkAvY29udGV4dC9TdGF0ZVJlZHVjZXJzXCI7XG5pbXBvcnQgU2VhcmNoTWVzc2FnZXMgZnJvbSBcIi4vQ2hhdC9TZWFyY2hNZXNzYWdlc1wiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudENoYXRVc2VyLCBtZXNzYWdlc1NlYXJjaCwgdmlkb2VDYWxsLCB2b2ljZUNhbGwgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbcmVkaXJlY3RMb2dpbiwgc2V0UmVkaXJlY3RMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzb2NrZXRFdmVudCwgc2V0U29ja2V0RXZlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWRpcmVjdExvZ2luKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgfSwgW3JlZGlyZWN0TG9naW5dKVxuXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChmaXJlYmFzZUF1dGgsIGFzeW5jIChjdXJyZW50VXNlcikgPT4ge1xuICAgIGlmICghY3VycmVudFVzZXIpIHNldFJlZGlyZWN0TG9naW4odHJ1ZSk7XG4gICAgaWYgKCF1c2VySW5mbyAmJiBjdXJyZW50VXNlcj8uZW1haWwpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFLCB7IGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCB9KTtcbiAgICAgIGlmICghZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcbiAgICAgIGlmIChkYXRhPy5kYXRhKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlUGljdHVyZTogcHJvZmlsZUltYWdlLCBzdGF0dXMgfSA9IGRhdGEuZGF0YTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9JTkZPLFxuICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVJbWFnZSwgc3RhdHVzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckluZm8pIHtcbiAgICAgIHNvY2tldC5jdXJyZW50ID0gaW8oSE9TVCk7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiYWRkLXVzZXJcIiwgdXNlckluZm8uaWQpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1NPQ0tFVCwgc29ja2V0IH0pO1xuICAgIH1cbiAgfSwgW3VzZXJJbmZvXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzb2NrZXQuY3VycmVudCAmJiAhc29ja2V0RXZlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnLXJlY2VpdmVcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5BRERfTUVTU0FHRSxcbiAgICAgICAgICBuZXdNZXNzYWdlOiB7XG4gICAgICAgICAgICAuLi5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNldFNvY2tldEV2ZW50KHRydWUpO1xuICAgIH1cbiAgfSwgW3NvY2tldC5jdXJyZW50XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IG1lc3NhZ2VzIH0sXG4gICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgJHtHRVRfTUVTU0FHRVNfUk9VVEV9LyR7dXNlckluZm8uaWR9LyR7Y3VycmVudENoYXRVc2VyLmlkfWBcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfTUVTU0FHRVMsIG1lc3NhZ2VzIH0pXG4gICAgfTtcbiAgICBpZiAoY3VycmVudENoYXRVc2VyPy5pZCkge1xuICAgICAgZ2V0TWVzc2FnZXMoKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50Q2hhdFVzZXJdKTtcblxuXG4gIHJldHVybiA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtbWFpbiBoLXNjcmVlbiB3LXNjcmVlbiBtYXgtaC1zY3JlZW4gbWF4LXctZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxDaGF0TGlzdCAvPlxuICAgICAge1xuICAgICAgICBjdXJyZW50Q2hhdFVzZXIgPyA8ZGl2IGNsYXNzTmFtZT17bWVzc2FnZXNTZWFyY2ggPyBcImdyaWQgZ3JpZC1jb2xzLTJcIiA6IFwiZ3JpZC1jb2xzLTJcIn0+XG5cbiAgICAgICAgICA8Q2hhdCAvPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzU2VhcmNoICYmIDxTZWFyY2hNZXNzYWdlcy8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6IDxFbXB0eSAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoYXRMaXN0IiwiRW1wdHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJHRVRfTUVTU0FHRVNfUk9VVEUiLCJIT1NUIiwidXNlUm91dGVyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXQiLCJpbyIsInJlZHVjZXIiLCJTZWFyY2hNZXNzYWdlcyIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsIm1lc3NhZ2VzU2VhcmNoIiwidmlkb2VDYWxsIiwidm9pY2VDYWxsIiwiZGlzcGF0Y2giLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInNvY2tldEV2ZW50Iiwic2V0U29ja2V0RXZlbnQiLCJzb2NrZXQiLCJwdXNoIiwiY3VycmVudFVzZXIiLCJlbWFpbCIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInByb2ZpbGVQaWN0dXJlIiwicHJvZmlsZUltYWdlIiwidHlwZSIsIlNFVF9VU0VSX0lORk8iLCJjdXJyZW50IiwiZW1pdCIsIlNFVF9TT0NLRVQiLCJvbiIsIkFERF9NRVNTQUdFIiwibmV3TWVzc2FnZSIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiZ2V0IiwiU0VUX01FU1NBR0VTIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});