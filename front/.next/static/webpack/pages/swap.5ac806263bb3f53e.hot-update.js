"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/swap",{

/***/ "./pages/swap.js":
/*!***********************!*\
  !*** ./pages/swap.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Swap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeadInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeadInfo */ \"./components/HeadInfo.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_Cg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/Cg */ \"./node_modules/react-icons/Cg/index.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     max-width: 640px;\\n     width: 100%;\\n     display: flex;\\n     flex-direction: column;\\n        align-items: center;\\n\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 80px;\\n    text-align: center;\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    border-radius: 100px;\\n    padding: 10px;\\n    margin: 40px 0;\\n    background: linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216)) 0% center / 400% 100%;\\n    &:hover {\\n        background: #228be6\\n      }\\n      &:active {\\n        background: #228be6\\n      }\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    height: 400px;\\n    border-radius: 1.25rem;\\n    background: linear-gradient(140.14deg, rgba(200, 12, 11, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, rgb(24, 19, 77) 0%, rgb(27, 22, 89) 100%);\\n    \\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 90%;\\n    height: 70px;\\n    font: 28x;\\n    margin: 10px 0;\\n    border: 1px solid grey;\\n    border-radius: 15px;\\n    background: #D01F36;\\n\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 90%;\\n    height: 380px;\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 1.25rem;\\n    background: inherit;\\n    border-radius: 15px;\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      width: 100%;\\n      height:100px;\\n      margin: 10px 0;\\n      padding: 30px;\\n      display: flex;\\n      justify-content: space-around;\\n      border-radius: 15px;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      height: 2.4rem;\\n      transition: opacity 0.2s\\n      font-weight: 500;\\n      font-size: 28px;\\n      \\n      border: none;\\n      flex: 1 1 auto;\\n    \\n    \"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: inherit;\\n    height: 2.4rem;\\n    font-size: 24px;\\n    font-weight: 500;\\n    border-radius: 30px;\\n    vertical-align: middle;\\n    \"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar ContainerWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main(_templateObject());\n_c = ContainerWrap;\nvar Controller = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = Controller;\nvar ControllerButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = ControllerButton;\nvar SwapContainerWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = SwapContainerWrap;\nvar ConnectButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject4());\n_c4 = ConnectButton;\nvar SwapContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = SwapContainer;\nvar Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = Container;\nvar Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input(_templateObject7());\n_c7 = Input;\nvar CoinButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject8());\n_c8 = CoinButton;\nfunction Swap() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContainerWrap, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Swap - Heavy Kite\"\n            }, void 0, false, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Controller, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ControllerButton, {\n                    children: \"Swap\"\n                }, void 0, false, {\n                    fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwapContainerWrap, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwapContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                                style: {\n                                    marginBottom: \"35px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                        inputMode: \"decimal\",\n                                        autoComplete: \"off\",\n                                        autoCorrect: \"off\",\n                                        type: \"text\",\n                                        pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                                        minLength: \"1\",\n                                        maxLength: \"79\",\n                                        spellCheck: \"false\",\n                                        placeholder: \"0.0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoinButton, {\n                                        children: \"ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"100%\",\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    alignItems: \"center\",\n                                    background: \"none\",\n                                    borderRadius: \"9999\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_Cg__WEBPACK_IMPORTED_MODULE_4__.CgArrowsExchangeAltV, {\n                                    size: \"36\",\n                                    style: {\n                                        background: \"none\",\n                                        border: \"1px solid white\",\n                                        borderRadius: \"9999px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                                style: {\n                                    marginTop: \"30px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                        inputMode: \"decimal\",\n                                        autoComplete: \"off\",\n                                        autoCorrect: \"off\",\n                                        type: \"text\",\n                                        pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                                        minLength: \"1\",\n                                        maxLength: \"79\",\n                                        spellCheck: \"false\",\n                                        placeholder: \"0.0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoinButton, {\n                                        children: \"ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 142,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectButton, {\n                        children: \"Connect Wallet \"\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                        lineNumber: 160,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, this);\n};\n_c9 = Swap;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n$RefreshReg$(_c, \"ContainerWrap\");\n$RefreshReg$(_c1, \"Controller\");\n$RefreshReg$(_c2, \"ControllerButton\");\n$RefreshReg$(_c3, \"SwapContainerWrap\");\n$RefreshReg$(_c4, \"ConnectButton\");\n$RefreshReg$(_c5, \"SwapContainer\");\n$RefreshReg$(_c6, \"Container\");\n$RefreshReg$(_c7, \"Input\");\n$RefreshReg$(_c8, \"CoinButton\");\n$RefreshReg$(_c9, \"Swap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUk7d0NBQ2RDLFVBQVUsRUFBQyxPQUFPO3dDQUNsQkMsV0FBVyxFQUFDLEtBQUs7Ozs7OzRDQUNmO2tEQUNOLDhEQUFDYixVQUFVO2tEQUFDLEtBQUc7Ozs7OzRDQUFhOzs7Ozs7b0NBQ3BCOzs7Ozs7NEJBR0E7a0NBQ2hCLDhEQUFDTixhQUFhO2tDQUFDLGlCQUFlOzs7Ozs0QkFBZ0I7Ozs7OztvQkFDOUI7Ozs7OztZQUVSLENBQ25CO0NBQ0o7QUFwRXVCTyxNQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N3YXAuanM/OGY4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZEluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZEluZm9cIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDZ0Fycm93c0V4Y2hhbmdlQWx0ViB9IGZyb20gJ3JlYWN0LWljb25zL0NnJ1xuY29uc3QgQ29udGFpbmVyV3JhcCA9IHN0eWxlZC5tYWluYFxuICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGA7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgXG5jb25zdCBDb250cm9sbGVyQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ1LjIyZGVnLCByZ2IoMjE4LCA0NiwgMjM5KSwgcmdiKDQzLCAxMDYsIDI1NSksIHJnYig1NywgMjA4LCAyMTYpKSAwJSBjZW50ZXIgLyA0MDAlIDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjhiZTZcbiAgICAgIH1cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyOGJlNlxuICAgICAgfVxuICAgIGBcbiAgIFxuICAgIFxuY29uc3QgU3dhcENvbnRhaW5lcldyYXAgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwLjE0ZGVnLCByZ2JhKDIwMCwgMTIsIDExLCAwLjE1KSAwJSwgcmdiYSgyNywgMjIsIDg5LCAwLjEpIDg2LjYxJSksIGxpbmVhci1ncmFkaWVudCgzMjEuODJkZWcsIHJnYigyNCwgMTksIDc3KSAwJSwgcmdiKDI3LCAyMiwgODkpIDEwMCUpO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgXG5jb25zdCBDb25uZWN0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBmb250OiAyOHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNEMDFGMzY7XG5cbiAgICBgXG5cbmNvbnN0IFN3YXBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYFxuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDoxMDBweDtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYFxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgICBoZWlnaHQ6IDIuNHJlbTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yc1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIFxuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgXG4gICAgYFxuXG5jb25zdCBDb2luQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDIuNHJlbTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dhcCgpIHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcldyYXA+XG4gICAgICAgICAgICA8SGVhZEluZm8gdGl0bGU9XCJTd2FwIC0gSGVhdnkgS2l0ZVwiLz5cblxuICAgICAgICAgICAgPENvbnRyb2xsZXI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xsZXJCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFN3YXBcbiAgICAgICAgICAgICAgICA8L0NvbnRyb2xsZXJCdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRyb2xsZXI+XG5cbiAgICAgICAgICAgIDxTd2FwQ29udGFpbmVyV3JhcD5cbiAgICAgICAgICAgICAgICA8U3dhcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMzVweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJeWzAtOV0qWy4sXT9bMC05XSokXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI3OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2luQnV0dG9uPkVUSDwvQ29pbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOTk5OVwiLFxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDZ0Fycm93c0V4Y2hhbmdlQWx0ViBzaXplPVwiMzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjk5OTlweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXlswLTldKlsuLF0/WzAtOV0qJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNzlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29pbkJ1dHRvbj5FVEg8L0NvaW5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgPC9Td2FwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxDb25uZWN0QnV0dG9uPkNvbm5lY3QgV2FsbGV0IDwvQ29ubmVjdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvU3dhcENvbnRhaW5lcldyYXA+XG5cbiAgICAgICAgPC9Db250YWluZXJXcmFwPlxuICAgIClcbn0iXSwibmFtZXMiOlsiSGVhZEluZm8iLCJzdHlsZWQiLCJ1c2VTdGF0ZSIsIkNnQXJyb3dzRXhjaGFuZ2VBbHRWIiwiQ29udGFpbmVyV3JhcCIsIm1haW4iLCJDb250cm9sbGVyIiwiZGl2IiwiQ29udHJvbGxlckJ1dHRvbiIsIlN3YXBDb250YWluZXJXcmFwIiwiQ29ubmVjdEJ1dHRvbiIsImJ1dHRvbiIsIlN3YXBDb250YWluZXIiLCJDb250YWluZXIiLCJJbnB1dCIsImlucHV0IiwiQ29pbkJ1dHRvbiIsIlN3YXAiLCJ0aXRsZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiaW5wdXRNb2RlIiwiYXV0b0NvbXBsZXRlIiwiYXV0b0NvcnJlY3QiLCJ0eXBlIiwicGF0dGVybiIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInNwZWxsQ2hlY2siLCJwbGFjZWhvbGRlciIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInNpemUiLCJib3JkZXIiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/swap.js\n");

/***/ })

});