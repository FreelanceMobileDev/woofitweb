(()=>{var e={};e.id=273,e.ids=[273],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1901:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(4101),s(8295),s(5866);var t=s(3191),i=s(8716),r=s(7922),n=s.n(r),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(a,o);let c=["",{children:["coaches",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4101)),"/Users/testingdemo/Desktop/projects/woofitweb/src/app/coaches/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8295)),"/Users/testingdemo/Desktop/projects/woofitweb/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/testingdemo/Desktop/projects/woofitweb/src/app/coaches/page.js"],m="/coaches/page",p={require:s,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/coaches/page",pathname:"/coaches",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6965:(e,a,s)=>{Promise.resolve().then(s.bind(s,5326)),Promise.resolve().then(s.bind(s,3233))},5326:(e,a,s)=>{"use strict";s.d(a,{default:()=>m});var t=s(326),i=s(6226),r=s(8365),n=s(6041),l=s.n(n),o=s(639),c=s(5047),d=s(7577);let m=()=>{let e=(0,c.useRouter)(),[a,s]=(0,d.useState)(!1),n=[{id:1,image:o.Z,name:"Declan Mcgowan",email:"willie.jennings@example.com",goal:"3 Years",rate:"Health Coach",gender:"Female"},{id:2,image:o.Z,name:"Chris Craig",email:"tim.jennings@example.com",goal:"5 Years",rate:"Nutrition Specialist",gender:"Female"},{id:3,image:o.Z,name:"Dakota Mullen",email:"willie.jennings@example.com",goal:"7 Years",rate:"Youth Fitness Specialist",gender:"Male"},{id:1,image:o.Z,name:"Declan Mcgowan",email:"willie.jennings@example.com",goal:"10+ Years",rate:"Yoga Specialist",gender:"Female"},{id:2,image:o.Z,name:"Chris Craig",email:"tim.jennings@example.com",goal:"3 Years",rate:"Health Coach",gender:"Female"},{id:3,image:o.Z,name:"Dakota Mullen",email:"willie.jennings@example.com",goal:"3 Years",rate:"Senior Fitness",gender:"Male"},{id:1,image:o.Z,name:"Declan Mcgowan",email:"willie.jennings@example.com",goal:"3 Years",rate:"Muscle Gain",gender:"Female"},{id:2,image:o.Z,name:"Chris Craig",email:"tim.jennings@example.com",goal:"3 Years",rate:"Muscle Gain",gender:"Female"},{id:3,image:o.Z,name:"Dakota Mullen",email:"willie.jennings@example.com",goal:"3 Years",rate:"Health Coach",gender:"Male"}];return(0,t.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,t.jsxs)("div",{className:l().CoachesHeaderdiv,children:[t.jsx("div",{className:l().Coachestxtt,children:a?"Archived Coaches":"Coaches"}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(r._b,{}),t.jsx("div",{className:l().Archived_Clients,onClick:()=>{s(!a)},children:a?"Coaches":"Archived Coaches"}),t.jsx("div",{className:l().Add_Client,children:"Add a Coach"}),(0,t.jsxs)("div",{style:{display:"flex",marginLeft:30},children:[t.jsx(r.W1,{}),t.jsx("div",{style:{width:40}}),t.jsx(r.k1,{})]})]})]}),t.jsx("div",{children:(0,t.jsxs)("table",{className:l().table,children:[t.jsx("thead",{children:(0,t.jsxs)("tr",{children:[t.jsx("th",{children:t.jsx("input",{type:"checkbox"})}),t.jsx("th",{children:"Image"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Specialization"}),t.jsx("th",{children:"Experience"}),t.jsx("th",{children:"Gender"}),t.jsx("th",{children:"Action"})]})}),t.jsx("tbody",{children:n.map(a=>(0,t.jsxs)("tr",{className:l().temppp,onClick:()=>e.push("/coaches/coachInfo"),children:[t.jsx("td",{children:t.jsx("input",{type:"checkbox"})}),t.jsx("td",{children:t.jsx(i.default,{height:40,width:40,src:a.image,alt:a.name,className:l().profileImage})}),t.jsx("td",{className:l().name_client,children:a.name}),t.jsx("td",{className:l().email_client,children:a.email}),t.jsx("td",{className:l().email_client,children:a.rate}),t.jsx("td",{className:l().email_client,children:a.goal}),t.jsx("td",{className:l().email_client,children:a.gender}),(0,t.jsxs)("td",{className:l().flex_row_div,children:[t.jsx(r.dY,{className:l().actionIcon}),t.jsx("div",{style:{width:30}}),t.jsx(r.pJ,{className:l().actionIcon})]})]},a.id))})]})})]})}},4101:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>d});var t=s(9510);s(1159);var i=s(8570);let r=(0,i.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/_components/CoachesContant.js`),{__esModule:n,$$typeof:l}=r;r.default;let o=(0,i.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/_components/CoachesContant.js#default`);var c=s(236);let d=function(){return t.jsx(t.Fragment,{children:t.jsx(c.ZP,{children:t.jsx(o,{})})})}},236:(e,a,s)=>{"use strict";s.d(a,{ZP:()=>l});var t=s(8570);let i=(0,t.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/dashboard/DashCompoent.js`),{__esModule:r,$$typeof:n}=i;i.default;let l=(0,t.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/dashboard/DashCompoent.js#default`)}};var a=require("../../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),t=a.X(0,[948,54,401,972,689,247,93,233],()=>s(1901));module.exports=t})();