(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"05d0":function(e,t,a){"use strict";var n=a("7fb2"),r=a.n(n);r.a},"1fc5":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("5cf8"));function o(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{poetryPickerIndex:0,scorePickerIndex:0,sex:0,poetryArray:["唐诗","宋词","楚辞","诗经","乐府","古诗"],poeTypeArray:["tangshi","songci","chuci","shijin","yuefu","gushi"],formData:{sex:"男",poetryType:"",firstName:"1",score:"",firstWord:"",secondWord:"",date:null,lunar:""},scoreArrar:["不限","中","高"]}},onLoad:function(){this.login(),e.showShareMenu({})},methods:{active:function(e){this.sex=e,0===e?this.formData.sex="男":1===e&&(this.formData.sex="女")},submitForm:function(t){this.formData.poetryType=this.poeTypeArray[this.poetryPickerIndex],this.formData.score=this.scoreArrar[t.detail.value.score],this.formData.firstName=t.detail.value.firstName,this.formData.firstWord=t.detail.value.firstWord,this.formData.secondWord=t.detail.value.secondWord;var a=[{name:"firstName",checkType:"string",checkRule:"1,2",errorMsg:"姓氏应为1-2个字符"},{name:"firstName",checkType:"reg",checkRule:"^[一-龥]+$",errorMsg:"姓氏必须为汉字"}],n=r.default.check(this.formData,a);if(n){var o=JSON.stringify(this.formData);e.navigateTo({url:"../name-list/name-list?formData="+o})}else e.showToast({title:r.default.error,icon:"none"})},poetryPickerChange:function(e){this.poetryPickerIndex=e.detail.value},scorePickerChange:function(e){this.scorePickerIndex=e.detail.value},login:function(){e.login({success:function(t){n.callFunction({name:"code_to_session",data:{code:t.code}}).then((function(t){e.setStorageSync("uid",t.result.data.data.unionid),n.callFunction({name:"update_user",data:{uid:t.result.data.data.unionid,type:"toutiao"}})}))},fail:function(t){e.showToast({title:"登录出现了点小问题请重新运行~"})}})},dateChange:function(e){this.formData.date=e.date,this.formData.lunar=e.lunar}}};t.default=i}).call(this,a("f266")["default"],a("a9ff")["default"])},5370:function(e,t,a){"use strict";a.r(t);var n=a("8a8f"),r=a("dd28");for(var o in r)"default"!==o&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a("05d0");var i,c=a("f0c5"),u=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"55354a85",null,!1,n["a"],i);t["default"]=u.exports},7985:function(e,t,a){"use strict";(function(e){a("3448");n(a("66fd"));var t=n(a("5370"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("f266")["createPage"])},"7fb2":function(e,t,a){},"8a8f":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={pageHead:function(){return a.e("components/page-head/page-head").then(a.bind(null,"b3f8"))},dateSelect:function(){return a.e("components/date-select/date-select").then(a.bind(null,"9265"))}},r=function(){var e=this,t=e.$createElement;e._self._c},o=[]},dd28:function(e,t,a){"use strict";a.r(t);var n=a("1fc5"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a}},[["7985","common/runtime","common/vendor"]]]);