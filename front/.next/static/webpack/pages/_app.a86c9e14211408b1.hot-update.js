"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/store */ \"./utils/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    padding: 0.5rem 1rem;\\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\\n    font: 14px/20px Helvetica;\\n    \\n    display: flex;\\n    z-index: 100%;\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    margin: 0 auto;\\n   \\n    align-items: center;\\n    line-height: 50px;\\n\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin-right: 28px;\\n    height: 100%;\\n    padding: 4px 0;\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font: nomal nomal 600 14px/20px Inter;\\n    border: 1px solid #44454B\\n    cursor: pointer;\\n    height: 36px;\\n    display: flex;\\n    padding: 8px 20px;\\n    background: linear-gradient(180deg, #252525 0%, #191919 100%);\\n    align-items: center;\\n    margin-right: 10px;\\n    border-radius: 4px;\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font: nomal nomal 600 14px/20px Inter;\\n    border: 0;\\n    cursor: pointer;\\n    height: 36px;\\n    display: flex;\\n    padding: 8px 20px;\\n    background: #D01F36;\\n    transition: .2s all ease-out;\\n    align-items: center;\\n    border-radius: 4px;\\n    padding: 4px 0;\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: inlin-block;\\n    padding: 6px 12px;\\n    margin-left: 14px;\\n    margin-right: -18px;\\n    border-radius: 4px;\\n    background: #161616;\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// max-width: calc(100vw - 80px);\nvar Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nav(_templateObject());\n_c = Container;\nvar NavUl = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject1());\n_c1 = NavUl;\nvar NavLi = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li(_templateObject2());\n_c2 = NavLi;\nvar ChainButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject3());\n_c3 = ChainButton;\nvar WalletButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject4());\n_c4 = WalletButton;\nvar WalletButtonSpan = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject5());\n_c5 = WalletButtonSpan;\nfunction Nav() {\n    _s();\n    var ref = (0,_utils_store__WEBPACK_IMPORTED_MODULE_3__.useStore)(function(state) {\n        return {\n            walletAddress: state.walletAddress,\n            balance: state.balance,\n            network: state.network\n        };\n    }), walletAddress = ref.walletAddress, balance = ref.balance, network = ref.network;\n    var ref1 = (0,_utils_store__WEBPACK_IMPORTED_MODULE_3__.useStore)(function(state) {\n        return {\n            setWalletAddress: state.setWalletAddress,\n            setBalance: state.setBalance,\n            setNetwork: state.setNetwork\n        };\n    }), setWalletAddress = ref1.setWalletAddress, setBalance = ref1.setBalance, setNetwork = ref1.setNetwork;\n    var connectWallet = function() {\n        if (window.ethereum) {\n            window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            }).then(function(res) {\n                if (res[0]) {\n                    setWalletAddress(res[0]);\n                    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getWalletInfo)(res[0], {\n                        setBalance: setBalance,\n                        setNetwork: setNetwork\n                    });\n                    console.log(res[0]);\n                }\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_5__.detectNetworkChange)();\n    }, [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavUl, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLi, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/logo_transparent2.png\",\n                                    height: \"50px\",\n                                    style: {\n                                        verticalAlign: \"middle\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                lineNumber: 107,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLi, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/staking\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Staking\"\n                            }, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                lineNumber: 116,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                            lineNumber: 115,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLi, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/ICO\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"ICO\"\n                            }, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                lineNumber: 121,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                            lineNumber: 120,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLi, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/swap\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                lineNumber: 126,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavUl, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLi, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainButton, {\n                            children: [\n                                network ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/\".concat(network, \".svg\"),\n                                    style: {\n                                        width: \"16px\",\n                                        height: \"16px\",\n                                        marginRight: \"6px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 21\n                                }, this) : null,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: network\n                                }, void 0, false, {\n                                    fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                            lineNumber: 132,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                        lineNumber: 131,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLi, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletButton, {\n                            onClick: connectWallet,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        background: \"#D01F36\"\n                                    },\n                                    children: parseFloat(balance).toFixed(5)\n                                }, void 0, false, {\n                                    fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletButtonSpan, {\n                                    children: walletAddress ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.converAddress)(walletAddress) : \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                                    lineNumber: 144,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                            lineNumber: 142,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imz/Desktop/coding/practice/components/Nav.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n};\n_s(Nav, \"y4rqUmDc977/s3C5wbiEdbayBKA=\", false, function() {\n    return [\n        _utils_store__WEBPACK_IMPORTED_MODULE_3__.useStore,\n        _utils_store__WEBPACK_IMPORTED_MODULE_3__.useStore\n    ];\n});\n_c6 = Nav;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"NavUl\");\n$RefreshReg$(_c2, \"NavLi\");\n$RefreshReg$(_c3, \"ChainButton\");\n$RefreshReg$(_c4, \"WalletButton\");\n$RefreshReg$(_c5, \"WalletButtonSpan\");\n$RefreshReg$(_c6, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsU0FBUztxQ0FBRTs4Q0FBR0MsVUFBVSxDQUFDekIsT0FBTyxDQUFDLENBQUMwQixPQUFPLENBQUMsQ0FBQyxDQUFDOzs7Ozt3Q0FBUTs4Q0FDOUUsOERBQUMvQixnQkFBZ0I7OENBQ1hJLGFBQWEsR0FDZmYscURBQWEsQ0FBQ2UsYUFBYSxDQUFDLEdBQUcsZ0JBQWdCOzs7Ozt3Q0FFaEM7Ozs7OztnQ0FDUjs7Ozs7NEJBQ1g7Ozs7OztvQkFFSjs7Ozs7O1lBQ0UsQ0FDYjtDQUNKO0dBdEZ1QkYsR0FBRzs7UUFFcUJoQixrREFBUTtRQU1DQSxrREFBUTs7O0FBUnpDZ0IsTUFBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi91dGlscy9zdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkZXRlY3ROZXR3b3JrQ2hhbmdlLCBjb252ZXJBZGRyZXNzLCBnZXRXYWxsZXRJbmZvIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA4MHB4KTtcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBmb250OiAxNHB4LzIwcHggSGVsdmV0aWNhO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDogMTAwJTtcbiAgICBgO1xuXG5jb25zdCBOYXZVbCA9IHN0eWxlZC51bGBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcblxuICAgIGA7XG5jb25zdCBOYXZMaSA9IHN0eWxlZC5saWBcbiAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIGA7XG5cbmNvbnN0IENoYWluQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBmb250OiBub21hbCBub21hbCA2MDAgMTRweC8yMHB4IEludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ1NEJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI1MjUyNSAwJSwgIzE5MTkxOSAxMDAlKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYDtcblxuY29uc3QgV2FsbGV0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBmb250OiBub21hbCBub21hbCA2MDAgMTRweC8yMHB4IEludGVyO1xuICAgIGJvcmRlcjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0QwMUYzNjtcbiAgICB0cmFuc2l0aW9uOiAuMnMgYWxsIGVhc2Utb3V0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIGA7XG5jb25zdCBXYWxsZXRCdXR0b25TcGFuID0gc3R5bGVkLnNwYW5gXG4gICAgZGlzcGxheTogaW5saW4tYmxvY2s7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMThweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogIzE2MTYxNjtcbiAgICBgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcblxuICAgIGNvbnN0IHsgd2FsbGV0QWRkcmVzcywgYmFsYW5jZSwgbmV0d29ya30gID0gdXNlU3RvcmUoc3RhdGUgPT4gKHtcbiAgICAgICAgd2FsbGV0QWRkcmVzczogc3RhdGUud2FsbGV0QWRkcmVzcyxcbiAgICAgICAgYmFsYW5jZTogc3RhdGUuYmFsYW5jZSxcbiAgICAgICAgbmV0d29yazogc3RhdGUubmV0d29yayxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB7IHNldFdhbGxldEFkZHJlc3MsIHNldEJhbGFuY2UsIHNldE5ldHdvcmsgfSA9IHVzZVN0b3JlKHN0YXRlID0+ICh7XG4gICAgXG4gICAgICAgIHNldFdhbGxldEFkZHJlc3M6IHN0YXRlLnNldFdhbGxldEFkZHJlc3MsXG4gICAgICAgIHNldEJhbGFuY2U6IHN0YXRlLnNldEJhbGFuY2UsXG4gICAgICAgIHNldE5ldHdvcms6IHN0YXRlLnNldE5ldHdvcmssXG4gICAgICB9KSk7XG4gICAgXG4gICAgXG4gICAgICBjb25zdCBjb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogYGV0aF9yZXF1ZXN0QWNjb3VudHNgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGlmKHJlc1swXSkge1xuICAgICAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3MocmVzWzBdKTtcbiAgICAgICAgICAgICAgICBnZXRXYWxsZXRJbmZvKHJlc1swXSwgeyBzZXRCYWxhbmNlLCBzZXROZXR3b3JrIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc1swXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRldGVjdE5ldHdvcmtDaGFuZ2UoKTtcbiAgICB9LCBbbmV0d29ya10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8TmF2VWw+XG4gICAgICAgICAgICAgICAgPE5hdkxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29fdHJhbnNwYXJlbnQyLnBuZ1wiIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05hdkxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdGFraW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5TdGFraW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZMaT5cbiAgICAgICAgICAgICAgICA8TmF2TGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvSUNPXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5JQ088L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05hdkxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zd2FwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Td2FwPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L05hdkxpPlxuICAgICAgICA8L05hdlVsPlxuICAgICAgICA8TmF2VWw+XG4gICAgICAgICAgICA8TmF2TGk+XG4gICAgICAgICAgICAgICAgPENoYWluQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7bmV0d29yayA/XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ltYWdlcy8ke25ldHdvcmt9LnN2Z2B9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDpcIjE2cHhcIiwgaGVpZ2h0OiBcIjE2cHhcIiwgbWFyZ2luUmlnaHQ6XCI2cHhcIiB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmV0d29ya308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9DaGFpbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvTmF2TGk+XG4gICAgICAgICAgICA8TmF2TGk+XG4gICAgICAgICAgICAgICAgPFdhbGxldEJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNEMDFGMzZcIiB9fT57cGFyc2VGbG9hdChiYWxhbmNlKS50b0ZpeGVkKDUpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFdhbGxldEJ1dHRvblNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdhbGxldEFkZHJlc3MgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlckFkZHJlc3Mod2FsbGV0QWRkcmVzcykgOiBcIkNvbm5lY3QgV2FsbGV0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvV2FsbGV0QnV0dG9uU3Bhbj5cbiAgICAgICAgICAgICAgICA8L1dhbGxldEJ1dHRvbj5cbiAgICAgICAgICAgIDwvTmF2TGk+XG4gICAgICAgICAgIFxuICAgICAgICA8L05hdlVsPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVkIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJkZXRlY3ROZXR3b3JrQ2hhbmdlIiwiY29udmVyQWRkcmVzcyIsImdldFdhbGxldEluZm8iLCJDb250YWluZXIiLCJuYXYiLCJOYXZVbCIsInVsIiwiTmF2TGkiLCJsaSIsIkNoYWluQnV0dG9uIiwiYnV0dG9uIiwiV2FsbGV0QnV0dG9uIiwiV2FsbGV0QnV0dG9uU3BhbiIsInNwYW4iLCJOYXYiLCJzdGF0ZSIsIndhbGxldEFkZHJlc3MiLCJiYWxhbmNlIiwibmV0d29yayIsInNldFdhbGxldEFkZHJlc3MiLCJzZXRCYWxhbmNlIiwic2V0TmV0d29yayIsImNvbm5lY3RXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImhyZWYiLCJhIiwiaW1nIiwic3JjIiwiaGVpZ2h0Iiwic3R5bGUiLCJ2ZXJ0aWNhbEFsaWduIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});