(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/name-list/name-list"],{

/***/ 75:
/*!*************************************************************************!*\
  !*** D:/uniapp/qiming/main.js?{"page":"pages%2Fname-list%2Fname-list"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _nameList = _interopRequireDefault(__webpack_require__(/*! ./pages/name-list/name-list.vue */ 76));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_nameList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 76:
/*!******************************************************!*\
  !*** D:/uniapp/qiming/pages/name-list/name-list.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name-list.vue?vue&type=template&id=6ca21a88& */ 77);
/* harmony import */ var _name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name-list.vue?vue&type=script&lang=js& */ 79);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _name_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./name-list.vue?vue&type=style&index=0&lang=scss& */ 81);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/name-list/name-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/*!*************************************************************************************!*\
  !*** D:/uniapp/qiming/pages/name-list/name-list.vue?vue&type=template&id=6ca21a88& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./name-list.vue?vue&type=template&id=6ca21a88& */ 78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_template_id_6ca21a88___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 78:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/qiming/pages/name-list/name-list.vue?vue&type=template&id=6ca21a88& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniNavBar: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar */ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue */ 98))
    },
    likes: function() {
      return __webpack_require__.e(/*! import() | components/likes/likes */ "components/likes/likes").then(__webpack_require__.bind(null, /*! @/components/likes/likes.vue */ 126))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 = _vm.__map(_vm.poetryList, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var l0 = _vm.poetryList[index].content.split("")
    return {
      $orig: $orig,
      l0: l0
    }
  })

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      return this.control(10)
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 79:
/*!*******************************************************************************!*\
  !*** D:/uniapp/qiming/pages/name-list/name-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./name-list.vue?vue&type=script&lang=js& */ 80);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/qiming/pages/name-list/name-list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var likes = function likes() {__webpack_require__.e(/*! require.ensure | components/likes/likes */ "components/likes/likes").then((function () {return resolve(__webpack_require__(/*! ../../components/likes/likes.vue */ 126));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

















































{
  data: function data() {
    return {
      formData: {},
      poetryList: [],
      page: 'nameList' };

  },
  components: {
    likes: likes },

  onLoad: function onLoad(option) {
    this.formData = JSON.parse(option.formData);
    this.control(10);



  },
  computed: {
    highlightIndex: function highlightIndex() {
      var obj = [];
      this.poetryList.forEach(function (item) {
        var name = item.name;
        var content = item.content;
        var f = content.indexOf(name.slice(1, 2));
        var s = content.indexOf(name.slice(2, 3));
        obj.push({
          f: f,
          s: s });


      });
      return obj;
    } },

  methods: {
    goBack: function goBack() {
      uni.navigateBack({});


    },
    getName: function getName() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res, poetryList, randomNameArray, key, completeContent, content, reg, contentStr, randomNum, firstWord, secondWord, randomName;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                uni.showLoading({
                  title: '请稍等...' });_context.next = 3;return (

                  uniCloud.callFunction({
                    name: "get_poetry",
                    data: {
                      type: _this.formData.poetryType } }));case 3:res = _context.sent;


                poetryList = res.result.data;
                randomNameArray = [];
                for (key in poetryList) {
                  completeContent = poetryList[key].content;
                  content = poetryList[key].content.split('。');
                  content = content.filter(function (s) {
                    return s && s.trim();
                  });
                  content = content[_this.Random(0, content.length - 1)];

                  poetryList[key].content = content;
                  poetryList[key].completeContent = completeContent;

                  // let content1 = content.split('，')[0]
                  // let content2 = content.split('，')[1]
                  // if(!content1 || !content2){
                  // 	return
                  // }
                  reg = /([\u4e00-\u9fa5])+/g;
                  // let contentStr1 = content1.match(reg).join("")
                  // let contentStr2 = content2.match(reg).join("")
                  // contentStr1 = contentStr1.split('')
                  // contentStr2 = contentStr2.split('')
                  contentStr = content.match(reg).join("").split("");
                  randomNum = _this.randomNum(0, contentStr.length);
                  firstWord = contentStr[randomNum[0]];
                  secondWord = contentStr[randomNum[1]];
                  randomName = firstWord + secondWord;

                  // for (let n = 0 ;n < 2 ; n ++) {
                  // 	randomName+=contentStr[this.Random(0,contentStr.length-1)]
                  // }
                  // randomName = contentStr1[this.Random(0, contentStr1.length - 1)] + contentStr2[this
                  // 	.Random(0, contentStr2.length - 1)]
                  poetryList[key].name = _this.formData.firstName + randomName;
                }return _context.abrupt("return",
                poetryList);case 8:case "end":return _context.stop();}}}, _callee);}))();


    },
    Random: function Random(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    },
    //取两个随机数 
    randomNum: function randomNum(min, max) {
      var num1 = Math.floor(Math.random() * (max - min)) + min;
      var num2 = Math.floor(Math.random() * (num1 - min + 1)) + min;
      if (num1 === num2) {
        num1++;
      } else if (num1 === max) {
        num2--;
      }
      return [num2, num1];

    },
    filterName: function filterName(count) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _this2$poetryList;var poetryList, names, res, genderRes, res1, wuGe;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (

                  _this2.getName());case 2:poetryList = _context2.sent;
                names = [];
                poetryList.forEach(function (value) {
                  names.push(value.name);
                });_context2.next = 7;return (

                  uniCloud.callFunction({
                    name: "get_gender",
                    data: {
                      names: names } }));case 7:res = _context2.sent;


                genderRes = res.result.data;
                genderRes.forEach(function (value, key) {
                  poetryList[key].sex = value.gender;
                });
                if (_this2.formData.sex === "男") {
                  poetryList = poetryList.filter(function (value) {
                    return value.sex === "male";
                  });
                } else if (_this2.formData.sex === "女") {
                  poetryList = poetryList.filter(function (value) {
                    return value.sex === "female";
                  });
                }
                names = [];
                poetryList.forEach(function (value) {
                  names.push(value.name);
                });_context2.next = 15;return (

                  uniCloud.callFunction({
                    name: "wuge",
                    data: {
                      names: names } }));case 15:res1 = _context2.sent;


                wuGe = res1.result.data;

                wuGe.forEach(function (value, key) {
                  poetryList[key].sanCaiWuGe = value;
                });
                if (_this2.formData.score !== '不限') {
                  poetryList = poetryList.filter(function (value) {
                    if (_this2.formData.score === '中') {
                      return value.sanCaiWuGe.totalSore > 50;
                    } else if (_this2.formData.score === '高') {
                      return value.sanCaiWuGe.totalSore > 70;
                    }
                  });
                }
                (_this2$poetryList = _this2.poetryList).push.apply(_this2$poetryList, _toConsumableArray(poetryList));

                poetryList = poetryList.slice(0, count);



                // return new Promise((resolve, reject) => {
                // 	if (poetryList) {
                // 		this.poetryList.push(...poetryList)
                // 		resolve()
                // 	} else {
                // 		reject('error')
                // 	}
                // })
              case 21:case "end":return _context2.stop();}}}, _callee2);}))();},
    control: function control(count) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                _this3.poetryList = [];case 1:_context3.next = 3;return (

                  _this3.filterName().then(function (res) {
                    _this3.poetryList = _this3.poetryList.slice(0, count);
                    uni.hideLoading();
                  }).catch(function (e) {
                  }));case 3:if (


                _this3.poetryList.length < count) {_context3.next = 1;break;}case 4:case "end":return _context3.stop();}}}, _callee3);}))();


    },
    toDetail: function toDetail(index) {
      var dataList = JSON.stringify(this.poetryList[index]);
      uni.navigateTo({
        url: '../name-detail/name-detail?data=' + dataList + '&type=qiming' });

    },
    toMyLikes: function toMyLikes() {
      uni.navigateTo({
        url: '../my-likes/my-likes' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 19)["default"]))

