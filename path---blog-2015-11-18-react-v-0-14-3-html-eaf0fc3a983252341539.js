webpackJsonp([28922189515596],{694:function(e,t){e.exports={data:{markdownRemark:{html:'<p>It’s time for another installment of React patch releases! We didn’t break anything in v0.14.2 but we do have a couple of other bugs we’re fixing. The biggest change in this release is actually an addition of a new built file. We heard from a number of people that they still need the ability to use React to render to a string on the client. While the use cases are not common and there are other ways to achieve this, we decided that it’s still valuable to support. So we’re now building <code>react-dom-server.js</code>, which will be shipped to Bower and in the <code>dist/</code> directory of the <code>react-dom</code> package on npm. This file works the same way as <code>react-dom.js</code> and therefore requires that the primary React build has already been included on the page.</p>\n<p>The release is now available for download:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.14.3.js">https://fb.me/react-0.14.3.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.14.3.min.js">https://fb.me/react-0.14.3.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.14.3.js">https://fb.me/react-with-addons-0.14.3.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.14.3.min.js">https://fb.me/react-with-addons-0.14.3.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://fb.me/react-dom-0.14.3.js">https://fb.me/react-dom-0.14.3.js</a><br>\nMinified build for production: <a href="https://fb.me/react-dom-0.14.3.min.js">https://fb.me/react-dom-0.14.3.min.js</a>  </li>\n<li><strong>React DOM Server</strong> (include React in the page before React DOM Server)<br>\nDev build with warnings: <a href="https://fb.me/react-dom-server-0.14.3.js">https://fb.me/react-dom-server-0.14.3.js</a><br>\nMinified build for production: <a href="https://fb.me/react-dom-server-0.14.3.min.js">https://fb.me/react-dom-server-0.14.3.min.js</a>  </li>\n</ul>\n<p>We’ve also published version <code>0.14.3</code> of the <code>react</code>, <code>react-dom</code>, and addons packages on npm and the <code>react</code> package on bower.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>Added support for <code>nonce</code> attribute for <code>&#x3C;script></code> and <code>&#x3C;style></code> elements</li>\n<li>Added support for <code>reversed</code> attribute for <code>&#x3C;ol></code> elements</li>\n</ul>\n<h3 id="react-testutils-add-on"><a href="#react-testutils-add-on" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React TestUtils Add-on</h3>\n<ul>\n<li>Fixed bug with shallow rendering and function refs</li>\n</ul>\n<h3 id="react-csstransitiongroup-add-on"><a href="#react-csstransitiongroup-add-on" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React CSSTransitionGroup Add-on</h3>\n<ul>\n<li>Fixed bug resulting in timeouts firing incorrectly when mounting and unmounting rapidly</li>\n</ul>\n<h3 id="react-on-bower"><a href="#react-on-bower" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React on Bower</h3>\n<ul>\n<li>Added <code>react-dom-server.js</code> to expose <code>renderToString</code> and <code>renderToStaticMarkup</code> for usage in the browser</li>\n</ul>',excerpt:"It’s time for another installment of React patch releases! We didn’t break anything in v0.14.2 but we do have a couple of other bugs we’re fixing. The biggest change in this release is actually an addition of a new built file. We heard from a number of people that they still need the ability to use React to render to a string on the client. While the use cases are not common and there are other ways to achieve this, we decided that it’s still valuable to support. So we’re now building  react-dom…",frontmatter:{title:"React v0.14.3",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"November 17, 2015",path:"blog/2015-11-18-react-v0.14.3.md",slug:"/blog/2015/11/18/react-v0.14.3.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}}]}},pathContext:{slug:"/blog/2015/11/18/react-v0.14.3.html"}}}});
//# sourceMappingURL=path---blog-2015-11-18-react-v-0-14-3-html-eaf0fc3a983252341539.js.map