import{_ as s,c as n,o as a,d as l}from"./app.39ae84a8.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"日常排查数据库的命令 -Sql server 篇","slug":"日常排查数据库的命令-sql-server-篇","link":"#日常排查数据库的命令-sql-server-篇","children":[{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":3,"title":"查询重复的INDEX","slug":"查询重复的index","link":"#查询重复的index","children":[]}]},{"level":2,"title":"检查没有索引的表","slug":"检查没有索引的表","link":"#检查没有索引的表","children":[]}],"relativePath":"yunwei/sql/index.md"}'),p={name:"yunwei/sql/index.md"},o=l(`<h2 id="日常排查数据库的命令-sql-server-篇" tabindex="-1">日常排查数据库的命令 -Sql server 篇 <a class="header-anchor" href="#日常排查数据库的命令-sql-server-篇" aria-hidden="true">#</a></h2><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h3><div class="language-SQL"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 逻辑读写合计排名前十</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TOP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">        (total_logical_reads </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_logical_reads</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,(total_logical_writes </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_logical_writes</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,(total_physical_reads </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_phys_reads</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,execution_count</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,(</span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SUBSTRING</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">,statement_start_offset </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                          (</span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> statement_end_offset</span><span style="color:#89DDFF;">=-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LEN</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">CONVERT</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">NVARCHAR</span><span style="color:#A6ACCD;">(MAX),</span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">)) </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> statement_end_offset</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> statement_start_offset) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;">   sys.dm_exec_sql_text(</span><span style="color:#F78C6C;">sql_handle</span><span style="color:#A6ACCD;">)) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> query_text</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#676E95;font-style:italic;">--,plan_handle</span></span>
<span class="line"><span style="color:#A6ACCD;">	   ,</span><span style="color:#82AAFF;">db_name</span><span style="color:#A6ACCD;">(qp.dbid)</span></span>
<span class="line"><span style="color:#A6ACCD;">	   ,qp.query_plan</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;">    sys.dm_exec_query_stats</span></span>
<span class="line"><span style="color:#F78C6C;">cross</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">apply</span><span style="color:#A6ACCD;"> sys.dm_exec_query_plan(plan_handle) qp</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> (total_logical_reads </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> total_logical_writes)</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">execution_count </span><span style="color:#F78C6C;">DESC</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TOP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">        (total_logical_reads </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_logical_reads</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,(total_logical_writes </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_logical_writes</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,(total_physical_reads </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_phys_reads</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,execution_count</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,(</span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SUBSTRING</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">,statement_start_offset </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                          (</span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> statement_end_offset</span><span style="color:#89DDFF;">=-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LEN</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">CONVERT</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">NVARCHAR</span><span style="color:#A6ACCD;">(MAX),</span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">)) </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> statement_end_offset</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> statement_start_offset) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;">   sys.dm_exec_sql_text(</span><span style="color:#F78C6C;">sql_handle</span><span style="color:#A6ACCD;">)) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> query_text</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,plan_handle</span></span>
<span class="line"><span style="color:#A6ACCD;">	   ,</span><span style="color:#82AAFF;">db_name</span><span style="color:#A6ACCD;">(qp.dbid)</span></span>
<span class="line"><span style="color:#A6ACCD;">	   ,qp.query_plan</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;">    sys.dm_exec_query_stats</span></span>
<span class="line"><span style="color:#F78C6C;">cross</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">apply</span><span style="color:#A6ACCD;"> sys.dm_exec_query_plan(plan_handle) qp</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> (total_logical_reads )</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">execution_count </span><span style="color:#F78C6C;">DESC</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--执行次数最多的查询计划</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TOP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#A6ACCD;">    creation_time</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,last_execution_time</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,execution_count</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,(total_logical_reads</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_logical_reads</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,(total_logical_writes</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_logical_writes</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,(total_physical_reads</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">execution_count) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> avg_phys_reads</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,</span><span style="color:#82AAFF;">SUBSTRING</span><span style="color:#A6ACCD;">(st.text,(qs.statement_start_offset</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              ((</span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> statement_end_offset</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DATALENGTH</span><span style="color:#A6ACCD;">(st.text)</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> qs.statement_end_offset</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F78C6C;">END</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">qs.statement_start_offset)</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> statement_text</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,</span><span style="color:#82AAFF;">DB_NAME</span><span style="color:#A6ACCD;">(qp.dbid)</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,qp.query_plan</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    sys.dm_exec_query_stats </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> qs</span></span>
<span class="line"><span style="color:#F78C6C;">CROSS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">APPLY</span><span style="color:#A6ACCD;"> sys.dm_exec_query_plan(plan_handle) qp</span></span>
<span class="line"><span style="color:#F78C6C;">CROSS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">APPLY</span><span style="color:#A6ACCD;"> sys.dm_exec_sql_text(qs.sql_handle) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> st</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> (total_logical_reads</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">execution_count) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">    execution_count </span><span style="color:#F78C6C;">DESC</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--总计耗费CPU时间最长的查询计划</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TOP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#A6ACCD;">    creation_time</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,last_execution_time</span></span>
<span class="line"><span style="color:#A6ACCD;">   ,execution_count</span></span>
<span class="line"><span style="color:#A6ACCD;">        ,total_worker_time</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,last_worker_time</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,max_worker_time</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,min_worker_time</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,</span><span style="color:#82AAFF;">SUBSTRING</span><span style="color:#A6ACCD;">(st.text,(qs.statement_start_offset </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  ((</span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> statement_end_offset</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DATALENGTH</span><span style="color:#A6ACCD;">(st.text)</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> qs.statement_end_offset</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> qs.statement_start_offset) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> statement_text</span></span>
<span class="line"><span style="color:#A6ACCD;">					   ,qp.query_plan</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;">    sys.dm_exec_query_stats </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> qs</span></span>
<span class="line"><span style="color:#F78C6C;">CROSS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">APPLY</span><span style="color:#A6ACCD;"> sys.dm_exec_query_plan(plan_handle) qp</span></span>
<span class="line"><span style="color:#F78C6C;">CROSS</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">APPLY</span><span style="color:#A6ACCD;"> sys.dm_exec_sql_text(qs.sql_handle) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> st</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> total_worker_time </span><span style="color:#F78C6C;">DESC</span></span>
<span class="line"></span></code></pre></div><h3 id="查询重复的index" tabindex="-1">查询重复的INDEX <a class="header-anchor" href="#查询重复的index" aria-hidden="true">#</a></h3><div class="language-SQL"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--duplicated index for one database</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">WITH</span><span style="color:#A6ACCD;">    indexcols</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">                object_id </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> id</span></span>
<span class="line"><span style="color:#A6ACCD;">               ,index_id </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> indid</span></span>
<span class="line"><span style="color:#A6ACCD;">               ,</span><span style="color:#F78C6C;">name</span></span>
<span class="line"><span style="color:#A6ACCD;">               ,(</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> keyno</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> colid</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> [data()]</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">                    sys.sysindexkeys </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> k</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">                    k.id</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">i.object_id </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> k.indid</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">i.index_id</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">                    keyno</span></span>
<span class="line"><span style="color:#A6ACCD;">                   ,colid</span></span>
<span class="line"><span style="color:#A6ACCD;">                FOR</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">XML</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PATH</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                ) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> cols</span></span>
<span class="line"><span style="color:#A6ACCD;">               ,(</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> keyno</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> colid</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> [data()]</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">                    sys.sysindexkeys </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> k</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">                    k.id</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">i.object_id </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> k.indid</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">i.index_id</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">                    colid</span></span>
<span class="line"><span style="color:#A6ACCD;">                FOR</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F78C6C;">XML</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PATH</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                ) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> inc</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">                sys.indexes </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> i</span></span>
<span class="line"><span style="color:#A6ACCD;">             )</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">OBJECT_SCHEMA_NAME</span><span style="color:#A6ACCD;">(c1.id)</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">OBJECT_NAME</span><span style="color:#A6ACCD;">(c1.id) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">table</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,c1.name </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       ,c2.name </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">exactduplicate</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">        indexcols </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> c1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">JOIN</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        indexcols </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> c2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> c1.id</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">c2.id </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> c1.indid</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">c2.indid </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> c1.cols</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">c2.cols </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> c1.inc</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">c2.inc;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--duplicate index in every database</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--------------------------------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> #temp</span></span>
<span class="line"><span style="color:#F78C6C;">GO</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> #temp</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">database_name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">sysname</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">table_name </span><span style="color:#F78C6C;">sysname</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">index_name </span><span style="color:#F78C6C;">sysname</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">duplicate_index_name </span><span style="color:#F78C6C;">sysname</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">EXEC</span><span style="color:#A6ACCD;"> sp_MSforeachdb @command1</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">use [?];</span></span>
<span class="line"><span style="color:#C3E88D;">if db_name() not in (</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">tempdb</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">msdb</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">model</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">)</span></span>
<span class="line"><span style="color:#C3E88D;">begin</span></span>
<span class="line"><span style="color:#C3E88D;">WITH    indexcols</span></span>
<span class="line"><span style="color:#C3E88D;">          AS (</span></span>
<span class="line"><span style="color:#C3E88D;">              SELECT</span></span>
<span class="line"><span style="color:#C3E88D;">                object_id AS id</span></span>
<span class="line"><span style="color:#C3E88D;">               ,index_id AS indid</span></span>
<span class="line"><span style="color:#C3E88D;">               ,name</span></span>
<span class="line"><span style="color:#C3E88D;">               ,(</span></span>
<span class="line"><span style="color:#C3E88D;">                 SELECT</span></span>
<span class="line"><span style="color:#C3E88D;">                    CASE keyno</span></span>
<span class="line"><span style="color:#C3E88D;">                      WHEN 0 THEN NULL</span></span>
<span class="line"><span style="color:#C3E88D;">                      ELSE colid</span></span>
<span class="line"><span style="color:#C3E88D;">                    END AS [data()]</span></span>
<span class="line"><span style="color:#C3E88D;">                 FROM</span></span>
<span class="line"><span style="color:#C3E88D;">                    sys.sysindexkeys AS k</span></span>
<span class="line"><span style="color:#C3E88D;">                 WHERE</span></span>
<span class="line"><span style="color:#C3E88D;">                    k.id=i.object_id AND k.indid=i.index_id</span></span>
<span class="line"><span style="color:#C3E88D;">                 ORDER BY</span></span>
<span class="line"><span style="color:#C3E88D;">                    keyno</span></span>
<span class="line"><span style="color:#C3E88D;">                   ,colid</span></span>
<span class="line"><span style="color:#C3E88D;">                FOR</span></span>
<span class="line"><span style="color:#C3E88D;">                 XML PATH(</span><span style="color:#89DDFF;">&#39;&#39;&#39;&#39;</span><span style="color:#C3E88D;">)</span></span>
<span class="line"><span style="color:#C3E88D;">                ) AS cols</span></span>
<span class="line"><span style="color:#C3E88D;">               ,(</span></span>
<span class="line"><span style="color:#C3E88D;">                 SELECT</span></span>
<span class="line"><span style="color:#C3E88D;">                    CASE keyno</span></span>
<span class="line"><span style="color:#C3E88D;">                      WHEN 0 THEN colid</span></span>
<span class="line"><span style="color:#C3E88D;">                      ELSE NULL</span></span>
<span class="line"><span style="color:#C3E88D;">                    END AS [data()]</span></span>
<span class="line"><span style="color:#C3E88D;">                 FROM</span></span>
<span class="line"><span style="color:#C3E88D;">                    sys.sysindexkeys AS k</span></span>
<span class="line"><span style="color:#C3E88D;">                 WHERE</span></span>
<span class="line"><span style="color:#C3E88D;">                    k.id=i.object_id AND k.indid=i.index_id</span></span>
<span class="line"><span style="color:#C3E88D;">                 ORDER BY</span></span>
<span class="line"><span style="color:#C3E88D;">                    colid</span></span>
<span class="line"><span style="color:#C3E88D;">                FOR</span></span>
<span class="line"><span style="color:#C3E88D;">                 XML PATH(</span><span style="color:#89DDFF;">&#39;&#39;&#39;&#39;</span><span style="color:#C3E88D;">)</span></span>
<span class="line"><span style="color:#C3E88D;">                ) AS inc</span></span>
<span class="line"><span style="color:#C3E88D;">              FROM</span></span>
<span class="line"><span style="color:#C3E88D;">                sys.indexes AS i</span></span>
<span class="line"><span style="color:#C3E88D;">             )</span></span>
<span class="line"><span style="color:#C3E88D;">    insert into #temp</span></span>
<span class="line"><span style="color:#C3E88D;">	SELECT</span></span>
<span class="line"><span style="color:#C3E88D;">       DB_name()</span></span>
<span class="line"><span style="color:#C3E88D;">	   ,OBJECT_SCHEMA_NAME(c1.id)+</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">+OBJECT_NAME(c1.id) AS </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">table</span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">       ,c1.name AS </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">       ,c2.name AS </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">exactduplicate</span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">    FROM</span></span>
<span class="line"><span style="color:#C3E88D;">        indexcols AS c1</span></span>
<span class="line"><span style="color:#C3E88D;">    JOIN </span></span>
<span class="line"><span style="color:#C3E88D;">        indexcols AS c2</span></span>
<span class="line"><span style="color:#C3E88D;">        ON c1.id=c2.id AND c1.indid&lt;c2.indid AND c1.cols=c2.cols AND c1.inc=c2.inc</span></span>
<span class="line"><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> #temp </span></span>
<span class="line"></span></code></pre></div><h2 id="检查没有索引的表" tabindex="-1">检查没有索引的表 <a class="header-anchor" href="#检查没有索引的表" aria-hidden="true">#</a></h2><div class="language-SQL"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">--for all user database</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> #temp</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    [database_name] </span><span style="color:#F78C6C;">sysname</span></span>
<span class="line"><span style="color:#A6ACCD;">  , [schema_name] </span><span style="color:#F78C6C;">sysname</span></span>
<span class="line"><span style="color:#A6ACCD;">  , Table_name </span><span style="color:#F78C6C;">sysname</span></span>
<span class="line"><span style="color:#A6ACCD;">  , [object_id] </span><span style="color:#C792EA;">BIGINT</span></span>
<span class="line"><span style="color:#A6ACCD;">  , Approximate_Rows </span><span style="color:#C792EA;">BIGINT</span></span>
<span class="line"><span style="color:#A6ACCD;">  , Column_Count </span><span style="color:#C792EA;">BIGINT</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">EXEC</span><span style="color:#A6ACCD;"> sp_MSforeachdb @command1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">use [?];</span></span>
<span class="line"><span style="color:#C3E88D;">if db_name() not in (</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">tempdb</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">msdb</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">model</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">begin</span></span>
<span class="line"><span style="color:#C3E88D;">  insert into #temp </span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">SELECT DISTINCT</span></span>
<span class="line"><span style="color:#C3E88D;">       db_name() AS [Database_Name]</span></span>
<span class="line"><span style="color:#C3E88D;">     , SCHEMA_NAME(so.schema_id) AS [Schema_Name]</span></span>
<span class="line"><span style="color:#C3E88D;">     , OBJECT_NAME(so.object_id) AS [Table_Name]</span></span>
<span class="line"><span style="color:#C3E88D;">     , so.object_id              AS [object_id]</span></span>
<span class="line"><span style="color:#C3E88D;">     , MAX(dmv.rows)             AS [Approximate_Rows]</span></span>
<span class="line"><span style="color:#C3E88D;">     , MAX(d.ColumnCount)        AS [Column_Count]</span></span>
<span class="line"><span style="color:#C3E88D;">FROM   sys.objects so (NOLOCK)</span></span>
<span class="line"><span style="color:#C3E88D;">    JOIN sys.indexes si (NOLOCK)</span></span>
<span class="line"><span style="color:#C3E88D;">        ON so.object_id = si.object_id</span></span>
<span class="line"><span style="color:#C3E88D;">           AND so.type IN ( N</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">U</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">, N</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">V</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;"> )</span></span>
<span class="line"><span style="color:#C3E88D;">    JOIN sysindexes  dmv (NOLOCK)</span></span>
<span class="line"><span style="color:#C3E88D;">        ON so.object_id = dmv.id</span></span>
<span class="line"><span style="color:#C3E88D;">           AND si.index_id = dmv.indid</span></span>
<span class="line"><span style="color:#C3E88D;">    FULL OUTER JOIN</span></span>
<span class="line"><span style="color:#C3E88D;">         (</span></span>
<span class="line"><span style="color:#C3E88D;">         SELECT   object_id</span></span>
<span class="line"><span style="color:#C3E88D;">                , COUNT(1) AS ColumnCount</span></span>
<span class="line"><span style="color:#C3E88D;">         FROM     sys.columns (NOLOCK)</span></span>
<span class="line"><span style="color:#C3E88D;">         GROUP BY object_id</span></span>
<span class="line"><span style="color:#C3E88D;">         )           d</span></span>
<span class="line"><span style="color:#C3E88D;">        ON d.object_id = so.object_id</span></span>
<span class="line"><span style="color:#C3E88D;">WHERE    so.is_ms_shipped = 0</span></span>
<span class="line"><span style="color:#C3E88D;">         AND so.object_id NOT IN (</span></span>
<span class="line"><span style="color:#C3E88D;">                                 SELECT major_id</span></span>
<span class="line"><span style="color:#C3E88D;">                                 FROM   sys.extended_properties (NOLOCK)</span></span>
<span class="line"><span style="color:#C3E88D;">                                 WHERE  name = N</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">microsoft_database_tools_support</span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">                                 )</span></span>
<span class="line"><span style="color:#C3E88D;">         AND INDEXPROPERTY(so.object_id, si.name, </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">IsStatistics</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">) = 0</span></span>
<span class="line"><span style="color:#C3E88D;">GROUP BY so.schema_id</span></span>
<span class="line"><span style="color:#C3E88D;">       , so.object_id</span></span>
<span class="line"><span style="color:#C3E88D;">HAVING   (CASE OBJECTPROPERTY(MAX(so.object_id), </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">TableHasClustIndex</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">)</span></span>
<span class="line"><span style="color:#C3E88D;">              WHEN 0 THEN</span></span>
<span class="line"><span style="color:#C3E88D;">                  COUNT(si.index_id) - 1</span></span>
<span class="line"><span style="color:#C3E88D;">              ELSE</span></span>
<span class="line"><span style="color:#C3E88D;">                  COUNT(si.index_id)</span></span>
<span class="line"><span style="color:#C3E88D;">          END = 0</span></span>
<span class="line"><span style="color:#C3E88D;">         )</span></span>
<span class="line"><span style="color:#C3E88D;">ORDER BY Schema_Name</span></span>
<span class="line"><span style="color:#C3E88D;">       , Table_Name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">end</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;">   #temp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> #temp</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function c(C,t,r,y,A,D){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{F as __pageData,E as default};
