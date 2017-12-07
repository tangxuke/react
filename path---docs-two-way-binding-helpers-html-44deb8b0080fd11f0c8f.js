webpackJsonp([0xef85f43c4ee4],{791:function(n,a){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p><code>LinkedStateMixin</code> is deprecated as of React v15. The recommendation is to explicitly set the value and change handler, instead of using <code>LinkedStateMixin</code>.</p>\n</blockquote>\n<p><strong>Importing</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> LinkedStateMixin <span class="token keyword">from</span> <span class="token string">\'react-addons-linked-state-mixin\'</span><span class="token punctuation">;</span> <span class="token comment">// ES6</span>\n<span class="token keyword">var</span> LinkedStateMixin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-linked-state-mixin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES5 with npm</span>\n</code></pre>\n      </div>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p><code>LinkedStateMixin</code> is an easy way to express two-way binding with React.</p>\n<p>In React, data flows one way: from owner to child. We think that this makes your app’s code easier to understand. You can think of it as “one-way data binding.”</p>\n<p>However, there are lots of applications that require you to read some data and flow it back into your program. For example, when developing forms, you’ll often want to update some React <code>state</code> when you receive user input. Or perhaps you want to perform layout in JavaScript and react to changes in some DOM element size.</p>\n<p>In React, you would implement this by listening to a “change” event, read from your data source (usually the DOM) and call <code>setState()</code> on one of your components. “Closing the data flow loop” explicitly leads to more understandable and easier-to-maintain programs. See <a href="/docs/forms.html">our forms documentation</a> for more information.</p>\n<p>Two-way binding — implicitly enforcing that some value in the DOM is always consistent with some React <code>state</code> — is concise and supports a wide variety of applications. We’ve provided <code>LinkedStateMixin</code>: syntactic sugar for setting up the common data flow loop pattern described above, or “linking” some data source to React <code>state</code>.</p>\n<blockquote>\n<p>Note:</p>\n<p><code>LinkedStateMixin</code> is just a thin wrapper and convention around the <code>onChange</code>/<code>setState()</code> pattern. It doesn’t fundamentally change how data flows in your React application.</p>\n</blockquote>\n<h2 id="linkedstatemixin-before-and-after"><a href="#linkedstatemixin-before-and-after" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LinkedStateMixin: Before and After</h2>\n<p>Here’s a simple form example without using <code>LinkedStateMixin</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> createReactClass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'create-react-class\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> NoLink <span class="token operator">=</span> <span class="token function">createReactClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  getInitialState<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>message<span class="token punctuation">:</span> <span class="token string">\'Hello!\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  handleChange<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>message<span class="token punctuation">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This works really well and it’s very clear how data is flowing, however, with a lot of form fields it could get a bit verbose. Let’s use <code>LinkedStateMixin</code> to save us some typing:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> createReactClass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'create-react-class\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> WithLink <span class="token operator">=</span> <span class="token function">createReactClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  mixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>LinkedStateMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</span>  getInitialState<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>message<span class="token punctuation">:</span> <span class="token string">\'Hello!\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">valueLink</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">linkState</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code>LinkedStateMixin</code> adds a method to your React component called <code>linkState()</code>. <code>linkState()</code> returns a <code>valueLink</code> object which contains the current value of the React state and a callback to change it.</p>\n<p><code>valueLink</code> objects can be passed up and down the tree as props, so it’s easy (and explicit) to set up two-way binding between a component deep in the hierarchy and state that lives higher in the hierarchy.</p>\n<p>Note that checkboxes have a special behavior regarding their <code>value</code> attribute, which is the value that will be sent on form submit if the checkbox is checked (defaults to <code>on</code>). The <code>value</code> attribute is not updated when the checkbox is checked or unchecked. For checkboxes, you should use <code>checkedLink</code> instead of <code>valueLink</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code><input type="checkbox" checkedLink={this.linkState(\'booleanValue\')} /></code></pre>\n      </div>\n<h2 id="under-the-hood"><a href="#under-the-hood" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Under the Hood</h2>\n<p>There are two sides to <code>LinkedStateMixin</code>: the place where you create the <code>valueLink</code> instance and the place where you use it. To prove how simple <code>LinkedStateMixin</code> is, let’s rewrite each side separately to be more explicit.</p>\n<h3 id="valuelink-without-linkedstatemixin"><a href="#valuelink-without-linkedstatemixin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>valueLink Without LinkedStateMixin</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> createReactClass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'create-react-class\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> WithoutMixin <span class="token operator">=</span> <span class="token function">createReactClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  getInitialState<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>message<span class="token punctuation">:</span> <span class="token string">\'Hello!\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">  handleChange<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>message<span class="token punctuation">:</span> newValue<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span>  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">var</span> valueLink <span class="token operator">=</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      value<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">      requestChange<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span>    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">valueLink</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>valueLink<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>As you can see, <code>valueLink</code> objects are very simple objects that just have a <code>value</code> and <code>requestChange</code> prop. And <code>LinkedStateMixin</code> is similarly simple: it just populates those fields with a value from <code>this.state</code> and a callback that calls <code>this.setState()</code>.</p>\n<h3 id="linkedstatemixin-without-valuelink"><a href="#linkedstatemixin-without-valuelink" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LinkedStateMixin Without valueLink</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> LinkedStateMixin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-linked-state-mixin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> createReactClass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'create-react-class\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> WithoutLink <span class="token operator">=</span> <span class="token function">createReactClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  mixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>LinkedStateMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  getInitialState<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>message<span class="token punctuation">:</span> <span class="token string">\'Hello!\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> valueLink <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">linkState</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      valueLink<span class="token punctuation">.</span><span class="token function">requestChange</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>valueLink<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The <code>valueLink</code> prop is also quite simple. It simply handles the <code>onChange</code> event and calls <code>this.props.valueLink.requestChange()</code> and also uses <code>this.props.valueLink.value</code> instead of <code>this.props.value</code>. That’s it!</p>',frontmatter:{title:"Two-way Binding Helpers",next:null,prev:null},fields:{path:"docs/addons-two-way-binding-helpers.md",slug:"docs/two-way-binding-helpers.html"}}},pathContext:{slug:"docs/two-way-binding-helpers.html"}}}});
//# sourceMappingURL=path---docs-two-way-binding-helpers-html-44deb8b0080fd11f0c8f.js.map