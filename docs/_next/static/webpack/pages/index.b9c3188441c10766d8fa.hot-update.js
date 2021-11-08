webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLine.tsx":
/*!********************************************!*\
  !*** ./src/components/TopLine/TopLine.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TopLineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopLineChart */ \"./src/components/TopLine/TopLineChart.tsx\");\n/* harmony import */ var _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopLine.module.scss */ \"./src/components/TopLine/TopLine.module.scss\");\n/* harmony import */ var _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLine.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar smooth = function smooth(data) {\n  var window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n  var result = [];\n\n  for (var i = 0; i < data.length - window; i++) {\n    var inWindow = data.slice(i, i + window).reduce(function (a, b) {\n      return a + b;\n    });\n    result.push(inWindow);\n  }\n\n  return result;\n};\n\nvar getPercentArray = function getPercentArray(percentage) {\n  return [100 - percentage * 100, percentage * 100];\n};\n\nvar TopLine = function TopLine(props) {\n  _s();\n\n  var summaryData = props.summaryData;\n  var totalRidershipHistory = summaryData.totalRidershipHistory,\n      totalServiceHistory = summaryData.totalServiceHistory,\n      totalRidershipPercentage = summaryData.totalRidershipPercentage,\n      totalServicePercentage = summaryData.totalServicePercentage,\n      totalRoutesCancelled = summaryData.totalRoutesCancelled,\n      totalReducedService = summaryData.totalReducedService,\n      totalIncreasedService = summaryData.totalIncreasedService;\n  var labelArray = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return [\"pre-covid\"].concat(Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(totalRidershipHistory.length - 2).fill(\"\")), [\"current\"]);\n  }, []);\n  var pieRidership = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: [\"\", \"current\"],\n      datasets: [{\n        strokeColor: \"transparent\",\n        backgroundColor: [\"#D3D3D3\", \"#D31A2B\"],\n        data: getPercentArray(totalRidershipPercentage)\n      }]\n    };\n  }, [totalRidershipPercentage]);\n  var lineRidership = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: labelArray,\n      datasets: [{\n        data: smooth(totalRidershipHistory),\n        fill: false,\n        tension: 0,\n        borderColor: \"#D31A2B\"\n      }]\n    };\n  }, [labelArray, totalRidershipHistory]);\n  var pieService = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: [\"\", \"current\"],\n      datasets: [{\n        backgroundColor: [\"#D3D3D3\", \"#D31A2B\"],\n        data: getPercentArray(totalServicePercentage)\n      }]\n    };\n  }, [totalServicePercentage]);\n  var lineService = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: labelArray,\n      datasets: [{\n        data: smooth(totalServiceHistory),\n        fill: false,\n        tension: 0,\n        borderColor: \"#D31A2B\"\n      }]\n    };\n  }, [totalServiceHistory]);\n  return __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.topLine,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }, \"Total Ridership\"), __jsx(_TopLineChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sparklineData: lineRidership,\n    pieData: pieRidership,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 21\n    }\n  }, Math.round(totalRidershipPercentage * 100), \"%\"), \" of pre-pandemic weekday ridership\")), __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, \"Total Service\"), __jsx(_TopLineChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sparklineData: lineService,\n    pieData: pieService,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 21\n    }\n  }, Math.round(totalServicePercentage * 100), \"%\"), \" of pre-pandemic weekday service\")), __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble, _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bad),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 29\n    }\n  }, totalRoutesCancelled)), \" \", \"routes canceled\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble, _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.warning),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 29\n    }\n  }, totalReducedService)), \" \", \"routes with reduced service\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble, _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.good),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 29\n    }\n  }, totalIncreasedService)), \" \", \"routes with increased service\"))));\n};\n\n_s(TopLine, \"f/1X4X0heRWo2qShBYOVSxpDATs=\");\n\n_c = TopLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLine);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lLnRzeD8zMTNlIl0sIm5hbWVzIjpbInNtb290aCIsImRhdGEiLCJ3aW5kb3ciLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiaW5XaW5kb3ciLCJzbGljZSIsInJlZHVjZSIsImEiLCJiIiwicHVzaCIsImdldFBlcmNlbnRBcnJheSIsInBlcmNlbnRhZ2UiLCJUb3BMaW5lIiwicHJvcHMiLCJzdW1tYXJ5RGF0YSIsInRvdGFsUmlkZXJzaGlwSGlzdG9yeSIsInRvdGFsU2VydmljZUhpc3RvcnkiLCJ0b3RhbFJpZGVyc2hpcFBlcmNlbnRhZ2UiLCJ0b3RhbFNlcnZpY2VQZXJjZW50YWdlIiwidG90YWxSb3V0ZXNDYW5jZWxsZWQiLCJ0b3RhbFJlZHVjZWRTZXJ2aWNlIiwidG90YWxJbmNyZWFzZWRTZXJ2aWNlIiwibGFiZWxBcnJheSIsInVzZU1lbW8iLCJBcnJheSIsImZpbGwiLCJwaWVSaWRlcnNoaXAiLCJsYWJlbHMiLCJkYXRhc2V0cyIsInN0cm9rZUNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGluZVJpZGVyc2hpcCIsInRlbnNpb24iLCJib3JkZXJDb2xvciIsInBpZVNlcnZpY2UiLCJsaW5lU2VydmljZSIsInN0eWxlcyIsInRvcExpbmUiLCJjb2x1bW4iLCJNYXRoIiwicm91bmQiLCJjbGFzc05hbWVzIiwiYnViYmxlIiwiYmFkIiwid2FybmluZyIsImdvb2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFFQTs7QUFNQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQWlDO0FBQUEsTUFBaEJDLE1BQWdCLHVFQUFQLEVBQU87QUFDNUMsTUFBTUMsTUFBZ0IsR0FBRyxFQUF6Qjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILElBQUksQ0FBQ0ksTUFBTCxHQUFj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QUFBQTtBQUFBO0FBQUEsS0FBT3hCLHFCQUFQLENBREosQ0FESixFQUdXLEdBSFgsa0NBYkosQ0FESixDQWpCSixDQURKO0FBMENILENBcEhEOztHQUFNVCxPOztLQUFBQSxPO0FBc0hTQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RvcExpbmUvVG9wTGluZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IHsgU3VtbWFyeURhdGEgfSBmcm9tIFwidHlwZXNcIjtcblxuaW1wb3J0IFRvcExpbmVDaGFydCBmcm9tIFwiLi9Ub3BMaW5lQ2hhcnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub3BMaW5lLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgc3VtbWFyeURhdGE6IFN1bW1hcnlEYXRhO1xufTtcblxuY29uc3Qgc21vb3RoID0gKGRhdGE6IG51bWJlcltdLCB3aW5kb3cgPSAyMCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIC0gd2luZG93OyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5XaW5kb3cgPSBkYXRhLnNsaWNlKGksIGkgKyB3aW5kb3cpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICAgICAgICByZXN1bHQucHVzaChpbldpbmRvdyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRQZXJjZW50QXJyYXkgPSAocGVyY2VudGFnZTogYW55KSA9PiB7XG4gICAgcmV0dXJuIFsxMDAgLSBwZXJjZW50YWdlICogMTAwLCBwZXJjZW50YWdlICogMTAwXTtcbn07XG5cbmNvbnN0IFRvcExpbmUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzdW1tYXJ5RGF0YSB9ID0gcHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgICB0b3RhbFJpZGVyc2hpcEhpc3RvcnksXG4gICAgICAgIHRvdGFsU2VydmljZUhpc3RvcnksXG4gICAgICAgIHRvdGFsUmlkZXJzaGlwUGVyY2VudGFnZSxcbiAgICAgICAgdG90YWxTZXJ2aWNlUGVyY2VudGFnZSxcbiAgICAgICAgdG90YWxSb3V0ZXNDYW5jZWxsZWQsXG4gICAgICAgIHRvdGFsUmVkdWNlZFNlcnZpY2UsXG4gICAgICAgIHRvdGFsSW5jcmVhc2VkU2VydmljZSxcbiAgICB9ID0gc3VtbWFyeURhdGE7XG5cbiAgICBjb25zdCBsYWJlbEFycmF5ID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gW1wicHJlLWNvdmlkXCIsIC4uLkFycmF5KHRvdGFsUmlkZXJzaGlwSGlzdG9yeS5sZW5ndGggLSAyKS5maWxsKFwiXCIpLCBcImN1cnJlbnRcIl0sXG4gICAgICAgIFtdXG4gICAgKTtcblxuICAgIGNvbnN0IHBpZVJpZGVyc2hpcCA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgICBsYWJlbHM6IFtcIlwiLCBcImN1cnJlbnRcIl0sXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjRDNEM0QzXCIsIFwiI0QzMUEyQlwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2V0UGVyY2VudEFycmF5KHRvdGFsUmlkZXJzaGlwUGVyY2VudGFnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBbdG90YWxSaWRlcnNoaXBQZXJjZW50YWdlXVxuICAgICk7XG5cbiAgICBjb25zdCBsaW5lUmlkZXJzaGlwID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxBcnJheSxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzbW9vdGgodG90YWxSaWRlcnNoaXBIaXN0b3J5KSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNEMzFBMkJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIFtsYWJlbEFycmF5LCB0b3RhbFJpZGVyc2hpcEhpc3RvcnldXG4gICAgKTtcblxuICAgIGNvbnN0IHBpZVNlcnZpY2UgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWxzOiBbXCJcIiwgXCJjdXJyZW50XCJdLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI0QzRDNEM1wiLCBcIiNEMzFBMkJcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFBlcmNlbnRBcnJheSh0b3RhbFNlcnZpY2VQZXJjZW50YWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIFt0b3RhbFNlcnZpY2VQZXJjZW50YWdlXVxuICAgICk7XG5cbiAgICBjb25zdCBsaW5lU2VydmljZSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVsQXJyYXksXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogc21vb3RoKHRvdGFsU2VydmljZUhpc3RvcnkpLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0QzMUEyQlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgW3RvdGFsU2VydmljZUhpc3RvcnldXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wTGluZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0+XG4gICAgICAgICAgICAgICAgPGg0PlRvdGFsIFJpZGVyc2hpcDwvaDQ+XG4gICAgICAgICAgICAgICAgPFRvcExpbmVDaGFydCBzcGFya2xpbmVEYXRhPXtsaW5lUmlkZXJzaGlwfSBwaWVEYXRhPXtwaWVSaWRlcnNoaXB9IC8+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e01hdGgucm91bmQodG90YWxSaWRlcnNoaXBQZXJjZW50YWdlICogMTAwKX0lPC9zdHJvbmc+IG9mIHByZS1wYW5kZW1pY1xuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5IHJpZGVyc2hpcFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgIDxoND5Ub3RhbCBTZXJ2aWNlPC9oND5cbiAgICAgICAgICAgICAgICA8VG9wTGluZUNoYXJ0IHNwYXJrbGluZURhdGE9e2xpbmVTZXJ2aWNlfSBwaWVEYXRhPXtwaWVTZXJ2aWNlfSAvPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntNYXRoLnJvdW5kKHRvdGFsU2VydmljZVBlcmNlbnRhZ2UgKiAxMDApfSU8L3N0cm9uZz4gb2YgcHJlLXBhbmRlbWljXG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXkgc2VydmljZVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1YmJsZSwgc3R5bGVzLmJhZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b3RhbFJvdXRlc0NhbmNlbGxlZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMgY2FuY2VsZWRcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1YmJsZSwgc3R5bGVzLndhcm5pbmcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG90YWxSZWR1Y2VkU2VydmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMgd2l0aCByZWR1Y2VkIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1YmJsZSwgc3R5bGVzLmdvb2QpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG90YWxJbmNyZWFzZWRTZXJ2aWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcyB3aXRoIGluY3JlYXNlZCBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wTGluZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLine.tsx\n");

/***/ })

})