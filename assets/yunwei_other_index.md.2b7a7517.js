import{_ as s,c as a,o as n,d as e}from"./app.0fdc3d94.js";const l="/MyBlog/assets/kibana_Version.79978af6.jpg",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"工具命令和其他","slug":"工具命令和其他","link":"#工具命令和其他","children":[{"level":3,"title":"Docker 的相关","slug":"docker-的相关","link":"#docker-的相关","children":[]},{"level":3,"title":"云原生环境是一种构建和运行应用程序的方法，旨在充分利用云计算的优势。它强调将应用程序设计为微服务架构，并利用容器化、动态编排、自动化管理和可观测性等技术来实现高度可扩展、弹性和可靠的系统。","slug":"云原生环境是一种构建和运行应用程序的方法-旨在充分利用云计算的优势。它强调将应用程序设计为微服务架构-并利用容器化、动态编排、自动化管理和可观测性等技术来实现高度可扩展、弹性和可靠的系统。","link":"#云原生环境是一种构建和运行应用程序的方法-旨在充分利用云计算的优势。它强调将应用程序设计为微服务架构-并利用容器化、动态编排、自动化管理和可观测性等技术来实现高度可扩展、弹性和可靠的系统。","children":[]},{"level":3,"title":"基本使用的命令","slug":"基本使用的命令","link":"#基本使用的命令","children":[]}]},{"level":2,"title":"通过Docker部署和安装ELK环境","slug":"通过docker部署和安装elk环境","link":"#通过docker部署和安装elk环境","children":[{"level":3,"title":"Kibana中文配置","slug":"kibana中文配置","link":"#kibana中文配置","children":[]},{"level":3,"title":"配置和使用kibana","slug":"配置和使用kibana","link":"#配置和使用kibana","children":[]},{"level":3,"title":"配置logstash","slug":"配置logstash","link":"#配置logstash","children":[]}]}],"relativePath":"yunwei/other/index.md"}'),p={name:"yunwei/other/index.md"},c=e(`<h2 id="工具命令和其他" tabindex="-1">工具命令和其他 <a class="header-anchor" href="#工具命令和其他" aria-hidden="true">#</a></h2><h3 id="docker-的相关" tabindex="-1">Docker 的相关 <a class="header-anchor" href="#docker-的相关" aria-hidden="true">#</a></h3><h3 id="云原生环境是一种构建和运行应用程序的方法-旨在充分利用云计算的优势。它强调将应用程序设计为微服务架构-并利用容器化、动态编排、自动化管理和可观测性等技术来实现高度可扩展、弹性和可靠的系统。" tabindex="-1">云原生环境是一种构建和运行应用程序的方法，旨在充分利用云计算的优势。它强调将应用程序设计为微服务架构，并利用容器化、动态编排、自动化管理和可观测性等技术来实现高度可扩展、弹性和可靠的系统。 <a class="header-anchor" href="#云原生环境是一种构建和运行应用程序的方法-旨在充分利用云计算的优势。它强调将应用程序设计为微服务架构-并利用容器化、动态编排、自动化管理和可观测性等技术来实现高度可扩展、弹性和可靠的系统。" aria-hidden="true">#</a></h3><p>要在本地搭建一个云原生环境进行学习，可以按照以下步骤进行操作：</p><pre><code>安装容器运行时：选择一种容器运行时，如Docker，根据官方文档进行安装。Docker是目前最流行的容器化技术，可以在本地环境中轻松构建、运行和管理容器。

部署容器编排工具：选择一种容器编排工具，如Kubernetes，根据官方文档在本地环境中部署一个Kubernetes集群。可以使用Minikube或kind等工具来搭建一个单节点的Kubernetes集群，或者使用Kubernetes发行版如kubeadm来搭建多节点的集群。

构建示例应用程序：选择一个简单的示例应用程序，如一个Web服务，将其容器化并创建相应的Docker镜像。可以使用常见的编程语言和框架，如Node.js、Python、Java等。

编排和部署应用程序：使用Kubernetes的命令行工具（kubectl）或Web界面（如Kubernetes Dashboard）来创建Kubernetes部署文件（Deployment），描述如何部署和运行应用程序的容器。然后，使用kubectl apply命令将部署文件应用到Kubernetes集群中，启动应用程序的容器实例。

