(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{463:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"number数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number数据类型"}},[t._v("#")]),t._v(" Number数据类型")]),t._v(" "),a("p",[t._v("Number类型使用"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/IEEE_754",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEEE754"),a("OutboundLink")],1),t._v("格式来表示整数和浮点值，这也是"),a("code",[t._v("0.2 + 0.3")]),t._v("不等于"),a("code",[t._v("0.5")]),t._v("的原因,")]),t._v(" "),a("p",[t._v("最基本的数值类型字面量格式是十进制整数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var a = 10;\n")])])]),a("h3",{attrs:{id:"_1-浮点数值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-浮点数值"}},[t._v("#")]),t._v(" 1. 浮点数值")]),t._v(" "),a("p",[t._v("整理中。。。")]),t._v(" "),a("h3",{attrs:{id:"_2-nan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-nan"}},[t._v("#")]),t._v(" 2. NaN")]),t._v(" "),a("p",[a("code",[t._v("Not a Number")]),t._v("：不是一个数，但它属于数值类型")]),t._v(" "),a("p",[t._v("NaN的特点")]),t._v(" "),a("ul",[a("li",[t._v("NaN和任何值进行操作都会返回NaN")]),t._v(" "),a("li",[t._v("NaN与任何值都不相等，包括NaN本身")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("console.log(NaN == NaN)\n")])])]),a("h3",{attrs:{id:"_3-isnan函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-isnan函数"}},[t._v("#")]),t._v(" 3. isNaN函数")]),t._v(" "),a("p",[t._v("用于检测一个变量不是数值（"),a("code",[t._v("Number")]),t._v("）类型。"),a("code",[t._v("isNaN()")]),t._v("接收一个参数，这个参数可以是任何类型。这个函数会尝试把传入的参数转换为数值，某些不是数值的值会直接转换成数值，例如字符串"),a("code",[t._v('"10"')]),t._v("或"),a("code",[t._v("Boolean")]),t._v("值,不能转换为数值的值返回"),a("code",[t._v("true")]),t._v("，能转换的返回"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true ")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false (true会被转换成1)")]),t._v("\n")])])]),a("p",[t._v("总结：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("isNaN")]),t._v("意思是："),a("code",[t._v("是不是非数值")]),t._v("，是的话返回"),a("code",[t._v("true")]),t._v("，所有能被该函数转换能"),a("code",[t._v("Number")]),t._v("类型的值，都返回"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("li",[t._v("在使用isNaN进行检测的时候，首先会验证检测的值是否为数字类型，如果不是，先基于Number()这个方法，把值转换成数字类型，然后再检测。")]),t._v(" "),a("li",[t._v("空字符串、空数组、布尔值、"),a("code",[t._v("null")]),t._v("会转成数值，所以"),a("code",[t._v("isNaN")]),t._v("函数返回"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("li",[t._v("空对象、函数、"),a("code",[t._v("undefined")]),t._v("不能转换成数值，返回"),a("code",[t._v("true")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"_4-数值转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-数值转换"}},[t._v("#")]),t._v(" 4. 数值转换")]),t._v(" "),a("p",[t._v("把非数值值转换为数值：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Number()")])]),t._v(" "),a("li",[a("code",[t._v("parseInt()")]),t._v(" 取整")]),t._v(" "),a("li",[a("code",[t._v("parseFloat()")]),t._v(" 浮点数")])]),t._v(" "),a("h4",{attrs:{id:"number-转换规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number-转换规则"}},[t._v("#")]),t._v(" `Number()转换规则")]),t._v(" "),a("ul",[a("li",[t._v("如果是布尔值，"),a("code",[t._v("true")]),t._v("和"),a("code",[t._v("false")]),t._v("会被转换为"),a("code",[t._v("1")]),t._v("和"),a("code",[t._v("0")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),a("ul",[a("li",[t._v("如果是数字，只是简单的传入和返回。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 100")]),t._v("\n")])])]),a("ul",[a("li",[t._v("如果是"),a("code",[t._v("null")]),t._v("值，返回"),a("code",[t._v("0")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("如果是"),a("code",[t._v("undefined")]),t._v("，返回"),a("code",[t._v("NaN")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("如果是字符串：\n"),a("ul",[a("li",[t._v("字符串中只包含数字（包括前面带正/负号的情况），则将其转换为十进制数值,数字前面有"),a("code",[t._v("0")]),t._v("的会被忽略(不管前面有几个"),a("code",[t._v("0")]),t._v("，全部忽略)，例如"),a("code",[t._v('"010"')]),t._v("会转换成"),a("code",[t._v("10")]),t._v("。")]),t._v(" "),a("li",[t._v('字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值。')]),t._v(" "),a("li",[t._v("字符串中包含有效的十六进制格式（一般用数字"),a("code",[t._v("0")]),t._v("到"),a("code",[t._v("9")]),t._v("和字母"),a("code",[t._v("A")]),t._v("到"),a("code",[t._v("F")]),t._v("（或"),a("code",[t._v("a~f")]),t._v("）表示，其中"),a("code",[t._v(":A~F")]),t._v("表示"),a("code",[t._v("10~15")]),t._v("，这些称作十六进制数字），如"),a("code",[t._v('"0xf",')]),t._v("将其转换成相同大小的十进制整数值。")]),t._v(" "),a("li",[t._v("字符串为空，转换成"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("li",[t._v("字符串中包含除了以上格式之外的字符，则转换为NaN，如字符串中既有数字又有字母的情况。")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 规则一")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"010"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10 (前导的0会被忽略)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -10")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 规则2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.1 (前导的0会被忽略)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 规则3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 15")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 规则4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 规则5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Wolrd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0ff6600"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ff6600"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a10.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" goodsList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("如果对象，调用对象的valueOf()，空数组返回0，空对象返回NaN。")])]),t._v(" "),a("h4",{attrs:{id:"parseint-string-radix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parseint-string-radix"}},[t._v("#")]),t._v(" parseInt(string,radix)")]),t._v(" "),a("blockquote",[a("p",[t._v("将一个字符串转换成x进制的整数。")])]),t._v(" "),a("p",[t._v("传入的第一个参数为字符串，如果参数不是字符串，则将其转换为字符串(使用  "),a("code",[t._v("ToString")]),t._v(" 抽象操作)。字符串开头的空白符将会被忽略。")]),t._v(" "),a("p",[t._v("第二个参数为整数，表示按照"),a("code",[t._v("xx")]),t._v("进制转换，如传入参数"),a("code",[t._v("10")]),t._v("表示按十进制规则转换，")]),t._v(" "),a("p",[t._v("从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找（不管后面是否好友数字），把找到的当做数字返回。")]),t._v(" "),a("p",[t._v("如果字符串中以"),a("code",[t._v("0x")]),t._v("开头且后跟数字字符，就会将其当做一个十六进制整数。")]),t._v(" "),a("p",[t._v("如果字符串以"),a("code",[t._v('"0"')]),t._v("开头且后跟数字字符，则会被当做一个八进制数来解析。")]),t._v(" "),a("blockquote",[a("p",[t._v("如果不传第二个参数，会按照八进制解析。在大多数情况下，我们要解析的都是十进制数值，因此始终将10作为第二个参数是非常必要的。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12.5px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10 (16进制)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 15 (16进制)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"070"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 70")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"70"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 70")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"parsefloat-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsefloat-string"}},[t._v("#")]),t._v(" parseFloat(string)")]),t._v(" "),a("blockquote",[a("p",[t._v("解析一个参数（必要时先转换为字符串）并返回一个浮点数。默认解析十进制值。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circumference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circumference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.567")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expected output: 28.695307297889173")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circumference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4.567abcdefgh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expected output: 28.695307297889173")]),t._v("\n\n")])])]),a("ul",[a("li",[a("p",[t._v("从左到右依次解析字符，一直解析到字符串末尾，遇到非数字字符会或遇到第二个浮点数（在这之前的字符串都会被解析）会使解析停止,如"),a("code",[t._v('"3.14"')]),t._v("解析成"),a("code",[t._v("3.14")]),t._v("，"),a("code",[t._v('"3.14.1234"')]),t._v("解析成"),a("code",[t._v("3.14")])])]),t._v(" "),a("li",[a("p",[t._v("忽略参数首尾空白符")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-3.14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//-3.14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+3.14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0003.14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 3.14 "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.14abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.14.5678"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc3.14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n\n\n")])])]),a("p",[t._v("总结：")]),t._v(" "),a("p",[a("strong",[t._v("为什么"),a("code",[t._v("Number")]),t._v("和"),a("code",[t._v("parseInt/parseFloat")]),t._v("计算结果不一样呢？")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("Number")]),t._v("转换规则是浏览器底层渲染规则，是浏览器的一个非常重要的方法，"),a("code",[t._v("parseInt/parseFloat")]),t._v("是一个单独方法的规则，就是用来处理字符串的。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Number")]),t._v("走的是整个"),a("code",[t._v("V8")]),t._v("引擎最底层的机制，遇到其他类型，底层机制会告诉我们哪个类型跟哪个类型应该怎么转换，这是底层机制已经规定好的，比如遇到布尔值，"),a("code",[t._v("true")]),t._v("转为"),a("code",[t._v("1")]),t._v("，"),a("code",[t._v("false")]),t._v("转为"),a("code",[t._v("0")]),t._v(" "),a("code",[t._v("parseInt")]),t._v("和"),a("code",[t._v("parseFloat")]),t._v("是额外提供的方法，就是浏览器提供的方法，它们的源码处理机制很简单，会先把传入的参数转换为字符串，然后在从左到右查找数字有效字符。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);