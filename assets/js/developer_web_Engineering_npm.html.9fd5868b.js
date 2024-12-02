"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8683],{6262:(i,s)=>{s.A=(i,s)=>{const n=i.__vccOpts||i;for(const[i,a]of s)n[i]=a;return n}},7703:(i,s,n)=>{n.r(s),n.d(s,{comp:()=>l,data:()=>t});var a=n(641);const e={},l=(0,n(6262).A)(e,[["render",function(i,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h1 id="npm-常用命令" tabindex="-1"><a class="header-anchor" href="#npm-常用命令"><span>npm 常用命令</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该文档有待补充和完善</p></div><h2 id="阿里巴巴开源镜像站" tabindex="-1"><a class="header-anchor" href="#阿里巴巴开源镜像站"><span>阿里巴巴开源镜像站</span></a></h2><p><a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noopener noreferrer">https://developer.aliyun.com/mirror/</a></p><h2 id="npm-镜像站" tabindex="-1"><a class="header-anchor" href="#npm-镜像站"><span>npm 镜像站</span></a></h2><p><a href="http://www.npmmirror.com/" target="_blank" rel="noopener noreferrer">http://www.npmmirror.com/</a></p><h2 id="linux-设置本地代理" tabindex="-1"><a class="header-anchor" href="#linux-设置本地代理"><span>Linux 设置本地代理</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ALL_PROXY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">socks5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">127</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">10808</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些其它指令" tabindex="-1"><a class="header-anchor" href="#一些其它指令"><span>一些其它指令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## npm 升级</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> npm</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 清除缓存</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 卸载</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xxx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (-g)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 查看更新</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> outdated</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 其它指令</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> audit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fix</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> audit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fix</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> audit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10)]))}]]),t=JSON.parse('{"path":"/developer/web/Engineering/npm.html","title":"npm 常用命令","lang":"zh-CN","frontmatter":{"tag":["工具","工程化"],"permalink":"/developer/web/Engineering/npm.html","description":"npm 常用命令 注意 该文档有待补充和完善 阿里巴巴开源镜像站 https://developer.aliyun.com/mirror/ npm 镜像站 http://www.npmmirror.com/ Linux 设置本地代理 一些其它指令","head":[["meta",{"property":"og:url","content":"https://yuchunmao.github.io/blog/developer/web/Engineering/npm.html"}],["meta",{"property":"og:site_name","content":"独白"}],["meta",{"property":"og:title","content":"npm 常用命令"}],["meta",{"property":"og:description","content":"npm 常用命令 注意 该文档有待补充和完善 阿里巴巴开源镜像站 https://developer.aliyun.com/mirror/ npm 镜像站 http://www.npmmirror.com/ Linux 设置本地代理 一些其它指令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T04:27:45.000Z"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:tag","content":"工程化"}],["meta",{"property":"article:modified_time","content":"2024-12-02T04:27:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm 常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T04:27:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"独白\\",\\"email\\":\\"758235948@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"阿里巴巴开源镜像站","slug":"阿里巴巴开源镜像站","link":"#阿里巴巴开源镜像站","children":[]},{"level":2,"title":"npm 镜像站","slug":"npm-镜像站","link":"#npm-镜像站","children":[]},{"level":2,"title":"Linux 设置本地代理","slug":"linux-设置本地代理","link":"#linux-设置本地代理","children":[]},{"level":2,"title":"一些其它指令","slug":"一些其它指令","link":"#一些其它指令","children":[]}],"git":{"createdTime":1731036915000,"updatedTime":1733113665000,"contributors":[{"name":"robot","email":"Yuchunmao1998123","commits":1}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"developer/web/Engineering/npm常用指令.md","localizedDate":"2024年11月8日","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>该文档有待补充和完善</p>\\n</div>\\n<h2>阿里巴巴开源镜像站</h2>\\n<p><a href=\\"https://developer.aliyun.com/mirror/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://developer.aliyun.com/mirror/</a></p>\\n<h2>npm 镜像站</h2>\\n<p><a href=\\"http://www.npmmirror.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://www.npmmirror.com/</a></p>","autoDesc":true}')}}]);