webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLine.tsx":
/*!********************************************!*\
  !*** ./src/components/TopLine/TopLine.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_LineCard_ServiceRidershipChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/LineCard/ServiceRidershipChart */ \"./src/components/LineCard/ServiceRidershipChart.tsx\");\n/* harmony import */ var _TopLineChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopLineChart */ \"./src/components/TopLine/TopLineChart.tsx\");\n/* harmony import */ var _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopLine.module.scss */ \"./src/components/TopLine/TopLine.module.scss\");\n/* harmony import */ var _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLine.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar normalize = function normalize(data) {\n  var _data = Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, 1),\n      baseline = _data[0];\n\n  var normalized = [];\n\n  for (var i = 0; i < data.length; i++) {\n    normalized.push(data[i] / baseline);\n  }\n\n  return normalized;\n};\n\nvar smooth = function smooth(data) {\n  var window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n  var result = [];\n\n  for (var i = 0; i < data.length - window; i++) {\n    var inWindow = data.slice(i, i + window).reduce(function (a, b) {\n      return a + b;\n    });\n    result.push(inWindow);\n  }\n\n  return result;\n};\n\nvar getPercentArray = function getPercentArray(percentage) {\n  return [100 - percentage * 100, percentage * 100];\n};\n\nvar TopLine = function TopLine(props) {\n  _s();\n\n  var summaryData = props.summaryData;\n  var totalRidershipHistory = summaryData.totalRidershipHistory,\n      totalServiceHistory = summaryData.totalServiceHistory,\n      totalRidershipPercentage = summaryData.totalRidershipPercentage,\n      totalServicePercentage = summaryData.totalServicePercentage,\n      totalRoutesCancelled = summaryData.totalRoutesCancelled,\n      totalReducedService = summaryData.totalReducedService,\n      totalIncreasedService = summaryData.totalIncreasedService,\n      startDateString = summaryData.startDate;\n  var startDate = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return new Date(startDateString);\n  }, [startDateString]);\n  var labels = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return Object(components_LineCard_ServiceRidershipChart__WEBPACK_IMPORTED_MODULE_4__[\"getChartLabels\"])(startDate);\n  }, [startDate]);\n  var endLabels = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return [\"pre-covid\"].concat(Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(totalRidershipHistory.length - 2).fill(\"\")), [\"current\"]);\n  }, []);\n  var pieRidership = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return {\n      labels: [\"\", \"current\"],\n      datasets: [{\n        strokeColor: \"transparent\",\n        backgroundColor: [\"#D3D3D3\", \"#D31A2B\"],\n        data: getPercentArray(totalRidershipPercentage)\n      }]\n    };\n  }, [totalRidershipPercentage]);\n  var lineRidership = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return {\n      labels: endLabels,\n      datasets: [{\n        data: smooth(totalRidershipHistory),\n        fill: false,\n        tension: 0,\n        borderColor: \"#D31A2B\",\n        labels: labels\n      }]\n    };\n  }, [labels, totalRidershipHistory]);\n  var pieService = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return {\n      labels: [\"\", \"current\"],\n      datasets: [{\n        backgroundColor: [\"#D3D3D3\", \"#D31A2B\"],\n        data: getPercentArray(totalServicePercentage)\n      }]\n    };\n  }, [totalServicePercentage]);\n  var lineService = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return {\n      labels: endLabels,\n      datasets: [{\n        data: smooth(totalServiceHistory),\n        fill: false,\n        tension: 0,\n        borderColor: \"#D31A2B\",\n        labels: labels\n      }]\n    };\n  }, [totalServiceHistory]);\n  return __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.topLine,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }, \"Total Ridership\"), __jsx(_TopLineChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sparklineData: lineRidership,\n    pieData: pieRidership,\n    label: \"ridership\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 21\n    }\n  }, Math.round(totalRidershipPercentage * 100), \"%\"), \" of pre-pandemic weekday ridership\")), __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 17\n    }\n  }, \"Total Service\"), __jsx(_TopLineChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sparklineData: lineService,\n    pieData: pieService,\n    label: \"service\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 21\n    }\n  }, Math.round(totalServicePercentage * 100), \"%\"), \" of pre-pandemic weekday service\")), __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bubble, _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bad),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 29\n    }\n  }, totalRoutesCancelled)), \" \", \"routes canceled\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bubble, _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.warning),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 29\n    }\n  }, totalReducedService)), \" \", \"routes with reduced service\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bubble, _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.good),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 29\n    }\n  }, totalIncreasedService)), \" \", \"routes with increased service\"))));\n};\n\n_s(TopLine, \"4QjgPkjxoJaDlYY6ShaKv54b2T0=\");\n\n_c = TopLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLine);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lLnRzeD8zMTNlIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZSIsImRhdGEiLCJiYXNlbGluZSIsIm5vcm1hbGl6ZWQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInNtb290aCIsIndpbmRvdyIsInJlc3VsdCIsImluV2luZG93Iiwic2xpY2UiLCJyZWR1Y2UiLCJhIiwiYiIsImdldFBlcmNlbnRBcnJheSIsInBlcmNlbnRhZ2UiLCJUb3BMaW5lIiwicHJvcHMiLCJzdW1tYXJ5RGF0YSIsInRvdGFsUmlkZXJzaGlwSGlzdG9yeSIsInRvdGFsU2VydmljZUhpc3RvcnkiLCJ0b3RhbFJpZGVyc2hpcFBlcmNlbnRhZ2UiLCJ0b3RhbFNlcnZpY2VQZXJjZW50YWdlIiwidG90YWxSb3V0ZXNDYW5jZWxsZWQiLCJ0b3RhbFJlZHVjZWRTZXJ2aWNlIiwidG90YWxJbmNyZWFzZWRTZXJ2aWNlIiwic3RhcnREYXRlU3RyaW5nIiwic3RhcnREYXRlIiwidXNlTWVtbyIsIkRhdGUiLCJsYWJlbHMiLCJnZXRDaGFydExhYmVscyIsImVuZExhYmVscyIsIkFycmF5IiwiZmlsbCIsInBpZVJpZGVyc2hpcCIsImRhdGFzZXRzIiwic3Ryb2tlQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaW5lUmlkZXJzaGlwIiwidGVuc2lvbiIsImJvcmRlckNvbG9yIiwicGllU2VydmljZSIsImxpbmVTZXJ2aWNlIiwic3R5bGVzIiwidG9wTGluZSIsImNvbHVtbiIsIk1hdGgiLCJyb3VuZCIsImNsYXNzTmFtZXMiLCJidWJibGUiLCJiYWQiLCJ3YXJuaW5nIiwiZ29vZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7O0FBTUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFvQjtBQUFBLCtLQUNmQSxJQURlO0FBQUEsTUFDM0JDLFFB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCB7IFN1bW1hcnlEYXRhIH0gZnJvbSBcInR5cGVzXCI7XG5pbXBvcnQgeyBnZXRDaGFydExhYmVscyB9IGZyb20gXCJjb21wb25lbnRzL0xpbmVDYXJkL1NlcnZpY2VSaWRlcnNoaXBDaGFydFwiO1xuXG5pbXBvcnQgVG9wTGluZUNoYXJ0IGZyb20gXCIuL1RvcExpbmVDaGFydFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcExpbmUubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBzdW1tYXJ5RGF0YTogU3VtbWFyeURhdGE7XG59O1xuXG5jb25zdCBub3JtYWxpemUgPSAoZGF0YTogbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCBbYmFzZWxpbmVdID0gZGF0YTtcbiAgICBjb25zdCBub3JtYWxpemVkOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBub3JtYWxpemVkLnB1c2goZGF0YVtpXSAvIGJhc2VsaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59O1xuXG5jb25zdCBzbW9vdGggPSAoZGF0YTogbnVtYmVyW10sIHdpbmRvdyA9IDIwKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggLSB3aW5kb3c7IGkrKykge1xuICAgICAgICBjb25zdCBpbldpbmRvdyA9IGRhdGEuc2xpY2UoaSwgaSArIHdpbmRvdykucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gICAgICAgIHJlc3VsdC5wdXNoKGluV2luZG93KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldFBlcmNlbnRBcnJheSA9IChwZXJjZW50YWdlOiBhbnkpID0+IHtcbiAgICByZXR1cm4gWzEwMCAtIHBlcmNlbnRhZ2UgKiAxMDAsIHBlcmNlbnRhZ2UgKiAxMDBdO1xufTtcblxuY29uc3QgVG9wTGluZSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHN1bW1hcnlEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCB7XG4gICAgICAgIHRvdGFsUmlkZXJzaGlwSGlzdG9yeSxcbiAgICAgICAgdG90YWxTZXJ2aWNlSGlzdG9yeSxcbiAgICAgICAgdG90YWxSaWRlcnNoaXBQZXJjZW50YWdlLFxuICAgICAgICB0b3RhbFNlcnZpY2VQZXJjZW50YWdlLFxuICAgICAgICB0b3RhbFJvdXRlc0NhbmNlbGxlZCxcbiAgICAgICAgdG90YWxSZWR1Y2VkU2VydmljZSxcbiAgICAgICAgdG90YWxJbmNyZWFzZWRTZXJ2aWNlLFxuICAgICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZVN0cmluZyxcbiAgICB9ID0gc3VtbWFyeURhdGE7XG5cbiAgICBjb25zdCBzdGFydERhdGUgPSB1c2VNZW1vKCgpID0+IG5ldyBEYXRlKHN0YXJ0RGF0ZVN0cmluZyksIFtzdGFydERhdGVTdHJpbmddKTtcbiAgICBjb25zdCBsYWJlbHMgPSB1c2VNZW1vKCgpID0+IGdldENoYXJ0TGFiZWxzKHN0YXJ0RGF0ZSksIFtzdGFydERhdGVdKTtcblxuICAgIGNvbnN0IGVuZExhYmVscyA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcInByZS1jb3ZpZFwiLCAuLi5BcnJheSh0b3RhbFJpZGVyc2hpcEhpc3RvcnkubGVuZ3RoIC0gMikuZmlsbChcIlwiKSwgXCJjdXJyZW50XCJdLFxuICAgICAgICBbXVxuICAgICk7XG5cbiAgICBjb25zdCBwaWVSaWRlcnNoaXAgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWxzOiBbXCJcIiwgXCJjdXJyZW50XCJdLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI0QzRDNEM1wiLCBcIiNEMzFBMkJcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFBlcmNlbnRBcnJheSh0b3RhbFJpZGVyc2hpcFBlcmNlbnRhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgW3RvdGFsUmlkZXJzaGlwUGVyY2VudGFnZV1cbiAgICApO1xuXG4gICAgY29uc3QgbGluZVJpZGVyc2hpcCA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgICBsYWJlbHM6IGVuZExhYmVscyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzbW9vdGgodG90YWxSaWRlcnNoaXBIaXN0b3J5KSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNEMzFBMkJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBbbGFiZWxzLCB0b3RhbFJpZGVyc2hpcEhpc3RvcnldXG4gICAgKTtcblxuICAgIGNvbnN0IHBpZVNlcnZpY2UgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWxzOiBbXCJcIiwgXCJjdXJyZW50XCJdLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI0QzRDNEM1wiLCBcIiNEMzFBMkJcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFBlcmNlbnRBcnJheSh0b3RhbFNlcnZpY2VQZXJjZW50YWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIFt0b3RhbFNlcnZpY2VQZXJjZW50YWdlXVxuICAgICk7XG5cbiAgICBjb25zdCBsaW5lU2VydmljZSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgICBsYWJlbHM6IGVuZExhYmVscyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzbW9vdGgodG90YWxTZXJ2aWNlSGlzdG9yeSksXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjRDMxQTJCXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgW3RvdGFsU2VydmljZUhpc3RvcnldXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wTGluZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0+XG4gICAgICAgICAgICAgICAgPGg0PlRvdGFsIFJpZGVyc2hpcDwvaDQ+XG4gICAgICAgICAgICAgICAgPFRvcExpbmVDaGFydFxuICAgICAgICAgICAgICAgICAgICBzcGFya2xpbmVEYXRhPXtsaW5lUmlkZXJzaGlwfVxuICAgICAgICAgICAgICAgICAgICBwaWVEYXRhPXtwaWVSaWRlcnNoaXB9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicmlkZXJzaGlwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntNYXRoLnJvdW5kKHRvdGFsUmlkZXJzaGlwUGVyY2VudGFnZSAqIDEwMCl9JTwvc3Ryb25nPiBvZiBwcmUtcGFuZGVtaWNcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheSByaWRlcnNoaXBcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICAgICAgICA8aDQ+VG90YWwgU2VydmljZTwvaDQ+XG4gICAgICAgICAgICAgICAgPFRvcExpbmVDaGFydCBzcGFya2xpbmVEYXRhPXtsaW5lU2VydmljZX0gcGllRGF0YT17cGllU2VydmljZX0gbGFiZWw9XCJzZXJ2aWNlXCIgLz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57TWF0aC5yb3VuZCh0b3RhbFNlcnZpY2VQZXJjZW50YWdlICogMTAwKX0lPC9zdHJvbmc+IG9mIHByZS1wYW5kZW1pY1xuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5IHNlcnZpY2VcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idWJibGUsIHN0eWxlcy5iYWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG90YWxSb3V0ZXNDYW5jZWxsZWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzIGNhbmNlbGVkXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idWJibGUsIHN0eWxlcy53YXJuaW5nKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RvdGFsUmVkdWNlZFNlcnZpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzIHdpdGggcmVkdWNlZCBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idWJibGUsIHN0eWxlcy5nb29kKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RvdGFsSW5jcmVhc2VkU2VydmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMgd2l0aCBpbmNyZWFzZWQgc2VydmljZVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcExpbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLine.tsx\n");

/***/ })

})