/***/ }),

/***/ 81:
/*!****************************************************************************************!*\
  !*** D:/uniapp/qiming/pages/name-list/name-list.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./name-list.vue?vue&type=style&index=0&lang=scss& */ 82);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_name_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/qiming/pages/name-list/name-list.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[75,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi91bmlhcHAvcWltaW5nL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlP2FiMDEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9xaW1pbmcvcGFnZXMvbmFtZS1saXN0L25hbWUtbGlzdC52dWU/MGU2ZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3FpbWluZy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZT9hZmIxIiwidW5pLWFwcDovLy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3FpbWluZy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZT8yOGIxIiwid2VicGFjazovLy9EOi91bmlhcHAvcWltaW5nL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlPzk2YjMiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ3RIO0FBQzZEO0FBQ0w7QUFDYzs7O0FBR3RFO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaVJBRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLHNLQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQXNtQixDQUFnQixtbkJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tEMW5CO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxvQkFGQTtBQUdBLHNCQUhBOztBQUtBLEdBUEE7QUFRQTtBQUNBLGdCQURBLEVBUkE7O0FBV0EsUUFYQSxrQkFXQSxNQVhBLEVBV0E7QUFDQTtBQUNBOzs7O0FBSUEsR0FqQkE7QUFrQkE7QUFDQSxrQkFEQSw0QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGNBRkE7OztBQUtBLE9BVkE7QUFXQTtBQUNBLEtBZkEsRUFsQkE7O0FBbUNBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBOzs7QUFHQSxLQUxBO0FBTUEsV0FOQSxxQkFNQTtBQUNBO0FBQ0EsaUNBREEsSUFEQTs7QUFJQTtBQUNBLHNDQURBO0FBRUE7QUFDQSxxREFEQSxFQUZBLEdBSkEsU0FJQSxHQUpBOzs7QUFVQSwwQkFWQSxHQVVBLGVBVkE7QUFXQSwrQkFYQSxHQVdBLEVBWEE7QUFZQTtBQUNBLGlDQURBLEdBQ0EsdUJBREE7QUFFQSx5QkFGQSxHQUVBLGtDQUZBO0FBR0E7QUFDQTtBQUNBLG1CQUZBO0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBaEJBLEdBZ0JBLHFCQWhCQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQXJCQSxHQXFCQSxxQ0FyQkE7QUFzQkEsMkJBdEJBLEdBc0JBLHFDQXRCQTtBQXVCQSwyQkF2QkEsR0F1QkEsd0JBdkJBO0FBd0JBLDRCQXhCQSxHQXdCQSx3QkF4QkE7QUF5QkEsNEJBekJBLEdBeUJBLHNCQXpCQTs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBN0NBO0FBOENBLDBCQTlDQTs7O0FBaURBLEtBdkRBO0FBd0RBLFVBeERBLGtCQXdEQSxHQXhEQSxFQXdEQSxHQXhEQSxFQXdEQTtBQUNBO0FBQ0EsS0ExREE7QUEyREE7QUFDQSxhQTVEQSxxQkE0REEsR0E1REEsRUE0REEsR0E1REEsRUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQXRFQTtBQXVFQSxjQXZFQSxzQkF1RUEsS0F2RUEsRUF1RUE7O0FBRUEsa0NBRkEsU0FFQSxVQUZBO0FBR0EscUJBSEEsR0FHQSxFQUhBO0FBSUE7QUFDQTtBQUNBLGlCQUZBLEVBSkE7O0FBUUE7QUFDQSxzQ0FEQTtBQUVBO0FBQ0Esa0NBREEsRUFGQSxHQVJBLFNBUUEsR0FSQTs7O0FBY0EseUJBZEEsR0FjQSxlQWRBO0FBZUE7QUFDQTtBQUNBLGlCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkE7QUFHQSxpQkFKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxFQTVCQTs7QUFnQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBQ0Esa0NBREEsRUFGQSxHQWhDQSxVQWdDQSxJQWhDQTs7O0FBc0NBLG9CQXRDQSxHQXNDQSxnQkF0Q0E7O0FBd0NBO0FBQ0E7QUFDQSxpQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFOQTtBQU9BO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakVBLDhFQWtFQSxDQXpJQTtBQTBJQSxXQTFJQSxtQkEwSUEsS0ExSUEsRUEwSUE7QUFDQSx1Q0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxtQkFIQSxFQUdBLEtBSEEsQ0FHQTtBQUNBLG1CQUpBLENBSEE7OztBQVVBLGdEQVZBOzs7QUFhQSxLQXZKQTtBQXdKQSxZQXhKQSxvQkF3SkEsS0F4SkEsRUF3SkE7QUFDQTtBQUNBO0FBQ0EsMkVBREE7O0FBR0EsS0E3SkE7QUE4SkEsYUE5SkEsdUJBOEpBO0FBQ0E7QUFDQSxtQ0FEQTs7QUFHQSxLQWxLQSxFQW5DQSxFOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQTJtQyxDQUFnQiw2akNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0EvbkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2EyMWE4OCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2EyMWE4OCZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVuaU5hdkJhcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInVuaV9tb2R1bGVzL3VuaS1uYXYtYmFyL2NvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXJcIiAqLyBcIkAvdW5pX21vZHVsZXMvdW5pLW5hdi1iYXIvY29tcG9uZW50cy91bmktbmF2LWJhci91bmktbmF2LWJhci52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgbGlrZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL2xpa2VzL2xpa2VzXCIgKi8gXCJAL2NvbXBvbmVudHMvbGlrZXMvbGlrZXMudnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBsMSA9IF92bS5fX21hcChfdm0ucG9ldHJ5TGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgdmFyIGwwID0gX3ZtLnBvZXRyeUxpc3RbaW5kZXhdLmNvbnRlbnQuc3BsaXQoXCJcIilcbiAgICByZXR1cm4ge1xuICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgbDA6IGwwXG4gICAgfVxuICB9KVxuXG4gIGlmICghX3ZtLl9pc01vdW50ZWQpIHtcbiAgICBfdm0uZTAgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2woMTApXG4gICAgfVxuICB9XG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMTogbDFcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm5hbWUtbGlzdFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJuYXYtYmFyXCI+XHJcblx0XHRcdDx1bmktbmF2LWJhciB0aXRsZT1cIuWIl+ihqFwiIHN0YXR1c0Jhcj1cInRydWVcIiBsZWZ0SWNvbj1cImJhY2tcIiBAY2xpY2tMZWZ0PVwiZ29CYWNrXCI+PC91bmktbmF2LWJhcj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwic2Nyb2xsXCIgPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXkgY2xhc3M9XCJzY3JvbGwtbGlzdFwiID5cclxuXHRcdFx0XHQ8dmlldyA+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1pdGVtXCIgIEBjbGljaz1cInRvRGV0YWlsKGluZGV4KVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHBvZXRyeUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1oZWFkXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD57eyfor4TliIY6JytpdGVtLnNhbkNhaVd1R2UudG90YWxTb3JlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0LW1pZGRsZVwiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0Pnt7J+OAjCcraXRlbS5jb250ZW50KyfjgI0nfX08L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuOAjDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWZvcj1cIih3b3JkLG4pIGluIHBvZXRyeUxpc3RbaW5kZXhdLmNvbnRlbnQuc3BsaXQoJycpXCIgOmtleT1cIm5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0OmNsYXNzPVwie2hpZ2hsaWdodDogbiA9PSBoaWdobGlnaHRJbmRleFtpbmRleF0uZiB8fCBuID09IGhpZ2hsaWdodEluZGV4W2luZGV4XS5zfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3t3b3JkfX1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7jgI08L3RleHQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD57e2l0ZW0udGl0bGV9feKAont7aXRlbS5hdXRob3IgfHwgJ+S9muWQjSd9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0IDpjbGFzcz1cImlzTGlrZSA/J2ljb25mb250IGljb24tYWl4aW4xJzonaWNvbmZvbnQgaWNvbi1haXhpbidcIiAgQGNsaWNrLnN0b3A9XCJsaWtlKClcIj48L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxsaWtlcyA6aXRlbT1cIml0ZW1cIiA6cGFnZT1cInBhZ2VcIj48L2xpa2VzPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmb290ZXJcIiA+XHJcblx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibWluaVwiIEBjbGljaz1cInRvTXlMaWtlc1wiPuaIkeeahOaUtuiXjzwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cIm1pbmlcIiBAY2xpY2s9XCJ0aGlzLmNvbnRyb2woMTApXCI+5o2i5LiA5om5PC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG5cclxuXHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvLyA6Y2xhc3M9XCJ7aGlnaGxpZ2h0OiBuLTEgPT09IGhpZ2hsaWdodEluZGV4W24tMV0uZiB8fCBuLTEgPT09IGhpZ2hsaWdodEluZGV4W24tMV0uc31cIlxyXG5cdGltcG9ydCBsaWtlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpa2VzL2xpa2VzLnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGZvcm1EYXRhOiB7fSxcclxuXHRcdFx0XHRwb2V0cnlMaXN0OiBbXSxcclxuXHRcdFx0XHRwYWdlOiduYW1lTGlzdCdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6e1xyXG5cdFx0XHRsaWtlc1xyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb24pIHtcclxuXHRcdFx0dGhpcy5mb3JtRGF0YSA9IEpTT04ucGFyc2Uob3B0aW9uLmZvcm1EYXRhKVxyXG5cdFx0XHR0aGlzLmNvbnRyb2woMTApXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0aGlnaGxpZ2h0SW5kZXgoKSB7XHJcblx0XHRcdFx0bGV0IG9iaiA9IFtdXHJcblx0XHRcdFx0dGhpcy5wb2V0cnlMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgbmFtZSA9IGl0ZW0ubmFtZVxyXG5cdFx0XHRcdFx0bGV0IGNvbnRlbnQgPSBpdGVtLmNvbnRlbnRcclxuXHRcdFx0XHRcdGxldCBmID0gY29udGVudC5pbmRleE9mKG5hbWUuc2xpY2UoMSwgMikpXHJcblx0XHRcdFx0XHRsZXQgcyA9IGNvbnRlbnQuaW5kZXhPZihuYW1lLnNsaWNlKDIsIDMpKVxyXG5cdFx0XHRcdFx0b2JqLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRmOiBmLFxyXG5cdFx0XHRcdFx0XHRzOiBzXHJcblx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBvYmpcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z29CYWNrKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBnZXROYW1lKCkge1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+eojeetiS4uLicsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiZ2V0X3BvZXRyeVwiLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdHR5cGU6dGhpcy5mb3JtRGF0YS5wb2V0cnlUeXBlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRsZXQgcG9ldHJ5TGlzdCA9IHJlcy5yZXN1bHQuZGF0YVxyXG5cdFx0XHRcdGxldCByYW5kb21OYW1lQXJyYXkgPSBbXVxyXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiBwb2V0cnlMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgY29tcGxldGVDb250ZW50ID0gcG9ldHJ5TGlzdFtrZXldLmNvbnRlbnRcclxuXHRcdFx0XHRcdGxldCBjb250ZW50ID0gcG9ldHJ5TGlzdFtrZXldLmNvbnRlbnQuc3BsaXQoJ+OAgicpXHJcblx0XHRcdFx0XHRjb250ZW50ID0gY29udGVudC5maWx0ZXIoKHMpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHMgJiYgcy50cmltKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnRbdGhpcy5SYW5kb20oMCwgY29udGVudC5sZW5ndGggLSAxKV1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdFtrZXldLmNvbnRlbnQgPSBjb250ZW50XHJcblx0XHRcdFx0XHRwb2V0cnlMaXN0W2tleV0uY29tcGxldGVDb250ZW50ID0gY29tcGxldGVDb250ZW50XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIGxldCBjb250ZW50MSA9IGNvbnRlbnQuc3BsaXQoJ++8jCcpWzBdXHJcblx0XHRcdFx0XHQvLyBsZXQgY29udGVudDIgPSBjb250ZW50LnNwbGl0KCfvvIwnKVsxXVxyXG5cdFx0XHRcdFx0Ly8gaWYoIWNvbnRlbnQxIHx8ICFjb250ZW50Mil7XHJcblx0XHRcdFx0XHQvLyBcdHJldHVyblxyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0bGV0IHJlZyA9IC8oW1xcdTRlMDAtXFx1OWZhNV0pKy9nXHJcblx0XHRcdFx0XHQvLyBsZXQgY29udGVudFN0cjEgPSBjb250ZW50MS5tYXRjaChyZWcpLmpvaW4oXCJcIilcclxuXHRcdFx0XHRcdC8vIGxldCBjb250ZW50U3RyMiA9IGNvbnRlbnQyLm1hdGNoKHJlZykuam9pbihcIlwiKVxyXG5cdFx0XHRcdFx0Ly8gY29udGVudFN0cjEgPSBjb250ZW50U3RyMS5zcGxpdCgnJylcclxuXHRcdFx0XHRcdC8vIGNvbnRlbnRTdHIyID0gY29udGVudFN0cjIuc3BsaXQoJycpXHJcblx0XHRcdFx0XHRsZXQgY29udGVudFN0ciA9IGNvbnRlbnQubWF0Y2gocmVnKS5qb2luKFwiXCIpLnNwbGl0KFwiXCIpXHJcblx0XHRcdFx0XHRsZXQgcmFuZG9tTnVtID0gdGhpcy5yYW5kb21OdW0oMCxjb250ZW50U3RyLmxlbmd0aClcclxuXHRcdFx0XHRcdGxldCBmaXJzdFdvcmQgPSBjb250ZW50U3RyW3JhbmRvbU51bVswXV1cclxuXHRcdFx0XHRcdGxldCBzZWNvbmRXb3JkID0gY29udGVudFN0cltyYW5kb21OdW1bMV1dXHJcblx0XHRcdFx0XHRsZXQgcmFuZG9tTmFtZSA9IGZpcnN0V29yZCArIHNlY29uZFdvcmQgXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIGZvciAobGV0IG4gPSAwIDtuIDwgMiA7IG4gKyspIHtcclxuXHRcdFx0XHRcdC8vIFx0cmFuZG9tTmFtZSs9Y29udGVudFN0clt0aGlzLlJhbmRvbSgwLGNvbnRlbnRTdHIubGVuZ3RoLTEpXVxyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0Ly8gcmFuZG9tTmFtZSA9IGNvbnRlbnRTdHIxW3RoaXMuUmFuZG9tKDAsIGNvbnRlbnRTdHIxLmxlbmd0aCAtIDEpXSArIGNvbnRlbnRTdHIyW3RoaXNcclxuXHRcdFx0XHRcdC8vIFx0LlJhbmRvbSgwLCBjb250ZW50U3RyMi5sZW5ndGggLSAxKV1cclxuXHRcdFx0XHRcdHBvZXRyeUxpc3Rba2V5XS5uYW1lID0gdGhpcy5mb3JtRGF0YS5maXJzdE5hbWUrIHJhbmRvbU5hbWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHBvZXRyeUxpc3RcclxuXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRSYW5kb20obWluLCBtYXgpIHtcclxuXHRcdFx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WPluS4pOS4qumaj+acuuaVsCBcclxuXHRcdFx0cmFuZG9tTnVtKG1pbiwgbWF4KSB7XHJcblx0XHRcdFx0bGV0IG51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcblx0XHRcdFx0ICAgIGxldCBudW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG51bTEgLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0XHRcdFx0ICAgIGlmIChudW0xID09PSBudW0yKSB7XHJcblx0XHRcdFx0ICAgICAgICBudW0xKytcclxuXHRcdFx0XHQgICAgfSBlbHNlIGlmIChudW0xID09PSBtYXgpIHtcclxuXHRcdFx0XHQgICAgICAgIG51bTItLVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIHJldHVybiBbbnVtMixudW0xXVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBmaWx0ZXJOYW1lKGNvdW50KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcG9ldHJ5TGlzdCA9IGF3YWl0IHRoaXMuZ2V0TmFtZSgpXHJcblx0XHRcdFx0XHRsZXQgbmFtZXMgPSBbXVxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRuYW1lcy5wdXNoKHZhbHVlLm5hbWUpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJnZXRfZ2VuZGVyXCIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lczogbmFtZXNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGxldCBnZW5kZXJSZXMgPSByZXMucmVzdWx0LmRhdGFcclxuXHRcdFx0XHRcdGdlbmRlclJlcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblx0XHRcdFx0XHRcdHBvZXRyeUxpc3Rba2V5XS5zZXggPSB2YWx1ZS5nZW5kZXJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRpZiAodGhpcy5mb3JtRGF0YS5zZXggPT09IFwi55S3XCIpIHtcclxuXHRcdFx0XHRcdFx0cG9ldHJ5TGlzdCA9IHBvZXRyeUxpc3QuZmlsdGVyKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUuc2V4ID09PSBcIm1hbGVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmZvcm1EYXRhLnNleCA9PT0gXCLlpbNcIikge1xyXG5cdFx0XHRcdFx0XHRwb2V0cnlMaXN0ID0gcG9ldHJ5TGlzdC5maWx0ZXIodmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZS5zZXggPT09IFwiZmVtYWxlXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG5hbWVzID0gW11cclxuXHRcdFx0XHRcdHBvZXRyeUxpc3QuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdFx0bmFtZXMucHVzaCh2YWx1ZS5uYW1lKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IHJlczEgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcInd1Z2VcIixcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWVzOiBuYW1lc1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0bGV0IHd1R2UgPSByZXMxLnJlc3VsdC5kYXRhXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHd1R2UuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRwb2V0cnlMaXN0W2tleV0uc2FuQ2FpV3VHZSA9IHZhbHVlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0aWYodGhpcy5mb3JtRGF0YS5zY29yZSAhPT0n5LiN6ZmQJyl7XHJcblx0XHRcdFx0XHRcdHBvZXRyeUxpc3QgPSBwb2V0cnlMaXN0LmZpbHRlcih2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5mb3JtRGF0YS5zY29yZSA9PT0gJ+S4rScpe1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlLnNhbkNhaVd1R2UudG90YWxTb3JlID4gNTBcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZih0aGlzLmZvcm1EYXRhLnNjb3JlID09PSAn6auYJyl7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUuc2FuQ2FpV3VHZS50b3RhbFNvcmUgPiA3MFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMucG9ldHJ5TGlzdC5wdXNoKC4uLnBvZXRyeUxpc3QpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHBvZXRyeUxpc3QgPSBwb2V0cnlMaXN0LnNsaWNlKDAsIGNvdW50KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHQvLyBcdGlmIChwb2V0cnlMaXN0KSB7XHJcblx0XHRcdFx0Ly8gXHRcdHRoaXMucG9ldHJ5TGlzdC5wdXNoKC4uLnBvZXRyeUxpc3QpXHJcblx0XHRcdFx0Ly8gXHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBcdFx0cmVqZWN0KCdlcnJvcicpXHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgY29udHJvbChjb3VudCkge1xyXG5cdFx0XHRcdHRoaXMucG9ldHJ5TGlzdCA9IFtdXHJcblx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5maWx0ZXJOYW1lKCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBvZXRyeUxpc3QgPSB0aGlzLnBvZXRyeUxpc3Quc2xpY2UoMCwgY291bnQpXHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHR9KS5jYXRjaChlID0+IHtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR3aGlsZSAodGhpcy5wb2V0cnlMaXN0Lmxlbmd0aCA8IGNvdW50KVxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9EZXRhaWwoaW5kZXgpe1xyXG5cdFx0XHRcdGxldCBkYXRhTGlzdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMucG9ldHJ5TGlzdFtpbmRleF0pXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOicuLi9uYW1lLWRldGFpbC9uYW1lLWRldGFpbD9kYXRhPScrZGF0YUxpc3QrJyZ0eXBlPXFpbWluZydcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b015TGlrZXMoKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6Jy4uL215LWxpa2VzL215LWxpa2VzJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdHBhZ2Uge1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5uYW1lLWxpc3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC5zY3JvbGwge1xyXG5cdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA4MHJweDtcclxuXHRcdFx0LnNjcm9sbC1saXN0IHtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdC5saXN0LWl0ZW0ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMjBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC5saXN0LWhlYWQsXHJcblx0XHRcdFx0XHQubGlzdC1mb290ZXIge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5saXN0LW1pZGRsZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMjBycHggMDtcclxuXHJcblx0XHRcdFx0XHRcdHRleHQge1xyXG5cdFx0XHRcdFx0XHRcdCYuaGlnaGxpZ2h0IHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJGhpZ2hsaWdodDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lmxpc3QtaGVhZCB7XHJcblx0XHRcdFx0XHRcdHRleHQ6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNlZWEyYTQ7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lmxpc3QtZm9vdGVyIHtcclxuXHRcdFx0XHRcdFx0dGV4dDpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNTBycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmZvb3RlcntcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRidXR0b257XHJcblx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA4MCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRjb2xvcjogIzAwMDtcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjMzMzI0NjcwMzk2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==