(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{421:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cors-通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-通信"}},[e._v("#")]),e._v(" CORS 通信")]),e._v(" "),s("p",[e._v("CORS 是一个 W3C 标准，全称是“跨域资源共享”（Cross-origin resource sharing）。它允许浏览器向跨域的服务器，发出"),s("code",[e._v("XMLHttpRequest")]),e._v("请求，从而克服了 AJAX 只能同源使用的限制。")]),e._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),s("p",[e._v("CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。")]),e._v(" "),s("p",[e._v("整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨域通信。")]),e._v(" "),s("h2",{attrs:{id:"两种请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种请求"}},[e._v("#")]),e._v(" 两种请求")]),e._v(" "),s("p",[e._v("CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。")]),e._v(" "),s("p",[e._v("只要同时满足以下两大条件，就属于简单请求。")]),e._v(" "),s("p",[e._v("（1）请求方法是以下三种方法之一。")]),e._v(" "),s("blockquote",[s("ul",[s("li",[e._v("HEAD")]),e._v(" "),s("li",[e._v("GET")]),e._v(" "),s("li",[e._v("POST")])])]),e._v(" "),s("p",[e._v("（2）HTTP 的头信息不超出以下几种字段。")]),e._v(" "),s("blockquote",[s("ul",[s("li",[e._v("Accept")]),e._v(" "),s("li",[e._v("Accept-Language")]),e._v(" "),s("li",[e._v("Content-Language")]),e._v(" "),s("li",[e._v("Last-Event-ID")]),e._v(" "),s("li",[e._v("Content-Type：只限于三个值"),s("code",[e._v("application/x-www-form-urlencoded")]),e._v("、"),s("code",[e._v("multipart/form-data")]),e._v("、"),s("code",[e._v("text/plain")])])])]),e._v(" "),s("p",[e._v("凡是不同时满足上面两个条件，就属于非简单请求。一句话，简单请求就是简单的 HTTP 方法与简单的 HTTP 头信息的结合。")]),e._v(" "),s("p",[e._v("这样划分的原因是，表单在历史上一直可以跨域发出请求。简单请求就是表单请求，浏览器沿袭了传统的处理方式，不把行为复杂化，否则开发者可能转而使用表单，规避 CORS 的限制。对于非简单请求，浏览器会采用新的处理方式。")]),e._v(" "),s("h2",{attrs:{id:"简单请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[e._v("#")]),e._v(" 简单请求")]),e._v(" "),s("h3",{attrs:{id:"基本流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本流程"}},[e._v("#")]),e._v(" 基本流程")]),e._v(" "),s("p",[e._v("对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是在头信息之中，增加一个"),s("code",[e._v("Origin")]),e._v("字段。")]),e._v(" "),s("p",[e._v("下面是一个例子，浏览器发现这次跨域 AJAX 请求是简单请求，就自动在头信息之中，添加一个"),s("code",[e._v("Origin")]),e._v("字段。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("GET")]),e._v(" /cors HTTP/1.1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Origin:")]),e._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" api.alice.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Language:")]),e._v(" en-US\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" keep-alive\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent:")]),e._v(" Mozilla/5.0...\n")])])]),s("p",[e._v("上面的头信息中，"),s("code",[e._v("Origin")]),e._v("字段用来说明，本次请求来自哪个域（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。")]),e._v(" "),s("p",[e._v("如果"),s("code",[e._v("Origin")]),e._v("指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含"),s("code",[e._v("Access-Control-Allow-Origin")]),e._v("字段（详见下文），就知道出错了，从而抛出一个错误，被"),s("code",[e._v("XMLHttpRequest")]),e._v("的"),s("code",[e._v("onerror")]),e._v("回调函数捕获。注意，这种错误无法通过状态码识别，因为 HTTP 回应的状态码有可能是200。")]),e._v(" "),s("p",[e._v("如果"),s("code",[e._v("Origin")]),e._v("指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Credentials:")]),e._v(" true\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Expose-Headers:")]),e._v(" FooBar\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/html; charset=utf-8\n")])])]),s("p",[e._v("上面的头信息之中，有三个与 CORS 请求相关的字段，都以"),s("code",[e._v("Access-Control-")]),e._v("开头。")]),e._v(" "),s("p",[s("strong",[e._v("（1）"),s("code",[e._v("Access-Control-Allow-Origin")])])]),e._v(" "),s("p",[e._v("该字段是必须的。它的值要么是请求时"),s("code",[e._v("Origin")]),e._v("字段的值，要么是一个"),s("code",[e._v("*")]),e._v("，表示接受任意域名的请求。")]),e._v(" "),s("p",[s("strong",[e._v("（2）"),s("code",[e._v("Access-Control-Allow-Credentials")])])]),e._v(" "),s("p",[e._v("该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie。默认情况下，Cookie 不包括在 CORS 请求之中。设为"),s("code",[e._v("true")]),e._v("，即表示服务器明确许可，浏览器可以把 Cookie 包含在请求中，一起发给服务器。这个值也只能设为"),s("code",[e._v("true")]),e._v("，如果服务器不要浏览器发送 Cookie，不发送该字段即可。")]),e._v(" "),s("p",[s("strong",[e._v("（3）"),s("code",[e._v("Access-Control-Expose-Headers")])])]),e._v(" "),s("p",[e._v("该字段可选。CORS 请求时，"),s("code",[e._v("XMLHttpRequest")]),e._v("对象的"),s("code",[e._v("getResponseHeader()")]),e._v("方法只能拿到6个服务器返回的基本字段："),s("code",[e._v("Cache-Control")]),e._v("、"),s("code",[e._v("Content-Language")]),e._v("、"),s("code",[e._v("Content-Type")]),e._v("、"),s("code",[e._v("Expires")]),e._v("、"),s("code",[e._v("Last-Modified")]),e._v("、"),s("code",[e._v("Pragma")]),e._v("。如果想拿到其他字段，就必须在"),s("code",[e._v("Access-Control-Expose-Headers")]),e._v("里面指定。上面的例子指定，"),s("code",[e._v("getResponseHeader('FooBar')")]),e._v("可以返回"),s("code",[e._v("FooBar")]),e._v("字段的值。")]),e._v(" "),s("h3",{attrs:{id:"withcredentials-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withcredentials-属性"}},[e._v("#")]),e._v(" withCredentials 属性")]),e._v(" "),s("p",[e._v("上面说到，CORS 请求默认不包含 Cookie 信息（以及 HTTP 认证信息等），这是为了降低 CSRF 攻击的风险。但是某些场合，服务器可能需要拿到 Cookie，这时需要服务器显式指定"),s("code",[e._v("Access-Control-Allow-Credentials")]),e._v("字段，告诉浏览器可以发送 Cookie。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Credentials:")]),e._v(" true\n")])])]),s("p",[e._v("同时，开发者必须在 AJAX 请求中打开"),s("code",[e._v("withCredentials")]),e._v("属性。")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" xhr "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("withCredentials "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("否则，即使服务器要求发送 Cookie，浏览器也不会发送。或者，服务器要求设置 Cookie，浏览器也不会处理。")]),e._v(" "),s("p",[e._v("但是，有的浏览器默认将"),s("code",[e._v("withCredentials")]),e._v("属性设为"),s("code",[e._v("true")]),e._v("。这导致如果省略"),s("code",[e._v("withCredentials")]),e._v("设置，这些浏览器可能还是会一起发送 Cookie。这时，可以显式关闭"),s("code",[e._v("withCredentials")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("withCredentials "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("需要注意的是，如果服务器要求浏览器发送 Cookie，"),s("code",[e._v("Access-Control-Allow-Origin")]),e._v("就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie 依然遵循同源政策，只有用服务器域名设置的 Cookie 才会上传，其他域名的 Cookie 并不会上传，且（跨域）原网页代码中的"),s("code",[e._v("document.cookie")]),e._v("也无法读取服务器域名下的 Cookie。")]),e._v(" "),s("h2",{attrs:{id:"非简单请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求"}},[e._v("#")]),e._v(" 非简单请求")]),e._v(" "),s("h3",{attrs:{id:"预检请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预检请求"}},[e._v("#")]),e._v(" 预检请求")]),e._v(" "),s("p",[e._v("非简单请求是那种对服务器提出特殊要求的请求，比如请求方法是"),s("code",[e._v("PUT")]),e._v("或"),s("code",[e._v("DELETE")]),e._v("，或者"),s("code",[e._v("Content-Type")]),e._v("字段的类型是"),s("code",[e._v("application/json")]),e._v("。")]),e._v(" "),s("p",[e._v("非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为“预检”请求（preflight）。浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 HTTP 方法和头信息字段。只有得到肯定答复，浏览器才会发出正式的"),s("code",[e._v("XMLHttpRequest")]),e._v("请求，否则就报错。这是为了防止这些新增的请求，对传统的没有 CORS 支持的服务器形成压力，给服务器一个提前拒绝的机会，这样可以防止服务器收到大量"),s("code",[e._v("DELETE")]),e._v("和"),s("code",[e._v("PUT")]),e._v("请求，这些传统的表单不可能跨域发出的请求。")]),e._v(" "),s("p",[e._v("下面是一段浏览器的 JavaScript 脚本。")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://api.alice.com/cors'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" xhr "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'PUT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("setRequestHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'X-Custom-Header'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("上面代码中，HTTP 请求的方法是"),s("code",[e._v("PUT")]),e._v("，并且发送一个自定义头信息"),s("code",[e._v("X-Custom-Header")]),e._v("。")]),e._v(" "),s("p",[e._v("浏览器发现，这是一个非简单请求，就自动发出一个“预检”请求，要求服务器确认可以这样请求。下面是这个“预检”请求的 HTTP 头信息。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("OPTIONS")]),e._v(" /cors HTTP/1.1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Origin:")]),e._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Request-Method:")]),e._v(" PUT\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Request-Headers:")]),e._v(" X-Custom-Header\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" api.alice.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Language:")]),e._v(" en-US\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" keep-alive\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent:")]),e._v(" Mozilla/5.0...\n")])])]),s("p",[e._v("“预检”请求用的请求方法是"),s("code",[e._v("OPTIONS")]),e._v("，表示这个请求是用来询问的。头信息里面，关键字段是"),s("code",[e._v("Origin")]),e._v("，表示请求来自哪个源。")]),e._v(" "),s("p",[e._v("除了"),s("code",[e._v("Origin")]),e._v("字段，“预检”请求的头信息包括两个特殊字段。")]),e._v(" "),s("p",[s("strong",[e._v("（1）"),s("code",[e._v("Access-Control-Request-Method")])])]),e._v(" "),s("p",[e._v("该字段是必须的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法，上例是"),s("code",[e._v("PUT")]),e._v("。")]),e._v(" "),s("p",[s("strong",[e._v("（2）"),s("code",[e._v("Access-Control-Request-Headers")])])]),e._v(" "),s("p",[e._v("该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段，上例是"),s("code",[e._v("X-Custom-Header")]),e._v("。")]),e._v(" "),s("h3",{attrs:{id:"预检请求的回应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预检请求的回应"}},[e._v("#")]),e._v(" 预检请求的回应")]),e._v(" "),s("p",[e._v("服务器收到“预检”请求以后，检查了"),s("code",[e._v("Origin")]),e._v("、"),s("code",[e._v("Access-Control-Request-Method")]),e._v("和"),s("code",[e._v("Access-Control-Request-Headers")]),e._v("字段以后，确认允许跨源请求，就可以做出回应。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Date:")]),e._v(" Mon, 01 Dec 2008 01:15:39 GMT\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Server:")]),e._v(" Apache/2.0.61 (Unix)\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Methods:")]),e._v(" GET, POST, PUT\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Headers:")]),e._v(" X-Custom-Header\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/html; charset=utf-8\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Encoding:")]),e._v(" gzip\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Length:")]),e._v(" 0\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Keep-Alive:")]),e._v(" timeout=2, max=100\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" Keep-Alive\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/plain\n")])])]),s("p",[e._v("上面的 HTTP 回应中，关键的是"),s("code",[e._v("Access-Control-Allow-Origin")]),e._v("字段，表示"),s("code",[e._v("http://api.bob.com")]),e._v("可以请求数据。该字段也可以设为星号，表示同意任意跨源请求。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" *\n")])])]),s("p",[e._v("如果服务器否定了“预检”请求，会返回一个正常的 HTTP 回应，但是没有任何 CORS 相关的头信息字段，或者明确表示请求不符合条件。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("OPTIONS")]),e._v(" http://api.bob.com HTTP/1.1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Status:")]),e._v(" 200\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" https://notyourdomain.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Method:")]),e._v(" POST\n")])])]),s("p",[e._v("上面的服务器回应，"),s("code",[e._v("Access-Control-Allow-Origin")]),e._v("字段明确不包括发出请求的"),s("code",[e._v("http://api.bob.com")]),e._v("。")]),e._v(" "),s("p",[e._v("这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被"),s("code",[e._v("XMLHttpRequest")]),e._v("对象的"),s("code",[e._v("onerror")]),e._v("回调函数捕获。控制台会打印出如下的报错信息。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("XMLHttpRequest cannot load http://api.alice.com.\nOrigin http://api.bob.com is not allowed by Access-Control-Allow-Origin.\n")])])]),s("p",[e._v("服务器回应的其他 CORS 相关字段如下。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Methods:")]),e._v(" GET, POST, PUT\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Headers:")]),e._v(" X-Custom-Header\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Credentials:")]),e._v(" true\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Max-Age:")]),e._v(" 1728000\n")])])]),s("p",[s("strong",[e._v("（1）"),s("code",[e._v("Access-Control-Allow-Methods")])])]),e._v(" "),s("p",[e._v("该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次“预检”请求。")]),e._v(" "),s("p",[s("strong",[e._v("（2）"),s("code",[e._v("Access-Control-Allow-Headers")])])]),e._v(" "),s("p",[e._v("如果浏览器请求包括"),s("code",[e._v("Access-Control-Request-Headers")]),e._v("字段，则"),s("code",[e._v("Access-Control-Allow-Headers")]),e._v("字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在“预检”中请求的字段。")]),e._v(" "),s("p",[s("strong",[e._v("（3）"),s("code",[e._v("Access-Control-Allow-Credentials")])])]),e._v(" "),s("p",[e._v("该字段与简单请求时的含义相同。")]),e._v(" "),s("p",[s("strong",[e._v("（4）"),s("code",[e._v("Access-Control-Max-Age")])])]),e._v(" "),s("p",[e._v("该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。")]),e._v(" "),s("h3",{attrs:{id:"浏览器的正常请求和回应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的正常请求和回应"}},[e._v("#")]),e._v(" 浏览器的正常请求和回应")]),e._v(" "),s("p",[e._v("一旦服务器通过了“预检”请求，以后每次浏览器正常的 CORS 请求，就都跟简单请求一样，会有一个"),s("code",[e._v("Origin")]),e._v("头信息字段。服务器的回应，也都会有一个"),s("code",[e._v("Access-Control-Allow-Origin")]),e._v("头信息字段。")]),e._v(" "),s("p",[e._v("下面是“预检”请求之后，浏览器的正常 CORS 请求。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("PUT")]),e._v(" /cors HTTP/1.1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Origin:")]),e._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" api.alice.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("X-Custom-Header:")]),e._v(" value\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Language:")]),e._v(" en-US\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" keep-alive\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent:")]),e._v(" Mozilla/5.0...\n")])])]),s("p",[e._v("上面头信息的"),s("code",[e._v("Origin")]),e._v("字段是浏览器自动添加的。")]),e._v(" "),s("p",[e._v("下面是服务器正常的回应。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/html; charset=utf-8\n")])])]),s("p",[e._v("上面头信息中，"),s("code",[e._v("Access-Control-Allow-Origin")]),e._v("字段是每次回应都必定包含的。")]),e._v(" "),s("h2",{attrs:{id:"与-jsonp-的比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与-jsonp-的比较"}},[e._v("#")]),e._v(" 与 JSONP 的比较")]),e._v(" "),s("p",[e._v("CORS 与 JSONP 的使用目的相同，但是比 JSONP 更强大。JSONP 只支持"),s("code",[e._v("GET")]),e._v("请求，CORS 支持所有类型的 HTTP 请求。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据。")]),e._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[e._v("#")]),e._v(" 参考链接")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.html5rocks.com/en/tutorials/cors/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using CORS"),s("OutboundLink")],1),e._v(", Monsur Hossain")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP access control (CORS)"),s("OutboundLink")],1),e._v(", MDN")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://frontendian.co/cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS"),s("OutboundLink")],1),e._v(", Ryan Miller")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://performantcode.com/web/do-you-really-know-cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Do You Really Know CORS?"),s("OutboundLink")],1),e._v(", Grzegorz Mirek")])])])}),[],!1,null,null,null);t.default=r.exports}}]);