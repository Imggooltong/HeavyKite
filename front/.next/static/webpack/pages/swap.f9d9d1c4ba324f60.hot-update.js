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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Swap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeadInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeadInfo */ \"./components/HeadInfo.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_Cg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/Cg */ \"./node_modules/react-icons/Cg/index.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     max-width: 640px;\\n     width: 100%;\\n     display: flex;\\n     flex-direction: column;\\n        align-items: center;\\n\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 80px;\\n    text-align: center;\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    border-radius: 100px;\\n    padding: 10px;\\n    margin: 40px 0;\\n    background: linear-gradient(245.22deg, rgb(218, 46, 29), rgb(243, 106, 255), rgb(57, 208, 216)) 0% center / 400% 100%;\\n    &:hover {\\n        background: #228be6\\n      }\\n      &:active {\\n        background: #228be6\\n      }\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    height: 420px;\\n    border-radius: 1.25rem;\\n    background: linear-gradient(140.14deg, rgba(243, 12, 11, 0.35) 30%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, rgb(24, 19, 77) 0%, rgb(27, 22, 89) 100%);\\n    \\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 90%;\\n    height: 70px;\\n    font-size: 20px;\\n    margin: 10px 0;\\n    border: 1px solid grey;\\n    border-radius: 15px;\\n    background: #D01F36;\\n\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 90%;\\n    height: 380px;\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 1.25rem;\\n    background: inherit;\\n    border-radius: 15px;\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      width: 100%;\\n      height:100px;\\n      margin: 10px 0;\\n      padding: 30px;\\n      display: flex;\\n      justify-content: space-around;\\n      border-radius: 15px;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      height: 2.4rem;\\n      transition: opacity 0.2s\\n      font-weight: 500;\\n      font-size: 28px;\\n      \\n      border: none;\\n      flex: 1 1 auto;\\n    \\n    \"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: inherit;\\n    height: 2.4rem;\\n    font-size: 24px;\\n    font-weight: 500;\\n    border-radius: 30px;\\n    vertical-align: middle;\\n    \"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar ContainerWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main(_templateObject());\n_c = ContainerWrap;\nvar Controller = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = Controller;\nvar ControllerButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = ControllerButton;\nvar SwapContainerWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = SwapContainerWrap;\nvar ConnectButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject4());\n_c4 = ConnectButton;\nvar SwapContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = SwapContainer;\nvar Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = Container;\nvar Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input(_templateObject7());\n_c7 = Input;\nvar CoinButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject8());\n_c8 = CoinButton;\nfunction Swap() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContainerWrap, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Swap - Heavy Kite\"\n            }, void 0, false, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Controller, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ControllerButton, {\n                    children: \"Swap\"\n                }, void 0, false, {\n                    fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwapContainerWrap, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwapContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                                style: {\n                                    marginBottom: \"35px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                        inputMode: \"decimal\",\n                                        autoComplete: \"off\",\n                                        autoCorrect: \"off\",\n                                        type: \"text\",\n                                        pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                                        minLength: \"1\",\n                                        maxLength: \"79\",\n                                        spellCheck: \"false\",\n                                        placeholder: \"0.0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoinButton, {\n                                        children: \"ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"100%\",\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    alignItems: \"center\",\n                                    background: \"none\",\n                                    borderRadius: \"9999\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_Cg__WEBPACK_IMPORTED_MODULE_4__.CgArrowsExchangeAltV, {\n                                    size: \"36\",\n                                    style: {\n                                        background: \"none\",\n                                        border: \"1px solid white\",\n                                        borderRadius: \"9999px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                                style: {\n                                    marginTop: \"30px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                        inputMode: \"decimal\",\n                                        autoComplete: \"off\",\n                                        autoCorrect: \"off\",\n                                        type: \"text\",\n                                        pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                                        minLength: \"1\",\n                                        maxLength: \"79\",\n                                        spellCheck: \"false\",\n                                        placeholder: \"0.0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoinButton, {\n                                        children: \"ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 142,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectButton, {\n                        children: \"Connect Wallet \"\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                        lineNumber: 160,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, this);\n};\n_c9 = Swap;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n$RefreshReg$(_c, \"ContainerWrap\");\n$RefreshReg$(_c1, \"Controller\");\n$RefreshReg$(_c2, \"ControllerButton\");\n$RefreshReg$(_c3, \"SwapContainerWrap\");\n$RefreshReg$(_c4, \"ConnectButton\");\n$RefreshReg$(_c5, \"SwapContainer\");\n$RefreshReg$(_c6, \"Container\");\n$RefreshReg$(_c7, \"Input\");\n$RefreshReg$(_c8, \"CoinButton\");\n$RefreshReg$(_c9, \"Swap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUk7d0NBQ2RDLFVBQVUsRUFBQyxPQUFPO3dDQUNsQkMsV0FBVyxFQUFDLEtBQUs7Ozs7OzRDQUNmO2tEQUNOLDhEQUFDYixVQUFVO2tEQUFDLEtBQUc7Ozs7OzRDQUFhOzs7Ozs7b0NBQ3BCOzs7Ozs7NEJBR0E7a0NBQ2hCLDhEQUFDTixhQUFhO2tDQUFDLGlCQUFlOzs7Ozs0QkFBZ0I7Ozs7OztvQkFDOUI7Ozs7OztZQUVSLENBQ25CO0NBQ0o7QUFwRXVCTyxNQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N3YXAuanM/OGY4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZEluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZEluZm9cIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDZ0Fycm93c0V4Y2hhbmdlQWx0ViB9IGZyb20gJ3JlYWN0LWljb25zL0NnJ1xuY29uc3QgQ29udGFpbmVyV3JhcCA9IHN0eWxlZC5tYWluYFxuICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGA7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgXG5jb25zdCBDb250cm9sbGVyQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ1LjIyZGVnLCByZ2IoMjE4LCA0NiwgMjkpLCByZ2IoMjQzLCAxMDYsIDI1NSksIHJnYig1NywgMjA4LCAyMTYpKSAwJSBjZW50ZXIgLyA0MDAlIDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjhiZTZcbiAgICAgIH1cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyOGJlNlxuICAgICAgfVxuICAgIGBcbiAgIFxuICAgIFxuY29uc3QgU3dhcENvbnRhaW5lcldyYXAgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwLjE0ZGVnLCByZ2JhKDI0MywgMTIsIDExLCAwLjM1KSAzMCUsIHJnYmEoMjcsIDIyLCA4OSwgMC4xKSA4Ni42MSUpLCBsaW5lYXItZ3JhZGllbnQoMzIxLjgyZGVnLCByZ2IoMjQsIDE5LCA3NykgMCUsIHJnYigyNywgMjIsIDg5KSAxMDAlKTtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYFxuY29uc3QgQ29ubmVjdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRDAxRjM2O1xuXG4gICAgYFxuXG5jb25zdCBTd2FwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGBcblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6MTAwcHg7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGBcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnNcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIFxuICAgIGBcblxuY29uc3QgQ29pbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGBcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3YXAoKSB7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXJXcmFwPlxuICAgICAgICAgICAgPEhlYWRJbmZvIHRpdGxlPVwiU3dhcCAtIEhlYXZ5IEtpdGVcIi8+XG5cbiAgICAgICAgICAgIDxDb250cm9sbGVyPlxuICAgICAgICAgICAgICAgIDxDb250cm9sbGVyQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBTd2FwXG4gICAgICAgICAgICAgICAgPC9Db250cm9sbGVyQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250cm9sbGVyPlxuXG4gICAgICAgICAgICA8U3dhcENvbnRhaW5lcldyYXA+XG4gICAgICAgICAgICAgICAgPFN3YXBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjM1cHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXlswLTldKlsuLF0/WzAtOV0qJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNzlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29pbkJ1dHRvbj5FVEg8L0NvaW5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjk5OTlcIixcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2dBcnJvd3NFeGNoYW5nZUFsdFYgc2l6ZT1cIjM2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI5OTk5cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIl5bMC05XSpbLixdP1swLTldKiRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjc5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvaW5CdXR0b24+RVRIPC9Db2luQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgIDwvU3dhcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Q29ubmVjdEJ1dHRvbj5Db25uZWN0IFdhbGxldCA8L0Nvbm5lY3RCdXR0b24+XG4gICAgICAgICAgICA8L1N3YXBDb250YWluZXJXcmFwPlxuXG4gICAgICAgIDwvQ29udGFpbmVyV3JhcD5cbiAgICApXG59Il0sIm5hbWVzIjpbIkhlYWRJbmZvIiwic3R5bGVkIiwidXNlU3RhdGUiLCJDZ0Fycm93c0V4Y2hhbmdlQWx0ViIsIkNvbnRhaW5lcldyYXAiLCJtYWluIiwiQ29udHJvbGxlciIsImRpdiIsIkNvbnRyb2xsZXJCdXR0b24iLCJTd2FwQ29udGFpbmVyV3JhcCIsIkNvbm5lY3RCdXR0b24iLCJidXR0b24iLCJTd2FwQ29udGFpbmVyIiwiQ29udGFpbmVyIiwiSW5wdXQiLCJpbnB1dCIsIkNvaW5CdXR0b24iLCJTd2FwIiwidGl0bGUiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImlucHV0TW9kZSIsImF1dG9Db21wbGV0ZSIsImF1dG9Db3JyZWN0IiwidHlwZSIsInBhdHRlcm4iLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJzcGVsbENoZWNrIiwicGxhY2Vob2xkZXIiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJzaXplIiwiYm9yZGVyIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/swap.js\n");

/***/ })

});