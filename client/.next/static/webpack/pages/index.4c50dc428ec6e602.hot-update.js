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

/***/ "./src/utils/ApiRoutes.js":
/*!********************************!*\
  !*** ./src/utils/ApiRoutes.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CHECK_USER_ROUTE: function() { return /* binding */ CHECK_USER_ROUTE; },\n/* harmony export */   GET_ALL_CONTACTS: function() { return /* binding */ GET_ALL_CONTACTS; },\n/* harmony export */   HOST: function() { return /* binding */ HOST; },\n/* harmony export */   ONBOARD_USER_ROUTE: function() { return /* binding */ ONBOARD_USER_ROUTE; }\n/* harmony export */ });\nconst HOST = \"http://localhost:3005\";\nconst AUTH_ROUTE = \"\".concat(HOST, \"/api/auth\");\nconst MESSAGES_ROUTE = \"\".concat(HOST, \"/api/messages\");\nconst CHECK_USER_ROUTE = \"\".concat(AUTH_ROUTE, \"/check-user\");\nconst ONBOARD_USER_ROUTE = \"\".concat(AUTH_ROUTE, \"/onboard-user\");\nconst GET_ALL_CONTACTS = \"\".concat(AUTH_ROUTE, \"/get-contacts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvQXBpUm91dGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxPQUFPLHdCQUF3QjtBQUU1QyxNQUFNQyxhQUFhLEdBQVEsT0FBTEQsTUFBSztBQUMzQixNQUFNRSxpQkFBaUIsR0FBUSxPQUFMRixNQUFLO0FBSXhCLE1BQU1HLG1CQUFtQixHQUFjLE9BQVhGLFlBQVcsZUFBYTtBQUNwRCxNQUFNRyxxQkFBb0IsR0FBYyxPQUFYSCxZQUFXLGlCQUFlO0FBQ3ZELE1BQU1JLG1CQUFrQixHQUFjLE9BQVhKLFlBQVcsaUJBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL0FwaVJvdXRlcy5qcz82ODk0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBIT1NUID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcblxuY29uc3QgQVVUSF9ST1VURSA9IGAke0hPU1R9L2FwaS9hdXRoYDtcbmNvbnN0IE1FU1NBR0VTX1JPVVRFID0gYCR7SE9TVH0vYXBpL21lc3NhZ2VzYDtcblxuXG5cbmV4cG9ydCBjb25zdCBDSEVDS19VU0VSX1JPVVRFID0gYCR7QVVUSF9ST1VURX0vY2hlY2stdXNlcmA7XG5leHBvcnQgY29uc3QgT05CT0FSRF9VU0VSX1JPVVRFID1gJHtBVVRIX1JPVVRFfS9vbmJvYXJkLXVzZXJgO1xuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ09OVEFDVFMgPWAke0FVVEhfUk9VVEV9L2dldC1jb250YWN0c2A7XG5cblxuIl0sIm5hbWVzIjpbIkhPU1QiLCJBVVRIX1JPVVRFIiwiTUVTU0FHRVNfUk9VVEUiLCJDSEVDS19VU0VSX1JPVVRFIiwiT05CT0FSRF9VU0VSX1JPVVRFIiwiR0VUX0FMTF9DT05UQUNUUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/ApiRoutes.js\n"));

/***/ })

});