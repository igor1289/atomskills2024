<<<<<<<< HEAD:app/views/assets/LK.cb188802.js
import{Q as $}from"./QImg.683f7fac.js";import{r as b,a as p,g as X,O as ee,G,N as le,h as S,c as te,E as ae,K as ne,m as ie,y as oe,s as q,p as h,q as d,v as B,Q as W}from"./index.5fe79202.js";import{Q as se}from"./QChip.888ee3da.js";import{k as ue,u as re,e as de,g as me,h as ce,l as fe,f as pe,i as M,Q as x}from"./QInput.2ff5830a.js";import{h as ve}from"./format.b9446fb2.js";import{Q as Y,a as ge}from"./QToggle.6013aa78.js";import{Q as be}from"./QForm.cd873a6f.js";import{Q as Ve}from"./QPage.2b945278.js";import{u as ye}from"./use-quasar.3f116713.js";import{_ as he}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-timeout.58dcd5cd.js";import"./use-dark.21ae0e92.js";import"./use-checkbox.cd1f49f0.js";function w(e,t,y,n){const r=[];return e.forEach(c=>{n(c)===!0?r.push(c):t.push({failedPropValidation:y,file:c})}),r}function A(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),G(e)}const Fe={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},xe=["rejected"];function Se({editable:e,dnd:t,getFileInput:y,addFilesToQueue:n}){const{props:r,emit:c,proxy:l}=X(),C=b(null),P=p(()=>r.accept!==void 0?r.accept.split(",").map(a=>(a=a.trim(),a==="*"?"*/":(a.endsWith("/*")&&(a=a.slice(0,a.length-1)),a.toUpperCase()))):null),Q=p(()=>parseInt(r.maxFiles,10)),k=p(()=>parseInt(r.maxTotalSize,10));function _(a){if(e.value)if(a!==Object(a)&&(a={target:null}),a.target!==null&&a.target.matches('input[type="file"]')===!0)a.clientX===0&&a.clientY===0&&ee(a);else{const g=y();g&&g!==a.target&&g.click(a)}}function U(a){e.value&&a&&n(null,a)}function D(a,g,z,N){let o=Array.from(g||a.target.files);const v=[],F=()=>{v.length!==0&&c("rejected",v)};if(r.accept!==void 0&&P.value.indexOf("*/")===-1&&(o=w(o,v,"accept",s=>P.value.some(m=>s.type.toUpperCase().startsWith(m)||s.name.toUpperCase().endsWith(m))),o.length===0))return F();if(r.maxFileSize!==void 0){const s=parseInt(r.maxFileSize,10);if(o=w(o,v,"max-file-size",m=>m.size<=s),o.length===0)return F()}if(r.multiple!==!0&&o.length!==0&&(o=[o[0]]),o.forEach(s=>{s.__key=s.webkitRelativePath+s.lastModified+s.name+s.size}),N===!0){const s=z.map(m=>m.__key);o=w(o,v,"duplicate",m=>s.includes(m.__key)===!1)}if(o.length===0)return F();if(r.maxTotalSize!==void 0){let s=N===!0?z.reduce((m,T)=>m+T.size,0):0;if(o=w(o,v,"max-total-size",m=>(s+=m.size,s<=k.value)),o.length===0)return F()}if(typeof r.filter=="function"){const s=r.filter(o);o=w(o,v,"filter",m=>s.includes(m))}if(r.maxFiles!==void 0){let s=N===!0?z.length:0;if(o=w(o,v,"max-files",()=>(s++,s<=Q.value)),o.length===0)return F()}if(F(),o.length!==0)return o}function O(a){A(a),t.value!==!0&&(t.value=!0)}function u(a){G(a),(a.relatedTarget!==null||le.is.safari!==!0?a.relatedTarget!==C.value:document.elementsFromPoint(a.clientX,a.clientY).includes(C.value)===!1)===!0&&(t.value=!1)}function I(a){A(a);const g=a.dataTransfer.files;g.length!==0&&n(null,g),t.value=!1}function R(a){if(t.value===!0)return S("div",{ref:C,class:`q-${a}__dnd absolute-full`,onDragenter:A,onDragover:A,onDragleave:u,onDrop:I})}return Object.assign(l,{pickFiles:_,addFiles:U}),{pickFiles:_,addFiles:U,onDragover:O,onDragleave:u,processFiles:D,getDndNode:R,maxFilesNumber:Q,maxTotalSizeNumber:k}}var Ce=te({name:"QFile",inheritAttrs:!1,props:{...ue,...re,...Fe,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...de,...xe],setup(e,{slots:t,emit:y,attrs:n}){const{proxy:r}=X(),c=me(),l=b(null),C=b(!1),P=ce(e),{pickFiles:Q,onDragover:k,onDragleave:_,processFiles:U,getDndNode:D}=Se({editable:c.editable,dnd:C,getFileInput:K,addFilesToQueue:L}),O=fe(e),u=p(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),I=p(()=>M(u.value)),R=p(()=>u.value.map(i=>i.name).join(", ")),a=p(()=>ve(u.value.reduce((i,f)=>i+f.size,0))),g=p(()=>({totalSize:a.value,filesNumber:u.value.length,maxFiles:e.maxFiles})),z=p(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:P.value,...n,id:c.targetUid.value,disabled:c.editable.value!==!0})),N=p(()=>"q-file q-field--auto-height"+(C.value===!0?" q-file--dnd":"")),o=p(()=>e.multiple===!0&&e.append===!0);function v(i){const f=u.value.slice();f.splice(i,1),s(f)}function F(i){const f=u.value.indexOf(i);f!==-1&&v(f)}function s(i){y("update:modelValue",e.multiple===!0?i:i[0])}function m(i){i.keyCode===13&&ne(i)}function T(i){(i.keyCode===13||i.keyCode===32)&&Q(i)}function K(){return l.value}function L(i,f){const V=U(i,f,u.value,o.value),E=K();E!=null&&(E.value=""),V!==void 0&&((e.multiple===!0?e.modelValue&&V.every(Z=>u.value.includes(Z)):e.modelValue===V[0])||s(o.value===!0?u.value.concat(V):V))}function j(){return[S("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function H(){if(t.file!==void 0)return u.value.length===0?j():u.value.map((f,V)=>t.file({index:V,file:f,ref:this}));if(t.selected!==void 0)return u.value.length===0?j():t.selected({files:u.value,ref:this});if(e.useChips===!0)return u.value.length===0?j():u.value.map((f,V)=>S(se,{key:"file-"+V,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{v(V)}},()=>S("span",{class:"ellipsis",textContent:f.name})));const i=e.displayValue!==void 0?e.displayValue:R.value;return i.length!==0?[S("div",{class:e.inputClass,style:e.inputStyle,textContent:i})]:j()}function J(){const i={ref:l,...z.value,...O.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:L};return e.multiple===!0&&(i.multiple=!0),S("input",i)}return Object.assign(c,{fieldClass:N,emitValue:s,hasValue:I,inputRef:l,innerValue:u,floatingLabel:p(()=>I.value===!0||M(e.displayValue)),computedCounter:p(()=>{if(e.counterLabel!==void 0)return e.counterLabel(g.value);const i=e.maxFiles;return`${u.value.length}${i!==void 0?" / "+i:""} (${a.value})`}),getControlChild:()=>D("file"),getControl:()=>{const i={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(i,{onDragover:k,onDragleave:_,onKeydown:m,onKeyup:T}),S("div",i,[J()].concat(H()))}}),Object.assign(r,{removeAtIndex:v,removeFile:F,getNativeElement:()=>l.value}),ae(r,"nativeEl",()=>l.value),pe(c)}});const we={setup(){const e=ye(),t=b(null),y=b(null),n=b(!1);return{name:t,pol:b("line"),age:y,accept:n,password:b(""),isPwd:b(!0),email:b(""),tel:b(""),onSubmit(){n.value!==!0?e.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})},onReset(){t.value=null,y.value=null,n.value=!1}}}},ze={style:{"max-width":"700px"}},Ne={class:"row example-row-column-width"},qe={class:"col-4 q-pa-md",style:{"max-width":"500px"}},Pe={class:"q-pb-md"},Qe={class:"col-8 q-pa-md"},ke={class:""},_e={class:"q-gutter-sm"},Ue={class:"q-pa-md"},Ie={class:"row example-row-column-width"};function je(e,t,y,n,r,c){return ie(),oe(Ve,{class:"flex flex-center"},{default:q(()=>[h("div",ze,[d(be,{onSubmit:n.onSubmit,onReset:n.onReset,class:"q-gutter"},{default:q(()=>[h("div",Ne,[h("div",qe,[h("div",Pe,[d($,{src:"/public/icons/photoProfile.png"}),d(Ce,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model=l),label:"\u0412\u0430\u0448\u0435 \u0444\u043E\u0442\u043E"},{default:q(()=>[d(B,{name:"attach_file"})]),_:1},8,["modelValue"])]),d(x,{filled:"",modelValue:e.lastName,"onUpdate:modelValue":t[1]||(t[1]=l=>e.lastName=l),label:"\u041B\u043E\u0433\u0438\u043D","lazy-rules":"",rules:[l=>l&&l.length>0||"\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043B\u043E\u0433\u0438\u043D"]},null,8,["modelValue","rules"]),d(x,{modelValue:n.password,"onUpdate:modelValue":t[3]||(t[3]=l=>n.password=l),filled:"",type:n.isPwd?"password":"text",hint:"\u041F\u0430\u0440\u043E\u043B\u044C"},{append:q(()=>[d(B,{name:n.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[2]||(t[2]=l=>n.isPwd=!n.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),h("div",Qe,[d(x,{filled:"",modelValue:n.name,"onUpdate:modelValue":t[4]||(t[4]=l=>n.name=l),label:"\u0418\u043C\u044F","lazy-rules":"",rules:[l=>l&&l.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F!"]},null,8,["modelValue","rules"]),d(x,{filled:"",modelValue:e.lastName,"onUpdate:modelValue":t[5]||(t[5]=l=>e.lastName=l),label:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F","lazy-rules":"",rules:[l=>l&&l.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E!"]},null,8,["modelValue","rules"]),d(x,{filled:"",modelValue:e.fatherName,"onUpdate:modelValue":t[6]||(t[6]=l=>e.fatherName=l),label:"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E","lazy-rules":"",rules:[l=>l&&l.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0447\u0435\u0442\u0441\u0432\u043E!"]},null,8,["modelValue","rules"]),h("div",ke,[h("div",_e,[d(Y,{modelValue:n.pol,"onUpdate:modelValue":t[7]||(t[7]=l=>n.pol=l),val:"Man",label:"\u041C\u0443\u0436\u0441\u043A\u043E\u0439"},null,8,["modelValue"]),d(Y,{modelValue:n.pol,"onUpdate:modelValue":t[8]||(t[8]=l=>n.pol=l),val:"Woman",label:"\u0416\u0435\u043D\u0441\u043A\u0438\u0439"},null,8,["modelValue"])])]),d(x,{class:"q-pb-md",standout:"",modelValue:n.email,"onUpdate:modelValue":t[9]||(t[9]=l=>n.email=l),type:"email",prefix:"Email:",suffix:"@gmail.com"},{prepend:q(()=>[d(B,{name:"mail"})]),_:1},8,["modelValue"]),d(x,{class:"q-pb-md",filled:"",modelValue:n.tel,"onUpdate:modelValue":t[10]||(t[10]=l=>n.tel=l),label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",mask:"+7 (###) ###-##-##","fill-mask":""},null,8,["modelValue"])])]),h("div",Ue,[d(ge,{class:"q-pb-md",modelValue:n.accept,"onUpdate:modelValue":t[11]||(t[11]=l=>n.accept=l),label:"\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"},null,8,["modelValue"]),h("div",Ie,[d(W,{class:"col",label:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",type:"submit",color:"primary"}),d(W,{label:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",type:"reset",color:"primary",flat:"",class:"q-ml-sm col"})])])]),_:1},8,["onSubmit","onReset"])])]),_:1})}var Ge=he(we,[["render",je]]);export{Ge as default};
========
import{Q as $}from"./QImg.7615609d.js";import{r as b,a as p,g as X,O as ee,G,N as le,h as S,c as te,E as ae,K as ne,m as ie,y as oe,s as q,p as h,q as d,v as B,Q as W}from"./index.d2a66da5.js";import{Q as se}from"./QChip.2f7a5393.js";import{k as ue,u as re,e as de,g as me,h as ce,l as fe,f as pe,i as M,Q as x}from"./QInput.2d13f569.js";import{h as ve}from"./format.b9446fb2.js";import{Q as Y,a as ge}from"./QToggle.09d9f0cf.js";import{Q as be}from"./QForm.1a0cbaeb.js";import{Q as Ve}from"./QPage.5e2c260c.js";import{u as ye}from"./use-quasar.da5dcd47.js";import{_ as he}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-timeout.30165dd9.js";import"./use-dark.9925c1ae.js";import"./use-checkbox.bd820fa4.js";function w(e,t,y,n){const r=[];return e.forEach(c=>{n(c)===!0?r.push(c):t.push({failedPropValidation:y,file:c})}),r}function A(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),G(e)}const Fe={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},xe=["rejected"];function Se({editable:e,dnd:t,getFileInput:y,addFilesToQueue:n}){const{props:r,emit:c,proxy:l}=X(),C=b(null),P=p(()=>r.accept!==void 0?r.accept.split(",").map(a=>(a=a.trim(),a==="*"?"*/":(a.endsWith("/*")&&(a=a.slice(0,a.length-1)),a.toUpperCase()))):null),Q=p(()=>parseInt(r.maxFiles,10)),k=p(()=>parseInt(r.maxTotalSize,10));function _(a){if(e.value)if(a!==Object(a)&&(a={target:null}),a.target!==null&&a.target.matches('input[type="file"]')===!0)a.clientX===0&&a.clientY===0&&ee(a);else{const g=y();g&&g!==a.target&&g.click(a)}}function U(a){e.value&&a&&n(null,a)}function D(a,g,z,N){let o=Array.from(g||a.target.files);const v=[],F=()=>{v.length!==0&&c("rejected",v)};if(r.accept!==void 0&&P.value.indexOf("*/")===-1&&(o=w(o,v,"accept",s=>P.value.some(m=>s.type.toUpperCase().startsWith(m)||s.name.toUpperCase().endsWith(m))),o.length===0))return F();if(r.maxFileSize!==void 0){const s=parseInt(r.maxFileSize,10);if(o=w(o,v,"max-file-size",m=>m.size<=s),o.length===0)return F()}if(r.multiple!==!0&&o.length!==0&&(o=[o[0]]),o.forEach(s=>{s.__key=s.webkitRelativePath+s.lastModified+s.name+s.size}),N===!0){const s=z.map(m=>m.__key);o=w(o,v,"duplicate",m=>s.includes(m.__key)===!1)}if(o.length===0)return F();if(r.maxTotalSize!==void 0){let s=N===!0?z.reduce((m,T)=>m+T.size,0):0;if(o=w(o,v,"max-total-size",m=>(s+=m.size,s<=k.value)),o.length===0)return F()}if(typeof r.filter=="function"){const s=r.filter(o);o=w(o,v,"filter",m=>s.includes(m))}if(r.maxFiles!==void 0){let s=N===!0?z.length:0;if(o=w(o,v,"max-files",()=>(s++,s<=Q.value)),o.length===0)return F()}if(F(),o.length!==0)return o}function O(a){A(a),t.value!==!0&&(t.value=!0)}function u(a){G(a),(a.relatedTarget!==null||le.is.safari!==!0?a.relatedTarget!==C.value:document.elementsFromPoint(a.clientX,a.clientY).includes(C.value)===!1)===!0&&(t.value=!1)}function I(a){A(a);const g=a.dataTransfer.files;g.length!==0&&n(null,g),t.value=!1}function R(a){if(t.value===!0)return S("div",{ref:C,class:`q-${a}__dnd absolute-full`,onDragenter:A,onDragover:A,onDragleave:u,onDrop:I})}return Object.assign(l,{pickFiles:_,addFiles:U}),{pickFiles:_,addFiles:U,onDragover:O,onDragleave:u,processFiles:D,getDndNode:R,maxFilesNumber:Q,maxTotalSizeNumber:k}}var Ce=te({name:"QFile",inheritAttrs:!1,props:{...ue,...re,...Fe,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...de,...xe],setup(e,{slots:t,emit:y,attrs:n}){const{proxy:r}=X(),c=me(),l=b(null),C=b(!1),P=ce(e),{pickFiles:Q,onDragover:k,onDragleave:_,processFiles:U,getDndNode:D}=Se({editable:c.editable,dnd:C,getFileInput:K,addFilesToQueue:L}),O=fe(e),u=p(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),I=p(()=>M(u.value)),R=p(()=>u.value.map(i=>i.name).join(", ")),a=p(()=>ve(u.value.reduce((i,f)=>i+f.size,0))),g=p(()=>({totalSize:a.value,filesNumber:u.value.length,maxFiles:e.maxFiles})),z=p(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:P.value,...n,id:c.targetUid.value,disabled:c.editable.value!==!0})),N=p(()=>"q-file q-field--auto-height"+(C.value===!0?" q-file--dnd":"")),o=p(()=>e.multiple===!0&&e.append===!0);function v(i){const f=u.value.slice();f.splice(i,1),s(f)}function F(i){const f=u.value.indexOf(i);f!==-1&&v(f)}function s(i){y("update:modelValue",e.multiple===!0?i:i[0])}function m(i){i.keyCode===13&&ne(i)}function T(i){(i.keyCode===13||i.keyCode===32)&&Q(i)}function K(){return l.value}function L(i,f){const V=U(i,f,u.value,o.value),E=K();E!=null&&(E.value=""),V!==void 0&&((e.multiple===!0?e.modelValue&&V.every(Z=>u.value.includes(Z)):e.modelValue===V[0])||s(o.value===!0?u.value.concat(V):V))}function j(){return[S("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function H(){if(t.file!==void 0)return u.value.length===0?j():u.value.map((f,V)=>t.file({index:V,file:f,ref:this}));if(t.selected!==void 0)return u.value.length===0?j():t.selected({files:u.value,ref:this});if(e.useChips===!0)return u.value.length===0?j():u.value.map((f,V)=>S(se,{key:"file-"+V,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{v(V)}},()=>S("span",{class:"ellipsis",textContent:f.name})));const i=e.displayValue!==void 0?e.displayValue:R.value;return i.length!==0?[S("div",{class:e.inputClass,style:e.inputStyle,textContent:i})]:j()}function J(){const i={ref:l,...z.value,...O.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:L};return e.multiple===!0&&(i.multiple=!0),S("input",i)}return Object.assign(c,{fieldClass:N,emitValue:s,hasValue:I,inputRef:l,innerValue:u,floatingLabel:p(()=>I.value===!0||M(e.displayValue)),computedCounter:p(()=>{if(e.counterLabel!==void 0)return e.counterLabel(g.value);const i=e.maxFiles;return`${u.value.length}${i!==void 0?" / "+i:""} (${a.value})`}),getControlChild:()=>D("file"),getControl:()=>{const i={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(i,{onDragover:k,onDragleave:_,onKeydown:m,onKeyup:T}),S("div",i,[J()].concat(H()))}}),Object.assign(r,{removeAtIndex:v,removeFile:F,getNativeElement:()=>l.value}),ae(r,"nativeEl",()=>l.value),pe(c)}});const we={setup(){const e=ye(),t=b(null),y=b(null),n=b(!1);return{name:t,pol:b("line"),age:y,accept:n,password:b(""),isPwd:b(!0),email:b(""),tel:b(""),onSubmit(){n.value!==!0?e.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})},onReset(){t.value=null,y.value=null,n.value=!1}}}},ze={style:{"max-width":"700px"}},Ne={class:"row example-row-column-width"},qe={class:"col-4 q-pa-md",style:{"max-width":"500px"}},Pe={class:"q-pb-md"},Qe={class:"col-8 q-pa-md"},ke={class:""},_e={class:"q-gutter-sm"},Ue={class:"q-pa-md"},Ie={class:"row example-row-column-width"};function je(e,t,y,n,r,c){return ie(),oe(Ve,{class:"flex flex-center"},{default:q(()=>[h("div",ze,[d(be,{onSubmit:n.onSubmit,onReset:n.onReset,class:"q-gutter"},{default:q(()=>[h("div",Ne,[h("div",qe,[h("div",Pe,[d($,{src:"/public/icons/photoProfile.png"}),d(Ce,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model=l),label:"\u0412\u0430\u0448\u0435 \u0444\u043E\u0442\u043E"},{default:q(()=>[d(B,{name:"attach_file"})]),_:1},8,["modelValue"])]),d(x,{filled:"",modelValue:e.lastName,"onUpdate:modelValue":t[1]||(t[1]=l=>e.lastName=l),label:"\u041B\u043E\u0433\u0438\u043D","lazy-rules":"",rules:[l=>l&&l.length>0||"\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043B\u043E\u0433\u0438\u043D"]},null,8,["modelValue","rules"]),d(x,{modelValue:n.password,"onUpdate:modelValue":t[3]||(t[3]=l=>n.password=l),filled:"",type:n.isPwd?"password":"text",hint:"\u041F\u0430\u0440\u043E\u043B\u044C"},{append:q(()=>[d(B,{name:n.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[2]||(t[2]=l=>n.isPwd=!n.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),h("div",Qe,[d(x,{filled:"",modelValue:n.name,"onUpdate:modelValue":t[4]||(t[4]=l=>n.name=l),label:"\u0418\u043C\u044F","lazy-rules":"",rules:[l=>l&&l.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F!"]},null,8,["modelValue","rules"]),d(x,{filled:"",modelValue:e.lastName,"onUpdate:modelValue":t[5]||(t[5]=l=>e.lastName=l),label:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F","lazy-rules":"",rules:[l=>l&&l.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E!"]},null,8,["modelValue","rules"]),d(x,{filled:"",modelValue:e.fatherName,"onUpdate:modelValue":t[6]||(t[6]=l=>e.fatherName=l),label:"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E","lazy-rules":"",rules:[l=>l&&l.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0447\u0435\u0442\u0441\u0432\u043E!"]},null,8,["modelValue","rules"]),h("div",ke,[h("div",_e,[d(Y,{modelValue:n.pol,"onUpdate:modelValue":t[7]||(t[7]=l=>n.pol=l),val:"Man",label:"\u041C\u0443\u0436\u0441\u043A\u043E\u0439"},null,8,["modelValue"]),d(Y,{modelValue:n.pol,"onUpdate:modelValue":t[8]||(t[8]=l=>n.pol=l),val:"Woman",label:"\u0416\u0435\u043D\u0441\u043A\u0438\u0439"},null,8,["modelValue"])])]),d(x,{class:"q-pb-md",standout:"",modelValue:n.email,"onUpdate:modelValue":t[9]||(t[9]=l=>n.email=l),type:"email",prefix:"Email:",suffix:"@gmail.com"},{prepend:q(()=>[d(B,{name:"mail"})]),_:1},8,["modelValue"]),d(x,{class:"q-pb-md",filled:"",modelValue:n.tel,"onUpdate:modelValue":t[10]||(t[10]=l=>n.tel=l),label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",mask:"+7 (###) ###-##-##","fill-mask":""},null,8,["modelValue"])])]),h("div",Ue,[d(ge,{class:"q-pb-md",modelValue:n.accept,"onUpdate:modelValue":t[11]||(t[11]=l=>n.accept=l),label:"\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"},null,8,["modelValue"]),h("div",Ie,[d(W,{class:"col",label:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",type:"submit",color:"primary"}),d(W,{label:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",type:"reset",color:"primary",flat:"",class:"q-ml-sm col"})])])]),_:1},8,["onSubmit","onReset"])])]),_:1})}var Ge=he(we,[["render",je]]);export{Ge as default};
>>>>>>>> 6c16b30249c6cb28be25e79950d1d92a56dd78c7:app/views/assets/LK.2bb409bd.js
