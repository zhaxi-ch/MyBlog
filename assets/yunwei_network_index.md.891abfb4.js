import{_ as e,c as a,o as t,d as s}from"./app.c44b6ade.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"网络侧运维","slug":"网络侧运维","link":"#网络侧运维","children":[]},{"level":3,"title":"Grafana 和 prometheus  (普罗米修斯)","slug":"grafana-和-prometheus-普罗米修斯","link":"#grafana-和-prometheus-普罗米修斯","children":[]}],"relativePath":"yunwei/network/index.md"}'),p={name:"yunwei/network/index.md"},i=s('<h3 id="网络侧运维" tabindex="-1">网络侧运维 <a class="header-anchor" href="#网络侧运维" aria-hidden="true">#</a></h3><h3 id="grafana-和-prometheus-普罗米修斯" tabindex="-1">Grafana 和 prometheus (普罗米修斯) <a class="header-anchor" href="#grafana-和-prometheus-普罗米修斯" aria-hidden="true">#</a></h3><p>表达式的意思</p><ol><li><p>Math表达式：Math表达式用于对指标进行数学运算或转换。您可以使用Math表达式来计算指标的总和、平均值、最大值、最小值等。例如，sum()函数用于计算指标的总和，avg()函数用于计算指标的平均值，max()函数用于计算指标的最大值，min()函数用于计算指标的最小值。您可以根据需要选择适当的Math表达式，并将其应用到指标上。</p></li><li><p>Reduce表达式：Reduce表达式用于对时间序列数据进行降维操作。它可以将多个时间序列数据聚合为一个单一的时间序列数据。常用的Reduce表达式包括sum()、avg()、max()和min()等。例如，sum()函数将多个时间序列数据的值相加，生成一个新的时间序列数据。您可以根据需要选择适当的Reduce表达式，并将其应用到时间序列数据上。</p></li><li><p>Resample表达式：Resample表达式用于对时间序列数据进行重新采样。它可以将时间序列数据的采样频率调整为更高或更低的频率。常用的Resample表达式包括5m、1h、1d等。例如，5m表示将时间序列数据的采样频率调整为每5分钟一次。您可以根据需要选择适当的Resample表达式，并将其应用到时间序列数据上。</p></li><li><p>Classic条件：Classic条件用于设置触发报警的条件。它可以根据指标的值、时间范围和阈值来判断是否触发报警。常用的Classic条件包括&gt;（大于）、&lt;（小于）、==（等于）、!=（不等于）等。例如，value &gt; 100表示当指标的值大于100时触发报警。您可以根据需要选择适当的Classic条件，并将其应用到指标上。</p></li></ol><p>使用这些表达式和条件，您可以根据具体的需求来配置Grafana的Alert规则。根据您的指标和报警条件，选择适当的Math表达式、Reduce表达式、Resample表达式和Classic条件，并将它们组合在一起，以实现您所需的报警逻辑。</p><h5 id="指标解释" tabindex="-1">指标解释 <a class="header-anchor" href="#指标解释" aria-hidden="true">#</a></h5><p>&quot;system exception dispatches&quot;是一个指标，用于衡量系统中发生的异常调度次数。它表示系统在运行过程中发生的异常事件的数量。</p><p>具体来说，&quot;system exception dispatches&quot;指标表示系统在处理异常时触发的调度次数。当系统遇到异常情况时，例如硬件错误、软件错误或其他异常事件，它会触发相应的异常处理机制来处理和调度这些异常。每次发生异常调度时，&quot;system exception dispatches&quot;指标的值就会增加。</p><p>该值的大小可以用来评估系统的异常情况和稳定性。较高的&quot;system exception dispatches&quot;值可能表示系统遇到了较多的异常情况，可能需要进一步调查和解决。较低的值则可能表示系统相对稳定，没有发生太多的异常事件。</p><p>需要注意的是，具体的&quot;system exception dispatches&quot;值的大小没有一个固定的标准或阈值来表示正常或异常状态。它的解释和评估应该结合具体的系统环境和上下文来进行。如果您关注系统的异常情况，建议结合其他相关指标和日志信息来进行综合分析和判断。</p><h4 id="ops-每秒读写磁盘" tabindex="-1">OPS 每秒读写磁盘 <a class="header-anchor" href="#ops-每秒读写磁盘" aria-hidden="true">#</a></h4><p>磁盘的监控指标中，&quot;I/O OPS&quot;代表每秒的输入/输出操作数（Input/Output Operations Per Second），而&quot;每秒磁盘读写&quot;代表每秒的磁盘读取和写入操作数。</p><p>&quot;I/O OPS&quot;表示在每秒钟内执行的磁盘输入和输出操作的数量。这个指标可以用来衡量磁盘的工作负载和性能。较高的I/O OPS值通常表示磁盘正在处理大量的读写请求，可能是由于高负载的应用程序或者磁盘访问瓶颈引起的。</p><p>&quot;每秒磁盘读写&quot;表示每秒钟内磁盘读取和写入的数据量。这个指标可以用来衡量磁盘的数据传输速度。较高的每秒磁盘读写值通常表示磁盘正在处理大量的数据读写操作，可能是由于大量的数据访问或者高负载的应用程序引起的。</p><p>对于一般的磁盘，正常水平的I/O OPS和每秒磁盘读写值会根据具体的硬件规格、应用程序需求和负载情况而有所不同。一般来说，较低的I/O OPS和每秒磁盘读写值可能表示磁盘处于较轻的工作负载状态，而较高的值可能表示磁盘正在处理较重的工作负载。</p><p>要确定正常水平的I/O OPS和每秒磁盘读写值，建议参考磁盘的规格和性能指标，以及监控工具或操作系统提供的性能数据。这样可以获得更具体和准确的参考值，并根据实际情况进行评估和调整。</p>',16),o=[i];function r(n,c,d,u,h,l){return t(),a("div",null,o)}const f=e(p,[["render",r]]);export{_ as __pageData,f as default};