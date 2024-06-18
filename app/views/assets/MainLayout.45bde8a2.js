import{c as J,a as r,h as p,b as $e,r as _,z as je,o as se,f as te,a7 as Ee,H as me,g as Y,l as Ce,B as Le,a8 as F,w as k,a9 as rt,aa as be,D as nt,I as ut,J as st,_ as Fe,x as K,ab as Me,a0 as Ie,ac as ct,ad as he,S as dt,ae as vt,m as Z,y as ee,s as T,q as w,Q as qe,v as oe,af as ie,p as ge,ag as ft,ah as re,ai as ht,aj as mt}from"./index.5fe79202.js";import{Q as bt}from"./QToolbar.a2ab9e68.js";import{Q as gt,a as ne,b as D}from"./selection.1765f1a9.js";import{u as Ne,a as Ue}from"./use-dark.21ae0e92.js";import{s as yt,g as zt,e as St,f as wt,h as Oe,i as Te,u as _t,a as pt,b as qt,c as Tt,d as xt,j as xe}from"./use-prevent-scroll.286ed985.js";import{T as ue}from"./TouchPan.906787fb.js";import{b as X}from"./format.b9446fb2.js";import{u as kt}from"./use-timeout.58dcd5cd.js";import{Q as Ct}from"./QImg.683f7fac.js";import{_ as $t}from"./plugin-vue_export-helper.21dcd24c.js";var Lt=J({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:q}){const s=r(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>p("div",{class:s.value},$e(q.default))}});function Pt(){const e=_(!je.value);return e.value===!1&&se(()=>{e.value=!0}),{isHydrated:e}}const Ke=typeof ResizeObserver!="undefined",He=Ke===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ce=J({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:q}){let s=null,i,n={width:-1,height:-1};function v(f){f===!0||e.debounce===0||e.debounce==="0"?u():s===null&&(s=setTimeout(u,e.debounce))}function u(){if(s!==null&&(clearTimeout(s),s=null),i){const{offsetWidth:f,offsetHeight:h}=i;(f!==n.width||h!==n.height)&&(n={width:f,height:h},q("resize",n))}}const{proxy:t}=Y();if(t.trigger=v,Ke===!0){let f;const h=l=>{i=t.$el.parentNode,i?(f=new ResizeObserver(v),f.observe(i),u()):l!==!0&&me(()=>{h(!0)})};return se(()=>{h()}),te(()=>{s!==null&&clearTimeout(s),f!==void 0&&(f.disconnect!==void 0?f.disconnect():i&&f.unobserve(i))}),Ee}else{let l=function(){s!==null&&(clearTimeout(s),s=null),h!==void 0&&(h.removeEventListener!==void 0&&h.removeEventListener("resize",v,Ce.passive),h=void 0)},$=function(){l(),i&&i.contentDocument&&(h=i.contentDocument.defaultView,h.addEventListener("resize",v,Ce.passive),u())};const{isHydrated:f}=Pt();let h;return se(()=>{me(()=>{i=t.$el,i&&$()})}),te(l),()=>{if(f.value===!0)return p("object",{class:"q--avoid-card-border",style:He.style,tabindex:-1,type:"text/html",data:He.url,"aria-hidden":"true",onLoad:$})}}}}),Bt=J({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:q,emit:s}){const{proxy:{$q:i}}=Y(),n=Le(be,F);if(n===F)return console.error("QHeader needs to be child of QLayout"),F;const v=_(parseInt(e.heightHint,10)),u=_(!0),t=r(()=>e.reveal===!0||n.view.value.indexOf("H")!==-1||i.platform.is.ios&&n.isContainer.value===!0),f=r(()=>{if(e.modelValue!==!0)return 0;if(t.value===!0)return u.value===!0?v.value:0;const c=v.value-n.scroll.value.position;return c>0?c:0}),h=r(()=>e.modelValue!==!0||t.value===!0&&u.value!==!0),l=r(()=>e.modelValue===!0&&h.value===!0&&e.reveal===!0),$=r(()=>"q-header q-layout__section--marginal "+(t.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(h.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=r(()=>{const c=n.rows.value.top,P={};return c[0]==="l"&&n.left.space===!0&&(P[i.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),c[2]==="r"&&n.right.space===!0&&(P[i.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),P});function z(c,P){n.update("header",c,P)}function S(c,P){c.value!==P&&(c.value=P)}function Q({height:c}){S(v,c),z("size",c)}function L(c){l.value===!0&&S(u,!0),s("focusin",c)}k(()=>e.modelValue,c=>{z("space",c),S(u,!0),n.animate()}),k(f,c=>{z("offset",c)}),k(()=>e.reveal,c=>{c===!1&&S(u,e.modelValue)}),k(u,c=>{n.animate(),s("reveal",c)}),k(n.scroll,c=>{e.reveal===!0&&S(u,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const y={};return n.instances.header=y,e.modelValue===!0&&z("size",v.value),z("space",e.modelValue),z("offset",f.value),te(()=>{n.instances.header===y&&(n.instances.header=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const c=rt(q.default,[]);return e.elevated===!0&&c.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(p(ce,{debounce:0,onResize:Q})),p("header",{class:$.value,style:x.value,onFocusin:L},c)}}});const{passive:Qe}=Ce,Mt=["both","horizontal","vertical"];var Xe=J({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Mt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:yt},emits:["scroll"],setup(e,{emit:q}){const s={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,n,v;k(()=>e.scrollTarget,()=>{f(),t()});function u(){i!==null&&i();const $=Math.max(0,St(n)),x=wt(n),z={top:$-s.position.top,left:x-s.position.left};if(e.axis==="vertical"&&z.top===0||e.axis==="horizontal"&&z.left===0)return;const S=Math.abs(z.top)>=Math.abs(z.left)?z.top<0?"up":"down":z.left<0?"left":"right";s.position={top:$,left:x},s.directionChanged=s.direction!==S,s.delta=z,s.directionChanged===!0&&(s.direction=S,s.inflectionPoint=s.position),q("scroll",{...s})}function t(){n=zt(v,e.scrollTarget),n.addEventListener("scroll",h,Qe),h(!0)}function f(){n!==void 0&&(n.removeEventListener("scroll",h,Qe),n=void 0)}function h($){if($===!0||e.debounce===0||e.debounce==="0")u();else if(i===null){const[x,z]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];i=()=>{z(x),i=null}}}const{proxy:l}=Y();return k(()=>l.$q.lang.rtl,u),se(()=>{v=l.$el.parentNode,t()}),te(()=>{i!==null&&i(),f()}),Object.assign(l,{trigger:h,getPosition:()=>s}),Ee}});const Ve=["vertical","horizontal"],ke={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Re={prevent:!0,mouse:!0,mouseAllDir:!0},Ae=e=>e>=250?50:Math.ceil(e/5);var Ot=J({name:"QScrollArea",props:{...Ne,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:q,emit:s}){const i=_(!1),n=_(!1),v=_(!1),u={vertical:_(0),horizontal:_(0)},t={vertical:{ref:_(null),position:_(0),size:_(0)},horizontal:{ref:_(null),position:_(0),size:_(0)}},{proxy:f}=Y(),h=Ue(e,f.$q);let l=null,$;const x=_(null),z=r(()=>"q-scrollarea"+(h.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=r(()=>{const o=t.vertical.size.value-u.vertical.value;if(o<=0)return 0;const d=X(t.vertical.position.value/o,0,1);return Math.round(d*1e4)/1e4}),t.vertical.thumbHidden=r(()=>(e.visible===null?v.value:e.visible)!==!0&&i.value===!1&&n.value===!1||t.vertical.size.value<=u.vertical.value+1),t.vertical.thumbStart=r(()=>t.vertical.percentage.value*(u.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=r(()=>Math.round(X(u.vertical.value*u.vertical.value/t.vertical.size.value,Ae(u.vertical.value),u.vertical.value))),t.vertical.style=r(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=r(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=r(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=r(()=>{const o=t.horizontal.size.value-u.horizontal.value;if(o<=0)return 0;const d=X(Math.abs(t.horizontal.position.value)/o,0,1);return Math.round(d*1e4)/1e4}),t.horizontal.thumbHidden=r(()=>(e.visible===null?v.value:e.visible)!==!0&&i.value===!1&&n.value===!1||t.horizontal.size.value<=u.horizontal.value+1),t.horizontal.thumbStart=r(()=>t.horizontal.percentage.value*(u.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=r(()=>Math.round(X(u.horizontal.value*u.horizontal.value/t.horizontal.size.value,Ae(u.horizontal.value),u.horizontal.value))),t.horizontal.style=r(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[f.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=r(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=r(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const S=r(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),Q=[[ue,o=>{A(o,"vertical")},void 0,{vertical:!0,...Re}]],L=[[ue,o=>{A(o,"horizontal")},void 0,{horizontal:!0,...Re}]];function y(){const o={};return Ve.forEach(d=>{const g=t[d];o[d+"Position"]=g.position.value,o[d+"Percentage"]=g.percentage.value,o[d+"Size"]=g.size.value,o[d+"ContainerSize"]=u[d].value}),o}const c=nt(()=>{const o=y();o.ref=f,s("scroll",o)},0);function P(o,d,g){if(Ve.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?Oe:Te)(x.value,d,g)}function m({height:o,width:d}){let g=!1;u.vertical.value!==o&&(u.vertical.value=o,g=!0),u.horizontal.value!==d&&(u.horizontal.value=d,g=!0),g===!0&&R()}function C({position:o}){let d=!1;t.vertical.position.value!==o.top&&(t.vertical.position.value=o.top,d=!0),t.horizontal.position.value!==o.left&&(t.horizontal.position.value=o.left,d=!0),d===!0&&R()}function B({height:o,width:d}){t.horizontal.size.value!==d&&(t.horizontal.size.value=d,R()),t.vertical.size.value!==o&&(t.vertical.size.value=o,R())}function A(o,d){const g=t[d];if(o.isFirst===!0){if(g.thumbHidden.value===!0)return;$=g.position.value,n.value=!0}else if(n.value!==!0)return;o.isFinal===!0&&(n.value=!1);const E=ke[d],G=u[d].value,ye=(g.size.value-G)/(G-g.thumbSize.value),ve=o.distance[E.dist],ze=$+(o.direction===E.dir?1:-1)*ve*ye;ae(ze,d)}function I(o,d){const g=t[d];if(g.thumbHidden.value!==!0){const E=o[ke[d].offset];if(E<g.thumbStart.value||E>g.thumbStart.value+g.thumbSize.value){const G=E-g.thumbSize.value/2;ae(G/u[d].value*g.size.value,d)}g.ref.value!==null&&g.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function W(o){I(o,"vertical")}function V(o){I(o,"horizontal")}function R(){i.value=!0,l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,i.value=!1},e.delay),e.onScroll!==void 0&&c()}function ae(o,d){x.value[ke[d].scroll]=o}let M=null;function le(){M!==null&&clearTimeout(M),M=setTimeout(()=>{M=null,v.value=!0},f.$q.platform.is.ios?50:0)}function de(){M!==null&&(clearTimeout(M),M=null),v.value=!1}let j=null;return k(()=>f.$q.lang.rtl,o=>{x.value!==null&&Te(x.value,Math.abs(t.horizontal.position.value)*(o===!0?-1:1))}),ut(()=>{j={top:t.vertical.position.value,left:t.horizontal.position.value}}),st(()=>{if(j===null)return;const o=x.value;o!==null&&(Te(o,j.left),Oe(o,j.top))}),te(c.cancel),Object.assign(f,{getScrollTarget:()=>x.value,getScroll:y,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:P,setScrollPercentage(o,d,g){P(o,d*(t[o].size.value-u[o].value)*(o==="horizontal"&&f.$q.lang.rtl===!0?-1:1),g)}}),()=>p("div",{class:z.value,onMouseenter:le,onMouseleave:de},[p("div",{ref:x,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[p("div",{class:"q-scrollarea__content absolute",style:S.value},Fe(q.default,[p(ce,{debounce:0,onResize:B})])),p(Xe,{axis:"both",onScroll:C})]),p(ce,{debounce:0,onResize:m}),p("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:W}),p("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:V}),K(p("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),Q),K(p("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),L)])}});const De=150;var We=J({name:"QDrawer",inheritAttrs:!1,props:{..._t,...Ne,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...pt,"onLayout","miniState"],setup(e,{slots:q,emit:s,attrs:i}){const n=Y(),{proxy:{$q:v}}=n,u=Ue(e,v),{preventBodyScroll:t}=xt(),{registerTimeout:f,removeTimeout:h}=kt(),l=Le(be,F);if(l===F)return console.error("QDrawer needs to be child of QLayout"),F;let $,x=null,z;const S=_(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),Q=r(()=>e.mini===!0&&S.value!==!0),L=r(()=>Q.value===!0?e.miniWidth:e.width),y=_(e.showIfAbove===!0&&S.value===!1?!0:e.modelValue===!0),c=r(()=>e.persistent!==!0&&(S.value===!0||E.value===!0));function P(a,b){if(A(),a!==!1&&l.animate(),H(0),S.value===!0){const O=l.instances[j.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),N(1),l.isContainer.value!==!0&&t(!0)}else N(0),a!==!1&&we(!1);f(()=>{a!==!1&&we(!0),b!==!0&&s("show",a)},De)}function m(a,b){I(),a!==!1&&l.animate(),N(0),H(R.value*L.value),_e(),b!==!0?f(()=>{s("hide",a)},De):h()}const{show:C,hide:B}=qt({showing:y,hideOnRouteChange:c,handleShow:P,handleHide:m}),{addToHistory:A,removeFromHistory:I}=Tt(y,B,c),W={belowBreakpoint:S,hide:B},V=r(()=>e.side==="right"),R=r(()=>(v.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),ae=_(0),M=_(!1),le=_(!1),de=_(L.value*R.value),j=r(()=>V.value===!0?"left":"right"),o=r(()=>y.value===!0&&S.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),d=r(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(V.value?"R":"L")!==-1||v.platform.is.ios===!0&&l.isContainer.value===!0),g=r(()=>e.overlay===!1&&y.value===!0&&S.value===!1),E=r(()=>e.overlay===!0&&y.value===!0&&S.value===!1),G=r(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&M.value===!1?" hidden":"")),ye=r(()=>({backgroundColor:`rgba(0,0,0,${ae.value*.4})`})),ve=r(()=>V.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),ze=r(()=>V.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Je=r(()=>{const a={};return l.header.space===!0&&ve.value===!1&&(d.value===!0?a.top=`${l.header.offset}px`:l.header.space===!0&&(a.top=`${l.header.size}px`)),l.footer.space===!0&&ze.value===!1&&(d.value===!0?a.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(a.bottom=`${l.footer.size}px`)),a}),Ye=r(()=>{const a={width:`${L.value}px`,transform:`translateX(${de.value}px)`};return S.value===!0?a:Object.assign(a,Je.value)}),Ge=r(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Ze=r(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(S.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${Q.value===!0?"mini":"standard"}`+(d.value===!0||g.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ve.value===!0?" q-drawer--top-padding":""))),et=r(()=>{const a=v.lang.rtl===!0?e.side:j.value;return[[ue,ot,void 0,{[a]:!0,mouse:!0}]]}),tt=r(()=>{const a=v.lang.rtl===!0?j.value:e.side;return[[ue,Be,void 0,{[a]:!0,mouse:!0}]]}),at=r(()=>{const a=v.lang.rtl===!0?j.value:e.side;return[[ue,Be,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function Se(){it(S,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}k(S,a=>{a===!0?($=y.value,y.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&$!==!1&&(y.value===!0?(H(0),N(0),_e()):C(!1))}),k(()=>e.side,(a,b)=>{l.instances[b]===W&&(l.instances[b]=void 0,l[b].space=!1,l[b].offset=0),l.instances[a]=W,l[a].size=L.value,l[a].space=g.value,l[a].offset=o.value}),k(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&Se()}),k(()=>e.behavior+e.breakpoint,Se),k(l.isContainer,a=>{y.value===!0&&t(a!==!0),a===!0&&Se()}),k(l.scrollbarWidth,()=>{H(y.value===!0?0:void 0)}),k(o,a=>{U("offset",a)}),k(g,a=>{s("onLayout",a),U("space",a)}),k(V,()=>{H()}),k(L,a=>{H(),pe(e.miniToOverlay,a)}),k(()=>e.miniToOverlay,a=>{pe(a,L.value)}),k(()=>v.lang.rtl,()=>{H()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(lt(),l.animate())}),k(Q,a=>{s("miniState",a)});function H(a){a===void 0?me(()=>{a=y.value===!0?0:L.value,H(R.value*a)}):(l.isContainer.value===!0&&V.value===!0&&(S.value===!0||Math.abs(a)===L.value)&&(a+=R.value*l.scrollbarWidth.value),de.value=a)}function N(a){ae.value=a}function we(a){const b=a===!0?"remove":l.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function lt(){x!==null&&clearTimeout(x),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,x=setTimeout(()=>{x=null,le.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ot(a){if(y.value!==!1)return;const b=L.value,O=X(a.distance.x,0,b);if(a.isFinal===!0){O>=Math.min(75,b)===!0?C():(l.animate(),N(0),H(R.value*b)),M.value=!1;return}H((v.lang.rtl===!0?V.value!==!0:V.value)?Math.max(b-O,0):Math.min(0,O-b)),N(X(O/b,0,1)),a.isFirst===!0&&(M.value=!0)}function Be(a){if(y.value!==!0)return;const b=L.value,O=a.direction===e.side,fe=(v.lang.rtl===!0?O!==!0:O)?X(a.distance.x,0,b):0;if(a.isFinal===!0){Math.abs(fe)<Math.min(75,b)===!0?(l.animate(),N(1),H(0)):B(),M.value=!1;return}H(R.value*fe),N(X(1-fe/b,0,1)),a.isFirst===!0&&(M.value=!0)}function _e(){t(!1),we(!0)}function U(a,b){l.update(e.side,a,b)}function it(a,b){a.value!==b&&(a.value=b)}function pe(a,b){U("size",a===!0?e.miniWidth:b)}return l.instances[e.side]=W,pe(e.miniToOverlay,L.value),U("space",g.value),U("offset",o.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),se(()=>{s("onLayout",g.value),s("miniState",Q.value),$=e.showIfAbove===!0;const a=()=>{(y.value===!0?P:m)(!1,!0)};if(l.totalWidth.value!==0){me(a);return}z=k(l.totalWidth,()=>{z(),z=void 0,y.value===!1&&e.showIfAbove===!0&&S.value===!1?C(!1):a()})}),te(()=>{z!==void 0&&z(),x!==null&&(clearTimeout(x),x=null),y.value===!0&&_e(),l.instances[e.side]===W&&(l.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const a=[];S.value===!0&&(e.noSwipeOpen===!1&&a.push(K(p("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),et.value)),a.push(Me("div",{ref:"backdrop",class:G.value,style:ye.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>at.value)));const b=Q.value===!0&&q.mini!==void 0,O=[p("div",{...i,key:""+b,class:[Ge.value,i.class]},b===!0?q.mini():$e(q.default))];return e.elevated===!0&&y.value===!0&&O.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Me("aside",{ref:"content",class:Ze.value,style:Ye.value},O,"contentclose",e.noSwipeClose!==!0&&S.value===!0,()=>tt.value)),p("div",{class:"q-drawer-container"},a)}}}),Ht=J({name:"QPageContainer",setup(e,{slots:q}){const{proxy:{$q:s}}=Y(),i=Le(be,F);if(i===F)return console.error("QPageContainer needs to be child of QLayout"),F;Ie(ct,!0);const n=r(()=>{const v={};return i.header.space===!0&&(v.paddingTop=`${i.header.size}px`),i.right.space===!0&&(v[`padding${s.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(v.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(v[`padding${s.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),v});return()=>p("div",{class:"q-page-container",style:n.value},$e(q.default))}}),Qt=J({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:q,emit:s}){const{proxy:{$q:i}}=Y(),n=_(null),v=_(i.screen.height),u=_(e.container===!0?0:i.screen.width),t=_({position:0,direction:"down",inflectionPoint:0}),f=_(0),h=_(je.value===!0?0:xe()),l=r(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),$=r(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),x=r(()=>h.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${h.value}px`}:null),z=r(()=>h.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${h.value}px`,width:`calc(100% + ${h.value}px)`}:null);function S(m){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};t.value=C,e.onScroll!==void 0&&s("scroll",C)}}function Q(m){const{height:C,width:B}=m;let A=!1;v.value!==C&&(A=!0,v.value=C,e.onScrollHeight!==void 0&&s("scrollHeight",C),y()),u.value!==B&&(A=!0,u.value=B),A===!0&&e.onResize!==void 0&&s("resize",m)}function L({height:m}){f.value!==m&&(f.value=m,y())}function y(){if(e.container===!0){const m=v.value>f.value?xe():0;h.value!==m&&(h.value=m)}}let c=null;const P={instances:{},view:r(()=>e.view),isContainer:r(()=>e.container),rootRef:n,height:v,containerHeight:f,scrollbarWidth:h,totalWidth:r(()=>u.value+h.value),rows:r(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:he({size:0,offset:0,space:!1}),right:he({size:300,offset:0,space:!1}),footer:he({size:0,offset:0,space:!1}),left:he({size:300,offset:0,space:!1}),scroll:t,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,C,B){P[m][C]=B}};if(Ie(be,P),xe()>0){let B=function(){m=null,C.classList.remove("hide-scrollbar")},A=function(){if(m===null){if(C.scrollHeight>i.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(B,300)},I=function(W){m!==null&&W==="remove"&&(clearTimeout(m),B()),window[`${W}EventListener`]("resize",A)},m=null;const C=document.body;k(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),dt(()=>{I("remove")})}return()=>{const m=Fe(q.default,[p(Xe,{onScroll:S}),p(ce,{onResize:Q})]),C=p("div",{class:l.value,style:$.value,ref:e.container===!0?void 0:n,tabindex:-1},m);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:n},[p(ce,{onResize:L}),p("div",{class:"absolute-full",style:x.value},[p("div",{class:"scroll",style:z.value},[C])])]):C}}});const Vt={setup(){return{drawerLeft:_(!1),drawerRight:_(!1)}}},Pe=e=>(ht("data-v-6b2ef6e7"),e=e(),mt(),e),Rt={class:"absolute-bottom bg-transparent"},At=Pe(()=>ge("img",{src:"/public/icons/man.png"},null,-1)),Dt=Pe(()=>ge("div",{class:"text-weight-bold"},"NAME",-1)),Wt=Pe(()=>ge("div",null,"\u0423\u0447\u0435\u043D\u0438\u043A",-1));function jt(e,q,s,i,n,v){const u=vt("router-view");return Z(),ee(Qt,{view:"hHr LpR fFr"},{default:T(()=>[w(Bt,{elevated:"",class:"shadow-2 text-white",style:{background:"linear-gradient(185deg, #04173f 0%, #163c53 100%)"}},{default:T(()=>[w(bt,null,{default:T(()=>[w(qe,{flat:"",onClick:q[0]||(q[0]=t=>i.drawerLeft=!i.drawerLeft),icon:"menu"}),w(Lt,null,{default:T(()=>[w(qe,{flat:"",to:"/",label:"\u041D\u0410\u0428\u0415 \u041D\u0410\u0417\u0412\u0410\u041D\u0418\u0415 \u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0410"})]),_:1}),w(qe,{flat:"",onClick:q[1]||(q[1]=t=>i.drawerRight=!i.drawerRight),label:"\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442",icon:"account_circle"})]),_:1})]),_:1}),w(We,{modelValue:i.drawerLeft,"onUpdate:modelValue":q[2]||(q[2]=t=>i.drawerLeft=t),"show-if-above":"",bordered:"",side:"left"},{default:T(()=>[w(Ot,{class:"fit"},{default:T(()=>[w(gt,{padding:"",class:"menu-list"},{default:T(()=>[K((Z(),ee(ne,{clickable:"",to:"/recordBook"},{default:T(()=>[w(D,{avatar:""},{default:T(()=>[w(oe,{name:"book"})]),_:1}),w(D,null,{default:T(()=>[ie(" \u0414\u043D\u0435\u0432\u043D\u0438\u043A ")]),_:1})]),_:1})),[[re]]),K((Z(),ee(ne,{clickable:"",to:"/completedTasks"},{default:T(()=>[w(D,{avatar:""},{default:T(()=>[w(oe,{name:"check"})]),_:1}),w(D,null,{default:T(()=>[ie(" \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 ")]),_:1})]),_:1})),[[re]]),K((Z(),ee(ne,{clickable:"",to:"/materials"},{default:T(()=>[w(D,{avatar:""},{default:T(()=>[w(oe,{name:"clear_all"})]),_:1}),w(D,null,{default:T(()=>[ie(" \u0423\u0447\u0435\u0431\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B ")]),_:1})]),_:1})),[[re]]),K((Z(),ee(ne,{clickable:"",to:"/tasks"},{default:T(()=>[w(D,{avatar:""},{default:T(()=>[w(oe,{name:"task"})]),_:1}),w(D,null,{default:T(()=>[ie(" \u0417\u0430\u0434\u0430\u043D\u0438\u044F ")]),_:1})]),_:1})),[[re]]),K((Z(),ee(ne,{clickable:"",to:"/rating"},{default:T(()=>[w(D,{avatar:""},{default:T(()=>[w(oe,{name:"star"})]),_:1}),w(D,null,{default:T(()=>[ie(" \u0420\u0435\u0439\u0442\u0438\u043D\u0433 ")]),_:1})]),_:1})),[[re]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),w(We,{modelValue:i.drawerRight,"onUpdate:modelValue":q[3]||(q[3]=t=>i.drawerRight=t),side:"right",overlay:"",behavior:"mobile",bordered:"","show-if-above":"",width:350,breakpoint:400},{default:T(()=>[w(Ct,{class:"absolute-top",src:"/public/icons/fon1.jpg",style:{height:"350px"}},{default:T(()=>[ge("div",Rt,[w(ft,{size:"146px",class:"q-mb-md"},{default:T(()=>[At]),_:1}),Dt,Wt])]),_:1})]),_:1},8,["modelValue"]),w(Ht,null,{default:T(()=>[w(u)]),_:1})]),_:1})}var ea=$t(Vt,[["render",jt],["__scopeId","data-v-6b2ef6e7"]]);export{ea as default};
