import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-c5247fb6.js";const t={},p=e(`<h1 id="项目中遇到的ts处理" tabindex="-1"><a class="header-anchor" href="#项目中遇到的ts处理" aria-hidden="true">#</a> 项目中遇到的Ts处理</h1><h2 id="_1-列表页和详情页" tabindex="-1"><a class="header-anchor" href="#_1-列表页和详情页" aria-hidden="true">#</a> 1.列表页和详情页</h2><h3 id="_1-1-使用继承extends" tabindex="-1"><a class="header-anchor" href="#_1-1-使用继承extends" aria-hidden="true">#</a> 1.1 使用继承extends</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IDemoListItem</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IDemoDetail</span> <span class="token keyword">extends</span> <span class="token class-name">IDemoListItem</span><span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// IDemoListItem&#39;s Types</span>
<span class="token doc-comment comment">/** 
<span class="token punctuation">{</span>
	  id: string;
	  name: string;
	  age: number;	
<span class="token punctuation">}</span>
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-使用partial只使用类型的子集" tabindex="-1"><a class="header-anchor" href="#_1-2-使用partial只使用类型的子集" aria-hidden="true">#</a> 1.2 使用Partial只使用类型的子集</h3><div class="language-ty line-numbers-mode" data-ext="ty"><pre class="language-ty"><code>export interface IDemoDetail {
    id:string;
    name:string;
    age: number;
}
export type IDemoListItem = Partial&lt;IDemoDetail&gt;

// IDemoListItem&#39;s Types
/** 
{
	  id: string;
	  name: string;
}
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-定义接口的参数类型和返回类型" tabindex="-1"><a class="header-anchor" href="#_2-定义接口的参数类型和返回类型" aria-hidden="true">#</a> 2.定义接口的参数类型和返回类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// api</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">apiGetList</span> <span class="token operator">=</span> <span class="token punctuation">(</span>params<span class="token operator">:</span>getListParams<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> myAxios<span class="token operator">&lt;</span>getListResp<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       	url<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        params
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">apiGetList</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span>getListParams<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> myAxios<span class="token operator">&lt;</span>getListResp<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       	url<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        post
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">getListParams</span><span class="token punctuation">{</span>
    startTime<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    endTime<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    id<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">getListResp</span> <span class="token operator">=</span> BasicFetchResult<span class="token operator">&lt;</span>IDemoListItem<span class="token operator">&gt;</span>
<span class="token doc-comment comment">/** 
* 接口返回类型规范
*/</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BasicFetchResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
	code<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    data<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">;</span>
    message<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-业务常见的ts类型" tabindex="-1"><a class="header-anchor" href="#_3-业务常见的ts类型" aria-hidden="true">#</a> 3.业务常见的Ts类型</h2><h3 id="_3-1-record-string-any" tabindex="-1"><a class="header-anchor" href="#_3-1-record-string-any" aria-hidden="true">#</a> 3.1 Record&lt;string,any&gt;</h3><p>在TS中，Record类型用于表示一个键值对的集合，其中每个键都是一个字符串类型，值可以是任意类型。可以将Record类型看作是一个字符串索引签名为string的对象。</p><h3 id="_3-2-htmlelement" tabindex="-1"><a class="header-anchor" href="#_3-2-htmlelement" aria-hidden="true">#</a> 3.2 HTMLElement</h3><p>HTMLElement 是所有 HTML 元素的基类，包括 <code>&lt;div&gt;</code>、<code>&lt;p&gt;</code>、<code>&lt;span&gt;</code> 等等。它提供了一系列属性和方法，用于操作和获取元素的信息。例如，可以使用 HTMLElement 对象的属性来修改元素的样式、内容或者监听元素的事件。</p><h3 id="_3-3-keyboardevent" tabindex="-1"><a class="header-anchor" href="#_3-3-keyboardevent" aria-hidden="true">#</a> 3.3 KeyboardEvent</h3><p>KeyBoardEvent是一个接口，用于描述键盘事件的类型和属性。</p><h3 id="_3-4-自定义可空类型nullable" tabindex="-1"><a class="header-anchor" href="#_3-4-自定义可空类型nullable" aria-hidden="true">#</a> 3.4 自定义可空类型Nullable</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">Nullable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-partial" tabindex="-1"><a class="header-anchor" href="#_3-5-partial" aria-hidden="true">#</a> 3.5 Partial</h3><p>在TypeScript中，Partial是一个预定义的类型，用于将对象类型的所有属性变为可选的。可以使用Partial类型来创建一个新的类型，该类型会将所有属性变成可选的。</p><h3 id="_3-6-mouseevent" tabindex="-1"><a class="header-anchor" href="#_3-6-mouseevent" aria-hidden="true">#</a> 3.6 MouseEvent</h3><p>MouseEvent 是一个在鼠标操作时触发的事件对象。它包含了与鼠标操作相关的属性和方法，例如鼠标的位置、按下的按键、点击次数等。常见的 MouseEvent 事件包括 click、dblclick、mousedown、mouseup、mousemove 等。</p><h2 id="_4-封装一个组件时-将组件类型封装进一个namespace" tabindex="-1"><a class="header-anchor" href="#_4-封装一个组件时-将组件类型封装进一个namespace" aria-hidden="true">#</a> 4.封装一个组件时，将组件类型封装进一个namespace</h2><p>封装一个组件时，通过一个特定的命名空间管理它的所有类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
* 以一个封装了地图SDK的组件为例
* components/mapComps/types.d.ts
*/</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> TMap <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">IPoint</span> <span class="token punctuation">{</span>
        lat<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        lng<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">interface</span> <span class="token class-name">IMapOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
        zoom<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">class</span> <span class="token class-name">Map</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>options<span class="token operator">:</span>IMapOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setZoom</span><span class="token punctuation">(</span>zoom<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span>Map<span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* components/mapComps/index.vue
*/</span>
<span class="token keyword">const</span> point<span class="token operator">:</span>TMap<span class="token punctuation">.</span>IPoint <span class="token operator">=</span> <span class="token punctuation">{</span> lat<span class="token operator">:</span><span class="token number">1</span> <span class="token punctuation">,</span> lng<span class="token operator">:</span><span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),i=[p];function o(l,c){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","项目中遇到的Ts处理.html.vue"]]);export{u as default};
