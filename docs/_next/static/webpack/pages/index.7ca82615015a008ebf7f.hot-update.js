webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLineChart.tsx":
/*!*************************************************!*\
  !*** ./src/components/TopLine/TopLineChart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopLineChart.module.scss */ \"./src/components/TopLine/TopLineChart.module.scss\");\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLineChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar dateFormatter = new Intl.DateTimeFormat(\"en-US\");\n\nvar asPercentString = function asPercentString(p) {\n  return Math.round(100 * p).toString() + \"%\";\n};\n\nvar TopLineChart = function TopLineChart(props) {\n  _s();\n\n  var sparklineData = props.sparklineData,\n      pieData = props.pieData;\n  var pieCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var pieCanvasElement = pieCanvasRef.current;\n\n    if (pieCanvasElement) {\n      var pieCanvasContext = pieCanvasElement.getContext(\"2d\");\n      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(pieCanvasContext, {\n        type: \"doughnut\",\n        data: pieData,\n        options: {\n          legend: {\n            display: false\n          },\n          tooltips: {\n            enabled: false\n          },\n          hover: {\n            mode: null\n          }\n        }\n      });\n    }\n  }, [props.pieData]);\n  var lineCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var lineCanvasElement = lineCanvasRef.current;\n\n    if (lineCanvasElement) {\n      var lineCanvasContext = lineCanvasElement.getContext(\"2d\");\n      var datasets = sparklineData.datasets;\n      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(lineCanvasContext, {\n        type: \"line\",\n        data: sparklineData,\n        options: {\n          tooltips: {\n            mode: \"index\",\n            intersect: false,\n            callbacks: {\n              title: function title(_ref) {\n                var _ref2 = Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 1),\n                    _ref2$ = _ref2[0],\n                    index = _ref2$.index,\n                    datasetIndex = _ref2$.datasetIndex;\n\n                var _datasets$datasetInde = datasets[datasetIndex],\n                    data = _datasets$datasetInde.data,\n                    dateStrings = _datasets$datasetInde.labels.dateStrings;\n                return \"okay\";\n                return dateStrings[index];\n              },\n              label: function label(_ref3) {\n                var index = _ref3.index,\n                    datasetIndex = _ref3.datasetIndex;\n                var _datasets$datasetInde2 = datasets[datasetIndex],\n                    data = _datasets$datasetInde2.data,\n                    dateStrings = _datasets$datasetInde2.labels.dateStrings;\n                var percentage = asPercentString(data[index] / data[0]);\n                return \"\".concat(percentage, \" on \").concat(dateStrings[index]);\n              }\n            }\n          },\n          legend: {\n            display: false\n          },\n          layout: {\n            padding: -10\n          },\n          scales: {\n            xAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false,\n                maxTicksLimit: 2\n              }\n            }],\n            yAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false\n              }\n            }]\n          },\n          elements: {\n            point: {\n              radius: 0\n            }\n          }\n        }\n      });\n    }\n  }, [props.sparklineData]);\n  return __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexWrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: pieCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: lineCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(TopLineChart, \"DM/NyJ6v5B+mRlRxPUXAHJ1g4rs=\");\n\n_c = TopLineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLineChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLineChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lQ2hhcnQudHN4PzQwM2QiXSwibmFtZXMiOlsiZGF0ZUZvcm1hdHRlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImFzUGVyY2VudFN0cmluZyIsInAiLCJNYXRoIiwicm91bmQiLCJ0b1N0cmluZyIsIlRvcExpbmVDaGFydCIsInByb3BzIiwic3BhcmtsaW5lRGF0YSIsInBpZURhdGEiLCJwaWVDYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwaWVDYW52YXNFbGVtZW50IiwiY3VycmVudCIsInBpZUNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsIm9wdGlvbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwidG9vbHRpcHMiLCJlbmFibGVkIiwiaG92ZXIiLCJtb2RlIiwibGluZUNhbnZhc1JlZiIsImxpbmVDYW52YXNFbGVtZW50IiwibGluZUNhbnZhc0NvbnRleHQiLCJkYXRhc2V0cyIsImludGVyc2VjdCIsImNhbGxiYWNrcyIsInRpdGxlIiwiaW5kZXgiLCJkYXRhc2V0SW5kZXgiLCJkYXRlU3RyaW5ncyIsImxhYmVscyIsImxhYmVsIiwicGVyY2VudGFnZSIsImxheW91dCIsInBhZGRpbmciLCJzY2FsZXMiLCJ4QXhlcyIsImdyaWRMaW5lcyIsImRyYXdCb3JkZXIiLCJ0aWNrTWFya0xlbmd0aCIsImRyYXdPbkNoYXJ0QXJlYSIsInRpY2tzIiwibWF4VGlja3NMaW1pdCIsInlBeGVzIiwiZWxlbWVudHMiLCJwb2ludCIsInJhZGl1cyIsInN0eWxlcyIsImZsZXhXcmFwIiwiZmxleENvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBT0EsSUFBTUEsYUFBYSxHQUFHLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUF0Qjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FB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QUEsS0FDSTtBQUFRLE9BQUcsRUFBRTdCLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESjtBQVVILENBOUdEOztHQUFNckIsWTs7S0FBQUEsWTtBQWdIU0EsMkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub3BMaW5lL1RvcExpbmVDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub3BMaW5lQ2hhcnQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBzcGFya2xpbmVEYXRhOiBhbnk7XG4gICAgcGllRGF0YTogYW55O1xufTtcblxuY29uc3QgZGF0ZUZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIik7XG5jb25zdCBhc1BlcmNlbnRTdHJpbmcgPSAocDogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKDEwMCAqIHApLnRvU3RyaW5nKCkgKyBcIiVcIjtcblxuY29uc3QgVG9wTGluZUNoYXJ0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc3BhcmtsaW5lRGF0YSwgcGllRGF0YSB9ID0gcHJvcHM7XG4gICAgY29uc3QgcGllQ2FudmFzUmVmID0gdXNlUmVmPG51bGwgfCBIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcGllQ2FudmFzRWxlbWVudCA9IHBpZUNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAocGllQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGllQ2FudmFzQ29udGV4dCA9IHBpZUNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgbmV3IENoYXJ0KHBpZUNhbnZhc0NvbnRleHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRvdWdobnV0XCIsXG4gICAgICAgICAgICAgICAgZGF0YTogcGllRGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnBpZURhdGFdKTtcblxuICAgIGNvbnN0IGxpbmVDYW52YXNSZWYgPSB1c2VSZWY8bnVsbCB8IEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5lQ2FudmFzRWxlbWVudCA9IGxpbmVDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGxpbmVDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lQ2FudmFzQ29udGV4dCA9IGxpbmVDYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YXNldHMgfSA9IHNwYXJrbGluZURhdGE7XG4gICAgICAgICAgICBuZXcgQ2hhcnQobGluZUNhbnZhc0NvbnRleHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBzcGFya2xpbmVEYXRhLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiaW5kZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFt7IGluZGV4LCBkYXRhc2V0SW5kZXggfV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogeyBkYXRlU3RyaW5ncyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gZGF0YXNldHNbZGF0YXNldEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2theVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZVN0cmluZ3NbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICh7IGluZGV4LCBkYXRhc2V0SW5kZXggfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7IGRhdGVTdHJpbmdzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gPSBkYXRhc2V0c1tkYXRhc2V0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gYXNQZXJjZW50U3RyaW5nKGRhdGFbaW5kZXhdIC8gZGF0YVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtwZXJjZW50YWdlfSBvbiAke2RhdGVTdHJpbmdzW2luZGV4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tNYXJrTGVuZ3RoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja01hcmtMZW5ndGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3T25DaGFydEFyZWE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnNwYXJrbGluZURhdGFdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFdyYXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sfT5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17cGllQ2FudmFzUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x9PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtsaW5lQ2FudmFzUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BMaW5lQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLineChart.tsx\n");

/***/ })

})