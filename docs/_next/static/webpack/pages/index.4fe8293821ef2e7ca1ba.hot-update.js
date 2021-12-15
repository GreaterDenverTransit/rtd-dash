webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLineChart.tsx":
/*!*************************************************!*\
  !*** ./src/components/TopLine/TopLineChart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopLineChart.module.scss */ \"./src/components/TopLine/TopLineChart.module.scss\");\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLineChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar dateFormatter = new Intl.DateTimeFormat(\"en-US\");\n\nvar TopLineChart = function TopLineChart(props) {\n  _s();\n\n  var sparklineData = props.sparklineData,\n      pieData = props.pieData;\n  var pieCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var pieCanvasElement = pieCanvasRef.current;\n\n    if (pieCanvasElement) {\n      var pieCanvasContext = pieCanvasElement.getContext(\"2d\");\n      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(pieCanvasContext, {\n        type: \"doughnut\",\n        data: pieData,\n        options: {\n          legend: {\n            display: false\n          },\n          tooltips: {\n            enabled: false\n          },\n          hover: {\n            mode: null\n          }\n        }\n      });\n    }\n  }, [props.pieData]);\n  var lineCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var lineCanvasElement = lineCanvasRef.current;\n\n    if (lineCanvasElement) {\n      var lineCanvasContext = lineCanvasElement.getContext(\"2d\");\n      console.log(sparklineData);\n      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(lineCanvasContext, {\n        type: \"line\",\n        data: sparklineData,\n        options: {\n          tooltips: {\n            mode: \"index\",\n            intersect: false,\n            callbacks: {\n              title: function title(_ref) {\n                var _ref2 = Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 1),\n                    index = _ref2[0].index;\n\n                return dateFormatter.format(timestamps[index]);\n              },\n              label: function label(_ref3) {\n                var datasetIndex = _ref3.datasetIndex,\n                    index = _ref3.index,\n                    value = _ref3.value;\n                var _datasets$datasetInde = datasets[datasetIndex],\n                    label = _datasets$datasetInde.label,\n                    actual = _datasets$datasetInde.actual,\n                    unit = _datasets$datasetInde.unit;\n                var valuePercent = Math.round(parseFloat(value) * 100);\n                return \"\".concat(label, \": \").concat(actual[index], \" \").concat(unit, \" (\").concat(valuePercent, \"%)\");\n              }\n            }\n          },\n          legend: {\n            display: false\n          },\n          layout: {\n            padding: -10\n          },\n          scales: {\n            xAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false,\n                maxTicksLimit: 2\n              }\n            }],\n            yAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false\n              }\n            }]\n          },\n          elements: {\n            point: {\n              radius: 0\n            }\n          }\n        }\n      });\n    }\n  }, [props.sparklineData]);\n  return __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexWrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: pieCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexCol,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: lineCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(TopLineChart, \"DM/NyJ6v5B+mRlRxPUXAHJ1g4rs=\");\n\n_c = TopLineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLineChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLineChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lQ2hhcnQudHN4PzQwM2QiXSwibmFtZXMiOlsiZGF0ZUZvcm1hdHRlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsIlRvcExpbmVDaGFydCIsInByb3BzIiwic3BhcmtsaW5lRGF0YSIsInBpZURhdGEiLCJwaWVDYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwaWVDYW52YXNFbGVtZW50IiwiY3VycmVudCIsInBpZUNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsIm9wdGlvbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwidG9vbHRpcHMiLCJlbmFibGVkIiwiaG92ZXIiLCJtb2RlIiwibGluZUNhbnZhc1JlZiIsImxpbmVDYW52YXNFbGVtZW50IiwibGluZUNhbnZhc0NvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiaW50ZXJzZWN0IiwiY2FsbGJhY2tzIiwidGl0bGUiLCJpbmRleCIsImZvcm1hdCIsInRpbWVzdGFtcHMiLCJsYWJlbCIsImRhdGFzZXRJbmRleCIsInZhbHVlIiwiZGF0YXNldHMiLCJhY3R1YWwiLCJ1bml0IiwidmFsdWVQZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImxheW91dCIsInBhZGRpbmciLCJzY2FsZXMiLCJ4QXhlcyIsImdyaWRMaW5lcyIsImRyYXdCb3JkZXIiLCJ0aWNrTWFya0xlbmd0aCIsImRyYXdPbkNoYXJ0QXJlYSIsInRpY2tzIiwibWF4VGlja3NMaW1pdCIsInlBeGVzIiwiZWxlbWVudHMiLCJwb2ludCIsInJhZGl1cyIsInN0eWxlcyIsImZsZXhXcmFwIiwiZmxleENvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBT0EsSUFBTUEsYUFBYSxHQUFHLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUF0Qjs7QUFF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QWUsRUFBRTtBQUhWLGVBRGY7QUFNSUMsbUJBQUssRUFBRTtBQUNIbEMsdUJBQU8sRUFBRSxLQUROO0FBRUhtQyw2QkFBYSxFQUFFO0FBRlo7QUFOWCxhQURHLENBREg7QUFjSkMsaUJBQUssRUFBRSxDQUNIO0FBQ0lOLHVCQUFTLEVBQUU7QUFDUEMsMEJBQVUsRUFBRSxLQURMO0FBRVBDLDhCQUFjLEVBQUUsQ0FGVDtBQUdQQywrQkFBZSxFQUFFO0FBSFYsZUFEZjtBQU1JQyxtQkFBSyxFQUFFO0FBQ0hsQyx1QkFBTyxFQUFFO0FBRE47QUFOWCxhQURHO0FBZEgsV0FyQkg7QUFnRExxQyxrQkFBUSxFQUFFO0FBQ05DLGlCQUFLLEVBQUU7QUFDSEMsb0JBQU0sRUFBRTtBQURMO0FBREQ7QUFoREw7QUFIZ0IsT0FBN0I7QUEwREg7QUFDSixHQWhFUSxFQWdFTixDQUFDdEQsS0FBSyxDQUFDQyxhQUFQLENBaEVNLENBQVQ7QUFrRUEsU0FDSTtBQUFLLGFBQVMsRUFBRXNELGdFQUFNLENBQUNDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUQsZ0VBQU0sQ0FBQ0UsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsT0FBRyxFQUFFdEQsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFFb0QsZ0VBQU0sQ0FBQ0UsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsT0FBRyxFQUFFckMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURKO0FBVUgsQ0F0R0Q7O0dBQU1yQixZOztLQUFBQSxZO0FBd0dTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RvcExpbmUvVG9wTGluZUNoYXJ0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcExpbmVDaGFydC5tb2R1bGUuc2Nzc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHNwYXJrbGluZURhdGE6IGFueTtcbiAgICBwaWVEYXRhOiBhbnk7XG59O1xuXG5jb25zdCBkYXRlRm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiKTtcblxuY29uc3QgVG9wTGluZUNoYXJ0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc3BhcmtsaW5lRGF0YSwgcGllRGF0YSB9ID0gcHJvcHM7XG4gICAgY29uc3QgcGllQ2FudmFzUmVmID0gdXNlUmVmPG51bGwgfCBIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcGllQ2FudmFzRWxlbWVudCA9IHBpZUNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAocGllQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGllQ2FudmFzQ29udGV4dCA9IHBpZUNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgbmV3IENoYXJ0KHBpZUNhbnZhc0NvbnRleHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRvdWdobnV0XCIsXG4gICAgICAgICAgICAgICAgZGF0YTogcGllRGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnBpZURhdGFdKTtcblxuICAgIGNvbnN0IGxpbmVDYW52YXNSZWYgPSB1c2VSZWY8bnVsbCB8IEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5lQ2FudmFzRWxlbWVudCA9IGxpbmVDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGxpbmVDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lQ2FudmFzQ29udGV4dCA9IGxpbmVDYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwYXJrbGluZURhdGEpO1xuICAgICAgICAgICAgbmV3IENoYXJ0KGxpbmVDYW52YXNDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogc3BhcmtsaW5lRGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChbeyBpbmRleCB9XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZUZvcm1hdHRlci5mb3JtYXQodGltZXN0YW1wc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICh7IGRhdGFzZXRJbmRleCwgaW5kZXgsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBsYWJlbCwgYWN0dWFsLCB1bml0IH0gPSBkYXRhc2V0c1tkYXRhc2V0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVBlcmNlbnQgPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQodmFsdWUpICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2xhYmVsfTogJHthY3R1YWxbaW5kZXhdfSAke3VuaXR9ICgke3ZhbHVlUGVyY2VudH0lKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLTEwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja01hcmtMZW5ndGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3T25DaGFydEFyZWE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrTWFya0xlbmd0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdPbkNoYXJ0QXJlYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuc3BhcmtsaW5lRGF0YV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4V3JhcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x9PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtwaWVDYW52YXNSZWZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleENvbH0+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e2xpbmVDYW52YXNSZWZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcExpbmVDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLineChart.tsx\n");

/***/ })

})