import{_ as n,c as e,o as a,d as s}from"./app.c44b6ade.js";const l="/MyBlog/assets/DNS2.277ca7ab.png",p="/MyBlog/assets/dnsconf.e5cdb24f.png",t="/MyBlog/assets/DNS_ERR0R.1f7a3b76.png",N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"服务器侧运维","slug":"服务器侧运维","link":"#服务器侧运维","children":[]},{"level":3,"title":"Centos 下搭建DNS服务器","slug":"centos-下搭建dns服务器","link":"#centos-下搭建dns服务器","children":[]},{"level":3,"title":"DNS的工作原理及过程分下面几个步骤：","slug":"dns的工作原理及过程分下面几个步骤","link":"#dns的工作原理及过程分下面几个步骤","children":[]},{"level":3,"title":"名词解释","slug":"名词解释","link":"#名词解释","children":[]},{"level":3,"title":"1.安装 bind  通过使用命令  yum  install  bind  bind-utils -y","slug":"_1-安装-bind-通过使用命令-yum-install-bind-bind-utils-y","link":"#_1-安装-bind-通过使用命令-yum-install-bind-bind-utils-y","children":[]},{"level":3,"title":"2.修改配置文件/etc/named.conf","slug":"_2-修改配置文件-etc-named-conf","link":"#_2-修改配置文件-etc-named-conf","children":[]},{"level":3,"title":"3.编辑区域配置文件--","slug":"_3-编辑区域配置文件","link":"#_3-编辑区域配置文件","children":[]},{"level":3,"title":"4.systemctl start named 启动命令","slug":"_4-systemctl-start-named-启动命令","link":"#_4-systemctl-start-named-启动命令","children":[]},{"level":2,"title":"5.重新加载DNS服务的配置文件","slug":"_5-重新加载dns服务的配置文件","link":"#_5-重新加载dns服务的配置文件","children":[{"level":3,"title":"6. 配置文件检查命令","slug":"_6-配置文件检查命令","link":"#_6-配置文件检查命令","children":[]},{"level":3,"title":"7.注意内容","slug":"_7-注意内容","link":"#_7-注意内容","children":[]},{"level":3,"title":"7.  DNS 协议","slug":"_7-dns-协议","link":"#_7-dns-协议","children":[]},{"level":3,"title":"7.APPArmor 模块","slug":"_7-apparmor-模块","link":"#_7-apparmor-模块","children":[]},{"level":3,"title":"报错信息","slug":"报错信息","link":"#报错信息","children":[]},{"level":3,"title":"Hrony  时间同步软件","slug":"hrony-时间同步软件","link":"#hrony-时间同步软件","children":[]},{"level":3,"title":"代理上网服务器的开源实现","slug":"代理上网服务器的开源实现","link":"#代理上网服务器的开源实现","children":[]},{"level":3,"title":"Ubuntu","slug":"ubuntu","link":"#ubuntu","children":[]},{"level":3,"title":"Ubuntu下搭建DNS服务器 (DNSmap)","slug":"ubuntu下搭建dns服务器-dnsmap","link":"#ubuntu下搭建dns服务器-dnsmap","children":[]},{"level":3,"title":"普罗米修斯","slug":"普罗米修斯","link":"#普罗米修斯","children":[]},{"level":3,"title":"LDAP 服务器的搭建","slug":"ldap-服务器的搭建","link":"#ldap-服务器的搭建","children":[]}]}],"relativePath":"yunwei/server/index.md"}'),r={name:"yunwei/server/index.md"},i=s('<h3 id="服务器侧运维" tabindex="-1">服务器侧运维 <a class="header-anchor" href="#服务器侧运维" aria-hidden="true">#</a></h3><h3 id="centos-下搭建dns服务器" tabindex="-1">Centos 下搭建DNS服务器 <a class="header-anchor" href="#centos-下搭建dns服务器" aria-hidden="true">#</a></h3><p>Bind 是一款开源的 DNS 服务器软件，由美国加州大学 Berkeley 分校开发和维护的，按照 ISC 的调查报告，BIND 是世界上使用最多最广泛的域名服务系统，使用它代替Windows下的DNS</p><p>Red Hat Linux的各个版本已经包含DNS服务器的软件--Bind，一般不需要用户另行安装！ Bind (berkeley internet name domain ) 由ISC 进行维护，还维护了dhcpd Bind是DNS协议的一种实现，是一个DNS Server程序，其守护进程名 为 named 软件包的功能</p><p>Bind：提供了域名服务的主要程序以及相关文件。</p><p>Bind-utils:提供了对DNS服务器的测试工具程序（nslookupdup、dig等）</p><p>Bind-chroot:为Bind提供了一个伪装的根目录以增强安全性</p><p>Caching-namserver:为配置Bind作为缓存域名服务器提供必要的默认配置文件，</p><p>查询本机是否有bind rpm -qa | grep bind</p><blockquote><p>dns服务有什么用呢，尤其是内网的dns服务，其实用处还蛮大的，我见过的典型使用，是数据库跨机房多活。 如某mysql主机搭建在深圳机房，为了保证高可用，那我们可以给这台主库，维护多个深圳同城的跨机房半同步备机，在异地如上海还可以维护一个异步备机。当主机出问题时候，我们可以切换到备机去，而切换了之后，ip肯定就变了，此时就不得不要求客户端修改ip，非常麻烦。 一个可选的方案就是，给客户端服务提供一个域名，客户端服务通过域名获取对应的ip，然后再去和该ip建立连接。当数据库发生主备切换时，只需要修改dns服务端，把域名对应的ip进行修改，同时通知客户端服务进行重连（重连时就可以取到最新的ip），这样的话，不就可以做到数据库容灾切换，且不需要业务方修改配置了<br> 安装参考 <a href="https://lnsyyj.github.io/2019/01/06/%E5%A6%82%E4%BD%95%E5%9C%A8CentOS-7%E4%B8%8A%E5%B0%86BIND%E9%85%8D%E7%BD%AE%E4%B8%BA%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9CDNS%E6%9C%8D%E5%8A%A1%E5%99%A8/" target="_blank" rel="noreferrer">https://lnsyyj.github.io/2019/01/06/如何在CentOS-7上将BIND配置为专用网络DNS服务器/</a></p></blockquote><h3 id="dns的工作原理及过程分下面几个步骤" tabindex="-1">DNS的工作原理及过程分下面几个步骤： <a class="header-anchor" href="#dns的工作原理及过程分下面几个步骤" aria-hidden="true">#</a></h3><p>第一步：客户机提出域名解析请求,并将该请求发送给本地的域名服务器。</p><p>第二步：当本地的域名服务器收到请求后,就先查询本地的缓存,如果有该纪录项,则本地的域名服务器就直接把查询的结果返回。</p><p>第三步：如果本地的缓存中没有该纪录,则本地域名服务器就直接把请求发给根域名服务器,然后根域名服务器再返回给本地域名服务器一个所查询域(根的子域)的主域名服务器的地址。</p><p>第四步：本地服务器再向上一步返回的域名服务器发送请求,然后接受请求的服务器查询自己的缓存,如果没有该纪录,则返回相关的下第五步：重复第四步,直到找到正确的纪录。</p><p>第六步：本地域名服务器把返回的结果保存到缓存,以备下一次使用,同时还将结果返回给客户机</p><h3 id="名词解释" tabindex="-1">名词解释 <a class="header-anchor" href="#名词解释" aria-hidden="true">#</a></h3><p>FQDN（fully qualified domain name）完全限定域名，是互联网上特定计算机或主机的完整域名。<br> 为什么要配置FQDN？<br> 完全限定域名可以逻辑准确地表示主机所在的位置。也可以说，全限定域名是主机名的完整表示。<br> 从全限定域名中包含的信息可以看出主机在域名树中的位置。 DNS解析过程：首先查找本机的HOSTS表，有的直接使用HOSTS表中的定义，它不查找网络连接中设置的DNS服务器<br> SOA(StartofAuthority)资源记录为起始授权机构记录，是最重要，最常用的一种资源记录。区域以服务器授权机构的概念为基础。当DNS服务器配置成加载区域时，它使用SOA和NS两种资源记录来确定区域的授权属性 起始授权机构SOA资源记录总是处于任何标准区域中的第一位，它表示最初创建它的DNS服务器或现在是这个截获的主服务器的DNS服务器。它还用于存储会影响区域更新或过期的其他属性，如版本信息和计时，这些属性会影响在这个区域的域名服务器之间进行同步数据的频繁程度</p><p><code>SOA 和NS的作用有哪些不同</code></p><p>SOA，是起始授权机构记录，说明了在众多 NS 记录里哪一台才是主要的服务器。在任何DNS记录文件中，都是以SOA ( Startof Authority )记录开始。<br> SOA资源记录表明此DNS名称服务器是该DNS域中数据信息的最佳来源。NS记录是域名服务器记录，用来指定该域名由哪个DNS服务器来进行解析。<br> NS记录中的IP即为该DNS服务器的IP地址。大多数域名注册商默认用自己的NS服务器来解析用户的DNS记录。SOA记录与NS记录的区别：NS记录表示域名服务器记录，用来指定该域名由哪个DNS服务器来进行解析；SOA记录设置一些数据版本和更新以及过期时间等信息</p><p>1）SOA资源记录</p><p>每个区在区的开始处都包含了一个起始授权记录（Start of Authority Record）,简称SOA记录。SOA定义了域的全局参数，进行整个域的管理设置。一个区域文件只允许存在唯一的SOA记录。</p><p>name：当前区域的名字</p><p>value：</p><p>（1）当前区域的主dns服务器的FQDN,也可以使用当前的区域名字</p><p>（2）当前区域管理员的邮箱地址，但地址中不能使用@符号，一般用.替换</p><p>（3） （主从服务器协调属性的定义以及否定答案统一的TTL值）</p><p>2）NS资源记录</p><p>名称服务器（NS : name server）资源记录表示该区的授权服务器，它们表示SOA资源记录中指定的该区的主和辅助服务器，也表示了任何授权区的服务器。每个区在区根处至少包含一个NS记录,每个NS在后续都应该有一个A记录</p><p>name ： 当前区域的名字</p><p>value：当前区域的某dns服务器的名字，一个区域可以有多个ns记录（dns服务器不止1个）</p><p>3）A或AAAA资源记录</p><p>地址（A）资源记录把FQDN映射到IP地址，因而解析器能查询FQDN对应的IP地址。</p><p>AAAA资源记录是IPV6</p><p>name：某主机的FQDN</p><p>value：主机名对应主机的ip地址</p><p>避免用户写错名称时给错误答案，可以使用泛域名*来解析至特定地址</p><p>4）PTR资源记录</p><p>相对于A资源记录，指针（PTR）记录把IP地址映射到FQDN。</p><p>name：ip,有特定格式，把ip地址反过来写，有特定后缀：in-addr.arpa</p><p>value：FQDN</p><p>5）CNAME资源记录</p><p>规范名字（CNAME）资源记录创建特定FQDN的别名。用户可以使用CNAME记录来隐藏用户网络的实现细节，使连接的客户端无法知道。</p><p>name: 别名的FQDN</p><p>value：正式名字的FQDN</p><p>web.bengbengtu.com    IN   CANME     www.bengbengtu.com</p><p>6）MX资源记录</p><p>邮件交换（MX）资源记录为DNS域名指定邮件交换服务器。邮件交换服务器是为DNS域名处理或转发邮件的主机，多个MX服务器之间有优先级之分。</p><p>name：当前区域的名字</p><p>value：当前区域的某邮件服务器（smtp服务器）的主机名</p><p>一个区域内，MX记录可以有多个；但每个记录的value之前应该有一个数字（0-99），表示此服务器的优先级，数字越小优先级越高</p><h3 id="_1-安装-bind-通过使用命令-yum-install-bind-bind-utils-y" tabindex="-1">1.安装 bind 通过使用命令 yum install bind bind-utils -y <a class="header-anchor" href="#_1-安装-bind-通过使用命令-yum-install-bind-bind-utils-y" aria-hidden="true">#</a></h3><p>且通过命令查一下是否有全部安装</p><p><img src="'+l+'" alt="dnsbind"></p><h3 id="_2-修改配置文件-etc-named-conf" tabindex="-1">2.修改配置文件/etc/named.conf <a class="header-anchor" href="#_2-修改配置文件-etc-named-conf" aria-hidden="true">#</a></h3><p><img src="'+p+`" alt="dnsbind"></p><h3 id="_3-编辑区域配置文件" tabindex="-1">3.编辑区域配置文件-- <a class="header-anchor" href="#_3-编辑区域配置文件" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[root@localhost ~]# vi /etc/named.rfc1912.zones</span></span>
<span class="line"><span style="color:#A6ACCD;">//正向区域配置</span></span>
<span class="line"><span style="color:#A6ACCD;">zone “hello.com” IN {</span></span>
<span class="line"><span style="color:#A6ACCD;">type master;</span></span>
<span class="line"><span style="color:#A6ACCD;">file “hello.com.zone”;</span></span>
<span class="line"><span style="color:#A6ACCD;">allow-update { none; };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">//反向区域配置</span></span>
<span class="line"><span style="color:#A6ACCD;">zone “80.168.192.in-addr.arpa” IN {</span></span>
<span class="line"><span style="color:#A6ACCD;">type master;</span></span>
<span class="line"><span style="color:#A6ACCD;">file “hello.com.local”;</span></span>
<span class="line"><span style="color:#A6ACCD;">allow-update { none; };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">//其它不用动</span></span>
<span class="line"><span style="color:#A6ACCD;">保存退出</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_4-systemctl-start-named-启动命令" tabindex="-1">4.systemctl start named 启动命令 <a class="header-anchor" href="#_4-systemctl-start-named-启动命令" aria-hidden="true">#</a></h3><blockquote><p>注意，一个DNS服务器可以服务多个域，包括正向反向必须要有根区域解析文件，一般叫做named.ca，告诉 DNS服务器 根节点服务器在哪还应该有两个区域解析库文件，一个叫做localhost(避免其他主机名也叫localhost，解析到别的IP去，保证localhost必须解析到127.0.0.1)，还有127.0.0.1 的 反向解析 named.localhost 是一个正向解析库文件 named.loopback 是一个反向解析库文件 以上两个文件不是bind开发者提供，而是RPM包制作者提供 named.ca 里面保存了13组 . 域名服务器的NS记录和A记录</p></blockquote><h2 id="_5-重新加载dns服务的配置文件" tabindex="-1">5.重新加载DNS服务的配置文件 <a class="header-anchor" href="#_5-重新加载dns服务的配置文件" aria-hidden="true">#</a></h2><p>rndc status 查看当前dns服务的状态 rndc stats 查看相关数据 rndc reload 重载配置文件，无需重启服务</p><h3 id="_6-配置文件检查命令" tabindex="-1">6. 配置文件检查命令 <a class="header-anchor" href="#_6-配置文件检查命令" aria-hidden="true">#</a></h3><h3 id="_7-注意内容" tabindex="-1">7.注意内容 <a class="header-anchor" href="#_7-注意内容" aria-hidden="true">#</a></h3><p>在数据库中，有各种记录书写的格式，简要介绍各种记录的书写格式；</p><p>SOA：</p><pre><code>DN|FQDN：当前域的域名，如：qhdlink.com.

 或者使用&quot;@&quot;代替域名；@符号会使用主配置文件中定义的域名来代替；

VALUE：由以下几个部分组成：

    1.当前域中的主名称服务器的FQDN；

	2.当前域的数据库管理员的邮箱地址，需要使用&quot;.&quot;来代替&quot;@&quot;: root.qhdlink.com.

	3.主名称服务器进行区域传送的相关时间参数的定义：

		(Serial Refresh Retry Expeir TTL)

		(Serial ;

		Refresh ;

		Retry ;

		Expeir ;

		TTL;)
</code></pre><p>NS记录：</p><pre><code>name：当前域的域名；可以写完全合格域名FQDN；可以写@占位；还可以省略不写；如果省略不写，则意味着该资源记录的名称与其上一条资源记录的名称相同；

value：当前区域内被授权的名称服务器的FQDN；



注意：

1.一个域中有多少台名称服务器，就需要写多少个NS资源记录；

2.每个NS资源记录都必须要有一个A记录与之对应；
</code></pre><h3 id="_7-dns-协议" tabindex="-1">7. DNS 协议 <a class="header-anchor" href="#_7-dns-协议" aria-hidden="true">#</a></h3><p>使用命令 resolvectl status</p><p>LLMNR (Link-Local Multicast Name Resolution) 是一种用于在本地网络中解析主机名的协议。它允许设备通过多播方式发送主机名查询，以获取对应的 IP 地址。LLMNR 主要用于 IPv4 网络中，当设备无法通过 DNS 解析主机名时，可以使用 LLMNR 进行本地解析。</p><ul><li><p>mDNS (Multicast DNS) 是一种用于在局域网中解析主机名的协议。它通过多播方式广播主机名和 IP 地址的映射关系，使得设备可以通过主机名进行通信，而无需依赖中央 DNS 服务器。mDNS 主要用于小型网络环境，例如家庭网络或者小型办公室网络。</p></li><li><p>DNSOverTLS (DNS over TLS) 是一种通过 TLS (Transport Layer Security) 加密协议来保护 DNS 查询和响应的方法。它通过在 DNS 查询和响应的传输过程中使用 TLS 加密，确保数据的机密性和完整性。DNSOverTLS 可以提供更安全的 DNS 通信，防止中间人攻击和数据篡改。</p></li></ul><p>两者之间的区别如下：</p><ul><li><p>LLMNR 和 mDNS 都是用于在局域网中解析主机名的协议，但它们使用不同的机制。LLMNR 使用 IPv4 的多播地址进行查询，而 mDNS 使用 IPv4 或 IPv6 的多播地址进行广播。</p></li><li><p>LLMNR 主要用于 IPv4 网络，而 mDNS 可以同时支持 IPv4 和 IPv6 网络。</p></li><li><p>DNSOverTLS 是一种用于保护 DNS 查询和响应的加密协议，它可以与 LLMNR 或 mDNS 一起使用。DNSOverTLS 提供了更高的安全性，可以防止网络监听和数据篡改。</p></li></ul><p>综上所述，LLMNR 和 mDNS 是用于在局域网中解析主机名的协议，而 DNSOverTLS 是一种用于保护 DNS 通信的加密协议。它们在机制、适用网络和安全性方面存在一些区别</p><h3 id="_7-apparmor-模块" tabindex="-1">7.APPArmor 模块 <a class="header-anchor" href="#_7-apparmor-模块" aria-hidden="true">#</a></h3><blockquote><p>AppArmor 是一个 Linux 安全模块，用于限制应用程序的访问权限。它的目的是增强系统的安全性，通过限制应用程序的行为来减少潜在的安全风险。 AppArmor 使用一种基于配置文件的方法来定义应用程序的访问规则。这些规则指定了应用程序可以访问的文件、目录、网络端口等资源。当应用程序尝试访问未经授权的资源时，AppArmor 会阻止该访问并记录相关的安全事件。 要关闭或禁用 AppArmor，你可以按照以下步骤操作</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  sudo systemctl stop apparmor   关闭改成程序</span></span>
<span class="line"><span style="color:#A6ACCD;">   sudo systemctl disable apparmor  禁用该程序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在查询 AppArmor 状态时，可能会得到以下几种状态值的解释：</p><ul><li>apparmor module is loaded.：表示 AppArmor 模块已加载，即 AppArmor 正在运行。</li><li>apparmor module is not loaded.：表示 AppArmor 模块未加载，即 AppArmor 未启动。</li><li>apparmor module is not installed.：表示系统未安装 AppArmor 模块，因此无法使用 AppArmor 功能。</li><li>apparmor is enabled and active.：表示 AppArmor 已启用且处于活动状态，应用程序的访问将受到 AppArmor 的限制。</li><li>apparmor is enabled but inactive.：表示 AppArmor 已启用但处于非活动状态，应用程序的访问不受 AppArmor 的限制。</li><li>apparmor is not enabled.：表示 AppArmor 未启用，应用程序的访问不受 AppArmor 的限制。</li></ul><p>这些状态值可以帮助你了解系统中 AppArmor 的当前状态和是否对应用程序的访问进行了限</p><h3 id="报错信息" tabindex="-1">报错信息 <a class="header-anchor" href="#报错信息" aria-hidden="true">#</a></h3><p>这个报错是关于Ipv6相关的，可以将其关闭即可</p><p><img src="`+t+`" alt="dnsbind"></p><h3 id="hrony-时间同步软件" tabindex="-1">Hrony 时间同步软件 <a class="header-anchor" href="#hrony-时间同步软件" aria-hidden="true">#</a></h3><p>hrony是一款开源的网络时间同步软件，它可以通过网络协议（如NTP、UDP、TCP等）与时间服务器进行通信，从而同步本地系统的时间。与传统的NTP软件相比，chrony具有更高的精度和更快的同步速度，同时还支持多种时钟源和时钟调整算法，可以适应不同的网络环境和需求。在CentOS上安装chrony非常简单，只需要在终端中执行以下命令即可：</p><h3 id="代理上网服务器的开源实现" tabindex="-1">代理上网服务器的开源实现 <a class="header-anchor" href="#代理上网服务器的开源实现" aria-hidden="true">#</a></h3><h3 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a></h3><h3 id="ubuntu下搭建dns服务器-dnsmap" tabindex="-1">Ubuntu下搭建DNS服务器 (DNSmap) <a class="header-anchor" href="#ubuntu下搭建dns服务器-dnsmap" aria-hidden="true">#</a></h3><p>DNS性能测试工具：使用专门的DNS性能测试工具，例如dnsperf或dnstop，来进行更详细的DNS性能测试。这些工具可以模拟大量的DNS查询并测量响应时间、吞吐量等指标</p><ol><li>安裝服務 sudo apt install dnsmasq</li><li>编辑/etc/dnsmasq.conf文件 sudo nano /etc/dnsmasq.conf</li><li>重啓服務 sudo systemctl restart dnsmasq</li></ol><h3 id="普罗米修斯" tabindex="-1">普罗米修斯 <a class="header-anchor" href="#普罗米修斯" aria-hidden="true">#</a></h3><p>Prometheus(由go语言(golang)开发)是一套开源的监控&amp;报警&amp;时间序列数据库的组合。适合监控容器平台。因为 kubernetes(俗称k8s)的流行带动了prometheus的发展。以下链接Prometheus官方文档。 <a href="https://prometheus.io/docs/introduction/overview/" target="_blank" rel="noreferrer">https://prometheus.io/docs/introduction/overview/</a></p><h4 id="将node-export-设置为服务" tabindex="-1">将node-export 设置为服务 <a class="header-anchor" href="#将node-export-设置为服务" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[root@localhost system]# pwd</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/lib/systemd/system</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@localhost system]# cat node-exporter.service </span></span>
<span class="line"><span style="color:#A6ACCD;">   [Unit]</span></span>
<span class="line"><span style="color:#A6ACCD;">   Description=Node Exporter</span></span>
<span class="line"><span style="color:#A6ACCD;">   Wants=network-online.target</span></span>
<span class="line"><span style="color:#A6ACCD;">   After=network-online.target</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   [Service]</span></span>
<span class="line"><span style="color:#A6ACCD;">   Restart=on-failure</span></span>
<span class="line"><span style="color:#A6ACCD;">   ExecStart=/usr/local/node_exporter/node_exporter</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   [Install]</span></span>
<span class="line"><span style="color:#A6ACCD;">   WantedBy=multi-user.targe</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@localhost system]# </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>/usr/lib/systemd/system目录：</li></ol><ul><li>作用：该目录用于存储系统安装的软件包提供的Systemd服务单元文件。</li><li>区别：这些服务单元文件通常是由软件包的开发者或发行版维护者提供的，并且在软件包安装时自动放置在该目录中。这些服务单元文件通常不应由系统管理员手动修改，因为它们可能会在软件包更新时被覆盖。</li></ul><ol start="2"><li>/etc/systemd/system目录：</li></ol><ul><li>作用：该目录用于存储系统管理员自定义的Systemd服务单元文件。</li><li>区别：这些服务单元文件是由系统管理员手动创建或修改的，用于定义自定义的Systemd服务。系统管理员可以在该目录中创建自己的服务单元文件，并使用systemctl命令来管理这些自定义服务。这些自定义服务单元文件不会被软件包的安装或更新所影响，因此可以用于管理自定义的系统服务。 3.重置启动命令 systemctl daemon-reload</li></ul><p>总结： /usr/lib/systemd/system目录用于存储由软件包提供的Systemd服务单元文件，而/etc/systemd/system目录用于存储系统管理员自定义的Systemd服务单元文件。这两个目录的区别在于文件的来源和管理方式。</p><h3 id="ldap-服务器的搭建" tabindex="-1">LDAP 服务器的搭建 <a class="header-anchor" href="#ldap-服务器的搭建" aria-hidden="true">#</a></h3><p>要在企业内部搭建一个LDAP服务器，你可以使用一些开源的解决方案来实现。其中，OpenLDAP 是一个广泛使用的开源LDAP服务器，适用于各种规模的组织。以下是在企业内部搭建LDAP服务器的基本步骤：</p><p>步骤 1：准备</p><pre><code>选择服务器： 选择一台服务器用于安装和运行LDAP服务器。这可以是物理服务器或虚拟机，根据你的需求和资源来决定。

选择操作系统： 选择一个适合你的LDAP服务器的操作系统，常见选择包括 Linux 发行版（如 Ubuntu、CentOS）。
</code></pre><p>步骤 2：安装 OpenLDAP</p><pre><code>安装 OpenLDAP： 使用操作系统的包管理工具，安装 OpenLDAP 服务器软件。例如，在 Ubuntu 上可以使用以下命令：

sudo apt-get update
sudo apt-get install slapd ldap-utils

按照提示设置管理员密码和其他配置。
</code></pre><p>步骤 3：配置 OpenLDAP</p><pre><code>配置 slapd.conf 或 cn=config： 在早期版本的 OpenLDAP 中，使用 slapd.conf 文件进行配置。然而，现代版本多数使用 cn=config 数据库进行配置。你可以使用 LDAP 客户端工具（如 ldapmodify）来进行配置。

创建基准 DN： 定义你的 LDAP 数据库的基准 DN，这是你的LDAP树的根。例如，dc=example,dc=com。

创建组织单位（OU）和用户： 使用 LDAP 工具创建组织单位和用户实体，以建立你的组织的层次结构。
</code></pre><p>步骤 4：管理和维护</p><pre><code>使用 LDIF 文件： LDIF（LDAP Data Interchange Format）文件是一种用于导入和导出 LDAP 数据的格式。你可以创建 LDIF 文件来批量添加、修改或删除条目。

备份和恢复： 定期备份 LDAP 数据，以防止意外数据丢失。你可以使用工具如 slapcat 来导出数据，然后使用 slapadd 来恢复。
</code></pre><p>步骤 5：安全性和访问控制</p><pre><code>访问控制： 配置适当的访问控制规则，以限制谁可以访问和修改LDAP数据。

加密和安全： 配置 LDAP 服务器以支持安全连接，使用 SSL/TLS 加密进行通信。
</code></pre><p>步骤 6：集成和应用</p><pre><code>应用集成： 在你的组织中，将 LDAP 用于身份验证和授权，如单点登录（SSO）等。

应用开发： 为应用程序和服务集成 LDAP，以实现用户和权限管理。
</code></pre><p>请注意，搭建和管理LDAP服务器需要一定的技术知识和经验。确保在操作之前阅读相关文档和资源，并遵循最佳实践来确保LDAP服务器的安全和稳定运行。</p>`,116),o=[i];function d(c,h,A,u,m,D){return a(),e("div",null,o)}const y=n(r,[["render",d]]);export{N as __pageData,y as default};
