(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"05d0":function(e,t,n){"use strict";var a=n("7fb2"),r=n.n(a);r.a},"1fc5":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("5cf8"));function i(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{poetryPickerIndex:0,scorePickerIndex:0,sex:0,poetryArray:["唐诗","宋词","楚辞","诗经","乐府","古诗"],poeTypeArray:["tangshi","songci","chuci","shijin","yuefu","gushi"],formData:{sex:"男",poetryType:"",firstName:"1",score:"",firstWord:"",secondWord:"",date:null,lunar:""},scoreArrar:["不限","中","高"]}},onLoad:function(){this.login(),e.showShareMenu({})},methods:{active:function(e){this.sex=e,0===e?this.formData.sex="男":1===e&&(this.formData.sex="女")},submitForm:function(t){this.formData.poetryType=this.poeTypeArray[this.poetryPickerIndex],this.formData.score=this.scoreArrar[t.detail.value.score],this.formData.firstName=t.detail.value.firstName,this.formData.firstWord=t.detail.value.firstWord,this.formData.secondWord=t.detail.value.secondWord;var n=[{name:"firstName",checkType:"string",checkRule:"1,2",errorMsg:"姓氏应为1-2个字符"},{name:"firstName",checkType:"reg",checkRule:"^[一-龥]+$",errorMsg:"姓氏必须为汉字"}],a=r.default.check(this.formData,n);if(a){var i=JSON.stringify(this.formData);e.navigateTo({url:"../name-list/name-list?formData="+i})}else e.showToast({title:r.default.error,icon:"none"})},poetryPickerChange:function(e){this.poetryPickerIndex=e.detail.value},scorePickerChange:function(e){this.scorePickerIndex=e.detail.value},login:function(){e.login({provider:"weixin",success:function(t){a.callFunction({name:"wx_code2Session",data:{code:t.code}}).then((function(t){e.setStorageSync("uid",t.result.data.openid),a.callFunction({name:"update_user",data:{uid:t.result.data.openid,type:"weixin"}})}))},fail:function(t){e.showToast({title:"登录出现了点小问题请重新运行~"})}})},dateChange:function(e){this.formData.date=e.date,this.formData.lunar=e.lunar}}};t.default=o}).call(this,n("543d")["default"],n("a9ff")["default"])},5370:function(e,t,n){"use strict";n.r(t);var a=n("8a8f"),r=n("dd28");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("05d0");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"55354a85",null,!1,a["a"],o);t["default"]=u.exports},7985:function(e,t,n){"use strict";(function(e){n("3448");a(n("66fd"));var t=a(n("5370"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"7fb2":function(e,t,n){},"8a8f":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"b3f8"))},dateSelect:function(){return n.e("components/date-select/date-select").then(n.bind(null,"9265"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},dd28:function(e,t,n){"use strict";n.r(t);var a=n("1fc5"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a}},[["7985","common/runtime","common/vendor"]]]);