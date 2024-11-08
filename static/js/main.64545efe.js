/*! For license information please see main.64545efe.js.LICENSE.txt */
(()=>{var e={604:(e,t,r)=>{"use strict";r.d(t,{X9:()=>m,_O:()=>w,Ie:()=>b});const n=r.p+"static/media/phone-icon.c68a3d1fc69d48e2dc0c.png",A=r.p+"static/media/email-icon.f9c2b2c1b21e9f9c7574.png",o=r.p+"static/media/location-icon.14f84d046ea2df4696c8.png",i=r.p+"static/media/site-icon.5ca05ce57b7fd5176f64.png";var a=r(432),s=r(464),l=r(579);const{DEFAULT_SKILLS:c,DEFAULT_EXPERIENCES:u,DEFAULT_EDUCATION:d}=r(688),f=s.Ay.header`
  background-color: ${e=>e.header_bg};
  color: ${e=>e.header_text_color};
`,h=()=>(0,l.jsx)("div",{className:"absolute z-10 w-1 h-1 p-1 bg-white border rounded-full -bottom-1",style:{right:"-0.35rem"}}),p=e=>{let{src:t,alt:r}=e;return(0,l.jsx)("img",{src:t,alt:r,className:"inline-block w-5 h-5"})},g=e=>{let{title:t}=e;return(0,l.jsx)("h3",{className:"text-xl leading-3 uppercase mb-7",children:t})},m=e=>{let{position:t,company:r,date:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{className:"mb-1 font-bold uppercase",children:t}),(0,l.jsx)("div",{className:"mb-1 font-extralight",children:r}),(0,l.jsx)("div",{className:"mb-1",children:n})]})},w=e=>{let{position:t,company:r,date:n,responsabilities:A}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{position:t,company:r,date:n}),(0,l.jsx)("ul",{className:"list-none list-inside",children:A.map(((e,t)=>(0,l.jsxs)("li",{className:"pl-1",children:["- ",e]},`respon${t}`)))})]})},b={Header:e=>{let{name:t,lastName:r,occupation:n,profilePicture:A,themeColor:o}=e;return(0,l.jsx)(f,{className:"relative p-2 px-10",...o,children:(0,l.jsxs)("div",{className:"relative flex justify-between overflow-y-visible",children:[(0,l.jsxs)("div",{className:"content-center uppercase",children:[(0,l.jsxs)("h1",{className:"text-4xl",style:{letterSpacing:8},children:[t||"Dani"," ",(0,l.jsx)("span",{className:"font-extrabold",children:r||"Schwaiger"})]}),(0,l.jsx)("h2",{className:"mt-3 text-xl",style:{letterSpacing:8},children:n||"Web Developer"})]}),(0,l.jsx)("img",{src:A||a,width:150,height:150,alt:"profile",className:"relative z-50 rounded-full top-12"})]})})},ContactInformation:e=>{let{phone:t,email:r,address:a,website:s}=e;return(0,l.jsxs)("section",{className:"relative content-center p-3 pt-0 border-b border-r border-slate-400",children:[(0,l.jsxs)("div",{className:"mb-2",children:[(0,l.jsx)(p,{src:n,alt:"phone"}),(0,l.jsx)("span",{className:"relative inline-block h-5 ml-1 bottom-2",children:t||"123-456-7890"})]}),(0,l.jsxs)("div",{className:"flex items-center mb-2",children:[(0,l.jsx)(p,{src:A,alt:"phone"}),(0,l.jsx)("span",{className:"relative flex items-center h-5 ml-1 leading-5 bottom-2",children:r||"junior.uc.9192@gmail.com"})]}),(0,l.jsxs)("div",{className:"flex items-center mb-2",children:[(0,l.jsx)(p,{src:o,alt:"phone"}),(0,l.jsx)("span",{className:"relative flex items-center h-5 ml-1 leading-5 bottom-2",children:a||"123 Anywhere St., Any City"})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(p,{src:i,alt:"phone"}),(0,l.jsx)("span",{className:"relative flex items-center h-5 ml-1 leading-5 bottom-2",children:s||"reallygreatsite.com"})]}),(0,l.jsx)(h,{})]})},ProfileInfo:e=>{let{aboutMe:t}=e;return(0,l.jsxs)("section",{className:"col-span-2 p-3 pt-0 border-b border-slate-400",children:[(0,l.jsx)(g,{title:"Profile"}),(0,l.jsx)("p",{className:"text-justify",children:t||"I am a qualified and professional web developer with five years of experience in database administrtion and website design. Strong creative and analytical skills. Team player with an eye for detail."})]})},Skills:e=>{let{skills:t=c}=e;return(0,l.jsxs)("section",{className:"relative p-3 border-b border-r pb-7 border-slate-400",children:[(0,l.jsx)(g,{title:"Skills"}),(0,l.jsx)("ul",{className:"list-none list-inside",children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,l.jsxs)("li",{className:"mb-3",children:["- ",e]},`skill-${t}`)))}),(0,l.jsx)(h,{})]})},Experiences:e=>{let{experiences:t=u}=e;return(0,l.jsxs)("section",{className:"col-span-2 col-start-2 p-3",children:[(0,l.jsx)(g,{title:"experience"}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,l.jsx)("div",{className:"mb-5",children:(0,l.jsx)(w,{...e})},`experience=${t}`)))]})},Education:e=>{let{education:t=d}=e;return(0,l.jsxs)("section",{className:"p-3 border-r border-slate-400",children:[(0,l.jsx)(g,{title:"education"}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,l.jsx)("div",{className:"mb-5",children:(0,l.jsx)(m,{...e})},`edu=${t}`)))]})}}},688:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DEFAULT_EDUCATION:()=>k,DEFAULT_EXPERIENCES:()=>Q,DEFAULT_LANGUAGES:()=>F,DEFAULT_SKILLS:()=>C,PDF_OPTIONS:()=>x,PIXELS_LETTER_SIZE:()=>B,THEME_COLORS:()=>S,previewTemplates:()=>U});var n=r(604),A=r(579);var o=r(464),i=r(432);const a=o.Ay.div`
  background-color: ${e=>e.header_bg};
  color: ${e=>e.header_text_color};
`,s=o.Ay.svg`
  color: ${e=>e.icon_color};
`,l=e=>{let{color:t="bg-gray-300",height:r="h-px"}=e;return(0,A.jsx)("hr",{className:`${r} mt-4 ${t} rounded-sm w-full`})},c=e=>{let{title:t,hasLine:r=!0}=e;return(0,A.jsxs)("div",{className:"flex mb-4",children:[(0,A.jsx)("h3",{className:"mr-3 text-xl leading-3 uppercase",children:t}),r&&(0,A.jsx)("hr",{className:"h-0.5 bg-stone-500 rounded-sm w-full mt-4"})]})},u=e=>{let{position:t,company:r,date:n}=e;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("h4",{className:"mb-1 font-bold uppercase",children:t}),(0,A.jsx)("div",{className:"mb-1 font-extralight",children:r}),(0,A.jsx)("div",{className:"mb-1",children:n})]})},d=e=>{let{position:t,company:r,date:n,responsabilities:o}=e;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(u,{position:t,company:r,date:n}),(0,A.jsx)("ul",{className:"list-none list-inside",children:o.map(((e,t)=>(0,A.jsxs)("li",{className:"pl-1",children:["- ",e]},`respon${t}`)))})]})},f=e=>{let{name:t,lastName:r,occupation:n,profilePicture:o,themeColor:s}=e;return(0,A.jsx)("header",{className:"pt-6 col-span-3 absolute w-full",children:(0,A.jsxs)(a,{className:"relative p-6",...s,children:[(0,A.jsxs)("div",{className:"relative uppercase -top-3",children:[(0,A.jsxs)("h1",{className:"text-4xl font-extrabold",style:{letterSpacing:4},children:[t||"Dani"," ",r||"Schwaiger"]}),(0,A.jsx)("h2",{className:"mt-3 text-xl",style:{letterSpacing:4},children:n||"Graphic Designer"})]}),(0,A.jsx)("img",{src:o||i,width:150,height:150,alt:"profile",className:"absolute bg-white border-4 border-white rounded-full -top-2 right-6"})]})})},h=e=>{let{phone:t,email:r,address:n,website:o,themeColor:i}=e;return(0,A.jsxs)("section",{className:"relative content-center p-3 pt-0",children:[(0,A.jsxs)("div",{className:"mb-2",children:[(0,A.jsx)(s,{...i,className:"inline-block w-6 h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,A.jsx)("path",{d:"M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"})}),(0,A.jsx)("span",{className:"relative inline-block h-5 ml-1 bottom-2",children:t||"123-456-7890"})]}),(0,A.jsxs)("div",{className:"flex items-center mb-2",children:[(0,A.jsx)(s,{...i,className:"inline-block w-6 h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,A.jsx)("path",{d:"M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"})}),(0,A.jsx)("span",{className:"relative flex items-center h-5 ml-1 leading-5 bottom-2",children:r||"junior.uc.9192@gmail.com"})]}),(0,A.jsxs)("div",{className:"flex items-center mb-2",children:[(0,A.jsx)(s,{...i,className:"w-6 h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,A.jsx)("path",{fillRule:"evenodd",d:"M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z",clipRule:"evenodd"})}),(0,A.jsx)("span",{className:"relative flex items-center h-5 ml-1 leading-5 bottom-2",children:n||"123 Anywhere St., Any City"})]}),(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)(s,{...i,className:"w-6 h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:(0,A.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"})}),(0,A.jsx)("span",{className:"relative flex items-center h-5 ml-1 leading-5 bottom-2",children:o||"reallygreatsite.com"})]}),(0,A.jsx)(l,{})]})},p=e=>{let{aboutMe:t}=e;return(0,A.jsxs)("section",{className:"col-span-2 p-3 pt-0 mb-4",children:[(0,A.jsx)(c,{title:"Profile"}),(0,A.jsx)("p",{className:"text-justify",children:t||"I am a qualified and professional web developer with five years of experience in database administrtion and website design. Strong creative and analytical skills. Team player with an eye for detail."})]})},g=e=>{let{skills:t=C}=e;return(0,A.jsxs)("section",{className:"relative p-3 pb-7",children:[(0,A.jsx)(c,{title:"Skills",hasLine:!1}),(0,A.jsx)("ul",{className:"pl-3 list-none list-inside",children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,A.jsxs)("li",{className:"mb-3",children:["- ",e]},`skill-${t}`)))}),(0,A.jsx)(l,{})]})},m=e=>{let{experiences:t=Q}=e;return(0,A.jsxs)("section",{className:"col-span-2 p-3",children:[(0,A.jsx)(c,{title:"experience"}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,A.jsx)("div",{className:"mb-5",children:(0,A.jsx)(d,{...e})},`experience=${t}`)))]})},w=e=>{let{education:t=k}=e;return(0,A.jsxs)("section",{className:"p-3",children:[(0,A.jsx)(c,{title:"education"}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,A.jsx)("div",{className:"mb-4",children:(0,A.jsx)(u,{...e})},`edu=${t}`)))]})},b=e=>{let{languages:t=F}=e;return(0,A.jsxs)("section",{className:"relative p-3 pb-7",children:[(0,A.jsx)(c,{title:"Languages",hasLine:!1}),(0,A.jsx)("ul",{className:"pl-3 list-none list-inside",children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,A.jsx)("li",{className:"mb-3",children:(0,A.jsxs)("span",{children:["- ",e]})},`language-${t}`)))})]})},y=o.Ay.div`
  background-color: ${e=>e.sidebar_bg};
  color: ${e=>e.sidebar_text_color};
`,v=o.Ay.div`
  background-color: ${e=>e.body_bg};
//# sourceMappingURL=main.64545efe.js.map