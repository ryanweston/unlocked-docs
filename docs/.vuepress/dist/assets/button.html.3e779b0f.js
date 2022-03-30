import{o as n,a as s,F as e,c as a,b as t}from"./app.1f878fcd.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const p={},c=a(`<h1 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> Button</h1><p>Button component for Unlocked.</p><h4 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i @unlocked<span class="token operator">/</span>foundation
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> UButton <span class="token punctuation">}</span> <span class="token keyword">from</span> &#39;@unlocked<span class="token operator">/</span>foundation
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="variants" tabindex="-1"><a class="header-anchor" href="#variants" aria-hidden="true">#</a> Variants</h3><p>There are a multitude of variants to make use of with the button component. These are <code>warning</code>, <code>error</code>, <code>text</code> and <code>secondary</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">&#39;secondary&#39;</span><span class="token operator">&gt;</span>Example<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="icon-usage" tabindex="-1"><a class="header-anchor" href="#icon-usage" aria-hidden="true">#</a> Icon usage</h3><p>You can both append and prefix an icon with the button component. To do this, make use of the slots <code>appendIcon</code> and <code>prefixIcon</code> with our <a href="&#39;/components/icon.html&#39;">icon component</a>.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>
  Example
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#appendIcon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span><span class="token punctuation">&gt;</span></span>
      {{ mdiAccount }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes" aria-hidden="true">#</a> Sizes</h3><p>The default size for the button component is <code>md</code>. However, to change this, pass your desired size out of <code>xs</code>, <code>s</code>, <code>lg</code> and <code>xl</code> through the size prop like so.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="figma" tabindex="-1"><a class="header-anchor" href="#figma" aria-hidden="true">#</a> Figma</h2><p>See below for the Figma component.</p>`,19),r=t("iframe",{style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:"800",height:"450",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1GKZEhOubObtIb1UHXMV95%2FMaterial-2-Design-Kit-(Community)%3Fnode-id%3D0%253A2347",allowfullscreen:""},null,-1),l=a('<h2 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference" aria-hidden="true">#</a> API Reference</h2><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>width</td><td>string</td></tr><tr><td>height</td><td>string</td></tr><tr><td>width</td><td>string</td></tr><tr><td>height</td><td>string</td></tr></tbody></table>',2);function i(d,u){return n(),s(e,null,[c,r,l],64)}var g=o(p,[["render",i]]);export{g as default};
