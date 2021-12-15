webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLineChart.tsx":
/*!*************************************************!*\
  !*** ./src/components/TopLine/TopLineChart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopLineChart.module.scss */ \"./src/components/TopLine/TopLineChart.module.scss\");\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLineChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar dateFormatter = new Intl.DateTimeFormat(\"en-US\");\n\nvar asPercentString = function asPercentString(p) {\n  return Math.round(100 * p).toString() + \"%\";\n};\n\nvar TopLineChart = function TopLineChart(props) {\n  _s();\n\n  var sparklineData = props.sparklineData,\n      pieData = props.pieData;\n  var pieCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var pieCanvasElement = pieCanvasRef.current;\n\n    if (pieCanvasElement) {\n      var pieCanvasContext = pieCanvasElement.getContext(\"2d\");\n      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(pieCanvasContext, {\n        type: \"doughnut\",\n        data: pieData,\n        options: {\n          legend: {\n            display: false\n          },\n          tooltips: {\n            enabled: false\n          },\n          hover: {\n            mode: null\n          }\n        }\n      });\n    }\n  }, [props.pieData]);\n  var lineCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var lineCanvasElement = lineCanvasRef.current;\n\n    if (lineCanvasElement) {\n      var lineCanvasContext = lineCanvasElement.getContext(\"2d\");\n      var datasets = sparklineData.datasets;\n      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(lineCanvasContext, {\n        type: \"line\",\n        data: sparklineData,\n        options: {\n          tooltips: {\n            mode: \"index\",\n            intersect: false,\n            callbacks: {\n              title: function title(_ref) {\n                var _ref2 = Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 1),\n                    _ref2$ = _ref2[0],\n                    index = _ref2$.index,\n                    datasetIndex = _ref2$.datasetIndex;\n\n                var dateStrings = datasets[datasetIndex].labels.dateStrings;\n                return \"okay\";\n                return dateStrings[index];\n              },\n              label: function label(_ref3) {\n                var index = _ref3.index,\n                    datasetIndex = _ref3.datasetIndex;\n                var _datasets$datasetInde = datasets[datasetIndex],\n                    data = _datasets$datasetInde.data,\n                    dateStrings = _datasets$datasetInde.labels.dateStrings;\n                var percentage = asPercentString(data[index] / data[0]);\n                return \"\".concat(percentage, \" on \").concat(dateStrings[index]);\n              }\n            }\n          },\n          legend: {\n            display: false\n          },\n          layout: {\n            padding: -10\n          },\n          scales: {\n            xAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false,\n                maxTicksLimit: 2\n              }\n            }],\n            yAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false\n              }\n            }]\n          },\n          elements: {\n            point: {\n              radius: 0\n            }\n          }\n        }\n      });\n    }\n  }, [props.sparklineData]);\n  return __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexWrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: pieCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: lineCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(TopLineChart, \"DM/NyJ6v5B+mRlRxPUXAHJ1g4rs=\");\n\n_c = TopLineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLineChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLineChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lQ2hhcnQudHN4PzQwM2QiXSwibmFtZXMiOlsiZGF0ZUZvcm1hdHRlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImFzUGVyY2VudFN0cmluZyIsInAiLCJNYXRoIiwicm91bmQiLCJ0b1N0cmluZyIsIlRvcExpbmVDaGFydCIsInByb3BzIiwic3BhcmtsaW5lRGF0YSIsInBpZURhdGEiLCJwaWVDYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwaWVDYW52YXNFbGVtZW50IiwiY3VycmVudCIsInBpZUNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsIm9wdGlvbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwidG9vbHRpcHMiLCJlbmFibGVkIiwiaG92ZXIiLCJtb2RlIiwibGluZUNhbnZhc1JlZiIsImxpbmVDYW52YXNFbGVtZW50IiwibGluZUNhbnZhc0NvbnRleHQiLCJkYXRhc2V0cyIsImludGVyc2VjdCIsImNhbGxiYWNrcyIsInRpdGxlIiwiaW5kZXgiLCJkYXRhc2V0SW5kZXgiLCJkYXRlU3RyaW5ncyIsImxhYmVscyIsImxhYmVsIiwicGVyY2VudGFnZSIsImxheW91dCIsInBhZGRpbmciLCJzY2FsZXMiLCJ4QXhlcyIsImdyaWRMaW5lcyIsImRyYXdCb3JkZXIiLCJ0aWNrTWFya0xlbmd0aCIsImRyYXdPbkNoYXJ0QXJlYSIsInRpY2tzIiwibWF4VGlja3NMaW1pdCIsInlBeGVzIiwiZWxlbWVudHMiLCJwb2ludCIsInJhZGl1cyIsInN0eWxlcyIsImZsZXhXcmFwIiwiZmxleENvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBT0EsSUFBTUEsYUFBYSxHQUFHLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUF0Qjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURKO0FBVUgsQ0E3R0Q7O0dBQU1yQixZOztLQUFBQSxZO0FBK0dTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RvcExpbmUvVG9wTGluZUNoYXJ0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcExpbmVDaGFydC5tb2R1bGUuc2Nzc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHNwYXJrbGluZURhdGE6IGFueTtcbiAgICBwaWVEYXRhOiBhbnk7XG59O1xuXG5jb25zdCBkYXRlRm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiKTtcbmNvbnN0IGFzUGVyY2VudFN0cmluZyA9IChwOiBudW1iZXIpID0+IE1hdGgucm91bmQoMTAwICogcCkudG9TdHJpbmcoKSArIFwiJVwiO1xuXG5jb25zdCBUb3BMaW5lQ2hhcnQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzcGFya2xpbmVEYXRhLCBwaWVEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBwaWVDYW52YXNSZWYgPSB1c2VSZWY8bnVsbCB8IEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwaWVDYW52YXNFbGVtZW50ID0gcGllQ2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChwaWVDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwaWVDYW52YXNDb250ZXh0ID0gcGllQ2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBuZXcgQ2hhcnQocGllQ2FudmFzQ29udGV4dCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91Z2hudXRcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBwaWVEYXRhLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMucGllRGF0YV0pO1xuXG4gICAgY29uc3QgbGluZUNhbnZhc1JlZiA9IHVzZVJlZjxudWxsIHwgSFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmVDYW52YXNFbGVtZW50ID0gbGluZUNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAobGluZUNhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVDYW52YXNDb250ZXh0ID0gbGluZUNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhc2V0cyB9ID0gc3BhcmtsaW5lRGF0YTtcbiAgICAgICAgICAgIG5ldyBDaGFydChsaW5lQ2FudmFzQ29udGV4dCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHNwYXJrbGluZURhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJpbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoW3sgaW5kZXgsIGRhdGFzZXRJbmRleCB9XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHsgZGF0ZVN0cmluZ3MgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA9IGRhdGFzZXRzW2RhdGFzZXRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9rYXlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVTdHJpbmdzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoeyBpbmRleCwgZGF0YXNldEluZGV4IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogeyBkYXRlU3RyaW5ncyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gZGF0YXNldHNbZGF0YXNldEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IGFzUGVyY2VudFN0cmluZyhkYXRhW2luZGV4XSAvIGRhdGFbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7cGVyY2VudGFnZX0gb24gJHtkYXRlU3RyaW5nc1tpbmRleF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAtMTAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrTWFya0xlbmd0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdPbkNoYXJ0QXJlYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tNYXJrTGVuZ3RoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5zcGFya2xpbmVEYXRhXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhXcmFwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleENvbH0+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e3BpZUNhbnZhc1JlZn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sfT5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17bGluZUNhbnZhc1JlZn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wTGluZUNoYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLineChart.tsx\n");

/***/ })

})