(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{507:function(e,t,s){"use strict";s.r(t);var a=s(0),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("本文不会介绍 Git 的基本操作，会对一些高级操作进行说明。")]),e._v(" "),s("h2",{attrs:{id:"rebase-合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rebase-合并"}},[e._v("#")]),e._v(" Rebase 合并")]),e._v(" "),s("p",[e._v("该命令可以让和 "),s("code",[e._v("merge")]),e._v(" 命令得到的结果基本是一致的。")]),e._v(" "),s("p",[e._v("通常使用 "),s("code",[e._v("merge")]),e._v(" 操作将分支上的代码合并到 "),s("code",[e._v("master")]),e._v(" 中，分支样子如下所示")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f109db27be054?w=505&h=461&f=png&s=22796",alt:""}})]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("rebase")]),e._v(" 后，会将 "),s("code",[e._v("develop")]),e._v(" 上的 "),s("code",[e._v("commit")]),e._v(" 按顺序移到 "),s("code",[e._v("master")]),e._v(" 的第三个 "),s("code",[e._v("commit")]),e._v(" 后面，分支样子如下所示")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f11cc2cb8b332?w=505&h=563&f=png&s=26514",alt:""}})]),e._v(" "),s("p",[e._v("Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 merge 出现冲突只需要解决一次。")]),e._v(" "),s("p",[e._v("使用 rebase 应该在需要被 rebase 的分支上操作，并且该分支是本地分支。如果 "),s("code",[e._v("develop")]),e._v(" 分支需要 rebase 到 "),s("code",[e._v("master")]),e._v(" 上去，那么应该如下操作")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("## branch develop\ngit rebase master\ngit checkout master\n## 用于将 `master` 上的 HEAD 移动到最新的 commit\ngit merge develop\n")])])]),s("h2",{attrs:{id:"stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[e._v("#")]),e._v(" stash")]),e._v(" "),s("p",[s("code",[e._v("stash")]),e._v(" 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 "),s("code",[e._v("commit")]),e._v(" 的话，就可以使用该命令。")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git stash\n")])])]),s("p",[e._v("使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git stash pop\n")])])]),s("p",[e._v("这样你之前临时保存的代码又回来了")]),e._v(" "),s("h2",{attrs:{id:"reflog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reflog"}},[e._v("#")]),e._v(" reflog")]),e._v(" "),s("p",[s("code",[e._v("reflog")]),e._v(" 可以看到 HEAD 的移动记录，假如之前误删了一个分支，可以通过 "),s("code",[e._v("git reflog")]),e._v(" 看到移动 HEAD 的哈希值")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f14df98ce3d83?w=950&h=118&f=png&s=77151",alt:""}})]),e._v(" "),s("p",[e._v("从图中可以看出，HEAD 的最后一次移动行为是 "),s("code",[e._v("merge")]),e._v(" 后，接下来分支 "),s("code",[e._v("new")]),e._v(" 就被删除了，那么我们可以通过以下命令找回 "),s("code",[e._v("new")]),e._v(" 分支")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git checkout 37d9aca\ngit checkout -b new\n")])])]),s("p",[e._v("PS："),s("code",[e._v("reflog")]),e._v(" 记录是时效的，只会保存一段时间内的记录。")]),e._v(" "),s("h2",{attrs:{id:"reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[e._v("#")]),e._v(" Reset")]),e._v(" "),s("p",[e._v("如果你想删除刚写的 commit，就可以通过以下命令实现")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git reset --hard HEAD^\n")])])]),s("p",[e._v("但是 "),s("code",[e._v("reset")]),e._v(" 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。")])])}),[],!1,null,null,null);t.default=v.exports}}]);