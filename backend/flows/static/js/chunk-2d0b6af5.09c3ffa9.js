(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6af5"],{"1de1":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"mt-4"},[t("v-card",[t("v-card-title",[t("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),t("v-data-table",{staticClass:"border",attrs:{headers:e.tableHeaders,items:e.data,search:e.search,loading:e.loading,"loading-text":"FETCHING DATA"},scopedSlots:e._u([e.click_row?{key:"body",fn:function(a){var n=a.items;return[t("tbody",e._l(n,(function(a,n){return t("tr",{key:n,on:{click:function(t){return e.clicked_row(a)}}},[t("td",[e._v(e._s(a.name))]),t("td",[e._v(e._s(a.risk))]),t("td",[e._v(e._s(a.count))]),t("td",[e._v(e._s(a.attackmitre))]),t("td",[e._v(e._s(a.sia))])])})),0)]}}:null],null,!0)})],1)],1)])},s=[],r=(t("b0c0"),{name:"AllUser",props:["tableHeaders","data","loading","click_row"],data:function(){return{search:""}},methods:{clicked_row:function(e){this.$router.push({name:"Subnets",params:{issue:e.name}})}}}),l=r,i=t("2877"),c=t("6544"),d=t.n(c),o=t("b0af"),u=t("99d9"),_=t("8fea"),b=t("8654"),f=Object(i["a"])(l,n,s,!1,null,null,null);a["default"]=f.exports;d()(f,{VCard:o["a"],VCardTitle:u["b"],VDataTable:_["a"],VTextField:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0b6af5.09c3ffa9.js.map