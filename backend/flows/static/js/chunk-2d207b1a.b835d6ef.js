(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207b1a"],{a22e:function(e,s,n){"use strict";n.r(s);var a=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("v-container",[n("BaseCard",{attrs:{heading:"Issues"}},[n("Issues",{attrs:{data:e.tableData,loading:e.loading,issue:e.issue}})],1)],1)},t=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("0e7a")),u={components:{Issues:function(){return Promise.all([n.e("chunk-44370064"),n.e("chunk-68ec70f7"),n.e("chunk-4444174f"),n.e("chunk-1c5f8ebc"),n.e("chunk-2d0c8271")]).then(n.bind(null,"5451"))}},data:function(){return{tableData:[],loading:!1,issue:""}},methods:{get_issues:function(e){var s=this;e&&(this.loading=!0,this.issue=e,i["a"].get("get-issues-by-name/?scan_id=0&issue_name="+e).then((function(e){s.tableData=e["issues"],s.loading=!1})))}},created:function(){this.get_issues(this.$route.params.issue)}},c=u,o=n("2877"),r=n("6544"),d=n.n(r),l=n("a523"),h=Object(o["a"])(c,a,t,!1,null,"a20a6032",null);s["default"]=h.exports;d()(h,{VContainer:l["a"]})}}]);
//# sourceMappingURL=chunk-2d207b1a.b835d6ef.js.map