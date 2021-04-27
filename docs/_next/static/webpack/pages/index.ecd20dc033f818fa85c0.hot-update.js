webpackHotUpdate_N_E("pages/index",{

/***/ "./src/time.ts":
/*!*********************!*\
  !*** ./src/time.ts ***!
  \*********************/
/*! exports provided: MINUTE, HOUR, DAY, stringifyTime, stringify12Hour, getHourlyTickValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MINUTE\", function() { return MINUTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOUR\", function() { return HOUR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAY\", function() { return DAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringifyTime\", function() { return stringifyTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringify12Hour\", function() { return stringify12Hour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHourlyTickValues\", function() { return getHourlyTickValues; });\n/* harmony import */ var _Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\nvar MINUTE = 60;\nvar HOUR = 60 * MINUTE;\nvar DAY = 24 * HOUR;\nvar stringifyTime = function stringifyTime(time) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$truncateLeadingZ = _ref.truncateLeadingZeros,\n      truncateLeadingZeros = _ref$truncateLeadingZ === void 0 ? true : _ref$truncateLeadingZ,\n      _ref$showSeconds = _ref.showSeconds,\n      showSeconds = _ref$showSeconds === void 0 ? false : _ref$showSeconds,\n      _ref$use12Hour = _ref.use12Hour,\n      use12Hour = _ref$use12Hour === void 0 ? false : _ref$use12Hour;\n\n  var seconds = time,\n      minutes = 0,\n      hours = 0;\n  var minutesToAdd = Math.floor(seconds / 60);\n  seconds = seconds % 60;\n  minutes = minutes += minutesToAdd;\n  var hoursToAdd = Math.floor(minutes / 60);\n  minutes = minutes % 60;\n  hours += hoursToAdd;\n  var isPM = hours >= 12 && hours < 24;\n  hours = (use12Hour && hours > 12 ? hours - 12 : hours) % 24; // eslint-disable-next-line prefer-const\n\n  var _map = [hours, minutes, seconds].map(function (num) {\n    return num.toString().padStart(2, \"0\");\n  }),\n      _map2 = Object(_Users_ian_transitmatters_mbta_covid_dash_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_map, 3),\n      hoursString = _map2[0],\n      minutesString = _map2[1],\n      secondsString = _map2[2];\n\n  if (truncateLeadingZeros && hoursString.startsWith(\"0\")) {\n    hoursString = hoursString.slice(1);\n  }\n\n  var timeString = [hoursString, minutesString, secondsString].slice(0, showSeconds ? 3 : 2).join(\":\");\n\n  if (use12Hour) {\n    return \"\".concat(timeString, \" \").concat(isPM ? \"PM\" : \"AM\");\n  }\n\n  return timeString;\n};\nvar stringify12Hour = function stringify12Hour(time) {\n  var hours = Math.floor(time / HOUR);\n  var isPM = hours >= 12 && hours < 24;\n  return \"\".concat(hours > 12 ? hours - 12 : hours === 0 ? 12 : hours, \" \").concat(isPM ? \"PM\" : \"AM\");\n};\nvar getHourlyTickValues = function getHourlyTickValues(periodHours) {\n  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 24;\n  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var values = [];\n\n  for (var i = start; i < end; i++) {\n    if ((i - offset) % periodHours === 0) {\n      values.push(stringify12Hour(i * HOUR));\n    }\n  }\n\n  return values;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RpbWUudHM/YmI5MyJdLCJuYW1lcyI6WyJNSU5VVEUiLCJIT1VSIiwiREFZIiwic3RyaW5naWZ5VGltZSIsInRpbWUiLCJ0cnVuY2F0ZUxlYWRpbmdaZXJvcyIsInNob3dTZWNvbmRzIiwidXNlMTJIb3VyIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJob3VycyIsIm1pbnV0ZXNUb0FkZCIsIk1hdGgiLCJmbG9vciIsImhvdXJzVG9BZGQiLCJpc1BNIiwibWFwIiwibnVtIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImhvdXJzU3RyaW5nIiwibWludXRlc1N0cmluZyIsInNlY29uZHNTdHJpbmciLCJzdGFydHNXaXRoIiwic2xpY2UiLCJ0aW1lU3RyaW5nIiwiam9pbiIsInN0cmluZ2lmeTEySG91ciIsImdldEhvdXJseVRpY2tWYWx1ZXMiLCJwZXJpb2RIb3VycyIsInN0YXJ0IiwiZW5kIiwib2Zmc2V0IiwidmFsdWVzIiwiaSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVPLElBQU1BLE1BQU0sR0FBRyxFQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLEtBQUtELE1BQWxCO0FBQ0EsSUFBTUUsR0FBRyxHQUFHLEtBQUtELElBQWpCO0FBRUEsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUN6QkMsSUFEeUIsRUFHaEI7QUFBQSxpRkFEaUUsRUFDakU7QUFBQSxtQ0FEUEMsb0JBQ087QUFBQSxNQURQQSxvQkFDTyxzQ0FEZ0IsSUFDaEI7QUFBQSw4QkFEc0JDLFdBQ3RCO0FBQUEsTUFEc0JBLFdBQ3RCLGlDQURvQyxLQUNwQztBQUFBLDRCQUQyQ0MsU0FDM0M7QUFBQSxNQUQyQ0EsU0FDM0MsK0JBRHVELEtBQ3ZEOztBQUNULE1BQUlDLE9BQU8sR0FBR0osSUFBZDtBQUFBLE1BQ0lLLE9BQU8sR0FBRyxDQURkO0FBQUEsTUFFSUMsS0FBSyxHQUFHLENBRlo7QUFHQSxNQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxPQUFPLEdBQUcsRUFBckIsQ0FBckI7QUFDQUEsU0FBTyxHQUFHQSxPQUFPLEdBQUcsRUFBcEI7QUFDQUMsU0FBTyxHQUFHQSxPQUFPLElBQUlFLFlBQXJCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV0osT0FBTyxHQUFHLEVBQXJCLENBQW5CO0FBQ0FBLFNBQU8sR0FBR0EsT0FBTyxHQUFHLEVBQXBCO0FBQ0FDLE9BQUssSUFBSUksVUFBVDtBQUNBLE1BQU1DLElBQUksR0FBR0wsS0FBSyxJQUFJLEVBQVQsSUFBZUEsS0FBSyxHQUFHLEVBQXBDO0FBQ0FBLE9BQUssR0FBRyxDQUFDSCxTQUFTLElBQUlHLEtBQUssR0FBRyxFQUFyQixHQUEwQkEsS0FBSyxHQUFHLEVBQWxDLEdBQXVDQSxLQUF4QyxJQUFpRCxFQUF6RCxDQVhTLENBWVQ7O0FBWlMsYUFheUMsQ0FBQ0EsS0FBRCxFQUFRRCxPQUFSLEVBQWlCRCxPQUFqQixFQUEwQlEsR0FBMUIsQ0FBOEIsVUFBQ0MsR0FBRDtBQUFBLFdBQzVFQSxHQUFHLENBQUNDLFFBQUosR0FBZUMsUUFBZixDQUF3QixDQUF4QixFQUEyQixHQUEzQixDQUQ0RTtBQUFBLEdBQTlCLENBYnpDO0FBQUE7QUFBQSxNQWFKQyxXQWJJO0FBQUEsTUFhU0MsYUFiVDtBQUFBLE1BYXdCQyxhQWJ4Qjs7QUFnQlQsTUFBSWpCLG9CQUFvQixJQUFJZSxXQUFXLENBQUNHLFVBQVosQ0FBdUIsR0FBdkIsQ0FBNUIsRUFBeUQ7QUFDckRILGVBQVcsR0FBR0EsV0FBVyxDQUFDSSxLQUFaLENBQWtCLENBQWxCLENBQWQ7QUFDSDs7QUFDRCxNQUFNQyxVQUFVLEdBQUcsQ0FBQ0wsV0FBRCxFQUFjQyxhQUFkLEVBQTZCQyxhQUE3QixFQUNkRSxLQURjLENBQ1IsQ0FEUSxFQUNMbEIsV0FBVyxHQUFHLENBQUgsR0FBTyxDQURiLEVBRWRvQixJQUZjLENBRVQsR0FGUyxDQUFuQjs7QUFHQSxNQUFJbkIsU0FBSixFQUFlO0FBQ1gscUJBQVVrQixVQUFWLGNBQXdCVixJQUFJLEdBQUcsSUFBSCxHQUFVLElBQXRDO0FBQ0g7O0FBQ0QsU0FBT1UsVUFBUDtBQUNILENBN0JNO0FBK0JBLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3ZCLElBQUQsRUFBZ0I7QUFDM0MsTUFBTU0sS0FBSyxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsSUFBSSxHQUFHSCxJQUFsQixDQUFkO0FBQ0EsTUFBTWMsSUFBSSxHQUFHTCxLQUFLLElBQUksRUFBVCxJQUFlQSxLQUFLLEdBQUcsRUFBcEM7QUFDQSxtQkFBVUEsS0FBSyxHQUFHLEVBQVIsR0FBYUEsS0FBSyxHQUFHLEVBQXJCLEdBQTBCQSxLQUFLLEtBQUssQ0FBVixHQUFjLEVBQWQsR0FBbUJBLEtBQXZELGNBQWdFSyxJQUFJLEdBQUcsSUFBSCxHQUFVLElBQTlFO0FBQ0gsQ0FKTTtBQU1BLElBQU1hLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FDL0JDLFdBRCtCLEVBSzlCO0FBQUEsTUFIREMsS0FHQyx1RUFIZSxDQUdmO0FBQUEsTUFGREMsR0FFQyx1RUFGYSxFQUViO0FBQUEsTUFEREMsTUFDQyx1RUFEZ0IsQ0FDaEI7QUFDRCxNQUFNQyxNQUFnQixHQUFHLEVBQXpCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHSixLQUFiLEVBQW9CSSxDQUFDLEdBQUdILEdBQXhCLEVBQTZCRyxDQUFDLEVBQTlCLEVBQWtDO0FBQzlCLFFBQUksQ0FBQ0EsQ0FBQyxHQUFHRixNQUFMLElBQWVILFdBQWYsS0FBK0IsQ0FBbkMsRUFBc0M7QUFDbENJLFlBQU0sQ0FBQ0UsSUFBUCxDQUFZUixlQUFlLENBQUNPLENBQUMsR0FBR2pDLElBQUwsQ0FBM0I7QUFDSDtBQUNKOztBQUNELFNBQU9nQyxNQUFQO0FBQ0gsQ0FiTSIsImZpbGUiOiIuL3NyYy90aW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZSB9IGZyb20gXCJ0eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgTUlOVVRFID0gNjA7XG5leHBvcnQgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xuZXhwb3J0IGNvbnN0IERBWSA9IDI0ICogSE9VUjtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeVRpbWUgPSAoXG4gICAgdGltZTogVGltZSxcbiAgICB7IHRydW5jYXRlTGVhZGluZ1plcm9zID0gdHJ1ZSwgc2hvd1NlY29uZHMgPSBmYWxzZSwgdXNlMTJIb3VyID0gZmFsc2UgfSA9IHt9XG4pOiBzdHJpbmcgPT4ge1xuICAgIGxldCBzZWNvbmRzID0gdGltZSxcbiAgICAgICAgbWludXRlcyA9IDAsXG4gICAgICAgIGhvdXJzID0gMDtcbiAgICBjb25zdCBtaW51dGVzVG9BZGQgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcbiAgICBtaW51dGVzID0gbWludXRlcyArPSBtaW51dGVzVG9BZGQ7XG4gICAgY29uc3QgaG91cnNUb0FkZCA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBtaW51dGVzID0gbWludXRlcyAlIDYwO1xuICAgIGhvdXJzICs9IGhvdXJzVG9BZGQ7XG4gICAgY29uc3QgaXNQTSA9IGhvdXJzID49IDEyICYmIGhvdXJzIDwgMjQ7XG4gICAgaG91cnMgPSAodXNlMTJIb3VyICYmIGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogaG91cnMpICUgMjQ7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICAgIGxldCBbaG91cnNTdHJpbmcsIG1pbnV0ZXNTdHJpbmcsIHNlY29uZHNTdHJpbmddID0gW2hvdXJzLCBtaW51dGVzLCBzZWNvbmRzXS5tYXAoKG51bSkgPT5cbiAgICAgICAgbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpXG4gICAgKTtcbiAgICBpZiAodHJ1bmNhdGVMZWFkaW5nWmVyb3MgJiYgaG91cnNTdHJpbmcuc3RhcnRzV2l0aChcIjBcIikpIHtcbiAgICAgICAgaG91cnNTdHJpbmcgPSBob3Vyc1N0cmluZy5zbGljZSgxKTtcbiAgICB9XG4gICAgY29uc3QgdGltZVN0cmluZyA9IFtob3Vyc1N0cmluZywgbWludXRlc1N0cmluZywgc2Vjb25kc1N0cmluZ11cbiAgICAgICAgLnNsaWNlKDAsIHNob3dTZWNvbmRzID8gMyA6IDIpXG4gICAgICAgIC5qb2luKFwiOlwiKTtcbiAgICBpZiAodXNlMTJIb3VyKSB7XG4gICAgICAgIHJldHVybiBgJHt0aW1lU3RyaW5nfSAke2lzUE0gPyBcIlBNXCIgOiBcIkFNXCJ9YDtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVTdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5MTJIb3VyID0gKHRpbWU6IFRpbWUpID0+IHtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodGltZSAvIEhPVVIpO1xuICAgIGNvbnN0IGlzUE0gPSBob3VycyA+PSAxMiAmJiBob3VycyA8IDI0O1xuICAgIHJldHVybiBgJHtob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzID09PSAwID8gMTIgOiBob3Vyc30gJHtpc1BNID8gXCJQTVwiIDogXCJBTVwifWA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SG91cmx5VGlja1ZhbHVlcyA9IChcbiAgICBwZXJpb2RIb3VyczogbnVtYmVyLFxuICAgIHN0YXJ0OiBudW1iZXIgPSAwLFxuICAgIGVuZDogbnVtYmVyID0gMjQsXG4gICAgb2Zmc2V0OiBudW1iZXIgPSAwXG4pID0+IHtcbiAgICBjb25zdCB2YWx1ZXM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgaWYgKChpIC0gb2Zmc2V0KSAlIHBlcmlvZEhvdXJzID09PSAwKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChzdHJpbmdpZnkxMkhvdXIoaSAqIEhPVVIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/time.ts\n");

/***/ })

})