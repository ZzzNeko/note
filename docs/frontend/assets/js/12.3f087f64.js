(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{378:function(v,_,t){"use strict";t.r(_);var l=t(25),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"v8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8"}},[v._v("#")]),v._v(" v8")]),v._v(" "),t("h2",{attrs:{id:"事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[v._v("#")]),v._v(" 事件循环")]),v._v(" "),t("p",[v._v("解决 js 单线程允许不阻塞的机制")]),v._v(" "),t("ul",[t("li",[v._v("同步任务在主线程执行")]),v._v(" "),t("li",[v._v("异步任务会添加到任务队列中")]),v._v(" "),t("li",[v._v("主线程中同步任务执行完后会读取任务队列")]),v._v(" "),t("li",[v._v("如此反复形成循环")])]),v._v(" "),t("p",[v._v("任务队列中的任务分为")]),v._v(" "),t("ul",[t("li",[v._v("宏任务：setTimeout postMessage MessageChannel UIrender")]),v._v(" "),t("li",[v._v("微任务：Promise MutationObserver")])]),v._v(" "),t("p",[v._v("当前执行栈执行完毕时优先处理微任务队列，再处理宏任务")]),v._v(" "),t("p",[v._v("注：事件冒泡优先级高于宏任务，低于微任务")]),v._v(" "),t("h2",{attrs:{id:"垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[v._v("#")]),v._v(" 垃圾回收")]),v._v(" "),t("p",[v._v("新生代")]),v._v(" "),t("ul",[t("li",[v._v("内存空间分为两部分：from 和 to")]),v._v(" "),t("li",[v._v("新分配对象进入 from 空间，from 空间占满时，执行 GC")]),v._v(" "),t("li",[v._v("遍历 from 中存活对象复制到 to 空间，复制完成后 from 与 to 空间互换")])]),v._v(" "),t("p",[v._v("老生代：新生代中执行一次 GC 存活和 to 空间大于 25%时，会对新生代对象转移进老生代")]),v._v(" "),t("ul",[t("li",[v._v("标记清除：当某空间没有分块、空间中对象超过限制不能保证新生代对象进入老生代时触发 GC\n"),t("ul",[t("li",[v._v("遍历堆中所有对象，标记存活对象，销毁未标记对象")]),v._v(" "),t("li",[v._v("标记清除会造成全停顿")]),v._v(" "),t("li",[v._v("2011 年，使用增量标记延缓全停顿的状态")]),v._v(" "),t("li",[v._v("2018 年，使用并发标记，在 GC 扫描和标记对象时允许 JS 执行")])])]),v._v(" "),t("li",[v._v("标记压缩：对象清除后会造成堆内存出现碎片的情况\n"),t("ul",[t("li",[v._v("将存活对象向一段移动，直到所有对象移动完成")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);