webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLineChart.tsx":
/*!*************************************************!*\
  !*** ./src/components/TopLine/TopLineChart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopLineChart.module.scss */ \"./src/components/TopLine/TopLineChart.module.scss\");\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLineChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar asPercentString = function asPercentString(p) {\n  return Math.round(100 * p).toString() + \"%\";\n};\n\nvar TopLineChart = function TopLineChart(props) {\n  _s();\n\n  var sparklineData = props.sparklineData,\n      pieData = props.pieData,\n      _label = props.label;\n  var pieCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var pieCanvasElement = pieCanvasRef.current;\n\n    if (pieCanvasElement) {\n      var pieCanvasContext = pieCanvasElement.getContext(\"2d\");\n      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(pieCanvasContext, {\n        type: \"doughnut\",\n        data: pieData,\n        options: {\n          legend: {\n            display: false\n          },\n          tooltips: {\n            enabled: false\n          },\n          hover: {\n            mode: null\n          }\n        }\n      });\n    }\n  }, [props.pieData]);\n  var lineCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var lineCanvasElement = lineCanvasRef.current;\n\n    if (lineCanvasElement) {\n      var lineCanvasContext = lineCanvasElement.getContext(\"2d\");\n      var datasets = sparklineData.datasets;\n      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(lineCanvasContext, {\n        type: \"line\",\n        data: sparklineData,\n        options: {\n          tooltips: {\n            mode: \"index\",\n            intersect: false,\n            callbacks: {\n              title: function title(_ref) {\n                var _ref2 = Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 1),\n                    _ref2$ = _ref2[0],\n                    index = _ref2$.index,\n                    datasetIndex = _ref2$.datasetIndex;\n\n                var dateStrings = datasets[datasetIndex].labels.dateStrings;\n                return dateStrings[index];\n              },\n              label: function label(_ref3) {\n                var index = _ref3.index,\n                    datasetIndex = _ref3.datasetIndex;\n                var data = datasets[datasetIndex].data;\n                var percentage = asPercentString(data[index] / data[0]);\n                return \"\".concat(percentage, \" of pre-covid \").concat(_label);\n              }\n            }\n          },\n          legend: {\n            display: false\n          },\n          layout: {\n            padding: -10\n          },\n          scales: {\n            xAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false,\n                maxTicksLimit: 2\n              }\n            }],\n            yAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false\n              }\n            }]\n          },\n          elements: {\n            point: {\n              radius: 0\n            }\n          }\n        }\n      });\n    }\n  }, [props.sparklineData]);\n  return __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexWrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: pieCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: lineCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(TopLineChart, \"DM/NyJ6v5B+mRlRxPUXAHJ1g4rs=\");\n\n_c = TopLineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLineChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLineChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lQ2hhcnQudHN4PzQwM2QiXSwibmFtZXMiOlsiYXNQZXJjZW50U3RyaW5nIiwicCIsIk1hdGgiLCJyb3VuZCIsInRvU3RyaW5nIiwiVG9wTGluZUNoYXJ0IiwicHJvcHMiLCJzcGFya2xpbmVEYXRhIiwicGllRGF0YSIsImxhYmVsIiwicGllQ2FudmFzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicGllQ2FudmFzRWxlbWVudCIsImN1cnJlbnQiLCJwaWVDYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsIkNoYXJ0IiwidHlwZSIsImRhdGEiLCJvcHRpb25zIiwibGVnZW5kIiwiZGlzcGxheSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImhvdmVyIiwibW9kZSIsImxpbmVDYW52YXNSZWYiLCJsaW5lQ2FudmFzRWxlbWVudCIsImxpbmVDYW52YXNDb250ZXh0IiwiZGF0YXNldHMiLCJpbnRlcnNlY3QiLCJjYWxsYmFja3MiLCJ0aXRsZSIsImluZGV4IiwiZGF0YXNldEluZGV4IiwiZGF0ZVN0cmluZ3MiLCJsYWJlbHMiLCJwZXJjZW50YWdlIiwibGF5b3V0IiwicGFkZGluZyIsInNjYWxlcyIsInhBeGVzIiwiZ3JpZExpbmVzIiwiZHJhd0JvcmRlciIsInRpY2tNYXJrTGVuZ3RoIiwiZHJhd09uQ2hhcnRBcmVhIiwidGlja3MiLCJtYXhUaWNrc0xpbWl0IiwieUF4ZXMiLCJlbGVtZW50cyIsInBvaW50IiwicmFkaXVzIiwic3R5bGVzIiwiZmxleFdyYXAiLCJmbGV4Q29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBUUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFEO0FBQUEsU0FBZUMsSUFBSSxDQUFDQyxLQUFMLENBQVcsTUFBTUYsQ0FBakIsRUFBb0JHLFFBQXBCLEtBQWlDLEdBQWhEO0FBQUEsQ0FBeEI7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dGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub3BMaW5lQ2hhcnQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBzcGFya2xpbmVEYXRhOiBhbnk7XG4gICAgcGllRGF0YTogYW55O1xuICAgIGxhYmVsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBhc1BlcmNlbnRTdHJpbmcgPSAocDogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKDEwMCAqIHApLnRvU3RyaW5nKCkgKyBcIiVcIjtcblxuY29uc3QgVG9wTGluZUNoYXJ0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc3BhcmtsaW5lRGF0YSwgcGllRGF0YSwgbGFiZWwgfSA9IHByb3BzO1xuICAgIGNvbnN0IHBpZUNhbnZhc1JlZiA9IHVzZVJlZjxudWxsIHwgSFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpZUNhbnZhc0VsZW1lbnQgPSBwaWVDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKHBpZUNhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBpZUNhbnZhc0NvbnRleHQgPSBwaWVDYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIG5ldyBDaGFydChwaWVDYW52YXNDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkb3VnaG51dFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHBpZURhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5waWVEYXRhXSk7XG5cbiAgICBjb25zdCBsaW5lQ2FudmFzUmVmID0gdXNlUmVmPG51bGwgfCBIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGluZUNhbnZhc0VsZW1lbnQgPSBsaW5lQ2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChsaW5lQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgbGluZUNhbnZhc0NvbnRleHQgPSBsaW5lQ2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGFzZXRzIH0gPSBzcGFya2xpbmVEYXRhO1xuICAgICAgICAgICAgbmV3IENoYXJ0KGxpbmVDYW52YXNDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogc3BhcmtsaW5lRGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChbeyBpbmRleCwgZGF0YXNldEluZGV4IH1dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogeyBkYXRlU3RyaW5ncyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gZGF0YXNldHNbZGF0YXNldEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVTdHJpbmdzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoeyBpbmRleCwgZGF0YXNldEluZGV4IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBkYXRhc2V0c1tkYXRhc2V0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gYXNQZXJjZW50U3RyaW5nKGRhdGFbaW5kZXhdIC8gZGF0YVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtwZXJjZW50YWdlfSBvZiBwcmUtY292aWQgJHtsYWJlbH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tNYXJrTGVuZ3RoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja01hcmtMZW5ndGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3T25DaGFydEFyZWE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnNwYXJrbGluZURhdGFdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFdyYXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sfT5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17cGllQ2FudmFzUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x9PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtsaW5lQ2FudmFzUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BMaW5lQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLineChart.tsx\n");

/***/ })

})