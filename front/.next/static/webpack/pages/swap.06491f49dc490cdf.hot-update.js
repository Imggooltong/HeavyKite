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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Swap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeadInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeadInfo */ \"./components/HeadInfo.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     max-width: 640px;\\n     width: 100%;\\n     display: flex;\\n     flex-direction: column;\\n        align-items: center;\\n\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 80px;\\n    text-align: center;\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    border-radius: 100px;\\n    padding: 10px;\\n    margin: 40px 0;\\n    background: linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216)) 0% center / 400% 100%;\\n    &:hover {\\n        background: #228be6\\n      }\\n      &:active {\\n        background: #228be6\\n      }\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    height: 400px;\\n    border-radius: 1.25rem;\\n    background: linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, rgb(24, 19, 77) 0%, rgb(27, 22, 89) 100%);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 90%;\\n    height: 50px;\\n    font: 14px/16px;\\n    margin: 10px 0;\\n    border: 1px solid grey;\\n    border-radius: 5px;\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 90%;\\n    height: 380px;\\n    padding: 15px;\\n    display: flex;\\n    margin-top: 1.25rem;\\n    background: inherit;\\n    border-radius: 15px;\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      width:100%;\\n      height:100px;\\n      display: flex;\\n      justify-content: space-around;\\n      border-radius: 30px;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      transition: opacity 0.2s\\n      font-weight: 500;\\n      font-size: 28px;\\n      \\n      border: none;\\n      flex: 1 1 auto;\\n    \"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nvar ContainerWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main(_templateObject());\n_c = ContainerWrap;\nvar Controller = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = Controller;\nvar ControllerButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = ControllerButton;\nvar SwapContainerWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = SwapContainerWrap;\nvar ConnectButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject4());\n_c4 = ConnectButton;\nvar SwapContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = SwapContainer;\nvar FromContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = FromContainer;\nvar FromInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input(_templateObject7());\n_c7 = FromInput;\nvar ToContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject8());\n_c8 = ToContainer;\nfunction Swap() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), amount = ref[0], setAmount = ref[1];\n    var checkInput = function(e) {\n        console.log(e.target.value);\n        ///[^-\\.0-9]/g,''\n        setAmount(e.target.value);\n    // setAmount(e.target.value.replace(/[^-\\.0-9]/g, ''));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContainerWrap, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Swap - Heavy Kite\"\n            }, void 0, false, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Controller, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ControllerButton, {\n                    children: \"Swap\"\n                }, void 0, false, {\n                    fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwapContainerWrap, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwapContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FromContainer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FromInput, {\n                                        inputMode: \"decimal\",\n                                        autoComplete: \"off\",\n                                        autoCorrect: \"off\",\n                                        type: \"text\",\n                                        onChange: function(e) {\n                                            return checkInput;\n                                        },\n                                        placeholder: amount,\n                                        minLength: \"1\",\n                                        maxLength: \"79\",\n                                        spellCheck: \"false\",\n                                        value: amount\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 120,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToContainer, {}, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 121,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectButton, {\n                        children: \"Connect Wallet \"\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                        lineNumber: 125,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, this);\n};\n_s(Swap, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c9 = Swap;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n$RefreshReg$(_c, \"ContainerWrap\");\n$RefreshReg$(_c1, \"Controller\");\n$RefreshReg$(_c2, \"ControllerButton\");\n$RefreshReg$(_c3, \"SwapContainerWrap\");\n$RefreshReg$(_c4, \"ConnectButton\");\n$RefreshReg$(_c5, \"SwapContainer\");\n$RefreshReg$(_c6, \"FromContainer\");\n$RefreshReg$(_c7, \"FromInput\");\n$RefreshReg$(_c8, \"ToContainer\");\n$RefreshReg$(_c9, \"Swap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zd2FwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDVDtBQUNIOztBQUVqQyxJQUFNRyxhQUFhLEdBQUdGLDREQUFXLG1CQU81QjtBQVBDRSxLQUFBQSxhQUFhO0FBU25CLElBQU1FLFVBQVUsR0FBR0osMkRBQVUsb0JBR3hCO0FBSENJLE1BQUFBLFVBQVU7QUFJaEIsSUFBTUUsZ0JBQWdCLEdBQUdOLDJEQUFVLG9CQVk5QjtBQVpDTSxNQUFBQSxnQkFBZ0I7QUFjdEIsSUFBTUMsaUJBQWlCLEdBQUdQLDJEQUFVLG9CQVMvQjtBQVRDTyxNQUFBQSxpQkFBaUI7QUFVdkIsSUFBTUMsYUFBYSxHQUFHUiw4REFBYSxvQkFPOUI7QUFQQ1EsTUFBQUEsYUFBYTtBQVNuQixJQUFNRSxhQUFhLEdBQUdWLDJEQUFVLG9CQVEzQjtBQVJDVSxNQUFBQSxhQUFhO0FBV25CLElBQU1DLGFBQWEsR0FBR1gsMkRBQVUsb0JBTTNCO0FBTkNXLE1BQUFBLGFBQWE7QUFPbkIsSUFBTUMsU0FBUyxHQUFHWiw2REFBWSxvQkFPekI7QUFQQ1ksTUFBQUEsU0FBUztBQVNmLElBQU1FLFdBQVcsR0FBR2QsMkRBQVUsb0JBRTdCO0FBRktjLE1BQUFBLFdBQVc7QUFJRixTQUFTQyxJQUFJLEdBQUc7O0lBRTNCLElBQTRCZCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBbkYzQyxNQW1GaUIsR0FBZUEsR0FBVyxHQUExQixFQW5GakIsU0FtRjRCLEdBQUlBLEdBQVcsR0FBZjtJQUV4QixJQUFNaUIsVUFBVSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUM1QixpQkFBaUI7UUFDakJOLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLHVEQUF1RDtLQUMxRDtJQUVELHFCQUNJLDhEQUFDckIsYUFBYTs7MEJBQ1YsOERBQUNILDREQUFRO2dCQUFDeUIsS0FBSyxFQUFDLG1CQUFtQjs7Ozs7b0JBQUU7MEJBRXJDLDhEQUFDcEIsVUFBVTswQkFDUCw0RUFBQ0UsZ0JBQWdCOzhCQUFDLE1BRWxCOzs7Ozt3QkFBbUI7Ozs7O29CQUNWOzBCQUViLDhEQUFDQyxpQkFBaUI7O2tDQUNkLDhEQUFDRyxhQUFhOzswQ0FDViw4REFBQ0MsYUFBYTs7a0RBQ1YsOERBQUNDLFNBQVM7d0NBQ05hLFNBQVMsRUFBQyxTQUFTO3dDQUNuQkMsWUFBWSxFQUFDLEtBQUs7d0NBQ2xCQyxXQUFXLEVBQUMsS0FBSzt3Q0FDakJDLElBQUksRUFBQyxNQUFNO3dDQUNYQyxRQUFRLEVBQUUsU0FBQ1YsQ0FBQzttREFBS0QsVUFBVTt5Q0FBQTt3Q0FDM0JZLFdBQVcsRUFBRWQsTUFBTTt3Q0FDbkJlLFNBQVMsRUFBQyxHQUFHO3dDQUNiQyxTQUFTLEVBQUMsSUFBSTt3Q0FDZEMsVUFBVSxFQUFDLE9BQU87d0NBQ2xCVixLQUFLLEVBQUVQLE1BQU07Ozs7OzRDQUNYO2tEQUNOLDhEQUFDUCxRQUFNO2tEQUFDLEtBQUc7Ozs7OzRDQUFTOzs7Ozs7b0NBQ1I7MENBQ2hCLDhEQUFDSixLQUFHOzs7O29DQUFPOzBDQUNYLDhEQUFDUyxXQUFXOzs7O29DQUFlOzs7Ozs7NEJBR2Y7a0NBQ2hCLDhEQUFDTixhQUFhO2tDQUFDLGlCQUFlOzs7Ozs0QkFBZ0I7Ozs7OztvQkFDOUI7Ozs7OztZQUVSLENBQ25CO0NBQ0o7R0FoRHVCTyxJQUFJO0FBQUpBLE1BQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3dhcC5qcz84ZjgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkSW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkSW5mb1wiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ29udGFpbmVyV3JhcCA9IHN0eWxlZC5tYWluYFxuICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGA7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgXG5jb25zdCBDb250cm9sbGVyQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ1LjIyZGVnLCByZ2IoMjE4LCA0NiwgMjM5KSwgcmdiKDQzLCAxMDYsIDI1NSksIHJnYig1NywgMjA4LCAyMTYpKSAwJSBjZW50ZXIgLyA0MDAlIDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjhiZTZcbiAgICAgIH1cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyOGJlNlxuICAgICAgfVxuICAgIGBcblxuY29uc3QgU3dhcENvbnRhaW5lcldyYXAgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwLjE0ZGVnLCByZ2JhKDAsIDE4MiwgMTkxLCAwLjE1KSAwJSwgcmdiYSgyNywgMjIsIDg5LCAwLjEpIDg2LjYxJSksIGxpbmVhci1ncmFkaWVudCgzMjEuODJkZWcsIHJnYigyNCwgMTksIDc3KSAwJSwgcmdiKDI3LCAyMiwgODkpIDEwMCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgXG5jb25zdCBDb25uZWN0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250OiAxNHB4LzE2cHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYFxuXG5jb25zdCBTd2FwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzgwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGBcblxuXG5jb25zdCBGcm9tQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6MTAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGBcbmNvbnN0IEZyb21JbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yc1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIFxuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgYFxuXG5jb25zdCBUb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dhcCgpIHtcblxuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IGNoZWNrSW5wdXQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIC8vL1teLVxcLjAtOV0vZywnJ1xuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAvLyBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW14tXFwuMC05XS9nLCAnJykpO1xuICAgIH0gXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyV3JhcD5cbiAgICAgICAgICAgIDxIZWFkSW5mbyB0aXRsZT1cIlN3YXAgLSBIZWF2eSBLaXRlXCIvPlxuXG4gICAgICAgICAgICA8Q29udHJvbGxlcj5cbiAgICAgICAgICAgICAgICA8Q29udHJvbGxlckJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgU3dhcFxuICAgICAgICAgICAgICAgIDwvQ29udHJvbGxlckJ1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udHJvbGxlcj5cblxuICAgICAgICAgICAgPFN3YXBDb250YWluZXJXcmFwPlxuICAgICAgICAgICAgICAgIDxTd2FwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8RnJvbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcm9tSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hlY2tJbnB1dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI3OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkVUSDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zyb21Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUb0NvbnRhaW5lcj48L1RvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgPC9Td2FwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxDb25uZWN0QnV0dG9uPkNvbm5lY3QgV2FsbGV0IDwvQ29ubmVjdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvU3dhcENvbnRhaW5lcldyYXA+XG5cbiAgICAgICAgPC9Db250YWluZXJXcmFwPlxuICAgIClcbn0iXSwibmFtZXMiOlsiSGVhZEluZm8iLCJzdHlsZWQiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lcldyYXAiLCJtYWluIiwiQ29udHJvbGxlciIsImRpdiIsIkNvbnRyb2xsZXJCdXR0b24iLCJTd2FwQ29udGFpbmVyV3JhcCIsIkNvbm5lY3RCdXR0b24iLCJidXR0b24iLCJTd2FwQ29udGFpbmVyIiwiRnJvbUNvbnRhaW5lciIsIkZyb21JbnB1dCIsImlucHV0IiwiVG9Db250YWluZXIiLCJTd2FwIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiY2hlY2tJbnB1dCIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJ0aXRsZSIsImlucHV0TW9kZSIsImF1dG9Db21wbGV0ZSIsImF1dG9Db3JyZWN0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJzcGVsbENoZWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/swap.js\n");

/***/ })

});