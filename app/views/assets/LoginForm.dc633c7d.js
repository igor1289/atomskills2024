<<<<<<<< HEAD:app/views/assets/LoginForm.a66f56ed.js
import{Q as n}from"./QInput.2ff5830a.js";import{r as i,m as d,y as p,s as u,p as m,q as o,Q as f}from"./index.5fe79202.js";import{Q as y}from"./QForm.cd873a6f.js";import{Q as g}from"./QPage.2b945278.js";import{u as w}from"./use-quasar.3f116713.js";import"./use-dark.21ae0e92.js";const _={class:"q-pa-md col-8",style:{"max-width":"600px"}},S={__name:"LoginForm",setup(h){const l=w(),a=i(""),s=i(""),c=async()=>{try{const t=await(await fetch("/user/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:a.value,password:s.value})})).json();t.access_token?localStorage.setItem("access_token",t.access_token):l.notify({color:"red-5",textColor:"white",icon:"warning",message:t.message})}catch{l.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"})}};return(r,t)=>(d(),p(g,{class:"row justify-center flex flex-center"},{default:u(()=>[m("div",_,[o(y,{onSubmit:c,class:"q-gutter-md"},{default:u(()=>[o(n,{filled:"",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),label:"\u0418\u043C\u044F","lazy-rules":"",rules:[e=>e&&e.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F!"]},null,8,["modelValue","rules"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),filled:"",type:"password",rules:[e=>e&&e.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C!"],hint:"\u041F\u0430\u0440\u043E\u043B\u044C"},null,8,["modelValue","rules"]),m("div",null,[o(f,{label:"\u0412\u043E\u0439\u0442\u0438",type:"submit",color:"primary"})])]),_:1})])]),_:1}))}};export{S as default};
========
import{Q as n}from"./QInput.2d13f569.js";import{r as i,m as d,y as p,s as u,p as m,q as o,Q as f}from"./index.d2a66da5.js";import{Q as y}from"./QForm.1a0cbaeb.js";import{Q as g}from"./QPage.5e2c260c.js";import{u as w}from"./use-quasar.da5dcd47.js";import"./use-dark.9925c1ae.js";const _={class:"q-pa-md col-8",style:{"max-width":"600px"}},S={__name:"LoginForm",setup(h){const l=w(),a=i(""),s=i(""),c=async()=>{try{const t=await(await fetch("/user/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:a.value,password:s.value})})).json();t.access_token?localStorage.setItem("access_token",t.access_token):l.notify({color:"red-5",textColor:"white",icon:"warning",message:t.message})}catch{l.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"})}};return(r,t)=>(d(),p(g,{class:"row justify-center flex flex-center"},{default:u(()=>[m("div",_,[o(y,{onSubmit:c,class:"q-gutter-md"},{default:u(()=>[o(n,{filled:"",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),label:"\u0418\u043C\u044F","lazy-rules":"",rules:[e=>e&&e.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F!"]},null,8,["modelValue","rules"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),filled:"",type:"password",rules:[e=>e&&e.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C!"],hint:"\u041F\u0430\u0440\u043E\u043B\u044C"},null,8,["modelValue","rules"]),m("div",null,[o(f,{label:"\u0412\u043E\u0439\u0442\u0438",type:"submit",color:"primary"})])]),_:1})])]),_:1}))}};export{S as default};
>>>>>>>> 6c16b30249c6cb28be25e79950d1d92a56dd78c7:app/views/assets/LoginForm.dc633c7d.js