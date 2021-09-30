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
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var likes = function likes() {__webpack_require__.e(/*! require.ensure | components/likes/likes */ "components/likes/likes").then((function () {return resolve(__webpack_require__(/*! ../../components/likes/likes.vue */ 126));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

















































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
    getName: function getName() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res, poetryList, randomNameArray, key, completeContent, content, content1, content2, reg, contentStr1, contentStr2, randomName;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                uni.showLoading({
                  title: '计算中,需要一点时间,请耐心等待' });_context.next = 3;return (

                  uniCloud.callFunction({
                    name: "get_poetry",
                    data: {
                      type: _this.formData.poetryType } }));case 3:res = _context.sent;


                poetryList = res.result.data;
                randomNameArray = [];_context.t0 = _regenerator.default.keys(
                poetryList);case 7:if ((_context.t1 = _context.t0()).done) {_context.next = 29;break;}key = _context.t1.value;
                completeContent = poetryList[key].content;
                content = poetryList[key].content.split('。');
                content = content.filter(function (s) {
                  return s && s.trim();
                });
                content = content[_this.Random(0, content.length - 1)];

                poetryList[key].content = content;
                poetryList[key].completeContent = completeContent;
                content1 = content.split('，')[0];
                content2 = content.split('，')[1];if (!(
                !content1 || !content2)) {_context.next = 19;break;}return _context.abrupt("return");case 19:


                reg = /([\u4e00-\u9fa5])+/g;
                contentStr1 = content1.match(reg).join("");
                contentStr2 = content2.match(reg).join("");


                // contentStr1 = contentStr1.replace(/\s*/g,"")
                contentStr1 = contentStr1.split('');
                // contentStr2 = contentStr2.replace(/\s*/g,"")
                contentStr2 = contentStr2.split('');
                randomName = '';

                // for (let n = 0 ;n < 2 ; n ++) {
                // 	randomName+=contentStr[this.Random(0,contentStr.length-1)]
                // }
                randomName = contentStr1[_this.Random(0, contentStr1.length - 1)] + contentStr2[_this.
                Random(0, contentStr2.length - 1)];
                poetryList[key].name = _this.formData.firstName + randomName;_context.next = 7;break;case 29:return _context.abrupt("return",



                poetryList);case 30:case "end":return _context.stop();}}}, _callee);}))();


    },
    Random: function Random(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
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
                    console.log(e);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 35)["default"]))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi91bmlhcHAvcWltaW5nL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlP2FiMDEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9xaW1pbmcvcGFnZXMvbmFtZS1saXN0L25hbWUtbGlzdC52dWU/MGU2ZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3FpbWluZy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZT9hZmIxIiwidW5pLWFwcDovLy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3FpbWluZy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZT8yOGIxIiwid2VicGFjazovLy9EOi91bmlhcHAvcWltaW5nL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlPzk2YjMiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ3RIO0FBQzZEO0FBQ0w7QUFDYzs7O0FBR3RFO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaVJBRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLHNLQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQXNtQixDQUFnQixtbkJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tEMW5CO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxvQkFGQTtBQUdBLHNCQUhBOztBQUtBLEdBUEE7QUFRQTtBQUNBLGdCQURBLEVBUkE7O0FBV0EsUUFYQSxrQkFXQSxNQVhBLEVBV0E7QUFDQTtBQUNBOzs7O0FBSUEsR0FqQkE7QUFrQkE7QUFDQSxrQkFEQSw0QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGNBRkE7OztBQUtBLE9BVkE7QUFXQTtBQUNBLEtBZkEsRUFsQkE7O0FBbUNBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBOzs7QUFHQSxLQUxBO0FBTUEsV0FOQSxxQkFNQTtBQUNBO0FBQ0EsMkNBREEsSUFEQTs7QUFJQTtBQUNBLHNDQURBO0FBRUE7QUFDQSxxREFEQSxFQUZBLEdBSkEsU0FJQSxHQUpBOzs7QUFVQSwwQkFWQSxHQVVBLGVBVkE7QUFXQSwrQkFYQSxHQVdBLEVBWEE7QUFZQSwwQkFaQSw0RUFZQSxHQVpBO0FBYUEsK0JBYkEsR0FhQSx1QkFiQTtBQWNBLHVCQWRBLEdBY0Esa0NBZEE7QUFlQTtBQUNBO0FBQ0EsaUJBRkE7QUFHQTs7QUFFQTtBQUNBO0FBQ0Esd0JBdEJBLEdBc0JBLHFCQXRCQTtBQXVCQSx3QkF2QkEsR0F1QkEscUJBdkJBO0FBd0JBLHNDQXhCQTs7O0FBMkJBLG1CQTNCQSxHQTJCQSxxQkEzQkE7QUE0QkEsMkJBNUJBLEdBNEJBLDRCQTVCQTtBQTZCQSwyQkE3QkEsR0E2QkEsNEJBN0JBOzs7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFwQ0EsR0FvQ0EsRUFwQ0E7O0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREEsQ0FDQSxDQURBLEVBQ0Esc0JBREE7QUFFQSw2RUEzQ0E7Ozs7QUErQ0EsMEJBL0NBOzs7QUFrREEsS0F4REE7QUF5REEsVUF6REEsa0JBeURBLEdBekRBLEVBeURBLEdBekRBLEVBeURBO0FBQ0E7QUFDQSxLQTNEQTtBQTREQSxjQTVEQSxzQkE0REEsS0E1REEsRUE0REE7O0FBRUEsa0NBRkEsU0FFQSxVQUZBO0FBR0EscUJBSEEsR0FHQSxFQUhBO0FBSUE7QUFDQTtBQUNBLGlCQUZBLEVBSkE7QUFPQTtBQUNBLHNDQURBO0FBRUE7QUFDQSxrQ0FEQSxFQUZBLEdBUEEsU0FPQSxHQVBBOzs7QUFhQSx5QkFiQSxHQWFBLGVBYkE7QUFjQTtBQUNBO0FBQ0EsaUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxtQkFGQTtBQUdBLGlCQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsbUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBLEVBM0JBOztBQStCQTtBQUNBLGdDQURBO0FBRUE7QUFDQSxrQ0FEQSxFQUZBLEdBL0JBLFVBK0JBLElBL0JBOzs7QUFxQ0Esb0JBckNBLEdBcUNBLGdCQXJDQTs7QUF1Q0E7QUFDQTtBQUNBLGlCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQU5BO0FBT0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoRUEsOEVBaUVBLENBN0hBO0FBOEhBLFdBOUhBLG1CQThIQSxLQTlIQSxFQThIQTtBQUNBLHVDQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQUhBLEVBR0EsS0FIQSxDQUdBO0FBQ0E7QUFDQSxtQkFMQSxDQUhBOzs7QUFXQSxnREFYQTs7O0FBY0EsS0E1SUE7QUE2SUEsWUE3SUEsb0JBNklBLEtBN0lBLEVBNklBO0FBQ0E7QUFDQTtBQUNBLDJFQURBOztBQUdBLEtBbEpBO0FBbUpBLGFBbkpBLHVCQW1KQTtBQUNBO0FBQ0EsbUNBREE7O0FBR0EsS0F2SkEsRUFuQ0EsRTs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUEybUMsQ0FBZ0IsNmpDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBL25DO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvbmFtZS1saXN0L25hbWUtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmNhMjFhODgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbmFtZS1saXN0L25hbWUtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmNhMjFhODgmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICB1bmlOYXZCYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1bmlfbW9kdWxlcy91bmktbmF2LWJhci9jb21wb25lbnRzL3VuaS1uYXYtYmFyL3VuaS1uYXYtYmFyXCIgKi8gXCJAL3VuaV9tb2R1bGVzL3VuaS1uYXYtYmFyL2NvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXIudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIGxpa2VzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy9saWtlcy9saWtlc1wiICovIFwiQC9jb21wb25lbnRzL2xpa2VzL2xpa2VzLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDEgPSBfdm0uX19tYXAoX3ZtLnBvZXRyeUxpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaXRlbSlcblxuICAgIHZhciBsMCA9IF92bS5wb2V0cnlMaXN0W2luZGV4XS5jb250ZW50LnNwbGl0KFwiXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIGwwOiBsMFxuICAgIH1cbiAgfSlcblxuICBpZiAoIV92bS5faXNNb3VudGVkKSB7XG4gICAgX3ZtLmUwID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sKDEwKVxuICAgIH1cbiAgfVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDE6IGwxXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJuYW1lLWxpc3RcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwibmF2LWJhclwiPlxyXG5cdFx0XHQ8dW5pLW5hdi1iYXIgdGl0bGU9XCLliJfooahcIiBzdGF0dXNCYXI9XCJ0cnVlXCIgbGVmdEljb249XCJiYWNrXCIgQGNsaWNrTGVmdD1cImdvQmFja1wiPjwvdW5pLW5hdi1iYXI+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInNjcm9sbFwiID5cclxuXHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15IGNsYXNzPVwic2Nyb2xsLWxpc3RcIiA+XHJcblx0XHRcdFx0PHZpZXcgPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3QtaXRlbVwiICBAY2xpY2s9XCJ0b0RldGFpbChpbmRleClcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBwb2V0cnlMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3QtaGVhZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0Pnt7aXRlbS5uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+e3sn6K+E5YiGOicraXRlbS5zYW5DYWlXdUdlLnRvdGFsU29yZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1taWRkbGVcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8dGV4dD57eyfjgIwnK2l0ZW0uY29udGVudCsn44CNJ319PC90ZXh0PiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7jgIw8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgdi1mb3I9XCIod29yZCxuKSBpbiBwb2V0cnlMaXN0W2luZGV4XS5jb250ZW50LnNwbGl0KCcnKVwiIDprZXk9XCJuXCJcclxuXHRcdFx0XHRcdFx0XHRcdDpjbGFzcz1cIntoaWdobGlnaHQ6IG4gPT0gaGlnaGxpZ2h0SW5kZXhbaW5kZXhdLmYgfHwgbiA9PSBoaWdobGlnaHRJbmRleFtpbmRleF0uc31cIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7d29yZH19XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+44CNPC90ZXh0PlxyXG5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3QtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+e3tpdGVtLnRpdGxlfX3igKJ7e2l0ZW0uYXV0aG9yIHx8ICfkvZrlkI0nfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8dGV4dCA6Y2xhc3M9XCJpc0xpa2UgPydpY29uZm9udCBpY29uLWFpeGluMSc6J2ljb25mb250IGljb24tYWl4aW4nXCIgIEBjbGljay5zdG9wPVwibGlrZSgpXCI+PC90ZXh0PiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8bGlrZXMgOml0ZW09XCJpdGVtXCIgOnBhZ2U9XCJwYWdlXCI+PC9saWtlcz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZm9vdGVyXCIgPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cIm1pbmlcIiBAY2xpY2s9XCJ0b015TGlrZXNcIj7miJHnmoTmlLbol488L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJtaW5pXCIgQGNsaWNrPVwidGhpcy5jb250cm9sKDEwKVwiPuaNouS4gOaJuTwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuXHJcblxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Ly8gOmNsYXNzPVwie2hpZ2hsaWdodDogbi0xID09PSBoaWdobGlnaHRJbmRleFtuLTFdLmYgfHwgbi0xID09PSBoaWdobGlnaHRJbmRleFtuLTFdLnN9XCJcclxuXHRpbXBvcnQgbGlrZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saWtlcy9saWtlcy52dWUnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRmb3JtRGF0YToge30sXHJcblx0XHRcdFx0cG9ldHJ5TGlzdDogW10sXHJcblx0XHRcdFx0cGFnZTonbmFtZUxpc3QnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0bGlrZXNcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRcdHRoaXMuZm9ybURhdGEgPSBKU09OLnBhcnNlKG9wdGlvbi5mb3JtRGF0YSlcclxuXHRcdFx0dGhpcy5jb250cm9sKDEwKVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGhpZ2hsaWdodEluZGV4KCkge1xyXG5cdFx0XHRcdGxldCBvYmogPSBbXVxyXG5cdFx0XHRcdHRoaXMucG9ldHJ5TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBpdGVtLm5hbWVcclxuXHRcdFx0XHRcdGxldCBjb250ZW50ID0gaXRlbS5jb250ZW50XHJcblx0XHRcdFx0XHRsZXQgZiA9IGNvbnRlbnQuaW5kZXhPZihuYW1lLnNsaWNlKDEsIDIpKVxyXG5cdFx0XHRcdFx0bGV0IHMgPSBjb250ZW50LmluZGV4T2YobmFtZS5zbGljZSgyLCAzKSlcclxuXHRcdFx0XHRcdG9iai5wdXNoKHtcclxuXHRcdFx0XHRcdFx0ZjogZixcclxuXHRcdFx0XHRcdFx0czogc1xyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gb2JqXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdvQmFjaygpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZ2V0TmFtZSgpIHtcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICforqHnrpfkuK0s6ZyA6KaB5LiA54K55pe26Ze0LOivt+iAkOW/g+etieW+hScsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiZ2V0X3BvZXRyeVwiLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdHR5cGU6dGhpcy5mb3JtRGF0YS5wb2V0cnlUeXBlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRsZXQgcG9ldHJ5TGlzdCA9IHJlcy5yZXN1bHQuZGF0YVxyXG5cdFx0XHRcdGxldCByYW5kb21OYW1lQXJyYXkgPSBbXVxyXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiBwb2V0cnlMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgY29tcGxldGVDb250ZW50ID0gcG9ldHJ5TGlzdFtrZXldLmNvbnRlbnRcclxuXHRcdFx0XHRcdGxldCBjb250ZW50ID0gcG9ldHJ5TGlzdFtrZXldLmNvbnRlbnQuc3BsaXQoJ+OAgicpXHJcblx0XHRcdFx0XHRjb250ZW50ID0gY29udGVudC5maWx0ZXIoKHMpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHMgJiYgcy50cmltKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnRbdGhpcy5SYW5kb20oMCwgY29udGVudC5sZW5ndGggLSAxKV1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdFtrZXldLmNvbnRlbnQgPSBjb250ZW50XHJcblx0XHRcdFx0XHRwb2V0cnlMaXN0W2tleV0uY29tcGxldGVDb250ZW50ID0gY29tcGxldGVDb250ZW50XHJcblx0XHRcdFx0XHRsZXQgY29udGVudDEgPSBjb250ZW50LnNwbGl0KCfvvIwnKVswXVxyXG5cdFx0XHRcdFx0bGV0IGNvbnRlbnQyID0gY29udGVudC5zcGxpdCgn77yMJylbMV1cclxuXHRcdFx0XHRcdGlmKCFjb250ZW50MSB8fCAhY29udGVudDIpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxldCByZWcgPSAvKFtcXHU0ZTAwLVxcdTlmYTVdKSsvZ1xyXG5cdFx0XHRcdFx0bGV0IGNvbnRlbnRTdHIxID0gY29udGVudDEubWF0Y2gocmVnKS5qb2luKFwiXCIpXHJcblx0XHRcdFx0XHRsZXQgY29udGVudFN0cjIgPSBjb250ZW50Mi5tYXRjaChyZWcpLmpvaW4oXCJcIilcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvLyBjb250ZW50U3RyMSA9IGNvbnRlbnRTdHIxLnJlcGxhY2UoL1xccyovZyxcIlwiKVxyXG5cdFx0XHRcdFx0Y29udGVudFN0cjEgPSBjb250ZW50U3RyMS5zcGxpdCgnJylcclxuXHRcdFx0XHRcdC8vIGNvbnRlbnRTdHIyID0gY29udGVudFN0cjIucmVwbGFjZSgvXFxzKi9nLFwiXCIpXHJcblx0XHRcdFx0XHRjb250ZW50U3RyMiA9IGNvbnRlbnRTdHIyLnNwbGl0KCcnKVxyXG5cdFx0XHRcdFx0bGV0IHJhbmRvbU5hbWUgPSAnJ1xyXG5cclxuXHRcdFx0XHRcdC8vIGZvciAobGV0IG4gPSAwIDtuIDwgMiA7IG4gKyspIHtcclxuXHRcdFx0XHRcdC8vIFx0cmFuZG9tTmFtZSs9Y29udGVudFN0clt0aGlzLlJhbmRvbSgwLGNvbnRlbnRTdHIubGVuZ3RoLTEpXVxyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0cmFuZG9tTmFtZSA9IGNvbnRlbnRTdHIxW3RoaXMuUmFuZG9tKDAsIGNvbnRlbnRTdHIxLmxlbmd0aCAtIDEpXSArIGNvbnRlbnRTdHIyW3RoaXNcclxuXHRcdFx0XHRcdFx0LlJhbmRvbSgwLCBjb250ZW50U3RyMi5sZW5ndGggLSAxKV1cclxuXHRcdFx0XHRcdHBvZXRyeUxpc3Rba2V5XS5uYW1lID0gdGhpcy5mb3JtRGF0YS5maXJzdE5hbWUrIHJhbmRvbU5hbWVcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBwb2V0cnlMaXN0XHJcblxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0UmFuZG9tKG1pbiwgbWF4KSB7XHJcblx0XHRcdFx0cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZmlsdGVyTmFtZShjb3VudCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IHBvZXRyeUxpc3QgPSBhd2FpdCB0aGlzLmdldE5hbWUoKVxyXG5cdFx0XHRcdFx0bGV0IG5hbWVzID0gW11cclxuXHRcdFx0XHRcdHBvZXRyeUxpc3QuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdFx0bmFtZXMucHVzaCh2YWx1ZS5uYW1lKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGxldCByZXMgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcImdldF9nZW5kZXJcIixcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWVzOiBuYW1lc1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0bGV0IGdlbmRlclJlcyA9IHJlcy5yZXN1bHQuZGF0YVxyXG5cdFx0XHRcdFx0Z2VuZGVyUmVzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuXHRcdFx0XHRcdFx0cG9ldHJ5TGlzdFtrZXldLnNleCA9IHZhbHVlLmdlbmRlclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGlmICh0aGlzLmZvcm1EYXRhLnNleCA9PT0gXCLnlLdcIikge1xyXG5cdFx0XHRcdFx0XHRwb2V0cnlMaXN0ID0gcG9ldHJ5TGlzdC5maWx0ZXIodmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZS5zZXggPT09IFwibWFsZVwiXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZm9ybURhdGEuc2V4ID09PSBcIuWls1wiKSB7XHJcblx0XHRcdFx0XHRcdHBvZXRyeUxpc3QgPSBwb2V0cnlMaXN0LmZpbHRlcih2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlLnNleCA9PT0gXCJmZW1hbGVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bmFtZXMgPSBbXVxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRuYW1lcy5wdXNoKHZhbHVlLm5hbWUpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcmVzMSA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwid3VnZVwiLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0bmFtZXM6IG5hbWVzXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRsZXQgd3VHZSA9IHJlczEucmVzdWx0LmRhdGFcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0d3VHZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblx0XHRcdFx0XHRcdHBvZXRyeUxpc3Rba2V5XS5zYW5DYWlXdUdlID0gdmFsdWVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRpZih0aGlzLmZvcm1EYXRhLnNjb3JlICE9PSfkuI3pmZAnKXtcclxuXHRcdFx0XHRcdFx0cG9ldHJ5TGlzdCA9IHBvZXRyeUxpc3QuZmlsdGVyKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZih0aGlzLmZvcm1EYXRhLnNjb3JlID09PSAn5LitJyl7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUuc2FuQ2FpV3VHZS50b3RhbFNvcmUgPiA1MFxyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmKHRoaXMuZm9ybURhdGEuc2NvcmUgPT09ICfpq5gnKXtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZS5zYW5DYWlXdUdlLnRvdGFsU29yZSA+IDcwXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5wb2V0cnlMaXN0LnB1c2goLi4ucG9ldHJ5TGlzdClcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdCA9IHBvZXRyeUxpc3Quc2xpY2UoMCwgY291bnQpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0aWYgKHBvZXRyeUxpc3QpIHtcclxuXHRcdFx0XHQvLyBcdFx0dGhpcy5wb2V0cnlMaXN0LnB1c2goLi4ucG9ldHJ5TGlzdClcclxuXHRcdFx0XHQvLyBcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIFx0XHRyZWplY3QoJ2Vycm9yJylcclxuXHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjb250cm9sKGNvdW50KSB7XHJcblx0XHRcdFx0dGhpcy5wb2V0cnlMaXN0ID0gW11cclxuXHRcdFx0XHRkbyB7XHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLmZpbHRlck5hbWUoKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMucG9ldHJ5TGlzdCA9IHRoaXMucG9ldHJ5TGlzdC5zbGljZSgwLCBjb3VudClcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdH0pLmNhdGNoKGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHdoaWxlICh0aGlzLnBvZXRyeUxpc3QubGVuZ3RoIDwgY291bnQpXHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0RldGFpbChpbmRleCl7XHJcblx0XHRcdFx0bGV0IGRhdGFMaXN0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wb2V0cnlMaXN0W2luZGV4XSlcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6Jy4uL25hbWUtZGV0YWlsL25hbWUtZGV0YWlsP2RhdGE9JytkYXRhTGlzdCsnJnR5cGU9cWltaW5nJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvTXlMaWtlcygpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDonLi4vbXktbGlrZXMvbXktbGlrZXMnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0cGFnZSB7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0Lm5hbWUtbGlzdCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0LnNjcm9sbCB7XHJcblx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDgwcnB4O1xyXG5cdFx0XHQuc2Nyb2xsLWxpc3Qge1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0Lmxpc3QtaXRlbSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAzMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAyMHJweDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Lmxpc3QtaGVhZCxcclxuXHRcdFx0XHRcdC5saXN0LWZvb3RlciB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lmxpc3QtbWlkZGxlIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMHJweCAwO1xyXG5cclxuXHRcdFx0XHRcdFx0dGV4dCB7XHJcblx0XHRcdFx0XHRcdFx0Ji5oaWdobGlnaHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzNXJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAkaGlnaGxpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubGlzdC1oZWFkIHtcclxuXHRcdFx0XHRcdFx0dGV4dDpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2VlYTJhNDtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubGlzdC1mb290ZXIge1xyXG5cdFx0XHRcdFx0XHR0ZXh0Om50aC1jaGlsZCgyKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA1MHJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuZm9vdGVye1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGJ1dHRvbntcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDgwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGNvbG9yOiAjMDAwO1x0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzMwMDY5MzY4NDBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9