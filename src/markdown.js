const markdown = `<h6 id="current-version-v1-0-4">Current Version - v1.0.4</h6>
<h1 id="usage">Usage</h1>
<h3 id="vanilla-js">Vanilla JS</h3>
<ul>
<li><p>Add Script to your webpage using CDN -</p>
<pre><code>  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/supscroll@1.0.4/script.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></li>
<li><p>Add Styles to your page head using CDN</p>
<pre><code>  &lt;<span class="hljs-keyword">link</span> 
      rel=<span class="hljs-string">"stylesheet"</span> 
      href=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/supscroll@1.0.4/carousel.css"</span> 
  /&gt;
</code> </pre></li>
<li><p>Initiate Initializers</p>
<pre><code>  <span class="hljs-comment">// On DOMContentLoad complete</span>
  <span class="hljs-built_in">document</span>.addEventListener(<span class="hljs-string">"DOMContentLoaded"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{
      <span class="hljs-keyword">let</span> elem = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'.supscroll .supscroll-wrapper'</span>);
      supscroll(elem);
  });
</code></pre><h3 id="using-npm-module">Using NPM Module</h3>
</li>
<li>Install package via npm or yarn<pre><code>      <span class="hljs-regexp">//</span> <span class="hljs-keyword">for</span> npm 
          npm install supscroll
      <span class="hljs-regexp">//</span> <span class="hljs-keyword">for</span> yarn
          yarn add supscroll
</code></pre></li>
<li>Import supscroll and styles into your file<pre><code>      <span class="hljs-keyword">import</span> { supscroll } <span class="hljs-keyword">from</span> <span class="hljs-string">"supscroll"</span>;
      <span class="hljs-keyword">import</span> <span class="hljs-string">'supscroll/carousel.css'</span>;
</code></pre></li>
</ul>
<h3 id="common-step-">Common Step -</h3>
<ul>
<li>Add Markup to your frontend code, Supscroll expects markup like below<pre><code>   &lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"supscroll"</span>&gt;
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"supscroll-wrapper"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>
             <span class="hljs-comment">&lt;!-- Your Custom HTML --&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> // Repeat it n times
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  &lt;<span class="hljs-regexp">/div&gt;</span>
</code></pre>Note - For React this would be JSX and similar suited variations for other FE Frameworks</li>
<p>For Style changes, Overrides the css classes from external in-app stylesheet</p>
</ul>
`

export default markdown;