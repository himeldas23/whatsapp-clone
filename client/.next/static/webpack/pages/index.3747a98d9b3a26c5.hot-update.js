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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 43,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"zUZ9QzSq9fDgVf+DMa+5SnUzNfg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUNmO0FBQ3VCO0FBQ0c7QUFDNUI7QUFDMkI7QUFDYjtBQUNrQjtBQUNQO0FBQ3BCO0FBRS9CLFNBQVNhOztJQUNQLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLENBQUMsRUFBRU0sUUFBUSxFQUFFQyxlQUFlLEVBQUMsRUFBRUMsU0FBUyxHQUFHUCx1RUFBZ0JBO0lBQ2pFLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJaUIsZUFBZUosT0FBT00sSUFBSSxDQUFDO0lBQ2pDLEdBQUc7UUFBQ0Y7S0FBYztJQUVsQmIsaUVBQWtCQSxDQUFDQywrREFBWUEsRUFBRSxPQUFPZTtZQUVyQkE7UUFEakIsSUFBSSxDQUFDQSxhQUFhRixpQkFBaUI7UUFDbkMsSUFBSSxDQUFDSixjQUFZTSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFDLEtBQUssR0FBRTtnQkFNL0JDO1lBTEosTUFBTSxFQUFFQSxJQUFJLEVBQUUsR0FBRyxNQUFNaEIsbURBQVUsQ0FBQ0MsOERBQWdCQSxFQUFFO2dCQUFFYyxPQUFPRCxZQUFZQyxLQUFLO1lBQUM7WUFDL0UsSUFBSSxDQUFDQyxLQUFLRSxNQUFNLEVBQUU7Z0JBQ2hCWCxPQUFPTSxJQUFJLENBQUM7WUFDZDtZQUNBTSxRQUFRQyxHQUFHLENBQUM7Z0JBQUVKO1lBQUs7WUFDbkIsS0FBSUEsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNQSxJQUFJLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFSyxFQUFFLEVBQUVDLElBQUksRUFBRVAsS0FBSyxFQUFFUSxnQkFBZ0JDLFlBQVksRUFBRU4sTUFBTSxFQUFFLEdBQUdGLEtBQUtBLElBQUk7Z0JBQzNFTixTQUFTO29CQUNQZSxNQUFNckIsNERBQVlBLENBQUNzQixhQUFhO29CQUNoQ2xCLFVBQVU7d0JBQ1JhO3dCQUFJQzt3QkFBTVA7d0JBQU9TO3dCQUFjTjtvQkFDakM7Z0JBQ0Y7WUFDRjtRQUNGO0lBRUY7SUFDQSxxQkFBTztrQkFDTCw0RUFBQ1M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNoQywwREFBUUE7Ozs7OzhCQUdULDhEQUFDUyxtREFBSUE7Ozs7Ozs7Ozs7OztBQUdYO0dBckNTQzs7UUFDUUosa0RBQVNBO1FBQ3lCQyxtRUFBZ0JBOzs7S0FGMURHO0FBdUNULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt7IHVzZXJJbmZvLCBjdXJyZW50Q2hhdFVzZXJ9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLCBzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWRpcmVjdExvZ2luKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgfSwgW3JlZGlyZWN0TG9naW5dKVxuXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChmaXJlYmFzZUF1dGgsIGFzeW5jIChjdXJyZW50VXNlcikgPT4ge1xuICAgIGlmICghY3VycmVudFVzZXIpIHNldFJlZGlyZWN0TG9naW4odHJ1ZSk7XG4gICAgaWYgKCF1c2VySW5mbyAmJiBjdXJyZW50VXNlcj8uZW1haWwpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFLCB7IGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCB9KTtcbiAgICAgIGlmICghZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcbiAgICAgIGlmIChkYXRhPy5kYXRhKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlUGljdHVyZTogcHJvZmlsZUltYWdlLCBzdGF0dXMgfSA9IGRhdGEuZGF0YTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9JTkZPLFxuICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVJbWFnZSwgc3RhdHVzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcbiAgcmV0dXJuIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPENoYXRMaXN0IC8+XG5cbiAgICAgIHsvKiA8RW1wdHkgLz4gKi99XG4gICAgICA8Q2hhdC8+XG4gICAgPC9kaXY+XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hhdExpc3QiLCJFbXB0eSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImZpcmViYXNlQXV0aCIsImF4aW9zIiwiQ0hFQ0tfVVNFUl9ST1VURSIsInVzZVJvdXRlciIsInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJDaGF0IiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInB1c2giLCJjdXJyZW50VXNlciIsImVtYWlsIiwiZGF0YSIsInBvc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJuYW1lIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSW1hZ2UiLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});