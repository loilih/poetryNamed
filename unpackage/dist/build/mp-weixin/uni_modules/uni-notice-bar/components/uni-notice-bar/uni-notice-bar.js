(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar"],{"147e":function(t,e,n){"use strict";var i=n("c838"),o=n.n(i);o.a},"171a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var e=this;if(this.scrollable){var n=[],i=new Promise((function(n,i){t.createSelectorQuery().in(e).select("#".concat(e.elId)).boundingClientRect().exec((function(t){e.textWidth=t[0].width,n()}))})),o=new Promise((function(n,i){t.createSelectorQuery().in(e).select("#".concat(e.elIdBox)).boundingClientRect().exec((function(t){e.boxWidth=t[0].width,n()}))}));n.push(i),n.push(o),Promise.all(n).then((function(){e.animationDuration="".concat(e.textWidth/e.speed,"s"),e.animationDelay="-".concat(e.boxWidth/e.speed,"s"),setTimeout((function(){e.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=n}).call(this,n("543d")["default"])},"1bd7":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"04f9"))}},o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"606d":function(t,e,n){"use strict";n.r(e);var i=n("1bd7"),o=n("ce1e");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("147e");var a,u=n("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"4bdde252",null,!1,i["a"],a);e["default"]=r.exports},c838:function(t,e,n){},ce1e:function(t,e,n){"use strict";n.r(e);var i=n("171a"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("606d"))
        })
    },
    [['uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component']]
]);