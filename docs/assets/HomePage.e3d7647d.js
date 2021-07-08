var e=Object.defineProperty,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(n,t,a)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,o=(e,o)=>{for(var l in o||(o={}))t.call(o,l)&&r(e,l,o[l]);if(n)for(var l of n(o))a.call(o,l)&&r(e,l,o[l]);return e};import{d as l,p,i as s,o as i,c,u,v as d,g as f,w as y,x as m,r as g}from"./vendor.79ef8dd6.js";const b="\nexport function {0}(value?: any): {1} {\n    const conditions:ConditionItem[] = [\n      {2}\n    ];\n    return safeConvert(value, conditions);\n  }\n",h="\nexport interface {0} {\n{1}\n}\n",v='{\n   label: "{0}",\n   type: "{1}",\n   convert: {2} \n }';function C(e){return e?"(val: any, defaultVal = {0}) => val ?? defaultVal":"(val: any) => {0}"}function w(e){const n=Object.prototype.toString.call(e).match(/\[object[\s]*([A-Za-z]+)\]/);return n?n[1]:""}function S(e){return"Object"===e}function j(e){return"String"===e}function V(e){return"Number"===e}function T(e){return"Array"===e}function _(e){return"Boolean"===e}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const A=/(-|_|\.|\s)+(.)?/g;function O(e){return e.replace(A,((e,n,t)=>t?t.toUpperCase():"")).replace(/^([A-Z])/,(e=>e.toLowerCase()))}function k(e){return e.split(".").map((e=>function(e){return e.charAt(0).toUpperCase()+e.substr(1)}(O(e)))).join(".")}class ${constructor(e){this._str="",this._str=null!=e?e:""}append(e){this._str+=e}newLine(){this._str+="\n"}addBlank(e=2){this._str+=new Array(e).fill(" ").join("")}value(){return this._str}}var x=l({name:"HomePage",data:()=>({inputString:"",configData:null,outString:"",outConvertString:"",fnChecked:!1}),methods:{tranferType(e){var n;if(T(e.type)){const t=new Array(e.deep).fill("[]").join("");return(S(null==(n=e.props[0])?void 0:n.type)?k(e.itemType):O(e.itemType))+t}return e.type},formateJson(){this.inputString=JSON.stringify(JSON.parse(this.inputString),null,2),this.configData=this.toConfigJson(JSON.parse(this.inputString))},generate(){this.outString="",this.configData&&(this.generateInterface(this.configData),this.fnChecked&&(this.outConvertString="\n/**\n * 公共方法可单独放置\n */\n// common start\nfunction safeConvert(source: any, conditions: ConditionItem[]) {\n  const res: any = {};\n  for (const con of conditions) {\n    let value = source?.[con.label];\n    if (con.type === 'Array') {\n        const val: any[] = [];\n        if (!(value instanceof Array)) {\n            value = [];\n        } \n        for (const item of value) {\n            val.push(con.convert(item))\n        }\n        res[con.label] = val;\n    } else {\n        res[con.label] = con.convert(value)\n    }\n  }\n  return res;\n}\n\n\ninterface ConditionItem {\n  label: string;\n  type: string;\n  convert: (val: any, defaultVal?: any) => any;\n}\n// common end\n",this.generateConvert(this.configData)),navigator.clipboard.writeText(this.outString+this.outConvertString).then((e=>{console.log("success"),this.$message.success("已复制到剪切板")})))},toConfigJson(e,n="Welcome",t=1){const a=w(e),r={label:n,jsonKey:n,type:a,tsType:O(a),props:[],isNull:!1,deep:t,comment:""};if(T(a)){const n=this.mergeArray(e,t,r);S(n.type)&&r.props.push(n)}if(S(a)){r.tsType=k(r.label);for(const n in e)if(e.hasOwnProperty(n)){const a=e[n],o=w(a);S(o)||T(o)?r.props.push(this.toConfigJson(a,n)):r.props.push({label:n,type:o,props:[],isNull:!1,deep:t,comment:"",jsonKey:n,tsType:O(o)})}}return r},mergeArray(e,n=1,t){const a=e[0],r=w(a);let l;if(T(r))l=this.mergeArray(a,n+1,t);else if(S(r)){let a={};for(const n of e)a=o(o({},a),n);t&&(t.deep=n,t.itemType=k(t.label)),l=this.toConfigJson(a,t.label)}else l={label:"",type:r,props:[],isNull:!1,deep:n,comment:"",jsonKey:"",tsType:O(r)},t&&(t.deep=n,t.itemType=O(r));return l},generateInterface(e){const n=new $;let t=h.replace("{0}",k(e.label));for(const a of e.props)a.comment&&(n.append(`/** ${a.comment} */`),n.newLine()),S(a.type)&&(n.append(`${a.label}: ${k(a.label)}`),this.generateInterface(a)),T(a.type)&&(n.append(`${a.label}: ${a.itemType}${new Array(a.deep).fill("[]").join()}`),a.props.length&&this.generateInterface(a.props[0])),j(a.type)&&n.append(`${a.label}: string`),V(a.type)&&n.append(`${a.label}: number`),_(a.type)&&n.append(`${a.label}: boolean`),n.append(","),n.newLine();this.outString+=t.replace("{1}",n.value())},generateConvert(e){let n=b.replace("{0}",O(e.label));n=n.replace("{1}",k(e.label));const t=new $;for(const a of e.props){let e=v.replace("{0}",a.label);S(a.type)&&(e=e.replace("{1}","Object"),e=e.replace("{2}",C().replace("{0}",`${O(a.label)}(val)`)),this.generateConvert(a)),T(a.type)&&(e=e.replace("{1}","Array"),a.props.length?(e=e.replace("{2}",C().replace("{0}",`${O(a.label)}(val)`)),this.generateConvert(a.props[0])):e=e.replace("{2}",C(!0).replace("{0}","[]"))),j(a.type)&&(e=e.replace("{1}","String"),e=e.replace("{2}",C(!0).replace("{0}","''"))),V(a.type)&&(e=e.replace("{1}","Number"),e=e.replace("{2}",C(!0).replace("{0}","0"))),_(a.type)&&(e=e.replace("{1}","Boolean"),e=e.replace("{2}",C(!0).replace("{0}","true"))),t.append(e),t.append(",")}t.newLine(),n=n.replace("{2}",t.value()),this.outConvertString+=n}}});const I=y();p("data-v-20e14577");const J={class:"HomePage"},N=m("转换方法"),U=m("格式化"),D=m("生成"),P={style:{overflow:"auto"}},K={key:0,style:{"margin-left":"10px"}};s();const L=I(((e,n,t,a,r,o)=>{const l=g("el-input"),p=g("el-checkbox"),s=g("el-button"),y=g("el-table-column"),m=g("el-option"),b=g("el-select"),h=g("el-table");return i(),c("div",J,[u("div",null,[u(l,{type:"textarea",placeholder:"请输入内容",modelValue:e.inputString,"onUpdate:modelValue":n[1]||(n[1]=n=>e.inputString=n)},null,8,["modelValue"]),u("div",null,[u(p,{modelValue:e.fnChecked,"onUpdate:modelValue":n[2]||(n[2]=n=>e.fnChecked=n)},{default:I((()=>[N])),_:1},8,["modelValue"]),u(s,{onClick:n[3]||(n[3]=n=>e.formateJson())},{default:I((()=>[U])),_:1}),u(s,{onClick:n[4]||(n[4]=n=>e.generate())},{default:I((()=>[D])),_:1})])]),u("div",P,[e.configData?(i(),c(h,{key:0,data:e.configData.props,"row-key":"label","default-expand-all":"","tree-props":{children:"props",hasChildren:"hasChildren"}},{default:I((()=>[u(y,{prop:"jsonKey",label:"jsonKey"}),u(y,{prop:"label",label:"属性名称"}),u(y,{prop:"tsType",label:"类型"},{default:I((n=>["Array"===n.row.type?(i(),c("span",K,d(e.tranferType(n.row)),1)):(i(),c(b,{key:1,style:{"margin-left":"10px"},size:"mini",modelValue:n.row.tsType,"onUpdate:modelValue":e=>n.row.tsType=e},{default:I((()=>[u(m,{label:"string",value:"string"}),u(m,{label:"number",value:"number"}),u(m,{label:"boolean",value:"boolean"})])),_:2},1032,["modelValue","onUpdate:modelValue"]))])),_:1}),u(y,{prop:"tsType",label:"注释"},{default:I((e=>[u(l,{size:"mini",modelValue:e.row.comment,"onUpdate:modelValue":n=>e.row.comment=n},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])):f("",!0)])])}));x.render=L,x.__scopeId="data-v-20e14577";export default x;
