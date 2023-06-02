import{_ as a,c as n,o as s,a as e}from"./app.0320fe1a.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Linux使用命令","slug":"linux使用命令","link":"#linux使用命令","children":[]},{"level":3,"title":"Linux是一種自由和開放源碼的類UNIX作業系統。 该操作系统的内核由林纳斯·托瓦兹在1991年10月5日首次发布，再加上使用者空間的應用程式之後，就成為了Linux作業系統。 Linux也是自由软件和开放源代码软件发展中最著名的例子","slug":"linux是一種自由和開放源碼的類unix作業系統。-该操作系统的内核由林纳斯·托瓦兹在1991年10月5日首次发布-再加上使用者空間的應用程式之後-就成為了linux作業系統。-linux也是自由软件和开放源代码软件发展中最著名的例子","link":"#linux是一種自由和開放源碼的類unix作業系統。-该操作系统的内核由林纳斯·托瓦兹在1991年10月5日首次发布-再加上使用者空間的應用程式之後-就成為了linux作業系統。-linux也是自由软件和开放源代码软件发展中最著名的例子","children":[]},{"level":3,"title":"1. 日常使用命令","slug":"_1-日常使用命令","link":"#_1-日常使用命令","children":[]},{"level":3,"title":"2. 网络相关命令","slug":"_2-网络相关命令","link":"#_2-网络相关命令","children":[]}],"relativePath":"workrecord/linux/index.md"}'),l={name:"workrecord/linux/index.md"},t=e(`<h3 id="linux使用命令" tabindex="-1">Linux使用命令 <a class="header-anchor" href="#linux使用命令" aria-hidden="true">#</a></h3><h3 id="linux是一種自由和開放源碼的類unix作業系統。-该操作系统的内核由林纳斯·托瓦兹在1991年10月5日首次发布-再加上使用者空間的應用程式之後-就成為了linux作業系統。-linux也是自由软件和开放源代码软件发展中最著名的例子" tabindex="-1">Linux是一種自由和開放源碼的類UNIX作業系統。 该操作系统的内核由林纳斯·托瓦兹在1991年10月5日首次发布，再加上使用者空間的應用程式之後，就成為了Linux作業系統。 Linux也是自由软件和开放源代码软件发展中最著名的例子 <a class="header-anchor" href="#linux是一種自由和開放源碼的類unix作業系統。-该操作系统的内核由林纳斯·托瓦兹在1991年10月5日首次发布-再加上使用者空間的應用程式之後-就成為了linux作業系統。-linux也是自由软件和开放源代码软件发展中最著名的例子" aria-hidden="true">#</a></h3><h3 id="_1-日常使用命令" tabindex="-1">1. 日常使用命令 <a class="header-anchor" href="#_1-日常使用命令" aria-hidden="true">#</a></h3><h4 id="_1-查询当前防火墙开启的端口和开启端口" tabindex="-1">1.<code>查询当前防火墙开启的端口</code>和开启端口 <a class="header-anchor" href="#_1-查询当前防火墙开启的端口和开启端口" aria-hidden="true">#</a></h4><div class="language-centos7.9使用"><button title="Copy Code" class="copy"></button><span class="lang">centos7.9使用</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --list-ports			 ### 查询开启的端口</span></span>
<span class="line"><span style="color:#A6ACCD;">### 开启服务器防火墙的8080端口</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --add-port=8080/tcp --permanent    </span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --reload      ### 应用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_2-设置mysql开机自动运行-避免重启导致服务不启动" tabindex="-1">2.设置mysql开机自动运行_避免重启导致服务不启动 <a class="header-anchor" href="#_2-设置mysql开机自动运行-避免重启导致服务不启动" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">systemctl enable mysqld		</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl daemon-reload		</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_3-查询最近登录三次的信息" tabindex="-1">3.查询最近登录三次的信息 <a class="header-anchor" href="#_3-查询最近登录三次的信息" aria-hidden="true">#</a></h4><p>last -a | head -3</p><h4 id="_4-显示完整的时间" tabindex="-1">4.显示完整的时间 <a class="header-anchor" href="#_4-显示完整的时间" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">date &#39;+%c&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-网络相关命令" tabindex="-1">2. 网络相关命令 <a class="header-anchor" href="#_2-网络相关命令" aria-hidden="true">#</a></h3><pre><code>  nmap，也就是Network Mapper，是Linux下的网络扫描和嗅探工具包。											
  nmap是在网络安全渗透测试中经常会用到的强大的扫描器						
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">nmap -p- T4  127.0.0.1    ### </span></span>
<span class="line"><span style="color:#A6ACCD;">nmap -sP 172.16.0.*			### 寻找所有在线的主机	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),i=[t];function p(c,r,o,d,h,u){return s(),n("div",null,i)}const C=a(l,[["render",p]]);export{_ as __pageData,C as default};