(()=>{var e={};e.id=349,e.ids=[349],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3530:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>u,tree:()=>o}),a(6717),a(8295),a(5866);var i=a(3191),n=a(8716),s=a(7922),l=a.n(s),r=a(5231),_={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(_[e]=()=>r[e]);a.d(t,_);let o=["",{children:["Clients",{children:["edit",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,6717)),"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Clients/edit/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,8295)),"/Users/testingdemo/Desktop/projects/woofitweb/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/testingdemo/Desktop/projects/woofitweb/src/app/Clients/edit/page.js"],c="/Clients/edit/page",p={require:a,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/Clients/edit/page",pathname:"/Clients/edit",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},3151:(e,t,a)=>{Promise.resolve().then(a.bind(a,3490))},3490:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var i=a(326),n=a(7577),s=a(8498),l=a(8310),r=a.n(l),_=a(8365),o=a(477);a(6632);var d=a(9488),c=a.n(d),p=a(7707);let u=({show:e,handleClose:t})=>i.jsx("div",{className:e?c().popupDisplay2:c().popupHide,children:(0,i.jsxs)("div",{className:c().popupContent,style:{marginTop:80},children:[(0,i.jsxs)("div",{className:c().space_div,children:[i.jsx("div",{style:{width:60}}),i.jsx("div",{className:c().popheadertxt,children:"Credit Card"}),i.jsx("div",{onClick:t,className:c().greycrossicon,children:i.jsx(_.aM,{})})]}),i.jsx(o.Z,{name:"Card Holder Name",placeholder:"Eloise Robinson"}),i.jsx(o.Z,{name:"Card Number",img5:_.QH,placeholder:"0000   0000    0000     0000"}),(0,i.jsxs)("div",{className:c().space_div,style:{paddingLeft:10,paddingRight:10},children:[i.jsx(o.Z,{name:"Expiry Date",placeholder:"MM/YY",inputtxt:c().cvvcodetxt}),i.jsx(o.Z,{placeholder:"000",name:"CVV code",inputtxt:c().cvvcodetxt})]}),i.jsx(p.Z,{name:"Save",txtstyle:{color:"#FFF"},onClick:()=>{t()},additionalMainDivClassName:c().AddClientButton})]})});var m=a(6226);a(4757);var g=a(5047),h=a(1590),v=a(7033),x=a(7196),C=a(3703);a(123);var P=a(9814);let b=({setSelectedItem:e})=>{let t=(0,g.useRouter)(),a=(0,g.useSearchParams)().get("id"),[s,l]=(0,n.useState)(!1),[d,c]=(0,n.useState)(),[p,b]=(0,n.useState)(),[j,A]=(0,n.useState)([]),[y,f]=(0,n.useState)(),[w,N]=(0,n.useState)(null),S=async()=>{b((await (0,h.IS)(a)).data)},D=async e=>{let t=await (0,h.jS)(e);A(t?.data?.data)};(0,n.useEffect)(()=>{S()},[a]),(0,n.useEffect)(()=>{d&&D(d)},[d]);let T=async e=>{let t=e.target.files[0];if(t){let e=new FileReader;e.onload=e=>{N(e.target.result)},e.readAsDataURL(t);let a=new FormData;a.append("image",t);try{let e=await (0,h.El)(a);f({image:e?.data?.filename})}catch(e){console.log(e,"====error")}}},B=(0,C.TA)({initialValues:{name:"",email:"",mobileNumber:"",DOB:"",comment:"",trainingGoal:"",rate:"",gender:""},onSubmit:async e=>{try{e.DOB!==p.clientDetails?.DOB&&(e.DOB=(0,v.fc)(e.DOB)),y&&(e.clientImage=y.image);try{if(p.clientDetails._id){let t=await (0,h.Ab)(p.clientDetails._id,e);console.log(t,"======heteteget"),S(a)}else console.log("please select id")}catch(e){console.log(e)}t.push(`/clients/clientsInfo?id=${p.clientDetails?._id}`)}catch(e){console.log(e,"====")}}});return(0,n.useEffect)(()=>{p&&B.setValues({name:p.clientDetails?.name||"",email:p.clientDetails?.email||"",mobileNumber:p.clientDetails?.mobileNumber||"",DOB:p.clientDetails?.DOB||"",comment:p.clientDetails?.comment||"",rate:p.clientDetails?.rate?._id||"",trainingGoal:p.clientDetails?.trainingGoal||"",gender:p.clientDetails?.gender||""})},[p]),i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:r().containor,children:[i.jsx("div",{className:r().headerr,children:(0,i.jsxs)("div",{className:r().clietdiv,children:[i.jsx("div",{onClick:()=>t.push(`/Clients/clientsInfo?id=${a}`),style:{cursor:"pointer"},children:i.jsx(_.IT,{})}),i.jsx("div",{className:r().ClientStyle,children:"Edit Client Profile"})]})}),(0,i.jsxs)("div",{className:r().main_div__,children:[(0,i.jsxs)("div",{className:r().left_div_profile,children:[i.jsx(m.default,{height:107,width:107,src:w||p?.clientDetails?.clientImage,style:{borderRadius:60}}),i.jsx("div",{className:r().changePhoto,onClick:()=>{document.getElementById("fileInput").click()},children:"Change Photo"}),i.jsx("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:T,accept:"image/*"})]}),(0,i.jsxs)("form",{onSubmit:B.handleSubmit,children:[(0,i.jsxs)("div",{className:r().right_div_data,children:[i.jsx(o.Z,{name:"Name",id:"name",onChange:B.handleChange,value:B.values.name}),(0,i.jsxs)("div",{className:r().rateAndGoal,children:[i.jsx(o.Z,{name:"Date of Birth",type:"date",id:"DOB",onChange:B.handleChange,value:(0,v.Y7)(B.values.DOB),RightIcon:_.$$,additionalcontainer:r().rate_input_div}),i.jsx("div",{style:{width:80}}),i.jsx(x.Z,{label:"Gender",id:"gender",data:P.sy,value:B.values.gender,onChange:B.handleChange,selectedId:B.values.gender,RightIcon:_.dt})]}),(0,i.jsxs)("div",{className:r().row_div,style:{marginTop:20},children:[i.jsx(o.Z,{input_parent_div_prop:r().calender_input,additionalMainDivClassName:r().additionalMainDiv,additionalinput_field:r().additionalInputField,inputtxt:r().invoicenumber,name:"Email",id:"email",placeholder:"michelle.rivera@example.com",value:B?.values?.email}),i.jsx("div",{style:{width:40}}),i.jsx(o.Z,{img2:!0,input_parent_div_prop:r().calender_input,additionalMainDivClassName:r().additionalMainDiv,additionalinput_field:r().additionalInputField,inputtxt:r().invoicenumber,type:"number",name:"Phone",id:"mobileNumber",value:B?.values?.mobileNumber})]}),(0,i.jsxs)("div",{className:r().rateAndGoal,children:[i.jsx(x.Z,{label:"Rate",id:"rate",data:j?.getAllRatesData,value:B.values.rate,onChange:B.handleChange,selectedId:B?.values?.rate,RightIcon:_.dt}),i.jsx("div",{style:{width:80}}),i.jsx(x.Z,{label:"Training Goal",id:"trainingGoal",data:P.eV,value:B.values.trainingGoal,onChange:B.handleChange,selectedId:B?.values?.trainingGoal,RightIcon:_.dt})]}),i.jsx("div",{className:r().Credit_Card,children:"Credit Card"}),(0,i.jsxs)("div",{className:r().add_card,onClick:()=>{l(!0)},children:[i.jsx(_.pO,{}),"Add"]}),i.jsx(o.Z,{name:"Comment",id:"comment",additionalMainDivClassName:r().comment_div_2,onChange:B.handleChange,value:B.values.comment})]}),i.jsx("button",{type:"submit",disabled:!B.dirty||!B.isValid||B.isSubmitting,className:r().SaveButton,children:"Save"})]})]}),s&&i.jsx(u,{show:s,handleClose:()=>{l(!1)}})]})})};function j(){return i.jsx(n.Suspense,{fallback:i.jsx("div",{children:"Loading..."}),children:i.jsx(s.default,{children:i.jsx(b,{})})})}},7707:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var i=a(326),n=a(5878),s=a.n(n);let l=e=>i.jsx(i.Fragment,{children:i.jsx("div",{onClick:e?.onClick,style:e?.style,className:`${s().button_main_div} ${e.additionalMainDivClassName}`,children:i.jsx("div",{style:e?.txtstyle,className:s().buttonname,children:e?.name})})})},7196:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var i=a(326);a(7577);var n=a(5878),s=a.n(n);let l=function({label:e,buttonText:t,data:a,onChange:n,id:l,selectedId:r,RightIcon:_,LeftIcon:o,props:d,RightBox:c,space:p}){return(0,i.jsxs)("div",{style:d?.style,className:`${s().container} ${d?.additionalcontainer}`,children:[i.jsx("label",{className:s().label,children:e}),p&&i.jsx("dev",{style:{marginTop:16}}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("select",{className:`${s().content} ${d?.additionalcontent}`,id:l,value:r,onChange:n,children:[i.jsx("option",{children:"Select Option"}),a&&a?.map((e,t)=>i.jsx("option",{value:e?._id,children:e?.name},e?._id))]}),t&&i.jsx("div",{className:`${s().button} ${d?.additionalbuttontext}`,children:t}),c&&i.jsx("div",{className:s().rightboxdiv,children:i.jsx(c,{})})]})]})}},6632:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var i=a(326);a(7577);var n=a(5878),s=a.n(n);let l=({label:e,text:t,buttonText:a,RightIcon:n,LeftIcon:l,props:r,RightBox:_,space:o,onClick:d})=>(0,i.jsxs)("div",{style:r?.style,className:`${s().container} ${r?.additionalcontainer}`,children:[i.jsx("label",{className:s().label,children:e}),o&&i.jsx("dev",{style:{marginTop:16}}),(0,i.jsxs)("div",{className:`${s().content} ${r?.additionalcontent}`,onClick:d,children:[l&&i.jsx(l,{className:s().icon}),i.jsx("span",{className:s().text,children:t}),a&&i.jsx("div",{className:`${s().button} ${r?.additionalbuttontext}`,children:a}),n&&i.jsx(n,{className:s().icon}),_&&i.jsx("div",{className:s().rightboxdiv,children:i.jsx(_,{})})]})]})},8498:(e,t,a)=>{"use strict";a.d(t,{default:()=>A});var i=a(326),n=a(6226),s=a(4348),l=a(2229),r=a(6041),_=a.n(r),o=a(639),d=a(7577);let c=()=>{let[e,t]=(0,d.useState)();return(0,d.useEffect)(()=>{},[]),(0,i.jsxs)("header",{className:_().header,children:[i.jsx("div",{style:{width:"30%"},children:(0,i.jsxs)("div",{className:_().searchContainer,children:[i.jsx(l.Z,{}),i.jsx("input",{type:"text",placeholder:"Search Users",className:_().searchInput})]})}),(0,i.jsxs)("div",{className:_().userInfo,children:[i.jsx(n.default,{height:40,width:40,src:e?.image,alt:o.Z,className:_().avatar}),(0,i.jsxs)("span",{className:_().hellousername,children:["Hello ",e?.name,"!"]}),i.jsx(s.Z,{className:_().Notificationimg})]})]})};a(434);var p=a(5047),u=a(4302),m=a(2682),g=a(8586);a(9859);var h=a(3784),v=a(1653),x=a(4492),C=a(462);let P=()=>{let e=(0,p.useRouter)(),t=(0,p.usePathname)(),a=t=>{e.push(`/${t}`)},n=e=>t.startsWith(`/${e}/`)||t===`/${e}`,s=[{id:1,icon:i.jsx(u.Z,{}),label:"Dashboard",url:"dashboard"},{id:2,icon:i.jsx(m.Z,{}),label:"Schedule",url:"schedule"},{id:3,icon:i.jsx(g.Z,{}),label:"Clients",url:"Clients"},{id:5,icon:i.jsx(h.Z,{}),label:"Payments",url:"payments"},{id:6,icon:i.jsx(v.Z,{}),label:"Reports",url:"reports"},{id:7,icon:i.jsx(x.Z,{}),label:"Settings",url:"settings"}];return(0,i.jsxs)("div",{className:_().sidebar,children:[i.jsx("div",{className:_().logo,children:i.jsx(C.Z,{})}),i.jsx("ul",{className:_().navList,children:s.map(e=>i.jsx("li",{className:`${_().navItem} ${n(e.url)?_().selected:""}`,onClick:()=>a(e.url),children:i.jsx("div",{children:(0,i.jsxs)("div",{className:_().dashboradimage,children:[e.icon,i.jsx("span",{className:_().navLabel,children:e.label})]})})},e.id))})]})};var b=a(7826),j=a.n(b);let A=({children:e,setSelectedItem:t})=>(0,i.jsxs)("div",{className:j().layout,children:[i.jsx(P,{}),(0,i.jsxs)("div",{className:j().mainContent,children:[i.jsx(c,{}),i.jsx("div",{className:j().content,children:e})]})]})},7033:(e,t,a)=>{"use strict";function i(e){let t=new Date(e),a=String(t.getDate()).padStart(2,"0"),i=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();return`${n}-${i}-${a}`}function n(e){let t=new Date,a=new Date(e),i=t.getFullYear()-a.getFullYear(),n=t.getMonth()-a.getMonth();return(n<0||0===n&&t.getDate()<a.getDate())&&i--,i}function s(e){let[t,a,i]=e.split("-").map(Number);return new Date(Date.UTC(t,a-1,i)).toISOString()}a.d(t,{Fw:()=>n,Y7:()=>i,fc:()=>s})},9814:(e,t,a)=>{"use strict";a.d(t,{eV:()=>n,sy:()=>i});let i=[{_id:1,name:"Male"},{_id:2,name:"Female"},{_id:3,name:"Other"}],n=[{_id:1,name:"Personal Training"},{_id:2,name:"Strength Training"},{_id:3,name:"Cardio Fitness"},{_id:4,name:"Weight Loss"},{_id:5,name:"Muscle Building"},{_id:6,name:"Bodybuilding"},{_id:7,name:"CrossFit"},{_id:8,name:"Functional Training"},{_id:9,name:"HIIT (High-Intensity Interval Training)"},{_id:10,name:"Pilates"},{_id:11,name:"Yoga"},{_id:12,name:"Zumba"},{_id:13,name:"Sports Conditioning"},{_id:14,name:"Athletic Performance"},{_id:15,name:"Endurance Training"},{_id:16,name:"Marathon Training"},{_id:17,name:"Triathlon Training"},{_id:18,name:"Cycling Training"},{_id:19,name:"Swimming Training"},{_id:20,name:"Running Coaching"},{_id:21,name:"Boxing Fitness"},{_id:22,name:"Kickboxing"},{_id:23,name:"Martial Arts Training"},{_id:24,name:"Flexibility Training"},{_id:25,name:"Mobility Training"},{_id:26,name:"Rehabilitation Training"},{_id:27,name:"Postnatal Fitness"},{_id:28,name:"Prenatal Fitness"},{_id:29,name:"Senior Fitness"},{_id:30,name:"Youth Fitness"},{_id:31,name:"Group Fitness"},{_id:32,name:"Dance Fitness"},{_id:33,name:"Barre Workouts"},{_id:34,name:"Meditation Coaching"},{_id:35,name:"Nutrition Coaching"},{_id:36,name:"Lifestyle Coaching"},{_id:37,name:"Wellness Coaching"},{_id:38,name:"Behavioral Change Coaching"},{_id:39,name:"Stress Management"},{_id:40,name:"Holistic Fitness"}]},8310:e=>{e.exports={containor:"ClientPage_containor__cJUNN",headerr:"ClientPage_headerr__D15pn",clietdiv:"ClientPage_clietdiv__PwLuG",ClientStyle:"ClientPage_ClientStyle__EZIB5",archive_div:"ClientPage_archive_div__Vqxip",main_div__:"ClientPage_main_div____egZmC",left_div_profile:"ClientPage_left_div_profile__GnQHP",right_div_data:"ClientPage_right_div_data__95oeq",usernamee:"ClientPage_usernamee__6Hker",gender_age:"ClientPage_gender_age__1L_2M",lineee:"ClientPage_lineee__TnijU",callicon_background:"ClientPage_callicon_background__uGPLJ",EditProfilee_buttoon:"ClientPage_EditProfilee_buttoon__XxyLF",tabs:"ClientPage_tabs__UT7aM",activeTab:"ClientPage_activeTab__9KJF_",activeTabtext:"ClientPage_activeTabtext__vH_r6",tabtxt:"ClientPage_tabtxt__lcS70",tabdiv:"ClientPage_tabdiv__jcSZS",container:"ClientPage_container__Um_UT",rateAndGoal:"ClientPage_rateAndGoal___7cp1",commentSection:"ClientPage_commentSection__jWNdp",label:"ClientPage_label__46L15",textarea:"ClientPage_textarea__qJYD0",rate_input_div:"ClientPage_rate_input_div__NaJGp",comment_div:"ClientPage_comment_div__K_kpn",comment_div_2:"ClientPage_comment_div_2__nGU5e",invoicenumber:"ClientPage_invoicenumber__sGtOb",calender_input:"ClientPage_calender_input__swIhp",row_div:"ClientPage_row_div__HStBr",measurements:"ClientPage_measurements__YHMGS",tabs2:"ClientPage_tabs2__7iM81",tab:"ClientPage_tab__0bAUB",activeTab2:"ClientPage_activeTab2__0pq_E",main_photo_div:"ClientPage_main_photo_div__911Dc",photos:"ClientPage_photos__fHbOC",image_body:"ClientPage_image_body__3pb_H",bodysizestyle:"ClientPage_bodysizestyle__rhbGu",metrics:"ClientPage_metrics__RLVxV",metricItem:"ClientPage_metricItem__Ymc_o",metricHeader:"ClientPage_metricHeader__Maq81",metricTitle:"ClientPage_metricTitle__NSX5Y",metricValue:"ClientPage_metricValue__2_rCS",positiveChange:"ClientPage_positiveChange__b0GU_",negativeChange:"ClientPage_negativeChange__2zPUB",chart:"ClientPage_chart__CbzPL",space_view:"ClientPage_space_view__a_1J3",metric_value:"ClientPage_metric_value__IN3km",header_txtt:"ClientPage_header_txtt__zgjMc",session:"ClientPage_session__BqkKi",Todayline:"ClientPage_Todayline__ZzcXl",sessionDetails:"ClientPage_sessionDetails__VazAN",sessionCard2:"ClientPage_sessionCard2__sIxlT",sessionCard:"ClientPage_sessionCard__e_rTy",date_background:"ClientPage_date_background__6Rkh5",row:"ClientPage_row__h3nUH",amount_txt:"ClientPage_amount_txt__C_XVo",email_input:"ClientPage_email_input__nTfVy",email_text:"ClientPage_email_text__uzWoi",Credit_Card:"ClientPage_Credit_Card__drt2B",add_card:"ClientPage_add_card__ACib_",SaveButton:"ClientPage_SaveButton__Btl5K",changePhoto:"ClientPage_changePhoto__W_Gxt"}},9488:e=>{e.exports={popupDisplay:"Popups_popupDisplay__Mb5zd",popupHide:"Popups_popupHide__JhrfR",popupContent:"Popups_popupContent__eNvd1",comment_div_2:"Popups_comment_div_2__ARude",space_div:"Popups_space_div__voGyE",popheadertxt:"Popups_popheadertxt__coDpd",TextWithButtonstyle:"Popups_TextWithButtonstyle__VuEJn",calender_input:"Popups_calender_input__4Ppln",invoicenumber:"Popups_invoicenumber__erH_p",UsdInput:"Popups_UsdInput__TOhNm",UsdInput2:"Popups_UsdInput2__TbZwK",row_div:"Popups_row_div__OmaSl",Clientaddtxt:"Popups_Clientaddtxt__F5TDW",paymentTypetxt:"Popups_paymentTypetxt__oQK3E",cashDiv:"Popups_cashDiv__NKGMN",noncash:"Popups_noncash__wTad6",SaveButton:"Popups_SaveButton__ISyFJ",AddClientButton:"Popups_AddClientButton__8kZQD",Cashtxt:"Popups_Cashtxt__gug7q",noncashtxt:"Popups_noncashtxt__WkLKz",selectedIcon:"Popups_selectedIcon___CqBB",unselectedIcon:"Popups_unselectedIcon__vZFBx",NewTrainingTabsDiv:"Popups_NewTrainingTabsDiv__oFL8W",on_the_date:"Popups_on_the_date__wgz_k",for_the_period:"Popups_for_the_period__aQw3Z",greycrossicon:"Popups_greycrossicon__GOoc5",popupHeader:"Popups_popupHeader__cK__R",backButton:"Popups_backButton__xmYnp",searchButton:"Popups_searchButton__mtnTb",clientList:"Popups_clientList__by2KY",clientItem:"Popups_clientItem__hxl7i",avatar:"Popups_avatar__rIzuQ",clientInfo:"Popups_clientInfo__z2MYM",selectClientsButton:"Popups_selectClientsButton__XegN7",row:"Popups_row__FoquQ",albhabate_txt:"Popups_albhabate_txt__sUIOe",albhabate_txt2:"Popups_albhabate_txt2__7Gvs1",Clientsname:"Popups_Clientsname__7xw04",Select_GroupButton:"Popups_Select_GroupButton__YXaeb",avatargroup:"Popups_avatargroup__XkYDy",group_count:"Popups_group_count__kBV__",days_of_training_txt:"Popups_days_of_training_txt__5VaSh",timer_parent_div:"Popups_timer_parent_div__bHMP0",day:"Popups_day__HfVFJ",switchContainer:"Popups_switchContainer__iQDhZ",switchButton:"Popups_switchButton__uaLM3",on:"Popups_on__SE04X",off:"Popups_off__behCE",switchCircle:"Popups_switchCircle__khL5g",day_div:"Popups_day_div__9J3pl",add_buttn:"Popups_add_buttn__zbdBR",client_name_style:"Popups_client_name_style__J2wcR",cvvcodetxt:"Popups_cvvcodetxt__7TqjX",client_name_style2:"Popups_client_name_style2__wbn_X",countingClient:"Popups_countingClient__gb4Jq"}},7826:e=>{e.exports={dashboradContainor:"Woofit_dashboradContainor___bc1A",leftSide:"Woofit_leftSide__6YKms",rightSide:"Woofit_rightSide__Pyvhy",sidebar:"Woofit_sidebar__sRETv",layout:"Woofit_layout__pEB5u",mainContent:"Woofit_mainContent__Hzgj_",header:"Woofit_header__dmUlm",content:"Woofit_content__Ql0mi"}},6717:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>l,__esModule:()=>s,default:()=>r});var i=a(8570);let n=(0,i.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/Clients/edit/page.js`),{__esModule:s,$$typeof:l}=n;n.default;let r=(0,i.createProxy)(String.raw`/Users/testingdemo/Desktop/projects/woofitweb/src/app/Clients/edit/page.js#default`)},4757:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i={src:"/_next/static/media/profileee.e11342b5.png",height:321,width:322,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEW0wch7gYSGkpiotb2Sfn1zYF4CBglMaXGoh4KtvsSUqa+moJ+ksrtgTVHtxroIBwdEOTlXXF1OPUCdsLidsbiXrLJ6dXMOCw1BMjcVGBp1f4QFBQWxkY/SrKRqVVayuLy/z9aot7vGnp7HpqDs0M2qpajFsakTDQ6eMpUMAAAAHHRSTlP0/K4y/PsrAP2zK/7q7/7nrPn+66ro9rDx7jIxb2va3wAAAAlwSFlzAAAhOAAAITgBRZYxYAAAAEVJREFUeJwFwQMCwDAABLCrMVvl+P8fLoGydCaGKdjprX0Ew5j1ffFkMDzaOw6gjO7URQIoEU502UA2IfTftkPJtlqXQ/2QQgQ2ySHAEAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},639:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i={src:"/_next/static/media/profilepic.3f1ee2ee.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVMaXGTpMBlRT/l7fbMyM+GamaabFbj7ffR3uyckIbz///bzMjh7PO6mqO5vcaAX0aQe3TiwrHMvbRYRkVlcIP/3cf/+Pb/z62SpL8tHACPn76qn5vTqZTg6vTt+v/U2N3Xs56wkIRbWW08P1C+iX2rdGylf3JDLSaMZFOYSFH1AAAAHHRSTlMAsPOx/Pz88i4tLfmv7LO1+P74tez++P70LfSzCGkLmwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUeJwVxkUWgCAABcAPknYnImHd/4Q+ZzVAWta804CSrBnuXiGxmTMiEMj9MOcb5z/+euKK3DIjaCBQBXeTpxrQVTtuCz6e+gSP35lbvAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[948,54,401,985,855,373,93,737],()=>a(3530));module.exports=i})();