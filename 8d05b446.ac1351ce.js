(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(0),n(171)),i={id:"geometry",title:"Geometry"},c={id:"algorithms/geometry",title:"Geometry",description:"Notes",source:"@site/../contents/algorithms/geometry.md",permalink:"/tech-interview-handbook/algorithms/geometry",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/geometry.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Dynamic Programming",permalink:"/tech-interview-handbook/algorithms/dynamic-programming"},next:{title:"Graph",permalink:"/tech-interview-handbook/algorithms/graph"}},l=[{value:"Notes",id:"notes",children:[]},{value:"Sample questions",id:"sample-questions",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"notes"},"Notes"),Object(a.b)("p",null,"When comparing euclidean distance between two pairs of points, using dx",Object(a.b)("sup",null,"2")," + dy",Object(a.b)("sup",null,"2")," is sufficient. It is unnecessary to square root the value."),Object(a.b)("p",null,"To find out if two circles overlap, check that the distance between the two centers of the circles is less than the sum of their radii."),Object(a.b)("h2",{id:"sample-questions"},"Sample questions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have a plane with lots of rectangles on it, find out how many of them intersect."),Object(a.b)("li",{parentName:"ul"},"Which data structure would you use to query the k-nearest points of a set on a 2D plane?"),Object(a.b)("li",{parentName:"ul"},"Given many points, find k points that are closest to the origin."),Object(a.b)("li",{parentName:"ul"},"How would you triangulate a polygon?")))}s.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(d,c({ref:t},u,{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);