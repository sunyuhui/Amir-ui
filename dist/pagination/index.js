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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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
	props: {
		size: {
			type: String,
			default: 'normal'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		hot: {
			type: Boolean,
			default: false
		}

	},
	data: function data() {
		return {
			classObject: {
				'amir--btn': true,
				'amir--btn--big': this.size === 'big',
				'amir--btn--bigger': this.size === 'bigger',
				'amir--btn--disabled': this.disabled,
				'amir--btn--hot': this.hot
			}
		};
	},

	methods: {
		emitClick: function emitClick() {
			this.$emit('click');
		}
	}
};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.classObject,
    on: {
      "click": _vm.emitClick
    }
  }, [_vm._t("default", [_vm._v("确定")])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c13f61e0", esExports)
  }
}

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "amir--pagination"
  }, [_c('a', {
    class: _vm.prevClass,
    on: {
      "click": _vm.switchPrevPage
    }
  }, [_vm._v(" < 上一页")]), _vm._v(" "), (_vm.currentPage > 1) ? _c('a', {
    class: _vm.aClassObject,
    on: {
      "click": _vm.switchPage
    }
  }, [_vm._v("1")]) : _vm._e(), _vm._v(" "), (_vm.currentPage > 2 + 1 + 1) ? [_c('span', {
    class: _vm.dotClassObject
  }, [_vm._v("...")])] : _vm._e(), _vm._v(" "), _vm._l((_vm.beforeItems), function(item) {
    return [(_vm.currentPage > item + 1) ? _c('a', {
      class: _vm.aClassObject,
      on: {
        "click": _vm.switchPage
      }
    }, [_vm._v(_vm._s(_vm.currentPage - item))]) : _vm._e()]
  }), _vm._v(" "), _c('a', {
    class: _vm.activeClassObject
  }, [_vm._v(_vm._s(_vm.currentPage))]), _vm._v(" "), _vm._l((_vm.afterItems), function(item) {
    return [(_vm.currentPage + item < _vm.totalPage) ? _c('a', {
      class: _vm.aClassObject,
      on: {
        "click": _vm.switchPage
      }
    }, [_vm._v(_vm._s(_vm.currentPage + item))]) : _vm._e()]
  }), _vm._v(" "), (_vm.currentPage + 2 + 1 < _vm.totalPage) ? [_c('span', {
    class: _vm.dotClassObject
  }, [_vm._v("...")])] : _vm._e(), _vm._v(" "), (_vm.currentPage < _vm.totalPage) ? _c('a', {
    class: _vm.aClassObject,
    on: {
      "click": _vm.switchPage
    }
  }, [_vm._v(_vm._s(_vm.totalPage))]) : _vm._e(), _vm._v(" "), _c('a', {
    class: _vm.nextClass,
    on: {
      "click": _vm.switchNextPage
    }
  }, [_vm._v("下一页 > ")]), _vm._v(" "), (_vm.goto) ? _c('div', {
    class: _vm.gotoClassObject
  }, [_c('span', {
    class: _vm.spanClassObject
  }, [_vm._v("前往 ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.destinationPage),
      expression: "destinationPage"
    }],
    class: _vm.inputClassObject,
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
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b30eb810", esExports)
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b30eb810_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(33);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b30eb810_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/amir-pagination/index.vue"
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c13f61e0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(3);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c13f61e0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/amir-button/index.vue"
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _amirButton = __webpack_require__(4);

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
			destinationPage: '',
			aClassObject: {
				'amir--pagination__a': true
			},
			dotClassObject: {
				'amir--pagination__dot': true
			},
			activeClassObject: {
				'amir--pagination__a': true,
				'amir--pagination__a--active': true
			},
			gotoClassObject: {
				'amir--pagination__goto': true
			},
			spanClassObject: {
				'amir--pagination__goto__span': true
			},
			inputClassObject: {
				'amir--pagination__goto__input': true
			}
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
				'amir--pagination__a': true,
				'amir--pagination__a--prev': true,
				'amir--pagination__a--disabled': this.currentPage === 1
			};
		},
		nextClass: function nextClass() {
			return {
				'amir--pagination__a': true,
				'amir--pagination__a--next': true,
				'amir--pagination__a--disabled': this.currentPage === this.totalPage
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

/***/ })

/******/ });
});