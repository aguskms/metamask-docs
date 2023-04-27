"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[3414],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,y=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return t?r.createElement(y,s(s({ref:n},p),{},{components:t})):r.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={description:"Learn about the lifecycle of a snap."},s="Snap lifecycle",c={unversionedId:"concepts/lifecycle",id:"concepts/lifecycle",title:"Snap lifecycle",description:"Learn about the lifecycle of a snap.",source:"@site/snaps/concepts/lifecycle.md",sourceDirName:"concepts",slug:"/concepts/lifecycle",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/snaps/concepts/lifecycle",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about the lifecycle of a snap."},sidebar:"snapsSidebar",previous:{title:"Snap anatomy",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/snaps/concepts/anatomy"},next:{title:"Snap user interface",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/snaps/concepts/user-interface"}},i={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snap-lifecycle"},"Snap lifecycle"),(0,a.kt)("p",null,"Just like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"},"service workers")," or\nAWS lambda functions, snaps are designed to wake up in response to messages/events, and shut down\nwhen idle.\nSnaps have an ephemeral lifecycle: they're here one moment, gone the next.\nAlso, if MetaMask detects that a snap becomes unresponsive, it shuts the snap down.\nThis doesn't mean that you can't create long-running snaps, but it does mean that your snaps must\nhandle being shut down, especially when they're not within the JSON-RPC request/response cycle."),(0,a.kt)("p",null,"A snap is considered unresponsive if:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It hasn't received a JSON-RPC request for 30 seconds."),(0,a.kt)("li",{parentName:"ol"},"It takes more than 60 seconds to process a JSON-RPC request.")),(0,a.kt)("p",null,"Stopped snaps start whenever they receive a JSON-RPC request, unless they're disabled.\nIf a snap is disabled, the user must re-enable it before it can start again."))}u.isMDXComponent=!0}}]);