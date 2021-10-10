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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi91bmlhcHAvcWltaW5nL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlP2FiMDEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9xaW1pbmcvcGFnZXMvbmFtZS1saXN0L25hbWUtbGlzdC52dWU/MGU2ZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3FpbWluZy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZT9hZmIxIiwidW5pLWFwcDovLy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3FpbWluZy9wYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZT8yOGIxIiwid2VicGFjazovLy9EOi91bmlhcHAvcWltaW5nL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlPzk2YjMiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ3RIO0FBQzZEO0FBQ0w7QUFDYzs7O0FBR3RFO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa1JBRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLHNLQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQXNtQixDQUFnQixtbkJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FEMW5CO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxvQkFGQTtBQUdBLHNCQUhBOzs7QUFNQSxHQVJBO0FBU0E7QUFDQSxnQkFEQSxFQVRBOztBQVlBLFFBWkEsa0JBWUEsTUFaQSxFQVlBO0FBQ0E7QUFDQTs7OztBQUlBLEdBbEJBO0FBbUJBO0FBQ0Esa0JBREEsNEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQSxjQUZBOzs7QUFLQSxPQVZBO0FBV0E7QUFDQSxLQWZBLEVBbkJBOzs7QUFxQ0E7QUFDQSxVQURBLG9CQUNBO0FBQ0E7OztBQUdBLEtBTEE7QUFNQSxXQU5BLHFCQU1BO0FBQ0E7QUFDQSxpQ0FEQSxJQURBOztBQUlBO0FBQ0Esc0NBREE7QUFFQTtBQUNBLHFEQURBLEVBRkEsR0FKQSxTQUlBLEdBSkE7OztBQVVBLDBCQVZBLEdBVUEsZUFWQTtBQVdBLCtCQVhBLEdBV0EsRUFYQTtBQVlBO0FBQ0EsaUNBREEsR0FDQSx1QkFEQTtBQUVBLHlCQUZBLEdBRUEsa0NBRkE7QUFHQTtBQUNBO0FBQ0EsbUJBRkE7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFoQkEsR0FnQkEscUJBaEJBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBckJBLEdBcUJBLHFDQXJCQTtBQXNCQSwyQkF0QkEsR0FzQkEscUNBdEJBO0FBdUJBLDJCQXZCQSxHQXVCQSx3QkF2QkE7QUF3QkEsNEJBeEJBLEdBd0JBLHdCQXhCQTtBQXlCQSw0QkF6QkEsR0F5QkEsc0JBekJBOztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkE3Q0E7QUE4Q0EsMEJBOUNBOzs7QUFpREEsS0F2REE7QUF3REEsVUF4REEsa0JBd0RBLEdBeERBLEVBd0RBLEdBeERBLEVBd0RBO0FBQ0E7QUFDQSxLQTFEQTtBQTJEQTtBQUNBLGFBNURBLHFCQTREQSxHQTVEQSxFQTREQSxHQTVEQSxFQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBdEVBO0FBdUVBLGNBdkVBLHNCQXVFQSxLQXZFQSxFQXVFQTs7QUFFQSxrQ0FGQSxTQUVBLFVBRkE7QUFHQSxxQkFIQSxHQUdBLEVBSEE7QUFJQTtBQUNBO0FBQ0EsaUJBRkEsRUFKQTs7QUFRQTtBQUNBLHNDQURBO0FBRUE7QUFDQSxrQ0FEQSxFQUZBLEdBUkEsU0FRQSxHQVJBOzs7QUFjQSx5QkFkQSxHQWNBLGVBZEE7QUFlQTtBQUNBO0FBQ0EsaUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxtQkFGQTtBQUdBLGlCQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsbUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBLEVBNUJBOztBQWdDQTtBQUNBLGdDQURBO0FBRUE7QUFDQSxrQ0FEQSxFQUZBLEdBaENBLFVBZ0NBLElBaENBOzs7QUFzQ0Esb0JBdENBLEdBc0NBLGdCQXRDQTs7QUF3Q0E7QUFDQTtBQUNBLGlCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQU5BO0FBT0E7QUFDQTs7QUFFQTtBQXREQTs7O0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFQQSxDQTFEQTtBQWtFQSxLQXpJQTtBQTBJQSxXQTFJQSxtQkEwSUEsS0ExSUEsRUEwSUE7QUFDQSx1Q0FEQTs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBTEEsRUFLQSxLQUxBLENBS0E7QUFDQSxtQkFOQSxDQUpBOzs7QUFhQSxnREFiQTs7O0FBZ0JBLEtBMUpBO0FBMkpBLFlBM0pBLG9CQTJKQSxLQTNKQSxFQTJKQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkZBREE7O0FBR0EsS0FuS0E7QUFvS0EsYUFwS0EsdUJBb0tBO0FBQ0E7QUFDQSxtQ0FEQTs7QUFHQSxLQXhLQSxFQXJDQSxFOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQTJtQyxDQUFnQiw2akNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0EvbkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL25hbWUtbGlzdC9uYW1lLWxpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2EyMWE4OCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9uYW1lLWxpc3QvbmFtZS1saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2EyMWE4OCZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVuaU5hdkJhcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInVuaV9tb2R1bGVzL3VuaS1uYXYtYmFyL2NvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXJcIiAqLyBcIkAvdW5pX21vZHVsZXMvdW5pLW5hdi1iYXIvY29tcG9uZW50cy91bmktbmF2LWJhci91bmktbmF2LWJhci52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgbGlrZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL2xpa2VzL2xpa2VzXCIgKi8gXCJAL2NvbXBvbmVudHMvbGlrZXMvbGlrZXMudnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBsMSA9IF92bS5fX21hcChfdm0ucG9ldHJ5TGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgdmFyIGwwID0gX3ZtLnBvZXRyeUxpc3RbaW5kZXhdLmNvbnRlbnQuc3BsaXQoXCJcIilcbiAgICByZXR1cm4ge1xuICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgbDA6IGwwXG4gICAgfVxuICB9KVxuXG4gIGlmICghX3ZtLl9pc01vdW50ZWQpIHtcbiAgICBfdm0uZTAgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2woMTApXG4gICAgfVxuICB9XG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMTogbDFcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25hbWUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmFtZS1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm5hbWUtbGlzdFwiPlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cIm5hdi1iYXJcIj5cclxuXHRcdFx0PHVuaS1uYXYtYmFyIHRpdGxlPVwi5YiX6KGoXCIgc3RhdHVzQmFyPVwidHJ1ZVwiIGxlZnRJY29uPVwiYmFja1wiIEBjbGlja0xlZnQ9XCJnb0JhY2tcIiA+PC91bmktbmF2LWJhcj5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzY3JvbGxcIiA+XHJcblx0XHRcdDwhLS0gPGNpcmNsZSA6cD1cInBcIj48L2NpcmNsZT4gLS0+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteSBjbGFzcz1cInNjcm9sbC1saXN0XCIgPlxyXG5cdFx0XHRcdDx2aWV3ID5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0LWl0ZW1cIiAgQGNsaWNrPVwidG9EZXRhaWwoaW5kZXgpXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcG9ldHJ5TGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0LWhlYWRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0Pnt7J+ivhOWIhjonK2l0ZW0uc2FuQ2FpV3VHZS50b3RhbFNvcmV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3QtbWlkZGxlXCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQ+e3sn44CMJytpdGVtLmNvbnRlbnQrJ+OAjSd9fTwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+44CMPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHYtZm9yPVwiKHdvcmQsbikgaW4gcG9ldHJ5TGlzdFtpbmRleF0uY29udGVudC5zcGxpdCgnJylcIiA6a2V5PVwiblwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJ7aGlnaGxpZ2h0OiBuID09IGhpZ2hsaWdodEluZGV4W2luZGV4XS5mIHx8IG4gPT0gaGlnaGxpZ2h0SW5kZXhbaW5kZXhdLnN9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7e3dvcmR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuOAjTwvdGV4dD5cclxuXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0LWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0Pnt7aXRlbS50aXRsZX194oCie3tpdGVtLmF1dGhvciB8fCAn5L2a5ZCNJ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgOmNsYXNzPVwiaXNMaWtlID8naWNvbmZvbnQgaWNvbi1haXhpbjEnOidpY29uZm9udCBpY29uLWFpeGluJ1wiICBAY2xpY2suc3RvcD1cImxpa2UoKVwiPjwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PGxpa2VzIDppdGVtPVwiaXRlbVwiIDpwYWdlPVwicGFnZVwiPjwvbGlrZXM+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZvb3RlclwiID5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJtaW5pXCIgQGNsaWNrPVwidG9NeUxpa2VzXCI+5oiR55qE5pS26JePPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibWluaVwiIEBjbGljaz1cInRoaXMuY29udHJvbCgxMClcIj7mjaLkuIDmibk8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcblxyXG5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vIDpjbGFzcz1cIntoaWdobGlnaHQ6IG4tMSA9PT0gaGlnaGxpZ2h0SW5kZXhbbi0xXS5mIHx8IG4tMSA9PT0gaGlnaGxpZ2h0SW5kZXhbbi0xXS5zfVwiXHJcblx0aW1wb3J0IGxpa2VzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlrZXMvbGlrZXMudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Zm9ybURhdGE6IHt9LFxyXG5cdFx0XHRcdHBvZXRyeUxpc3Q6IFtdLFxyXG5cdFx0XHRcdHBhZ2U6J25hbWVMaXN0JyxcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6e1xyXG5cdFx0XHRsaWtlc1xyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb24pIHtcclxuXHRcdFx0dGhpcy5mb3JtRGF0YSA9IEpTT04ucGFyc2Uob3B0aW9uLmZvcm1EYXRhKVxyXG5cdFx0XHR0aGlzLmNvbnRyb2woMTApXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0aGlnaGxpZ2h0SW5kZXgoKSB7XHJcblx0XHRcdFx0bGV0IG9iaiA9IFtdXHJcblx0XHRcdFx0dGhpcy5wb2V0cnlMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgbmFtZSA9IGl0ZW0ubmFtZVxyXG5cdFx0XHRcdFx0bGV0IGNvbnRlbnQgPSBpdGVtLmNvbnRlbnRcclxuXHRcdFx0XHRcdGxldCBmID0gY29udGVudC5pbmRleE9mKG5hbWUuc2xpY2UoMSwgMikpXHJcblx0XHRcdFx0XHRsZXQgcyA9IGNvbnRlbnQuaW5kZXhPZihuYW1lLnNsaWNlKDIsIDMpKVxyXG5cdFx0XHRcdFx0b2JqLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRmOiBmLFxyXG5cdFx0XHRcdFx0XHRzOiBzXHJcblx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBvYmpcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnb0JhY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldE5hbWUoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6K+356iN562JLi4uJyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0bmFtZTogXCJnZXRfcG9ldHJ5XCIsXHJcblx0XHRcdFx0XHRkYXRhOntcclxuXHRcdFx0XHRcdFx0dHlwZTp0aGlzLmZvcm1EYXRhLnBvZXRyeVR5cGVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGxldCBwb2V0cnlMaXN0ID0gcmVzLnJlc3VsdC5kYXRhXHJcblx0XHRcdFx0bGV0IHJhbmRvbU5hbWVBcnJheSA9IFtdXHJcblx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHBvZXRyeUxpc3QpIHtcclxuXHRcdFx0XHRcdGxldCBjb21wbGV0ZUNvbnRlbnQgPSBwb2V0cnlMaXN0W2tleV0uY29udGVudFxyXG5cdFx0XHRcdFx0bGV0IGNvbnRlbnQgPSBwb2V0cnlMaXN0W2tleV0uY29udGVudC5zcGxpdCgn44CCJylcclxuXHRcdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmZpbHRlcigocykgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcyAmJiBzLnRyaW0oKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRjb250ZW50ID0gY29udGVudFt0aGlzLlJhbmRvbSgwLCBjb250ZW50Lmxlbmd0aCAtIDEpXVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRwb2V0cnlMaXN0W2tleV0uY29udGVudCA9IGNvbnRlbnRcclxuXHRcdFx0XHRcdHBvZXRyeUxpc3Rba2V5XS5jb21wbGV0ZUNvbnRlbnQgPSBjb21wbGV0ZUNvbnRlbnRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gbGV0IGNvbnRlbnQxID0gY29udGVudC5zcGxpdCgn77yMJylbMF1cclxuXHRcdFx0XHRcdC8vIGxldCBjb250ZW50MiA9IGNvbnRlbnQuc3BsaXQoJ++8jCcpWzFdXHJcblx0XHRcdFx0XHQvLyBpZighY29udGVudDEgfHwgIWNvbnRlbnQyKXtcclxuXHRcdFx0XHRcdC8vIFx0cmV0dXJuXHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRsZXQgcmVnID0gLyhbXFx1NGUwMC1cXHU5ZmE1XSkrL2dcclxuXHRcdFx0XHRcdC8vIGxldCBjb250ZW50U3RyMSA9IGNvbnRlbnQxLm1hdGNoKHJlZykuam9pbihcIlwiKVxyXG5cdFx0XHRcdFx0Ly8gbGV0IGNvbnRlbnRTdHIyID0gY29udGVudDIubWF0Y2gocmVnKS5qb2luKFwiXCIpXHJcblx0XHRcdFx0XHQvLyBjb250ZW50U3RyMSA9IGNvbnRlbnRTdHIxLnNwbGl0KCcnKVxyXG5cdFx0XHRcdFx0Ly8gY29udGVudFN0cjIgPSBjb250ZW50U3RyMi5zcGxpdCgnJylcclxuXHRcdFx0XHRcdGxldCBjb250ZW50U3RyID0gY29udGVudC5tYXRjaChyZWcpLmpvaW4oXCJcIikuc3BsaXQoXCJcIilcclxuXHRcdFx0XHRcdGxldCByYW5kb21OdW0gPSB0aGlzLnJhbmRvbU51bSgwLGNvbnRlbnRTdHIubGVuZ3RoKVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0V29yZCA9IGNvbnRlbnRTdHJbcmFuZG9tTnVtWzBdXVxyXG5cdFx0XHRcdFx0bGV0IHNlY29uZFdvcmQgPSBjb250ZW50U3RyW3JhbmRvbU51bVsxXV1cclxuXHRcdFx0XHRcdGxldCByYW5kb21OYW1lID0gZmlyc3RXb3JkICsgc2Vjb25kV29yZCBcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gZm9yIChsZXQgbiA9IDAgO24gPCAyIDsgbiArKykge1xyXG5cdFx0XHRcdFx0Ly8gXHRyYW5kb21OYW1lKz1jb250ZW50U3RyW3RoaXMuUmFuZG9tKDAsY29udGVudFN0ci5sZW5ndGgtMSldXHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHQvLyByYW5kb21OYW1lID0gY29udGVudFN0cjFbdGhpcy5SYW5kb20oMCwgY29udGVudFN0cjEubGVuZ3RoIC0gMSldICsgY29udGVudFN0cjJbdGhpc1xyXG5cdFx0XHRcdFx0Ly8gXHQuUmFuZG9tKDAsIGNvbnRlbnRTdHIyLmxlbmd0aCAtIDEpXVxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdFtrZXldLm5hbWUgPSB0aGlzLmZvcm1EYXRhLmZpcnN0TmFtZSsgcmFuZG9tTmFtZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcG9ldHJ5TGlzdFxyXG5cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdFJhbmRvbShtaW4sIG1heCkge1xyXG5cdFx0XHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5Y+W5Lik5Liq6ZqP5py65pWwIFxyXG5cdFx0XHRyYW5kb21OdW0obWluLCBtYXgpIHtcclxuXHRcdFx0XHRsZXQgbnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuXHRcdFx0XHQgICAgbGV0IG51bTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobnVtMSAtIG1pbiArIDEpKSArIG1pbjtcclxuXHRcdFx0XHQgICAgaWYgKG51bTEgPT09IG51bTIpIHtcclxuXHRcdFx0XHQgICAgICAgIG51bTErK1xyXG5cdFx0XHRcdCAgICB9IGVsc2UgaWYgKG51bTEgPT09IG1heCkge1xyXG5cdFx0XHRcdCAgICAgICAgbnVtMi0tXHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgcmV0dXJuIFtudW0yLG51bTFdXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGZpbHRlck5hbWUoY291bnQpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBwb2V0cnlMaXN0ID0gYXdhaXQgdGhpcy5nZXROYW1lKClcclxuXHRcdFx0XHRcdGxldCBuYW1lcyA9IFtdXHJcblx0XHRcdFx0XHRwb2V0cnlMaXN0LmZvckVhY2goKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRcdG5hbWVzLnB1c2godmFsdWUubmFtZSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCByZXMgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcImdldF9nZW5kZXJcIixcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWVzOiBuYW1lc1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0bGV0IGdlbmRlclJlcyA9IHJlcy5yZXN1bHQuZGF0YVxyXG5cdFx0XHRcdFx0Z2VuZGVyUmVzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuXHRcdFx0XHRcdFx0cG9ldHJ5TGlzdFtrZXldLnNleCA9IHZhbHVlLmdlbmRlclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGlmICh0aGlzLmZvcm1EYXRhLnNleCA9PT0gXCLnlLdcIikge1xyXG5cdFx0XHRcdFx0XHRwb2V0cnlMaXN0ID0gcG9ldHJ5TGlzdC5maWx0ZXIodmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZS5zZXggPT09IFwibWFsZVwiXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZm9ybURhdGEuc2V4ID09PSBcIuWls1wiKSB7XHJcblx0XHRcdFx0XHRcdHBvZXRyeUxpc3QgPSBwb2V0cnlMaXN0LmZpbHRlcih2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlLnNleCA9PT0gXCJmZW1hbGVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bmFtZXMgPSBbXVxyXG5cdFx0XHRcdFx0cG9ldHJ5TGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRuYW1lcy5wdXNoKHZhbHVlLm5hbWUpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcmVzMSA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwid3VnZVwiLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0bmFtZXM6IG5hbWVzXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRsZXQgd3VHZSA9IHJlczEucmVzdWx0LmRhdGFcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0d3VHZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblx0XHRcdFx0XHRcdHBvZXRyeUxpc3Rba2V5XS5zYW5DYWlXdUdlID0gdmFsdWVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRpZih0aGlzLmZvcm1EYXRhLnNjb3JlICE9PSfkuI3pmZAnKXtcclxuXHRcdFx0XHRcdFx0cG9ldHJ5TGlzdCA9IHBvZXRyeUxpc3QuZmlsdGVyKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZih0aGlzLmZvcm1EYXRhLnNjb3JlID09PSAn5LitJyl7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUuc2FuQ2FpV3VHZS50b3RhbFNvcmUgPiA1MFxyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmKHRoaXMuZm9ybURhdGEuc2NvcmUgPT09ICfpq5gnKXtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZS5zYW5DYWlXdUdlLnRvdGFsU29yZSA+IDcwXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gdGhpcy5wb2V0cnlMaXN0LnB1c2goLi4ucG9ldHJ5TGlzdClcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gcG9ldHJ5TGlzdCA9IHBvZXRyeUxpc3Quc2xpY2UoMCwgY291bnQpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHBvZXRyeUxpc3QpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wb2V0cnlMaXN0LnB1c2goLi4ucG9ldHJ5TGlzdClcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZWplY3QoJ2Vycm9yJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjb250cm9sKGNvdW50KSB7XHJcblx0XHRcdFx0dGhpcy5wb2V0cnlMaXN0ID0gW11cclxuXHRcdFx0XHRkbyB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMuZmlsdGVyTmFtZSgpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRoaXMucG9ldHJ5TGlzdCA9IHRoaXMucG9ldHJ5TGlzdC5zbGljZSgwLCBjb3VudClcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5wb2V0cnlMaXN0Lmxlbmd0aClcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdH0pLmNhdGNoKGUgPT4ge1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHdoaWxlICh0aGlzLnBvZXRyeUxpc3QubGVuZ3RoIDwgY291bnQpXHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0RldGFpbChpbmRleCl7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGRhdGFMaXN0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wb2V0cnlMaXN0W2luZGV4XSlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZGF0ZSA9SlNPTi5zdHJpbmdpZnkgKHtkYXRlOnRoaXMuZm9ybURhdGEuZGF0ZSxsdW5hcjp0aGlzLmZvcm1EYXRhLmx1bmFyfSlcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6Jy4uL25hbWUtZGV0YWlsL25hbWUtZGV0YWlsP2RhdGE9JytkYXRhTGlzdCsnJnR5cGU9cWltaW5nJyArICcmZGF0ZT0nICsgZGF0ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvTXlMaWtlcygpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDonLi4vbXktbGlrZXMvbXktbGlrZXMnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0cGFnZSB7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC5uYW1lLWxpc3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC5zY3JvbGwge1xyXG5cdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA4MHJweDtcclxuXHRcdFx0LnNjcm9sbC1saXN0IHtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdC5saXN0LWl0ZW0ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMjBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC5saXN0LWhlYWQsXHJcblx0XHRcdFx0XHQubGlzdC1mb290ZXIge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lmxpc3QtbWlkZGxlIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMHJweCAwO1xyXG5cclxuXHRcdFx0XHRcdFx0dGV4dCB7XHJcblx0XHRcdFx0XHRcdFx0Ji5oaWdobGlnaHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzNXJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAkaGlnaGxpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubGlzdC1oZWFkIHtcclxuXHRcdFx0XHRcdFx0dGV4dDpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2VlYTJhNDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5saXN0LWZvb3RlciB7XHJcblx0XHRcdFx0XHRcdHRleHQ6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDUwcnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5mb290ZXJ7XHJcblx0XHRcdHBhZGRpbmc6IDAgMTBycHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdGJvdHRvbTogMTBycHg7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFxyXG5cdFx0XHRidXR0b257XHJcblx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA4MCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0YnV0dG9uOjphZnRlciB7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uYW1lLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzMzg2MDg0NTcxM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=