(()=>{var e={};e.id=480,e.ids=[480],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3251:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(5772),s(8295),s(5866);var r=s(3191),a=s(8716),i=s(7922),o=s.n(i),n=s(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=["",{children:["authStack",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5772)),"/Users/testingdemo/Desktop/projects/woofitweb/src/app/authStack/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8295)),"/Users/testingdemo/Desktop/projects/woofitweb/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/testingdemo/Desktop/projects/woofitweb/src/app/authStack/page.js"],u="/authStack/page",p={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/authStack/page",pathname:"/authStack",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7813:(e,t,s)=>{Promise.resolve().then(s.bind(s,5319))},2889:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var r=s(326),a=s(5047),i=s(434),o=s(6041),n=s.n(o),l=s(477),c=s(8365),d=s(6226),u=s(1590),p=s(3703),h=s(123),A=s(7577),g=s(3676),m=s(3450);let x=()=>{let e=(0,a.useRouter)(),[t,s]=(0,A.useState)(),o=(0,p.TA)({initialValues:{email:"",password:""},validationSchema:h.Ry({email:h.Z_().required("Email is required"),password:h.Z_().required("Password is required")}),onSubmit:async t=>{try{let r=await (0,u.x4)(t);r?.data?.success===!1&&s(r?.data),localStorage.setItem("token",r.data.data.token),localStorage.setItem("id",r.data.data._id),localStorage.setItem("userData",JSON.stringify(r.data.data)),e.push("/dashboard")}catch(e){console.log(e,"====")}}});return(0,A.useEffect)(()=>{localStorage.getItem("token")&&e.push("/dashboard")},[]),r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:n().container,children:[r.jsx("div",{className:n().leftPane,children:(0,r.jsxs)("div",{className:n().LeftContainor,children:[(0,r.jsxs)("div",{className:n().registerLink,children:[r.jsx("span",{children:"Don't have an Account? "}),r.jsx(i.default,{href:"/signupW",passHref:!0,children:r.jsx("div",{className:n().RegisterButton,style:{textDecoration:"none"},children:"Register"})})]}),(0,r.jsxs)("div",{className:n().authBox,children:[r.jsx("h2",{className:n().WelcomeBack,children:"Welcome back!"}),(0,r.jsxs)("form",{onSubmit:o.handleSubmit,children:[r.jsx(l.Z,{name:"Email",type:"email",id:"email",placeholder:"Enter your Email",img1:r.jsx(c._r,{}),onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email}),o.touched.email&&o.errors.email?r.jsx("div",{style:{color:"red"},children:o.errors.email}):null,r.jsx(l.Z,{name:"Password",type:"password",id:"password",placeholder:"Enter your Password",img1:r.jsx(c.qu,{}),onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password}),o.touched.password&&o.errors.password?r.jsx("div",{style:{color:"red"},children:o.errors.password}):null,r.jsx("div",{className:n().forgotPassword,children:r.jsx("a",{href:"#",children:"Forgot your password?"})}),r.jsx("button",{type:"submit",className:n().authButton,style:{backgroundColor:"#14AED1",color:"wheat"},children:"Login"}),t?r.jsx("div",{style:{color:"red"},children:t?.message}):null]}),r.jsx("div",{className:n().Linediv}),(0,r.jsxs)("div",{className:n().socialLogin,children:[(0,r.jsxs)("button",{type:"button",className:n().googleButton,children:[r.jsx(c.av,{className:n().googlelogo}),"Continue with Google"]}),(0,r.jsxs)("button",{type:"button",className:n().appleButton,children:[r.jsx(c.uZ,{className:n().googlelogo}),"Continue with Apple"]})]})]})]})}),(0,r.jsxs)("div",{className:n().rightPane,children:[r.jsx(d.default,{src:g.Z,alt:"Workout",className:n().Logoimg,height:136,width:450}),r.jsx("p",{className:n().textttt,children:"Where Coaching Meets Excellence"}),r.jsx(d.default,{src:m.Z,alt:"Workout",className:n().africnManstyle,width:500,height:400})]})]})})}},5319:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(326);s(7577);var a=s(2889);let i=()=>r.jsx(r.Fragment,{children:r.jsx(a.default,{})})},5772:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var r=s(8570);let a=(0,r.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/authStack/page.js`),{__esModule:i,$$typeof:o}=a;a.default;let n=(0,r.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/authStack/page.js#default`)},3676:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/Logo.b0bd3d30.png",height:137,width:450,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEX////////////////////+/v7///8pyByhAAAAB3RSTlM+GzReLyl0m2WLywAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGBjZWBhYGBkYGJmZGBgYGIEAAErABoMDsquAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},3450:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/africanMan.13549e70.png",height:523,width:606,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAARVBMVEWEhIRiY2pwdX+tkoWNf3ygjoqKjJKUmp5tcHazs385RU80RE8iLziGd3TKs6+EfYCTe3dQSEgECg94fIQRGR+WhH+Ldm+8TxYIAAAAFHRSTlMBYMFyUh2PRjUF+1P3w3D054Xrw8hwthwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicJcVHDsAgDADBpdu0FCD/f2okmMuABmVLy5+lXdYFiKZ/ebgE/n7eaiMglJkFUEyd5QcofgF4vc8cGQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,54,401,985,855,373,93,737],()=>s(3251));module.exports=r})();