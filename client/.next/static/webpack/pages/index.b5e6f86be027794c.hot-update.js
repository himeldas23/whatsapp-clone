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

/***/ "./src/components/Chat/MessageBar.jsx":
/*!********************************************!*\
  !*** ./src/components/Chat/MessageBar.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ userInfo, currentChatUser }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const sendMessage = async (data)=>{\n        //e.preventDefault();\n        console.log(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__.ADD_MESSAGE_ROUTE);\n        try {\n            var _currentChatUser, _userInfo;\n            // const { data } = await axios.post(ADD_MESSAGE_ROUTE, {\n            //   to: currentChatUser?.id,\n            //   from: userInfo?.id,\n            //   message\n            // });\n            console.log((_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.id);\n            console.log((_userInfo = userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.id);\n            console.log(message);\n            setMessage(\"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsEmojiSmile, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_5__.ImAttachment, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type a message\",\n                        className: \"bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\",\n                        onChange: (e)=>setMessage(e.target.value),\n                        value: message\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdSend, {\n                            className: \"text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send Message\",\n                            onClick: sendMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/MessageBar.jsx\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"4G3Mi5iq/VMqnDg7G0gQN6ck9zY=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNKO0FBQzVCO0FBQ2M7QUFDSztBQUNDO0FBQ0Q7QUFDTDtBQUN4QyxTQUFTUzs7SUFFUCxNQUFNLENBQUMsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUUsRUFBRUMsU0FBUyxHQUFHWix1RUFBZ0JBO0lBQ2xFLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVyxjQUFjLE9BQU9DO1FBQ3pCLHFCQUFxQjtRQUNyQkMsUUFBUUMsR0FBRyxDQUFDakIsK0RBQWlCQTtRQUU3QixJQUFJO2dCQU9VVSxrQkFDQUQ7WUFQWix5REFBeUQ7WUFDekQsNkJBQTZCO1lBQzdCLHdCQUF3QjtZQUN4QixZQUFZO1lBQ1osTUFBTTtZQUVOTyxRQUFRQyxHQUFHLEVBQUNQLG1CQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFpQlEsRUFBRTtZQUMvQkYsUUFBUUMsR0FBRyxFQUFDUixZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVTLEVBQUU7WUFDeEJGLFFBQVFDLEdBQUcsQ0FBQ0w7WUFFWkMsV0FBVztRQUNiLEVBQUUsT0FBT00sS0FBSztZQUNaSCxRQUFRQyxHQUFHLENBQUNFO1FBQ2Q7SUFDRjtJQUVBLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNwQjs7OEJBQ0UsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2pCLHdEQUFZQTs0QkFDWGlCLFdBQVU7NEJBQ1ZDLE9BQU07Ozs7OztzQ0FFUiw4REFBQ2hCLHdEQUFZQTs0QkFBQ2UsV0FBVTs0QkFDdEJDLE9BQU07Ozs7Ozs7Ozs7Ozs4QkFHViw4REFBQ0Y7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFNQyxNQUFLO3dCQUNWQyxhQUFZO3dCQUFpQkosV0FBVTt3QkFDdkNLLFVBQVUsQ0FBQ0MsSUFBTWQsV0FBV2MsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUMxQ0EsT0FBT2pCOzs7Ozs7Ozs7Ozs4QkFHWCw4REFBQ1E7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNTO2tDQUNDLDRFQUFDdkIsa0RBQU1BOzRCQUNMYyxXQUFVOzRCQUNWQyxPQUFNOzRCQUNOUyxTQUFTakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3JCO0dBNURTTjs7UUFFMkNULG1FQUFnQkE7OztLQUYzRFM7QUE4RFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9NZXNzYWdlQmFyLmpzeD8xNGViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgQUREX01FU1NBR0VfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnNFbW9qaVNtaWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7IEZhTWljcm9waG9uZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgSW1BdHRhY2htZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcbmltcG9ydCB7IE1kU2VuZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuZnVuY3Rpb24gTWVzc2FnZUJhcigpIHtcblxuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudENoYXRVc2VyIH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKEFERF9NRVNTQUdFX1JPVVRFKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KEFERF9NRVNTQUdFX1JPVVRFLCB7XG4gICAgICAvLyAgIHRvOiBjdXJyZW50Q2hhdFVzZXI/LmlkLFxuICAgICAgLy8gICBmcm9tOiB1c2VySW5mbz8uaWQsXG4gICAgICAvLyAgIG1lc3NhZ2VcbiAgICAgIC8vIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50Q2hhdFVzZXI/LmlkKTtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvPy5pZCk7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgaC0yMCBweC00IGZsZXggaXRlbXMtY2VudGVyIGdhcC02IHJlbGF0aXZlXCI+XG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuICAgICAgICA8QnNFbW9qaVNtaWxlXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCJcbiAgICAgICAgICB0aXRsZT1cIkVtb2ppXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEltQXR0YWNobWVudCBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxuICAgICAgICAgIHRpdGxlPVwiQXR0YWNoIEZpbGVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGgtMTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCIgY2xhc3NOYW1lPVwiYmctaW5wdXQtYmFja2dyb3VuZCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGgtMTAgcm91bmRlZC1sZyBweC01IHB5LTQgdy1mdWxsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICA8TWRTZW5kXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxuICAgICAgICAgICAgdGl0bGU9XCJTZW5kIE1lc3NhZ2VcIlxuICAgICAgICAgICAgb25DbGljaz17c2VuZE1lc3NhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Lyo8RmFNaWNyb3Bob25lXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxuICAgICAgICAgICAgdGl0bGU9XCJSZWNvcmRcIlxuICAgICAgICAgIC8+Ki99XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJBRERfTUVTU0FHRV9ST1VURSIsImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJzRW1vamlTbWlsZSIsIkZhTWljcm9waG9uZSIsIkltQXR0YWNobWVudCIsIk1kU2VuZCIsIk1lc3NhZ2VCYXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsImRpc3BhdGNoIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});