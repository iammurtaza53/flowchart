(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fed6cdda"],{"11b3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("BaseCard",{attrs:{heading:"Greybox"}},[a("v-text-field",{attrs:{label:"Username"},model:{value:t.data.username,callback:function(e){t.$set(t.data,"username",e)},expression:"data.username"}}),a("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.submit()}}},[t._v(" Save ")])],1)],1)},i=[],s=a("0e7a"),r={data:function(){return{data:{username:"",password:""}}},methods:{submit:function(){var t=this;s["a"].post("greybox/",this.data).then((function(e){t.data={username:""}}))},getLastUsername:function(){var t=this;s["a"].get("greybox").then((function(e){t.data["username"]=e["data"]["username"],t.data["password"]=e["data"]["password"]}))}},created:function(){this.getLastUsername()}},o=r,c=a("2877"),u=a("6544"),l=a.n(u),d=a("8336"),h=a("a523"),f=a("8654"),b=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=b.exports;l()(b,{VBtn:d["a"],VContainer:h["a"],VTextField:f["a"]})},"22da":function(t,e,a){"use strict";var n=a("490a");e["a"]=n["a"]},"490a":function(t,e,a){"use strict";a("a9e3"),a("99af"),a("8d4f");var n=a("a9ad"),i=a("80d2");e["a"]=n["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(i["g"])(this.calculatedSize),width:Object(i["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8336:function(t,e,a){"use strict";var n=a("53ca"),i=a("3835"),s=a("5530"),r=(a("c7cd"),a("d3b7"),a("caad"),a("e9c4"),a("86cc"),a("10d2")),o=a("22da"),c=a("4e82"),u=a("f2e7"),l=a("fe6c"),d=a("1c87"),h=a("af2b"),f=a("58df"),b=a("d9bd"),v=Object(f["a"])(r["a"],d["a"],l["a"],h["a"],Object(c["a"])("btnToggle"),Object(u["b"])("inputValue"));e["a"]=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-btn":!0},d["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},contained:function(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},isFlat:function(){return Boolean(this.icon||this.text||this.outlined)},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(s["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var a=Object(i["a"])(e,2),n=a[0],s=a[1];t.$attrs.hasOwnProperty(n)&&Object(b["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(o["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],a=this.isFlat?this.setTextColor:this.setBackgroundColor,i=this.generateRouteLink(),s=i.tag,r=i.data;return"button"===s&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(Object(n["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?r:a(this.color,r),e)}})},"86cc":function(t,e,a){},"8d4f":function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var n=a("2b0e");function i(t){return n["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,i=a.data,s=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var r=i.attrs;if(r){i.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,s)}})}var s=a("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,i=e.data,r=e.children,o=i.attrs;return o&&(i.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),r)}})},e9c4:function(t,e,a){var n=a("23e7"),i=a("da84"),s=a("d066"),r=a("2ba4"),o=a("e330"),c=a("d039"),u=i.Array,l=s("JSON","stringify"),d=o(/./.exec),h=o("".charAt),f=o("".charCodeAt),b=o("".replace),v=o(1..toString),p=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,m=/^[\uDC00-\uDFFF]$/,y=function(t,e,a){var n=h(a,e-1),i=h(a,e+1);return d(g,t)&&!d(m,i)||d(m,t)&&!d(g,n)?"\\u"+v(f(t,0),16):t},x=c((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&n({target:"JSON",stat:!0,forced:x},{stringify:function(t,e,a){for(var n=0,i=arguments.length,s=u(i);n<i;n++)s[n]=arguments[n];var o=r(l,null,s);return"string"==typeof o?b(o,p,y):o}})}}]);
//# sourceMappingURL=chunk-fed6cdda.41a199ab.js.map