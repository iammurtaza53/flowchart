(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dec85"],{"86b3":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",[e("BaseCard",{attrs:{heading:"Critical Assets"}},[e("v-textarea",{attrs:{label:"IP"},model:{value:a.ip,callback:function(t){a.ip=t},expression:"ip"}}),e("v-btn",{attrs:{color:"primary"},on:{click:function(t){return a.post_criticalassets_data()}}},[a._v(" INSERT IPs ")])],1),e("BaseCard",[e("DataTable",{attrs:{data:a.tableData,tableHeaders:a.tableHeader,loading:a.loading}})],1)],1)},i=[],s=(e("d3b7"),e("3ca3"),e("ddb0"),e("ac1f"),e("1276"),e("159b"),e("0e7a")),c={components:{DataTable:function(){return Promise.all([e.e("chunk-22c17c59"),e.e("chunk-04f9388c"),e.e("chunk-976a7d7e"),e.e("chunk-2d0df1ba")]).then(e.bind(null,"8903"))}},data:function(){return{tableHeader:[{text:"ID",value:"ip_id"},{text:"IP",value:"ip"}],tableData:[],loading:!1,ip:null}},methods:{post_criticalassets_data:function(){var a=this,t=this.ip.split(","),e=[];t.forEach((function(a){e.push({ip:a})})),s["a"].post("critical-assets/",e).then((function(t){a.ip=null,a.get_critical_assets_data()}))},get_critical_assets_data:function(){var a=this;this.loading=!0,s["a"].get("critical-assets/").then((function(t){a.tableData=t["ip_set"],a.loading=!1}))}},created:function(){this.get_critical_assets_data()}},l=c,r=e("2877"),o=e("6544"),d=e.n(o),u=e("8336"),p=e("a523"),b=e("a844"),h=Object(r["a"])(l,n,i,!1,null,null,null);t["default"]=h.exports;d()(h,{VBtn:u["a"],VContainer:p["a"],VTextarea:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0dec85.3f0e6c9f.js.map