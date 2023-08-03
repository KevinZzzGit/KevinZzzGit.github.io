const n=JSON.parse(`{"key":"v-3c695c58","path":"/code-note/vue/pinia%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","title":"Pinia的基本使用","lang":"zh-CN","frontmatter":{"description":"Pinia的基本使用 概述 Pinia 是 Vue.js 团队成员专门为 Vue 开发的一个全新的状态管理库 核心概念 State Getters Actions 使用案例 import { defineStore } from 'pinia' export const userStore = defineStore('user', { state: () =&gt; { return { count: 1, arr: [] } }, getters: { \\tcomputedCount(state){ return state.count; }, computedCount2(){ return this.count + 1 } }, actions: { \\tchangeCount(count:number){ this.count = count } } })","head":[["meta",{"property":"og:url","content":"https://kevinzzzgit.github.io/code-note/vue/pinia%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"KevinZzz BLOG"}],["meta",{"property":"og:title","content":"Pinia的基本使用"}],["meta",{"property":"og:description","content":"Pinia的基本使用 概述 Pinia 是 Vue.js 团队成员专门为 Vue 开发的一个全新的状态管理库 核心概念 State Getters Actions 使用案例 import { defineStore } from 'pinia' export const userStore = defineStore('user', { state: () =&gt; { return { count: 1, arr: [] } }, getters: { \\tcomputedCount(state){ return state.count; }, computedCount2(){ return this.count + 1 } }, actions: { \\tchangeCount(count:number){ this.count = count } } })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-03T03:31:15.000Z"}],["meta",{"property":"article:author","content":"KevinZzz"}],["meta",{"property":"article:modified_time","content":"2023-08-03T03:31:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pinia的基本使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-03T03:31:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KevinZzz\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[{"level":3,"title":"State","slug":"state","link":"#state","children":[]},{"level":3,"title":"Getters","slug":"getters","link":"#getters","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]},{"level":3,"title":"使用案例","slug":"使用案例","link":"#使用案例","children":[]}]},{"level":2,"title":"对比VueX","slug":"对比vuex","link":"#对比vuex","children":[]}],"git":{"createdTime":1691033475000,"updatedTime":1691033475000,"contributors":[{"name":"KevinZzz","email":"416014688@qq.com","commits":1}]},"readingTime":{"minutes":0.56,"words":167},"filePathRelative":"code-note/vue/pinia的基本使用.md","localizedDate":"2023年8月3日","excerpt":"<h1> Pinia的基本使用</h1>\\n<h2> 概述</h2>\\n<p>Pinia 是 Vue.js 团队成员专门为 Vue 开发的一个全新的状态管理库</p>\\n<h2> 核心概念</h2>\\n<h3> State</h3>\\n<h3> Getters</h3>\\n<h3> Actions</h3>\\n<h3> 使用案例</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> defineStore <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'pinia'</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> userStore <span class=\\"token operator\\">=</span> <span class=\\"token function\\">defineStore</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'user'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function-variable function\\">state</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span> \\n            <span class=\\"token literal-property property\\">count</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token literal-property property\\">arr</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">getters</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span> \\n    \\t<span class=\\"token function\\">computedCount</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">state</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> state<span class=\\"token punctuation\\">.</span>count<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token function\\">computedCount2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>count <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">actions</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span> \\n    \\t<span class=\\"token function\\">changeCount</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token literal-property property\\">count</span><span class=\\"token operator\\">:</span>number</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>count <span class=\\"token operator\\">=</span> count\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
