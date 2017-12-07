webpackJsonp([0x93a740b0c45f],{746:function(e,n){e.exports={data:{markdownRemark:{html:'<p>In the minified production build of React, we avoid sending down full error messages in order to reduce the number of bytes sent over the wire.</p>\n<p>We highly recommend using the development build locally when debugging your app since it tracks additional debug info and provides helpful warnings about potential problems in your apps, but if you encounter an exception while using the production build, this page will reassemble the original text of the error.</p>\n<script src="/react/js/errorMap.js"></script>\n<div class="error-decoder-container"></div>\n<script src="/react/js/ErrorDecoderComponent.js"></script>',fields:{path:"docs/error-decoder.md"},frontmatter:{title:"Error Decoder"}},errorCodesJson:{internal:{contentDigest:'{\n  "0": "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.",\n  "1": "update(): expected target of %s to be an array; got %s.",\n  "2": "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",\n  "3": "update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?",\n  "4": "Cannot have more than one key in an object with %s",\n  "5": "update(): %s expects a spec of type \'object\'; got %s",\n  "6": "update(): %s expects a target of type \'object\'; got %s",\n  "7": "Expected %s target to be an array; got %s",\n  "8": "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",\n  "9": "update(): expected spec of %s to be a function; got %s.",\n  "10": "findAllInRenderedTree(...): instance must be a composite component",\n  "11": "TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.",\n  "12": "ReactShallowRenderer render(): Invalid component element.%s",\n  "13": "ReactShallowRenderer render(): Shallow rendering works only with custom components, not primitives (%s). Instead of calling `.render(el)` and inspecting the rendered output, look at `el.props` directly instead.",\n  "14": "TestUtils.Simulate expects a component instance and not a ReactElement.TestUtils.Simulate will not work if you are using shallow rendering.",\n  "15": "reactComponentExpect(...): instance must be a composite component",\n  "16": "Do not override existing functions.",\n  "17": "All native instances should have a tag.",\n  "18": "Expected a component class, got %s.%s",\n  "19": "Expect a native root tag, instead got %s",\n  "20": "RawText \\"%s\\" must be wrapped in an explicit <Text> component.",\n  "21": "findNodeHandle(...): Argument is not a component (type: %s, keys: %s)",\n  "22": "findNodeHandle(...): Unable to find node handle for unmounted component.",\n  "23": "onlyChild must be passed a children with exactly one child.",\n  "24": "Mismatched list of contexts in callback queue",\n  "25": "Trying to release an instance into a pool of a different type.",\n  "26": "Unexpected node: %s",\n  "27": "Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.",\n  "28": "Transaction.closeAll(): Cannot close transaction when none are open.",\n  "29": "accumulate(...): Accumulated items must be not be null or undefined.",\n  "30": "accumulateInto(...): Accumulated items must not be null or undefined.",\n  "31": "Objects are not valid as a React child (found: %s).%s",\n  "32": "Unable to find element with ID %s.",\n  "33": "getNodeFromInstance: Invalid argument.",\n  "34": "React DOM tree root should always have a node reference.",\n  "35": "isAncestor: Invalid argument.",\n  "36": "getParentInstance: Invalid argument.",\n  "37": "_registerComponent(...): Target container is not a DOM element.",\n  "38": "parentComponent must be a valid React Component",\n  "39": "ReactDOM.render(): Invalid component element.%s",\n  "40": "unmountComponentAtNode(...): Target container is not a DOM element.",\n  "41": "mountComponentIntoNode(...): Target container is not valid.",\n  "42": "You\'re trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\\n%s",\n  "43": "You\'re trying to render a component to the document but you didn\'t use server rendering. We can\'t do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.",\n  "44": "findDOMNode was called on an unmounted component.",\n  "45": "Element appears to be neither ReactComponent nor DOMNode (keys: %s)",\n  "46": "renderToString(): You must pass a valid ReactElement.",\n  "47": "renderToStaticMarkup(): You must pass a valid ReactElement.",\n  "48": "injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",\n  "49": "DOMProperty: Properties that have side effects must use property: %s",\n  "50": "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",\n  "51": "dangerouslyRenderMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString for server rendering.",\n  "52": "dangerouslyRenderMarkup(...): Missing markup.",\n  "53": "Danger: Assigning to an already-occupied result index.",\n  "54": "Danger: Did not assign to every index of resultList.",\n  "55": "Danger: Expected markup to render %s nodes, but rendered %s.",\n  "56": "dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.",\n  "57": "dangerouslyReplaceNodeWithMarkup(...): Missing markup.",\n  "58": "dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().",\n  "59": "%s is a void element tag and must not have `children` or use `props.dangerouslySetInnerHTML`.%s",\n  "60": "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",\n  "61": "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.",\n  "62": "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s",\n  "63": "Must be mounted to trap events",\n  "64": "trapBubbledEvent(...): Requires node to be rendered.",\n  "65": "Invalid tag: %s",\n  "66": "<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",\n  "67": "Missing closing comment for text component %s",\n  "68": "Expected devtool events to fire for the child before its parent includes it in onSetChildren().",\n  "69": "Expected onSetDisplayName() to fire for the child before its parent includes it in onSetChildren().",\n  "70": "Expected onSetChildren() or onSetText() to fire for the child before its parent includes it in onSetChildren().",\n  "71": "Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().",\n  "72": "Expected onSetParent() and onSetChildren() to be consistent (%s has parents %s and %s).",\n  "73": "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",\n  "74": "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",\n  "75": "ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.",\n  "76": "ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.",\n  "77": "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",\n  "78": "ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the \\"statics\\" key. Define it as an instance property instead; it will still be accessible on the constructor.",\n  "79": "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",\n  "80": "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.",\n  "81": "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",\n  "82": "%s.getInitialState(): must return an object or null",\n  "83": "createClass(...): Class specification must implement a `render` method.",\n  "84": "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",\n  "85": "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",\n  "86": "SimpleEventPlugin: Unhandled event type, `%s`.",\n  "87": "Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don\'t want to use valueLink and vice versa.",\n  "88": "Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don\'t want to use valueLink.",\n  "89": "Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don\'t want to use checkedLink",\n  "90": "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.",\n  "91": "`dangerouslySetInnerHTML` does not make sense on <textarea>.",\n  "92": "If you supply `defaultValue` on a <textarea>, do not pass children.",\n  "93": "<textarea> can only have at most one child.",\n  "94": "Expected %s listener to be a function, instead got type %s",\n  "95": "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.",\n  "96": "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",\n  "97": "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",\n  "98": "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",\n  "99": "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",\n  "100": "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",\n  "101": "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.",\n  "102": "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",\n  "103": "executeDirectDispatch(...): Invalid `event`.",\n  "104": "ReactCompositeComponent: injectEnvironment() can only be called once.",\n  "105": "%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",\n  "106": "%s.state: must be set to an object or null",\n  "107": "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",\n  "108": "%s.getChildContext(): key \\"%s\\" is not defined in childContextTypes.",\n  "109": "%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",\n  "110": "Stateless function components cannot have refs.",\n  "111": "There is no registered component for the tag %s",\n  "112": "getNextDescendantID(%s, %s): Received an invalid React DOM ID.",\n  "113": "getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.",\n  "114": "getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s",\n  "115": "traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.",\n  "116": "traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.",\n  "117": "traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s",\n  "118": "updateTextContent called on non-empty component.",\n  "119": "addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).",\n  "120": "removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).",\n  "121": "performUpdateIfNecessary: Unexpected batch number (current %s, pending %s)",\n  "122": "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",\n  "123": "ReactUpdates: must inject a reconcile transaction class and batching strategy",\n  "124": "Expected flush transaction\'s stored dirty-components length (%s) to match dirty-components array length (%s).",\n  "125": "ReactUpdates.asap: Can\'t enqueue an asap callback in a context where updates are not being batched.",\n  "126": "ReactUpdates: must provide a reconcile transaction class",\n  "127": "ReactUpdates: must provide a batching strategy",\n  "128": "ReactUpdates: must provide a batchedUpdates() function",\n  "129": "ReactUpdates: must provide an isBatchingUpdates boolean attribute",\n  "130": "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",\n  "131": "Encountered invalid React node of type %s",\n  "132": "Ended a touch event which was not counted in trackedTouchCount.",\n  "133": "Touch object is missing identifier",\n  "134": "Touch data should have been recorded on start",\n  "135": "Cannot find single active touch",\n  "136": "Attempted to update component `%s` that has already been unmounted (or failed to mount).",\n  "137": "%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s",\n  "138": "Touch object is missing identifier.",\n  "139": "ReactTestRenderer: .update() can\'t be called after unmount.",\n  "140": "Expected hook events to fire for the child before its parent includes it in onSetChildren().",\n  "141": "Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().",\n  "142": "Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).",\n  "143": "React.Children.only expected to receive a single React element child.",\n  "144": "Item must have been set",\n  "145": "hostContainerInfo should be populated before getPublicInstance is called.",\n  "146": "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.",\n  "147": "Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.",\n  "148": "Expected ref to be a function or a string.",\n  "149": "Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://fb.me/react-refs-must-have-owner).",\n  "150": "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.",\n  "151": "An iterable object provided no iterator.",\n  "152": "%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.",\n  "153": "Resuming work not yet implemented.",\n  "154": "We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.",\n  "155": "An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.",\n  "156": "Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.",\n  "157": "Invalid type of work. This error is likely caused by a bug in React. Please file an issue.",\n  "158": "There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.",\n  "159": "There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.",\n  "160": "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",\n  "161": "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.",\n  "162": "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.",\n  "163": "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",\n  "164": "A coroutine cannot have host component children.",\n  "165": "Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.",\n  "166": "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",\n  "167": "An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.",\n  "168": "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.",\n  "169": "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.",\n  "170": "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.",\n  "171": "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.",\n  "172": "The custom dialog was already injected.",\n  "173": "Injected showDialog() must be a function.",\n  "174": "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.",\n  "175": "Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.",\n  "176": "Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.",\n  "177": "Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.",\n  "178": "Should have next effect. This error is likely caused by a bug in React. Please file an issue.",\n  "179": "Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.",\n  "180": "Commit phase errors should be scheduled to recover with task priority. This error is likely caused by a bug in React. Please file an issue.",\n  "181": "Switch statement should be exhuastive. This error is likely caused by a bug in React. Please file an issue.",\n  "182": "performWork was called recursively. This error is likely caused by a bug in React. Please file an issue.",\n  "183": "Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue.",\n  "184": "No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.",\n  "185": "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",\n  "186": "Task updates can only be scheduled as a nested update or inside batchedUpdates.",\n  "187": "flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.",\n  "188": "Unable to find node on an unmounted component.",\n  "189": "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.",\n  "190": "Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.",\n  "191": "Invalid argument passed as callback. Expected a function. Instead received: %s",\n  "192": "React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers.",\n  "193": "The server renderer does not implement support for array children yet.",\n  "194": "Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.",\n  "195": "The internal instance must be a React host component. This error is likely caused by a bug in React. Please file an issue.",\n  "196": "Missing injection for fiber getContextForSubtree",\n  "197": "Injected invokeGuardedCallback() must be a function.",\n  "198": "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.",\n  "199": "Fiber owners should not show up in Stack stack traces.",\n  "200": "Target container is not a DOM element.",\n  "201": "ReactDOM.render(): Invalid component element. Instead of passing a string like \'div\', pass React.createElement(\'div\') or <div />.",\n  "202": "ReactDOM.render(): Invalid component element. Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.",\n  "203": "ReactDOM.render(): Invalid component element. This may be caused by unintentionally loading two independent copies of React.",\n  "204": "ReactDOM.render(): Invalid component element.",\n  "205": "renderToNodeStream(): Invalid component element.",\n  "206": "renderToStaticNodeStream(): Invalid component element.",\n  "207": "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.",\n  "208": "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.",\n  "209": "renderToString(): Invalid component element.",\n  "210": "renderToStaticMarkup(): Invalid component element.",\n  "211": "Missing injection for fiber findDOMNode",\n  "212": "Missing injection for stack findDOMNode",\n  "213": "Element appears to be neither ReactComponent nor DOMNode. Keys: %s",\n  "214": "toTree() does not yet know how to handle nodes with tag=%s",\n  "215": "something went wrong",\n  "216": "Text children should already be flattened.",\n  "217": "ReactART does not support the type \\"%s\\"",\n  "218": "ReactART: Can not insert node before itself",\n  "219": "getInspectorDataForViewTag() is not available in production",\n  "220": "Container does not support insertBefore operation",\n  "221": "Tried to register two views with the same name %s",\n  "222": "View config not found for name %s",\n  "223": "Trying to release an event instance  into a pool of a different type.",\n  "224": "Can\'t read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue.",\n  "225": "Unexpected object passed to ReactTestInstance constructor (tag: %s). This is probably a bug in React.",\n  "226": "Unsupported component type %s in test renderer. This is probably a bug in React.",\n  "227": "ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.",\n  "228": "TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.",\n  "229": "TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.",\n  "230": "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.unstable_createPortal).",\n  "231": "Expected `%s` listener to be a function, instead got a value of `%s` type.",\n  "232": "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",\n  "233": "Unsupported top level event type \\"%s\\" dispatched",\n  "234": "Event cannot be both direct and bubbling: %s",\n  "235": "Persistent reconciler is disabled.",\n  "236": "Noop reconciler is disabled.",\n  "237": "Mutating reconciler is disabled.",\n  "238": "Task updates can only be scheduled as a nested update or inside batchedUpdates. This error is likely caused by a bug in React. Please file an issue.",\n  "239": "Measure not implemented yet",\n  "240": "Text components are not supported for now.",\n  "241": "Text components are not yet supported.",\n  "242": "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",\n  "243": "renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.",\n  "244": "Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.",\n  "245": "performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.",\n  "246": "Should be working on a root. This error is likely caused by a bug in React. Please file an issue.",\n  "247": "A call cannot have host component children.",\n  "248": "Not implemented.",\n  "249": "ReactShallowRenderer render(): Shallow rendering works only with custom components, but the provided element type was `%s`."\n}\n'}}},pathContext:{slug:"docs/error-decoder.html"}}}});
//# sourceMappingURL=path---docs-error-decoder-html-939b5738d067241c2df2.js.map