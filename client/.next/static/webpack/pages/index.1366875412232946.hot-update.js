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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        var _currentUser;\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.email)) {\n            var _data;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            console.log({\n                data\n            });\n            if ((_data = data) === null || _data === void 0 ? void 0 : _data.data) {\n                const { id, name, email, profilePicture: profileImage, status } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Main.jsx\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"EMeP+9stXHd109r/z7/z3jwh4bI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNSO0FBQ2Y7QUFDdUI7QUFDRztBQUM1QjtBQUMyQjtBQUNiO0FBQ2tCO0FBQ1A7QUFFbkQsU0FBU1k7O0lBQ1AsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQyxFQUFFSyxRQUFRLEVBQUUsRUFBRUMsU0FBUyxHQUFHTCx1RUFBZ0JBO0lBQ2pELE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5ERCxnREFBU0EsQ0FBQztRQUNSLElBQUllLGVBQWVILE9BQU9LLElBQUksQ0FBQztJQUNqQyxHQUFHO1FBQUNGO0tBQWM7SUFFbEJYLGlFQUFrQkEsQ0FBQ0MsK0RBQVlBLEVBQUUsT0FBT2E7WUFFckJBO1FBRGpCLElBQUksQ0FBQ0EsYUFBYUYsaUJBQWlCO1FBQ25DLElBQUksQ0FBQ0gsY0FBWUssZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhQyxLQUFLLEdBQUU7Z0JBTS9CQztZQUxKLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUcsTUFBTWQsbURBQVUsQ0FBQ0MsOERBQWdCQSxFQUFFO2dCQUFFWSxPQUFPRCxZQUFZQyxLQUFLO1lBQUM7WUFDL0UsSUFBSSxDQUFDQyxLQUFLRSxNQUFNLEVBQUU7Z0JBQ2hCVixPQUFPSyxJQUFJLENBQUM7WUFDZDtZQUNBTSxRQUFRQyxHQUFHLENBQUM7Z0JBQUVKO1lBQUs7WUFDbkIsS0FBSUEsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNQSxJQUFJLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFSyxFQUFFLEVBQUVDLElBQUksRUFBRVAsS0FBSyxFQUFFUSxnQkFBZ0JDLFlBQVksRUFBRU4sTUFBTSxFQUFFLEdBQUdGLEtBQUtBLElBQUk7Z0JBQzNFTixTQUFTO29CQUNQZSxNQUFNbkIsNERBQVlBLENBQUNvQixhQUFhO29CQUNoQ2pCLFVBQVU7d0JBQ1JZO3dCQUFJQzt3QkFBTVA7d0JBQU9TO3dCQUFjTjtvQkFDakM7Z0JBQ0Y7WUFDRjtRQUNGO0lBRUY7SUFDQSxxQkFBTztrQkFDTCw0RUFBQ1M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUM5QiwwREFBUUE7Ozs7OzhCQUNULDhEQUFDQyw4Q0FBS0E7Ozs7Ozs7Ozs7OztBQUdaO0dBbkNTUTs7UUFDUUgsa0RBQVNBO1FBQ1NDLG1FQUFnQkE7OztLQUYxQ0U7QUFxQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qc3g/MmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuL0NoYXRsaXN0L0NoYXRMaXN0XCI7XG5pbXBvcnQgRW1wdHkgZnJvbSBcIi4vRW1wdHlcIjtcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ0hFQ0tfVVNFUl9ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt7IHVzZXJJbmZvIH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgW3JlZGlyZWN0TG9naW4sIHNldFJlZGlyZWN0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZGlyZWN0TG9naW4pIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9LCBbcmVkaXJlY3RMb2dpbl0pXG5cbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGZpcmViYXNlQXV0aCwgYXN5bmMgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikgc2V0UmVkaXJlY3RMb2dpbih0cnVlKTtcbiAgICBpZiAoIXVzZXJJbmZvICYmIGN1cnJlbnRVc2VyPy5lbWFpbCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KENIRUNLX1VTRVJfUk9VVEUsIHsgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsIH0pO1xuICAgICAgaWYgKCFkYXRhLnN0YXR1cykge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xuICAgICAgaWYgKGRhdGE/LmRhdGEpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVQaWN0dXJlOiBwcm9maWxlSW1hZ2UsIHN0YXR1cyB9ID0gZGF0YS5kYXRhO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIGlkLCBuYW1lLCBlbWFpbCwgcHJvZmlsZUltYWdlLCBzdGF0dXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xuICByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8Q2hhdExpc3QgLz5cbiAgICAgIDxFbXB0eSAvPlxuICAgIDwvZGl2PlxuICA8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXRMaXN0IiwiRW1wdHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiZGlzcGF0Y2giLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInB1c2giLCJjdXJyZW50VXNlciIsImVtYWlsIiwiZGF0YSIsInBvc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJuYW1lIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSW1hZ2UiLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});