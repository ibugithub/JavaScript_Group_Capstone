"use strict";
(self["webpackChunkjavascript_group_capstone"] = self["webpackChunkjavascript_group_capstone"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/events.js */ "./src/modules/events.js");

_modules_events_js__WEBPACK_IMPORTED_MODULE_0__["default"].onPageLoad();

// const onPageLoad = () => {
//   async function postData(url = '') {
//     const response = await fetch(url);
//     return response.json();
//   }
//   postData('https://api.tvmaze.com/schedule').then((data) => console.log('the show data is', data));

//   async function postData2(url2 = '') {
//     const response = await fetch(url2);
//     return response.json();
//   }
//   postData2('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jDmx1fPvHr5KpfZ0L9Bv/likes').then((data) => console.log('the love data is', data));

//   // const data = tvShowApi.gettingData();
//   // const loveData = tvShowApi.fetchItemLikes();
//   // this.loadHome(data, loveData);
//   // this.handleCommentBtnClick();
//   // this.handleLikes();
// };

// onPageLoad();

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SendAndReciveData = /*#__PURE__*/_createClass(function SendAndReciveData() {
  var _this = this;
  _classCallCheck(this, SendAndReciveData);
  _defineProperty(this, "getShowData", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response, jsonData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(_this.url);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          jsonData = _context.sent;
          return _context.abrupt("return", jsonData);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  })));
  _defineProperty(this, "getLoveData", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response, likesData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("".concat(_this.involbeurl, "apps/").concat(_this.appId, "/likes"));
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          likesData = _context2.sent;
          return _context2.abrupt("return", likesData);
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  })));
  _defineProperty(this, "sendLoveData", function (id) {
    id = parseInt(id, 10);
    fetch("".concat(_this.involbeurl, "apps/").concat(_this.appId, "/likes"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item_id: id
      })
    });
  });
  this.url = 'https://api.tvmaze.com/schedule';
  this.involbeurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
  this.appId = 'UFl3TzBZ7UUa77NKxu0f';
});
var tvShowApi = new SendAndReciveData();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tvShowApi);

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Count = /*#__PURE__*/_createClass(function Count() {
  _classCallCheck(this, Count);
  _defineProperty(this, "countLove", function (event, id) {
    console.log('start form here'); //   console.log(event.target.closest('.likes_love').querySelector('span').getAttribute('count'));
    //   console.log(event.target.closest('.likes_love').querySelector('.innerSpan'));
    var countContainer = event.target.closest('.likes_love').querySelector('.innerSpan'); //   const currentCount = event.target.closest('.likes_love').querySelector('span').getAttribute('count');
    //   const newCounter = parseInt(currentCount, 10) + 1;
    //   countContainer.innerHTML = newCounter;
    id = parseInt(id, 10);
    var loveData = _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLoveData();
    console.log('inside the counter');
    loveData.then(function (data) {
      data.forEach(function (element) {
        //   console.log('the id is', id);
        //   console.log('the element id is', element.item_id);
        //   console.log('the likes is', element.likes);
        console.log('--------------');
        if (id === element.item_id) {
          console.log('the id is', id);
          console.log('the element id is', element.item_id);
          console.log('the likes is', element.likes);
          countContainer.textContent = element.likes + 1;
        }
      });
    });
  });
});
var count = new Count();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (count);

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ "./src/modules/counter.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _assets_love_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/love.png */ "./src/assets/love.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var EventsHandler = /*#__PURE__*/_createClass(function EventsHandler() {
  var _this = this;
  _classCallCheck(this, EventsHandler);
  _defineProperty(this, "onPageLoad", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data, loveData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShowData();
        case 2:
          data = _context.sent;
          _context.next = 5;
          return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLoveData();
        case 5:
          loveData = _context.sent;
          _this.loadHome(data, loveData);
          _this.handleLikes();
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  _defineProperty(this, "loadHome", function (data, loveData) {
    var mainElement = document.querySelector('.display-items');
    data.forEach(function (element) {
      if (element.show.image.original !== null) {
        var _element$show = element.show,
          id = _element$show.id,
          name = _element$show.name,
          image = _element$show.image;
        var _count = 0;
        if (loveData.length > 0) {
          loveData.forEach(function (element) {
            if (element.item_id === id) {
              console.log('hey find you');
              _count = element.likes;
            }
          });
        }
        var container = "\n                    <div class=\"items\">\n                      <img src=\"".concat(image.original, "\" alt=\"#\" />\n                      <h2>").concat(name, "</h2>\n                      <div class=\"likes_love\">\n                        <span count=").concat(id, ">Likes: <span class=\"innerSpan\" >").concat(_count, "</span> </span>\n                        <button class=\"love\"><img id=").concat(id, " src=\"").concat(_assets_love_png__WEBPACK_IMPORTED_MODULE_3__, "\"></button>\n                      </div>\n                      <div class=\"comment_reserve\">\n                        <button type=\"button\" data-id=\"").concat(id, "\" class=\"cmnt\">Comments</button>\n                        <button type=\"button\" class=\"rsrv\">Reservation</button>\n                      </div>\n                    </div>\n                  ");
        mainElement.insertAdjacentHTML('beforeend', container);
      }
    });
  });
  _defineProperty(this, "handleLikes", function () {
    var love = document.querySelectorAll('.love');
    love.forEach(function (element) {
      element.addEventListener('click', function (event) {
        var id = event.target.getAttribute('id');
        console.log('hello', event.target.getAttribute('id'));
        _counter_js__WEBPACK_IMPORTED_MODULE_1__["default"].countLove(event, id);
        _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].sendLoveData(id);
      });
    });
  });
});
var eventhandler = new EventsHandler();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventhandler);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(245, 242, 242);\r\n}\r\n\r\n.homepage {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.display-items {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 1px;\r\n}\r\n\r\n.items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 25%;\r\n  box-sizing: border-box;\r\n  border: 1px solid black;\r\n  padding: 10px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.items img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.logo > img {\r\n  width: 100px;\r\n}\r\n\r\n.items .likes_love img {\r\n  width: 20px;\r\n}\r\n\r\n.likes_love {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.comment_reserve {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n\r\n.comment_reserve button {\r\n  padding: 6px;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 20px;\r\n  background-color: white;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n}\r\n\r\n.nav-bar ul {\r\n  display: flex;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.nav-bar li {\r\n  margin-left: 10px;\r\n}\r\n\r\n.nav-bar a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.logo {\r\n  width: 40%;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 35px;\r\n  padding-bottom: 35px;\r\n  margin-top: 20px;\r\n  background-color: white;\r\n  width: 100%;\r\n}\r\n\r\n.love {\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n  .items {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 376px) {\r\n  .items {\r\n    width: calc(100% / 3);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .items {\r\n    width: 25%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .items {\r\n    width: 20%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .items {\r\n    width: calc(100% / 6);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(245, 242, 242);\r\n}\r\n\r\n.homepage {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.display-items {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 1px;\r\n}\r\n\r\n.items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 25%;\r\n  box-sizing: border-box;\r\n  border: 1px solid black;\r\n  padding: 10px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.items img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.logo > img {\r\n  width: 100px;\r\n}\r\n\r\n.items .likes_love img {\r\n  width: 20px;\r\n}\r\n\r\n.likes_love {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.comment_reserve {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n\r\n.comment_reserve button {\r\n  padding: 6px;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 20px;\r\n  background-color: white;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n}\r\n\r\n.nav-bar ul {\r\n  display: flex;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.nav-bar li {\r\n  margin-left: 10px;\r\n}\r\n\r\n.nav-bar a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.logo {\r\n  width: 40%;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 35px;\r\n  padding-bottom: 35px;\r\n  margin-top: 20px;\r\n  background-color: white;\r\n  width: 100%;\r\n}\r\n\r\n.love {\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n  .items {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 376px) {\r\n  .items {\r\n    width: calc(100% / 3);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .items {\r\n    width: 25%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .items {\r\n    width: 20%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .items {\r\n    width: calc(100% / 6);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/love.png":
/*!*****************************!*\
  !*** ./src/assets/love.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/love.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9ncm91cF9jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dyb3VwX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfZ3JvdXBfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfZ3JvdXBfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9ncm91cF9jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9ncm91cF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9ncm91cF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfZ3JvdXBfY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9ncm91cF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dyb3VwX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dyb3VwX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfZ3JvdXBfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9ncm91cF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfZ3JvdXBfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXZlbnRoYW5kbGVyIGZyb20gJy4vbW9kdWxlcy9ldmVudHMuanMnO1xuXG5ldmVudGhhbmRsZXIub25QYWdlTG9hZCgpO1xuXG4vLyBjb25zdCBvblBhZ2VMb2FkID0gKCkgPT4ge1xuLy8gICBhc3luYyBmdW5jdGlvbiBwb3N0RGF0YSh1cmwgPSAnJykge1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICB9XG4vLyAgIHBvc3REYXRhKCdodHRwczovL2FwaS50dm1hemUuY29tL3NjaGVkdWxlJykudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coJ3RoZSBzaG93IGRhdGEgaXMnLCBkYXRhKSk7XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gcG9zdERhdGEyKHVybDIgPSAnJykge1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsMik7XG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbi8vICAgfVxuLy8gICBwb3N0RGF0YTIoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2pEbXgxZlB2SHI1S3BmWjBMOUJ2L2xpa2VzJykudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coJ3RoZSBsb3ZlIGRhdGEgaXMnLCBkYXRhKSk7XG5cbi8vICAgLy8gY29uc3QgZGF0YSA9IHR2U2hvd0FwaS5nZXR0aW5nRGF0YSgpO1xuLy8gICAvLyBjb25zdCBsb3ZlRGF0YSA9IHR2U2hvd0FwaS5mZXRjaEl0ZW1MaWtlcygpO1xuLy8gICAvLyB0aGlzLmxvYWRIb21lKGRhdGEsIGxvdmVEYXRhKTtcbi8vICAgLy8gdGhpcy5oYW5kbGVDb21tZW50QnRuQ2xpY2soKTtcbi8vICAgLy8gdGhpcy5oYW5kbGVMaWtlcygpO1xuLy8gfTtcblxuLy8gb25QYWdlTG9hZCgpOyIsImNsYXNzIFNlbmRBbmRSZWNpdmVEYXRhIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zY2hlZHVsZSc7XG4gICAgdGhpcy5pbnZvbGJldXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nO1xuICAgIHRoaXMuYXBwSWQgPSAnVUZsM1R6Qlo3VVVhNzdOS3h1MGYnO1xuICB9XG5cbiAgZ2V0U2hvd0RhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwpO1xuICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4ganNvbkRhdGE7XG4gICAgfSBjYXRjaCAoZXJycm9yKSB7XG4gICAgICByZXR1cm4gZXJycm9yO1xuICAgIH1cbiAgfTtcblxuICBnZXRMb3ZlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmludm9sYmV1cmx9YXBwcy8ke3RoaXMuYXBwSWR9L2xpa2VzYCk7IC8vIFVzZSB0aGUgY29ycmVjdCBVUkwgZm9ybWF0XG4gICAgICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gbGlrZXNEYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHNlbmRMb3ZlRGF0YSA9IChpZCkgPT4ge1xuICAgIGlkID0gcGFyc2VJbnQoaWQsIDEwKTtcbiAgICBmZXRjaChgJHt0aGlzLmludm9sYmV1cmx9YXBwcy8ke3RoaXMuYXBwSWR9L2xpa2VzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgICB9KTtcbiAgfTtcbn1cblxuY29uc3QgdHZTaG93QXBpID0gbmV3IFNlbmRBbmRSZWNpdmVEYXRhKCk7XG5leHBvcnQgZGVmYXVsdCB0dlNob3dBcGk7XG4iLCJpbXBvcnQgdHZTaG93QXBpIGZyb20gJy4vYXBpLmpzJztcblxuY2xhc3MgQ291bnQge1xuICBjb3VudExvdmUgPSAoZXZlbnQsIGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IGZvcm0gaGVyZScpOyAvLyAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubGlrZXNfbG92ZScpLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5nZXRBdHRyaWJ1dGUoJ2NvdW50JykpO1xuICAgIC8vICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5saWtlc19sb3ZlJykucXVlcnlTZWxlY3RvcignLmlubmVyU3BhbicpKTtcbiAgICBjb25zdCBjb3VudENvbnRhaW5lciA9IGV2ZW50LnRhcmdldFxuICAgICAgLmNsb3Nlc3QoJy5saWtlc19sb3ZlJylcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuaW5uZXJTcGFuJyk7IC8vICAgY29uc3QgY3VycmVudENvdW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5saWtlc19sb3ZlJykucXVlcnlTZWxlY3Rvcignc3BhbicpLmdldEF0dHJpYnV0ZSgnY291bnQnKTtcbiAgICAvLyAgIGNvbnN0IG5ld0NvdW50ZXIgPSBwYXJzZUludChjdXJyZW50Q291bnQsIDEwKSArIDE7XG4gICAgLy8gICBjb3VudENvbnRhaW5lci5pbm5lckhUTUwgPSBuZXdDb3VudGVyO1xuICAgIGlkID0gcGFyc2VJbnQoaWQsIDEwKTtcbiAgICBjb25zdCBsb3ZlRGF0YSA9IHR2U2hvd0FwaS5nZXRMb3ZlRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgdGhlIGNvdW50ZXInKTtcbiAgICBsb3ZlRGF0YS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygndGhlIGlkIGlzJywgaWQpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCd0aGUgZWxlbWVudCBpZCBpcycsIGVsZW1lbnQuaXRlbV9pZCk7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3RoZSBsaWtlcyBpcycsIGVsZW1lbnQubGlrZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgaWYgKGlkID09PSBlbGVtZW50Lml0ZW1faWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGlkIGlzJywgaWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgZWxlbWVudCBpZCBpcycsIGVsZW1lbnQuaXRlbV9pZCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBsaWtlcyBpcycsIGVsZW1lbnQubGlrZXMpO1xuICAgICAgICAgIGNvdW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gZWxlbWVudC5saWtlcyArIDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuXG5jb25zdCBjb3VudCA9IG5ldyBDb3VudCgpO1xuZXhwb3J0IGRlZmF1bHQgY291bnQ7XG4iLCJpbXBvcnQgdHZTaG93QXBpIGZyb20gJy4vYXBpLmpzJztcbmltcG9ydCBjb3VudCBmcm9tICcuL2NvdW50ZXIuanMnO1xuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvdmUgZnJvbSAnLi4vYXNzZXRzL2xvdmUucG5nJztcblxuY2xhc3MgRXZlbnRzSGFuZGxlciB7XG4gIG9uUGFnZUxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHR2U2hvd0FwaS5nZXRTaG93RGF0YSgpO1xuICAgIGNvbnN0IGxvdmVEYXRhID0gYXdhaXQgdHZTaG93QXBpLmdldExvdmVEYXRhKCk7XG4gICAgdGhpcy5sb2FkSG9tZShkYXRhLCBsb3ZlRGF0YSk7XG4gICAgdGhpcy5oYW5kbGVMaWtlcygpO1xuICB9XG5cbiAgbG9hZEhvbWUgPSAoZGF0YSwgbG92ZURhdGEpID0+IHtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWl0ZW1zJyk7XG4gICAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5zaG93LmltYWdlLm9yaWdpbmFsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIGltYWdlIH0gPSBlbGVtZW50LnNob3c7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGlmIChsb3ZlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbG92ZURhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXRlbV9pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hleSBmaW5kIHlvdScpO1xuICAgICAgICAgICAgICBjb3VudCA9IGVsZW1lbnQubGlrZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiI1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiR7bmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlc19sb3ZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjb3VudD0ke2lkfT5MaWtlczogPHNwYW4gY2xhc3M9XCJpbm5lclNwYW5cIiA+JHtjb3VudH08L3NwYW4+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsb3ZlXCI+PGltZyBpZD0ke2lkfSBzcmM9XCIke2xvdmV9XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1pZD1cIiR7aWR9XCIgY2xhc3M9XCJjbW50XCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicnNydlwiPlJlc2VydmF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgbWFpbkVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjb250YWluZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTGlrZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbG92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb3ZlJyk7XG4gICAgbG92ZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvJywgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICAgIGNvdW50LmNvdW50TG92ZShldmVudCwgaWQpO1xuICAgICAgICB0dlNob3dBcGkuc2VuZExvdmVEYXRhKGlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGV2ZW50aGFuZGxlciA9IG5ldyBFdmVudHNIYW5kbGVyKCk7XG5leHBvcnQgZGVmYXVsdCBldmVudGhhbmRsZXI7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0MiwgMjQyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zIC5saWtlc19sb3ZlIGltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzX2xvdmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X3Jlc2VydmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9yZXNlcnZlIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciBsaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMzVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXHJcXG4gIC5pdGVtcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xcclxcbiAgLml0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLml0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuaXRlbXMge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5pdGVtcyB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0MiwgMjQyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zIC5saWtlc19sb3ZlIGltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzX2xvdmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X3Jlc2VydmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9yZXNlcnZlIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciBsaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMzVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXHJcXG4gIC5pdGVtcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xcclxcbiAgLml0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLml0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuaXRlbXMge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5pdGVtcyB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJldmVudGhhbmRsZXIiLCJvblBhZ2VMb2FkIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJfZGVmaW5lUHJvcGVydHkiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJTZW5kQW5kUmVjaXZlRGF0YSIsIl90aGlzIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwianNvbkRhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2giLCJ1cmwiLCJqc29uIiwidDAiLCJfY2FsbGVlMiIsImxpa2VzRGF0YSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNvbmNhdCIsImludm9sYmV1cmwiLCJhcHBJZCIsImlkIiwicGFyc2VJbnQiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtX2lkIiwidHZTaG93QXBpIiwiQ291bnQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb3VudENvbnRhaW5lciIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwibG92ZURhdGEiLCJnZXRMb3ZlRGF0YSIsImRhdGEiLCJlbGVtZW50IiwibGlrZXMiLCJ0ZXh0Q29udGVudCIsImNvdW50IiwibG92ZSIsIkV2ZW50c0hhbmRsZXIiLCJnZXRTaG93RGF0YSIsImxvYWRIb21lIiwiaGFuZGxlTGlrZXMiLCJtYWluRWxlbWVudCIsImRvY3VtZW50Iiwic2hvdyIsImltYWdlIiwib3JpZ2luYWwiLCJfZWxlbWVudCRzaG93IiwiY29udGFpbmVyIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRBdHRyaWJ1dGUiLCJjb3VudExvdmUiLCJzZW5kTG92ZURhdGEiXSwic291cmNlUm9vdCI6IiJ9