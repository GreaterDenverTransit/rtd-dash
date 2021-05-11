webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/LineCard/ServiceRidershipChart.tsx":
/*!***********************************************************!*\
  !*** ./src/components/LineCard/ServiceRidershipChart.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-color */ \"./node_modules/chartjs-color/index.js\");\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_color__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! patternomaly */ \"./node_modules/patternomaly/dist/patternomaly.js\");\n/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(patternomaly__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fast_memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fast-memoize */ \"./node_modules/fast-memoize/src/index.js\");\n/* harmony import */ var fast_memoize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fast_memoize__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components */ \"./src/components/index.ts\");\n/* harmony import */ var _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LineCard.module.scss */ \"./src/components/LineCard/LineCard.module.scss\");\n/* harmony import */ var _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LineCard_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/LineCard/ServiceRidershipChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar getRidershipNoun = function getRidershipNoun(lineId) {\n  console.log(lineId);\n\n  if ([\"line-Red\", \"line-Orange\", \"line-Blue\", \"line-Green\"].includes(lineId)) {\n    return \"faregate validations\";\n  }\n\n  return \"riders\";\n};\n\nvar normalizeToPercent = function normalizeToPercent(timeSeries) {\n  var firstValue = timeSeries[0];\n  return timeSeries.map(function (n) {\n    return n / firstValue;\n  });\n};\n\nvar asPercentString = function asPercentString(p) {\n  return Math.round(100 * p).toString() + \"%\";\n};\n\nvar getChartLabels = fast_memoize__WEBPACK_IMPORTED_MODULE_5___default()(function (startDate) {\n  var formatter = new Intl.DateTimeFormat(\"en-US\");\n  var now = Date.now();\n  var dateStrings = [];\n  var timestamps = [];\n  var time = startDate.valueOf();\n\n  do {\n    dateStrings.push(formatter.format(time));\n    timestamps.push(time);\n    time += 86400 * 1000;\n  } while (time <= now);\n\n  return {\n    timestamps: timestamps,\n    dateStrings: dateStrings\n  };\n}, {\n  serializer: function serializer(d) {\n    return d.valueOf().toString();\n  }\n});\n\nvar ServiceRidershipChart = function ServiceRidershipChart(props) {\n  _s();\n\n  var color = props.color,\n      serviceHistory = props.serviceHistory,\n      ridershipHistory = props.ridershipHistory,\n      startDate = props.startDate,\n      lineTitle = props.lineTitle,\n      lineData = props.lineData;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var ridershipPercentage = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return ridershipHistory && normalizeToPercent(ridershipHistory);\n  }, [ridershipHistory]);\n  var servicePercentage = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return serviceHistory && normalizeToPercent(serviceHistory);\n  }, [serviceHistory]);\n\n  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return getChartLabels(startDate);\n  }, [startDate]),\n      timestamps = _useMemo.timestamps,\n      dateStrings = _useMemo.dateStrings;\n\n  var columns = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    var ridershipNoun = getRidershipNoun(lineData.id);\n    return [{\n      title: \"Date\",\n      values: dateStrings\n    }, ridershipHistory && {\n      title: \"Ridership (\".concat(ridershipNoun, \"/day)\"),\n      values: ridershipHistory\n    }, ridershipPercentage && {\n      title: \"Ridership (percentage)\",\n      values: ridershipPercentage.map(asPercentString)\n    }, serviceHistory && {\n      title: \"Service levels (trips/day)\",\n      values: serviceHistory\n    }, servicePercentage && {\n      title: \"Service levels (percentage)\",\n      values: servicePercentage.map(asPercentString)\n    }].filter(function (x) {\n      return x;\n    });\n  }, [dateStrings, ridershipHistory, ridershipPercentage, serviceHistory, servicePercentage]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var alphaColor = chartjs_color__WEBPACK_IMPORTED_MODULE_3___default()(color).alpha(0.8).rgbString();\n    var ctx = canvasRef.current.getContext(\"2d\");\n    var ridershipNoun = getRidershipNoun(lineData.id);\n    var datasets = [ridershipPercentage && {\n      label: \"Ridership\",\n      actual: ridershipHistory,\n      unit: \"weekday \".concat(ridershipNoun),\n      data: ridershipPercentage,\n      borderColor: color,\n      backgroundColor: alphaColor,\n      borderWidth: 2\n    }, {\n      label: \"Service levels\",\n      actual: serviceHistory,\n      unit: \"weekday trips per direction\",\n      data: servicePercentage,\n      borderColor: alphaColor,\n      backgroundColor: patternomaly__WEBPACK_IMPORTED_MODULE_4___default.a.draw(\"diagonal\", \"rgba(0,0,0,0)\", color, 5),\n      borderWidth: 2\n    }].filter(function (x) {\n      return x;\n    });\n    var chart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, {\n      type: \"line\",\n      data: {\n        datasets: datasets,\n        labels: timestamps\n      },\n      options: {\n        maintainAspectRatio: false,\n        animation: {\n          duration: 0\n        },\n        scales: {\n          xAxes: [{\n            gridLines: {\n              display: false\n            },\n            type: \"time\",\n            time: {\n              unit: \"month\",\n              displayFormats: {\n                month: \"MMM 'YY\"\n              }\n            }\n          }],\n          yAxes: [{\n            ticks: {\n              beginAtZero: true,\n              stepSize: 0.2,\n              maxTicksLimit: 6,\n              callback: asPercentString\n            },\n            gridLines: {\n              display: false\n            }\n          }]\n        },\n        elements: {\n          point: {\n            radius: 0\n          },\n          line: {\n            tension: 0\n          }\n        },\n        legend: {\n          position: \"top\",\n          align: \"end\",\n          labels: {\n            boxWidth: 15\n          }\n        },\n        tooltips: {\n          mode: \"index\",\n          intersect: false,\n          callbacks: {\n            title: function title(_ref) {\n              var _ref2 = Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 1),\n                  index = _ref2[0].index;\n\n              return timestamps[index].toString();\n            },\n            label: function label(_ref3) {\n              var datasetIndex = _ref3.datasetIndex,\n                  index = _ref3.index,\n                  value = _ref3.value;\n              var _datasets$datasetInde = datasets[datasetIndex],\n                  label = _datasets$datasetInde.label,\n                  actual = _datasets$datasetInde.actual,\n                  unit = _datasets$datasetInde.unit;\n              var valuePercent = Math.round(parseFloat(value) * 100);\n              return \"\".concat(label, \": \").concat(actual[index], \" \").concat(unit, \" (\").concat(valuePercent, \"%)\");\n            }\n          }\n        }\n      }\n    });\n    return function () {\n      return chart.destroy();\n    };\n  }, [ridershipPercentage, servicePercentage, lineData.id]);\n  return __jsx(\"div\", {\n    className: _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.serviceAndRidershipChartContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 9\n    }\n  }, __jsx(\"canvas\", {\n    className: _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.serviceAndRidershipChart,\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 13\n    }\n  }), __jsx(components__WEBPACK_IMPORTED_MODULE_6__[\"DataTable\"], {\n    columns: columns,\n    caption: \"Service levels and ridership (\".concat(lineTitle, \")\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(ServiceRidershipChart, \"B4KTUo187L1bCPXdbcYWrW6nvqA=\");\n\n_c = ServiceRidershipChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceRidershipChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"ServiceRidershipChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGluZUNhcmQvU2VydmljZVJpZGVyc2hpcENoYXJ0LnRzeD80NGE0Il0sIm5hbWVzIjpbImdldFJpZGVyc2hpcE5vdW4iLCJsaW5lSWQiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJub3JtYWxpemVUb1BlcmNlbnQiLCJ0aW1lU2VyaWVzIiwiZmlyc3RWYWx1ZSIsIm1hcCIsIm4iLCJhc1BlcmNlbnRTdHJpbmciLCJwIiwiTWF0aCIsInJvdW5kIiwidG9TdHJpbmciLCJnZXRDaGFydExhYmVscyIsIm1lbW9pemUiLCJzdGFydERhdGUiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJub3ciLCJEYXRlIiwiZGF0ZVN0cmluZ3MiLCJ0aW1lc3RhbXBzIiwidGltZSIsInZhbHVlT2YiLCJwdXNoIiwiZm9ybWF0Iiwic2VyaWFsaXplciIsImQiLCJTZXJ2aWNlUmlkZXJzaGlwQ2hhcnQiLCJwcm9wcyIsImNvbG9yIiwic2VydmljZUhpc3RvcnkiLCJyaWRlcnNoaXBIaXN0b3J5IiwibGluZVRpdGxlIiwibGluZURhdGEiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJyaWRlcnNoaXBQZXJjZW50YWdlIiwidXNlTWVtbyIsInNlcnZpY2VQZXJjZW50YWdlIiwiY29sdW1ucyIsInJpZGVyc2hpcE5vdW4iLCJpZCIsInRpdGxlIiwidmFsdWVzIiwiZmlsdGVyIiwieCIsInVzZUVmZmVjdCIsImFscGhhQ29sb3IiLCJDb2xvciIsImFscGhhIiwicmdiU3RyaW5nIiwiY3R4IiwiY3VycmVudCIsImdldENvbnRleHQiLCJkYXRhc2V0cyIsImxhYmVsIiwiYWN0dWFsIiwidW5pdCIsImRhdGEiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlcldpZHRoIiwicGF0dGVybiIsImRyYXciLCJjaGFydCIsIkNoYXJ0IiwidHlwZSIsImxhYmVscyIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJzY2FsZXMiLCJ4QXhlcyIsImdyaWRMaW5lcyIsImRpc3BsYXkiLCJkaXNwbGF5Rm9ybWF0cyIsIm1vbnRoIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwic3RlcFNpemUiLCJtYXhUaWNrc0xpbWl0IiwiY2FsbGJhY2siLCJlbGVtZW50cyIsInBvaW50IiwicmFkaXVzIiwibGluZSIsInRlbnNpb24iLCJsZWdlbmQiLCJwb3NpdGlvbiIsImFsaWduIiwiYm94V2lkdGgiLCJ0b29sdGlwcyIsIm1vZGUiLCJpbnRlcnNlY3QiLCJjYWxsYmFja3MiLCJpbmRleCIsImRhdGFzZXRJbmRleCIsInZhbHVlIiwidmFsdWVQZXJjZW50IiwicGFyc2VGbG9hdCIsImRlc3Ryb3kiLCJzdHlsZXMiLCJzZXJ2aWNlQW5kUmlkZXJzaGlwQ2hhcnRDb250YWluZXIiLCJzZXJ2aWNlQW5kUmlkZXJzaGlwQ2hhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7QUFXQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE1BQUQsRUFBb0I7QUFDekNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQUNBLE1BQUksQ0FBQyxVQUFELEVBQWEsYUFBYixFQUE0QixXQUE1QixFQUF5QyxZQUF6QyxFQUF1REcsUUFBdkQsQ0FBZ0VILE1BQWhFLENBQUosRUFBNkU7QUFDekUsV0FBTyxzQkFBUDtBQUNIOztBQUNELFNBQU8sUUFBUDtBQUNILENBTkQ7O0FBUUEsSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxVQUFELEVBQTBCO0FBQ2pELE1BQU1DLFVBQVUsR0FBR0QsVUFBVSxDQUFDLENBQUQsQ0FBN0I7QUFDQSxTQUFPQSxVQUFVLENBQUNFLEdBQVgsQ0FBZSxVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxHQUFH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QUFPO0FBQUEsYUFBTXBDLEtBQUssQ0FBQ3NDLE9BQU4sRUFBTjtBQUFBLEtBQVA7QUFDSCxHQXZGUSxFQXVGTixDQUFDbEUsbUJBQUQsRUFBc0JFLGlCQUF0QixFQUF5Q0wsUUFBUSxDQUFDUSxFQUFsRCxDQXZGTSxDQUFUO0FBeUZBLFNBQ0k7QUFBSyxhQUFTLEVBQUU4RCw0REFBTSxDQUFDQyxpQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFFRCw0REFBTSxDQUFDRSx3QkFBMUI7QUFBb0QsT0FBRyxFQUFFdkUsU0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxvREFBRDtBQUFXLFdBQU8sRUFBRUssT0FBcEI7QUFBNkIsV0FBTywwQ0FBbUNQLFNBQW5DLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKO0FBTUgsQ0EvSEQ7O0dBQU1MLHFCOztLQUFBQSxxQjtBQWlJU0Esb0ZBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaW5lQ2FyZC9TZXJ2aWNlUmlkZXJzaGlwQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQsIHsgQ2hhcnREYXRhU2V0cyB9IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCJjaGFydGpzLWNvbG9yXCI7XG5pbXBvcnQgcGF0dGVybiBmcm9tIFwicGF0dGVybm9tYWx5XCI7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tIFwiZmFzdC1tZW1vaXplXCI7XG5cbmltcG9ydCB7IExpbmVEYXRhIH0gZnJvbSBcInR5cGVzXCI7XG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpbmVDYXJkLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgcmlkZXJzaGlwSGlzdG9yeTogTGluZURhdGFbXCJyaWRlcnNoaXBIaXN0b3J5XCJdO1xuICAgIHNlcnZpY2VIaXN0b3J5OiBMaW5lRGF0YVtcInNlcnZpY2VIaXN0b3J5XCJdO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgc3RhcnREYXRlOiBEYXRlO1xuICAgIGxpbmVUaXRsZTogc3RyaW5nO1xuICAgIGxpbmVEYXRhOiBMaW5lRGF0YTtcbn07XG5cbmNvbnN0IGdldFJpZGVyc2hpcE5vdW4gPSAobGluZUlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsaW5lSWQpO1xuICAgIGlmIChbXCJsaW5lLVJlZFwiLCBcImxpbmUtT3JhbmdlXCIsIFwibGluZS1CbHVlXCIsIFwibGluZS1HcmVlblwiXS5pbmNsdWRlcyhsaW5lSWQpKSB7XG4gICAgICAgIHJldHVybiBcImZhcmVnYXRlIHZhbGlkYXRpb25zXCI7XG4gICAgfVxuICAgIHJldHVybiBcInJpZGVyc1wiO1xufTtcblxuY29uc3Qgbm9ybWFsaXplVG9QZXJjZW50ID0gKHRpbWVTZXJpZXM6IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWYWx1ZSA9IHRpbWVTZXJpZXNbMF07XG4gICAgcmV0dXJuIHRpbWVTZXJpZXMubWFwKChuKSA9PiBuIC8gZmlyc3RWYWx1ZSk7XG59O1xuXG5jb25zdCBhc1BlcmNlbnRTdHJpbmcgPSAocDogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKDEwMCAqIHApLnRvU3RyaW5nKCkgKyBcIiVcIjtcblxuY29uc3QgZ2V0Q2hhcnRMYWJlbHMgPSBtZW1vaXplKFxuICAgIChzdGFydERhdGU6IERhdGUpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiKTtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZGF0ZVN0cmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCB0aW1lID0gc3RhcnREYXRlLnZhbHVlT2YoKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgZGF0ZVN0cmluZ3MucHVzaChmb3JtYXR0ZXIuZm9ybWF0KHRpbWUpKTtcbiAgICAgICAgICAgIHRpbWVzdGFtcHMucHVzaCh0aW1lKTtcbiAgICAgICAgICAgIHRpbWUgKz0gODY0MDAgKiAxMDAwO1xuICAgICAgICB9IHdoaWxlICh0aW1lIDw9IG5vdyk7XG4gICAgICAgIHJldHVybiB7IHRpbWVzdGFtcHMsIGRhdGVTdHJpbmdzIH07XG4gICAgfSxcbiAgICB7IHNlcmlhbGl6ZXI6IChkKSA9PiBkLnZhbHVlT2YoKS50b1N0cmluZygpIH1cbik7XG5cbmNvbnN0IFNlcnZpY2VSaWRlcnNoaXBDaGFydCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCBzZXJ2aWNlSGlzdG9yeSwgcmlkZXJzaGlwSGlzdG9yeSwgc3RhcnREYXRlLCBsaW5lVGl0bGUsIGxpbmVEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8bnVsbCB8IEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcblxuICAgIGNvbnN0IHJpZGVyc2hpcFBlcmNlbnRhZ2UgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiByaWRlcnNoaXBIaXN0b3J5ICYmIG5vcm1hbGl6ZVRvUGVyY2VudChyaWRlcnNoaXBIaXN0b3J5KSxcbiAgICAgICAgW3JpZGVyc2hpcEhpc3RvcnldXG4gICAgKTtcbiAgICBjb25zdCBzZXJ2aWNlUGVyY2VudGFnZSA9IHVzZU1lbW8oKCkgPT4gc2VydmljZUhpc3RvcnkgJiYgbm9ybWFsaXplVG9QZXJjZW50KHNlcnZpY2VIaXN0b3J5KSwgW1xuICAgICAgICBzZXJ2aWNlSGlzdG9yeSxcbiAgICBdKTtcbiAgICBjb25zdCB7IHRpbWVzdGFtcHMsIGRhdGVTdHJpbmdzIH0gPSB1c2VNZW1vKCgpID0+IGdldENoYXJ0TGFiZWxzKHN0YXJ0RGF0ZSksIFtzdGFydERhdGVdKTtcbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJpZGVyc2hpcE5vdW4gPSBnZXRSaWRlcnNoaXBOb3VuKGxpbmVEYXRhLmlkKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiRGF0ZVwiLCB2YWx1ZXM6IGRhdGVTdHJpbmdzIH0sXG4gICAgICAgICAgICByaWRlcnNoaXBIaXN0b3J5ICYmIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYFJpZGVyc2hpcCAoJHtyaWRlcnNoaXBOb3VufS9kYXkpYCxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHJpZGVyc2hpcEhpc3RvcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlkZXJzaGlwUGVyY2VudGFnZSAmJiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmlkZXJzaGlwIChwZXJjZW50YWdlKVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlczogcmlkZXJzaGlwUGVyY2VudGFnZS5tYXAoYXNQZXJjZW50U3RyaW5nKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJ2aWNlSGlzdG9yeSAmJiB7IHRpdGxlOiBcIlNlcnZpY2UgbGV2ZWxzICh0cmlwcy9kYXkpXCIsIHZhbHVlczogc2VydmljZUhpc3RvcnkgfSxcbiAgICAgICAgICAgIHNlcnZpY2VQZXJjZW50YWdlICYmIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZXJ2aWNlIGxldmVscyAocGVyY2VudGFnZSlcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHNlcnZpY2VQZXJjZW50YWdlLm1hcChhc1BlcmNlbnRTdHJpbmcpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXS5maWx0ZXIoKHgpID0+IHgpO1xuICAgIH0sIFtkYXRlU3RyaW5ncywgcmlkZXJzaGlwSGlzdG9yeSwgcmlkZXJzaGlwUGVyY2VudGFnZSwgc2VydmljZUhpc3RvcnksIHNlcnZpY2VQZXJjZW50YWdlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYUNvbG9yID0gQ29sb3IoY29sb3IpLmFscGhhKDAuOCkucmdiU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc1JlZi5jdXJyZW50IS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGNvbnN0IHJpZGVyc2hpcE5vdW4gPSBnZXRSaWRlcnNoaXBOb3VuKGxpbmVEYXRhLmlkKTtcblxuICAgICAgICBjb25zdCBkYXRhc2V0czogKENoYXJ0RGF0YVNldHMgJiB7IGFjdHVhbDogbnVtYmVyW107IHVuaXQ6IHN0cmluZyB9KVtdID0gW1xuICAgICAgICAgICAgcmlkZXJzaGlwUGVyY2VudGFnZSAmJiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUmlkZXJzaGlwXCIsXG4gICAgICAgICAgICAgICAgYWN0dWFsOiByaWRlcnNoaXBIaXN0b3J5LFxuICAgICAgICAgICAgICAgIHVuaXQ6IGB3ZWVrZGF5ICR7cmlkZXJzaGlwTm91bn1gLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJpZGVyc2hpcFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGFDb2xvcixcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VydmljZSBsZXZlbHNcIixcbiAgICAgICAgICAgICAgICBhY3R1YWw6IHNlcnZpY2VIaXN0b3J5LFxuICAgICAgICAgICAgICAgIHVuaXQ6IFwid2Vla2RheSB0cmlwcyBwZXIgZGlyZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogc2VydmljZVBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFscGhhQ29sb3IsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwYXR0ZXJuLmRyYXcoXCJkaWFnb25hbFwiLCBcInJnYmEoMCwwLDAsMClcIiwgY29sb3IsIDUpLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXS5maWx0ZXIoKHgpID0+IHgpO1xuICAgICAgICBjb25zdCBjaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGRhdGFzZXRzLFxuICAgICAgICAgICAgICAgIGxhYmVsczogdGltZXN0YW1wcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7IGR1cmF0aW9uOiAwIH0sXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0OiBcIm1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogXCJNTU0gJ1lZXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBhc1BlcmNlbnRTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHsgZGlzcGxheTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgICAgICAgICAgICBwb2ludDogeyByYWRpdXM6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGluZTogeyB0ZW5zaW9uOiAwIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImVuZFwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFdpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiaW5kZXhcIixcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFt7IGluZGV4IH1dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVzdGFtcHNbaW5kZXhdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICh7IGRhdGFzZXRJbmRleCwgaW5kZXgsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGxhYmVsLCBhY3R1YWwsIHVuaXQgfSA9IGRhdGFzZXRzW2RhdGFzZXRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVQZXJjZW50ID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KHZhbHVlKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2xhYmVsfTogJHthY3R1YWxbaW5kZXhdfSAke3VuaXR9ICgke3ZhbHVlUGVyY2VudH0lKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNoYXJ0LmRlc3Ryb3koKTtcbiAgICB9LCBbcmlkZXJzaGlwUGVyY2VudGFnZSwgc2VydmljZVBlcmNlbnRhZ2UsIGxpbmVEYXRhLmlkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VBbmRSaWRlcnNoaXBDaGFydENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VBbmRSaWRlcnNoaXBDaGFydH0gcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgICAgICAgICA8RGF0YVRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGNhcHRpb249e2BTZXJ2aWNlIGxldmVscyBhbmQgcmlkZXJzaGlwICgke2xpbmVUaXRsZX0pYH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VSaWRlcnNoaXBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LineCard/ServiceRidershipChart.tsx\n");

/***/ })

})