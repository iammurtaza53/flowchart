(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0699ad64"],{"22da":function(t,e,i){"use strict";var n=i("490a");e["a"]=n["a"]},"490a":function(t,e,i){"use strict";i("a9e3"),i("99af"),i("8d4f");var n=i("a9ad"),a=i("80d2");e["a"]=n["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(a["g"])(this.calculatedSize),width:Object(a["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8336:function(t,e,i){"use strict";var n=i("53ca"),a=i("3835"),s=i("5530"),r=(i("c7cd"),i("d3b7"),i("caad"),i("e9c4"),i("86cc"),i("10d2")),o=i("22da"),c=i("4e82"),u=i("f2e7"),l=i("fe6c"),d=i("1c87"),h=i("af2b"),f=i("58df"),b=i("d9bd"),v=Object(f["a"])(r["a"],d["a"],l["a"],h["a"],Object(c["a"])("btnToggle"),Object(u["b"])("inputValue"));e["a"]=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-btn":!0},d["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},contained:function(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},isFlat:function(){return Boolean(this.icon||this.text||this.outlined)},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(s["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(a["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(b["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(o["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,a=this.generateRouteLink(),s=a.tag,r=a.data;return"button"===s&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(Object(n["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?r:i(this.color,r),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},a523:function(t,e,i){"use strict";i("4de4"),i("d3b7"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var n=i("2b0e");function a(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,a=i.data,s=i.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var r=a.attrs;if(r){a.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,s)}})}var s=i("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,a=e.data,r=e.children,o=a.attrs;return o&&(a.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),t(n.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),r)}})},a6d1:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("BaseCard",{attrs:{heading:"FINDINGS"}},[i("div",{staticClass:"my-2"},[i("v-btn",{attrs:{color:"warning"},on:{click:function(e){return t.exportReport()}}},[t._v("Save PDF")])],1),i("FindingsTable",{attrs:{id:"print",data:t.tableData,tableHeaders:t.tableHeaders,loading:t.loading}})],1)],1)},a=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("0e7a")),r={components:{PDFTable:function(){return Promise.all([i.e("chunk-954c6a98"),i.e("chunk-22c17c59"),i.e("chunk-04f9388c"),i.e("chunk-4f7278c3"),i.e("chunk-2d0f1152")]).then(i.bind(null,"9eb2"))}},data:function(){return{tableData:[],tableHeaders:[{text:"Issuse Name",value:"name"},{text:"Risk",value:"risk"},{text:"Count",value:"count"},{text:"Attack Mitre",value:"attackmitre"},{text:"SIA",value:"sia"}],loading:!1}},methods:{get_findings_table:function(){var t=this;this.loading=!0;var e=localStorage.getItem("scan_id");s["a"].get("findings/?scan_id="+e).then((function(e){t.tableData=e["findings_data"],t.loading=!1}))},exportReport:function(){var t={styles:["https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.6.4/vuetify.min.js","https://cdnjs.cloudflare.com/ajax/libs/vuetify/3.0.0-beta.0/vuetify.css","https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.6.4/vuetify.css"]};this.$htmlToPaper("print",t)}},created:function(){this.get_findings_table()}},o=r,c=i("2877"),u=i("6544"),l=i.n(u),d=i("8336"),h=i("a523"),f=Object(c["a"])(o,n,a,!1,null,"4afe5d8b",null);e["default"]=f.exports;l()(f,{VBtn:d["a"],VContainer:h["a"]})},e9c4:function(t,e,i){var n=i("23e7"),a=i("da84"),s=i("d066"),r=i("2ba4"),o=i("e330"),c=i("d039"),u=a.Array,l=s("JSON","stringify"),d=o(/./.exec),h=o("".charAt),f=o("".charCodeAt),b=o("".replace),v=o(1..toString),g=/[\uD800-\uDFFF]/g,p=/^[\uD800-\uDBFF]$/,m=/^[\uDC00-\uDFFF]$/,y=function(t,e,i){var n=h(i,e-1),a=h(i,e+1);return d(p,t)&&!d(m,a)||d(m,t)&&!d(p,n)?"\\u"+v(f(t,0),16):t},x=c((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&n({target:"JSON",stat:!0,forced:x},{stringify:function(t,e,i){for(var n=0,a=arguments.length,s=u(a);n<a;n++)s[n]=arguments[n];var o=r(l,null,s);return"string"==typeof o?b(o,g,y):o}})}}]);
//# sourceMappingURL=chunk-0699ad64.6aeabea9.js.map