"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[8360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"Introduction"},o="Integrate with the MetaMask wallet",s={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with the MetaMask wallet using the",source:"@site/wallet/index.md",sourceDirName:".",slug:"/",permalink:"/design-guidelines/wallet/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"Get started",permalink:"/design-guidelines/wallet/category/get-started"}},l={},u=[{value:"What is the MetaMask Ethereum provider API?",id:"what-is-the-metamask-ethereum-provider-api",level:2},{value:"What is MetaMask SDK?",id:"what-is-metamask-sdk",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-with-the-metamask-wallet"},"Integrate with the MetaMask wallet"),(0,r.kt)("p",null,"Integrate your dapp with the MetaMask wallet using the\n",(0,r.kt)("a",{parentName:"p",href:"/design-guidelines/wallet/reference/provider-api"},"MetaMask Ethereum provider API"),", which enables your dapp to interact\nwith its users' Ethereum accounts.\nWe recommend using ",(0,r.kt)("a",{parentName:"p",href:"how-to/use-sdk"},"MetaMask SDK")," to easily enable your users to connect to their\nMetaMask wallet client from any platform."),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("a",{parentName:"p",href:"/design-guidelines/wallet/get-started/set-up-dev-environment"},"setting up your development environment"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This documentation assumes intermediate knowledge of JavaScript, HTML, and CSS."),(0,r.kt)("li",{parentName:"ul"},"To learn how to extend the functionality of MetaMask, visit the\n",(0,r.kt)("a",{parentName:"li",href:"../snaps"},"MetaMask Snaps developer documentation"),"."))),(0,r.kt)("h2",{id:"what-is-the-metamask-ethereum-provider-api"},"What is the MetaMask Ethereum provider API?"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/design-guidelines/wallet/reference/provider-api"},"MetaMask Ethereum provider API")," is a JavaScript API that MetaMask\ninjects into websites visited by MetaMask users.\nYour dapp can use this API to request users' Ethereum accounts, read data from blockchains the user\nis connected to, and suggest that the user sign messages and transactions."),(0,r.kt)("h2",{id:"what-is-metamask-sdk"},"What is MetaMask SDK?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/design-guidelines/wallet/how-to/use-sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\n",(0,r.kt)("a",{parentName:"p",href:"/design-guidelines/wallet/concepts/sdk-connections"},"connection")," from your dapp to the MetaMask browser extension and\nMetaMask Mobile.\nYou can install the SDK into your dapp to enable your users to easily connect to a MetaMask wallet\nclient from multiple platforms (web, desktop, and mobile)."),(0,r.kt)("p",null,"For example, for dapps running on a desktop browser, MetaMask SDK checks if the MetaMask extension\nis installed.\nIf MetaMask isn't installed, the SDK prompts the user to install it or connect to their MetaMask\nMobile wallet using a QR code.\nFor dapps running on a mobile browser, MetaMask SDK automatically deeplinks to the user's MetaMask\nMobile wallet to make the connection."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"ConsenSys Discord"),"."))}c.isMDXComponent=!0}}]);