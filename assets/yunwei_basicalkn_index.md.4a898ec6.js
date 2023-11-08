import{_ as e,c as a,o as i,d as l}from"./app.0fdc3d94.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"名词解释","slug":"名词解释","link":"#名词解释","children":[{"level":3,"title":"1.NPS（网络策略服务器）","slug":"_1-nps-网络策略服务器","link":"#_1-nps-网络策略服务器","children":[]},{"level":3,"title":"NPS的作用","slug":"nps的作用","link":"#nps的作用","children":[]},{"level":3,"title":"2.LDAP服务器","slug":"_2-ldap服务器","link":"#_2-ldap服务器","children":[]},{"level":3,"title":"3.LDAP服务器与NPS的关系","slug":"_3-ldap服务器与nps的关系","link":"#_3-ldap服务器与nps的关系","children":[]}]},{"level":2,"title":"Linux 权限解释","slug":"linux-权限解释","link":"#linux-权限解释","children":[]},{"level":2,"title":"数据分析","slug":"数据分析","link":"#数据分析","children":[{"level":3,"title":"OLTP  和OLAP 的解释","slug":"oltp-和olap-的解释","link":"#oltp-和olap-的解释","children":[]},{"level":3,"title":"深信服桌面云的组成","slug":"深信服桌面云的组成","link":"#深信服桌面云的组成","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"relativePath":"yunwei/basicalkn/index.md"}'),n={name:"yunwei/basicalkn/index.md"},r=l(`<h2 id="名词解释" tabindex="-1">名词解释 <a class="header-anchor" href="#名词解释" aria-hidden="true">#</a></h2><h3 id="_1-nps-网络策略服务器" tabindex="-1">1.NPS（网络策略服务器） <a class="header-anchor" href="#_1-nps-网络策略服务器" aria-hidden="true">#</a></h3><p>NPS（Network Policy Server）是一种网络策略服务器，它是微软Windows Server操作系统中的一个角色。NPS允许您创建和执行网络访问策略，以便控制谁可以访问您的网络以及他们可以访问的资源。NPS可以用作RADIUS（远程认证拨号用户服务）服务器，以便对连接到网络的设备进行身份验证和授权。</p><h3 id="nps的作用" tabindex="-1">NPS的作用 <a class="header-anchor" href="#nps的作用" aria-hidden="true">#</a></h3><ol><li><p>身份验证：NPS可以用作RADIUS服务器，对连接到网络的设备进行身份验证。这意味着，当用户尝试连接到网络时，NPS会检查他们的凭据（如用户名和密码），并确定他们是否有权访问网络。</p></li><li><p>授权：除了身份验证之外，NPS还可以对用户进行授权。这意味着，一旦用户通过身份验证，NPS会根据定义的策略来确定他们可以访问哪些网络资源。例如，您可以创建一个策略，允许某个用户组访问特定的网络共享，而禁止其他用户访问。</p></li><li><p>审计：NPS还可以记录有关用户连接和活动的信息，以便进行审计和监控。这可以帮助您跟踪网络使用情况，发现潜在的安全问题，并确保遵守相关的法规和政策。</p></li><li><p>集中式管理：通过使用NPS，您可以在一个集中的位置管理网络访问策略。这使得管理和维护网络访问控制变得更加简单，同时确保策略的一致性和安全性。</p></li></ol><p>总之，NPS是一种强大的网络访问控制解决方案，可以帮助您保护网络资源，确保只有经过身份验证和授权的用户才能访问。通过使用NPS，您可以更好地管理和监控网络访问，提高网络安全性</p><h3 id="_2-ldap服务器" tabindex="-1">2.LDAP服务器 <a class="header-anchor" href="#_2-ldap服务器" aria-hidden="true">#</a></h3><p>LDAP（轻量级目录访问协议，Lightweight Directory Access Protocol）服务器是一种用于存储和管理与网络资源相关的信息的服务器。LDAP服务器通常用于存储用户、组织和设备等对象的信息，以便在网络中进行身份验证和授权。LDAP服务器可以用于多种应用场景，如企业的员工信息管理、电子邮件地址簿等。</p><h3 id="_3-ldap服务器与nps的关系" tabindex="-1">3.LDAP服务器与NPS的关系 <a class="header-anchor" href="#_3-ldap服务器与nps的关系" aria-hidden="true">#</a></h3><p>LDAP服务器和NPS（网络策略服务器）都是用于管理网络访问的工具，但它们的作用和功能有所不同。以下是它们之间的一些关键区别和联系：</p><ol><li><p>数据存储：LDAP服务器主要用于存储和管理网络资源相关的信息，如用户、组织和设备等。而NPS则是用于创建和执行网络访问策略，以控制谁可以访问网络以及他们可以访问的资源。</p></li><li><p>身份验证和授权：NPS可以与LDAP服务器集成，以便对连接到网络的设备进行身份验证和授权。在这种情况下，当用户尝试连接到网络时，NPS会查询LDAP服务器以检查用户的凭据（如用户名和密码），并确定他们是否有权访问网络。此外，NPS还可以根据LDAP服务器中的用户组信息来授权用户访问特定的网络资源。</p></li><li><p>集中式管理：LDAP服务器和NPS都可以实现集中式管理，使得管理和维护网络访问控制变得更加简单，同时确保策略的一致性和安全性。</p></li></ol><p>总之，LDAP服务器和NPS都是用于管理网络访问的重要工具，它们可以相互配合，共同实现对网络资源的有效保护和访问控制。通过将它们结合使用，您可以更好地管理和监控网络访问，提高网络安全性</p><h2 id="linux-权限解释" tabindex="-1">Linux 权限解释 <a class="header-anchor" href="#linux-权限解释" aria-hidden="true">#</a></h2><p>在 Linux 中，关于文件所有者分为三类，即文件所有者、群组和其他人所属，这里分别解释以下这三个概念</p><p>文件所有者</p><p>Linux 是一个多用户多任务系统，多用户就意味着有些用户创建的文件是否对其他用户可见，这是一种可见性问题，同时也是一种隐私性问题，为了考虑到每个人的隐私权，Linux 设计了文件所有者的角色。如果你有一些资料和文件的隐私性比较高，你就可以把文件设置成 &quot;只有我自己可见&quot; ，这就是文件所有者的作用。</p><p>群组</p><p>群组的这个概念用在团队开发中，用处比较多的就是为项目设置权限，比如你就职于一个银行的外包部门，你和其他外包部门共同为某个银行服务，所有的外包团体都使用一台服务器，这就会涉及到群组权限的问题，你们外包部门开发的项目不想让其他外包部门所看到，就会把该项目设置成群组可见。但是银行是总负责人，所有银行具有查看你们所有外包部门项目的权限，因此，你还需要设置银行的权限。</p><p>其他人所属</p><p>其他人和群组是相对的，其他人在群组之外，没有权限查看群组内文件的一种权限关系。</p><p>除了上面三个概念之外，还有一个权限级别最高的大佬，它就是 root，这个 root 权限是最高的。</p><p>forward first; forwarders {<br> 223.5.5.5;<br> 223.6.6.6; 8.8.8.8; 8.8.4.4; }</p><h2 id="数据分析" tabindex="-1">数据分析 <a class="header-anchor" href="#数据分析" aria-hidden="true">#</a></h2><h3 id="oltp-和olap-的解释" tabindex="-1">OLTP 和OLAP 的解释 <a class="header-anchor" href="#oltp-和olap-的解释" aria-hidden="true">#</a></h3><p>OLTP的英文缩写是Online Transaction Processing， 联机事务处理 OLAP的英文缩写是Online Analytical Processing。联机分析处理</p><blockquote><p>**OLTP（联机事务处理）和OLAP（联机分析处理）**是两种常见的数据处理方式，用于满足不同的业务需求。</p></blockquote><p>**OLTP（联机事务处理）**是指面向日常业务操作的数据处理方式。它主要关注事务的处理和数据的实时插入、更新和删除。OLTP系统通常用于支持企业的日常业务活动，如订单处理、库存管理、交易记录等。OLTP的特点包括：</p><pre><code>实时处理：OLTP系统需要实时响应用户的交互操作，并即时更新数据。
事务性：OLTP系统需要保证数据的一致性和完整性，通过使用事务来确保数据的正确处理。
高并发：由于面向大量用户的操作，OLTP系统需要处理高并发的请求，并保证数据的并发访问控制。
面向细粒度数据：OLTP系统通常操作和处理细粒度的数据，例如单个订单、单个产品等。
</code></pre><p>**OLAP（联机分析处理）**是指面向数据分析和决策支持的数据处理方式。它主要关注对大规模数据集的多维分析和聚合。OLAP系统通常用于支持企业的决策制定和业务洞察，如销售分析、市场趋势分析等。OLAP的特点包括：</p><pre><code>多维分析：OLAP系统通过多维分析来探索数据的不同维度和层次，支持用户进行切片、钻取、汇总等操作。
预先计算：OLAP系统通常在数据加载阶段进行预先计算和聚合，以提高查询性能和响应速度。
复杂查询：OLAP系统支持复杂的分析查询，包括聚合、排序、过滤等操作，以满足用户对数据的深入分析需求。
面向决策支持：OLAP系统旨在为决策制定提供支持，帮助用户发现业务趋势、识别关键绩效指标等。
</code></pre><p>虽然OLTP和OLAP在数据处理方式上有所不同，但它们之间也存在联系和互补关系。常见的联系和互补包括：</p><pre><code>数据来源：OLTP系统通常是OLAP系统的数据来源，OLTP系统负责收集和维护实时的业务数据，供OLAP系统进行分析和报表使用。
数据一致性：OLAP系统需要确保从OLTP系统获取的数据是准确和一致的，以保证数据分析的正确性。
业务流程：OLTP和OLAP系统在企业的业务流程中相互关联，OLTP系统处理日常业务操作，而OLAP系统利用OLTP系统的数据进行分析和决策支持。
</code></pre><p>综上所述，OLTP和OLAP是两种不同的数据处理方式，分别面向日常业务操作和数据分析决策。它们在处理方式、目标和特点上存在差异，但在实际应用中常常相互配合，以满足企业的全面数据需求。</p><h3 id="深信服桌面云的组成" tabindex="-1">深信服桌面云的组成 <a class="header-anchor" href="#深信服桌面云的组成" aria-hidden="true">#</a></h3><p>HCI（Hyper-Converged Infrastructure）是指超融合基础架构，它将计算、存储和网络等资源整合在一起，通过软件定义的方式进行管理和配置。与传统的分散式基础架构相比，HCI 提供了更简化的部署和管理模型，提高了资源利用率和灵活性。</p><p>EDS（Endpoint Detection and Response）是指终端检测与响应，它是一种用于保护企业终端设备安全的解决方案。EDS 可以监控和检测终端设备上的恶意活动和异常行为，并及时采取响应措施来防止和应对安全威胁。</p><p>VDI（Virtual Desktop Infrastructure）是指虚拟桌面基础架构，它允许用户通过云平台或服务器将个人电脑的桌面环境虚拟化并交付给终端设备。这样，用户可以通过任何具备网络连接的设备访问其个人桌面，实现跨平台、跨地点的工作。</p><p>深信服（Sangfor）是一家IT安全解决方案提供商，总部位于中国。他们提供多种解决方案，包括上述提到的 HCI、EDS 和 VDI。类比来说，可以将深信服视为一个为企业提供综合安全和基础架构解决方案的公司，就像是一个为房屋提供一揽子服务的建筑公司一样。建筑公司</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,39),p=[r];function t(d,P,s,o,h,c){return i(),a("div",null,p)}const O=e(n,[["render",t]]);export{u as __pageData,O as default};
