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
      return __webpack_require__.e(/*! import() | uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar */ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue */ 105))
    },
    likes: function() {
      return __webpack_require__.e(/*! import() | components/likes/likes */ "components/likes/likes").then(__webpack_require__.bind(null, /*! @/components/likes/likes.vue */ 140))
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
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var likes = function likes() {__webpack_require__.e(/*! require.ensure | components/likes/likes */ "components/likes/likes").then((function () {return resolve(__webpack_require__(/*! ../../components/likes/likes.vue */ 140));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
























































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
    filterName: function filterName(count) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var poetryList, names, res, genderRes, res1, wuGe;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (

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
                // this.poetryList.push(...poetryList)

                // poetryList = poetryList.slice(0, count)
                return _context2.abrupt("return",


                new Promise(function (resolve, reject) {
                  if (poetryList) {var _this2$poetryList;
                    (_this2$poetryList = _this2.poetryList).push.apply(_this2$poetryList, _toConsumableArray(poetryList));
                    resolve();
                  } else {
                    reject('error');
                  }
                }));case 20:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    control: function control(count) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                _this3.poetryList = [];case 1:_context3.next = 3;return (


                  _this3.filterName().then(function (res) {

                    _this3.poetryList = _this3.poetryList.slice(0, count);
                    console.log(_this3.poetryList.length);
                    uni.hideLoading();
                  }).catch(function (e) {
                  }));case 3:if (


                _this3.poetryList.length < count) {_context3.next = 1;break;}case 4:case "end":return _context3.stop();}}}, _callee3);}))();


    },
    toDetail: function toDetail(index) {

      var dataList = JSON.stringify(this.poetryList[index]);

      var date = JSON.stringify({ date: this.formData.date, lunar: this.formData.lunar });
      uni.navigateTo({
        url: '../name-detail/name-detail?data=' + dataList + '&type=qiming' + '&date=' + date });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi91bmlhcHAvcWltaW5nL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlP2FiMDEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9xaW1pbmcvcGFnZXMvbmFtZS1saXN0L25hbWUtbGlzdC52dWU/MGU2ZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3FpbWluZy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZT9hZmIxIiwidW5pLWFwcDovLy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3FpbWluZy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZT8yOGIxIiwid2VicGFjazovLy9EOi91bmlhcHAvcWltaW5nL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlPzk2YjMiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ3RIO0FBQzZEO0FBQ0w7QUFDYzs7O0FBR3RFO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa1JBRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLHNLQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQXNtQixDQUFnQixtbkJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN5RDFuQjtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsb0JBRkE7QUFHQSxzQkFIQTs7O0FBTUEsR0FSQTtBQVNBO0FBQ0EsZ0JBREEsRUFUQTs7QUFZQSxRQVpBLGtCQVlBLE1BWkEsRUFZQTtBQUNBO0FBQ0E7Ozs7QUFJQSxHQWxCQTtBQW1CQTtBQUNBLGtCQURBLDRCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTs7O0FBS0EsT0FWQTtBQVdBO0FBQ0EsS0FmQSxFQW5CQTs7O0FBcUNBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBOzs7QUFHQSxLQUxBO0FBTUEsV0FOQSxxQkFNQTtBQUNBO0FBQ0EsaUNBREEsSUFEQTs7QUFJQTtBQUNBLHNDQURBO0FBRUE7QUFDQSxxREFEQSxFQUZBLEdBSkEsU0FJQSxHQUpBOzs7QUFVQSwwQkFWQSxHQVVBLGVBVkE7QUFXQSwrQkFYQSxHQVdBLEVBWEE7QUFZQTtBQUNBLGlDQURBLEdBQ0EsdUJBREE7QUFFQSx5QkFGQSxHQUVBLGtDQUZBO0FBR0E7QUFDQTtBQUNBLG1CQUZBO0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBaEJBLEdBZ0JBLHFCQWhCQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQXJCQSxHQXFCQSxxQ0FyQkE7QUFzQkEsMkJBdEJBLEdBc0JBLHFDQXRCQTtBQXVCQSwyQkF2QkEsR0F1QkEsd0JBdkJBO0FBd0JBLDRCQXhCQSxHQXdCQSx3QkF4QkE7QUF5QkEsNEJBekJBLEdBeUJBLHNCQXpCQTs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBN0NBO0FBOENBLDBCQTlDQTs7O0FBaURBLEtBdkRBO0FBd0RBLFVBeERBLGtCQXdEQSxHQXhEQSxFQXdEQSxHQXhEQSxFQXdEQTtBQUNBO0FBQ0EsS0ExREE7QUEyREE7QUFDQSxhQTVEQSxxQkE0REEsR0E1REEsRUE0REEsR0E1REEsRUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQXRFQTtBQXVFQSxjQXZFQSxzQkF1RUEsS0F2RUEsRUF1RUE7O0FBRUEsa0NBRkEsU0FFQSxVQUZBO0FBR0EscUJBSEEsR0FHQSxFQUhBO0FBSUE7QUFDQTtBQUNBLGlCQUZBLEVBSkE7O0FBUUE7QUFDQSxzQ0FEQTtBQUVBO0FBQ0Esa0NBREEsRUFGQSxHQVJBLFNBUUEsR0FSQTs7O0FBY0EseUJBZEEsR0FjQSxlQWRBO0FBZUE7QUFDQTtBQUNBLGlCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkE7QUFHQSxpQkFKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxFQTVCQTs7QUFnQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBQ0Esa0NBREEsRUFGQSxHQWhDQSxVQWdDQSxJQWhDQTs7O0FBc0NBLG9CQXRDQSxHQXNDQSxnQkF0Q0E7O0FBd0NBO0FBQ0E7QUFDQSxpQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFOQTtBQU9BO0FBQ0E7O0FBRUE7QUF0REE7OztBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsaUJBUEEsQ0ExREE7QUFrRUEsS0F6SUE7QUEwSUEsV0ExSUEsbUJBMElBLEtBMUlBLEVBMElBO0FBQ0EsdUNBREE7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUxBLEVBS0EsS0FMQSxDQUtBO0FBQ0EsbUJBTkEsQ0FKQTs7O0FBYUEsZ0RBYkE7OztBQWdCQSxLQTFKQTtBQTJKQSxZQTNKQSxvQkEySkEsS0EzSkEsRUEySkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDZGQURBOztBQUdBLEtBbktBO0FBb0tBLGFBcEtBLHVCQW9LQTtBQUNBO0FBQ0EsbUNBREE7O0FBR0EsS0F4S0EsRUFyQ0EsRTs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUEybUMsQ0FBZ0IsNmpDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBL25DO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvbmFtZS1saXN0L25hbWUtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmNhMjFhODgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbmFtZS1saXN0L25hbWUtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmNhMjFhODgmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICB1bmlOYXZCYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1bmlfbW9kdWxlcy91bmktbmF2LWJhci9jb21wb25lbnRzL3VuaS1uYXYtYmFyL3VuaS1uYXYtYmFyXCIgKi8gXCJAL3VuaV9tb2R1bGVzL3VuaS1uYXYtYmFyL2NvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXIudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIGxpa2VzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy9saWtlcy9saWtlc1wiICovIFwiQC9jb21wb25lbnRzL2xpa2VzL2xpa2VzLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDEgPSBfdm0uX19tYXAoX3ZtLnBvZXRyeUxpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaXRlbSlcblxuICAgIHZhciBsMCA9IF92bS5wb2V0cnlMaXN0W2luZGV4XS5jb250ZW50LnNwbGl0KFwiXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIGwwOiBsMFxuICAgIH1cbiAgfSlcblxuICBpZiAoIV92bS5faXNNb3VudGVkKSB7XG4gICAgX3ZtLmUwID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sKDEwKVxuICAgIH1cbiAgfVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDE6IGwxXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJuYW1lLWxpc3RcIj5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJuYXYtYmFyXCI+XHJcblx0XHRcdDx1bmktbmF2LWJhciB0aXRsZT1cIuWIl+ihqFwiIHN0YXR1c0Jhcj1cInRydWVcIiBsZWZ0SWNvbj1cImJhY2tcIiBAY2xpY2tMZWZ0PVwiZ29CYWNrXCIgPjwvdW5pLW5hdi1iYXI+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwic2Nyb2xsXCIgPlxyXG5cdFx0XHQ8IS0tIDxjaXJjbGUgOnA9XCJwXCI+PC9jaXJjbGU+IC0tPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXkgY2xhc3M9XCJzY3JvbGwtbGlzdFwiID5cclxuXHRcdFx0XHQ8dmlldyA+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1pdGVtXCIgIEBjbGljaz1cInRvRGV0YWlsKGluZGV4KVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHBvZXRyeUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1oZWFkXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD57eyfor4TliIY6JytpdGVtLnNhbkNhaVd1R2UudG90YWxTb3JlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0LW1pZGRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1taWRkbGUtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8dGV4dD57eyfjgIwnK2l0ZW0uY29udGVudCsn44CNJ319PC90ZXh0PiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0PuOAjDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtZm9yPVwiKHdvcmQsbikgaW4gcG9ldHJ5TGlzdFtpbmRleF0uY29udGVudC5zcGxpdCgnJylcIiA6a2V5PVwiblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpjbGFzcz1cIntoaWdobGlnaHQ6IG4gPT0gaGlnaGxpZ2h0SW5kZXhbaW5kZXhdLmYgfHwgbiA9PSBoaWdobGlnaHRJbmRleFtpbmRleF0uc31cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3t3b3JkfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7jgI08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1taWRkbGUtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0PuivpuaDhTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD57e2l0ZW0udGl0bGV9feKAont7aXRlbS5hdXRob3IgfHwgJ+S9muWQjSd9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0IDpjbGFzcz1cImlzTGlrZSA/J2ljb25mb250IGljb24tYWl4aW4xJzonaWNvbmZvbnQgaWNvbi1haXhpbidcIiAgQGNsaWNrLnN0b3A9XCJsaWtlKClcIj48L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxsaWtlcyA6aXRlbT1cIml0ZW1cIiA6cGFnZT1cInBhZ2VcIj48L2xpa2VzPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmb290ZXJcIiA+XHJcblx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibWluaVwiIEBjbGljaz1cInRvTXlMaWtlc1wiPuaIkeeahOaUtuiXjzwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cIm1pbmlcIiBAY2xpY2s9XCJ0aGlzLmNvbnRyb2woMTApXCI+5o2i5LiA5om5PC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG5cclxuXHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvLyA6Y2xhc3M9XCJ7aGlnaGxpZ2h0OiBuLTEgPT09IGhpZ2hsaWdodEluZGV4W24tMV0uZiB8fCBuLTEgPT09IGhpZ2hsaWdodEluZGV4W24tMV0uc31cIlxyXG5cdGltcG9ydCBsaWtlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpa2VzL2xpa2VzLnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGZvcm1EYXRhOiB7fSxcclxuXHRcdFx0XHRwb2V0cnlMaXN0OiBbXSxcclxuXHRcdFx0XHRwYWdlOiduYW1lTGlzdCcsXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0bGlrZXNcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRcdHRoaXMuZm9ybURhdGEgPSBKU09OLnBhcnNlKG9wdGlvbi5mb3JtRGF0YSlcclxuXHRcdFx0dGhpcy5jb250cm9sKDEwKVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGhpZ2hsaWdodEluZGV4KCkge1xyXG5cdFx0XHRcdGxldCBvYmogPSBbXVxyXG5cdFx0XHRcdHRoaXMucG9ldHJ5TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBpdGVtLm5hbWVcclxuXHRcdFx0XHRcdGxldCBjb250ZW50ID0gaXRlbS5jb250ZW50XHJcblx0XHRcdFx0XHRsZXQgZiA9IGNvbnRlbnQuaW5kZXhPZihuYW1lLnNsaWNlKDEsIDIpKVxyXG5cdFx0XHRcdFx0bGV0IHMgPSBjb250ZW50LmluZGV4T2YobmFtZS5zbGljZSgyLCAzKSlcclxuXHRcdFx0XHRcdG9iai5wdXNoKHtcclxuXHRcdFx0XHRcdFx0ZjogZixcclxuXHRcdFx0XHRcdFx0czogc1xyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gb2JqXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z29CYWNrKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBnZXROYW1lKCkge1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+eojeetiS4uLicsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiZ2V0X3BvZXRyeVwiLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdHR5cGU6dGhpcy5mb3JtRGF0YS5wb2V0cnlUeXBlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRsZXQgcG9ldHJ5TGlzdCA9IHJlcy5yZXN1bHQuZGF0YVxyXG5cdFx0XHRcdGxldCByYW5kb21OYW1lQXJyYXkgPSBbXVxyXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiBwb2V0cnlMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgY29tcGxldGVDb250ZW50ID0gcG9ldHJ5TGlzdFtrZXldLmNvbnRlbnRcclxuXHRcdFx0XHRcdGxldCBjb250ZW50ID0gcG9ldHJ5TGlzdFtrZXldLmNvbnRlbnQuc3BsaXQoJ+OAgicpXHJcblx0XHRcdFx0XHRjb250ZW50ID0gY29udGVudC5maWx0ZXIoKHMpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHMgJiYgcy50cmltKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnRbdGhpcy5SYW5kb20oMCwgY29udGVudC5sZW5ndGggLSAxKV1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdFtrZXldLmNvbnRlbnQgPSBjb250ZW50XHJcblx0XHRcdFx0XHRwb2V0cnlMaXN0W2tleV0uY29tcGxldGVDb250ZW50ID0gY29tcGxldGVDb250ZW50XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIGxldCBjb250ZW50MSA9IGNvbnRlbnQuc3BsaXQoJ++8jCcpWzBdXHJcblx0XHRcdFx0XHQvLyBsZXQgY29udGVudDIgPSBjb250ZW50LnNwbGl0KCfvvIwnKVsxXVxyXG5cdFx0XHRcdFx0Ly8gaWYoIWNvbnRlbnQxIHx8ICFjb250ZW50Mil7XHJcblx0XHRcdFx0XHQvLyBcdHJldHVyblxyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0bGV0IHJlZyA9IC8oW1xcdTRlMDAtXFx1OWZhNV0pKy9nXHJcblx0XHRcdFx0XHQvLyBsZXQgY29udGVudFN0cjEgPSBjb250ZW50MS5tYXRjaChyZWcpLmpvaW4oXCJcIilcclxuXHRcdFx0XHRcdC8vIGxldCBjb250ZW50U3RyMiA9IGNvbnRlbnQyLm1hdGNoKHJlZykuam9pbihcIlwiKVxyXG5cdFx0XHRcdFx0Ly8gY29udGVudFN0cjEgPSBjb250ZW50U3RyMS5zcGxpdCgnJylcclxuXHRcdFx0XHRcdC8vIGNvbnRlbnRTdHIyID0gY29udGVudFN0cjIuc3BsaXQoJycpXHJcblx0XHRcdFx0XHRsZXQgY29udGVudFN0ciA9IGNvbnRlbnQubWF0Y2gocmVnKS5qb2luKFwiXCIpLnNwbGl0KFwiXCIpXHJcblx0XHRcdFx0XHRsZXQgcmFuZG9tTnVtID0gdGhpcy5yYW5kb21OdW0oMCxjb250ZW50U3RyLmxlbmd0aClcclxuXHRcdFx0XHRcdGxldCBmaXJzdFdvcmQgPSBjb250ZW50U3RyW3JhbmRvbU51bVswXV1cclxuXHRcdFx0XHRcdGxldCBzZWNvbmRXb3JkID0gY29udGVudFN0cltyYW5kb21OdW1bMV1dXHJcblx0XHRcdFx0XHRsZXQgcmFuZG9tTmFtZSA9IGZpcnN0V29yZCArIHNlY29uZFdvcmQgXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIGZvciAobGV0IG4gPSAwIDtuIDwgMiA7IG4gKyspIHtcclxuXHRcdFx0XHRcdC8vIFx0cmFuZG9tTmFtZSs9Y29udGVudFN0clt0aGlzLlJhbmRvbSgwLGNvbnRlbnRTdHIubGVuZ3RoLTEpXVxyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0Ly8gcmFuZG9tTmFtZSA9IGNvbnRlbnRTdHIxW3RoaXMuUmFuZG9tKDAsIGNvbnRlbnRTdHIxLmxlbmd0aCAtIDEpXSArIGNvbnRlbnRTdHIyW3RoaXNcclxuXHRcdFx0XHRcdC8vIFx0LlJhbmRvbSgwLCBjb250ZW50U3RyMi5sZW5ndGggLSAxKV1cclxuXHRcdFx0XHRcdHBvZXRyeUxpc3Rba2V5XS5uYW1lID0gdGhpcy5mb3JtRGF0YS5maXJzdE5hbWUrIHJhbmRvbU5hbWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHBvZXRyeUxpc3RcclxuXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRSYW5kb20obWluLCBtYXgpIHtcclxuXHRcdFx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WPluS4pOS4qumaj+acuuaVsCBcclxuXHRcdFx0cmFuZG9tTnVtKG1pbiwgbWF4KSB7XHJcblx0XHRcdFx0bGV0IG51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcblx0XHRcdFx0ICAgIGxldCBudW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG51bTEgLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0XHRcdFx0ICAgIGlmIChudW0xID09PSBudW0yKSB7XHJcblx0XHRcdFx0ICAgICAgICBudW0xKytcclxuXHRcdFx0XHQgICAgfSBlbHNlIGlmIChudW0xID09PSBtYXgpIHtcclxuXHRcdFx0XHQgICAgICAgIG51bTItLVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIHJldHVybiBbbnVtMixudW0xXVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBmaWx0ZXJOYW1lKGNvdW50KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcG9ldHJ5TGlzdCA9IGF3YWl0IHRoaXMuZ2V0TmFtZSgpXHJcblx0XHRcdFx0XHRsZXQgbmFtZXMgPSBbXVxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRuYW1lcy5wdXNoKHZhbHVlLm5hbWUpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJnZXRfZ2VuZGVyXCIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lczogbmFtZXNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGxldCBnZW5kZXJSZXMgPSByZXMucmVzdWx0LmRhdGFcclxuXHRcdFx0XHRcdGdlbmRlclJlcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblx0XHRcdFx0XHRcdHBvZXRyeUxpc3Rba2V5XS5zZXggPSB2YWx1ZS5nZW5kZXJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRpZiAodGhpcy5mb3JtRGF0YS5zZXggPT09IFwi55S3XCIpIHtcclxuXHRcdFx0XHRcdFx0cG9ldHJ5TGlzdCA9IHBvZXRyeUxpc3QuZmlsdGVyKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUuc2V4ID09PSBcIm1hbGVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmZvcm1EYXRhLnNleCA9PT0gXCLlpbNcIikge1xyXG5cdFx0XHRcdFx0XHRwb2V0cnlMaXN0ID0gcG9ldHJ5TGlzdC5maWx0ZXIodmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZS5zZXggPT09IFwiZmVtYWxlXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG5hbWVzID0gW11cclxuXHRcdFx0XHRcdHBvZXRyeUxpc3QuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdFx0bmFtZXMucHVzaCh2YWx1ZS5uYW1lKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IHJlczEgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcInd1Z2VcIixcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWVzOiBuYW1lc1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0bGV0IHd1R2UgPSByZXMxLnJlc3VsdC5kYXRhXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHd1R2UuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRwb2V0cnlMaXN0W2tleV0uc2FuQ2FpV3VHZSA9IHZhbHVlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0aWYodGhpcy5mb3JtRGF0YS5zY29yZSAhPT0n5LiN6ZmQJyl7XHJcblx0XHRcdFx0XHRcdHBvZXRyeUxpc3QgPSBwb2V0cnlMaXN0LmZpbHRlcih2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5mb3JtRGF0YS5zY29yZSA9PT0gJ+S4rScpe1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlLnNhbkNhaVd1R2UudG90YWxTb3JlID4gNTBcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZih0aGlzLmZvcm1EYXRhLnNjb3JlID09PSAn6auYJyl7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUuc2FuQ2FpV3VHZS50b3RhbFNvcmUgPiA3MFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIHRoaXMucG9ldHJ5TGlzdC5wdXNoKC4uLnBvZXRyeUxpc3QpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIHBvZXRyeUxpc3QgPSBwb2V0cnlMaXN0LnNsaWNlKDAsIGNvdW50KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGlmIChwb2V0cnlMaXN0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucG9ldHJ5TGlzdC5wdXNoKC4uLnBvZXRyeUxpc3QpXHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KCdlcnJvcicpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgY29udHJvbChjb3VudCkge1xyXG5cdFx0XHRcdHRoaXMucG9ldHJ5TGlzdCA9IFtdXHJcblx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLmZpbHRlck5hbWUoKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBvZXRyeUxpc3QgPSB0aGlzLnBvZXRyeUxpc3Quc2xpY2UoMCwgY291bnQpXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMucG9ldHJ5TGlzdC5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHR9KS5jYXRjaChlID0+IHtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR3aGlsZSAodGhpcy5wb2V0cnlMaXN0Lmxlbmd0aCA8IGNvdW50KVxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9EZXRhaWwoaW5kZXgpe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBkYXRhTGlzdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMucG9ldHJ5TGlzdFtpbmRleF0pXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGRhdGUgPUpTT04uc3RyaW5naWZ5ICh7ZGF0ZTp0aGlzLmZvcm1EYXRhLmRhdGUsbHVuYXI6dGhpcy5mb3JtRGF0YS5sdW5hcn0pXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOicuLi9uYW1lLWRldGFpbC9uYW1lLWRldGFpbD9kYXRhPScrZGF0YUxpc3QrJyZ0eXBlPXFpbWluZycgKyAnJmRhdGU9JyArIGRhdGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b015TGlrZXMoKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6Jy4uL215LWxpa2VzL215LWxpa2VzJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdHBhZ2Uge1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQubmFtZS1saXN0IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQuc2Nyb2xsIHtcclxuXHRcdFx0ZmxleDogMTtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogODBycHg7XHJcblx0XHRcdC5zY3JvbGwtbGlzdCB7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHQubGlzdC1pdGVtIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDIwcnB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQubGlzdC1oZWFkLFxyXG5cdFx0XHRcdFx0Lmxpc3QtbWlkZGxlLFxyXG5cdFx0XHRcdFx0Lmxpc3QtZm9vdGVyIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5saXN0LW1pZGRsZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMjBycHggMDtcclxuXHJcblx0XHRcdFx0XHRcdHRleHQge1xyXG5cdFx0XHRcdFx0XHRcdCYuaGlnaGxpZ2h0IHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJGhpZ2hsaWdodDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Lmxpc3QtbWlkZGxlLWxlZnR7XHJcblx0XHRcdFx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQubGlzdC1taWRkbGUtcmlnaHR7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNkZGQ7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5saXN0LWhlYWQge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZWVhMmE0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lmxpc3QtZm9vdGVyIHtcclxuXHRcdFx0XHRcdFx0dGV4dDpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNTBycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmZvb3RlcntcclxuXHRcdFx0cGFkZGluZzogMCAxMHJweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0Ym90dG9tOiAxMHJweDtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHJcblx0XHRcdGJ1dHRvbntcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDgwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0YnV0dG9uOjphZnRlciB7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzMzg2MjMzNjExMVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=