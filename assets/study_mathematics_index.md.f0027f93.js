import{_ as s,c as n,o as a,d as l}from"./app.6940013b.js";const _=JSON.parse('{"title":"一，数学基础","description":"","frontmatter":{},"headers":[{"level":2,"title":"数学","slug":"数学","link":"#数学","children":[{"level":3,"title":"Hash  哈希","slug":"hash-哈希","link":"#hash-哈希","children":[]}]},{"level":2,"title":"1.1 向量和矩阵","slug":"_1-1-向量和矩阵","link":"#_1-1-向量和矩阵","children":[{"level":3,"title":"1.1 标量、向量、矩阵、张量之间的联系","slug":"_1-1-标量、向量、矩阵、张量之间的联系","link":"#_1-1-标量、向量、矩阵、张量之间的联系","children":[]},{"level":3,"title":"1.1.2 张量与矩阵的区别","slug":"_1-1-2-张量与矩阵的区别","link":"#_1-1-2-张量与矩阵的区别","children":[]}]},{"level":2,"title":"1.2 导数和偏导数","slug":"_1-2-导数和偏导数","link":"#_1-2-导数和偏导数","children":[]},{"level":2,"title":"1.3 特征值和特征向量","slug":"_1-3-特征值和特征向量","link":"#_1-3-特征值和特征向量","children":[]}],"relativePath":"study/mathematics/index.md"}'),e={name:"study/mathematics/index.md"},p=l(`<h2 id="数学" tabindex="-1">数学 <a class="header-anchor" href="#数学" aria-hidden="true">#</a></h2><h3 id="hash-哈希" tabindex="-1">Hash 哈希 <a class="header-anchor" href="#hash-哈希" aria-hidden="true">#</a></h3><p>散列思想，也被称为哈希（Hash）思想，是一种将任意长度的输入（也称为预映射，pre-image），通过散列算法，变换成固定长度的输出，该输出就是散列值。这种转换是一种压缩映射，也就是，散列值的空间通常远小于输入的空间。</p><p>通俗地说，你可以把散列思想想象成一个巨大的仓库（散列表），而每个物品（输入值）都有一个唯一的存储位置（散列值）。当你需要找到一个物品时，你不需要逐个检查仓库中的每个位置，而是直接通过物品的唯一标识（散列值）找到它的位置，这样大大提高了查找效率。</p><p>学习和掌握哈希的方法：</p><ol><li>理解哈希的基本概念：包括哈希函数、哈希表、哈希冲突等。</li><li>学习和理解常见的哈希算法：如MD5、SHA系列等。</li><li>通过实践来提高理解：可以尝试自己编写哈希函数，或者在实际的项目中使用哈希来解决问题。</li><li>理解哈希在数据结构和算法中的应用：哈希在很多数据结构和算法中都有应用，如哈希表、布隆过滤器等。</li><li>阅读相关的书籍和资料：有很多关于哈希的优秀书籍和在线资料，可以帮助你更深入地理解哈希。</li></ol><hr><p>哈希函数可以将任意长度的输入转换为固定长度的输出，这是因为哈希函数的设计原则之一就是“压缩性”。这意味着无论输入的数据有多长，哈希函数都能生成一个固定长度的哈希值。</p><p>你可以将哈希函数想象成一个特殊的榨汁机。无论你放入多少水果（输入数据），这台榨汁机都能榨出一杯固定容量的果汁（哈希值）。这就是哈希函数的“压缩性”。</p><p>至于哈希值的长度是否有最大限制，这取决于具体的哈希算法。例如，MD5算法生成的哈希值总是128位，SHA-1算法生成的哈希值总是160位，SHA-256算法生成的哈希值总是256位。</p><p>哈希函数的底层实现通常涉及到复杂的数学和计算机科学理论，包括位操作、模运算、异或运算等。</p><hr><h1 id="一-数学基础" tabindex="-1">一，数学基础 <a class="header-anchor" href="#一-数学基础" aria-hidden="true">#</a></h1><p>数学学习科目：</p><ul><li>微积分</li><li>线性代数</li><li>概率论</li><li>复变函数</li><li>数值计算</li><li>优化理论</li><li>信息论</li></ul><h2 id="_1-1-向量和矩阵" tabindex="-1">1.1 向量和矩阵 <a class="header-anchor" href="#_1-1-向量和矩阵" aria-hidden="true">#</a></h2><p><strong>标量（scalar）</strong></p><h3 id="_1-1-标量、向量、矩阵、张量之间的联系" tabindex="-1">1.1 标量、向量、矩阵、张量之间的联系 <a class="header-anchor" href="#_1-1-标量、向量、矩阵、张量之间的联系" aria-hidden="true">#</a></h3><blockquote><p>标量（scalar）是数学中的一个概念，与向量相对。可以理解为只有大小，没有方向的量。如果做一个类比，可以将其比作一个数值或者一个简单的数值型数据，比如温度就是一个标量，因为有温度值，但没有方向</p></blockquote><blockquote><p>向量(Vector)是一个数学概念，表示具有大小和方向的量。可以类比为物理中的箭头，箭头有方向，同时箭头的长度代表其大小。在数学中，向量可以用来表示空间中的点或者是有方向的线段。</p></blockquote><p><strong>矩阵</strong><br> ​矩阵是具有相同特征和纬度的对象的集合，表现为一张二维数据表。其意义是一个对象表示为矩阵中的一行，一个特征表示为矩阵中的一列，每个特征都有数值型的取值。通常会赋予矩阵粗体的大写变量名称，比如$A$。</p><p><strong>张量</strong><br> 在某些情况下，我们会讨论坐标超过两维的数组。一般地，一个数组中的元素分布在若干维坐标的规则网格中，我们将其称之为张量。使用 来表示张量“A”。张量$A$中坐标为$(i,j,k)$的元素记作$A_{(i,j,k)}$。</p><p><strong>四者之间的关系</strong></p><blockquote><p>标量是0阶张量，向量是一阶张量。举例： ​标量就是知道棍子的长度，但是你不会知道棍子指向哪儿。 ​向量就是不但知道棍子的长度，还知道棍子指向前面还是后面。 ​张量就是不但知道棍子的长度，也知道棍子指向前面还是后面，还能知道这棍子又向上/下和左/右偏转了多少</p></blockquote><h3 id="_1-1-2-张量与矩阵的区别" tabindex="-1">1.1.2 张量与矩阵的区别 <a class="header-anchor" href="#_1-1-2-张量与矩阵的区别" aria-hidden="true">#</a></h3><blockquote><p>张量是一个可用来表示在一些矢量、标量和其他张量之间的线性关系的多线性函数<br> 而非线性关系则是不按比例、不成直线的关系，代表不规则的运动和突变</p></blockquote><h2 id="_1-2-导数和偏导数" tabindex="-1">1.2 导数和偏导数 <a class="header-anchor" href="#_1-2-导数和偏导数" aria-hidden="true">#</a></h2><p><strong>导数和偏导数都是微积分中的概念，用于描述函数在某点上的变化率，他们主要区别在于被求导函数的类型和自变量的个数</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">一个经典的使用导数解决实际问题的例子是最速降线问题，也称为布鲁诺的问题。  </span></span>
<span class="line"><span style="color:#A6ACCD;">这个问题涉及到光在两个介质边界的折射现象。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">设有一点 AA 在空气中，点 BB 在水面下方某一深度处。我们需要确定光线从点 A射入水中，经过哪个路径才能到达点 BB 的时间最短。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">首先，我们知道光在不同介质中传播速度不同。根据斯涅尔定律，在两个介质之间的折射光线遵循下列关系：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sin⁡(θ1)sin⁡(θ2)=v1v2</span></span>
<span class="line"><span style="color:#A6ACCD;">sin(θ2​)sin(θ1​)​=v2​v1​​</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">其中，θ1θ1​ 是入射角，θ2θ2​ 是折射角，v1v1​ 和 v2v2​ 分别是光在空气和水中的速度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">我们需要找到使得光线从 AA 到 BB 所需时间最短的路径。我们可以将问题建模为最小时间函数 T=T(θ1)T=T(θ1​) 关于入射角 θ1θ1​ 的优化问题。根据光程理论，可以得到以下关系式：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">T(θ1)=L1v1cos⁡(θ1)+L2v2cos⁡(θ2)</span></span>
<span class="line"><span style="color:#A6ACCD;">T(θ1​)=v1​cos(θ1​)L1​​+v2​cos(θ2​)L2​​</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">其中，L1L1​ 是光在空气中的传播距离，L2L2​ 是光在水中的传播距离。由于 L1L1​ 和 L2L2​ 与 θ1θ1​ 相关，我们可以使用导数来找到最小时间路径。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">为求解最速降线问题，我们需要求解最小时间函数 T(θ1)T(θ1​) 的最小值点。通过对 T(θ1)T(θ1​) 求导数并令其等于零，我们可以得到最优解所对应的入射角 θ1∗θ1∗​。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">具体地，我们对 T(θ1)T(θ1​) 进行求导得到：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dTdθ1=−L1v1sin⁡(θ1)(v1cos⁡(θ1))2+L2v2sin⁡(θ2)(v2cos⁡(θ2))2=0</span></span>
<span class="line"><span style="color:#A6ACCD;">dθ1​dT​=−(v1​cos(θ1​))2L1​v1​sin(θ1​)​+(v2​cos(θ2​))2L2​v2​sin(θ2​)​=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">化简上述方程，可得：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sin⁡(θ1∗)v1=sin⁡(θ2∗)v2      </span></span>
<span class="line"><span style="color:#A6ACCD;">v1​sin(θ1∗​)​=v2​sin(θ2∗​)​    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这个结果与斯涅尔定律相吻合，说明光线经过使得最小时间路径的折射角满足斯涅尔定律。   </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这个例子展示了如何使用导数来解决实际问题。通过建模函数，求解导数并令其为零，我们可以找到最小值点或最优解。      </span></span>
<span class="line"><span style="color:#A6ACCD;">在最速降线问题中，我们使用导数找到了光线的最短时间路径，并验证了斯涅尔定律。这个过程体现了理论知识与实际问题的结合和应用。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_1-3-特征值和特征向量" tabindex="-1">1.3 特征值和特征向量 <a class="header-anchor" href="#_1-3-特征值和特征向量" aria-hidden="true">#</a></h2>`,30),i=[p];function o(c,t,r,A,C,h){return a(),n("div",null,i)}const y=s(e,[["render",o]]);export{_ as __pageData,y as default};
