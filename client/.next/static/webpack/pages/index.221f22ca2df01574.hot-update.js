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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_13__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: _context_StateReducers__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_13__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 7\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 27\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 38\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 81,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"iGeqphxd5pOqrBreNMVw9TiPWwo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsR0FBRztRQUFDMUI7S0FBZ0I7SUFHcEIscUJBQU87a0JBQ0wsNEVBQUM4QjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQy9DLDBEQUFRQTs7Ozs7Z0JBRVBnQixnQ0FBa0IsOERBQUNOLG1EQUFJQTs7Ozt5Q0FBTSw4REFBQ1QsOENBQUtBOzs7Ozs7Ozs7Ozs7QUFJM0M7R0F6RVNZOztRQUNRTixrREFBU0E7UUFDMEJDLG1FQUFnQkE7OztLQUYzREs7QUEyRVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qc3g/MmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdExpc3QgZnJvbSBcIi4vQ2hhdGxpc3QvQ2hhdExpc3RcIjtcbmltcG9ydCBFbXB0eSBmcm9tIFwiLi9FbXB0eVwiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGZpcmViYXNlQXV0aCB9IGZyb20gXCJAL3V0aWxzL0ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBDSEVDS19VU0VSX1JPVVRFLCBHRVRfTUVTU0FHRVNfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiQC9jb250ZXh0L1N0YXRlUmVkdWNlcnNcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3sgdXNlckluZm8sIGN1cnJlbnRDaGF0VXNlciB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLCBzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvY2tldEV2ZW50LHNldFNvY2tldEV2ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVkaXJlY3RMb2dpbikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIH0sIFtyZWRpcmVjdExvZ2luXSlcblxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoZmlyZWJhc2VBdXRoLCBhc3luYyAoY3VycmVudFVzZXIpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSBzZXRSZWRpcmVjdExvZ2luKHRydWUpO1xuICAgIGlmICghdXNlckluZm8gJiYgY3VycmVudFVzZXI/LmVtYWlsKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoQ0hFQ0tfVVNFUl9ST1VURSwgeyBlbWFpbDogY3VycmVudFVzZXIuZW1haWwgfSk7XG4gICAgICBpZiAoIWRhdGEuc3RhdHVzKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG4gICAgICBpZiAoZGF0YT8uZGF0YSkge1xuICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZVBpY3R1cmU6IHByb2ZpbGVJbWFnZSwgc3RhdHVzIH0gPSBkYXRhLmRhdGE7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfSU5GTyxcbiAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlSW1hZ2UsIHN0YXR1cyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKEhPU1QpO1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImFkZC11c2VyXCIsIHVzZXJJbmZvLmlkKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9TT0NLRVQsIHNvY2tldCB9KTtcbiAgICB9XG4gIH0sIFt1c2VySW5mb10pXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoc29ja2V0LmN1cnJlbnQgJiYgIXNvY2tldEV2ZW50KXtcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnLXJlY2VpdmVcIiwoZGF0YSk9PntcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6cmVkdWNlclxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIHNldFNvY2tldEV2ZW50KHRydWUpO1xuICAgIH1cbiAgfSxbc29ja2V0LmN1cnJlbnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZXMgfSxcbiAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGAke0dFVF9NRVNTQUdFU19ST1VURX0vJHt1c2VySW5mby5pZH0vJHtjdXJyZW50Q2hhdFVzZXIuaWR9YFxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFUywgbWVzc2FnZXMgfSlcbiAgICB9O1xuICAgIGlmIChjdXJyZW50Q2hhdFVzZXI/LmlkKSB7XG4gICAgICBnZXRNZXNzYWdlcygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRDaGF0VXNlcl0pO1xuXG5cbiAgcmV0dXJuIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPENoYXRMaXN0IC8+XG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRDaGF0VXNlciA/IDxDaGF0IC8+IDogPEVtcHR5IC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhdExpc3QiLCJFbXB0eSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImZpcmViYXNlQXV0aCIsImF4aW9zIiwiQ0hFQ0tfVVNFUl9ST1VURSIsIkdFVF9NRVNTQUdFU19ST1VURSIsInVzZVJvdXRlciIsInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJDaGF0IiwiaW8iLCJyZWR1Y2VyIiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInNvY2tldEV2ZW50Iiwic2V0U29ja2V0RXZlbnQiLCJzb2NrZXQiLCJwdXNoIiwiY3VycmVudFVzZXIiLCJlbWFpbCIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInByb2ZpbGVQaWN0dXJlIiwicHJvZmlsZUltYWdlIiwidHlwZSIsIlNFVF9VU0VSX0lORk8iLCJjdXJyZW50IiwiSE9TVCIsImVtaXQiLCJTRVRfU09DS0VUIiwib24iLCJnZXRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiZ2V0IiwiU0VUX01FU1NBR0VTIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});