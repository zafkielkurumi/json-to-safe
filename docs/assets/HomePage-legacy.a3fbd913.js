var __vite_style__=document.createElement("style");__vite_style__.innerHTML=".HomePage[data-v-20e14577]{display:grid;grid-template-columns:repeat(2,1fr);height:calc(100vh - 60px);gap:20px}.el-textarea,.el-textarea__inner{height:100%}",document.head.appendChild(__vite_style__),System.register(["./vendor-legacy.c47731a3.js"],(function(e){"use strict";var n,t,l,r,o,a,s,i,p,c,u;return{setters:[function(e){n=e.d,t=e.p,l=e.i,r=e.o,o=e.c,a=e.t,s=e.u,i=e.g,p=e.w,c=e.v,u=e.r}],execute:function(){const d="\nexport function {0}(value?: any): {1} {\n    const conditions:ConditionItem[] = [\n      {2}\n    ];\n    return safeConvert(value, conditions);\n  }\n",f="\nexport interface {0} {\n{1}\n}\n",y='{\n   label: "{0}",\n   type: "{1}",\n   convert: {2} \n }';function m(e){return e?"(val: any, defaultVal = {0}) => val ?? defaultVal":"(val: any) => {0}"}function b(e){const n=Object.prototype.toString.call(e).match(/\[object[\s]*([A-Za-z]+)\]/);return n?n[1]:""}function v(e){return"Object"===e}function g(e){return"String"===e}function h(e){return"Number"===e}function _(e){return"Array"===e}function S(e){return"Boolean"===e}
/**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const C=/(-|_|\.|\s)+(.)?/g;function w(e){return e.replace(C,((e,n,t)=>t?t.toUpperCase():"")).replace(/^([A-Z])/,(e=>e.toLowerCase()))}function k(e){return e.split(".").map((e=>function(e){return e.charAt(0).toUpperCase()+e.substr(1)}(w(e)))).join(".")}class A{constructor(e){this._str="",this._str=null!=e?e:""}append(e){this._str+=e}newLine(){this._str+="\n"}addBlank(e=2){this._str+=new Array(e).fill(" ").join("")}value(){return this._str}}function x(e,n){const t={};for(const l of n){let n=null==e?void 0:e[l.label];if("Array"===l.type){const e=[];n instanceof Array||(n=[]);for(const t of n)e.push(l.convert(t));t[l.label]=e}else t[l.label]=l.convert(n)}return t}const T=' {\n  "access_token": "sdfsdfsd",\n  "expires_in": "3600",\n  "token_type": "bearer",\n  "scope": "",\n  "refresh_token": "fwerfwefwefs",\n  "testArr":["1"],\n  "testArr1":[{"a": 1}],\n  "user": {\n    "id": "werwe",\n    "name": "fdsfsd",\n    "account":"fdsfsd",\n    "mail_address": "fsdfsdfdsfs@gmail.com",\n    "is_premium": false,\n    "x_restrict": 2,\n    "is_mail_authorized": true,\n    "require_policy_agreement": false\n  },\n  "response": {\n    "access_token": "fsdfsdfsd",\n    "expires_in": 3600,\n    "token_type": "bearer",\n    "scope": "",\n    "refresh_token": "fsdfsdfsd"\n\n  }\n}';console.log(function(e){const n=[{label:"access_token",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"expires_in",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"token_type",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"scope",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"refresh_token",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"testArr",type:"Array",convert:(e,n=[])=>null!=e?e:n},{label:"testArr1",type:"Array",convert:e=>function(e){return x(e,[{label:"a",type:"Number",convert:(e,n=0)=>null!=e?e:n}])}(e)},{label:"user",type:"Object",convert:e=>function(e){return x(e,[{label:"id",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"name",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"account",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"mail_address",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"is_premium",type:"Boolean",convert:(e,n=!0)=>null!=e?e:n},{label:"x_restrict",type:"Number",convert:(e,n=0)=>null!=e?e:n},{label:"is_mail_authorized",type:"Boolean",convert:(e,n=!0)=>null!=e?e:n},{label:"require_policy_agreement",type:"Boolean",convert:(e,n=!0)=>null!=e?e:n}])}(e)},{label:"response",type:"Object",convert:e=>function(e){return x(e,[{label:"access_token",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"expires_in",type:"Number",convert:(e,n=0)=>null!=e?e:n},{label:"token_type",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"scope",type:"String",convert:(e,n="")=>null!=e?e:n},{label:"refresh_token",type:"String",convert:(e,n="")=>null!=e?e:n}])}(e)}];return x(e,n)}(JSON.parse(T)));var V=e("default",n({name:"HomePage",data:()=>({inputString:T,configData:null,outString:"",outConvertString:"",fnChecked:!1}),methods:{tranferType(e){if(_(e.type)){var n;const t=new Array(e.deep).fill("[]").join("");return(v(null===(n=e.props[0])||void 0===n?void 0:n.type)?k(e.itemType):w(e.itemType))+t}return e.type},formateJson(){this.inputString=JSON.stringify(JSON.parse(this.inputString),null,2),this.configData=this.toConfigJson(JSON.parse(this.inputString))},generate(){this.outString="",this.configData&&(this.generateInterface(this.configData),this.fnChecked&&(this.outConvertString="\n/**\n * 公共方法可单独放置\n */\n// common start\nfunction safeConvert(source: any, conditions: ConditionItem[]) {\n  const res: any = {};\n  for (const con of conditions) {\n    let value = source?.[con.label];\n    if (con.type === 'Array') {\n        const val: any[] = [];\n        if (!(value instanceof Array)) {\n            value = [];\n        } \n        for (const item of value) {\n            val.push(con.convert(item))\n        }\n        res[con.label] = val;\n    } else {\n        res[con.label] = con.convert(value)\n    }\n  }\n  return res;\n}\n\n\ninterface ConditionItem {\n  label: string;\n  type: string;\n  convert: (val: any, defaultVal?: any) => any;\n}\n// common end\n",this.generateConvert(this.configData)),navigator.clipboard.writeText(this.outString+this.outConvertString).then((e=>{console.log("success")})))},toConfigJson(e,n="Welcome",t=1){const l=b(e),r={label:n,jsonKey:n,type:l,tsType:w(l),props:[],isNull:!1,deep:t,comment:""};if(_(l)){const n=this.mergeArray(e,t,r);v(n.type)&&r.props.push(n)}if(v(l)){r.tsType=k(r.label);for(const n in e)if(e.hasOwnProperty(n)){const l=e[n],o=b(l);v(o)||_(o)?r.props.push(this.toConfigJson(l,n)):r.props.push({label:n,type:o,props:[],isNull:!1,deep:t,comment:"",jsonKey:n,tsType:w(o)})}}return r},mergeArray(e,n=1,t){const l=e[0],r=b(l);let o;if(_(r))o=this.mergeArray(l,n+1,t);else if(v(r)){let l={};for(const n of e)l={...l,...n};t&&(t.deep=n,t.itemType=k(t.label)),o=this.toConfigJson(l,t.label)}else o={label:"",type:r,props:[],isNull:!1,deep:n,comment:"",jsonKey:"",tsType:w(r)},t&&(t.deep=n,t.itemType=w(r));return o},generateInterface(e){const n=new A;let t=f.replace("{0}",k(e.label));for(const l of e.props)l.comment&&(n.append(`/** ${l.comment} */`),n.newLine()),v(l.type)&&(n.append(`${l.label}: ${k(l.label)}`),this.generateInterface(l)),_(l.type)&&(n.append(`${l.label}: ${l.itemType}${new Array(l.deep).fill("[]").join()}`),l.props.length&&this.generateInterface(l.props[0])),g(l.type)&&n.append(`${l.label}: string`),h(l.type)&&n.append(`${l.label}: number`),S(l.type)&&n.append(`${l.label}: boolean`),n.append(","),n.newLine();this.outString+=t.replace("{1}",n.value())},generateConvert(e){let n=d.replace("{0}",w(e.label));n=n.replace("{1}",k(e.label));const t=new A;for(const l of e.props){let e=y.replace("{0}",l.label);v(l.type)&&(e=e.replace("{1}","Object"),e=e.replace("{2}",m().replace("{0}",`${w(l.label)}(val)`)),this.generateConvert(l)),_(l.type)&&(e=e.replace("{1}","Array"),l.props.length?(e=e.replace("{2}",m().replace("{0}",`${w(l.label)}(val)`)),this.generateConvert(l.props[0])):e=e.replace("{2}",m(!0).replace("{0}","[]"))),g(l.type)&&(e=e.replace("{1}","String"),e=e.replace("{2}",m(!0).replace("{0}","''"))),h(l.type)&&(e=e.replace("{1}","Number"),e=e.replace("{2}",m(!0).replace("{0}","0"))),S(l.type)&&(e=e.replace("{1}","Boolean"),e=e.replace("{2}",m(!0).replace("{0}","true"))),t.append(e),t.append(",")}t.newLine(),n=n.replace("{2}",t.value()),this.outConvertString+=n}}}));const j=p();t("data-v-20e14577");const N={class:"HomePage"},$=c("转换方法"),J=c("格式化"),O=c("生成"),I={style:{overflow:"auto"}},U={key:0,style:{"margin-left":"10px"}};l();const D=j(((e,n,t,l,p,c)=>{const d=u("el-input"),f=u("el-checkbox"),y=u("el-button"),m=u("el-table-column"),b=u("el-option"),v=u("el-select"),g=u("el-table");return r(),o("div",N,[a("div",null,[a(d,{type:"textarea",placeholder:"请输入内容",modelValue:e.inputString,"onUpdate:modelValue":n[1]||(n[1]=n=>e.inputString=n)},null,8,["modelValue"]),a("div",null,[a(f,{modelValue:e.fnChecked,"onUpdate:modelValue":n[2]||(n[2]=n=>e.fnChecked=n)},{default:j((()=>[$])),_:1},8,["modelValue"]),a(y,{onClick:n[3]||(n[3]=n=>e.formateJson())},{default:j((()=>[J])),_:1}),a(y,{onClick:n[4]||(n[4]=n=>e.generate())},{default:j((()=>[O])),_:1})])]),a("div",I,[e.configData?(r(),o(g,{key:0,data:e.configData.props,"row-key":"label","default-expand-all":"","tree-props":{children:"props",hasChildren:"hasChildren"}},{default:j((()=>[a(m,{prop:"jsonKey",label:"jsonKey"}),a(m,{prop:"label",label:"属性名称"}),a(m,{prop:"tsType",label:"类型"},{default:j((n=>["Array"===n.row.type?(r(),o("span",U,s(e.tranferType(n.row)),1)):(r(),o(v,{key:1,style:{"margin-left":"10px"},size:"mini",modelValue:n.row.tsType,"onUpdate:modelValue":e=>n.row.tsType=e},{default:j((()=>[a(b,{label:"string",value:"string"}),a(b,{label:"number",value:"number"}),a(b,{label:"boolean",value:"boolean"})])),_:2},1032,["modelValue","onUpdate:modelValue"]))])),_:1}),a(m,{prop:"tsType",label:"注释"},{default:j((e=>[a(d,{size:"mini",modelValue:e.row.comment,"onUpdate:modelValue":n=>e.row.comment=n},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])):i("",!0)])])}));V.render=D,V.__scopeId="data-v-20e14577"}}}));
