"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/StateReducers.js":
/*!**************************************!*\
  !*** ./src/context/StateReducers.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialState: function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/context/constants.js\");\n\nconst initialState = {\n    userInfo: undefined,\n    newUser: false,\n    contactsPage: false,\n    currentChatUser: undefined,\n    messages: [],\n    socket: undefined,\n    messagesSearch: false\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_INFO:\n            return {\n                ...state,\n                userInfo: action.userInfo\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_USER:\n            return {\n                ...state,\n                newUser: action.newUser\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_ALL_CONTACTS_PAGE:\n            return {\n                ...state,\n                contactsPage: !state.contactsPage\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.CHANGE_CURRENT_CHAT_USER:\n            return {\n                ...state,\n                currentChatUser: action.user\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_MESSAGES:\n            return {\n                ...state,\n                messages: action.messages\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_SOCKET:\n            return {\n                ...state,\n                socket: action.socket\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.ADD_MESSAGE:\n            return {\n                ...state,\n                messages: [\n                    ...state.messages,\n                    action.newMessage\n                ]\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_MESSAGE_SEARCH:\n            return {\n                ...state,\n                messagesSearch: !state.m\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TdGF0ZVJlZHVjZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRXBDLE1BQU1DLGVBQWU7SUFDeEJDLFVBQVVDO0lBQ1ZDLFNBQVM7SUFDVEMsY0FBYztJQUNkQyxpQkFBaUJIO0lBQ2pCSSxVQUFVLEVBQUU7SUFDWkMsUUFBUUw7SUFDUk0sZ0JBQWdCO0FBQ3BCLEVBQUU7QUFFRixNQUFNQyxVQUFVLENBQUNDLE9BQU9DO0lBQ3BCLE9BQVFBLE9BQU9DLElBQUk7UUFDZixLQUFLYixvREFBWUEsQ0FBQ2MsYUFBYTtZQUMzQixPQUFPO2dCQUNILEdBQUdILEtBQUs7Z0JBQ1JULFVBQVVVLE9BQU9WLFFBQVE7WUFDN0I7UUFFSixLQUFLRixvREFBWUEsQ0FBQ2UsYUFBYTtZQUMzQixPQUFPO2dCQUNILEdBQUdKLEtBQUs7Z0JBQ1JQLFNBQVNRLE9BQU9SLE9BQU87WUFDM0I7UUFHSixLQUFLSixvREFBWUEsQ0FBQ2dCLHFCQUFxQjtZQUNuQyxPQUFPO2dCQUNILEdBQUdMLEtBQUs7Z0JBQ1JOLGNBQWMsQ0FBQ00sTUFBTU4sWUFBWTtZQUNyQztRQUNKLEtBQUtMLG9EQUFZQSxDQUFDaUIsd0JBQXdCO1lBQ3RDLE9BQU87Z0JBQ0gsR0FBR04sS0FBSztnQkFDUkwsaUJBQWlCTSxPQUFPTSxJQUFJO1lBQ2hDO1FBRUosS0FBS2xCLG9EQUFZQSxDQUFDbUIsWUFBWTtZQUMxQixPQUFPO2dCQUNILEdBQUdSLEtBQUs7Z0JBQ1JKLFVBQVVLLE9BQU9MLFFBQVE7WUFDN0I7UUFFSixLQUFLUCxvREFBWUEsQ0FBQ29CLFVBQVU7WUFDeEIsT0FBTztnQkFDSCxHQUFHVCxLQUFLO2dCQUNSSCxRQUFRSSxPQUFPSixNQUFNO1lBQ3pCO1FBRUosS0FBS1Isb0RBQVlBLENBQUNxQixXQUFXO1lBQ3pCLE9BQU87Z0JBQ0gsR0FBR1YsS0FBSztnQkFDUkosVUFBVTt1QkFBSUksTUFBTUosUUFBUTtvQkFBRUssT0FBT1UsVUFBVTtpQkFBQztZQUNwRDtRQUNKLEtBQUt0QixvREFBWUEsQ0FBQ3VCLGtCQUFrQjtZQUNoQyxPQUFPO2dCQUNILEdBQUdaLEtBQUs7Z0JBQ1JGLGdCQUFnQixDQUFDRSxNQUFNYSxDQUFDO1lBQzVCO1FBRUo7WUFDSSxPQUFPYjtJQUNmO0FBQ0o7QUFDQSwrREFBZUQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9TdGF0ZVJlZHVjZXJzLmpzPzAwNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlckluZm86IHVuZGVmaW5lZCxcbiAgICBuZXdVc2VyOiBmYWxzZSxcbiAgICBjb250YWN0c1BhZ2U6IGZhbHNlLFxuICAgIGN1cnJlbnRDaGF0VXNlcjogdW5kZWZpbmVkLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzb2NrZXQ6IHVuZGVmaW5lZCxcbiAgICBtZXNzYWdlc1NlYXJjaDogZmFsc2UsXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJJbmZvOiBhY3Rpb24udXNlckluZm8sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9VU0VSX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG5ld1VzZXI6IGFjdGlvbi5uZXdVc2VyLFxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9BTExfQ09OVEFDVFNfUEFHRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY29udGFjdHNQYWdlOiAhc3RhdGUuY29udGFjdHNQYWdlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuQ0hBTkdFX0NVUlJFTlRfQ0hBVF9VU0VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2hhdFVzZXI6IGFjdGlvbi51c2VyLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfTUVTU0FHRVM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBhY3Rpb24ubWVzc2FnZXMsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9TT0NLRVQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNvY2tldDogYWN0aW9uLnNvY2tldCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuQUREX01FU1NBR0U6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uc3RhdGUubWVzc2FnZXMsIGFjdGlvbi5uZXdNZXNzYWdlXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VfU0VBUkNIOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlc1NlYXJjaDogIXN0YXRlLm1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJuYW1lcyI6WyJyZWR1Y2VyQ2FzZXMiLCJpbml0aWFsU3RhdGUiLCJ1c2VySW5mbyIsInVuZGVmaW5lZCIsIm5ld1VzZXIiLCJjb250YWN0c1BhZ2UiLCJjdXJyZW50Q2hhdFVzZXIiLCJtZXNzYWdlcyIsInNvY2tldCIsIm1lc3NhZ2VzU2VhcmNoIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9VU0VSX0lORk8iLCJTRVRfVVNFUl9VU0VSIiwiU0VUX0FMTF9DT05UQUNUU19QQUdFIiwiQ0hBTkdFX0NVUlJFTlRfQ0hBVF9VU0VSIiwidXNlciIsIlNFVF9NRVNTQUdFUyIsIlNFVF9TT0NLRVQiLCJBRERfTUVTU0FHRSIsIm5ld01lc3NhZ2UiLCJTRVRfTUVTU0FHRV9TRUFSQ0giLCJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/StateReducers.js\n"));

/***/ })

});