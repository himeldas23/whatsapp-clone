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

/***/ "./src/components/Chat/ChatHeader.jsx":
/*!********************************************!*\
  !*** ./src/components/Chat/ChatHeader.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//import { USER_RUN_STATE } from \"zego-express-engine-webrtc/sdk/src/common/zego.entity\";\n\n\nfunction ChatHeader() {\n    var _currentChatUser, _currentChatUser1;\n    _s();\n    const [{ currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleVoiceCall = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.SET_VOICE_CALL\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"sm\",\n                        image: (_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.profilePicture\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-primary-strong\",\n                                children: (_currentChatUser1 = currentChatUser) === null || _currentChatUser1 === void 0 ? void 0 : _currentChatUser1.name\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary text-sm\",\n                                children: \"online/offline\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdCall, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoVideocam, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSearchAlt2, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\",\n                        onClick: ()=>dispatch({\n                                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.SET_MESSAGE_SEARCH\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsThreeDotsVertical, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, this);\n}\n_s(ChatHeader, \"SsVMrUFc2yMW/tOMLqTYIs+maYQ=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDQTtBQUNLO0FBQ0M7QUFDTztBQUNuRCx5RkFBeUY7QUFDL0I7QUFDUDtBQUtuRCxTQUFTUTtRQVdzQkMsa0JBRWdCQTs7SUFaN0MsTUFBTSxDQUFDLEVBQUNBLGVBQWUsRUFBQyxFQUFDQyxTQUFTLEdBQUdKLHVFQUFnQkE7SUFFckQsTUFBTUssa0JBQWtCO1FBQ3RCRCxTQUFTO1lBQ1BFLE1BQU1MLDREQUFZQSxDQUFDTSxjQUFjO1FBQ25DO0lBQ0Y7SUFDQSxxQkFDQSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2Qsc0RBQU1BO3dCQUFDVyxNQUFLO3dCQUFLSSxLQUFLLEdBQUVQLG1CQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFpQlEsY0FBYzs7Ozs7O2tDQUN4RCw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBS0gsV0FBVTsyQ0FBdUJOLG9CQUFBQSw2QkFBQUEsd0NBQUFBLGtCQUFpQlUsSUFBSTs7Ozs7OzBDQUM1RCw4REFBQ0Q7Z0NBQUtILFdBQVU7MENBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzdDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNiLGtEQUFNQTt3QkFBQ2EsV0FBVTs7Ozs7O2tDQUNsQiw4REFBQ1osdURBQVVBO3dCQUFDWSxXQUFVOzs7Ozs7a0NBQ3RCLDhEQUFDWCx3REFBWUE7d0JBQUNXLFdBQVU7d0JBQWdESyxTQUFTLElBQUlWLFNBQVM7Z0NBQUNFLE1BQUtMLDREQUFZQSxDQUFDYyxrQkFBa0I7NEJBQUE7Ozs7OztrQ0FDbkksOERBQUNoQiwrREFBbUJBO3dCQUFDVSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7R0EzQlNQOztRQUM4QkYsbUVBQWdCQTs7O0tBRDlDRTtBQTZCVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIuanN4P2FiOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vY29tbW9uL0F2YXRhclwiO1xuaW1wb3J0IHtNZENhbGx9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHtJb1ZpZGVvY2FtfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQge0JpU2VhcmNoQWx0Mn0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQge0JzVGhyZWVEb3RzVmVydGljYWx9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuLy9pbXBvcnQgeyBVU0VSX1JVTl9TVEFURSB9IGZyb20gXCJ6ZWdvLWV4cHJlc3MtZW5naW5lLXdlYnJ0Yy9zZGsvc3JjL2NvbW1vbi96ZWdvLmVudGl0eVwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuXG5cblxuXG5mdW5jdGlvbiBDaGF0SGVhZGVyKCkge1xuICBjb25zdCBbe2N1cnJlbnRDaGF0VXNlcn0sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVZvaWNlQ2FsbCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1ZPSUNFX0NBTExcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImgtMTYgcHgtNCBweS0zIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCB6LTEwXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNlwiPlxuICAgICAgPEF2YXRhciB0eXBlPVwic21cIiBpbWFnZT17Y3VycmVudENoYXRVc2VyPy5wcm9maWxlUGljdHVyZX0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1zdHJvbmdcIj57Y3VycmVudENoYXRVc2VyPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1zbVwiPlxuICAgICAgICAgIG9ubGluZS9vZmZsaW5lXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuICAgIDxNZENhbGwgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCIgLz5cbiAgICA8SW9WaWRlb2NhbSBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIiAvPlxuICAgIDxCaVNlYXJjaEFsdDIgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCIgb25DbGljaz17KCk9PmRpc3BhdGNoKHt0eXBlOnJlZHVjZXJDYXNlcy5TRVRfTUVTU0FHRV9TRUFSQ0h9KX0vPlxuICAgIDxCc1RocmVlRG90c1ZlcnRpY2FsIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0SGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiTWRDYWxsIiwiSW9WaWRlb2NhbSIsIkJpU2VhcmNoQWx0MiIsIkJzVGhyZWVEb3RzVmVydGljYWwiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiQ2hhdEhlYWRlciIsImN1cnJlbnRDaGF0VXNlciIsImRpc3BhdGNoIiwiaGFuZGxlVm9pY2VDYWxsIiwidHlwZSIsIlNFVF9WT0lDRV9DQUxMIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2UiLCJwcm9maWxlUGljdHVyZSIsInNwYW4iLCJuYW1lIiwib25DbGljayIsIlNFVF9NRVNTQUdFX1NFQVJDSCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.jsx\n"));

/***/ })

});