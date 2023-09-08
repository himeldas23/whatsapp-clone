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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n/* harmony import */ var _Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Chat/SearchMessages */ \"./src/components/Chat/SearchMessages.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser, messagesSearch, vidoeCall }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 7\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: messagesSearch ? \"grid grid-cols-2\" : \"grid-cols-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        messagesSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 31\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 27\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 85,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"dSUcOYHTUdZuUmgaI6fhBtJg8V4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3lDLFlBQVk7Z0JBQUVGO1lBQVM7UUFDdkQ7UUFDQSxLQUFJL0IsbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCaUIsRUFBRSxFQUFFO1lBQ3ZCYTtRQUNGO0lBQ0YsR0FBRztRQUFDOUI7S0FBZ0I7SUFHcEIscUJBQU87a0JBQ0wsNEVBQUNrQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ3JELDBEQUFRQTs7Ozs7Z0JBRVBrQixnQ0FBa0IsOERBQUNrQztvQkFBSUMsV0FBV2xDLGlCQUFpQixxQkFBcUI7O3NDQUV0RSw4REFBQ1IsbURBQUlBOzs7Ozt3QkFFSFEsZ0NBQWtCLDhEQUFDTCw2REFBY0E7Ozs7Ozs7Ozs7eUNBR2pDLDhEQUFDYiw4Q0FBS0E7Ozs7Ozs7Ozs7OztBQUlsQjtHQW5GU2M7O1FBQ1FQLGtEQUFTQTtRQUN1REMsbUVBQWdCQTs7O0tBRnhGTTtBQXFGVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeD8yYTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUsIEdFVF9NRVNTQUdFU19ST1VURSwgSE9TVCB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9DaGF0L0NoYXRcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCJAL2NvbnRleHQvU3RhdGVSZWR1Y2Vyc1wiO1xuaW1wb3J0IFNlYXJjaE1lc3NhZ2VzIGZyb20gXCIuL0NoYXQvU2VhcmNoTWVzc2FnZXNcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3sgdXNlckluZm8sIGN1cnJlbnRDaGF0VXNlciwgbWVzc2FnZXNTZWFyY2gsIHZpZG9lQ2FsbCwgIH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgW3JlZGlyZWN0TG9naW4sIHNldFJlZGlyZWN0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc29ja2V0RXZlbnQsIHNldFNvY2tldEV2ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVkaXJlY3RMb2dpbikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIH0sIFtyZWRpcmVjdExvZ2luXSlcblxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoZmlyZWJhc2VBdXRoLCBhc3luYyAoY3VycmVudFVzZXIpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSBzZXRSZWRpcmVjdExvZ2luKHRydWUpO1xuICAgIGlmICghdXNlckluZm8gJiYgY3VycmVudFVzZXI/LmVtYWlsKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoQ0hFQ0tfVVNFUl9ST1VURSwgeyBlbWFpbDogY3VycmVudFVzZXIuZW1haWwgfSk7XG4gICAgICBpZiAoIWRhdGEuc3RhdHVzKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG4gICAgICBpZiAoZGF0YT8uZGF0YSkge1xuICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZVBpY3R1cmU6IHByb2ZpbGVJbWFnZSwgc3RhdHVzIH0gPSBkYXRhLmRhdGE7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfSU5GTyxcbiAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlSW1hZ2UsIHN0YXR1cyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKEhPU1QpO1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImFkZC11c2VyXCIsIHVzZXJJbmZvLmlkKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9TT0NLRVQsIHNvY2tldCB9KTtcbiAgICB9XG4gIH0sIFt1c2VySW5mb10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQgJiYgIXNvY2tldEV2ZW50KSB7XG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm1zZy1yZWNlaXZlXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiByZWR1Y2VyQ2FzZXMuQUREX01FU1NBR0UsXG4gICAgICAgICAgbmV3TWVzc2FnZToge1xuICAgICAgICAgICAgLi4uZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBzZXRTb2NrZXRFdmVudCh0cnVlKTtcbiAgICB9XG4gIH0sIFtzb2NrZXQuY3VycmVudF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlcyB9LFxuICAgICAgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYCR7R0VUX01FU1NBR0VTX1JPVVRFfS8ke3VzZXJJbmZvLmlkfS8ke2N1cnJlbnRDaGF0VXNlci5pZH1gXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VTLCBtZXNzYWdlcyB9KVxuICAgIH07XG4gICAgaWYgKGN1cnJlbnRDaGF0VXNlcj8uaWQpIHtcbiAgICAgIGdldE1lc3NhZ2VzKCk7XG4gICAgfVxuICB9LCBbY3VycmVudENoYXRVc2VyXSk7XG5cblxuICByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8Q2hhdExpc3QgLz5cbiAgICAgIHtcbiAgICAgICAgY3VycmVudENoYXRVc2VyID8gPGRpdiBjbGFzc05hbWU9e21lc3NhZ2VzU2VhcmNoID8gXCJncmlkIGdyaWQtY29scy0yXCIgOiBcImdyaWQtY29scy0yXCJ9PlxuXG4gICAgICAgICAgPENoYXQgLz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlc1NlYXJjaCAmJiA8U2VhcmNoTWVzc2FnZXMvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiA8RW1wdHkgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaGF0TGlzdCIsIkVtcHR5Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZmlyZWJhc2VBdXRoIiwiYXhpb3MiLCJDSEVDS19VU0VSX1JPVVRFIiwiR0VUX01FU1NBR0VTX1JPVVRFIiwiSE9TVCIsInVzZVJvdXRlciIsInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJDaGF0IiwiaW8iLCJyZWR1Y2VyIiwiU2VhcmNoTWVzc2FnZXMiLCJNYWluIiwicm91dGVyIiwidXNlckluZm8iLCJjdXJyZW50Q2hhdFVzZXIiLCJtZXNzYWdlc1NlYXJjaCIsInZpZG9lQ2FsbCIsImRpc3BhdGNoIiwicmVkaXJlY3RMb2dpbiIsInNldFJlZGlyZWN0TG9naW4iLCJzb2NrZXRFdmVudCIsInNldFNvY2tldEV2ZW50Iiwic29ja2V0IiwicHVzaCIsImN1cnJlbnRVc2VyIiwiZW1haWwiLCJkYXRhIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInByb2ZpbGVJbWFnZSIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiY3VycmVudCIsImVtaXQiLCJTRVRfU09DS0VUIiwib24iLCJBRERfTUVTU0FHRSIsIm5ld01lc3NhZ2UiLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});