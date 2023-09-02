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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser, messageSearch }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_13__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_13__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: messageSearch ? \"grid grid-cols-2\" : \"grid-cols-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 27\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 84,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"S4JIYn4muOs3b84munCDw50pvA8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQVM7UUFDdkQ7UUFDQSxLQUFJOUIsbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCZ0IsRUFBRSxFQUFFO1lBQ3ZCYTtRQUNGO0lBQ0YsR0FBRztRQUFDN0I7S0FBZ0I7SUFHcEIscUJBQU87a0JBQ0wsNEVBQUNpQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ25ELDBEQUFRQTs7Ozs7Z0JBRVBpQixnQ0FBa0IsOERBQUNpQztvQkFBSUMsV0FBV2pDLGdCQUFnQixxQkFBcUI7OEJBRXJFLDRFQUFDUCxtREFBSUE7Ozs7Ozs7Ozt5Q0FHSCw4REFBQ1YsOENBQUtBOzs7Ozs7Ozs7Ozs7QUFJbEI7R0FqRlNhOztRQUNRTixrREFBU0E7UUFDeUNDLG1FQUFnQkE7OztLQUYxRUs7QUFtRlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qc3g/MmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdExpc3QgZnJvbSBcIi4vQ2hhdGxpc3QvQ2hhdExpc3RcIjtcbmltcG9ydCBFbXB0eSBmcm9tIFwiLi9FbXB0eVwiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGZpcmViYXNlQXV0aCB9IGZyb20gXCJAL3V0aWxzL0ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBDSEVDS19VU0VSX1JPVVRFLCBHRVRfTUVTU0FHRVNfUk9VVEUsIEhPU1QgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiQC9jb250ZXh0L1N0YXRlUmVkdWNlcnNcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3sgdXNlckluZm8sIGN1cnJlbnRDaGF0VXNlciwgbWVzc2FnZVNlYXJjaCB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLCBzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvY2tldEV2ZW50LCBzZXRTb2NrZXRFdmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZGlyZWN0TG9naW4pIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9LCBbcmVkaXJlY3RMb2dpbl0pXG5cbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGZpcmViYXNlQXV0aCwgYXN5bmMgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikgc2V0UmVkaXJlY3RMb2dpbih0cnVlKTtcbiAgICBpZiAoIXVzZXJJbmZvICYmIGN1cnJlbnRVc2VyPy5lbWFpbCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KENIRUNLX1VTRVJfUk9VVEUsIHsgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsIH0pO1xuICAgICAgaWYgKCFkYXRhLnN0YXR1cykge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xuICAgICAgaWYgKGRhdGE/LmRhdGEpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVQaWN0dXJlOiBwcm9maWxlSW1hZ2UsIHN0YXR1cyB9ID0gZGF0YS5kYXRhO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZUltYWdlLCBzdGF0dXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VySW5mbykge1xuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhIT1NUKTtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJhZGQtdXNlclwiLCB1c2VySW5mby5pZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfU09DS0VULCBzb2NrZXQgfSk7XG4gICAgfVxuICB9LCBbdXNlckluZm9dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNvY2tldC5jdXJyZW50ICYmICFzb2NrZXRFdmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtc2ctcmVjZWl2ZVwiLCAoZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLkFERF9NRVNTQUdFLFxuICAgICAgICAgIG5ld01lc3NhZ2U6IHtcbiAgICAgICAgICAgIC4uLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0U29ja2V0RXZlbnQodHJ1ZSk7XG4gICAgfVxuICB9LCBbc29ja2V0LmN1cnJlbnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZXMgfSxcbiAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGAke0dFVF9NRVNTQUdFU19ST1VURX0vJHt1c2VySW5mby5pZH0vJHtjdXJyZW50Q2hhdFVzZXIuaWR9YFxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFUywgbWVzc2FnZXMgfSlcbiAgICB9O1xuICAgIGlmIChjdXJyZW50Q2hhdFVzZXI/LmlkKSB7XG4gICAgICBnZXRNZXNzYWdlcygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRDaGF0VXNlcl0pO1xuXG5cbiAgcmV0dXJuIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPENoYXRMaXN0IC8+XG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRDaGF0VXNlciA/IDxkaXYgY2xhc3NOYW1lPXttZXNzYWdlU2VhcmNoID8gXCJncmlkIGdyaWQtY29scy0yXCIgOiBcImdyaWQtY29scy0yXCJ9PlxuXG4gICAgICAgICAgPENoYXQgLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiA8RW1wdHkgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaGF0TGlzdCIsIkVtcHR5Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZmlyZWJhc2VBdXRoIiwiYXhpb3MiLCJDSEVDS19VU0VSX1JPVVRFIiwiR0VUX01FU1NBR0VTX1JPVVRFIiwiSE9TVCIsInVzZVJvdXRlciIsInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJDaGF0IiwiaW8iLCJyZWR1Y2VyIiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwibWVzc2FnZVNlYXJjaCIsImRpc3BhdGNoIiwicmVkaXJlY3RMb2dpbiIsInNldFJlZGlyZWN0TG9naW4iLCJzb2NrZXRFdmVudCIsInNldFNvY2tldEV2ZW50Iiwic29ja2V0IiwicHVzaCIsImN1cnJlbnRVc2VyIiwiZW1haWwiLCJkYXRhIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInByb2ZpbGVJbWFnZSIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiY3VycmVudCIsImVtaXQiLCJTRVRfU09DS0VUIiwib24iLCJBRERfTUVTU0FHRSIsIm5ld01lc3NhZ2UiLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});