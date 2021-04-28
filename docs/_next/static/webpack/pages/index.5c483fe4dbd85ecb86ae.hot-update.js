webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/LineCard/TphChart.tsx":
/*!**********************************************!*\
  !*** ./src/components/LineCard/TphChart.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-color */ \"./node_modules/chartjs-color/index.js\");\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_color__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! time */ \"./src/time.ts\");\n/* harmony import */ var _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LineCard.module.scss */ \"./src/components/LineCard/LineCard.module.scss\");\n/* harmony import */ var _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LineCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ \"./src/components/index.ts\");\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/LineCard/TphChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar hourLabels = Object(time__WEBPACK_IMPORTED_MODULE_3__[\"getHourlyTickValues\"])(1);\n\nvar TphChart = function TphChart(props) {\n  _s();\n\n  var color = props.color,\n      baselineTph = props.baselineTph,\n      currentTph = props.currentTph,\n      highestTph = props.highestTph;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  var columns = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    console.log(baselineTph, currentTph);\n    return [{\n      title: \"Hour\",\n      values: hourLabels\n    }, baselineTph && {\n      title: \"Pre-COVID trips\",\n      values: baselineTph\n    }, currentTph && {\n      title: \"Current trips\",\n      values: currentTph\n    }].filter(function (x) {\n      return x;\n    });\n  }, [hourLabels, baselineTph, currentTph]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var ctx = canvasRef.current.getContext(\"2d\");\n    var currentColor = chartjs_color__WEBPACK_IMPORTED_MODULE_2___default()(color).alpha(0.4).rgbString();\n    var datasets = [{\n      label: \"Pre-COVID trips per hour\",\n      data: baselineTph,\n      steppedLine: true,\n      borderColor: color,\n      borderWidth: 2,\n      backgroundColor: \"rgba(0,0,0,0)\"\n    }, {\n      label: \"Current trips per hour\",\n      data: currentTph,\n      steppedLine: true,\n      borderWidth: 2,\n      borderColor: \"rgba(0,0,0,0)\",\n      backgroundColor: currentColor\n    }];\n    var chart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, {\n      type: \"line\",\n      data: {\n        labels: hourLabels,\n        datasets: datasets\n      },\n      options: {\n        maintainAspectRatio: false,\n        animation: {\n          duration: 0\n        },\n        legend: {\n          position: \"top\",\n          align: \"end\",\n          labels: {\n            boxWidth: 15\n          }\n        },\n        scales: {\n          xAxes: [{\n            gridLines: {\n              display: false\n            },\n            ticks: {\n              maxTicksLimit: 12\n            }\n          }],\n          yAxes: [{\n            gridLines: {\n              display: false\n            },\n            ticks: {\n              maxTicksLimit: 4,\n              suggestedMax: highestTph\n            }\n          }]\n        },\n        tooltips: {\n          mode: \"index\",\n          intersect: false,\n          callbacks: {\n            label: function label(_ref) {\n              var datasetIndex = _ref.datasetIndex,\n                  index = _ref.index;\n              var _datasets$datasetInde = datasets[datasetIndex],\n                  label = _datasets$datasetInde.label,\n                  data = _datasets$datasetInde.data;\n              return \"\".concat(label, \": \").concat(data[index], \" (each direction)\");\n            }\n          }\n        },\n        elements: {\n          line: {\n            tension: 0\n          },\n          point: {\n            radius: 0\n          }\n        }\n      }\n    });\n    return function () {\n      return chart.destroy();\n    };\n  }, [baselineTph, currentTph]);\n  return __jsx(\"div\", {\n    className: _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tphChartContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(\"canvas\", {\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }), __jsx(components__WEBPACK_IMPORTED_MODULE_5__[\"DataTable\"], {\n    columns: columns,\n    caption: \"Trips each hour\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(TphChart, \"HysoyXLhhV91QtLcqRib2klpzCM=\");\n\n_c = TphChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TphChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TphChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGluZUNhcmQvVHBoQ2hhcnQudHN4PzNmYmMiXSwibmFtZXMiOlsiaG91ckxhYmVscyIsImdldEhvdXJseVRpY2tWYWx1ZXMiLCJUcGhDaGFydCIsInByb3BzIiwiY29sb3IiLCJiYXNlbGluZVRwaCIsImN1cnJlbnRUcGgiLCJoaWdoZXN0VHBoIiwiY2FudmFzUmVmIiwidXNlUmVmIiwiY29sdW1ucyIsInVzZU1lbW8iLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJ4IiwidXNlRWZmZWN0IiwiY3R4IiwiY3VycmVudCIsImdldENvbnRleHQiLCJjdXJyZW50Q29sb3IiLCJDb2xvciIsImFscGhhIiwicmdiU3RyaW5nIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJzdGVwcGVkTGluZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFydCIsIkNoYXJ0IiwidHlwZSIsImxhYmVscyIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJsZWdlbmQiLCJwb3NpdGlvbiIsImFsaWduIiwiYm94V2lkdGgiLCJzY2FsZXMiLCJ4QXhlcyIsImdyaWRMaW5lcyIsImRpc3BsYXkiLCJ0aWNrcyIsIm1heFRpY2tzTGltaXQiLCJ5QXhlcyIsInN1Z2dlc3RlZE1heCIsInRvb2x0aXBzIiwibW9kZSIsImludGVyc2VjdCIsImNhbGxiYWNrcyIsImRhdGFzZXRJbmRleCIsImluZGV4IiwiZWxlbWVudHMiLCJsaW5lIiwidGVuc2lvbiIsInBvaW50IiwicmFkaXVzIiwiZGVzdHJveSIsInN0eWxlcyIsInRwaENoYXJ0Q29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxnRUFBbUIsQ0FBQyxDQUFELENBQXRDOztBQVNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBa0I7QUFBQTs7QUFBQSxNQUN2QkMsS0FEdUIsR0FDd0JELEtBRHhCLENBQ3ZCQyxLQUR1QjtBQUFBLE1BQ2hCQyxXQURnQixHQUN3QkYsS0FEeEIsQ0FDaEJFLFdBRGdCO0FBQUEsTUFDSEMsVUFERyxHQUN3QkgsS0FEeEIsQ0FDSEcsVUFERztBQUFBLE1BQ1NDLFVBRFQsR0FDd0JKLEtBRHhCLENBQ1NJLFVBRFQ7QUFFL0IsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUEyQixJQUEzQixDQUF4QjtBQUVBLE1BQU1DLE9BQU8sR0FBR0MscURBQU8sQ0FBQyxZQUFNO0FBQzFCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsV0FBWixFQUF5QkMsVUFBekI7QUFDQSxXQUFPLENBQ0g7QUFBRVEsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRWY7QUFBekIsS0FERyxFQUVISyxXQUFXLElBQUk7QUFBRVMsV0FBSyxFQUFFLGlCQUFUO0FBQTRCQyxZQUFNLEVBQUVWO0FBQXBDLEtBRlosRUFHSEMsVUFBVSxJQUFJO0FBQUVRLFdBQUssRUFBRSxlQUFUO0FBQTBCQyxZQUFNLEVBQUVUO0FBQWxDLEtBSFgsRUFJTFUsTUFKSyxDQUlFLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFQO0FBQUEsS0FKRixDQUFQO0FBS0gsR0FQc0IsRUFPcEIsQ0FBQ2pCLFVBQUQsRUFBYUssV0FBYixFQUEwQkMsVUFBMUIsQ0FQb0IsQ0FBdkI7QUFTQVkseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsR0FBRyxHQUFHWCxTQUFTLENBQUNZLE9BQVYsQ0FBbUJDLFVBQW5CLENBQThCLElBQTlCLENBQVo7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLG9EQUFLLENBQUNuQixLQUFELENBQUwsQ0FBYW9CLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0JDLFNBQXhCLEVBQXJCO0FBRUEsUUFBTUMsUUFBUSxHQUFHLENBQ2I7QUFDSUMsV0FBSyxFQUFFLDBCQURYO0FBRUlDLFVBQUksRUFBRXZCLFdBRlY7QUFHSXdCLGlCQUFXLEVBQUUsSUFIakI7QUFJSUMsaUJBQVcsRUFBRTFCLEtBSmpCO0FBS0kyQixpQkFBVyxFQUFFLENBTGpCO0FBTUlDLHFCQUFlLEVBQUU7QUFOckIsS0FEYSxFQVNiO0FBQ0lMLFdBQUssRUFBRSx3QkFEWDtBQUVJQyxVQUFJLEVBQUV0QixVQUZWO0FBR0l1QixpQkFBVyxFQUFFLElBSGpCO0FBSUlFLGlCQUFXLEVBQUUsQ0FKakI7QUFLSUQsaUJBQVcsRUFBRSxlQUxqQjtBQU1JRSxxQkFBZSxFQUFFVjtBQU5yQixLQVRhLENBQWpCO0FBbUJBLFFBQU1XLEtBQUssR0FBRyxJQUFJQywrQ0FBSixDQUFVZixHQUFWLEVBQWU7QUFDekJnQixVQUFJLEVBQUUsTUFEbUI7QUFFekJQLFVBQUksRUFBRTtBQUNGUSxjQUFNLEVBQUVwQyxVQUROO0FBRUYwQixnQkFBUSxFQUFSQTtBQUZFLE9BRm1CO0FBTXpCVyxhQUFPLEVBQUU7QUFDTEMsMkJBQW1CLEVBQUUsS0FEaEI7QUFFTEMsaUJBQVMsRUFBRTtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FGTjtBQUdMQyxjQUFNLEVBQUU7QUFDSkMsa0JBQVEsRUFBRSxLQUROO0FBRUpDLGVBQUssRUFBRSxLQUZIO0FBR0pQLGdCQUFNLEVBQUU7QUFBRVEsb0JBQVEsRUFBRTtBQUFaO0FBSEosU0FISDtBQVFMQyxjQUFNLEVBQUU7QUFDSkMsZUFBSyxFQUFFLENBQ0g7QUFDSUMscUJBQVMsRUFBRTtBQUFFQyxxQkFBTyxFQUFFO0FBQVgsYUFEZjtBQUVJQyxpQkFBSyxFQUFFO0FBQ0hDLDJCQUFhLEVBQUU7QUFEWjtBQUZYLFdBREcsQ0FESDtBQVNKQyxlQUFLLEVBQUUsQ0FDSDtBQUNJSixxQkFBUyxFQUFFO0FBQUVDLHFCQUFPLEVBQUU7QUFBWCxhQURmO0FBRUlDLGlCQUFLLEVBQUU7QUFDSEMsMkJBQWEsRUFBRSxDQURaO0FBRUhFLDBCQUFZLEVBQUU3QztBQUZYO0FBRlgsV0FERztBQVRILFNBUkg7QUEyQkw4QyxnQkFBUSxFQUFFO0FBQ05DLGNBQUksRUFBRSxPQURBO0FBRU5DLG1CQUFTLEVBQUUsS0FGTDtBQUdOQyxtQkFBUyxFQUFFO0FBQ1A3QixpQkFBSyxFQUFFLHFCQUE2QjtBQUFBLGtCQUExQjhCLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLGtCQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFBQSwwQ0FDUmhDLFFBQVEsQ0FBQytCLFlBQUQsQ0FEQTtBQUFBLGtCQUN4QjlCLEtBRHdCLHlCQUN4QkEsS0FEd0I7QUFBQSxrQkFDakJDLElBRGlCLHlCQUNqQkEsSUFEaUI7QUFFaEMsK0JBQVVELEtBQVYsZUFBb0JDLElBQUksQ0FBQzhCLEtBQUQsQ0FBeEI7QUFDSDtBQUpNO0FBSEwsU0EzQkw7QUFxQ0xDLGdCQUFRLEVBQUU7QUFDTkMsY0FBSSxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBWCxXQURBO0FBRU5DLGVBQUssRUFBRTtBQUFFQyxrQkFBTSxFQUFFO0FBQVY7QUFGRDtBQXJDTDtBQU5nQixLQUFmLENBQWQ7QUFpREEsV0FBTztBQUFBLGFBQU05QixLQUFLLENBQUMrQixPQUFOLEVBQU47QUFBQSxLQUFQO0FBQ0gsR0F6RVEsRUF5RU4sQ0FBQzNELFdBQUQsRUFBY0MsVUFBZCxDQXpFTSxDQUFUO0FBMkVBLFNBQ0k7QUFBSyxhQUFTLEVBQUUyRCw0REFBTSxDQUFDQyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsT0FBRyxFQUFFMUQsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLG9EQUFEO0FBQVcsV0FBTyxFQUFFRSxPQUFwQjtBQUE2QixXQUFPLEVBQUMsaUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKO0FBTUgsQ0E5RkQ7O0dBQU1SLFE7O0tBQUFBLFE7QUFnR1NBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGluZUNhcmQvVHBoQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcImNoYXJ0anMtY29sb3JcIjtcblxuaW1wb3J0IHsgVHJpcHNQZXJIb3VyIH0gZnJvbSBcInR5cGVzXCI7XG5pbXBvcnQgeyBnZXRIb3VybHlUaWNrVmFsdWVzIH0gZnJvbSBcInRpbWVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9MaW5lQ2FyZC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSBcImNvbXBvbmVudHNcIjtcblxuY29uc3QgaG91ckxhYmVscyA9IGdldEhvdXJseVRpY2tWYWx1ZXMoMSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgYmFzZWxpbmVUcGg6IFRyaXBzUGVySG91cjtcbiAgICBjdXJyZW50VHBoOiBUcmlwc1BlckhvdXI7XG4gICAgaGlnaGVzdFRwaDogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG59O1xuXG5jb25zdCBUcGhDaGFydCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCBiYXNlbGluZVRwaCwgY3VycmVudFRwaCwgaGlnaGVzdFRwaCB9ID0gcHJvcHM7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJhc2VsaW5lVHBoLCBjdXJyZW50VHBoKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiSG91clwiLCB2YWx1ZXM6IGhvdXJMYWJlbHMgfSxcbiAgICAgICAgICAgIGJhc2VsaW5lVHBoICYmIHsgdGl0bGU6IFwiUHJlLUNPVklEIHRyaXBzXCIsIHZhbHVlczogYmFzZWxpbmVUcGggfSxcbiAgICAgICAgICAgIGN1cnJlbnRUcGggJiYgeyB0aXRsZTogXCJDdXJyZW50IHRyaXBzXCIsIHZhbHVlczogY3VycmVudFRwaCB9LFxuICAgICAgICBdLmZpbHRlcigoeCkgPT4geCk7XG4gICAgfSwgW2hvdXJMYWJlbHMsIGJhc2VsaW5lVHBoLCBjdXJyZW50VHBoXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXNSZWYuY3VycmVudCEuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSBDb2xvcihjb2xvcikuYWxwaGEoMC40KS5yZ2JTdHJpbmcoKTtcblxuICAgICAgICBjb25zdCBkYXRhc2V0cyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJQcmUtQ09WSUQgdHJpcHMgcGVyIGhvdXJcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBiYXNlbGluZVRwaCBhcyBhbnksXG4gICAgICAgICAgICAgICAgc3RlcHBlZExpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkN1cnJlbnQgdHJpcHMgcGVyIGhvdXJcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBjdXJyZW50VHBoIGFzIGFueSxcbiAgICAgICAgICAgICAgICBzdGVwcGVkTGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjdXJyZW50Q29sb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiBob3VyTGFiZWxzLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHsgZHVyYXRpb246IDAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImVuZFwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHsgYm94V2lkdGg6IDE1IH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHsgZGlzcGxheTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHsgZGlzcGxheTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNYXg6IGhpZ2hlc3RUcGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICh7IGRhdGFzZXRJbmRleCwgaW5kZXggfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbGFiZWwsIGRhdGEgfSA9IGRhdGFzZXRzW2RhdGFzZXRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2xhYmVsfTogJHtkYXRhW2luZGV4XX0gKGVhY2ggZGlyZWN0aW9uKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZTogeyB0ZW5zaW9uOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7IHJhZGl1czogMCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNoYXJ0LmRlc3Ryb3koKTtcbiAgICB9LCBbYmFzZWxpbmVUcGgsIGN1cnJlbnRUcGhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHBoQ2hhcnRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICAgICAgICAgIDxEYXRhVGFibGUgY29sdW1ucz17Y29sdW1uc30gY2FwdGlvbj1cIlRyaXBzIGVhY2ggaG91clwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcGhDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LineCard/TphChart.tsx\n");

/***/ })

})