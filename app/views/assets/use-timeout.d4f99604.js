import{I as r,f as i,P as s,g as m}from"./index.2a79524d.js";function a(){let e=null;const n=m();function t(){e!==null&&(clearTimeout(e),e=null)}return r(t),i(t),{removeTimeout:t,registerTimeout(o,u){t(),s(n)===!1&&(e=setTimeout(()=>{e=null,o()},u))}}}export{a as u};
