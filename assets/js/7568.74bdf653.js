"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7568],{7568:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var n=o(641),l=o(5220),i=o(1083);const r=(0,n.pM)({__name:"HeroHitokoto",setup(t){let e="https://v1.hitokoto.cn",o="https://international.v1.hitokoto.cn";const r=t=>{const e=window;clearInterval(e.Timer);const o=document.getElementsByClassName("vp-blog-hero-description");o.length>0&&(o[0].id="hotWord");const n=document.getElementById("hotWord");if(!n)return;n.innerHTML=`\n<div class="word">\n  <div class="left">『</div>\n    <span id="hitokoto_text"></span>\n  <div class="right">』</div>\n</div>\n<div class="author" id="hitokoto_author"> ——「${t.from}」</div>\n  `;const l=document.getElementById("hitokoto_author"),i=document.getElementById("hitokoto_text");if(!i||!l)return;l.style.opacity="0";const r=t.hitokoto.split("");let a=0,s=0,c=!1,d="";e.Timer=setInterval((()=>{const t=r[a];if(d.length<4?l.style.opacity="0":l.style.opacity="1",0!=s)return s--,void(0==d.length&&0==s&&clearInterval(e.Timer));c?clearInterval(e.Timer):d+=t,c?a--:a++,a>=r.length&&(c=!0,a=r.length,s=60),a<0&&(c=!1,a=0,s=60),i.innerHTML=d}),200)},a=t=>{let n=window.location.pathname;t&&(n=t),["/blog/","/"].includes(n)&&(0,i.A)({method:"get",url:e,params:{}}).then((t=>{r(t.data)})).catch((t=>{e!==o?(e=o,a()):r({from:"接口炸了，我随便说两句",hitokoto:"在那个无限蔓延的城市里，什么都有，可唯独没有尽头。"})}))};return(0,n.sV)((()=>{(0,n.dY)((()=>{a()})),(0,l.rd)().afterEach((t=>{(0,n.dY)((()=>{a(t.fullPath)}))}))})),(t,e)=>{const o=(0,n.g2)("ClientOnly");return(0,n.uX)(),(0,n.Wv)(o,null,{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.Lk)("div",{class:"none"},"一言插件",-1)]))),_:1})}}})}}]);