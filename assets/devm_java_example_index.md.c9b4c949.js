import{_ as s,c as n,o as a,d as l}from"./app.6940013b.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"练习学习的例子","slug":"练习学习的例子","link":"#练习学习的例子","children":[{"level":3,"title":"1.平方的计算","slug":"_1-平方的计算","link":"#_1-平方的计算","children":[]},{"level":3,"title":"2 显示当前的日期","slug":"_2-显示当前的日期","link":"#_2-显示当前的日期","children":[]},{"level":3,"title":"3.显示当前时间内容","slug":"_3-显示当前时间内容","link":"#_3-显示当前时间内容","children":[]},{"level":3,"title":"4. 汉诺塔算法","slug":"_4-汉诺塔算法","link":"#_4-汉诺塔算法","children":[]},{"level":3,"title":"5.费那波契数列","slug":"_5-费那波契数列","link":"#_5-费那波契数列","children":[]},{"level":3,"title":"6.instanceof 是一个二元操作符，类似于==，>,<等","slug":"_6-instanceof-是一个二元操作符-类似于-等","link":"#_6-instanceof-是一个二元操作符-类似于-等","children":[]},{"level":3,"title":"7.阶乘   factorial 是所有小于以及等于该数的正整数的积  自然数的n的阶乘 写作  n！。","slug":"_7-阶乘-factorial-是所有小于以及等于该数的正整数的积-自然数的n的阶乘-写作-n-。","link":"#_7-阶乘-factorial-是所有小于以及等于该数的正整数的积-自然数的n的阶乘-写作-n-。","children":[]},{"level":3,"title":"8.连接mysql ，查询返回数据","slug":"_8-连接mysql-查询返回数据","link":"#_8-连接mysql-查询返回数据","children":[]},{"level":3,"title":"9.同一个类中构造函数名称相同，但是参数不同","slug":"_9-同一个类中构造函数名称相同-但是参数不同","link":"#_9-同一个类中构造函数名称相同-但是参数不同","children":[]}]}],"relativePath":"devm/java/example/index.md"}'),p={name:"devm/java/example/index.md"},o=l(`<h2 id="练习学习的例子" tabindex="-1">练习学习的例子 <a class="header-anchor" href="#练习学习的例子" aria-hidden="true">#</a></h2><h3 id="_1-平方的计算" tabindex="-1">1.平方的计算 <a class="header-anchor" href="#_1-平方的计算" aria-hidden="true">#</a></h3><div class="language-JAVA"><button title="Copy Code" class="copy"></button><span class="lang">JAVA</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 要计算一个数的多次方，可以使用Java中的Math类中的pow()方法。pow()方法可以计算一个数的任意次方。例如，要计算2的3次方，可以按照以下步骤操作：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 定义一个变量，存储底数2。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 定义一个变量，存储指数3。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. 使用Math类中的pow()方法计算2的3次方。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4. 输出结果。</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pingfang</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> base </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> exponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">base</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> exponent</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-显示当前的日期" tabindex="-1">2 显示当前的日期 <a class="header-anchor" href="#_2-显示当前的日期" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import java.util.Date;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class DateDemo {</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 初始化 Date 对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        Date date = new Date();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 使用 toString() 函数显示日期时间</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(date.toString());</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-显示当前时间内容" tabindex="-1">3.显示当前时间内容 <a class="header-anchor" href="#_3-显示当前时间内容" aria-hidden="true">#</a></h3><div class="language-JAVA"><button title="Copy Code" class="copy"></button><span class="lang">JAVA</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">util</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Date</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DateDemo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 初始化 Date 对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Date</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// c的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">全部日期和时间信息：%tc%n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> date</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// f的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">年-月-日格式：%tF%n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> date</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// d的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">月/日/年格式：%tD%n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> date</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// r的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HH:MM:SS PM格式（12时制）：%tr%n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> date</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// t的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HH:MM:SS格式（24时制）：%tT%n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> date</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// R的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HH:MM格式（24时制）：%tRn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> date</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 删除时区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">时区：%tZn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> date</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>何时需要使用 -classpath：当你要编译或执行的类引用了其它的类，但被引用类的 .class 文件不在当前目录下时，就需要通过 -classpath 来引入类</p><h3 id="_4-汉诺塔算法" tabindex="-1">4. 汉诺塔算法 <a class="header-anchor" href="#_4-汉诺塔算法" aria-hidden="true">#</a></h3><h3 id="_5-费那波契数列" tabindex="-1">5.费那波契数列 <a class="header-anchor" href="#_5-费那波契数列" aria-hidden="true">#</a></h3><p>斐波那契数列（Fibonacci sequence），又称黄金分割数列， 故又称兔子数列</p><h3 id="_6-instanceof-是一个二元操作符-类似于-等" tabindex="-1">6.instanceof 是一个二元操作符，类似于==，&gt;,&lt;等 <a class="header-anchor" href="#_6-instanceof-是一个二元操作符-类似于-等" aria-hidden="true">#</a></h3><h3 id="_7-阶乘-factorial-是所有小于以及等于该数的正整数的积-自然数的n的阶乘-写作-n-。" tabindex="-1">7.阶乘 factorial 是所有小于以及等于该数的正整数的积 自然数的n的阶乘 写作 n！。 <a class="header-anchor" href="#_7-阶乘-factorial-是所有小于以及等于该数的正整数的积-自然数的n的阶乘-写作-n-。" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">public class MainClass {</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void main(String args[]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (int counter = 0; counter &lt;= 10; counter++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.printf(&quot;%d! = %d\\n&quot;, counter,</span></span>
<span class="line"><span style="color:#A6ACCD;">        factorial(counter));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static long factorial(long number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (number &lt;= 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            return 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        else</span></span>
<span class="line"><span style="color:#A6ACCD;">            return number * factorial(number - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_8-连接mysql-查询返回数据" tabindex="-1">8.连接mysql ，查询返回数据 <a class="header-anchor" href="#_8-连接mysql-查询返回数据" aria-hidden="true">#</a></h3><blockquote><p>数据库的操作主要是分为更新操作和查询操作，查询操作的时候会将全部的查询结果返回给用户resultSet接口，在使用sql中的select语句可以将数据库的全部结果查询出来，在使用jdbc的操作数据库查询的记录使用resultSet接收在操作的时候使用statement的executeQuery方法进行数据库的查询操作，此方法返回的就是ResultSet接口在...</p></blockquote><div class="language-Java"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">com</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">seic</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">sql</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 通过DriverManager. registerDriver(Driver driver)来注册驱动程序</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> USER </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// static final修饰的属性表示一旦给值，就不可修改</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> PASS </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*****</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> JDBC_DRIVER </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.mysql.cj.jdbc.Driver</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> DB_URL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc:mysql://192.168.1.1:3306/pydb?useSSL=false&amp;allowPublicKeyRetrieval=true&amp;serverTimezone=UTC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// System.out.println(&quot;Hello &quot;);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// System.out.println(JDBC_DRIVER);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// System.out.println(DB_URL);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Connection</span><span style="color:#A6ACCD;"> conn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Statement</span><span style="color:#A6ACCD;"> stmt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 注册 JDBC 驱动</span></span>
<span class="line"><span style="color:#A6ACCD;">            Class</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forName</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">JDBC_DRIVER</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 打开链接</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">连接数据库...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            conn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> DriverManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getConnection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DB_URL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> USER</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> PASS</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 执行查询</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 实例化Statement对象...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            stmt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> conn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createStatement</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> sql</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            sql </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SELECT  * FROM User_list ul </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">ResultSet</span><span style="color:#A6ACCD;"> rs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> stmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">executeQuery</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sql</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getClass</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getSimpleName</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span></span>
<span class="line"><span style="color:#89DDFF;">               </span><span style="color:#676E95;font-style:italic;">// 展开结果集数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 通过字段检索</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInt</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ID</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LoginName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 输出数据</span></span>
<span class="line"><span style="color:#A6ACCD;">                System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Email: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 完成后关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">            rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            stmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            conn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="_9-同一个类中构造函数名称相同-但是参数不同" tabindex="-1">9.同一个类中构造函数名称相同，但是参数不同 <a class="header-anchor" href="#_9-同一个类中构造函数名称相同-但是参数不同" aria-hidden="true">#</a></h3><p>在Java中，构造函数的名称必须与类名相同，这是Java语言的规定。因此，这个BusinessException类中的所有构造函数都叫BusinessException。</p><p>虽然这些构造函数的名称相同，但是它们的参数列表不同，这就是所谓的构造函数重载。 Java允许多个构造函数具有相同的名称，但参数的数量或类型必须不同。这样，Java编译器可以根据你提供的参数来决定调用哪个构造函数。</p>`,20),e=[o];function t(c,r,D,y,F,A){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};