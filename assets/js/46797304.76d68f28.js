"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2882],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var a=o(7294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,s=function(e,t){if(null==e)return{};var o,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var i=a.createContext({}),d=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(o),c=s,h=u["".concat(i,".").concat(c)]||u[c]||p[c]||n;return o?a.createElement(h,r(r({ref:t},m),{},{components:o})):a.createElement(h,r({ref:t},m))}));function h(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,r=new Array(n);r[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,r[1]=l;for(var d=2;d<n;d++)r[d]=o[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3940:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=o(7462),s=(o(7294),o(3905));const n={sidebar_position:6},r="5.6 Built-in modules",l={unversionedId:"develop-guide/javascript/modules",id:"develop-guide/javascript/modules",title:"5.6 Built-in modules",description:"The WasmEdge QuickJS runtime supports ES6 and NPM modules for application developers. However, those approaches are too cumbersome for system developers. They need an easier way to add multiple JavaScript modules and APIs into the runtime without having to go through build tools like rollup.js. The WasmEdge QuickJS modules system allow developers to just drop JavaScript files into a modules folder, and have the JavaScript functions defined in the files immediately available to all JavaScript programs in the runtime. A good use case for this modules system is to support Node.js APIs in WasmEdge.",source:"@site/docs/develop-guide/javascript/modules.md",sourceDirName:"develop-guide/javascript",slug:"/develop-guide/javascript/modules",permalink:"/develop-guide/javascript/modules",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop-guide/javascript/modules.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"developSidebar",previous:{title:"5.5 ES6 Modules",permalink:"/develop-guide/javascript/es6"},next:{title:"5.7 NodeJS and NPM modules",permalink:"/develop-guide/javascript/npm"}},i={},d=[],m={toc:d};function u(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"56-built-in-modules"},"5.6 Built-in modules"),(0,s.kt)("p",null,"The WasmEdge QuickJS runtime supports ",(0,s.kt)("a",{parentName:"p",href:"es6"},"ES6")," and ",(0,s.kt)("a",{parentName:"p",href:"npm"},"NPM")," modules for application developers. However, those approaches are too cumbersome for system developers. They need an easier way to add multiple JavaScript modules and APIs into the runtime without having to go through build tools like rollup.js. The WasmEdge QuickJS modules system allow developers to just drop JavaScript files into a ",(0,s.kt)("inlineCode",{parentName:"p"},"modules")," folder, and have the JavaScript functions defined in the files immediately available to all JavaScript programs in the runtime. A good use case for this modules system is to support ",(0,s.kt)("a",{parentName:"p",href:"nodejs"},"Node.js")," APIs in WasmEdge."),(0,s.kt)("p",null,"In this article, we will use the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/modules"},"wasmedge-quickjs/modules")," as an example to showcase how to import NodeJS API or a third-party modules."),(0,s.kt)("p",null,"Before we started, you also need "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../build-and-run/install"},"WasmEdge installed")),(0,s.kt)("li",{parentName:"ul"},"Download the WasmEdge QuickJS Runtime",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs.wasm")," to download ")))),(0,s.kt)("p",null,"Then, git clone of fork ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"the example repo"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/wasmedge-quickjs.git\n")),(0,s.kt)("p",null,"The module system is just a collection of JavaScript files in the ",(0,s.kt)("inlineCode",{parentName:"p"},"modules")," directory in the WasmEdge QuickJS distribution. To use the JavaScript functions and APIs defined in those modules, you just need to map this directory to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/modules")," directory inside the WasmEdge Runtime instance. The following example shows how to do this on the WasmEdge CLI. You can do this with any of the host language SDKs that support embedded use of WasmEdge."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls modules\n\n    buffer.js encoding.js events.js http.js\n    ... JavaScript files for the modules ...\n\n$ wasmedge --dir .:. target/wasm32-wasi/release/wasmedge_quickjs.wasm example_js/hello.js WasmEdge Runtime\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/module_demo"},"module_demo")," shows how you can use the modules system to add your own JavaScript APIs. To run the demo, first copy the two files in the demo's ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/module_demo/modules"},"modules")," directory to your WasmEdge QuickJS's ",(0,s.kt)("inlineCode",{parentName:"p"},"modules")," directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cp example_js/module_demo/modules/* modules/\n")),(0,s.kt)("p",null,"The two JavaScript files in the ",(0,s.kt)("inlineCode",{parentName:"p"},"modules")," directory provide two simple functions. Below is the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/module_demo/modules/my_mod_1.js"},"modules/my_mod_1.js")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"export function hello_mod_1(){\n  console.log('hello from \"my_mod_1.js\"')\n}\n")),(0,s.kt)("p",null,"And the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/module_demo/modules/my_mod_2.js"},"modules/my_mod_2.js")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"export function hello_mod_2(){\n  console.log('hello from \"my_mod_2.js\"')\n}\n")),(0,s.kt)("p",null,"Then, just run the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/module_demo/demo.js"},"demo.js")," file to call the two exported functions from the modules."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { hello_mod_1 } from 'my_mod_1'\nimport { hello_mod_2 } from 'my_mod_2'\n\nhello_mod_1()\nhello_mod_2()\n")),(0,s.kt)("p",null,"Here is the command to run the demo and the output."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ wasmedge --dir .:. target/wasm32-wasi/release/wasmedge_quickjs.wasm example_js/module_demo/demo.js\n\nhello from "my_mod_1.js"\nhello from "my_mod_2.js"\n')),(0,s.kt)("p",null,"Following the above tutorials, you can easily add third-party JavaScript functions and APIs into your WasmEdge QuickJS runtime."),(0,s.kt)("p",null," For the official distribution, we included JavaScript files to support ",(0,s.kt)("a",{parentName:"p",href:"nodejs"},"Node.js APIs"),". You can use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/modules"},"those files")," as further examples."))}u.isMDXComponent=!0}}]);