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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//import { USER_RUN_STATE } from \"zego-express-engine-webrtc/sdk/src/common/zego.entity\";\n\n\nfunction ChatHeader() {\n    var _currentChatUser, _currentChatUser1;\n    _s();\n    const [{ currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleVoiceCall = ()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.SET_VOICE_CALL,\n            voiceCall: {\n                ...currentChatUser,\n                type: \"out-going\",\n                callType: \"voice\",\n                roomId: Date\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"sm\",\n                        image: (_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.profilePicture\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-primary-strong\",\n                                children: (_currentChatUser1 = currentChatUser) === null || _currentChatUser1 === void 0 ? void 0 : _currentChatUser1.name\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary text-sm\",\n                                children: \"online/offline\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdCall, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoVideocam, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSearchAlt2, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\",\n                        onClick: ()=>dispatch({\n                                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.SET_MESSAGE_SEARCH\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsThreeDotsVertical, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/ChatHeader.jsx\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, this);\n}\n_s(ChatHeader, \"SsVMrUFc2yMW/tOMLqTYIs+maYQ=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDQTtBQUNLO0FBQ0M7QUFDTztBQUNuRCx5RkFBeUY7QUFDL0I7QUFDUDtBQUtuRCxTQUFTUTtRQWlCc0JDLGtCQUVnQkE7O0lBbEI3QyxNQUFNLENBQUMsRUFBQ0EsZUFBZSxFQUFDLEVBQUNDLFNBQVMsR0FBR0osdUVBQWdCQTtJQUVyRCxNQUFNSyxrQkFBa0I7UUFDdEJELFNBQVM7WUFDUEUsTUFBTUwsNERBQVlBLENBQUNNLGNBQWM7WUFDakNDLFdBQVc7Z0JBQ1QsR0FBR0wsZUFBZTtnQkFDbEJHLE1BQU07Z0JBQ05HLFVBQVU7Z0JBQ1ZDLFFBQVFDO1lBQ1Y7UUFDRjtJQUNGO0lBQ0EscUJBQ0EsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNsQixzREFBTUE7d0JBQUNXLE1BQUs7d0JBQUtRLEtBQUssR0FBRVgsbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCWSxjQUFjOzs7Ozs7a0NBQ3hELDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFLSCxXQUFVOzJDQUF1QlYsb0JBQUFBLDZCQUFBQSx3Q0FBQUEsa0JBQWlCYyxJQUFJOzs7Ozs7MENBQzVELDhEQUFDRDtnQ0FBS0gsV0FBVTswQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLN0MsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ2pCLGtEQUFNQTt3QkFBQ2lCLFdBQVU7Ozs7OztrQ0FDbEIsOERBQUNoQix1REFBVUE7d0JBQUNnQixXQUFVOzs7Ozs7a0NBQ3RCLDhEQUFDZix3REFBWUE7d0JBQUNlLFdBQVU7d0JBQWdESyxTQUFTLElBQUlkLFNBQVM7Z0NBQUNFLE1BQUtMLDREQUFZQSxDQUFDa0Isa0JBQWtCOzRCQUFBOzs7Ozs7a0NBQ25JLDhEQUFDcEIsK0RBQW1CQTt3QkFBQ2MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DO0dBakNTWDs7UUFDOEJGLG1FQUFnQkE7OztLQUQ5Q0U7QUFtQ1QsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9DaGF0SGVhZGVyLmpzeD9hYjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL2NvbW1vbi9BdmF0YXJcIjtcbmltcG9ydCB7TWRDYWxsfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7SW9WaWRlb2NhbX0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IHtCaVNlYXJjaEFsdDJ9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuaW1wb3J0IHtCc1RocmVlRG90c1ZlcnRpY2FsfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbi8vaW1wb3J0IHsgVVNFUl9SVU5fU1RBVEUgfSBmcm9tIFwiemVnby1leHByZXNzLWVuZ2luZS13ZWJydGMvc2RrL3NyYy9jb21tb24vemVnby5lbnRpdHlcIjtcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVkdWNlckNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcblxuXG5cblxuZnVuY3Rpb24gQ2hhdEhlYWRlcigpIHtcbiAgY29uc3QgW3tjdXJyZW50Q2hhdFVzZXJ9LGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcblxuICBjb25zdCBoYW5kbGVWb2ljZUNhbGwgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9WT0lDRV9DQUxMLFxuICAgICAgdm9pY2VDYWxsOiB7XG4gICAgICAgIC4uLmN1cnJlbnRDaGF0VXNlcixcbiAgICAgICAgdHlwZTogXCJvdXQtZ29pbmdcIixcbiAgICAgICAgY2FsbFR5cGU6IFwidm9pY2VcIixcbiAgICAgICAgcm9vbUlkOiBEYXRlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHB4LTQgcHktMyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmctcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgei0xMFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cbiAgICAgIDxBdmF0YXIgdHlwZT1cInNtXCIgaW1hZ2U9e2N1cnJlbnRDaGF0VXNlcj8ucHJvZmlsZVBpY3R1cmV9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktc3Ryb25nXCI+e2N1cnJlbnRDaGF0VXNlcj8ubmFtZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtc21cIj5cbiAgICAgICAgICBvbmxpbmUvb2ZmbGluZVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cbiAgICA8TWRDYWxsIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiIC8+XG4gICAgPElvVmlkZW9jYW0gY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCIgLz5cbiAgICA8QmlTZWFyY2hBbHQyIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh7dHlwZTpyZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VfU0VBUkNIfSl9Lz5cbiAgICA8QnNUaHJlZURvdHNWZXJ0aWNhbCBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIk1kQ2FsbCIsIklvVmlkZW9jYW0iLCJCaVNlYXJjaEFsdDIiLCJCc1RocmVlRG90c1ZlcnRpY2FsIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXRIZWFkZXIiLCJjdXJyZW50Q2hhdFVzZXIiLCJkaXNwYXRjaCIsImhhbmRsZVZvaWNlQ2FsbCIsInR5cGUiLCJTRVRfVk9JQ0VfQ0FMTCIsInZvaWNlQ2FsbCIsImNhbGxUeXBlIiwicm9vbUlkIiwiRGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlIiwicHJvZmlsZVBpY3R1cmUiLCJzcGFuIiwibmFtZSIsIm9uQ2xpY2siLCJTRVRfTUVTU0FHRV9TRUFSQ0giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.jsx\n"));

/***/ })

});