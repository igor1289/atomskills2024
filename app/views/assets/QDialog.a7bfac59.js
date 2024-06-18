import{I as ve,f as N,H as ge,P as he,g as V,a as f,R as T,c as U,r as P,S as be,E as ke,h as g,U as we,V as ye,W as qe,i as Pe,N as X,w as A,T as I,b as Se,X as Ee}from"./index.ffe30b96.js";import{u as xe,a as Te,b as _e,c as pe,d as Ce}from"./use-prevent-scroll.b2b7e7c4.js";import{u as Be}from"./plugin-vue_export-helper.96fcf0c4.js";import{r as K,a as Fe,b as $e}from"./QInput.7d3506de.js";function De(){let e;const n=V();function i(){e=void 0}return ve(i),N(i),{removeTick:i,registerTick(s){e=s,ge(()=>{e===s&&(he(n)===!1&&e(),e=void 0)})}}}const He={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Me(e,n=()=>{},i=()=>{}){return{transitionProps:f(()=>{const s=`q-transition--${e.transitionShow||n()}`,a=`q-transition--${e.transitionHide||i()}`;return{appear:!0,enterFromClass:`${s}-enter-from`,enterActiveClass:`${s}-enter-active`,enterToClass:`${s}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:f(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const _=[];function Xe(e){return _.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function Oe(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return T(e)}else if(e.__qPortal===!0){const i=T(e);return i!==void 0&&i.$options.name==="QPopupProxy"?(e.hide(n),i):e}e=T(e)}while(e!=null)}function Je(e,n,i){for(;i!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(i--,e.$options.name==="QMenu"){e=Oe(e,n);continue}e.hide(n)}e=T(e)}}const Qe=U({name:"QPortal",setup(e,{slots:n}){return()=>n.default()}});function ze(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Le(e,n,i,s){const a=P(!1),u=P(!1);let l=null;const c={},r=s==="dialog"&&ze(e);function d(v){if(v===!0){K(c),u.value=!0;return}u.value=!1,a.value===!1&&(r===!1&&l===null&&(l=ye(!1,s)),a.value=!0,_.push(e.proxy),Fe(c))}function m(v){if(u.value=!1,v!==!0)return;K(c),a.value=!1;const y=_.indexOf(e.proxy);y!==-1&&_.splice(y,1),l!==null&&(qe(l),l=null)}return be(()=>{m(!0)}),e.proxy.__qPortal=!0,ke(e.proxy,"contentEl",()=>n.value),{showPortal:d,hidePortal:m,portalIsActive:a,portalIsAccessible:u,renderPortal:()=>r===!0?i():a.value===!0?[g(we,{to:l},g(Qe,i))]:void 0}}const h=[];let w;function Re(e){w=e.keyCode===27}function Ae(){w===!0&&(w=!1)}function Ie(e){w===!0&&(w=!1,Pe(e,27)===!0&&h[h.length-1](e))}function J(e){window[e]("keydown",Re),window[e]("blur",Ae),window[e]("keyup",Ie),w=!1}function Ke(e){X.is.desktop===!0&&(h.push(e),h.length===1&&J("addEventListener"))}function j(e){const n=h.indexOf(e);n!==-1&&(h.splice(n,1),h.length===0&&J("removeEventListener"))}const b=[];function Y(e){b[b.length-1](e)}function je(e){X.is.desktop===!0&&(b.push(e),b.length===1&&document.body.addEventListener("focusin",Y))}function G(e){const n=b.indexOf(e);n!==-1&&(b.splice(n,1),b.length===0&&document.body.removeEventListener("focusin",Y))}let x=0;const Ge={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},W={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ye=U({name:"QDialog",inheritAttrs:!1,props:{...xe,...He,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...Te,"shake","click","escapeKey"],setup(e,{slots:n,emit:i,attrs:s}){const a=V(),u=P(null),l=P(!1),c=P(!1);let r=null,d=null,m,v;const y=f(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:D}=Ce(),{registerTimeout:H}=Be(),{registerTick:Z,removeTick:M}=De(),{transitionProps:ee,transitionStyle:O}=Me(e,()=>W[e.position][0],()=>W[e.position][1]),te=f(()=>O.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:Q,hidePortal:z,portalIsAccessible:ne,renderPortal:ie}=Le(a,u,me,"dialog"),{hide:S}=_e({showing:l,hideOnRouteChange:y,handleShow:re,handleHide:ce,processOnMount:!0}),{addToHistory:oe,removeFromHistory:ae}=pe(l,S,y),le=f(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ge[e.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),E=f(()=>l.value===!0&&e.seamless!==!0),se=f(()=>e.autoClose===!0?{onClick:de}:{}),ue=f(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${E.value===!0?"modal":"seamless"}`,s.class]);A(()=>e.maximized,t=>{l.value===!0&&B(t)}),A(E,t=>{D(t),t===!0?(je(F),Ke(C)):(G(F),j(C))});function re(t){oe(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,B(e.maximized),Q(),c.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),Z(q)):M(),H(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:k}=document.activeElement.getBoundingClientRect(),{innerHeight:R}=window,$=window.visualViewport!==void 0?window.visualViewport.height:R;o>0&&k>$/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-$,k>=R?1/0:Math.ceil(document.scrollingElement.scrollTop+k-$/2))),document.activeElement.scrollIntoView()}v=!0,u.value.click(),v=!1}Q(!0),c.value=!1,i("show",t)},e.transitionDuration)}function ce(t){M(),ae(),L(!0),c.value=!0,z(),d!==null&&(((t&&t.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),H(()=>{z(!0),c.value=!1,i("hide",t)},e.transitionDuration)}function q(t){$e(()=>{let o=u.value;if(o!==null){if(t!==void 0){const k=o.querySelector(t);if(k!==null){k.focus({preventScroll:!0});return}}o.contains(document.activeElement)!==!0&&(o=o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))}})}function p(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):q(),i("shake");const o=u.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,u.value!==null&&(o.classList.remove("q-animate--scale"),q())},170))}function C(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&p():(i("escapeKey"),S()))}function L(t){r!==null&&(clearTimeout(r),r=null),(t===!0||l.value===!0)&&(B(!1),e.seamless!==!0&&(D(!1),G(F),j(C))),t!==!0&&(d=null)}function B(t){t===!0?m!==!0&&(x<1&&document.body.classList.add("q-body--dialog"),x++,m=!0):m===!0&&(x<2&&document.body.classList.remove("q-body--dialog"),x--,m=!1)}function de(t){v!==!0&&(S(t),i("click",t))}function fe(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?S(t):e.noShake!==!0&&p()}function F(t){e.allowFocusOutside!==!0&&ne.value===!0&&Ee(u.value,t.target)!==!0&&q('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:q,shake:p,__updateRefocusTarget(t){d=t||null}}),N(L);function me(){return g("div",{role:"dialog","aria-modal":E.value===!0?"true":"false",...s,class:ue.value},[g(I,{name:"q-transition--fade",appear:!0},()=>E.value===!0?g("div",{class:"q-dialog__backdrop fixed-full",style:te.value,"aria-hidden":"true",tabindex:-1,onClick:fe}):null),g(I,ee.value,()=>l.value===!0?g("div",{ref:u,class:le.value,style:O.value,tabindex:-1,...se.value},Se(n.default)):null)])}return ie}});export{Ye as Q,De as a,Me as b,Je as c,Le as d,je as e,j as f,Xe as g,Ke as h,Oe as i,_ as p,G as r,He as u};
