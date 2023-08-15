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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = useRef();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _currentChatUser;\n        const getMessages = async ()=>{\n            const { data: { messages } } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if ((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 27\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 38\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 68,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"kKGQMy02go1ICCQoqvrE2qfG7l4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1I7QUFDZjtBQUN1QjtBQUNHO0FBQzVCO0FBQytDO0FBQ2pDO0FBQ2tCO0FBQ1A7QUFDcEI7QUFDTztBQUV0QyxTQUFTZTs7SUFDUCxNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxDQUFDLEVBQUVPLFFBQVEsRUFBRUMsZUFBZSxFQUFFLEVBQUVDLFNBQVMsR0FBR1IsdUVBQWdCQTtJQUNsRSxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTW9CLFNBQVNDO0lBRWZ0QixnREFBU0EsQ0FBQztRQUNSLElBQUltQixlQUFlSixPQUFPUSxJQUFJLENBQUM7SUFDakMsR0FBRztRQUFDSjtLQUFjO0lBRWxCZixpRUFBa0JBLENBQUNDLCtEQUFZQSxFQUFFLE9BQU9tQjtZQUVyQkE7UUFEakIsSUFBSSxDQUFDQSxhQUFhSixpQkFBaUI7UUFDbkMsSUFBSSxDQUFDSixjQUFZUSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFDLEtBQUssR0FBRTtnQkFNL0JDO1lBTEosTUFBTSxFQUFFQSxJQUFJLEVBQUUsR0FBRyxNQUFNcEIsbURBQVUsQ0FBQ0MsOERBQWdCQSxFQUFFO2dCQUFFa0IsT0FBT0QsWUFBWUMsS0FBSztZQUFDO1lBQy9FLElBQUksQ0FBQ0MsS0FBS0UsTUFBTSxFQUFFO2dCQUNoQmIsT0FBT1EsSUFBSSxDQUFDO1lBQ2Q7WUFDQU0sUUFBUUMsR0FBRyxDQUFDO2dCQUFFSjtZQUFLO1lBQ25CLEtBQUlBLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTUEsSUFBSSxFQUFFO2dCQUNkLE1BQU0sRUFBRUssRUFBRSxFQUFFQyxJQUFJLEVBQUVQLEtBQUssRUFBRVEsZ0JBQWdCQyxZQUFZLEVBQUVOLE1BQU0sRUFBRSxHQUFHRixLQUFLQSxJQUFJO2dCQUMzRVIsU0FBUztvQkFDUGlCLE1BQU14Qiw0REFBWUEsQ0FBQ3lCLGFBQWE7b0JBQ2hDcEIsVUFBVTt3QkFDUmU7d0JBQUlDO3dCQUFNUDt3QkFBT1M7d0JBQWNOO29CQUNqQztnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBNUIsZ0RBQVNBLENBQUM7UUFDUixJQUFHZ0IsVUFBUztZQUNWSyxPQUFPZ0IsT0FBTyxHQUFHeEIscURBQUVBLENBQUN5QjtZQUNwQmpCLE9BQU9nQixPQUFPLENBQUNFLElBQUksQ0FBQyxZQUFXdkIsU0FBU2UsRUFBRTtZQUMxQ2IsU0FBUztnQkFBQ2lCO1lBQUk7UUFDaEI7SUFDRixHQUFFO1FBQUNuQjtLQUFTO0lBRVpoQixnREFBU0EsQ0FBQztZQVNKaUI7UUFSSixNQUFNdUIsY0FBYztZQUNsQixNQUFNLEVBQ0pkLE1BQU0sRUFBRWUsUUFBUSxFQUFFLEVBQ25CLEdBQUcsTUFBTW5DLGtEQUFTLENBQ2pCLEdBQXlCVSxPQUF0QlIsZ0VBQWtCQSxFQUFDLEtBQWtCUyxPQUFmRCxTQUFTZSxFQUFFLEVBQUMsS0FBc0IsT0FBbkJkLGdCQUFnQmMsRUFBRTtZQUU1RGIsU0FBUztnQkFBRWlCLE1BQU14Qiw0REFBWUEsQ0FBQ2dDLFlBQVk7Z0JBQUVGO1lBQVM7UUFDdkQ7UUFDQSxLQUFJeEIsbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCYyxFQUFFLEVBQUU7WUFDdkJTO1FBQ0Y7SUFDRixHQUFHO1FBQUN2QjtLQUFnQjtJQUdwQixxQkFBTztrQkFDTCw0RUFBQzJCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDM0MsMERBQVFBOzs7OztnQkFFUGUsZ0NBQWtCLDhEQUFDTCxtREFBSUE7Ozs7eUNBQU0sOERBQUNULDhDQUFLQTs7Ozs7Ozs7Ozs7O0FBSTNDO0dBN0RTVzs7UUFDUUwsa0RBQVNBO1FBQzBCQyxtRUFBZ0JBOzs7S0FGM0RJO0FBK0RULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUsIEdFVF9NRVNTQUdFU19ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9DaGF0L0NoYXRcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3sgdXNlckluZm8sIGN1cnJlbnRDaGF0VXNlciB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLCBzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVkaXJlY3RMb2dpbikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIH0sIFtyZWRpcmVjdExvZ2luXSlcblxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoZmlyZWJhc2VBdXRoLCBhc3luYyAoY3VycmVudFVzZXIpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSBzZXRSZWRpcmVjdExvZ2luKHRydWUpO1xuICAgIGlmICghdXNlckluZm8gJiYgY3VycmVudFVzZXI/LmVtYWlsKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoQ0hFQ0tfVVNFUl9ST1VURSwgeyBlbWFpbDogY3VycmVudFVzZXIuZW1haWwgfSk7XG4gICAgICBpZiAoIWRhdGEuc3RhdHVzKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG4gICAgICBpZiAoZGF0YT8uZGF0YSkge1xuICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZVBpY3R1cmU6IHByb2ZpbGVJbWFnZSwgc3RhdHVzIH0gPSBkYXRhLmRhdGE7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfSU5GTyxcbiAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlSW1hZ2UsIHN0YXR1cyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKHVzZXJJbmZvKXtcbiAgICAgIHNvY2tldC5jdXJyZW50ID0gaW8oSE9TVCk7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiYWRkLXVzZXJcIix1c2VySW5mby5pZCk7XG4gICAgICBkaXNwYXRjaCh7dHlwZX0pXG4gICAgfVxuICB9LFt1c2VySW5mb10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlcyB9LFxuICAgICAgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYCR7R0VUX01FU1NBR0VTX1JPVVRFfS8ke3VzZXJJbmZvLmlkfS8ke2N1cnJlbnRDaGF0VXNlci5pZH1gXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VTLCBtZXNzYWdlcyB9KVxuICAgIH07XG4gICAgaWYgKGN1cnJlbnRDaGF0VXNlcj8uaWQpIHtcbiAgICAgIGdldE1lc3NhZ2VzKCk7XG4gICAgfVxuICB9LCBbY3VycmVudENoYXRVc2VyXSk7XG5cblxuICByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8Q2hhdExpc3QgLz5cbiAgICAgIHtcbiAgICAgICAgY3VycmVudENoYXRVc2VyID8gPENoYXQgLz4gOiA8RW1wdHkgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGF0TGlzdCIsIkVtcHR5Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZmlyZWJhc2VBdXRoIiwiYXhpb3MiLCJDSEVDS19VU0VSX1JPVVRFIiwiR0VUX01FU1NBR0VTX1JPVVRFIiwidXNlUm91dGVyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXQiLCJpbyIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsImRpc3BhdGNoIiwicmVkaXJlY3RMb2dpbiIsInNldFJlZGlyZWN0TG9naW4iLCJzb2NrZXQiLCJ1c2VSZWYiLCJwdXNoIiwiY3VycmVudFVzZXIiLCJlbWFpbCIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInByb2ZpbGVQaWN0dXJlIiwicHJvZmlsZUltYWdlIiwidHlwZSIsIlNFVF9VU0VSX0lORk8iLCJjdXJyZW50IiwiSE9TVCIsImVtaXQiLCJnZXRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiZ2V0IiwiU0VUX01FU1NBR0VTIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});