webpackJsonp([0xa3be1df4a56e],{699:function(n,a){n.exports={data:{markdownRemark:{html:'<p>The documentation for <code>componentWillReceiveProps</code> states that <code>componentWillReceiveProps</code> will be invoked when the props change as the result of a rerender. Some people assume this means “if <code>componentWillReceiveProps</code> is called, then the props must have changed”, but that conclusion is logically incorrect.</p>\n<p>The guiding principle is one of my favorites from formal logic/mathematics:</p>\n<blockquote>\n<p>A implies B does not imply B implies A</p>\n</blockquote>\n<p>Example: “If I eat moldy food, then I will get sick” does not imply “if I am sick, then I must have eaten moldy food”. There are many other reasons I could be feeling sick. For instance, maybe the flu is circulating around the office. Similarly, there are many reasons that <code>componentWillReceiveProps</code> might get called, even if the props didn’t change.</p>\n<p>If you don’t believe me, call <code>ReactDOM.render()</code> three times with the exact same props, and try to predict the number of times <code>componentWillReceiveProps</code> will get called:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'componentWillReceiveProps\'</span><span class="token punctuation">,</span> nextProps<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Bar <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar<span class="token punctuation">}</span><span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'container\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> mydata <span class="token operator">=</span> <span class="token punctuation">{</span>bar<span class="token punctuation">:</span> <span class="token string">\'drinks\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>mydata<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>mydata<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>mydata<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In this case, the answer is “2”. React calls <code>componentWillReceiveProps</code> twice (once for each of the two updates). Both times, the value of “drinks” is printed (ie. the props didn’t change).</p>\n<p>To understand why, we need to think about what <em>could</em> have happened. The data <em>could</em> have changed between the initial render and the two subsequent updates, if the code had performed a mutation like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> mydata <span class="token operator">=</span> <span class="token punctuation">{</span>bar<span class="token punctuation">:</span> <span class="token string">\'drinks\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>mydata<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\nmydata<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">\'food\'</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>mydata<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\nmydata<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">\'noise\'</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>mydata<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>React has no way of knowing that the data didn’t change. Therefore, React needs to call <code>componentWillReceiveProps</code>, because the component needs to be notified of the new props (even if the new props happen to be the same as the old props).</p>\n<p>You might think that React could just use smarter checks for equality, but there are some issues with this idea:</p>\n<ul>\n<li>The old <code>mydata</code> and the new <code>mydata</code> are actually the same physical object (only the object’s internal value changed). Since the references are triple-equals-equal, doing an equality check doesn’t tell us if the value has changed. The only possible solution would be to have created a deep copy of the data, and then later do a deep comparison - but this can be prohibitively expensive for large data structures (especially ones with cycles).</li>\n<li>The <code>mydata</code> object might contain references to functions which have captured variables within closures. There is no way for React to peek into these closures, and thus no way for React to copy them and/or verify equality.</li>\n<li>The <code>mydata</code> object might contain references to objects which are re-instantiated during the parent’s render (ie. not triple-equals-equal) but are conceptually equal (ie. same keys and same values). A deep-compare (expensive) could detect this, except that functions present a problem again because there is no reliable way to compare two functions to see if they are semantically equivalent.</li>\n</ul>\n<p>Given the language constraints, it is sometimes impossible for us to achieve meaningful equality semantics. In such cases, React will call <code>componentWillReceiveProps</code> (even though the props might not have changed) so the component has an opportunity to examine the new props and act accordingly.</p>\n<p>As a result, your implementation of <code>componentWillReceiveProps</code> MUST NOT assume that your props have changed. If you want an operation (such as a network request) to occur only when props have changed, your <code>componentWillReceiveProps</code> code needs to check to see if the props actually changed.</p>',excerpt:"The documentation for  componentWillReceiveProps  states that  componentWillReceiveProps  will be invoked when the props change as the result of a rerender. Some people assume this means “if  componentWillReceiveProps  is called, then the props must have changed”, but that conclusion is logically incorrect. The guiding principle is one of my favorites from formal logic/mathematics: A implies B does not imply B implies A Example: “If I eat moldy food, then I will get sick” does not imply “if I am…",frontmatter:{title:"(A => B) !=> (B => A)",next:null,prev:null,author:[{frontmatter:{name:"Jim Sproch",url:"http://www.jimsproch.com"}}]},fields:{date:"January 07, 2016",path:"blog/2016-01-08-A-implies-B-does-not-imply-B-implies-A.md",slug:"/blog/2016/01/08/A-implies-B-does-not-imply-B-implies-A.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}}]}},pathContext:{slug:"/blog/2016/01/08/A-implies-B-does-not-imply-B-implies-A.html"}}}});
//# sourceMappingURL=path---blog-2016-01-08-a-implies-b-does-not-imply-b-implies-a-html-769d174cbe4c83e611f0.js.map