验证和测试：通过访问应用程序的服务，验证应用程序是否正常运行。可以使用kubectl命令查看Pod、Service、Ingress等资源的状态，以及应用程序的日志输出。
</code></pre><h3 id="基本使用的命令" tabindex="-1">基本使用的命令 <a class="header-anchor" href="#基本使用的命令" aria-hidden="true">#</a></h3><ul><li>查询docker 的信息<br> docker info</li><li>查询 docker 运行的信息<br> docker ps -a (显示全部的包含停止的)</li><li>查询当前镜像库的信息 docker images</li><li>查询工作模式</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">docker info --format &#39;{{.Swarm.LocalNodeState}}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这个命令会返回Docker Engine的工作模式信息。可能的返回值包括：</p><pre><code>inactive：表示Docker Engine未运行在集群模式下，没有启用集群管理功能。
active：表示Docker Engine正在运行在集群模式下，启用了集群管理功能。
pending：表示Docker Engine正在尝试加入一个已经存在的集群，但还未完成加入过程。
error：表示Docker Engine
</code></pre><ul><li><p>通过Docker查询Elasticsearch可以拉取的版本号 docker search elasticsearch</p></li><li><p>只是想查看容器的日志 docker logs &lt;container_id&gt;</p></li><li><p>进入容器的交互式模式：选择您要访问的容器，并使用以下命令进入容器的交互式模式 docker exec -it &lt;container_id&gt; /bin/bash<br> docker exec -it 83bc80911439 /bin/bash</p></li></ul><h2 id="通过docker部署和安装elk环境" tabindex="-1">通过Docker部署和安装ELK环境 <a class="header-anchor" href="#通过docker部署和安装elk环境" aria-hidden="true">#</a></h2><p>ELK Stack 简介</p><p>ELK 不是一款软件，而是 Elasticsearch、Logstash 和 Kibana 三种软件产品的首字母缩写。这三者都是开源软件，通常配合使用，而且又先后归于 Elastic.co 公司名下，所以被简称为 ELK Stack。根据 Google Trend 的信息显示，ELK Stack 已经成为目前最流行的集中式日志解决方案</p><ol><li><p>安装Docker：首先，确保在你的机器上安装了Docker。根据你的操作系统，可以参考Docker的官方文档进行安装步骤。</p></li><li><p>获取ELK镜像：ELK的官方团队提供了预配置的Docker镜像，可以直接使用。你可以通过Docker命令或使用Docker Compose来获取镜像</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">docker pull docker.elastic.co/elasticsearch/elasticsearch:7.14.0</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull docker.elastic.co/logstash/logstash:7.14.0</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull docker.elastic.co/kibana/kibana:7.14.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">---通过Docker查询Elasticsearch可以拉取的版本号</span></span>
<span class="line"><span style="color:#A6ACCD;"> docker  search logstash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+l+`" alt="kibana"></p><ol start="3"><li>启动ELK环境</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">docker run -d --name elasticsearch docker.elastic.co/elasticsearch/elasticsearch:7.14.0</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d --name elasticsearch -e &quot;discovery.type=single-node&quot; docker.elastic.co/elasticsearch/elasticsearch:7.17.0 </span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d --name logstash docker.elastic.co/logstash/logstash:7.14.0</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d --name kibana -p 5601:5601 docker.elastic.co/kibana/kibana:7.14.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>启动docker的时候 报错误</p><p>iptables failed: iptables --wait -t filter -A DOCKER ! -i docker0 -o docker0 -p tcp -d 172.17.0.2 --dport 5601 -j ACCEPT: iptables: No chain/target/match by that name. (exit status 1）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">查看版本信息：iptables -V</span></span>
<span class="line"><span style="color:#A6ACCD;">查看帮助信息：iptables -h</span></span>
<span class="line"><span style="color:#A6ACCD;">列出当前表格的规则：iptables -L</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>报错误！</p><blockquote><p>ax virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144] 如何解决？ 显示虚拟内存的数量过低 Linux的虚拟内存区域数量是由系统内核决定的，它代表了系统可以为其进程分配的最大内存地址空间。虚拟内存区域是由物理内存页组成的，每个区域可以包含一页或多页。</p></blockquote><p>虚拟内存区域的作用主要有以下几点：</p><ul><li>提高内存利用率：由于物理内存是有限的，因此通过将程序所需的内存分割成多个独立的区域，系统可以将物理内存的利用率提高到更高的水平。</li><li>支持多进程并发执行：虚拟内存允许多个进程共享同一物理内存空间，使得多个进程可以并发执行，提高了系统的并发处理能力。</li><li>实现内存保护：虚拟内存技术将每个进程的内存空间隔离，防止不同进程之间的错误访问和修改，从而保护了数据的安全性。</li><li>支持动态内存分配：虚拟内存技术可以动态地分配和释放内存空间，使得程序可以根据需要动态地增长或缩小其内存使用量。<br> 要查询Linux系统当前虚拟内存区域的数</li></ul><ol><li>使用ulimit命令查看系统允许的最大进程数和虚拟内存使用量：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">ulimit -u</span></span>
<span class="line"><span style="color:#A6ACCD;">ulimit -v</span></span>
<span class="line"><span style="color:#A6ACCD;">查询当前虚拟内存区域的数量值   sysctl vm.max_map_count</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>使用cat /proc/user_beancounters命令查看系统当前进程的虚拟内存使用情况</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">cat /proc/user_beancounters</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>elasticsearch 的启动docker 命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">docker run --name elasticsearch -d -e ES_JAVA_OPTS=&quot;-Xms512m -Xmx512m&quot; -e &quot;discovery.type=single-node&quot; -p 9200:9200 -p 9300:9300 docker.elastic.co/elasticsearch/elasticsearch:7.17.0 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">命令说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;cluster.name=es-docker-cluster&quot;：设置集群名称</span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;http.host=0.0.0.0&quot;：监听的地址，可以外网访问</span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;：内存大小</span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;discovery.type=single-node&quot;：非集群模式</span></span>
<span class="line"><span style="color:#A6ACCD;">-v es-data:/usr/share/elasticsearch/data：挂载逻辑卷，绑定elasticsearch的数据目录</span></span>
<span class="line"><span style="color:#A6ACCD;">-v es-logs:/usr/share/elasticsearch/logs：挂载逻辑卷，绑定elasticsearch的日志目录</span></span>
<span class="line"><span style="color:#A6ACCD;">-v es-plugins:/usr/share/elasticsearch/plugins：挂载逻辑卷，绑定elasticsearch的插件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged：授予逻辑卷访问权</span></span>
<span class="line"><span style="color:#A6ACCD;">--network itmentu-net ：加入一个名为itmentu-net的网络中</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 9200:9200：端口映射配置</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>docker run -d --name kibana -e ELASTICSEARCH_HOSTS=<a href="http://172.19.108.10:9200" target="_blank" rel="noreferrer">http://172.19.108.10:9200</a> -p 5601:5601 docker.elastic.co/kibana/kibana:7.14.0</p><h3 id="kibana中文配置" tabindex="-1">Kibana中文配置 <a class="header-anchor" href="#kibana中文配置" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#进入容器</span></span>
<span class="line"><span style="color:#A6ACCD;">docker exec -it kibana /bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#进入配置文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /usr/share/kibana/config</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#编辑文件kibana.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">vi kibana.yml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#在最后一行添加如下配置</span></span>
<span class="line"><span style="color:#A6ACCD;">i18n.locale: zh-CN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#保存退出</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#并重启容器</span></span>
<span class="line"><span style="color:#A6ACCD;">docker restart kibana</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="配置和使用kibana" tabindex="-1">配置和使用kibana <a class="header-anchor" href="#配置和使用kibana" aria-hidden="true">#</a></h3><blockquote><p>TIPS：如何检测系统中是否启动了 kibana？</p></blockquote><p>我们一般会用ps -ef来查询某个应用是否在 Linux系统中启动，<br> 比如Elasticsearch，我们用 ps -ef|grep java 或者 ps -ef|grep elasticsearch均可</p><p>ELK入门及基本使用_字符串_20</p><p>但是当我们尝试 ps -ef|grep kibana，却是不行的 因为 kibana 是 node 写的，所以 kibana 运行的时候是运行在 node 里面，我们要查询的话，只能 ps -ef|grep node</p><h3 id="配置logstash" tabindex="-1">配置logstash <a class="header-anchor" href="#配置logstash" aria-hidden="true">#</a></h3>`,41),o=[c];function t(i,r,d,C,h,A){return n(),a("div",null,o)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};
