(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20952d","chunk-2d20952d"],{a921:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"mt-4"},[t("v-card",[t("v-card-title",[t("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),t("v-data-table",{staticClass:"border",attrs:{headers:e.tableHeaders,items:e.data,search:e.search,loading:e.loading,"loading-text":"FETCHING USERS"},scopedSlots:e._u([e.click_row?{key:"body",fn:function(a){var n=a.items;return[t("tbody",e._l(n,(function(a,n){return t("tr",{key:n,on:{click:function(t){return e.clicked_row(a)}}},[t("td",[e._v(e._s(a.name))]),t("td",[e._v(e._s(a.risk))]),t("td",[e._v(e._s(a.count))]),t("td",[e._v(e._s(a.attackmitre))]),t("td",[e._v(e._s(a.sia))])])})),0)]}}:null],null,!0)})],1)],1)])},s=[],r=(t("b0c0"),{name:"AllUser",props:["tableHeaders","data","loading","click_row"],data:function(){return{search:""}},methods:{clicked_row:function(e){this.$router.push({name:"Subnets",params:{issue:e.name}})}}}),c=r,l=t("2877"),d=t("6544"),i=t.n(d),o=t("b0af"),u=t("99d9"),_=t("8fea"),h=t("8654"),b=Object(l["a"])(c,n,s,!1,null,null,null);a["default"]=b.exports;i()(b,{VCard:o["a"],VCardTitle:u["c"],VDataTable:_["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=chunk-2d20952d.4e5dfdd1.js.map