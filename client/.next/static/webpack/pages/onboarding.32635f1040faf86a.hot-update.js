"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Avatar(param) {\n    let { type, image, setImage } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuVisibleCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center\",\n            children: isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                coordinates: contextMenuVisibleCordinates,\n                isContextMenuVisible: isContextMenuVisible,\n                setIsContextMenuVisible: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/common/Avatar.jsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Avatar, \"VP6EBPNXVb/uMSYEodIh2NAIKSo=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ1Q7QUFDVztBQUNGO0FBRXhDLFNBQVNLLE9BQU8sS0FBeUI7UUFBekIsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUF6Qjs7SUFDZCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxzQkFBc0JDLHdCQUF3QixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRSxNQUFNLENBQUNZLDhCQUE4QkMseUJBQXlCLEdBQUdiLCtDQUFRQSxDQUFDO1FBQ3hFYyxHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUVBLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkEsRUFBRUMsY0FBYztRQUNoQkwseUJBQXlCO1lBQUVDLEdBQUdHLEVBQUVFLEtBQUs7WUFBRUosR0FBR0UsRUFBRUcsS0FBSztRQUFDO1FBQ2xEVCx3QkFBd0I7SUFDMUI7SUFFQSxNQUFNVSxxQkFBcUI7UUFDekI7WUFBRUMsTUFBTTtZQUFjQyxVQUFVLEtBQU87UUFBRTtLQUMxQztJQUVELHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUVaZixzQ0FDQyw4REFBQ1Asb0RBQVdBO2dCQUNWdUIsU0FBU0w7Z0JBQ1RNLGFBQWFmO2dCQUNiRixzQkFBc0JBO2dCQUN0QkMseUJBQXlCQTs7Ozs7Ozs7Ozs7O0FBTXJDO0dBakNTUDtLQUFBQTtBQW1DVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGYUNhbWVyYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5cbmZ1bmN0aW9uIEF2YXRhcih7IHR5cGUsIGltYWdlLCBzZXRJbWFnZSB9KSB7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb250ZXh0TWVudVZpc2libGUsIHNldElzQ29udGV4dE1lbnVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRleHRNZW51VmlzaWJsZUNvcmRpbmF0ZXMsIHNldENvbnRleHRNZW51Q29yZGluYXRlc10gPSB1c2VTdGF0ZSh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICB9KTtcblxuICBjb25zdCBzaG93Q29udGV4dE1lbnUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMoeyB4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZIH0pO1xuICAgIHNldElzQ29udGV4dE1lbnVWaXNpYmxlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRleHRNZW51T3B0aW9ucyA9IFtcbiAgICB7IG5hbWU6IFwiVGFrZSBQaG90b1wiLCBjYWxsYmFjazogKCkgPT4ge30gfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgey8qIC4uLiAqL31cbiAgICAgICAge2lzQ29udGV4dE1lbnVWaXNpYmxlICYmIChcbiAgICAgICAgICA8Q29udGV4dE1lbnVcbiAgICAgICAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cbiAgICAgICAgICAgIGNvb3JkaW5hdGVzPXtjb250ZXh0TWVudVZpc2libGVDb3JkaW5hdGVzfVxuICAgICAgICAgICAgaXNDb250ZXh0TWVudVZpc2libGU9e2lzQ29udGV4dE1lbnVWaXNpYmxlfSAvLyBGaXggdGhpcyBsaW5lXG4gICAgICAgICAgICBzZXRJc0NvbnRleHRNZW51VmlzaWJsZT17c2V0SXNDb250ZXh0TWVudVZpc2libGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiRmFDYW1lcmEiLCJDb250ZXh0TWVudSIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudVZpc2libGVDb3JkaW5hdGVzIiwic2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzIiwieCIsInkiLCJzaG93Q29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWCIsInBhZ2VZIiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsImNvb3JkaW5hdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});