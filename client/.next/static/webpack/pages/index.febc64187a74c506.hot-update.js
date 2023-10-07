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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n/* harmony import */ var _Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Chat/SearchMessages */ \"./src/components/Chat/SearchMessages.jsx\");\n/* harmony import */ var _Call_VideoCall__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Call/VideoCall */ \"./src/components/Call/VideoCall.jsx\");\n/* harmony import */ var _Call_VoiceCall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Call/VoiceCall */ \"./src/components/Call/VoiceCall.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser, messagesSearch, videoCall, voiceCall, incomingVoiceCall, incomingVideoCall }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_16__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            socket.current.on(\"incoming-voice-call\", (param)=>{\n                let { form, roomId, callType } = param;\n                dispatch({\n                    type\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_16__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            videoCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VideoCall__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VoiceCall__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 106,\n                columnNumber: 20\n            }, this),\n            !videoCall && !voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: messagesSearch ? \"grid grid-cols-2\" : \"grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            messagesSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 29\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"0KI8ZmfbJThGOCMvzzJvLjS/y5E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFc0IsUUFBUSxFQUFFLEVBQ25CLEdBQUcsTUFBTXJELGtEQUFTLENBQ2pCLEdBQXlCZSxPQUF0QmIsZ0VBQWtCQSxFQUFDLEtBQWtCYyxPQUFmRCxTQUFTcUIsRUFBRSxFQUFDLEtBQXNCLE9BQW5CcEIsZ0JBQWdCb0IsRUFBRTtZQUU1RGQsU0FBUztnQkFBRWtCLE1BQU1sQyw0REFBWUEsQ0FBQ2lELFlBQVk7Z0JBQUVGO1lBQVM7UUFDdkQ7UUFDQSxLQUFJckMsbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCb0IsRUFBRSxFQUFFO1lBQ3ZCZ0I7UUFDRjtJQUNGLEdBQUc7UUFBQ3BDO0tBQWdCO0lBR3BCLHFCQUFROztZQUVKRSwyQkFDRSw4REFBQ3NDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDOUMsd0RBQVNBOzs7Ozs7Ozs7O1lBT2RRLDJCQUFhLDhEQUFDcUM7Z0JBQUlDLFdBQVU7MEJBQzFCLDRFQUFDN0Msd0RBQVNBOzs7Ozs7Ozs7O1lBS1osQ0FBQ00sYUFBYSxDQUFDQywyQkFHZiw4REFBQ3FDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQzdELDBEQUFRQTs7Ozs7b0JBRVBvQixnQ0FBa0IsOERBQUN3Qzt3QkFBSUMsV0FBV3hDLGlCQUFpQixxQkFBcUI7OzBDQUV0RSw4REFBQ1YsbURBQUlBOzs7Ozs0QkFFSFUsZ0NBQWtCLDhEQUFDUCw2REFBY0E7Ozs7Ozs7Ozs7NkNBR2pDLDhEQUFDYiw4Q0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFNcEI7R0FqSFNnQjs7UUFDUVQsa0RBQVNBO1FBQ3NHQyxtRUFBZ0JBOzs7S0FGdklRO0FBbUhULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuL0NoYXRsaXN0L0NoYXRMaXN0XCI7XG5pbXBvcnQgRW1wdHkgZnJvbSBcIi4vRW1wdHlcIjtcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ0hFQ0tfVVNFUl9ST1VURSwgR0VUX01FU1NBR0VTX1JPVVRFLCBIT1NUIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcbmltcG9ydCBDaGF0IGZyb20gXCIuL0NoYXQvQ2hhdFwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIkAvY29udGV4dC9TdGF0ZVJlZHVjZXJzXCI7XG5pbXBvcnQgU2VhcmNoTWVzc2FnZXMgZnJvbSBcIi4vQ2hhdC9TZWFyY2hNZXNzYWdlc1wiO1xuaW1wb3J0IFZpZGVvQ2FsbCBmcm9tIFwiLi9DYWxsL1ZpZGVvQ2FsbFwiO1xuaW1wb3J0IFZvaWNlQ2FsbCBmcm9tIFwiLi9DYWxsL1ZvaWNlQ2FsbFwiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudENoYXRVc2VyLCBtZXNzYWdlc1NlYXJjaCwgdmlkZW9DYWxsLCB2b2ljZUNhbGwsIGluY29taW5nVm9pY2VDYWxsLCBpbmNvbWluZ1ZpZGVvQ2FsbCB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLCBzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvY2tldEV2ZW50LCBzZXRTb2NrZXRFdmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZGlyZWN0TG9naW4pIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9LCBbcmVkaXJlY3RMb2dpbl0pXG5cbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGZpcmViYXNlQXV0aCwgYXN5bmMgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikgc2V0UmVkaXJlY3RMb2dpbih0cnVlKTtcbiAgICBpZiAoIXVzZXJJbmZvICYmIGN1cnJlbnRVc2VyPy5lbWFpbCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KENIRUNLX1VTRVJfUk9VVEUsIHsgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsIH0pO1xuICAgICAgaWYgKCFkYXRhLnN0YXR1cykge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xuICAgICAgaWYgKGRhdGE/LmRhdGEpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVQaWN0dXJlOiBwcm9maWxlSW1hZ2UsIHN0YXR1cyB9ID0gZGF0YS5kYXRhO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZUltYWdlLCBzdGF0dXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VySW5mbykge1xuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhIT1NUKTtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJhZGQtdXNlclwiLCB1c2VySW5mby5pZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfU09DS0VULCBzb2NrZXQgfSk7XG4gICAgfVxuICB9LCBbdXNlckluZm9dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNvY2tldC5jdXJyZW50ICYmICFzb2NrZXRFdmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtc2ctcmVjZWl2ZVwiLCAoZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLkFERF9NRVNTQUdFLFxuICAgICAgICAgIG5ld01lc3NhZ2U6IHtcbiAgICAgICAgICAgIC4uLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcImluY29taW5nLXZvaWNlLWNhbGxcIiwoe2Zvcm0scm9vbUlkLGNhbGxUeXBlfSk9PntcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGVcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cblxuXG4gICAgICBzZXRTb2NrZXRFdmVudCh0cnVlKTtcbiAgICB9XG4gIH0sIFtzb2NrZXQuY3VycmVudF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlcyB9LFxuICAgICAgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYCR7R0VUX01FU1NBR0VTX1JPVVRFfS8ke3VzZXJJbmZvLmlkfS8ke2N1cnJlbnRDaGF0VXNlci5pZH1gXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VTLCBtZXNzYWdlcyB9KVxuICAgIH07XG4gICAgaWYgKGN1cnJlbnRDaGF0VXNlcj8uaWQpIHtcbiAgICAgIGdldE1lc3NhZ2VzKCk7XG4gICAgfVxuICB9LCBbY3VycmVudENoYXRVc2VyXSk7XG5cblxuICByZXR1cm4gKDw+XG4gICAge1xuICAgICAgdmlkZW9DYWxsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBtYXgtaC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIDxWaWRlb0NhbGwgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG5cbiAgICB7XG4gICAgICB2b2ljZUNhbGwgJiYgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBtYXgtaC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8Vm9pY2VDYWxsIC8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICB7XG4gICAgICAhdmlkZW9DYWxsICYmICF2b2ljZUNhbGwgJiZcblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxDaGF0TGlzdCAvPlxuICAgICAgICB7XG4gICAgICAgICAgY3VycmVudENoYXRVc2VyID8gPGRpdiBjbGFzc05hbWU9e21lc3NhZ2VzU2VhcmNoID8gXCJncmlkIGdyaWQtY29scy0yXCIgOiBcImdyaWQtY29scy0yXCJ9PlxuXG4gICAgICAgICAgICA8Q2hhdCAvPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXNzYWdlc1NlYXJjaCAmJiA8U2VhcmNoTWVzc2FnZXMgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogPEVtcHR5IC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoYXRMaXN0IiwiRW1wdHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJHRVRfTUVTU0FHRVNfUk9VVEUiLCJIT1NUIiwidXNlUm91dGVyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXQiLCJpbyIsInJlZHVjZXIiLCJTZWFyY2hNZXNzYWdlcyIsIlZpZGVvQ2FsbCIsIlZvaWNlQ2FsbCIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsIm1lc3NhZ2VzU2VhcmNoIiwidmlkZW9DYWxsIiwidm9pY2VDYWxsIiwiaW5jb21pbmdWb2ljZUNhbGwiLCJpbmNvbWluZ1ZpZGVvQ2FsbCIsImRpc3BhdGNoIiwicmVkaXJlY3RMb2dpbiIsInNldFJlZGlyZWN0TG9naW4iLCJzb2NrZXRFdmVudCIsInNldFNvY2tldEV2ZW50Iiwic29ja2V0IiwicHVzaCIsImN1cnJlbnRVc2VyIiwiZW1haWwiLCJkYXRhIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInByb2ZpbGVJbWFnZSIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiY3VycmVudCIsImVtaXQiLCJTRVRfU09DS0VUIiwib24iLCJBRERfTUVTU0FHRSIsIm5ld01lc3NhZ2UiLCJtZXNzYWdlIiwiZm9ybSIsInJvb21JZCIsImNhbGxUeXBlIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});