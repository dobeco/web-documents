(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{539:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"表单事件的种类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表单事件的种类"}},[t._v("#")]),t._v(" 表单事件的种类")]),t._v(" "),n("h3",{attrs:{id:"input-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-事件"}},[t._v("#")]),t._v(" input 事件")]),t._v(" "),n("p",[n("code",[t._v("input")]),t._v("事件当"),n("code",[t._v("<input>")]),t._v("、"),n("code",[t._v("<select>")]),t._v("、"),n("code",[t._v("<textarea>")]),t._v("的值发生变化时触发。对于复选框（"),n("code",[t._v("<input type=checkbox>")]),t._v("）或单选框（"),n("code",[t._v("<input type=radio>")]),t._v("），用户改变选项时，也会触发这个事件。另外，对于打开"),n("code",[t._v("contenteditable")]),t._v("属性的元素，只要值发生变化，也会触发"),n("code",[t._v("input")]),t._v("事件。")]),t._v(" "),n("p",[n("code",[t._v("input")]),t._v("事件的一个特点，就是会连续触发，比如用户每按下一次按键，就会触发一次"),n("code",[t._v("input")]),t._v("事件。")]),t._v(" "),n("p",[n("code",[t._v("input")]),t._v("事件对象继承了"),n("code",[t._v("InputEvent")]),t._v("接口。")]),t._v(" "),n("p",[t._v("该事件跟"),n("code",[t._v("change")]),t._v("事件很像，不同之处在于"),n("code",[t._v("input")]),t._v("事件在元素的值发生变化后立即发生，而"),n("code",[t._v("change")]),t._v("在元素失去焦点时发生，而内容此时可能已经变化多次。也就是说，如果有连续变化，"),n("code",[t._v("input")]),t._v("事件会触发多次，而"),n("code",[t._v("change")]),t._v("事件只在失去焦点时触发一次。")]),t._v(" "),n("p",[t._v("下面是"),n("code",[t._v("<select>")]),t._v("元素的例子。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* HTML 代码如下\n<select id="mySelect">\n  <option value="1">1</option>\n  <option value="2">2</option>\n  <option value="3">3</option>\n</select>\n*/')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("inputHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mySelect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#mySelect'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmySelect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inputHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("上面代码中，改变下拉框选项时，会触发"),n("code",[t._v("input")]),t._v("事件，从而执行回调函数"),n("code",[t._v("inputHandler")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"select-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#select-事件"}},[t._v("#")]),t._v(" select 事件")]),t._v(" "),n("p",[n("code",[t._v("select")]),t._v("事件当在"),n("code",[t._v("<input>")]),t._v("、"),n("code",[t._v("<textarea>")]),t._v("里面选中文本时触发。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <input id="test" type="text" value="Select me!" />')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elem "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "select"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("选中的文本可以通过"),n("code",[t._v("event.target")]),t._v("元素的"),n("code",[t._v("selectionDirection")]),t._v("、"),n("code",[t._v("selectionEnd")]),t._v("、"),n("code",[t._v("selectionStart")]),t._v("和"),n("code",[t._v("value")]),t._v("属性拿到。")]),t._v(" "),n("h3",{attrs:{id:"change-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-事件"}},[t._v("#")]),t._v(" change 事件")]),t._v(" "),n("p",[n("code",[t._v("change")]),t._v("事件当"),n("code",[t._v("<input>")]),t._v("、"),n("code",[t._v("<select>")]),t._v("、"),n("code",[t._v("<textarea>")]),t._v("的值发生变化时触发。它与"),n("code",[t._v("input")]),t._v("事件的最大不同，就是不会连续触发，只有当全部修改完成时才会触发，另一方面"),n("code",[t._v("input")]),t._v("事件必然伴随"),n("code",[t._v("change")]),t._v("事件。具体来说，分成以下几种情况。")]),t._v(" "),n("ul",[n("li",[t._v("激活单选框（radio）或复选框（checkbox）时触发。")]),t._v(" "),n("li",[t._v("用户提交时触发。比如，从下列列表（select）完成选择，在日期或文件输入框完成选择。")]),t._v(" "),n("li",[t._v("当文本框或"),n("code",[t._v("<textarea>")]),t._v("元素的值发生改变，并且丧失焦点时触发。")])]),t._v(" "),n("p",[t._v("下面是一个例子。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <select size="1" onchange="changeEventHandler(event);">')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   <option>chocolate</option>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   <option>strawberry</option>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   <option>vanilla</option>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// </select>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeEventHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("如果比较一下上面"),n("code",[t._v("input")]),t._v("事件的例子，你会发现对于"),n("code",[t._v("<select>")]),t._v("元素来说，"),n("code",[t._v("input")]),t._v("和"),n("code",[t._v("change")]),t._v("事件基本是等价的。")]),t._v(" "),n("h3",{attrs:{id:"invalid-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#invalid-事件"}},[t._v("#")]),t._v(" invalid 事件")]),t._v(" "),n("p",[t._v("用户提交表单时，如果表单元素的值不满足校验条件，就会触发"),n("code",[t._v("invalid")]),t._v("事件。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("required")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("oninvalid")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("console.log('invalid input')"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("提交"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("上面代码中，输入框是必填的。如果不填，用户点击按钮提交时，就会触发输入框的"),n("code",[t._v("invalid")]),t._v("事件，导致提交被取消。")]),t._v(" "),n("h3",{attrs:{id:"reset-事件，submit-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reset-事件，submit-事件"}},[t._v("#")]),t._v(" reset 事件，submit 事件")]),t._v(" "),n("p",[t._v("这两个事件发生在表单对象"),n("code",[t._v("<form>")]),t._v("上，而不是发生在表单的成员上。")]),t._v(" "),n("p",[n("code",[t._v("reset")]),t._v("事件当表单重置（所有表单成员变回默认值）时触发。")]),t._v(" "),n("p",[n("code",[t._v("submit")]),t._v("事件当表单数据向服务器提交时触发。注意，"),n("code",[t._v("submit")]),t._v("事件的发生对象是"),n("code",[t._v("<form>")]),t._v("元素，而不是"),n("code",[t._v("<button>")]),t._v("元素，因为提交的是表单，而不是按钮。")]),t._v(" "),n("h2",{attrs:{id:"inputevent-接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inputevent-接口"}},[t._v("#")]),t._v(" InputEvent 接口")]),t._v(" "),n("p",[n("code",[t._v("InputEvent")]),t._v("接口主要用来描述"),n("code",[t._v("input")]),t._v("事件的实例。该接口继承了"),n("code",[t._v("Event")]),t._v("接口，还定义了一些自己的实例属性和实例方法。")]),t._v(" "),n("p",[t._v("浏览器原生提供"),n("code",[t._v("InputEvent()")]),t._v("构造函数，用来生成实例对象。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("InputEvent")]),t._v("构造函数可以接受两个参数。第一个参数是字符串，表示事件名称，该参数是必需的。第二个参数是一个配置对象，用来设置事件实例的属性，该参数是可选的。配置对象的字段除了"),n("code",[t._v("Event")]),t._v("构造函数的配置属性，还可以设置下面的字段，这些字段都是可选的。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("inputType")]),t._v("：字符串，表示发生变更的类型（详见下文）。")]),t._v(" "),n("li",[n("code",[t._v("data")]),t._v("：字符串，表示插入的字符串。如果没有插入的字符串（比如删除操作），则返回"),n("code",[t._v("null")]),t._v("或空字符串。")]),t._v(" "),n("li",[n("code",[t._v("dataTransfer")]),t._v("：返回一个 DataTransfer 对象实例，该属性通常只在输入框接受富文本输入时有效。")])]),t._v(" "),n("p",[n("code",[t._v("InputEvent")]),t._v("的实例属性主要就是上面三个属性，这三个实例属性都是只读的。")]),t._v(" "),n("p",[n("strong",[t._v("（1）InputEvent.data")])]),t._v(" "),n("p",[n("code",[t._v("InputEvent.data")]),t._v("属性返回一个字符串，表示变动的内容。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <input type="text" id="myInput">')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myInput'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myFunction"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myFunction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("上面代码中，如果手动在输入框里面输入"),n("code",[t._v("abc")]),t._v("，控制台会先输出"),n("code",[t._v("a")]),t._v("，再在下一行输出"),n("code",[t._v("b")]),t._v("，再在下一行输出"),n("code",[t._v("c")]),t._v("。然后选中"),n("code",[t._v("abc")]),t._v("，一次性将它们删除，控制台会输出"),n("code",[t._v("null")]),t._v("或一个空字符串。")]),t._v(" "),n("p",[n("strong",[t._v("（2）InputEvent.inputType")])]),t._v(" "),n("p",[n("code",[t._v("InputEvent.inputType")]),t._v("属性返回一个字符串，表示字符串发生变更的类型。")]),t._v(" "),n("p",[t._v("对于常见情况，Chrome 浏览器的返回值如下。完整列表可以参考"),n("a",{attrs:{href:"https://w3c.github.io/input-events/index.html#dom-inputevent-inputtype",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("ul",[n("li",[t._v("手动插入文本："),n("code",[t._v("insertText")])]),t._v(" "),n("li",[t._v("粘贴插入文本："),n("code",[t._v("insertFromPaste")])]),t._v(" "),n("li",[t._v("向后删除："),n("code",[t._v("deleteContentBackward")])]),t._v(" "),n("li",[t._v("向前删除："),n("code",[t._v("deleteContentForward")])])]),t._v(" "),n("p",[n("strong",[t._v("（3）InputEvent.dataTransfer")])]),t._v(" "),n("p",[n("code",[t._v("InputEvent.dataTransfer")]),t._v("属性返回一个 DataTransfer 实例。该属性只在文本框接受粘贴内容（insertFromPaste）或拖拽内容（"),n("code",[t._v("insertFromDrop")]),t._v("）时才有效。")])])}),[],!1,null,null,null);a.default=e.exports}}]);