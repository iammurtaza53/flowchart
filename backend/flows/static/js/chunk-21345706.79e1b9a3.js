(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21345706"],{"4bd4":function(t,e,i){"use strict";var a=i("5530"),n=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("d3b7"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),r=i("3206");e["a"]=Object(n["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4c54":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODNFNEJCQjFEQzIxMUU3OERFRkU4NjlBMUU3RjM5RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RDlBRDQ3QTg0NDExMUU3ODM2Nzk0NTIyNjExRUVBNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RDlBRDQ3OTg0NDExMUU3ODM2Nzk0NTIyNjExRUVBNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNDUyRjkxN0QwMjExRTdBMDg1OTk1ODJGNTVFMzcwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQwNDUyRjkyN0QwMjExRTdBMDg1OTk1ODJGNTVFMzcwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+a5xIawAAAtZJREFUeNrsmEtIlFEUx520MRryUamtEzOIDKIghRZFjZtWQlaLoMdKjax1iyCidUnZRqIIsgcJ0aYX1SqjxyqqASFoG0UzJYHWMP0P/Ac+7J7r+WZuNsQc+OFw7nfP/fvde8937k0UCoWaSrZFNRVuVYH/vcA6l7Nj3SZL38WgF+wEm8Fq0MS2LPgAXoKH4D74OV/AqbevbALnMRFxDAyCFuWZNtINjoLP4AI4S/F/bYr3ggw46RHnspXsk2GM4AJrwSgY55sp1doYY5QxgwiUQDfBQMC1P8CYtSEEyrrpMw78FfwwPisxz5UrcA844mn/Ba6ANFgGloMUN5L4LvMZzYY4RkkCZZART/sk2AAOMJVMR9py9B0EXeCZJ85IJD3FEiippFVpk/WzDbwzTOV7sJ19XNbKsWIJTDLPuew52A9mYmyKGfaZVNoHOaZZYFrJc7KeDoHZEnbuLPu61mQLx4wl0GXjnLI/vo7gNtdejr87HM9Jor6mxO6NI3Cj4r/l8HWCF0wbDaSPvk5jDHVMTeAah09K7ycO/xllFzaxba49ZSzXLJgFNjp82TmppGg7POvOtVSmlYKhsdxiIRnwU5e0xtcE5hy+lPJfPvIIeaC8qVS51cyU4t/q8J1QpizLNkuM2AJfK/7dSurYAibAdzJBX8YYQ7WE61yMkn8X/txVEnWXkgsttha80Sp5lPwJ6xuUtfNFOcNcKnHDJNm3LsQUy2fpvNImU3cV1McYp559ukMeO6VQ/aS09YPHoN0wRjuf7Q99Ls7yRKZZD8utMSbraOpooG+Mz/QEPRdH7AbTwpBnXR0mxZJfpnPpQt4sDDNtWKw5pDirwDzXz8VKvpvJs+rd59k4C3c347Hr4B44znW5Ikbfbzw8SaL+yLuaJWA9kA/DqhACi7tbrjFOswpORy6PmiObpXh5JDn1DsXlPXnylPlTV0lWvcCsCvzX9luAAQARlpHG7ldESwAAAABJRU5ErkJggg=="},"58f7":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{staticClass:"info d-none d-md-flex align-center justify-center",attrs:{cols:"12",lg:"7",xl:"6"}},[a("v-container",[a("div",{staticClass:"pa-10"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8",xl:"5"}},[a("div",[a("h2",{staticClass:"display-1 white--text font-weight-medium"},[t._v("Elegant Design with unlimited features, built with love")]),a("h6",{staticClass:"subtitle-1 mt-4 white--text op-5 font-weight-regular"},[t._v("Wrappixel helps developers to build organized and well-coded admin dashboards full of beautiful and feature rich modules.")]),a("v-btn",{staticClass:"mt-4 text-capitalize",attrs:{"x-large":"",outlined:"",color:"white"}},[t._v("Learn More")])],1)])],1)],1)])],1),a("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",lg:"5",xl:"6"}},[a("v-container",[a("div",{staticClass:"pa-7 pa-sm-12"},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"9",xl:"6"}},[a("img",{attrs:{src:i("4c54")}}),a("h2",{staticClass:"font-weight-bold mt-4 blue-grey--text text--darken-2"},[t._v("Sign Up")]),a("h6",{staticClass:"subtitle-1"},[t._v(" Don't have an account? "),a("a",{attrs:{href:"#/pages/fulllogin/"}},[t._v("Sign in")])]),a("v-form",{ref:"form",attrs:{"lazy-validation":"",action:"/pages/boxedlogin"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{staticClass:"mt-4",attrs:{rules:t.fnameRules,label:"Full Name",required:"",outlined:""},model:{value:t.fname,callback:function(e){t.fname=e},expression:"fname"}}),a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:"",outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{counter:10,rules:t.passwordRules,label:"Password",required:"",outlined:"","append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticClass:"d-block d-sm-flex align-center mb-4 mb-sm-0"},[a("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"I agree to the terms and privacy",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"info",block:"",submit:""},on:{click:t.submit}},[t._v("Sign In")])],1),a("div",{staticClass:"text-center mt-6"},[a("v-chip",{staticClass:"mr-2",attrs:{pill:""}},[a("v-avatar",{attrs:{left:""}},[a("v-btn",{staticClass:"white--text",attrs:{color:"blue lighten-1"}},[a("v-icon",[t._v("mdi-twitter")])],1)],1),t._v("Twitter ")],1),a("v-chip",{attrs:{pill:""}},[a("v-avatar",{attrs:{left:""}},[a("v-btn",{staticClass:"white--text",attrs:{color:"teal lighten-2"}},[a("v-icon",[t._v("mdi-github")])],1)],1),t._v("Github ")],1)],1)],1)],1)],1)])],1)],1)},n=[],s=(i("ac1f"),i("00b4"),{name:"FullLogin",data:function(){return{password:"",show1:!1,passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length<=10||"Password must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],checkbox:!1,fname:"",fnameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}]}},methods:{submit:function(){this.$refs.form.validate(),this.$refs.form.validate(!0)&&this.$router.push({path:"/pages/fulllogin"})}}}),r=s,o=i("2877"),l=i("6544"),c=i.n(l),u=i("8212"),d=i("8336"),h=i("ac7c"),p=i("cc20"),f=i("62ad2"),b=i("a523"),v=i("4bd4"),m=i("132d"),g=i("0fd9"),w=i("8654"),x=Object(o["a"])(r,a,n,!1,null,null,null);e["default"]=x.exports;c()(x,{VAvatar:u["a"],VBtn:d["a"],VCheckbox:h["a"],VChip:p["a"],VCol:f["a"],VContainer:b["a"],VForm:v["a"],VIcon:m["a"],VRow:g["a"],VTextField:w["a"]})},"6ca7":function(t,e,i){},8547:function(t,e,i){"use strict";var a=i("2b0e"),n=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["i"]}}})},"8adc":function(t,e,i){},ac7c:function(t,e,i){"use strict";var a=i("5530"),n=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),s=i("c37a"),r=i("fe09");e["a"]=r["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},cc20:function(t,e,i){"use strict";var a=i("3835"),n=i("5530"),s=(i("d3b7"),i("4de4"),i("8adc"),i("58df")),r=i("0789"),o=i("9d26"),l=i("a9ad"),c=i("4e82"),u=i("7560"),d=i("f2e7"),h=i("1c87"),p=i("af2b"),f=i("d9bd");e["a"]=Object(s["a"])(l["a"],p["a"],h["a"],u["a"],Object(c["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-chip":!0},h["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(a["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(f["a"])(n,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,s=i.data;s.attrs=Object(n["a"])(Object(n["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var r=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(r,s),e)}})}}]);
//# sourceMappingURL=chunk-21345706.79e1b9a3.js.map