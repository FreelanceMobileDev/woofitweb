(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,1781],{64098:function(e,t,n){Promise.resolve().then(n.bind(n,72950))},17850:function(e,t,n){"use strict";n.d(t,{lp:function(){return b},pT:function(){return A},sS:function(){return N},Ab:function(){return x},iE:function(){return P},Cn:function(){return f},IS:function(){return h},Qg:function(){return p},hI:function(){return m},Ai:function(){return v},jS:function(){return g},zj:function(){return j},El:function(){return c},x4:function(){return u},z2:function(){return r},mD:function(){return y},ck:function(){return C},CZ:function(){return _}});var i=n(38472);let a=i.Z.create({headers:{Accept:"application/json","Content-Type":"application/json"}}),s=i.Z.create({headers:{"Content-Type":"multipart/form-data"}});a.interceptors.request.use(e=>{let t=localStorage.getItem("token");return"".concat(t)&&(e.headers.Authorization=t),e},e=>{Promise.reject(e)}),a.interceptors.response.use(e=>e,async e=>{let{response:t}=e;return console.log("error---->apimain",t.data),Promise.reject(e)}),s.interceptors.request.use(e=>{var t,n,i;let a=[],s=null==a?void 0:null===(i=a.cookies)||void 0===i?void 0:null===(n=i.userDetails)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.access_token,l="Bearer ".concat(s);return l&&(e.headers.Authorization=l),e},e=>{Promise.reject(e)}),s.interceptors.response.use(e=>e,async e=>{let{response:t}=e;return Promise.reject(e)});let l="http://51.20.168.126:5879/api/",o="POST",d="DELETE",c=e=>(console.log("imageUpload--->",e),s({baseURL:l,method:o,url:"user/upload-image",data:e})),r=e=>(console.log("register--->",e),a({baseURL:l,method:o,url:"user/sign-up",data:e})),u=e=>(console.log("login_payload--->",e),a({baseURL:l,method:o,url:"user/login",data:e})),_=(e,t)=>a({baseURL:l,method:o,url:"".concat("user/update-professional-details","?id=").concat(t),data:e}),p=(e,t)=>a({baseURL:l,method:"GET",url:"".concat("rates/get-client","?isArchive=").concat(e).concat(t)}),m=e=>(console.log("GET_GROUP_LIST->",e),a({baseURL:l,method:"GET",url:"".concat("group/getGroupList","?coachId=").concat(e)})),v=()=>(console.log("getProfile->"),a({baseURL:l,method:"GET",url:"".concat("user/get-profile")})),h=e=>(console.log("getClientDetails->",e),a({baseURL:l,method:"GET",url:"".concat("rates/getClientDetails","?id=").concat(e)})),g=e=>(console.log("getRates-====???>",e),a({baseURL:l,method:"GET",url:"".concat("rates/get-rates","?coachId=").concat(e)})),x=(e,t)=>(console.log("createOrUpdateClient-====>>>>>>>>",e,t),a({baseURL:l,method:o,url:"".concat("rates/create-or-update-client","?id=").concat(e),data:t})),j=e=>(console.log("getTranningSession--->",e),a({baseURL:l,method:"GET",url:"".concat("tranning/getTrainingSession","?").concat(e)})),A=(e,t)=>(console.log("createAndUpdateRate--->",e,t),a({baseURL:l,method:o,url:"".concat("rates/create-or-update-rates","?").concat(t),data:e})),C=e=>(console.log("updateProfile--->>>>>",e),a({baseURL:l,method:o,url:"".concat("user/update-profile"),data:e})),f=e=>(console.log("deleteRate--->>>>>",e),a({baseURL:l,method:d,url:"".concat("rates/delete-rates","?id=").concat(e)})),b=e=>(console.log("DashboardData--->>>>>",e),a({baseURL:l,method:"GET",url:"".concat("user/getDashboardData?").concat(e)})),y=(e,t)=>(console.log("DashboardData--->>>>>",e),a({baseURL:l,method:"PUT",url:"".concat("group/createUpdateGroup","?id=").concat(t),data:e})),N=e=>(console.log("createGroup--->>>>>",e),a({baseURL:l,method:o,url:"group/createUpdateGroup",data:e})),P=e=>(console.log("DashboardData--->>>>>",e),a({baseURL:l,method:d,url:"".concat("group/deleteGroup","?id=").concat(e)}))},72950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var i=n(57437),a=n(55801),s=n(2265),l=n(23131),o=n.n(l),d=n(17850),c=n(57170),r=n(16463),u=n(24581),_=n(78614),p=e=>{let{activeTab:t}=e,n=(0,r.useRouter)(),[l,p]=(0,s.useState)([]),[m,v]=(0,s.useState)(!1),h=async e=>{try{v(!0);let t=await (0,d.Qg)(e);p(t.data.data.getAllClientData)}catch(e){console.log(e,"====error")}finally{v(!1)}};return console.log(t),(0,s.useEffect)(()=>{"Clients"===t?h(0):h(1)},[t]),(0,i.jsxs)("div",{children:[(0,i.jsx)(_.Z,{loading:m}),(0,i.jsxs)("table",{className:o().table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("input",{type:"checkbox"})}),(0,i.jsx)("th",{children:"Image"}),(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Email"}),(0,i.jsx)("th",{children:"Rate"}),(0,i.jsx)("th",{children:"Training Goal"}),(0,i.jsx)("th",{children:"Gender"}),(0,i.jsx)("th",{children:"Action"})]})}),(0,i.jsx)("tbody",{children:0==l.length?"Data Not Found":l&&(null==l?void 0:l.map(e=>{var t,s,l;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("tr",{className:o().temppp,onClick:()=>n.push("/Clients/clientsInfo?id=".concat(null==e?void 0:e._id)),children:[(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"checkbox"})}),(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:(null==e?void 0:e.clientImage)?null==e?void 0:e.clientImage:c.Z.src,alt:c.Z.src,className:null===o()||void 0===o()?void 0:o().clientImage})}),(0,i.jsx)("td",{className:null===o()||void 0===o()?void 0:o().name_client,children:null==e?void 0:e.name}),(0,i.jsx)("td",{className:null===o()||void 0===o()?void 0:o().email_client,children:null==e?void 0:e.email}),(0,i.jsx)("td",{className:null===o()||void 0===o()?void 0:o().email_client,children:(null==e?void 0:e.rate)!==null?null==e?void 0:null===(t=e.rate)||void 0===t?void 0:t.name:"No Name"}),(0,i.jsx)("td",{className:null===o()||void 0===o()?void 0:o().email_client,children:(null===u.eV||void 0===u.eV?void 0:null===(s=u.eV.find(t=>(null==t?void 0:t._id)==(null==e?void 0:e.trainingGoal)))||void 0===s?void 0:s.name)||"NAN"}),(0,i.jsx)("td",{className:null===o()||void 0===o()?void 0:o().email_client,children:(null===u.sy||void 0===u.sy?void 0:null===(l=u.sy.find(t=>(null==t?void 0:t._id)==(null==e?void 0:e.gender)))||void 0===l?void 0:l.name)||"NAN"}),(0,i.jsxs)("td",{className:null===o()||void 0===o()?void 0:o().flex_row_div,children:[(0,i.jsx)(a.dY,{className:null===o()||void 0===o()?void 0:o().actionIcon,onClick:()=>n.push("Clients/edit?id=".concat(item_id))}),(0,i.jsx)("div",{style:{width:33}}),(0,i.jsx)(a.pJ,{className:null===o()||void 0===o()?void 0:o().actionIcon})]})]},null==e?void 0:e._id)})}))})]})]})},m=n(95955),v=n.n(m);n(3412);var h=n(52035),g=n(62949),x=n(66648),j=n(9621),A=n(69040),C=n(95956),f=e=>{let{data:t,show:n,handleClose:l}=e,[o,r]=(0,s.useState)([]),[u,p]=(0,s.useState)("Group"),[m,f]=(0,s.useState)(!0),[b,y]=(0,s.useState)((null==t?void 0:t.comment)||""),[N,P]=(0,s.useState)((null==t?void 0:t.name)||""),[T,I]=(0,s.useState)((null==t?void 0:t.clients)?null==t?void 0:t.clients:[]),w=async()=>{var e,t;f(!0);let n=await (0,d.Qg)("0");r(null==n?void 0:null===(t=n.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.getAllClientData),f(!1)};(0,s.useEffect)(()=>{w()},[]);let S=e=>{G(null==e?void 0:e._id)?I(T.filter(t=>t._id!==(null==e?void 0:e._id))):I([...T,e])},G=e=>T.find(t=>t._id===e),U=async()=>{var e,n;f(!0);let i={name:N,clients:T.map(e=>null==e?void 0:e._id),comment:b},a={};if(null==t?void 0:t._id)a=await (0,d.mD)(i,null==t?void 0:t._id);else{let e=localStorage.getItem("id");i.coachId=e,a=await (0,d.sS)(i)}f(!1),(null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.success)&&(l(),C.Am.success(null==a?void 0:null===(n=a.data)||void 0===n?void 0:n.message))};return(0,i.jsxs)("div",{className:n?v().popupDisplay:v().popupHide,children:[m&&(0,i.jsx)(_.Z,{loader:m}),(0,i.jsxs)("div",{className:v().popupContent,children:[(0,i.jsxs)("div",{className:v().space_div,children:[(0,i.jsx)("div",{style:{width:60}}),(0,i.jsx)("div",{className:v().popheadertxt,children:t?"Edit Group":"Add Group"}),(0,i.jsx)("div",{onClick:l,className:v().greycrossicon,children:(0,i.jsx)(a.aM,{})})]}),(0,i.jsx)(g.Z,{name:"Group Name",onChange:e=>{P(e.target.value)},value:N}),(0,i.jsxs)("div",{style:{marginLeft:10},children:[(0,i.jsxs)("div",{className:v().space_div,style:{marginTop:18},children:[(0,i.jsx)("div",{className:v().Clientaddtxt,children:"Groups"}),(0,i.jsx)("div",{onClick:()=>{"Group"===u?p("All"):p("Group")},className:v().add_buttn,children:"Group"===u?"Add":"Cancel"})]}),"Group"===u&&(0,i.jsx)("div",{className:v().scroll_div,children:T&&(null==T?void 0:T.length)>0?T&&(null==T?void 0:T.map((e,t)=>(0,i.jsxs)("div",{className:v().space_div,style:{marginBottom:10,marginTop:10},children:[(0,i.jsxs)("div",{className:v().row_div,children:[(0,i.jsx)(x.default,{src:(null==e?void 0:e.clientImage)?null==e?void 0:e.clientImage:c.Z,alt:e.name,width:50,height:50,style:{borderRadius:25}}),(0,i.jsx)("div",{className:v().client_name_style,children:e.name})]}),(0,i.jsx)("div",{onClick:()=>{S(e)},children:(0,i.jsx)(a.aM,{})})]},t))):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:{display:"flex",alignItems:"center",alignSelf:"center",marginTop:"20%"},children:"Select Clients"})})}),"All"===u&&(0,i.jsx)("div",{className:v().scroll_div,children:null==o?void 0:o.map((e,t)=>(0,i.jsxs)("div",{className:v().space_div,style:{marginBottom:10,marginTop:10},children:[(0,i.jsxs)("div",{className:v().row_div,children:[(0,i.jsx)(x.default,{src:(null==e?void 0:e.clientImage)?null==e?void 0:e.clientImage:c.Z,alt:e.name,width:50,height:50,style:{borderRadius:25}}),(0,i.jsx)("div",{className:v().client_name_style,children:e.name})]}),(0,i.jsx)("div",{children:(0,i.jsx)(x.default,{onClick:()=>{S(e)},src:G(null==e?void 0:e._id)?j.Z:A.Z,height:15,width:15})})]},t))})]}),(0,i.jsx)(g.Z,{name:"Comment",additionalMainDivClassName:v().comment_div_2,onChange:e=>{y(e.target.value)},value:b}),(0,i.jsx)(h.Z,{onClick:()=>{U()},name:"Save",txtstyle:{color:"#FFF"},additionalMainDivClassName:v().SaveButton})]})]})},b=e=>{let{updateGroup:t,setUpdateGroup:n}=e,[l,c]=(0,s.useState)(),[r,u]=(0,s.useState)(!1),[p,m]=(0,s.useState)(!1),[v,h]=(0,s.useState)(null),g=e=>{h(e),m(!0)};(0,s.useEffect)(()=>{t&&(n(!1),x())},[t]);let x=async()=>{try{u(!0);let e=localStorage.getItem("id"),t=await (0,d.hI)(e);c(t.data.data.data)}catch(e){console.log(e,"====error")}finally{u(!1)}};(0,s.useEffect)(()=>{x()},[p]);let j=async e=>{window.confirm("Are you sure you want to Delete group?")&&(u(!0),await (0,d.iE)(e),x(),u(!1))},A=e=>{var t,n;let{group:s}=e;return(0,i.jsxs)("div",{className:o().groupItem,children:[(0,i.jsxs)("div",{className:o().groupContent,children:[(0,i.jsx)("div",{className:o().groupTitle,children:null==s?void 0:s.name}),(0,i.jsxs)("div",{style:{display:"flex",marginTop:25,alignItems:"center"},children:[(0,i.jsxs)("div",{className:o().groupClients,children:[null==s?void 0:null===(t=s.clients)||void 0===t?void 0:t.length," Clients"]}),(0,i.jsx)("div",{className:o().groupImages,children:(null==s?void 0:s.clients)&&(null==s?void 0:null===(n=s.clients)||void 0===n?void 0:n.map((e,t)=>(0,i.jsx)("img",{src:"".concat(e.clientImage?e.clientImage:"/images/profilepic.png"),alt:"/images/profilepic.png",className:o().clientImage},t)))})]})]}),(0,i.jsxs)("div",{className:o().groupActions,children:[(0,i.jsx)("div",{onClick:()=>{g(s)},children:(0,i.jsx)(a.dY,{className:o().actionIcon})}),(0,i.jsx)("div",{style:{width:20}}),(0,i.jsx)("div",{onClick:()=>{j(null==s?void 0:s._id)},children:(0,i.jsx)(a.pJ,{className:o().actionIcon})})]})]})};return(0,i.jsxs)("div",{className:o().groupsContainer,children:[(0,i.jsx)(_.Z,{loading:r}),l&&(null==l?void 0:l.map((e,t)=>(0,i.jsx)(A,{group:e},t))),p&&(0,i.jsx)(f,{data:v,show:p,handleClose:()=>{m(!1)}})]})},y=n(32105),N=function(){let e=(0,r.useRouter)(),[t,n]=(0,s.useState)("Clients"),[l,d]=(0,s.useState)(!1),[c,u]=(0,s.useState)(!1),_=e=>{n(e)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(y.default,{children:(0,i.jsxs)("div",{className:o().DashboardContent,style:{paddingTop:10,flexDirection:"column"},children:[(0,i.jsxs)("div",{style:{padding:20},children:[(0,i.jsxs)("div",{className:o().clientsHeaderdiv,children:[(0,i.jsx)("div",{className:o().clientstxtt,children:"Clients"==t?"Clients":"ArchivedClients"==t?"Archived Clients":"Groups"}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(a._b,{}),(0,i.jsx)("div",{className:o().Archived_Clients,onClick:()=>{_("ArchivedClients")},children:"Archived Clients"}),(0,i.jsx)("div",{className:o().Add_Client,style:{cursor:"pointer"},onClick:()=>"Clients"===t||"ArchivedClients"===t?e.push("Clients/edit"):d(!0),children:"Clients"===t||"ArchivedClients"===t?"Add a client":"Add Groups"})]})]}),(0,i.jsxs)("div",{className:o().Groups_Clients,children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{className:"Clients"===t?o().clientsButton:o().groups_Button,onClick:()=>_("Clients"),children:"Clients"}),(0,i.jsx)("div",{className:"Groups"===t?o().clientsButton:o().groups_Button,onClick:()=>_("Groups"),children:"Groups"})]}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(a.W1,{}),(0,i.jsx)("div",{style:{width:40}}),(0,i.jsx)(a.k1,{})]})]})]}),("Clients"===t||"ArchivedClients"===t)&&(0,i.jsx)(p,{activeTab:t}),"Groups"===t&&(0,i.jsx)("div",{style:{height:"100vh"},children:(0,i.jsx)(b,{updateGroup:c,setUpdateGroup:u})}),l&&(0,i.jsx)(f,{show:l,handleClose:()=>{d(!1),u(!0)}})]})})})}},62949:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(57437);n(2265);var a=n(55801),s={src:"/_next/static/media/ausflag.aad1d05f.png"},l=n(76667),o=n.n(l);n(39589),n(53311);var d=e=>{let{style:t,input_parent_div_prop:n,inputtxt:l,name:d,img5:c,img1:r,img2:u,img3:_,type:p,id:m,placeholder:v,additionalMainDivClassName:h,additionalinput_field:g,onChange:x,value:j,handleButtonClick:A,ref:C}=e,f=new Date().toISOString().split("T")[0];return(0,i.jsxs)("div",{style:t,className:"".concat(o().input_parent_div," ").concat(n),children:[(0,i.jsxs)("div",{className:o().space_div,children:[(0,i.jsx)("div",{className:"".concat(o().inputtxt," ").concat(l),children:d}),c&&(0,i.jsx)("div",{className:"".concat(o().inputtxt," ").concat(l),style:{marginRight:10},children:(0,i.jsx)(a.QH,{})})]}),(0,i.jsxs)("div",{className:"".concat(o().input_main_div," ").concat(h),children:[r&&r,u&&(0,i.jsxs)("div",{className:o().leftImage,children:[(0,i.jsx)("img",{src:s.src,width:"27",height:"20"}),(0,i.jsx)(a.dt,{})]}),_&&(0,i.jsx)("div",{className:o().lefttxtx,children:"USD"}),(0,i.jsx)("input",{style:{cursor:"pointer",width:"100%"},onClick:A,ref:C,type:p,id:m,placeholder:v,className:"".concat(o().input_field," ").concat(g),onChange:x,value:j,max:f}),u&&u]})]})}},52035:function(e,t,n){"use strict";var i=n(57437),a=n(76667),s=n.n(a);t.Z=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{onClick:null==e?void 0:e.onClick,style:null==e?void 0:e.style,className:"".concat(s().button_main_div," ").concat(e.additionalMainDivClassName),children:(0,i.jsx)("div",{style:null==e?void 0:e.txtstyle,className:s().buttonname,children:null==e?void 0:e.name})})})},3412:function(e,t,n){"use strict";var i=n(57437);n(2265);var a=n(76667),s=n.n(a);t.Z=e=>{let{label:t,text:n,buttonText:a,RightIcon:l,LeftIcon:o,props:d,RightBox:c,space:r,onClick:u}=e;return(0,i.jsxs)("div",{style:null==d?void 0:d.style,className:"".concat(s().container," ").concat(null==d?void 0:d.additionalcontainer),children:[(0,i.jsx)("label",{className:s().label,children:t}),r&&(0,i.jsx)("dev",{style:{marginTop:16}}),(0,i.jsxs)("div",{className:"".concat(s().content," ").concat(null==d?void 0:d.additionalcontent),onClick:u,children:[o&&(0,i.jsx)(o,{className:s().icon}),(0,i.jsx)("span",{className:s().text,children:n}),a&&(0,i.jsx)("div",{className:"".concat(s().button," ").concat(null==d?void 0:d.additionalbuttontext),children:a}),l&&(0,i.jsx)(l,{className:s().icon}),c&&(0,i.jsx)("div",{className:s().rightboxdiv,children:(0,i.jsx)(c,{})})]})]})}},24581:function(e,t,n){"use strict";n.d(t,{eV:function(){return s},p9:function(){return a},sy:function(){return i}});let i=[{_id:1,name:"Male"},{_id:2,name:"Female"},{_id:3,name:"Other"}],a=[{_id:1,name:"1"},{_id:2,name:"2"},{_id:3,name:"3"},{_id:4,name:"4"},{_id:5,name:"5"},{_id:6,name:"6"},{_id:7,name:"7"},{_id:8,name:"8"},{_id:9,name:"9"},{_id:10,name:"10+"}],s=[{_id:1,name:"Personal Training"},{_id:2,name:"Strength Training"},{_id:3,name:"Cardio Fitness"},{_id:4,name:"Weight Loss"},{_id:5,name:"Muscle Building"},{_id:6,name:"Bodybuilding"},{_id:7,name:"CrossFit"},{_id:8,name:"Functional Training"},{_id:9,name:"HIIT (High-Intensity Interval Training)"},{_id:10,name:"Pilates"},{_id:11,name:"Yoga"},{_id:12,name:"Zumba"},{_id:13,name:"Sports Conditioning"},{_id:14,name:"Athletic Performance"},{_id:15,name:"Endurance Training"},{_id:16,name:"Marathon Training"},{_id:17,name:"Triathlon Training"},{_id:18,name:"Cycling Training"},{_id:19,name:"Swimming Training"},{_id:20,name:"Running Coaching"},{_id:21,name:"Boxing Fitness"},{_id:22,name:"Kickboxing"},{_id:23,name:"Martial Arts Training"},{_id:24,name:"Flexibility Training"},{_id:25,name:"Mobility Training"},{_id:26,name:"Rehabilitation Training"},{_id:27,name:"Postnatal Fitness"},{_id:28,name:"Prenatal Fitness"},{_id:29,name:"Senior Fitness"},{_id:30,name:"Youth Fitness"},{_id:31,name:"Group Fitness"},{_id:32,name:"Dance Fitness"},{_id:33,name:"Barre Workouts"},{_id:34,name:"Meditation Coaching"},{_id:35,name:"Nutrition Coaching"},{_id:36,name:"Lifestyle Coaching"},{_id:37,name:"Wellness Coaching"},{_id:38,name:"Behavioral Change Coaching"},{_id:39,name:"Stress Management"},{_id:40,name:"Holistic Fitness"}]},95955:function(e){e.exports={popupDisplay:"Popups_popupDisplay__Mb5zd",popupHide:"Popups_popupHide__JhrfR",popupContent:"Popups_popupContent__eNvd1",comment_div_2:"Popups_comment_div_2__ARude",space_div:"Popups_space_div__voGyE",popheadertxt:"Popups_popheadertxt__coDpd",TextWithButtonstyle:"Popups_TextWithButtonstyle__VuEJn",calender_input:"Popups_calender_input__4Ppln",invoicenumber:"Popups_invoicenumber__erH_p",UsdInput:"Popups_UsdInput__TOhNm",UsdInput2:"Popups_UsdInput2__TbZwK",row_div:"Popups_row_div__OmaSl",Clientaddtxt:"Popups_Clientaddtxt__F5TDW",paymentTypetxt:"Popups_paymentTypetxt__oQK3E",cashDiv:"Popups_cashDiv__NKGMN",noncash:"Popups_noncash__wTad6",AddClient:"Popups_AddClient__AB2z9",SaveButton:"Popups_SaveButton__ISyFJ",button_main_div:"Popups_button_main_div__kJ2Yh",AddClientButton:"Popups_AddClientButton__8kZQD",Cashtxt:"Popups_Cashtxt__gug7q",noncashtxt:"Popups_noncashtxt__WkLKz",selectedIcon:"Popups_selectedIcon___CqBB",unselectedIcon:"Popups_unselectedIcon__vZFBx",NewTrainingTabsDiv:"Popups_NewTrainingTabsDiv__oFL8W",on_the_date:"Popups_on_the_date__wgz_k",for_the_period:"Popups_for_the_period__aQw3Z",greycrossicon:"Popups_greycrossicon__GOoc5",popupHeader:"Popups_popupHeader__cK__R",backButton:"Popups_backButton__xmYnp",searchButton:"Popups_searchButton__mtnTb",clientList:"Popups_clientList__by2KY",clientItem:"Popups_clientItem__hxl7i",avatar:"Popups_avatar__rIzuQ",clientInfo:"Popups_clientInfo__z2MYM",selectClientsButton:"Popups_selectClientsButton__XegN7",row:"Popups_row__FoquQ",albhabate_txt:"Popups_albhabate_txt__sUIOe",albhabate_txt2:"Popups_albhabate_txt2__7Gvs1",Clientsname:"Popups_Clientsname__7xw04",Select_GroupButton:"Popups_Select_GroupButton__YXaeb",avatargroup:"Popups_avatargroup__XkYDy",group_count:"Popups_group_count__kBV__",days_of_training_txt:"Popups_days_of_training_txt__5VaSh",timer_parent_div:"Popups_timer_parent_div__bHMP0",day:"Popups_day__HfVFJ",switchContainer:"Popups_switchContainer__iQDhZ",switchButton:"Popups_switchButton__uaLM3",on:"Popups_on__SE04X",off:"Popups_off__behCE",switchCircle:"Popups_switchCircle__khL5g",day_div:"Popups_day_div__9J3pl",add_buttn:"Popups_add_buttn__zbdBR",client_name_style:"Popups_client_name_style__J2wcR",cvvcodetxt:"Popups_cvvcodetxt__7TqjX",client_name_style2:"Popups_client_name_style2__wbn_X",countingClient:"Popups_countingClient__gb4Jq",scroll_div:"Popups_scroll_div__dOmvq"}},76667:function(e){e.exports={input_main_div:"Componet_input_main_div__qJ3RN",input_field:"Componet_input_field__iAcbd",inputtxt:"Componet_inputtxt__TehRX",input_image:"Componet_input_image__VcY_2",input_image2:"Componet_input_image2__8wm8A",button_main_div:"Componet_button_main_div__qp8l2",buttonname:"Componet_buttonname__4q1il",container:"Componet_container___wKOZ",label:"Componet_label__fxOOt",content:"Componet_content__OF11S",text:"Componet_text__6PWyy",button:"Componet_button__UyklT",icon:"Componet_icon__vkpGw",rightboxdiv:"Componet_rightboxdiv__MLjqh",input_parent_div:"Componet_input_parent_div__mIXFj",leftImage:"Componet_leftImage__FGU26",lefttxtx:"Componet_lefttxtx__iRIcn",space_div:"Componet_space_div__TOZt2"}},69040:function(e,t){"use strict";t.Z={src:"/_next/static/media/Checkbox@2x.00d74f45.png",height:36,width:36,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEVnc4FMaXH///9qcYTTLV8JAAAABHRSTlNPAAI5HdfEewAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACFJREFUeJxjYGYAA2YGBkYwYGBgYGRiZGQCM+AiOKVg2gEHmAA1Q/T9zAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},9621:function(e,t){"use strict";t.Z={src:"/_next/static/media/Checkflieddbox.e9499eda.png",height:36,width:36,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUUtNgTrM8Tr88Ur9IKq887vNm/6vOj4O6O2OnLnyfHAAAAA3RSTlP1dnaJen+cAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMElEQVR4nC2LMRIAIAyDoiHV/7/Yq8rCAhq+TKmFJYPZQSSsskWqCiyT1dmL2n8fBx+dAN5rEUlAAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[9802,5496,7615,781,5288,8596,8762,7899,8472,7052,5801,2105,2971,7023,1744],function(){return e(e.s=64098)}),_N_E=e.O()}]);