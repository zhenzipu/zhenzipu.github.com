(function(e){function t(t){for(var l,o,d=t[0],i=t[1],u=t[2],s=0,c=[];s<d.length;s++)o=d[s],n[o]&&c.push(n[o][0]),n[o]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);p&&p(t);while(c.length)c.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,d=1;d<a.length;d++){var i=a[d];0!==n[i]&&(l=!1)}l&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var l={},n={index:0},r=[];function o(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=l,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(a,l,function(t){return e[t]}.bind(null,l));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var p=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("c31f")},"0169":function(e,t,a){},"26bc":function(e,t,a){"use strict";var l=a("d530"),n=a.n(l);n.a},"42b1":function(e,t,a){"use strict";var l=a("a2c1"),n=a.n(l);n.a},"6a12":function(e,t,a){"use strict";var l=a("7d94"),n=a.n(l);n.a},"6bb5":function(e,t,a){"use strict";var l=a("0169"),n=a.n(l);n.a},"7d94":function(e,t,a){},"89bc":function(e,t,a){},a2c1:function(e,t,a){},c31f:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var l=a("2b0e"),n=a("e069"),r=a.n(n),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("demo")],1)},d=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[a("Icon",{attrs:{type:"logo-buffer"}}),e._v("DEMO")],1),a("Collapse",{attrs:{accordion:""},model:{value:e.defaultName,callback:function(t){e.defaultName=t},expression:"defaultName"}},[a("Panel",{attrs:{name:"1"}},[e._v("\n            搜索框\n            "),a("div",{attrs:{slot:"content"},slot:"content"},[a("tco-form",{attrs:{vertical:"",btnName:"看看",objData:e.aSearch,objDefault:e.objDefault,bhidLable:!1,labelWidth:90},on:{handleFormSubmit:e.handleSearch}})],1)]),a("Panel",{attrs:{name:"2"}},[e._v("\n            分页table\n            "),a("div",{attrs:{slot:"content"},slot:"content"},[a("table-paging",{attrs:{columns:e.aTableColumns,data:e.aTableData,pagination:e.objPageControl,loading:!1,"show-header":!0,stripe:!0,border:!0,disHover:!1,height:!1,width:!1},on:{selectChange:e.selectChange,changePage:e.changePage,changePageSize:e.changePageSize}})],1)]),a("Panel",{attrs:{name:"3"}},[e._v("\n            合并table\n            "),a("div",{attrs:{slot:"content"},slot:"content"},[a("table-combine",{attrs:{id:"zzp",columns:e.aTableColumns,data:e.aTableData,border:!0,disHover:!0},on:{changePageSize:e.changePageSize}})],1)]),a("Panel",{attrs:{name:"4"}},[e._v("\n            编辑table\n            "),a("div",{attrs:{slot:"content"},slot:"content"},[a("table-edit",{attrs:{columns:e.aTableColumnsEdit,data:e.aTableDataEdit,border:!0,disHover:!0}}),a("Button",{on:{click:e.handleLook}},[e._v("控制台查看数据")])],1)]),a("Panel",{attrs:{name:"5"}},[e._v("\n            组织结构树\n            "),a("div",{attrs:{slot:"content"},slot:"content"},[a("tco-tree",{attrs:{objData:e.aTreeData,objDefaultKey:e.objDefaultKey},on:{selectNode:e.selectNode}})],1)])],1)],1)},u=[],p={name:"demo",props:{},data:function(){return{defaultName:"5",objDefault:{inputNumber:4,input:"dddddd",radio:"2",select:"1"},aSearch:[{type:"select",label:"下拉框",value:"select",clearable:!0,filterable:!0,placeholder:"请选择",data:[{name:"option1",disabled:!0,value:"1"},{name:"option2",value:"2"}]},{type:"radio",label:"单选框",value:"radio",placeholder:"请选择",data:[{name:"check1",disabled:!0,value:"1"},{name:"check2",value:"2"}]},{type:"input",value:"input",disabled:!0,clearable:!0,label:"输入框",prefix:"ios-contact",suffix:"ios-search",placeholder:"请输入"},{type:"inputNumber",value:"inputNumber",disabled:!0,label:"数字输入框",placeholder:"请输入"},{type:"date",label:"开始时间",disabled:!0,dateType:"month",value:"begin",format:"yyyy-MM",placeholder:"选择开始时间",limit:{up:"2018-01-01 00:00:00"}},{type:"date",label:"结束时间",disabled:!0,dateType:"month",value:"end",format:"yyyy-MM",placeholder:"选择结束时间",limit:{up:"2018-01-01 00:00:00",down:"2015-01-01 00:00:00"}}],aTableData:[{key1:"aaa",key2:"bbb",key3:"ccc"},{key1:"aaa",key2:"bbb",key3:"ccc"},{key1:"111",key2:"222",key3:"333"}],aTableColumns:[{type:"selection",width:60,align:"center"},{key:"key1",combine:!0,title:"第一个"},{key:"key2",title:"第二个"},{key:"key3",combine:!0,title:"第三个"}],aTableColumnsEdit:[{key:"key1",title:"第一列",edit:{type:"input",key:"key1"}},{key:"key2",title:"第二列",edit:{type:"inputNumber",key:"key2"}},{key:"key3",title:"第三列",edit:{type:"select",key:"key3",option:[]}}],aTableDataEdit:[{key1:"aaa",key2:11,key3:"a"},{key1:"aaa",key2:22,key3:"b"},{key1:"111",key2:44,key3:"c"}],objPageControl:{total:100,pageSize:10,currentPage:1},objDefaultKey:{id:"deptCode",pId:"parentCode",name:"deptName",fullName:"deptFullname",level:"deep",expend:null},aTreeData:[{deptFullname:"京东集团",deptName:"京东集团",deep:0,parentCode:"",deptCode:"00000000"},{deptFullname:"资产管理-资源池",deptName:"资源池",deep:3,parentCode:"C2141",deptCode:"C1"},{deptFullname:"CCO体系",deptName:"CCO体系",deep:1,parentCode:"00000000",deptCode:"00000872"},{deptFullname:"总裁办公室",deptName:"总裁办公室",deep:1,parentCode:"00000000",deptCode:"00010459"},{deptFullname:"CHO&GC体系",deptName:"CHO&GC体系",deep:1,parentCode:"00000000",deptCode:"00012544"},{deptFullname:"CFO体系",deptName:"CFO体系",deep:1,parentCode:"00000000",deptCode:"00012545"},{deptFullname:"京东金融",deptName:"京东金融",deep:1,parentCode:"00000000",deptCode:"00008987"},{deptFullname:"京东商城",deptName:"京东商城",deep:1,parentCode:"00000000",deptCode:"00013807"},{deptFullname:"京东到家",deptName:"京东到家",deep:1,parentCode:"00000000",deptCode:"00017156"},{deptFullname:"综合部",deptName:"综合部",deep:1,parentCode:"00000000",deptCode:"00018479"},{deptFullname:"保险业务筹备部",deptName:"保险业务筹备部",deep:1,parentCode:"00000000",deptCode:"00018996"},{deptFullname:"CPO体系",deptName:"CPO体系",deep:1,parentCode:"00000000",deptCode:"00018997"},{deptFullname:"CTO体系",deptName:"CTO体系",deep:1,parentCode:"00000000",deptCode:"00020462"},{deptFullname:"CCO体系-交易风险管理部",deptName:"交易风险管理部",deep:2,parentCode:"00000872",deptCode:"00013505"},{deptFullname:"CCO体系-办公室",deptName:"办公室",deep:2,parentCode:"00000872",deptCode:"00000893"},{deptFullname:"CCO体系-审计部",deptName:"审计部",deep:2,parentCode:"00000872",deptCode:"00003123"},{deptFullname:"CCO体系-监察部",deptName:"监察部",deep:2,parentCode:"00000872",deptCode:"00003124"},{deptFullname:"京东物流-经营保障部",deptName:"经营保障部",deep:2,parentCode:"00029430",deptCode:"00012113"},{deptFullname:"CCO体系-合规技术研发部",deptName:"合规技术研发部",deep:2,parentCode:"00000872",deptCode:"00016552"},{deptFullname:"总裁办公室-综合管理部",deptName:"综合管理部",deep:2,parentCode:"00010459",deptCode:"00010461"},{deptFullname:"总裁办公室-会务部",deptName:"会务部",deep:2,parentCode:"00010459",deptCode:"00016432"},{deptFullname:"CHO&GC体系-法务部",deptName:"法务部",deep:2,parentCode:"00012544",deptCode:"00000867"},{deptFullname:"CHO&GC体系-办公室",deptName:"办公室",deep:2,parentCode:"00012544",deptCode:"00005354"},{deptFullname:"CHO&GC体系-京东大学",deptName:"京东大学",deep:2,parentCode:"00012544",deptCode:"00007235"},{deptFullname:"CHO&GC体系-集团招采中心",deptName:"集团招采中心",deep:2,parentCode:"00012544",deptCode:"00008373"},{deptFullname:"CHO&GC体系-集团人力资源部",deptName:"集团人力资源部",deep:2,parentCode:"00012544",deptCode:"00017089"},{deptFullname:"CHO&GC体系-行政部",deptName:"行政部",deep:2,parentCode:"00012544",deptCode:"00017129"},{deptFullname:"CHO&GC体系-海外HRBP部",deptName:"海外HRBP部",deep:2,parentCode:"00012544",deptCode:"00024856"},{deptFullname:"CFO体系-财务部",deptName:"财务部",deep:2,parentCode:"00012545",deptCode:"00001099"},{deptFullname:"CFO体系-预算与分析部",deptName:"预算与分析部",deep:2,parentCode:"00012545",deptCode:"00007348"},{deptFullname:"CFO体系-办公室",deptName:"办公室",deep:2,parentCode:"00012545",deptCode:"00007336"},{deptFullname:"CFO体系-投资者关系部",deptName:"投资者关系部",deep:2,parentCode:"00012545",deptCode:"00007349"},{deptFullname:"CFO体系-报告部",deptName:"报告部",deep:2,parentCode:"00012545",deptCode:"00007350"},{deptFullname:"CFO体系-企业发展部",deptName:"企业发展部",deep:2,parentCode:"00012545",deptCode:"00008970"},{deptFullname:"CFO体系-税务与资金管理部",deptName:"税务与资金管理部",deep:2,parentCode:"00012545",deptCode:"00011162"},{deptFullname:"京东金融-支付业务部",deptName:"支付业务部",deep:2,parentCode:"00008987",deptCode:"00010490"},{deptFullname:"京东金融-金融科技业务部",deptName:"金融科技业务部",deep:2,parentCode:"00008987",deptCode:"00012428"},{deptFullname:"京东金融-供应链金融部",deptName:"供应链金融部",deep:2,parentCode:"00008987",deptCode:"00008995"},{deptFullname:"京东金融-个人服务群组-消费金融部",deptName:"消费金融部",deep:3,parentCode:"00046966",deptCode:"00008998"},{deptFullname:"京东金融-个人服务群组-众筹业务部",deptName:"众筹业务部",deep:3,parentCode:"00046966",deptCode:"00011398"},{deptFullname:"京东金融-个人服务群组-保险业务部",deptName:"保险业务部",deep:3,parentCode:"00046966",deptCode:"00012139"},{deptFullname:"京东金融-个人服务群组-财富管理部",deptName:"财富管理部",deep:3,parentCode:"00046966",deptCode:"00013360"}]}},methods:{handleSearch:function(e){console.log("search",e)},selectChange:function(e){console.log("selectChange",e)},changePage:function(e){console.log("page",e)},changePageSize:function(e){console.log("pageSize",e)},handleLook:function(){console.log(11,this.aTableDataEdit)},selectNode:function(e){console.log("node",e)}},mounted:function(){var e=this;setTimeout(function(){e.aTableColumnsEdit[2].edit.option=[{value:"a",label:"000-00"},{value:"b",label:"111-00"},{value:"c",label:"222-00"},{value:"d",label:"333-00"},{value:"e",label:"444-00"}]},500)}},s=p,c=(a("f2b2"),a("2877")),m=Object(c["a"])(s,i,u,!1,null,"1e23aa9a",null);m.options.__file="demo.vue";var b=m.exports,h={name:"app",components:{demo:b}},f=h,v=(a("42b1"),Object(c["a"])(f,o,d,!1,null,null,null));v.options.__file="App.vue";var g=v.exports,C=(a("dcad"),a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{ref:"submitForm",attrs:{autocomplete:"on",model:e.objFormData,"label-width":e.bhidLable?null:e.labelWidth}},[e.vertical?[e._l(e.objData,function(t,l){return a("div",{key:l},["select"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("Select",{attrs:{disabled:t.disabled,clearable:t.clearable||!1,filterable:t.filterable||!1,placeholder:t.placeholder},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}},e._l(t.data,function(t){return a("Option",{key:t.value,attrs:{disabled:t.disabled,value:t.value}},[e._v(e._s(t.name))])}))],1)]:"radio"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("RadioGroup",{model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}},e._l(t.data,function(t){return a("Radio",{key:t.value,attrs:{disabled:t.disabled,label:t.value}},[e._v(e._s(t.name))])}))],1)]:"input"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"blur"}:null}},[a("Input",{attrs:{disabled:t.disabled,prefix:t.prefix||"",suffix:t.suffix||"",placeholder:t.placeholder,clearable:t.clearable},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}})],1)]:"inputNumber"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",type:"number"}:null}},[a("InputNumber",{attrs:{min:1,disabled:t.disabled,placeholder:t.placeholder},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}})],1)]:"date"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("DatePicker",{attrs:{disabled:t.disabled,type:t.dateType,options:e.dateLimit(t.limit),value:e.objFormData[t.value],format:e.objFormData[t.format],placeholder:t.placeholder},on:{"on-change":function(a){e.dataChange(a,t.value)}}})],1)]:e._e()],2)}),a("div",{staticStyle:{textAlign:"center"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("submitForm")}}},[e._v(e._s(e.btnName))])],1)]:[e.objData.length>4?a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"22"}},[a("Row",{attrs:{type:"flex",justify:"start",gutter:10}},e._l(e.objData,function(t,l){return a("Col",{key:l,attrs:{span:"6"}},["select"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("Select",{attrs:{disabled:t.disabled,clearable:t.clearable||!1,filterable:t.filterable||!1,placeholder:t.placeholder},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}},e._l(t.data,function(l){return a("Option",{key:l.value,attrs:{disabled:t.child_item,value:l.value}},[e._v(e._s(l.name))])}))],1)]:"radio"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("RadioGroup",{model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}},e._l(t.data,function(l){return a("Radio",{key:l.value,attrs:{disabled:t.child_item,label:l.value}},[e._v(e._s(l.name))])}))],1)]:"input"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"blur"}:null}},[a("Input",{attrs:{disabled:t.disabled,prefix:t.prefix||"",suffix:t.suffix||"",placeholder:t.placeholder,clearable:t.clearable},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}})],1)]:"inputNumber"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",type:"number"}:null}},[a("InputNumber",{attrs:{min:1,disabled:t.disabled,placeholder:t.placeholder},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}})],1)]:"date"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("DatePicker",{attrs:{type:t.dateType,disabled:t.disabled,options:e.dateLimit(t.limit),value:e.objFormData[t.value],format:e.objFormData[t.format],placeholder:t.placeholder},on:{"on-change":function(a){e.dataChange(a,t.value)}}})],1)]:e._e()],2)}))],1),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("submitForm")}}},[e._v(e._s(e.btnName))])],1)],1):a("Row",{attrs:{gutter:10,type:"flex",justify:"start"}},[e._l(e.objData,function(t,l){return a("Col",{key:l,attrs:{span:"5"}},["select"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("Select",{attrs:{disabled:t.disabled,clearable:t.clearable||!1,filterable:t.filterable||!1,placeholder:t.placeholder},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}},e._l(t.data,function(l){return a("Option",{key:l.value,attrs:{disabled:t.child_item,value:l.value}},[e._v(e._s(l.name))])}))],1)]:"radio"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("RadioGroup",{model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}},e._l(t.data,function(l){return a("Radio",{key:l.value,attrs:{disabled:t.child_item,label:l.value}},[e._v(e._s(l.name))])}))],1)]:"input"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"blur"}:null}},[a("Input",{attrs:{disabled:t.disabled,prefix:t.prefix||"",suffix:t.suffix||"",placeholder:t.placeholder,clearable:t.clearable},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}})],1)]:"inputNumber"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",type:"number"}:null}},[a("InputNumber",{attrs:{min:1,disabled:t.disabled,placeholder:t.placeholder},model:{value:e.objFormData[t.value],callback:function(a){e.$set(e.objFormData,t.value,a)},expression:"objFormData[item.value]"}})],1)]:"date"==t.type?[a("FormItem",{attrs:{label:e.bhidLable?null:t.label,prop:t.required?t.value:null,rules:t.required?{required:!0,message:t.label+"不能为空！",trigger:"change"}:null}},[a("DatePicker",{attrs:{type:t.dateType,disabled:t.disabled,options:e.dateLimit(t.limit),value:e.objFormData[t.value],format:e.objFormData[t.format],placeholder:t.placeholder},on:{"on-change":function(a){e.dataChange(a,t.value)}}})],1)]:e._e()],2)}),a("Col",{attrs:{span:"4"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("submitForm")}}},[e._v(e._s(e.btnName))])],1)],2)]],2)}),y=[],F=a("6bde"),j=(a("c5f6"),{name:"tco-form",props:{objData:Array,bhidLable:Boolean,btnName:{type:String,default:"提交"},labelWidth:{type:Number,default:100},objDefault:Object,vertical:{type:Boolean,default:!1}},data:function(){return{objFormData:{}}},watch:{objDefault:{handler:function(){this.objFormData=this.objDefault},deep:!0}},methods:{handleSelectChange:function(e,t){this.objFormData[t]=e},dateLimit:function(e){return{disabledDate:function(t){return t&&t.valueOf()>new Date(e.up)||t&&t.valueOf()<new Date(e.down)}}},handleSubmit:function(e){for(var t=this,a=!0,l=0;l<this.objData.length;l++){var n=this.objData[l];if(n.required){a=!1;break}}a?this.$emit("handleFormSubmit",this.objFormData):this.$refs[e].validate(function(e){e?t.$emit("handleFormSubmit",t.objFormData):t.$Message.error("搜索参数不符合规则!")})},dataChange:function(e,t){var a=this;"object"==Object(F["a"])(t)?t.map(function(t,l){a.objFormData[t]=e[l]}):this.objFormData[t]=e}},mounted:function(){this.objDefault&&(this.objFormData=this.objDefault)}}),D=j,k=(a("26bc"),Object(c["a"])(D,C,y,!1,null,"d5728196",null));k.options.__file="tco-form.vue";var N=k.exports,_=N,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e(),a("Table",{attrs:{size:e.size?e.size:"small",data:e.data,columns:e.columns,stripe:!!e.stripe&&e.stripe,border:!!e.border&&e.border,"show-header":!e.showHeader||e.showHeader,width:e.width?e.width:"",height:e.height?e.height:"","disabled-hover":!!e.disHover&&e.disHover,"row-class-name":e.rowClassName},on:{"on-selection-change":e.selectChange}}),e.pagination?a("Row",{style:{marginTop:"10px",width:e.width?e.width+"px":"100%"},attrs:{type:"flex",justify:"end"}},[a("Col",[a("Page",{attrs:{size:"small",pageSize:e.pagination.pageSize,total:e.pagination.total,current:e.pagination.currentPage,"show-total":"","show-sizer":"","show-elevator":"","page-size-opts":[10,50,100]},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1):e._e()],1)},x=[],O={name:"table-paging",props:["data","columns","stripe","border","showHeader","width","height","disHover","loading","rowClassName","size","pagination"],data:function(){return{}},methods:{changePage:function(e){this.$emit("changePage",e)},changePageSize:function(e){this.$emit("changePageSize",e)},selectChange:function(e){this.$emit("selectChange",e)}},mounted:function(){}},q=O,S=Object(c["a"])(q,w,x,!1,null,null,null);S.options.__file="table-paging.vue";var P=S.exports,I=P,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e(),a("Table",{attrs:{id:"tableCombine"+e.id,size:e.size?e.size:"small",data:e.data,columns:e.columns,stripe:!!e.stripe&&e.stripe,border:!!e.border&&e.border,"show-header":!e.showHeader||e.showHeader,width:e.width?e.width:"",height:e.height?e.height:"","disabled-hover":!!e.disHover&&e.disHover,"row-class-name":e.rowClassName},on:{"on-selection-change":e.selectChange}})],1)},z=[],H={name:"table-combine",props:["id","data","columns","stripe","border","showHeader","width","height","disHover","loading","rowClassName","size"],data:function(){return{}},methods:{selectChange:function(e){this.$emit("selectChange",e)},combineCell:function(){var e=document.getElementById("tableCombine"+this.id),t=e.querySelector(".ivu-table").querySelector(".ivu-table-body").querySelector(".ivu-table-tbody").querySelectorAll("tr"),a=this.data,l=[];this.columns.map(function(e){l=e.children?l.concat(e.children):l.concat(e)}),l.map(function(e){if(e.combine){var t=e.key,l=0;while(l<a.length){a[l][t+"_num"]=1,a[l][t+"_isNone"]=!1;for(var n=l+1;n<=a.length-1;n++){if(a[l][t]!=a[n][t]||""==a[l][t])break;a[l][t+"_num"]++,a[l][t+"_isNone"]=!1,a[n][t+"_num"]=1,a[n][t+"_isNone"]=!0}l=n}}}),l.map(function(e,l){e.combine&&a.map(function(a,n){t[n].querySelectorAll("td")[l].rowSpan=a[e.key+"_num"],a[e.key+"_isNone"]&&(t[n].querySelectorAll("td")[l].style.display="none")})})}},mounted:function(){this.combineCell()}},$=H,L=Object(c["a"])($,T,z,!1,null,null,null);L.options.__file="table-combine.vue";var E=L.exports,R=E,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e(),a("Table",{attrs:{size:e.size?e.size:"small",data:e.data,columns:e.columns,stripe:!!e.stripe&&e.stripe,border:!!e.border&&e.border,"show-header":!e.showHeader||e.showHeader,width:e.width?e.width:"",height:e.height?e.height:"","disabled-hover":!!e.disHover&&e.disHover,"row-class-name":e.rowClassName}})],1)},M=[],B=function(e,t,a,l){return e("Input",{props:{value:t.row[a]},on:{"on-blur":function(e){t.row[a]=e.target.value,l[t.index][a]=e.target.value}}})},A=function(e,t,a,l){return e("InputNumber",{class:"cell-input-number",props:{min:1,activeChange:!1,number:!0,value:t.row[a]},on:{"on-change":function(e){t.row[a]=e,l[t.index][a]=e}}})},K=function(e,t,a,l,n){return e("Select",{props:{value:t.row[a]},on:{"on-change":function(e){t.row[a]=e,l[t.index][a]=e}}},[n.map(function(t){return e("Option",{props:{value:t.value,label:t.label}})})])},W={name:"table-edit",props:["data","columns","stripe","border","showHeader","width","height","disHover","loading","rowClassName","size"],data:function(){return{}},watch:{columns:function(){this.init()}},methods:{init:function(){var e=this;this.columns.map(function(t){if(t.edit)switch(t.edit.type){case"input":t.render=function(a,l){return B(a,l,t.edit.key,e.data)};break;case"inputNumber":t.render=function(a,l){return A(a,l,t.edit.key,e.data)};break;case"select":t.render=function(a,l){return K(a,l,t.edit.key,e.data,t.edit.option)};break;default:break}})}},created:function(){this.init()},mounted:function(){}},J=W,V=(a("6a12"),Object(c["a"])(J,G,M,!1,null,null,null));V.options.__file="table-edit.vue";var Q=V.exports,U=Q,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Tree",{staticClass:"tco-tree",attrs:{data:e.aServerTree,render:e.renderContent},on:{"on-select-change":e.treeSelectChange}})},Y=[],Z={name:"tco-tree",props:{objData:Array,objDefaultKey:{type:Object,default:function(){return{id:"id",pId:"pId",path:"path",pPath:"pPath",name:"name",fullName:"fullName",level:"level",expend:!1}}}},data:function(){return{aServerTree:[],strCurrentNodeId:""}},watch:{objData:{handler:function(){this.updateTree()},deep:!0}},methods:{treeSelectChange:function(e){this.strCurrentNodeId=e["id"],this.$emit("selectNode",e)},renderContent:function(e,t){var a=this,l=arguments,n=(t.root,t.node,t.data),r="",o="",d=12;0==n.level?(r="ios-home",o="#2d8cf0",d=18):1==n.level?(r="ios-bookmark",o="#19be6b",d=16):2==n.level?(r="md-disc",o="#9a66e4",d=14):3==n.level&&(r="ios-cafe",o="#ff9900");var i="";return parseInt(n.id)===parseInt(this.strCurrentNodeId)&&(i="ivu-tree-title-selected"),e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("Icon",{props:{type:r,size:d,color:o},style:{marginRight:"1px"}}),e("span",{attrs:{class:"ivu-tree-title "+i},on:{click:function(e,t){var n=l[1].node;a.treeSelectChange(n.node)}}},n.title)])])},updateTree:function(){var e=this.objDefaultKey,t={};for(var a in this.objData.map(function(a){var l={};l.id=a[e.id],l.pId=a[e.pId],l.path=a[e.path]||null,l.pPath=a[e.pPath]||null,l.name=a[e.name],l.title=a[e.name],l.fullName=a[e.fullName]||null,l.level=a[e.level],l.expend=a[e.expend]||!1,l.children=[],t[l.id]=l}),t){var l=t[a],n=t[l.pId];n&&n.children.push(l)}this.aServerTree.push(t[this.objData[0][e.id]])}},mounted:function(){this.updateTree()}},ee=Z,te=(a("6bb5"),Object(c["a"])(ee,X,Y,!1,null,"05cf3e77",null));te.options.__file="tco-tree.vue";var ae=te.exports,le=ae,ne=[_,I,R,U,le],re=function e(t){e.installed||ne.map(function(e){return t.component(e.name,e)})};"undefined"!==typeof window&&window.Vue&&re(window.Vue);var oe={install:re,tcoForm:_,tablePaging:I,tableCombine:R,tableEdit:U,tcoTree:le};l["default"].config.productionTip=!1,l["default"].use(r.a),l["default"].use(oe),new l["default"]({render:function(e){return e(g)}}).$mount("#app")},d530:function(e,t,a){},f2b2:function(e,t,a){"use strict";var l=a("89bc"),n=a.n(l);n.a}});
//# sourceMappingURL=index.17b70dc1.js.map