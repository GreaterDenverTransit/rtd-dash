webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/RouteGrid/RouteGrid.tsx":
/*!************************************************!*\
  !*** ./src/components/RouteGrid/RouteGrid.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./src/components/index.ts\");\n/* harmony import */ var _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useInfiniteScroll */ \"./src/components/RouteGrid/useInfiniteScroll.ts\");\n/* harmony import */ var _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteGrid.module.scss */ \"./src/components/RouteGrid/RouteGrid.module.scss\");\n/* harmony import */ var _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/RouteGrid/RouteGrid.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar pagination = 12;\n\nvar defaultFilter = function defaultFilter(x) {\n  return !!x;\n};\n\nvar defaultSortKey = function defaultSortKey(r) {\n  if ([\"red\", \"green\", \"blue\", \"orange\", \"silver\"].includes(r.id)) {\n    return 0;\n  } else if (r.id.startsWith(\"CR-\")) {\n    return 1;\n  }\n\n  return 2;\n};\n\nvar getDocumentElement = function getDocumentElement() {\n  if (typeof document !== \"undefined\") {\n    return document.documentElement;\n  }\n\n  return null;\n};\n\nvar RouteGrid = function RouteGrid(props) {\n  _s();\n\n  var data = props.data,\n      _props$filter = props.filter,\n      filter = _props$filter === void 0 ? defaultFilter : _props$filter,\n      _props$sortKey = props.sortKey,\n      sortKey = _props$sortKey === void 0 ? defaultSortKey : _props$sortKey;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(pagination),\n      limit = _useState[0],\n      setLimit = _useState[1];\n\n  var availableItems = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return Object.values(data).filter(filter).sort(function (a, b) {\n      return sortKey(a) > sortKey(b) ? 1 : -1;\n    });\n  }, [data, filter]);\n  var shownItems = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return availableItems.slice(0, limit);\n  }, [availableItems, limit]);\n  Object(_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_2__[\"useInfiniteScroll\"])({\n    element: getDocumentElement(),\n    enabled: limit < availableItems.length,\n    scrollTolerance: 1000,\n    onRequestMoreItems: function onRequestMoreItems() {\n      return setLimit(function (l) {\n        return l + pagination;\n      });\n    }\n  });\n  return __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.routeGrid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, shownItems.map(function (item) {\n    return __jsx(components__WEBPACK_IMPORTED_MODULE_1__[\"RouteCard\"], {\n      routeData: item,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }\n    });\n  }));\n};\n\n_s(RouteGrid, \"rGhpGVoFkOvZtpFIweXrwLnTtoc=\", false, function () {\n  return [_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_2__[\"useInfiniteScroll\"]];\n});\n\n_c = RouteGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RouteGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"RouteGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUdyaWQvUm91dGVHcmlkLnRzeD9iZDVkIl0sIm5hbWVzIjpbInBhZ2luYXRpb24iLCJkZWZhdWx0RmlsdGVyIiwieCIsImRlZmF1bHRTb3J0S2V5IiwiciIsImluY2x1ZGVzIiwiaWQiLCJzdGFydHNXaXRoIiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJSb3V0ZUdyaWQiLCJwcm9wcyIsImRhdGEiLCJmaWx0ZXIiLCJzb3J0S2V5IiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0IiwiYXZhaWxhYmxlSXRlbXMiLCJ1c2VNZW1vIiwiT2JqZWN0IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwic2hvd25JdGVtcyIsInNsaWNlIiwidXNlSW5maW5pdGVTY3JvbGwiLCJlbGVtZW50IiwiZW5hYmxlZCIsImxlbmd0aCIsInNjcm9sbFRvbGVyYW5jZSIsIm9uUmVxdWVzdE1vcmVJdGVtcyIsImwiLCJzdHlsZXMiLCJyb3V0ZUdyaWQiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQVFBLElBQU1BLFVBQVUsR0FBRyxFQUFuQjs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQ7QUFBQSxTQUFPLENBQUMsQ0FBQ0EsQ0FBVDtBQUFBLENBQXRCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFrQjtBQUNyQyxNQUFJLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsUUFBekIsRUFBbUMsUUFBbkMsRUFBNkNDLFFBQTdDLENBQXNERCxDQUFDLENBQUNFLEVBQXhELENBQUosRUFBaUU7QUFDN0QsV0FBTyxDQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlGLENBQUMsQ0FBQ0UsRUFBRixDQUFLQyxVQUFMLENBQWdCLEtBQWhCLENBQUosRUFBNEI7QUFDL0IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxDQUFQO0FBQ0gsQ0FQRDs7QUFTQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDN0IsTUFBSSxPQUFPQyxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ2pDLFdBQU9BLFFBQVEsQ0FBQ0MsZUFBaEI7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDQUxEOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBa0I7QUFBQTs7QUFBQSxNQUN4QkMsSUFEd0IsR0FDbUNELEtBRG5DLENBQ3hCQyxJQUR3QjtBQUFBLHNCQUNtQ0QsS0FEbkMsQ0FDbEJFLE1BRGtCO0FBQUEsTUFDbEJBLE1BRGtCLDhCQUNUYixhQURTO0FBQUEsdUJBQ21DVyxLQURuQyxDQUNNRyxPQUROO0FBQUEsTUFDTUEsT0FETiwrQkFDZ0JaLGNBRGhCOztBQUFBLGtCQUVOYSxzREFBUSxDQUFDaEIsVUFBRCxDQUZGO0FBQUEsTUFFekJpQixLQUZ5QjtBQUFBLE1BRWxCQyxRQUZrQjs7QUFJaEMsTUFBTUMsY0FBYyxHQUFHQyxxREFBTyxDQUMxQjtBQUFBLFdBQ0lDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVCxJQUFkLEVBQ0tDLE1BREwsQ0FDWUEsTUFEWixFQUVLUyxJQUZMLENBRVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBV1YsT0FBTyxDQUFDUyxDQUFELENBQVAsR0FBYVQsT0FBTyxDQUFDVSxDQUFELENBQXBCLEdBQTBCLENBQTFCLEdBQThCLENBQUMsQ0FBMUM7QUFBQSxLQUZWLENBREo7QUFBQSxHQUQwQixFQUsxQixDQUFDWixJQUFELEVBQU9DLE1BQVAsQ0FMMEIsQ0FBOUI7QUFPQSxNQUFNWSxVQUFVLEdBQUdOLHFEQUFPLENBQUM7QUFBQSxXQUFNRCxjQUFjLENBQUNRLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0JWLEtBQXhCLENBQU47QUFBQSxHQUFELEVBQXVDLENBQUNFLGNBQUQsRUFBaUJGLEtBQWpCLENBQXZDLENBQTFCO0FBRUFXLDhFQUFpQixDQUFDO0FBQ2RDLFdBQU8sRUFBRXJCLGtCQUFrQixFQURiO0FBRWRzQixXQUFPLEVBQUViLEtBQUssR0FBR0UsY0FBYyxDQUFDWSxNQUZsQjtBQUdkQyxtQkFBZSxFQUFFLElBSEg7QUFJZEMsc0JBQWtCLEVBQUU7QUFBQSxhQUFNZixRQUFRLENBQUMsVUFBQ2dCLENBQUQ7QUFBQSxlQUFPQSxDQUFDLEdBQUdsQyxVQUFYO0FBQUEsT0FBRCxDQUFkO0FBQUE7QUFKTixHQUFELENBQWpCO0FBT0EsU0FDSTtBQUFLLGFBQVMsRUFBRW1DLDZEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1YsVUFBVSxDQUFDVyxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1osTUFBQyxvREFBRDtBQUFXLGVBQVMsRUFBRUEsSUFBdEI7QUFBNEIsU0FBRyxFQUFFQSxJQUFJLENBQUNoQyxFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFk7QUFBQSxHQUFmLENBREwsQ0FESjtBQU9ILENBM0JEOztHQUFNSyxTO1VBYUZpQixvRTs7O0tBYkVqQixTO0FBNkJTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1JvdXRlR3JpZC9Sb3V0ZUdyaWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJvdXRlQ2FyZCB9IGZyb20gXCJjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb3V0ZURhdGEgfSBmcm9tIFwidHlwZXNcIjtcblxuaW1wb3J0IHsgdXNlSW5maW5pdGVTY3JvbGwgfSBmcm9tIFwiLi91c2VJbmZpbml0ZVNjcm9sbFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Sb3V0ZUdyaWQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBSb3V0ZURhdGE+O1xuICAgIGZpbHRlcj86IChyOiBSb3V0ZURhdGEpID0+IGJvb2xlYW47XG4gICAgc29ydEtleT86IChyOiBSb3V0ZURhdGEpID0+IHN0cmluZyB8IG51bWJlcjtcbn07XG5cbmNvbnN0IHBhZ2luYXRpb24gPSAxMjtcbmNvbnN0IGRlZmF1bHRGaWx0ZXIgPSAoeCkgPT4gISF4O1xuXG5jb25zdCBkZWZhdWx0U29ydEtleSA9IChyOiBSb3V0ZURhdGEpID0+IHtcbiAgICBpZiAoW1wicmVkXCIsIFwiZ3JlZW5cIiwgXCJibHVlXCIsIFwib3JhbmdlXCIsIFwic2lsdmVyXCJdLmluY2x1ZGVzKHIuaWQpKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoci5pZC5zdGFydHNXaXRoKFwiQ1ItXCIpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMjtcbn07XG5cbmNvbnN0IGdldERvY3VtZW50RWxlbWVudCA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgUm91dGVHcmlkID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgZmlsdGVyID0gZGVmYXVsdEZpbHRlciwgc29ydEtleSA9IGRlZmF1bHRTb3J0S2V5IH0gPSBwcm9wcztcbiAgICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKHBhZ2luYXRpb24pO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlSXRlbXMgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZmlsdGVyKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoc29ydEtleShhKSA+IHNvcnRLZXkoYikgPyAxIDogLTEpKSxcbiAgICAgICAgW2RhdGEsIGZpbHRlcl1cbiAgICApO1xuICAgIGNvbnN0IHNob3duSXRlbXMgPSB1c2VNZW1vKCgpID0+IGF2YWlsYWJsZUl0ZW1zLnNsaWNlKDAsIGxpbWl0KSwgW2F2YWlsYWJsZUl0ZW1zLCBsaW1pdF0pO1xuXG4gICAgdXNlSW5maW5pdGVTY3JvbGwoe1xuICAgICAgICBlbGVtZW50OiBnZXREb2N1bWVudEVsZW1lbnQoKSxcbiAgICAgICAgZW5hYmxlZDogbGltaXQgPCBhdmFpbGFibGVJdGVtcy5sZW5ndGgsXG4gICAgICAgIHNjcm9sbFRvbGVyYW5jZTogMTAwMCxcbiAgICAgICAgb25SZXF1ZXN0TW9yZUl0ZW1zOiAoKSA9PiBzZXRMaW1pdCgobCkgPT4gbCArIHBhZ2luYXRpb24pLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3V0ZUdyaWR9PlxuICAgICAgICAgICAge3Nob3duSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPFJvdXRlQ2FyZCByb3V0ZURhdGE9e2l0ZW19IGtleT17aXRlbS5pZH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVHcmlkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RouteGrid/RouteGrid.tsx\n");

/***/ })

})