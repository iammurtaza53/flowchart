(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01e5c470"],{a523:function(t,a,e){"use strict";e("4de4"),e("d3b7"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var n=e("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var n=e.props,r=e.data,s=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var i=r.attrs;if(i){r.attrs={};var c=Object.keys(i).filter((function(t){if("slot"===t)return!1;var a=i[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}));c.length&&(r.staticClass+=" ".concat(c.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),a(n.tag,r,s)}})}var s=e("d9f7");a["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,n=a.props,r=a.data,i=a.children,c=r.attrs;return c&&(r.attrs={},e=Object.keys(c).filter((function(t){if("slot"===t)return!1;var a=c[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(s["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),i)}})},e8de:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("BaseCard",{attrs:{heading:"USER MANAGEMENT"}},[e("DataTable",{attrs:{data:t.users,tableHeaders:t.headers,loading:t.loading}})],1)],1)},r=[],s=(e("d3b7"),e("3ca3"),e("ddb0"),e("0e7a")),i={components:{DataTable:function(){return Promise.all([e.e("chunk-954c6a98"),e.e("chunk-22c17c59"),e.e("chunk-04f9388c"),e.e("chunk-976a7d7e"),e.e("chunk-4ba17866")]).then(e.bind(null,"eb82"))}},data:function(){return{users:[],headers:[{text:"FIRST NAME",value:"first_name"},{text:"LAST NAME",value:"last_name"},{text:"EMAIL",value:"email"},{text:"ACTION",value:""}],loading:!0}},computed:{},methods:{get_all_users:function(){var t=this;s["a"].get("users/").then((function(a){t.users=a.data,t.loading=!1}))}},created:function(){this.get_all_users()}},c=i,o=e("2877"),d=e("6544"),u=e.n(d),l=e("a523"),f=Object(o["a"])(c,n,r,!1,null,null,null);a["default"]=f.exports;u()(f,{VContainer:l["a"]})}}]);
//# sourceMappingURL=chunk-01e5c470.0dabbef6.js.map