"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7568],{7568:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var o=n(641),l=n(5220),i=n(1083);const r=(0,o.pM)({__name:"HeroHitokoto",setup(t){let e="https://v1.hitokoto.cn";const n=t=>{let o=window.location.pathname;t&&(o=t),"/"==o&&(0,i.A)({method:"get",url:e,params:{}}).then((t=>{(t=>{const e=window;clearInterval(e.Timer);const n=document.getElementsByClassName("vp-blog-hero-description");n.length>0&&(n[0].id="hotWord");const o=document.getElementById("hotWord");if(!o)return;o.innerHTML=`\n<div class="word">\n  <div class="left">『</div>\n    <span id="hitokoto_text"></span>\n  <div class="right">』</div>\n</div>\n<div class="author" id="hitokoto_author"> ——「${t.from}」</div>\n  `;const l=document.getElementById("hitokoto_author"),i=document.getElementById("hitokoto_text");if(!i||!l)return;l.style.opacity="0";const r=t.hitokoto.split("");let a=0,s=0,c=!1,d="";e.Timer=setInterval((()=>{const t=r[a];if(d.length<4?l.style.opacity="0":l.style.opacity="1",0!=s)return s--,void(0==d.length&&0==s&&clearInterval(e.Timer));c?clearInterval(e.Timer):d+=t,c?a--:a++,a>=r.length&&(c=!0,a=r.length,s=60),a<0&&(c=!1,a=0,s=60),i.innerHTML=d}),200)})(t.data)})).catch((t=>{e="https://international.v1.hitokoto.cn",n()}))};return(0,o.sV)((()=>{(0,o.dY)((()=>{n()})),(0,l.rd)().afterEach((t=>{(0,o.dY)((()=>{n(t.fullPath)}))}))})),(t,e)=>{const n=(0,o.g2)("ClientOnly");return(0,o.uX)(),(0,o.Wv)(n,null,{default:(0,o.k6)((()=>e[0]||(e[0]=[(0,o.Lk)("div",{class:"none"},"一言插件",-1)]))),_:1})}}})}}]);