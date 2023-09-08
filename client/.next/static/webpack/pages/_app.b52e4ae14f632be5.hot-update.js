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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialState: function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/context/constants.js\");\n\nconst initialState = {\n    userInfo: undefined,\n    newUser: false,\n    contactsPage: false,\n    currentChatUser: undefined,\n    messages: [],\n    socket: undefined,\n    messagesSearch: false,\n    userContacts: [],\n    onlineUsers: [],\n    filteredContacts: [],\n    videoCall: undefined,\n    voiceCall: undefined,\n    incomingVoiceCall: undefined,\n    incomingVideoCall: undefined\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_INFO:\n            return {\n                ...state,\n                userInfo: action.userInfo\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_USER:\n            return {\n                ...state,\n                newUser: action.newUser\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_ALL_CONTACTS_PAGE:\n            return {\n                ...state,\n                contactsPage: !state.contactsPage\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.CHANGE_CURRENT_CHAT_USER:\n            return {\n                ...state,\n                currentChatUser: action.user\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_MESSAGES:\n            return {\n                ...state,\n                messages: action.messages\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_SOCKET:\n            return {\n                ...state,\n                socket: action.socket\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.ADD_MESSAGE:\n            return {\n                ...state,\n                messages: [\n                    ...state.messages,\n                    action.newMessage\n                ]\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_MESSAGE_SEARCH:\n            return {\n                ...state,\n                messagesSearch: !state.messagesSearch\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_CONTACTS:\n            return {\n                ...state,\n                userContacts: action.userContacts\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_ONLINE_USERS:\n            return {\n                ...state,\n                onlineUsers: action.onlineUsers\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_CONTACT_SEARCH:\n            {\n                const filteredContacts = state.userContacts.filter((contact)=>contact.name.toLowerCase().includes(action.contactSearch.toLowerCase()));\n                return {\n                    ...state,\n                    contactSearch: action.contactSearch,\n                    filteredContacts\n                };\n            }\n            ;\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_VIDEO_CALL:\n            return {\n                ...state,\n                videoCall: action.videoCall\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_VOICE_CALL:\n            return {\n                ...state,\n                voiceCall: action.voiceCall\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_INCOMING_VOICE_CALL:\n            return {\n                ...state,\n                incomingVoiceCall: action.incomingVoiceCall\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_INCOMING_VIDEO_CALL:\n            return {\n                ...state,\n                incomingVideoCall: action.incomingVideoCall\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.END_CALL:\n            return {\n                ...state,\n                voiceCall: undefined,\n                videoCall: undefined,\n                incomingVideoCall: undefined,\n                incomingVoiceCall: undefined\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvQztRQUVKLEtBQUtmLG9EQUFZQSxDQUFDMkMsdUJBQXVCO1lBQ3JDLE9BQU87Z0JBQ0gsR0FBR3pCLEtBQUs7Z0JBQ1JGLG1CQUFtQkcsT0FBT0gsaUJBQWlCO1lBQy9DO1FBRUosS0FBS2hCLG9EQUFZQSxDQUFDNEMsUUFBUTtZQUN0QixPQUFPO2dCQUNILEdBQUcxQixLQUFLO2dCQUNSSixXQUFXWDtnQkFDWFUsV0FBV1Y7Z0JBQ1hhLG1CQUFtQmI7Z0JBQ25CWSxtQkFBbUJaO1lBQ3ZCO1FBRUo7WUFDSSxPQUFPZTtJQUNmO0FBQ0o7QUFDQSwrREFBZUQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9TdGF0ZVJlZHVjZXJzLmpzPzAwNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlckluZm86IHVuZGVmaW5lZCxcbiAgICBuZXdVc2VyOiBmYWxzZSxcbiAgICBjb250YWN0c1BhZ2U6IGZhbHNlLFxuICAgIGN1cnJlbnRDaGF0VXNlcjogdW5kZWZpbmVkLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBzb2NrZXQ6IHVuZGVmaW5lZCxcbiAgICBtZXNzYWdlc1NlYXJjaDogZmFsc2UsXG4gICAgdXNlckNvbnRhY3RzOiBbXSxcbiAgICBvbmxpbmVVc2VyczogW10sXG4gICAgZmlsdGVyZWRDb250YWN0czogW10sXG4gICAgdmlkZW9DYWxsOiB1bmRlZmluZWQsXG4gICAgdm9pY2VDYWxsOiB1bmRlZmluZWQsXG4gICAgaW5jb21pbmdWb2ljZUNhbGw6IHVuZGVmaW5lZCxcbiAgICBpbmNvbWluZ1ZpZGVvQ2FsbDogdW5kZWZpbmVkLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9JTkZPOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c2VySW5mbzogYWN0aW9uLnVzZXJJbmZvLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9VU0VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBuZXdVc2VyOiBhY3Rpb24ubmV3VXNlcixcbiAgICAgICAgICAgIH07XG5cblxuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfQUxMX0NPTlRBQ1RTX1BBR0U6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzUGFnZTogIXN0YXRlLmNvbnRhY3RzUGFnZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLkNIQU5HRV9DVVJSRU5UX0NIQVRfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY3VycmVudENoYXRVc2VyOiBhY3Rpb24udXNlcixcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogYWN0aW9uLm1lc3NhZ2VzLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfU09DS0VUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBzb2NrZXQ6IGFjdGlvbi5zb2NrZXQsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLkFERF9NRVNTQUdFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogWy4uLnN0YXRlLm1lc3NhZ2VzLCBhY3Rpb24ubmV3TWVzc2FnZV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFX1NFQVJDSDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNTZWFyY2g6ICFzdGF0ZS5tZXNzYWdlc1NlYXJjaCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfQ09OVEFDVFM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJDb250YWN0czogYWN0aW9uLnVzZXJDb250YWN0cyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuU0VUX09OTElORV9VU0VSUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgb25saW5lVXNlcnM6IGFjdGlvbi5vbmxpbmVVc2VycyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuU0VUX0NPTlRBQ1RfU0VBUkNIOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkQ29udGFjdHMgPSBzdGF0ZS51c2VyQ29udGFjdHMuZmlsdGVyKChjb250YWN0KSA9PiBjb250YWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhY3Rpb24uY29udGFjdFNlYXJjaC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RTZWFyY2g6IGFjdGlvbi5jb250YWN0U2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZENvbnRhY3RzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9WSURFT19DQUxMOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB2aWRlb0NhbGw6IGFjdGlvbi52aWRlb0NhbGwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9WT0lDRV9DQUxMOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB2b2ljZUNhbGw6IGFjdGlvbi52b2ljZUNhbGwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9JTkNPTUlOR19WT0lDRV9DQUxMOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpbmNvbWluZ1ZvaWNlQ2FsbDogYWN0aW9uLmluY29taW5nVm9pY2VDYWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfSU5DT01JTkdfVklERU9fQ0FMTDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaW5jb21pbmdWaWRlb0NhbGw6IGFjdGlvbi5pbmNvbWluZ1ZpZGVvQ2FsbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuRU5EX0NBTEw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHZvaWNlQ2FsbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHZpZGVvQ2FsbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGluY29taW5nVmlkZW9DYWxsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgaW5jb21pbmdWb2ljZUNhbGw6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJuYW1lcyI6WyJyZWR1Y2VyQ2FzZXMiLCJpbml0aWFsU3RhdGUiLCJ1c2VySW5mbyIsInVuZGVmaW5lZCIsIm5ld1VzZXIiLCJjb250YWN0c1BhZ2UiLCJjdXJyZW50Q2hhdFVzZXIiLCJtZXNzYWdlcyIsInNvY2tldCIsIm1lc3NhZ2VzU2VhcmNoIiwidXNlckNvbnRhY3RzIiwib25saW5lVXNlcnMiLCJmaWx0ZXJlZENvbnRhY3RzIiwidmlkZW9DYWxsIiwidm9pY2VDYWxsIiwiaW5jb21pbmdWb2ljZUNhbGwiLCJpbmNvbWluZ1ZpZGVvQ2FsbCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiU0VUX1VTRVJfVVNFUiIsIlNFVF9BTExfQ09OVEFDVFNfUEFHRSIsIkNIQU5HRV9DVVJSRU5UX0NIQVRfVVNFUiIsInVzZXIiLCJTRVRfTUVTU0FHRVMiLCJTRVRfU09DS0VUIiwiQUREX01FU1NBR0UiLCJuZXdNZXNzYWdlIiwiU0VUX01FU1NBR0VfU0VBUkNIIiwiU0VUX1VTRVJfQ09OVEFDVFMiLCJTRVRfT05MSU5FX1VTRVJTIiwiU0VUX0NPTlRBQ1RfU0VBUkNIIiwiZmlsdGVyIiwiY29udGFjdCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY29udGFjdFNlYXJjaCIsIlNFVF9WSURFT19DQUxMIiwiU0VUX1ZPSUNFX0NBTEwiLCJTRVRfSU5DT01JTkdfVk9JQ0VfQ0FMTCIsIlNFVF9JTkNPTUlOR19WSURFT19DQUxMIiwiRU5EX0NBTEwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/StateReducers.js\n"));

/***/ })

});