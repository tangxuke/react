webpackJsonp([39965628699429],{632:function(a,t){a.exports={data:{markdownRemark:{html:'<p>Interest in React seems to have surged ever since David Nolen (<a href="https://twitter.com/swannodette">@swannodette</a>)‘s introduction of <a href="https://github.com/swannodette/om">Om</a> in his post <a href="https://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/">“The Future of JavaScript MVC Frameworks”</a>.</p>\n<p>In this React Community Round-up, we are taking a closer look at React from a functional programming perspective.</p>\n<h2 id="react-another-level-of-indirection"><a href="#react-another-level-of-indirection" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>“React: Another Level of Indirection”</h2>\n<p>To start things off, Eric Normand (<a href="https://twitter.com/ericnormand">@ericnormand</a>) of <a href="http://lispcast.com">LispCast</a> makes the case for <a href="http://www.lispcast.com/react-another-level-of-indirection">React from a general functional programming standpoint</a> and explains how React’s “Virtual DOM provides the last piece of the Web Frontend Puzzle for ClojureScript”.</p>\n<blockquote>\n<p>The Virtual DOM is an indirection mechanism that solves the difficult problem of DOM programming: how to deal with incremental changes to a stateful tree structure. By abstracting away the statefulness, the Virtual DOM turns the real DOM into an immediate mode GUI, which is perfect for functional programming.</p>\n<p><a href="http://www.lispcast.com/react-another-level-of-indirection">Read the full post…</a></p>\n</blockquote>\n<h2 id="reagent-minimalistic-react-for-clojurescript"><a href="#reagent-minimalistic-react-for-clojurescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reagent: Minimalistic React for ClojureScript</h2>\n<p>Dan Holmsand (<a href="https://twitter.com/holmsand">@holmsand</a>) created <a href="https://holmsand.github.io/reagent/">Reagent</a>, a simplistic ClojureScript API to React.</p>\n<blockquote>\n<p>It allows you to define efficient React components using nothing but plain ClojureScript functions and data, that describe your UI using a Hiccup-like syntax.</p>\n<p>The goal of Reagent is to make it possible to define arbitrarily complex UIs using just a couple of basic concepts, and to be fast enough by default that you rarely have to care about performance.</p>\n<p><a href="https://holmsand.github.io/reagent/">Check it out on GitHub…</a></p>\n</blockquote>\n<h2 id="functional-dom-programming"><a href="#functional-dom-programming" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Functional DOM programming</h2>\n<p>React’s one-way data-binding naturally lends itself to a functional programming approach. Facebook’s Pete Hunt (<a href="https://twitter.com/floydophone">@floydophone</a>) explores how one would go about <a href="https://medium.com/p/67d81637d43">writing web apps in a functional manner</a>. Spoiler alert:</p>\n<blockquote>\n<p>This is React. It’s not about templates, or data binding, or DOM manipulation. It’s about using functional programming with a virtual DOM representation to build ambitious, high-performance apps with JavaScript.</p>\n<p><a href="https://medium.com/p/67d81637d43">Read the full post…</a></p>\n</blockquote>\n<p>Pete also explains this in detail at his #MeteorDevShop talk (about 30 Minutes):</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 48.46153846153846%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="//www.youtube-nocookie.com/embed/Lqcs6hPOcFw?start=2963" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<h2 id="kioo-separating-markup-and-logic"><a href="#kioo-separating-markup-and-logic" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kioo: Separating markup and logic</h2>\n<p><a href="https://github.com/ckirkendall">Creighton Kirkendall</a> created <a href="https://github.com/ckirkendall/kioo">Kioo</a>, which adds Enlive-style templating to React. HTML templates are separated from the application logic. Kioo comes with separate examples for both Om and Reagent.</p>\n<p>A basic example from github:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Header placeholder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Placeholder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>place holder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-clojure"><code>...\n\n(defn my-nav-item [[caption func]]\n  (kioo/component "main.html" [:.nav-item]\n    {[:a] (do-> (content caption)\n                (set-attr :onClick func))}))\n\n(defn my-header [heading nav-elms]\n  (kioo/component "main.html" [:header]\n    {[:h1] (content heading)\n     [:ul] (content (map my-nav-item nav-elms))}))\n\n(defn my-page [data]\n  (kioo/component "main.html"\n    {[:header] (substitute (my-header (:heading data)\n                                      (:navigation data)))\n     [:.content] (content (:content data))}))\n\n(def app-state (atom {:heading    "main"\n                      :content    "Hello World"\n                      :navigation [["home" #(js/alert %)]\n                                   ["next" #(js/alert %)]]}))\n\n(om/root app-state my-page (.-body js/document))</code></pre>\n      </div>\n<h2 id="om"><a href="#om" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Om</h2>\n<p>In an interview with David Nolen, Tom Coupland (<a href="https://twitter.com/tcoupland">@tcoupland</a>) of InfoQ provides a nice summary of recent developments around Om (”<a href="http://www.infoq.com/news/2014/01/om-react">Om: Enhancing Facebook’s React with Immutability</a>”).</p>\n<blockquote>\n<p>David [Nolen]: I think people are starting to see the limitations of just JavaScript and jQuery and even more structured solutions like Backbone, Angular, Ember, etc. React is a fresh approach to the DOM problem that seems obvious in hindsight.</p>\n<p><a href="http://www.infoq.com/news/2014/01/om-react">Read the full interview…</a></p>\n</blockquote>\n<h3 id="a-slice-of-react-clojurescript-and-om"><a href="#a-slice-of-react-clojurescript-and-om" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A slice of React, ClojureScript and Om</h3>\n<p>Fredrik Dyrkell (<a href="https://twitter.com/lexicallyscoped">@lexicallyscoped</a>) rewrote part of the <a href="http://www.lexicallyscoped.com/2013/12/25/slice-of-reactjs-and-cljs.html">React tutorial in both ClojureScript and Om</a>, along with short, helpful explanations.</p>\n<blockquote>\n<p>React has sparked a lot of interest in the Clojure community lately […]. At the very core, React lets you build up your DOM representation in a functional fashion by composing pure functions and you have a simple building block for everything: React components.</p>\n<p><a href="http://www.lexicallyscoped.com/2013/12/25/slice-of-reactjs-and-cljs.html">Read the full post…</a></p>\n</blockquote>\n<p>In a separate post, Dyrkell breaks down <a href="http://www.lexicallyscoped.com/2014/01/23/ClojureScript-react-om-binary-clock.html">how to build a binary clock component</a> in Om.</p>\n<p>[<a href="http://www.lexicallyscoped.com/demo/binclock/">Demo</a>] [<a href="https://github.com/fredyr/binclock/blob/master/src/binclock/core.cljs">Code</a>]</p>\n<h3 id="time-travel-implementing-undo-in-om"><a href="#time-travel-implementing-undo-in-om" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Time Travel: Implementing undo in Om</h3>\n<p>David Nolen shows how to leverage immutable data structures to <a href="https://swannodette.github.io/2013/12/31/time-travel/">add global undo</a> functionality to an app – using just 13 lines of ClojureScript.</p>\n<h3 id="a-step-by-step-om-walkthrough"><a href="#a-step-by-step-om-walkthrough" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Step-by-Step Om Walkthrough</h3>\n<p><a href="http://www.joshlehman.me">Josh Lehman</a> took the time to create an extensive <a href="http://www.joshlehman.me/rewriting-the-react-tutorial-in-om/">step-by-step walkthrough</a> of the React tutorial in Om. The well-documented source is on <a href="https://github.com/jalehman/omtut-starter">github</a>.</p>\n<h3 id="omkara"><a href="#omkara" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Omkara</h3>\n<p><a href="https://github.com/brendanyounger">brendanyounger</a> created <a href="https://github.com/brendanyounger/omkara">omkara</a>, a starting point for ClojureScript web apps based on Om/React. It aims to take advantage of server-side rendering and comes with a few tips on getting started with Om/React projects.</p>\n<h3 id="om-experience-report"><a href="#om-experience-report" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Om Experience Report</h3>\n<p>Adam Solove (<a href="https://twitter.com/asolove/">@asolove</a>) <a href="http://adamsolove.com/js/clojure/2014/01/06/om-experience-report.html">dives a little deeper into Om, React and ClojureScript</a>. He shares some helpful tips he gathered while building his <a href="https://github.com/asolove/carto-crayon">CartoCrayon</a> prototype.</p>\n<h2 id="not-so-random-tweet"><a href="#not-so-random-tweet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Not-so-random Tweet</h2>\n<div><blockquote class="twitter-tweet" lang="en"><p>[@swannodette](https://twitter.com/swannodette) No thank you! It\'s honestly a bit weird because Om is exactly what I didn\'t know I wanted for doing functional UI work.</p>&mdash; Adam Solove (@asolove) <a href="https://twitter.com/asolove/status/420294067637858304">January 6, 2014</a></blockquote></div>',excerpt:"Interest in React seems to have surged ever since David Nolen ( @swannodette )‘s introduction of  Om  in his post  “The Future of JavaScript MVC Frameworks” . In this React Community Round-up, we are taking a closer look at React from a functional programming perspective. “React: Another Level of Indirection” To start things off, Eric Normand ( @ericnormand ) of  LispCast  makes the case for  React from a general functional programming standpoint  and explains how React’s “Virtual DOM provides…",frontmatter:{title:"Community Round-up #15",next:null,prev:null,author:[{frontmatter:{name:"Jonas Gebhardt",url:"https://twitter.com/jonasgebhardt"}}]},fields:{date:"February 04, 2014",path:"blog/2014-02-05-community-roundup-15.md",slug:"/blog/2014/02/05/community-roundup-15.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}}]}},pathContext:{slug:"/blog/2014/02/05/community-roundup-15.html"}}}});
//# sourceMappingURL=path---blog-2014-02-05-community-roundup-15-html-7c674dda303e4361f813.js.map