if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Index-Crk_m5xn.css",revision:null},{url:"assets/Index-DQFG9qsN.js",revision:null},{url:"Index.html",revision:"b06b58e154d3d30ca278f9cffc82691b"},{url:"registerSW.js",revision:"ca0b3a4ca381d0d526ec439951cac74d"},{url:"manifest.webmanifest",revision:"d227aba40e75d09371851f8f080c7031"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
