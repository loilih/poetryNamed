(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/name-detail-tab/name-detail-tab"],{"0ae3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"name-detail-tab",data:function(){return{tabIindex:0}},created:function(){e.$on("swiperChange",this.swiperChange)},methods:{click:function(t){switch(t){case 0:this.index=0;break;case 1:this.index=1;break;case 2:this.index=2;break}e.$emit("tabClick",t)},swiperChange:function(e){this.tabIindex=e}}};t.default=n}).call(this,n("543d")["default"])},"0d78":function(e,t,n){"use strict";var a=n("165e"),i=n.n(a);i.a},"0df5":function(e,t,n){"use strict";n.r(t);var a=n("eb6f"),i=n("3abb");for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("0d78");var u,r=n("f0c5"),f=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"07beda22",null,!1,a["a"],u);t["default"]=f.exports},"165e":function(e,t,n){},"3abb":function(e,t,n){"use strict";n.r(t);var a=n("0ae3"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},eb6f:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement;e._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/name-detail-tab/name-detail-tab-create-component',
    {
        'components/name-detail-tab/name-detail-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0df5"))
        })
    },
    [['components/name-detail-tab/name-detail-tab-create-component']]
]);
