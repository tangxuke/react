webpackJsonp([0xda67956fa889],{605:function(e,t){e.exports={data:{markdownRemark:{html:'<p>There are a lot of JavaScript MVC frameworks out there. Why did we build React\nand why would you want to use it?</p>\n<h2 id="react-isnt-an-mvc-framework"><a href="#react-isnt-an-mvc-framework" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React isn’t an MVC framework.</h2>\n<p>React is a library for building composable user interfaces. It encourages\nthe creation of reusable UI components which present data that changes over\ntime.</p>\n<h2 id="react-doesnt-use-templates"><a href="#react-doesnt-use-templates" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React doesn’t use templates.</h2>\n<p>Traditionally, web application UIs are built using templates or HTML directives.\nThese templates dictate the full set of abstractions that you are allowed to use\nto build your UI.</p>\n<p>React approaches building user interfaces differently by breaking them into\n<strong>components</strong>. This means React uses a real, full featured programming language\nto render views, which we see as an advantage over templates for a few reasons:</p>\n<ul>\n<li><strong>JavaScript is a flexible, powerful programming language</strong> with the ability\nto build abstractions. This is incredibly important in large applications.</li>\n<li>By unifying your markup with its corresponding view logic, React can actually\nmake views <strong>easier to extend and maintain</strong>.</li>\n<li>By baking an understanding of markup and content into JavaScript, there’s\n<strong>no manual string concatenation</strong> and therefore less surface area for XSS\nvulnerabilities.</li>\n</ul>\n<p>We’ve also created <a href="/docs/jsx-in-depth.html">JSX</a>, an optional syntax\nextension, in case you prefer the readability of HTML to raw JavaScript.</p>\n<h2 id="reactive-updates-are-dead-simple"><a href="#reactive-updates-are-dead-simple" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reactive updates are dead simple.</h2>\n<p>React really shines when your data changes over time.</p>\n<p>In a traditional JavaScript application, you need to look at what data changed\nand imperatively make changes to the DOM to keep it up-to-date. Even AngularJS,\nwhich provides a declarative interface via directives and data binding <a href="https://code.angularjs.org/1.0.8/docs/guide/directive#reasonsbehindthecompilelinkseparation">requires\na linking function to manually update DOM nodes</a>.</p>\n<p>React takes a different approach.</p>\n<p>When your component is first initialized, the <code>render</code> method is called,\ngenerating a lightweight representation of your view. From that representation,\na string of markup is produced, and injected into the document. When your data\nchanges, the <code>render</code> method is called again. In order to perform updates as\nefficiently as possible, we diff the return value from the previous call to\n<code>render</code> with the new one, and generate a minimal set of changes to be applied\nto the DOM.</p>\n<blockquote>\n<p>The data returned from <code>render</code> is neither a string nor a DOM node — it’s a\nlightweight description of what the DOM should look like.</p>\n</blockquote>\n<p>We call this process <strong>reconciliation</strong>. Check out\n<a href="http://jsfiddle.net/2h6th4ju/">this jsFiddle</a> to see an example of\nreconciliation in action.</p>\n<p>Because this re-render is so fast (around 1ms for TodoMVC), the developer\ndoesn’t need to explicitly specify data bindings. We’ve found this approach\nmakes it easier to build apps.</p>\n<h2 id="html-is-just-the-beginning"><a href="#html-is-just-the-beginning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTML is just the beginning.</h2>\n<p>Because React has its own lightweight representation of the document, we can do\nsome pretty cool things with it:</p>\n<ul>\n<li>Facebook has dynamic charts that render to <code>&#x3C;canvas></code> instead of HTML.</li>\n<li>Instagram is a “single page” web app built entirely with React and\n<code>Backbone.Router</code>. Designers regularly contribute React code with JSX.</li>\n<li>We’ve built internal prototypes that run React apps in a web worker and use\nReact to drive <strong>native iOS views</strong> via an Objective-C bridge.</li>\n<li>You can run React\n<a href="https://github.com/petehunt/react-server-rendering-example">on the server</a>\nfor SEO, performance, code sharing and overall flexibility.</li>\n<li>Events behave in a consistent, standards-compliant way in all browsers\n(including IE8) and automatically use\n<a href="http://davidwalsh.name/event-delegate">event delegation</a>.</li>\n</ul>\n<p>Head on over to <a href="https://reactjs.org">https://reactjs.org</a> to check out what we have\nbuilt. Our documentation is geared towards building apps with the framework,\nbut if you are interested in the nuts and bolts\n<a href="/support.html">get in touch</a> with us!</p>\n<p>Thanks for reading!</p>',excerpt:"There are a lot of JavaScript MVC frameworks out there. Why did we build React\nand why would you want to use it? React isn’t an MVC framework. React is a library for building composable user interfaces. It encourages\nthe creation of reusable UI components which present data that changes over\ntime. React doesn’t use templates. Traditionally, web application UIs are built using templates or HTML directives.\nThese templates dictate the full set of abstractions that you are allowed to use\nto build…",frontmatter:{title:"Why did we build React?",next:null,prev:null,author:[{frontmatter:{name:"Pete Hunt",url:"https://twitter.com/floydophone"}}]},fields:{date:"June 04, 2013",path:"blog/2013-06-05-why-react.md",slug:"/blog/2013/06/05/why-react.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}}]}},pathContext:{slug:"/blog/2013/06/05/why-react.html"}}}});
//# sourceMappingURL=path---blog-2013-06-05-why-react-html-3712157af57b9048abda.js.map