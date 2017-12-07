webpackJsonp([0x65d0d9e71002],{710:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This month marks a year since we released Relay and we’d like to share an update on the project and what’s next.</p>\n<h2 id="a-year-in-review"><a href="#a-year-in-review" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Year In Review</h2>\n<p>A year after launch, we’re incredibly excited to see an active community forming around Relay and that companies such as Twitter are <a href="https://fabric.io/blog/building-fabric-mission-control-with-graphql-and-relay">using Relay in production</a>:</p>\n<blockquote>\n<p>For a project like mission control, GraphQL and Relay were a near-perfect solution, and the cost of building it any other way justified the investment.</p>\n<p>— <cite>Fin Hopkins</cite></p>\n</blockquote>\n<p>This kind of positive feedback is really encouraging (I’ll admit to re-reading that post far too many times), and great motivation for us to keep going and make Relay even better.</p>\n<p>With the community’s help we’ve already come a long way since the technical preview. Here are some highlights:</p>\n<ul>\n<li>In March we added support for server-side rendering and for creating multiple instances of Relay on a single page. This was a coordinated effort over the course of several months by community members <a href="https://github.com/denvned">Denis Nedelyaev</a> and <a href="https://github.com/devknoll">Gerald Monaco</a> (now at Facebook).</li>\n<li>Also in March we added support for React Native. While we use Relay and React Native together internally, they didn’t quite work together in open-source out of the box. We owe a big thanks to <a href="https://github.com/skevy">Adam Miskiewicz</a>, <a href="https://github.com/boourns">Tom Burns</a>, <a href="https://github.com/gre">Gaëtan Renaudeau</a>, <a href="https://github.com/davidaurelio">David Aurelio</a>, <a href="https://github.com/martinbigio">Martín Bigio</a>, <a href="https://github.com/zpao">Paul O’Shannessy</a>, <a href="https://github.com/sophiebits">Sophie Alpert</a>, and many others who helped track down and resolve issues. Finally, thanks to <a href="https://github.com/steveluscher">Steven Luscher</a> for coordinating this effort and building the first Relay/ReactNative example app.</li>\n</ul>\n<p>We’ve also seen some great open-source projects spring up around Relay:</p>\n<ul>\n<li><a href="https://github.com/denvned">Denis Nedelyaev</a> created <a href="https://github.com/denvned/isomorphic-relay/">isomorphic-relay</a>, a package that helps developers build server-rendered Relay apps where data is prepared on the server and then used to bootstrap the app on the client.</li>\n<li><a href="https://github.com/taion">Jimmy Jia</a> created <a href="https://github.com/relay-tools/react-router-relay">react-router-relay</a> to integrate Relay data-fetching into React Router.</li>\n<li><a href="https://github.com/nodkz">Pavel Chertorogov</a> released <a href="https://github.com/nodkz/react-relay-network-layer">relay-network-layer</a>, which adds features such as batching query requests, middleware, authentication, logging, and more.</li>\n</ul>\n<p>This is just a small sampling of the community’s contributions. So far we’ve merged over 300 PRs - about 25% of our commits - from over 80 of you. These PRs have improved everything from the website and docs down the very core of the framework. We’re humbled by these outstanding contributions and excited to keep working with each of you!</p>\n<h1 id="retrospective--roadmap"><a href="#retrospective--roadmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Retrospective &#x26; Roadmap</h1>\n<p>Earlier this year we paused to reflect on the state of the project. What was working well? What could be improved? What features should we add, and what could we remove? A few themes emerged: performance on mobile, developer experience, and empowering the community.</p>\n<h2 id="mobile-perf"><a href="#mobile-perf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mobile Perf</h2>\n<p>First, Relay was built to serve the needs of product developers at Facebook. In 2016, that means helping developers to build apps that work well on <a href="https://newsroom.fb.com/news/2015/10/news-feed-fyi-building-for-all-connectivity/">mobile devices connecting on slower networks</a>. For example, people in developing markets commonly use <a href="https://code.facebook.com/posts/307478339448736/year-class-a-classification-system-for-android/">2011 year-class phones</a> and connect via <a href="https://code.facebook.com/posts/952628711437136/classes-performance-and-network-segmentation-on-android/">2G class networks</a>. These scenarios present their own challenges.</p>\n<p>Therefore, one of our primary goals this year is to optimize Relay for performance on low-end mobile devices <em>first</em>, knowing that this can translate to improved performance on high-end devices as well. In addition to standard approaches such as benchmarking, profiling, and optimizations, we’re also working on big-picture changes.</p>\n<p>For example, in today’s Relay, here’s what happens when an app is opened. First, React Native starts initializing the JavaScript context (loading and parsing your code and then running it). When this finishes, the app executes and Relay sees that you need data. It constructs and prints the query, uploads the query text to the server, processes the response, and renders your app. (Note that this process applies on the web, except that the code has to be <em>downloaded</em> instead of loaded from the device.)</p>\n<p>Ideally, though, we could begin fetching data as soon as the native code had loaded - in parallel with the JS context initialization. By the time your JS code was ready to run, the data-fetching would already be under way. To do this we would need a way to determine <em>statically</em> - at build time - what query an application would send.</p>\n<p>The key is that GraphQL is already static - we just need to fully embrace this fact. More on this later.</p>\n<h2 id="developer-experience"><a href="#developer-experience" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Developer Experience</h2>\n<p>Next, we’ve paid attention to the community’s feedback and know that, to put it simply, Relay could be “easier” to use (and “simpler” too). This isn’t entirely surprising to us - Relay was originally designed as a routing library and gradually morphed into a data-fetching library. Concepts like Relay “routes”, for example, no longer serve as critical a role and are just one more concept that developers have to learn about. Another example is mutations: while writes <em>are</em> inherently more complex than reads, our API doesn’t make the simple things simple enough.</p>\n<p>Alongside our focus on mobile performance, we’ve also kept the developer experience in mind as we evolve Relay core.</p>\n<h2 id="empowering-the-community"><a href="#empowering-the-community" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Empowering the Community</h2>\n<p>Finally, we want to make it easier for people in the community to develop useful libraries that work with Relay. By comparison, React’s small surface area - components - allows developers to build cool things like routing, higher-order components, or reusable text editors. For Relay, this would mean having the framework provide core primitives that users can build upon. We want it to be possible for the community to integrate Relay with view libraries other than React, or to build real-time subscriptions as a complementary library.</p>\n<h1 id="whats-next"><a href="#whats-next" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What’s Next</h1>\n<p>These were big goals, and also a bit scary; we knew that incremental improvements would only allow us to move so fast. So in April we started a project to build a new implementation of Relay core targeting low-end mobile devices from the start.</p>\n<p>As you can guess since we’re writing this, the experiment was a success. The result is a new core that retains the best parts of Relay today - colocated components &#x26; data-dependencies, automatic data/view consistency, declarative data-fetching - while improving performance on mobile devices and addressing several common areas of confusion.</p>\n<p>We’re currently focused on shipping the first applications using the new core: ironing out bugs, refining the API changes and developer experience, and adding any missing features. We’re excited to bring these changes to open source, and will do so once we’ve proven them in production. We’ll go into more detail in some upcoming talks - links below - but for now here’s an overview:</p>\n<ul>\n<li><strong>Static Queries</strong>: By adding a couple of Relay-specific directives, we’ve been able to retain the expressivity of current Relay queries using static syntax (concretely: you know what query an app will execute just by looking at the source text, without having to run that code). For starters this will allow Relay apps to start fetching data in parallel with JavaScript initialization. But it also unlocks other possibilities: knowing the query ahead of time means that we can generate optimized code for handling query responses, for example, or for reading query data from an offline cache.</li>\n<li><strong>Expressive Mutations</strong>: We’ll continue to support a higher-level mutation API for common cases, but will also provide a lower-level API that allows “raw” data access where necessary. If you need to order a list of cached elements, for example, there will be a way to <code>sort()</code> it.</li>\n<li><strong>Route-less Relay</strong>: Routes will be gone in open source. Instead of a route with multiple query definitions, you’ll just provide a single query with as many root fields as you want.</li>\n<li><strong>Cache Eviction/Garbage Collection</strong>: The API and architecture is designed from the start to allow removing cached data that is no longer referenced by a mounted view.</li>\n</ul>\n<p>Stepping back, we recognize that any API changes will require an investment on your part. To make the transition easier, though, <em>we will continue to support the current API for the foreseeable future</em> (we’re still using it too). And as much as possible we will open-source the tools that we use to migrate our own code. Ideas that we’re exploring include codemods, an interoperability layer for the old/new APIs, and tutorials &#x26; guides to ease migration.</p>\n<p>Ultimately, we’re making these changes because we believe they make Relay better all around: simpler for developers building apps and faster for the people using them.</p>\n<h1 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h1>\n<p>If you made it this far, congrats and thanks for reading! We’ll be sharing more information about these changes in some upcoming talks:</p>\n<ul>\n<li><a href="https://github.com/wincent">Greg Hurrell</a> will presenting a Relay “Deep Dive” at the <a href="http://www.meetup.com/Silicon-Valley-ReactJS-Meetup/events/232236845/">Silicon Valley ReactJS Meetup</a> on August 17th.</li>\n<li>I (<a href="https://github.com/josephsavona">@josephsavona</a>) will be speaking about Relay at <a href="http://www.reactrally.com">React Rally</a> on August 25th.</li>\n</ul>\n<p>We can’t wait to share the new code with you and are working as fast as we can to do so!</p>',excerpt:"This month marks a year since we released Relay and we’d like to share an update on the project and what’s next. A Year In Review A year after launch, we’re incredibly excited to see an active community forming around Relay and that companies such as Twitter are  using Relay in production : For a project like mission control, GraphQL and Relay were a near-perfect solution, and the cost of building it any other way justified the investment. —  Fin Hopkins This kind of positive feedback is really…",frontmatter:{title:"Relay: State of the State",next:null,prev:null,author:[{frontmatter:{name:"Joseph Savona",url:"https://twitter.com/en_JS"}}]},fields:{date:"August 04, 2016",path:"blog/2016-08-05-relay-state-of-the-state.md",slug:"/blog/2016/08/05/relay-state-of-the-state.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}}]}},pathContext:{slug:"/blog/2016/08/05/relay-state-of-the-state.html"}}}});
//# sourceMappingURL=path---blog-2016-08-05-relay-state-of-the-state-html-3cab9f6e26d34403dafc.js.map