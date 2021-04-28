webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/DataTable/DataTable.tsx":
/*!************************************************!*\
  !*** ./src/components/DataTable/DataTable.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/DataTable/DataTable.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar DataTable = function DataTable(props) {\n  _s();\n\n  var caption = props.caption,\n      columns = props.columns;\n  var rows = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    var numRows = Math.max.apply(Math, Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(columns.map(function (c) {\n      return c.values.length;\n    })));\n    var rows = [];\n\n    for (var r = 0; r < numRows; r++) {\n      var row = [];\n      rows.push(row);\n\n      for (var c = 0; c < columns.length; c++) {\n        var value = columns[c].values[r] || \"\";\n        row.push(value);\n      }\n    }\n\n    return rows;\n  }, [columns]);\n  return __jsx(\"table\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"caption\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, caption), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, columns.map(function (column, idx) {\n    return __jsx(\"td\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }\n    }, column.label);\n  })), rows.map(function (row, rowIdx) {\n    return __jsx(\"tr\", {\n      key: rowIdx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }\n    }, row.map(function (cell, cellIdx) {\n      return __jsx(\"td\", {\n        key: cellIdx,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 25\n        }\n      }, cell);\n    }));\n  }));\n};\n\n_s(DataTable, \"LHVMCglWcQeRoCgUufL/A5uf67g=\");\n\n_c = DataTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTable);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGF0YVRhYmxlL0RhdGFUYWJsZS50c3g/NWJlNiJdLCJuYW1lcyI6WyJEYXRhVGFibGUiLCJwcm9wcyIsImNhcHRpb24iLCJjb2x1bW5zIiwicm93cyIsInVzZU1lbW8iLCJudW1Sb3dzIiwiTWF0aCIsIm1heCIsIm1hcCIsImMiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJyIiwicm93IiwicHVzaCIsInZhbHVlIiwiY29sdW1uIiwiaWR4IiwibGFiZWwiLCJyb3dJZHgiLCJjZWxsIiwiY2VsbElkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFjQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQUEsTUFDeEJDLE9BRHdCLEdBQ0hELEtBREcsQ0FDeEJDLE9BRHdCO0FBQUEsTUFDZkMsT0FEZSxHQUNIRixLQURHLENBQ2ZFLE9BRGU7QUFFaEMsTUFBTUMsSUFBSSxHQUFHQyxxREFBTyxDQUFDLFlBQU07QUFDdkIsUUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsT0FBQUQsSUFBSSx1S0FBUUosT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxNQUFoQjtBQUFBLEtBQVosQ0FBUixFQUFwQjtBQUNBLFFBQU1SLElBQWUsR0FBRyxFQUF4Qjs7QUFDQSxTQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdQLE9BQXBCLEVBQTZCTyxDQUFDLEVBQTlCLEVBQWtDO0FBQzlCLFVBQU1DLEdBQVksR0FBRyxFQUFyQjtBQUNBVixVQUFJLENBQUNXLElBQUwsQ0FBVUQsR0FBVjs7QUFDQSxXQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdQLE9BQU8sQ0FBQ1MsTUFBNUIsRUFBb0NGLENBQUMsRUFBckMsRUFBeUM7QUFDckMsWUFBTU0sS0FBSyxHQUFHYixPQUFPLENBQUNPLENBQUQsQ0FBUCxDQUFXQyxNQUFYLENBQWtCRSxDQUFsQixLQUF3QixFQUF0QztBQUNBQyxXQUFHLENBQUNDLElBQUosQ0FBU0MsS0FBVDtBQUNIO0FBQ0o7O0FBQ0QsV0FBT1osSUFBUDtBQUNILEdBWm1CLEVBWWpCLENBQUNELE9BQUQsQ0FaaUIsQ0FBcEI7QUFjQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVELE9BQVYsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0MsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ1EsTUFBRCxFQUFTQyxHQUFUO0FBQUEsV0FDVDtBQUFJLFNBQUcsRUFBRUEsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWVELE1BQU0sQ0FBQ0UsS0FBdEIsQ0FEUztBQUFBLEdBQVosQ0FETCxDQUZKLEVBT0tmLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNLLEdBQUQsRUFBTU0sTUFBTjtBQUFBLFdBQ047QUFBSSxTQUFHLEVBQUVBLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLTixHQUFHLENBQUNMLEdBQUosQ0FBUSxVQUFDWSxJQUFELEVBQU9DLE9BQVA7QUFBQSxhQUNMO0FBQUksV0FBRyxFQUFFQSxPQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUJELElBQW5CLENBREs7QUFBQSxLQUFSLENBREwsQ0FETTtBQUFBLEdBQVQsQ0FQTCxDQURKO0FBaUJILENBakNEOztHQUFNckIsUzs7S0FBQUEsUztBQW1DU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXRhVGFibGUvRGF0YVRhYmxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVmFsdWUgPSBzdHJpbmcgfCBudW1iZXI7XG5cbnR5cGUgQ29sdW1uID0ge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWVzOiBWYWx1ZVtdO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjYXB0aW9uOiBzdHJpbmc7XG4gICAgY29sdW1uczogQ29sdW1uW107XG59O1xuXG5jb25zdCBEYXRhVGFibGUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjYXB0aW9uLCBjb2x1bW5zIH0gPSBwcm9wcztcbiAgICBjb25zdCByb3dzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bVJvd3MgPSBNYXRoLm1heCguLi5jb2x1bW5zLm1hcCgoYykgPT4gYy52YWx1ZXMubGVuZ3RoKSk7XG4gICAgICAgIGNvbnN0IHJvd3M6IFZhbHVlW11bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IG51bVJvd3M7IHIrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93OiBWYWx1ZVtdID0gW107XG4gICAgICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sdW1ucy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29sdW1uc1tjXS52YWx1ZXNbcl0gfHwgXCJcIjtcbiAgICAgICAgICAgICAgICByb3cucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfSwgW2NvbHVtbnNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDxjYXB0aW9uPntjYXB0aW9ufTwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2lkeH0+e2NvbHVtbi5sYWJlbH08L3RkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCByb3dJZHgpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3dJZHh9PlxuICAgICAgICAgICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgY2VsbElkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17Y2VsbElkeH0+e2NlbGx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DataTable/DataTable.tsx\n");

/***/ }),

/***/ "./src/components/DataTable/index.ts":
/*!*******************************************!*\
  !*** ./src/components/DataTable/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _DataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable */ \"./src/components/DataTable/DataTable.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _DataTable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGF0YVRhYmxlL2luZGV4LnRzPzRmZmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0RhdGFUYWJsZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9EYXRhVGFibGVcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DataTable/index.ts\n");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: TabPicker, LineCard, LineGrid, DataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _TabPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabPicker */ \"./src/components/TabPicker/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TabPicker\", function() { return _TabPicker__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _LineCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineCard */ \"./src/components/LineCard/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LineCard\", function() { return _LineCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _LineGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineGrid */ \"./src/components/LineGrid/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LineGrid\", function() { return _LineGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _DataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataTable */ \"./src/components/DataTable/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DataTable\", function() { return _DataTable__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHM/MzYxNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIFRhYlBpY2tlciB9IGZyb20gXCIuL1RhYlBpY2tlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5lQ2FyZCB9IGZyb20gXCIuL0xpbmVDYXJkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmVHcmlkIH0gZnJvbSBcIi4vTGluZUdyaWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGF0YVRhYmxlIH0gZnJvbSBcIi4vRGF0YVRhYmxlXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/index.ts\n");

/***/ })

})