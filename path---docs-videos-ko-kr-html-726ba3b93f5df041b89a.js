webpackJsonp([83121822127439],{796:function(e,t){e.exports={data:{markdownRemark:{html:'<h3 id="rethinking-best-practices---jsconfeu"><a href="#rethinking-best-practices---jsconfeu" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rethinking best practices - JSConf.eu</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/x7cQ3mrcKaY" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>“페이스북과 인스타그램에서, 우리는 React 를 이용해 웹에서 벌어질 수 있는 한계를 뛰어넘으려 노력하고 있습니다. 저는 프레임워크에 대한 짤막한 소개로 시작해서, 논쟁이 벌어질 수 있는 다음의 세가지 주제로 넘어갈겁니다. 템플릿의 개념을 버리고 JavaScript 를 이용해 View 를 구축하기, 자료가 변할때 전체 어플리케이션을 다시 그리기(“re-rendering”), 그리고 DOM과 events의 경량화된 구현 입니다.” — <a href="http://www.petehunt.net/">Pete Hunt</a></p>\n<hr>\n<h3 id="thinking-in-react---tagtreetv"><a href="#thinking-in-react---tagtreetv" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thinking in react - tagtree.tv</h3>\n<p><a href="http://tagtree.tv/">tagtree.tv</a>의 비디오는 간단한 어플리케이션을 구성하면서 <a href="/docs/thinking-in-react-ko-KR.html">Thinking in React</a>의 원리들을 전달합니다.</p>\n<figure><a href="http://tagtree.tv/thinking-in-react">\n  <a class="gatsby-resp-image-link" href="/static/thinking-in-react-tagtree-ac19d27c424380e8bec63af22bf89661-da979.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 48.46153846153845%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABFklEQVQoz2NQVFLEipSUlNAYmIgBU0hBXk7X0tbML9Q2NtM2NsPML1zP2h4oSJRmeVlpM98wh5RCt4J6IHJMLTLzD5eXlSGsWV5e1tDFS8/G0SIoKrhvcXDvIovAKH1bZyNXH6AUAc0KivJquvom9k4WNjYBYABkmDo4q+sZAKUIO1tRUUFbW8vIyDAlLQ2IgAwgFyhIlJ+BSFlZWcfIREffEIh0jU1UVJTxhraigpq+gaqWloqmhoqGpoqmlpKqCiie1FSV1UEiymrqIMuVlZTVVNE1KyjIGbr52CfnO6QWelZ0uORVO6QWWEel2CXk2KfkW0enuhU1uuRWueRUAqMQHm3YnQ20REVDQ01HV1lNDatvIQgATnhoz9vpvqwAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="thinking in react tagtree" title="" src="/static/thinking-in-react-tagtree-ac19d27c424380e8bec63af22bf89661-da979.png" srcset="/static/thinking-in-react-tagtree-ac19d27c424380e8bec63af22bf89661-4faaa.png 210w,\n/static/thinking-in-react-tagtree-ac19d27c424380e8bec63af22bf89661-40917.png 420w,\n/static/thinking-in-react-tagtree-ac19d27c424380e8bec63af22bf89661-da979.png 650w" sizes="(max-width: 650px) 100vw, 650px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<hr>\n<h3 id="secrets-of-the-virtual-dom---mtnwest-js"><a href="#secrets-of-the-virtual-dom---mtnwest-js" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Secrets of the Virtual DOM - MtnWest JS</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/h3KksH8gfcQ" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>“이번에는 왜 우리가 virtual DOM을 만들었는지, 이것이 다른 시스템들과는 어떻게 다른지, 그리고 브라우져 기술들의 미래와 어떻게 관련이 있는지에 대해서 이야기 해 볼 겁니다.” — <a href="http://www.petehunt.net/">Pete Hunt</a></p>\n<hr>\n<h3 id="going-big-with-react"><a href="#going-big-with-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Going big with React</h3>\n<p>“이 발표에서, 이 모든 JS 프레임워크가 다음을 약속하는것처럼 보입니다: 깨끗한 구현들, 빠른 코드 디자인, 완전한 수행. 그런데 당신이 JavaScript 스트레스 테스트를 할때, 어떤 일이 발생합니까? 혹은 6MB의 코드를 던지면 무슨일이 발생합니까? 이번에는 높은 스트레스 환경에서 React가 어떻게 작동하는지, 그리고 이것이 우리 팀이 방대한 크기의 코드를 안전하게 구성하는데 어떻게 도움이 되어줄지를 조사해 볼겁니다.”\n<a href="https://skillsmatter.com/skillscasts/5429-going-big-with-react#video"><img src="https://i.vimeocdn.com/video/481670116_650.jpg"></a></p>\n<hr>\n<h3 id="codewinds"><a href="#codewinds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CodeWinds</h3>\n<p>CodeWinds Episode 4 에서 <a href="http://www.petehunt.net/">Pete Hunt</a>와 <a href="http://jeff.barczewski.com/">Jeff Barczewski</a>가 React에 대해서 이야기 합니다.</p>\n<figure><a href="http://codewinds.com/4">\n  <a class="gatsby-resp-image-link" href="/static/codewinds-004-f54dc1f82300ff7cbdaa921674d3ad79-758a0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 264px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 10.227272727272727%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcElEQVQI12Pw9vYpKiq2tbUrKSkNDAwyN7eAIwsLS1s7+8zMzMjI6ICAAKBsfn6Bk5NzXFx8UlJyZGQUg6+vX1lZGVBzTU1tcHCIsbEJHJmamtk7OKWnpfn6Bbm7uYaFhRcWFrm4uGZn5+Tn5wONAADVxSXHoBE+0gAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="codewinds 004" title="" src="/static/codewinds-004-f54dc1f82300ff7cbdaa921674d3ad79-758a0.png" srcset="/static/codewinds-004-f54dc1f82300ff7cbdaa921674d3ad79-ca43c.png 210w,\n/static/codewinds-004-f54dc1f82300ff7cbdaa921674d3ad79-758a0.png 264w" sizes="(max-width: 264px) 100vw, 264px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<table width="100%"><tr><td>\n02:08 - What is React and why use it?<br />\n03:08 - The symbiotic relationship of ClojureScript and React<br />\n04:54 - The history of React and why it was created<br />\n09:43 - Updating web page with React without using data binding<br />\n13:11 - Using the virtual DOM to change the browser DOM<br />\n13:57 - Programming with React, render targets HTML, canvas, other<br />\n16:45 - Working with designers. Contrasted with Ember and AngularJS<br />\n21:45 - JSX Compiler bridging HTML and React javascript<br />\n23:50 - Autobuilding JSX and in browser tools for React<br />\n24:50 - Tips and tricks to working with React, getting started<br />\n</td><td>\n27:17 - Rendering HTML on the server with Node.js. Rendering backends<br />\n29:20 - React evolved through survival of the fittest at Facebook<br />\n30:15 - Ideas for having state on server and client, using web sockets.<br />\n32:05 - React-multiuser - distributed shared mutable state using Firebase<br />\n33:03 - Better debugging with React using the state transitions, replaying events<br />\n34:08 - Differences from Web Components<br />\n34:25 - Notable companies using React<br />\n35:16 - Could a React backend plugin be created to target PDF?<br />\n36:30 - Future of React, what\'s next?<br />\n39:38 - Contributing and getting help<br />\n</td></tr></table>\n<p><a href="http://codewinds.com/4">방송 자료 읽어보기</a></p>\n<hr>\n<h3 id="javascript-jabber"><a href="#javascript-jabber" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JavaScript Jabber</h3>\n<p>JavaScript Jabber 73에서 <a href="http://www.petehunt.net/">Pete Hunt</a>와 <a href="https://github.com/jordwalke">Jordan Walke</a>가 React에 대해서 이야기했습니다.</p>\n<figure><a href="http://javascriptjabber.com/073-jsj-react-with-pete-hunt-and-jordan-walke/#content">\n  <a class="gatsby-resp-image-link" href="/static/javascript-jabber-f4fc507df82b6d5bed9e3e598f52c01e-b263f.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 400px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 7.5%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVQI12MwNDTUIw7oGxg4ODqFhoa4ODt5enq6ubkxKCkpKSoqKhEHtLS0zM3NtLW0zc3NjY2NAUK3FTOQaEhLAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="javascript jabber" title="" src="/static/javascript-jabber-f4fc507df82b6d5bed9e3e598f52c01e-b263f.png" srcset="/static/javascript-jabber-f4fc507df82b6d5bed9e3e598f52c01e-144fe.png 210w,\n/static/javascript-jabber-f4fc507df82b6d5bed9e3e598f52c01e-b263f.png 400w" sizes="(max-width: 400px) 100vw, 400px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<table width="100%"><tr><td>\n01:34 – Pete Hunt Introduction<br />\n02:45 – Jordan Walke Introduction<br />\n04:15 – React<br />\n06:38 – 60 Frames Per Second<br />\n09:34 – Data Binding<br />\n12:31 – Performance<br />\n17:39 – Diffing Algorithm<br />\n19:36 – DOM Manipulation\n</td><td>\n23:06 – Supporting node.js<br />\n24:03 – rendr<br />\n26:02 – JSX<br />\n30:31 – requestAnimationFrame<br />\n34:15 – React and Applications<br />\n38:12 – React Users Khan Academy<br />\n39:53 – Making it work\n</td></tr></table>\n<p><a href="http://javascriptjabber.com/073-jsj-react-with-pete-hunt-and-jordan-walke/">전체 기록 읽어보기</a></p>\n<hr>\n<h3 id="introduction-to-reactjs---facebook-seattle"><a href="#introduction-to-reactjs---facebook-seattle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction to React.js - Facebook Seattle</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/XxVg_s8xAms" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>By <a href="http://tomocchino.com/">Tom Occhino</a>, <a href="https://github.com/jordwalke">Jordan Walke</a></p>\n<hr>\n<h3 id="backbone--react--middleman-screencast"><a href="#backbone--react--middleman-screencast" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Backbone + React + Middleman Screencast</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 75.07692307692308%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/iul1fWHVU6A" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>Backbone은 React로 REST API를 제공하기 위한 아주 좋은 방법입니다. 이 화면중개는 <a href="https://github.com/magalhas/backbone-react-component">Backbone-React-Component</a>을 이용해서 어떻게 이 두가지를 연동하는지 보여줍니다. Middleman은 이 예제에서 사용되는 프레임워크이지만, 쉽게 다른 프레임워크로 대체하실 수 있습니다. 지원되는 템플릿은 <a href="https://github.com/jbhatab/middleman-backbone-react-template">이곳</a>에서 찾으실 수 있습니다. — <a href="http://www.openmindedinnovations.com/">열린 마음의 혁명들</a></p>\n<hr>\n<h3 id="developing-user-interfaces-with-react---super-vanjs"><a href="#developing-user-interfaces-with-react---super-vanjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Developing User Interfaces With React - Super VanJS</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/1OeXsL5mr4g" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>By <a href="https://github.com/steveluscher">Steven Luscher</a></p>\n<hr>\n<h3 id="introduction-to-react---lawebspeed-meetup"><a href="#introduction-to-react---lawebspeed-meetup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction to React - LAWebSpeed meetup</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/SMMRJif5QW0" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>by <a href="http://www.phpied.com/">Stoyan Stefanov</a></p>\n<hr>\n<h3 id="react-or-how-to-make-life-simpler---frontend-dev-conf-14"><a href="#react-or-how-to-make-life-simpler---frontend-dev-conf-14" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React, or how to make life simpler - FrontEnd Dev Conf ‘14</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/YJNUK0EA_Jo" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p><strong>러시아어</strong> by <a href="http://solovyov.net/">Alexander Solovyov</a></p>\n<hr>\n<h3 id="functional-dom-programming---meteor-devshop-11"><a href="#functional-dom-programming---meteor-devshop-11" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>“Functional DOM programming” - Meteor DevShop 11</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/qqVbr_LaCIo" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<hr>\n<h3 id="rethinking-web-app-development-at-facebook---facebook-f8-conference-2014"><a href="#rethinking-web-app-development-at-facebook---facebook-f8-conference-2014" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>“Rethinking Web App Development at Facebook” - Facebook F8 Conference 2014</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/nYkdrAPrdcw" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<hr>\n<h3 id="react-and-flux-building-applications-with-a-unidirectional-data-flow---forward-js-2014"><a href="#react-and-flux-building-applications-with-a-unidirectional-data-flow---forward-js-2014" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React and Flux: Building Applications with a Unidirectional Data Flow - Forward JS 2014</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/i__969noyAM" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>Facebook 개발자 <a href="https://twitter.com/fisherwebdev">Bill Fisher</a>와 <a href="https://twitter.com/jingc">Jing Chen</a>가 Flux 와 React 에 대해서 이야기합니다. 그리고 어떻게 단일 방향의 자료흐름을 사용하는 어플리케이션 구조가 방대한 코드를 정리하는지에 대해서 이야기합니다.”</p>\n<hr>\n<h3 id="server-side-rendering-of-isomorphic-apps-at-soundcloud"><a href="#server-side-rendering-of-isomorphic-apps-at-soundcloud" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server-Side Rendering of Isomorphic Apps at SoundCloud</h3>\n<iframe src="https://player.vimeo.com/video/108488724" width="100%" height="365" frameborder="0" allowfullscreen></iframe>\n<p>Server-side rendering을 위해 <a href="https://developers.soundcloud.com/blog/">SoundCloud</a>가 React 와 Flux를 사용하는지 by <a href="https://github.com/zertosh">Andres Suarez</a>\n<a href="https://github.com/zertosh/ssr-demo-kit">발표 자료와 예제 코드</a></p>\n<hr>\n<h3 id="introducing-react-native-playlist---reactjs-conf-2015"><a href="#introducing-react-native-playlist---reactjs-conf-2015" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introducing React Native (+Playlist) - React.js Conf 2015</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.30769230769231%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/v/KVZ-P-ZI6W4&amp;index=1&amp;list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>2015년에 <a href="https://twitter.com/tomocchino">Tom Occhino</a>님이 React의 과거와 현재를 리뷰하고 나아갈 방향을 제시했습니다.</p>',frontmatter:{title:"비디오들",next:"complementary-tools-ko-KR.html",prev:"conferences-ko-KR.html"},fields:{path:"community/videos.ko-KR.md",slug:"docs/videos-ko-KR.html"}}},pathContext:{slug:"docs/videos-ko-KR.html"}}}});
//# sourceMappingURL=path---docs-videos-ko-kr-html-726ba3b93f5df041b89a.js.map