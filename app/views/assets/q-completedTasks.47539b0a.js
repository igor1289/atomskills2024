import{r as p,o as q,m as h,n as k,q as v,s as _,v as F}from"./index.5fe79202.js";import{Q as P}from"./QInput.2ff5830a.js";import{a as R}from"./QTable.3f6f7361.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.21ae0e92.js";import"./selection.1765f1a9.js";import"./use-prevent-scroll.286ed985.js";import"./QChip.888ee3da.js";import"./QDialog.13ce74c8.js";import"./use-timeout.58dcd5cd.js";import"./format.b9446fb2.js";import"./use-checkbox.cd1f49f0.js";const C=[{name:"title",required:!0,label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",align:"left",field:s=>s.name,format:s=>`${s}`,sortable:!0},{name:"difficulty",label:"\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C",field:"difficulty",sortable:!0},{name:"time",label:"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F (\u043C\u0438\u043D)",field:"time",sortable:!0}],g=[{id:1,name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04351",difficulty:1,time:14},{id:2,name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04352",difficulty:3,time:10},{id:3,name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04353",difficulty:1,time:34},{id:4,name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04354",difficulty:2,time:16},{id:5,name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04355",difficulty:3,time:5}],N={setup(){const s=p(),r=p([]),b=p(""),e=p(!1),i=p({sortBy:"desc",descending:!1,page:1,rowsPerPage:10,rowsNumber:10});function w(l,m,o,n,d){const u=o?g.filter(f=>f.name.includes(o)):g.slice();if(n){const f=n==="desc"?d?(t,a)=>t.name>a.name?-1:t.name<a.name?1:0:(t,a)=>t.name>a.name?1:t.name<a.name?-1:0:d?(t,a)=>parseFloat(a[n])-parseFloat(t[n]):(t,a)=>parseFloat(t[n])-parseFloat(a[n]);u.sort(f)}return u.slice(l,l+m)}function c(l){if(!l)return g.length;let m=0;return g.forEach(o=>{o.name.includes(l)&&++m}),m}function y(l){const{page:m,rowsPerPage:o,sortBy:n,descending:d}=l.pagination,u=l.filter;e.value=!0,setTimeout(()=>{i.value.rowsNumber=c(u);const f=o===0?i.value.rowsNumber:o,t=(m-1)*o,a=w(t,f,u,n,d);r.value.splice(0,r.value.length,...a),i.value.page=m,i.value.rowsPerPage=o,i.value.sortBy=n,i.value.descending=d,e.value=!1},1500)}return q(()=>{s.value.requestServerInteraction()}),{tableMat:s,filter:b,loading:e,pagination:i,columns:C,rows:r,onRequest:y}}},Q={class:"q-pa-md"};function T(s,r,b,e,i,w){return h(),k("div",Q,[v(R,{class:"my-sticky-virtscroll-table shadow-2",color:"white",flat:"",bordered:"",ref:"tableMat",rows:e.rows,columns:e.columns,"row-key":"id",pagination:e.pagination,"onUpdate:pagination":r[1]||(r[1]=c=>e.pagination=c),loading:e.loading,filter:e.filter,"binary-state-sort":"",onRequest:e.onRequest},{"top-right":_(()=>[v(P,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":r[0]||(r[0]=c=>e.filter=c),placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:_(()=>[v(F,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","pagination","loading","filter","onRequest"])])}var H=x(N,[["render",T]]);export{H as default};
