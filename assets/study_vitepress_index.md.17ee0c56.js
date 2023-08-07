import{_ as e,c as s,o,d as t}from"./app.39ae84a8.js";const h=JSON.parse('{"title":"ES6 常用知识","description":"","frontmatter":{},"headers":[{"level":3,"title":"注意点(viteprss 和 vuepress  的变化点)","slug":"注意点-viteprss-和-vuepress-的变化点","link":"#注意点-viteprss-和-vuepress-的变化点","children":[]}],"relativePath":"study/vitepress/index.md"}'),c={name:"study/vitepress/index.md"},a=t(`<h3 id="注意点-viteprss-和-vuepress-的变化点" tabindex="-1">注意点(viteprss 和 vuepress 的变化点) <a class="header-anchor" href="#注意点-viteprss-和-vuepress-的变化点" aria-hidden="true">#</a></h3><pre><code>调试的端口和主机名
 vitepress 修改启动端口需要通过命令行传参 --port=8732   --host  192.168.x.x
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">在package.json中增加如何的内容，这样可以远程调试</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:dev&quot;: &quot;vitepress dev docs  --host 192.168.100.100 --port=8001 &quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>public 公共文件
 vuepress 是 docs/.vuepress/public 目录
 vitepress 是 docs/public 目录
路由
   vuepress 默认配置下 README.md 和 index.md 都会被转换成 index.html
   vitepress 默认配置下只有 index.md 会被转换成 index.html
   vuepress 使用的是 navbar，需要修改为 nav
   vuepress 使用的是 children，需要修改为 items，且 items 是一个对象数组
   vuepress sidebar 的展开使用的是 collapsible，需要修改为 collapsed
导入代码块
   vuepress 语法为 @[code](./code/snippet.js)
   vitepress 语法为 &lt;&lt;&lt; @/code/snippet.js部分导入使用 VS Code region 语法，不再支持按行号引入
</code></pre><h1 id="es6-常用知识" tabindex="-1">ES6 常用知识 <a class="header-anchor" href="#es6-常用知识" aria-hidden="true">#</a></h1><p><code>ECMAScript 6</code> (简称 <code>ES6</code>) 是 <code>JavaScript</code> 语言的下一代标准</p><p><code>ECMAScript</code> 的提案流程</p><ul><li><code>Stage 0 - Strawman</code>（展示阶段）</li><li><code>Stage 1 - Proposal</code>（征求意见阶段）</li><li><code>Stage 2 - Draft</code>（草案阶段）</li><li><code>Stage 3 - Candidate</code>（候选人阶段）</li><li><code>Stage 4 - Finished</code>（定案阶段）</li></ul><p>一个提案只要能进入 <code>Stage 2</code> 就差不多肯定会包括在以后的正式标准里面</p><div class="warning custom-block"><p class="custom-block-title">ES6 和 ES2015 的区别</p><p><code>ES2015</code> 是一个年份标记，表示当年发布的 <code>ECMAScript</code> 标准的正式版本，其全称为《<code>ECMAScript 2015</code> 标准》（简称 <code>ES2015</code>）<br><code>ES6</code> 是一个历史名词也是一个泛指，含义是 <code>5.1</code> 版以后的 <code>JavaScript</code> 的下一代标准，涵盖了 <code>ES2015、ES2016、ES2017 ES2018</code> 等等</p></div>`,10),n=[a];function p(d,i,r,l,u,v){return o(),s("div",null,n)}const _=e(c,[["render",p]]);export{h as __pageData,_ as default};
