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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Swap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeadInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeadInfo */ \"./components/HeadInfo.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     max-width: 640px;\\n     width: 100%;\\n     display: flex;\\n     flex-direction: column;\\n        align-items: center;\\n\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 80px;\\n    text-align: center;\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    border-radius: 100px;\\n    padding: 10px;\\n    margin: 40px 0;\\n    background: linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216)) 0% center / 400% 100%;\\n    &:hover {\\n        background: #228be6\\n      }\\n      &:active {\\n        background: #228be6\\n      }\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    height: 400px;\\n    border-radius: 1.25rem;\\n    background: linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, rgb(24, 19, 77) 0%, rgb(27, 22, 89) 100%);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 90%;\\n    height: 50px;\\n    font: 14px/16px;\\n    margin: 10px 0;\\n    border: 1px solid grey;\\n    border-radius: 5px;\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 90%;\\n    height: 380px;\\n    padding: 15px;\\n    display: flex;\\n    margin-top: 1.25rem;\\n    background: inherit;\\n    border-radius: 15px;\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      width:100%;\\n      height:100px;\\n      display: flex;\\n      justify-content: space-around;\\n      border-radius: 30px;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      transition: opacity 0.2s\\n      font-weight: 500;\\n      font-size: 28px;\\n      \\n      border: none;\\n      flex: 1 1 auto;\\n    \"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nvar ContainerWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main(_templateObject());\n_c = ContainerWrap;\nvar Controller = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = Controller;\nvar ControllerButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = ControllerButton;\nvar SwapContainerWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = SwapContainerWrap;\nvar ConnectButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject4());\n_c4 = ConnectButton;\nvar SwapContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = SwapContainer;\nvar FromContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = FromContainer;\nvar FromInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input(_templateObject7());\n_c7 = FromInput;\nvar ToContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject8());\n_c8 = ToContainer;\nfunction Swap() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), amount = ref[0], setAmount = ref[1];\n    var checkInput = function(e) {\n        console.log(e.target.value);\n        ///[^-\\.0-9]/g,''\n        // setAmount(e.target.value.replace(/[^[0-9]*[.,]?[0-9]*$]/g, ''));\n        setAmount(e.target.value.replace(/(^\\d+$)|(^\\d{1,}.\\d{0,2}$)/g, \"\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContainerWrap, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Swap - Heavy Kite\"\n            }, void 0, false, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Controller, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ControllerButton, {\n                    children: \"Swap\"\n                }, void 0, false, {\n                    fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwapContainerWrap, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwapContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FromContainer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FromInput, {\n                                        inputMode: \"decimal\",\n                                        autoComplete: \"off\",\n                                        autoCorrect: \"off\",\n                                        type: \"text\",\n                                        pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                                        minLength: \"1\",\n                                        maxLength: \"79\",\n                                        spellCheck: \"false\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 118,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToContainer, {}, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectButton, {\n                        children: \"Connect Wallet \"\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                        lineNumber: 123,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imz/Desktop/coding/practice/pages/swap.js\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, this);\n};\n_s(Swap, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c9 = Swap;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n$RefreshReg$(_c, \"ContainerWrap\");\n$RefreshReg$(_c1, \"Controller\");\n$RefreshReg$(_c2, \"ControllerButton\");\n$RefreshReg$(_c3, \"SwapContainerWrap\");\n$RefreshReg$(_c4, \"ConnectButton\");\n$RefreshReg$(_c5, \"SwapContainer\");\n$RefreshReg$(_c6, \"FromContainer\");\n$RefreshReg$(_c7, \"FromInput\");\n$RefreshReg$(_c8, \"ToContainer\");\n$RefreshReg$(_c9, \"Swap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zd2FwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDVDtBQUNIOztBQUVqQyxJQUFNRyxhQUFhLEdBQUdGLDREQUFXLG1CQU81QjtBQVBDRSxLQUFBQSxhQUFhO0FBU25CLElBQU1FLFVBQVUsR0FBR0osMkRBQVUsb0JBR3hCO0FBSENJLE1BQUFBLFVBQVU7QUFJaEIsSUFBTUUsZ0JBQWdCLEdBQUdOLDJEQUFVLG9CQVk5QjtBQVpDTSxNQUFBQSxnQkFBZ0I7QUFjdEIsSUFBTUMsaUJBQWlCLEdBQUdQLDJEQUFVLG9CQVMvQjtBQVRDTyxNQUFBQSxpQkFBaUI7QUFVdkIsSUFBTUMsYUFBYSxHQUFHUiw4REFBYSxvQkFPOUI7QUFQQ1EsTUFBQUEsYUFBYTtBQVNuQixJQUFNRSxhQUFhLEdBQUdWLDJEQUFVLG9CQVEzQjtBQVJDVSxNQUFBQSxhQUFhO0FBV25CLElBQU1DLGFBQWEsR0FBR1gsMkRBQVUsb0JBTTNCO0FBTkNXLE1BQUFBLGFBQWE7QUFPbkIsSUFBTUMsU0FBUyxHQUFHWiw2REFBWSxvQkFPekI7QUFQQ1ksTUFBQUEsU0FBUztBQVNmLElBQU1FLFdBQVcsR0FBR2QsMkRBQVUsb0JBRTdCO0FBRktjLE1BQUFBLFdBQVc7QUFJRixTQUFTQyxJQUFJLEdBQUc7O0lBRTNCLElBQTRCZCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBbkYzQyxNQW1GaUIsR0FBZUEsR0FBVyxHQUExQixFQW5GakIsU0FtRjRCLEdBQUlBLEdBQVcsR0FBZjtJQUV4QixJQUFNaUIsVUFBVSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUM1QixpQkFBaUI7UUFDakIsbUVBQW1FO1FBQ25FTixTQUFTLENBQUNFLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEU7SUFFRCxxQkFDSSw4REFBQ3RCLGFBQWE7OzBCQUNWLDhEQUFDSCw0REFBUTtnQkFBQzBCLEtBQUssRUFBQyxtQkFBbUI7Ozs7O29CQUFFOzBCQUVyQyw4REFBQ3JCLFVBQVU7MEJBQ1AsNEVBQUNFLGdCQUFnQjs4QkFBQyxNQUVsQjs7Ozs7d0JBQW1COzs7OztvQkFDVjswQkFFYiw4REFBQ0MsaUJBQWlCOztrQ0FDZCw4REFBQ0csYUFBYTs7MENBQ1YsOERBQUNDLGFBQWE7O2tEQUNWLDhEQUFDQyxTQUFTO3dDQUNOYyxTQUFTLEVBQUMsU0FBUzt3Q0FDbkJDLFlBQVksRUFBQyxLQUFLO3dDQUNsQkMsV0FBVyxFQUFDLEtBQUs7d0NBQ2pCQyxJQUFJLEVBQUMsTUFBTTt3Q0FDWEMsT0FBTyxFQUFDLHFCQUFxQjt3Q0FDN0JDLFNBQVMsRUFBQyxHQUFHO3dDQUNiQyxTQUFTLEVBQUMsSUFBSTt3Q0FDZEMsVUFBVSxFQUFDLE9BQU87Ozs7OzRDQUNoQjtrREFDTiw4REFBQ3hCLFFBQU07a0RBQUMsS0FBRzs7Ozs7NENBQVM7Ozs7OztvQ0FDUjswQ0FDaEIsOERBQUNKLEtBQUc7Ozs7b0NBQU87MENBQ1gsOERBQUNTLFdBQVc7Ozs7b0NBQWU7Ozs7Ozs0QkFHZjtrQ0FDaEIsOERBQUNOLGFBQWE7a0NBQUMsaUJBQWU7Ozs7OzRCQUFnQjs7Ozs7O29CQUM5Qjs7Ozs7O1lBRVIsQ0FDbkI7Q0FDSjtHQTlDdUJPLElBQUk7QUFBSkEsTUFBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zd2FwLmpzPzhmODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRJbmZvXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWluZXJXcmFwID0gc3R5bGVkLm1haW5gXG4gICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYDtcblxuY29uc3QgQ29udHJvbGxlciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGBcbmNvbnN0IENvbnRyb2xsZXJCdXR0b24gPSBzdHlsZWQuZGl2YFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogNDBweCAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDUuMjJkZWcsIHJnYigyMTgsIDQ2LCAyMzkpLCByZ2IoNDMsIDEwNiwgMjU1KSwgcmdiKDU3LCAyMDgsIDIxNikpIDAlIGNlbnRlciAvIDQwMCUgMTAwJTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyOGJlNlxuICAgICAgfVxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjI4YmU2XG4gICAgICB9XG4gICAgYFxuXG5jb25zdCBTd2FwQ29udGFpbmVyV3JhcCA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDAuMTRkZWcsIHJnYmEoMCwgMTgyLCAxOTEsIDAuMTUpIDAlLCByZ2JhKDI3LCAyMiwgODksIDAuMSkgODYuNjElKSwgbGluZWFyLWdyYWRpZW50KDMyMS44MmRlZywgcmdiKDI0LCAxOSwgNzcpIDAlLCByZ2IoMjcsIDIyLCA4OSkgMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGBcbmNvbnN0IENvbm5lY3RCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQ6IDE0cHgvMTZweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBgXG5cbmNvbnN0IFN3YXBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYFxuXG5cbmNvbnN0IEZyb21Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGhlaWdodDoxMDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYFxuY29uc3QgRnJvbUlucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzXG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgXG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBgXG5cbmNvbnN0IFRvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2FwKCkge1xuXG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgY2hlY2tJbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgLy8vW14tXFwuMC05XS9nLCcnXG4gICAgICAgIC8vIHNldEFtb3VudChlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXlswLTldKlsuLF0/WzAtOV0qJF0vZywgJycpKTtcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoLyheXFxkKyQpfCheXFxkezEsfS5cXGR7MCwyfSQpL2csICcnKSk7XG4gICAgfSBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXJXcmFwPlxuICAgICAgICAgICAgPEhlYWRJbmZvIHRpdGxlPVwiU3dhcCAtIEhlYXZ5IEtpdGVcIi8+XG5cbiAgICAgICAgICAgIDxDb250cm9sbGVyPlxuICAgICAgICAgICAgICAgIDxDb250cm9sbGVyQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBTd2FwXG4gICAgICAgICAgICAgICAgPC9Db250cm9sbGVyQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250cm9sbGVyPlxuXG4gICAgICAgICAgICA8U3dhcENvbnRhaW5lcldyYXA+XG4gICAgICAgICAgICAgICAgPFN3YXBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxGcm9tQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyb21JbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIl5bMC05XSpbLixdP1swLTldKiRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjc5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkVUSDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zyb21Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUb0NvbnRhaW5lcj48L1RvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgPC9Td2FwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxDb25uZWN0QnV0dG9uPkNvbm5lY3QgV2FsbGV0IDwvQ29ubmVjdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvU3dhcENvbnRhaW5lcldyYXA+XG5cbiAgICAgICAgPC9Db250YWluZXJXcmFwPlxuICAgIClcbn0iXSwibmFtZXMiOlsiSGVhZEluZm8iLCJzdHlsZWQiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lcldyYXAiLCJtYWluIiwiQ29udHJvbGxlciIsImRpdiIsIkNvbnRyb2xsZXJCdXR0b24iLCJTd2FwQ29udGFpbmVyV3JhcCIsIkNvbm5lY3RCdXR0b24iLCJidXR0b24iLCJTd2FwQ29udGFpbmVyIiwiRnJvbUNvbnRhaW5lciIsIkZyb21JbnB1dCIsImlucHV0IiwiVG9Db250YWluZXIiLCJTd2FwIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiY2hlY2tJbnB1dCIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwidGl0bGUiLCJpbnB1dE1vZGUiLCJhdXRvQ29tcGxldGUiLCJhdXRvQ29ycmVjdCIsInR5cGUiLCJwYXR0ZXJuIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwic3BlbGxDaGVjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/swap.js\n");

/***/ })

});