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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-receive\", (data)=>{\n                dispatch({\n                    type: redu\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 27\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 38\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 80,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"iGeqphxd5pOqrBreNMVw9TiPWwo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0tBQWdCO0lBR3BCLHFCQUFPO2tCQUNMLDRFQUFDK0I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUMvQywwREFBUUE7Ozs7O2dCQUVQZSxnQ0FBa0IsOERBQUNMLG1EQUFJQTs7Ozt5Q0FBTSw4REFBQ1QsOENBQUtBOzs7Ozs7Ozs7Ozs7QUFJM0M7R0F6RVNXOztRQUNRTCxrREFBU0E7UUFDMEJDLG1FQUFnQkE7OztLQUYzREk7QUEyRVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qc3g/MmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdExpc3QgZnJvbSBcIi4vQ2hhdGxpc3QvQ2hhdExpc3RcIjtcbmltcG9ydCBFbXB0eSBmcm9tIFwiLi9FbXB0eVwiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGZpcmViYXNlQXV0aCB9IGZyb20gXCJAL3V0aWxzL0ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBDSEVDS19VU0VSX1JPVVRFLCBHRVRfTUVTU0FHRVNfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt7IHVzZXJJbmZvLCBjdXJyZW50Q2hhdFVzZXIgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbcmVkaXJlY3RMb2dpbiwgc2V0UmVkaXJlY3RMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzb2NrZXRFdmVudCxzZXRTb2NrZXRFdmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZGlyZWN0TG9naW4pIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9LCBbcmVkaXJlY3RMb2dpbl0pXG5cbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGZpcmViYXNlQXV0aCwgYXN5bmMgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikgc2V0UmVkaXJlY3RMb2dpbih0cnVlKTtcbiAgICBpZiAoIXVzZXJJbmZvICYmIGN1cnJlbnRVc2VyPy5lbWFpbCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KENIRUNLX1VTRVJfUk9VVEUsIHsgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsIH0pO1xuICAgICAgaWYgKCFkYXRhLnN0YXR1cykge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xuICAgICAgaWYgKGRhdGE/LmRhdGEpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVQaWN0dXJlOiBwcm9maWxlSW1hZ2UsIHN0YXR1cyB9ID0gZGF0YS5kYXRhO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZUltYWdlLCBzdGF0dXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VySW5mbykge1xuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhIT1NUKTtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJhZGQtdXNlclwiLCB1c2VySW5mby5pZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfU09DS0VULCBzb2NrZXQgfSk7XG4gICAgfVxuICB9LCBbdXNlckluZm9dKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKHNvY2tldC5jdXJyZW50ICYmICFzb2NrZXRFdmVudCl7XG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm1zZy1yZWNlaXZlXCIsKGRhdGEpPT57XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOnJlZHVcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBzZXRTb2NrZXRFdmVudCh0cnVlKTtcbiAgICB9XG4gIH0sW3NvY2tldC5jdXJyZW50XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IG1lc3NhZ2VzIH0sXG4gICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgJHtHRVRfTUVTU0FHRVNfUk9VVEV9LyR7dXNlckluZm8uaWR9LyR7Y3VycmVudENoYXRVc2VyLmlkfWBcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfTUVTU0FHRVMsIG1lc3NhZ2VzIH0pXG4gICAgfTtcbiAgICBpZiAoY3VycmVudENoYXRVc2VyPy5pZCkge1xuICAgICAgZ2V0TWVzc2FnZXMoKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50Q2hhdFVzZXJdKTtcblxuXG4gIHJldHVybiA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtbWFpbiBoLXNjcmVlbiB3LXNjcmVlbiBtYXgtaC1zY3JlZW4gbWF4LXctZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxDaGF0TGlzdCAvPlxuICAgICAge1xuICAgICAgICBjdXJyZW50Q2hhdFVzZXIgPyA8Q2hhdCAvPiA6IDxFbXB0eSAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoYXRMaXN0IiwiRW1wdHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJHRVRfTUVTU0FHRVNfUk9VVEUiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiQ2hhdCIsImlvIiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInNvY2tldEV2ZW50Iiwic2V0U29ja2V0RXZlbnQiLCJzb2NrZXQiLCJwdXNoIiwiY3VycmVudFVzZXIiLCJlbWFpbCIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInByb2ZpbGVQaWN0dXJlIiwicHJvZmlsZUltYWdlIiwidHlwZSIsIlNFVF9VU0VSX0lORk8iLCJjdXJyZW50IiwiSE9TVCIsImVtaXQiLCJTRVRfU09DS0VUIiwib24iLCJyZWR1IiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});