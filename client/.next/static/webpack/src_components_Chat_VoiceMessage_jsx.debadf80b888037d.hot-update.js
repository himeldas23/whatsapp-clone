"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Chat_VoiceMessage_jsx",{

/***/ "./src/components/Chat/VoiceMessage.jsx":
/*!**********************************************!*\
  !*** ./src/components/Chat/VoiceMessage.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction VoiceMessage(param) {\n    let { message } = param;\n    var _currentChatUser;\n    _s();\n    const [{ currentChatUser, userInfo }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [audioMessage, setAudioMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [currentPlaybackTime, setCurrentPlaybackTime] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [totalDuration, setTotalDuration] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const waveFormRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const waveform = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (waveform.current === null) {\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_4___default().create({\n                container: waveFormRef.current,\n                waveColor: \"#ccc\",\n                progressColor: \"#4a9eff\",\n                cursorColor: \"7ae3c3\",\n                barWidth: 2,\n                height: 30,\n                responsive: true\n            });\n            waveform.current.on(\"finish\", ()=>{\n                setIsPlaying(false);\n            });\n        }\n        return ()=>{\n            waveform.current.destroy();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const audioURL = \"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__.HOST, \"/\").concat(message.message);\n        const audio = new Audio(audioURL);\n        setAudioMessage(audio);\n        waveform.current.load(audioURL);\n        waveform.current.on(\"ready\", ()=>{\n            setTotalDuration(waveform.current.getDuration());\n        });\n    }, [\n        message.message\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (audioMessage) {\n            const updatePlaybackTime = ()=>{\n                setCurrentPlaybackTime(audioMessage.currentTime);\n            };\n            audioMessage.addEventListener(\"timeupdate\", updatePlaybackTime);\n            return ()=>{\n                audioMessage.removeEventListener(\"timeupdate\", updatePlaybackTime);\n            };\n        }\n    }, [\n        audioMessage\n    ]);\n    const formatTime = (time)=>{\n        if (isNaN(time)) return \"00:00\";\n        const minutes = Math.floor(time / 60);\n        const seconds = Math.floor(time % 60);\n        return \"\".concat(minutes.toString().padStart(2, \"0\"), \" : \").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    const handlePlayAudio = ()=>{\n        if (audioMessage) {\n            waveform.current.stop();\n            waveform.current.play();\n            audioMessage.play();\n            setIsPlaying(true);\n        }\n    };\n    const handlePauseAudio = ()=>{\n        waveform.current.stop();\n        audioMessage.pause();\n        setIsPlaying(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-5 text-white px-4 pr-2 py-4 text-sm rounded-md \".concat(message.senderId === currentChatUser.id ? \"bg-incoming-background\" : \"bg-outgoing-background\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    type: \"lg\",\n                    image: (_currentChatUser = currentChatUser) === null || _currentChatUser === void 0 ? void 0 : _currentChatUser.profilePicture\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cursor-pointer text-xl\",\n                children: !isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaPlay, {\n                    onClick: handlePlayAudio\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 22\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaStop, {\n                    onClick: handlePauseAudio\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 61\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 96,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-60\",\n                        ref: waveFormRef\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-bubble-meta text-[11px] pt-1 flex justify-between absolute bottom-[-22px] w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: formatTime(isPlaying ? currentPlaybackTime : totalDuration)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_6__.calculateTime)(message.createdAt)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 11\n                                    }, this),\n                                    message.senderId === userInfo.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        messageStatus: message.messageStatus\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 49\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 101,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Web-Programming-Project/whatsapp-clone/client/src/components/Chat/VoiceMessage.jsx\",\n        lineNumber: 90,\n        columnNumber: 10\n    }, this);\n}\n_s(VoiceMessage, \"GZcfMdsrVgOZLJ8kVIDplNMG908=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = VoiceMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoiceMessage);\nvar _c;\n$RefreshReg$(_c, \"VoiceMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L1ZvaWNlTWVzc2FnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ2pCO0FBQ2tCO0FBQ3BCO0FBQ0Q7QUFDVTtBQUNNO0FBQ0Y7QUFFcEQsU0FBU1ksYUFBYSxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7UUFvRlNDOztJQWxGN0IsTUFBTSxDQUFDLEVBQUVBLGVBQWUsRUFBRUMsUUFBUSxFQUFFLENBQUMsR0FBR2YsdUVBQWdCQTtJQUN4RCxNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2UscUJBQXFCQyx1QkFBdUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ2lCLGVBQWVDLGlCQUFpQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTW1CLGNBQWNwQiw2Q0FBTUEsQ0FBQztJQUMzQixNQUFNcUIsV0FBV3JCLDZDQUFNQSxDQUFDO0lBSXhCRCxnREFBU0EsQ0FBQztRQUNSLElBQUlzQixTQUFTQyxPQUFPLEtBQUssTUFBTTtZQUM3QkQsU0FBU0MsT0FBTyxHQUFHcEIsMkRBQWlCLENBQUM7Z0JBQ25Dc0IsV0FBV0osWUFBWUUsT0FBTztnQkFDOUJHLFdBQVc7Z0JBQ1hDLGVBQWU7Z0JBQ2ZDLGFBQWE7Z0JBQ2JDLFVBQVU7Z0JBQ1ZDLFFBQVE7Z0JBQ1JDLFlBQVk7WUFDZDtZQUNBVCxTQUFTQyxPQUFPLENBQUNTLEVBQUUsQ0FBQyxVQUFVO2dCQUM1QmhCLGFBQWE7WUFDZjtRQUNGO1FBR0EsT0FBTztZQUNMTSxTQUFTQyxPQUFPLENBQUNVLE9BQU87UUFDMUI7SUFDRixHQUFHLEVBQUU7SUFFTGpDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtDLFdBQVcsR0FBV3hCLE9BQVJaLGtEQUFJQSxFQUFDLEtBQW1CLE9BQWhCWSxRQUFRQSxPQUFPO1FBQzNDLE1BQU15QixRQUFRLElBQUlDLE1BQU1GO1FBQ3hCcEIsZ0JBQWdCcUI7UUFDaEJiLFNBQVNDLE9BQU8sQ0FBQ2MsSUFBSSxDQUFDSDtRQUN0QlosU0FBU0MsT0FBTyxDQUFDUyxFQUFFLENBQUMsU0FBUztZQUMzQlosaUJBQWlCRSxTQUFTQyxPQUFPLENBQUNlLFdBQVc7UUFDL0M7SUFFRixHQUFHO1FBQUM1QixRQUFRQSxPQUFPO0tBQUM7SUFHcEJWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWEsY0FBYztZQUNoQixNQUFNMEIscUJBQXFCO2dCQUN6QnJCLHVCQUF1QkwsYUFBYTJCLFdBQVc7WUFDakQ7WUFDQTNCLGFBQWE0QixnQkFBZ0IsQ0FBQyxjQUFjRjtZQUM1QyxPQUFPO2dCQUNMMUIsYUFBYTZCLG1CQUFtQixDQUFDLGNBQWNIO1lBQ2pEO1FBQ0Y7SUFDRixHQUFHO1FBQUMxQjtLQUFhO0lBRWpCLE1BQU04QixhQUFhLENBQUNDO1FBQ2xCLElBQUlDLE1BQU1ELE9BQU8sT0FBTztRQUN4QixNQUFNRSxVQUFVQyxLQUFLQyxLQUFLLENBQUNKLE9BQU87UUFDbEMsTUFBTUssVUFBVUYsS0FBS0MsS0FBSyxDQUFDSixPQUFPO1FBQ2xDLE9BQU8sR0FBNENLLE9BQXpDSCxRQUFRSSxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQUssT0FBeUMsT0FBcENGLFFBQVFDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7SUFDcEY7SUFHQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSXZDLGNBQWM7WUFDaEJTLFNBQVNDLE9BQU8sQ0FBQzhCLElBQUk7WUFDckIvQixTQUFTQyxPQUFPLENBQUMrQixJQUFJO1lBQ3JCekMsYUFBYXlDLElBQUk7WUFDakJ0QyxhQUFhO1FBQ2Y7SUFDRjtJQUVBLE1BQU11QyxtQkFBbUI7UUFDdkJqQyxTQUFTQyxPQUFPLENBQUM4QixJQUFJO1FBQ3JCeEMsYUFBYTJDLEtBQUs7UUFDbEJ4QyxhQUFhO0lBQ2Y7SUFDQSxxQkFBTyw4REFBQ3lDO1FBQUlDLFdBQVcsd0VBQXNLLE9BQTlGaEQsUUFBUWlELFFBQVEsS0FBS2hELGdCQUFnQmlELEVBQUUsR0FBRywyQkFBMkI7OzBCQUdsSyw4REFBQ0g7MEJBQ0MsNEVBQUNyRCxzREFBTUE7b0JBQUN5RCxNQUFLO29CQUFLQyxLQUFLLEdBQUVuRCxtQkFBQUEsNkJBQUFBLHVDQUFBQSxpQkFBaUJvRCxjQUFjOzs7Ozs7Ozs7OzswQkFFMUQsOERBQUNOO2dCQUFJQyxXQUFVOzBCQUVYLENBQUMzQywwQkFBWSw4REFBQ1Ysa0RBQU1BO29CQUFDMkQsU0FBU1o7Ozs7O3lDQUFzQiw4REFBQzlDLGtEQUFNQTtvQkFBQzBELFNBQVNUOzs7Ozs7Ozs7OzswQkFHekUsOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7d0JBQU9PLEtBQUs1Qzs7Ozs7O2tDQUMzQiw4REFBQ29DO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1E7MENBRUd2QixXQUFXNUIsWUFBWUUsc0JBQXNCRTs7Ozs7OzBDQUdqRCw4REFBQ3NDO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1E7a0RBQ0UzRCxtRUFBYUEsQ0FBQ0csUUFBUXlELFNBQVM7Ozs7OztvQ0FHaEN6RCxRQUFRaUQsUUFBUSxLQUFLL0MsU0FBU2dELEVBQUUsa0JBQUksOERBQUNwRCw2REFBYUE7d0NBQUM0RCxlQUFlMUQsUUFBUTBELGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRztHQTlHUzNEOztRQUVpQ1osbUVBQWdCQTs7O0tBRmpEWTtBQWdIVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L1ZvaWNlTWVzc2FnZS5qc3g/ZGQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IEhPU1QgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXYXZlU3VyZmVyIGZyb20gXCJ3YXZlc3VyZmVyLmpzXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XG5pbXBvcnQgeyBGYVBsYXksIEZhU3RvcCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlVGltZSB9IGZyb20gXCJAL3V0aWxzL0NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCBNZXNzYWdlU3RhdHVzIGZyb20gXCIuLi9jb21tb24vTWVzc2FnZVN0YXR1c1wiO1xuXG5mdW5jdGlvbiBWb2ljZU1lc3NhZ2UoeyBtZXNzYWdlIH0pIHtcblxuICBjb25zdCBbeyBjdXJyZW50Q2hhdFVzZXIsIHVzZXJJbmZvIH1dID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbYXVkaW9NZXNzYWdlLCBzZXRBdWRpb01lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50UGxheWJhY2tUaW1lLCBzZXRDdXJyZW50UGxheWJhY2tUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG90YWxEdXJhdGlvbiwgc2V0VG90YWxEdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgd2F2ZUZvcm1SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHdhdmVmb3JtID0gdXNlUmVmKG51bGwpO1xuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3YXZlZm9ybS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50ID0gV2F2ZVN1cmZlci5jcmVhdGUoe1xuICAgICAgICBjb250YWluZXI6IHdhdmVGb3JtUmVmLmN1cnJlbnQsXG4gICAgICAgIHdhdmVDb2xvcjogXCIjY2NjXCIsXG4gICAgICAgIHByb2dyZXNzQ29sb3I6IFwiIzRhOWVmZlwiLFxuICAgICAgICBjdXJzb3JDb2xvcjogXCI3YWUzYzNcIixcbiAgICAgICAgYmFyV2lkdGg6IDIsXG4gICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQub24oXCJmaW5pc2hcIiwgKCkgPT4ge1xuICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXVkaW9VUkwgPSBgJHtIT1NUfS8ke21lc3NhZ2UubWVzc2FnZX1gXG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYXVkaW9VUkwpO1xuICAgIHNldEF1ZGlvTWVzc2FnZShhdWRpbyk7XG4gICAgd2F2ZWZvcm0uY3VycmVudC5sb2FkKGF1ZGlvVVJMKTtcbiAgICB3YXZlZm9ybS5jdXJyZW50Lm9uKFwicmVhZHlcIiwgKCkgPT4ge1xuICAgICAgc2V0VG90YWxEdXJhdGlvbih3YXZlZm9ybS5jdXJyZW50LmdldER1cmF0aW9uKCkpO1xuICAgIH0pXG5cbiAgfSwgW21lc3NhZ2UubWVzc2FnZV0pXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdWRpb01lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVBsYXliYWNrVGltZSA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFBsYXliYWNrVGltZShhdWRpb01lc3NhZ2UuY3VycmVudFRpbWUpO1xuICAgICAgfTtcbiAgICAgIGF1ZGlvTWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCB1cGRhdGVQbGF5YmFja1RpbWUpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgYXVkaW9NZXNzYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIHVwZGF0ZVBsYXliYWNrVGltZSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2F1ZGlvTWVzc2FnZV0pO1xuXG4gIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4ge1xuICAgIGlmIChpc05hTih0aW1lKSkgcmV0dXJuIFwiMDA6MDBcIjtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XG4gICAgcmV0dXJuIGAke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9IDogJHtzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVQbGF5QXVkaW8gPSAoKSA9PiB7XG4gICAgaWYgKGF1ZGlvTWVzc2FnZSkge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5zdG9wKCk7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50LnBsYXkoKTtcbiAgICAgIGF1ZGlvTWVzc2FnZS5wbGF5KCk7XG4gICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhdXNlQXVkaW8gPSAoKSA9PiB7XG4gICAgd2F2ZWZvcm0uY3VycmVudC5zdG9wKCk7XG4gICAgYXVkaW9NZXNzYWdlLnBhdXNlKCk7XG4gICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcbiAgfVxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNSB0ZXh0LXdoaXRlIHB4LTQgcHItMiBweS00IHRleHQtc20gcm91bmRlZC1tZCAke21lc3NhZ2Uuc2VuZGVySWQgPT09IGN1cnJlbnRDaGF0VXNlci5pZCA/IFwiYmctaW5jb21pbmctYmFja2dyb3VuZFwiIDogXCJiZy1vdXRnb2luZy1iYWNrZ3JvdW5kXCJ9YH0+XG5cblxuICAgIDxkaXY+XG4gICAgICA8QXZhdGFyIHR5cGU9XCJsZ1wiIGltYWdlPXtjdXJyZW50Q2hhdFVzZXI/LnByb2ZpbGVQaWN0dXJlfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiPlxuICAgICAge1xuICAgICAgICAhaXNQbGF5aW5nID8gPEZhUGxheSBvbkNsaWNrPXtoYW5kbGVQbGF5QXVkaW99IC8+IDogPEZhU3RvcCBvbkNsaWNrPXtoYW5kbGVQYXVzZUF1ZGlvfSAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02MFwiIHJlZj17d2F2ZUZvcm1SZWZ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYnViYmxlLW1ldGEgdGV4dC1bMTFweF0gcHQtMSBmbGV4IGp1c3RpZnktYmV0d2VlbiBhYnNvbHV0ZSBib3R0b20tWy0yMnB4XSB3LWZ1bGxcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0VGltZShpc1BsYXlpbmcgPyBjdXJyZW50UGxheWJhY2tUaW1lIDogdG90YWxEdXJhdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Y2FsY3VsYXRlVGltZShtZXNzYWdlLmNyZWF0ZWRBdCl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVySWQgPT09IHVzZXJJbmZvLmlkICYmIDxNZXNzYWdlU3RhdHVzIG1lc3NhZ2VTdGF0dXM9e21lc3NhZ2UubWVzc2FnZVN0YXR1c30gLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2ID47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvaWNlTWVzc2FnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwiSE9TVCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXYXZlU3VyZmVyIiwiQXZhdGFyIiwiRmFQbGF5IiwiRmFTdG9wIiwiY2FsY3VsYXRlVGltZSIsIk1lc3NhZ2VTdGF0dXMiLCJWb2ljZU1lc3NhZ2UiLCJtZXNzYWdlIiwiY3VycmVudENoYXRVc2VyIiwidXNlckluZm8iLCJhdWRpb01lc3NhZ2UiLCJzZXRBdWRpb01lc3NhZ2UiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJjdXJyZW50UGxheWJhY2tUaW1lIiwic2V0Q3VycmVudFBsYXliYWNrVGltZSIsInRvdGFsRHVyYXRpb24iLCJzZXRUb3RhbER1cmF0aW9uIiwid2F2ZUZvcm1SZWYiLCJ3YXZlZm9ybSIsImN1cnJlbnQiLCJjcmVhdGUiLCJjb250YWluZXIiLCJ3YXZlQ29sb3IiLCJwcm9ncmVzc0NvbG9yIiwiY3Vyc29yQ29sb3IiLCJiYXJXaWR0aCIsImhlaWdodCIsInJlc3BvbnNpdmUiLCJvbiIsImRlc3Ryb3kiLCJhdWRpb1VSTCIsImF1ZGlvIiwiQXVkaW8iLCJsb2FkIiwiZ2V0RHVyYXRpb24iLCJ1cGRhdGVQbGF5YmFja1RpbWUiLCJjdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9ybWF0VGltZSIsInRpbWUiLCJpc05hTiIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImhhbmRsZVBsYXlBdWRpbyIsInN0b3AiLCJwbGF5IiwiaGFuZGxlUGF1c2VBdWRpbyIsInBhdXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VuZGVySWQiLCJpZCIsInR5cGUiLCJpbWFnZSIsInByb2ZpbGVQaWN0dXJlIiwib25DbGljayIsInJlZiIsInNwYW4iLCJjcmVhdGVkQXQiLCJtZXNzYWdlU3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/VoiceMessage.jsx\n"));

/***/ })

});