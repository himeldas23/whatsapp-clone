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

/***/ "./src/components/Call/VoiceCall.jsx":
/*!*******************************************!*\
  !*** ./src/components/Call/VoiceCall.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Container = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_Call_Container_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Container */ \"./src/components/Call/Container.jsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"../components/Call/VoiceCall.jsx -> \" + \"./Container\"\n        ]\n    },\n    ssr: false\n});\n_c = Container;\nfunction VoiceCall() {\n    _s();\n    const [{ voiceCall, socket, userInfo }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (voiceCall.type === \"out-going\") {\n            socket.current.emit;\n        }\n    }, [\n        voiceCall\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        data: voiceCall\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/VoiceCall.jsx\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, this);\n}\n_s(VoiceCall, \"ANewlwnLylXxk2RLyFRhNSVuBkE=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c1 = VoiceCall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoiceCall);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"VoiceCall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxsL1ZvaWNlQ2FsbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUN2QjtBQUNNO0FBQ3pDLE1BQU1JLFlBQVlILG1EQUFPQSxDQUFDLElBQU0sd0xBQXFCOzs7Ozs7SUFBSUksS0FBSzs7S0FBeEREO0FBR04sU0FBU0U7O0lBQ1AsTUFBTSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsQ0FBQyxHQUFHVCx1RUFBZ0JBO0lBRTFERyxnREFBU0EsQ0FBQztRQUNSLElBQUdJLFVBQVVHLElBQUksS0FBRyxhQUFZO1lBQzlCRixPQUFPRyxPQUFPLENBQUNDLElBQUk7UUFDckI7SUFDRixHQUFFO1FBQUNMO0tBQVU7SUFDYixxQkFBTyw4REFBQ0g7UUFBVVMsTUFBTU47Ozs7OztBQUMxQjtHQVRTRDs7UUFDbUNOLG1FQUFnQkE7OztNQURuRE07QUFXVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYWxsL1ZvaWNlQ2FsbC5qc3g/OGM4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IENvbnRhaW5lciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9Db250YWluZXJcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxuXG5mdW5jdGlvbiBWb2ljZUNhbGwoKSB7XG4gIGNvbnN0IFt7IHZvaWNlQ2FsbCwgc29ja2V0LCB1c2VySW5mbyB9XSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZih2b2ljZUNhbGwudHlwZT09PVwib3V0LWdvaW5nXCIpe1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdFxuICAgIH1cbiAgfSxbdm9pY2VDYWxsXSlcbiAgcmV0dXJuIDxDb250YWluZXIgZGF0YT17dm9pY2VDYWxsfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVm9pY2VDYWxsO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJkeW5hbWljIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJzc3IiLCJWb2ljZUNhbGwiLCJ2b2ljZUNhbGwiLCJzb2NrZXQiLCJ1c2VySW5mbyIsInR5cGUiLCJjdXJyZW50IiwiZW1pdCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Call/VoiceCall.jsx\n"));

/***/ })

});