"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5012,6825],{5012:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(641),l=n(33);const i=["spin"],s=(0,o.pM)({__name:"MyIcon",props:{name:String,spin:Boolean},setup(e){const t=e;return(e,n)=>((0,o.uX)(),(0,o.CE)("span",{class:(0,l.C4)(["iconfont icon",`icon-${t.name}`]),spin:t.spin},null,10,i))}})},6825:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var o=n(641),l=n(953),i=n(33),s=n(3751),c=n(5220),d=n(5012);const a={class:"dbPreviewBox-topBar"},u=["href"],r=["src","alt"],m={class:"dbPreviewBox-idxView"},v={class:"dbPreviewBox-idxView-box"},g={class:"dbPreviewBox-idxView-idx"},h={key:0,class:"dbPreviewBox-idxView-alt"},b=(0,o.pM)({__name:"PreviewImage",setup(e){let t=(0,l.KR)([]),n=(0,l.KR)(!1),b=(0,l.KR)(0);function p(){n.value=!1,document.body.style.overflow="auto"}function f(){const e=document.getElementById("dbPreviewBox-img");let t=e.clientWidth,n=e.clientHeight;t*=1.1,e.style.width=t+"px",n*=1.1,e.style.height=n+"px"}function y(){const e=document.getElementById("dbPreviewBox-img");let t=e.clientWidth,n=e.clientHeight;t*=.9,e.style.width=t+"px",n*=.9,e.style.height=n+"px"}function w(){const e=document.getElementById("dbPreviewBox-img");window.open(e.getAttribute("src"))}function x(){b.value>0&&b.value--,(0,o.dY)((()=>{B()}))}function k(){b.value<t.value.length-1&&b.value++,(0,o.dY)((()=>{B()}))}function B(){const e=document.getElementById("dbPreviewBox"),t=e.clientWidth,n=e.clientHeight,o=document.getElementById("dbPreviewBox-img");o.style.width=.9*t+"px",o.style.height="",o.style.maxWidth="",o.style.maxHeight="",o.style.left="",o.style.top="",o.style.cursor="",o.clientHeight>n&&(o.style.width="",o.style.height=.9*n+"px")}function R(e){const l=e.target.getAttribute("src");let i=b.value;for(let e=0;e<t.value.length;e++)if(t.value[e].src===l){i=e;break}b.value=i,n.value=!0,document.body.style.overflow="hidden",(0,o.dY)((()=>{B()}))}function C(e){console.log("初始化图片预览",e);let n=document.getElementsByClassName("theme-hope-content"),o=null;if(n.length>0&&(o=n[0]),!o)return;const l=o.getElementsByTagName("img"),i=[];for(let t=0;t<l.length;t++){const n=l[t];"bind"===e&&i.push({alt:n.getAttribute("alt"),src:n.getAttribute("src")}),n.removeEventListener("click",R),"bind"===e&&n.addEventListener("click",R)}t.value=i}let E=!1,P=0,L=0,I=0,_=0;function F(e){if(!E)return;const t=e.clientX-P,n=e.clientY-L,o=I+t,l=_+n,i=document.getElementById("dbPreviewBox-img");i.style.left=o+"px",i.style.top=l+"px"}function Y(e){const t=document.getElementById("dbPreviewBox-img");let n;t.style.cursor="move",E=!0,console.log("按下",e),P=e.clientX,L=e.clientY,n=window.getComputedStyle?window.getComputedStyle(t,null):t.currentStyle,I=parseInt(n.left),_=parseInt(n.top)}function M(e){"touchmove"===e.type&&1==e.touches.length&&F(e.touches[0]),"mousemove"===e.type&&F(e)}function X(e){document.getElementById("dbPreviewBox-img").style.cursor="default",E=!1,P=0,L=0,I=0,_=0}function H(e){"touchstart"===e.type&&1==e.touches.length&&Y(e.touches[0]),"mousedown"===e.type&&Y(e)}return(0,o.sV)((()=>{(0,o.dY)((()=>{C("bind")}));const e=(0,c.rd)();e.beforeEach(((e,t)=>{e.path!==t.path&&C("unbind")})),e.afterEach(((e,t)=>{e.path!==t.path&&(0,o.dY)((()=>{setTimeout((()=>{C("bind")}),1e3)}))}))})),(e,c)=>{const B=(0,o.g2)("ClientOnly");return(0,o.uX)(),(0,o.Wv)(B,null,{default:(0,o.k6)((()=>[(0,l.R1)(n)?((0,o.uX)(),(0,o.CE)("div",{key:0,id:"dbPreviewBox",onMousemove:M,onTouchmove:M,onMouseup:X,onTouchend:X},[(0,o.Lk)("div",a,[(0,o.Lk)("div",{class:(0,i.C4)(["btn",{hide:0===(0,l.R1)(b)}]),onClick:x},[(0,o.bF)(d.default,{class:"icon",name:"xiangzuo"})],2),(0,o.Lk)("div",{class:(0,i.C4)(["btn",{hide:(0,l.R1)(b)===(0,l.R1)(t).length-1}]),onClick:k},[(0,o.bF)(d.default,{class:"icon",name:"xiangyou"})],2),(0,o.Lk)("div",{class:"btn",onClick:(0,s.D$)(f,["stop"])},[(0,o.bF)(d.default,{class:"icon",name:"fangda"})]),(0,o.Lk)("div",{class:"btn",onClick:(0,s.D$)(y,["stop"])},[(0,o.bF)(d.default,{class:"icon",name:"suoxiao"})]),(0,o.Lk)("div",{class:"btn",onClick:(0,s.D$)(w,["stop"])},[(0,o.bF)(d.default,{class:"icon",name:"quanping"})]),(0,o.Lk)("a",{class:"btn",href:(0,l.R1)(t)[(0,l.R1)(b)].src,download:""},[(0,o.bF)(d.default,{class:"icon",name:"xiazai"})],8,u),(0,o.Lk)("div",{class:"btn",onClick:(0,s.D$)(p,["stop"])},[(0,o.bF)(d.default,{class:"icon",name:"guanbi"})])]),(0,o.Lk)("img",{id:"dbPreviewBox-img",onMousedown:H,onTouchstart:H,src:(0,l.R1)(t)[(0,l.R1)(b)].src,alt:(0,l.R1)(t)[(0,l.R1)(b)].alt,srcset:""},null,40,r),(0,o.Lk)("div",m,[(0,o.Lk)("div",v,[(0,o.Lk)("div",g,(0,i.v_)((0,l.R1)(b)+1)+"/"+(0,i.v_)((0,l.R1)(t).length),1),(0,l.R1)(t)[(0,l.R1)(b)].alt?((0,o.uX)(),(0,o.CE)("div",h,(0,i.v_)((0,l.R1)(t)[(0,l.R1)(b)].alt),1)):(0,o.Q3)("v-if",!0)])])],32)):(0,o.Q3)("v-if",!0)])),_:1})}}})}}]);