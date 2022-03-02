"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[9253],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(2784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5499:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7896),s=n(1461),a=(n(2784),n(876)),o=["components"],l={id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",sidebar_label:"Adding CSS Modules"},i=void 0,c={unversionedId:"adding-a-css-modules-stylesheet",id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",description:"Note: this feature is available with react-scripts@2.0.0 and higher.",source:"@site/../docs/adding-a-css-modules-stylesheet.md",sourceDirName:".",slug:"/adding-a-css-modules-stylesheet",permalink:"/docs/adding-a-css-modules-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-a-css-modules-stylesheet.md",tags:[],version:"current",lastUpdatedBy:"Hardo",lastUpdatedAt:1546615104,formattedLastUpdatedAt:"1/4/2019",frontMatter:{id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",sidebar_label:"Adding CSS Modules"},sidebar:"docs",previous:{title:"Adding Stylesheets",permalink:"/docs/adding-a-stylesheet"},next:{title:"Adding Sass Stylesheets",permalink:"/docs/adding-a-sass-stylesheet"}},u=[{value:"<code>Button.module.css</code>",id:"buttonmodulecss",children:[],level:2},{value:"<code>another-stylesheet.css</code>",id:"another-stylesheetcss",children:[],level:2},{value:"<code>Button.js</code>",id:"buttonjs",children:[],level:2},{value:"Result",id:"result",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),(0,a.kt)("p",null,"This project supports ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," alongside regular stylesheets using the ",(0,a.kt)("inlineCode",{parentName:"p"},"[name].module.css")," file naming convention. CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format ",(0,a.kt)("inlineCode",{parentName:"p"},"[filename]\\_[classname]\\_\\_[hash]"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," Should you want to preprocess a stylesheet with Sass then make sure to ",(0,a.kt)("a",{parentName:"p",href:"/docs/adding-a-sass-stylesheet"},"follow the installation instructions")," and then change the stylesheet file extension as follows: ",(0,a.kt)("inlineCode",{parentName:"p"},"[name].module.scss")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"[name].module.sass"),".")),(0,a.kt)("p",null,"CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules ",(0,a.kt)("a",{parentName:"p",href:"https://css-tricks.com/css-modules-part-1-need/"},"here"),"."),(0,a.kt)("h2",{id:"buttonmodulecss"},(0,a.kt)("inlineCode",{parentName:"h2"},"Button.module.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".error {\n  background-color: red;\n}\n")),(0,a.kt)("h2",{id:"another-stylesheetcss"},(0,a.kt)("inlineCode",{parentName:"h2"},"another-stylesheet.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".error {\n  color: red;\n}\n")),(0,a.kt)("h2",{id:"buttonjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Button.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport styles from './Button.module.css'; // Import css modules stylesheet as styles\nimport './another-stylesheet.css'; // Import regular stylesheet\n\nclass Button extends Component {\n  render() {\n    // reference as a js object\n    return <button className={styles.error}>Error Button</button>;\n  }\n}\n")),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("p",null,"No clashes from other ",(0,a.kt)("inlineCode",{parentName:"p"},".error")," class names"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This button has red background but not red text --\x3e\n<button class="Button_error_ax7yz">Error Button</button>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This is an optional feature.")," Regular ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," stylesheets and CSS files are fully supported. CSS Modules are turned on for files ending with the ",(0,a.kt)("inlineCode",{parentName:"p"},".module.css")," extension."))}p.isMDXComponent=!0}}]);