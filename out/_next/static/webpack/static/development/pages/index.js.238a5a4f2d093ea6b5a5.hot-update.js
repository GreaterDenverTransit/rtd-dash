webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/RouteCard/ServiceRidershipChart.tsx":
/*!************************************************************!*\
  !*** ./src/components/RouteCard/ServiceRidershipChart.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-color */ \"./node_modules/chartjs-color/index.js\");\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_color__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! patternomaly */ \"./node_modules/patternomaly/dist/patternomaly.js\");\n/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(patternomaly__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fast_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-memoize */ \"./node_modules/fast-memoize/src/index.js\");\n/* harmony import */ var fast_memoize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_memoize__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RouteCard.module.scss */ \"./src/components/RouteCard/RouteCard.module.scss\");\n/* harmony import */ var _RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/RouteCard/ServiceRidershipChart.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar normalizeToPercent = function normalizeToPercent(timeSeries) {\n  var firstValue = timeSeries[0];\n  return timeSeries.map(function (n) {\n    return n / firstValue;\n  });\n};\n\nvar getChartLabels = fast_memoize__WEBPACK_IMPORTED_MODULE_4___default()(function (startDate) {\n  var formatter = new Intl.DateTimeFormat(\"en-US\");\n  var now = Date.now();\n  var labels = [];\n  var time = startDate.valueOf();\n\n  do {\n    var dateString = formatter.format(time);\n    dateString = dateString.slice(0, -4) + dateString.slice(-2);\n    labels.push(dateString);\n    time += 86400 * 1000;\n  } while (time <= now);\n\n  return labels;\n}, {\n  serializer: function serializer(d) {\n    return d.valueOf().toString();\n  }\n});\n\nvar ServiceRidershipChart = function ServiceRidershipChart(props) {\n  _s();\n\n  var color = props.color,\n      serviceHistory = props.serviceHistory,\n      ridershipHistory = props.ridershipHistory,\n      startDate = props.startDate;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  var ridershipPercentage = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return ridershipHistory && normalizeToPercent(ridershipHistory);\n  }, [ridershipHistory]);\n  var servicePercentage = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return serviceHistory && normalizeToPercent(serviceHistory);\n  }, [serviceHistory]);\n  var labels = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return getChartLabels(startDate);\n  }, [startDate]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var alphaColor = chartjs_color__WEBPACK_IMPORTED_MODULE_2___default()(color).alpha(0.8).rgbString();\n    var ctx = canvasRef.current.getContext(\"2d\");\n    var datasets = [ridershipPercentage && {\n      label: \"Ridership\",\n      actual: ridershipHistory,\n      unit: \"weekday passengers\",\n      data: ridershipPercentage,\n      borderColor: color,\n      backgroundColor: alphaColor,\n      borderWidth: 2\n    }, {\n      label: \"Frequency\",\n      actual: serviceHistory,\n      unit: \"weekday trips (each direction)\",\n      data: servicePercentage,\n      borderColor: alphaColor,\n      backgroundColor: patternomaly__WEBPACK_IMPORTED_MODULE_3___default.a.draw(\"diagonal\", \"rgba(0,0,0,0)\", color, 5),\n      borderWidth: 2\n    }].filter(function (x) {\n      return x;\n    });\n    var chart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, {\n      type: \"line\",\n      data: {\n        labels: labels,\n        datasets: datasets\n      },\n      options: {\n        maintainAspectRatio: false,\n        animation: {\n          duration: 0\n        },\n        scales: {\n          xAxes: [{\n            gridLines: {\n              display: false\n            },\n            ticks: {\n              maxTicksLimit: 15\n            }\n          }],\n          yAxes: [{\n            ticks: {\n              beginAtZero: true,\n              stepSize: 0.2,\n              callback: function callback(p) {\n                return Math.round(100 * p).toString() + \"%\";\n              }\n            },\n            gridLines: {\n              display: false\n            }\n          }]\n        },\n        elements: {\n          point: {\n            radius: 0\n          },\n          line: {\n            tension: 0\n          }\n        },\n        legend: {\n          position: \"top\",\n          align: \"end\",\n          labels: {\n            boxWidth: 15\n          }\n        },\n        tooltips: {\n          mode: \"index\",\n          intersect: false,\n          callbacks: {\n            label: function label(_ref) {\n              var datasetIndex = _ref.datasetIndex,\n                  index = _ref.index;\n              var _datasets$datasetInde = datasets[datasetIndex],\n                  label = _datasets$datasetInde.label,\n                  actual = _datasets$datasetInde.actual,\n                  unit = _datasets$datasetInde.unit;\n              return \"\".concat(label, \": \").concat(actual[index], \" \").concat(unit);\n            }\n          }\n        }\n      }\n    });\n    return function () {\n      return chart.destroy();\n    };\n  }, [ridershipPercentage, servicePercentage]);\n  return __jsx(\"div\", {\n    className: _RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.serviceAndRidershipChartContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 9\n    }\n  }, __jsx(\"canvas\", {\n    className: _RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.serviceAndRidershipChart,\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(ServiceRidershipChart, \"ynkOavN4L8IuOZDxKJFBy12MCAs=\");\n\n_c = ServiceRidershipChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceRidershipChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"ServiceRidershipChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUNhcmQvU2VydmljZVJpZGVyc2hpcENoYXJ0LnRzeD8xYmVjIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVRvUGVyY2VudCIsInRpbWVTZXJpZXMiLCJmaXJzdFZhbHVlIiwibWFwIiwibiIsImdldENoYXJ0TGFiZWxzIiwibWVtb2l6ZSIsInN0YXJ0RGF0ZSIsImZvcm1hdHRlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsIm5vdyIsIkRhdGUiLCJsYWJlbHMiLCJ0aW1lIiwidmFsdWVPZiIsImRhdGVTdHJpbmciLCJmb3JtYXQiLCJzbGljZSIsInB1c2giLCJzZXJpYWxpemVyIiwiZCIsInRvU3RyaW5nIiwiU2VydmljZVJpZGVyc2hpcENoYXJ0IiwicHJvcHMiLCJjb2xvciIsInNlcnZpY2VIaXN0b3J5IiwicmlkZXJzaGlwSGlzdG9yeSIsImNhbnZhc1JlZiIsInVzZVJlZiIsInJpZGVyc2hpcFBlcmNlbnRhZ2UiLCJ1c2VNZW1vIiwic2VydmljZVBlcmNlbnRhZ2UiLCJ1c2VFZmZlY3QiLCJhbHBoYUNvbG9yIiwiQ29sb3IiLCJhbHBoYSIsInJnYlN0cmluZyIsImN0eCIsImN1cnJlbnQiLCJnZXRDb250ZXh0IiwiZGF0YXNldHMiLCJsYWJlbCIsImFjdHVhbCIsInVuaXQiLCJkYXRhIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsInBhdHRlcm4iLCJkcmF3IiwiZmlsdGVyIiwieCIsImNoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwib3B0aW9ucyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJhbmltYXRpb24iLCJkdXJhdGlvbiIsInNjYWxlcyIsInhBeGVzIiwiZ3JpZExpbmVzIiwiZGlzcGxheSIsInRpY2tzIiwibWF4VGlja3NMaW1pdCIsInlBeGVzIiwiYmVnaW5BdFplcm8iLCJzdGVwU2l6ZSIsImNhbGxiYWNrIiwicCIsIk1hdGgiLCJyb3VuZCIsImVsZW1lbnRzIiwicG9pbnQiLCJyYWRpdXMiLCJsaW5lIiwidGVuc2lvbiIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYWxpZ24iLCJib3hXaWR0aCIsInRvb2x0aXBzIiwibW9kZSIsImludGVyc2VjdCIsImNhbGxiYWNrcyIsImRhdGFzZXRJbmRleCIsImluZGV4IiwiZGVzdHJveSIsInN0eWxlcyIsInNlcnZpY2VBbmRSaWRlcnNoaXBDaGFydENvbnRhaW5lciIsInNlcnZpY2VBbmRSaWRlcnNoaXBDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQVVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsVUFBRCxFQUEwQjtBQUNqRCxNQUFNQyxVQUFVLEdBQUdELFVBQVUsQ0FBQyxDQUFELENBQTdCO0FBQ0EsU0FBT0EsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsR0FBR0YsVUFBWDtBQUFBLEdBQWYsQ0FBUDtBQUNILENBSEQ7O0FBS0EsSUFBTUcsY0FBYyxHQUFHQyxtREFBTyxDQUMxQixVQUFDQyxTQUFELEVBQXFCO0FBQ2pCLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbEI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBTCxFQUFaO0FBQ0EsTUFBTUUsTUFBZ0IsR0FBRyxFQUF6QjtBQUNBLE1BQUlDLElBQUksR0FBR1AsU0FBUyxDQUFDUSxPQUFWLEVBQVg7O0FBQ0EsS0FBRztBQUNDLFFBQUlDLFVBQVUsR0FBR1IsU0FBUyxDQUFDUyxNQUFWLENBQWlCSCxJQUFqQixDQUFqQjtBQUNBRSxjQUFVLEdBQUdBLFVBQVUsQ0FBQ0UsS0FBWCxDQUFpQixDQUFqQixFQUFvQixDQUFDLENBQXJCLElBQTBCRixVQUFVLENBQUNFLEtBQVgsQ0FBaUIsQ0FBQyxDQUFsQixDQUF2QztBQUNBTCxVQUFNLENBQUNN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QVYsZUFBb0JDLE1BQU0sQ0FBQzRDLEtBQUQsQ0FBMUIsY0FBcUMzQyxJQUFyQztBQUNIO0FBSk07QUFITDtBQWhDTDtBQU5nQixLQUFmLENBQWQ7QUFrREEsV0FBTztBQUFBLGFBQU1TLEtBQUssQ0FBQ21DLE9BQU4sRUFBTjtBQUFBLEtBQVA7QUFDSCxHQTNFUSxFQTJFTixDQUFDMUQsbUJBQUQsRUFBc0JFLGlCQUF0QixDQTNFTSxDQUFUO0FBNkVBLFNBQ0k7QUFBSyxhQUFTLEVBQUV5RCw2REFBTSxDQUFDQyxpQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFFRCw2REFBTSxDQUFDRSx3QkFBMUI7QUFBb0QsT0FBRyxFQUFFL0QsU0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFLSCxDQS9GRDs7R0FBTUwscUI7O0tBQUFBLHFCO0FBaUdTQSxvRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1JvdXRlQ2FyZC9TZXJ2aWNlUmlkZXJzaGlwQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQsIHsgQ2hhcnREYXRhU2V0cyB9IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCJjaGFydGpzLWNvbG9yXCI7XG5pbXBvcnQgcGF0dGVybiBmcm9tIFwicGF0dGVybm9tYWx5XCI7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tIFwiZmFzdC1tZW1vaXplXCI7XG5cbmltcG9ydCB7IFJvdXRlRGF0YSB9IGZyb20gXCJ0eXBlc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1JvdXRlQ2FyZC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcInBhdGhcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICByaWRlcnNoaXBIaXN0b3J5OiBSb3V0ZURhdGFbXCJyaWRlcnNoaXBIaXN0b3J5XCJdO1xuICAgIHNlcnZpY2VIaXN0b3J5OiBSb3V0ZURhdGFbXCJzZXJ2aWNlSGlzdG9yeVwiXTtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVRvUGVyY2VudCA9ICh0aW1lU2VyaWVzOiBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmFsdWUgPSB0aW1lU2VyaWVzWzBdO1xuICAgIHJldHVybiB0aW1lU2VyaWVzLm1hcCgobikgPT4gbiAvIGZpcnN0VmFsdWUpO1xufTtcblxuY29uc3QgZ2V0Q2hhcnRMYWJlbHMgPSBtZW1vaXplKFxuICAgIChzdGFydERhdGU6IERhdGUpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiKTtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgdGltZSA9IHN0YXJ0RGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCBkYXRlU3RyaW5nID0gZm9ybWF0dGVyLmZvcm1hdCh0aW1lKTtcbiAgICAgICAgICAgIGRhdGVTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKDAsIC00KSArIGRhdGVTdHJpbmcuc2xpY2UoLTIpO1xuICAgICAgICAgICAgbGFiZWxzLnB1c2goZGF0ZVN0cmluZyk7XG4gICAgICAgICAgICB0aW1lICs9IDg2NDAwICogMTAwMDtcbiAgICAgICAgfSB3aGlsZSAodGltZSA8PSBub3cpO1xuICAgICAgICByZXR1cm4gbGFiZWxzO1xuICAgIH0sXG4gICAgeyBzZXJpYWxpemVyOiAoZCkgPT4gZC52YWx1ZU9mKCkudG9TdHJpbmcoKSB9XG4pO1xuXG5jb25zdCBTZXJ2aWNlUmlkZXJzaGlwQ2hhcnQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvciwgc2VydmljZUhpc3RvcnksIHJpZGVyc2hpcEhpc3RvcnksIHN0YXJ0RGF0ZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPG51bGwgfCBIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG5cbiAgICBjb25zdCByaWRlcnNoaXBQZXJjZW50YWdlID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gcmlkZXJzaGlwSGlzdG9yeSAmJiBub3JtYWxpemVUb1BlcmNlbnQocmlkZXJzaGlwSGlzdG9yeSksXG4gICAgICAgIFtyaWRlcnNoaXBIaXN0b3J5XVxuICAgICk7XG4gICAgY29uc3Qgc2VydmljZVBlcmNlbnRhZ2UgPSB1c2VNZW1vKCgpID0+IHNlcnZpY2VIaXN0b3J5ICYmIG5vcm1hbGl6ZVRvUGVyY2VudChzZXJ2aWNlSGlzdG9yeSksIFtcbiAgICAgICAgc2VydmljZUhpc3RvcnksXG4gICAgXSk7XG4gICAgY29uc3QgbGFiZWxzID0gdXNlTWVtbygoKSA9PiBnZXRDaGFydExhYmVscyhzdGFydERhdGUpLCBbc3RhcnREYXRlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYUNvbG9yID0gQ29sb3IoY29sb3IpLmFscGhhKDAuOCkucmdiU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc1JlZi5jdXJyZW50IS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgY29uc3QgZGF0YXNldHM6IChDaGFydERhdGFTZXRzICYgeyBhY3R1YWw6IG51bWJlcltdOyB1bml0OiBzdHJpbmcgfSlbXSA9IFtcbiAgICAgICAgICAgIHJpZGVyc2hpcFBlcmNlbnRhZ2UgJiYge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJpZGVyc2hpcFwiLFxuICAgICAgICAgICAgICAgIGFjdHVhbDogcmlkZXJzaGlwSGlzdG9yeSxcbiAgICAgICAgICAgICAgICB1bml0OiBcIndlZWtkYXkgcGFzc2VuZ2Vyc1wiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJpZGVyc2hpcFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGFDb2xvcixcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRnJlcXVlbmN5XCIsXG4gICAgICAgICAgICAgICAgYWN0dWFsOiBzZXJ2aWNlSGlzdG9yeSxcbiAgICAgICAgICAgICAgICB1bml0OiBcIndlZWtkYXkgdHJpcHMgKGVhY2ggZGlyZWN0aW9uKVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHNlcnZpY2VQZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhbHBoYUNvbG9yLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGF0dGVybi5kcmF3KFwiZGlhZ29uYWxcIiwgXCJyZ2JhKDAsMCwwLDApXCIsIGNvbG9yLCA1KSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0uZmlsdGVyKCh4KSA9PiB4KTtcbiAgICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICAgICAgZGF0YXNldHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMCB9LFxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogeyBkaXNwbGF5OiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7IG1heFRpY2tzTGltaXQ6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKHApID0+IE1hdGgucm91bmQoMTAwICogcCkudG9TdHJpbmcoKSArIFwiJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHsgcmFkaXVzOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHsgdGVuc2lvbjogMCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3hXaWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICh7IGRhdGFzZXRJbmRleCwgaW5kZXggfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbGFiZWwsIGFjdHVhbCwgdW5pdCB9ID0gZGF0YXNldHNbZGF0YXNldEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7bGFiZWx9OiAke2FjdHVhbFtpbmRleF19ICR7dW5pdH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjaGFydC5kZXN0cm95KCk7XG4gICAgfSwgW3JpZGVyc2hpcFBlcmNlbnRhZ2UsIHNlcnZpY2VQZXJjZW50YWdlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VBbmRSaWRlcnNoaXBDaGFydENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VBbmRSaWRlcnNoaXBDaGFydH0gcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlUmlkZXJzaGlwQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RouteCard/ServiceRidershipChart.tsx\n");

/***/ })

})