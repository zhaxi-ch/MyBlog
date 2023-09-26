import{_ as s,c as n,o as a,d as l}from"./app.1cd524f6.js";const p="/MyBlog/assets/diskspeed.8a4d52a8.jpg",d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"日常使用","slug":"日常使用","link":"#日常使用","children":[]},{"level":3,"title":"Windows 操作相关","slug":"windows-操作相关","link":"#windows-操作相关","children":[]}],"relativePath":"yunwei/windows/index.md"}'),o={name:"yunwei/windows/index.md"},e=l(`<h3 id="日常使用" tabindex="-1">日常使用 <a class="header-anchor" href="#日常使用" aria-hidden="true">#</a></h3><h4 id="硬盘检测" tabindex="-1">硬盘检测 <a class="header-anchor" href="#硬盘检测" aria-hidden="true">#</a></h4><p>我们在检测硬盘分区读写性能的时候，可以使用win10 自带的测试命令来测试。此硬盘的最大读写性能！</p><pre><code> 在左下角搜索框输入“cmd”，并点击“以管理员身份运行”。
输入命令“winsat disk -drive 盘符”，并点击“回车”。例如
</code></pre><p>winsat disk -drive c</p><p>红色框结果为：</p><p>从上到下，分别是：</p><ul><li>随机读取速度: 303MB/s</li><li>顺序读取速度: 1203MB/s</li><li>顺序写入速度: 176MB/s</li></ul><p><img src="`+p+`" alt="磁盘"></p><h3 id="windows-操作相关" tabindex="-1">Windows 操作相关 <a class="header-anchor" href="#windows-操作相关" aria-hidden="true">#</a></h3><h4 id="_1-windows下如何查看某个端口被谁占用" tabindex="-1">1.Windows下如何查看某个端口被谁占用 <a class="header-anchor" href="#_1-windows下如何查看某个端口被谁占用" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">例如：</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-aon</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">findstr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8081</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">tasklist</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">findstr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">9088</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">查询运行pid</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">的详细信息</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-遍历文件目录-输出文件名称" tabindex="-1">2. 遍历文件目录，输出文件名称 <a class="header-anchor" href="#_2-遍历文件目录-输出文件名称" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">@</span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span></span>
<span class="line"><span style="color:#FFCB6B;">setlocal</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">::</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">设置目录路径和输出文件名</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">source_directory=D:\\123</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">output_file=D:\\123\\output.xls</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">::</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除旧的输出文件（如果存在）</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> exist</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">%output_file%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> del</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">%output_file%</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">::</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建输出文件并添加表头</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Filename</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%output_file%</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">::</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">遍历目录并将文件名写入输出文件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> %%F </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%source_directory%\\*.*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> %%~nxF </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%output_file%</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Done!</span></span>
<span class="line"><span style="color:#FFCB6B;">pause</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="_3-获取指定目录内文件的名称-并且将其增加指定的字符" tabindex="-1">3. 获取指定目录内文件的名称，并且将其增加指定的字符 <a class="header-anchor" href="#_3-获取指定目录内文件的名称-并且将其增加指定的字符" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">@echo off</span></span>
<span class="line"><span style="color:#A6ACCD;">setlocal enabledelayedexpansion</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:: 设置目录路径</span></span>
<span class="line"><span style="color:#A6ACCD;">set &quot;source_directory=D:\\123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:: 遍历目录并将文件名写入输出文件</span></span>
<span class="line"><span style="color:#A6ACCD;">for %%F in (&quot;%source_directory%\\*.*&quot;) do (</span></span>
<span class="line"><span style="color:#A6ACCD;">:: 获取文件和拓展名称</span></span>
<span class="line"><span style="color:#A6ACCD;">  set &quot;file_name=%%~nF&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">:: 寻找文件名中的下划线 &quot;_&quot; 的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    for /f &quot;delims=_&quot; %%A in (&quot;!file_name!&quot;) do (</span></span>
<span class="line"><span style="color:#A6ACCD;">        :: 提取下划线前面的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">        set &quot;prefix=%%A&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        echo  !prefix!</span></span>
<span class="line"><span style="color:#A6ACCD;">        set &quot;new_name=jn!prefix!_1%%~xF&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        echo  !new_name!</span></span>
<span class="line"><span style="color:#A6ACCD;">     :: 重命名文件</span></span>
<span class="line"><span style="color:#A6ACCD;">        ren &quot;%%F&quot; &quot;!new_name!&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">echo DONE!</span></span>
<span class="line"><span style="color:#A6ACCD;">pause</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_4-删除指定目录内的文件-将一天前的文件进行自动删除" tabindex="-1">4.删除指定目录内的文件，将一天前的文件进行自动删除 <a class="header-anchor" href="#_4-删除指定目录内的文件-将一天前的文件进行自动删除" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">@</span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span></span>
<span class="line"><span style="color:#FFCB6B;">setlocal</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scan_dir=D:\\UserData\\Desktop\\Workdata\\test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date_format=yyyy-MM-dd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log_file=C:\\path\\to\\log\\file.log</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">REM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">获取当前日期</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> /f</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">usebackq tokens=1 delims=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> %%a </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">powershell</span><span style="color:#C3E88D;"> -Command </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(Get-Date).AddDays(0).ToString(&#39;%date_format%&#39;)</span><span style="color:#89DDFF;">&quot;\`</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> set</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">current_date=%%a</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">当前日期是：%current_date%</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> /f</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">usebackq tokens=1 delims=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> %%a </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">powershell</span><span style="color:#C3E88D;"> -Command </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(Get-Date).AddDays(-1).ToString(&#39;%date_format%&#39;)</span><span style="color:#89DDFF;">&quot;\`</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> set</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">one_day_ago=%%a</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">一天前的日期是：%one_day_ago%</span></span>
<span class="line"><span style="color:#FFCB6B;">forfiles</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%scan_dir%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/m</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-1</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cmd /c if @isdir==FALSE del (del @path &amp; echo Deleted: @path &gt;&gt; </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%log_file%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">pause</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="获取指定目录内容是否存list中的文件" tabindex="-1">获取指定目录内容是否存list中的文件 <a class="header-anchor" href="#获取指定目录内容是否存list中的文件" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">@echo off</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:: 设置目录路径</span></span>
<span class="line"><span style="color:#A6ACCD;">set source_directory=D:\\Image\\SEIC</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set destination_directory=D:\\Image\\ok</span></span>
<span class="line"><span style="color:#A6ACCD;">set list_file=D:\\Image\\file.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for /f %%i in (%list_file%) do (</span></span>
<span class="line"><span style="color:#A6ACCD;">    if exist &quot;%source_directory%\\%%i&quot; (</span></span>
<span class="line"><span style="color:#A6ACCD;">        echo %%i exists in %source_directory%</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">    ) else (</span></span>
<span class="line"><span style="color:#A6ACCD;">        echo %%i does not exist in %source_directory%</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">echo DONE!</span></span>
<span class="line"><span style="color:#A6ACCD;">pause</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_5-将list-中指定的文件复制到指定的目录文件" tabindex="-1">5.将list 中指定的文件复制到指定的目录文件 <a class="header-anchor" href="#_5-将list-中指定的文件复制到指定的目录文件" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">@echo off</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:: 设置目录路径</span></span>
<span class="line"><span style="color:#A6ACCD;">set source_directory=D:\\Image\\SEIC</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set destination_directory=D:\\Image\\ok</span></span>
<span class="line"><span style="color:#A6ACCD;">set list_file=D:\\Image\\file.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for /f %%i in (%list_file%) do (</span></span>
<span class="line"><span style="color:#A6ACCD;">    if exist &quot;%source_directory%\\%%i&quot; (</span></span>
<span class="line"><span style="color:#A6ACCD;">        echo %%i exists in %source_directory%</span></span>
<span class="line"><span style="color:#A6ACCD;">        xcopy &quot;%source_directory%\\%%i&quot; &quot;%destination_directory%&quot; /I /Y</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) else (</span></span>
<span class="line"><span style="color:#A6ACCD;">        echo %%i does not exist in %source_directory%</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">echo DONE!</span></span>
<span class="line"><span style="color:#A6ACCD;">pause</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,22),t=[e];function c(r,i,C,D,y,A){return a(),n("div",null,t)}const u=s(o,[["render",c]]);export{d as __pageData,u as default};
