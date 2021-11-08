webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLine.tsx":
/*!********************************************!*\
  !*** ./src/components/TopLine/TopLine.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TopLineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopLineChart */ \"./src/components/TopLine/TopLineChart.tsx\");\n/* harmony import */ var _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopLine.module.scss */ \"./src/components/TopLine/TopLine.module.scss\");\n/* harmony import */ var _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLine.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar smooth = function smooth(data) {\n  var window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n  var result = [];\n\n  for (var i = 0; i < data.length - window; i++) {\n    var inWindow = data.slice(i, i + window).reduce(function (a, b) {\n      return a + b;\n    });\n    result.push(inWindow);\n  }\n\n  return result;\n};\n\nvar getPercentArray = function getPercentArray(percentage) {\n  return [100 - percentage * 100, percentage * 100];\n};\n\nvar TopLine = function TopLine(props) {\n  _s();\n\n  var summaryData = props.summaryData;\n  var totalRidershipHistory = summaryData.totalRidershipHistory,\n      totalServiceHistory = summaryData.totalServiceHistory,\n      totalRidershipPercentage = summaryData.totalRidershipPercentage,\n      totalServicePercentage = summaryData.totalServicePercentage,\n      totalRoutesCancelled = summaryData.totalRoutesCancelled,\n      totalReducedService = summaryData.totalReducedService,\n      totalIncreasedService = summaryData.totalIncreasedService;\n  var labelArray = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return [\"pre-covid\"].concat(Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(totalRidershipHistory.length - 2).fill(\"\")), [\"current\"]);\n  }, []);\n  var pieRidership = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: [\"\", \"current\"],\n      datasets: [{\n        strokeColor: \"transparent\",\n        backgroundColor: [\"#D3D3D3\", \"#D31A2B\"],\n        data: getPercentArray(totalRidershipPercentage)\n      }]\n    };\n  }, [totalRidershipPercentage]);\n  var lineRidership = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: labelArray,\n      datasets: [{\n        data: smooth(totalRidershipHistory),\n        fill: false,\n        tension: 0,\n        borderColor: \"#D31A2B\"\n      }]\n    };\n  }, [labelArray, totalRidershipHistory]);\n  var pieService = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: [\"\", \"current\"],\n      datasets: [{\n        backgroundColor: [\"#D3D3D3\", \"#D31A2B\"],\n        data: getPercentArray(totalServicePercentage)\n      }]\n    };\n  }, [totalServicePercentage]);\n  var lineService = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: labelArray,\n      datasets: [{\n        data: smooth(totalServiceHistory),\n        fill: false,\n        tension: 0,\n        borderColor: \"#D31A2B\"\n      }]\n    };\n  }, [totalServiceHistory]);\n  return __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.topLine,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }, \"Total Ridership\"), __jsx(_TopLineChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sparklineData: lineRidership,\n    pieData: pieRidership,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 21\n    }\n  }, Math.round(totalRidershipPercentage * 100), \"%\"), \" of pre-pandemic weekday ridership\")), __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, \"Total Service\"), __jsx(_TopLineChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sparklineData: lineService,\n    pieData: pieService,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 21\n    }\n  }, Math.round(totalServicePercentage * 100), \"%\"), \" of pre-pandemic weekday service\")), __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble, _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bad),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 29\n    }\n  }, totalRoutesCancelled)), \" \", \"routes canceled\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 29\n    }\n  }, totalReducedService)), \" \", \"routes with reduced service\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 29\n    }\n  }, totalIncreasedService)), \" \", \"routes with increased service\"))));\n};\n\n_s(TopLine, \"f/1X4X0heRWo2qShBYOVSxpDATs=\");\n\n_c = TopLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLine);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lLnRzeD8zMTNlIl0sIm5hbWVzIjpbInNtb290aCIsImRhdGEiLCJ3aW5kb3ciLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiaW5XaW5kb3ciLCJzbGljZSIsInJlZHVjZSIsImEiLCJiIiwicHVzaCIsImdldFBlcmNlbnRBcnJheSIsInBlcmNlbnRhZ2UiLCJUb3BMaW5lIiwicHJvcHMiLCJzdW1tYXJ5RGF0YSIsInRvdGFsUmlkZXJzaGlwSGlzdG9yeSIsInRvdGFsU2VydmljZUhpc3RvcnkiLCJ0b3RhbFJpZGVyc2hpcFBlcmNlbnRhZ2UiLCJ0b3RhbFNlcnZpY2VQZXJjZW50YWdlIiwidG90YWxSb3V0ZXNDYW5jZWxsZWQiLCJ0b3RhbFJlZHVjZWRTZXJ2aWNlIiwidG90YWxJbmNyZWFzZWRTZXJ2aWNlIiwibGFiZWxBcnJheSIsInVzZU1lbW8iLCJBcnJheSIsImZpbGwiLCJwaWVSaWRlcnNoaXAiLCJsYWJlbHMiLCJkYXRhc2V0cyIsInN0cm9rZUNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGluZVJpZGVyc2hpcCIsInRlbnNpb24iLCJib3JkZXJDb2xvciIsInBpZVNlcnZpY2UiLCJsaW5lU2VydmljZSIsInN0eWxlcyIsInRvcExpbmUiLCJjb2x1bW4iLCJNYXRoIiwicm91bmQiLCJjbGFzc05hbWVzIiwiYnViYmxlIiwiYmFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBRUE7O0FBTUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFpQztBQUFBLE1BQWhCQyxNQUFnQix1RUFBUCxFQUFPO0FBQzVDLE1BQU1DLE1BQWdCLEdBQUcsRUFBekI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxJQUFJLENBQUNJLE1BQUwsR0FBY0gsTUFBbEMsRUFBMENFLENB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QXNIU0Esc0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub3BMaW5lL1RvcExpbmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCB7IFN1bW1hcnlEYXRhIH0gZnJvbSBcInR5cGVzXCI7XG5cbmltcG9ydCBUb3BMaW5lQ2hhcnQgZnJvbSBcIi4vVG9wTGluZUNoYXJ0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVG9wTGluZS5tb2R1bGUuc2Nzc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHN1bW1hcnlEYXRhOiBTdW1tYXJ5RGF0YTtcbn07XG5cbmNvbnN0IHNtb290aCA9IChkYXRhOiBudW1iZXJbXSwgd2luZG93ID0gMjApID0+IHtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCAtIHdpbmRvdzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGluV2luZG93ID0gZGF0YS5zbGljZShpLCBpICsgd2luZG93KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcbiAgICAgICAgcmVzdWx0LnB1c2goaW5XaW5kb3cpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0UGVyY2VudEFycmF5ID0gKHBlcmNlbnRhZ2U6IGFueSkgPT4ge1xuICAgIHJldHVybiBbMTAwIC0gcGVyY2VudGFnZSAqIDEwMCwgcGVyY2VudGFnZSAqIDEwMF07XG59O1xuXG5jb25zdCBUb3BMaW5lID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc3VtbWFyeURhdGEgfSA9IHByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgICAgdG90YWxSaWRlcnNoaXBIaXN0b3J5LFxuICAgICAgICB0b3RhbFNlcnZpY2VIaXN0b3J5LFxuICAgICAgICB0b3RhbFJpZGVyc2hpcFBlcmNlbnRhZ2UsXG4gICAgICAgIHRvdGFsU2VydmljZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRvdGFsUm91dGVzQ2FuY2VsbGVkLFxuICAgICAgICB0b3RhbFJlZHVjZWRTZXJ2aWNlLFxuICAgICAgICB0b3RhbEluY3JlYXNlZFNlcnZpY2UsXG4gICAgfSA9IHN1bW1hcnlEYXRhO1xuXG4gICAgY29uc3QgbGFiZWxBcnJheSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcInByZS1jb3ZpZFwiLCAuLi5BcnJheSh0b3RhbFJpZGVyc2hpcEhpc3RvcnkubGVuZ3RoIC0gMikuZmlsbChcIlwiKSwgXCJjdXJyZW50XCJdLFxuICAgICAgICBbXVxuICAgICk7XG5cbiAgICBjb25zdCBwaWVSaWRlcnNoaXAgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWxzOiBbXCJcIiwgXCJjdXJyZW50XCJdLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI0QzRDNEM1wiLCBcIiNEMzFBMkJcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFBlcmNlbnRBcnJheSh0b3RhbFJpZGVyc2hpcFBlcmNlbnRhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgW3RvdGFsUmlkZXJzaGlwUGVyY2VudGFnZV1cbiAgICApO1xuXG4gICAgY29uc3QgbGluZVJpZGVyc2hpcCA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVsQXJyYXksXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogc21vb3RoKHRvdGFsUmlkZXJzaGlwSGlzdG9yeSksXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjRDMxQTJCXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBbbGFiZWxBcnJheSwgdG90YWxSaWRlcnNoaXBIaXN0b3J5XVxuICAgICk7XG5cbiAgICBjb25zdCBwaWVTZXJ2aWNlID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICAgIGxhYmVsczogW1wiXCIsIFwiY3VycmVudFwiXSxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiNEM0QzRDNcIiwgXCIjRDMxQTJCXCJdLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZXRQZXJjZW50QXJyYXkodG90YWxTZXJ2aWNlUGVyY2VudGFnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBbdG90YWxTZXJ2aWNlUGVyY2VudGFnZV1cbiAgICApO1xuXG4gICAgY29uc3QgbGluZVNlcnZpY2UgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbEFycmF5LFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNtb290aCh0b3RhbFNlcnZpY2VIaXN0b3J5KSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNEMzFBMkJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIFt0b3RhbFNlcnZpY2VIaXN0b3J5XVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcExpbmV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgIDxoND5Ub3RhbCBSaWRlcnNoaXA8L2g0PlxuICAgICAgICAgICAgICAgIDxUb3BMaW5lQ2hhcnQgc3BhcmtsaW5lRGF0YT17bGluZVJpZGVyc2hpcH0gcGllRGF0YT17cGllUmlkZXJzaGlwfSAvPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntNYXRoLnJvdW5kKHRvdGFsUmlkZXJzaGlwUGVyY2VudGFnZSAqIDEwMCl9JTwvc3Ryb25nPiBvZiBwcmUtcGFuZGVtaWNcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheSByaWRlcnNoaXBcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICAgICAgICA8aDQ+VG90YWwgU2VydmljZTwvaDQ+XG4gICAgICAgICAgICAgICAgPFRvcExpbmVDaGFydCBzcGFya2xpbmVEYXRhPXtsaW5lU2VydmljZX0gcGllRGF0YT17cGllU2VydmljZX0gLz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57TWF0aC5yb3VuZCh0b3RhbFNlcnZpY2VQZXJjZW50YWdlICogMTAwKX0lPC9zdHJvbmc+IG9mIHByZS1wYW5kZW1pY1xuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5IHNlcnZpY2VcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idWJibGUsIHN0eWxlcy5iYWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG90YWxSb3V0ZXNDYW5jZWxsZWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzIGNhbmNlbGVkXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnViYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG90YWxSZWR1Y2VkU2VydmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMgd2l0aCByZWR1Y2VkIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idWJibGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b3RhbEluY3JlYXNlZFNlcnZpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzIHdpdGggaW5jcmVhc2VkIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BMaW5lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLine.tsx\n");

/***/ })

})