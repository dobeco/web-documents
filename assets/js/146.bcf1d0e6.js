(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{518:function(t,a,s){"use strict";s.r(a);var r=s(0),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第2章-在页面中使用javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第2章-在页面中使用javascript"}},[t._v("#")]),t._v(" 第2章 在页面中使用JavaScript")]),t._v(" "),s("h2",{attrs:{id:"_2-1-script标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-script标签"}},[t._v("#")]),t._v(" 2.1 script标签")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("HTML")]),t._v("页面中插入"),s("code",[t._v("JavaScript")]),t._v("的做法，就是使用"),s("code",[t._v("<script>")]),t._v("标签，该标签的属性如下：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("async")]),t._v(" 异步脚本，表示应该立即下载脚本，但不阻塞页面其他操作")]),t._v(" "),s("li",[s("code",[t._v("charset")]),t._v(" 表示通过src属性指定的代码的字符集")]),t._v(" "),s("li",[s("code",[t._v("defer")]),t._v(" 延迟脚本，表示脚本可以延迟到文档完全被解析和显示之后再执行。")]),t._v(" "),s("li",[s("code",[t._v("src")]),t._v(" 嵌入外部文件")]),t._v(" "),s("li",[s("code",[t._v("type")]),t._v(" 脚本语言的内容类型，默认值为"),s("code",[t._v("text/javascript")])])]),t._v(" "),s("p",[t._v("页面内容是自上而下解析的，所有"),s("code",[t._v("script")]),t._v("标签应该放在"),s("code",[t._v("body")]),t._v("标签后面，传统做法是放在"),s("code",[t._v("head")]),t._v("标签中，但这样会阻塞页面的内容加载，也无法操作"),s("code",[t._v("DOM")]),t._v("元素如果一定要在这个位置使用"),s("code",[t._v("javascript")]),t._v("请使用"),s("code",[t._v("window.onload")]),t._v("包裹起来。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<head>\n  <title>HTML</title>\n    <script>\n      window.onload = {\n        // to do\n      }\n    <\/script>\n<head>\n")])])]),s("h2",{attrs:{id:"_2-2-嵌入代码和外部文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-嵌入代码和外部文件"}},[t._v("#")]),t._v(" 2.2 嵌入代码和外部文件")]),t._v(" "),s("p",[t._v("使用嵌入外部文件优点：")]),t._v(" "),s("ul",[s("li",[t._v("可维护性，所有"),s("code",[t._v("JavaScript")]),t._v("文件放在一个文件夹中，方便维护")]),t._v(" "),s("li",[t._v("可缓存，根据浏览器的缓存机制，如果有两个页面都使用同一个文件，那么这个文件只需下载一次。这样能够加快页面加载额速度")]),t._v(" "),s("li",[t._v("适应未来")])]),t._v(" "),s("h2",{attrs:{id:"_2-3-文档模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-文档模式"}},[t._v("#")]),t._v(" 2.3 文档模式")]),t._v(" "),s("ul",[s("li",[t._v("混杂模式")]),t._v(" "),s("li",[t._v("标准模式")])]),t._v(" "),s("h2",{attrs:{id:"_2-4-noscript标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-noscript标签"}},[t._v("#")]),t._v(" 2.4 noscript标签")]),t._v(" "),s("p",[t._v("noscript标签只有在下列情况下才会显示里面的内容：")]),t._v(" "),s("ul",[s("li",[t._v("浏览器不支持脚本")]),t._v(" "),s("li",[t._v("脚本被禁用")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("noscript")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("本页面需要浏览器支持（启用）JavaScript"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("noscript")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("h2",{attrs:{id:"_2-5-小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-小结"}},[t._v("#")]),t._v(" 2.5 小结")]),t._v(" "),s("p",[t._v("把JavaScript插入到HTML中要使用"),s("code",[t._v("<script>")]),t._v("元素，使用这个元素合一把JavaScript嵌入到HTML页面中，让脚本与标记混合在一起；也可以包含外部的JavaScript文件。而我们需要注意的地方有：")]),t._v(" "),s("ul",[s("li",[t._v("在包含外部JavaScript文件时，必须将src属性设置为指向相应文件的URL。而这个文件既可以是与包含它的页面位于同一服务器上的文件，也可以死其他任何域中的文件。")]),t._v(" "),s("li",[t._v("所有script元素都会按照它们在页面中出现的先后顺序依次解析。在不使用defer和async属性的情况下，只有在解析完前面的script元素中的代码之后，才会开始解析后面script元素中的代码。")]),t._v(" "),s("li",[t._v("由于浏览器会先解析完不使用defer属性的script元素中的代码，然后再解析后面的内容，所以一般应该吧script元素放在页面最后，即主要内容后面。body元素后面")]),t._v(" "),s("li",[t._v("使用defer属性可以表示当前脚本不必等待其他脚本，也不必阻塞文档呈现。不能保证异步脚本按照它们在页面中出现的顺序执行。")])]),t._v(" "),s("p",[t._v("另外，使用noscript元素可以指定在不支持脚本的浏览器中显示的替代荣。但在启动了脚本的情况下， 浏览器不会显示noscript元素中的任何内容。")])])}),[],!1,null,null,null);a.default=v.exports}}]);