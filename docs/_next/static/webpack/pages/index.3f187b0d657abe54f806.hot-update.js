webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLineChart.tsx":
/*!*************************************************!*\
  !*** ./src/components/TopLine/TopLineChart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopLineChart.module.scss */ \"./src/components/TopLine/TopLineChart.module.scss\");\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLineChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar dateFormatter = new Intl.DateTimeFormat(\"en-US\");\n\nvar TopLineChart = function TopLineChart(props) {\n  _s();\n\n  var sparklineData = props.sparklineData,\n      pieData = props.pieData;\n  var pieCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var pieCanvasElement = pieCanvasRef.current;\n\n    if (pieCanvasElement) {\n      var pieCanvasContext = pieCanvasElement.getContext(\"2d\");\n      new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(pieCanvasContext, {\n        type: \"doughnut\",\n        data: pieData,\n        options: {\n          legend: {\n            display: false\n          },\n          tooltips: {\n            enabled: false\n          },\n          hover: {\n            mode: null\n          }\n        }\n      });\n    }\n  }, [props.pieData]);\n  var lineCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var lineCanvasElement = lineCanvasRef.current;\n\n    if (lineCanvasElement) {\n      var lineCanvasContext = lineCanvasElement.getContext(\"2d\");\n      var datasets = sparklineData.datasets;\n      new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(lineCanvasContext, {\n        type: \"line\",\n        data: sparklineData,\n        options: {\n          tooltips: {\n            mode: \"index\",\n            intersect: false,\n            callbacks: {\n              // title: ([{ index }]) => {\n              //     return dateFormatter.format(timestamps[index]);\n              // },\n              label: function label(_ref) {\n                var index = _ref.index,\n                    datasetIndex = _ref.datasetIndex;\n                var _datasets$datasetInde = datasets[datasetIndex],\n                    data = _datasets$datasetInde.data,\n                    dateStrings = _datasets$datasetInde.labels.dateStrings;\n                var percentage = data[index] / data[0];\n              }\n            }\n          },\n          legend: {\n            display: false\n          },\n          layout: {\n            padding: -10\n          },\n          scales: {\n            xAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false,\n                maxTicksLimit: 2\n              }\n            }],\n            yAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false\n              }\n            }]\n          },\n          elements: {\n            point: {\n              radius: 0\n            }\n          }\n        }\n      });\n    }\n  }, [props.sparklineData]);\n  return __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flexWrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: pieCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: lineCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(TopLineChart, \"DM/NyJ6v5B+mRlRxPUXAHJ1g4rs=\");\n\n_c = TopLineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLineChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLineChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lQ2hhcnQudHN4PzQwM2QiXSwibmFtZXMiOlsiZGF0ZUZvcm1hdHRlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsIlRvcExpbmVDaGFydCIsInByb3BzIiwic3BhcmtsaW5lRGF0YSIsInBpZURhdGEiLCJwaWVDYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwaWVDYW52YXNFbGVtZW50IiwiY3VycmVudCIsInBpZUNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsIm9wdGlvbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwidG9vbHRpcHMiLCJlbmFibGVkIiwiaG92ZXIiLCJtb2RlIiwibGluZUNhbnZhc1JlZiIsImxpbmVDYW52YXNFbGVtZW50IiwibGluZUNhbnZhc0NvbnRleHQiLCJkYXRhc2V0cyIsImludGVyc2VjdCIsImNhbGxiYWNrcyIsImxhYmVsIiwiaW5kZXgiLCJkYXRhc2V0SW5kZXgiLCJkYXRlU3RyaW5ncyIsImxhYmVscyIsInBlcmNlbnRhZ2UiLCJsYXlvdXQiLCJwYWRkaW5nIiwic2NhbGVzIiwieEF4ZXMiLCJncmlkTGluZXMiLCJkcmF3Qm9yZGVyIiwidGlja01hcmtMZW5ndGgiLCJkcmF3T25DaGFydEFyZWEiLCJ0aWNrcyIsIm1heFRpY2tzTGltaXQiLCJ5QXhlcyIsImVsZW1lbnRzIiwicG9pbnQiLCJyYWRpdXMiLCJzdHlsZXMiLCJmbGV4V3JhcCIsImZsZXhDb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQU9BLElBQU1BLGFBQWEsR0FBRyxJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBdEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUFBLE1BQzNCQyxhQUQyQixHQUNBRCxLQURB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QUU7QUFETDtBQUREO0FBbERMO0FBSGdCLE9BQTdCO0FBNERIO0FBQ0osR0FsRVEsRUFrRU4sQ0FBQzdDLEtBQUssQ0FBQ0MsYUFBUCxDQWxFTSxDQUFUO0FBb0VBLFNBQ0k7QUFBSyxhQUFTLEVBQUU2QyxnRUFBTSxDQUFDQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVELGdFQUFNLENBQUNFLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLE9BQUcsRUFBRTdDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFLLGFBQVMsRUFBRTJDLGdFQUFNLENBQUNFLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLE9BQUcsRUFBRTVCLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESjtBQVVILENBeEdEOztHQUFNckIsWTs7S0FBQUEsWTtBQTBHU0EsMkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub3BMaW5lL1RvcExpbmVDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub3BMaW5lQ2hhcnQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBzcGFya2xpbmVEYXRhOiBhbnk7XG4gICAgcGllRGF0YTogYW55O1xufTtcblxuY29uc3QgZGF0ZUZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIik7XG5cbmNvbnN0IFRvcExpbmVDaGFydCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHNwYXJrbGluZURhdGEsIHBpZURhdGEgfSA9IHByb3BzO1xuICAgIGNvbnN0IHBpZUNhbnZhc1JlZiA9IHVzZVJlZjxudWxsIHwgSFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpZUNhbnZhc0VsZW1lbnQgPSBwaWVDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKHBpZUNhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBpZUNhbnZhc0NvbnRleHQgPSBwaWVDYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIG5ldyBDaGFydChwaWVDYW52YXNDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkb3VnaG51dFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHBpZURhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5waWVEYXRhXSk7XG5cbiAgICBjb25zdCBsaW5lQ2FudmFzUmVmID0gdXNlUmVmPG51bGwgfCBIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGluZUNhbnZhc0VsZW1lbnQgPSBsaW5lQ2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChsaW5lQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgbGluZUNhbnZhc0NvbnRleHQgPSBsaW5lQ2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGFzZXRzIH0gPSBzcGFya2xpbmVEYXRhO1xuICAgICAgICAgICAgbmV3IENoYXJ0KGxpbmVDYW52YXNDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogc3BhcmtsaW5lRGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGU6IChbeyBpbmRleCB9XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZGF0ZUZvcm1hdHRlci5mb3JtYXQodGltZXN0YW1wc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICh7IGluZGV4LCBkYXRhc2V0SW5kZXggfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7IGRhdGVTdHJpbmdzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gPSBkYXRhc2V0c1tkYXRhc2V0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gZGF0YVtpbmRleF0gLyBkYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tNYXJrTGVuZ3RoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja01hcmtMZW5ndGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3T25DaGFydEFyZWE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnNwYXJrbGluZURhdGFdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFdyYXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sfT5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17cGllQ2FudmFzUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x9PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtsaW5lQ2FudmFzUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BMaW5lQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLineChart.tsx\n");

/***/ })

})