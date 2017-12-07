webpackJsonp([0xe3ae7d1678bd],{747:function(n,e){n.exports={data:{markdownRemark:{html:'<p>此参考指南记录了构成React一部分事件系统的<code>SyntheticEvent</code>封装器。请参阅<a href="/docs/handling-events.html">事件处理</a>指南了解更多。</p>\n<h2 id="概述"><a href="#%E6%A6%82%E8%BF%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>概述</h2>\n<p>您的事件处理函数将会接收<code>SyntheticEvent</code>的实例，一个基于浏览器原生事件的跨浏览器实现。它拥有和浏览器原生事件一样的接口，包括<code>stopPropagation()</code>和<code>preventDefault()</code>，除了那些所有浏览器功能一样的事件。</p>\n<p>出于某些原因，你得使用一些底层的浏览器事件，只需用<code>nativeEvent</code>的属性就能找到。每个<code>SyntheicEvent</code>对象都有如下属性：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>boolean bubbles\nboolean cancelable\nDOMEventTarget currentTarget\nboolean defaultPrevented\nnumber eventPhase\nboolean isTrusted\nDOMEvent nativeEvent\n<span class="token keyword">void</span> <span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nboolean <span class="token function">isDefaultPrevented</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">void</span> <span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nboolean <span class="token function">isPropagationStopped</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nDOMEventTarget target\nnumber timeStamp\nstring type\n</code></pre>\n      </div>\n<blockquote>\n<p>敲黑板：\n由于在v0.14版本中，事件处理函数返回<code>false</code>不会再阻止事件传播, 所以必须得手动触发<code>e.stopPropagation()</code>和<code>e.preventDefault()</code> 方法。</p>\n</blockquote>\n<h3 id="事件池"><a href="#%E4%BA%8B%E4%BB%B6%E6%B1%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>事件池</h3>\n<p><code>SyntheticEvent</code>是共享的。那就意味着在调用事件回调之后，<code>SyntheticEvent</code>对象将会被重用，并且所有属性会被置空。这是出于性能因素考虑的。\n因此，您无法以异步方式访问事件。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">onClick</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => nullified object.</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => "click"</span>\n  <span class="token keyword">const</span> eventType <span class="token operator">=</span> event<span class="token punctuation">.</span>type<span class="token punctuation">;</span> <span class="token comment">// => "click"</span>\n\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => null</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventType<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => "click"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Won\'t work. this.state.clickEvent will only contain null values.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>clickEvent<span class="token punctuation">:</span> event<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// You can still export event properties.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>eventType<span class="token punctuation">:</span> event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>敲黑板：</p>\n<p>如果您想以异步的方式访问事件的属性值，你必须在事件回调中调用<code>event.persist()</code>方法，这样会在池中删除合成事件，并且在用户代码中保留对事件的引用。</p>\n</blockquote>\n<h2 id="支持的事件"><a href="#%E6%94%AF%E6%8C%81%E7%9A%84%E4%BA%8B%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>支持的事件</h2>\n<p>React标准化了事件，使其在不同的浏览器中拥有一致的属性。</p>\n<p>下面的事件处理函数由冒泡阶段的事件触发。在事件名后面加<code>Capture</code>就能在事件捕获阶段注册事件处理函数。举个例子，你可以使用<code>onClickCapture</code>代替<code>onClick</code>在事件捕获阶段来处理点击事件。</p>\n<ul>\n<li><a href="#clipboard-events">Clipboard Events</a></li>\n<li><a href="#composition-events">Composition Events</a></li>\n<li><a href="#keyboard-events">Keyboard Events</a></li>\n<li><a href="#focus-events">Focus Events</a></li>\n<li><a href="#form-events">Form Events</a></li>\n<li><a href="#mouse-events">Mouse Events</a></li>\n<li><a href="#selection-events">Selection Events</a></li>\n<li><a href="#touch-events">Touch Events</a></li>\n<li><a href="#ui-events">UI Events</a></li>\n<li><a href="#wheel-events">Wheel Events</a></li>\n<li><a href="#media-events">Media Events</a></li>\n<li><a href="#image-events">Image Events</a></li>\n<li><a href="#animation-events">Animation Events</a></li>\n<li><a href="#transition-events">Transition Events</a></li>\n</ul>\n<hr>\n<h2 id="参考"><a href="#%E5%8F%82%E8%80%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考</h2>\n<h3 id="clipboard-events"><a href="#clipboard-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Clipboard Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onCopy onCut onPaste</code></pre>\n      </div>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>DOMDataTransfer clipboardData\n</code></pre>\n      </div>\n<hr>\n<h3 id="composition-events"><a href="#composition-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Composition Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onCompositionEnd onCompositionStart onCompositionUpdate</code></pre>\n      </div>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>string data\n</code></pre>\n      </div>\n<hr>\n<h3 id="keyboard-events"><a href="#keyboard-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Keyboard Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onKeyDown onKeyPress onKeyUp</code></pre>\n      </div>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>boolean altKey\nnumber charCode\nboolean ctrlKey\nboolean <span class="token function">getModifierState</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nstring key\nnumber keyCode\nstring locale\nnumber location\nboolean metaKey\nboolean repeat\nboolean shiftKey\nnumber which\n</code></pre>\n      </div>\n<hr>\n<h3 id="focus-events"><a href="#focus-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Focus Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onFocus onBlur</code></pre>\n      </div>\n<p>这些焦点事件适用于React DOM中的所有元素，而不仅仅是表单元素。</p>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>DOMEventTarget relatedTarget\n</code></pre>\n      </div>\n<hr>\n<h3 id="form-events"><a href="#form-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Form Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onChange onInput onSubmit</code></pre>\n      </div>\n<p>查阅<a href="/docs/forms.html">表单</a>了解关于onChange事件的更多细节.</p>\n<hr>\n<h3 id="mouse-events"><a href="#mouse-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mouse Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit\nonDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave\nonMouseMove onMouseOut onMouseOver onMouseUp</code></pre>\n      </div>\n<p> <code>onMouseEnter</code> 和 <code>onMouseLeave</code> 事件由失去焦点的元素到正在输入的元素传播，并不是普通的冒泡，也没有捕获阶段。</p>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>boolean altKey\nnumber button\nnumber buttons\nnumber clientX\nnumber clientY\nboolean ctrlKey\nboolean <span class="token function">getModifierState</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nboolean metaKey\nnumber pageX\nnumber pageY\nDOMEventTarget relatedTarget\nnumber screenX\nnumber screenY\nboolean shiftKey\n</code></pre>\n      </div>\n<hr>\n<h3 id="selection-events"><a href="#selection-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Selection Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onSelect</code></pre>\n      </div>\n<hr>\n<h3 id="touch-events"><a href="#touch-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Touch Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onTouchCancel onTouchEnd onTouchMove onTouchStart</code></pre>\n      </div>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>boolean altKey\nDOMTouchList changedTouches\nboolean ctrlKey\nboolean <span class="token function">getModifierState</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nboolean metaKey\nboolean shiftKey\nDOMTouchList targetTouches\nDOMTouchList touches\n</code></pre>\n      </div>\n<hr>\n<h3 id="ui-events"><a href="#ui-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>UI Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onScroll</code></pre>\n      </div>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>number detail\nDOMAbstractView view\n</code></pre>\n      </div>\n<hr>\n<h3 id="wheel-events"><a href="#wheel-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wheel Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onWheel</code></pre>\n      </div>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>number deltaMode\nnumber deltaX\nnumber deltaY\nnumber deltaZ\n</code></pre>\n      </div>\n<hr>\n<h3 id="media-events"><a href="#media-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Media Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted \nonEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay \nonPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend \nonTimeUpdate onVolumeChange onWaiting</code></pre>\n      </div>\n<hr>\n<h3 id="image-events"><a href="#image-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Image Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onLoad onError</code></pre>\n      </div>\n<hr>\n<h3 id="animation-events"><a href="#animation-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Animation Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onAnimationStart onAnimationEnd onAnimationIteration</code></pre>\n      </div>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>string animationName\nstring pseudoElement\nfloat elapsedTime\n</code></pre>\n      </div>\n<hr>\n<h3 id="transition-events"><a href="#transition-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transition Events</h3>\n<p>事件名:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onTransitionEnd</code></pre>\n      </div>\n<p>属性:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>string propertyName\nstring pseudoElement\nfloat elapsedTime\n</code></pre>\n      </div>',frontmatter:{title:"SyntheticEvent",next:null,prev:null},fields:{path:"docs/reference-events.md",slug:"docs/events.html"}}},pathContext:{slug:"docs/events.html"}}}});
//# sourceMappingURL=path---docs-events-html-9fca3f1e8349a65e0aef.js.map