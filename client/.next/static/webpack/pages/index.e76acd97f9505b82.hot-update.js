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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo, currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 27\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 38\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"pzVpIEEhqbHl2sxcnWJdj3kChQ8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUNmO0FBQ3VCO0FBQ0c7QUFDNUI7QUFDMkI7QUFDYjtBQUNrQjtBQUNQO0FBQ3BCO0FBRS9CLFNBQVNhOztJQUNQLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLENBQUMsRUFBRU0sUUFBUSxFQUFFQyxlQUFlLEVBQUUsRUFBRUMsU0FBUyxHQUFHUCx1RUFBZ0JBO0lBQ2xFLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJaUIsZUFBZUosT0FBT00sSUFBSSxDQUFDO0lBQ2pDLEdBQUc7UUFBQ0Y7S0FBYztJQUVsQmIsaUVBQWtCQSxDQUFDQywrREFBWUEsRUFBRSxPQUFPZTtZQUVyQkE7UUFEakIsSUFBSSxDQUFDQSxhQUFhRixpQkFBaUI7UUFDbkMsSUFBSSxDQUFDSixjQUFZTSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFDLEtBQUssR0FBRTtnQkFNL0JDO1lBTEosTUFBTSxFQUFFQSxJQUFJLEVBQUUsR0FBRyxNQUFNaEIsbURBQVUsQ0FBQ0MsOERBQWdCQSxFQUFFO2dCQUFFYyxPQUFPRCxZQUFZQyxLQUFLO1lBQUM7WUFDL0UsSUFBSSxDQUFDQyxLQUFLRSxNQUFNLEVBQUU7Z0JBQ2hCWCxPQUFPTSxJQUFJLENBQUM7WUFDZDtZQUNBTSxRQUFRQyxHQUFHLENBQUM7Z0JBQUVKO1lBQUs7WUFDbkIsS0FBSUEsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNQSxJQUFJLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFSyxFQUFFLEVBQUVDLElBQUksRUFBRVAsS0FBSyxFQUFFUSxnQkFBZ0JDLFlBQVksRUFBRU4sTUFBTSxFQUFFLEdBQUdGLEtBQUtBLElBQUk7Z0JBQzNFTixTQUFTO29CQUNQZSxNQUFNckIsNERBQVlBLENBQUNzQixhQUFhO29CQUNoQ2xCLFVBQVU7d0JBQ1JhO3dCQUFJQzt3QkFBTVA7d0JBQU9TO3dCQUFjTjtvQkFDakM7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7SUFFQXhCLGdEQUFTQSxDQUFDLEtBRVY7SUFDQSxxQkFBTztrQkFDTCw0RUFBQ2lDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDaEMsMERBQVFBOzs7OztnQkFFUGEsZ0NBQWtCLDhEQUFDSixtREFBSUE7Ozs7eUNBQU0sOERBQUNSLDhDQUFLQTs7Ozs7Ozs7Ozs7O0FBSTNDO0dBeENTUzs7UUFDUUosa0RBQVNBO1FBQzBCQyxtRUFBZ0JBOzs7S0FGM0RHO0FBMENULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt7IHVzZXJJbmZvLCBjdXJyZW50Q2hhdFVzZXIgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbcmVkaXJlY3RMb2dpbiwgc2V0UmVkaXJlY3RMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVkaXJlY3RMb2dpbikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIH0sIFtyZWRpcmVjdExvZ2luXSlcblxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoZmlyZWJhc2VBdXRoLCBhc3luYyAoY3VycmVudFVzZXIpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSBzZXRSZWRpcmVjdExvZ2luKHRydWUpO1xuICAgIGlmICghdXNlckluZm8gJiYgY3VycmVudFVzZXI/LmVtYWlsKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoQ0hFQ0tfVVNFUl9ST1VURSwgeyBlbWFpbDogY3VycmVudFVzZXIuZW1haWwgfSk7XG4gICAgICBpZiAoIWRhdGEuc3RhdHVzKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG4gICAgICBpZiAoZGF0YT8uZGF0YSkge1xuICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZVBpY3R1cmU6IHByb2ZpbGVJbWFnZSwgc3RhdHVzIH0gPSBkYXRhLmRhdGE7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfSU5GTyxcbiAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlSW1hZ2UsIHN0YXR1cyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFxuICB9KVxuICByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8Q2hhdExpc3QgLz5cbiAgICAgIHtcbiAgICAgICAgY3VycmVudENoYXRVc2VyID8gPENoYXQgLz4gOiA8RW1wdHkgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGF0TGlzdCIsIkVtcHR5Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZmlyZWJhc2VBdXRoIiwiYXhpb3MiLCJDSEVDS19VU0VSX1JPVVRFIiwidXNlUm91dGVyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXQiLCJNYWluIiwicm91dGVyIiwidXNlckluZm8iLCJjdXJyZW50Q2hhdFVzZXIiLCJkaXNwYXRjaCIsInJlZGlyZWN0TG9naW4iLCJzZXRSZWRpcmVjdExvZ2luIiwicHVzaCIsImN1cnJlbnRVc2VyIiwiZW1haWwiLCJkYXRhIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInByb2ZpbGVJbWFnZSIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});