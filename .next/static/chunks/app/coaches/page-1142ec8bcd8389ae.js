(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{4390:function(e,a,i){Promise.resolve().then(i.bind(i,6167)),Promise.resolve().then(i.bind(i,3215))},6167:function(e,a,i){"use strict";var s=i(7437),l=i(6648),n=i(5801),t=i(3131),c=i.n(t),r=i(7170),d=i(6463),o=i(2265);a.default=()=>{let e=(0,d.useRouter)(),[a,i]=(0,o.useState)(!1),t=[{id:1,image:r.Z,name:"Declan Mcgowan",email:"willie.jennings@example.com",goal:"3 Years",rate:"Health Coach",gender:"Female"},{id:2,image:r.Z,name:"Chris Craig",email:"tim.jennings@example.com",goal:"5 Years",rate:"Nutrition Specialist",gender:"Female"},{id:3,image:r.Z,name:"Dakota Mullen",email:"willie.jennings@example.com",goal:"7 Years",rate:"Youth Fitness Specialist",gender:"Male"},{id:1,image:r.Z,name:"Declan Mcgowan",email:"willie.jennings@example.com",goal:"10+ Years",rate:"Yoga Specialist",gender:"Female"},{id:2,image:r.Z,name:"Chris Craig",email:"tim.jennings@example.com",goal:"3 Years",rate:"Health Coach",gender:"Female"},{id:3,image:r.Z,name:"Dakota Mullen",email:"willie.jennings@example.com",goal:"3 Years",rate:"Senior Fitness",gender:"Male"},{id:1,image:r.Z,name:"Declan Mcgowan",email:"willie.jennings@example.com",goal:"3 Years",rate:"Muscle Gain",gender:"Female"},{id:2,image:r.Z,name:"Chris Craig",email:"tim.jennings@example.com",goal:"3 Years",rate:"Muscle Gain",gender:"Female"},{id:3,image:r.Z,name:"Dakota Mullen",email:"willie.jennings@example.com",goal:"3 Years",rate:"Health Coach",gender:"Male"}];return(0,s.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,s.jsxs)("div",{className:c().CoachesHeaderdiv,children:[(0,s.jsx)("div",{className:c().Coachestxtt,children:a?"Archived Coaches":"Coaches"}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(n._b,{}),(0,s.jsx)("div",{className:c().Archived_Clients,onClick:()=>{i(!a)},children:a?"Coaches":"Archived Coaches"}),(0,s.jsx)("div",{className:c().Add_Client,children:"Add a Coach"}),(0,s.jsxs)("div",{style:{display:"flex",marginLeft:30},children:[(0,s.jsx)(n.W1,{}),(0,s.jsx)("div",{style:{width:40}}),(0,s.jsx)(n.k1,{})]})]})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{className:c().table,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)("input",{type:"checkbox"})}),(0,s.jsx)("th",{children:"Image"}),(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Email"}),(0,s.jsx)("th",{children:"Specialization"}),(0,s.jsx)("th",{children:"Experience"}),(0,s.jsx)("th",{children:"Gender"}),(0,s.jsx)("th",{children:"Action"})]})}),(0,s.jsx)("tbody",{children:t.map(a=>(0,s.jsxs)("tr",{className:c().temppp,onClick:()=>e.push("/coaches/coachInfo"),children:[(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"checkbox"})}),(0,s.jsx)("td",{children:(0,s.jsx)(l.default,{height:40,width:40,src:a.image,alt:a.name,className:c().profileImage})}),(0,s.jsx)("td",{className:c().name_client,children:a.name}),(0,s.jsx)("td",{className:c().email_client,children:a.email}),(0,s.jsx)("td",{className:c().email_client,children:a.rate}),(0,s.jsx)("td",{className:c().email_client,children:a.goal}),(0,s.jsx)("td",{className:c().email_client,children:a.gender}),(0,s.jsxs)("td",{className:c().flex_row_div,children:[(0,s.jsx)(n.dY,{className:c().actionIcon}),(0,s.jsx)("div",{style:{width:30}}),(0,s.jsx)(n.pJ,{className:c().actionIcon})]})]},a.id))})]})})]})}},3215:function(e,a,i){"use strict";i.d(a,{default:function(){return C}});var s=i(7437),l=i(6648),n=i(1756),t=i(3599),c=i(3131),r=i.n(c),d=i(7170),o=i(2265),m=()=>{let[e,a]=(0,o.useState)();return(0,o.useEffect)(()=>{a(JSON.parse(localStorage.getItem("userData")))},[]),(0,s.jsxs)("header",{className:r().header,children:[(0,s.jsx)("div",{style:{width:"30%"},children:(0,s.jsxs)("div",{className:r().searchContainer,children:[(0,s.jsx)(t.Z,{}),(0,s.jsx)("input",{type:"text",placeholder:"Search Users",className:r().searchInput})]})}),(0,s.jsxs)("div",{className:r().userInfo,children:[(0,s.jsx)(l.default,{height:40,width:40,src:null==e?void 0:e.image,alt:d.Z,className:r().avatar}),(0,s.jsxs)("span",{className:r().hellousername,children:["Hello ",null==e?void 0:e.name,"!"]}),(0,s.jsx)(n.Z,{className:r().Notificationimg})]})]})};i(7138);var h=i(6463),x=i(6360),j=i(4047),g=i(3442);i(4996);var u=i(3690),A=i(2923),p=i(8180),v=i(8321),f=()=>{let e=(0,h.useRouter)(),a=(0,h.usePathname)(),i=a=>{e.push("/".concat(a))},l=e=>a.startsWith("/".concat(e,"/"))||a==="/".concat(e),n=[{id:1,icon:(0,s.jsx)(x.Z,{}),label:"Dashboard",url:"dashboard"},{id:2,icon:(0,s.jsx)(j.Z,{}),label:"Schedule",url:"schedule"},{id:3,icon:(0,s.jsx)(g.Z,{}),label:"Clients",url:"clients"},{id:5,icon:(0,s.jsx)(u.Z,{}),label:"Payments",url:"payments"},{id:6,icon:(0,s.jsx)(A.Z,{}),label:"Reports",url:"reports"},{id:7,icon:(0,s.jsx)(p.Z,{}),label:"Settings",url:"settings"}];return(0,s.jsxs)("div",{className:r().sidebar,children:[(0,s.jsx)("div",{className:r().logo,children:(0,s.jsx)(v.Z,{})}),(0,s.jsx)("ul",{className:r().navList,children:n.map(e=>(0,s.jsx)("li",{className:"".concat(r().navItem," ").concat(l(e.url)?r().selected:""),onClick:()=>i(e.url),children:(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:r().dashboradimage,children:[e.icon,(0,s.jsx)("span",{className:r().navLabel,children:e.label})]})})},e.id))})]})},_=i(2631),b=i.n(_),C=e=>{let{children:a,setSelectedItem:i}=e;return(0,s.jsxs)("div",{className:b().layout,children:[(0,s.jsx)(f,{}),(0,s.jsxs)("div",{className:b().mainContent,children:[(0,s.jsx)(m,{}),(0,s.jsx)("div",{className:b().content,children:a})]})]})}},2631:function(e){e.exports={dashboradContainor:"Woofit_dashboradContainor___bc1A",leftSide:"Woofit_leftSide__6YKms",rightSide:"Woofit_rightSide__Pyvhy",sidebar:"Woofit_sidebar__sRETv",layout:"Woofit_layout__pEB5u",mainContent:"Woofit_mainContent__Hzgj_",header:"Woofit_header__dmUlm",content:"Woofit_content__Ql0mi"}},7170:function(e,a){"use strict";a.Z={src:"/_next/static/media/profilepic.3f1ee2ee.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVMaXGTpMBlRT/l7fbMyM+GamaabFbj7ffR3uyckIbz///bzMjh7PO6mqO5vcaAX0aQe3TiwrHMvbRYRkVlcIP/3cf/+Pb/z62SpL8tHACPn76qn5vTqZTg6vTt+v/U2N3Xs56wkIRbWW08P1C+iX2rdGylf3JDLSaMZFOYSFH1AAAAHHRSTlMAsPOx/Pz88i4tLfmv7LO1+P74tez++P70LfSzCGkLmwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUeJwVxkUWgCAABcAPknYnImHd/4Q+ZzVAWta804CSrBnuXiGxmTMiEMj9MOcb5z/+euKK3DIjaCBQBXeTpxrQVTtuCz6e+gSP35lbvAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[649,288,298,801,971,23,744],function(){return e(e.s=4390)}),_N_E=e.O()}]);