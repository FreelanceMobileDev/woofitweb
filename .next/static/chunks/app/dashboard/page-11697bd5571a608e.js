(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7702],{45255:function(e,a,t){Promise.resolve().then(t.bind(t,80608))},17850:function(e,a,t){"use strict";t.d(a,{lp:function(){return E},pT:function(){return b},sS:function(){return D},Ab:function(){return x},iE:function(){return C},Cn:function(){return y},IS:function(){return p},Qg:function(){return h},hI:function(){return v},Ai:function(){return g},jS:function(){return j},zj:function(){return f},El:function(){return c},x4:function(){return u},z2:function(){return d},mD:function(){return T},ck:function(){return N},CZ:function(){return m}});var n=t(38472);let s=n.Z.create({headers:{Accept:"application/json","Content-Type":"application/json"}}),o=n.Z.create({headers:{"Content-Type":"multipart/form-data"}});s.interceptors.request.use(e=>{let a=localStorage.getItem("token");return"".concat(a)&&(e.headers.Authorization=a),e},e=>{Promise.reject(e)}),s.interceptors.response.use(e=>e,async e=>{let{response:a}=e;return console.log("error---->apimain",a.data),Promise.reject(e)}),o.interceptors.request.use(e=>{var a,t,n;let s=[],o=null==s?void 0:null===(n=s.cookies)||void 0===n?void 0:null===(t=n.userDetails)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.access_token,l="Bearer ".concat(o);return l&&(e.headers.Authorization=l),e},e=>{Promise.reject(e)}),o.interceptors.response.use(e=>e,async e=>{let{response:a}=e;return Promise.reject(e)});let l="http://51.20.168.126:5879/api/",r="POST",i="DELETE",c=e=>(console.log("imageUpload--->",e),o({baseURL:l,method:r,url:"user/upload-image",data:e})),d=e=>(console.log("register--->",e),s({baseURL:l,method:r,url:"user/sign-up",data:e})),u=e=>(console.log("login_payload--->",e),s({baseURL:l,method:r,url:"user/login",data:e})),m=(e,a)=>s({baseURL:l,method:r,url:"".concat("user/update-professional-details","?id=").concat(a),data:e}),h=(e,a)=>s({baseURL:l,method:"GET",url:"".concat("rates/get-client","?isArchive=").concat(e).concat(a)}),v=e=>(console.log("GET_GROUP_LIST->",e),s({baseURL:l,method:"GET",url:"".concat("group/getGroupList","?coachId=").concat(e)})),g=()=>(console.log("getProfile->"),s({baseURL:l,method:"GET",url:"".concat("user/get-profile")})),p=e=>(console.log("getClientDetails->",e),s({baseURL:l,method:"GET",url:"".concat("rates/getClientDetails","?id=").concat(e)})),j=e=>(console.log("getRates-====???>",e),s({baseURL:l,method:"GET",url:"".concat("rates/get-rates","?coachId=").concat(e)})),x=(e,a)=>(console.log("createOrUpdateClient-====>>>>>>>>",e,a),s({baseURL:l,method:r,url:"".concat("rates/create-or-update-client","?id=").concat(e),data:a})),f=e=>(console.log("getTranningSession--->",e),s({baseURL:l,method:"GET",url:"".concat("tranning/getTrainingSession","?").concat(e)})),b=(e,a)=>(console.log("createAndUpdateRate--->",e,a),s({baseURL:l,method:r,url:"".concat("rates/create-or-update-rates","?").concat(a),data:e})),N=e=>(console.log("updateProfile--->>>>>",e),s({baseURL:l,method:r,url:"".concat("user/update-profile"),data:e})),y=e=>(console.log("deleteRate--->>>>>",e),s({baseURL:l,method:i,url:"".concat("rates/delete-rates","?id=").concat(e)})),E=e=>(console.log("DashboardData--->>>>>",e),s({baseURL:l,method:"GET",url:"".concat("user/getDashboardData?").concat(e)})),T=(e,a)=>(console.log("DashboardData--->>>>>",e),s({baseURL:l,method:"PUT",url:"".concat("group/createUpdateGroup","?id=").concat(a),data:e})),D=e=>(console.log("createGroup--->>>>>",e),s({baseURL:l,method:r,url:"group/createUpdateGroup",data:e})),C=e=>(console.log("DashboardData--->>>>>",e),s({baseURL:l,method:i,url:"".concat("group/deleteGroup","?id=").concat(e)}))},80608:function(e,a,t){"use strict";t.r(a);var n=t(57437),s=t(32105),o=t(2265),l=t(9973);t(13882);var r=t(65351),i=t(25530),c=t(80441),d=t(52649),u=t(89950),m=t(63957);t(68247);var h=t(22051),v=t(20862),g=t(23131),p=t.n(g),j=t(57170),x=t(66648),f=t(17850),b=t(78614),N=t(19212),y=t.n(N);a.default=()=>{let e=[{name:"Eloise Robinson",avatar:j.Z},{name:"Franky Williamson",avatar:j.Z},{name:"Bronson Glass",avatar:j.Z},{name:"Monroe Benjamin",avatar:j.Z}],a=[{name:"Eloise Robinson",action:"purchased the",item:"Yearly Subscription",time:"1 hour ago",avatar:j.Z},{name:"Frank Williamson",action:"has completed his training.",item:"",time:"2 hours ago",avatar:j.Z},{name:"Glass Bronson",action:"has completed his training.",item:"",time:"2 hours ago",avatar:j.Z},{name:"Monroe Benjamin",action:"purchased the",item:"Monthly Subscription",time:"3 hours ago",avatar:j.Z}],[t,g]=(0,o.useState)(),[N,E]=(0,o.useState)(!1),[T,D]=(0,o.useState)([]),C=async e=>{try{E(!0);let a=await (0,f.lp)(e);g(a.data.data)}catch(e){console.log(e)}finally{E(!1)}};(0,o.useEffect)(()=>{C()},[]);let M=async e=>{try{var a,t;E(!0);let n=await (0,f.zj)(e),s=function(e){let a={};e.forEach(e=>{let t=y()(e.startDate).format("MMMM D");a[t]||(a[t]=[]),a[t].push(e)});let t=Object.keys(a).map(e=>({date:e,events:a[e]}));return t.sort((e,a)=>{let t=y()().format("MMMM D");return e.date===t?-1:a.date===t?1:y()(e.date,"MMMM D").diff(y()(a.date,"MMMM D"))}),t}(null==n?void 0:null===(t=n.data)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.data);D(s)}catch(e){console.log(e,"====error")}finally{E(!1)}};(0,o.useEffect)(()=>{M()},[]);let R=e=>{let a,t;switch(e){case"monthly":a=y()().startOf("month").format("YYYY-MM-DD"),t=y()().endOf("month").format("YYYY-MM-DD");break;case"yearly":a=y()().startOf("year").format("YYYY-MM-DD"),t=y()().endOf("year").format("YYYY-MM-DD")}C("startDate=".concat(a,"&endDate=").concat(t))},U=[{id:0,backgroundColor:"#FFE0E0",icon:(0,n.jsx)(r.Z,{})},{id:1,backgroundColor:"#E0F7FF",icon:(0,n.jsx)(m.Z,{})},{id:2,backgroundColor:"#E0FFE1",icon:(0,n.jsx)(l.Z,{})}];return(0,n.jsxs)(s.default,{children:[(0,n.jsx)(b.Z,{loading:N}),(0,n.jsxs)("div",{className:p().DashboardContenttwo,children:[(0,n.jsxs)("div",{className:p().summary,children:[(0,n.jsxs)("div",{className:p().headerdashboardContent,children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(d.Z,{})," ",(0,n.jsx)("h2",{className:p().month_year_txt,children:"August 2024"}),(0,n.jsx)(h.Z,{})]}),(0,n.jsxs)("div",{className:p().dateSelector,children:[(0,n.jsx)("div",{className:p().Monthlytxt,onClick:()=>R("monthly"),children:"Monthly"})," ",(0,n.jsx)(i.Z,{})]})]}),(0,n.jsxs)("div",{className:p().summarydashboard,children:[(0,n.jsxs)("div",{className:p().summaryCarddashboard,style:{backgroundColor:"#E3FACF"},children:[(0,n.jsxs)("div",{className:p().Total_Earnings_card,children:[(0,n.jsx)("p",{className:p().Total_Earnings,style:{color:"#67C537"},children:"Total Earnings"}),(0,n.jsx)(c.Z,{})]}),(0,n.jsxs)("div",{className:p().Eraning_price,children:["$",null==t?void 0:t.totalEarning]})]}),(0,n.jsxs)("div",{className:p().summaryCarddashboard,style:{backgroundColor:"#CFF3FD"},children:[(0,n.jsxs)("div",{className:p().Total_Earnings_card,children:[(0,n.jsx)("div",{className:p().Total_Earnings,style:{color:"#14AED1"},children:"New Clients"}),(0,n.jsx)(u.Z,{})]}),(0,n.jsx)("div",{className:p().Eraning_price,children:null==t?void 0:t.clientsCount})]}),(0,n.jsxs)("div",{className:p().summaryCarddashboard,style:{backgroundColor:"#E0EAFE"},children:[(0,n.jsxs)("div",{className:p().Total_Earnings_card,children:[(0,n.jsx)("div",{className:p().Total_Earnings,style:{color:"#5465F0"},children:"Sessions"}),(0,n.jsx)(v.Z,{})]}),(0,n.jsx)("div",{className:p().Eraning_price,children:null==t?void 0:t.sessionsCount})]})]}),(0,n.jsxs)("div",{className:p().upcomingSessions,children:[(0,n.jsx)("h4",{children:"Upcoming Sessions"}),(0,n.jsx)("div",{className:p().session,children:T.length>0?T&&T.map(e=>{var a,t;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:p().session,children:[(0,n.jsx)("div",{className:p().TodayTxtdiv,children:(0,n.jsx)("span",{children:e.date==y()().format("MMMM D")?"Today":e.date})}),(0,n.jsx)("div",{className:p().sessionDetails,children:null==e?void 0:null===(t=e.events)||void 0===t?void 0:null===(a=t.sort((e,a)=>{var t,n;let s=y()(null==e?void 0:e.startDate),o=y()(null==e?void 0:null===(t=e.schedule[0])||void 0===t?void 0:t.startTime,"HH:mm"),l=s.set({hour:o.hour(),minute:o.minute(),second:o.second(),millisecond:o.millisecond()}),r=y()(null==a?void 0:a.startDate),i=y()(null==a?void 0:null===(n=a.schedule[0])||void 0===n?void 0:n.startTime,"HH:mm");return l-r.set({hour:i.hour(),minute:i.minute(),second:i.second(),millisecond:i.millisecond()})}))||void 0===a?void 0:a.map((e,a)=>{var t,s,o,r,i;return(0,n.jsx)(n.Fragment,{children:(null==e?void 0:e.clients.length)>0||(null==e?void 0:e.group.length)>0?(0,n.jsxs)("div",{className:p().sessionCard2,children:[(0,n.jsx)("p",{style:{marginBottom:20,width:120},children:(i=null==e?void 0:null===(t=e.schedule[0])||void 0===t?void 0:t.startTime,y()(i,"HH:mm").format("h:mm A"))}),(0,n.jsxs)("div",{className:p().sessionCard,style:{backgroundColor:function(e){let a=U.find(a=>a.id===e);return a?a.backgroundColor:"#E0FFE1"}(a)},children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[function(e){let a=U.find(a=>a.id===e);return a?a.icon:(0,n.jsx)(l.Z,{})}(a),(null==e?void 0:e.group.length)>0?null==e?void 0:e.group[0].clients.map(e=>(0,n.jsx)(x.default,{src:(null==e?void 0:e.clientImage.length)>0?null==e?void 0:e.clientImage:j.Z,style:{borderRadius:60},height:25,width:25,className:p().avatarimagee})):(0,n.jsx)(x.default,{src:null==e?void 0:null===(s=e.clients[0])||void 0===s?void 0:s.clientImage,height:25,width:25,className:p().avatarimagee}),(0,n.jsx)("p",{style:{marginLeft:10},children:(null==e?void 0:e.group.length)>0?null==e?void 0:null===(o=e.group[0])||void 0===o?void 0:o.name:null==e?void 0:null===(r=e.clients[0])||void 0===r?void 0:r.name})]}),(0,n.jsx)(h.Z,{})]},a)]}):(0,n.jsx)("p",{children:"No Trainings"})})})})]})})}):(0,n.jsx)("p",{children:"No Trainings"})})]})]}),(0,n.jsxs)("div",{className:p().newclientSidebar,children:[(0,n.jsxs)("div",{className:p().newClients,children:[(0,n.jsx)("h3",{children:"New Clients"}),(0,n.jsx)("ul",{children:e.map((e,a)=>(0,n.jsxs)("li",{className:p().clientItem,children:[(0,n.jsx)(x.default,{src:e.avatar,height:40,width:40,alt:e.name,className:p().avatar}),(0,n.jsx)("span",{children:e.name})]},a))})]}),(0,n.jsxs)("div",{className:p().recentActivities,children:[(0,n.jsx)("h3",{children:"Recent Activities"}),(0,n.jsx)("ul",{children:a.map((e,a)=>(0,n.jsxs)("li",{className:p().activityItem,children:[(0,n.jsx)(x.default,{src:e.avatar,height:40,width:40,alt:e.name,className:p().avatar}),(0,n.jsxs)("div",{className:p().activityText,children:[(0,n.jsx)("span",{className:p().clientName,children:e.name}),(0,n.jsxs)("span",{className:p().actionText,children:[" ",e.action," "]}),(0,n.jsx)("span",{className:p().itemText,children:e.item}),(0,n.jsx)("div",{className:p().timeText,children:e.time})]})]},a))})]})]})]})]})}}},function(e){e.O(0,[9802,5496,7615,781,6990,5288,8596,8762,8472,7052,2105,2971,7023,1744],function(){return e(e.s=45255)}),_N_E=e.O()}]);