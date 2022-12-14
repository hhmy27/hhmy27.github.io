"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{6228:function(t,e,r){var n=r(7997),a=r(1664),l=r(8670),i=r.n(l),o=r(5520);e.Z=function(t){var e,r=t.post;return(0,n.tZ)(a.default,{href:"".concat(i().path,"/").concat(r.slug),children:(0,n.tZ)("a",{children:(0,n.BX)("article",{className:"mb-6 md:mb-8",children:[(0,n.BX)("header",{className:"flex flex-col justify-between md:flex-row md:items-baseline",children:[(0,n.BX)("h2",{className:"text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100",children:[r.pageIcon," ",r.title]}),(0,n.tZ)("time",{className:"flex-shrink-0 text-gray-600 dark:text-gray-400",children:(0,o.Z)((null===r||void 0===r||null===(e=r.date)||void 0===e?void 0:e.start_date)||r.createdTime,i().lang)})]}),(0,n.tZ)("main",{children:(0,n.tZ)("p",{className:"hidden md:block leading-8 text-gray-700 dark:text-gray-300",children:r.summary})})]},r.id)})})}},6407:function(t,e,r){r.d(e,{Z:function(){return x}});var n=r(7997),a=r(1720),l=r(1664),i=r(8670),o=r.n(i),c=r(4873);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,l=[],i=!0,o=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(l.push(n.value),!e||l.length!==e);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(){var t=(0,c.b)(),e=[{id:1,name:t.NAV.ABOUT,to:"/about",show:o().showAbout},{id:3,name:t.NAV.SEARCH,to:"/search",show:!0}];return(0,n.tZ)("div",{className:"flex-shrink-0",children:(0,n.tZ)("ul",{className:"flex flex-row",children:e.map((function(t){return t.show&&(0,n.tZ)("li",{className:"block ml-4 text-black dark:text-gray-50 nav",children:(0,n.tZ)(l.default,{href:t.to,children:(0,n.tZ)("a",{children:t.name})})},t.id)}))})})},m=function(t){var e=t.navBarTitle,r=t.fullWidth,i=!o().autoCollapsedNavBar,c=(0,a.useRef)(null),s=(0,a.useRef)([]),m=function(t){var e,r,n,a=d(t,1)[0];c&&c.current&&i?a.isIntersecting||void 0===a?null===(e=c.current)||void 0===e||e.classList.remove("sticky-nav-full"):null===(r=c.current)||void 0===r||r.classList.add("sticky-nav-full"):null===(n=c.current)||void 0===n||n.classList.add("remove-sticky")};return(0,a.useEffect)((function(){new window.IntersectionObserver(m).observe(s.current)}),[s]),(0,n.BX)(n.HY,{children:[(0,n.tZ)("div",{className:"observer-element h-4 md:h-12",ref:s}),(0,n.BX)("div",{className:"sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ".concat(r?"px-4 md:px-24":"max-w-3xl px-4"),id:"sticky-nav",ref:c,children:[(0,n.BX)("div",{className:"flex items-center",children:[(0,n.tZ)(l.default,{href:"/",children:(0,n.tZ)("a",{"aria-label":o().title,children:(0,n.tZ)("div",{className:"h-6",children:(0,n.BX)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.tZ)("circle",{cx:"14",cy:"14",r:"14",className:"fill-current text-black dark:text-white"}),(0,n.tZ)("circle",{cx:"14",cy:"14",r:"14",fill:"url(#paint0_radial)"}),(0,n.tZ)("circle",{cx:"8",cy:"8",r:"1.5",fill:"white"}),(0,n.tZ)("defs",{children:(0,n.BX)("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"rotate(45) scale(39.598)",children:[(0,n.tZ)("stop",{stopColor:"#3399FF",stopOpacity:"0.9"}),(0,n.tZ)("stop",{offset:"1",stopColor:"#FF3399",stopOpacity:"0.6"})]})})]})})})}),e?(0,n.tZ)("p",{className:"ml-2 font-medium text-day dark:text-night header-name",children:e}):(0,n.BX)("p",{className:"ml-2 font-medium text-day dark:text-night header-name",children:[o().title," ","     ",(0,n.tZ)("span",{className:"font-thin text-sm",children:o().description})]})]}),(0,n.tZ)(u,{})]})]})},f=function(){return(0,n.BX)("p",{children:["powered by ",(0,n.tZ)("a",{href:"https://github.com/craigary/nobelium",children:(0,n.tZ)("u",{children:"nobelium"})})]})},h=function(t){var e=t.fullWidth,r=(new Date).getFullYear(),a=+o().since;return(0,n.BX)("div",{className:"mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ".concat(e?"px-4 md:px-24":"max-w-3xl px-4"),children:[(0,n.tZ)("hr",{className:"border-gray-200 dark:border-gray-600"}),(0,n.tZ)("div",{className:"my-4 text-sm leading-6",children:(0,n.BX)("div",{className:"flex align-baseline justify-between flex-wrap",children:[(0,n.BX)("p",{children:["\xa9 ",o().author," ",a!==r&&a?"".concat(a," - ").concat(r):r]}),(0,n.tZ)(f,{})]})})]})},p=r(9008),y=r(5697);function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var v=function(t){var e=t.children,r=t.layout,a=t.fullWidth,l=b(t,["children","layout","fullWidth"]),i=o().path.length?"".concat(o().link,"/").concat(o().path):o().link,c=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){g(t,e,r[e])}))}return t}({title:o().title,type:"website"},l);return(0,n.BX)("div",{children:[(0,n.BX)(p.default,{children:[(0,n.tZ)("title",{children:c.title}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{charSet:"UTF-8"}),o().seo.googleSiteVerification&&(0,n.tZ)("meta",{name:"google-site-verification",content:o().seo.googleSiteVerification}),o().seo.keywords&&(0,n.tZ)("meta",{name:"keywords",content:o().seo.keywords.join(", ")}),(0,n.tZ)("meta",{name:"description",content:c.description}),(0,n.tZ)("meta",{property:"og:locale",content:o().lang}),(0,n.tZ)("meta",{property:"og:title",content:c.title}),(0,n.tZ)("meta",{property:"og:description",content:c.description}),(0,n.tZ)("meta",{property:"og:url",content:c.slug?"".concat(i,"/").concat(c.slug):i}),(0,n.tZ)("meta",{property:"og:image",content:"".concat(o().ogImageGenerateURL,"/").concat(encodeURIComponent(c.title),".png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg")}),(0,n.tZ)("meta",{property:"og:type",content:c.type}),(0,n.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.tZ)("meta",{name:"twitter:description",content:c.description}),(0,n.tZ)("meta",{name:"twitter:title",content:c.title}),(0,n.tZ)("meta",{name:"twitter:image",content:"".concat(o().ogImageGenerateURL,"/").concat(encodeURIComponent(c.title),".png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg")}),"article"===c.type&&(0,n.BX)(n.HY,{children:[(0,n.tZ)("meta",{property:"article:published_time",content:c.date||c.createdTime}),(0,n.tZ)("meta",{property:"article:author",content:o().author})]})]}),(0,n.BX)("div",{className:"wrapper ".concat("serif"===o().font?"font-serif":"font-sans"),children:[(0,n.tZ)(m,{navBarTitle:"blog"===r?c.title:null,fullWidth:a}),(0,n.tZ)("main",{className:"m-auto flex-grow w-full transition-all ".concat(a?"px-4 md:px-24":"max-w-3xl px-4"),children:e}),(0,n.tZ)(h,{fullWidth:a})]})]})};v.propTypes={children:r.n(y)().node};var x=v},5520:function(t,e,r){function n(t,e){var r=new Date(t).toLocaleDateString(e,{year:"numeric",month:"short",day:"numeric"});return"zh"===e.slice(0,2).toLowerCase()?r.replace("\u5e74"," \u5e74 ").replace("\u6708"," \u6708 ").replace("\u65e5"," \u65e5"):r}r.d(e,{Z:function(){return n}})}}]);