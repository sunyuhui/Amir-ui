(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Amir"] = factory();
	else
		root["Amir"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(16)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(21),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c13f61e0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/sunhui/Amir-ui/src/components/amir-button/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c13f61e0", Component.options)
  } else {
    hotAPI.reload("data-v-c13f61e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(12)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(17),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-15a7a210",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/sunhui/Amir-ui/src/components/amir-confirm/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15a7a210", Component.options)
  } else {
    hotAPI.reload("data-v-15a7a210", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(18),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-49bb8318",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/sunhui/Amir-ui/src/components/amir-loading/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49bb8318", Component.options)
  } else {
    hotAPI.reload("data-v-49bb8318", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(20),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b30eb810",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/sunhui/Amir-ui/src/components/amir-pagination/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b30eb810", Component.options)
  } else {
    hotAPI.reload("data-v-b30eb810", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(19),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/sunhui/Amir-ui/src/components/amir-toast/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7112acdf", Component.options)
  } else {
    hotAPI.reload("data-v-7112acdf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//

exports.default = {
	methods: {
		emitClick: function emitClick() {
			this.$emit('click');
		}
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _amirButton = __webpack_require__(1);

var _amirButton2 = _interopRequireDefault(_amirButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		AmirButton: _amirButton2.default
	},
	props: {
		show: {
			type: Boolean,
			required: true,
			default: false
		},
		confirmText: {
			type: String,
			default: '确定'
		},
		cancelText: {
			type: String,
			default: '取消'
		}
	},
	methods: {
		confirm: function confirm() {
			this.$emit('update:show', false);
			this.$emit('confirm');
		},
		cancel: function cancel() {
			this.$emit('update:show', false);
			this.$emit('cancel');
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	}
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _amirButton = __webpack_require__(1);

var _amirButton2 = _interopRequireDefault(_amirButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		AmirButton: _amirButton2.default
	},
	data: function data() {
		return {
			beforeItems: [2, 1], //倒叙，保证输出的页码能以正序呈现
			afterItems: [1, 2],
			destinationPage: ''
		};
	},

	props: {
		totalPage: {
			type: Number,
			default: 0
		},
		currentPage: {
			type: Number,
			default: 1
		},
		goto: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		prevClass: function prevClass() {
			return {
				prev: true,
				disabled: this.currentPage === 1
			};
		},
		nextClass: function nextClass() {
			return {
				next: true,
				disabled: this.currentPage === this.totalPage
			};
		}
	},
	methods: {
		switchPage: function switchPage() {
			var el = event.currentTarget;
			var choosenPage = +el.innerText;
			this.$emit('update:currentPage', choosenPage);
			this.$emit('switchPage', choosenPage);
		},
		switchPrevPage: function switchPrevPage() {
			if (this.currentPage > 1) {
				this.$emit('update:currentPage', this.currentPage - 1);
				this.$emit('switchPage', this.currentPage - 1);
			}
		},
		switchNextPage: function switchNextPage() {
			if (this.currentPage < this.totalPage) {
				this.$emit('update:currentPage', this.currentPage + 1);
				this.$emit('switchPage', this.currentPage + 1);
			}
		},
		goSwitchPage: function goSwitchPage() {
			if (+this.destinationPage >= 1 && +this.destinationPage <= this.totalPage) {
				this.$emit('update:currentPage', +this.destinationPage);
				this.$emit('switchPage', +this.destinationPage);
			}
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//

exports.default = {
	props: {
		show: {
			type: Boolean,
			default: false
		},
		time: {
			type: Number,
			default: 2,
			validator: function validator(value) {
				return value > 0;
			}
		}
	},
	mounted: function mounted() {
		var _this = this;
		setTimeout(function () {
			_this.$emit('update:show', false);
		}, _this.time * 1000);
	}
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _amirButton = __webpack_require__(1);

var _amirButton2 = _interopRequireDefault(_amirButton);

var _amirLoading = __webpack_require__(3);

var _amirLoading2 = _interopRequireDefault(_amirLoading);

var _amirToast = __webpack_require__(5);

var _amirToast2 = _interopRequireDefault(_amirToast);

var _amirPagination = __webpack_require__(4);

var _amirPagination2 = _interopRequireDefault(_amirPagination);

var _amirConfirm = __webpack_require__(2);

var _amirConfirm2 = _interopRequireDefault(_amirConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var amir = {
	"a-button": _amirButton2.default,
	"a-loading": _amirLoading2.default,
	"a-toast": _amirToast2.default,
	"a-pagination": _amirPagination2.default,
	'a-confirm': _amirConfirm2.default
};

function install(Vue) {
	Object.keys(amir).forEach(function (key) {
		Vue.component(key, amir[key]);
	});
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install);
}

exports.default = install;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "amir-confirm"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('p', [_vm._t("default", [_vm._v("你确定吗？")])], 2), _vm._v(" "), _c('amir-button', {
    staticClass: "cancel-button",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('amir-button', {
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-15a7a210", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "container"
  }, [_vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "amir-loading-container"
  }, [_c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-item"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-49bb8318", module.exports)
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "amir-toast-container"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._t("default", [_vm._v("toast")])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7112acdf", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "amir-pagination-container"
  }, [_c('a', {
    class: _vm.prevClass,
    on: {
      "click": _vm.switchPrevPage
    }
  }, [_vm._v(" < 上一页")]), _vm._v(" "), (_vm.currentPage > 1) ? _c('a', {
    on: {
      "click": _vm.switchPage
    }
  }, [_vm._v("1")]) : _vm._e(), _vm._v(" "), (_vm.currentPage > 2 + 1 + 1) ? [_c('span', {
    staticClass: "dot"
  }, [_vm._v("...")])] : _vm._e(), _vm._v(" "), _vm._l((_vm.beforeItems), function(item) {
    return [(_vm.currentPage > item + 1) ? _c('a', {
      staticClass: "neighbor-page",
      on: {
        "click": _vm.switchPage
      }
    }, [_vm._v(_vm._s(_vm.currentPage - item))]) : _vm._e()]
  }), _vm._v(" "), _c('a', {
    staticClass: "active"
  }, [_vm._v(_vm._s(_vm.currentPage))]), _vm._v(" "), _vm._l((_vm.afterItems), function(item) {
    return [(_vm.currentPage + item < _vm.totalPage) ? _c('a', {
      staticClass: "neighbor-page",
      on: {
        "click": _vm.switchPage
      }
    }, [_vm._v(_vm._s(_vm.currentPage + item))]) : _vm._e()]
  }), _vm._v(" "), (_vm.currentPage + 2 + 1 < _vm.totalPage) ? [_c('span', {
    staticClass: "dot"
  }, [_vm._v("...")])] : _vm._e(), _vm._v(" "), (_vm.currentPage < _vm.totalPage) ? _c('a', {
    on: {
      "click": _vm.switchPage
    }
  }, [_vm._v(_vm._s(_vm.totalPage))]) : _vm._e(), _vm._v(" "), _c('a', {
    class: _vm.nextClass,
    on: {
      "click": _vm.switchNextPage
    }
  }, [_vm._v("下一页 > ")]), _vm._v(" "), (_vm.goto) ? _c('div', {
    staticClass: "goto-container"
  }, [_c('span', {
    staticClass: "goto"
  }, [_vm._v("前往 ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.destinationPage),
      expression: "destinationPage"
    }],
    staticClass: "goto-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.destinationPage)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.destinationPage = $event.target.value
      }
    }
  }), _vm._v("页 "), _c('amir-button', {
    on: {
      "click": _vm.goSwitchPage
    }
  })], 1) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b30eb810", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "btn",
    on: {
      "click": _vm.emitClick
    }
  }, [_vm._t("default", [_vm._v("确定")])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c13f61e0", module.exports)
  }
}

/***/ })
/******/ ]);
});