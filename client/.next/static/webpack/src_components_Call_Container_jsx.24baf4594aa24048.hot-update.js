"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Call_Container_jsx",{

/***/ "./src/components/Call/Container.jsx":
/*!*******************************************!*\
  !*** ./src/components/Call/Container.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Container(param) {\n    let { data } = param;\n    _s();\n    const [{ socket, userInfo }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [callAccepted, setCallAccepted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const endCall = ()=>{\n        const id = data.id;\n        socket.current.emit(\"reject-voic\");\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducerCases.END_CALL\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-conversation-border border-1 w-full bg-conversation-panel-background flex flex-col h-[100vh] overflow-hidden items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-3 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-5xl\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-lg\",\n                        children: callAccepted && data.callType !== \"video\" ? \"On going Call\" : \"Calling\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this),\n            (!callAccepted || data.callType === \"audio\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: data.profilePicture,\n                    alt: \"avatar\",\n                    height: 300,\n                    width: 300,\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 25,\n                columnNumber: 54\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-16 w-16 bg-red-600 flex items-center justify-center rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineCallEnd, {\n                    className: \"text-3xl cursor-pointer\",\n                    onClick: endCall\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Call/Container.jsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\n_s(Container, \"oB911uDahvARKT+ft1RX9Wa0/LE=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxsL0NvbnRhaW5lci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1A7QUFDcEI7QUFDUztBQUNVO0FBRWxELFNBQVNNLFVBQVUsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUNqQixNQUFNLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsRUFBRUMsU0FBUyxHQUFHVix1RUFBZ0JBO0lBQ3pELE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1TLFVBQVU7UUFDZCxNQUFNQyxLQUFLUCxLQUFLTyxFQUFFO1FBQ2xCTixPQUFPTyxPQUFPLENBQUNDLElBQUksQ0FBQztRQUNwQk4sU0FBUztZQUFDTyxNQUFLaEIsNERBQVlBLENBQUNpQixRQUFRO1FBQUE7SUFDdEM7SUFDQSxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ3BCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFLRCxXQUFVO2tDQUFZYixLQUFLZSxJQUFJOzs7Ozs7a0NBQ3JDLDhEQUFDRDt3QkFBS0QsV0FBVTtrQ0FFWlQsZ0JBQWdCSixLQUFLZ0IsUUFBUSxLQUFLLFVBQVUsa0JBQWtCOzs7Ozs7Ozs7Ozs7WUFJbEUsRUFBQ1osZ0JBQWdCSixLQUFLZ0IsUUFBUSxLQUFLLE9BQU0sbUJBQU0sOERBQUNKO2dCQUFJQyxXQUFVOzBCQUM5RCw0RUFBQ2xCLG1EQUFLQTtvQkFBQ3NCLEtBQUtqQixLQUFLa0IsY0FBYztvQkFBRUMsS0FBSTtvQkFBU0MsUUFBUTtvQkFBS0MsT0FBTztvQkFBS1IsV0FBVTs7Ozs7Ozs7Ozs7MEJBRWpGLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2YsNERBQWdCQTtvQkFBQ2UsV0FBVTtvQkFBMEJTLFNBQVNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdkU7R0F6QlNQOztRQUNrQ04sbUVBQWdCQTs7O0tBRGxETTtBQTJCVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYWxsL0NvbnRhaW5lci5qc3g/MDMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWRPdXRsaW5lQ2FsbEVuZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoeyBkYXRhIH0pIHtcbiAgY29uc3QgW3sgc29ja2V0LCB1c2VySW5mbyB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtjYWxsQWNjZXB0ZWQsIHNldENhbGxBY2NlcHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZW5kQ2FsbCA9ICgpID0+IHtcbiAgICBjb25zdCBpZCA9IGRhdGEuaWQ7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInJlamVjdC12b2ljXCIpXG4gICAgZGlzcGF0Y2goe3R5cGU6cmVkdWNlckNhc2VzLkVORF9DQUxMfSk7XG4gIH1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWNvbnZlcnNhdGlvbi1ib3JkZXIgYm9yZGVyLTEgdy1mdWxsIGJnLWNvbnZlcnNhdGlvbi1wYW5lbC1iYWNrZ3JvdW5kIGZsZXggZmxleC1jb2wgaC1bMTAwdmhdIG92ZXJmbG93LWhpZGRlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNXhsXCI+e2RhdGEubmFtZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBjYWxsQWNjZXB0ZWQgJiYgZGF0YS5jYWxsVHlwZSAhPT0gXCJ2aWRlb1wiID8gXCJPbiBnb2luZyBDYWxsXCIgOiBcIkNhbGxpbmdcIlxuICAgICAgICB9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgeyghY2FsbEFjY2VwdGVkIHx8IGRhdGEuY2FsbFR5cGUgPT09IFwiYXVkaW9cIikgJiYgPGRpdiBjbGFzc05hbWU9XCJteS0yNFwiPlxuICAgICAgPEltYWdlIHNyYz17ZGF0YS5wcm9maWxlUGljdHVyZX0gYWx0PVwiYXZhdGFyXCIgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiLz5cbiAgICAgIDwvZGl2Pn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IGJnLXJlZC02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgIDxNZE91dGxpbmVDYWxsRW5kIGNsYXNzTmFtZT1cInRleHQtM3hsIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17ZW5kQ2FsbH0vPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyQ2FzZXMiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJNZE91dGxpbmVDYWxsRW5kIiwiQ29udGFpbmVyIiwiZGF0YSIsInNvY2tldCIsInVzZXJJbmZvIiwiZGlzcGF0Y2giLCJjYWxsQWNjZXB0ZWQiLCJzZXRDYWxsQWNjZXB0ZWQiLCJlbmRDYWxsIiwiaWQiLCJjdXJyZW50IiwiZW1pdCIsInR5cGUiLCJFTkRfQ0FMTCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJuYW1lIiwiY2FsbFR5cGUiLCJzcmMiLCJwcm9maWxlUGljdHVyZSIsImFsdCIsImhlaWdodCIsIndpZHRoIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Call/Container.jsx\n"));

/***/ })

});