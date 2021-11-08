webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLine.tsx":
/*!********************************************!*\
  !*** ./src/components/TopLine/TopLine.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopLineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopLineChart */ \"./src/components/TopLine/TopLineChart.tsx\");\n/* harmony import */ var _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopLine.module.scss */ \"./src/components/TopLine/TopLine.module.scss\");\n/* harmony import */ var _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLine.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar smooth = function smooth(data) {\n  var window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n  var result = [];\n\n  for (var i = 0; i < data.length - window; i++) {\n    var inWindow = data.slice(i, i + window).reduce(function (a, b) {\n      return a + b;\n    });\n    result.push(inWindow);\n  }\n\n  return result;\n};\n\nvar getPercentArray = function getPercentArray(percentage) {\n  return [100 - percentage * 100, percentage * 100];\n};\n\nvar TopLine = function TopLine(props) {\n  _s();\n\n  var summaryData = props.summaryData;\n  var totalRidershipHistory = summaryData.totalRidershipHistory,\n      totalServiceHistory = summaryData.totalServiceHistory,\n      totalRidershipPercentage = summaryData.totalRidershipPercentage,\n      totalServicePercentage = summaryData.totalServicePercentage,\n      totalRoutesCancelled = summaryData.totalRoutesCancelled,\n      totalReducedService = summaryData.totalReducedService,\n      totalIncreasedService = summaryData.totalIncreasedService;\n  var labelArray = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return [\"pre-covid\"].concat(Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(totalRidershipHistory.length - 2).fill(\"\")), [\"current\"]);\n  }, []);\n  var pieRidership = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: [\"\", \"current\"],\n      datasets: [{\n        strokeColor: \"transparent\",\n        backgroundColor: [\"#D3D3D3\", \"#D31A2B\"],\n        data: getPercentArray(totalRidershipPercentage)\n      }]\n    };\n  }, [totalRidershipPercentage]);\n  var lineRidership = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: labelArray,\n      datasets: [{\n        data: smooth(totalRidershipHistory),\n        fill: false,\n        tension: 0,\n        borderColor: \"#D31A2B\"\n      }]\n    };\n  }, [labelArray, totalRidershipHistory]);\n  var pieService = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: [\"\", \"current\"],\n      datasets: [{\n        backgroundColor: [\"#D3D3D3\", \"#D31A2B\"],\n        data: getPercentArray(totalServicePercentage)\n      }]\n    };\n  }, [totalServicePercentage]);\n  var lineService = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      labels: labelArray,\n      datasets: [{\n        data: smooth(totalServiceHistory),\n        fill: false,\n        tension: 0,\n        borderColor: \"#D31A2B\"\n      }]\n    };\n  }, [totalServiceHistory]);\n  return __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.topLine,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 17\n    }\n  }, \"Total Ridership\"), __jsx(_TopLineChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    sparklineData: lineRidership,\n    pieData: pieRidership,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 21\n    }\n  }, Math.round(totalRidershipPercentage * 100), \"%\"), \" of pre-pandemic weekday ridership\")), __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 17\n    }\n  }, \"Total Service\"), __jsx(_TopLineChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    sparklineData: lineService,\n    pieData: pieService,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 21\n    }\n  }, Math.round(totalServicePercentage * 100), \"%\"), \" of pre-pandemic weekday service\")), __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bubble,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 29\n    }\n  }, totalRoutesCancelled)), \" \", \"routes canceled\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bubble,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 29\n    }\n  }, totalReducedService)), \" \", \"routes with reduced service\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _TopLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bubble,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 29\n    }\n  }, totalIncreasedService)), \" \", \"routes with increased service\"))));\n};\n\n_s(TopLine, \"f/1X4X0heRWo2qShBYOVSxpDATs=\");\n\n_c = TopLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLine);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lLnRzeD8zMTNlIl0sIm5hbWVzIjpbInNtb290aCIsImRhdGEiLCJ3aW5kb3ciLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiaW5XaW5kb3ciLCJzbGljZSIsInJlZHVjZSIsImEiLCJiIiwicHVzaCIsImdldFBlcmNlbnRBcnJheSIsInBlcmNlbnRhZ2UiLCJUb3BMaW5lIiwicHJvcHMiLCJzdW1tYXJ5RGF0YSIsInRvdGFsUmlkZXJzaGlwSGlzdG9yeSIsInRvdGFsU2VydmljZUhpc3RvcnkiLCJ0b3RhbFJpZGVyc2hpcFBlcmNlbnRhZ2UiLCJ0b3RhbFNlcnZpY2VQZXJjZW50YWdlIiwidG90YWxSb3V0ZXNDYW5jZWxsZWQiLCJ0b3RhbFJlZHVjZWRTZXJ2aWNlIiwidG90YWxJbmNyZWFzZWRTZXJ2aWNlIiwibGFiZWxBcnJheSIsInVzZU1lbW8iLCJBcnJheSIsImZpbGwiLCJwaWVSaWRlcnNoaXAiLCJsYWJlbHMiLCJkYXRhc2V0cyIsInN0cm9rZUNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGluZVJpZGVyc2hpcCIsInRlbnNpb24iLCJib3JkZXJDb2xvciIsInBpZVNlcnZpY2UiLCJsaW5lU2VydmljZSIsInN0eWxlcyIsInRvcExpbmUiLCJjb2x1bW4iLCJNYXRoIiwicm91bmQiLCJidWJibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQU1BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBaUM7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUM1QyxNQUFNQyxNQUFnQixHQUFHLEVBQXpCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxNQUFMLEdBQWNILE1BQWxDLEVBQTBDRSxDQUFDLEVBQTNDLEVBQStDO0FBQzNDLFFBQU1F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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdW1tYXJ5RGF0YSB9IGZyb20gXCJ0eXBlc1wiO1xuaW1wb3J0IFRvcExpbmVDaGFydCBmcm9tIFwiLi9Ub3BMaW5lQ2hhcnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub3BMaW5lLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgc3VtbWFyeURhdGE6IFN1bW1hcnlEYXRhO1xufTtcblxuY29uc3Qgc21vb3RoID0gKGRhdGE6IG51bWJlcltdLCB3aW5kb3cgPSAyMCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIC0gd2luZG93OyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5XaW5kb3cgPSBkYXRhLnNsaWNlKGksIGkgKyB3aW5kb3cpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICAgICAgICByZXN1bHQucHVzaChpbldpbmRvdyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRQZXJjZW50QXJyYXkgPSAocGVyY2VudGFnZTogYW55KSA9PiB7XG4gICAgcmV0dXJuIFsxMDAgLSBwZXJjZW50YWdlICogMTAwLCBwZXJjZW50YWdlICogMTAwXTtcbn07XG5cbmNvbnN0IFRvcExpbmUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzdW1tYXJ5RGF0YSB9ID0gcHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgICB0b3RhbFJpZGVyc2hpcEhpc3RvcnksXG4gICAgICAgIHRvdGFsU2VydmljZUhpc3RvcnksXG4gICAgICAgIHRvdGFsUmlkZXJzaGlwUGVyY2VudGFnZSxcbiAgICAgICAgdG90YWxTZXJ2aWNlUGVyY2VudGFnZSxcbiAgICAgICAgdG90YWxSb3V0ZXNDYW5jZWxsZWQsXG4gICAgICAgIHRvdGFsUmVkdWNlZFNlcnZpY2UsXG4gICAgICAgIHRvdGFsSW5jcmVhc2VkU2VydmljZSxcbiAgICB9ID0gc3VtbWFyeURhdGE7XG5cbiAgICBjb25zdCBsYWJlbEFycmF5ID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gW1wicHJlLWNvdmlkXCIsIC4uLkFycmF5KHRvdGFsUmlkZXJzaGlwSGlzdG9yeS5sZW5ndGggLSAyKS5maWxsKFwiXCIpLCBcImN1cnJlbnRcIl0sXG4gICAgICAgIFtdXG4gICAgKTtcblxuICAgIGNvbnN0IHBpZVJpZGVyc2hpcCA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgICBsYWJlbHM6IFtcIlwiLCBcImN1cnJlbnRcIl0sXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjRDNEM0QzXCIsIFwiI0QzMUEyQlwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2V0UGVyY2VudEFycmF5KHRvdGFsUmlkZXJzaGlwUGVyY2VudGFnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBbdG90YWxSaWRlcnNoaXBQZXJjZW50YWdlXVxuICAgICk7XG5cbiAgICBjb25zdCBsaW5lUmlkZXJzaGlwID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxBcnJheSxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzbW9vdGgodG90YWxSaWRlcnNoaXBIaXN0b3J5KSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNEMzFBMkJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIFtsYWJlbEFycmF5LCB0b3RhbFJpZGVyc2hpcEhpc3RvcnldXG4gICAgKTtcblxuICAgIGNvbnN0IHBpZVNlcnZpY2UgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWxzOiBbXCJcIiwgXCJjdXJyZW50XCJdLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI0QzRDNEM1wiLCBcIiNEMzFBMkJcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFBlcmNlbnRBcnJheSh0b3RhbFNlcnZpY2VQZXJjZW50YWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIFt0b3RhbFNlcnZpY2VQZXJjZW50YWdlXVxuICAgICk7XG5cbiAgICBjb25zdCBsaW5lU2VydmljZSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVsQXJyYXksXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogc21vb3RoKHRvdGFsU2VydmljZUhpc3RvcnkpLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0QzMUEyQlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgW3RvdGFsU2VydmljZUhpc3RvcnldXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wTGluZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0+XG4gICAgICAgICAgICAgICAgPGg0PlRvdGFsIFJpZGVyc2hpcDwvaDQ+XG4gICAgICAgICAgICAgICAgPFRvcExpbmVDaGFydCBzcGFya2xpbmVEYXRhPXtsaW5lUmlkZXJzaGlwfSBwaWVEYXRhPXtwaWVSaWRlcnNoaXB9IC8+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e01hdGgucm91bmQodG90YWxSaWRlcnNoaXBQZXJjZW50YWdlICogMTAwKX0lPC9zdHJvbmc+IG9mIHByZS1wYW5kZW1pY1xuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5IHJpZGVyc2hpcFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgIDxoND5Ub3RhbCBTZXJ2aWNlPC9oND5cbiAgICAgICAgICAgICAgICA8VG9wTGluZUNoYXJ0IHNwYXJrbGluZURhdGE9e2xpbmVTZXJ2aWNlfSBwaWVEYXRhPXtwaWVTZXJ2aWNlfSAvPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntNYXRoLnJvdW5kKHRvdGFsU2VydmljZVBlcmNlbnRhZ2UgKiAxMDApfSU8L3N0cm9uZz4gb2YgcHJlLXBhbmRlbWljXG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXkgc2VydmljZVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idWJibGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b3RhbFJvdXRlc0NhbmNlbGxlZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMgY2FuY2VsZWRcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idWJibGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b3RhbFJlZHVjZWRTZXJ2aWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcyB3aXRoIHJlZHVjZWQgc2VydmljZVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1YmJsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RvdGFsSW5jcmVhc2VkU2VydmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMgd2l0aCBpbmNyZWFzZWQgc2VydmljZVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcExpbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLine.tsx\n");

/***/ })

})