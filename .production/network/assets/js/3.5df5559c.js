(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{329:function(t,n,e){"use strict";var r=e(0),i=e(31).find,o=e(105),a=e(19),u=!0,c=a("find");"find"in[]&&Array(1).find((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},332:function(t,n,e){},357:function(t,n,e){"use strict";var r=e(0),i=e(31).findIndex,o=e(105),a=e(19),u=!0,c=a("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!c},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},358:function(t,n,e){e(26),e(177),e(104),e(69),e(178);var r=e(359),i=e(362);function o(t){return"object"===i(t)&&null!==t}function a(t){if(o(t)){if(Array.isArray(t))return t.map(a);var n={};for(var e in t)n[e]=a(t[e]);return n}return t}t.exports={isObject:o,copy:a,exclude:function(t,n){if("object"!==i(n)||!n)return n;var e=a(n);if(Array.isArray(n))return e.filter((function(n){return!t.includes(n)}));var o,u=r(t);try{for(u.s();!(o=u.n()).done;){var c=o.value;e[c]&&(e[c]=void 0)}}catch(t){u.e(t)}finally{u.f()}return e}}},359:function(t,n,e){e(47),e(48),e(71),e(104),e(9),e(27),e(33);var r=e(360);t.exports=function(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=r(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}},360:function(t,n,e){e(114),e(32),e(115),e(75),e(9),e(106),e(27);var r=e(361);t.exports=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},361:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},362:function(t,n,e){function r(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(n)}e(47),e(48),e(71),e(9),e(27),e(33),t.exports=r},363:function(t,n,e){"use strict";var r=e(332);e.n(r).a},370:function(t,n,e){"use strict";e.r(n);e(108),e(26),e(329),e(357),e(177),e(69),e(32),e(186),e(178);var r=e(103),i=e(44),o=Math.PI,a=2*o,u=a-1e-6;function c(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new c}c.prototype=s.prototype={constructor:c,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var a=this._x1,u=this._y1,c=e-t,s=r-n,h=a-t,l=u-n,f=h*h+l*l;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(f>1e-6)if(Math.abs(l*c-s*h)>1e-6&&i){var d=e-a,p=r-u,v=c*c+s*s,y=d*d+p*p,_=Math.sqrt(v),x=Math.sqrt(f),g=i*Math.tan((o-Math.acos((v+f-y)/(2*_*x)))/2),m=g/x,b=g/_;Math.abs(m-1)>1e-6&&(this._+="L"+(t+m*h)+","+(n+m*l)),this._+="A"+i+","+i+",0,0,"+ +(l*d>h*p)+","+(this._x1=t+b*c)+","+(this._y1=n+b*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,c){t=+t,n=+n,c=!!c;var s=(e=+e)*Math.cos(r),h=e*Math.sin(r),l=t+s,f=n+h,d=1^c,p=c?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+l+","+f:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+l+","+f),e&&(p<0&&(p=p%a+a),p>u?this._+="A"+e+","+e+",0,1,"+d+","+(t-s)+","+(n-h)+"A"+e+","+e+",0,1,"+d+","+(this._x1=l)+","+(this._y1=f):p>1e-6&&(this._+="A"+e+","+e+",0,"+ +(p>=o)+","+d+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var h=s,l=Array.prototype.slice,f=function(t){return function(){return t}};function d(t){return t[0]}function p(t){return t[1]}function v(t){return t.source}function y(t){return t.target}function _(t){var n=v,e=y,r=d,i=p,o=null;function a(){var a,u=l.call(arguments),c=n.apply(this,u),s=e.apply(this,u);if(o||(o=a=h()),t(o,+r.apply(this,(u[0]=c,u)),+i.apply(this,u),+r.apply(this,(u[0]=s,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:f(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:f(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function x(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function g(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function m(t,n){t instanceof Map?(t=[void 0,t],void 0===n&&(n=A)):void 0===n&&(n=b);for(var e,r,i,o,a,u=new M(t),c=[u];e=c.pop();)if((i=n(e.data))&&(a=(i=Array.from(i)).length))for(e.children=i,o=a-1;o>=0;--o)c.push(r=i[o]=new M(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(z)}function b(t){return t.children}function A(t){return Array.isArray(t)?t[1]:null}function w(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function z(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function M(t){this.data=t,this.depth=this.height=0,this.parent=null}function S(t,n){return t.parent===n.parent?1:2}function T(t){var n=t.children;return n?n[0]:t.t}function L(t){var n=t.children;return n?n[n.length-1]:t.t}function k(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function V(t,n,e){return t.a.parent===n.parent?t.a:e}function j(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}M.prototype=m.prototype={constructor:M,count:function(){return this.eachAfter(g)},each:function(t,n){let e=-1;for(const r of this)t.call(n,r,++e,this);return this},eachAfter:function(t,n){for(var e,r,i,o=this,a=[o],u=[],c=-1;o=a.pop();)if(u.push(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r]);for(;o=u.pop();)t.call(n,o,++c,this);return this},eachBefore:function(t,n){for(var e,r,i=this,o=[i],a=-1;i=o.pop();)if(t.call(n,i,++a,this),e=i.children)for(r=e.length-1;r>=0;--r)o.push(e[r]);return this},find:function(t,n){let e=-1;for(const r of this)if(t.call(n,r,++e,this))return r},sum:function(t){return this.eachAfter((function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e}))},sort:function(t){return this.eachBefore((function(n){n.children&&n.children.sort(t)}))},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;t=e.pop(),n=r.pop();for(;t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore((function(n){n.children||t.push(n)})),t},links:function(){var t=this,n=[];return t.each((function(e){e!==t&&n.push({source:e.parent,target:e})})),n},copy:function(){return m(this).eachBefore(w)},[Symbol.iterator]:function*(){var t,n,e,r,i=this,o=[i];do{for(t=o.reverse(),o=[];i=t.pop();)if(yield i,n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e])}while(o.length)}},j.prototype=Object.create(M.prototype);var C=function(){var t=S,n=1,e=1,r=null;function i(i){var c=function(t){for(var n,e,r,i,o,a=new j(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new j(r[i],i)),e.parent=n;return(a.parent=new j(null,0)).children=[a],a}(i);if(c.eachAfter(o),c.parent.m=-c.z,c.eachBefore(a),r)i.eachBefore(u);else{var s=i,h=i,l=i;i.eachBefore((function(t){t.x<s.x&&(s=t),t.x>h.x&&(h=t),t.depth>l.depth&&(l=t)}));var f=s===h?1:t(s,h)/2,d=f-s.x,p=n/(h.x+f+d),v=e/(l.depth||1);i.eachBefore((function(t){t.x=(t.x+d)*p,t.y=t.depth*v}))}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null;if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n);var o=(e[0].z+e[e.length-1].z)/2;i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._));n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,c=o.parent.children[0],s=o.m,h=a.m,l=u.m,f=c.m;u=L(u),o=T(o),u&&o;)c=T(c),(a=L(a)).a=n,(i=u.z+l-o.z-s+t(u._,o._))>0&&(k(V(u,n,r),n,i),s+=i,h+=i),l+=u.m,s+=o.m,f+=c.m,h+=a.m;u&&!L(a)&&(a.t=u,a.m+=l-h),o&&!T(c)&&(c.t=o,c.m+=s-f,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i};function I(t,n){return t.parent===n.parent?1:2}function B(t,n){return t+n.x}function O(t,n){return Math.max(t,n.y)}var N=function(){var t=I,n=1,e=1,r=!1;function i(i){var o,a=0;i.eachAfter((function(n){var e=n.children;e?(n.x=function(t){return t.reduce(B,0)/t.length}(e),n.y=function(t){return 1+t.reduce(O,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)}));var u=function(t){for(var n;n=t.children;)t=n[0];return t}(i),c=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(i),s=u.x-t(u,c)/2,h=c.x+t(c,u)/2;return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-s)/(h-s)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},$=e(358),W=e.n($);function E(t){for(var n=W.a.copy(t),e=n.map((function(t){return t.path})),o=function(t){var i=n[t],o=e.findIndex((function(t){if(i.path!==t&&i.path.includes(t)){var n=function(t,n){for(var e=Math.min(t.length,n.length),r=0;r<e;r++)if(t[r]!=n[r])return[t.slice(r),n.slice(r)];return["",""]}(t,i.path),e=Object(r.a)(n,2),o=e[0],a=e[1];if(""==o&&!a.includes("/"))return!0}})),a=n[o];a&&(a.children?a.children.push(i):a.children=[i])},a=0;a<n.length;a++)o(a);for(var u=n.find((function(t){return"/"==t.path})),c=Object(i.a)(u.children),s=function(){var t=c.shift();t.children?c.push.apply(c,Object(i.a)(t.children)):t.children=t.headers.map((function(n){return n.level>2?null:{title:n.title,level:n.level,path:"".concat(t.path,"#").concat(n.slug)}})).filter((function(t){return null!=t}))};c.length;)s();return u}var q={props:{nodeSize:{type:Number,default:6},isVertical:{type:Boolean,default:!1},convertType:{type:String,default:"tree",validate:function(t){return/^tree|cluster$/.test(t)}}},data:function(){return{treeWidth:720,treeNode:null,rate:30,links:[],nodes:[]}},computed:{treeHeight:function(){return this.treeNode?this.isVertical?this.treeNode.height*this.rate:this.treeNode.leaves().length*this.rate:0},convertFn:function(){return"tree"===this.convertType?C():"cluster"===this.convertType?N():void 0},generateLink:function(){var t=this;return _(x).x((function(n){return(t.isVertical?n.x:n.y)*t.treeWidth})).y((function(n){return(t.isVertical?n.y:n.x)*t.treeWidth}))}},methods:{renderTree:function(t){var n=this;this.links=t.links().map(this.generateLink),this.nodes=t.descendants().map((function(t){var e=(n.isVertical?t.x:t.y)*n.treeWidth,r=(n.isVertical?t.y:t.x)*n.treeWidth;return t.data.translate="translate(".concat(e,", ").concat(r,")"),t.data.isLeaf=!t.children,t}))},toggleState:function(t){window.node=t,t.data.isLeaf&&!t._children||(t._children?(t.children=t._children,delete t._children):(t._children=t.children,delete t.children),this.renderTree(this.treeNode))},routerTo:function(t){this.$route.path==t.data.path||this.$router.push(t.data.path)}},mounted:function(){var t=this.$site,n=t.title,e=E(t.pages);e.title=n;var r=this.convertFn(m(e));this.treeNode=r,this.renderTree(r)}},F=(e(363),e(25)),H=Object(F.a)(q,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"tree-chart",attrs:{width:"100%",height:t.treeHeight}},[e("g",[e("g",t._l(t.links,(function(t,n){return e("path",{key:t,staticClass:"node-link",attrs:{d:t}})})),0),e("g",t._l(t.nodes,(function(n,r){return e("g",{key:n.data.translate,staticClass:"tree-node",attrs:{transform:n.data.translate}},[e("circle",{staticClass:"node-dot",class:{"-leaf":n.data.isLeaf,"-closed":n._children},attrs:{r:t.nodeSize},on:{click:function(e){return t.toggleState(n)}}}),e("text",{staticClass:"node-text -fill",attrs:{dy:t.isVertical?n.data.isLeaf?30:-15:5,x:t.isVertical?0:n.data.isLeaf?12:-12,"text-anchor":t.isVertical?"middle":n.data.isLeaf?"start":"end"}},[t._v(t._s(n.data.title))]),e("text",{staticClass:"node-text",attrs:{dy:t.isVertical?n.data.isLeaf?30:-15:5,x:t.isVertical?0:n.data.isLeaf?12:-12,"text-anchor":t.isVertical?"middle":n.data.isLeaf?"start":"end"},on:{click:function(e){return t.routerTo(n)}}},[t._v(t._s(n.data.title))])])})),0)])])}),[],!1,null,"113f957b",null);n.default=H.exports}}]);