(()=>{var e={};e.id=205,e.ids=[205,737],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},6875:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>_,routeModule:()=>u,tree:()=>d}),s(447),s(8295),s(5866);var a=s(3191),i=s(8716),n=s(7922),o=s.n(n),l=s(5231),r={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(r[e]=()=>l[e]);s.d(t,r);let d=["",{children:["settings",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,447)),"/Users/testingdemo/Desktop/projects/woofitweb/src/app/settings/services/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8295)),"/Users/testingdemo/Desktop/projects/woofitweb/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],_=["/Users/testingdemo/Desktop/projects/woofitweb/src/app/settings/services/page.js"],c="/settings/services/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/settings/services/page",pathname:"/settings/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8234:(e,t,s)=>{Promise.resolve().then(s.bind(s,4654))},1590:(e,t,s)=>{"use strict";s.d(t,{Ab:()=>g,IS:()=>h,Qg:()=>p,hI:()=>u,Ai:()=>m,jS:()=>x,zj:()=>v,El:()=>r,x4:()=>_,z2:()=>d,CZ:()=>c});var a=s(4099);let i=a.Z.create({headers:{Accept:"application/json","Content-Type":"application/json"}}),n=a.Z.create({headers:{"Content-Type":"multipart/form-data"}});i.interceptors.request.use(e=>{let t=localStorage.getItem("token");return`${t}`&&(e.headers.Authorization=t),e},e=>{Promise.reject(e)}),i.interceptors.response.use(e=>e,async e=>{let{response:t}=e;return console.log("error---->apimain",t.data),Promise.reject(e)}),n.interceptors.request.use(e=>{let t=[].cookies?.userDetails?.data?.access_token,s=`Bearer ${t}`;return s&&(e.headers.Authorization=s),e},e=>{Promise.reject(e)}),n.interceptors.response.use(e=>e,async e=>{let{response:t}=e;return Promise.reject(e)});let o="http://51.20.168.126:5879/api/",l="POST",r=e=>(console.log("imageUpload--->",e),n({baseURL:o,method:l,url:"user/upload-image",data:e})),d=e=>(console.log("register--->",e),i({baseURL:o,method:l,url:"user/sign-up",data:e})),_=e=>(console.log("login_payload--->",e),i({baseURL:o,method:l,url:"user/login",data:e})),c=(e,t)=>i({baseURL:o,method:l,url:`user/update-professional-details?id=${t}`,data:e}),p=e=>i({baseURL:o,method:"GET",url:`rates/get-client?isArchive=${e}`}),u=e=>(console.log("GET_GROUP_LIST->",e),i({baseURL:o,method:"GET",url:`group/getGroupList?coachId=${e}`})),m=()=>(console.log("getProfile->"),i({baseURL:o,method:"GET",url:"user/get-profile"})),h=e=>(console.log("getClientDetails->",e),i({baseURL:o,method:"GET",url:`rates/getClientDetails?id=${e}`})),x=e=>(console.log("getRates-====???>",e),i({baseURL:o,method:"GET",url:`rates/get-rates?coachId=${e}`})),g=(e,t)=>(console.log("createOrUpdateClient-====>>>>>>>>",e,t),i({baseURL:o,method:l,url:`rates/create-or-update-client?id=${e}`,data:t})),v=e=>(console.log("getTranningSession--->",e),i({baseURL:o,method:"GET",url:`tranning/getTrainingSession?${e}`}))},3583:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var a=s(326),i=s(7577),n=s(9488),o=s.n(n),l=s(8365),r=s(7707),d=s(6226),_=s(639),c=s(1590);let p=({handleClose:e})=>{let[t,s]=(0,i.useState)([]),n=async e=>{try{let t=await (0,c.Qg)(e);console.log(t.data.data.getAllClientData),s(t.data.data.getAllClientData)}catch(e){console.log(e,"====error")}};(0,i.useEffect)(()=>(n(),()=>{console.log("clear function"),console.log(t,"===clientData")}),[]);let p=[{id:1,name:"Eloise Robinson",avatar:_.Z},{id:2,name:"Franky Williamson",avatar:_.Z},{id:3,name:"Bronson Glass",avatar:_.Z},{id:4,name:"Monroe Benjamin",avatar:_.Z}],u=[{id:5,name:"Samuel O'Brien",avatar:_.Z},{id:6,name:"Morgan Warren",avatar:_.Z}],m=[{id:7,name:"Jonathan Andrews",avatar:_.Z}],[h,x]=(0,i.useState)([]),g=e=>{x(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},v=e=>e.map(e=>(0,a.jsxs)("div",{className:o().clientItem,children:[a.jsx(d.default,{height:35,width:35,src:e.avatar,alt:e.name,className:o().avatar}),(0,a.jsxs)("div",{className:o().clientInfo,children:[a.jsx("span",{className:o().Clientsname,children:e.name}),a.jsx("input",{type:"checkbox",checked:h.includes(e.id),onChange:()=>g(e.id)})]})]},e.id));return a.jsx("div",{className:o().popupDisplay,children:(0,a.jsxs)("div",{className:o().popupContent,children:[(0,a.jsxs)("div",{className:o().space_div,children:[a.jsx("div",{style:{width:100},onClick:e,children:a.jsx(l.IT,{})}),a.jsx("div",{className:o().popheadertxt,children:"Add Clients"}),(0,a.jsxs)("div",{className:o().row,children:[a.jsx(l.W1,{}),a.jsx("div",{style:{width:30}})," ",a.jsx(l.k1,{})]})]}),(0,a.jsxs)("div",{className:o().clientList,children:[a.jsx("div",{className:o().albhabate_txt2,children:"A"}),v(p),a.jsx("div",{className:o().albhabate_txt,children:"B"}),v(u),a.jsx("div",{className:o().albhabate_txt,children:"C"}),v(m)]}),a.jsx(r.Z,{name:"Select Clients",txtstyle:{color:"#FFF"},additionalMainDivClassName:o().AddClientButton})]})})}},477:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(326);s(7577);var i=s(8365);let n=()=>(0,a.jsxs)("svg",{width:"27",height:"20",viewBox:"0 0 27 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsxs)("g",{"clip-path":"url(#clip0_1729_4873)",children:[a.jsx("path",{d:"M0.5 16.4995C0.5 17.2657 0.804364 18.0005 1.34614 18.5423C1.88791 19.0841 2.62271 19.3884 3.38889 19.3884H23.6111C24.3773 19.3884 25.1121 19.0841 25.6539 18.5423C26.1956 18.0005 26.5 17.2657 26.5 16.4995V12.8884H0.5V16.4995Z",fill:"#138808"}),a.jsx("path",{d:"M26.5 7.11108V3.49997C26.5 2.73379 26.1956 1.99899 25.6539 1.45722C25.1121 0.915448 24.3773 0.611084 23.6111 0.611084H3.38889C2.62271 0.611084 1.88791 0.915448 1.34614 1.45722C0.804364 1.99899 0.5 2.73379 0.5 3.49997L0.5 7.11108H26.5Z",fill:"#FF9933"}),a.jsx("path",{d:"M0.5 6.87085H26.5V13.1303H0.5V6.87085Z",fill:"#F7F7F7"}),a.jsx("path",{d:"M13.5002 12.8889C15.0957 12.8889 16.3891 11.5955 16.3891 9.99997C16.3891 8.40448 15.0957 7.11108 13.5002 7.11108C11.9047 7.11108 10.6113 8.40448 10.6113 9.99997C10.6113 11.5955 11.9047 12.8889 13.5002 12.8889Z",fill:"#000080"}),a.jsx("path",{d:"M13.5 12.4375C14.8462 12.4375 15.9375 11.3462 15.9375 10C15.9375 8.65381 14.8462 7.5625 13.5 7.5625C12.1538 7.5625 11.0625 8.65381 11.0625 10C11.0625 11.3462 12.1538 12.4375 13.5 12.4375Z",fill:"#F7F7F7"}),a.jsx("path",{d:"M13.5718 9.09754L13.4996 9.56699L13.4274 9.09754L13.4996 7.68921L13.5718 9.09754ZM12.9016 7.76793L13.1963 9.14665L13.3876 9.58143L13.3356 9.10982L12.9016 7.76793ZM12.344 7.99904L12.9854 9.25426L13.2829 9.62476L13.111 9.18204L12.344 7.99904ZM11.8652 8.36593L12.8099 9.41315L13.1934 9.6941L12.9124 9.3106L11.8652 8.36593ZM11.4983 8.84476L12.6813 9.61176L13.124 9.78365L12.7535 9.4861L11.4983 8.84476ZM11.2672 9.40232L12.6091 9.83638L13.0807 9.88837L12.6459 9.69699L11.2672 9.40232ZM11.1885 10.0003L12.5968 10.0725L13.0663 10.0003L12.5968 9.9281L11.1885 10.0003ZM11.2672 10.5983L12.6459 10.3037L13.0807 10.1123L12.6091 10.1643L11.2672 10.5983ZM11.4983 11.1559L12.7535 10.5145L13.124 10.217L12.6813 10.3889L11.4983 11.1559ZM11.8652 11.6347L12.9124 10.69L13.1934 10.3065L12.8099 10.5875L11.8652 11.6347ZM12.344 12.0016L13.111 10.8186L13.2829 10.3759L12.9854 10.7464L12.344 12.0016ZM12.9016 12.2327L13.3356 10.8908L13.3876 10.4192L13.1963 10.854L12.9016 12.2327ZM13.4996 12.3114L13.5718 10.9031L13.4996 10.4337L13.4274 10.9031L13.4996 12.3114ZM14.0976 12.2327L13.8029 10.854L13.6115 10.4192L13.6635 10.8908L14.0976 12.2327ZM14.6551 12.0016L14.0138 10.7464L13.7163 10.3759L13.8881 10.8186L14.6551 12.0016ZM15.134 11.6347L14.1893 10.5875L13.8058 10.3065L14.0868 10.69L15.134 11.6347ZM15.5009 11.1559L14.3179 10.3889L13.8751 10.217L14.2456 10.5145L15.5009 11.1559ZM15.732 10.5983L14.3901 10.1643L13.9185 10.1123L14.3533 10.3037L15.732 10.5983ZM15.8107 10.0003L14.4024 9.9281L13.9329 10.0003L14.4024 10.0725L15.8107 10.0003ZM15.732 9.40232L14.3533 9.69699L13.9185 9.88837L14.3901 9.83638L15.732 9.40232ZM15.5009 8.84476L14.2456 9.4861L13.8751 9.78365L14.3179 9.61176L15.5009 8.84476ZM15.134 8.36593L14.0868 9.3106L13.8058 9.6941L14.1893 9.41315L15.134 8.36593ZM14.6551 7.99904L13.8881 9.18204L13.7163 9.62476L14.0138 9.25426L14.6551 7.99904ZM14.0976 7.76793L13.6635 9.10982L13.6115 9.58143L13.8029 9.14665L14.0976 7.76793Z",fill:"#6666B3"}),a.jsx("path",{d:"M13.1816 7.73103C13.2613 7.73103 13.326 7.66636 13.326 7.58658C13.326 7.50681 13.2613 7.44214 13.1816 7.44214C13.1018 7.44214 13.0371 7.50681 13.0371 7.58658C13.0371 7.66636 13.1018 7.73103 13.1816 7.73103Z",fill:"#000080"}),a.jsx("path",{d:"M12.5683 7.89607C12.648 7.89607 12.7127 7.8314 12.7127 7.75162C12.7127 7.67185 12.648 7.60718 12.5683 7.60718C12.4885 7.60718 12.4238 7.67185 12.4238 7.75162C12.4238 7.8314 12.4885 7.89607 12.5683 7.89607Z",fill:"#000080"}),a.jsx("path",{d:"M12.0175 8.21247C12.0973 8.21247 12.1619 8.1478 12.1619 8.06803C12.1619 7.98825 12.0973 7.92358 12.0175 7.92358C11.9377 7.92358 11.873 7.98825 11.873 8.06803C11.873 8.1478 11.9377 8.21247 12.0175 8.21247Z",fill:"#000080"}),a.jsx("path",{d:"M11.5683 8.66169C11.648 8.66169 11.7127 8.59702 11.7127 8.51725C11.7127 8.43747 11.648 8.3728 11.5683 8.3728C11.4885 8.3728 11.4238 8.43747 11.4238 8.51725C11.4238 8.59702 11.4885 8.66169 11.5683 8.66169Z",fill:"#000080"}),a.jsx("path",{d:"M11.2519 9.21247C11.3316 9.21247 11.3963 9.1478 11.3963 9.06803C11.3963 8.98825 11.3316 8.92358 11.2519 8.92358C11.1721 8.92358 11.1074 8.98825 11.1074 9.06803C11.1074 9.1478 11.1721 9.21247 11.2519 9.21247Z",fill:"#000080"}),a.jsx("path",{d:"M11.0868 9.82575C11.1666 9.82575 11.2313 9.76108 11.2313 9.68131C11.2313 9.60153 11.1666 9.53687 11.0868 9.53687C11.0071 9.53687 10.9424 9.60153 10.9424 9.68131C10.9424 9.76108 11.0071 9.82575 11.0868 9.82575Z",fill:"#000080"}),a.jsx("path",{d:"M11.0868 10.4615C11.1666 10.4615 11.2313 10.3968 11.2313 10.3171C11.2313 10.2373 11.1666 10.1726 11.0868 10.1726C11.0071 10.1726 10.9424 10.2373 10.9424 10.3171C10.9424 10.3968 11.0071 10.4615 11.0868 10.4615Z",fill:"#000080"}),a.jsx("path",{d:"M11.2519 11.0758C11.3316 11.0758 11.3963 11.0111 11.3963 10.9313C11.3963 10.8515 11.3316 10.7869 11.2519 10.7869C11.1721 10.7869 11.1074 10.8515 11.1074 10.9313C11.1074 11.0111 11.1721 11.0758 11.2519 11.0758Z",fill:"#000080"}),a.jsx("path",{d:"M11.5683 11.6256C11.648 11.6256 11.7127 11.5609 11.7127 11.4811C11.7127 11.4013 11.648 11.3367 11.5683 11.3367C11.4885 11.3367 11.4238 11.4013 11.4238 11.4811C11.4238 11.5609 11.4885 11.6256 11.5683 11.6256Z",fill:"#000080"}),a.jsx("path",{d:"M12.0175 12.0748C12.0973 12.0748 12.1619 12.0101 12.1619 11.9303C12.1619 11.8506 12.0973 11.7859 12.0175 11.7859C11.9377 11.7859 11.873 11.8506 11.873 11.9303C11.873 12.0101 11.9377 12.0748 12.0175 12.0748Z",fill:"#000080"}),a.jsx("path",{d:"M12.5683 12.3922C12.648 12.3922 12.7127 12.3275 12.7127 12.2477C12.7127 12.1679 12.648 12.1033 12.5683 12.1033C12.4885 12.1033 12.4238 12.1679 12.4238 12.2477C12.4238 12.3275 12.4885 12.3922 12.5683 12.3922Z",fill:"#000080"}),a.jsx("path",{d:"M13.1816 12.5572C13.2613 12.5572 13.326 12.4925 13.326 12.4128C13.326 12.333 13.2613 12.2683 13.1816 12.2683C13.1018 12.2683 13.0371 12.333 13.0371 12.4128C13.0371 12.4925 13.1018 12.5572 13.1816 12.5572Z",fill:"#000080"}),a.jsx("path",{d:"M13.8173 12.5572C13.8971 12.5572 13.9617 12.4925 13.9617 12.4128C13.9617 12.333 13.8971 12.2683 13.8173 12.2683C13.7375 12.2683 13.6729 12.333 13.6729 12.4128C13.6729 12.4925 13.7375 12.5572 13.8173 12.5572Z",fill:"#000080"}),a.jsx("path",{d:"M14.4316 12.3922C14.5113 12.3922 14.576 12.3275 14.576 12.2477C14.576 12.1679 14.5113 12.1033 14.4316 12.1033C14.3518 12.1033 14.2871 12.1679 14.2871 12.2477C14.2871 12.3275 14.3518 12.3922 14.4316 12.3922Z",fill:"#000080"}),a.jsx("path",{d:"M14.9814 12.0748C15.0611 12.0748 15.1258 12.0101 15.1258 11.9303C15.1258 11.8506 15.0611 11.7859 14.9814 11.7859C14.9016 11.7859 14.8369 11.8506 14.8369 11.9303C14.8369 12.0101 14.9016 12.0748 14.9814 12.0748Z",fill:"#000080"}),a.jsx("path",{d:"M15.4306 11.6256C15.5104 11.6256 15.575 11.5609 15.575 11.4811C15.575 11.4013 15.5104 11.3367 15.4306 11.3367C15.3508 11.3367 15.2861 11.4013 15.2861 11.4811C15.2861 11.5609 15.3508 11.6256 15.4306 11.6256Z",fill:"#000080"}),a.jsx("path",{d:"M15.748 11.0758C15.8277 11.0758 15.8924 11.0111 15.8924 10.9313C15.8924 10.8515 15.8277 10.7869 15.748 10.7869C15.6682 10.7869 15.6035 10.8515 15.6035 10.9313C15.6035 11.0111 15.6682 11.0758 15.748 11.0758Z",fill:"#000080"}),a.jsx("path",{d:"M15.913 10.4615C15.9928 10.4615 16.0574 10.3968 16.0574 10.3171C16.0574 10.2373 15.9928 10.1726 15.913 10.1726C15.8332 10.1726 15.7686 10.2373 15.7686 10.3171C15.7686 10.3968 15.8332 10.4615 15.913 10.4615Z",fill:"#000080"}),a.jsx("path",{d:"M15.913 9.82575C15.9928 9.82575 16.0574 9.76108 16.0574 9.68131C16.0574 9.60153 15.9928 9.53687 15.913 9.53687C15.8332 9.53687 15.7686 9.60153 15.7686 9.68131C15.7686 9.76108 15.8332 9.82575 15.913 9.82575Z",fill:"#000080"}),a.jsx("path",{d:"M15.748 9.21223C15.8277 9.21223 15.8924 9.14756 15.8924 9.06778C15.8924 8.98801 15.8277 8.92334 15.748 8.92334C15.6682 8.92334 15.6035 8.98801 15.6035 9.06778C15.6035 9.14756 15.6682 9.21223 15.748 9.21223Z",fill:"#000080"}),a.jsx("path",{d:"M15.4306 8.66169C15.5104 8.66169 15.575 8.59702 15.575 8.51725C15.575 8.43747 15.5104 8.3728 15.4306 8.3728C15.3508 8.3728 15.2861 8.43747 15.2861 8.51725C15.2861 8.59702 15.3508 8.66169 15.4306 8.66169Z",fill:"#000080"}),a.jsx("path",{d:"M14.9814 8.21247C15.0611 8.21247 15.1258 8.1478 15.1258 8.06803C15.1258 7.98825 15.0611 7.92358 14.9814 7.92358C14.9016 7.92358 14.8369 7.98825 14.8369 8.06803C14.8369 8.1478 14.9016 8.21247 14.9814 8.21247Z",fill:"#000080"}),a.jsx("path",{d:"M14.4316 7.89607C14.5113 7.89607 14.576 7.8314 14.576 7.75162C14.576 7.67185 14.5113 7.60718 14.4316 7.60718C14.3518 7.60718 14.2871 7.67185 14.2871 7.75162C14.2871 7.8314 14.3518 7.89607 14.4316 7.89607Z",fill:"#000080"}),a.jsx("path",{d:"M13.8173 7.73103C13.8971 7.73103 13.9617 7.66636 13.9617 7.58658C13.9617 7.50681 13.8971 7.44214 13.8173 7.44214C13.7375 7.44214 13.6729 7.50681 13.6729 7.58658C13.6729 7.66636 13.7375 7.73103 13.8173 7.73103Z",fill:"#000080"}),a.jsx("path",{d:"M13.4996 10.6494C13.8586 10.6494 14.1496 10.3583 14.1496 9.99936C14.1496 9.64038 13.8586 9.34937 13.4996 9.34937C13.1406 9.34937 12.8496 9.64038 12.8496 9.99936C12.8496 10.3583 13.1406 10.6494 13.4996 10.6494Z",fill:"#000080"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_1729_4873",children:a.jsx("rect",{width:"26",height:"18.7778",fill:"white",transform:"translate(0.5 0.611084)"})})})]});var o=s(5878),l=s.n(o);let r=({style:e,input_parent_div_prop:t,inputtxt:s,name:o,img5:r,img1:d,img2:_,img3:c,type:p,id:u,placeholder:m,additionalMainDivClassName:h,additionalinput_field:x,onChange:g,value:v})=>(0,a.jsxs)("div",{style:e,className:`${l().input_parent_div} ${t}`,children:[(0,a.jsxs)("div",{className:l().space_div,children:[a.jsx("div",{className:`${l().inputtxt} ${s}`,children:o}),r&&a.jsx("div",{className:`${l().inputtxt} ${s}`,style:{marginRight:10},children:a.jsx(i.QH,{})})]}),(0,a.jsxs)("div",{className:`${l().input_main_div} ${h}`,children:[d&&d,_&&(0,a.jsxs)("div",{className:l().leftImage,children:[a.jsx(n,{}),a.jsx(i.dt,{})]}),c&&a.jsx("div",{className:l().lefttxtx,children:"USD"}),a.jsx("input",{type:p,id:u,placeholder:m,className:`${l().input_field} ${x}`,onChange:g,value:v}),_&&_]})]})},7707:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(326),i=s(5878),n=s.n(i);let o=e=>a.jsx(a.Fragment,{children:a.jsx("div",{onClick:e?.onClick,style:e?.style,className:`${n().button_main_div} ${e.additionalMainDivClassName}`,children:a.jsx("div",{style:e?.txtstyle,className:n().buttonname,children:e?.name})})})},6632:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(326);s(7577);var i=s(5878),n=s.n(i);let o=({label:e,text:t,buttonText:s,RightIcon:i,LeftIcon:o,props:l,RightBox:r,space:d,onClick:_})=>(0,a.jsxs)("div",{style:l?.style,className:`${n().container} ${l?.additionalcontainer}`,children:[a.jsx("label",{className:n().label,children:e}),d&&a.jsx("dev",{style:{marginTop:16}}),(0,a.jsxs)("div",{className:`${n().content} ${l?.additionalcontent}`,onClick:_,children:[o&&a.jsx(o,{className:n().icon}),a.jsx("span",{className:n().text,children:t}),s&&a.jsx("div",{className:`${n().button} ${l?.additionalbuttontext}`,children:s}),i&&a.jsx(i,{className:n().icon}),r&&a.jsx("div",{className:n().rightboxdiv,children:a.jsx(r,{})})]})]})},8498:(e,t,s)=>{"use strict";s.d(t,{default:()=>b});var a=s(326),i=s(6226),n=s(4348),o=s(2229),l=s(6041),r=s.n(l),d=s(639),_=s(7577);let c=()=>{let[e,t]=(0,_.useState)();return(0,_.useEffect)(()=>{},[]),(0,a.jsxs)("header",{className:r().header,children:[a.jsx("div",{style:{width:"30%"},children:(0,a.jsxs)("div",{className:r().searchContainer,children:[a.jsx(o.Z,{}),a.jsx("input",{type:"text",placeholder:"Search Users",className:r().searchInput})]})}),(0,a.jsxs)("div",{className:r().userInfo,children:[a.jsx(i.default,{height:40,width:40,src:e?.image,alt:d.Z,className:r().avatar}),(0,a.jsxs)("span",{className:r().hellousername,children:["Hello ",e?.name,"!"]}),a.jsx(n.Z,{className:r().Notificationimg})]})]})};s(434);var p=s(5047),u=s(4302),m=s(2682),h=s(8586);s(9859);var x=s(3784),g=s(1653),v=s(4492),C=s(462);let j=()=>{let e=(0,p.useRouter)(),t=(0,p.usePathname)(),s=t=>{e.push(`/${t}`)},i=e=>t.startsWith(`/${e}/`)||t===`/${e}`,n=[{id:1,icon:a.jsx(u.Z,{}),label:"Dashboard",url:"dashboard"},{id:2,icon:a.jsx(m.Z,{}),label:"Schedule",url:"schedule"},{id:3,icon:a.jsx(h.Z,{}),label:"Clients",url:"clients"},{id:5,icon:a.jsx(x.Z,{}),label:"Payments",url:"payments"},{id:6,icon:a.jsx(g.Z,{}),label:"Reports",url:"reports"},{id:7,icon:a.jsx(v.Z,{}),label:"Settings",url:"settings"}];return(0,a.jsxs)("div",{className:r().sidebar,children:[a.jsx("div",{className:r().logo,children:a.jsx(C.Z,{})}),a.jsx("ul",{className:r().navList,children:n.map(e=>a.jsx("li",{className:`${r().navItem} ${i(e.url)?r().selected:""}`,onClick:()=>s(e.url),children:a.jsx("div",{children:(0,a.jsxs)("div",{className:r().dashboradimage,children:[e.icon,a.jsx("span",{className:r().navLabel,children:e.label})]})})},e.id))})]})};var f=s(7826),L=s.n(f);let b=({children:e,setSelectedItem:t})=>(0,a.jsxs)("div",{className:L().layout,children:[a.jsx(j,{}),(0,a.jsxs)("div",{className:L().mainContent,children:[a.jsx(c,{}),a.jsx("div",{className:L().content,children:e})]})]})},4654:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(326),i=s(8498),n=s(8172),o=s(8365),l=s(1611),r=s.n(l),d=s(7577),_=s(9488),c=s.n(_),p=s(6632),u=s(7707),m=s(477),h=s(3583),x=s(6226),g=s(639);let v=({show:e,handleClose:t})=>{let[s,i]=(0,d.useState)(!1),n=[{name:"Eloise Robinson",avatar:g.Z},{name:"Franky Williamson",avatar:g.Z},{name:"Bronson Glass",avatar:g.Z},{name:"Monroe Benjamin",avatar:g.Z},{name:"Morgan Warren",avatar:g.Z}];return(0,a.jsxs)("div",{children:[a.jsx("div",{className:e?c().popupDisplay:c().popupHide,children:(0,a.jsxs)("div",{className:c().popupContent,style:{marginTop:35},children:[(0,a.jsxs)("div",{className:c().space_div,style:{marginBottom:20},children:[a.jsx("div",{style:{width:60},children:a.jsx(o.IT,{})}),a.jsx("div",{className:c().popheadertxt,children:"Edit Rate"}),a.jsx("div",{onClick:t,className:c().greycrossicon,children:a.jsx(o.aM,{})})]}),a.jsx("div",{className:c().countingClient,children:"5 Clients"}),a.jsx("div",{style:{marginTop:30},children:n.map((e,t)=>(0,a.jsxs)("div",{className:c().space_div,style:{marginBottom:20,marginTop:15},children:[(0,a.jsxs)("div",{className:c().row,children:[a.jsx(x.default,{width:40,height:40,src:e.avatar}),a.jsx("div",{className:c().Clientsname,style:{marginLeft:16},children:e.name})]}),a.jsx(o.aM,{})]},t))}),a.jsx(u.Z,{onClick:()=>{i(!1),i(!0)},name:"Add Clients",txtstyle:{color:"#FFF"},additionalMainDivClassName:c().AddClientButton})]})}),s&&a.jsx(h.Z,{show:s,handleClose:()=>{i(!1)}})]})},C=[{name:"6 Clients",count:"+3",avatar:g.Z,avatar1:g.Z,avatar2:g.Z}],j=({show:e,handleClose:t})=>{let[s,i]=(0,d.useState)(!1),n=()=>{i(!0),t()};return(0,a.jsxs)("div",{className:e?c().popupDisplay:c().popupHide,children:[(0,a.jsxs)("div",{className:c().popupContent,style:{marginTop:30,marginBottom:30},children:[(0,a.jsxs)("div",{className:c().space_div,children:[a.jsx("div",{style:{width:60}}),a.jsx("div",{className:c().popheadertxt,children:"Edit Rate"}),a.jsx("div",{onClick:t,className:c().greycrossicon,children:a.jsx(o.aM,{})})]}),a.jsx(p.Z,{label:"Name",additionalcontainer:c().TextWithButtonstyle,text:"Light"}),a.jsx(m.Z,{img3:!0,name:"Price for Training",additionalcontainer:c().UsdInput2}),a.jsx("div",{style:{marginLeft:10,marginTop:30},children:C.map((e,t)=>(0,a.jsxs)("div",{className:c().space_div,style:{marginBottom:10,marginTop:10},onClick:n,children:[a.jsx("div",{className:c().client_name_style2,style:{marginLeft:0},children:e.name}),(0,a.jsxs)("div",{className:c().row,children:[a.jsx(x.default,{src:e.avatar,alt:"Client Avatar",width:40,height:40,className:c().avatar2}),a.jsx(x.default,{src:e.avatar1,alt:"Client Avatar",width:40,height:40,className:c().avatar2}),a.jsx(x.default,{src:e.avatar2,alt:"Client Avatar",width:40,height:40,className:c().avatar2}),a.jsx("div",{className:c().group_count,children:e.count}),a.jsx("div",{style:{marginLeft:10},children:a.jsx(o.dA,{})})]})]},t))}),a.jsx(m.Z,{name:"Comment",additionalMainDivClassName:c().comment_div_2}),a.jsx(u.Z,{onClick:t,name:"Save",txtstyle:{color:"#FFF"},additionalMainDivClassName:c().SaveButton})]}),s&&a.jsx(v,{show:s,handleClose:()=>{i(!1)}})]})},f=function(){let[e,t]=(0,d.useState)(!1),s=()=>{t(!0)};return a.jsx(a.Fragment,{children:a.jsx(i.default,{children:a.jsx(n.Z,{children:(0,a.jsxs)("div",{className:r().right_div_data,children:[(0,a.jsxs)("div",{className:r().space_div,style:{marginTop:30},children:[a.jsx("div",{className:r().total_rate,children:"3 Rates"}),a.jsx("div",{className:r().add_rate,children:"Add Rate"})]}),a.jsx("div",{style:{marginTop:20}}),[{name:"Light",amount:"$25"},{name:"Optimum",amount:"$45"},{name:"Max",amount:"$65"}].map((e,t)=>(0,a.jsxs)("div",{style:{marginTop:20},className:r().rates_div,onClick:s,children:[a.jsx("div",{className:r().rate_txtt,children:e.name}),(0,a.jsxs)("div",{className:r().row,children:[a.jsx("div",{className:r().rate_amount,children:e.amount}),a.jsx(o.dA,{})]})]},t)),j&&a.jsx(j,{show:e,handleClose:()=>{t(!1)}})]})})})})}},8172:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var a=s(326),i=s(7577),n=s(6041),o=s.n(n),l=s(8365),r=s(5047);let d=({children:e})=>{let t=(0,r.useRouter)(),s=(0,r.usePathname)(),[n,d]=(0,i.useState)("/settings/profile");(0,i.useEffect)(()=>{let e=s.replace("/settings/","");"/settings"==s&&t.push("/settings/profile"),d(e||"/settings/profile")},[s]);let _=e=>{"Logout"===e?window.confirm("Are you sure you want to logout?")&&(console.log("User clicked OK, logging out..."),localStorage.clear(),t.push("/")):t.push(`/settings/${e}`)},c=[{id:1,icon:a.jsx(l.m2,{}),label:"Profile",url:"profile"},{id:2,icon:a.jsx(l.Tl,{}),label:"Services",url:"services"},{id:3,icon:a.jsx(l.sh,{}),label:"Notifications",url:"notifications"},{id:4,icon:a.jsx(l.wI,{}),label:"Integrations",url:"integrations"},{id:5,icon:a.jsx(l.XA,{}),label:"FAQs",url:"faq"},{id:6,icon:a.jsx(l.CE,{}),label:"Support",url:"support"},{id:7,icon:a.jsx(l.CE,{}),label:"Logout",url:"Logout"}],p=e=>s.startsWith(`/settings/${e}`);return(0,a.jsxs)("div",{style:{backgroundColor:"#fff"},children:[a.jsx("div",{className:o().Setting_texttt,children:"Settings"}),(0,a.jsxs)("div",{className:o().settingScreenContainer,children:[a.jsx("div",{className:o().settingSidebar,children:a.jsx("ul",{className:o().navList,children:c.map(e=>a.jsx("li",{className:`${o().navItem} ${p(e.url)?o().activeNavItem:""}`,onClick:()=>_(e.url),children:(0,a.jsxs)("div",{className:o().navItemContent,children:[(0,a.jsxs)("div",{className:o().icon_and_namee,children:[e.icon,a.jsx("span",{className:o().navItemLabel,children:e.label})]}),7!==e.id&&a.jsx(l.dA,{})]})},e.id))})}),e]})]})}},9488:e=>{e.exports={popupDisplay:"Popups_popupDisplay__Mb5zd",popupHide:"Popups_popupHide__JhrfR",popupContent:"Popups_popupContent__eNvd1",comment_div_2:"Popups_comment_div_2__ARude",space_div:"Popups_space_div__voGyE",popheadertxt:"Popups_popheadertxt__coDpd",TextWithButtonstyle:"Popups_TextWithButtonstyle__VuEJn",calender_input:"Popups_calender_input__4Ppln",invoicenumber:"Popups_invoicenumber__erH_p",UsdInput:"Popups_UsdInput__TOhNm",UsdInput2:"Popups_UsdInput2__TbZwK",row_div:"Popups_row_div__OmaSl",Clientaddtxt:"Popups_Clientaddtxt__F5TDW",paymentTypetxt:"Popups_paymentTypetxt__oQK3E",cashDiv:"Popups_cashDiv__NKGMN",noncash:"Popups_noncash__wTad6",SaveButton:"Popups_SaveButton__ISyFJ",AddClientButton:"Popups_AddClientButton__8kZQD",Cashtxt:"Popups_Cashtxt__gug7q",noncashtxt:"Popups_noncashtxt__WkLKz",selectedIcon:"Popups_selectedIcon___CqBB",unselectedIcon:"Popups_unselectedIcon__vZFBx",NewTrainingTabsDiv:"Popups_NewTrainingTabsDiv__oFL8W",on_the_date:"Popups_on_the_date__wgz_k",for_the_period:"Popups_for_the_period__aQw3Z",greycrossicon:"Popups_greycrossicon__GOoc5",popupHeader:"Popups_popupHeader__cK__R",backButton:"Popups_backButton__xmYnp",searchButton:"Popups_searchButton__mtnTb",clientList:"Popups_clientList__by2KY",clientItem:"Popups_clientItem__hxl7i",avatar:"Popups_avatar__rIzuQ",clientInfo:"Popups_clientInfo__z2MYM",selectClientsButton:"Popups_selectClientsButton__XegN7",row:"Popups_row__FoquQ",albhabate_txt:"Popups_albhabate_txt__sUIOe",albhabate_txt2:"Popups_albhabate_txt2__7Gvs1",Clientsname:"Popups_Clientsname__7xw04",Select_GroupButton:"Popups_Select_GroupButton__YXaeb",avatargroup:"Popups_avatargroup__XkYDy",group_count:"Popups_group_count__kBV__",days_of_training_txt:"Popups_days_of_training_txt__5VaSh",timer_parent_div:"Popups_timer_parent_div__bHMP0",day:"Popups_day__HfVFJ",switchContainer:"Popups_switchContainer__iQDhZ",switchButton:"Popups_switchButton__uaLM3",on:"Popups_on__SE04X",off:"Popups_off__behCE",switchCircle:"Popups_switchCircle__khL5g",day_div:"Popups_day_div__9J3pl",add_buttn:"Popups_add_buttn__zbdBR",client_name_style:"Popups_client_name_style__J2wcR",cvvcodetxt:"Popups_cvvcodetxt__7TqjX",client_name_style2:"Popups_client_name_style2__wbn_X",countingClient:"Popups_countingClient__gb4Jq"}},5878:e=>{e.exports={input_main_div:"Componet_input_main_div__qJ3RN",input_field:"Componet_input_field__iAcbd",inputtxt:"Componet_inputtxt__TehRX",input_image:"Componet_input_image__VcY_2",input_image2:"Componet_input_image2__8wm8A",button_main_div:"Componet_button_main_div__qp8l2",buttonname:"Componet_buttonname__4q1il",container:"Componet_container___wKOZ",label:"Componet_label__fxOOt",content:"Componet_content__OF11S",text:"Componet_text__6PWyy",button:"Componet_button__UyklT",icon:"Componet_icon__vkpGw",rightboxdiv:"Componet_rightboxdiv__MLjqh",input_parent_div:"Componet_input_parent_div__mIXFj",leftImage:"Componet_leftImage__FGU26",lefttxtx:"Componet_lefttxtx__iRIcn",space_div:"Componet_space_div__TOZt2"}},7826:e=>{e.exports={dashboradContainor:"Woofit_dashboradContainor___bc1A",leftSide:"Woofit_leftSide__6YKms",rightSide:"Woofit_rightSide__Pyvhy",sidebar:"Woofit_sidebar__sRETv",layout:"Woofit_layout__pEB5u",mainContent:"Woofit_mainContent__Hzgj_",header:"Woofit_header__dmUlm",content:"Woofit_content__Ql0mi"}},1611:e=>{e.exports={switchContainer:"Setting_switchContainer__au8Tc",switchButton:"Setting_switchButton__f0Vzn",on:"Setting_on___kl05",off:"Setting_off__me23b",switchCircle:"Setting_switchCircle__t4mue",right_div_data:"Setting_right_div_data__6vhrb",space_div:"Setting_space_div__UftKi",total_rate:"Setting_total_rate__fRicZ",add_rate:"Setting_add_rate__gOiSO",rates_div:"Setting_rates_div__3mffO",rate_txtt:"Setting_rate_txtt__YPjhm",row:"Setting_row__V2Y2J",rate_amount:"Setting_rate_amount__8taAb",notificationText:"Setting_notificationText__zlYV4",container:"Setting_container__615vl",integrationItem:"Setting_integrationItem__QomWr",integrationInfo:"Setting_integrationInfo__Q5WxT",textContainer:"Setting_textContainer__F06y6",name:"Setting_name__5x82I",description:"Setting_description__eQiGU",actions:"Setting_actions__VcmYi",button:"Setting_button__vxkwl",connectButton:"Setting_connectButton__dlai2",disconnectButton:"Setting_disconnectButton__DCIrL",switch:"Setting_switch__gWzA3",slider:"Setting_slider__O8xP5",faqContainer:"Setting_faqContainer__Jkia5",faqItem:"Setting_faqItem__BNUFK",question:"Setting_question__rb5yp",arrow:"Setting_arrow__ieSxj",answer:"Setting_answer__qKXy8",ContachUstxt:"Setting_ContachUstxt__oek0P",Email_div:"Setting_Email_div__uks_e",emailtxtt:"Setting_emailtxtt__fEAYU",popupDisplay:"Setting_popupDisplay__pvyWB",popupHide:"Setting_popupHide__gCHf_",popupContent:"Setting_popupContent__xKBoI",closeButton:"Setting_closeButton__Nh4Mc",formGroup:"Setting_formGroup__GKMKS",submitButton:"Setting_submitButton__lFwMv",greycrossicon:"Setting_greycrossicon__7i5qL",popheadertxt:"Setting_popheadertxt__TxB_5",AddClientButton:"Setting_AddClientButton__Oodq7",comment_div_2:"Setting_comment_div_2__qArG7",Title_div_2:"Setting_Title_div_2__v_kVz"}},447:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var a=s(8570);let i=(0,a.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/settings/services/page.js`),{__esModule:n,$$typeof:o}=i;i.default;let l=(0,a.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/settings/services/page.js#default`)},639:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});let a={src:"/_next/static/media/profilepic.3f1ee2ee.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVMaXGTpMBlRT/l7fbMyM+GamaabFbj7ffR3uyckIbz///bzMjh7PO6mqO5vcaAX0aQe3TiwrHMvbRYRkVlcIP/3cf/+Pb/z62SpL8tHACPn76qn5vTqZTg6vTt+v/U2N3Xs56wkIRbWW08P1C+iX2rdGylf3JDLSaMZFOYSFH1AAAAHHRSTlMAsPOx/Pz88i4tLfmv7LO1+P74tez++P70LfSzCGkLmwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUeJwVxkUWgCAABcAPknYnImHd/4Q+ZzVAWta804CSrBnuXiGxmTMiEMj9MOcb5z/+euKK3DIjaCBQBXeTpxrQVTtuCz6e+gSP35lbvAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,54,401,985,373,93],()=>s(6875));module.exports=a})();