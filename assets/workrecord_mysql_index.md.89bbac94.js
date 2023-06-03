import{_ as l,c as e,o as s,a as t}from"./app.561ae41c.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Mysql 相关","slug":"mysql-相关","link":"#mysql-相关","children":[{"level":3,"title":"在mysql中创建纯数字数据库是不合标准的，默认会提示语法错误，但通过mysql转义符 ` 还是可以创建","slug":"在mysql中创建纯数字数据库是不合标准的-默认会提示语法错误-但通过mysql转义符-还是可以创建","link":"#在mysql中创建纯数字数据库是不合标准的-默认会提示语法错误-但通过mysql转义符-还是可以创建","children":[]},{"level":3,"title":"4.1\\t查看mysql 的连接情况","slug":"_4-1查看mysql-的连接情况","link":"#_4-1查看mysql-的连接情况","children":[]},{"level":3,"title":"4.2 关闭过多的sleep  线程","slug":"_4-2-关闭过多的sleep-线程","link":"#_4-2-关闭过多的sleep-线程","children":[]}]}],"relativePath":"workrecord/mysql/index.md"}'),a={name:"workrecord/mysql/index.md"},i=t(`<h2 id="mysql-相关" tabindex="-1">Mysql 相关 <a class="header-anchor" href="#mysql-相关" aria-hidden="true">#</a></h2><h3 id="在mysql中创建纯数字数据库是不合标准的-默认会提示语法错误-但通过mysql转义符-还是可以创建" tabindex="-1">在mysql中创建纯数字数据库是不合标准的，默认会提示语法错误，但通过mysql转义符 \` 还是可以创建 <a class="header-anchor" href="#在mysql中创建纯数字数据库是不合标准的-默认会提示语法错误-但通过mysql转义符-还是可以创建" aria-hidden="true">#</a></h3><h3 id="_4-1查看mysql-的连接情况" tabindex="-1">4.1 查看mysql 的连接情况 <a class="header-anchor" href="#_4-1查看mysql-的连接情况" aria-hidden="true">#</a></h3><p>以下是一些常用命令，帮助我们了解当前数据库的配置。</p><ul><li>查询最大连接数<br> show variables like &#39;%max_connections%&#39;;</li><li>设置最大连接数</li></ul><p>set global max_connections=1000;</p><ul><li>响应的最大连接数</li></ul><p>show global status like &#39;Max_used_connections&#39;;</p><ul><li>查看线程信息</li></ul><p><code>show status like &#39;Threads%&#39; </code></p><ul><li>睡眠连接超时数</li></ul><p>show global variables like &#39;wait_timeout&#39;;</p><ul><li>杀死连接id （表： INFORMATION_SCHEMA.PROCESSLIST）</li></ul><p><code>kill 21120003 </code></p><h3 id="_4-2-关闭过多的sleep-线程" tabindex="-1">4.2 关闭过多的sleep 线程 <a class="header-anchor" href="#_4-2-关闭过多的sleep-线程" aria-hidden="true">#</a></h3><p>对于正在运行中的生产服务器，在不能停止服务情况下，修改此项怎么办？很简单，以root用户登录到mysql,执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">set global wait_timeout=100												</span></span>
<span class="line"><span style="color:#A6ACCD;">set global wait_timeout=30;				###设置线程失效的时间	</span></span>
<span class="line"><span style="color:#A6ACCD;">SET GLOBAL interactive_timeout=30;					</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),n=[i];function o(r,c,d,p,_,h){return s(),e("div",null,n)}const y=l(a,[["render",o]]);export{u as __pageData,y as default};
