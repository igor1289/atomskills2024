import{c as Q,a as D,h as x,b as P,u as Z,d as $,g as ee,e as le,i as te,r,w as A,o as oe,f as ae,j as F,l as se,k as I,m as z,n as R,p as s,q as a,s as u,F as j,Q as b,t as ne,v as B,x as H,y as ie}from"./index.6e82428b.js";import{Q as v}from"./QInput.f5c84cf5.js";import{u as re,a as de}from"./use-dark.c17f75eb.js";import{g as ue,c as ce,Q as K}from"./QDialog.c62f6f3c.js";import{Q as me}from"./QImg.b6656824.js";import{Q as M,a as pe}from"./QToggle.3595c9bd.js";import{Q as fe}from"./QForm.d480806b.js";import{Q as ge}from"./QToolbar.38a07e2b.js";import{u as ve}from"./use-quasar.11d21f82.js";import{s as be,g as he}from"./use-prevent-scroll.cbb4ddc6.js";import{_ as we}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-timeout.c14d033b.js";import"./use-checkbox.03a4fd31.js";var S=Q({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(o,{slots:e}){const n=D(()=>`q-card__section q-card__section--${o.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>x(o.tag,{class:n.value},P(e.default))}}),ye=Q({name:"QCardActions",props:{...Z,vertical:Boolean},setup(o,{slots:e}){const n=$(o),l=D(()=>`q-card__actions ${n.value} q-card__actions--${o.vertical===!0?"vert column":"horiz row"}`);return()=>x("div",{class:l.value},P(e.default))}}),W=Q({name:"QCard",props:{...re,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(o,{slots:e}){const{proxy:{$q:n}}=ee(),l=de(o,n),i=D(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(o.bordered===!0?" q-card--bordered":"")+(o.square===!0?" q-card--square no-border-radius":"")+(o.flat===!0?" q-card--flat no-shadow":""));return()=>x(o.tag,{class:i.value},P(e.default))}});function J(o){if(o===!1)return 0;if(o===!0||o===void 0)return 1;const e=parseInt(o,10);return isNaN(e)?0:e}var Y=le({name:"close-popup",beforeMount(o,{value:e}){const n={depth:J(e),handler(l){n.depth!==0&&setTimeout(()=>{const i=ue(o);i!==void 0&&ce(i,l,n.depth)})},handlerKey(l){te(l,13)===!0&&n.handler(l)}};o.__qclosepopup=n,o.addEventListener("click",n.handler),o.addEventListener("keyup",n.handlerKey)},updated(o,{value:e,oldValue:n}){e!==n&&(o.__qclosepopup.depth=J(e))},beforeUnmount(o){const e=o.__qclosepopup;o.removeEventListener("click",e.handler),o.removeEventListener("keyup",e.handlerKey),delete o.__qclosepopup}});function E(o){let e=!1,n,l;function i(){l=arguments,e!==!0&&(e=!0,n=window.requestAnimationFrame(()=>{o.apply(this,l),l=void 0,e=!1}))}return i.cancel=()=>{window.cancelAnimationFrame(n),e=!1},i}const{passive:C}=se;var G=Q({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:o=>o>=0&&o<=1},scrollTarget:be,onScroll:Function},setup(o,{slots:e,emit:n}){const l=r(0),i=r(null),h=r(null),t=r(null);let m,d,w,y,g,c;A(()=>o.height,()=>{m===!0&&q()}),A(()=>o.scrollTarget,()=>{m===!0&&(N(),T())});let p=f=>{l.value=f,o.onScroll!==void 0&&n("scroll",f)};function q(){let f,_,k;c===window?(f=0,k=_=window.innerHeight):(f=I(c).top,_=F(c),k=f+_);const U=I(i.value).top,X=U+o.height;if(g!==void 0||X>f&&U<k){const O=(k-U)/(o.height+_);V((w-o.height)*O*o.speed),p(O)}}let V=f=>{d.style.transform=`translate3d(-50%,${Math.round(f)}px,0)`};function L(){w=d.naturalHeight||d.videoHeight||F(d),m===!0&&q()}function T(){m=!0,c=he(i.value,o.scrollTarget),c.addEventListener("scroll",q,C),window.addEventListener("resize",y,C),q()}function N(){m===!0&&(m=!1,c.removeEventListener("scroll",q,C),window.removeEventListener("resize",y,C),c=void 0,V.cancel(),p.cancel(),y.cancel())}return oe(()=>{V=E(V),p=E(p),y=E(L),d=e.media!==void 0?h.value.children[0]:t.value,d.onload=d.onloadstart=d.loadedmetadata=L,L(),d.style.display="initial",window.IntersectionObserver!==void 0?(g=new IntersectionObserver(f=>{(f[0].isIntersecting===!0?T:N)()}),g.observe(i.value)):T()}),ae(()=>{N(),g!==void 0&&g.disconnect(),d.onload=d.onloadstart=d.loadedmetadata=null}),()=>x("div",{ref:i,class:"q-parallax",style:{height:`${o.height}px`}},[x("div",{ref:h,class:"q-parallax__media absolute-full"},e.media!==void 0?e.media():[x("img",{ref:t,src:o.src})]),x("div",{class:"q-parallax__content absolute-full column flex-center"},e.content!==void 0?e.content({percentScrolled:l.value}):P(e.default))])}});const xe={components:{QParallax:G},setup(){const o=["blur(10px) saturate(150%)"],e=r(null),n=ve(),l=r(null),i=r(!1),h=r(null),t=r(null),m=r(null),d=r(null),w=r(null),y=r("line"),g=r(null);return{backdropFilter:e,inception:r(!1),secondDialog:r(!1),name:l,pol:y,accept:i,password:g,isPwd:r(!0),email:m,tel:d,lastName:h,fatherName:t,login:w,backdropFilterList:o.map(c=>({label:c,onClick:()=>{e.value=c,dialog.value=!0}})),async onSubmit(){if(i.value!==!0)n.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"});else try{const p=await(await fetch("/user/create",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:w.value,password:g.value,lastName:h.value,firstName:l.value,fatherName:t.value,email:m.value,tel:d.value,isAdmin:!1,isTeacher:!1})})).json();p.isError?(n.notify({color:"red-5",textColor:"white",icon:"warning",message:p.message}),console.log("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443")):n.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u0412\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043F\u043E\u0434 \u0441\u0432\u043E\u0438\u043C \u043B\u043E\u0433\u0438\u043D\u043E\u043C \u0438 \u043F\u0430\u0440\u043E\u043B\u0435\u043C."})}catch{n.notify({color:"red-5",textColor:"white",icon:"warning",message:data.message})}},async onLog(){try{const p=await(await fetch("/user/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:w.value,password:g.value})})).json();p.access_token?(localStorage.setItem("access_token",p.access_token),window.location.href="/#/recordBook"):n.notify({color:"red-5",textColor:"white",icon:"warning",message:p.message})}catch{n.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"})}},onReset(){l.value=null,d.value=null,m.value=null,h.value=null,t.value=null,w.value=null,i.value=!1,y.value=null,g.value=null}}}},qe={class:"bg-image"},_e={class:"q-pa-lg absolute-top text-white"},Ve={class:""},ke={class:"fixed-top-right absolute-top-right"},Se=s("div",{class:"text-h6 text-center"},"\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442",-1),Ce=s("div",{class:"text-h6"},"\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442",-1),Qe={style:{"max-width":"700px"}},Pe={class:"row example-row-column-width"},Le={class:"col-4 q-pa-sm"},Te={class:"q-pb-md"},Ne={class:"col-8 q-pa-md"},Ue={class:""},ze={class:"q-gutter-sm"},Be={class:"q-pa-md"},Ee={class:"row example-row-column-width"},De=s("div",{class:"absolute column items-center"},[s("img",{src:"/public/icons/logo-o.png",style:{width:"150px",height:"150px"}}),s("div",{class:"text-h3 text-white text-center"},"\u041D\u0410\u0428\u0415 \u041D\u0410\u0417\u0412\u0410\u041D\u0418\u0415 \u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0410"),s("div",{class:"text-h6 text-grey-3 text-center"},"WeldingAndSons")],-1),Oe=s("div",{class:""},[s("div",{class:"text-center"},[s("h1",null,"TEST"),s("h2",null,"Testtesttest"),s("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi quis! "),s("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi quis! "),s("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi quis! "),s("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi quis! "),s("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi quis! ")])],-1);function Ae(o,e,n,l,i,h){return z(),R(j,null,[s("div",qe,[a(G,{src:"/public/icons/fon1.jpg",height:500},{default:u(()=>[s("div",_e,[a(ge,null,{default:u(()=>[s("div",Ve,[a(b,{flat:"",icon:"menu",to:"/recordBook"})]),s("div",ke,[(z(!0),R(j,null,ne(l.backdropFilterList,t=>(z(),ie(b,{flat:"",key:t.label,style:{color:"white"},label:"\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442","no-caps":"",onClick:e[0]||(e[0]=m=>l.inception=!0),icon:"person"}))),128)),a(K,{modelValue:l.inception,"onUpdate:modelValue":e[5]||(e[5]=t=>l.inception=t),"backdrop-filter":"blur(10px) saturate(150%)"},{default:u(()=>[a(W,null,{default:u(()=>[a(S,null,{default:u(()=>[Se,a(b,{size:"sm",filled:"",class:"full-width",color:"primary",label:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",onClick:e[1]||(e[1]=t=>l.secondDialog=!0)})]),_:1}),a(S,{class:"q-pt-none"},{default:u(()=>[a(v,{filled:"",modelValue:l.login,"onUpdate:modelValue":e[2]||(e[2]=t=>l.login=t),label:"\u041B\u043E\u0433\u0438\u043D","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D"]},null,8,["modelValue","rules"]),a(v,{modelValue:l.password,"onUpdate:modelValue":e[4]||(e[4]=t=>l.password=t),filled:"",type:l.isPwd?"password":"text",hint:"\u041F\u0430\u0440\u043E\u043B\u044C"},{append:u(()=>[a(B,{name:l.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[3]||(e[3]=t=>l.isPwd=!l.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),a(ye,{align:"right",class:"text-primary"},{default:u(()=>[a(b,{flat:"",label:"\u0412\u043E\u0439\u0442\u0438",onClick:l.onLog},null,8,["onClick"]),H(a(b,{flat:"",label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"},null,512),[[Y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(K,{modelValue:l.secondDialog,"onUpdate:modelValue":e[17]||(e[17]=t=>l.secondDialog=t),"backdrop-filter":l.backdropFilter},{default:u(()=>[a(W,null,{default:u(()=>[a(S,{class:"row items-center q-pb-none text-h6"},{default:u(()=>[Ce]),_:1}),a(S,null,{default:u(()=>[s("div",Qe,[a(fe,{onSubmit:l.onSubmit,onReset:l.onReset,class:"q-gutter"},{default:u(()=>[s("div",Pe,[s("div",Le,[s("div",Te,[a(me,{src:"/public/icons/man.png"})]),a(v,{filled:"",modelValue:l.login,"onUpdate:modelValue":e[6]||(e[6]=t=>l.login=t),label:"\u041B\u043E\u0433\u0438\u043D","lazy-rules":"",rules:[t=>t&&t.length>0||"\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043B\u043E\u0433\u0438\u043D"]},null,8,["modelValue","rules"]),a(v,{modelValue:l.password,"onUpdate:modelValue":e[8]||(e[8]=t=>l.password=t),filled:"",type:l.isPwd?"password":"text",hint:"\u041F\u0430\u0440\u043E\u043B\u044C"},{append:u(()=>[a(B,{name:l.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[7]||(e[7]=t=>l.isPwd=!l.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),s("div",Ne,[a(v,{class:"q-pb-lg",filled:"",modelValue:l.name,"onUpdate:modelValue":e[9]||(e[9]=t=>l.name=t),label:"\u0418\u043C\u044F","lazy-rules":"",rules:[t=>t&&t.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F!"]},null,8,["modelValue","rules"]),a(v,{class:"q-pb-lg",filled:"",modelValue:l.lastName,"onUpdate:modelValue":e[10]||(e[10]=t=>l.lastName=t),label:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F","lazy-rules":"",rules:[t=>t&&t.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E!"]},null,8,["modelValue","rules"]),a(v,{filled:"",modelValue:l.fatherName,"onUpdate:modelValue":e[11]||(e[11]=t=>l.fatherName=t),label:"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E","lazy-rules":"",rules:[t=>t&&t.length>0||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E!"]},null,8,["modelValue","rules"]),s("div",Ue,[s("div",ze,[a(M,{modelValue:l.pol,"onUpdate:modelValue":e[12]||(e[12]=t=>l.pol=t),val:"Man",label:"\u041C\u0443\u0436\u0441\u043A\u043E\u0439"},null,8,["modelValue"]),a(M,{modelValue:l.pol,"onUpdate:modelValue":e[13]||(e[13]=t=>l.pol=t),val:"Woman",label:"\u0416\u0435\u043D\u0441\u043A\u0438\u0439"},null,8,["modelValue"])])]),a(v,{class:"q-pb-lg",filled:"",modelValue:l.email,"onUpdate:modelValue":e[14]||(e[14]=t=>l.email=t),type:"email",prefix:"Email:",suffix:"@gmail.com"},{prepend:u(()=>[a(B,{name:"mail"})]),_:1},8,["modelValue"]),a(v,{filled:"",modelValue:l.tel,"onUpdate:modelValue":e[15]||(e[15]=t=>l.tel=t),label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",mask:"+7 (###) ###-##-##","fill-mask":""},null,8,["modelValue"])])]),s("div",Be,[a(pe,{class:"q-pb-md",modelValue:l.accept,"onUpdate:modelValue":e[16]||(e[16]=t=>l.accept=t),label:"\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"},null,8,["modelValue"]),s("div",Ee,[a(b,{class:"col",label:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",type:"submit",color:"primary"}),a(b,{label:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",type:"reset",color:"primary",flat:"",class:"q-ml-sm col"}),H(a(b,{flat:"",label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",color:"primary"},null,512),[[Y]])])])]),_:1},8,["onSubmit","onReset"])])]),_:1})]),_:1})]),_:1},8,["modelValue","backdrop-filter"])])]),_:1})]),De]),_:1})]),Oe],64)}var $e=we(xe,[["render",Ae]]);export{$e as default};
