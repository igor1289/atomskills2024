import{r as l,m as r,n,q as i,s as f,v as d}from"./index.22baba49.js";import{Q as o}from"./QInput.67eae7ea.js";import{Q as c}from"./QTable.eb4fe87a.js";import{_ as u}from"./plugin-vue_export-helper.339d76e0.js";import"./use-dark.48750da9.js";import"./selection.58e588a8.js";import"./use-prevent-scroll.80a635ed.js";import"./QChip.ed2ab812.js";import"./QDialog.1905f13e.js";import"./format.b9446fb2.js";import"./use-checkbox.d29f96c4.js";const s=[{name:"title",required:!0,label:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",align:"left",field:t=>t.name,sortable:!0},{name:"difficulty",align:"center",label:"\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C",field:"difficulty",sortable:!0},{name:"time",label:"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F (\u043C\u0438\u043D)",field:"time",sortable:!0}],y=[{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04351",difficulty:1,time:60},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04352",difficulty:2,time:50},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04353",difficulty:1,time:80},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04354",difficulty:3,time:20},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04355",difficulty:3,time:10},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04356",difficulty:1,time:70},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04351",difficulty:1,time:60},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04352",difficulty:2,time:50},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04353",difficulty:1,time:80},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04354",difficulty:3,time:20},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04355",difficulty:3,time:10},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04356",difficulty:1,time:70},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04351",difficulty:1,time:60},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04352",difficulty:2,time:50},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04353",difficulty:1,time:80},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04354",difficulty:3,time:20},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04355",difficulty:3,time:10},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04356",difficulty:1,time:70},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04351",difficulty:1,time:60},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04352",difficulty:2,time:50},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04353",difficulty:1,time:80},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04354",difficulty:3,time:20},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04355",difficulty:3,time:10},{name:"\u0417\u0430\u0434\u0430\u043D\u0438\u04356",difficulty:1,time:70}],p={setup(){return{filter:l(""),columns:s,rows:y}}},_={class:"q-pa-md"};function b(t,m,h,e,w,g){return r(),n("div",_,[i(c,{grid:"","grid-header":"",flat:"",bordered:"",rows:e.rows,columns:e.columns,"row-key":"name",filter:e.filter,"hide-header":""},{"top-right":f(()=>[i(o,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":m[0]||(m[0]=a=>e.filter=a),placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:f(()=>[i(d,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter"])])}var N=u(p,[["render",b]]);export{N as default};
